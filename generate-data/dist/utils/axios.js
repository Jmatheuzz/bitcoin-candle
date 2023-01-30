"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AxiosHttpClient = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosHttpClient {
    async get({ url, config }) {
        const result = await axios_1.default.get(url, config);
        return result.data;
    }
    async post({ url, body, params }) {
        const result = await axios_1.default.post(url, body, params);
        return result.data;
    }
}
exports.AxiosHttpClient = AxiosHttpClient;
//# sourceMappingURL=axios.js.map