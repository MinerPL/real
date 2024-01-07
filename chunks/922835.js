            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("151426"),
                r = s("77078"),
                o = s("228100"),
                d = s("10641"),
                u = s("900938"),
                c = s("490683"),
                E = s("432153"),
                _ = s("505705"),
                T = s("179234"),
                I = s("459662"),
                S = s("49111"),
                N = s("988268"),
                g = s("276541");

            function f() {
                let e;
                let t = (0, l.useStateFromStores)([u.default], () => u.default.getGuild()),
                    {
                        application: s,
                        loading: f
                    } = (0, o.default)(null == t ? void 0 : t.id, N.ApplicationTypes.GUILD_ROLE_SUBSCRIPTIONS),
                    A = n.useRef(null),
                    L = (0, c.default)(null != t ? t : void 0);
                n.useEffect(() => {
                    null != t && (0, E.isEligibleForNewBadge)(t) && (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.SERVER_SUBSCRIPTION_SETTINGS_NEW_BADGE_TIER_TEMPLATE)
                }, [t]);
                let m = (null == t ? void 0 : t.hasFeature(S.GuildFeatures.CREATOR_MONETIZABLE)) === !1 && (null == t ? void 0 : t.hasFeature(S.GuildFeatures.CREATOR_MONETIZABLE_PROVISIONAL)) === !1;
                return e = null == t || f ? (0, a.jsx)(r.Spinner, {}) : null != L ? (0, a.jsx)(T.default, {
                    guild: t,
                    config: L
                }) : m ? (0, a.jsx)(I.default, {
                    guild: t
                }) : (0, a.jsx)(_.default, {
                    guild: t,
                    application: s
                }), (0, a.jsx)("div", {
                    className: g.settingsColumn,
                    children: (0, a.jsx)("div", {
                        className: g.settingsContainer,
                        children: (0, a.jsx)(r.ScrollerAuto, {
                            className: g.settingsScroller,
                            children: (0, a.jsx)("main", {
                                ref: A,
                                className: g.settingsContent,
                                children: (0, a.jsx)(r.FocusRingScope, {
                                    containerRef: A,
                                    children: e
                                })
                            })
                        })
                    })
                })
            }