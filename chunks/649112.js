            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                l = n("352674"),
                i = n("271938"),
                r = n("18494"),
                o = n("174622"),
                u = n("659500"),
                d = n("158998"),
                c = n("49111"),
                f = n("782340"),
                m = n("18978");

            function E(e) {
                let t, n, E, {
                        author: _,
                        banned: h
                    } = e,
                    p = (0, s.useStateFromStores)([i.default], () => i.default.getId()),
                    I = (0, s.useStateFromStores)([r.default], () => r.default.getChannelId()),
                    T = d.default.useName(_),
                    g = p === _.id;
                return g ? (t = f.default.Messages.INVITE_BUTTON_INVALID_OWNER, E = f.default.Messages.INVITE_BUTTON_TITLE_INVITER_INVALID) : (E = f.default.Messages.INVITE_BUTTON_TITLE_INVITED_INVALID, h ? t = f.default.Messages.INSTANT_INVITE_BANNED_INFO : null != T ? (t = f.default.Messages.INSTANT_INVITE_ASK_USER_FOR_NEW_INVITE.format({
                    username: T
                }), n = (0, a.jsx)(o.default.Button, {
                    onClick: function() {
                        let {
                            id: e
                        } = _, t = "@".concat(d.default.getUserTag(_, {
                            decoration: "never"
                        }));
                        u.ComponentDispatch.dispatchToLastSubscribed(c.ComponentActions.INSERT_TEXT, {
                            plainText: t,
                            rawText: "<@".concat(e, ">")
                        }), null != I && l.default.startTyping(I)
                    },
                    children: f.default.Messages.MENTION
                })) : t = f.default.Messages.INSTANT_INVITE_ASK_FOR_NEW_INVITE), (0, a.jsxs)(o.default, {
                    children: [(0, a.jsx)(o.default.Header, {
                        text: E
                    }), (0, a.jsxs)(o.default.Body, {
                        children: [(0, a.jsxs)("div", {
                            className: m.headerLine,
                            children: [(0, a.jsx)(o.default.Icon, {
                                expired: !0
                            }), (0, a.jsx)(o.default.Info, {
                                expired: !0,
                                title: f.default.Messages.INVITE_BUTTON_INVALID,
                                children: t
                            })]
                        }), n]
                    })]
                })
            }