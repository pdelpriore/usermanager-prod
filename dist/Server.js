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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const dbConnect_1 = __importDefault(require("./db/config/dbConnect"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const getErrorMessage_1 = require("./graphql/errors/method/getErrorMessage");
const handleErrors_1 = __importDefault(require("./graphql/middleware/handleErrors"));
const AddChart_1 = require("./graphql/resolvers/addChart/AddChart");
const AddUser_1 = require("./graphql/resolvers/addUser/AddUser");
const EditUser_1 = require("./graphql/resolvers/editUser/EditUser");
const GetUsers_1 = require("./graphql/resolvers/getUsers/GetUsers");
const RemoveUser_1 = require("./graphql/resolvers/removeUser/RemoveUser");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "../", "build")));
app.get("*", (_, res) => res.sendFile(path_1.default.join(__dirname, "../", "build", "index.html")));
const runServer = () => __awaiter(void 0, void 0, void 0, function* () {
    const port = process.env.PORT || 4000;
    const corsOptions = {
        origin: process.env.CORS_ORIGIN_URL,
    };
    try {
        const dbStatus = yield dbConnect_1.default.initialize();
        if (dbStatus)
            console.log("Connected to database");
        const schema = yield (0, type_graphql_1.buildSchema)({
            resolvers: [
                AddChart_1.AddChartResolver,
                AddUser_1.AddUserResolver,
                EditUser_1.EditUserResolver,
                GetUsers_1.getUsersResolver,
                RemoveUser_1.RemoveUserResolver,
            ],
            globalMiddlewares: [handleErrors_1.default],
        });
        const apolloServer = new apollo_server_express_1.ApolloServer({
            schema,
            context: (context) => context,
            formatError: ({ message }) => ({ message: (0, getErrorMessage_1.getErrorMessage)(message) }),
        });
        yield apolloServer.start();
        apolloServer.applyMiddleware({ app, cors: corsOptions });
        app.listen(port, () => console.log("Server is running"));
    }
    catch (err) {
        if (err)
            console.log("err", err);
    }
});
runServer();
