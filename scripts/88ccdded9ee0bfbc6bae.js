(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37886"], {
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return l
                }
            });
            var u = n("884691"),
                i = n("599110");
            let l = () => u.useContext(i.AnalyticsContext)
        },
        390236: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("884691");
            let i = u.createContext(void 0);
            var l = i
        },
        689226: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconData: function() {
                    return s
                },
                replaceRoleIconSourceSize: function() {
                    return f
                },
                isRoleIconAssetUrl: function() {
                    return E
                },
                canGuildUseRoleIcons: function() {
                    return I
                }
            });
            var u = n("867805"),
                i = n("407063"),
                l = n("315102"),
                r = n("773336"),
                o = n("49111");
            let c = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                a = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                d = (0, r.isAndroid)(),
                s = (e, t) => {
                    if (null == e) return null;
                    let n = null != e.unicodeEmoji ? u.default.getByName(u.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: _(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, "size=".concat((0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()))),
                _ = (e, t) => {
                    let {
                        id: n,
                        icon: u
                    } = e;
                    if (null == u) return;
                    if (u.startsWith("data:")) return u;
                    let r = l.SUPPORTS_WEBP ? "webp" : "png",
                        s = "",
                        f = "quality=lossless";
                    return (null != t && (s = "size=" + (0, i.getBestMediaProxySize)(t * (0, i.getDevicePixelRatio)()), f = d ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(c, "/").concat(n, "/").concat(u, ".").concat(r, "?").concat(s).concat(f) : "".concat(a).concat(o.Endpoints.ROLE_ICON(n, u), "?").concat(s)
                },
                E = e => e.startsWith(c) || e.startsWith("".concat(a, "/roles")) && e.includes("/icons/"),
                I = (e, t) => {
                    var n;
                    let u = (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null;
                    return u || e.features.has(o.GuildFeatures.ROLE_ICONS)
                }
        },
        152475: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canEveryoneRoleViewEvent: function() {
                    return E
                },
                isGuildEventInvitable: function() {
                    return I
                },
                default: function() {
                    return m
                }
            });
            var u = n("446674"),
                i = n("242757"),
                l = n("834052"),
                r = n("42203"),
                o = n("923959"),
                c = n("305961"),
                a = n("957255"),
                d = n("991170"),
                s = n("398604"),
                f = n("745049"),
                _ = n("49111");

            function E(e) {
                var t;
                let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.default];
                let {
                    entityType: u,
                    channelId: i
                } = "entity_type" in (t = e) ? {
                    entityType: t.entity_type,
                    channelId: t.channel_id
                } : t, l = u === f.GuildScheduledEventEntityTypes.EXTERNAL;
                if (l) return !0;
                let o = n.getChannel(i);
                return null != o && d.default.canEveryoneRole(_.Permissions.VIEW_CHANNEL, o)
            }

            function I(e) {
                let [t, n, u, d] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, r.default, c.default, l.default];
                if ((0, s.isGuildEventEnded)(e)) return !1;
                let {
                    guild_id: _,
                    channel_id: I
                } = e, m = e.entity_type === f.GuildScheduledEventEntityTypes.EXTERNAL, S = m ? t.getDefaultChannel(e.guild_id) : n.getChannel(I), h = u.getGuild(_), R = d.getStageInstanceByChannel(I);
                return !!(0, i.canViewInviteModal)(a.default, h, S, R) && null != S && E(e, [n])
            }

            function m(e) {
                return (0, u.useStateFromStores)([o.default, r.default, c.default, l.default], () => I(e, [o.default, r.default, c.default, l.default]), [e])
            }
        },
        397680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("884691"),
                i = n("446674"),
                l = n("398604");

            function r(e, t) {
                let n = (0, i.useStateFromStoresArray)([l.default], () => {
                        var e, n;
                        return null !== (n = null === (e = l.default.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
                    }),
                    r = u.useMemo(() => null == n ? void 0 : n.find(t => t.event_exception_id === e), [n, e]);
                return r
            }
        },
        466148: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("446674"),
                i = n("299039"),
                l = n("398604"),
                r = n("397680"),
                o = n("822516");

            function c(e, t) {
                let n, c;
                let a = (0, u.useStateFromStores)([l.default], () => l.default.getGuildScheduledEvent(e)),
                    d = (0, r.default)(t, e);
                if (null == a) return {};
                if (null == t) return n = new Date(a.scheduled_start_time), {
                    startTime: n,
                    endTime: c = null != a.scheduled_end_time ? new Date(a.scheduled_end_time) : null
                };
                let s = null != a.recurrence_rule ? (0, o.getRRule)(a.recurrence_rule) : null;
                return null == s ? {} : (n = new Date((null == d ? void 0 : d.scheduled_start_time) == null ? i.default.extractTimestamp(t) : d.scheduled_start_time), {
                    startTime: n,
                    endTime: c = (null == d ? void 0 : d.scheduled_end_time) == null ? null : new Date(d.scheduled_end_time)
                })
            }
        },
        895026: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchMemberCounts: function() {
                    return s
                },
                requestMembersForRole: function() {
                    return _
                }
            });
            var u = n("693566"),
                i = n.n(u),
                l = n("872717"),
                r = n("913144"),
                o = n("851387"),
                c = n("36402"),
                a = n("49111");
            async function d(e) {
                try {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = await l.default.get({
                            url: a.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                        }),
                        n = t.body;
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: n
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function s(e) {
                c.default.shouldFetch(e) && await d(e)
            }
            let f = new i({
                maxAge: 1e4
            });

            function _(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    u = "".concat(e, "-").concat(t);
                if (!n || null == f.get(u)) {
                    var i, r;
                    return f.set(u, !0), i = e, r = t, l.default.get({
                        url: a.Endpoints.GUILD_ROLE_MEMBER_IDS(i, r)
                    }).then(e => (o.default.requestMembersById(i, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        36402: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("446674"),
                i = n("913144");
            let l = {},
                r = {};
            class o extends u.default.Store {
                getRoleMemberCount(e) {
                    return null != e ? l[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = r[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            o.displayName = "GuildRoleMemberCountStore";
            var c = new o(i.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: n
                    } = e;
                    l[t] = n, r[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        count: u
                    } = e, i = l[t];
                    if (null == i) return !1;
                    i[n] = u
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n,
                        added: u
                    } = e, i = l[t];
                    if (null == i || null == i[n]) return !1;
                    let r = Object.keys(u).length;
                    i[n] += r
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, u = l[t];
                    if (null == u || null == u[n]) return !1;
                    u[n] = u[n] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: n
                    } = e, u = l[t];
                    if (null == u || null == u[n]) return !1;
                    u[n] = Math.max(u[n] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: n
                    } = e;
                    null == l[t] && (l[t] = {}), l[t][n.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete l[t.id], delete r[t.id]
                }
            })
        },
        242757: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canViewInviteModal: function() {
                    return i
                }
            });
            var u = n("49111");

            function i(e, t, n, i) {
                let l = null != n ? n : t,
                    r = null != l && e.can(u.Permissions.CREATE_INSTANT_INVITE, l);
                return r || null != t && null != t.vanityURLCode || (null == i ? void 0 : i.invite_code) != null
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("65597"),
                l = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, i.default)([l.default], () => l.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, u.jsx)(u.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var u = n("884691"),
                i = n("65597"),
                l = n("526887"),
                r = n("880731");

            function o() {
                let {
                    createMultipleConfettiAt: e
                } = u.useContext(l.ConfettiCannonContext), t = (0, i.default)([r.default], () => r.default.getState()), n = u.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), o = u.useMemo(() => ({
                    fire: (u, i, l) => {
                        var r, o;
                        let c = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            a = n(c);
                        e(u, i, a, (null !== (r = null == l ? void 0 : l.count) && void 0 !== r ? r : c.confettiCount) * (null !== (o = null == l ? void 0 : l.countMultiplier) && void 0 !== o ? o : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return o
            }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return m
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return S
                }
            });
            var u = n("884691"),
                i = n("65597"),
                l = n("872717"),
                r = n("913144"),
                o = n("775433"),
                c = n("697218"),
                a = n("10514"),
                d = n("764364"),
                s = n("676572"),
                f = n("646718"),
                _ = n("49111");
            let E = "nonSubscriber";
            async function I() {
                try {
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await l.default.get({
                        url: _.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [f.PremiumSubscriptionSKUs.TIER_0]: e[f.PremiumSubscriptionSKUs.TIER_0],
                                [f.PremiumSubscriptionSKUs.TIER_2]: e[f.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : r.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function m(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), u = s.default.shouldFetchPremiumLikelihood(), i = c.default.getCurrentUser();
                h(i, u, t, n)
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), l = (0, i.default)([s.default], () => s.default.shouldFetchPremiumLikelihood()), r = (0, i.default)([c.default], () => c.default.getCurrentUser());
                u.useEffect(() => {
                    h(r, l, t, n)
                }, [r, l, t, n])
            }

            function h(e, t, n, u) {
                null != e && !(0, d.isPremium)(e) && n && (t && I(), u && (!a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_0) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_0) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_0), !a.default.isLoadedForSKU(f.PremiumSubscriptionSKUs.TIER_2) && !a.default.isFetchingForSKU(f.PremiumSubscriptionSKUs.TIER_2) && (0, o.fetchSubscriptionPlansForSKU)(f.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var u = n("446674"),
                i = n("913144");
            let l = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                r = l;
            class o extends u.default.Store {
                initialize() {
                    r = l
                }
                getState() {
                    return r
                }
                shouldFetchPremiumLikelihood() {
                    return !r.isFetching && !r.fetched
                }
            }
            o.displayName = "UserPremiumLikelihoodStore";
            var c = new o(i.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    r.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    r.premiumLikelihood = t, r.fetched = !0, r.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    r.isFetching = !1
                },
                LOGOUT: function() {
                    r.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("862205");
            let i = (0, u.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var l = i
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var u = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                r = n("782340"),
                o = n("53061"),
                c = n("284434"),
                a = n("315956");

            function d(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, u.jsxs)("div", {
                    className: l(o.container, t),
                    children: [(0, u.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: a,
                        className: l(o.sparkleIcon, o.sparkleBottom)
                    }), n, (0, u.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: c,
                        className: l(o.sparkleIcon, o.sparkleTop)
                    })]
                })
            }
        }
    }
]);