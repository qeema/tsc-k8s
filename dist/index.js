"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
void (async () => {
    const res = await axios_1.default({
        method: 'get',
        url: 'https://us-central1-test-acb17.cloudfunctions.net/helloWorld',
    });
    console.log(res.data);
})();
