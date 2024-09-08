"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
const logger_1 = require("./logger");
(0, logger_1.logger)();
setInterval(() => {
    store_1.gameManager.AddGame(Math.random().toString());
}, 3000);
