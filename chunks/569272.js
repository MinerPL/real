            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var i = l("872717"),
                s = l("913144"),
                n = l("651057"),
                a = l("299285"),
                r = l("523086"),
                u = l("21526"),
                d = l("659632"),
                o = l("49111"),
                c = l("646718"),
                E = {
                    resolveGiftCode: async function e(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        s.default.dispatch({
                            type: "GIFT_CODE_RESOLVE",
                            code: e
                        });
                        try {
                            let i = await (0, d.resolveGiftCode)(e, t, l);
                            if (null != i.application_id && i.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION) {
                                let e = a.default.getApplication(i.application_id);
                                if (null == e) try {
                                    await n.default.fetchApplication(i.application_id)
                                } catch (e) {}
                            }
                            if (i.application_id === o.COLLECTIBLES_APPLICATION_ID) try {
                                await (0, u.fetchCollectiblesProduct)(i.sku_id)
                            } catch (e) {}
                            return s.default.dispatch({
                                type: "GIFT_CODE_RESOLVE_SUCCESS",
                                giftCode: i
                            }), {
                                giftCode: i
                            }
                        } catch (t) {
                            throw s.default.dispatch({
                                type: "GIFT_CODE_RESOLVE_FAILURE",
                                code: e,
                                error: t
                            }), t
                        }
                    },
                    async fetchUserGiftCodesForSKU(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        s.default.dispatch({
                            type: "GIFT_CODES_FETCH",
                            skuId: e,
                            subscriptionPlanId: t
                        });
                        try {
                            let l = await i.default.get({
                                url: o.Endpoints.USER_GIFT_CODES,
                                query: {
                                    sku_id: e,
                                    subscription_plan_id: t
                                },
                                oldFormErrors: !0
                            });
                            s.default.dispatch({
                                type: "GIFT_CODES_FETCH_SUCCESS",
                                giftCodes: l.body,
                                skuId: e,
                                subscriptionPlanId: t
                            })
                        } catch (l) {
                            s.default.dispatch({
                                type: "GIFT_CODES_FETCH_FAILURE",
                                skuId: e,
                                subscriptionPlanId: t
                            })
                        }
                    },
                    async createGiftCode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        s.default.dispatch({
                            type: "GIFT_CODE_CREATE_START",
                            skuId: e,
                            subscriptionPlanId: t
                        });
                        try {
                            let n = await i.default.post({
                                url: o.Endpoints.USER_GIFT_CODE_CREATE,
                                body: {
                                    sku_id: e,
                                    subscription_plan_id: t,
                                    gift_style: l
                                },
                                oldFormErrors: !0
                            });
                            return s.default.dispatch({
                                type: "GIFT_CODE_CREATE_SUCCESS",
                                giftCode: n.body
                            }), n.body
                        } catch (l) {
                            s.default.dispatch({
                                type: "GIFT_CODE_CREATE_FAILURE",
                                skuId: e,
                                subscriptionPlanId: t
                            })
                        }
                    },
                    async revokeGiftCode(e) {
                        s.default.dispatch({
                            type: "GIFT_CODE_REVOKE",
                            code: e
                        });
                        try {
                            await i.default.delete({
                                url: o.Endpoints.USER_GIFT_CODE_REVOKE(e),
                                oldFormErrors: !0
                            }), s.default.dispatch({
                                type: "GIFT_CODE_REVOKE_SUCCESS",
                                code: e
                            })
                        } catch (t) {
                            s.default.dispatch({
                                type: "GIFT_CODE_REVOKE_FAILURE",
                                code: e
                            })
                        }
                    },
                    openNativeGiftCodeModal(e) {
                        r.default.openNativeAppModal(e, o.RPCCommands.GIFT_CODE_BROWSER)
                    },
                    ...l("812495").default
                }