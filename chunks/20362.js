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
                u = a("476263"),
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
                    children: [(null == a ? void 0 : a.presenceCount) != null ? (0, l.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, l.jsx)("div", {
                            className: c.dotOnline
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: c.memberText,
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_ONLINE.format({
                                membersOnline: a.presenceCount
                            })
                        })]
                    }) : null, (null == a ? void 0 : a.memberCount) != null ? (0, l.jsxs)("div", {
                        className: c.memberCount,
                        children: [(0, l.jsx)("div", {
                            className: c.dotOffline
                        }), (0, l.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            className: c.memberText,
                            children: o.default.Messages.MEMBER_VERIFICATION_NUM_MEMBERS.format({
                                members: a.memberCount
                            })
                        })]
                    }) : null]
                })
            }
            var m = n.memo(function(e) {
                let {
                    guild: t
                } = e;
                return (0, l.jsxs)("div", {
                    className: c.container,
                    children: [(0, l.jsx)("div", {
                        className: c.iconWrapper,
                        children: (0, l.jsx)(u.default, {
                            className: c.icon,
                            guild: t,
                            size: u.default.Sizes.LARGER,
                            active: !0
                        })
                    }), (0, l.jsx)(i.Text, {
                        tag: "div",
                        className: c.name,
                        variant: "heading-xl/semibold",
                        children: t.name
                    }), null != t.description ? (0, l.jsx)(i.Text, {
                        className: c.description,
                        variant: "text-md/normal",
                        children: t.description
                    }) : null, (0, l.jsx)(f, {
                        guild: t
                    })]
                })
            })