interface IComponent {
    //Will this have another HTMLElement / IComponent 
    //to refernce it's container and then an index 
    //for which position in that container???

    render(): void;
}

interface IComponentRemovable extends IComponent {
    removeElem(): void;
}

interface IComponentEventListener extends IComponent {
    addEventListeners(): void;

    removeEventListeners(): void;
}

interface IComponentInteractive extends IComponentRemovable, IComponentEventListener {}



class OnePlayerSelect implements IComponentInteractive {
    private onePlayerSelectButton: HTMLDivElement;

    constructor() {
        this.onePlayerSelectButton = document.createElement("div");
        this.onePlayerSelectButton.classList.add("start", "screen", "poneselect");
        this.onePlayerSelectButton.textContent = "This is the start screen, click to go to Game Screen";
    }
    removeElem(): void {
        this.onePlayerSelectButton.remove();
    }
    addEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    render(): void {
        document.body.appendChild(this.onePlayerSelectButton);
    }
}

class TwoPlayerSelect implements IComponentInteractive {
    private twoPlayerSelectButton: HTMLDivElement;

    constructor() {
        this.twoPlayerSelectButton = document.createElement("div");
        this.twoPlayerSelectButton.classList.add("start", "screen", "ptwoselect");
        this.twoPlayerSelectButton.textContent = "This is the start screen, click to go to Player Two Select Screen";
    }
    removeElem(): void {
        this.twoPlayerSelectButton.remove();
    }
    addEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    removeEventListeners(): void {
        throw new Error("Method not implemented.");
    }
    render(): void {
        document.body.appendChild(this.twoPlayerSelectButton);
    }
}

