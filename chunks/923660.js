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
                r = a("439932"),
                h = a("699668"),
                o = a("203657"),
                x = a("397516"),
                m = a("71941"),
                u = a("276345"),
                N = a("380353"),
                I = a("49111"),
                T = a("782340"),
                v = a("650287");

            function j(e) {
                let {
                    onClose: s,
                    transitionState: a,
                    dismissable: o,
                    guildPain: j,
                    myUsage: _
                } = e, [g, O] = l.useState(m.Tab.Intro), {
                    submitted: M,
                    submitting: C,
                    saveSettings: R
                } = (0, h.useSaveSettings)(s), {
                    guildPlans: p,
                    overrideGuild: A,
                    getDebug: w
                } = (0, h.useGuildMigrationSteps)(j, _);
                return (0, t.jsx)("div", {
                    className: (0, r.getThemeClass)(I.ThemeTypes.DARK),
                    children: (0, t.jsxs)(i.ModalRoot, {
                        className: v.modal,
                        transitionState: a,
                        "aria-label": T.default.Messages.NOTIFICATIONS,
                        size: i.ModalSize.DYNAMIC,
                        children: [(0, t.jsx)(m.default, {
                            selectedTab: g,
                            onClick: O,
                            submitted: M
                        }), g === m.Tab.Intro ? (0, t.jsx)(x.default, {}) : g === m.Tab.Customize ? (0, t.jsx)(f, {
                            guildPlans: p,
                            overrideGuild: A,
                            getDebug: w
                        }) : (0, t.jsx)(u.default, {
                            count: Object.values(p).filter(e => {
                                var s;
                                return (null !== (s = e.overrideMode) && void 0 !== s ? s : e.mode) === N.Mode.UseGreyDot
                            }).length
                        }), (0, t.jsxs)(i.ModalFooter, {
                            className: v.buttons,
                            children: [(0, t.jsxs)("div", {
                                className: v.left,
                                children: [o && g === m.Tab.Intro ? (0, t.jsx)(i.Clickable, {
                                    className: v.dismiss,
                                    onClick: s,
                                    children: (0, t.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: T.default.Messages.DISMISS
                                    })
                                }) : null, o && g === m.Tab.Customize ? (0, t.jsx)(i.Clickable, {
                                    className: v.dismiss,
                                    onClick: s,
                                    children: (0, t.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: T.default.Messages.CANCEL
                                    })
                                }) : null]
                            }), (0, t.jsxs)("div", {
                                className: v.right,
                                children: [g === m.Tab.Customize ? (0, t.jsx)(i.Text, {
                                    className: v.warning,
                                    variant: "text-xs/medium",
                                    color: "text-muted",
                                    children: T.default.Messages.NOTIF_MIGRATION_BACKUP
                                }) : null, g !== m.Tab.Customize || M ? null : (0, t.jsxs)(i.Button, {
                                    onClick: () => O(m.Tab.Intro),
                                    color: i.Button.Colors.TRANSPARENT,
                                    children: [(0, t.jsx)(n.default, {
                                        width: 16,
                                        height: 16
                                    }), " ", T.default.Messages.BACK]
                                }), g === m.Tab.Intro ? (0, t.jsxs)(i.Button, {
                                    onClick: () => O(m.Tab.Customize),
                                    children: [T.default.Messages.TRY_IT_OUT, " ", (0, t.jsx)(d.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : g === m.Tab.Customize ? (0, t.jsxs)(i.Button, {
                                    onClick: () => {
                                        O(m.Tab.Tips), R(p)
                                    },
                                    children: [T.default.Messages.APPLY, " ", (0, t.jsx)(c.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : (0, t.jsx)(i.Button, {
                                    submitting: C,
                                    onClick: s,
                                    children: T.default.Messages.CLOSE
                                })]
                            })]
                        })]
                    })
                })
            }

            function f(e) {
                let {
                    guildPlans: s,
                    overrideGuild: a
                } = e;
                return (0, t.jsxs)("div", {
                    className: v.content,
                    children: [(0, t.jsxs)("div", {
                        className: v.header,
                        children: [(0, t.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: T.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
                        }), (0, t.jsx)(i.Text, {
                            className: v.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: T.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
                        })]
                    }), (0, t.jsx)(o.default, {
                        guildPlans: s,
                        overrideGuild: a
                    })]
                })
            }