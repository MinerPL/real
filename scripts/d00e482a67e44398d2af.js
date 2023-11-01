(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["67071"], {
        48174: function(e, t, n) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        775560: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return r.default
                },
                useStableMemo: function() {
                    return u.default
                },
                useLazyValue: function() {
                    return s.default
                }
            });
            var r = n("14716"),
                u = n("745510"),
                s = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("884691");

            function u() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691");
            let u = {};

            function s(e) {
                let t = (0, r.useRef)(u);
                return t.current === u && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("884691"),
                u = n("48174");
            let s = [];

            function a(e, t) {
                let n = (0, r.useRef)(),
                    a = (0, r.useRef)(s);
                return a.current === s ? (n.current = e(), a.current = t) : !(0, u.default)(t, a.current) && (n.current = e(), a.current = t), n.current
            }
        },
        83965: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("37983"),
                u = n("884691"),
                s = n("77078"),
                a = n("476765"),
                o = n("143460"),
                c = n("782340"),
                l = n("280930");

            function i(e) {
                let {
                    initialCustomMessage: t,
                    onSubmit: n,
                    onClose: i,
                    transitionState: d
                } = e, f = (0, a.useUID)(), [M, _] = u.useState(t);
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": f,
                    size: s.ModalSize.SMALL,
                    children: [(0, r.jsxs)(s.ModalContent, {
                        className: l.actionContentContainer,
                        children: [(0, r.jsx)(s.Heading, {
                            id: f,
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: l.header,
                            children: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE
                        }), (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION
                        }), (0, r.jsx)(s.TextArea, {
                            className: l.customMessageTextArea,
                            placeholder: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
                            value: M,
                            onChange: _,
                            maxLength: o.MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH
                        })]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            onClick: () => {
                                n(M)
                            },
                            color: s.Button.Colors.BRAND,
                            size: s.Button.Sizes.SMALL,
                            children: c.default.Messages.EDIT
                        }), (0, r.jsx)(s.Button, {
                            onClick: () => {
                                i()
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            look: s.Button.Looks.LINK,
                            children: c.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        }
    }
]);