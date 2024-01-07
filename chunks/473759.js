            "use strict";
            s.r(t), s.d(t, {
                UsagePill: function() {
                    return I
                },
                default: function() {
                    return p
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("414456"),
                l = s.n(n),
                i = s("77078"),
                r = s("931138"),
                u = s("124969"),
                d = s("486952"),
                o = s("819220"),
                c = s("5487"),
                E = s("579033"),
                T = s("782340"),
                _ = s("426601"),
                f = s("926622");

            function L() {
                return (0, a.jsx)(r.default, {
                    className: _.verifiedIcon,
                    children: (0, a.jsx)("div", {
                        className: _.verifiedCheckContainer,
                        children: (0, a.jsx)(d.default, {
                            className: _.verifiedCheck
                        })
                    })
                })
            }

            function S(e) {
                let {
                    verified: t,
                    text: s
                } = e;
                return t ? (0, a.jsxs)("div", {
                    className: _.verifiedNameContainer,
                    children: [(0, a.jsx)(L, {}), s]
                }) : (0, a.jsx)(a.Fragment, {
                    children: s
                })
            }

            function I(e) {
                let {
                    className: t,
                    count: s,
                    creator: n,
                    verifiedName: i
                } = e;
                return (0, a.jsx)("div", {
                    className: l(_.usagePill, t, _.userText),
                    children: null != n || null != i ? T.default.Messages.GUILD_TEMPLATE_USAGES_BY_CREATOR2.format({
                        usageCount: s,
                        creator: null != i ? i : n,
                        creatorHook: (e, t) => (0, a.jsx)(S, {
                            text: e,
                            verified: null != i
                        }, t)
                    }) : T.default.Messages.GUILD_TEMPLATE_USAGES.format({
                        usageCount: s
                    })
                })
            }

            function p(e) {
                var t;
                let {
                    guildTemplate: s,
                    error: n,
                    tall: r,
                    pillClassName: d
                } = e;
                if (null != n && "" !== n) return (0, a.jsxs)("div", {
                    className: _.container,
                    children: [(0, a.jsx)(u.Title, {
                        children: T.default.Messages.INVITE_MODAL_ERROR_TITLE
                    }), (0, a.jsx)(u.SubTitle, {
                        children: n
                    })]
                });
                if (s.state === E.GuildTemplateStates.RESOLVING) return (0, a.jsx)("div", {
                    className: _.container,
                    children: (0, a.jsx)(i.Spinner, {})
                });
                let L = (0, c.default)(s.code).header;
                if (!r) return (0, a.jsxs)("div", {
                    className: _.container,
                    children: [(0, a.jsx)(u.Title, {
                        className: _.title,
                        children: L
                    }), (0, a.jsx)(u.SubTitle, {
                        className: l(_.subtitle, _.userText),
                        children: s.name
                    })]
                });
                return (0, a.jsxs)("div", {
                    className: _.container,
                    children: [(0, a.jsx)(u.Title, {
                        className: _.title,
                        children: L
                    }), (0, a.jsx)(u.SubTitle, {
                        className: l(_.subtitle, f.marginTop2),
                        children: T.default.Messages.GUILD_TEMPLATE_BASED_ON
                    }), (0, a.jsx)(u.Title, {
                        className: l(_.title, _.userText),
                        children: s.name
                    }), null != s.description && "" !== s.description && (0, a.jsx)(u.SubTitle, {
                        className: l(_.subtitle, _.userText, f.marginTop8),
                        children: s.description
                    }), (0, a.jsx)(I, {
                        className: d,
                        count: null !== (t = s.usageCount) && void 0 !== t ? t : 0,
                        creator: s.creator.username,
                        verifiedName: (0, o.getVerifiedName)(s.code)
                    })]
                })
            }