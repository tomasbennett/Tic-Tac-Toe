import { StartGame } from "./StartGame/StartGame.js";

const startGame: StartGame = new StartGame();
startGame.setViewBox();
startGame.setAnimationEnd();
startGame.addEventListeners();