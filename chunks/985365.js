"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var i = n("446674"),
  r = n("913144"),
  s = n("35468"),
  a = n("49111");
let o = a.NetworkConnectionTypes.UNKNOWN,
  l = a.NetworkConnectionSpeeds.UNKNOWN,
  u = null;

function c(e) {
  var t;
  o = null != e.type ? e.type : a.NetworkConnectionTypes.UNKNOWN, l = null !== (t = e.effectiveSpeed) && void 0 !== t ? t : a.NetworkConnectionSpeeds.UNKNOWN, u = e.serviceProvider, f.emitChange()
}
class d extends i.default.Store {
  initialize() {
    s.default.getNetworkInformation().then(c), s.default.addChangeCallback(c)
  }
  getType() {
    return o
  }
  getEffectiveConnectionSpeed() {
    return l
  }
  getServiceProvider() {
    return u
  }
}
d.displayName = "NetworkStore";
let f = new d(r.default, {});
var E = f