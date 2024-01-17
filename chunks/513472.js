"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
});
var i = n("37983");
n("884691");
var s = n("866227"),
  a = n.n(s),
  l = n("446674"),
  u = n("77078"),
  d = n("519705"),
  o = n("531674"),
  r = n("319165"),
  c = n("282109"),
  f = n("34676"),
  S = n("782340");

function g(e, t) {
  let n = null == e ? void 0 : e.id,
    {
      muted: s,
      muteConfig: g
    } = (0, l.useStateFromStoresObject)([c.default], () => ({
      muted: null != n ? c.default.isMuted(n) : void 0,
      muteConfig: null != n ? c.default.getMuteConfig(n) : void 0
    }), [n]),
    E = (0, r.useMutedUntilText)(g);
  return null == n ? null : s ? (0, i.jsx)(u.MenuItem, {
    id: "unmute-guild",
    label: S.default.Messages.UNMUTE_SERVER,
    subtext: E,
    action: () => d.default.updateGuildNotificationSettings(n, {
      muted: !1
    }, f.NotificationLabels.Unmuted)
  }) : (0, i.jsx)(u.MenuItem, {
    id: "mute-guild",
    label: S.default.Messages.MUTE_SERVER,
    action: () => d.default.updateGuildNotificationSettings(n, {
      muted: !0
    }, f.NotificationLabels.Muted),
    children: (0, o.getMuteTimes)().map(e => {
      let {
        value: s,
        label: l
      } = e;
      return (0, i.jsx)(u.MenuItem, {
        id: "".concat(s),
        label: l,
        action: () => (function(e) {
          if (null == n) return;
          let i = e > 0 ? a().add(e, "second").toISOString() : null;
          d.default.updateGuildNotificationSettings(n, {
            muted: !0,
            mute_config: {
              selected_time_window: e,
              end_time: i
            }
          }, f.NotificationLabels.Muted, t)
        })(s)
      }, s)
    })
  })
}