"use strict";
n.r(e), n.d(e, {
  SentryError: function() {
    return r
  }
}), n("70102");
class r extends Error {
  constructor(t, e = "warn") {
    super(t), this.message = t, this.name = new.target.prototype.constructor.name, Object.setPrototypeOf(this, new.target.prototype), this.logLevel = e
  }
}