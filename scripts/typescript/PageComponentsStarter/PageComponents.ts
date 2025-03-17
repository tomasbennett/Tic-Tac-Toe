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

// interface IComponentInteractive extends IComponentRemovable, IComponentEventListener {}



abstract class PageFactory {
    protected components: Array<IComponent> = [];
    protected componentsRemovable: Array<IComponentRemovable> = [];
    protected componentsEventListener: Array<IComponentEventListener> = [];
    // protected componentsInteractive: Array<IComponentInteractive>;

    // protected allComponents: Array<IComponent>;
    // protected allRemovable: Array<IComponentRemovable | IComponentInteractive>;
    // protected allEventListeners: Array<IComponentEventListener | IComponentInteractive>;

    // constructor() {
    //     this.components = this.createComponents();
    //     this.componentsRemovable = this.createComponentsRemovable();
    //     this.componentsEventListener = this.createComponentEventListener();
    //     // this.componentsInteractive = this.createComponentInteractive();

    //     // this.allRemovable = this.componentsRemovable.concat(this.componentsInteractive);
    //     // this.allEventListeners = this.componentsEventListener.concat(this.componentsInteractive);
    //     // this.allComponents = this.components.concat(this.allRemovable, 
    //     //                                             this.componentsEventListener);
    //     // this.allComponents = this.components.concat(this.componentsRemovable, this.componentsEventListener);
    // }
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
    //     this.componentsEventListener.forEach((elem: IComponentEventListener | IComponentInteractive) => {
            
    //     });
    // }
    // removeEventListeners(): void {
    //     this.allEventListeners.forEach((elem: IComponentEventListener | IComponentInteractive) => {
    //         elem.removeEventListeners();
    //     });
    // }
    // removeAll(): void {
    //     this.allRemovable.forEach((elem: IComponentRemovable | IComponentInteractive) => {
    //         elem.removeElem();
    //     });
    // }
    abstract createComponents(): void;
    abstract createComponentsRemovable(): void;
    abstract createComponentEventListener(): void;
    // abstract createComponentInteractive(): Array<IComponentInteractive>;
}

class StartPage extends PageFactory {
    private onePlayerSelect: any;
    private twoPlayerSelect: any;

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
    // createComponentInteractive(): IComponentInteractive[] {
    //     throw new Error("Method not implemented.");
    // }
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
    // createComponentInteractive(): IComponentInteractive[] {
    //     throw new Error("Method not implemented.");
    // }
}





















//IComponentInteractive
class OnePlayerSelect implements IComponentEventListener, IComponentRemovable {
    // private factory!: PageFactory;
    // private gamePage!: PageFactory;

    private onePlayerSelectButton: HTMLDivElement;

    constructor() {
        this.onePlayerSelectButton = document.createElement("div");
        this.onePlayerSelectButton.classList.add("start", "screen", "poneselect");
        this.onePlayerSelectButton.textContent = "This is the start screen, click to go to Game Screen";
        
        // this.gamePage = new GamePage();
        // this.factory = factory;
    }
    removeElem(): void {
        this.onePlayerSelectButton.remove();
    }
    addEventListeners(): void {
        // this.onePlayerSelectButton.addEventListener("click", this.factory.removeEventListeners);
        // this.onePlayerSelectButton.addEventListener("click", this.factory.removeAll);
        // this.onePlayerSelectButton.addEventListener("click", this.gamePage.intialise);
    }
    removeEventListeners(): void {
        // this.onePlayerSelectButton.removeEventListener("click", this.factory.removeEventListeners);
        // this.onePlayerSelectButton.removeEventListener("click", this.factory.removeAll);
        // this.onePlayerSelectButton.removeEventListener("click", this.gamePage.intialise);
    }
    render(): void {
        document.body.appendChild(this.onePlayerSelectButton);
    }
}

//IComponentInteractive
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





class NullComponent implements IComponent {
    render(): void {
        return;
    }
}

class NullComponentRemovable implements IComponentRemovable {
    removeElem(): void {
        return;
    }
    render(): void {
        return;
    }
}

class NullComponentEventListener implements IComponentEventListener {
    constructor(factory: PageFactory) {}

    addEventListeners(): void {
        return;
    }
    removeEventListeners(): void {
        return;
    }
    render(): void {
        return;
    }
}

// class NullComponentInteractive implements IComponentInteractive {
//     constructor(factory: PageFactory) {}

//     removeElem(): void {
//         return;
//     }
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