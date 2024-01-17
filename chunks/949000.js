"use strict";
n.r(t), n.d(t, {
  default: function() {
    return A
  }
}), n("222007");
var a = n("37983");
n("884691");
var s = n("77078"),
  i = n("913144"),
  l = n("139321"),
  r = n("269596"),
  o = n("42203"),
  u = n("42887"),
  d = n("18494"),
  c = n("227602"),
  f = n("447973"),
  E = n("305122"),
  _ = n("235004"),
  h = n("245463"),
  C = n("520497"),
  I = n("812809"),
  T = n("435895"),
  S = n("49111"),
  m = n("353927");
class p extends f.default {
  _initialize() {
    super._initialize(), !__OVERLAY__ && i.default.subscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  _terminate() {
    super._terminate(), !__OVERLAY__ && i.default.unsubscribe("OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST", this._handleOverlaySoundboardSoundsFetchRequest)
  }
  constructor(...e) {
    var t;
    super(...e), t = this, this.playingSoundsWeb = new Map, this._stopAndClearSounds = () => {
      u.default.supports(m.Features.SAMPLE_PLAYBACK) && u.default.getMediaEngine().eachConnection(e => {
        e.stopAllSamplesLocalPlayback()
      }), this.playingSoundsWeb.forEach(e => {
        e.pause(), e.src = ""
      }), this.playingSoundsWeb = new Map
    }, this._playSound = async function(e) {
      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = arguments.length > 3 ? arguments[3] : void 0,
        i = null != s && d.default.getVoiceChannelId() === s;
      if ((null == s || i) && !u.default.isDeaf() && !_.default.isLocalSoundboardMuted(a)) try {
        let s = {
          soundKey: "".concat(a, "-").concat(e),
          soundURL: (0, C.default)(e),
          soundVolume: (0, I.default)(n),
          reportSoundStartedPlaying: () => (0, E.reportSoundStartedPlaying)(e, a)
        };
        u.default.supports(m.Features.SAMPLE_PLAYBACK) ? await (0, T.playDesktopSound)(s) : await (0, T.playWebSound)(s, t.playingSoundsWeb)
      } finally {
        (0, E.reportSoundFinishedPlaying)(e, a)
      }
    }, this._handleOverlaySoundboardSoundsFetchRequest = () => {
      (0, E.maybeFetchSoundboardSounds)()
    }, this._handleOpenEducationModal = (e, t) => {
      if (null == e) return;
      let i = o.default.getChannel(t),
        u = c.default.getKeybindForAction(S.GlobalKeybindActions.SOUNDBOARD_HOLD);
      null != i && (0, h.default)(i) && null != u && r.default.hasHotspot(l.HotspotLocations.SOUNDBOARD_WHEEL_EDUCATION_MODAL) && (0, s.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("170441").then(n.bind(n, "170441"));
        return n => (0, a.jsx)(t, {
          ...n,
          guildId: e,
          keybind: u,
          channel: i
        })
      })
    }
  }
}
var A = new p