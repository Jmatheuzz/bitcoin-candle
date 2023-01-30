"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./config/module-alias");
require("dotenv/config");
const services_1 = require("@/services");
void (async function start() {
    await (0, services_1.generateCandle)();
})();
//# sourceMappingURL=index.js.map