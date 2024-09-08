"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.Games = void 0;
class Games {
    constructor() {
        this.games = [];
        this.games = [];
    }
    static getInstance() {
        if (Games.instance) {
            return Games.instance;
        }
        Games.instance = new Games();
        return Games.instance;
    }
    addMove(gameId, move) {
        const game = this.games.find(game => game.id === gameId);
        game === null || game === void 0 ? void 0 : game.moves.push(move);
        return game;
    }
    AddGame(gameID) {
        const addgame = {
            id: gameID,
            whitePlayerName: "Alice",
            blackPlayerName: "kirto",
            moves: []
        };
        this.games.push(addgame);
        return this.games;
    }
    logger() {
        console.log(this.games);
    }
}
exports.Games = Games;
exports.gameManager = Games.getInstance();
