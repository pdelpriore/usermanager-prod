"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorEnum = void 0;
const Errors_1 = require("../Errors");
var ErrorType;
(function (ErrorType) {
    ErrorType["ARGUMENT_VALIDATION_ERROR"] = "ArgumentValidationError";
    ErrorType["QUERY_FAILED_ERROR"] = "QueryFailedError";
})(ErrorType || (ErrorType = {}));
const getErrorEnum = (errorKey, errorType) => errorType === ErrorType.ARGUMENT_VALIDATION_ERROR
    ? Errors_1.ErrorResponse[errorKey]
    : errorType === ErrorType.QUERY_FAILED_ERROR
        ? Errors_1.ErrorResponse[Errors_1.ErrorCodes[errorKey]]
        : null;
exports.getErrorEnum = getErrorEnum;
