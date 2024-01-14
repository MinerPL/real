"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("884691"),
  n = s("446674"),
  l = s("850068"),
  i = s("521012"),
  r = s("656506"),
  o = s("677795");
let d = [];

function u() {
  let {
    ensureFresh: e = !1
  } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = (0, r.default)() === o.UserGuildRoleSubscriptionRelationship.SUBSCRIBED, s = (0, n.useStateFromStores)([i.default], () => i.default.getActiveGuildSubscriptions()), u = a.useRef(!1);
  return a.useEffect(() => {
    (function(e) {
      var t;
      let {
        ensureFresh: s,
        hasFetched: a,
        hasRoleSubscriptions: n
      } = e, l = i.default.getActiveGuildSubscriptions();
      return (null !== (t = null == l ? void 0 : l.length) && void 0 !== t ? t : 0) === 0 && !!n || !!s && !a || !a && !i.default.hasFetchedSubscriptions()
    })({
      ensureFresh: e,
      hasRoleSubscriptions: t,
      hasFetched: u.current
    }) && (u.current = !0, l.fetchSubscriptions())
  }, [e, t]), null != s ? s : d
}