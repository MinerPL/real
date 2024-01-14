"use strict";
n.r(e), n.d(e, {
  announce: function() {
    return i
  },
  clearAnnouncer: function() {
    return o
  },
  destroyAnnouncer: function() {
    return a
  }
});
let r = null;

function i(t) {
  let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "assertive",
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7e3;
  !r && (r = new u), r.announce(t, e, n)
}

function o(t) {
  r && r.clear(t)
}

function a() {
  r && (r.destroy(), r = null)
}
class u {
  createLog(t) {
    let e = document.createElement("div");
    return e.setAttribute("role", "log"), e.setAttribute("aria-live", t), e.setAttribute("aria-relevant", "additions"), e
  }
  destroy() {
    this.node && (document.body.removeChild(this.node), this.node = null)
  }
  announce(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "assertive",
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 7e3;
    if (!this.node) return;
    let r = document.createElement("div");
    r.textContent = t, "assertive" === e ? this.assertiveLog.appendChild(r) : this.politeLog.appendChild(r), "" !== t && setTimeout(() => {
      r.remove()
    }, n)
  }
  clear(t) {
    this.node && ((!t || "assertive" === t) && (this.assertiveLog.innerHTML = ""), (!t || "polite" === t) && (this.politeLog.innerHTML = ""))
  }
  constructor() {
    this.node = document.createElement("div"), this.node.dataset.liveAnnouncer = "true", Object.assign(this.node.style, {
      border: 0,
      clip: "rect(0 0 0 0)",
      clipPath: "inset(50%)",
      height: 1,
      margin: "0 -1px -1px 0",
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      width: 1,
      whiteSpace: "nowrap"
    }), this.assertiveLog = this.createLog("assertive"), this.node.appendChild(this.assertiveLog), this.politeLog = this.createLog("polite"), this.node.appendChild(this.politeLog), document.body.prepend(this.node)
  }
}