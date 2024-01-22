"use strict";
n.r(t), n.d(t, {
  getPendingAudioSettings: function() {
    return P
  },
  default: function() {
    return L
  }
}), n("222007");
var i = n("917351"),
  s = n.n(i),
  r = n("938850"),
  a = n("151426"),
  o = n("95410"),
  l = n("689988"),
  u = n("700507"),
  d = n("76393"),
  c = n("235004"),
  f = n("271938"),
  _ = n("42887"),
  h = n("891760"),
  g = n("504385"),
  m = n("872173"),
  E = n("353927");
let p = e => "AudioContextSettingsMigrated:".concat(e),
  v = e => e === E.MediaEngineContextTypes.STREAM ? r.AudioSettingsDefaultVolumes.STREAM : r.AudioSettingsDefaultVolumes.USER,
  S = {};

function T(e, t) {
  return "".concat(e, ":").concat(t)
}

function I(e, t, n) {
  let i = T(e, t);
  S[i] = {
    ...S[i],
    ...n
  }
}

function C() {
  (0, h.shouldReadWriteAudioSettings)() && ! function() {
    let e = o.default.get(p(f.default.getId()));
    !e && m.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
      let t = !1;
      for (let [n, i] of Object.entries(_.default.getState().settingsByContext)) {
        let s = (0, g.coerceAudioContextForProto)(n);
        if (null == s) continue;
        let r = e[s],
          a = String(Date.now()),
          o = {};
        for (let [e, t] of Object.entries(i.localMutes)) o[e] = {
          muted: t,
          volume: v(n),
          modifiedAt: a,
          soundboardMuted: !1
        };
        for (let [e, t] of Object.entries(i.localVolumes)) o[e] = {
          muted: !1,
          modifiedAt: a,
          ...o[e],
          volume: (0, g.snapVolumeToDefault)(t, n)
        };
        let l = Object.keys(r).length;
        for (let [e, [n, i]] of Object.entries(o).entries()) {
          let s = 300 - l - (e + 1) <= 0;
          if (s) break;
          null == r[n] && (t = !0, r[n] = i)
        }
      }
      return o.default.set(p(f.default.getId()), !0), t
    }, m.UserSettingsDelay.AUTOMATED)
  }()
}
let A = s.debounce(() => {
    N()
  }, 2e3),
  y = s.debounce(u.remoteAudioSettingsUpdate, 500, {
    maxWait: 500
  });

function N() {
  m.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
    let t = !1;
    for (let [n, i] of Object.entries(S)) {
      let [s, r] = function(e) {
        let [t, n] = e.split(":");
        return [t, n]
      }(n), o = function(e, t, n, i) {
        var s, r, o, l, u;
        let d = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          c = (0, g.coerceAudioContextForProto)(n);
        if (null == c) return !1;
        let f = e[c];
        if (f[t] = null !== (s = f[t]) && void 0 !== s ? s : (r = n, a.AudioContextSetting.create({
            muted: !1,
            volume: v(r)
          })), i(f[t]), f[t].modifiedAt = String(Date.now()), d) {
          ;
          o = f, l = t, u = n, o[l].volume !== v(u) || o[l].muted || o[l].soundboardMuted || delete o[l]
        }
        return ! function(e) {
          let t = Object.entries(e),
            n = t.length;
          if (n <= 300) return;
          let i = t.sort((e, t) => {
              let [n, {
                modifiedAt: i
              }] = e, [s, {
                modifiedAt: r
              }] = t;
              return Number(i) - Number(r)
            }),
            s = n - 300;
          for (let t = 0; t < s; t++) {
            let [n] = i[t];
            delete e[n]
          }
        }(f), !0
      }(e, r, s, e => {
        Object.assign(e, i)
      });
      t = t || o
    }
    return S = {}, t
  }, m.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function R(e) {
  var t, n;
  let {
    context: i,
    userId: s,
    volume: r
  } = e;
  if (s === f.default.getId() || !(0, h.shouldReadWriteAudioSettings)()) return;
  let a = d.default.getRemoteSessionId();
  null != a && y(a, s, i, {
    muted: _.default.isLocalMute(s, i),
    volume: r
  }), t = i, n = s, I(t, n, {
    volume: r
  }), A()
}

function O(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== f.default.getId()) {
    if ((0, h.shouldReadWriteAudioSettings)()) {
      var i, s;
      i = t, s = n, I(i, s, {
        muted: _.default.isLocalMute(n, t)
      }), A.cancel(), N()
    }
  }
}

function D(e) {
  let {
    context: t,
    userId: n
  } = e;
  if (n !== f.default.getId()) {
    if ((0, h.shouldReadWriteAudioSettings)()) {
      var i, s;
      i = t, s = n, I(i, s, {
        soundboardMuted: c.default.isLocalSoundboardMuted(n)
      }), A.cancel(), N()
    }
  }
}

function P(e, t) {
  let n = T(t, e);
  return S[n]
}
class b extends l.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: C,
      AUDIO_SET_LOCAL_VOLUME: R,
      AUDIO_TOGGLE_LOCAL_MUTE: O,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: D
    }
  }
}
var L = new b