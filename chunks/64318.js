            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("65597"),
                r = n("151426"),
                o = n("77078"),
                u = n("590514"),
                d = n("20606"),
                c = n("954732"),
                f = n("22082"),
                E = n("979268"),
                h = n("520899"),
                _ = n("913796"),
                S = n("826267"),
                T = n("956089"),
                p = n("124031"),
                N = n("782340"),
                I = n("804220");

            function m(e) {
                let t = (0, _.useInDesktopNotificationCenterExperiment)();
                return t ? (0, l.jsx)(A, {
                    ...e
                }) : (0, l.jsx)(g, {
                    ...e
                })
            }

            function A(e) {
                let {
                    tab: t,
                    setTab: n,
                    children: a,
                    badgeState: _,
                    closePopout: m
                } = e, {
                    showReminders: A
                } = E.default.useExperiment({
                    location: "RecentsHeader"
                }, {
                    autoTrackExposure: !1
                }), {
                    enabled: g
                } = f.default.useExperiment({
                    location: "RecentsHeader"
                }), C = (0, i.default)([c.default], () => c.default.getUnseenInviteCount()), R = (0, i.default)([h.default], () => h.default.getMessageReminders()), M = R.length;
                return (0, l.jsxs)(u.Header, {
                    className: s(I.header, I.expanded),
                    children: [(0, l.jsxs)("div", {
                        className: s(I.expandedInboxHeader),
                        children: [(0, l.jsx)(S.default, {
                            className: I.inboxIcon
                        }), (0, l.jsx)(o.Text, {
                            className: I.inboxTitle,
                            variant: "text-lg/semibold",
                            children: N.default.Messages.INBOX
                        }), (0, l.jsx)(p.default, {
                            closePopout: m
                        })]
                    }), (0, l.jsxs)("div", {
                        className: s(I.expandedTabSection),
                        children: [(0, l.jsxs)(o.TabBar, {
                            selectedItem: t,
                            type: "top-pill",
                            onItemSelect: n,
                            children: [(0, l.jsxs)(o.TabBar.Item, {
                                id: r.InboxTab.FOR_YOU,
                                "aria-label": N.default.Messages.FOR_YOU,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.FOR_YOU
                                }),
                                children: [N.default.Messages.FOR_YOU, (null == _ ? void 0 : _.badgeForYou) ? (0, l.jsx)(T.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(I.iconBadge)
                                }) : null]
                            }), (0, l.jsx)(o.TabBar.Item, {
                                id: r.InboxTab.UNREADS,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.UNREADS
                                }),
                                children: N.default.Messages.UNREADS_TAB_LABEL
                            }), (0, l.jsx)(o.TabBar.Item, {
                                "aria-label": N.default.Messages.MENTIONS,
                                id: r.InboxTab.MENTIONS,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.MENTIONS
                                }),
                                children: N.default.Messages.MENTIONS
                            }), g ? (0, l.jsxs)(o.TabBar.Item, {
                                "aria-label": "game_invites",
                                id: r.InboxTab.GAME_INVITES,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.GAME_INVITES
                                }),
                                children: [N.default.Messages.GAME_INVITES, C > 0 ? (0, l.jsx)(T.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(I.iconBadge)
                                }) : null]
                            }) : null, A ? (0, l.jsxs)(o.TabBar.Item, {
                                "aria-label": "todos",
                                id: r.InboxTab.TODOS,
                                className: s(I.tab, I.expanded, {
                                    [I.active]: t === r.InboxTab.TODOS
                                }),
                                children: [N.default.Messages.MESSAGE_REMINDERS_HEADER, M > 0 ? (0, l.jsx)(T.CircleBadge, {
                                    color: d.default.STATUS_DANGER,
                                    className: s(I.iconBadge)
                                }) : null]
                            }) : null]
                        }), (0, l.jsx)("div", {
                            className: I.controls,
                            children: a
                        })]
                    })]
                })
            }

            function g(e) {
                let {
                    tab: t,
                    setTab: n,
                    children: a
                } = e, {
                    showReminders: i
                } = E.default.useExperiment({
                    location: "489e3f_2"
                }, {
                    autoTrackExposure: !1
                }), d = (0, _.useInDesktopNotificationCenterExperiment)(), {
                    enabled: c
                } = f.default.useExperiment({
                    location: "RecentsHeader"
                });
                return (0, l.jsxs)(u.Header, {
                    className: I.header,
                    children: [(0, l.jsxs)(o.TabBar, {
                        selectedItem: t,
                        type: "top-pill",
                        onItemSelect: n,
                        className: I.tabBar,
                        children: [d ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.FOR_YOU,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.FOR_YOU
                            }),
                            children: N.default.Messages.FOR_YOU
                        }) : null, (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.MENTIONS,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.MENTIONS
                            }),
                            children: N.default.Messages.MENTIONS
                        }), (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.UNREADS,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.UNREADS
                            }),
                            children: N.default.Messages.UNREADS_TAB_LABEL
                        }), c ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.GAME_INVITES,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.GAME_INVITES
                            }),
                            children: N.default.Messages.GAME_INVITES
                        }) : null, i ? (0, l.jsx)(o.TabBar.Item, {
                            id: r.InboxTab.TODOS,
                            className: s(I.tab, {
                                [I.active]: t === r.InboxTab.TODOS
                            }),
                            children: N.default.Messages.MESSAGE_REMINDERS_HEADER
                        }) : null]
                    }), (0, l.jsx)("div", {
                        className: I.controls,
                        children: a
                    })]
                })
            }