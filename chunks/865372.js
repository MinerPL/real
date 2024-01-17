"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("424973");
var r = n("917351"),
  i = n.n(r),
  l = n("446674"),
  o = n("913144"),
  s = n("80507"),
  a = n("374363"),
  u = n("718517"),
  c = n("364685"),
  d = n("397336");
let f = {
  pendingUsages: []
};
u.default.Millis.DAY;
let E = new s.default({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
    },
    lookupKey: e => c.default.getStickerById(e),
    afterCompute: () => {},
    numFrequentlyItems: 20
  }),
  _ = () => {
    c.default.isLoaded && E.compute()
  },
  p = () => {
    _()
  };

function C() {
  var e;
  let t = null === (e = a.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
  if (null == t) return !1;
  E.overwriteHistory(i.mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), f.pendingUsages)
}
class I extends l.default.PersistedStore {
  initialize(e) {
    this.waitFor(c.default), null != e && (f = e), this.syncWith([c.default], p), this.syncWith([a.default], C)
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
I.displayName = "StickersPersistedStore", I.persistKey = "StickersPersistedStoreV2";
var A = new I(o.default, {
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
    if (t !== d.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
    f.pendingUsages = []
  }
})