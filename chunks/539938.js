            "use strict";
            n.r(t), n.d(t, {
                handleDoubleClick: function() {
                    return g
                },
                default: function() {
                    return O
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
                d = n("76813"),
                c = n("311197"),
                f = n("92790"),
                E = n("697218"),
                _ = n("664336"),
                h = n("773336"),
                S = n("50885"),
                T = n("836056"),
                p = n("922953"),
                N = n("879035"),
                I = n("49111"),
                m = n("724210"),
                A = n("122693");
            async function g() {
                if ((0, h.isMac)() && h.isPlatformEmbedded) {
                    var e, t, n;
                    let l = null !== (n = await (null === (e = (t = window.DiscordNative.remoteApp).getDefaultDoubleClickAction) || void 0 === e ? void 0 : e.call(t))) && void 0 !== n ? n : "Maximize";
                    "Minimize" === l ? S.default.minimize() : "Maximize" === l && S.default.maximize()
                }
            }

            function C(e) {
                let {
                    children: t,
                    className: n,
                    channelId: a,
                    guildId: s,
                    innerClassname: o,
                    transparent: u = !1,
                    toolbar: h,
                    mobileToolbar: S,
                    "aria-label": I,
                    "aria-labelledby": m,
                    scrollable: C,
                    role: R,
                    hideSearch: M,
                    showDivider: O
                } = e, L = (0, r.useStateFromStores)([E.default], () => E.default.getCurrentUser()), v = (null == L ? void 0 : L.isStaff()) || (null == L ? void 0 : L.isStaffPersonal()) || !1;
                return (0, l.jsx)(_.default, {
                    className: n,
                    innerClassName: o,
                    toolbar: function() {
                        if (null == h) return null;
                        let e = null != a && !M;
                        return i.isMobile ? S : (0, l.jsxs)(l.Fragment, {
                            children: [h, e ? (0, l.jsx)(f.default, {
                                className: A.search
                            }, null != s ? s : a) : null, O && (0, l.jsx)(_.default.Divider, {}), (0, l.jsx)(N.default, {}), (0, l.jsx)(d.default, {
                                canShowReminder: !0
                            }), (0, l.jsx)(c.default, {}), v ? (0, l.jsx)(p.default, {}) : (0, l.jsx)(T.default, {})]
                        })
                    }(),
                    transparent: u,
                    onDoubleClick: g,
                    "aria-label": I,
                    "aria-labelledby": m,
                    role: R,
                    scrollable: C,
                    children: t
                })
            }

            function R(e) {
                let {
                    children: t,
                    className: n,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i
                } = e;
                return (0, l.jsx)(_.default, {
                    className: n,
                    onDoubleClick: g,
                    "aria-label": a,
                    "aria-labelledby": s,
                    role: i,
                    children: t
                })
            }

            function M(e) {
                let {
                    isAuthenticated: t = !0,
                    ...n
                } = e, {
                    AnalyticsLocationProvider: a
                } = (0, u.default)(o.default.HEADER_BAR), i = s(n.className, {
                    [A.forumOrHome]: null != n.channelType && I.ChannelTypesSets.GUILD_THREADS_ONLY.has(n.channelType) || n.channelId === m.StaticChannelRoute.GUILD_HOME
                });
                return (0, l.jsx)(a, {
                    children: t ? (0, l.jsx)(C, {
                        ...n,
                        className: i
                    }) : (0, l.jsx)(R, {
                        ...n,
                        className: i
                    })
                })
            }
            M.Title = _.default.Title, M.Icon = _.default.Icon, M.Divider = _.default.Divider, M.Caret = _.default.Caret;
            var O = M