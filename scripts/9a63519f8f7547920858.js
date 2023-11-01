(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53937"], {
        48174: function(e, t, n) {
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
        775560: function(e, t, n) {
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
            var u = n("14716"),
                r = n("745510"),
                s = n("315378")
        },
        14716: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("884691");

            function r() {
                let [, e] = (0, u.useState)({});
                return (0, u.useCallback)(() => e({}), [])
            }
        },
        315378: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var u = n("884691");
            let r = {};

            function s(e) {
                let t = (0, u.useRef)(r);
                return t.current === r && (t.current = e()), t.current
            }
        },
        745510: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("884691"),
                r = n("48174");
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
            var u = n("37983"),
                r = n("884691"),
                s = n("77078"),
                l = n("736964"),
                a = n("476765"),
                o = n("158998"),
                i = n("782340"),
                c = n("166570");

            function d(e) {
                let {
                    user: t,
                    nickname: n,
                    transitionState: d,
                    onClose: f
                } = e, N = (0, a.useUID)(), [h, M] = r.useState(!1), [I, p] = r.useState(n), C = r.useRef(null), E = async e => {
                    e.preventDefault(), M(!0);
                    try {
                        await l.default.updateRelationship(t.id, I), f()
                    } catch (e) {} finally {
                        M(!1)
                    }
                }, g = null == n ? i.default.Messages.ADD_FRIEND_NICKNAME : i.default.Messages.CHANGE_FRIEND_NICKNAME;
                return (0, u.jsx)(s.ModalRoot, {
                    transitionState: d,
                    size: s.ModalSize.SMALL,
                    "aria-labelledby": N,
                    children: (0, u.jsxs)("form", {
                        onSubmit: E,
                        children: [(0, u.jsx)(s.ModalHeader, {
                            separator: !1,
                            children: (0, u.jsx)(s.Heading, {
                                variant: "heading-lg/semibold",
                                children: g
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
                                    value: null != I ? I : "",
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
        }
    }
]);