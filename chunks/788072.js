            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var l = n("37983"),
                a = n("884691"),
                s = n("917351"),
                i = n.n(s),
                r = n("446674"),
                o = n("151426"),
                u = n("47693"),
                d = n("77078"),
                c = n("954732"),
                f = n("362189"),
                E = n("211248"),
                h = n("64318"),
                _ = n("833150"),
                S = n("782340"),
                T = n("643000");

            function p(e) {
                let {
                    setTab: t,
                    badgeState: n,
                    closePopout: s
                } = e, p = (0, r.useStateFromStores)([c.default], () => c.default.getInvites()), [I, m] = a.useState(!1), [A, g] = a.useMemo(() => i.partition(p, e => {
                    let t = (Date.now() - new Date(e.created_at).getTime()) / 1e3;
                    return t < e.ttl
                }), [p]);
                a.useEffect(() => {
                    (0, f.clearUnseenInvites)()
                });
                let C = a.useCallback(async () => {
                    m(!0), await (0, f.deleteAllInvites)(), m(!1)
                }, []);
                return (0, l.jsxs)("div", {
                    className: T.container,
                    children: [(0, l.jsx)(h.default, {
                        tab: o.InboxTab.GAME_INVITES,
                        setTab: t,
                        badgeState: n,
                        closePopout: s,
                        children: (0, l.jsx)(E.default, {
                            className: T.deleteButton,
                            tooltip: S.default.Messages.GAME_INVITES_DELETE_ALL,
                            disabled: I,
                            color: E.CircleIconButtonColors.TERTIARY,
                            icon: (0, l.jsx)(u.TrashIcon, {
                                width: 16,
                                height: 16
                            }),
                            onClick: C
                        })
                    }), (0, l.jsx)(d.AdvancedScrollerThin, {
                        children: (0, l.jsxs)("div", {
                            className: T.invitesContainer,
                            children: [A.length > 0 && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(N, {
                                    title: S.default.Messages.GAME_INVITES_RECENT_HEADER
                                }), (0, l.jsx)(l.Fragment, {
                                    children: A.map(e => (0, l.jsx)(_.default, {
                                        invite: e,
                                        expired: !1
                                    }, e.invite_id))
                                })]
                            }), g.length > 0 && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(N, {
                                    title: S.default.Messages.GAME_INVITES_EXPIRED_HEADER
                                }), (0, l.jsx)(l.Fragment, {
                                    children: g.map(e => (0, l.jsx)(_.default, {
                                        invite: e,
                                        expired: !0
                                    }, e.invite_id))
                                })]
                            })]
                        })
                    })]
                })
            }

            function N(e) {
                let {
                    title: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: T.headerContainer,
                    children: [(0, l.jsx)(d.Text, {
                        className: T.headerTitle,
                        variant: "text-xs/semibold",
                        color: "interactive-normal",
                        children: t
                    }), (0, l.jsx)("div", {
                        className: T.headerDivider
                    })]
                })
            }