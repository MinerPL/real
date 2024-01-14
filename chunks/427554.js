"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var l = n("37983");
n("884691");
var s = n("414456"),
  u = n.n(s),
  i = n("249654"),
  a = n("77078"),
  o = n("276676"),
  r = n("123030"),
  d = n("782340"),
  c = n("849882");

function f(e) {
  let {
    guildId: t,
    recurrenceRule: n,
    guildEventId: s,
    onRecurrenceClick: f,
    hideScroller: E = !1,
    activeRecurrenceId: h
  } = e, {
    recurrenceStartTimes: C,
    canViewMoreRecurrences: v,
    updateRecurrenceStartTimes: N
  } = (0, o.default)(s, t, n);
  return (0, l.jsxs)("div", {
    className: c.recurrences,
    children: [(0, l.jsx)(a.Heading, {
      variant: "heading-sm/medium",
      className: c.heading,
      children: d.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
    }), (0, l.jsxs)(a.Scroller, {
      className: u(c.scroller, {
        [c.showScroller]: !E
      }),
      children: [C.map(e => {
        let t = i.default.fromTimestamp(e.getTime());
        return (0, l.jsx)(r.default, {
          recurrenceId: t,
          originalScheduledStartTime: e,
          guildEventId: s,
          onClick: f,
          isActive: t === h
        }, t)
      }), v && (0, l.jsx)(a.Button, {
        grow: !1,
        onClick: e => {
          e.stopPropagation(), N()
        },
        look: a.Button.Looks.LINK,
        size: a.Button.Sizes.MIN,
        color: a.Button.Colors.LINK,
        className: c.button,
        children: d.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
      })]
    })]
  })
}