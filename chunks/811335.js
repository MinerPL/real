"use strict";
E.r(_), E.d(_, {
  default: function() {
    return a
  }
});
var t, o, n = E("44170");
(t = o || (o = {})).VERTICAL = "vertical", t.HORIZONTAL = "horizontal";
let r = {
  open: !1,
  orientation: null
};
class i extends n.EventEmitter {
  get orientations() {
    return Object.values(o)
  }
  get state() {
    return r
  }
  check() {
    let e = function() {
        try {
          return window.outerWidth - window.innerWidth
        } catch (e) {
          return 0
        }
      }() > 160,
      _ = function() {
        try {
          return window.outerHeight - window.innerHeight
        } catch (e) {
          return 0
        }
      }() > 160,
      E = e ? "vertical" : "horizontal";
    if (!(_ && e) && (function() {
        try {
          return window.Firebug.chrome.isInitialized
        } catch (e) {
          return !1
        }
      }() || e || _)) {
      let e = r.open;
      r = {
        open: !0,
        orientation: E
      }, (!e || r.orientation !== E) && this.emit("changed", r)
    } else r.open && (r.open = !1, this.emit("changed", r))
  }
  constructor() {
    super(), setInterval(() => this.check(), 500)
  }
}
var a = i