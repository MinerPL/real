            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("446674"),
                a = n("305961"),
                l = n("49111");
            let i = e => {
                switch (null == e ? void 0 : e.state) {
                    case l.InviteStates.EXPIRED:
                    case l.InviteStates.BANNED:
                    case l.InviteStates.ERROR:
                    case l.InviteStates.RESOLVING:
                        return !1;
                    default:
                        return !0
                }
            };
            var r = e => {
                let t = null == e ? void 0 : e.expires_at,
                    n = !i(e),
                    l = (0, s.useStateFromStores)([a.default], () => {
                        var t;
                        return null != a.default.getGuild(null == e ? void 0 : null === (t = e.guild) || void 0 === t ? void 0 : t.id)
                    });
                return l || n || null == t ? null : t
            }