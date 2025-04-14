

export class InteractCondtional {
    private hoverBackdrop: HTMLElement;

    constructor(hoverBackdrop: HTMLElement) {
        this.hoverBackdrop = hoverBackdrop;
    }

    checkBackdrop(): boolean {
        return !this.hoverBackdrop.classList.contains("clicked") && 
               this.hoverBackdrop.getAttribute("data-animation") == "ready";
    }
}