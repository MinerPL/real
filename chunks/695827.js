            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("79112"),
                i = n("216422"),
                l = n("489622"),
                r = n("909469"),
                o = n("959905"),
                u = n("485138"),
                d = n("49111"),
                c = n("994428"),
                E = n("782340"),
                f = n("185401"),
                _ = e => {
                    let {
                        notice: t,
                        noticeType: n,
                        dismissCurrentNotice: _
                    } = e, h = (null == t ? void 0 : t.metadata.premiumSubscription) != null, C = (0, o.useLocalizedPromoQuery)();
                    if ((0, u.useTrackLocalizedPricingPromoImpression)(d.AnalyticsSections.NOTIFICATION_BAR, null == C ? void 0 : C.countryCode), null == C) return null;
                    let I = C.countryCode,
                        T = C.currency,
                        S = C.paymentSourceTypes.length > 0;
                    return (0, a.jsxs)(l.default, {
                        color: h ? l.NoticeColors.BRAND : l.NoticeColors.PREMIUM_TIER_2,
                        children: [(0, a.jsx)(l.NoticeCloseButton, {
                            onClick: () => _(c.ContentDismissActionType.UNKNOWN),
                            noticeType: n
                        }), !h && (0, a.jsx)(i.default, {
                            className: f.premiumIcon
                        }), (0, r.getLocalizedPricingNotice)(I, T, S, h), (0, a.jsx)(l.PrimaryCTANoticeButton, {
                            onClick: () => {
                                _(c.ContentDismissActionType.UNKNOWN), s.default.open(d.UserSettingsSections.PREMIUM)
                            },
                            noticeType: n,
                            children: E.default.Messages.LEARN_MORE
                        })]
                    })
                }