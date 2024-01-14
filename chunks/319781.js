"use strict";
l.r(t), l.d(t, {
  MAX_NUM_SELECTED_ITEMS: function() {
    return f
  },
  default: function() {
    return A
  }
}), l("424973");
var s = l("917351"),
  u = l.n(s),
  i = l("446674"),
  n = l("913144"),
  r = l("80507"),
  a = l("374363"),
  o = l("42203"),
  h = l("305961"),
  d = l("18494"),
  c = l("162771"),
  p = l("49111"),
  _ = l("397336");
let f = 100,
  R = new r.default({
    computeBonus: () => 100,
    computeWeight: e => {
      let t = 0;
      return 0 === e ? t = 100 : e >= 1 && e < 2 ? t = 70 : e >= 2 && e < 4 ? t = 50 : e >= 4 && e < 7 ? t = 30 : e >= 7 && (t = 10), t
    },
    lookupKey: e => {
      var t, l;
      return null !== (l = null !== (t = h.default.getGuild(e)) && void 0 !== t ? t : o.default.getChannel(e)) && void 0 !== l ? l : o.default.getChannel(o.default.getDMFromUserId(e))
    },
    afterCompute: () => {},
    numFrequentlyItems: f,
    maxSamples: 10
  }),
  y = null,
  E = null;

function C(e) {
  let {
    guildId: t,
    channelId: l
  } = e, s = !1;
  return l !== y && (y = null != l ? l : null, null != l && p.ID_REGEX.test(l) && (s = !0, R.track(l), T.pendingUsages.push({
    key: l,
    timestamp: Date.now()
  }))), t !== E && (E = null != t ? t : null, null != t && p.ID_REGEX.test(t) && (s = !0, R.track(t), T.pendingUsages.push({
    key: t,
    timestamp: Date.now()
  }))), s
}

function g() {
  var e;
  let t = null === (e = a.default.frecencyWithoutFetchingLatest.guildAndChannelFrecency) || void 0 === e ? void 0 : e.guildAndChannels;
  if (null == t) return !1;
  R.overwriteHistory(u.mapValues(t, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  })), T.pendingUsages)
}
let T = {
  pendingUsages: []
};
class m extends i.default.PersistedStore {
  initialize(e) {
    this.waitFor(c.default, d.default), null != e && (e.pendingUsages = e.pendingUsages.filter(e => null != e && p.ID_REGEX.test(e.key)), T = e), this.syncWith([a.default], g)
  }
  getState() {
    return T
  }
  hasPendingUsage() {
    return T.pendingUsages.length > 0
  }
  get frecencyWithoutFetchingLatest() {
    return R
  }
  getFrequentlyWithoutFetchingLatest() {
    return R.frequently
  }
  getScoreWithoutFetchingLatest(e) {
    var t;
    return null !== (t = R.getFrecency(e)) && void 0 !== t ? t : 0
  }
  getScoreForDMWithoutFetchingLatest(e) {
    let t = o.default.getDMFromUserId(e);
    return null != t ? this.getScoreWithoutFetchingLatest(t) : 0
  }
  getMaxScore() {
    return 10 * f
  }
  getBonusScore() {
    return 100
  }
}
m.displayName = "FrecencyStore", m.persistKey = "FrecencyStore";
var A = new m(n.default, {
  CHANNEL_SELECT: C,
  VOICE_CHANNEL_SELECT: C,
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: t
      },
      wasSaved: l
    } = e;
    return t === _.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && !!l && (T.pendingUsages = [], !0)
  }
})