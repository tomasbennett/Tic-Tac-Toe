import { ViewBox } from "./ViewBox/ViewBox.js";
import { AnimationEndClass, IAnimationEnd } from "./AnimationState/AnimationEnd.js";


const viewBox: ViewBox = new ViewBox("main-board-svg", "top-layer-group");
viewBox.setSVGViewBox();

const animationEnd: IAnimationEnd = new AnimationEndClass("hover-backdrop");
animationEnd.setAnimationOver();

