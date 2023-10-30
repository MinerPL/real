(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70858"], {
        353228: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var n = s("37983"),
                a = s("884691"),
                l = s("446674"),
                o = s("77078"),
                u = s("679653"),
                i = s("42203"),
                r = s("145131"),
                d = s("476765"),
                c = s("379881"),
                N = s("200008"),
                h = s("782340"),
                C = s("274372");

            function f(e) {
                let {
                    channelId: t,
                    onClose: s,
                    transitionState: f
                } = e, m = (0, d.useUID)(), x = (0, l.useStateFromStores)([i.default], () => i.default.getChannel(t)), E = (0, u.default)(x), M = c.default.getNickname(t), [I, j] = a.useState(null != M ? M : "");
                return (0, n.jsx)("form", {
                    onSubmit: function(e) {
                        e.preventDefault(), (0, N.setFavoriteChannelNickname)(t, I), s()
                    },
                    children: (0, n.jsxs)(o.ModalRoot, {
                        transitionState: f,
                        "aria-labelledby": m,
                        children: [(0, n.jsxs)(o.ModalHeader, {
                            separator: !0,
                            justify: r.default.Justify.BETWEEN,
                            children: [(0, n.jsx)(o.Heading, {
                                id: m,
                                variant: "heading-lg/semibold",
                                children: h.default.Messages.CHANGE_NICKNAME
                            }), (0, n.jsx)(o.ModalCloseButton, {
                                onClick: s
                            })]
                        }), (0, n.jsxs)(o.ModalContent, {
                            children: [(0, n.jsx)(o.FormItem, {
                                className: C.name,
                                title: h.default.Messages.NICKNAME,
                                children: (0, n.jsx)(o.TextInput, {
                                    value: I,
                                    onChange: j,
                                    placeholder: null != E ? E : void 0,
                                    maxLength: 100,
                                    autoFocus: !0
                                })
                            }), null != M ? (0, n.jsx)(o.Button, {
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.LINK,
                                size: o.Button.Sizes.NONE,
                                onClick: function() {
                                    (0, N.setFavoriteChannelNickname)(t, null), s()
                                },
                                className: C.reset,
                                children: h.default.Messages.RESET_NICKNAME
                            }) : null, (0, n.jsx)(o.Text, {
                                className: C.description,
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: h.default.Messages.FAVORITES_SET_NICKNAME_DESCRIPTION
                            })]
                        }), (0, n.jsxs)(o.ModalFooter, {
                            children: [(0, n.jsx)(o.Button, {
                                type: "submit",
                                children: h.default.Messages.CHANGE_NICKNAME
                            }), (0, n.jsx)(o.Button, {
                                onClick: s,
                                look: o.Button.Looks.LINK,
                                color: o.Button.Colors.PRIMARY,
                                children: h.default.Messages.CANCEL
                            })]
                        })]
                    })
                })
            }
        }
    }
]);