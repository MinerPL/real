"use strict";
var i;
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("222007"), i = class e {
  toJS() {
    return {
      ...this
    }
  }
  set(e, t) {
    return this[e] !== t ? new this.constructor({
      ...this,
      [e]: t
    }) : this
  }
  merge(e) {
    let t = null;
    for (let n in e) {
      if (!e.hasOwnProperty(n)) continue;
      let i = e[n];
      this[n] !== i && (null == t && (t = {
        ...this
      }), t[n] = e[n])
    }
    return null != t ? new this.constructor(t) : this
  }
  update(t, n, i) {
    null == i && (i = n, n = void 0);
    let r = this[t];
    return r instanceof e || (r instanceof Array ? r = [...r] : r instanceof Object && (r = {
      ...r
    })), void 0 === r && (r = n), this.set(t, i(r))
  }
}