export class PlayingPieceCross {
    setChosenPiece(hoverBackdrop) {
        var _a;
        this.redCross = (_a = hoverBackdrop.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".red-cross");
    }
    getChosenPiece() {
        return this.redCross;
    }
    notVisible() {
        this.redCross.setAttribute("data-visibility", "not-visible");
    }
    partialVisibility() {
        this.redCross.setAttribute("data-visibility", "partially-visible");
    }
    fullVisibility() {
        this.redCross.setAttribute("data-visibility", "fully-visible");
    }
}
export class PlayingPieceCircle {
    setChosenPiece(hoverBackdrop) {
        var _a;
        this.blueCircle = (_a = hoverBackdrop.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector(".blue-circle");
    }
    getChosenPiece() {
        return this.blueCircle;
    }
    notVisible() {
        this.blueCircle.setAttribute("data-visibility", "not-visible");
    }
    partialVisibility() {
        this.blueCircle.setAttribute("data-visibility", "partially-visible");
    }
    fullVisibility() {
        this.blueCircle.setAttribute("data-visibility", "fully-visible");
    }
}
//# sourceMappingURL=PlayingPieces.js.map