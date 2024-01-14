"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("70102");
var i = class e extends Error {
  constructor(e, t) {
    super(t), this.code = e, this.message = t, this.name = "RPCError"
  }
}