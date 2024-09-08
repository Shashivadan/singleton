"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const store_1 = require("./store");
function logger() {
    setInterval(() => {
        store_1.gameManager.logger();
    }, 5000);
}
exports.logger = logger;
