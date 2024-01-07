            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                i = n("884691"),
                s = n("446674"),
                o = n("77078"),
                l = n("913139"),
                a = n("278108"),
                u = n("485328"),
                d = n("227602"),
                c = n("555158"),
                E = n("13798"),
                f = n("846325"),
                _ = n("49111"),
                p = n("782340"),
                I = n("304593");

            function h(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: h
                } = e, A = (0, s.useStateFromStores)([d.default], () => d.default.getKeybindForAction(_.GlobalKeybindActions.SOUNDBOARD_HOLD)), [R, g] = i.useState(null !== (t = null == A ? void 0 : A.shortcut) && void 0 !== t ? t : []);
                return i.useEffect(() => (u.default.disable(), () => {
                    u.default.enable()
                }), []), (0, r.jsxs)(o.ModalRoot, {
                    transitionState: n,
                    children: [(0, r.jsxs)(o.ModalHeader, {
                        separator: !1,
                        children: [(0, r.jsx)(o.Heading, {
                            className: I.header,
                            variant: "heading-xl/semibold",
                            children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_HEADER
                        }), (0, r.jsx)(o.ModalCloseButton, {
                            className: I.closeButton,
                            onClick: h
                        })]
                    }), (0, r.jsxs)(o.ModalContent, {
                        className: I.content,
                        children: [(0, r.jsx)(c.default, {
                            className: I.warning,
                            messageType: c.HelpMessageTypes.WARNING,
                            children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_KEYBINDS_DISABLED_MESSAGE
                        }), (0, r.jsx)(o.Heading, {
                            className: I.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.default.Messages.USER_SETTINGS_KEYBINDS_ACTION
                        }), (0, r.jsx)(o.Text, {
                            className: I.action,
                            variant: "text-md/normal",
                            children: p.default.Messages.KEYBIND_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(o.Text, {
                            className: I.actionDescription,
                            variant: "text-sm/normal",
                            children: p.default.Messages.KEYBIND_DESCRIPTION_SOUNDBOARD_HOLD
                        }), (0, r.jsx)(o.Heading, {
                            className: I.formHeader,
                            variant: "eyebrow",
                            color: "header-secondary",
                            children: p.default.Messages.USER_SETTINGS_KEYBINDS_KEYBIND
                        }), (0, r.jsx)(a.default, {
                            defaultValue: R,
                            onChange: g
                        }), (0, r.jsx)(o.Anchor, {
                            className: I.resetButton,
                            onClick: () => g((0, E.toCombo)(f.DEFAULT_KEYBIND)),
                            children: p.default.Messages.SOUNDBOARD_KEYBIND_MODAL_RESET_KEYBIND
                        })]
                    }), (0, r.jsxs)(o.ModalFooter, {
                        children: [(0, r.jsx)(o.Button, {
                            onClick: function() {
                                if (0 === R.length) return null != A && l.default.deleteKeybind(A.id), h();
                                null == A ? l.default.addKeybind({
                                    action: _.GlobalKeybindActions.SOUNDBOARD_HOLD,
                                    shortcut: R,
                                    enabled: !0,
                                    params: {}
                                }) : l.default.setKeybind({
                                    ...A,
                                    shortcut: R
                                });
                                h()
                            },
                            children: p.default.Messages.SAVE
                        }), (0, r.jsx)(o.Button, {
                            onClick: h,
                            look: o.Button.Looks.LINK,
                            color: o.Button.Colors.PRIMARY,
                            children: p.default.Messages.CANCEL
                        })]
                    })]
                })
            }