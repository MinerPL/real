"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var l = n("884691"),
  u = n("316693"),
  r = n("828674"),
  i = n("866595"),
  a = n("795228"),
  d = n("49111");

function o(e, t) {
  let n = (0, a.default)(null == e ? void 0 : e.id);
  return l.useMemo(() => {
    let l = null != e ? function(e, t) {
        let n = new Set;
        for (let l of Object.keys(t.permissionOverwrites)) {
          let u = e.roles[l],
            a = t.permissionOverwrites[l];
          (0, r.isSubscriptionRole)(u) && (0, i.isChannelAccessGrantedBy)(t, a) && n.add(u)
        }
        let l = e.getRole(e.id),
          a = null != l && !u.default.has(l.permissions, d.Permissions.VIEW_CHANNEL),
          o = (0, i.isChannelAccessDeniedBy)(t, t.permissionOverwrites[e.id]);
        if (a && !o)
          for (let t of Object.values(e.roles))(0, r.isSubscriptionRole)(t) && (0, i.isAllChannelsRole)(t) && n.add(t);
        return [...n]
      }(e, t) : [],
      a = 0;
    for (let e of l) {
      let t = e.id;
      if (null != t) {
        let e = null == n ? void 0 : n[t];
        null != e && (a += e)
      }
    }
    return a
  }, [n, e, t])
}