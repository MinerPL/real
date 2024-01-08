            "use strict";
            n.r(t), n.d(t, {
                PAYMENT_SOURCE_NAMES: function() {
                    return f
                },
                getLocalizedPricingNotice: function() {
                    return _
                },
                getLocalizedPricingBannerStrings: function() {
                    return p
                }
            }), n("222007"), n("424973");
            var r = n("592861"),
                i = n("988415"),
                o = n("701909"),
                l = n("153160"),
                s = n("49111"),
                a = n("843455"),
                u = n("782340");
            let c = new Set([a.CurrencyCodes.ARS, a.CurrencyCodes.CLP, a.CurrencyCodes.COP]),
                d = new Set([a.CurrencyCodes.USD, a.CurrencyCodes.JPY]),
                f = {
                    [s.PaymentSourceTypes.CARD]: () => u.default.Messages.PAYMENT_SOURCE_CREDIT_CARD_CARD_ONLY,
                    [s.PaymentSourceTypes.PAYPAL]: () => u.default.Messages.PAYMENT_SOURCE_PAYPAL,
                    [s.PaymentSourceTypes.SOFORT]: () => u.default.Messages.PAYMENT_SOURCE_SOFORT,
                    [s.PaymentSourceTypes.GIROPAY]: () => u.default.Messages.PAYMENT_SOURCE_GIROPAY,
                    [s.PaymentSourceTypes.PRZELEWY24]: () => u.default.Messages.PAYMENT_SOURCE_PRZELEWY24,
                    [s.PaymentSourceTypes.PAYSAFE_CARD]: () => u.default.Messages.PAYMENT_SOURCE_PAYSAFE_CARD,
                    [s.PaymentSourceTypes.GCASH]: () => u.default.Messages.PAYMENT_SOURCE_GCASH,
                    [s.PaymentSourceTypes.GRABPAY_MY]: () => u.default.Messages.PAYMENT_SOURCE_GRABPAY,
                    [s.PaymentSourceTypes.MOMO_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_MOMO_WALLET,
                    [s.PaymentSourceTypes.VENMO]: () => u.default.Messages.PAYMENT_SOURCE_VENMO,
                    [s.PaymentSourceTypes.KAKAOPAY]: () => u.default.Messages.PAYMENT_SOURCE_KAKAOPAY,
                    [s.PaymentSourceTypes.GOPAY_WALLET]: () => u.default.Messages.PAYMENT_SOURCE_GOPAY_WALLET,
                    [s.PaymentSourceTypes.BANCONTACT]: () => u.default.Messages.PAYMENT_SOURCE_BANCONTACT,
                    [s.PaymentSourceTypes.EPS]: () => u.default.Messages.PAYMENT_SOURCE_EPS,
                    [s.PaymentSourceTypes.IDEAL]: () => u.default.Messages.PAYMENT_SOURCE_IDEAL,
                    [s.PaymentSourceTypes.CASH_APP]: () => u.default.Messages.PAYMENT_SOURCE_CASH_APP_PAY
                },
                E = [s.PaymentSourceTypes.EPS, s.PaymentSourceTypes.BANCONTACT, s.PaymentSourceTypes.IDEAL, s.PaymentSourceTypes.SOFORT, s.PaymentSourceTypes.GIROPAY, s.PaymentSourceTypes.SEPA_DEBIT, s.PaymentSourceTypes.PAYSAFE_CARD],
                _ = (e, t, n, r) => {
                    if (null == e) return "";
                    let o = (0, i.getI18NCountryName)(e);
                    if (t === a.CurrencyCodes.EUR) return n ? u.default.Messages.LOCALIZED_PRICING_NOTICE_GENERALIZED_PAYMENT_METHODS_PROMO.format({
                        country: o
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE_NO_LOWERED_PRICE.format({
                        currencyISOCode: t.toUpperCase()
                    });
                    return r ? u.default.Messages.NOTICE_NITRO_PRICE_CHANGED.format({
                        countryName: o
                    }) : u.default.Messages.LOCALIZED_PRICING_NOTICE.format({
                        country: o
                    })
                },
                p = e => {
                    let {
                        localizedPricingPromo: t,
                        subscription: n,
                        forceSingleLine: r = !1,
                        userLocale: _
                    } = e, {
                        countryCode: p,
                        amount: C,
                        currency: A,
                        paymentSourceTypes: h
                    } = t, T = 0 !== h.length, S = I(p), R = (0, l.formatPrice)(C, A, {
                        style: "currency",
                        currency: A,
                        currencyDisplay: "symbol",
                        localeOverride: S
                    }), N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY.format({
                        helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                        currencyISOCode: A.toUpperCase(),
                        localizedPriceWithCurrencySymbol: R
                    });
                    if (d.has(A) && (N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_EXISTING_CURRENCY.format({
                            helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            localizedPriceWithCurrencySymbol: R
                        })), c.has(A) && (N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_NEW_CURRENCY_WITH_AMBIGUOUS_SYMBOL.format({
                            helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: A.toUpperCase(),
                            localizedPriceWithCurrencySymbol: R
                        })), null != n && !n.hasPremiumNitroMonthly && (N = u.default.Messages.LOCALIZED_PRICING_BANNER_BODY_WITHOUT_PRICE.format({
                            helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            currencyISOCode: A.toUpperCase()
                        })), A === a.CurrencyCodes.EUR && (N = r ? u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE_SINGLE_STRING.format({
                            country: (0, i.getI18NCountryName)(p),
                            currencyISOCode: A.toUpperCase(),
                            helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        }) : u.default.Messages.LOCALIZED_PRICING_BANNER_NO_LOWERED_PRICE.format({
                            currencyISOCode: A.toUpperCase(),
                            helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        })), T) {
                        let e = E.filter(e => h.includes(e)),
                            t = h.filter(e => !E.includes(e)),
                            n = [...e, ...t],
                            r = n.slice(0, 2).map(e => {
                                var t, n;
                                return null !== (n = null === (t = f[e]) || void 0 === t ? void 0 : t.call(f)) && void 0 !== n ? n : u.default.Messages.PAYMENT_SOURCE_UNKNOWN
                            });
                        h.length >= 3 && r.push(u.default.Messages.LOCALIZED_PRICING_MORE_NEW_WAYS_TO_PAY);
                        let i = new Intl.ListFormat(_, {
                            style: "short",
                            type: "conjunction"
                        });
                        N = u.default.Messages.LOCALIZED_PRICING_PAYMENT_METHODS_PROMO.format({
                            helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING),
                            paymentMethods: i.format(r)
                        })
                    }
                    return {
                        localizedPricingBannerHeader: u.default.Messages.LOCALIZED_PRICING_BANNER_HEADER.format({
                            country: (0, i.getI18NCountryName)(p)
                        }),
                        localizedPricingBannerBody: N,
                        localizedPricingBannerLinkOnly: u.default.Messages.LOCALIZED_PRICING_BANNER_LINK_ONLY.format({
                            helpCenterLink: o.default.getArticleURL(s.HelpdeskArticles.LOCALIZED_PRICING)
                        }),
                        localizedPricingBannerSubNotif: T ? void 0 : u.default.Messages.LOCALIZED_PRICING_BANNER_SUB_NOTIF
                    }
                },
                I = e => {
                    let t = r.default.find(t => t.alpha2 === e);
                    return null == t ? void 0 : t.localeForICU
                }