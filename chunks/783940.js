            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("808653"), n("424973");
            var a = n("37983");
            n("884691");
            var s = n("627445"),
                l = n.n(s),
                i = n("446674"),
                r = n("233069"),
                o = n("42203"),
                u = n("697218"),
                d = n("174622"),
                c = n("449008"),
                f = n("793079"),
                m = n("49111"),
                E = n("782340"),
                _ = n("18978");

            function h(e) {
                let t, {
                        invite: n,
                        author: s,
                        currentUserId: h,
                        onTransitionToInviteChannel: p,
                        onAcceptInstantInvite: I
                    } = e,
                    T = h === s.id,
                    g = n.state === m.InviteStates.ACCEPTING,
                    C = (0, i.useStateFromStores)([o.default], () => null != n.channel ? o.default.getChannel(n.channel.id) : null, [n]);
                l(null == C || C.isPrivate(), "must be a private channel");
                let S = null != C;
                if (null == C) {
                    if (null == n.channel) return (0, a.jsx)(f.default, {});
                    C = (0, r.createChannelRecordFromInvite)(n.channel), t = null != n.channel && null != n.channel.recipients ? n.channel.recipients : []
                } else {
                    t = C.recipients.reduce((e, t) => {
                        let n = u.default.getUser(t);
                        return null != n && e.push(n), e
                    }, []);
                    let e = u.default.getCurrentUser();
                    S && null != e && t.push(e)
                }
                let A = C.name;
                (null == A || "" === A) && (A = t.length > 0 ? t.filter(c.isNotNullish).map(e => e.username).join(", ") : E.default.Messages.UNNAMED);
                let N = S ? p : I,
                    M = E.default.Messages.JOIN_GUILD,
                    v = d.default.Button.Colors.GREEN;
                S && (M = E.default.Messages.JOINED_GUILD, v = d.default.Button.Colors.PRIMARY);
                let x = E.default.Messages.INVITE_BUTTON_TITLE_INVITED_GROUP_DM;
                return T && (x = E.default.Messages.INVITE_BUTTON_TITLE_INVITER_GROUP_DM), (0, a.jsxs)(d.default, {
                    children: [(0, a.jsx)(d.default.Header, {
                        text: x
                    }), (0, a.jsxs)(d.default.Body, {
                        children: [(0, a.jsxs)("div", {
                            className: _.headerLine,
                            children: [(0, a.jsx)(d.default.Icon, {
                                channel: C,
                                onClick: S ? N : void 0
                            }), (0, a.jsx)(d.default.Info, {
                                title: A,
                                onClick: S ? N : void 0,
                                children: (0, a.jsx)(d.default.Data, {
                                    members: t.length
                                })
                            })]
                        }), (0, a.jsx)(d.default.Button, {
                            onClick: N,
                            submitting: g,
                            isDisabled: S,
                            color: v,
                            children: M
                        })]
                    })]
                })
            }