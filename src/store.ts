type GameTypes = {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
};
export class Games {
  games: GameTypes[] = []

  private static instance: Games
  private constructor() {
    this.games = []
  }

  static getInstance() {
    if (Games.instance) {
      return Games.instance
    }
    Games.instance = new Games()
    return Games.instance
  }

  addMove(gameId: string, move: string) {
    const game = this.games.find(game => game.id === gameId)
    game?.moves.push(move)
    return game
  }

  AddGame(gameID: string) {
    const addgame: GameTypes = {
      id: gameID,
      whitePlayerName: "Alice",
      blackPlayerName: "kirto",
      moves: []
    }

    this.games.push(addgame)
    return this.games
  }

  logger() {
    console.log(this.games);

  }
}
export const gameManager = Games.getInstance()
