            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("669491"),
                r = n("77078"),
                o = n("630086"),
                u = n("716241"),
                d = n("442939"),
                c = n("393414"),
                f = n("546463"),
                h = n("697218"),
                C = n("953109"),
                p = n("774223"),
                m = n("158998"),
                E = n("754493"),
                g = n("813531"),
                I = n("395635"),
                S = n("49111"),
                _ = n("782340"),
                N = n("795329");

            function T(e) {
                var t;
                let {
                    userId: n,
                    applicationId: a
                } = e, i = (0, s.useStateFromStores)([h.default], () => h.default.getUser(n)), o = null !== (t = m.default.getGlobalName(i)) && void 0 !== t ? t : m.default.getUserTag(i), u = (0, s.useStateFromStores)([f.default], () => {
                    var e;
                    return null === (e = f.default.getDetectableGame(a)) || void 0 === e ? void 0 : e.id
                }), c = (0, d.useGetOrFetchApplication)(u);
                return null == i ? null : (0, l.jsxs)("div", {
                    className: N.broadcast,
                    children: [(0, l.jsxs)("div", {
                        children: [(0, l.jsxs)("div", {
                            className: N.inline,
                            children: [(0, l.jsx)(r.Avatar, {
                                size: r.AvatarSizes.SIZE_16,
                                src: i.getAvatarURL(null, 16),
                                "aria-label": o
                            }), (0, l.jsx)(r.Text, {
                                variant: "text-sm/semibold",
                                children: o
                            })]
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: (null == c ? void 0 : c.name) != null ? _.default.Messages.STREAMING.format({
                                name: c.name
                            }) : _.default.Messages.STREAMING_A_GAME
                        })]
                    }), (0, l.jsx)(C.default, {
                        game: c
                    })]
                })
            }

            function A(e) {
                let {
                    closePopout: t
                } = e, n = (0, g.default)(), s = n.slice(0, 3), d = (0, E.default)(), f = n.length - s.length;
                return a.useEffect(() => {
                    u.default.trackWithMetadata(S.AnalyticEvents.BROADCAST_POPOUT_VIEWED, {
                        num_broadcasts_shown: s.length,
                        num_active_broadcasts: n.length,
                        is_broadcasting: d
                    })
                }, [n.length, s.length, d]), (0, l.jsxs)("div", {
                    className: N.container,
                    children: [(0, l.jsxs)("div", {
                        className: N.header,
                        children: [(0, l.jsxs)("div", {
                            className: N.inline,
                            children: [(0, l.jsx)(p.default, {
                                color: i.default.colors.HEADER_PRIMARY.css,
                                height: 16,
                                width: 16
                            }), (0, l.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                color: "header-primary",
                                children: _.default.Messages.LIVE_BROADCASTS
                            })]
                        }), (0, l.jsx)(I.default, {})]
                    }), s.map((e, t) => (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(T, {
                            ...e
                        }, e.userId), t !== s.length - 1 && (0, l.jsx)("hr", {
                            className: N.separator
                        })]
                    })), f > 0 && (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("hr", {
                            className: N.separator
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/medium",
                            color: "header-secondary",
                            children: _.default.Messages.MORE_OPEN_BROADCASTS.format({
                                count: f
                            })
                        })]
                    }), (0, l.jsx)(r.Button, {
                        onClick: () => {
                            (0, c.transitionTo)(S.Routes.ME), o.default.setSection(S.FriendsSections.ONLINE), u.default.trackWithMetadata(S.AnalyticEvents.BROADCAST_LIST_VISITED, {
                                num_active_broadcasts: n.length,
                                friends_tab_clicked: !1,
                                is_broadcasting: d
                            }), t()
                        },
                        className: N.button,
                        children: _.default.Messages.VIEW_OPEN_BROADCASTS
                    })]
                })
            }