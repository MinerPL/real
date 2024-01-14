"use strict";
n.r(t), n.d(t, {
  getExperimentCodecs: function() {
    return s
  },
  filterVideoCodecs: function() {
    return a
  },
  codecNameToPayloadName: function() {
    return l
  }
}), n("222007");
var i = n("353927");
let r = ["H264", "VP8", "VP9"];

function s(e) {
  let t = [];
  return e.has(i.ExperimentFlags.SIGNAL_H265_SUPPORT) && (t = ["H265"].concat(t)), e.has(i.ExperimentFlags.SIGNAL_AV1_SUPPORT) && (t = ["AV1"].concat(t)), t.slice()
}

function a(e, t) {
  return "string" == typeof e ? function(e, t) {
    let n = JSON.parse(e),
      i = new Map(n.map(e => [o(e.codec), [e.encode, e.decode]])),
      s = [...i.keys()],
      a = t.concat(r);
    return a.filter(e => s.includes(e)).map(e => [e, i.get(e)])
  }(e, t) : function(e, t) {
    let n = new Map(e.map(e => [o(e), [!0, !0]])),
      i = e.map(e => e.toUpperCase()),
      s = t.concat(r);
    return s.filter(e => i.includes(e)).map(e => [e, n.get(e)])
  }(e, t)
}

function o(e) {
  return "AV1X" === e ? "AV1" : e
}

function l(e) {
  return "AV1" === e ? "AV1X" : e
}