            "use strict";
            n.r(t), n.d(t, {
                handleDoubleClick: function() {
                    return C
                },
                default: function() {
                    return L
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("394846"),
                r = n("446674"),
                o = n("812204"),
                u = n("685665"),
                d = n("56947"),
                c = n("76813"),
                f = n("311197"),
                E = n("92790"),
                h = n("697218"),
                _ = n("664336"),
                S = n("773336"),
                T = n("50885"),
                p = n("836056"),
                N = n("922953"),
                I = n("879035"),
                m = n("49111"),
                A = n("724210"),
                g = n("122693");
            async function C() {
                if ((0, S.isMac)() && S.isPlatformEmbedded) {
                    var e, t, n;
                    let l = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
                    "Minimize" === l ? T.default.minimize() : "Maximize" === l && T.default.maximize()
                }
            }

            function R(e) {
                let {
                    children: t,
                    className: n,
                    channelId: a,
                    guildId: s,
                    innerClassname: o,
                    transparent: u = !1,
                    toolbar: S,
                    mobileToolbar: T,
                    "aria-label": m,
                    "aria-labelledby": A,
                    scrollable: R,
                    role: M,
                    hideSearch: O
                } = e, L = (0, r.useStateFromStores)([h.default], () => h.default.getCurrentUser()), v = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1, {
                    showClipsHeaderEntrypoint: D
                } = d.ClipsExperiment.useExperiment({
                    location: "HeaderBarLoggedIn"
                }, {
                    autoTrackExposure: !1
                });
                return (0, l.jsx)(_.default, {
                    className: n,
                    innerClassName: o,
                    toolbar: function() {
                        if (null == S) return null;
                        let e = null != a && !O;
                        return i.isMobile ? T : (0, l.jsxs)(l.Fragment, {
                            children: [S, e ? (0, l.jsx)(E.default, {
                                className: g.search
                            }, null != s ? s : a) : null, (0, l.jsx)(I.default, {}), D && (0, l.jsx)(c.default, {}), (0, l.jsx)(f.default, {}), v ? (0, l.jsx)(N.default, {}) : (0, l.jsx)(p.default, {})]
                        })
                    }(),
                    transparent: u,
                    onDoubleClick: C,
                    "aria-label": m,
                    "aria-labelledby": A,
                    role: M,
                    scrollable: R,
                    children: t
                })
            }

            function M(e) {
                let {
                    children: t,
                    className: n,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i
                } = e;
                return (0, l.jsx)(_.default, {
                    className: n,
                    onDoubleClick: C,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i,
                    children: t
                })
            }

            function O(e) {
                let {
                    isAuthenticated: t = !0,
                    ...n
                } = e, {
                    AnalyticsLocationProvider: a
                } = (0, u.default)(o.default.HEADER_BAR), i = s(n.className, {
                    [g.forumOrHome]: null != n.channelType && m.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === A.StaticChannelRoute.GUILD_HOME
                });
                return (0, l.jsx)(a, {
                    children: t ? (0, l.jsx)(R, {
                        ...n,
                        className: i
                    }) : (0, l.jsx)(M, {
                        ...n,
                        className: i
                    })
                })
            }
            O.Title = _.default.Title, O.Icon = _.default.Icon, O.Divider = _.default.Divider, O.Caret = _.default.Caret;
            var L = O