export interface PlayerTurnState {
    makeMove(): void;
}



export class PlayerTurnStateManager {
    private _playerTurnState!: PlayerTurnState;

    getPlayerTurnState(): PlayerTurnState {
        return this._playerTurnState;
    }
    
    setPlayerTurnState(value: PlayerTurnState) {
        this._playerTurnState = value;
    }

    makeMove(): void {
        this._playerTurnState.makeMove();
    }

}



class PlayerXTurn implements PlayerTurnState {
    private playerTurnManager: PlayerTurnStateManager;

    constructor(playerTurnManager: PlayerTurnStateManager) {
        this.playerTurnManager = playerTurnManager;
    }

    makeMove(): void {
        
        this.playerTurnManager.setPlayerTurnState(new PlayerOTurn(this.playerTurnManager));
    }


}


class PlayerOTurn implements PlayerTurnState {
    private playerTurnManager: PlayerTurnStateManager;

    constructor(playerTurnManager: PlayerTurnStateManager) {
        this.playerTurnManager = playerTurnManager;
    }

    makeMove(): void {

        this.playerTurnManager.setPlayerTurnState(new PlayerXTurn(this.playerTurnManager));
    }
}