            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var a = l("884691"),
                n = l("446674"),
                s = l("42203"),
                r = l("697218"),
                i = l("194051"),
                o = l("754493");

            function u(e) {
                var t;
                let l = (0, n.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
                    u = (0, n.useStateFromStores)([s.default], () => s.default.getChannel(e)),
                    d = (0, n.useStateFromStores)([i.default], () => null != e ? i.default.getBroadcastByChannel(e) : null),
                    c = (0, o.default)(),
                    f = a.useMemo(() => {
                        var e, t;
                        return null !== (t = null == u ? void 0 : null === (e = u.recipients) || void 0 === e ? void 0 : e.map(e => r.default.getUser(e)).filter(e => null != e && e.id !== (null == d ? void 0 : d.userId))) && void 0 !== t ? t : []
                    }, [null == d ? void 0 : d.userId, null == u ? void 0 : u.recipients]);
                return null == l ? [] : c ? f : null !== (t = f.length > 0 ? [l].concat(f) : null == d ? void 0 : d.viewers) && void 0 !== t ? t : []
            }