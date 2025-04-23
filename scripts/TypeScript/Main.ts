import { StartGame } from "./StartGame/StartGame.js";
import { DialogBox } from "./StartGame/NewGame.js";

const dialogBox: DialogBox = new DialogBox();
dialogBox.initialiseStartGame();
dialogBox.addEventListeners();
