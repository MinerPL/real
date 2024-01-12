            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return E
                }
            });
            var n = l("872717"),
                i = l("913144"),
                s = l("651057"),
                r = l("299285"),
                a = l("523086"),
                u = l("21526"),
                d = l("659632"),
                o = l("49111"),
                c = l("646718"),
                E = {
                    resolveGiftCode: async function e(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        i.default.dispatch({
                            type: "GIFT_CODE_RESOLVE",
                            code: e
                        });
                        try {
                            let n = await (0, d.resolveGiftCode)(e, t, l);
                            if (null != n.application_id && n.application_id !== c.PREMIUM_SUBSCRIPTION_APPLICATION) {
                                let e = r.default.getApplication(n.application_id);
                                if (null == e) try {
                                    await s.default.fetchApplication(n.application_id)
                                } catch (e) {}
                            }
                            if (n.application_id === o.COLLECTIBLES_APPLICATION_ID) try {
                                await (0, u.fetchCollectiblesProduct)(n.sku_id)
                            } catch (e) {}
                            return i.default.dispatch({
                                type: "GIFT_CODE_RESOLVE_SUCCESS",
                                giftCode: n
                            }), {
                                giftCode: n
                            }
                        } catch (t) {
                            throw i.default.dispatch({
                                type: "GIFT_CODE_RESOLVE_FAILURE",
                                code: e,
                                error: t
                            }), t
                        }
                    },
                    async fetchUserGiftCodesForSKU(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        i.default.dispatch({
                            type: "GIFT_CODES_FETCH",
                            skuId: e,
                            subscriptionPlanId: t
                        });
                        try {
                            let l = await n.default.get({
                                url: o.Endpoints.USER_GIFT_CODES,
                                query: {
                                    sku_id: e,
                                    subscription_plan_id: t
                                },
                                oldFormErrors: !0
                            });
                            i.default.dispatch({
                                type: "GIFT_CODES_FETCH_SUCCESS",
                                giftCodes: l.body,
                                skuId: e,
                                subscriptionPlanId: t
                            })
                        } catch (l) {
                            i.default.dispatch({
                                type: "GIFT_CODES_FETCH_FAILURE",
                                skuId: e,
                                subscriptionPlanId: t
                            })
                        }
                    },
                    async createGiftCode(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                        i.default.dispatch({
                            type: "GIFT_CODE_CREATE_START",
                            skuId: e,
                            subscriptionPlanId: t
                        });
                        try {
                            let s = await n.default.post({
                                url: o.Endpoints.USER_GIFT_CODE_CREATE,
                                body: {
                                    sku_id: e,
                                    subscription_plan_id: t,
                                    gift_style: l
                                },
                                oldFormErrors: !0
                            });
                            return i.default.dispatch({
                                type: "GIFT_CODE_CREATE_SUCCESS",
                                giftCode: s.body
                            }), s.body
                        } catch (l) {
                            i.default.dispatch({
                                type: "GIFT_CODE_CREATE_FAILURE",
                                skuId: e,
                                subscriptionPlanId: t
                            })
                        }
                    },
                    async revokeGiftCode(e) {
                        i.default.dispatch({
                            type: "GIFT_CODE_REVOKE",
                            code: e
                        });
                        try {
                            await n.default.delete({
                                url: o.Endpoints.USER_GIFT_CODE_REVOKE(e),
                                oldFormErrors: !0
                            }), i.default.dispatch({
                                type: "GIFT_CODE_REVOKE_SUCCESS",
                                code: e
                            })
                        } catch (t) {
                            i.default.dispatch({
                                type: "GIFT_CODE_REVOKE_FAILURE",
                                code: e
                            })
                        }
                    },
                    openNativeGiftCodeModal(e) {
                        a.default.openNativeAppModal(e, o.RPCCommands.GIFT_CODE_BROWSER)
                    },
                    ...l("812495").default
                }