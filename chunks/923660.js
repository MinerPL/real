            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            }), s("222007"), s("781738");
            var a = s("37983"),
                l = s("884691"),
                i = s("77078"),
                d = s("367376"),
                r = s("531470"),
                n = s("538137"),
                o = s("660279"),
                c = s("36694"),
                u = s("578706"),
                T = s("306160"),
                x = s("439932"),
                m = s("699668"),
                h = s("471536"),
                I = s("71941"),
                M = s("49111"),
                g = s("782340"),
                N = s("650287");

            function f(e) {
                let {
                    onClose: t,
                    transitionState: s
                } = e, [d, o] = l.useState(I.Tab.Intro), {
                    submitted: u,
                    submitting: T,
                    saveSettings: h
                } = (0, m.useSaveSettings)(), {
                    guildPlans: f,
                    overrideGuild: v,
                    getDebug: C,
                    showWarning: b
                } = (0, m.useGuildMigrationSteps)();
                return b ? (0, a.jsx)("div", {
                    className: (0, x.getThemeClass)(M.ThemeTypes.DARK),
                    children: (0, a.jsxs)(i.ModalRoot, {
                        className: N.modal,
                        transitionState: s,
                        "aria-label": g.default.Messages.NOTIFICATIONS,
                        size: i.ModalSize.DYNAMIC,
                        children: [(0, a.jsx)(i.Text, {
                            style: {
                                maxWidth: 400,
                                padding: 16
                            },
                            variant: "text-sm/semibold",
                            color: "interactive-normal",
                            children: g.default.Messages.NOTIF_MIGRATION_WARNING.format()
                        }), (0, a.jsx)(i.ModalFooter, {
                            className: N.buttons,
                            children: (0, a.jsx)("div", {
                                className: N.left,
                                children: (0, a.jsx)(i.Clickable, {
                                    className: N.dismiss,
                                    onClick: t,
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: d === I.Tab.Intro ? g.default.Messages.DISMISS : g.default.Messages.CANCEL
                                    })
                                })
                            })
                        })]
                    })
                }) : (0, a.jsx)("div", {
                    className: (0, x.getThemeClass)(M.ThemeTypes.DARK),
                    children: (0, a.jsxs)(i.ModalRoot, {
                        className: N.modal,
                        transitionState: s,
                        "aria-label": g.default.Messages.NOTIFICATIONS,
                        size: i.ModalSize.DYNAMIC,
                        children: [(0, a.jsx)(I.default, {
                            selectedTab: d,
                            onClick: o,
                            submitted: u
                        }), d === I.Tab.Intro ? (0, a.jsx)(_, {}) : d === I.Tab.Customize ? (0, a.jsx)(O, {
                            guildPlans: f,
                            overrideGuild: v,
                            getDebug: C
                        }) : (0, a.jsx)(j, {
                            guildPlans: f
                        }), (0, a.jsxs)(i.ModalFooter, {
                            className: N.buttons,
                            children: [(0, a.jsx)("div", {
                                className: N.left,
                                children: (0, a.jsx)(i.Clickable, {
                                    className: N.dismiss,
                                    onClick: t,
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/semibold",
                                        color: "interactive-normal",
                                        children: d === I.Tab.Intro ? g.default.Messages.DISMISS : g.default.Messages.CANCEL
                                    })
                                })
                            }), (0, a.jsxs)("div", {
                                className: N.right,
                                children: [d !== I.Tab.Customize || u ? null : (0, a.jsxs)(i.Button, {
                                    onClick: () => o(I.Tab.Intro),
                                    color: i.Button.Colors.TRANSPARENT,
                                    children: [(0, a.jsx)(r.default, {
                                        width: 16,
                                        height: 16
                                    }), " ", g.default.Messages.BACK]
                                }), d === I.Tab.Intro ? (0, a.jsxs)(i.Button, {
                                    onClick: () => o(I.Tab.Customize),
                                    children: [g.default.Messages.TRY_IT_OUT, " ", (0, a.jsx)(n.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : d === I.Tab.Customize ? (0, a.jsxs)(i.Button, {
                                    onClick: () => {
                                        o(I.Tab.Review), h(f)
                                    },
                                    children: [g.default.Messages.SAVE, " ", (0, a.jsx)(c.default, {
                                        width: 16,
                                        height: 16
                                    })]
                                }) : (0, a.jsx)(i.Button, {
                                    submitting: T,
                                    onClick: t,
                                    children: g.default.Messages.CLOSE
                                })]
                            })]
                        })]
                    })
                })
            }

            function _() {
                return (0, a.jsxs)("div", {
                    className: N.content,
                    children: [(0, a.jsxs)("div", {
                        className: N.header,
                        children: [(0, a.jsx)(o.default, {
                            width: 40,
                            height: 40,
                            className: N.introIcon
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: g.default.Messages.NOTIF_MIGRATION_INTRO_TITLE
                        }), (0, a.jsx)(i.Text, {
                            className: N.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: g.default.Messages.NOTIF_MIGRATION_INTRO_SUB_TITLE
                        })]
                    }), (0, a.jsx)("img", {
                        width: 954,
                        src: s("943659"),
                        alt: "yo"
                    })]
                })
            }

            function O(e) {
                let {
                    guildPlans: t,
                    overrideGuild: s,
                    getDebug: r
                } = e, [n, o] = l.useState(!1);
                return (0, a.jsxs)("div", {
                    className: N.content,
                    children: [(0, a.jsxs)("div", {
                        className: N.header,
                        onDoubleClick: e => e.shiftKey && o(e => !e),
                        children: [(0, a.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: g.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_TITLE
                        }), (0, a.jsxs)(i.Text, {
                            className: N.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: [g.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE_1, (0, a.jsx)("br", {}), g.default.Messages.NOTIF_MIGRATION_CUSTOMIZE_SUB_TITLE_2, " (RIGHT CLICK FOR NOW)"]
                        })]
                    }), n ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)(i.Button, {
                            onClick: () => (0, T.copy)(r()),
                            children: "Copy"
                        }), (0, a.jsx)("div", {
                            style: {
                                whiteSpace: "pre",
                                overflow: "auto",
                                textAlign: "left",
                                height: 450
                            },
                            children: function(e) {
                                return e.split("\n").map((e, t) => e.startsWith("### ") ? (0, a.jsx)(i.Heading, {
                                    variant: "heading-md/medium",
                                    style: {
                                        marginTop: 16
                                    },
                                    children: e.replace("### ", "")
                                }, t) : e.startsWith("# ") ? (0, a.jsx)(i.Heading, {
                                    variant: "heading-lg/medium",
                                    style: {
                                        marginTop: 80
                                    },
                                    children: e.replace("# ", "")
                                }, t) : e.startsWith("    - ") ? (0, a.jsx)("li", {
                                    style: {
                                        color: "var(--text-normal)",
                                        marginLeft: 48
                                    },
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        style: {
                                            display: "inline"
                                        },
                                        children: d.default.parseTopic(e.replace("    - ", ""))
                                    })
                                }, t) : e.startsWith("- ") ? (0, a.jsx)("li", {
                                    style: {
                                        color: "var(--text-normal)",
                                        marginLeft: 16
                                    },
                                    children: (0, a.jsx)(i.Text, {
                                        variant: "text-sm/normal",
                                        color: "text-muted",
                                        style: {
                                            display: "inline"
                                        },
                                        children: d.default.parseTopic(e.replace("- ", ""))
                                    })
                                }, t) : (0, a.jsx)(i.Text, {
                                    variant: "text-sm/normal",
                                    color: "text-muted",
                                    children: d.default.parseTopic(e)
                                }, t))
                            }(r())
                        })]
                    }) : (0, a.jsx)(h.default, {
                        guildPlans: t,
                        overrideGuild: s
                    })]
                })
            }

            function j(e) {
                return (0, a.jsxs)("div", {
                    className: N.content,
                    children: [(0, a.jsxs)("div", {
                        className: N.header,
                        children: [(0, a.jsx)(u.default, {
                            width: 40,
                            height: 40,
                            className: N.reviewIcon
                        }), (0, a.jsx)(i.Heading, {
                            variant: "heading-xl/bold",
                            color: "header-primary",
                            children: g.default.Messages.NOTIF_MIGRATION_REVIEW_TITLE
                        }), (0, a.jsx)(i.Text, {
                            className: N.subtitle,
                            variant: "text-md/medium",
                            color: "header-secondary",
                            children: g.default.Messages.NOTIF_MIGRATION_REVIEW_SUB_TITLE_1
                        })]
                    }), (0, a.jsx)(i.Text, {
                        className: N.helpfulTips,
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: g.default.Messages.NOTIF_MIGRATION_REVIEW_SUB_TITLE_2
                    }), (0, a.jsx)("img", {
                        width: 942.5,
                        src: s("402718"),
                        alt: "yo"
                    })]
                })
            }