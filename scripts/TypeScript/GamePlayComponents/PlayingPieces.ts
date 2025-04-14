export interface IPlayingPiece {
    setChosenPiece(hoverBackdrop: HTMLElement): void;

    getChosenPiece(): HTMLElement;

    notVisible(): void;

    partialVisibility(): void;

    fullVisibility(): void;
}


export class PlayingPieceCross implements IPlayingPiece {
    private redCross!: HTMLElement;

    setChosenPiece(hoverBackdrop: HTMLElement): void {
        this.redCross = hoverBackdrop.parentElement?.querySelector(".red-cross")!;
    }

    getChosenPiece(): HTMLElement {
        return this.redCross;
    }

    notVisible(): void {
        this.redCross.setAttribute("data-visibility", "not-visible");
    }

    partialVisibility(): void {
        this.redCross.setAttribute("data-visibility", "partially-visible");
    }

    fullVisibility(): void {
        this.redCross.setAttribute("data-visibility", "fully-visible");
    }

}


export class PlayingPieceCircle implements IPlayingPiece {
    private blueCircle!: HTMLElement;
    
    setChosenPiece(hoverBackdrop: HTMLElement): void {
        this.blueCircle = hoverBackdrop.parentElement?.querySelector(".blue-circle")!;
    }

    getChosenPiece(): HTMLElement {
        return this.blueCircle;
    }

    notVisible(): void {
        this.blueCircle.setAttribute("data-visibility", "not-visible");
    }

    partialVisibility(): void {
        this.blueCircle.setAttribute("data-visibility", "partially-visible");
    }

    fullVisibility(): void {
        this.blueCircle.setAttribute("data-visibility", "fully-visible");
    }

}