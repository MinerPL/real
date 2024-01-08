            "use strict";
            n.r(t), n.d(t, {
                DismissibleContentNotices: function() {
                    return P
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                i = n("151426"),
                l = n("77078"),
                r = n("327037"),
                o = n("79112"),
                u = n("376556"),
                d = n("926994"),
                c = n("889293"),
                E = n("757557"),
                f = n("994750"),
                _ = n("966003"),
                h = n("363861"),
                C = n("695827"),
                I = n("425538"),
                T = n("393414"),
                S = n("600133"),
                N = n("936629"),
                A = n("489622"),
                m = n("599110"),
                p = n("509802"),
                g = n("994428"),
                R = n("49111"),
                O = n("935583"),
                L = n("646718"),
                v = n("782340"),
                M = n("185401");
            let P = e => {
                let {
                    dismissibleContent: t,
                    noticeType: P
                } = e, D = (0, s.useStateFromStores)([S.default], () => S.default.getNotice());
                return (0, a.jsx)(p.default, {
                    contentTypes: [t],
                    groupName: g.DismissibleContentGroupName.NOTICE_BAR,
                    bypassAutoDismiss: !0,
                    children: e => {
                        var t, s;
                        let {
                            visibleContent: S,
                            markAsDismissed: p
                        } = e;
                        switch (S) {
                            case i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR:
                                return (0, a.jsx)(_.default, {
                                    dismissCurrentNotice: () => p(g.ContentDismissActionType.UNKNOWN)
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_DOWNLOAD:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.DEFAULT,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN),
                                        noticeType: P
                                    }), v.default.Messages.NOTICE_NATIVE_APPS_2020_06, (0, a.jsx)("i", {
                                        className: M.iconApple
                                    }), (0, a.jsx)("i", {
                                        className: M.iconAndroid
                                    }), (0, a.jsx)("i", {
                                        className: M.iconWindows
                                    }), (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        noticeType: P,
                                        onClick: () => {
                                            (0, l.openModalLazy)(async () => {
                                                let {
                                                    default: e
                                                } = await n.el("649486").then(n.bind(n, "649486"));
                                                return t => (0, a.jsx)(e, {
                                                    source: "Top Bar Nag",
                                                    ...t
                                                })
                                            })
                                        },
                                        children: v.default.Messages.DOWNLOAD
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_CONNECT_SPOTIFY:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.SPOTIFY,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN),
                                        noticeType: P
                                    }), (0, a.jsx)(N.default, {
                                        className: M.platformIcon
                                    }), v.default.Messages.NOTICE_CONNECT_SPOTIFY, (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        onClick: () => (0, d.default)(R.PlatformTypes.SPOTIFY, "Notice Bar"),
                                        noticeType: P,
                                        children: v.default.Messages.CONNECT
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_CONNECT_PLAYSTATION:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.PLAYSTATION,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN)
                                    }), (0, a.jsx)("img", {
                                        alt: "",
                                        className: M.platformIcon,
                                        src: u.default.get(R.PlatformTypes.PLAYSTATION).icon.whiteSVG
                                    }), v.default.Messages.NOTICE_CONNECT_PLAYSTATION, (0, a.jsx)(A.NoticeButton, {
                                        onClick: () => (0, d.default)(R.PlatformTypes.PLAYSTATION, "Notice Bar"),
                                        children: v.default.Messages.CONNECT
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_MFA_SMS_BACKUP:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.DEFAULT,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN),
                                        noticeType: P
                                    }), v.default.Messages.NOTICE_MFA_SMS_BACKUP, (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        onClick: () => o.default.open(R.UserSettingsSections.ACCOUNT),
                                        noticeType: P,
                                        children: v.default.Messages.NOTICE_MFA_SMS_BACKUP_BUTTON
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_PROMO:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.PREMIUM_TIER_2,
                                    children: [(0, a.jsx)("span", {
                                        className: M.premiumLogo
                                    }), (0, a.jsx)("span", {
                                        className: M.premiumText,
                                        children: v.default.Messages.NOTICE_PREMIUM_PROMO_MESSAGE
                                    }), (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        className: M.premiumAction,
                                        noticeType: P,
                                        onClick: () => {
                                            m.default.track(R.AnalyticEvents.PREMIUM_PROMOTION_OPENED, {
                                                location_section: R.AnalyticsSections.NOTIFICATION_BAR,
                                                location_object: R.AnalyticsObjects.BUTTON_CTA
                                            }), o.default.open(R.UserSettingsSections.PREMIUM)
                                        },
                                        children: v.default.Messages.NOTICE_PREMIUM_PROMO_ACTION
                                    }), (0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => {
                                            p(g.ContentDismissActionType.UNKNOWN), (0, r.setFlag)(R.UserFlags.PREMIUM_PROMO_DISMISSED, !0)
                                        },
                                        noticeType: P
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_TWO_TRIAL_ENDING:
                                return (0, a.jsx)(I.default, {
                                    dismissCurrentNotice: () => p(g.ContentDismissActionType.UNKNOWN),
                                    subscriptionTier: L.PremiumSubscriptionSKUs.TIER_2
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_TIER_0_TRIAL_ENDING:
                                return (0, a.jsx)(I.default, {
                                    dismissCurrentNotice: () => p(g.ContentDismissActionType.UNKNOWN),
                                    subscriptionTier: L.PremiumSubscriptionSKUs.TIER_0
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_PREMIUM_REACTIVATE:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.PREMIUM_TIER_2,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        noticeType: P,
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN)
                                    }), v.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_TEXT, (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        noticeType: P,
                                        onClick: () => {
                                            p(g.ContentDismissActionType.UNKNOWN), o.default.open(R.UserSettingsSections.PREMIUM)
                                        },
                                        children: v.default.Messages.PREMIUM_SUBSCRIPTION_REACTIVATION_NOTICE_BUTTON_TEXT
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_LOCALIZED_PRICING:
                                return (0, a.jsx)(C.default, {
                                    notice: D,
                                    noticeType: P,
                                    dismissCurrentNotice: () => p(g.ContentDismissActionType.UNKNOWN)
                                });
                            case i.DismissibleContent.QUEST_1_GO_LIVE_BANNER:
                                let y = null == D ? void 0 : null === (t = D.metadata) || void 0 === t ? void 0 : t.partnerGame;
                                return (0, a.jsx)(f.default, {
                                    noticeType: P,
                                    markAsDismissed: () => p(g.ContentDismissActionType.UNKNOWN),
                                    partnerGame: y
                                });
                            case i.DismissibleContent.QUEST_1_ENDED_INCOMPLETE:
                                let x = null == D ? void 0 : null === (s = D.metadata) || void 0 === s ? void 0 : s.partnerGame;
                                return (0, a.jsx)(E.default, {
                                    noticeType: P,
                                    markAsDismissed: () => p(g.ContentDismissActionType.UNKNOWN),
                                    partnerGame: x
                                });
                            case i.DismissibleContent.NAGBAR_BOUNCED_EMAIL_NOTICE:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.DANGER,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN),
                                        noticeType: P
                                    }), v.default.Messages.BOUNCED_EMAIL_DETECTED_NOTICE, (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        noticeType: P,
                                        onClick: () => {
                                            (0, T.transitionTo)(R.Routes.SETTINGS("account"))
                                        },
                                        children: v.default.Messages.CHANGE_EMAIL_SHORT
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_ACTIVATE_SERVER_SUBSCRIPTION:
                                let b = c.default.getEligibleGuildsForNagActivate();
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.DEFAULT,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN),
                                        noticeType: P
                                    }), v.default.Messages.GUILD_ROLE_SUBSCRIPTION_NAGBAR_TEXT, (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        noticeType: P,
                                        onClick: () => {
                                            p(g.ContentDismissActionType.PRIMARY), (0, T.transitionTo)(1 === b.length ? R.Routes.GUILD_SETTINGS(b[0], "role-subscriptions") : R.Routes.PICK_GUILD_SETTINGS("role-subscriptions", void 0, "server-subscriptions-finish-setting-up"))
                                        },
                                        children: v.default.Messages.LETS_GO
                                    })]
                                });
                            case i.DismissibleContent.NAGBAR_NOTICE_POMELO:
                                return (0, a.jsxs)(A.default, {
                                    color: A.NoticeColors.WARNING,
                                    children: [(0, a.jsx)(A.NoticeCloseButton, {
                                        onClick: () => p(g.ContentDismissActionType.UNKNOWN),
                                        noticeType: P
                                    }), v.default.Messages.POMELO_ACTION_NEEDED.format(), (0, a.jsx)(A.PrimaryCTANoticeButton, {
                                        onClick: () => (0, h.default)(O.PomeloEntrypoints.NOTICE),
                                        noticeType: P,
                                        children: v.default.Messages.GET_STARTED
                                    })]
                                })
                        }
                    }
                })
            }