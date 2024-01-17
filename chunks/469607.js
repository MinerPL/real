"use strict";
t.r(n), t.d(n, {
  default: function() {
    return T
  }
}), t("424973"), t("222007");
var u = t("917351"),
  l = t.n(u),
  i = t("693566"),
  o = t.n(i),
  a = t("446674"),
  d = t("913144"),
  r = t("80507"),
  s = t("374363"),
  c = t("697218"),
  _ = t("880342"),
  f = t("235004"),
  E = t("389480"),
  S = t("846325"),
  C = t("397336");
let y = [],
  m = new o({
    max: S.NUM_RECENTLY_HEARD_SOUNDS
  }),
  A = new r.default({
    computeBonus: () => 100,
    computeWeight: e => {
      let n = 0;
      return e <= 3 ? n = 100 : e <= 15 ? n = 70 : e <= 30 ? n = 50 : e <= 45 ? n = 30 : e <= 80 && (n = 10), n
    },
    lookupKey: e => f.default.getSoundById(e),
    afterCompute: () => {},
    numFrequentlyItems: S.NUM_FREQUENTLY_USED_SOUNDS
  });

function g() {
  var e, n;
  if (!U()) return;
  let t = null === (e = s.default.frecencyWithoutFetchingLatest.playedSoundFrecency) || void 0 === e ? void 0 : e.playedSounds;
  A.overwriteHistory((n = null != t ? t : {}, l.mapValues(n, e => ({
    ...e,
    recentUses: e.recentUses.map(Number).filter(e => e > 0)
  }))), y)
}

function U() {
  return (0, _.recentlyHeardExperiment)({
    location: "soundboard_event_store",
    autoTrackExposure: !1
  }).canSeeFrequentlyPlayed
}
class I extends a.default.PersistedStore {
  initialize(e) {
    this.waitFor(c.default, f.default), (null == e ? void 0 : e.recentlyHeardCache) != null && m.load(e.recentlyHeardCache), (null == e ? void 0 : e.playedEventsPendingFlush) != null && (y = e.playedEventsPendingFlush), this.syncWith([s.default], g)
  }
  getState() {
    return {
      recentlyHeardCache: m.dump(),
      playedEventsPendingFlush: y
    }
  }
  hasPendingUsage() {
    return y.length > 0
  }
  get playedSoundHistory() {
    return A.usageHistory
  }
  get recentlyHeardSoundIds() {
    return m.values()
  }
  get frecentlyPlayedSounds() {
    return A.frequently
  }
}
I.displayName = "SoundboardEventStore", I.persistKey = "SoundboardEventStore";
var T = new I(d.default, {
  GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY: function(e) {
    let {
      sound: n,
      trigger: t
    } = e;
    if (!U()) return;
    let u = n.soundId.toString();
    t === E.LocalSoundTrigger.SOUNDBOARD && function(e) {
      A.track(e), y.push({
        key: e,
        timestamp: Date.now()
      }), A.compute()
    }(u)
  },
  GUILD_SOUNDBOARD_SOUND_PLAY_START: function(e) {
    var n;
    let {
      soundId: t,
      userId: u
    } = e;
    if (! function() {
        return (0, _.recentlyHeardExperiment)({
          location: "soundboard_event_store",
          autoTrackExposure: !1
        }).canSeeRecentlyHeard
      }()) return;
    let l = t.toString(),
      i = null === (n = c.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
    u !== i && function(e) {
      let n = f.default.getSounds();
      for (let t of n.values()) {
        let n = t.find(n => n.soundId.toString() === e);
        if (null != n) return !0
      }
      return !1
    }(l) && function(e) {
      m.set(e, e)
    }(l)
  },
  USER_SETTINGS_PROTO_UPDATE: function(e) {
    let {
      settings: {
        type: n
      },
      wasSaved: t
    } = e;
    U() && n === C.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS && t && (y = [])
  }
})