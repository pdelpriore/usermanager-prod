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
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserType = void 0;
const type_graphql_1 = require("type-graphql");
const typeorm_1 = require("typeorm");
const Chart_1 = require("../chart/Chart");
const AdminProfile_1 = require("../profile/AdminProfile");
const UserProfile_1 = require("../profile/UserProfile");
var UserType;
(function (UserType) {
    UserType["ADMIN"] = "ADMIN";
    UserType["USER"] = "USER";
})(UserType = exports.UserType || (exports.UserType = {}));
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.Column)({ type: "enum", enum: UserType, default: UserType.USER }),
    __metadata("design:type", String)
], User.prototype, "type", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "createdAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], User.prototype, "updatedAt", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => AdminProfile_1.AdminProfile, { nullable: true }),
    (0, typeorm_1.OneToOne)(() => AdminProfile_1.AdminProfile, (adminProfile) => adminProfile.user),
    (0, typeorm_1.JoinColumn)({ name: "adminProfileId" }),
    __metadata("design:type", AdminProfile_1.AdminProfile)
], User.prototype, "adminProfile", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => UserProfile_1.UserProfile, { nullable: true }),
    (0, typeorm_1.OneToOne)(() => UserProfile_1.UserProfile, (userProfile) => userProfile.user),
    (0, typeorm_1.JoinColumn)({ name: "userProfileId" }),
    __metadata("design:type", UserProfile_1.UserProfile)
], User.prototype, "userProfile", void 0);
__decorate([
    (0, type_graphql_1.Field)(() => [Chart_1.Chart], { nullable: true }),
    (0, typeorm_1.OneToMany)(() => Chart_1.Chart, (chart) => chart.user),
    __metadata("design:type", Array)
], User.prototype, "charts", void 0);
User = __decorate([
    (0, typeorm_1.Entity)(),
    (0, type_graphql_1.ObjectType)()
], User);
exports.User = User;
