(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84475"], {
        962429: function(e, t, n) {
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
        365444: function(e, t, n) {
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
            var r = n("732427"),
                u = n("866490"),
                s = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("773670");

            function u() {
                let [, e] = (0, r.useState)({});
                return (0, r.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("773670");
            let u = {};

            function s(e) {
                let t = (0, r.useRef)(u);
                return t.current === u && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("773670"),
                u = n("962429");
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
                    return l
                }
            });
            var r = n("920040"),
                u = n("773670"),
                s = n("77078"),
                a = n("476765"),
                o = n("143460"),
                c = n("782340"),
                i = n("388450");

            function l(e) {
                let {
                    initialCustomMessage: t,
                    onSubmit: n,
                    onClose: l,
                    transitionState: d
                } = e, f = (0, a.useUID)(), [_, M] = u.useState(t);
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: d,
                    "aria-labelledby": f,
                    size: s.ModalSize.SMALL,
                    children: [(0, r.jsxs)(s.ModalContent, {
                        className: i.actionContentContainer,
                        children: [(0, r.jsx)(s.Heading, {
                            id: f,
                            color: "header-primary",
                            variant: "heading-md/semibold",
                            className: i.header,
                            children: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_TITLE
                        }), (0, r.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_DESCRIPTION
                        }), (0, r.jsx)(s.TextArea, {
                            className: i.customMessageTextArea,
                            placeholder: c.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_MODAL_CUSTOM_MESSAGE_PLACEHOLDER,
                            value: _,
                            onChange: M,
                            maxLength: o.MAX_BLOCK_ACTION_CUSTOM_MESSAGE_LENGTH
                        })]
                    }), (0, r.jsxs)(s.ModalFooter, {
                        children: [(0, r.jsx)(s.Button, {
                            onClick: () => {
                                n(_)
                            },
                            color: s.Button.Colors.BRAND,
                            size: s.Button.Sizes.SMALL,
                            children: c.default.Messages.EDIT
                        }), (0, r.jsx)(s.Button, {
                            onClick: () => {
                                l()
                            },
                            color: s.Button.Colors.TRANSPARENT,
                            look: s.Button.Looks.LINK,
                            children: c.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return a
                },
                useUID: function() {
                    return o
                },
                UID: function() {
                    return c
                }
            });
            var r = n("552473"),
                u = n.n(r),
                s = n("365444");
            let a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return u(e)
                },
                o = () => (0, s.useLazyValue)(() => a()),
                c = e => {
                    let {
                        children: t
                    } = e;
                    return t(o())
                }
        }
    }
]);