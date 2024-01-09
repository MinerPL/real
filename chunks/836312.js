            "use strict";
            A.r(t), A.d(t, {
                showPublishErrorDialog: function() {
                    return i
                }
            });
            var a = A("37983");
            A("884691");
            var l = A("551042"),
                n = A("83501"),
                r = A("669297"),
                s = A("49111"),
                o = A("782340");

            function i(e, t, i) {
                var u, d, c;
                switch (e.code) {
                    case s.AbortCodes.TOO_MANY_PUBLISHED_PRODUCT_LISTINGS:
                        (0, r.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_TOO_MANY_PUBLISHED_PRODUCT_ERROR_BODY, n.IconVariant.DANGER);
                        break;
                    case s.AbortCodes.TWO_FA_NOT_ENABLED:
                        (0, r.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_TWO_FA_NOT_ENABLED_ERROR_BODY, n.IconVariant.WARNING);
                        break;
                    case s.AbortCodes.GUILD_PRODUCT_LISTING_CANNOT_PUBLISH_WITHOUT_BENEFIT:
                        (0, r.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_TITLE, o.default.Messages.GUILD_PRODUCT_MISSING_BENEFITS_ERROR_BODY, n.IconVariant.WARNING);
                        break;
                    case s.AbortCodes.MONETIZATION_TERMS_NOT_ACCEPTED:
                        ;
                        u = t, (0, l.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await A.el("300770").then(A.bind(A, "300770"));
                            return t => (0, a.jsx)(e, {
                                guildId: u,
                                ...t
                            })
                        });
                        break;
                    case s.AbortCodes.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED:
                        (0, r.openErrorDialog)(o.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_TITLE, o.default.Messages.CREATOR_MONETIZATION_PAYMENT_TEAM_REQUIRED_BODY, n.IconVariant.WARNING);
                        break;
                    case s.AbortCodes.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED:
                        let f, C;
                        null != i ? (f = o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY_WITH_LINK, C = {
                            url: s.MarketingURLs.DEVELOPER_PORTAL_PAYOUT_SETTINGS(i)
                        }) : f = o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_BODY, (0, r.openErrorDialog)(o.default.Messages.CREATOR_MONETIZATION_PAYMENT_ACCOUNT_VERIFICATION_REQUIRED_TITLE, f, n.IconVariant.WARNING, C);
                        break;
                    default:
                        ;
                        let g = null !== (c = e.getFirstFieldErrorMessage(["published"])) && void 0 !== c ? c : (null === (d = e.hasFieldErrors) || void 0 === d ? void 0 : d.call(e)) ? void 0 : e.message;
                        if (null != g)(0, r.openErrorDialog)(o.default.Messages.GUILD_PRODUCT_GENERIC_ERROR_TITLE, g, n.IconVariant.WARNING)
                }
            }