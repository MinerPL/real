"use strict";
n.r(t), n.d(t, {
  default: function() {
    return i
  }
}), n("424973"), n("222007");
var i, r = n("917351"),
  s = n.n(r);
let a = [];
i = class e {
  static create() {
    let t = new e;
    return a.push(t), t.record
  }
  getTotalBytes() {
    return s.sum(Object.values(this.bytes))
  }
  constructor() {
    this.bytes = {}, this.record = e => {
      if (null != e) {
        for (let t in e.rtp.inbound) {
          let n = e.rtp.inbound[t];
          for (let e of n) {
            let n = "inbound-".concat(t, "-").concat(e.type);
            !(n in this.bytes) && (this.bytes[n] = 0), this.bytes[n] = e.bytesReceived
          }
        }
        for (let t of e.rtp.outbound) {
          let e = "outbound-".concat(t.type);
          !(e in this.bytes) && (this.bytes[e] = 0), this.bytes[e] = t.bytesSent
        }
      }
    }
  }
}