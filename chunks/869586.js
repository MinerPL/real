"use strict";
n.r(e), n.d(e, {
  BlindID: function() {
    return r
  }
}), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var o = n("605250"),
  a = n("446825").Buffer;
let l = new o.default("BlindID");
class r {
  async blind(t) {
    let e = await this.key,
      n = new BigUint64Array([BigInt(t)]),
      o = await crypto.subtle.sign("HMAC", e, n.buffer);
    return r.truncate(o).toString()
  }
  static truncate(t) {
    let e = new Uint8Array(t);
    return e.length < 8 ? (l.error("Unexpected byte length ".concat(e.length)), BigInt(0)) : BigInt(e[0]) | BigInt(e[1]) << BigInt(8) | BigInt(e[2]) << BigInt(16) | BigInt(e[3]) << BigInt(24) | BigInt(e[4]) << BigInt(32) | BigInt(e[5]) << BigInt(40) | BigInt(e[6]) << BigInt(48) | BigInt(e[7]) << BigInt(56)
  }
  constructor(t) {
    let e = a.from(t, "hex");
    this.key = crypto.subtle.importKey("raw", e, {
      name: "HMAC",
      hash: "SHA-512"
    }, !1, ["sign"])
  }
}