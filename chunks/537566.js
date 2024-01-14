"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
}), n("424973");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("446674"),
  a = n("383018"),
  u = n("228226"),
  d = n("829290"),
  c = n("503063"),
  f = n("537461"),
  p = i.memo(e => {
    let {
      channel: t,
      type: n,
      activeCommand: i,
      pendingReply: r
    } = e, {
      activeCommandOption: p,
      activeCommandOptionStates: m
    } = (0, s.useStateFromStoresObject)([a.default], () => ({
      activeCommandOption: a.default.getActiveOption(t.id),
      activeCommandOptionStates: a.default.getOptionStates(t.id)
    })), h = (0, d.useShouldShowPTONotice)(t), E = [];
    return (null != i && E.push((0, l.jsx)(u.default, {
      activeCommand: i,
      activeOption: null != p ? p : null,
      optionStates: m
    })), null != r && E.push((0, l.jsx)(c.default, {
      reply: r,
      chatInputType: n
    })), h && E.push((0, l.jsx)(d.StaffPTOBar, {})), 0 === (E = E.map((e, t) => {
      let n = t === E.length - 1;
      return (0, l.jsx)("div", {
        className: o({
          [f.stackedAttachedBar]: !n
        }),
        children: e
      }, t)
    })).length) ? null : (0, l.jsx)("div", {
      className: f.attachedBars,
      children: E
    })
  })