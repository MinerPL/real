"use strict";
n.r(t), n.d(t, {
  serializeObject: function() {
    return o
  },
  deserializeObject: function() {
    return l
  }
}), n("274635"), n("311790"), n("477657"), n("811875"), n("90301"), n("652153"), n("28797"), n("817884"), n("597349"), n("667536"), n("690341");
var i = n("917351"),
  r = n.n(i),
  s = n("316693"),
  a = n("674268");

function o(e) {
  return r.cloneDeepWith(e, e => (0, s.isBigFlag)(e) ? {
    __tag__: "bigflag",
    data: e.toJSON()
  } : (0, a.isUint8Array)(e) ? {
    __tag__: "uint8array",
    data: Array.from(e)
  } : void 0)
}

function l(e) {
  return r.cloneDeepWith(e, e => null != e && "object" == typeof e && "__tag__" in e && "bigflag" === e.__tag__ ? s.default.deserialize(e.data) : (0, a.isSerializedUint8Array)(e) ? new Uint8Array(e.data) : void 0)
}