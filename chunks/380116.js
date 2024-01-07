            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("446674"),
                i = n("174727"),
                r = n("124824"),
                o = n("515496"),
                u = n("568088"),
                d = n("257407"),
                c = n("814711");

            function f(e) {
                let {
                    channel: t
                } = e, n = (0, s.useStateFromStores)([u.default], () => u.default.effectCooldownEndTime), f = l.useMemo(() => null != n ? (n.getTime() - Date.now()) / 1e3 : 0, [n]), {
                    seconds: h
                } = (0, i.default)(null != n ? n : new Date), p = h > 0;
                return (0, a.jsx)(c.default, {
                    renderPopout: e => {
                        let {
                            closePopout: n,
                            onFocus: l
                        } = e;
                        return (0, a.jsx)(r.default, {
                            children: (0, a.jsx)(d.default, {
                                channel: t,
                                closePopout: n,
                                onFocus: l
                            })
                        })
                    },
                    children: e => {
                        let {
                            onMouseEnter: t,
                            ...n
                        } = e;
                        return (0, a.jsx)(o.default, {
                            totalCooldownSeconds: f,
                            remainingCooldownSeconds: h,
                            onMouseEnter: e => {
                                var n, a;
                                return n = e, a = t, void(!p && a(n))
                            },
                            ...n
                        })
                    }
                })
            }