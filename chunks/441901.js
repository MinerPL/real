            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("65597"),
                l = s("77078"),
                i = s("442379"),
                r = s("305961"),
                o = s("191814"),
                d = s("837008"),
                u = s("397056"),
                c = s("782340");

            function E(e) {
                let {
                    guildId: t,
                    allPeriods: E
                } = e, _ = (0, n.default)([r.default], () => r.default.getGuild(t)), T = (0, d.useSubscriptionListingsForGuild)(t, {
                    includeSoftDeleted: !0
                }), I = (0, i.useGuildProductsForGuild)(t, {
                    publishedOnly: !1
                }), S = E.filter(e => {
                    var t;
                    let s = Object.values(null !== (t = e.ppgs) && void 0 !== t ? t : {})[0];
                    return (null == s ? void 0 : s.status) === u.PaymentPayoutGroupStatuses.OPEN || (null == s ? void 0 : s.status) === u.PaymentPayoutGroupStatuses.PAYOUT_DEFERRED
                }), N = T.length > 0, g = I.length > 0, f = S.length > 0;
                return null == _ ? null : (0, a.jsxs)("div", {
                    children: [(0, a.jsx)(l.FormText, {
                        type: l.FormText.Types.DESCRIPTION,
                        children: c.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_SECTION_DESCRIPTION.format({
                            guildName: _.toString()
                        })
                    }), (0, a.jsx)(o.default, {
                        size: 16
                    }), (0, a.jsx)(l.Button, {
                        disabled: N || g || f,
                        look: l.Button.Looks.FILLED,
                        color: l.Button.Colors.RED,
                        onClick: () => {
                            var e;
                            return e = _, void(0, l.openModalLazy)(async () => {
                                let {
                                    default: t
                                } = await s.el("264514").then(s.bind(s, "264514"));
                                return s => (0, a.jsx)(t, {
                                    ...s,
                                    guild: e
                                })
                            })
                        },
                        children: c.default.Messages.CREATOR_MONETIZATION_SETTINGS_DISABLE_MONETIZATION_CTA
                    })]
                })
            }