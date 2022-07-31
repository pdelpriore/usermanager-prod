"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorTypes = exports.ErrorResponse = exports.ErrorCodes = void 0;
exports.ErrorCodes = {
    "23505-email": "UNIQUE_EMAIL",
};
var ErrorResponse;
(function (ErrorResponse) {
    ErrorResponse["ISEMAIL_EMAIL"] = "ISEMAIL_EMAIL";
    ErrorResponse["MINLENGTH_PASSWORD"] = "MINLENGTH_PASSWORD";
    ErrorResponse["MINLENGTH_LOGIN"] = "MINLENGTH_LOGIN";
    ErrorResponse["MINLENGTH_FIRSTNAME"] = "MINLENGTH_FIRSTNAME";
    ErrorResponse["MINLENGTH_LASTNAME"] = "MINLENGTH_LASTNAME";
    ErrorResponse["UNIQUE_EMAIL"] = "UNIQUE_EMAIL";
})(ErrorResponse = exports.ErrorResponse || (exports.ErrorResponse = {}));
exports.ErrorTypes = {
    [ErrorResponse.ISEMAIL_EMAIL]: "Niepoprawny adres email.",
    [ErrorResponse.MINLENGTH_PASSWORD]: "Hasło musi zawierać conajmniej 8 znaków",
    [ErrorResponse.MINLENGTH_LOGIN]: "Login musi zawierać conajmniej 3 znaki",
    [ErrorResponse.MINLENGTH_FIRSTNAME]: "Imię musi zawierać conajmniej 3 znaki",
    [ErrorResponse.MINLENGTH_LASTNAME]: "Nazwisko musi zawierać conajmniej 3 znaki",
    [ErrorResponse.UNIQUE_EMAIL]: "Podany adres email jest już zajęty",
};
