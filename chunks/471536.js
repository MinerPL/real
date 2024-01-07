            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return N
                }
            }), s("222007");
            var a = s("37983"),
                l = s("884691"),
                i = s("414456"),
                d = s.n(i),
                r = s("917351"),
                n = s.n(r),
                o = s("77078"),
                c = s("446674"),
                u = s("272030"),
                T = s("305961"),
                x = s("677099"),
                m = s("476263"),
                h = s("68238"),
                I = s("380353"),
                M = s("782340"),
                g = s("471665");

            function N(e) {
                let {
                    guildPlans: t,
                    overrideGuild: s
                } = e, [i, d] = l.useState(!1), r = (0, c.useStateFromStores)([x.default], () => x.default.getFlattenedGuildIds()), u = l.useMemo(() => n(t).values().filter(e => i || e.confidence === I.Confidence.Low).sortBy(e => {
                    let t = r.indexOf(e.guildId);
                    return -1 === t ? r.length : t
                }).value(), [t, r, i]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)("div", {
                        className: g.container,
                        children: [(0, a.jsx)(f, {
                            header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_TITLE.format(),
                            subtitle: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_SUBTITLE,
                            tooltip: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_1_TOOLTIP.format(),
                            className: g.everything,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === I.Mode.CareALot
                            }),
                            overrideGuild: s
                        }), (0, a.jsx)(f, {
                            header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_TITLE.format(),
                            subtitle: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_SUBTITLE,
                            tooltip: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_2_TOOLTIP.format(),
                            className: g.essentials,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === I.Mode.CareALittle
                            }),
                            overrideGuild: s
                        }), (0, a.jsx)(f, {
                            header: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_TITLE.format(),
                            subtitle: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_SUBTITLE,
                            tooltip: M.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_BOX_3_TOOLTIP.format(),
                            className: g.none,
                            guildPlans: u.filter(e => {
                                var t;
                                return (null !== (t = e.overrideMode) && void 0 !== t ? t : e.mode) === I.Mode.DontCare
                            }),
                            overrideGuild: s
                        })]
                    }), (0, a.jsx)("div", {
                        className: g.showAllCheckboxContainer,
                        children: (0, a.jsx)(o.Checkbox, {
                            type: o.Checkbox.Types.INVERTED,
                            value: i,
                            onChange: (e, t) => d(t),
                            className: g.showAllCheckbox,
                            children: (0, a.jsx)(o.Text, {
                                variant: "text-sm/medium",
                                color: "header-secondary",
                                children: M.default.Messages.NOTIFICATION_MIGRATION_SHOW_ALL
                            })
                        })
                    })]
                })
            }

            function f(e) {
                let {
                    header: t,
                    subtitle: s,
                    tooltip: l,
                    className: i,
                    guildPlans: r,
                    overrideGuild: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: d(g.column, i),
                    children: [(0, a.jsxs)("div", {
                        className: g.header,
                        children: [(0, a.jsxs)("div", {
                            className: g.headerLeft,
                            children: [(0, a.jsx)(o.Text, {
                                variant: "text-md/semibold",
                                color: "header-primary",
                                children: t
                            }), (0, a.jsx)(o.Text, {
                                variant: "text-xs/medium",
                                color: "header-secondary",
                                children: s
                            })]
                        }), (0, a.jsx)("div", {
                            className: g.headerRight,
                            children: (0, a.jsx)(o.Tooltip, {
                                text: l,
                                tooltipClassName: g.columnTooltip,
                                "aria-label": "TODO TODO TODO",
                                children: e => (0, a.jsx)("div", {
                                    className: g.headerTooltip,
                                    ...e,
                                    children: (0, a.jsx)(h.default, {
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })
                        })]
                    }), (0, a.jsx)(o.Scroller, {
                        className: g.guilds,
                        children: r.map(e => (0, a.jsx)(_, {
                            plan: e,
                            overrideGuild: n
                        }, e.guildId))
                    })]
                })
            }

            function _(e) {
                let {
                    plan: t,
                    overrideGuild: s
                } = e, l = (0, c.useStateFromStores)([T.default], () => T.default.getGuild(t.guildId));
                return null == l ? null : (0, a.jsx)(o.Tooltip, {
                    text: (0, a.jsx)("pre", {
                        children: l.name + "\n" + t.debugReason
                    }),
                    "aria-label": t.debugReason,
                    tooltipClassName: g.tooltip,
                    children: e => (0, a.jsx)("div", {
                        ...e,
                        className: g.guild,
                        onContextMenu: e => (0, u.openContextMenu)(e, e => {
                            var i, d, r;
                            let {
                                onSelect: n
                            } = e;
                            return (0, a.jsx)(o.Menu, {
                                navId: "notifications-migration",
                                onClose: u.closeContextMenu,
                                "aria-label": M.default.Messages.THREAD_ACTIONS_MENU_LABEL,
                                onSelect: n,
                                children: (0, a.jsxs)(o.MenuGroup, {
                                    children: [(0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(I.Mode.CareALot),
                                        label: "Move to Everything",
                                        action: () => {
                                            s(l.id, I.Mode.CareALot), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (i = t.overrideMode) && void 0 !== i ? i : t.mode) === I.Mode.CareALot
                                    }, String(I.Mode.CareALot)), (0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(I.Mode.CareALittle),
                                        label: "Move to Essentials",
                                        action: () => {
                                            s(l.id, I.Mode.CareALittle), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (d = t.overrideMode) && void 0 !== d ? d : t.mode) === I.Mode.CareALittle
                                    }, String(I.Mode.CareALittle)), (0, a.jsx)(o.MenuRadioItem, {
                                        group: "change-mode",
                                        id: String(I.Mode.DontCare),
                                        label: "Move to Nothing",
                                        action: () => {
                                            s(l.id, I.Mode.DontCare), (0, u.closeContextMenu)()
                                        },
                                        checked: (null !== (r = t.overrideMode) && void 0 !== r ? r : t.mode) === I.Mode.DontCare
                                    }, String(I.Mode.DontCare))]
                                }, "change-mode")
                            })
                        }),
                        children: (0, a.jsx)(m.default, {
                            "aria-hidden": !0,
                            className: g.guildIcon,
                            guild: l,
                            size: m.default.Sizes.MEDIUM,
                            active: !0,
                            tabIndex: -1
                        })
                    })
                })
            }