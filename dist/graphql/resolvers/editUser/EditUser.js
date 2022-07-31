"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditUserResolver = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const User_1 = require("../../../db/entity/user/User");
let EditUserArgs = class EditUserArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], EditUserArgs.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], EditUserArgs.prototype, "password", void 0);
EditUserArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], EditUserArgs);
let EditUserResolver = class EditUserResolver {
    editUser(_a) {
        var { id } = _a, rest = __rest(_a, ["id"]);
        return __awaiter(this, void 0, void 0, function* () {
            yield User_1.User.update({ id }, Object.assign({}, rest));
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [EditUserArgs]),
    __metadata("design:returntype", Promise)
], EditUserResolver.prototype, "editUser", null);
EditUserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], EditUserResolver);
exports.EditUserResolver = EditUserResolver;
