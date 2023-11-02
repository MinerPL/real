(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["54659"], {
        557890: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            });
            var a = s("37983"),
                l = s("884691"),
                n = s("77078"),
                o = s("736964"),
                u = s("476765"),
                i = s("158998"),
                d = s("782340"),
                r = s("166570");

            function c(e) {
                let {
                    user: t,
                    nickname: s,
                    transitionState: c,
                    onClose: N
                } = e, h = (0, u.useUID)(), [f, I] = l.useState(!1), [M, p] = l.useState(s), C = l.useRef(null), E = async e => {
                    e.preventDefault(), I(!0);
                    try {
                        await o.default.updateRelationship(t.id, M), N()
                    } catch (e) {} finally {
                        I(!1)
                    }
                }, x = null == s ? d.default.Messages.ADD_FRIEND_NICKNAME : d.default.Messages.CHANGE_FRIEND_NICKNAME;
                return (0, a.jsx)(n.ModalRoot, {
                    transitionState: c,
                    size: n.ModalSize.SMALL,
                    "aria-labelledby": h,
                    children: (0, a.jsxs)("form", {
                        onSubmit: E,
                        children: [(0, a.jsx)(n.ModalHeader, {
                            separator: !1,
                            children: (0, a.jsx)(n.Heading, {
                                variant: "heading-lg/semibold",
                                children: x
                            })
                        }), (0, a.jsxs)(n.ModalContent, {
                            children: [(0, a.jsx)(n.Text, {
                                variant: "text-md/normal",
                                className: r.description,
                                children: d.default.Messages.FRIEND_NICKNAME_DESCRIPTION
                            }), (0, a.jsx)(n.FormItem, {
                                title: d.default.Messages.FRIEND_NICKNAME,
                                children: (0, a.jsx)(n.TextInput, {
                                    inputRef: C,
                                    value: null != M ? M : "",
                                    placeholder: i.default.getName(t),
                                    onChange: p,
                                    className: r.input,
                                    autoFocus: !0
                                })
                            }), (0, a.jsx)(n.Button, {
                                look: n.Button.Looks.LINK,
                                color: n.Button.Colors.LINK,
                                size: n.Button.Sizes.NONE,
                                onClick: () => {
                                    var e;
                                    p(null), null === (e = C.current) || void 0 === e || e.focus()
                                },
                                className: r.reset,
                                children: d.default.Messages.RESET_FRIEND_NICKNAME
                            })]
                        }), (0, a.jsxs)(n.ModalFooter, {
                            children: [(0, a.jsx)(n.Button, {
                                type: "submit",
                                disabled: f,
                                children: d.default.Messages.SAVE
                            }), (0, a.jsx)(n.Button, {
                                onClick: N,
                                look: n.Button.Looks.LINK,
                                color: n.Button.Colors.PRIMARY,
                                children: d.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);