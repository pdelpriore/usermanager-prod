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
exports.AddChartResolver = void 0;
const type_graphql_1 = require("type-graphql");
const Chart_1 = require("../../../db/entity/chart/Chart");
const User_1 = require("../../../db/entity/user/User");
let AddChartArgs = class AddChartArgs {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], AddChartArgs.prototype, "id", void 0);
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", Number)
], AddChartArgs.prototype, "stepNumber", void 0);
AddChartArgs = __decorate([
    (0, type_graphql_1.ArgsType)()
], AddChartArgs);
let AddChartResolver = class AddChartResolver {
    addChart({ id, stepNumber }) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = (yield User_1.User.findOne({ where: { id } }));
            const chart = Chart_1.Chart.create({ stepNumber, user });
            yield chart.save();
            return true;
        });
    }
};
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [AddChartArgs]),
    __metadata("design:returntype", Promise)
], AddChartResolver.prototype, "addChart", null);
AddChartResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], AddChartResolver);
exports.AddChartResolver = AddChartResolver;
