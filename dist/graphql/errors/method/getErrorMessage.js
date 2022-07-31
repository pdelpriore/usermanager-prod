"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getErrorMessage = void 0;
const Errors_1 = require("../Errors");
const getErrorMessage = (errorType) => Errors_1.ErrorTypes[errorType];
exports.getErrorMessage = getErrorMessage;
