"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var a = n("37983");
n("884691");
var l = n("866227"),
  i = n.n(l),
  u = n("446674"),
  r = n("77078"),
  s = n("319165"),
  d = n("755624"),
  o = n("263024"),
  f = n("531674"),
  c = n("782340");

function _(e) {
  let [t, n, l] = (0, u.useStateFromStoresArray)([d.default], () => [d.default.isMuted(e.id), d.default.getMuteConfig(e.id), d.default.hasJoined(e.id)]), _ = (0, s.useMutedUntilText)(n);

  function E(t) {
    o.default.setNotificationSettings(e, {
      muted: t
    })
  }
  return l ? t ? (0, a.jsx)(r.MenuItem, {
    id: "unmute-channel",
    label: e.isForumPost() ? c.default.Messages.UNMUTE_FORUM_POST : c.default.Messages.UNMUTE_THREAD,
    subtext: _,
    action: () => E(!1)
  }) : (0, a.jsx)(r.MenuItem, {
    id: "mute-channel",
    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
    action: () => E(!0),
    children: (0, f.getMuteTimes)().map(t => {
      let {
        value: n,
        label: l
      } = t;
      return (0, a.jsx)(r.MenuItem, {
        id: "".concat(n),
        label: l,
        action: () => (function(t) {
          let n = t > 0 ? i().add(t, "second").toISOString() : null;
          o.default.setNotificationSettings(e, {
            muted: !0,
            mute_config: {
              selected_time_window: t,
              end_time: n
            }
          })
        })(n)
      }, n)
    })
  }) : (0, a.jsx)(r.MenuItem, {
    id: "mute-disabled",
    label: e.isForumPost() ? c.default.Messages.MUTE_FORUM_POST : c.default.Messages.MUTE_THREAD,
    disabled: !0
  })
}