            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return f
                }
            });
            var n = i("37983"),
                s = i("884691"),
                a = i("77078"),
                l = i("660279"),
                r = i("149943"),
                d = i("784905"),
                o = i("489618"),
                u = i("205382"),
                c = i("782340"),
                S = i("551040");

            function h(e) {
                return (0, n.jsx)("div", {
                    className: S.sectionHeader,
                    children: (0, n.jsx)(a.Heading, {
                        variant: "text-xs/bold",
                        className: S.sectionHeaderTitle,
                        color: "text-muted",
                        children: e.title
                    })
                })
            }

            function g(e) {
                return (0, n.jsxs)("div", {
                    children: [null != e.title && (0, n.jsx)(h, {
                        title: e.title
                    }), (0, n.jsx)("div", {
                        className: S.sectionContent,
                        children: e.children
                    })]
                })
            }

            function N(e) {
                let {
                    onClose: t
                } = e;
                return (0, n.jsxs)(a.ModalHeader, {
                    className: S.header,
                    children: [(0, n.jsxs)("div", {
                        className: S.headerLeft,
                        children: [(0, n.jsx)(l.default, {
                            className: S.headerBell
                        }), (0, n.jsx)(a.Heading, {
                            variant: "heading-lg/semibold",
                            children: c.default.Messages.NOTIFICATION_SETTINGS
                        })]
                    }), (0, n.jsx)(a.ModalCloseButton, {
                        onClick: t
                    })]
                })
            }

            function f(e) {
                let t = s.useRef(null);
                return (0, n.jsxs)(a.ModalRoot, {
                    size: a.ModalSize.MEDIUM,
                    transitionState: e.transitionState,
                    "aria-label": c.default.Messages.NOTIFICATION_SETTINGS,
                    children: [(0, n.jsx)(N, {
                        onClose: e.onClose
                    }), (0, n.jsxs)(a.ModalContent, {
                        className: S.content,
                        scrollerRef: t,
                        children: [(0, n.jsx)(g, {
                            children: (0, n.jsx)(o.default, {
                                guildId: e.guildId
                            })
                        }), (0, n.jsx)(g, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_PRESETS,
                            children: (0, n.jsx)(u.default, {
                                guildId: e.guildId
                            })
                        }), (0, n.jsx)(g, {
                            title: c.default.Messages.NOTIFICATION_SETTINGS_ADVANCED,
                            children: (0, n.jsx)(r.default, {
                                guildId: e.guildId
                            })
                        }), (0, n.jsx)(h, {
                            title: c.default.Messages.CHANNEL_NOTIFICATION_OVERRIDES
                        }), (0, n.jsx)(d.default, {
                            guildId: e.guildId,
                            requestScrollToBottom: () => {
                                null != t && null != t.current && t.current.scrollToBottom({
                                    animate: !0
                                })
                            }
                        })]
                    })]
                })
            }