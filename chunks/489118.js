            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return A
                }
            }), l("222007");
            var n = l("37983"),
                o = l("884691"),
                a = l("77078"),
                r = l("476765"),
                s = l("462392"),
                i = l("903639"),
                u = l("782340"),
                c = l("387018");
            let d = e => {
                var t;
                let {
                    duration: l,
                    onSelectDuration: o
                } = e, r = (0, i.getDisableCommunicationDurationOptions)(), s = r.find(e => e.value === l);
                return (0, n.jsx)(a.FormItem, {
                    className: c.durationSelector,
                    required: !0,
                    children: (0, n.jsx)(a.SearchableSelect, {
                        value: null !== (t = null == s ? void 0 : s.value) && void 0 !== t ? t : i.DisableCommunicationDuration.DURATION_60_SEC,
                        options: r,
                        onChange: e => {
                            let t = r.find(t => t.value === e);
                            null != t && o(t.value)
                        },
                        placeholder: u.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_PLACEHOLDER
                    })
                })
            };

            function A(e) {
                let {
                    action: t,
                    triggerType: l,
                    isEdit: A,
                    onUpdateDuration: C,
                    onClose: L,
                    transitionState: _
                } = e, f = (0, r.useUID)(), [I, N] = o.useState(() => null != t.metadata.durationSeconds && t.metadata.durationSeconds > 0 ? t.metadata.durationSeconds : i.DisableCommunicationDuration.DURATION_60_SEC), T = (0, s.getActionInfo)(t.type, t, l);
                if (null == T) return null;
                let {
                    headerText: O
                } = T;
                return (0, n.jsxs)(a.ModalRoot, {
                    transitionState: _,
                    "aria-labelledby": f,
                    size: a.ModalSize.SMALL,
                    children: [(0, n.jsxs)(a.ModalContent, {
                        className: c.actionContentContainer,
                        children: [(0, n.jsx)(a.Heading, {
                            id: f,
                            color: "header-primary",
                            variant: "heading-lg/semibold",
                            className: c.header,
                            children: O
                        }), (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: u.default.Messages.GUILD_AUTOMOD_DISABLE_GUILD_COMMUNICATION_MODAL_DESCRIPTION
                        }), (0, n.jsx)(d, {
                            duration: I,
                            onSelectDuration: e => {
                                N(e)
                            }
                        })]
                    }), (0, n.jsxs)(a.ModalFooter, {
                        children: [(0, n.jsx)(a.Button, {
                            onClick: () => {
                                C(I)
                            },
                            color: a.Button.Colors.BRAND,
                            size: a.Button.Sizes.SMALL,
                            children: A ? u.default.Messages.EDIT : u.default.Messages.SAVE
                        }), (0, n.jsx)(a.Button, {
                            onClick: () => {
                                L()
                            },
                            color: a.Button.Colors.TRANSPARENT,
                            look: a.Button.Looks.LINK,
                            children: u.default.Messages.CANCEL
                        })]
                    })]
                })
            }