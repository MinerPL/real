            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007");
            var l = n("37983"),
                i = n("884691"),
                s = n("446674"),
                o = n("77078"),
                r = n("913139"),
                a = n("278108"),
                d = n("485328"),
                c = n("227602"),
                u = n("555158"),
                f = n("13798"),
                h = n("846325"),
                g = n("49111"),
                E = n("782340"),
                p = n("304593");

            function m(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: m
                } = e, N = (0, s.useStateFromStores)([c.default], () => c.default.getKeybindForAction(g.GlobalKeybindActions.SOUNDBOARD_HOLD)), [R, b] = i.useState(null !== (t = null == N ? void 0 : N.shortcut) && void 0 !== t ? t : []);
                return i.useEffect(() => (d.default.disable(), () => {
                    d.default.enable()
                }), []), (0, l.jsxs)(o.ModalRoot, {
                    transitionState: n,
                    children: [(0, l.jsxs)(o.ModalHeader, {
                        separator: !1,
                        children: [(0, l.jsx)(o.Heading, {
                            className: p.header,
                            variant: "heading-xl/semibold",
                            children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, l.jsx)(o.ModalCloseButton, {
                            className: p.closeButton,
                            onClick: m
                        })]
                    }), (0, l.jsxs)(o.ModalContent, {
                        className: p.content,
                        children: [(0, l.jsx)(u.default, {
                            className: p.warning,
                            messageType: u.HelpMessageTypes.WARNING,
                            children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, l.jsx)(o.Heading, {
                            className: p.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: E.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, l.jsx)(o.Text, {
                            className: p.action,
                            variant: "text-md/normal",
                            children: E.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, l.jsx)(o.Text, {
                            className: p.actionDescription,
                            variant: "text-sm/normal",
                            children: E.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, l.jsx)(o.Heading, {
                            className: p.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: E.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, l.jsx)(a.default, {
                            defaultValue: R,
                            onChange: b
                        }), (0, l.jsx)(o.Anchor, {
                            className: p.resetButton,
                            onClick: () => b((0, f.toCombo)(h.DEFAULT_KEYBIND)),
                            children: E.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            onClick: function() {
                                if (0 === R.length) return null != N && r.default.deleteKeybind(N.id), m();
                                null == N ? r.default.addKeybind({
                                    action: g.GlobalKeybindActions.SOUNDBOARD_HOLD,
                                    shortcut: R,
                                    enabled: !0,
                                    params: {}
                                }) : r.default.setKeybind({
                                    ...N,
                                    shortcut: R
                                });
                                m()
                            },
                            children: E.default.Messages.SAVE
                        }), (0, l.jsx)(o.Button, {
                            onClick: m,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }