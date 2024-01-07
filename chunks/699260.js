            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("394846"),
                l = s("77078"),
                i = s("516899"),
                r = s("191814"),
                o = s("538137"),
                d = s("837008"),
                u = s("736595"),
                c = s("533137"),
                S = s("782340"),
                E = s("911848"),
                f = e => {
                    let {
                        onGoBack: t
                    } = e, s = (0, u.default)(), {
                        loading: f
                    } = (0, d.useFetchListingsForSubscriptions)(s);
                    return ((0, i.default)(n.isMobile ? "role-subscriptions-user-setting" : void 0), f) ? (0, a.jsx)(l.Spinner, {}) : 0 === s.length ? null : (0, a.jsxs)("div", {
                        className: E.container,
                        children: [(0, a.jsxs)(l.Button, {
                            look: l.Button.Looks.BLANK,
                            innerClassName: E.backButtonContents,
                            onClick: t,
                            children: [(0, a.jsx)(o.default, {
                                className: E.arrowIcon
                            }), S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_PAGE_BACK_BUTTON_CTA]
                        }), (0, a.jsx)(r.default, {
                            size: 10
                        }), (0, a.jsx)(l.FormTitle, {
                            tag: "h1",
                            children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
                        }), (0, a.jsx)(l.Text, {
                            variant: "text-sm/normal",
                            className: E.pageDescription,
                            children: S.default.Messages.GUILD_ROLE_MANAGE_SUBSCRIPTION_PAGE_DESCRIPTION
                        }), (0, a.jsx)("div", {
                            className: E.subscriptionsContainer,
                            children: s.map(e => (0, a.jsx)(c.default, {
                                subscription: e
                            }, e.id))
                        })]
                    })
                }