"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Chart_1 = require("../entity/chart/Chart");
const AdminProfile_1 = require("../entity/profile/AdminProfile");
const UserProfile_1 = require("../entity/profile/UserProfile");
const User_1 = require("../entity/user/User");
exports.default = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DB_URL,
    synchronize: true,
    logging: true,
    entities: [Chart_1.Chart, AdminProfile_1.AdminProfile, UserProfile_1.UserProfile, User_1.User],
});
