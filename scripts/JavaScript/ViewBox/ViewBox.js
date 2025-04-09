export class ViewBox {
    constructor(svgID, groupID) {
        this.svg = document.getElementById(svgID);
        this.groupSVGElement = this.svg.getElementById(groupID);
    }
    setSVGViewBox() {
        const bbox = this.groupSVGElement.getBBox();
        this.svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
}
//# sourceMappingURL=ViewBox.js.map