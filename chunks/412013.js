            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("37983"),
                l = n("884691"),
                r = n("77078"),
                s = n("581583"),
                a = n("843455");

            function u(e) {
                var t;
                let {
                    guildId: n,
                    role: u,
                    className: o
                } = e, d = (0, r.useToken)(r.tokens.unsafe_rawColors.PRIMARY_300).hex(), c = null !== (t = null == u ? void 0 : u.colorString) && void 0 !== t ? t : d, f = l.useMemo(() => ({
                    backgroundColor: "".concat(c, "27")
                }), [c]);
                return null == u ? null : (0, i.jsx)(s.MemberRole, {
                    className: o,
                    style: f,
                    role: u,
                    guildId: n,
                    canRemove: !1,
                    onRemove: a.NOOP
                })
            }