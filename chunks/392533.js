            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                },
                GuildDiscoveryMenuPopout: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                i = n("77078"),
                l = n("272030"),
                r = n("861370"),
                o = n("377114"),
                u = n("305961"),
                d = n("957255"),
                c = n("907566"),
                E = n("378662"),
                f = n("49111"),
                _ = n("782340");

            function h(e) {
                let {
                    guild: t,
                    shiftId: n,
                    onSelect: h,
                    closePopout: C,
                    "aria-label": T
                } = e, I = (0, r.default)({
                    id: t.id,
                    label: _.default.Messages.COPY_ID_GUILD,
                    shiftId: n,
                    onSuccess: C
                }), S = (0, s.useStateFromStores)([u.default], () => u.default.getGuild(t.id), [t.id]), N = (0, s.useStateFromStores)([d.default], () => d.default.can(f.Permissions.ADMINISTRATOR, S)), {
                    canSeeInAppReportingButtons: A
                } = E.DiscoveryInAppReportingExperiment.useExperiment({
                    location: "0e35b9_1"
                }, {
                    autoTrackExposure: !1
                }), m = () => {
                    (0, l.closeContextMenu)(), null == C || C()
                };
                return (0, a.jsxs)(i.Menu, {
                    onSelect: h,
                    navId: "guild-discovery-context-menu",
                    "aria-label": null != T ? T : _.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
                    onClose: l.closeContextMenu,
                    children: [(0, a.jsx)(i.MenuGroup, {
                        children: !N && A ? (0, a.jsx)(i.MenuItem, {
                            id: "report-guild-discovery-listing",
                            label: _.default.Messages.REPORT_SERVER_NO_NAME,
                            action: () => {
                                (0, o.showReportModalForDiscoverableGuild)(t), m()
                            },
                            icon: c.default,
                            color: "danger"
                        }) : null
                    }), (0, a.jsx)(i.MenuGroup, {
                        children: I
                    })]
                })
            }
            let C = e => {
                let {
                    guild: t,
                    children: n,
                    onRequestOpen: s,
                    onRequestClose: l
                } = e;
                return (0, a.jsx)(i.Popout, {
                    onRequestOpen: s,
                    onRequestClose: l,
                    animation: i.Popout.Animation.NONE,
                    position: "bottom",
                    spacing: 4,
                    align: "right",
                    renderPopout: e => {
                        let {
                            closePopout: n
                        } = e;
                        return (0, a.jsx)(h, {
                            guild: t,
                            closePopout: n
                        })
                    },
                    children: n
                })
            }