"use strict";
var t;
E.r(_), E.d(_, {
  default: function() {
    return t
  }
}), E("70102"), t = class {
  get fails() {
    return this._fails
  }
  get current() {
    return this._current
  }
  get pending() {
    return null != this._timeoutId
  }
  succeed() {
    this.cancel(), this._fails = 0, this._current = this.min
  }
  fail(e) {
    this._fails += 1;
    let _ = 2 * this._current;
    if (this.jitter && (_ *= Math.random()), this._current = Math.min(this._current + _, this.max), null != e) {
      if (null != this._timeoutId) {
        if (this._callback !== e) throw Error("callback already pending");
        this.cancel()
      }
      this._callback = e, this._timeoutId = setTimeout(() => {
        try {
          null != e && e()
        } finally {
          this.cancel()
        }
      }, this._current)
    }
    return this._current
  }
  cancel() {
    this._callback = null, null != this._timeoutId && (clearTimeout(this._timeoutId), this._timeoutId = null)
  }
  constructor(e = 500, _ = null, E = !0) {
    if (this._fails = 0, e <= 0) throw Error("Backoff min value must be greater than zero or backoff will never back-off.");
    this.min = e, this.max = null != _ ? _ : 10 * e, this.jitter = E, this._current = e
  }
}