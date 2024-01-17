"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var s = n("37983");
n("884691");
var l = n("414456"),
  a = n.n(l),
  i = n("574073"),
  r = n("780571"),
  o = n("497880"),
  u = n("93332"),
  d = n("97194");

function c(e) {
  let {
    message: t,
    channel: n,
    content: l,
    className: c,
    compact: f,
    popoutProps: E,
    hideTimestamp: _ = !1,
    withFooter: T = !1,
    ...I
  } = e, m = (0, i.default)(t);
  return (0, s.jsx)("div", {
    className: a({
      [d.withFooter]: T
    }, d.embedCard, {
      [d.compact]: f
    }, c),
    children: (0, s.jsx)(r.default, {
      ...I,
      className: a(d.messageContainer, {
        [d.compact]: f
      }),
      childrenMessageContent: (0, s.jsx)(o.default, {
        className: a(d.messageContent, {
          [d.compact]: f
        }),
        message: t,
        content: l
      }),
      childrenHeader: (0, s.jsx)(u.default, {
        message: t,
        channel: n,
        author: m,
        guildId: null == n ? void 0 : n.guild_id,
        compact: f,
        hideTimestamp: _,
        className: a(d.header, {
          [d.compact]: f
        }),
        ...null != E ? E : {}
      }),
      compact: f
    })
  })
}