"use strict";
E.r(_), E.d(_, {
  default: function() {
    return p
  }
}), E("222007");
var t = E("917351"),
  o = E.n(t),
  n = E("938850"),
  r = E("151426"),
  i = E("95410"),
  a = E("689988"),
  I = E("700507"),
  s = E("76393"),
  T = E("235004"),
  S = E("271938"),
  N = E("42887"),
  O = E("891760"),
  A = E("504385"),
  R = E("872173"),
  l = E("353927");
let L = e => "AudioContextSettingsMigrated:".concat(e),
  u = e => e === l.MediaEngineContextTypes.STREAM ? n.AudioSettingsDefaultVolumes.STREAM : n.AudioSettingsDefaultVolumes.USER,
  C = {};

function D(e, _, E) {
  var t, o;
  let n = (t = e, o = _, "".concat(t, ":").concat(o));
  C[n] = {
    ...C[n],
    ...E
  }
}

function c() {
  (0, O.shouldReadWriteAudioSettings)() && ! function() {
    let e = i.default.get(L(S.default.getId()));
    !e && R.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
      let _ = !1;
      for (let [E, t] of Object.entries(N.default.getState().settingsByContext)) {
        let o = (0, A.coerceAudioContextForProto)(E);
        if (null == o) continue;
        let n = e[o],
          r = String(Date.now()),
          i = {};
        for (let [e, _] of Object.entries(t.localMutes)) i[e] = {
          muted: _,
          volume: u(E),
          modifiedAt: r,
          soundboardMuted: !1
        };
        for (let [e, _] of Object.entries(t.localVolumes)) i[e] = {
          muted: !1,
          modifiedAt: r,
          ...i[e],
          volume: (0, A.snapVolumeToDefault)(_, E)
        };
        let a = Object.keys(n).length;
        for (let [e, [E, t]] of Object.entries(i).entries()) {
          let o = 300 - a - (e + 1) <= 0;
          if (o) break;
          null == n[E] && (_ = !0, n[E] = t)
        }
      }
      return i.default.set(L(S.default.getId()), !0), _
    }, R.UserSettingsDelay.AUTOMATED)
  }()
}
let d = o.debounce(() => {
    M()
  }, 2e3),
  U = o.debounce(I.remoteAudioSettingsUpdate, 500, {
    maxWait: 500
  });

function M() {
  R.PreloadedUserSettingsActionCreators.updateAsync("audioContextSettings", e => {
    let _ = !1;
    for (let [E, t] of Object.entries(C)) {
      let [o, n] = function(e) {
        let [_, E] = e.split(":");
        return [_, E]
      }(E), i = function(e, _, E, t) {
        var o, n, i, a, I;
        let s = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4],
          T = (0, A.coerceAudioContextForProto)(E);
        if (null == T) return !1;
        let S = e[T];
        if (S[_] = null !== (o = S[_]) && void 0 !== o ? o : (n = E, r.AudioContextSetting.create({
            muted: !1,
            volume: u(n)
          })), t(S[_]), S[_].modifiedAt = String(Date.now()), s) {
          ;
          i = S, a = _, I = E, i[a].volume !== u(I) || i[a].muted || i[a].soundboardMuted || delete i[a]
        }
        return ! function(e) {
          let _ = Object.entries(e),
            E = _.length;
          if (E <= 300) return;
          let t = _.sort((e, _) => {
              let [E, {
                modifiedAt: t
              }] = e, [o, {
                modifiedAt: n
              }] = _;
              return Number(t) - Number(n)
            }),
            o = E - 300;
          for (let _ = 0; _ < o; _++) {
            let [E] = t[_];
            delete e[E]
          }
        }(S), !0
      }(e, n, o, e => {
        Object.assign(e, t)
      });
      _ = _ || i
    }
    return C = {}, _
  }, R.UserSettingsDelay.INFREQUENT_USER_ACTION)
}

function h(e) {
  var _, E;
  let {
    context: t,
    userId: o,
    volume: n
  } = e;
  if (o === S.default.getId() || !(0, O.shouldReadWriteAudioSettings)()) return;
  let r = s.default.getRemoteSessionId();
  null != r && U(r, o, t, {
    muted: N.default.isLocalMute(o, t),
    volume: n
  }), _ = t, E = o, D(_, E, {
    volume: n
  }), d()
}

function P(e) {
  let {
    context: _,
    userId: E
  } = e;
  if (E !== S.default.getId()) {
    if ((0, O.shouldReadWriteAudioSettings)()) {
      var t, o;
      t = _, o = E, D(t, o, {
        muted: N.default.isLocalMute(E, _)
      }), d.cancel(), M()
    }
  }
}

function m(e) {
  let {
    context: _,
    userId: E
  } = e;
  if (E !== S.default.getId()) {
    if ((0, O.shouldReadWriteAudioSettings)()) {
      var t, o;
      t = _, o = E, D(t, o, {
        soundboardMuted: T.default.isLocalSoundboardMuted(E)
      }), d.cancel(), M()
    }
  }
}
class G extends a.default {
  constructor(...e) {
    super(...e), this.actions = {
      POST_CONNECTION_OPEN: c,
      AUDIO_SET_LOCAL_VOLUME: h,
      AUDIO_TOGGLE_LOCAL_MUTE: P,
      AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE: m
    }
  }
}
var p = new G