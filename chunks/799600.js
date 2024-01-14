"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("424973"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341"), n("70102"), n("222007");
var s = n("917351"),
  i = n.n(s),
  r = n("605250"),
  a = n("197881");
let {
  NativeModules: o
} = {}, d = [];
class u {
  static canUse() {
    return !1
  }
  bindWebSocket(e) {}
  feed(e) {}
  dataReady(e) {
    this._onDataReady = e
  }
  constructor(e) {
    this._onDataReady = null, this._gatewayEncoding = e
  }
}
d.push(class extends u {
  static canUse() {
    return void 0 !== window.Uint8Array
  }
  getAlgorithm() {
    return "zlib-stream"
  }
  usesLegacyCompression() {
    return !1
  }
  feed(e) {
    let t = this._pako,
      n = this._inflate;
    if (null == n) throw Error("Trying to feed to closed compression adapter");
    let s = this._onDataReady;
    if (null === s) throw Error("Cannot feed unless a data ready callback is registered.");
    if (e instanceof ArrayBuffer) {
      let s = new DataView(e),
        i = s.byteLength >= 4 && 65535 === s.getUint32(s.byteLength - 4, !1);
      n.push(e, !!i && t.Z_SYNC_FLUSH)
    } else throw Error("Expected array buffer, but got " + typeof e)
  }
  close() {
    null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null
  }
  handleFlushEnd(e) {
    let t;
    let n = this._pako,
      s = this._inflate;
    if (null == s) {
      new(0, r.default)("GatewayCompressionHandler").error("flush end happened on closed compression adapter");
      return
    }
    if (e !== n.Z_OK) throw Error("zlib error, ".concat(e, ", ").concat(s.strm.msg));
    let {
      chunks: i
    } = s, a = i.length;
    if (this._gatewayEncoding.wantsString()) t = a > 1 ? i.join("") : i[0];
    else if (a > 1) {
      let e = 0;
      for (let t = 0; t < a; t++) e += i[t].length;
      let n = new Uint8Array(e),
        s = 0;
      for (let e = 0; e < a; e++) {
        let t = i[e];
        n.set(t, s), s += t.length
      }
      t = n
    } else t = i[0];
    i.length = 0, null != this._onDataReady && this._onDataReady(t)
  }
  constructor(e) {
    super(e), this._pako = n("181905");
    let t = this._pako,
      s = this._inflate = new t.Inflate({
        chunkSize: 65536,
        to: this._gatewayEncoding.wantsString() ? "string" : ""
      });
    s.onEnd = this.handleFlushEnd.bind(this)
  }
}), d.push(class extends u {
  static canUse() {
    return !0
  }
  getAlgorithm() {
    return null
  }
  usesLegacyCompression() {
    return !0
  }
  feed(e) {
    let t = this._pako;
    if (e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
        to: "string"
      })), null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
    this._onDataReady(e)
  }
  close() {}
  constructor(...e) {
    super(...e), this._pako = n("181905")
  }
}), d.push(class extends u {
  static canUse() {
    return !1
  }
  bindWebSocket(e) {
    this.close(), this._socketId = e._socketId, o.DCDCompressionManager.enableZlibStreamSupport(this._socketId)
  }
  getAlgorithm() {
    return "zlib-stream"
  }
  usesLegacyCompression() {
    return !1
  }
  feed(e) {
    if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
    null !== e && this._onDataReady(e)
  }
  close() {
    let e = this._socketId;
    this._socketId = null, null !== e && o.DCDCompressionManager.disableZlibStreamSupport(e)
  }
  constructor(e) {
    super(e), this._socketId = null
  }
});
class l extends u {
  static canUse() {
    return !0
  }
  getAlgorithm() {
    return null
  }
  usesLegacyCompression() {
    return !1
  }
  feed(e) {
    if (null == this._onDataReady) throw Error("Cannot feed unless a data ready callback is registered.");
    this._onDataReady(e)
  }
  close() {}
}
d.push(l);
let f = i.find(d, e => e.canUse());
a.ProcessArgs.isDiscordGatewayPlaintextSet() && (f = l);
var _ = f