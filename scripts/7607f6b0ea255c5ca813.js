(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33107"], {
        569272: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("990746"),
                i = l("913144"),
                s = l("523086"),
                r = l("546463"),
                a = l("659632"),
                u = l("823411"),
                d = l("49111"),
                o = l("646718"),
                c = {
                    resolveGiftCode: async function e(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        i.default.dispatch({
                            type: "GIFT_CODE_RESOLVE",
                            code: e
                        });
                        try {
                            let n = await (0, a.resolveGiftCode)(e, t, l);
                            if (null != n.application_id && n.application_id !== o.PREMIUM_SUBSCRIPTION_APPLICATION) {
                                let e = r.default.getGame(n.application_id);
                                if (null == e) try {
                                    await u.default.fetchApplication(n.application_id)
                                } catch (e) {}
                            }
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
                                url: d.Endpoints.USER_GIFT_CODES,
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
                                url: d.Endpoints.USER_GIFT_CODE_CREATE,
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
                                url: d.Endpoints.USER_GIFT_CODE_REVOKE(e),
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
                        s.default.openNativeAppModal(e, d.RPCCommands.GIFT_CODE_BROWSER)
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
            var n = l("990746"),
                i = l("913144"),
                s = l("448993"),
                r = l("745279"),
                a = l("49111");
            let u = Object.freeze({});
            async function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                    {
                        channelId: l = null,
                        paymentSource: d = null
                    } = t;
                i.default.dispatch({
                    type: "GIFT_CODE_REDEEM",
                    code: e
                });
                try {
                    let t = await n.default.post({
                        url: a.Endpoints.GIFT_CODE_REDEEM(e),
                        body: {
                            channel_id: l,
                            payment_source_id: null == d ? void 0 : d.id,
                            gateway_checkout_context: await (0, r.createGatewayCheckoutContext)(d)
                        },
                        oldFormErrors: !0
                    });
                    return i.default.dispatch({
                        type: "GIFT_CODE_REDEEM_SUCCESS",
                        code: e,
                        entitlement: t.body
                    }), {
                        code: e,
                        entitlement: t
                    }
                } catch (l) {
                    let t = new s.BillingError(l);
                    throw i.default.dispatch({
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
            var n = l("920040"),
                i = l("773670"),
                s = l("575482"),
                r = l.n(s),
                a = l("77078"),
                u = l("813006"),
                d = l("766274"),
                o = l("109024"),
                c = l("272339"),
                f = l("849467"),
                E = l("228427"),
                _ = l("713573"),
                h = l("258078"),
                S = l("587974"),
                m = l("782340"),
                C = l("993790");
            let p = e => {
                    var t;
                    let {
                        speaker: l,
                        guildId: i,
                        isEmbed: s
                    } = e, r = new d.default(l.user);
                    return (0, n.jsxs)("div", {
                        className: C.speaker,
                        children: [(0, n.jsx)(a.Avatar, {
                            src: r.getAvatarURL(i, s ? 16 : 24),
                            size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                            "aria-label": "".concat(l.nick, "-avatar"),
                            className: s ? null : C.avatar
                        }), (0, n.jsx)(h.default, {
                            size: s ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
                            color: h.default.Colors.HEADER_SECONDARY,
                            className: C.username,
                            children: null !== (t = l.nick) && void 0 !== t ? t : r.username
                        })]
                    })
                },
                I = e => {
                    let {
                        guild: t,
                        onlineCount: l
                    } = e;
                    if (null == t) return null;
                    let i = new u.default(t),
                        {
                            name: s,
                            description: r
                        } = i;
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(_.default, {
                            muted: !0,
                            uppercase: !0,
                            className: C.alignStart,
                            children: m.default.Messages.STAGE_INVITE_GUILD_HEADER
                        }), (0, n.jsxs)("div", {
                            className: C.guild,
                            children: [(0, n.jsx)(S.default, {
                                mask: S.default.Masks.SQUIRCLE,
                                width: 40,
                                height: 40,
                                children: (0, n.jsx)(o.default, {
                                    guild: i,
                                    size: o.default.Sizes.MEDIUM,
                                    active: !0
                                })
                            }), (0, n.jsxs)("div", {
                                className: C.guildInfo,
                                children: [(0, n.jsx)(a.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: s
                                }), (0, n.jsxs)("div", {
                                    className: C.speaker,
                                    children: [(0, n.jsx)("div", {
                                        className: C.dot
                                    }), null != l && l > 0 ? (0, n.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        children: m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                            membersOnline: l
                                        })
                                    }) : null]
                                })]
                            })]
                        }), null != r && "" !== r && (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            className: C.alignStart,
                            variant: "text-sm/normal",
                            children: r
                        })]
                    })
                };
            var g = e => {
                var t;
                let {
                    stageInstance: l,
                    guild: s,
                    isCard: d = !1,
                    isEmbed: I = !1,
                    onClick: g
                } = e, v = i.useMemo(() => null == s ? null : s instanceof u.default ? s : new u.default(s), [s]);
                if (null == l || null == v) return null;
                let {
                    topic: b,
                    speaker_count: O,
                    participant_count: T
                } = l, D = null !== (t = l.members) && void 0 !== t ? t : [], A = I ? D.slice(0, 3) : D, G = O - A.length;
                return I && (G += D.length - A.length), (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("div", {
                        className: C.flex,
                        children: [(0, n.jsxs)("div", {
                            className: C.flex,
                            children: [(0, n.jsx)(E.default, {
                                height: 24,
                                width: 24,
                                className: C.live
                            }), (0, n.jsx)(a.Heading, {
                                variant: "eyebrow",
                                className: r(C.label, C.live),
                                children: m.default.Messages.STAGE_CHANNEL_LIVE_NOW
                            })]
                        }), (0, n.jsxs)("div", {
                            className: C.background,
                            children: [(0, n.jsx)(c.default, {
                                height: 16,
                                width: 16,
                                className: C.listeners
                            }), (0, n.jsx)(a.Heading, {
                                className: r(C.label, C.listeners),
                                variant: "heading-sm/semibold",
                                children: T
                            })]
                        })]
                    }), I && (0, n.jsxs)("div", {
                        className: r(C.guild, {
                            [C.embed]: I
                        }),
                        children: [(0, n.jsx)(S.default, {
                            mask: S.default.Masks.SQUIRCLE,
                            width: 20,
                            height: 20,
                            children: (0, n.jsx)(o.default, {
                                guild: v,
                                size: o.default.Sizes.MINI,
                                active: !0
                            })
                        }), (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            className: C.label,
                            variant: "text-sm/normal",
                            children: v.name
                        })]
                    }), (0, n.jsx)(_.default, {
                        size: d || I ? _.default.Sizes.SIZE_16 : _.default.Sizes.SIZE_20,
                        className: r(C.header, {
                            [C.embed]: I
                        }),
                        children: b
                    }), (0, n.jsxs)("div", {
                        className: r(C.members, {
                            [C.embed]: I
                        }),
                        children: [A.length > 0 && (0, n.jsxs)("div", {
                            className: C.speakers,
                            children: [A.map(e => (0, n.jsx)(p, {
                                speaker: e,
                                guildId: v.id,
                                isEmbed: I
                            }, e.user.id)), G > 0 ? (0, n.jsxs)("div", {
                                className: C.speaker,
                                children: [(0, n.jsx)("div", {
                                    className: r(C.icon, {
                                        [C.embed]: I
                                    }),
                                    children: (0, n.jsx)(f.default, {
                                        height: I ? 12 : 14,
                                        className: C.listeners
                                    })
                                }), (0, n.jsxs)(h.default, {
                                    size: I ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
                                    color: h.default.Colors.HEADER_SECONDARY,
                                    children: ["+", m.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                        count: G
                                    })]
                                })]
                            }) : null]
                        }), I && (0, n.jsx)(a.Button, {
                            color: a.Button.Colors.GREEN,
                            onClick: g,
                            className: C.joinButton,
                            children: m.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                        })]
                    })]
                })
            }
        },
        397680: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("773670"),
                i = l("498225"),
                s = l("398604");

            function r(e, t) {
                let l = (0, i.useStateFromStoresArray)([s.default], () => {
                        var e, l;
                        return null !== (l = null === (e = s.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== l ? l : []
                    }),
                    r = n.useMemo(() => null == l ? void 0 : l.find(t => t.event_exception_id === e), [l, e]);
                return r
            }
        },
        466148: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("498225"),
                i = l("299039"),
                s = l("398604"),
                r = l("397680"),
                a = l("822516");

            function u(e, t) {
                let l, u;
                let d = (0, n.useStateFromStores)([s.default], () => s.default.getGuildScheduledEvent(e)),
                    o = (0, r.default)(t, e);
                if (null == d) return {};
                if (null == t) return l = new Date(d.scheduled_start_time), {
                    startTime: l,
                    endTime: u = null != d.scheduled_end_time ? new Date(d.scheduled_end_time) : null
                };
                let c = null != d.recurrence_rule ? (0, a.getRRule)(d.recurrence_rule) : null;
                return null == c ? {} : (l = new Date((null == o ? void 0 : o.scheduled_start_time) == null ? i.default.extractTimestamp(t) : o.scheduled_start_time), {
                    startTime: l,
                    endTime: u = (null == o ? void 0 : o.scheduled_end_time) == null ? null : new Date(o.scheduled_end_time)
                })
            }
        },
        210721: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                AnimationState: function() {
                    return i
                },
                getGiftAnimationData: function() {
                    return E
                },
                sendGiftMessage: function() {
                    return _
                }
            });
            var n, i, s = l("161179"),
                r = l.n(s),
                a = l("450911"),
                u = l("819689"),
                d = l("884351"),
                o = l("42203"),
                c = l("659632"),
                f = l("78345");
            (n = i || (i = {})).ACTION = "action", n.LOOP = "loop", n.IDLE = "idle";
            let E = (e, t) => {
                    let n;
                    switch (e) {
                        case f.PremiumGiftStyles.SNOWGLOBE:
                            n = () => l.el("729943").then(l.t.bind(l, "729943", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.BOX:
                            n = () => l.el("5754").then(l.t.bind(l, "5754", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.CUP:
                            n = () => l.el("132631").then(l.t.bind(l, "132631", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case f.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case i.IDLE:
                                    n = () => l.el("376058").then(l.t.bind(l, "376058", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    n = () => l.el("588315").then(l.t.bind(l, "588315", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("31805").then(l.t.bind(l, "31805", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case i.IDLE:
                                    n = () => l.el("298104").then(l.t.bind(l, "298104", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    n = () => l.el("482376").then(l.t.bind(l, "482376", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("278985").then(l.t.bind(l, "278985", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case i.IDLE:
                                    n = () => l.el("748733").then(l.t.bind(l, "748733", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    n = () => l.el("294698").then(l.t.bind(l, "294698", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("726130").then(l.t.bind(l, "726130", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case f.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case i.IDLE:
                                    n = () => l.el("179448").then(l.t.bind(l, "179448", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case i.LOOP:
                                    n = () => l.el("772933").then(l.t.bind(l, "772933", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("461087").then(l.t.bind(l, "461087", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        default:
                            n = () => Promise.resolve("Error: Invalid giftStyle")
                    }
                    return n
                },
                _ = async (e, t) => {
                    if (null == t) throw Error("giftCode must be defined");
                    if (null == e) throw Error("Recipient must be defined");
                    let l = await a.default.openPrivateChannel(e.id).then(e => {
                            let t = o.default.getChannel(e);
                            if (r(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
                            return t
                        }),
                        n = (0, c.getGiftCodeURL)(t);
                    return u.default.sendMessage(l.id, d.default.parse(l, n), void 0, {
                        isGiftLinkSentOnBehalfOfUser: !0
                    })
                }
        },
        65324: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("920040"),
                i = l("773670"),
                s = l("498225"),
                r = l("206230"),
                a = l("491605"),
                u = l("210721"),
                d = l("78345");

            function o(e) {
                let {
                    giftStyle: t,
                    className: l,
                    shouldAnimate: o = !0,
                    defaultAnimationState: c,
                    idleAnimationState: f
                } = e, E = (0, s.useStateFromStores)([r.default], () => r.default.useReducedMotion), [_, h] = i.useState(c), S = i.useRef((0, u.getGiftAnimationData)(t, _)), [m, C] = i.useState(null == f), [p, I] = i.useState(!1), [g, v] = i.useState(-1), b = () => {
                    S.current = (0, u.getGiftAnimationData)(t, _), v(e => e + 1)
                }, O = () => {
                    C(!1), I(!0), v(-1), h(c)
                };
                i.useEffect(() => {
                    null == f && h(c)
                }, [f, c]), i.useEffect(() => {
                    if (null != f && g >= 0) {
                        O();
                        return
                    }
                    b()
                }, [t, f]), i.useEffect(() => {
                    (!p || null == f) && b()
                }, [_]), i.useEffect(() => {
                    p && (C(null == f), I(!1), b())
                }, [p]);
                if (!d.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, n.jsx)(a.default, {
                    importData: S.current,
                    shouldAnimate: !E && o,
                    className: l,
                    versionKey: g,
                    onComplete: null != f ? () => {
                        null != f && (h(f), C(!0))
                    } : void 0,
                    loop: m
                })
            }
        },
        671484: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("377849"),
                i = l.n(n),
                s = l("666038"),
                r = l("568734"),
                a = l("797647"),
                u = l("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            class o extends s.default {
                static createFromServer(e) {
                    return new o({
                        userId: null != e.user ? e.user.id : null,
                        code: e.code,
                        skuId: e.sku_id,
                        uses: e.uses,
                        maxUses: e.max_uses,
                        storeListingId: null != e.store_listing ? e.store_listing.id : null,
                        expiresAt: null != e.expires_at ? i(e.expires_at) : null,
                        redeemed: e.redeemed,
                        subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                        subscriptionPlan: null != e.subscription_plan ? a.default.createFromServer(e.subscription_plan) : null,
                        revoked: !1,
                        entitlementBranches: null != e.entitlement_branches ? e.entitlement_branches : null,
                        flags: null != e.flags ? e.flags : 0,
                        giftStyle: e.gift_style,
                        subscriptionTrial: null != e.subscription_trial ? {
                            id: e.subscription_trial.id,
                            interval: e.subscription_trial.interval,
                            intervalCount: e.subscription_trial.interval_count,
                            skuId: e.subscription_trial.sku_id
                        } : null,
                        promotion: null != e.promotion ? {
                            id: e.promotion.id,
                            startDate: e.promotion.start_date,
                            endDate: e.promotion.end_date,
                            inboundHeaderText: e.promotion.inbound_header_text,
                            inboundBodyText: e.promotion.inbound_body_text,
                            inboundHelpCenterLink: e.promotion.inbound_help_center_link
                        } : null
                    })
                }
                isExpired() {
                    let e = this.expiresAt;
                    return null != e && i().isAfter(e)
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
                    return this.isSubscription && u.PremiumSubscriptionSKUToPremiumType[this.skuId] || null
                }
                get isSelfRedeemable() {
                    return !(0, r.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, r.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
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
                    super(), this.userId = e.userId, this.code = e.code, this.skuId = e.skuId, this.uses = e.uses, this.maxUses = e.maxUses, this.expiresAt = e.expiresAt, this.redeemed = e.redeemed, this.storeListingId = e.storeListingId, this.subscriptionPlanId = e.subscriptionPlanId, this.subscriptionPlan = e.subscriptionPlan, this.revoked = e.revoked, this.entitlementBranches = e.entitlementBranches, this.flags = e.flags, this.subscriptionTrial = e.subscriptionTrial, this.promotion = e.promotion, this.giftStyle = e.giftStyle
                }
            }
        },
        55411: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return F
                }
            });
            var n = l("427964"),
                i = l.n(n),
                s = l("377849"),
                r = l.n(s),
                a = l("498225"),
                u = l("638800"),
                d = l("913144"),
                o = l("569272"),
                c = l("560208"),
                f = l("671484"),
                E = l("659632"),
                _ = l("49111");
            let h = {},
                S = {},
                m = [],
                C = [],
                p = [],
                I = new Set,
                g = {},
                v = {},
                b = new Set;

            function O(e) {
                let t = f.default.createFromServer(e),
                    l = t.code;
                if (null != S[l]) S[l] = S[l].merge(t);
                else if (S[l] = t, null != t.expiresAt) {
                    let e = new u.Timeout;
                    h[l] = e,
                        function e(t) {
                            let l = S[t];
                            if (null == l || null == l.expiresAt) return;
                            let n = l.expiresAt.valueOf() - r().valueOf();
                            if (n <= 0) delete S[t], delete h[t], N.emitChange();
                            else {
                                let l = h[t];
                                if (null == l) return;
                                l.start(Math.min(2147483647, n), () => e(t))
                            }
                        }(l)
                }
            }

            function T(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t && !b.has(e.channel_id)) return !1;
                let l = (0, E.isGiftCodeEmbed)(e) ? (0, E.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, E.findGiftCodes)(e.content);
                return 0 !== l.length && (l.forEach(e => {
                    !m.includes(e) && !p.includes(e) && (D({
                        code: e
                    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(_.NOOP_NULL)))
                }), !1)
            }

            function D(e) {
                let {
                    code: t
                } = e;
                !m.includes(t) && (m = [...m, t])
            }

            function A(e) {
                let {
                    message: t
                } = e;
                return T(t, !0)
            }

            function G(e) {
                let {
                    channelId: t,
                    messages: l
                } = e;
                b.add(t), l.forEach(e => T(e, !0))
            }

            function R(e) {
                let {
                    firstMessages: t
                } = e;
                if (null == t) return !1;
                null == t || t.forEach(e => T(e))
            }
            class x extends a.default.Store {
                get(e) {
                    let t = S[e];
                    return null == t || t.isExpired() ? null : t
                }
                getError(e) {
                    return null != e ? v[e] : null
                }
                getForGifterSKUAndPlan(e, t, l) {
                    return i.values(S).filter(n => n.userId === e && n.skuId === t && (null == l || n.subscriptionPlanId === l) && !n.isExpired())
                }
                getIsResolving(e) {
                    return m.includes(e)
                }
                getIsResolved(e) {
                    return p.includes(e)
                }
                getIsAccepting(e) {
                    return C.includes(e)
                }
                getUserGiftCodesFetchingForSKUAndPlan(e, t) {
                    return I.has((0, E.makeComboId)(e, t))
                }
                getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
                    return g[(0, E.makeComboId)(e, t)]
                }
                getResolvingCodes() {
                    return m
                }
                getResolvedCodes() {
                    return p
                }
                getAcceptingCodes() {
                    return C
                }
            }
            x.displayName = "GiftCodeStore";
            let N = new x(d.default, {
                CONNECTION_OPEN: function() {
                    return b.clear(), !1
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && b.add(t), !1
                },
                GIFT_CODE_RESOLVE: D,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    return m = m.filter(e => e !== t.code), !p.includes(t.code) && (p = [...p, t.code]), O(t)
                },
                GIFT_CODE_RESOLVE_FAILURE: function(e) {
                    let {
                        code: t
                    } = e;
                    m = m.filter(e => e !== t), !p.includes(t) && (p = [...p, t])
                },
                GIFT_CODE_REDEEM: function(e) {
                    let {
                        code: t
                    } = e;
                    !C.includes(t) && (C = [...C, t])
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        code: t
                    } = e;
                    C = C.filter(e => e !== t);
                    let l = S[t];
                    null != l && (S[t] = l.merge({
                        redeemed: !0,
                        uses: l.uses + 1
                    }))
                },
                GIFT_CODE_REDEEM_FAILURE: function(e) {
                    let {
                        code: t,
                        error: l
                    } = e;
                    C = C.filter(e => e !== t);
                    let n = S[t];
                    if (v[t] = l, null != n) switch (l.code) {
                        case _.AbortCodes.UNKNOWN_GIFT_CODE:
                            S[t] = n.set("revoked", !0);
                            break;
                        case _.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                            S[t] = n.set("uses", n.maxUses)
                    }
                },
                GIFT_CODE_REVOKE_SUCCESS: function(e) {
                    let {
                        code: t
                    } = e;
                    delete S[t];
                    let l = h[t];
                    null != l && (l.stop(), delete h[t]), !p.includes(t) && (p = [...p, t])
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
                    I.add((0, E.makeComboId)(t, l))
                },
                GIFT_CODES_FETCH_SUCCESS: function(e) {
                    let {
                        giftCodes: t,
                        skuId: l,
                        subscriptionPlanId: n
                    } = e;
                    t.forEach(O);
                    let i = (0, E.makeComboId)(l, n);
                    g[i] = Date.now(), I.delete(i)
                },
                GIFT_CODES_FETCH_FAILURE: function(e) {
                    let {
                        skuId: t,
                        subscriptionPlanId: l
                    } = e;
                    I.delete((0, E.makeComboId)(t, l))
                },
                MESSAGE_CREATE: A,
                MESSAGE_UPDATE: A,
                LOCAL_MESSAGES_LOADED: G,
                LOAD_MESSAGES_SUCCESS: G,
                LOAD_MESSAGES_AROUND_SUCCESS: G,
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => T(e))
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => T(e))
                },
                SEARCH_FINISH: function(e) {
                    e.messages.forEach(e => {
                        e.forEach(e => T(e))
                    })
                },
                GIFT_CODE_UPDATE: function(e) {
                    let {
                        uses: t,
                        code: l
                    } = e, n = S[l];
                    null != n && (S[l] = n.set("uses", Math.max(n.uses, t)))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e;
                    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => T(e))
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
                        return null != t && T(t)
                    })
                }
            });
            var F = N
        },
        849467: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("920040");
            l("773670");
            var i = l("469563"),
                s = l("696675"),
                r = l("75196"),
                a = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: l = 24,
                        color: i = "currentColor",
                        foreground: s,
                        ...a
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, r.default)(a),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: s,
                            fill: i
                        }), (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: s,
                            fill: i
                        })]
                    })
                }, s.MicrophoneIcon)
        }
    }
]);