            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            }), n("222007");
            var l = n("37983"),
                r = n("884691"),
                u = n("77078"),
                o = n("476765"),
                a = n("462392"),
                i = n("903639"),
                s = n("782340"),
                c = n("387018");
            let d = e => {
                var t;
                let {
                    duration: n,
                    onSelectDuration: r
                } = e, o = (0, i.getDisableCommunicationDurationOptions)(), a = o.find(e => e.value === n);
                return (0, l.jsx)(u.FormItem, {
                    className: c.durationSelector,
                    required: !0,
                    children: (0, l.jsx)(u.SearchableSelect, {
                        value: null !== (t = null == a ? void 0 : a.value) && void 0 !== t ? t : i.DisableCommunicationDuration.DURATION_60_SEC,
                        options: o,
                        onChange: e => {
                            let t = o.find(t => t.value === e);
                            null != t && r(t.value)
                        },
                        placeholder: s.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
                    })
                })
            };

            function A(e) {
                let {
                    action: t,
                    triggerType: n,
                    isEdit: A,
                    onUpdateDuration: f,
                    onClose: C,
                    transitionState: L
                } = e, _ = (0, o.useUID)(), [I, N] = r.useState(() => null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : i.DisableCommunicationDuration.DURATION_60_SEC), T = (0, a.getActionInfo)(t.type, t, n);
                if (null == T) return null;
                let {
                    headerText: O
                } = T;
                return (0, l.jsxs)(u.ModalRoot, {
                    transitionState: L,
                    "aria-labelledby": _,
                    size: u.ModalSize.SMALL,
                    children: [(0, l.jsxs)(u.ModalContent, {
                        className: c.actionContentContainer,
                        children: [(0, l.jsx)(u.Heading, {
                            id: _,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: c.header,
                            children: O
                        }), (0, l.jsx)(u.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: s.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
                        }), (0, l.jsx)(d, {
                            duration: I,
                            onSelectDuration: e => {
                                N(e)
                            }
                        })]
                    }), (0, l.jsxs)(u.ModalFooter, {
                        children: [(0, l.jsx)(u.Button, {
                            onClick: () => {
                                f(I)
                            },
                            color: u.Button.Colors.BRAND,
                            size: u.Button.Sizes.SMALL,
                            children: A ? s.default.Messages.EDIT : s.default.Messages.SAVE
                        }), (0, l.jsx)(u.Button, {
                            onClick: () => {
                                C()
                            },
                            color: u.Button.Colors.TRANSPARENT,
                            look: u.Button.Looks.LINK,
                            children: s.default.Messages.CANCEL
                        })]
                    })]
                })
            }