export class WinCondition {
    constructor(rowCount, colCount, winCount) {
        this.rowCount = rowCount;
        this.colCount = colCount;
        this.winCount = winCount;
        this.gameGrid = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
        this.directions = [
            { drow: 0, dcol: 1 }, //Right
            { drow: 1, dcol: 0 }, //Down
            { drow: -1, dcol: 1 }, //Diagonal Top right
            { drow: -1, dcol: -1 } //Diagonal Top left
        ];
        this.turnCounter = 0;
    }
    winConditionCheck(playerState, currPosition) {
        this.turnCounter++;
        const currRow = Math.ceil(currPosition / this.colCount);
        const currCol = currPosition % this.colCount ? currPosition % this.colCount : this.colCount;
        this.gameGrid[currRow - 1][currCol - 1] = playerState;
        if (this.turnCounter >= (this.winCount * 2 - 1)) {
            for (const dir of this.directions) {
                let points = 1;
                let movingRow = currRow + dir.drow;
                let movingCol = currCol + dir.dcol;
                let movCell;
                while (movingRow >= 1 && movingRow < this.rowCount + 1 &&
                    movingCol >= 1 && movingCol < this.colCount + 1 &&
                    points < this.winCount) {
                    const currCell = this.gameGrid[currRow - 1][currCol - 1];
                    movCell = this.gameGrid[movingRow - 1][movingCol - 1];
                    if (!movCell) {
                        break;
                    }
                    else if (movCell.constructor.name == (currCell === null || currCell === void 0 ? void 0 : currCell.constructor.name)) {
                        points++;
                        movingRow += dir.drow;
                        movingCol += dir.dcol;
                    }
                    else {
                        break;
                    }
                }
                if (points >= this.winCount)
                    return true;
                movingRow = currRow - dir.drow;
                movingCol = currCol - dir.dcol;
                while (movingRow >= 1 && movingRow < this.rowCount + 1 &&
                    movingCol >= 1 && movingCol < this.colCount + 1 &&
                    points < this.winCount) {
                    const currCell = this.gameGrid[currRow - 1][currCol - 1];
                    movCell = this.gameGrid[movingRow - 1][movingCol - 1];
                    if (!movCell) {
                        break;
                    }
                    else if (movCell.constructor.name == (currCell === null || currCell === void 0 ? void 0 : currCell.constructor.name)) {
                        points++;
                        movingRow -= dir.drow;
                        movingCol -= dir.dcol;
                    }
                    else {
                        break;
                    }
                }
                if (points >= this.winCount)
                    return true;
            }
        }
        else if (this.turnCounter >= this.rowCount * this.colCount) {
        }
        return false;
    }
}
//# sourceMappingURL=GameRules.js.map