"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const getErrorEnum_1 = require("../errors/method/getErrorEnum");
const handleErrors = (_, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield next();
    }
    catch (err) {
        if (err instanceof type_graphql_1.ArgumentValidationError) {
            const errorEnums = err.validationErrors.map(({ property, constraints }) => {
                const errorKey = `${Object.keys(constraints)[0]}_${property}`.toUpperCase();
                return (0, getErrorEnum_1.getErrorEnum)(errorKey, "ArgumentValidationError");
            });
            errorEnums.forEach((errorEnum) => {
                throw new Error(errorEnum);
            });
        }
        else if (err instanceof typeorm_1.QueryFailedError) {
            const errDetail = err.driverError.detail;
            const targetProperty = errDetail.slice(errDetail.indexOf("(") + 1, errDetail.indexOf(")"));
            const errorKey = `${err.driverError.code}-${targetProperty}`;
            const errorEnum = (0, getErrorEnum_1.getErrorEnum)(errorKey, "QueryFailedError");
            throw new Error(errorEnum);
        }
        else {
            throw err;
        }
    }
});
exports.default = handleErrors;
