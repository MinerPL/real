"use strict";
var i;
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), i = class {
  createDragPreview(e) {
    if (null == this.container || null == this.svg || null == this.foreignObject) return;
    let {
      width: t,
      height: n
    } = e.getBoundingClientRect();
    this.svg.setAttribute("viewBox", "0 0 ".concat(t, " ").concat(n)), this.svg.setAttribute("width", "".concat(t)), this.svg.setAttribute("height", "".concat(n)), this.foreignObject.setAttribute("x", "0"), this.foreignObject.setAttribute("y", "0"), this.foreignObject.setAttribute("width", "".concat(t)), this.foreignObject.setAttribute("height", "".concat(n));
    let i = e.cloneNode(!0);
    this.foreignObject.appendChild(i)
  }
  render(e) {
    let t = this.container;
    if (null == t) return;
    let n = e.getSourceClientOffset();
    if (null != n) e.isDragging() && (t.style.position = "fixed", t.style.left = "".concat(n.x + 30, "px"), t.style.top = "".concat(n.y + 15, "px"))
  }
  clear() {
    null != this.foreignObject && (this.foreignObject.innerHTML = "")
  }
  constructor(e) {
    this.container = null == e ? void 0 : e.createElement("div");
    let t = this.svg = null == e ? void 0 : e.createElement("svg");
    null != t && (t.style.contain = "paint"), this.foreignObject = null == e ? void 0 : e.createElement("foreignObject"), null != this.container && null != this.svg && null != this.foreignObject && (this.container.className = "drag-previewer", this.container.style.cssText = "z-index: 1000; filter: drop-shadow(0 0 0 var(--background-floating)) drop-shadow(var(--elevation-high))", this.svg.appendChild(this.foreignObject), this.container.appendChild(this.svg), null == e || e.body.appendChild(this.container))
  }
}