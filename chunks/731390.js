"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var r = n("37983"),
  i = n("884691"),
  a = n("77078"),
  o = n("390236"),
  l = n("292508"),
  u = n("383294"),
  s = n("913452"),
  d = n("533466"),
  c = n("49111"),
  f = n("268333");

function h(e) {
  let {
    windowKey: t,
    channel: n
  } = e;
  return (0, r.jsx)(l.default, {
    withTitleBar: !0,
    windowKey: t,
    title: n.name,
    channelId: n.id,
    contentClassName: f.popoutContent,
    children: (0, r.jsx)(o.default.Provider, {
      value: n.guild_id,
      children: (0, r.jsx)(d.default, {
        providedChannel: n
      })
    })
  })
}

function p(e, t) {
  let n = (0, s.useOpenInPopoutExperiment)(t),
    o = i.useCallback(() => {
      u.open("".concat(c.PopoutWindowKeys.CHANNEL_POPOUT, "-").concat(e.id), t => (0, r.jsx)(h, {
        windowKey: t,
        channel: e
      }), {
        defaultWidth: 854,
        defaultHeight: 480
      })
    }, [e]);
  return n ? (0, r.jsx)(a.MenuItem, {
    id: "channel-pop-out",
    label: "Open in Popout",
    action: () => o()
  }) : null
}