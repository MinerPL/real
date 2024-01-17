"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("77078"),
  s = n("581583"),
  o = n("843455");

function a(e) {
  var t;
  let {
    guildId: n,
    role: a,
    className: u
  } = e, c = (0, r.useToken)(r.tokens.unsafe_rawColors.PRIMARY_300).hex(), d = null !== (t = null == a ? void 0 : a.colorString) && void 0 !== t ? t : c, f = i.useMemo(() => ({
    backgroundColor: "".concat(d, "27")
  }), [d]);
  return null == a ? null : (0, l.jsx)(s.MemberRole, {
    className: u,
    style: f,
    role: a,
    guildId: n,
    canRemove: !1,
    onRemove: o.NOOP
  })
}