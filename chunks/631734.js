"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("70102");
var i = class e extends Error {
  constructor(e, t) {
    super(t), "closeCode" in e ? (this.code = e.closeCode, this.closeCode = e.closeCode) : (this.code = e.errorCode, this.errorCode = e.errorCode), this.message = t, this.name = "RPCError"
  }
}