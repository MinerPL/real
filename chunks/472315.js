            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("450911"),
                r = n("970728"),
                o = n("766274"),
                u = n("271938"),
                d = n("42203"),
                c = n("27618"),
                f = n("174622"),
                m = n("158998"),
                E = n("49111"),
                _ = n("782340"),
                h = n("18978");

            function p(e) {
                var t;
                let {
                    invite: n,
                    getAcceptInviteContext: p
                } = e, I = (0, l.useStateFromStores)([u.default], () => u.default.getId()), T = (null === (t = n.inviter) || void 0 === t ? void 0 : t.id) === I, g = n.state === E.InviteStates.ACCEPTING, C = (0, l.useStateFromStores)([c.default], () => {
                    var e;
                    return null != n.inviter && c.default.isFriend(null === (e = n.inviter) || void 0 === e ? void 0 : e.id)
                }), S = s.useCallback(() => {
                    if (null != n.inviter) {
                        let e = d.default.getDMFromUserId(n.inviter.id);
                        null != e && i.default.openPrivateChannel([n.inviter.id])
                    }
                }, [n.inviter]), A = s.useCallback(() => {
                    let e = p("Invite Button Embed");
                    r.default.acceptInviteAndTransitionToInviteChannel({
                        inviteKey: n.code,
                        context: e
                    })
                }, [n.code, p]);
                if (null == n.inviter) return null;
                let N = C ? S : A,
                    M = _.default.Messages.INVITE_BUTTON_ADD_FRIEND,
                    v = f.default.Button.Colors.GREEN;
                C ? (M = _.default.Messages.INVITE_BUTTON_ALREADY_FRIENDS, v = f.default.Button.Colors.PRIMARY) : T && (M = _.default.Messages.INVITE_BUTTON_ADD_FRIEND, v = f.default.Button.Colors.PRIMARY);
                let x = T ? _.default.Messages.INVITE_BUTTON_TITLE_INVITER_FRIEND : _.default.Messages.INVITE_BUTTON_TITLE_INVITED_FRIEND,
                    O = null != n.inviter ? "".concat(n.inviter.username) : "",
                    L = null != n.inviter ? m.default.getUserTag(n.inviter) : "";
                return (0, a.jsxs)(f.default, {
                    children: [(0, a.jsx)(f.default.Header, {
                        text: x
                    }), (0, a.jsxs)(f.default.Body, {
                        children: [(0, a.jsxs)("div", {
                            className: h.headerLine,
                            children: [(0, a.jsx)(f.default.Icon, {
                                user: new o.default(n.inviter),
                                onClick: C ? N : void 0
                            }), (0, a.jsx)(f.default.Info, {
                                title: O,
                                onClick: C ? N : void 0,
                                children: L
                            })]
                        }), (0, a.jsx)(f.default.Button, {
                            onClick: N,
                            submitting: g,
                            isDisabled: T,
                            color: v,
                            children: M
                        })]
                    })]
                })
            }