            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("446674"),
                l = n("139375"),
                s = n("242740"),
                i = n("393414"),
                r = n("42203"),
                o = n("800762"),
                u = n("848848"),
                d = n("49111");

            function c(e, t) {
                let n = (0, a.useStateFromStores)([r.default], () => r.default.getChannel(t)),
                    {
                        needSubscriptionToAccess: c
                    } = (0, u.default)(null == n ? void 0 : n.id);
                if (null == n || c) return null;
                let f = n.isGuildVocal(),
                    h = (0, l.default)({
                        channel: n
                    });
                return {
                    navigateToChannel: () => {
                        f ? s.default.handleVoiceConnect({
                            channel: n,
                            connected: o.default.isInChannel(n.id),
                            needSubscriptionToAccess: !1,
                            routeDirectlyToChannel: !0
                        }) : (0, i.transitionTo)(d.Routes.CHANNEL(e, n.id))
                    },
                    ariaLabel: h
                }
            }