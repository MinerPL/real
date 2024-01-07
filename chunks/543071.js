            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return m
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("446674"),
                i = a("77078"),
                d = a("503021"),
                r = a("757414"),
                u = a("794352"),
                o = a("782340"),
                c = a("864732");

            function f(e) {
                let {
                    guild: t
                } = e;
                n.useEffect(() => {
                    (0, d.fetchGuildForPopout)(t.id)
                }, [t.id]);
                let a = (0, s.useStateFromStores)([r.default], () => r.default.getGuild(t.id), [t]);
                return (0, l.jsxs)("div", {
                    className: c.memberInfo,
                    children: [t.hasCommunityInfoSubheader() && (0, l.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, l.jsx)(u.default, {
                            width: 14,
                            height: 14
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: o.default.Messages.DISCOVERABLE_GUILD_HEADER_PUBLIC
                        })]
                    }), (null == a ? void 0 : a.presenceCount) != null && (0, l.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, l.jsx)("div", {
                            className: c.dotOnline
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                                membersOnline: a.presenceCount
                            })
                        })]
                    }), (null == a ? void 0 : a.memberCount) != null && (0, l.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, l.jsx)("div", {
                            className: c.dotOffline
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
                                members: a.memberCount
                            })
                        })]
                    })]
                })
            }
            var m = n.memo(function(e) {
                let {
                    guild: t
                } = e;
                return (0, l.jsx)("div", {
                    className: c.container,
                    children: (0, l.jsxs)(i.HeadingLevel, {
                        component: (0, l.jsx)("div", {
                            className: c.header,
                            children: (0, l.jsx)(i.Heading, {
                                variant: "heading-md/bold",
                                children: o.default.Messages.GUILD_HOME_ABOUT
                            })
                        }),
                        children: [null != t.description ? (0, l.jsx)(i.Text, {
                            className: c.description,
                            variant: "text-md/normal",
                            children: t.description
                        }) : null, (0, l.jsx)(f, {
                            guild: t
                        })]
                    })
                })
            })