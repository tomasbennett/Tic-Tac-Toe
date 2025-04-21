import { IPlayerTurnState, PlayerXTurn, PlayerOTurn } from "../PlayerTurnState/PlayerTurnState";

type Cell = IPlayerTurnState | null;


export class WinCondition {
    private rowCount: number;
    private colCount: number;
    private winCount: number;

    private gameGrid: Cell[][];

    private directions: { drow: number, dcol: number }[];

    private turnCounter: number;

    constructor(rowCount: number, colCount: number, winCount: number) {
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

    winConditionCheck(playerState: IPlayerTurnState, currPosition: number): boolean {
        this.turnCounter++;

        const currRow: number = Math.ceil(currPosition / this.colCount);
        const currCol: number = currPosition % this.colCount ? currPosition % this.colCount : this.colCount;
        
        this.gameGrid[currRow - 1][currCol - 1] = playerState;

        if (this.turnCounter >= (this.winCount * 2 - 1)) {

            
            
            for (const dir of this.directions) {

                let points: number = 1;
    
                let movingRow: number = currRow + dir.drow;
                let movingCol: number = currCol + dir.dcol;
    
                let movCell: Cell;

                while (
                    movingRow >= 1 && movingRow < this.rowCount + 1 &&
                    movingCol >= 1 && movingCol < this.colCount + 1 &&
                    points < this.winCount  
                ) {

                    const currCell: Cell = this.gameGrid[currRow - 1][currCol - 1];
                    movCell = this.gameGrid[movingRow - 1][movingCol - 1];
                    
                    if (!movCell) { break; }
                    else if (movCell.constructor.name == currCell?.constructor.name) {
                        points++;
                        movingRow += dir.drow;
                        movingCol += dir.dcol;
                    }
                    else {
                        break;
                    }

                }
    
                if (points >= this.winCount) return true;
    
    
                movingRow = currRow - dir.drow;
                movingCol = currCol - dir.dcol;
    
                while (
                    movingRow >= 1 && movingRow < this.rowCount + 1 &&
                    movingCol >= 1 && movingCol < this.colCount + 1 &&
                    points < this.winCount  
                ) {
                    
                    const currCell: Cell = this.gameGrid[currRow - 1][currCol - 1];
                    movCell = this.gameGrid[movingRow - 1][movingCol - 1];
                    
                    if (!movCell) { break; }
                    else if (movCell.constructor.name == currCell?.constructor.name) {
                        points++;
                        movingRow -= dir.drow;
                        movingCol -= dir.dcol;
                    } else { break; }

                }
    
                if (points >= this.winCount) return true;

            }

        }

        return false;

        
    }



}