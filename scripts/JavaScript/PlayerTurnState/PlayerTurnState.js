export class PlayerTurnStateManager {
    getPlayerTurnState() {
        return this._playerTurnState;
    }
    setPlayerTurnState(value) {
        this._playerTurnState = value;
    }
    makeMove() {
        this._playerTurnState.makeMove();
    }
}
class PlayerXTurn {
    constructor(playerTurnManager) {
        this.playerTurnManager = playerTurnManager;
    }
    makeMove() {
        this.playerTurnManager.setPlayerTurnState(new PlayerOTurn(this.playerTurnManager));
    }
}
class PlayerOTurn {
    constructor(playerTurnManager) {
        this.playerTurnManager = playerTurnManager;
    }
    makeMove() {
        this.playerTurnManager.setPlayerTurnState(new PlayerXTurn(this.playerTurnManager));
    }
}
//# sourceMappingURL=PlayerTurnState.js.map