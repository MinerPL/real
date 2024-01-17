"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("256572"),
  r = n("27618"),
  o = n("93427"),
  u = n("95045"),
  d = n("574073"),
  c = n("49111");
let f = l.memo(function(e) {
  let {
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    compact: f = !1
  } = e, E = c.state === i.ReferencedMessageState.LOADED ? c.message : void 0, _ = l.useMemo(() => (null == E ? void 0 : E.content) != null && "" !== E.content ? (0, u.default)(E, {
    formatInline: !0
  }).content : null, [E]), T = (0, a.useStateFromStores)([r.default], () => null != E && r.default.isBlocked(E.author.id), [E]), I = (0, d.useNullableMessageAuthor)(E), m = (0, d.useNullableMessageAuthor)(t);
  return (0, s.jsx)(o.default, {
    repliedAuthor: I,
    baseAuthor: m,
    baseMessage: t,
    channel: n,
    referencedMessage: c,
    content: _,
    compact: f,
    isReplyAuthorBlocked: T
  })
});

function E(e, t, n, l, a) {
  return e.type !== c.MessageTypes.REPLY || null == n ? null : (0, s.jsx)(f, {
    baseMessage: e,
    channel: t,
    referencedMessage: l,
    compact: a
  })
}