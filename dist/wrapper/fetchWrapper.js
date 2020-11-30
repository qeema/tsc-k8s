"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchWrap = void 0;
const axios_1 = __importDefault(require("axios"));
class FetchWrap {
    constructor(url) {
        this.fetch = async () => {
            const response = await axios_1.default({
                method: 'get',
                url: this._url,
            });
            return response.data;
        };
        this._url = url;
    }
}
exports.FetchWrap = FetchWrap;
