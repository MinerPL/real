(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96634"], {
        569272: function(e, t, l) {
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
        },
        812495: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                redeemGiftCode: function() {
                    return d
                },
                default: function() {
                    return o
                }
            });
            var i = l("872717"),
                s = l("913144"),
                n = l("448993"),
                a = l("745279"),
                r = l("49111");
            let u = Object.freeze({});
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                    {
                        channelId: l = null,
                        paymentSource: d = null
                    } = t;
                s.default.dispatch({
                    type: "GIFT_CODE_REDEEM",
                    code: e
                });
                try {
                    let t = await i.default.post({
                        url: r.Endpoints.GIFT_CODE_REDEEM(e),
                        body: {
                            channel_id: l,
                            payment_source_id: null == d ? void 0 : d.id,
                            gateway_checkout_context: await (0, a.createGatewayCheckoutContext)(d)
                        },
                        oldFormErrors: !0
                    });
                    return s.default.dispatch({
                        type: "GIFT_CODE_REDEEM_SUCCESS",
                        code: e,
                        entitlement: t.body
                    }), {
                        code: e,
                        entitlement: t
                    }
                } catch (l) {
                    let t = new n.BillingError(l);
                    throw s.default.dispatch({
                        type: "GIFT_CODE_REDEEM_FAILURE",
                        code: e,
                        error: t
                    }), t
                }
            }
            var o = {
                redeemGiftCode: d
            }
        },
        534438: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                StageInviteFooter: function() {
                    return I
                },
                default: function() {
                    return g
                }
            });
            var i = l("37983"),
                s = l("884691"),
                n = l("414456"),
                a = l.n(n),
                r = l("77078"),
                u = l("813006"),
                d = l("766274"),
                o = l("476263"),
                c = l("272339"),
                E = l("849467"),
                _ = l("228427"),
                f = l("713573"),
                S = l("258078"),
                C = l("587974"),
                h = l("782340"),
                p = l("482133");
            let m = e => {
                    var t;
                    let {
                        speaker: l,
                        guildId: s,
                        isEmbed: n
                    } = e, a = new d.default(l.user);
                    return (0, i.jsxs)("div", {
                        className: p.speaker,
                        children: [(0, i.jsx)(r.Avatar, {
                            src: a.getAvatarURL(s, n ? 16 : 24),
                            size: n ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                            "aria-label": "".concat(l.nick, "-avatar"),
                            className: n ? null : p.avatar
                        }), (0, i.jsx)(S.default, {
                            size: n ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
                            color: S.default.Colors.HEADER_SECONDARY,
                            className: p.username,
                            children: null !== (t = l.nick) && void 0 !== t ? t : a.username
                        })]
                    })
                },
                I = e => {
                    let {
                        guild: t,
                        onlineCount: l
                    } = e;
                    if (null == t) return null;
                    let s = new u.default(t),
                        {
                            name: n,
                            description: a
                        } = s;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(f.default, {
                            muted: !0,
                            uppercase: !0,
                            className: p.alignStart,
                            children: h.default.Messages.STAGE_INVITE_GUILD_HEADER
                        }), (0, i.jsxs)("div", {
                            className: p.guild,
                            children: [(0, i.jsx)(C.default, {
                                mask: C.default.Masks.SQUIRCLE,
                                width: 40,
                                height: 40,
                                children: (0, i.jsx)(o.default, {
                                    guild: s,
                                    size: o.default.Sizes.MEDIUM,
                                    active: !0
                                })
                            }), (0, i.jsxs)("div", {
                                className: p.guildInfo,
                                children: [(0, i.jsx)(r.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: n
                                }), (0, i.jsxs)("div", {
                                    className: p.speaker,
                                    children: [(0, i.jsx)("div", {
                                        className: p.dot
                                    }), null != l && l > 0 ? (0, i.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                            membersOnline: l
                                        })
                                    }) : null]
                                })]
                            })]
                        }), null != a && "" !== a && (0, i.jsx)(r.Text, {
                            color: "header-secondary",
                            className: p.alignStart,
                            variant: "text-sm/normal",
                            children: a
                        })]
                    })
                };
            var g = e => {
                var t;
                let {
                    stageInstance: l,
                    guild: n,
                    isCard: d = !1,
                    isEmbed: I = !1,
                    onClick: g
                } = e, T = s.useMemo(() => null == n ? null : n instanceof u.default ? n : new u.default(n), [n]);
                if (null == l || null == T) return null;
                let {
                    topic: v,
                    speaker_count: O,
                    participant_count: A
                } = l, D = null !== (t = l.members) && void 0 !== t ? t : [], x = I ? D.slice(0, 3) : D, N = O - x.length;
                return I && (N += D.length - x.length), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)("div", {
                        className: p.flex,
                        children: [(0, i.jsxs)("div", {
                            className: p.flex,
                            children: [(0, i.jsx)(_.default, {
                                height: 24,
                                width: 24,
                                className: p.live
                            }), (0, i.jsx)(r.Heading, {
                                variant: "eyebrow",
                                className: a(p.label, p.live),
                                children: h.default.Messages.STAGE_CHANNEL_LIVE_NOW
                            })]
                        }), (0, i.jsxs)("div", {
                            className: p.background,
                            children: [(0, i.jsx)(c.default, {
                                height: 16,
                                width: 16,
                                className: p.listeners
                            }), (0, i.jsx)(r.Heading, {
                                className: a(p.label, p.listeners),
                                variant: "heading-sm/semibold",
                                children: A
                            })]
                        })]
                    }), I && (0, i.jsxs)("div", {
                        className: a(p.guild, {
                            [p.embed]: I
                        }),
                        children: [(0, i.jsx)(C.default, {
                            mask: C.default.Masks.SQUIRCLE,
                            width: 20,
                            height: 20,
                            children: (0, i.jsx)(o.default, {
                                guild: T,
                                size: o.default.Sizes.MINI,
                                active: !0
                            })
                        }), (0, i.jsx)(r.Text, {
                            color: "header-secondary",
                            className: p.label,
                            variant: "text-sm/normal",
                            children: T.name
                        })]
                    }), (0, i.jsx)(f.default, {
                        size: d || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                        className: a(p.header, {
                            [p.embed]: I
                        }),
                        children: v
                    }), (0, i.jsxs)("div", {
                        className: a(p.members, {
                            [p.embed]: I
                        }),
                        children: [x.length > 0 && (0, i.jsxs)("div", {
                            className: p.speakers,
                            children: [x.map(e => (0, i.jsx)(m, {
                                speaker: e,
                                guildId: T.id,
                                isEmbed: I
                            }, e.user.id)), N > 0 ? (0, i.jsxs)("div", {
                                className: p.speaker,
                                children: [(0, i.jsx)("div", {
                                    className: a(p.icon, {
                                        [p.embed]: I
                                    }),
                                    children: (0, i.jsx)(E.default, {
                                        height: I ? 12 : 14,
                                        className: p.listeners
                                    })
                                }), (0, i.jsxs)(S.default, {
                                    size: I ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
                                    color: S.default.Colors.HEADER_SECONDARY,
                                    children: ["+", h.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                        count: N
                                    })]
                                })]
                            }) : null]
                        }), I && (0, i.jsx)(r.Button, {
                            color: r.Button.Colors.GREEN,
                            onClick: g,
                            className: p.joinButton,
                            children: h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                        })]
                    })]
                })
            }
        },
        65324: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            }), l("222007"), l("70102");
            var i = l("37983"),
                s = l("884691"),
                n = l("446674"),
                a = l("206230"),
                r = l("491605"),
                u = l("210721"),
                d = l("78345");

            function o(e) {
                let {
                    giftStyle: t,
                    className: l,
                    shouldAnimate: o = !0,
                    defaultAnimationState: c,
                    idleAnimationState: E
                } = e, _ = (0, n.useStateFromStores)([a.default], () => a.default.useReducedMotion), [f, S] = s.useState(c), C = s.useRef((0, u.getGiftAnimationData)(t, f)), [h, p] = s.useState(null == E), [m, I] = s.useState(!1), [g, T] = s.useState(-1), v = () => {
                    C.current = (0, u.getGiftAnimationData)(t, f), T(e => e + 1)
                }, O = () => {
                    p(!1), I(!0), T(-1), S(c)
                };
                s.useEffect(() => {
                    null == E && S(c)
                }, [E, c]), s.useEffect(() => {
                    if (null != E && g >= 0) {
                        O();
                        return
                    }
                    v()
                }, [t, E]), s.useEffect(() => {
                    (!m || null == E) && v()
                }, [f]), s.useEffect(() => {
                    m && (p(null == E), I(!1), v())
                }, [m]);
                if (!d.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, i.jsx)(r.default, {
                    importData: C.current,
                    shouldAnimate: !_ && o,
                    className: l,
                    versionKey: g,
                    onComplete: null != E ? () => {
                        null != E && (S(E), p(!0))
                    } : void 0,
                    loop: h
                })
            }
        },
        671484: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            }), l("702976");
            var i, s = l("866227"),
                n = l.n(s),
                a = l("666038"),
                r = l("568734"),
                u = l("797647"),
                d = l("646718");
            let o = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            i = class e extends a.default {
                static createFromServer(t) {
                    return new e({
                        userId: null != t.user ? t.user.id : null,
                        code: t.code,
                        skuId: t.sku_id,
                        applicationId: t.application_id,
                        uses: t.uses,
                        maxUses: t.max_uses,
                        storeListingId: null != t.store_listing ? t.store_listing.id : null,
                        expiresAt: null != t.expires_at ? n(t.expires_at) : null,
                        redeemed: t.redeemed,
                        subscriptionPlanId: null != t.subscription_plan ? t.subscription_plan.id : t.subscription_plan_id,
                        subscriptionPlan: null != t.subscription_plan ? u.default.createFromServer(t.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != t.entitlement_branches ? t.entitlement_branches : null,
                        flags: null != t.flags ? t.flags : 0,
                        giftStyle: t.gift_style,
                        subscriptionTrial: null != t.subscription_trial ? {
                            id: t.subscription_trial.id,
                            interval: t.subscription_trial.interval,
                            intervalCount: t.subscription_trial.interval_count,
                            skuId: t.subscription_trial.sku_id
                        } : null,
                        promotion: null != t.promotion ? {
                            id: t.promotion.id,
                            startDate: t.promotion.start_date,
                            endDate: t.promotion.end_date,
                            inboundHeaderText: t.promotion.inbound_header_text,
                            inboundBodyText: t.promotion.inbound_body_text,
                            inboundHelpCenterLink: t.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && n().isAfter(e)
                }
                get hasMultipleCopies() {
                    return this.maxUses > 1
                }
                get isClaimed() {
                    return this.uses >= this.maxUses
                }
                get remainingUses() {
                    return this.maxUses - this.uses
                }
                get isSubscription() {
                    return null != this.subscriptionPlanId
                }
                get premiumSubscriptionType() {
                    return this.isSubscription && d.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, r.hasFlag)(this.flags, o.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, r.hasFlag)(this.flags, o.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
                }
                get analyticsData() {
                    return {
                        gift_code: this.code,
                        gift_code_max_uses: this.maxUses
                    }
                }
                toString() {
                    return this.code
                }
                constructor(e) {
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.applicationId = e.applicationId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        55411: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return G
                }
            }), l("222007");
            var i = l("917351"),
                s = l.n(i),
                n = l("866227"),
                a = l.n(n),
                r = l("446674"),
                u = l("862337"),
                d = l("913144"),
                o = l("569272"),
                c = l("560208"),
                E = l("671484"),
                _ = l("659632"),
                f = l("49111");
            let S = {},
                C = {},
                h = [],
                p = [],
                m = [],
                I = new Set,
                g = {},
                T = {},
                v = new Set;

            function O(e) {
                let t = E.default.createFromServer(e),
                    l = t.code;
                if (null != C[l]) C[l] = C[l].merge(t);
                else if (C[l] = t, null != t.expiresAt) {
                    let e = new u.Timeout;
                    S[l] = e,
                        function e(t) {
                            let l = C[t];
                            if (null == l || null == l.expiresAt) return;
                            let i = l.expiresAt.valueOf() - a().valueOf();
                            if (i <= 0) delete C[t], delete S[t], F.emitChange();
                            else {
                                let l = S[t];
                                if (null == l) return;
                                l.start(Math.min(2147483647, i), () => e(t))
                            }
                        }(l)
                }
            }

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t && !v.has(e.channel_id)) return !1;
                let l = (0, _.isGiftCodeEmbed)(e) ? (0, _.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, _.findGiftCodes)(e.content);
                return 0 !== l.length && (l.forEach(e => {
                    !h.includes(e) && !m.includes(e) && (D({
                        code: e
                    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(f.NOOP_NULL)))
                }), !1)
            }

            function D(e) {
                let {
                    code: t
                } = e;
                !h.includes(t) && (h = [...h, t])
            }

            function x(e) {
                let {
                    message: t
                } = e;
                return A(t, !0)
            }

            function N(e) {
                let {
                    channelId: t,
                    messages: l
                } = e;
                v.add(t), l.forEach(e => A(e, !0))
            }

            function R(e) {
                let {
                    firstMessages: t
                } = e;
                if (null == t) return !1;
                null == t || t.forEach(e => A(e))
            }
            class b extends r.default.Store {
                get(e) {
                    let t = C[e];
                    return null == t || t.isExpired() ? null : t
                }
                getError(e) {
                    return null != e ? T[e] : null
                }
                getForGifterSKUAndPlan(e, t, l) {
                    return s.values(C).filter(i => i.userId === e && i.skuId === t && (null == l || i.subscriptionPlanId === l) && !i.isExpired())
                }
                getIsResolving(e) {
                    return h.includes(e)
                }
                getIsResolved(e) {
                    return m.includes(e)
                }
                getIsAccepting(e) {
                    return p.includes(e)
                }
                getUserGiftCodesFetchingForSKUAndPlan(e, t) {
                    return I.has((0, _.makeComboId)(e, t))
                }
                getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
                    return g[(0, _.makeComboId)(e, t)]
                }
                getResolvingCodes() {
                    return h
                }
                getResolvedCodes() {
                    return m
                }
                getAcceptingCodes() {
                    return p
                }
            }
            b.displayName = "GiftCodeStore";
            let F = new b(d.default, {
                CONNECTION_OPEN: function() {
                    return v.clear(), !1
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && v.add(t), !1
                },
                GIFT_CODE_RESOLVE: D,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    return h = h.filter(e => e !== t.code), !m.includes(t.code) && (m = [...m, t.code]), O(t)
                },
                GIFT_CODE_RESOLVE_FAILURE: function(e) {
                    let {
                        code: t
                    } = e;
                    h = h.filter(e => e !== t), !m.includes(t) && (m = [...m, t])
                },
                GIFT_CODE_REDEEM: function(e) {
                    let {
                        code: t
                    } = e;
                    !p.includes(t) && (p = [...p, t])
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        code: t
                    } = e;
                    p = p.filter(e => e !== t);
                    let l = C[t];
                    null != l && (C[t] = l.merge({
                        redeemed: !0,
                        uses: l.uses + 1
                    }))
                },
                GIFT_CODE_REDEEM_FAILURE: function(e) {
                    let {
                        code: t,
                        error: l
                    } = e;
                    p = p.filter(e => e !== t);
                    let i = C[t];
                    if (T[t] = l, null != i) switch (l.code) {
                        case f.AbortCodes.UNKNOWN_GIFT_CODE:
                            C[t] = i.set("revoked", !0);
                            break;
                        case f.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                            C[t] = i.set("uses", i.maxUses)
                    }
                },
                GIFT_CODE_REVOKE_SUCCESS: function(e) {
                    let {
                        code: t
                    } = e;
                    delete C[t];
                    let l = S[t];
                    null != l && (l.stop(), delete S[t]), !m.includes(t) && (m = [...m, t])
                },
                GIFT_CODE_CREATE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    O(t)
                },
                GIFT_CODES_FETCH: function(e) {
                    let {
                        skuId: t,
                        subscriptionPlanId: l
                    } = e;
                    I.add((0, _.makeComboId)(t, l))
                },
                GIFT_CODES_FETCH_SUCCESS: function(e) {
                    let {
                        giftCodes: t,
                        skuId: l,
                        subscriptionPlanId: i
                    } = e;
                    t.forEach(O);
                    let s = (0, _.makeComboId)(l, i);
                    g[s] = Date.now(), I.delete(s)
                },
                GIFT_CODES_FETCH_FAILURE: function(e) {
                    let {
                        skuId: t,
                        subscriptionPlanId: l
                    } = e;
                    I.delete((0, _.makeComboId)(t, l))
                },
                MESSAGE_CREATE: x,
                MESSAGE_UPDATE: x,
                LOCAL_MESSAGES_LOADED: N,
                LOAD_MESSAGES_SUCCESS: N,
                LOAD_MESSAGES_AROUND_SUCCESS: N,
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => A(e))
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => A(e))
                },
                SEARCH_FINISH: function(e) {
                    e.messages.forEach(e => {
                        e.forEach(e => A(e))
                    })
                },
                GIFT_CODE_UPDATE: function(e) {
                    let {
                        uses: t,
                        code: l
                    } = e, i = C[l];
                    null != i && (C[l] = i.set("uses", Math.max(i.uses, t)))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e;
                    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e))
                },
                LOAD_THREADS_SUCCESS: R,
                LOAD_ARCHIVED_THREADS_SUCCESS: R,
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    Object.values(t).map(e => {
                        let {
                            first_message: t
                        } = e;
                        return null != t && A(t)
                    })
                }
            });
            var G = F
        },
        849467: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var i = l("37983");
            l("884691");
            var s = l("469563"),
                n = l("696675"),
                a = l("75196"),
                r = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: s = "currentColor",
                        foreground: n,
                        ...r
                    } = e;
                    return (0, i.jsxs)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: n,
                            fill: s
                        }), (0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: n,
                            fill: s
                        })]
                    })
                }, n.MicrophoneIcon, void 0, {
                    size: 24
                })
        }
    }
]);