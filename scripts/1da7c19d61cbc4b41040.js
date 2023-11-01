(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["98599"], {
        569272: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("872717"),
                s = l("913144"),
                a = l("523086"),
                i = l("546463"),
                r = l("659632"),
                u = l("823411"),
                d = l("49111"),
                o = l("646718"),
                c = {
                    resolveGiftCode: async function e(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                        s.default.dispatch({
                            type: "GIFT_CODE_RESOLVE",
                            code: e
                        });
                        try {
                            let n = await (0, r.resolveGiftCode)(e, t, l);
                            if (null != n.application_id && n.application_id !== o.PREMIUM_SUBSCRIPTION_APPLICATION) {
                                let e = i.default.getGame(n.application_id);
                                if (null == e) try {
                                    await u.default.fetchApplication(n.application_id)
                                } catch (e) {}
                            }
                            return s.default.dispatch({
                                type: "GIFT_CODE_RESOLVE_SUCCESS",
                                giftCode: n
                            }), {
                                giftCode: n
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
                            let l = await n.default.get({
                                url: d.Endpoints.USER_GIFT_CODES,
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
                            let a = await n.default.post({
                                url: d.Endpoints.USER_GIFT_CODE_CREATE,
                                body: {
                                    sku_id: e,
                                    subscription_plan_id: t,
                                    gift_style: l
                                },
                                oldFormErrors: !0
                            });
                            return s.default.dispatch({
                                type: "GIFT_CODE_CREATE_SUCCESS",
                                giftCode: a.body
                            }), a.body
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
                            await n.default.delete({
                                url: d.Endpoints.USER_GIFT_CODE_REVOKE(e),
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
                        a.default.openNativeAppModal(e, d.RPCCommands.GIFT_CODE_BROWSER)
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
            var n = l("872717"),
                s = l("913144"),
                a = l("448993"),
                i = l("745279"),
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
                    let t = await n.default.post({
                        url: r.Endpoints.GIFT_CODE_REDEEM(e),
                        body: {
                            channel_id: l,
                            payment_source_id: null == d ? void 0 : d.id,
                            gateway_checkout_context: await (0, i.createGatewayCheckoutContext)(d)
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
                    let t = new a.BillingError(l);
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
                    return p
                },
                default: function() {
                    return v
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("77078"),
                u = l("813006"),
                d = l("766274"),
                o = l("109024"),
                c = l("272339"),
                E = l("849467"),
                f = l("228427"),
                _ = l("713573"),
                h = l("258078"),
                S = l("587974"),
                m = l("782340"),
                C = l("482133");
            let T = e => {
                    var t;
                    let {
                        speaker: l,
                        guildId: s,
                        isEmbed: a
                    } = e, i = new d.default(l.user);
                    return (0, n.jsxs)("div", {
                        className: C.speaker,
                        children: [(0, n.jsx)(r.Avatar, {
                            src: i.getAvatarURL(s, a ? 16 : 24),
                            size: a ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                            "aria-label": "".concat(l.nick, "-avatar"),
                            className: a ? null : C.avatar
                        }), (0, n.jsx)(h.default, {
                            size: a ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
                            color: h.default.Colors.HEADER_SECONDARY,
                            className: C.username,
                            children: null !== (t = l.nick) && void 0 !== t ? t : i.username
                        })]
                    })
                },
                p = e => {
                    let {
                        guild: t,
                        onlineCount: l
                    } = e;
                    if (null == t) return null;
                    let s = new u.default(t),
                        {
                            name: a,
                            description: i
                        } = s;
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
                                    guild: s,
                                    size: o.default.Sizes.MEDIUM,
                                    active: !0
                                })
                            }), (0, n.jsxs)("div", {
                                className: C.guildInfo,
                                children: [(0, n.jsx)(r.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: a
                                }), (0, n.jsxs)("div", {
                                    className: C.speaker,
                                    children: [(0, n.jsx)("div", {
                                        className: C.dot
                                    }), null != l && l > 0 ? (0, n.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: m.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                            membersOnline: l
                                        })
                                    }) : null]
                                })]
                            })]
                        }), null != i && "" !== i && (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            className: C.alignStart,
                            variant: "text-sm/normal",
                            children: i
                        })]
                    })
                };
            var v = e => {
                var t;
                let {
                    stageInstance: l,
                    guild: a,
                    isCard: d = !1,
                    isEmbed: p = !1,
                    onClick: v
                } = e, g = s.useMemo(() => null == a ? null : a instanceof u.default ? a : new u.default(a), [a]);
                if (null == l || null == g) return null;
                let {
                    topic: I,
                    speaker_count: D,
                    participant_count: N
                } = l, A = null !== (t = l.members) && void 0 !== t ? t : [], x = p ? A.slice(0, 3) : A, O = D - x.length;
                return p && (O += A.length - x.length), (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("div", {
                        className: C.flex,
                        children: [(0, n.jsxs)("div", {
                            className: C.flex,
                            children: [(0, n.jsx)(f.default, {
                                height: 24,
                                width: 24,
                                className: C.live
                            }), (0, n.jsx)(r.Heading, {
                                variant: "eyebrow",
                                className: i(C.label, C.live),
                                children: m.default.Messages.STAGE_CHANNEL_LIVE_NOW
                            })]
                        }), (0, n.jsxs)("div", {
                            className: C.background,
                            children: [(0, n.jsx)(c.default, {
                                height: 16,
                                width: 16,
                                className: C.listeners
                            }), (0, n.jsx)(r.Heading, {
                                className: i(C.label, C.listeners),
                                variant: "heading-sm/semibold",
                                children: N
                            })]
                        })]
                    }), p && (0, n.jsxs)("div", {
                        className: i(C.guild, {
                            [C.embed]: p
                        }),
                        children: [(0, n.jsx)(S.default, {
                            mask: S.default.Masks.SQUIRCLE,
                            width: 20,
                            height: 20,
                            children: (0, n.jsx)(o.default, {
                                guild: g,
                                size: o.default.Sizes.MINI,
                                active: !0
                            })
                        }), (0, n.jsx)(r.Text, {
                            color: "header-secondary",
                            className: C.label,
                            variant: "text-sm/normal",
                            children: g.name
                        })]
                    }), (0, n.jsx)(_.default, {
                        size: d || p ? _.default.Sizes.SIZE_16 : _.default.Sizes.SIZE_20,
                        className: i(C.header, {
                            [C.embed]: p
                        }),
                        children: I
                    }), (0, n.jsxs)("div", {
                        className: i(C.members, {
                            [C.embed]: p
                        }),
                        children: [x.length > 0 && (0, n.jsxs)("div", {
                            className: C.speakers,
                            children: [x.map(e => (0, n.jsx)(T, {
                                speaker: e,
                                guildId: g.id,
                                isEmbed: p
                            }, e.user.id)), O > 0 ? (0, n.jsxs)("div", {
                                className: C.speaker,
                                children: [(0, n.jsx)("div", {
                                    className: i(C.icon, {
                                        [C.embed]: p
                                    }),
                                    children: (0, n.jsx)(E.default, {
                                        height: p ? 12 : 14,
                                        className: C.listeners
                                    })
                                }), (0, n.jsxs)(h.default, {
                                    size: p ? h.default.Sizes.SIZE_12 : h.default.Sizes.SIZE_14,
                                    color: h.default.Colors.HEADER_SECONDARY,
                                    children: ["+", m.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                        count: O
                                    })]
                                })]
                            }) : null]
                        }), p && (0, n.jsx)(r.Button, {
                            color: r.Button.Colors.GREEN,
                            onClick: v,
                            className: C.joinButton,
                            children: m.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                        })]
                    })]
                })
            }
        },
        1339: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                guildEventDetailsParser: function() {
                    return u
                }
            });
            var n = l("367376"),
                s = l("180161"),
                a = l("47677");
            let i = {
                    ...n.default.guildEventRules.link,
                    react: (0, a.default)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                },
                r = {
                    ...n.default.guildEventRules.channelMention,
                    react: (0, s.default)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                },
                u = n.default.reactParserFor({
                    ...n.default.guildEventRules,
                    link: i,
                    channelMention: r
                })
        },
        397680: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var n = l("884691"),
                s = l("446674"),
                a = l("398604");

            function i(e, t) {
                let l = (0, s.useStateFromStoresArray)([a.default], () => {
                        var e, l;
                        return null !== (l = null === (e = a.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== l ? l : []
                    }),
                    i = n.useMemo(() => null == l ? void 0 : l.find(t => t.event_exception_id === e), [l, e]);
                return i
            }
        },
        466148: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("446674"),
                s = l("299039"),
                a = l("398604"),
                i = l("397680"),
                r = l("822516");

            function u(e, t) {
                let l, u;
                let d = (0, n.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e)),
                    o = (0, i.default)(t, e);
                if (null == d) return {};
                if (null == t) return l = new Date(d.scheduled_start_time), {
                    startTime: l,
                    endTime: u = null != d.scheduled_end_time ? new Date(d.scheduled_end_time) : null
                };
                let c = null != d.recurrence_rule ? (0, r.getRRule)(d.recurrence_rule) : null;
                return null == c ? {} : (l = new Date((null == o ? void 0 : o.scheduled_start_time) == null ? s.default.extractTimestamp(t) : o.scheduled_start_time), {
                    startTime: l,
                    endTime: u = (null == o ? void 0 : o.scheduled_end_time) == null ? null : new Date(o.scheduled_end_time)
                })
            }
        },
        909151: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return o
                }
            });
            var n = l("37983"),
                s = l("884691"),
                a = l("414456"),
                i = l.n(a),
                r = l("1339"),
                u = l("139225"),
                d = l("632215");

            function o(e) {
                let {
                    description: t,
                    className: l,
                    guildId: a,
                    truncate: o = !0
                } = e, c = s.useMemo(() => (0, r.guildEventDetailsParser)(t, !0, {
                    guildId: a
                }), [t, a]);
                return (0, n.jsx)("div", {
                    className: i(u.descriptionText, l, d.markup, {
                        [u.truncate]: o
                    }),
                    children: c
                })
            }
        },
        255050: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("900702");

            function r(e) {
                let {
                    source: t,
                    className: l
                } = e;
                return null == t ? null : (0, n.jsx)("div", {
                    className: a(i.container, l),
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                })
            }
        },
        400271: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildEventStatus: function() {
                    return v
                },
                GuildEventDetails: function() {
                    return g
                },
                default: function() {
                    return I
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                a = l.n(s),
                i = l("446674"),
                r = l("77078"),
                u = l("26989"),
                d = l("155207"),
                o = l("158998"),
                c = l("398604"),
                E = l("397680"),
                f = l("466148"),
                _ = l("189443"),
                h = l("909151"),
                S = l("255050"),
                m = l("393745"),
                C = l("745049"),
                T = l("782340"),
                p = l("629400");

            function v(e) {
                let {
                    className: t,
                    creator: l,
                    guildId: s,
                    isNew: h,
                    isHub: S = !1,
                    guildEventId: v,
                    eventPreview: g,
                    recurrenceId: I
                } = e, D = (0, i.useStateFromStores)([c.default], () => c.default.getGuildScheduledEvent(v)), N = null != D ? D : g, A = (0, i.useStateFromStores)([u.default], () => u.default.getNick(s, null == l ? void 0 : l.id), [s, l]), {
                    startTime: x
                } = (0, f.default)(v, I), O = (0, E.default)(I, v), R = null != I && null != x, b = null != O ? O.is_canceled ? C.GuildScheduledEventStatus.CANCELED : C.GuildScheduledEventStatus.SCHEDULED : null;
                if (null == N) return null;
                let {
                    entity_type: G,
                    status: L,
                    scheduled_start_time: U,
                    user_count: F = 1,
                    recurrence_rule: y
                } = N;
                return (0, n.jsxs)("div", {
                    className: a(p.statusContainer, t),
                    children: [(0, n.jsx)(m.GuildEventTimeStatus, {
                        startTime: R ? x.toISOString() : U,
                        status: null != b ? b : L,
                        eventType: G,
                        isNew: h,
                        recurrenceRule: (0, _.recurrenceRuleFromServer)(y)
                    }), (0, n.jsx)("div", {
                        className: p.spacer
                    }), !S && null != l && (0, n.jsx)(r.Tooltip, {
                        text: T.default.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != A ? A : o.default.getName(l)
                        }),
                        children: e => (0, n.jsx)(r.Avatar, {
                            ...e,
                            src: l.getAvatarURL(s, 20),
                            size: r.AvatarSizes.SIZE_20,
                            "aria-label": null != A ? A : l.username,
                            className: p.creator
                        })
                    }), null != F && (0, n.jsx)(r.Tooltip, {
                        text: T.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: F
                        }),
                        children: e => (0, n.jsxs)("div", {
                            className: p.rsvpCount,
                            ...e,
                            children: [(0, n.jsx)(d.default, {
                                width: 12,
                                height: 12,
                                className: p.rsvpIcon
                            }), (0, n.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: F
                            })]
                        })
                    })]
                })
            }

            function g(e) {
                let {
                    headerVariant: t = "heading-lg/medium",
                    descriptionClassName: l,
                    name: s,
                    description: i,
                    truncate: u,
                    guildId: d,
                    imageSource: o
                } = e;
                return (0, n.jsxs)("div", {
                    className: a({
                        [p.withThumbnail]: null != o
                    }),
                    children: [(0, n.jsxs)("div", {
                        className: a({
                            [p.descriptionWithThumbnail]: null != o
                        }),
                        children: [(0, n.jsx)(r.Heading, {
                            variant: t,
                            selectable: !0,
                            className: p.eventName,
                            children: s
                        }), null != i && (0, n.jsx)(h.default, {
                            description: i,
                            className: a(l, p.description),
                            truncate: u,
                            guildId: d
                        })]
                    }), null != o && (0, n.jsx)("div", {
                        className: p.thumbnailContainer,
                        children: (0, n.jsx)(S.default, {
                            source: o,
                            className: p.thumbnail
                        })
                    })]
                })
            }

            function I(e) {
                let {
                    headerVariant: t,
                    descriptionClassName: l,
                    creator: s,
                    name: a,
                    description: i,
                    imageSource: r,
                    isHub: u = !1,
                    truncate: d,
                    guildId: o,
                    isNew: c,
                    guildEventId: E,
                    eventPreview: f,
                    recurrenceId: _
                } = e;
                return (0, n.jsxs)("div", {
                    className: p.container,
                    children: [(0, n.jsx)(v, {
                        className: p.eventInfoStatusContainer,
                        creator: s,
                        guildId: o,
                        isHub: u,
                        isNew: c,
                        guildEventId: E,
                        eventPreview: f,
                        recurrenceId: _
                    }), (0, n.jsx)(g, {
                        name: a,
                        description: i,
                        headerVariant: t,
                        descriptionClassName: l,
                        truncate: d,
                        guildId: o,
                        imageSource: r
                    })]
                })
            }
        },
        393745: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildEventTimeStatus: function() {
                    return N
                }
            });
            var n, s, a = l("37983"),
                i = l("884691"),
                r = l("414456"),
                u = l.n(r),
                d = l("866227"),
                o = l.n(d),
                c = l("669491"),
                E = l("77078"),
                f = l("449918"),
                _ = l("943232"),
                h = l("93393"),
                S = l("956089"),
                m = l("822516"),
                C = l("757767"),
                T = l("745049"),
                p = l("843455"),
                v = l("782340"),
                g = l("675644");
            (n = s || (s = {}))[n.SCHEDULED = 0] = "SCHEDULED", n[n.STARTING_SOON = 1] = "STARTING_SOON", n[n.READY = 2] = "READY", n[n.STARTED = 3] = "STARTED", n[n.ENDED = 4] = "ENDED", n[n.CANCELED = 5] = "CANCELED";

            function I() {
                return (0, a.jsx)(S.TextBadge, {
                    className: g.newBadge,
                    color: c.default.unsafe_rawColors.BRAND_260.css,
                    text: (0, a.jsx)(E.Text, {
                        className: g.newBadgeText,
                        variant: "text-xs/bold",
                        children: v.default.Messages.NEW
                    })
                })
            }

            function D(e) {
                let {
                    children: t,
                    className: l,
                    tooltipText: n
                } = e;
                return (0, a.jsx)("div", {
                    className: u(g.eventStatusContainer, l),
                    children: (0, a.jsx)(E.Tooltip, {
                        position: "right",
                        text: n,
                        shouldShow: null != n,
                        children: e => (0, a.jsx)("div", {
                            ...e,
                            className: u(g.eventStatusContainer, l),
                            children: t
                        })
                    })
                })
            }

            function N(e) {
                let {
                    startTime: t,
                    status: l,
                    eventType: n,
                    className: r,
                    endTime: d,
                    liveText: c,
                    textVariant: S = "text-sm/semibold",
                    isNew: N,
                    recurrenceRule: A
                } = e, x = (0, f.useThemedColorValue)(p.ThemeColor.TEXT_BRAND), O = (0, f.useThemedColorValue)(p.ThemeColor.TEXT_POSITIVE), R = (0, f.useThemedColorValue)(p.ThemeColor.TEXT_DANGER);
                null == c && (c = n === T.GuildScheduledEventEntityTypes.EXTERNAL ? v.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : v.default.Messages.STAGE_CHANNEL_LIVE_NOW);
                let [{
                    startDateTimeString: b,
                    endDateTimeString: G,
                    currentOrPastEvent: L,
                    upcomingEvent: U,
                    diffMinutes: F
                }, y] = i.useState((0, m.getEventTimeData)(t, d));
                i.useEffect(() => {
                    y((0, m.getEventTimeData)(t, d));
                    let e = setInterval(() => y((0, m.getEventTimeData)(t, d)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [t, d]);
                let j = b;
                null != G && "" !== G && (j = v.default.Messages.START_DATE_TO_END_DATE.format({
                    start: b,
                    end: G
                }));
                let k = i.useMemo(() => l === T.GuildScheduledEventStatus.CANCELED ? s.CANCELED : l === T.GuildScheduledEventStatus.ACTIVE ? s.STARTED : T.GuildScheduledEventStatusDone.has(l) ? s.ENDED : L ? s.READY : U ? s.STARTING_SOON : s.SCHEDULED, [l, L, U]),
                    M = function(e, t, l, n, i) {
                        switch (e) {
                            case s.STARTING_SOON:
                                return i > 0 ? v.default.Messages.STARTING_IN_MINUTES.format({
                                    minutes: i
                                }) : v.default.Messages.STARTING_SOON;
                            case s.READY:
                                return v.default.Messages.STARTING_SOON;
                            case s.STARTED:
                                return null != n && "" !== n ? v.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                                    start: l,
                                    startHook: e => (0, a.jsx)(E.Text, {
                                        color: "text-positive",
                                        variant: "text-sm/semibold",
                                        className: g.liveEventEndTime,
                                        children: e
                                    }),
                                    end: n
                                }) : null != l ? l : "";
                            default:
                                return t
                        }
                    }(k, j, c, G, F),
                    {
                        Icon: P,
                        iconColor: w,
                        textColor: H,
                        tooltipText: V
                    } = i.useMemo(() => (function(e) {
                        let t, {
                                timeStatus: l,
                                textBrand: n,
                                textPositive: a,
                                textDanger: i,
                                endDateTimeString: r,
                                startDateTimeString: u
                            } = e,
                            d = _.default,
                            o = n,
                            c = "header-secondary";
                        switch (l) {
                            case s.STARTED:
                                o = a, c = null != r ? void 0 : "text-positive";
                                break;
                            case s.ENDED:
                                d = h.default;
                                break;
                            case s.READY:
                            case s.STARTING_SOON:
                                c = "text-brand", t = u;
                                break;
                            case s.CANCELED:
                                o = i
                        }
                        return {
                            Icon: d,
                            iconColor: o.hex,
                            textColor: c,
                            tooltipText: t
                        }
                    })({
                        timeStatus: k,
                        textBrand: x,
                        textPositive: O,
                        textDanger: R,
                        endDateTimeString: G,
                        startDateTimeString: b
                    }), [k, x, O, R, G, b]),
                    B = null;
                if (null != A) {
                    let e = (0, m.getRRule)(A);
                    B = v.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                        recurrenceRule: e.toText()
                    });
                    let l = o(t),
                        n = (0, m.recurrenceRuleToOption)(l, A);
                    B = function(e, t) {
                        let l = t.toDate(),
                            n = l.toLocaleString(v.default.getLocale(), {
                                weekday: "long"
                            });
                        switch (e) {
                            case C.RecurrenceOptions.WEEKLY:
                                return v.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                                    weekday: n
                                });
                            case C.RecurrenceOptions.YEARLY:
                                return v.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                                    date: l.toLocaleString(v.default.getLocale(), {
                                        month: "short",
                                        day: "2-digit"
                                    })
                                });
                            case C.RecurrenceOptions.WEEKDAY_ONLY:
                                return v.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                            default:
                                return null
                        }
                    }(n, l)
                }
                return (0, a.jsxs)(D, {
                    className: u(r, {
                        [g.isRecurring]: null != B
                    }),
                    tooltipText: V,
                    children: [N ? (0, a.jsx)(I, {}) : (0, a.jsx)(P, {
                        color: w,
                        width: 20,
                        height: 20
                    }), (0, a.jsxs)("div", {
                        className: g.eventStatusLabel,
                        children: [(0, a.jsx)(E.Text, {
                            color: H,
                            variant: S,
                            children: M
                        }), null != B && (0, a.jsx)(E.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: B
                        })]
                    })]
                })
            }
        },
        210721: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                AnimationState: function() {
                    return s
                },
                getGiftAnimationData: function() {
                    return f
                },
                sendGiftMessage: function() {
                    return _
                }
            });
            var n, s, a = l("627445"),
                i = l.n(a),
                r = l("450911"),
                u = l("819689"),
                d = l("884351"),
                o = l("42203"),
                c = l("659632"),
                E = l("78345");
            (n = s || (s = {})).ACTION = "action", n.LOOP = "loop", n.IDLE = "idle";
            let f = (e, t) => {
                    let n;
                    switch (e) {
                        case E.PremiumGiftStyles.SNOWGLOBE:
                            n = () => l.el("452661").then(l.t.bind(l, "452661", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case E.PremiumGiftStyles.BOX:
                            n = () => l.el("726871").then(l.t.bind(l, "726871", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case E.PremiumGiftStyles.CUP:
                            n = () => l.el("544929").then(l.t.bind(l, "544929", 19)).then(e => {
                                let {
                                    default: t
                                } = e;
                                return t
                            });
                            break;
                        case E.PremiumGiftStyles.STANDARD_BOX:
                            switch (t) {
                                case s.IDLE:
                                    n = () => l.el("973372").then(l.t.bind(l, "973372", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case s.LOOP:
                                    n = () => l.el("353540").then(l.t.bind(l, "353540", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("303473").then(l.t.bind(l, "303473", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case E.PremiumGiftStyles.CAKE:
                            switch (t) {
                                case s.IDLE:
                                    n = () => l.el("127891").then(l.t.bind(l, "127891", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case s.LOOP:
                                    n = () => l.el("953820").then(l.t.bind(l, "953820", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("311972").then(l.t.bind(l, "311972", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case E.PremiumGiftStyles.CHEST:
                            switch (t) {
                                case s.IDLE:
                                    n = () => l.el("269055").then(l.t.bind(l, "269055", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case s.LOOP:
                                    n = () => l.el("120467").then(l.t.bind(l, "120467", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("451680").then(l.t.bind(l, "451680", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    })
                            }
                            break;
                        case E.PremiumGiftStyles.COFFEE:
                            switch (t) {
                                case s.IDLE:
                                    n = () => l.el("863089").then(l.t.bind(l, "863089", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                case s.LOOP:
                                    n = () => l.el("949233").then(l.t.bind(l, "949233", 19)).then(e => {
                                        let {
                                            default: t
                                        } = e;
                                        return t
                                    });
                                    break;
                                default:
                                    n = () => l.el("361896").then(l.t.bind(l, "361896", 19)).then(e => {
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
                    let l = await r.default.openPrivateChannel(e.id).then(e => {
                            let t = o.default.getChannel(e);
                            if (i(null != t, "PrivateChannel is null"), null == t) throw Error("Channel must be defined");
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
            var n = l("37983"),
                s = l("884691"),
                a = l("446674"),
                i = l("206230"),
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
                } = e, f = (0, a.useStateFromStores)([i.default], () => i.default.useReducedMotion), [_, h] = s.useState(c), S = s.useRef((0, u.getGiftAnimationData)(t, _)), [m, C] = s.useState(null == E), [T, p] = s.useState(!1), [v, g] = s.useState(-1), I = () => {
                    S.current = (0, u.getGiftAnimationData)(t, _), g(e => e + 1)
                }, D = () => {
                    C(!1), p(!0), g(-1), h(c)
                };
                s.useEffect(() => {
                    null == E && h(c)
                }, [E, c]), s.useEffect(() => {
                    if (null != E && v >= 0) {
                        D();
                        return
                    }
                    I()
                }, [t, E]), s.useEffect(() => {
                    (!T || null == E) && I()
                }, [_]), s.useEffect(() => {
                    T && (C(null == E), p(!1), I())
                }, [T]);
                if (!d.PremiumGiftStyles.hasOwnProperty(t)) throw Error("Unexpected giftStyle ".concat(t));
                return (0, n.jsx)(r.default, {
                    importData: S.current,
                    shouldAnimate: !f && o,
                    className: l,
                    versionKey: v,
                    onComplete: null != E ? () => {
                        null != E && (h(E), C(!0))
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
            var n = l("866227"),
                s = l.n(n),
                a = l("666038"),
                i = l("568734"),
                r = l("797647"),
                u = l("646718");
            let d = Object.freeze({
                PAYMENT_SOURCE_REQUIRED: 1,
                EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED: 2,
                NOT_SELF_REDEEMABLE: 4
            });
            class o extends a.default {
                static createFromServer(e) {
                    return new o({
                        userId: null != e.user ? e.user.id : null,
                        code: e.code,
                        skuId: e.sku_id,
                        uses: e.uses,
                        maxUses: e.max_uses,
                        storeListingId: null != e.store_listing ? e.store_listing.id : null,
                        expiresAt: null != e.expires_at ? s(e.expires_at) : null,
                        redeemed: e.redeemed,
                        subscriptionPlanId: null != e.subscription_plan ? e.subscription_plan.id : e.subscription_plan_id,
                        subscriptionPlan: null != e.subscription_plan ? r.default.createFromServer(e.subscription_plan) : null,
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
                    return null != e && s().isAfter(e)
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
                    return !(0, i.hasFlag)(this.flags, d.NOT_SELF_REDEEMABLE)
                }
                get isExistingPremiumSubscriptionDisallowed() {
                    return (0, i.hasFlag)(this.flags, d.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED)
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
                    return L
                }
            });
            var n = l("917351"),
                s = l.n(n),
                a = l("866227"),
                i = l.n(a),
                r = l("446674"),
                u = l("862337"),
                d = l("913144"),
                o = l("569272"),
                c = l("560208"),
                E = l("671484"),
                f = l("659632"),
                _ = l("49111");
            let h = {},
                S = {},
                m = [],
                C = [],
                T = [],
                p = new Set,
                v = {},
                g = {},
                I = new Set;

            function D(e) {
                let t = E.default.createFromServer(e),
                    l = t.code;
                if (null != S[l]) S[l] = S[l].merge(t);
                else if (S[l] = t, null != t.expiresAt) {
                    let e = new u.Timeout;
                    h[l] = e,
                        function e(t) {
                            let l = S[t];
                            if (null == l || null == l.expiresAt) return;
                            let n = l.expiresAt.valueOf() - i().valueOf();
                            if (n <= 0) delete S[t], delete h[t], G.emitChange();
                            else {
                                let l = h[t];
                                if (null == l) return;
                                l.start(Math.min(2147483647, n), () => e(t))
                            }
                        }(l)
                }
            }

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t && !I.has(e.channel_id)) return !1;
                let l = (0, f.isGiftCodeEmbed)(e) ? (0, f.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, f.findGiftCodes)(e.content);
                return 0 !== l.length && (l.forEach(e => {
                    !m.includes(e) && !T.includes(e) && (A({
                        code: e
                    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(_.NOOP_NULL)))
                }), !1)
            }

            function A(e) {
                let {
                    code: t
                } = e;
                !m.includes(t) && (m = [...m, t])
            }

            function x(e) {
                let {
                    message: t
                } = e;
                return N(t, !0)
            }

            function O(e) {
                let {
                    channelId: t,
                    messages: l
                } = e;
                I.add(t), l.forEach(e => N(e, !0))
            }

            function R(e) {
                let {
                    firstMessages: t
                } = e;
                if (null == t) return !1;
                null == t || t.forEach(e => N(e))
            }
            class b extends r.default.Store {
                get(e) {
                    let t = S[e];
                    return null == t || t.isExpired() ? null : t
                }
                getError(e) {
                    return null != e ? g[e] : null
                }
                getForGifterSKUAndPlan(e, t, l) {
                    return s.values(S).filter(n => n.userId === e && n.skuId === t && (null == l || n.subscriptionPlanId === l) && !n.isExpired())
                }
                getIsResolving(e) {
                    return m.includes(e)
                }
                getIsResolved(e) {
                    return T.includes(e)
                }
                getIsAccepting(e) {
                    return C.includes(e)
                }
                getUserGiftCodesFetchingForSKUAndPlan(e, t) {
                    return p.has((0, f.makeComboId)(e, t))
                }
                getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
                    return v[(0, f.makeComboId)(e, t)]
                }
                getResolvingCodes() {
                    return m
                }
                getResolvedCodes() {
                    return T
                }
                getAcceptingCodes() {
                    return C
                }
            }
            b.displayName = "GiftCodeStore";
            let G = new b(d.default, {
                CONNECTION_OPEN: function() {
                    return I.clear(), !1
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && I.add(t), !1
                },
                GIFT_CODE_RESOLVE: A,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    return m = m.filter(e => e !== t.code), !T.includes(t.code) && (T = [...T, t.code]), D(t)
                },
                GIFT_CODE_RESOLVE_FAILURE: function(e) {
                    let {
                        code: t
                    } = e;
                    m = m.filter(e => e !== t), !T.includes(t) && (T = [...T, t])
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
                    if (g[t] = l, null != n) switch (l.code) {
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
                    null != l && (l.stop(), delete h[t]), !T.includes(t) && (T = [...T, t])
                },
                GIFT_CODE_CREATE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    D(t)
                },
                GIFT_CODES_FETCH: function(e) {
                    let {
                        skuId: t,
                        subscriptionPlanId: l
                    } = e;
                    p.add((0, f.makeComboId)(t, l))
                },
                GIFT_CODES_FETCH_SUCCESS: function(e) {
                    let {
                        giftCodes: t,
                        skuId: l,
                        subscriptionPlanId: n
                    } = e;
                    t.forEach(D);
                    let s = (0, f.makeComboId)(l, n);
                    v[s] = Date.now(), p.delete(s)
                },
                GIFT_CODES_FETCH_FAILURE: function(e) {
                    let {
                        skuId: t,
                        subscriptionPlanId: l
                    } = e;
                    p.delete((0, f.makeComboId)(t, l))
                },
                MESSAGE_CREATE: x,
                MESSAGE_UPDATE: x,
                LOCAL_MESSAGES_LOADED: O,
                LOAD_MESSAGES_SUCCESS: O,
                LOAD_MESSAGES_AROUND_SUCCESS: O,
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => N(e))
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => N(e))
                },
                SEARCH_FINISH: function(e) {
                    e.messages.forEach(e => {
                        e.forEach(e => N(e))
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
                    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => N(e))
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
                        return null != t && N(t)
                    })
                }
            });
            var L = G
        }
    }
]);