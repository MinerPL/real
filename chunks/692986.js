"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  a = n("77078"),
  u = n("404118"),
  o = n("629109"),
  d = n("235004"),
  r = n("42887"),
  s = n("945956"),
  c = n("162771"),
  f = n("697218"),
  E = n("423487"),
  _ = n("599110"),
  S = n("49111"),
  T = n("353927"),
  A = n("782340"),
  p = n("113508");

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT,
    n = (0, i.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    g = (0, i.useStateFromStores)([d.default], () => d.default.isLocalSoundboardMuted(e)),
    {
      muted: I,
      deafened: N = !1,
      localVideoDisabled: C = !1,
      localVideoAutoDisabled: O = !1
    } = (0, i.useStateFromStoresObject)([r.default], () => n ? {
      muted: r.default.isSelfMute(t),
      deafened: r.default.isSelfDeaf(t)
    } : {
      muted: r.default.isLocalMute(e, t),
      localVideoDisabled: r.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: r.default.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    m = r.default.supports(T.Features.DISABLE_VIDEO) && !n ? (0, l.jsx)(a.MenuCheckboxItem, {
      id: "disable-video",
      label: A.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (O) {
          u.default.show({
            title: A.default.Messages.UNSTABLE_CONNECTION,
            body: A.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: A.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: A.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => o.default.setDisableLocalVideo(e, S.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let n = C ? S.VideoToggleState.MANUAL_ENABLED : S.VideoToggleState.DISABLED;
        o.default.setDisableLocalVideo(e, n, t)
      },
      checked: C,
      subtext: O ? (0, l.jsxs)("div", {
        className: p.videoPaused,
        children: [(0, l.jsx)(E.default, {
          width: 12,
          className: p.warningCircle
        }), A.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    U = n ? null : (0, l.jsx)(a.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: A.default.Messages.MUTE_SOUNDBOARD,
      action: () => {
        let n = s.default.getRTCConnection();
        _.default.track(S.AnalyticEvents.AUDIO_LOCAL_SOUNDBOARD_MUTE_TOGGLED, {
          guild_id: c.default.getGuildId(),
          target_user_id: e,
          media_session_id: null == n ? void 0 : n.getMediaSessionId(),
          parent_media_session_id: null == n ? void 0 : n.parentMediaSessionId,
          mute_soundboard: !g
        }), o.default.toggleLocalSoundboardMute(e, t)
      },
      checked: g
    }, "soundboard-sound-mute");
  return n ? [(0, l.jsx)(a.MenuCheckboxItem, {
    id: "mute",
    label: A.default.Messages.SOUND_MUTE,
    action: () => o.default.toggleSelfMute({
      context: t
    }),
    checked: I
  }, "self-mute"), (0, l.jsx)(a.MenuCheckboxItem, {
    id: "deafen",
    label: A.default.Messages.DEAFEN,
    action: () => o.default.toggleSelfDeaf({
      context: t
    }),
    checked: N
  }, "self-deafen"), m] : [(0, l.jsx)(a.MenuCheckboxItem, {
    id: "mute",
    label: A.default.Messages.SOUND_MUTE,
    action: () => o.default.toggleLocalMute(e, t),
    checked: I
  }, "self-mute"), U, m]
}