"use strict";
t.r(n), t.d(n, {
  default: function() {
    return u
  }
});
var l = t("884691"),
  s = t("446674"),
  i = t("851387"),
  a = t("697218");

function u(e) {
  let n = (0, s.useStateFromStores)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
  return l.useEffect(() => {
    null == n && (null == e ? void 0 : e.creator_id) != null && i.default.requestMembersById(e.guild_id, e.creator_id)
  }, [e, n]), n
}