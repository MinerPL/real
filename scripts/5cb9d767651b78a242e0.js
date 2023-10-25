(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54659"], {
        962429: function(e, t, n) {
            "use strict";

            function u(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            })
        },
        365444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return u.default
                },
                useStableMemo: function() {
                    return r.default
                },
                useLazyValue: function() {
                    return s.default
                }
            });
            var u = n("732427"),
                r = n("866490"),
                s = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("773670");

            function r() {
                let [, e] = (0, u.useState)({});
                return (0, u.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var u = n("773670");
            let r = {};

            function s(e) {
                let t = (0, u.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("773670"),
                r = n("962429");
            let s = [];

            function l(e, t) {
                let n = (0, u.useRef)(),
                    l = (0, u.useRef)(s);
                return l.current === s ? (n.current = e(), l.current = t) : !(0, r.default)(t, l.current) && (n.current = e(), l.current = t), n.current
            }
        },
        557890: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var u = n("920040"),
                r = n("773670"),
                s = n("77078"),
                l = n("736964"),
                a = n("476765"),
                o = n("158998"),
                i = n("782340"),
                c = n("638784");

            function d(e) {
                let {
                    user: t,
                    nickname: n,
                    transitionState: d,
                    onClose: f
                } = e, N = (0, a.useUID)(), [h, I] = r.useState(!1), [M, p] = r.useState(n), C = r.useRef(null), g = async e => {
                    e.preventDefault(), I(!0);
                    try {
                        await l.default.updateRelationship(t.id, M), f()
                    } catch (e) {} finally {
                        I(!1)
                    }
                }, E = null == n ? i.default.Messages.ADD_FRIEND_NICKNAME : i.default.Messages.CHANGE_FRIEND_NICKNAME;
                return (0, u.jsx)(s.ModalRoot, {
                    transitionState: d,
                    size: s.ModalSize.SMALL,
                    "aria-labelledby": N,
                    children: (0, u.jsxs)("form", {
                        onSubmit: g,
                        children: [(0, u.jsx)(s.ModalHeader, {
                            separator: !1,
                            children: (0, u.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                children: E
                            })
                        }), (0, u.jsxs)(s.ModalContent, {
                            children: [(0, u.jsx)(s.Text, {
                                variant: "text-md/normal",
                                className: c.description,
                                children: i.default.Messages.FRIEND_NICKNAME_DESCRIPTION
                            }), (0, u.jsx)(s.FormItem, {
                                title: i.default.Messages.FRIEND_NICKNAME,
                                children: (0, u.jsx)(s.TextInput, {
                                    inputRef: C,
                                    value: null != M ? M : "",
                                    placeholder: o.default.getName(t),
                                    onChange: p,
                                    className: c.input,
                                    autoFocus: !0
                                })
                            }), (0, u.jsx)(s.Button, {
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.LINK,
                                size: s.Button.Sizes.NONE,
                                onClick: () => {
                                    var e;
                                    p(null), null === (e = C.current) || void 0 === e || e.focus()
                                },
                                className: c.reset,
                                children: i.default.Messages.RESET_FRIEND_NICKNAME
                            })]
                        }), (0, u.jsxs)(s.ModalFooter, {
                            children: [(0, u.jsx)(s.Button, {
                                type: "submit",
                                disabled: h,
                                children: i.default.Messages.SAVE
                            }), (0, u.jsx)(s.Button, {
                                onClick: f,
                                look: s.Button.Looks.LINK,
                                color: s.Button.Colors.PRIMARY,
                                children: i.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return l
                },
                useUID: function() {
                    return a
                },
                UID: function() {
                    return o
                }
            });
            var u = n("552473"),
                r = n.n(u),
                s = n("365444");
            let l = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return r(e)
                },
                a = () => (0, s.useLazyValue)(() => l()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(a())
                }
        }
    }
]);