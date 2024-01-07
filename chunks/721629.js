            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("305961"),
                r = n("105017"),
                o = n("568734"),
                u = n("843257"),
                d = n("531034"),
                c = n("49111");

            function f(e) {
                var t, n;
                let {
                    channel: f,
                    message: m
                } = e, E = null !== (n = null === (t = m.roleSubscriptionData) || void 0 === t ? void 0 : t.is_renewal) && void 0 !== n && n, _ = E ? (0, d.getRenewButtonLabels)() : (0, d.getJoinButtonLabels)(), h = f.guild_id, p = (0, l.useStateFromStores)([i.default], () => {
                    var e;
                    return null === (e = i.default.getGuild(h)) || void 0 === e ? void 0 : e.systemChannelFlags
                }, [h]), I = null != p && (0, o.hasFlag)(p, c.SystemChannelFlags.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES), T = s.useMemo(() => (0, u.getRoleSubscriptionPurchaseSystemMessageEventProperties)(f, m), [f, m]);
                return I ? null : (0, a.jsx)(r.default, {
                    channel: f,
                    message: m,
                    buttonLabels: _,
                    stickers: d.STICKERS,
                    event: c.AnalyticEvents.ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE_CTA_CLICKED,
                    eventProperties: T
                })
            }