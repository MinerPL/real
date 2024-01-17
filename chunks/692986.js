"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var l = n("37983");
n("884691");
var i = n("446674"),
  u = n("77078"),
  a = n("404118"),
  o = n("629109"),
  r = n("235004"),
  d = n("42887"),
  s = n("945956"),
  c = n("162771"),
  f = n("697218"),
  E = n("423487"),
  _ = n("599110"),
  S = n("49111"),
  T = n("353927"),
  p = n("782340"),
  A = n("113508");

function g(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.MediaEngineContextTypes.DEFAULT,
    n = (0, i.useStateFromStores)([f.default], () => {
      var t;
      return (null === (t = f.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e
    }),
    g = (0, i.useStateFromStores)([r.default], () => r.default.isLocalSoundboardMuted(e)),
    {
      muted: N,
      deafened: C = !1,
      localVideoDisabled: I = !1,
      localVideoAutoDisabled: O = !1
    } = (0, i.useStateFromStoresObject)([d.default], () => n ? {
      muted: d.default.isSelfMute(t),
      deafened: d.default.isSelfDeaf(t)
    } : {
      muted: d.default.isLocalMute(e, t),
      localVideoDisabled: d.default.isLocalVideoDisabled(e, t),
      localVideoAutoDisabled: d.default.isLocalVideoAutoDisabled(e, t)
    }, [n, t, e]),
    U = d.default.supports(T.Features.DISABLE_VIDEO) && !n ? (0, l.jsx)(u.MenuCheckboxItem, {
      id: "disable-video",
      label: p.default.Messages.DISABLE_VIDEO,
      action: () => {
        if (O) {
          a.default.show({
            title: p.default.Messages.UNSTABLE_CONNECTION,
            body: p.default.Messages.UNSTABLE_CONNECTION_REASON_2,
            confirmText: p.default.Messages.TURN_ON_VIDEO_ANYWAY,
            cancelText: p.default.Messages.LEAVE_VIDEO_OFF,
            onConfirm: () => o.default.setDisableLocalVideo(e, S.VideoToggleState.MANUAL_ENABLED)
          });
          return
        }
        let n = I ? S.VideoToggleState.MANUAL_ENABLED : S.VideoToggleState.DISABLED;
        o.default.setDisableLocalVideo(e, n, t)
      },
      checked: I,
      subtext: O ? (0, l.jsxs)("div", {
        className: A.videoPaused,
        children: [(0, l.jsx)(E.default, {
          width: 12,
          className: A.warningCircle
        }), p.default.Messages.UNSTABLE_CONNECTION]
      }) : null
    }, "disable-video") : null,
    m = n ? null : (0, l.jsx)(u.MenuCheckboxItem, {
      id: "soundboard-sound-mute",
      label: p.default.Messages.MUTE_SOUNDBOARD,
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
  return n ? [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: p.default.Messages.SOUND_MUTE,
    action: () => o.default.toggleSelfMute({
      context: t
    }),
    checked: N
  }, "self-mute"), (0, l.jsx)(u.MenuCheckboxItem, {
    id: "deafen",
    label: p.default.Messages.DEAFEN,
    action: () => o.default.toggleSelfDeaf({
      context: t
    }),
    checked: C
  }, "self-deafen"), U] : [(0, l.jsx)(u.MenuCheckboxItem, {
    id: "mute",
    label: p.default.Messages.SOUND_MUTE,
    action: () => o.default.toggleLocalMute(e, t),
    checked: N
  }, "self-mute"), m, U]
}