"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("37983"),
  i = n("884691"),
  r = n("77078"),
  s = n("581583"),
  a = n("843455");

function o(e) {
  var t;
  let {
    guildId: n,
    role: o,
    className: u
  } = e, d = (0, r.useToken)(r.tokens.unsafe_rawColors.PRIMARY_300).hex(), c = null !== (t = null == o ? void 0 : o.colorString) && void 0 !== t ? t : d, f = i.useMemo(() => ({
    backgroundColor: "".concat(c, "27")
  }), [c]);
  return null == o ? null : (0, l.jsx)(s.MemberRole, {
    className: u,
    style: f,
    role: o,
    guildId: n,
    canRemove: !1,
    onRemove: a.NOOP
  })
}