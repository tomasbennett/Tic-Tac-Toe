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



abstract class PageFactory {
    protected components: Array<IComponent> = [];
    protected componentsRemovable: Array<IComponentRemovable> = [];
    protected componentsEventListener: Array<IComponentEventListener> = [];

    intialise(): void {
        this.createComponents();
        this.createComponentsRemovable();
        this.createComponentEventListener();

        this.components.forEach((elem: IComponent) => {
            elem.render();
        });
        this.componentsEventListener.forEach((elem: IComponentEventListener) => {
            elem.addEventListeners();
        });
    }    

    abstract createComponents(): void;
    abstract createComponentsRemovable(): void;
    abstract createComponentEventListener(): void;
}

class StartPage extends PageFactory {
    private onePlayerSelect: IComponentRemovable & IComponentEventListener;
    private twoPlayerSelect: IComponentRemovable & IComponentEventListener;

    constructor() {
        super();
        this.onePlayerSelect = new OnePlayerSelect();
        this.twoPlayerSelect = new TwoPlayerSelect();
    }
    createComponents(): void {
        this.components.push(this.onePlayerSelect);
        this.components.push(this.twoPlayerSelect);
    }
    createComponentsRemovable(): void {
        this.componentsRemovable.push(this.onePlayerSelect);
        this.componentsRemovable.push(this.twoPlayerSelect);
    }
    createComponentEventListener(): void {
        this.componentsEventListener.push(this.onePlayerSelect);
        this.componentsEventListener.push(this.twoPlayerSelect);
    }
}


class GamePage extends PageFactory {
    createComponents(): void {
        throw new Error("Method not implemented.");
    }
    createComponentsRemovable(): void {
        throw new Error("Method not implemented.");
    }
    createComponentEventListener(): void {
        throw new Error("Method not implemented.");
    }
}

class OnePlayerSelect implements IComponentEventListener, IComponentRemovable {

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
    }
    removeEventListeners(): void {
    }
    render(): void {
        document.body.appendChild(this.onePlayerSelectButton);
    }
}


class TwoPlayerSelect implements IComponentEventListener, IComponentRemovable {
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

const startPage = new StartPage();
startPage.intialise();



// class NullComponent implements IComponent {
//     render(): void {
//         return;
//     }
// }

// class NullComponentRemovable implements IComponentRemovable {
//     removeElem(): void {
//         return;
//     }
//     render(): void {
//         return;
//     }
// }

// class NullComponentEventListener implements IComponentEventListener {
//     constructor(factory: PageFactory) {}

//     addEventListeners(): void {
//         return;
//     }
//     removeEventListeners(): void {
//         return;
//     }
//     render(): void {
//         return;
//     }
// }