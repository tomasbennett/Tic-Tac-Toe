export class ViewBox {
    private svg: any;
    private groupSVGElement: any;

    constructor(svgID: string, groupID: string) {
        this.svg = document.getElementById(svgID);
        this.groupSVGElement = this.svg.getElementById(groupID);
    }

    setSVGViewBox(): void {
        const bbox: DOMRect = this.groupSVGElement.getBBox();
        this.svg.setAttribute("viewBox", `${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`)
    }

}
