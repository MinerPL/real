            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return O
                }
            });
            var n = s("37983"),
                a = s("884691"),
                o = s("77078"),
                i = s("242149"),
                r = s("347445"),
                d = s("476765"),
                l = s("701909"),
                c = s("180748"),
                u = s("49111"),
                _ = s("782340"),
                T = s("500368");

            function O(t) {
                let {
                    transitionState: e,
                    onClose: s
                } = t, O = (0, d.useUID)();
                return a.useEffect(() => {
                    c.keyboardNavigationExplainerModalSeen()
                }, []), (0, n.jsxs)(o.ModalRoot, {
                    transitionState: e,
                    role: "alertdialog",
                    "aria-labelledby": O,
                    children: [(0, n.jsxs)(o.ModalContent, {
                        className: T.content,
                        children: [(0, n.jsx)(o.Heading, {
                            variant: "heading-xl/semibold",
                            id: O,
                            className: T.header,
                            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_TITLE.format({
                                tab: (t, e) => (0, n.jsx)(o.KeyCombo, {
                                    shortcut: "tab",
                                    className: T.headerShortcut
                                }, e)
                            })
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_MODAL_BODY
                        }), (0, n.jsxs)("ul", {
                            className: T.tips,
                            children: [(0, n.jsxs)("li", {
                                children: [(0, n.jsx)(o.KeyCombo, {
                                    shortcut: r.TOGGLE_HOTKEYS.binds[0]
                                }), (0, n.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_LIST_SHORTCUT
                                })]
                            }), (0, n.jsxs)("li", {
                                children: [(0, n.jsx)(o.KeyCombo, {
                                    shortcut: i.QUICKSWITCHER_SHOW.binds[0]
                                }), (0, n.jsx)(o.Text, {
                                    variant: "text-md/normal",
                                    children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_QUICKSWITCHER_SHORTCUT
                                })]
                            })]
                        }), (0, n.jsx)(o.Text, {
                            variant: "text-md/normal",
                            children: _.default.Messages.KEYBOARD_SHORTCUTS_EXPLAINER_HELP_CENTER_LINK.format({
                                link: l.default.getArticleURL(u.HelpdeskArticles.KEYBOARD_NAVIGATION)
                            })
                        })]
                    }), (0, n.jsx)(o.ModalFooter, {
                        children: (0, n.jsx)(o.Button, {
                            onClick: s,
                            color: o.Button.Colors.BRAND,
                            size: o.Button.Sizes.SMALL,
                            autoFocus: !0,
                            children: _.default.Messages.OKAY
                        })
                    })]
                })
            }