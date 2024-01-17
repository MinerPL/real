"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("424973");
var i = n("917351"),
  l = n.n(i),
  u = n("446674"),
  o = n("913144"),
  a = n("80507"),
  r = n("374363"),
  d = n("718517"),
  s = n("364685"),
  c = n("397336");
let f = {
  pendingUsages: []
};
d.default.Millis.DAY;
let E = new a.default({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => s.default.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  _ = () => {
    s.default.isLoaded && E.compute()
  },
  S = () => {
    _()
  };

function T() {
  var e;
  let t = null === (e = r.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
  if (null == t) return !1;
  E.overwriteHistory(l.mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), f.pendingUsages)
}
class p extends u.default.PersistedStore {
  initialize(e) {
    this.waitFor(s.default), null != e && (f = e), this.syncWith([s.default], S), this.syncWith([r.default], T)
  }
  getState() {
    return f
  }
  hasPendingUsage() {
    return f.pendingUsages.length > 0
  }
  get stickerFrecencyWithoutFetchingLatest() {
    return E
  }
}
p.displayName = "StickersPersistedStore", p.persistKey = "StickersPersistedStoreV2";
var A = new p(o.default, {
  STICKER_TRACK_USAGE: e => {
    let {
      stickerIds: t
    } = e;
    null == t || t.forEach(e => {
      E.track(e), f.pendingUsages.push({
        key: e,
        timestamp: Date.now()
      })
    }), _()
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: n
    } = e;
    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    f.pendingUsages = []
  }
})