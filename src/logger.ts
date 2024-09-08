import { gameManager } from "./store";


export function logger() {
  setInterval(() => {
    gameManager.logger()
  }, 5000);
}
