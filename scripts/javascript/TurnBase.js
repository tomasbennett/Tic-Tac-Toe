var TurnBase = /** @class */ (function () {
    function TurnBase() {
        this.availableSpaces = [[0, 0], [0, 1], [0, 2]];
        this.moves = { X: [], O: [] };
    }
    TurnBase.prototype.setTurn = function (turn) {
        this.turn = turn;
    };
    TurnBase.prototype.getTurn = function () {
        return this.turn;
    };
    TurnBase.prototype.switchPlayer = function (spaceTaken) {
        this.turn.switchPlayer(spaceTaken);
    };
    return TurnBase;
}());
var PlayerXTurn = /** @class */ (function () {
    function PlayerXTurn(game) {
        this.game = game;
    }
    PlayerXTurn.prototype.switchPlayer = function (spaceTaken) {
        this.game.moves.X.push(spaceTaken);
        console.log("Now it's O's turn!");
        this.game.setTurn(new PlayerOTurn(this.game));
    };
    return PlayerXTurn;
}());
var PlayerOTurn = /** @class */ (function () {
    function PlayerOTurn(game) {
        this.game = game;
    }
    PlayerOTurn.prototype.switchPlayer = function (spaceTaken) {
        this.game.moves.O.push(spaceTaken);
        console.log("Now it's X's turn!");
        this.game.setTurn(new PlayerXTurn(this.game));
    };
    return PlayerOTurn;
}());
var player = new TurnBase();
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
