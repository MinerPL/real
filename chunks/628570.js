            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("375022"),
                r = n("77078"),
                o = n("272030"),
                u = n("685665"),
                d = n("616265"),
                c = n("141254"),
                f = n("116616"),
                h = n("12896"),
                C = n("305961"),
                p = n("697218"),
                m = n("151185"),
                E = n("472942"),
                g = n("966270"),
                I = n("49111"),
                S = n("243338"),
                _ = n("782340"),
                N = n("823660");
            let T = {
                origin: {
                    x: -16,
                    y: 0
                },
                targetWidth: 48,
                targetHeight: 48,
                offset: {
                    x: 0,
                    y: 0
                }
            };

            function A(e) {
                (0, o.openContextMenuLazy)(e, async () => {
                    let {
                        default: e
                    } = await n.el("946661").then(n.bind(n, "946661"));
                    return t => (0, l.jsx)(e, {
                        ...t
                    })
                })
            }

            function L(e) {
                let {
                    disableTooltip: t,
                    lastTargetNode: n
                } = e, o = (0, s.useStateFromStores)([C.default], () => C.default.getGuilds()), L = a.useMemo(() => Object.values(o), [o]), v = (0, s.useStateFromStores)([p.default], () => p.default.getCurrentUser()), x = a.useMemo(() => L.some(e => e.isOwner(v)), [L, v]), R = (0, r.useModalsStore)(e => (0, r.hasModalOpenSelector)(e, S.CREATE_GUILD_MODAL_KEY)), {
                    analyticsLocations: M
                } = (0, u.default)(), O = (0, r.useRedesignIconContext)().enabled, y = (0, l.jsx)(g.default, {
                    showPill: !1,
                    id: "create-join-button",
                    onClick: () => {
                        (0, c.isAtGuildCapAndNonPremium)() ? (0, f.default)({
                            analyticsSource: {
                                page: I.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL
                            },
                            analyticsLocation: {
                                page: I.AnalyticsLocations.CREATE_JOIN_GUILD_MODAL,
                                section: I.AnalyticsSections.GUILD_CAP_UPSELL_MODAL
                            },
                            analyticsLocations: M
                        }) : d.default.openCreateGuildModal({
                            location: "Guild List"
                        })
                    },
                    selected: R,
                    onContextMenu: A,
                    tooltip: _.default.Messages.ADD_A_SERVER,
                    icon: O ? i.PlusMediumIcon : m.default
                });
                return t ? y : (0, l.jsx)("div", {
                    className: N.tutorialContainer,
                    children: (0, l.jsxs)(h.default, {
                        tutorialId: x ? "create-more-servers" : "create-first-server",
                        inlineSpecs: T,
                        position: "right",
                        children: [y, null != n && (0, l.jsx)(E.default, {
                            name: _.default.Messages.DND_END_OF_LIST,
                            targetNode: n,
                            below: !0,
                            noCombine: !0
                        })]
                    })
                })
            }