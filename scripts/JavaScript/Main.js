import { ViewBox } from "./ViewBox/ViewBox.js";
import { AnimationEndClass } from "./AnimationState/AnimationEnd.js";
const viewBox = new ViewBox("main-board-svg", "top-layer-group");
viewBox.setSVGViewBox();
const animationEnd = new AnimationEndClass("hover-backdrop");
animationEnd.setAnimationOver();
//# sourceMappingURL=Main.js.map