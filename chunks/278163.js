"use strict";
n.r(t), n.d(t, {
  getSystemAnalyticsInfo: function() {
    return g
  }
}), n("222007");
var s = n("446674"),
  i = n("913144"),
  r = n("599110"),
  a = n("773336"),
  o = n("50885"),
  d = n("760190");
let u = {
  hashes: {}
};
async function l() {
  if (!a.isPlatformEmbedded || !(0, a.isWindows)()) return [];
  await o.default.ensureModule("discord_media");
  let e = o.default.requireModule("discord_media"),
    t = await e.getSystemAnalyticsBlob();
  return t || []
}
async function f() {
  try {
    let e = await l(),
      t = e.filter(e => u.hashes[e.name] !== e.hash);
    for (let {
        name: e,
        hash: n,
        data: s
      }
      of t) r.default.track(e, s), (u = {
      hashes: {
        ...u.hashes
      }
    }).hashes[e] = n;
    t.length > 0 && c.emitChange()
  } catch (e) {}
}
class _ extends s.default.PersistedStore {
  initialize(e) {
    u = null != e && "object" == typeof e.hashes ? e : {
      hashes: {}
    }, this.waitFor(d.default)
  }
  getState() {
    return u
  }
  async info() {
    try {
      let e = await l(),
        t = e.find(e => "hardware_detected" === e.name);
      if (null == t) return null;
      return t.data
    } catch (e) {}
  }
}
_.displayName = "SystemAnalyticsStore", _.persistKey = "SystemAnalyticsStore";
let c = new _(i.default, {
  START_SESSION: function() {
    return f(), !1
  }
});

function g() {
  return c.info()
}