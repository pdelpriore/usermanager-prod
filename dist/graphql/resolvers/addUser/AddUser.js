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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddUserResolver = void 0;
const class_validator_1 = require("class-validator");
const type_graphql_1 = require("type-graphql");
const AdminProfile_1 = require("../../../db/entity/profile/AdminProfile");
const UserProfile_1 = require("../../../db/entity/profile/UserProfile");
const User_1 = require("../../../db/entity/user/User");
let UserInputType = class UserInputType {
};
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputType.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputType.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserInputType.prototype, "type", void 0);
UserInputType = __decorate([
    (0, type_graphql_1.InputType)()
], UserInputType);
let AdminProfileInputType = class AdminProfileInputType {
};
__decorate([
    (0, class_validator_1.MinLength)(3),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], AdminProfileInputType.prototype, "login", void 0);
AdminProfileInputType = __decorate([
    (0, type_graphql_1.InputType)()
], AdminProfileInputType);
let UserProfileInputType = class UserProfileInputType {
};
__decorate([
    (0, class_validator_1.MinLength)(3),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileInputType.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.MinLength)(3),
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], UserProfileInputType.prototype, "lastName", void 0);
UserProfileInputType = __decorate([
    (0, type_graphql_1.InputType)()
], UserProfileInputType);
let AddUserResolver = class AddUserResolver {
    addUser(userInput, adminProfileInput, userProfileInput) {
        return __awaiter(this, void 0, void 0, function* () {
            const profileName = userInput.type === User_1.UserType.ADMIN ? "adminProfile" : "userProfile";
            const profile = userInput.type === User_1.UserType.ADMIN
                ? AdminProfile_1.AdminProfile.create(Object.assign({}, adminProfileInput))
                : UserProfile_1.UserProfile.create(Object.assign({}, userProfileInput));
            yield profile.save();
            const user = User_1.User.create(Object.assign(Object.assign({}, userInput), { [profileName]: profile }));
            yield user.save();
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userInput", () => UserInputType)),
    __param(1, (0, type_graphql_1.Arg)("adminProfileInput", () => AdminProfileInputType, { nullable: true })),
    __param(2, (0, type_graphql_1.Arg)("userProfileInput", () => UserProfileInputType, { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [UserInputType,
        AdminProfileInputType,
        UserProfileInputType]),
    __metadata("design:returntype", Promise)
], AddUserResolver.prototype, "addUser", null);
AddUserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AddUserResolver);
exports.AddUserResolver = AddUserResolver;
