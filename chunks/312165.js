"use strict";
s.r(t), s.d(t, {
  default: function() {
    return n
  }
}), s("222007"), s("424973");
var n, l = s("44170"),
  i = s("773336"),
  a = s("50885"),
  o = s("13798"),
  r = s("49111");
let d = [],
  u = (e, t, s) => {
    let n = (0, i.isWindows)() ? 0 : 1;
    (e !== r.KeyboardDeviceTypes.MOUSE_BUTTON || s !== n) && d.forEach(n => n._handleEvent(e, t, s))
  };
n = class extends l.EventEmitter {
  destroy() {
    this.removeAllListeners(), 0 === (d = d.filter(e => e !== this)).length && a.default.setOnInputEventCallback(null)
  }
  toString() {
    return (0, o.toString)(this.combo)
  }
  _handleEvent(e, t, s) {
    0 === t ? this.combo = this.combo.filter(t => {
      let [n, l] = t;
      return !(n === e && l === s)
    }) : (this.combo.push([e, s, (0, o.getEnv)()]), this.emit("change", this))
  }
  constructor() {
    super(), this.combo = [], d.push(this), 1 === d.length && a.default.setOnInputEventCallback(u)
  }
}