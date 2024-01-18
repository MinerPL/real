"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var i = n("446674"),
  r = n("95410"),
  s = n("913144"),
  l = n("49111");
let a = {
    lastViewedPath: null,
    lastViewedNonVoicePath: null
  },
  o = a,
  u = "LAST_VIEWED_PATH";
class c extends i.default.PersistedStore {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
    o = null != e ? e : a
  }
  get defaultRoute() {
    return l.Routes.ME
  }
  get lastNonVoiceRoute() {
    var e;
    return null !== (e = o.lastViewedNonVoicePath) && void 0 !== e ? e : l.Routes.ME
  }
  get fallbackRoute() {
    return l.Routes.ME
  }
  getState() {
    return o
  }
}
c.displayName = "DefaultRouteStore", c.persistKey = "DefaultRouteStore", c.migrations = [() => {
  let e = r.default.get(u, null);
  return r.default.remove(u), {
    lastViewedPath: e
  }
}];
var d = new c(s.default, {
  SAVE_LAST_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return o.lastViewedPath = t, !0
  },
  SAVE_LAST_NON_VOICE_ROUTE: function(e) {
    let {
      path: t
    } = e;
    return o.lastViewedNonVoicePath = t, !0
  }
})