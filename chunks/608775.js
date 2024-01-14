"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("884691"),
  n = s("446674"),
  l = s("150021"),
  i = s("84339"),
  r = s("466227"),
  o = s("153043");
let d = [];

function u(e) {
  let {
    revision: t,
    emojis: s
  } = (0, n.useStateFromStoresObject)([r.default], () => ({
    revision: r.default.getEmojiRevision(e),
    emojis: r.default.getEmojis(e)
  })), u = (0, i.default)(t);
  return a.useEffect(() => {
    (0, l.fetchEmoji)(e)
  }, [e]), a.useEffect(() => {
    null != u && u < t && (0, l.fetchEmoji)(e)
  }, [t, u, e]), a.useMemo(() => null == s ? d : s.filter(t => (0, o.isRoleSubscriptionEmoji)(t, e)), [s, e])
}