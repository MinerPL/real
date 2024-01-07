            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return I
                }
            }), l("702976");
            var i = l("37983"),
                a = l("884691"),
                n = l("414456"),
                s = l.n(n),
                r = l("77078"),
                c = l("291373"),
                o = l("109264"),
                d = l("155207"),
                u = l("849483"),
                p = l("701909"),
                m = l("128259"),
                _ = l("49111"),
                f = l("782340"),
                h = l("420163");
            let C = p.default.getArticleURL(_.HelpdeskArticles.BOT_DATA_ACCESS);

            function g(e) {
                let {
                    icon: t,
                    heading: l,
                    body: a
                } = e;
                return (0, i.jsxs)("li", {
                    className: h.intentContainer,
                    children: [(0, i.jsx)("div", {
                        children: (0, i.jsx)(t, {
                            height: "24",
                            width: "24"
                        })
                    }), (0, i.jsxs)("div", {
                        className: h.intentTextContainer,
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)(r.Heading, {
                                variant: "eyebrow",
                                color: "header-secondary",
                                children: l
                            })
                        }), (0, i.jsx)("div", {
                            className: h.intentBody,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: a
                            })
                        })]
                    })]
                })
            }

            function I(e) {
                let {
                    application: t
                } = e, {
                    hasMessageContent: l,
                    hasGuildPresences: n,
                    hasGuildMembers: p,
                    hasIntents: _
                } = (0, c.useBotDataAccess)({
                    flags: null == t ? void 0 : t.flags
                }), I = a.useCallback(() => {
                    (null == t ? void 0 : t.privacy_policy_url) != null && (0, m.handleClick)({
                        href: t.privacy_policy_url
                    })
                }, [null == t ? void 0 : t.privacy_policy_url]);
                return (0, i.jsxs)(i.Fragment, {
                    children: [_ && (0, i.jsx)("div", {
                        className: h.intentsListHeading,
                        children: (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            children: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_INTENTS_LIST_HEADING
                        })
                    }), (0, i.jsxs)("div", {
                        className: h.intentsContainer,
                        children: [_ && (0, i.jsxs)("ul", {
                            className: h.intentsList,
                            children: [l && (0, i.jsx)(g, {
                                icon: o.default,
                                heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_HEADING,
                                body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_MESSAGE_CONTENT_BODY
                            }), n && (0, i.jsx)(g, {
                                icon: u.default,
                                heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_HEADING,
                                body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_PRESENCES_BODY
                            }), p && (0, i.jsx)(g, {
                                icon: d.default,
                                heading: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_HEADING,
                                body: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_GUILD_MEMBERS_BODY
                            })]
                        }), (0, i.jsxs)("div", {
                            className: s({
                                [h.hasSeparator]: _
                            }),
                            children: [(0, i.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                children: f.default.Messages.BOTS_DATA_ACCESS_BASELINE.format({
                                    helpCenterUrl: C
                                })
                            }), (null == t ? void 0 : t.privacy_policy_url) != null && (0, i.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                color: "header-secondary",
                                className: h.privacyPolicy,
                                children: f.default.Messages.APP_DIRECTORY_PROFILE_DATA_ACCESS_PRIVACY_POLICY_V2.format({
                                    onClick: I
                                })
                            })]
                        })]
                    })]
                })
            }