class TurnBase {
    public availableSpaces = [[0, 0], [0, 1], [0, 2]];
    public moves: { X: number[][]; O: number[][] } = { X: [], O: [] };
    private turn: ITurn;

    setTurn(turn: ITurn): void {
        this.turn = turn;
    }
    getTurn(): ITurn {
        return this.turn;
    }
    switchPlayer(spaceTaken: number[]): void {
        this.turn.switchPlayer(spaceTaken);
    }
}



interface ITurn {
    switchPlayer(spaceTaken: number[]): void;
}

class PlayerXTurn implements ITurn {
    private game: TurnBase;

    constructor(game: TurnBase) {
        this.game = game;
    }

    switchPlayer(spaceTaken: number[]): void {
        this.game.moves.X.push(spaceTaken);
        console.log("Now it's O's turn!");
        this.game.setTurn(new PlayerOTurn(this.game));
    }
}

class PlayerOTurn implements ITurn {
    private game: TurnBase;

    constructor(game: TurnBase) {
        this.game = game;
    }

    switchPlayer(spaceTaken: number[]): void {
        this.game.moves.O.push(spaceTaken);
        console.log("Now it's X's turn!");
        this.game.setTurn(new PlayerXTurn(this.game));
    }
}





const player: TurnBase = new TurnBase();
player.setTurn(new PlayerXTurn(player));

player.switchPlayer([0, 2]);
player.switchPlayer([0, 0]);
player.switchPlayer([0, 2]);
player.switchPlayer([0, 1]);
player.switchPlayer([0, 2]);
player.switchPlayer([0, 5]);

console.log(player.moves);

player.switchPlayer([0, 5]);

console.log(player.moves);

