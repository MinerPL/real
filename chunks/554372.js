"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("446674"),
  i = n("256572"),
  r = n("27618"),
  o = n("93427"),
  u = n("95045"),
  d = n("574073"),
  c = n("49111");
let f = s.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    compact: f = !1
  } = e, m = c.state === i.ReferencedMessageState.LOADED ? c.message : void 0, E = s.useMemo(() => (null == m ? void 0 : m.content) != null && "" !== m.content ? (0, u.default)(m, {
    formatInline: !0
  }).content : null, [m]), _ = (0, l.useStateFromStores)([r.default], () => null != m && r.default.isBlocked(m.author.id), [m]), h = (0, d.useNullableMessageAuthor)(m), p = (0, d.useNullableMessageAuthor)(t);
  return (0, a.jsx)(o.default, {
    repliedAuthor: h,
    baseAuthor: p,
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    content: E,
    compact: f,
    isReplyAuthorBlocked: _
  })
});

function m(e, t, n, s, l) {
  return e.type !== c.MessageTypes.REPLY || null == n ? null : (0, a.jsx)(f, {
    baseMessage: e,
    channel: t,
    referencedMessage: s,
    compact: l
  })
}