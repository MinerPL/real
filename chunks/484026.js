"use strict";
var s;
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), s = class {
  setParams(e) {
    this.param !== e && (this.param = e, this.loading = !1, this.loaded = !1)
  }
  get() {
    return this.ensureLoaded(), this.val
  }
  ensureLoaded() {
    if (this.loaded || this.loading || void 0 === this.param) return;
    let e = this.param;
    this.loading = !0, this.loader(e).then(t => {
      e === this.param && (this.val = t, this.loading = !1, this.loaded = !0)
    })
  }
  constructor(e) {
    this.loading = !1, this.loaded = !1, this.loader = e
  }
}