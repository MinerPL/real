            "use strict";
            n.r(t), n.d(t, {
                GuildRoleSubscriptionsOverviewErrorType: function() {
                    return s
                },
                GuildRoleSubscriptionsOverviewErrorPage: function() {
                    return E
                }
            });
            var a, s, i = n("37983");
            n("884691");
            var l = n("759843"),
                r = n("77078"),
                o = n("428958"),
                u = n("782340"),
                d = n("33716"),
                c = n("12469");
            (a = s || (s = {})).GUILD_NOT_ELIGIBLE = "guild_not_eligible", a.NOT_GUILD_MEMBER = "not_guild_member";
            let E = e => {
                let {
                    errorType: t
                } = e;
                return (0, o.default)({
                    type: l.ImpressionTypes.PAGE,
                    name: l.ImpressionNames.ROLE_SUBSCRIPTION_LISTING_UPSELL_ERROR_PAGE,
                    properties: {
                        error_page_type: t
                    }
                }), (0, i.jsx)("div", {
                    className: d.errorPageContainer,
                    children: (0, i.jsxs)("div", {
                        className: d.errorPageContent,
                        children: [(0, i.jsx)("img", {
                            src: c,
                            alt: "",
                            className: d.errorPageIllo
                        }), (0, i.jsx)(r.Heading, {
                            variant: "heading-xl/extrabold",
                            className: d.errorPageTitle,
                            children: "guild_not_eligible" === t ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_TITLE : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_TITLE
                        }), (0, i.jsx)(r.Text, {
                            variant: "text-md/normal",
                            className: d.errorPagSubtitle,
                            children: "guild_not_eligible" === t ? u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_GUILD_NOT_ELIGIBLE_SUBTITLE : u.default.Messages.GUILD_ROLE_SUBSCRIPTION_PURCHASE_ERROR_PAGE_NOT_GUILD_MEMBER_SUBTITLE
                        })]
                    })
                })
            }