"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAPIData = void 0;
const axios_1 = require("./axios");
const config_1 = require("@/main/config");
async function getAPIData() {
    const axios = new axios_1.AxiosHttpClient();
    const data = await axios.get({ url: `${config_1.env.pricesAPI}=usd`, config: {} });
    console.log(data);
    return data;
}
exports.getAPIData = getAPIData;
//# sourceMappingURL=get-api-data.js.map