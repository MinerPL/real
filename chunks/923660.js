            "use strict";
            a.r(s), a.d(s, {
                default: function() {
                    return j
                }
            }), a("222007");
            var t = a("37983"),
                l = a("884691"),
                i = a("77078"),
                n = a("531470"),
                d = a("538137"),
                c = a("36694"),
                r = a("599110"),
                o = a("439932"),
                h = a("699668"),
                x = a("203657"),
                u = a("397516"),
                m = a("71941"),
                N = a("276345"),
                I = a("380353"),
                T = a("49111"),
                v = a("782340"),
                f = a("650287");

            function j(e) {
                let {
                    onClose: s,
                    transitionState: a,
                    dismissable: x,
                    guildPain: j,
                    myUsage: g
                } = e, [O, M] = l.useState(m.Tab.Intro), {
                    submitted: C,
                    submitting: R,
                    saveSettings: A
                } = (0, h.useSaveSettings)(s), {
                    guildPlans: p,
                    overrideGuild: E,
                    getDebug: w
                } = (0, h.useGuildMigrationSteps)(j, g);
                return l.useEffect(() => {
                    r.default.track(T.AnalyticEvents.OPEN_MODAL, {
                        type: "notification_migration_modal"
                    })
                }, []), (0, t.jsx)("div", {
                    className: (0, o.getThemeClass)(T.ThemeTypes.DARK),
                    children: (0, t.jsxs)(i.ModalRoot, {
                        className: f.modal,
                        transitionState: a,
                        "aria-label": v.default.Messages.NOTIFICATIONS,
                        size: i.ModalSize.DYNAMIC,
                        children: [(0, t.jsx)(m.default, {
                            selectedTab: O,
                            onClick: M,
                            submitted: C
                        }), O === m.Tab.Intro ? (0, t.jsx)(u.default, {}) : O === m.Tab.Customize ? (0, t.jsx)(_, {
                            guildPlans: p,
                            overrideGuild: E,
                            getDebug: w
                        }) : (0, t.jsx)(N.default, {
                            count: Object.values(p).filter(e => {
                                var s;
                                return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === I.Mode.UseGreyDot
                            }).length
                        }), (0, t.jsxs)(i.ModalFooter, {
                            className: f.buttons,
                            children: [(0, t.jsxs)("div", {
                                className: f.left,
                                children: [x && O === m.Tab.Intro ? (0, t.jsx)(i.Clickable, {
                                    className: f.dismiss,
                                    onClick: s,
                                    children: (0, t.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: v.default.Messages.DISMISS
                                    })
                                }) : null, x && O === m.Tab.Customize ? (0, t.jsx)(i.Clickable, {
                                    className: f.dismiss,
                                    onClick: s,
                                    children: (0, t.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: v.default.Messages.CANCEL
                                    })
                                }) : null]
                            }), (0, t.jsxs)("div", {
                                className: f.right,
                                children: [O === m.Tab.Customize ? (0, t.jsx)(i.Text, {
                                    className: f.warning,
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: v.default.Messages.NOTIF_MIGRATION_BACKUP
                                }) : null, O !== m.Tab.Customize || C ? null : (0, t.jsxs)(i.Button, {
                                    onClick: () => M(m.Tab.Intro),
                                    color: i.Button.Colors.TRANSPARENT,
                                    children: [(0, t.jsx)(n.default, {
                                        width: 16,
                                        height: 16
                                    }), " ", v.default.Messages.BACK]
                                }), O === m.Tab.Intro ? (0, t.jsxs)(i.Button, {
                                    onClick: () => M(m.Tab.Customize),
                                    children: [v.default.Messages.TRY_IT_OUT, " ", (0, t.jsx)(d.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : O === m.Tab.Customize ? (0, t.jsxs)(i.Button, {
                                    onClick: () => {
                                        M(m.Tab.Tips), A(p)
                                    },
                                    children: [v.default.Messages.APPLY, " ", (0, t.jsx)(c.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : (0, t.jsx)(i.Button, {
                                    submitting: R,
                                    onClick: s,
                                    children: v.default.Messages.CLOSE
                                })]
                            })]
                        })]
                    })
                })
            }

            function _(e) {
                let {
                    guildPlans: s,
                    overrideGuild: a
                } = e;
                return (0, t.jsxs)("div", {
                    className: f.content,
                    children: [(0, t.jsxs)("div", {
                        className: f.header,
                        children: [(0, t.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: v.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
                        }), (0, t.jsx)(i.Text, {
                            className: f.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: v.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
                        })]
                    }), (0, t.jsx)(x.default, {
                        guildPlans: s,
                        overrideGuild: a
                    })]
                })
            }