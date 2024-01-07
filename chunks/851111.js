            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return A
                }
            }), i("222007");
            var n = i("37983"),
                l = i("884691"),
                s = i("866227"),
                a = i.n(s),
                r = i("446674"),
                o = i("95410"),
                u = i("77078"),
                c = i("850068"),
                d = i("79112"),
                f = i("521012"),
                E = i("791106"),
                m = i("945330"),
                I = i("216422"),
                p = i("719923"),
                g = i("788506"),
                _ = i("49111"),
                S = i("646718"),
                h = i("782340"),
                C = i("764942");
            let T = "premiumRetentionEmojiPickerNotice",
                N = o.default.get(T);
            var A = e => {
                let {
                    closePopout: t,
                    channel: i
                } = e, [s, A] = l.useState(!1), {
                    subscription: y,
                    hasFetchedSubscriptions: v
                } = (0, r.useStateFromStoresObject)([f.default], () => ({
                    subscription: f.default.getPremiumSubscription(),
                    hasFetchedSubscriptions: f.default.hasFetchedSubscriptions()
                }));
                if (l.useEffect(() => {
                        !v && (0, c.fetchSubscriptions)()
                    }, [v]), null == y || !(0, p.isSubscriptionStatusFailedPayment)(y.status) || s) return null;
                let j = y.status === _.SubscriptionStatusTypes.PAST_DUE ? (0, p.getBillingGracePeriodDays)(y) : S.MAX_ACCOUNT_HOLD_DAYS,
                    R = a(y.currentPeriodStart).add(j, "days"),
                    O = "".concat(y.id, ":").concat(R.toISOString());
                if (N === O) return null;
                let M = p.default.getPremiumType(y.planId) === S.PremiumTypes.TIER_0 ? E.GradientCssUrls.PREMIUM_TIER_0 : p.default.getPremiumType(y.planId) === S.PremiumTypes.TIER_1 ? E.GradientCssUrls.PREMIUM_TIER_1 : E.GradientCssUrls.PREMIUM_TIER_2;
                return (0, n.jsxs)("div", {
                    className: C.premiumRetentionNotice,
                    children: [(0, n.jsx)(I.default, {
                        className: C.premiumRetentionNoticeIcon,
                        color: M
                    }), (0, n.jsxs)("div", {
                        className: C.premiumRetentionNoticeContent,
                        children: [(0, n.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            children: h.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_DESCRIPTION.format({
                                planName: p.default.getDisplayPremiumType(y.planId),
                                endsAt: R
                            })
                        }), (0, n.jsx)("div", {
                            children: (0, n.jsx)(u.Anchor, {
                                onClick: () => {
                                    (0, g.trackPremiumSettingsPaneOpened)(i), t(), d.default.open(_.UserSettingsSections.PREMIUM)
                                },
                                children: h.default.Messages.PREMIUM_RETENTION_EMOJI_PICKER_UPDATE_PAYMENT_INFORMATION
                            })
                        })]
                    }), (0, n.jsx)(u.Clickable, {
                        onClick: () => {
                            o.default.set(T, O), N = O, A(!0)
                        },
                        children: (0, n.jsx)(m.default, {
                            className: C.premiumRetentionNoticeClose
                        })
                    })]
                })
            }