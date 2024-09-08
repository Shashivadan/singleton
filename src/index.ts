import { gameManager } from "./store";

import { logger } from "./logger";


logger();

setInterval(() => {
  gameManager.AddGame(Math.random().toString())
}, 3000);
