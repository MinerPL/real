            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return x
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("446674"),
                i = s("77078"),
                r = s("800751"),
                o = s("685665"),
                d = s("260518"),
                u = s("929423"),
                c = s("424562"),
                S = s("376402"),
                E = s("506885"),
                f = s("621200"),
                m = s("305961"),
                T = s("162771"),
                _ = s("677099"),
                g = s("790618"),
                h = s("697218"),
                I = s("659500"),
                N = s("543306"),
                p = s("49111"),
                C = s("397336"),
                A = s("782340"),
                O = s("792841");

            function x() {
                d.default.useExperiment({
                    location: "profile_customization_auto"
                });
                let e = (0, l.useStateFromStores)([_.default], () => _.default.getFlattenedGuildIds()),
                    t = (0, l.useStateFromStores)([c.default], () => c.default.getGuild()),
                    s = (0, l.useStateFromStores)([T.default], () => T.default.getGuildId()),
                    x = (0, l.useStateFromStores)([m.default], () => m.default.getGuild(null != s ? s : e[0])),
                    M = (0, l.useStateFromStores)([c.default, g.default], () => c.default.showNotice() || g.default.showNotice()),
                    R = null != t ? t : x,
                    v = (0, l.useStateFromStores)([h.default], () => h.default.getCurrentUser()),
                    {
                        subsection: L,
                        setSubsection: D
                    } = (0, N.default)(),
                    {
                        AnalyticsLocationProvider: P,
                        analyticsLocations: j
                    } = (0, o.default)();
                return n.useEffect(() => {
                    null != v && (0, E.default)(v.id, v.getAvatarURL(null == R ? void 0 : R.id, 80), {
                        guildId: null == R ? void 0 : R.id
                    })
                }, [null == R ? void 0 : R.id, v]), (0, a.jsx)(P, {
                    children: (0, a.jsxs)(i.HeadingLevel, {
                        component: (0, a.jsx)(i.Heading, {
                            variant: "heading-lg/semibold",
                            children: A.default.Messages.USER_SETTINGS_PROFILES
                        }),
                        children: [(0, a.jsxs)(i.TabBar, {
                            className: O.tabBar,
                            type: "top",
                            look: "brand",
                            selectedItem: L,
                            onItemSelect: function(e) {
                                if (L !== e) {
                                    if (M) {
                                        I.ComponentDispatch.dispatch(p.ComponentActions.SHAKE_APP, {
                                            duration: 300,
                                            intensity: r.SHAKE_INTENSITY_DEFAULT
                                        }), I.ComponentDispatch.dispatch(p.ComponentActions.EMPHASIZE_NOTICE);
                                        return
                                    }
                                    e === C.ProfileCustomizationSubsection.GUILD && null == t && null != R && (0, u.initGuildIdentitySettings)(R, j), D(e)
                                }
                            },
                            children: [(0, a.jsx)(i.TabBar.Item, {
                                className: O.tabBarItem,
                                id: C.ProfileCustomizationSubsection.USER_PROFILE,
                                children: A.default.Messages.EDIT_PROFILE_CATEGORY_USER_PROFILE
                            }, C.ProfileCustomizationSubsection.USER_PROFILE), (0, a.jsx)(i.TabBar.Item, {
                                className: O.tabBarItem,
                                id: C.ProfileCustomizationSubsection.GUILD,
                                children: A.default.Messages.EDIT_PROFILE_CATEGORY_GUILD_IDENTITY
                            }, C.ProfileCustomizationSubsection.GUILD)]
                        }), L === C.ProfileCustomizationSubsection.GUILD ? (0, a.jsx)(S.default, {
                            selectedGuild: R
                        }) : (0, a.jsx)(f.default, {})]
                    })
                })
            }