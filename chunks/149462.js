            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var i = l("37983");
            l("884691");
            var a = l("132710"),
                n = l.n(a),
                s = l("77078"),
                r = l("970728"),
                c = l("824021"),
                o = l("139514"),
                d = l("312016"),
                u = l("844659"),
                p = l("9074");
            let m = /^discord.gg\/[a-zA-Z0-9-]+/,
                _ = {
                    ...p.default.rules,
                    heading: {
                        ...c.Rules.heading
                    },
                    image: {
                        ...n.defaultRules.image
                    },
                    inviteLink: {
                        order: p.default.rules.link.order + 1,
                        match: (e, t) => t.inline ? m.exec(e) : null,
                        parse: (e, t, l) => {
                            let i = (0, d.findCodedLink)(e[0]);
                            return null == i || i.type !== o.CodedLinkType.INVITE ? {
                                type: "text",
                                content: e[0]
                            } : {
                                type: "inviteLink",
                                content: [{
                                    type: "text",
                                    content: e[0]
                                }],
                                onClick: () => {
                                    var e;
                                    r.default.acceptInviteAndTransitionToInviteChannel({
                                        inviteKey: i.code,
                                        context: {
                                            location: "Application Directory"
                                        }
                                    }), null === (e = l.closeModal) || void 0 === e || e.call(l)
                                }
                            }
                        },
                        react: (e, t, l) => (0, i.jsx)(s.Anchor, {
                            onClick: t => {
                                t.preventDefault(), e.onClick()
                            },
                            children: (0, u.smartOutput)(e, t, l)
                        }, l.key)
                    }
                };
            var f = _