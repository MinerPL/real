(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15159"], {
        775433: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                fetchSubscriptionPlansForSKU: function() {
                    return c
                },
                fetchSubscriptionPlansBySKUs: function() {
                    return E
                },
                fetchPremiumSubscriptionPlans: function() {
                    return f
                },
                resetSubscriptionPlanData: function() {
                    return S
                }
            });
            var i = n("990746"),
                l = n("913144"),
                r = n("333805"),
                u = n("160299"),
                a = n("745279"),
                s = n("850068"),
                o = n("49111"),
                d = n("646718");
            async function c(e, t, n, d, c) {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_FETCH",
                    skuId: e
                });
                try {
                    let r = {
                            url: o.Endpoints.STORE_PUBLISHED_LISTINGS_SUBSCRIPTION_PLANS(e),
                            oldFormErrors: !0
                        },
                        a = {};
                    null != t && (a.country_code = t), null != n && (a.payment_source_id = n), null != d && (a.include_unpublished = d), null != c && (a.revenue_surface = c), r.query = a, !u.default.ipCountryCodeLoaded && await (0, s.fetchIpCountryCode)();
                    let E = await i.default.get(r);
                    l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_SUCCESS",
                        skuId: e,
                        subscriptionPlans: E.body
                    })
                } catch (t) {
                    throw l.default.dispatch({
                        type: "SUBSCRIPTION_PLANS_FETCH_FAILURE",
                        skuId: e
                    }), (0, a.captureBillingException)(t), new r.default(t)
                }
            }

            function E(e, t) {
                return Promise.all(e.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(e => c(e, t)))
            }

            function f(e, t, n) {
                return Promise.all(d.ACTIVE_PREMIUM_SKUS.filter(e => e !== d.PremiumSubscriptionSKUs.NONE).map(i => c(i, e, t, void 0, n)))
            }

            function S() {
                l.default.dispatch({
                    type: "SUBSCRIPTION_PLANS_RESET"
                })
            }
        },
        998460: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GiftIcon: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M4 6a4 4 0 0 1 4-4h.089A4.089 4.089 0 0 1 12 4.898 4.089 4.089 0 0 1 15.912 2H16a4 4 0 0 1 3.465 6H20a2 2 0 0 1 2 2v1.5a.5.5 0 0 1-.5.5h-19a.5.5 0 0 1-.5-.5V10a2 2 0 0 1 2-2h.535A3.982 3.982 0 0 1 4 6Zm12 2a2 2 0 1 0 0-4h-.088c-.959 0-1.794.652-2.027 1.582L13.281 8H16Zm-5.885-2.418L10.719 8H8a2 2 0 1 1 0-4h.089c.958 0 1.793.652 2.026 1.582ZM3 20a2 2 0 0 0 2 2h5.5a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.5-.5h-7a.5.5 0 0 0-.5.5V20Zm10.5 2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5V20a2 2 0 0 1-2 2h-5.5Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        434657: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockIcon: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M15 8V6a3 3 0 1 0-6 0v2h6ZM7 8H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6A5 5 0 0 0 7 6v2Zm6 7.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        202909: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NitroWheelIcon: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.252A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        876726: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayIcon: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M9.248 3.348C7.872 2.455 6 3.384 6 4.96v14.08c0 1.576 1.872 2.505 3.248 1.612l10.853-7.04c1.199-.777 1.199-2.447 0-3.224L9.248 3.348Z",
                        className: a
                    })
                })
            }
        },
        424823: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlusSmallIcon: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        fillRule: "evenodd",
                        d: "M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5V6Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        912758: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StopIcon: function() {
                    return u
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("912557"),
                r = n("75196");
            let u = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...s
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, r.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("rect", {
                        width: t,
                        height: n,
                        x: "3",
                        y: "3",
                        fill: "string" == typeof u ? u : u.css,
                        rx: "3",
                        className: a
                    })
                })
            }
        },
        333805: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("990746"),
                l = n("49111"),
                r = n("782340");
            class u extends i.default.V6OrEarlierAPIError {
                constructor(e, t) {
                    super(e, t, null != t ? r.default.Messages.FORM_ERROR_GENERIC_WITH_DETAILS.format({
                        statusPageURL: l.Links.STATUS,
                        details: "".concat(t)
                    }) : r.default.Messages.FORM_ERROR_GENERIC.format({
                        statusPageURL: l.Links.STATUS
                    }))
                }
            }
        },
        997289: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAnalyticsContext: function() {
                    return r
                }
            });
            var i = n("773670"),
                l = n("599110");
            let r = () => i.useContext(l.AnalyticsContext)
        },
        252744: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773670");

            function l(e) {
                let [t, n] = (0, i.useState)(!1), l = (0, i.useRef)(e.current);
                return (0, i.useEffect)(() => {
                    l.current = e.current
                }, [e]), (0, i.useEffect)(() => {
                    let e = l.current;
                    if (null == e) return;
                    let t = () => n(!0),
                        i = () => n(!1);
                    return e.addEventListener("mouseenter", t), e.addEventListener("mouseleave", i), () => {
                        e.removeEventListener("mouseenter", t), e.removeEventListener("mouseleave", i)
                    }
                }, [l]), t
            }
        },
        545158: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("773336");
            async function l(e, t) {
                let {
                    default: l
                } = await n.el("572544").then(n.bind(n, "572544")), r = l(e, {
                    skipExtensionCheck: t,
                    analyticsLocations: []
                });
                if (null != r) r(null);
                else if (i.isPlatformEmbedded) window.open(e);
                else {
                    let t = document.createElement("a");
                    t.href = e, t.target = "_blank", t.rel = "noreferrer noopener", t.click()
                }
            }
        },
        212084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("605250"),
                l = n("802493");
            let r = new i.default("GuildStickers");
            var u = new class e {
                getSync(e) {
                    let t = performance.now(),
                        n = l.default.stickers(e).getMapEntriesSyncUnsafe(),
                        i = performance.now();
                    return r.log("synchronously loaded in ".concat(i - t, "ms (guilds: ").concat(n.length, ")")), n
                }
                handleConnectionOpen(e, t) {
                    for (let n of e.guilds) this.handleOneGuildCreate(n, t)
                }
                handleGuildCreate(e, t) {
                    this.handleOneGuildCreate(e.guild, t)
                }
                handleGuildUpdate(e, t) {
                    this.replace(e.guild.id, e.guild.stickers, t)
                }
                handleGuildDelete(e, t) {
                    this.delete(e.guild.id, t)
                }
                handleGuildStickersUpdate(e, t) {
                    this.replace(e.guildId, e.stickers, t)
                }
                handleBackgroundSync(e, t) {
                    e.promisesForBackgroundSyncToWaitOn.push(Promise.all(e.stickers.map(e => {
                        if ("unavailable" === e.dataMode) return Promise.resolve();
                        "full" === e.dataMode ? (r.verbose("Replacing ".concat(e.entities.length, " stickers for ").concat(e.guildId)), this.replace(e.guildId, e.entities, t)) : (e.updatedEntities.length > 0 || e.deletedEntityIds.length > 0) && (r.verbose("Updating ".concat(e.updatedEntities.length, " and deleting ").concat(e.deletedEntityIds.length, " stickers for ").concat(e.guildId)), this.update(e.guildId, e.updatedEntities, e.deletedEntityIds, t))
                    })))
                }
                handleOneGuildCreate(e, t) {
                    null != e.stickers && this.replace(e.id, e.stickers, t), null != e.stickerUpdates && this.update(e.id, e.stickerUpdates.writes, e.stickerUpdates.deletes, t)
                }
                handleClearGuildCache(e) {
                    this.clear(e)
                }
                handleReset() {}
                replace(e, t, n) {
                    l.default.stickersTransaction(n).replaceAll(e, t)
                }
                delete(e, t) {
                    l.default.stickersTransaction(t).delete(e)
                }
                clear(e) {
                    l.default.stickersTransaction(e).delete()
                }
                update(e, t, n, i) {
                    let r = l.default.stickersTransaction(i);
                    for (let i of (r.putAll(e, t), n)) r.delete(e, i)
                }
                constructor() {
                    this.actions = {
                        BACKGROUND_SYNC: (e, t) => this.handleBackgroundSync(e, t),
                        CLEAR_GUILD_CACHE: (e, t) => this.handleClearGuildCache(t),
                        CONNECTION_OPEN: (e, t) => this.handleConnectionOpen(e, t),
                        GUILD_CREATE: (e, t) => this.handleGuildCreate(e, t),
                        GUILD_DELETE: (e, t) => this.handleGuildDelete(e, t),
                        GUILD_STICKERS_UPDATE: (e, t) => this.handleGuildStickersUpdate(e, t),
                        GUILD_UPDATE: (e, t) => this.handleGuildUpdate(e, t)
                    }
                }
            }
        },
        988268: function(e, t, n) {
            "use strict";
            var i, l, r, u;
            n.r(t), n.d(t, {
                ApplicationTypes: function() {
                    return i
                },
                BotTagTypes: function() {
                    return l
                }
            }), (r = i || (i = {}))[r.GAME = 1] = "GAME", r[r.TICKETED_EVENTS = 3] = "TICKETED_EVENTS", r[r.GUILD_ROLE_SUBSCRIPTIONS = 4] = "GUILD_ROLE_SUBSCRIPTIONS", (u = l || (l = {}))[u.BOT = 0] = "BOT", u[u.SERVER = 1] = "SERVER", u[u.SYSTEM_DM = 2] = "SYSTEM_DM", u[u.OFFICIAL = 3] = "OFFICIAL", u[u.STAFF_ONLY_DM = 4] = "STAFF_ONLY_DM", u[u.ORIGINAL_POSTER = 5] = "ORIGINAL_POSTER", u[u.AI = 6] = "AI", u[u.REMIX = 7] = "REMIX"
        },
        246511: function(e, t, n) {
            "use strict";
            var i, l, r, u;
            n.r(t), n.d(t, {
                InspectedExpressionChangeSource: function() {
                    return i
                },
                PickerContextMenuDataTypes: function() {
                    return l
                }
            }), (r = i || (i = {}))[r.GRID_NAVIGATOR_EVENT = 0] = "GRID_NAVIGATOR_EVENT", r[r.MOUSE_EVENT = 1] = "MOUSE_EVENT", (u = l || (l = {})).EMOJI = "emoji", u.STICKER = "sticker", u.PACK_ICON = "pack-icon"
        },
        686298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationStreamResolutions: function() {
                    return u
                },
                getApplicationResolution: function() {
                    return E
                },
                ApplicationStreamFPS: function() {
                    return a
                },
                ApplicationStreamPresets: function() {
                    return s
                },
                getApplicationFramerate: function() {
                    return f
                },
                ApplicationStreamPresetValues: function() {
                    return S
                },
                ApplicationStreamSettingRequirements: function() {
                    return _
                },
                ApplicationStreamResolutionButtons: function() {
                    return N
                },
                GoLiveDeviceResolutionButtons: function() {
                    return T
                },
                ApplicationStreamResolutionButtonsWithSuffixLabel: function() {
                    return A
                },
                ApplicationStreamFPSButtons: function() {
                    return C
                },
                ApplicationStreamFPSButtonsWithSuffixLabel: function() {
                    return m
                }
            });
            var i, l, r, u, a, s, o = n("49111"),
                d = n("646718"),
                c = n("782340");

            function E(e) {
                switch (e) {
                    case u.RESOLUTION_480:
                        return u.RESOLUTION_480;
                    case u.RESOLUTION_720:
                        return u.RESOLUTION_720;
                    case u.RESOLUTION_1080:
                        return u.RESOLUTION_1080;
                    case u.RESOLUTION_SOURCE:
                        return u.RESOLUTION_SOURCE;
                    default:
                        throw Error("Unknown resolution: ".concat(e))
                }
            }

            function f(e) {
                switch (e) {
                    case a.FPS_5:
                        return a.FPS_5;
                    case a.FPS_15:
                        return a.FPS_15;
                    case a.FPS_30:
                        return a.FPS_30;
                    case a.FPS_60:
                        return a.FPS_60;
                    default:
                        throw Error("Unknown frame rate: ".concat(e))
                }
            }(i = u || (u = {}))[i.RESOLUTION_480 = 480] = "RESOLUTION_480", i[i.RESOLUTION_720 = 720] = "RESOLUTION_720", i[i.RESOLUTION_1080 = 1080] = "RESOLUTION_1080", i[i.RESOLUTION_1440 = 1440] = "RESOLUTION_1440", i[i.RESOLUTION_SOURCE = 0] = "RESOLUTION_SOURCE", (l = a || (a = {}))[l.FPS_5 = 5] = "FPS_5", l[l.FPS_15 = 15] = "FPS_15", l[l.FPS_30 = 30] = "FPS_30", l[l.FPS_60 = 60] = "FPS_60", (r = s || (s = {}))[r.PRESET_VIDEO = 1] = "PRESET_VIDEO", r[r.PRESET_DOCUMENTS = 2] = "PRESET_DOCUMENTS", r[r.PRESET_CUSTOM = 3] = "PRESET_CUSTOM";
            let S = {
                    [s.PRESET_DOCUMENTS]: [{
                        resolution: u.RESOLUTION_SOURCE,
                        fps: a.FPS_15
                    }, {
                        resolution: u.RESOLUTION_SOURCE,
                        fps: a.FPS_5
                    }],
                    [s.PRESET_VIDEO]: [{
                        resolution: u.RESOLUTION_1440,
                        fps: a.FPS_60
                    }, {
                        resolution: u.RESOLUTION_1080,
                        fps: a.FPS_60
                    }, {
                        resolution: u.RESOLUTION_720,
                        fps: a.FPS_60
                    }, {
                        resolution: u.RESOLUTION_720,
                        fps: a.FPS_30
                    }],
                    [s.PRESET_CUSTOM]: []
                },
                _ = [{
                    resolution: u.RESOLUTION_SOURCE,
                    fps: a.FPS_60,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_SOURCE,
                    fps: a.FPS_30,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_SOURCE,
                    fps: a.FPS_15,
                    quality: d.StreamQualities.HIGH_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_SOURCE,
                    fps: a.FPS_5,
                    preset: s.PRESET_DOCUMENTS
                }, {
                    resolution: u.RESOLUTION_1440,
                    fps: a.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_1440,
                    fps: a.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_1440,
                    fps: a.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_1080,
                    fps: a.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_1080,
                    fps: a.FPS_30,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_1080,
                    fps: a.FPS_15,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_2,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_720,
                    fps: a.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_720,
                    fps: a.FPS_30
                }, {
                    resolution: u.RESOLUTION_720,
                    fps: a.FPS_15
                }, {
                    resolution: u.RESOLUTION_720,
                    fps: a.FPS_5
                }, {
                    resolution: u.RESOLUTION_480,
                    fps: a.FPS_60,
                    guildPremiumTier: o.BoostedGuildTiers.TIER_1,
                    quality: d.StreamQualities.MID_STREAMING_QUALITY
                }, {
                    resolution: u.RESOLUTION_480,
                    fps: a.FPS_30
                }, {
                    resolution: u.RESOLUTION_480,
                    fps: a.FPS_15
                }, {
                    resolution: u.RESOLUTION_480,
                    fps: a.FPS_5
                }];

            function I(e, t) {
                return {
                    value: e,
                    get label() {
                        return null != t ? t() : e
                    }
                }
            }
            let N = [I(u.RESOLUTION_720), I(u.RESOLUTION_1080), I(u.RESOLUTION_1440), I(u.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                T = [I(u.RESOLUTION_720), I(u.RESOLUTION_1080), I(u.RESOLUTION_1440)],
                O = e => "".concat(e, "p"),
                A = [I(u.RESOLUTION_480, () => O(u.RESOLUTION_480)), I(u.RESOLUTION_720, () => O(u.RESOLUTION_720)), I(u.RESOLUTION_1080, () => O(u.RESOLUTION_1080)), I(u.RESOLUTION_1440, () => O(u.RESOLUTION_1440)), I(u.RESOLUTION_SOURCE, () => c.default.Messages.SCREENSHARE_SOURCE)],
                C = [I(a.FPS_15), I(a.FPS_30), I(a.FPS_60)],
                m = [I(a.FPS_15, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: a.FPS_15
                })), I(a.FPS_30, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: a.FPS_30
                })), I(a.FPS_60, () => c.default.Messages.STREAM_FPS_OPTION.format({
                    value: a.FPS_60
                }))]
        },
        270161: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CREATE_GUILD_EVENT_CORE_PERMISSIONS: function() {
                    return u
                },
                CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: function() {
                    return a
                },
                CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: function() {
                    return s
                }
            });
            var i = n("754013"),
                l = n("923510"),
                r = n("49111");
            let u = r.Permissions.VIEW_CHANNEL,
                a = i.default.combine(u, r.Permissions.CONNECT),
                s = i.default.combine(u, l.MODERATE_STAGE_CHANNEL_PERMISSIONS)
        },
        533613: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                HotspotLocations: function() {
                    return i
                }
            }), (l = i || (i = {})).REPORT_PROBLEM_POST_STREAM = "REPORT_PROBLEM_POST_STREAM", l.VIDEO_BACKGROUND_FEEDBACK = "VIDEO_BACKGROUND_FEEDBACK", l.VOICE_CALL_FEEDBACK = "VOICE_CALL_FEEDBACK", l.GUILD_ANALYTICS_GUILD_SETTINGS_MENU = "GUILD_ANALYTICS_GUILD_SETTINGS_MENU", l.NOW_PLAYING_CONSENT_CARD = "NOW_PLAYING_CONSENT_CARD", l.IOS_GUILD_NAV_EDUCATION = "IOS_GUILD_NAV_EDUCATION", l.VOICE_PANEL_INTRODUCTION = "VOICE_PANEL_INTRODUCTION", l.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL = "GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL", l.FAVORITE_EMOJI_TOOLTIP = "FAVORITE_EMOJI_TOOLTIP", l.POST_ACTIVITY_FEEDBACK = "POST_ACTIVITY_FEEDBACK", l.GUILD_DELETE_FEEDBACK = "GUILD_DELETE_FEEDBACK", l.GUILD_LEAVE_FEEDBACK = "GUILD_LEAVE_FEEDBACK", l.APPLICATION_COMMAND_TOOLTIP = "APPLICATION_COMMAND_TOOLTIP", l.GUILD_CAP_INLINE_UPSELL = "GUILD_CAP_INLINE_UPSELL", l.STAGE_CHANNEL_UPSELL = "STAGE_CHANNEL_UPSELL", l.HUB_WAITLIST_UPSELL = "HUB_WAITLIST_UPSELL", l.HUB_NEW = "HUB_NEW", l.HUB_SECOND_EMAIL_CONNECTION_UPSELL = "HUB_SECOND_EMAIL_CONNECTION_UPSELL", l.LIVE_STAGE_NOTIFICATION_BADGE = "LIVE_STAGE_NOTIFICATION_BADGE", l.GUILD_EVENT_UPSELL = "GUILD_EVENT_UPSELL", l.HUB_LINK_CHANNEL_NOTICE = "HUB_LINK_CHANNEL_NOTICE", l.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP = "PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP = "ANIMATED_GUILD_BANNER_GUILD_HEADER_TOOLTIP", l.ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL = "ANIMATED_GUILD_BANNER_SETTINGS_NEW_PILL", l.MULTI_ACCOUNT_TOOLTIP = "MULTI_ACCOUNT_TOOLTIP", l.HUB_STUDY_ROOM_NOTICE = "HUB_STUDY_ROOM_NOTICE", l.CHANNEL_BANNER_MEMBER_LIST_NOTICE = "CHANNEL_BANNER_MEMBER_LIST_NOTICE", l.CHANGE_LANGUAGE_MODAL = "CHANGE_LANGUAGE_MODAL", l.ACTIVITY_BEB_TUTORIAL = "ACTIVITY_BEB_TUTORIAL", l.APP_DIRECTORY_SETTINGS_NEW_PILL = "APP_DIRECTORY_SETTINGS_NEW_PILL", l.INVITE_SPLASH_GUILD_HEADER_TOOLTIP = "INVITE_SPLASH_GUILD_HEADER_TOOLTIP", l.ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_DAY_NEW", l.ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW = "ANIMATED_VIDEO_BG_CAPERNITE_NIGHT_NEW", l.ANIMATED_VIDEO_BG_HACKER_DEN_NEW = "ANIMATED_VIDEO_BG_HACKER_DEN_NEW", l.ANIMATED_VIDEO_BG_WUMPICE_NEW = "ANIMATED_VIDEO_BG_WUMPICE_NEW", l.ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW = "ANIMATED_VIDEO_BG_CUSTOM_TOOLTIP_NEW", l.ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW = "ANIMATED_VIDEO_BG_BIRTHDAY_1_NEW", l.SOUNDBOARD_WHEEL_EDUCATION_MODAL = "SOUNDBOARD_WHEEL_EDUCATION_MODAL", l.IN_APP_REPORTS_FEEDBACK = "IN_APP_REPORTS_FEEDBACK", l.CLIPS_CHANNEL_ATTACH_REMINDER = "CLIPS_CHANNEL_ATTACH_REMINDER"
        },
        9294: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateInviteKeyFromUrlParams: function() {
                    return u
                },
                generateInviteKeyFromExtraData: function() {
                    return a
                },
                parseExtraDataFromInviteKey: function() {
                    return s
                },
                parseInviteCodeFromInviteKey: function() {
                    return o
                }
            });
            var i = n("126617"),
                l = n("833858");
            let r = "event";

            function u(e, t) {
                if (null == t) return e;
                let n = function(e) {
                    let t = "?" === e.charAt(0) ? e.substring(1) : e;
                    try {
                        let e = i.parse(t);
                        return (0, l.getFirstQueryStringValue)(e[r])
                    } catch (e) {
                        return
                    }
                }(t);
                return a({
                    baseCode: e,
                    guildScheduledEventId: n
                })
            }

            function a(e) {
                let {
                    baseCode: t,
                    guildScheduledEventId: n
                } = e;
                return null == n ? t : "".concat(t, "?").concat(r, "=").concat(n)
            }

            function s(e) {
                let [t, n] = e.split("?");
                if (null == n) return {
                    baseCode: t
                };
                let u = i.parse(n),
                    a = (0, l.getFirstQueryStringValue)(u[r]);
                return {
                    baseCode: t,
                    guildScheduledEventId: a
                }
            }

            function o(e) {
                let [t] = e.split("?");
                return t
            }
        },
        252931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getInventoryGuildPacksUserExperimentConfig: function() {
                    return d
                },
                useInventoryGuildPacksUserExperiment: function() {
                    return c
                },
                useInventoryGuildSettingsExperiment: function() {
                    return f
                }
            });
            var i = n("744196"),
                l = n("862205"),
                r = n("697218"),
                u = n("719923"),
                a = n("782340");
            let s = (0, l.createExperiment)({
                    kind: "user",
                    id: "2023-05_inventory_guild_packs",
                    label: "Inventory Guild Packs Experiment",
                    defaultConfig: {
                        desktopViewAndUseAndCollectEnabled: !1,
                        mobileViewAndUseEnabled: !1,
                        mobileAndFreemiumCollectEnabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Desktop view/use/collect",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 2,
                        label: "Desktop view/use/collect and mobile view/use",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 3,
                        label: "Read-only pack emoji for logged out users",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !1,
                            mobileViewAndUseEnabled: !1,
                            mobileAndFreemiumCollectEnabled: !1
                        }
                    }, {
                        id: 4,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }, {
                        id: 5,
                        label: "Mobile/desktop view/use/collect, and show Try Packs Modal (second group)",
                        config: {
                            desktopViewAndUseAndCollectEnabled: !0,
                            mobileViewAndUseEnabled: !0,
                            mobileAndFreemiumCollectEnabled: !0
                        }
                    }]
                }),
                o = e => {
                    let {
                        user: t,
                        config: n
                    } = e, {
                        desktopViewAndUseAndCollectEnabled: i,
                        mobileViewAndUseEnabled: l,
                        mobileAndFreemiumCollectEnabled: r
                    } = n, a = u.default.isPremium(t);
                    return {
                        viewAndUseEnabled: i,
                        showTryPacksModalAndV2Copy: r,
                        collectEnabled: a ? i : r
                    }
                },
                d = e => {
                    let {
                        user: t,
                        autoTrackExposure: n = !0
                    } = e;
                    return null == t ? {
                        viewAndUseEnabled: !1,
                        showTryPacksModalAndV2Copy: !1,
                        collectEnabled: !1
                    } : o({
                        user: t,
                        config: s.getCurrentConfig({
                            location: "inventory_guild_packs_experiment"
                        }, {
                            autoTrackExposure: n
                        })
                    })
                },
                c = function() {
                    var e;
                    let {
                        expressionSourceGuild: t,
                        autoTrackExposure: n = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        expressionSourceGuild: void 0,
                        autoTrackExposure: !0
                    }, l = (0, i.default)([r.default], () => r.default.getCurrentUser()), u = s.useExperiment({
                        location: "inventory_guild_setting_experiment"
                    }, {
                        autoTrackExposure: n
                    }), {
                        viewAndUseEnabled: a,
                        showTryPacksModalAndV2Copy: d,
                        collectEnabled: c
                    } = o({
                        user: l,
                        config: u
                    }), E = a && c && null != t && (null == t ? void 0 : null === (e = t.inventorySettings) || void 0 === e ? void 0 : e.isEmojiPackCollectible) !== !1;
                    return {
                        viewAndUseEnabled: a,
                        collectEnabled: E,
                        showTryPacksModalAndV2Copy: d
                    }
                },
                E = (0, l.createExperiment)({
                    kind: "guild",
                    id: "2023-06_inventory_guild_setting",
                    label: "Inventory Guild Settings Experiment",
                    defaultConfig: {
                        showSettingsToggle: !1,
                        allowCollection: !1,
                        getNewSettingsDescription: () => null
                    },
                    treatments: [{
                        id: 1,
                        label: "Show settings toggle, but collection is not allowed.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !1,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 2,
                        label: "Show settings toggle, and collection is allowed sometime in August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }, {
                        id: 3,
                        label: "Show settings toggle, and collection is allowed in late August.",
                        config: {
                            showSettingsToggle: !0,
                            allowCollection: !0,
                            getNewSettingsDescription: () => a.default.Messages.INVENTORY_NEW_SETTING_DESCRIPTION_SOON
                        }
                    }]
                }),
                f = function() {
                    let {
                        guildId: e,
                        autoTrackExposure: t = !0
                    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        guildId: void 0,
                        autoTrackExposure: !0
                    }, n = E.useExperiment({
                        guildId: null != e ? e : "",
                        location: "482926_3"
                    }, {
                        autoTrackExposure: void 0 === t || t
                    });
                    return {
                        showSettingsToggle: n.showSettingsToggle,
                        allowCollection: n.allowCollection,
                        getNewSettingsDescription: n.getNewSettingsDescription
                    }
                }
        },
        692171: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("498225"),
                l = n("990746"),
                r = n("913144"),
                u = n("49111");
            let a = Object.freeze({
                    burstCredits: 0,
                    wasReplenishedToday: !1,
                    nextReplenishAt: null,
                    isReactionPickerBurstToggled: null,
                    emojiReactionForCoachmark: null,
                    guildBurstPreviews: {}
                }),
                s = {
                    ...a
                };
            class o extends i.default.PersistedStore {
                initialize(e) {
                    s = null != e ? e : {
                        ...a
                    }
                }
                get remainingBurstCurrency() {
                    return s.burstCredits
                }
                get hasAvailableBurstCurrency() {
                    return this.remainingBurstCurrency > 0
                }
                get nextReplenishAt() {
                    return s.nextReplenishAt
                }
                get isReactionPickerBurstToggled() {
                    return null != s.isReactionPickerBurstToggled && s.isReactionPickerBurstToggled
                }
                get emojiReactionToTargetForCoachmark() {
                    return s.emojiReactionForCoachmark
                }
                getBurstedPreviewData(e) {
                    var t;
                    return null !== (t = s.guildBurstPreviews[e]) && void 0 !== t ? t : void 0
                }
                getState() {
                    return s
                }
            }
            o.displayName = "BurstReactionStore", o.persistKey = "BurstReactionStore33";
            var d = new o(r.default, {
                BURST_CREDITS_SET: e => {
                    let {
                        amount: t,
                        wasReplenishedToday: n,
                        nextReplenishAt: i
                    } = e;
                    s.burstCredits = t, s.wasReplenishedToday = n, s.nextReplenishAt = i
                },
                POST_CONNECTION_OPEN: () => {
                    l.default.get({
                        url: u.Endpoints.BURST_CREDIT_BALANCE
                    }).then(e => {
                        r.default.dispatch({
                            type: "BURST_CREDITS_SET",
                            amount: e.body.amount,
                            wasReplenishedToday: e.body.replenished_today,
                            nextReplenishAt: new Date(e.body.next_replenish_at)
                        })
                    }).catch(() => {})
                },
                BURST_REACTION_PICKER_TOGGLE: e => {
                    let {
                        value: t
                    } = e;
                    s.isReactionPickerBurstToggled = t
                },
                BURST_REACTION_SHOW_FREE_USER_SENT_POPOUT: e => {
                    let {
                        emoji: t
                    } = e;
                    s.emojiReactionForCoachmark = null != t ? t : null
                },
                BURST_GUILD_PREVIEW_SET: e => {
                    let {
                        guildId: t,
                        channelId: n,
                        messageId: i,
                        emoji: l
                    } = e;
                    s.guildBurstPreviews[t] = {
                        channelId: n,
                        messageId: i,
                        emoji: l
                    }
                },
                BURST_GUILD_PREVIEW_CLEAR: e => {
                    let {
                        guildId: t
                    } = e;
                    delete s.guildBurstPreviews[t]
                }
            })
        },
        650484: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                },
                PaymentPortalBody: function() {
                    return _
                },
                PaymentPortalFooter: function() {
                    return I
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                u = n.n(r),
                a = n("161179"),
                s = n.n(a),
                o = n("865768"),
                d = n.n(o),
                c = n("77078"),
                E = n("642906"),
                f = n("442750");

            function S(e) {
                var t, n, r, a, o, d;
                let {
                    header: S,
                    isLargeModal: _,
                    stepProps: I
                } = function(e) {
                    let {
                        header: t,
                        isLargeModal: n,
                        ...i
                    } = e;
                    return {
                        header: t,
                        isLargeModal: n,
                        stepProps: i
                    }
                }(e), {
                    step: N,
                    stepConfigs: T,
                    setBodyNode: O,
                    setFooterNode: A,
                    setModalOverlayNode: C,
                    setReadySlideId: m
                } = (0, E.usePaymentContext)(), h = T.find(e => e.key === N);
                l.useEffect(() => {
                    C(null)
                }, [N, C]), s(null != h, "Unknown step for current payment flow.");
                let g = null !== (o = null == h ? void 0 : null === (t = h.options) || void 0 === t ? void 0 : t.hideSlider) && void 0 !== o && o,
                    R = null == h ? void 0 : null === (n = h.options) || void 0 === n ? void 0 : n.bodyClassName,
                    L = void 0 !== _ && _ ? f.sliderBodyLarge : null == h ? void 0 : null === (r = h.options) || void 0 === r ? void 0 : r.sliderBodyClassName;
                return (0, i.jsxs)(i.Fragment, {
                    children: [null === (d = null == h ? void 0 : null === (a = h.options) || void 0 === a ? void 0 : a.renderHeader) || void 0 === d || d ? S : null, h.renderStep(I), null == N || g ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(c.ModalContent, {
                            className: u(f.body, R),
                            children: (0, i.jsx)(c.Slides, {
                                activeSlide: N,
                                centered: !1,
                                onSlideReady: e => m(e),
                                children: T.filter(e => null != e.key).map(e => (0, i.jsx)(c.Slide, {
                                    id: e.key,
                                    children: (0, i.jsx)("form", {
                                        className: u(f.sliderBody, L),
                                        ref: e => O(e),
                                        onSubmit: e => e.preventDefault()
                                    })
                                }, e.key))
                            })
                        }), (0, i.jsx)("div", {
                            ref: e => A(e)
                        }), (0, i.jsx)("div", {
                            ref: e => C(e)
                        })]
                    })]
                })
            }

            function _(e) {
                let {
                    children: t
                } = e, {
                    bodyNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }

            function I(e) {
                let {
                    children: t
                } = e, {
                    footerNode: n
                } = (0, E.usePaymentContext)();
                return null == n ? null : d.createPortal(t, n)
            }
        },
        817963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useManageResourcePermissions: function() {
                    return _
                },
                getManageResourcePermissions: function() {
                    return I
                },
                useHasInventoryGuildSettingsPermission: function() {
                    return N
                }
            });
            var i = n("773670"),
                l = n("754013"),
                r = n("498225"),
                u = n("252931"),
                a = n("813006");
            n("923959");
            var s = n("957255"),
                o = n("697218");
            n("991170");
            var d = n("270161"),
                c = n("809924");
            let E = {
                    canCreateExpressions: !1,
                    canCreateGuildEvent: !1,
                    canManageAllExpressions: !1,
                    canManageAllEvents: !1,
                    canManageGuildExpression: () => !1,
                    canManageGuildEvent: () => !1
                },
                f = (e, t, n, i) => {
                    if (null == e) return !1;
                    if (n) return !0;
                    if ("creator_id" in e) return i && null != t && e.creator_id === t.id;
                    if ("userId" in e) return i && null != t && e.userId === t.id;
                    if ("user" in e) {
                        var l;
                        return i && null != t && (null === (l = e.user) || void 0 === l ? void 0 : l.id) === t.id
                    }
                    return !1
                },
                S = e => {
                    if (null == e) return [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS];
                    let t = d.CREATE_GUILD_EVENT_CORE_PERMISSIONS;
                    return e.isGuildStageVoice() ? t = d.CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS : e.isGuildVoice() && (t = d.CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS), [l.default.combine(t, c.Permissions.CREATE_EVENTS), l.default.combine(t, c.Permissions.MANAGE_EVENTS)]
                },
                _ = e => {
                    let [t, n] = e instanceof a.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : S(e), [l, u, d, _] = (0, r.useStateFromStoresArray)([s.default], () => [s.default.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e), s.default.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e), s.default.can(t, e), s.default.can(n, e)]), I = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()), N = i.useCallback(e => f(e, I, u, l), [l, u, I]), T = i.useCallback(e => f(e, I, _, d), [_, d, I]);
                    return null == e ? E : {
                        canCreateExpressions: l,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: u,
                        canManageAllEvents: _,
                        canManageGuildExpression: N,
                        canManageGuildEvent: T
                    }
                },
                I = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.default,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.default,
                        [i, l] = e instanceof a.default ? [c.Permissions.CREATE_EVENTS, c.Permissions.MANAGE_EVENTS] : S(e),
                        r = t.can(c.Permissions.CREATE_GUILD_EXPRESSIONS, e),
                        u = t.can(c.Permissions.MANAGE_GUILD_EXPRESSIONS, e),
                        d = t.can(i, e),
                        _ = t.can(l, e),
                        I = n.getCurrentUser();
                    return null == e ? E : {
                        canCreateExpressions: r,
                        canCreateGuildEvent: d,
                        canManageAllExpressions: u,
                        canManageAllEvents: _,
                        canManageGuildExpression: e => f(e, I, u, r),
                        canManageGuildEvent: e => f(e, I, _, d)
                    }
                },
                N = e => {
                    let t = (0, r.useStateFromStores)([s.default], () => s.default.can(c.Permissions.MANAGE_GUILD, e)),
                        {
                            showSettingsToggle: n
                        } = (0, u.useInventoryGuildSettingsExperiment)({
                            guildId: null == e ? void 0 : e.id
                        });
                    return t && n
                }
        },
        716849: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return S
                },
                maybeFetchPremiumLikelihood: function() {
                    return I
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return N
                }
            });
            var i = n("773670"),
                l = n("744196"),
                r = n("990746"),
                u = n("913144"),
                a = n("775433"),
                s = n("697218"),
                o = n("10514"),
                d = n("764364"),
                c = n("676572"),
                E = n("646718"),
                f = n("49111");
            let S = "nonSubscriber";
            async function _() {
                try {
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await r.default.get({
                        url: f.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [S]: e.non_subscriber,
                                [E.PremiumSubscriptionSKUs.TIER_0]: e[E.PremiumSubscriptionSKUs.TIER_0],
                                [E.PremiumSubscriptionSKUs.TIER_2]: e[E.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : u.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), i = c.default.shouldFetchPremiumLikelihood(), l = s.default.getCurrentUser();
                T(l, i, t, n)
            }

            function N(e) {
                let {
                    enabled: t,
                    useExpectedValue: n
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), r = (0, l.default)([c.default], () => c.default.shouldFetchPremiumLikelihood()), u = (0, l.default)([s.default], () => s.default.getCurrentUser());
                i.useEffect(() => {
                    T(u, r, t, n)
                }, [u, r, t, n])
            }

            function T(e, t, n, i) {
                null != e && !(0, d.isPremium)(e) && n && (t && _(), i && (!o.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_0) && !o.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_0) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_0), !o.default.isLoadedForSKU(E.PremiumSubscriptionSKUs.TIER_2) && !o.default.isFetchingForSKU(E.PremiumSubscriptionSKUs.TIER_2) && (0, a.fetchSubscriptionPlansForSKU)(E.PremiumSubscriptionSKUs.TIER_2)))
            }
        },
        676572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("498225"),
                l = n("913144");
            let r = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                u = r;
            class a extends i.default.Store {
                initialize() {
                    u = r
                }
                getState() {
                    return u
                }
                shouldFetchPremiumLikelihood() {
                    return !u.isFetching && !u.fetched
                }
            }
            a.displayName = "UserPremiumLikelihoodStore";
            var s = new a(l.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    u.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    u.premiumLikelihood = t, u.fetched = !0, u.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    u.isFetching = !1
                },
                LOGOUT: function() {
                    u.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
            var r = l
        },
        664113: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("77078"),
                u = n("460029"),
                a = n("129722"),
                s = n("723961"),
                o = n("782340"),
                d = n("712695"),
                c = l.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: l = !1,
                        onChange: c
                    } = e, {
                        file: E
                    } = (0, a.useAudioTrimmerStore)();
                    return (0, i.jsx)(r.FormSection, {
                        className: d.section,
                        title: o.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_PREVIEW,
                        children: (0, i.jsxs)("div", {
                            className: d.fakeInput,
                            children: [null != t && (0, i.jsx)(s.default, {
                                sound: t,
                                volume: n,
                                disabled: l
                            }), null == t && null != E && (0, i.jsx)(u.default, {
                                className: d.audioTrimmer,
                                volume: n,
                                disabled: l,
                                onChange: c
                            })]
                        })
                    })
                })
        },
        460029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                u = n.n(r),
                a = n("77078"),
                s = n("132755"),
                o = n("78404"),
                d = n("812809"),
                c = n("129722"),
                E = n("278175"),
                f = n("859971"),
                S = n("846325"),
                _ = n("12310");
            let I = {
                startPositionMs: 0,
                endPositionMs: 2e4,
                playheadPositionMs: 0
            };
            var N = l.memo(function(e) {
                var t;
                let {
                    className: n,
                    volume: r,
                    disabled: N = !1,
                    onChange: T
                } = e, {
                    audio: O
                } = (0, c.useAudioTrimmerStore)(), [A, C] = l.useState(!1), [m, h] = l.useState(I), {
                    playheadPositionMs: g,
                    endPositionMs: R,
                    startPositionMs: L
                } = m, p = null != O, U = R - L, D = U > 1e3 * S.MAX_SOUND_LENGTH_SECONDS;
                l.useEffect(() => {
                    null != O && h({
                        playheadPositionMs: 0,
                        endPositionMs: 1e3 * O.duration,
                        startPositionMs: 0
                    })
                }, [O]);
                let P = l.useCallback(e => {
                        null != O && (O.pause(), null != e && (O.currentTime = e), C(!1))
                    }, [O]),
                    v = l.useCallback(() => {
                        if (null != O) {
                            if (A) {
                                P();
                                return
                            }
                            g >= R ? O.currentTime = (0, f.toSeconds)(L) : O.currentTime = (0, f.toSeconds)(g), O.volume = (0, d.default)(r), O.play(), C(!0)
                        }
                    }, [O, R, P, g, A, L, r]),
                    M = l.useCallback(e => {
                        h(e), null == T || T({
                            startMs: e.startPositionMs,
                            endMs: e.endPositionMs
                        })
                    }, [T]),
                    G = l.useCallback(e => {
                        null != O && (O.currentTime = e)
                    }, [O]);
                return (0, i.jsxs)("div", {
                    className: u(_.container, {
                        [_.initialized]: p,
                        [_.disabled]: !p || N
                    }, n),
                    children: [(0, i.jsxs)("div", {
                        className: _.playButtonContainer,
                        children: [(0, i.jsx)(a.Clickable, {
                            className: _.playButton,
                            onClick: p ? v : void 0,
                            children: A ? (0, i.jsx)(o.default, {
                                className: _.playButtonIcon
                            }) : (0, i.jsx)(s.default, {
                                className: _.playButtonIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: _.durationContainer,
                            children: (0, i.jsx)(a.Text, {
                                className: _.duration,
                                variant: "text-xs/normal",
                                color: D ? "text-warning" : "text-positive",
                                children: (t = U, "".concat((0, f.toSeconds)(t).toFixed(2), "s"))
                            })
                        })]
                    }), (0, i.jsx)(E.default, {
                        playing: A,
                        onPlaybackChange: G,
                        onPausePlayback: P,
                        onChangePosition: M,
                        disabled: N
                    })]
                })
            })
        },
        89050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                defaultWaveformConfig: function() {
                    return i
                },
                getWaveformId: function() {
                    return l
                },
                getAudioFileId: function() {
                    return r
                },
                SUPPORTED_AUDIO_FILE_TYPES: function() {
                    return u
                }
            });
            let i = {
                    waveformBlockWidth: 2,
                    waveformBarWidth: .5,
                    fineTuningDelay: 500,
                    fineTuningScale: 10,
                    loudnessThreshold: .3
                },
                l = (e, t) => {
                    let n = "".concat(e[0], "-").concat(e[e.length - 1], "-").concat(e.byteLength);
                    return "".concat(n, "-").concat(JSON.stringify(t))
                },
                r = e => "".concat(e.name, "-").concat(e.size, "-").concat(e.lastModified),
                u = new Set(["audio/mpeg", "audio/mp3", "audio/wav", "audio/x-wav", "audio/ogg", "video/mp4"])
        },
        129722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioTrimmerStore: function() {
                    return a
                }
            });
            var i = n("710835"),
                l = n("47370"),
                r = n("859971");
            let u = (0, i.default)(e => ({
                audio: null,
                file: null,
                loading: !1,
                loadAudioFromFile: async t => {
                    if (e({
                            file: t,
                            audio: null,
                            loading: null != t
                        }), null == t) return;
                    let n = await (0, r.loadAudioFromFile)(t);
                    null != n && e({
                        audio: n,
                        loading: !1
                    })
                },
                maxVolume: 1,
                setMaxVolume: t => {
                    e({
                        maxVolume: t
                    })
                }
            }));

            function a() {
                return u(e => ({
                    audio: e.audio,
                    file: e.file,
                    loading: e.loading,
                    loadAudioFromFile: e.loadAudioFromFile,
                    maxVolume: e.maxVolume,
                    setMaxVolume: e.setMaxVolume
                }), l.default)
            }
        },
        278175: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i, l, r = n("920040"),
                u = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("461380"),
                d = n("129722"),
                c = n("859971"),
                E = n("184692"),
                f = n("89050"),
                S = n("785799");
            (i = l || (l = {}))[i.START = 0] = "START", i[i.PLAYHEAD = 1] = "PLAYHEAD", i[i.END = 2] = "END";
            var _ = u.memo(function(e) {
                let {
                    playing: t,
                    onPausePlayback: n,
                    onPlaybackChange: i,
                    onChangePosition: a,
                    disabled: _ = !1
                } = e, I = {
                    ...f.defaultWaveformConfig
                }, {
                    audio: N
                } = (0, d.useAudioTrimmerStore)(), T = null != N, O = u.useRef(null), A = u.useRef(null), C = u.useRef(null), [m, h] = u.useState(0), [g, R] = u.useState(0), [L, p] = u.useState(0), [U, D] = u.useState(!1), [P, v] = u.useState(!1), [M, G] = u.useState(!1), [F, w] = u.useState(0), [y, B] = u.useState(-1), b = u.useMemo(() => F / I.fineTuningScale, [I.fineTuningScale, F]);
                u.useEffect(() => {
                    if (null == N) return;
                    let e = 1e3 * N.duration;
                    h(0), R(0), p(e), w(e)
                }, [N]);
                let x = u.useCallback((e, t) => {
                        if (n(), 0 === e.button) switch (t) {
                            case l.START:
                                D(!0);
                                break;
                            case l.PLAYHEAD:
                                v(!0);
                                break;
                            case l.END:
                                G(!0)
                        }
                    }, [n]),
                    V = u.useCallback(e => {
                        switch (e) {
                            case l.START:
                                D(!1);
                                break;
                            case l.PLAYHEAD:
                                v(!1);
                                break;
                            case l.END:
                                G(!1)
                        }
                        B(-1)
                    }, []),
                    k = u.useCallback(e => {
                        if (null == N || !U) return;
                        let t = parseInt(e.target.value),
                            n = t > L ? L : t;
                        i((0, c.toSeconds)(n)), h(n), R(n)
                    }, [N, i, L, U]),
                    H = u.useCallback(e => {
                        if (null == N || !P) return;
                        let t = parseInt(e.target.value);
                        t < m ? (i((0, c.toSeconds)(m)), R(m)) : t > L ? (i((0, c.toSeconds)(L)), R(L)) : (i((0, c.toSeconds)(t)), R(t))
                    }, [N, i, L, P, m]),
                    K = u.useCallback(e => {
                        if (null == N || !M) return;
                        let t = parseInt(e.target.value),
                            n = t > m ? t : m;
                        i((0, c.toSeconds)(m)), R(m), p(n)
                    }, [N, i, M, m]);
                return u.useEffect(() => {
                    null != a && T && a({
                        startPositionMs: m,
                        endPositionMs: L,
                        playheadPositionMs: g
                    })
                }, [m, L, a, T, g]), u.useEffect(() => {
                    let e;
                    if (null != N) return t && (e = setInterval(() => {
                        N.currentTime < (0, c.toSeconds)(L) ? N.currentTime >= (0, c.toSeconds)(g) && R(1e3 * N.currentTime) : (n((0, c.toSeconds)(m)), R(m))
                    }, 16)), () => {
                        clearInterval(e)
                    }
                }, [N, L, n, g, t, m]), u.useEffect(() => {
                    if (I.fineTuningDelay <= 0) return;
                    let e = setTimeout(() => {
                        U && m == m && -1 === y ? B(m) : M && L == L && -1 === y ? B(L) : P && g == g && -1 === y && B(g)
                    }, I.fineTuningDelay);
                    return () => {
                        clearTimeout(e)
                    }
                }, [I.fineTuningDelay, M, L, y, P, g, U, m]), (0, r.jsxs)("div", {
                    className: s(S.timeline, {
                        [S.initialized]: T
                    }),
                    children: [(0, r.jsxs)("div", {
                        className: S.rangeHandleContainer,
                        children: [(0, r.jsxs)("div", {
                            className: S.rangeHandleFrame,
                            children: [(0, r.jsx)("input", {
                                ref: O,
                                className: s(S.rangeHandle, S.rangeHandleStart),
                                type: "range",
                                min: (0, c.getMinValue)(y, b, F),
                                max: (0, c.getMaxValue)(y, b, F),
                                value: m,
                                onChange: k,
                                onMouseDown: e => x(e, l.START),
                                onMouseUp: () => V(l.START),
                                disabled: !T || _
                            }), (0, r.jsx)("input", {
                                ref: C,
                                className: s(S.rangeHandle, S.rangeHandleEnd),
                                type: "range",
                                min: (0, c.getMinValue)(y, b, F),
                                max: (0, c.getMaxValue)(y, b, F),
                                value: L,
                                onChange: K,
                                onMouseDown: e => x(e, l.END),
                                onMouseUp: () => V(l.END),
                                disabled: !T || _
                            })]
                        }), (0, r.jsx)("div", {
                            className: S.handlePlayheadTrack,
                            children: (0, r.jsx)("input", {
                                ref: A,
                                className: s(S.rangeHandle, S.rangeHandlePlayhead),
                                type: "range",
                                min: (0, c.getMinValue)(y, b, F),
                                max: (0, c.getMaxValue)(y, b, F),
                                value: g,
                                onChange: H,
                                onMouseDown: e => x(e, l.PLAYHEAD),
                                onMouseUp: () => V(l.PLAYHEAD),
                                disabled: !T || _
                            })
                        })]
                    }), (0, r.jsxs)("div", {
                        className: S.handleContainer,
                        children: [(0, r.jsxs)("div", {
                            className: s(S.handleFrame, {
                                [S.startDragging]: U,
                                [S.endDragging]: M
                            }),
                            style: {
                                left: "".concat((0, c.getStartHandleValue)(m, y, b, F), "%"),
                                right: "".concat((0, c.getEndHandleValue)(L, y, b, F), "%")
                            },
                            children: [(0, r.jsx)("div", {
                                className: s(S.handleIconFrame, S.handleIconFrameStart),
                                children: (0, r.jsx)("div", {
                                    className: s(S.handleIconContainer, S.start),
                                    children: (0, r.jsx)(o.default, {
                                        direction: o.default.Directions.RIGHT,
                                        className: S.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            }), (0, r.jsx)("div", {
                                className: s(S.handleIconFrame, S.handleIconFrameEnd),
                                children: (0, r.jsx)("div", {
                                    className: s(S.handleIconContainer, S.end),
                                    children: (0, r.jsx)(o.default, {
                                        direction: o.default.Directions.LEFT,
                                        className: S.handleIcon,
                                        width: 16,
                                        height: 16
                                    })
                                })
                            })]
                        }), (0, r.jsx)("div", {
                            className: S.playheadTrack,
                            children: (0, r.jsx)("div", {
                                className: s(S.playhead, {
                                    [S.dragging]: P || U || M || t
                                }),
                                style: {
                                    left: "".concat((0, c.getStartHandleValue)(g, y, b, F), "%")
                                }
                            })
                        })]
                    }), (0, r.jsx)("div", {
                        className: S.waveformContainer,
                        children: (0, r.jsx)(E.default, {
                            fineTuning: y,
                            fineTuningResolution: b,
                            duration: F
                        })
                    })]
                })
            })
        },
        859971: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getMinValue: function() {
                    return r
                },
                toSeconds: function() {
                    return u
                },
                getMaxValue: function() {
                    return a
                },
                getStartHandleValue: function() {
                    return s
                },
                getEndHandleValue: function() {
                    return o
                },
                loadAudioFromFile: function() {
                    return d
                },
                loadAudioFileFromUrl: function() {
                    return c
                }
            });
            var i = n("89050"),
                l = n("782340");
            let r = (e, t, n) => -1 === e ? 0 : e - t * e / n;

            function u(e) {
                return e / 1e3
            }
            let a = (e, t, n) => -1 === e ? n : e + t * (n - e) / n,
                s = (e, t, n, i) => {
                    let l = 0;
                    return (l = t >= 0 && n > 0 ? (e - (t - n * t / i)) * 100 / n : 100 * e / i).toFixed(4)
                },
                o = (e, t, n, i) => {
                    let l = 0;
                    return (l = t >= 0 && n > 0 ? -((e - (t + n * (i - t) / i)) * 100) / n : -100 * e / i + 100).toFixed(4)
                };
            async function d(e) {
                var t;
                if (!(e.type.startsWith("audio") || e.type.startsWith("video")) || !i.SUPPORTED_AUDIO_FILE_TYPES.has(e.type)) throw Error(l.default.Messages.SOUNDBOARD_ERROR_INVALID_FILE_TYPE.format({
                    fileType: e.type
                }));
                let n = URL.createObjectURL(e),
                    r = new Audio(n);
                return await (t = r, new Promise(e => {
                    let n = () => {
                        e(), t.removeEventListener("canplaythrough", n)
                    };
                    t.addEventListener("canplaythrough", n), t.load()
                })), r
            }
            async function c(e, t) {
                let n = await fetch(e),
                    i = await n.blob();
                return new File([i], t, {
                    type: "audio/mp3"
                })
            }
        },
        102432: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getDataUrlFromFile: function() {
                    return o
                },
                uploadFileReadPromise: function() {
                    return d
                },
                trimAndEncodeAudio: function() {
                    return E
                }
            });
            var i = n("161179"),
                l = n.n(i),
                r = n("305122"),
                u = n("108391");
            let a = new AudioContext({
                sampleRate: Math.min(new AudioContext().sampleRate, 48e3)
            });
            async function s(e) {
                let t = await e.arrayBuffer(),
                    n = t instanceof ArrayBuffer;
                if (!n) throw Error("Unexpected file type");
                return a.decodeAudioData(t)
            }
            async function o(e) {
                var t;
                let n = await (t = t => {
                    t.readAsDataURL(e)
                }, new Promise((e, n) => {
                    let i = new FileReader,
                        l = () => {
                            i.removeEventListener("load", l), i.removeEventListener("error", n), e(i.result)
                        };
                    i.addEventListener("load", l), i.addEventListener("error", n), t(i)
                }));
                if ("string" != typeof n) throw Error("Unexpected file type");
                return n
            }
            async function d(e) {
                let {
                    readPromise: t,
                    guildId: n,
                    name: i,
                    volume: l,
                    emojiId: u,
                    emojiName: a
                } = e;
                return (0, r.uploadSound)({
                    guildId: n,
                    name: i,
                    sound: await t,
                    volume: l,
                    emojiId: u,
                    emojiName: a
                })
            }
            async function c(e) {
                let t = [],
                    n = function(e) {
                        let {
                            numberOfChannels: t
                        } = e, n = [];
                        for (let i = 0; i < t; i++) n.push(e.getChannelData(i));
                        return n
                    }(e),
                    i = function(e) {
                        if (1 === e.length) return e[0];
                        if (2 === e.length) {
                            let t = e[0],
                                n = e[1],
                                i = [];
                            for (let e = 0; e < t.length; e++) i.push(t[e]), i.push(n[e]);
                            let l = new Float32Array(i.length);
                            return l.set(i), l
                        }
                        throw Error("Only handles up to 2 channels")
                    }(n),
                    r = new AudioData({
                        format: "f32",
                        sampleRate: e.sampleRate,
                        numberOfFrames: e.length,
                        numberOfChannels: e.numberOfChannels,
                        timestamp: 1e6 * e.duration,
                        data: i
                    }),
                    a = new AudioEncoder({
                        output: function(n) {
                            l(null != n.duration, "Chunk duration must not be null");
                            let i = n.duration / 1e6 * e.sampleRate,
                                r = new Uint8Array(n.byteLength);
                            n.copyTo(r), t.push({
                                buffer: r,
                                numSamples: i
                            })
                        },
                        error: e => {
                            throw Error("Audio encoding error: ".concat(e.message))
                        }
                    });
                a.configure({
                    codec: "opus",
                    sampleRate: e.sampleRate,
                    numberOfChannels: e.numberOfChannels
                }), a.encode(r), await a.flush();
                let s = (0, u.default)(t, {
                    channelCount: e.numberOfChannels,
                    inputSampleRate: e.sampleRate,
                    outputGain: 0,
                    channelMappingFamily: 0
                });
                return new Blob([s], {
                    type: "audio/ogg"
                })
            }
            async function E(e, t) {
                let n = await s(e),
                    i = function(e, t) {
                        let {
                            startMs: n,
                            endMs: i
                        } = t, {
                            sampleRate: l,
                            numberOfChannels: r,
                            duration: u
                        } = e, s = 1e3 * u, o = Math.min(i, s);
                        if (0 === n && o === s) return e;
                        let d = Math.floor(n / s * e.length),
                            c = Math.floor(o / s * e.length),
                            E = a.createBuffer(r, c - d, l);
                        for (let t = 0; t < r; t++) {
                            let n = E.getChannelData(t),
                                i = e.getChannelData(t),
                                l = 0;
                            for (let e = d; e <= c; e++) n[l] = i[e], l++
                        }
                        return E
                    }(n, t),
                    l = await c(i);
                return new File([l], "sound.ogg", {
                    type: "audio/ogg"
                })
            }
        },
        184692: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("129722"),
                u = n("477633"),
                a = l.memo(function(e) {
                    let {
                        fineTuning: t,
                        fineTuningResolution: n,
                        duration: l
                    } = e, {
                        file: a,
                        audio: s
                    } = (0, r.useAudioTrimmerStore)();
                    return (0, i.jsx)(u.default, {
                        file: a,
                        audio: s,
                        waveformSettings: {
                            fineTuning: t,
                            fineTuningResolution: n,
                            duration: l
                        }
                    })
                })
        },
        477633: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                u = n.n(r),
                a = n("427964"),
                s = n("819855"),
                o = n("77078"),
                d = n("841098"),
                c = n("449918"),
                E = n("302185"),
                f = n("89050"),
                S = n("809924"),
                _ = n("83924"),
                I = l.memo(function(e) {
                    let {
                        file: t,
                        audio: n,
                        className: r,
                        waveformSettings: I
                    } = e, [N, T] = l.useState({
                        width: 0,
                        height: 0
                    }), O = l.useRef(null), A = l.useMemo(() => {
                        var e;
                        let t = null !== (e = null == n ? void 0 : n.duration) && void 0 !== e ? e : 1;
                        return {
                            fineTuning: -1,
                            fineTuningResolution: t / f.defaultWaveformConfig.fineTuningScale,
                            duration: t,
                            ...null != I ? I : {}
                        }
                    }, [n, I]), C = (0, E.useAudioBufferData)(t), m = (0, E.useAudioWaveformData)(C, O.current, A), h = (0, d.default)(), g = (0, c.useColorValue)((0, s.isThemeDark)(h) ? S.Color.PRIMARY_300 : S.Color.PRIMARY_700), R = null == C || null == m, L = 0 === N.width || 0 === N.height, p = (L || R) && null != t, U = l.useCallback(() => {
                        null != O.current && T({
                            width: O.current.offsetWidth,
                            height: O.current.offsetHeight
                        })
                    }, []);
                    return l.useEffect(() => {
                        if (null != O.current) {
                            let e = new ResizeObserver((0, a.debounce)(U, 50));
                            return e.observe(O.current), () => {
                                e.disconnect()
                            }
                        }
                    }, [U]), l.useEffect(() => {
                        if (null == O.current) return;
                        let e = O.current,
                            t = e.getContext("2d");
                        if (null == t) return;
                        let {
                            width: n,
                            height: i
                        } = e;
                        if (0 !== N.width && 0 !== N.height && null != m && m.length > 0) {
                            let e = n / m.length,
                                l = -(e * (f.defaultWaveformConfig.waveformBarWidth - 1));
                            t.clearRect(0, 0, n, i), t.fillStyle = g.hex;
                            for (let n = 0; n < m.length; n++) {
                                let r = m[n] * i,
                                    u = n * e + l,
                                    a = i / 2 - r / 2;
                                t.fillRect(u, a, e - l, r)
                            }
                        }
                    }, [g, N, h, m]), (0, i.jsxs)("div", {
                        className: u(_.container, r),
                        children: [(0, i.jsx)("canvas", {
                            className: _.waveformCanvas,
                            ref: O,
                            width: 4 * N.width,
                            height: 4 * N.height
                        }), p && (0, i.jsx)("div", {
                            className: _.loading,
                            children: (0, i.jsx)(o.Spinner, {
                                type: o.SpinnerTypes.SPINNING_CIRCLE
                            })
                        })]
                    })
                })
        },
        302185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useAudioBufferData: function() {
                    return d
                },
                useAudioWaveformData: function() {
                    return E
                }
            });
            var i = n("773670"),
                l = n("462567"),
                r = n("129722"),
                u = n("89050");
            let a = new Worker(new URL(n.p + n.u("21401"), n.b)),
                s = new AudioContext;
            async function o(e) {
                let t = await e.arrayBuffer(),
                    n = await s.decodeAudioData(t);
                return n.getChannelData(0)
            }

            function d(e) {
                let [t, n] = i.useState(null), [l, r] = i.useState(null);
                return i.useEffect(() => {
                    if (null == e) return;
                    let t = (0, u.getAudioFileId)(e);
                    t !== l && (r(t), n(null), o(e).then(n))
                }, [l, e]), t
            }
            let c = {
                ...u.defaultWaveformConfig
            };

            function E(e, t, n) {
                let [s, o] = i.useState(null), [d, E] = i.useState(null), [f, S] = i.useState(1), {
                    setMaxVolume: _
                } = (0, r.useAudioTrimmerStore)(), I = i.useCallback((e, t) => {
                    var i, r, u, s, o;
                    E(null), (i = e, r = t.offsetWidth, u = n, s = c, o = S, new Promise(e => {
                        let t = (0, l.v4)(),
                            n = i => {
                                let {
                                    data: {
                                        waveform: l,
                                        id: r,
                                        normalizedVolumeMultipler: u
                                    }
                                } = i;
                                t === r && (e(l), o(u)), null == a || a.removeEventListener("message", n)
                            };
                        null == a || a.addEventListener("message", n), null == a || a.postMessage({
                            id: t,
                            options: u,
                            config: s,
                            width: r,
                            rawBufferData: i
                        })
                    })).then(E)
                }, [n]);
                return i.useEffect(() => {
                    if (null == e || null == t) return;
                    let i = (0, u.getWaveformId)(e, n);
                    s !== i && (o(i), I(e, t))
                }, [e, I, t, n, s]), i.useEffect(() => {
                    _(f)
                }, [f, _]), d
            }
        },
        723961: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("77078"),
                u = n("132755"),
                a = n("78404"),
                s = n("520497"),
                o = n("812809"),
                d = n("129722"),
                c = n("859971"),
                E = n("477633"),
                f = n("782340"),
                S = n("464818"),
                _ = l.memo(function(e) {
                    let {
                        sound: t,
                        volume: n,
                        disabled: _
                    } = e, [I, N] = l.useState(!1), T = l.useRef(null), {
                        file: O,
                        audio: A,
                        loadAudioFromFile: C
                    } = (0, d.useAudioTrimmerStore)(), m = l.useMemo(() => (0, s.default)(t.soundId), [t]);
                    return l.useEffect(() => {
                        null == T.current && (T.current = (0, c.loadAudioFileFromUrl)(m, t.name).then(C))
                    }, [m, C, t.name]), (0, i.jsxs)("div", {
                        className: S.previewContainer,
                        children: [(0, i.jsx)(r.Clickable, {
                            onClick: _ ? void 0 : function() {
                                null != A && (A.paused ? (A.volume = (0, o.default)(n), A.currentTime = 0, A.play(), N(!0), A.addEventListener("ended", () => N(!1), {
                                    once: !0
                                })) : (A.pause(), N(!1)))
                            },
                            className: S.playButton,
                            "aria-label": I ? f.default.Messages.STOP : f.default.Messages.PLAY,
                            children: I ? (0, i.jsx)(a.default, {
                                className: S.playIcon
                            }) : (0, i.jsx)(u.default, {
                                className: S.playIcon
                            })
                        }), (0, i.jsx)("div", {
                            className: S.waveformContainer,
                            children: (0, i.jsx)(E.default, {
                                className: S.waveform,
                                file: O,
                                audio: A
                            })
                        })]
                    })
                })
        },
        108391: function(e, t, n) {
            "use strict";
            var i, l, r, u;
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            (r = i || (i = {}))[r.NONE = 0] = "NONE", r[r.CONTINUATION = 1] = "CONTINUATION", r[r.BEGINNING_OF_STREAM = 2] = "BEGINNING_OF_STREAM", r[r.END_OF_STREAM = 4] = "END_OF_STREAM";
            class a {
                appendBytes(e) {
                    if (this._offset + e.length > this._buffer.length) {
                        let t = this._offset + e.length,
                            n = Math.pow(2, Math.ceil(Math.log2(Math.max(2 * this._buffer.length, t)))),
                            i = new Uint8Array(n);
                        i.set(this._buffer.subarray(0, this._offset)), this._buffer = i
                    }
                    this._buffer.set(e, this._offset), this._offset += e.length
                }
                addPage(e) {
                    if (e.segments.length > 255) throw Error("Too many segments: ".concat(e.segments.length, " exceeds limit of ").concat(255));
                    for (let [t, n] of e.segments.entries())
                        if (n.length > 255) throw Error("Segment at index ".concat(t, " too large (length ").concat(n.length, " exceeds ").concat(255, ")"));
                    let t = e.segments.reduce((e, t) => e + t.length, 0),
                        n = 27 + e.segments.length + t;
                    if (n > 65307) throw Error("Page too large (size ".concat(n, " exceeds ").concat(65307, ")"));
                    let l = this._offset,
                        r = 0;
                    switch (e.pageType) {
                        case i.CONTINUATION:
                            r = 1;
                            break;
                        case i.BEGINNING_OF_STREAM:
                            r = 2;
                            break;
                        case i.END_OF_STREAM:
                            r = 4
                    }
                    this.appendBytes([79, 103, 103, 83, 0, r, 255 & e.granulePosition, e.granulePosition >> 8 & 255, e.granulePosition >> 16 & 255, e.granulePosition >> 24 & 255, 0, 0, 0, 0, 0, 0, 0, 1, 255 & this._pageSequenceNumber, this._pageSequenceNumber >> 8 & 255, this._pageSequenceNumber >> 16 & 255, this._pageSequenceNumber >> 24 & 255]);
                    let u = this._offset;
                    for (let t of (this.appendBytes([0, 0, 0, 0, e.segments.length]), this.appendBytes(e.segments.map(e => e.length)), e.segments)) this.appendBytes(t);
                    let a = function(e) {
                        return e.reduce((e, t) => e << 8 >>> 0 ^ o[e >>> 24 ^ t], 0) >>> 0
                    }(this._buffer.subarray(l, this._offset));
                    this._buffer.set([255 & a, a >> 8 & 255, a >> 16 & 255, a >> 24 & 255], u), this._pageSequenceNumber++
                }
                finalize(e) {
                    this.addPage({
                        pageType: i.END_OF_STREAM,
                        granulePosition: e,
                        segments: []
                    });
                    let t = this._buffer,
                        n = this._offset;
                    return this._buffer = new Uint8Array(4096), this._offset = 0, this._pageSequenceNumber = 0, t.subarray(0, n)
                }
                constructor() {
                    this._buffer = new Uint8Array(4096), this._pageSequenceNumber = 0, this._offset = 0
                }
            }

            function s(e, t) {
                let n = new Uint8Array([79, 112, 117, 115, 72, 101, 97, 100, 1, t.channelCount, 0, 15, 255 & t.inputSampleRate, t.inputSampleRate >> 8 & 255, t.inputSampleRate >> 16 & 255, t.inputSampleRate >> 24 & 255, 255 & t.outputGain, t.outputGain >> 8 & 255, t.channelMappingFamily]),
                    l = new Uint8Array([79, 112, 117, 115, 84, 97, 103, 115, 0, 0, 0, 0, 0, 0, 0, 0]),
                    r = new a;
                r.addPage({
                    pageType: i.BEGINNING_OF_STREAM,
                    granulePosition: 0,
                    segments: [n]
                });
                let u = 0;
                for (let t of (r.addPage({
                        pageType: i.NONE,
                        granulePosition: u,
                        segments: [l]
                    }), e)) {
                    let e = function(e) {
                        let t = Math.floor(e.length / 255),
                            n = [];
                        for (let i = 0; i <= t; i++) {
                            let l = 0 === i ? 0 : 255 * i,
                                r = i === t ? e.length : (i + 1) * 255;
                            n.push(e.slice(l, r))
                        }
                        return n
                    }(t.buffer);
                    u += t.numSamples, r.addPage({
                        pageType: i.NONE,
                        granulePosition: u,
                        segments: e
                    })
                }
                return r.finalize(u)
            }(u = l || (l = {}))[u.ZERO = 0] = "ZERO";
            let o = function() {
                let e = new Uint32Array(256);
                for (let t = 256; t > 0; t--) {
                    let n = t << 24;
                    for (let e = 8; e > 0; e--) n = 2147483648 & n ? 79764919 ^ n << 1 : n << 1;
                    e[t] = n
                }
                return e
            }()
        },
        823749: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            });
            var i, l, r = n("920040"),
                u = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("161179"),
                d = n.n(o),
                c = n("77078"),
                E = n("599417"),
                f = n("208548"),
                S = n("866974"),
                _ = n("599110"),
                I = n("305122"),
                N = n("664113"),
                T = n("129722"),
                O = n("102432"),
                A = n("876189"),
                C = n("846325"),
                m = n("49111"),
                h = n("782340"),
                g = n("521712");
            (i = l || (l = {})).READY = "ready", i.ENCODING_FAILED = "encoding-failed", i.ENCODING = "encoding", i.UPLOADING = "uploading";
            let R = [{
                name: "audio",
                extensions: ["mp3", "wav", "ogg", "x-wav", "mp4"]
            }];

            function L(e) {
                var t, n, i, a;
                let {
                    guildId: o,
                    sourceFile: L,
                    existingSound: p,
                    onClose: U,
                    transitionState: D,
                    showGuildPicker: P = !1
                } = e, [v, M] = u.useState(null !== (n = null !== (t = null == L ? void 0 : L.name) && void 0 !== t ? t : null == p ? void 0 : p.name) && void 0 !== n ? n : ""), [G, F] = u.useState(null !== (i = null == p ? void 0 : p.volume) && void 0 !== i ? i : 1), [w, y] = u.useState(null == p ? void 0 : p.emojiId), [B, b] = u.useState(null == p ? void 0 : p.emojiName), {
                    file: x,
                    loadAudioFromFile: V,
                    maxVolume: k,
                    setMaxVolume: H
                } = (0, T.useAudioTrimmerStore)(), [K, W] = u.useState(!1), [j, Y] = u.useState(null), [Z, Q] = u.useState(null), [q, J] = u.useState(l.READY), [z, X] = u.useState(o);
                async function $(e) {
                    try {
                        await V(null != e ? e : null), J(l.READY), Y(null)
                    } catch (e) {
                        ee(e)
                    }
                }

                function ee(e) {
                    if (e instanceof E.default) Y(e);
                    else if (e instanceof Error) {
                        let t = {
                            status: 500,
                            body: {
                                message: e.message
                            }
                        };
                        Y(new E.default(t))
                    } else Y(new E.default(e))
                }
                u.useEffect(() => {
                    async function e(e) {
                        try {
                            await V(e), J(l.READY), Y(null)
                        } catch (e) {
                            ee(e)
                        }
                    }(null == L ? void 0 : L.file) != null && e(L.file)
                }, [null == L ? void 0 : L.file, V]);
                let et = function(e) {
                        switch (e) {
                            case l.ENCODING:
                                return h.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING;
                            case l.ENCODING_FAILED:
                                return h.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_ENCODING_FAILED;
                            case l.UPLOADING:
                                return h.default.Messages.SOUNDBOARD_MODAL_AUDIO_STATE_UPLOADING
                        }
                        return null
                    }(q),
                    en = q === l.UPLOADING || q === l.ENCODING,
                    ei = null != p,
                    el = v.length >= 2 && (ei || null != x) && null != z && function(e) {
                        if (null == e) return !0;
                        let t = (e.endMs - e.startMs) / 1e3;
                        return t > 0 && t <= C.MAX_SOUND_LENGTH_SECONDS
                    }(Z),
                    er = u.useCallback(async (e, t) => {
                        J(l.ENCODING);
                        try {
                            let n = await (0, O.trimAndEncodeAudio)(e, t);
                            return J(l.READY), n
                        } catch (e) {
                            throw J(l.ENCODING_FAILED), e
                        }
                    }, []),
                    eu = u.useCallback(async () => {
                        if (null == x) return;
                        d(null != z, "Cannot submit soundboard sound with no guildId");
                        let e = x;
                        if (null != Z) {
                            let t = await er(x, Z);
                            if (null == t) return;
                            e = t
                        }
                        let t = (0, O.getDataUrlFromFile)(e);
                        J(l.UPLOADING);
                        try {
                            await (0, O.uploadFileReadPromise)({
                                readPromise: t,
                                guildId: z,
                                name: v,
                                volume: G,
                                emojiId: w,
                                emojiName: B
                            }), J(l.READY)
                        } catch (e) {
                            throw new E.default(e)
                        }
                    }, [x, z, v, er, Z, G, w, B]),
                    ea = u.useCallback(async () => {
                        d(null != z, "Cannot submit soundboard sound with no guildId"), W(!0), Y(null);
                        try {
                            ei ? await (0, I.updateSound)({
                                guildId: z,
                                soundId: p.soundId,
                                name: v,
                                volume: G,
                                emojiId: w,
                                emojiName: B
                            }) : await eu(), U()
                        } catch (e) {
                            ee(e)
                        } finally {
                            J(l.READY), W(!1), F(1), H(1)
                        }
                    }, [ei, U, z, p, v, G, w, B, eu, H]);
                u.useEffect(() => {
                    V(null), _.default.track(m.AnalyticEvents.OPEN_MODAL, {
                        type: "Soundboard Upload Sound",
                        guild_id: z
                    })
                }, []), u.useEffect(() => {
                    F(Math.min(G, k))
                }, [G, F, k]);
                let es = (0, r.jsx)(f.default, {
                    guildId: z,
                    emojiId: w,
                    emojiName: B,
                    setEmojiId: y,
                    setEmojiName: b,
                    error: null == j ? void 0 : j.getFirstFieldErrorMessage("emoji"),
                    isRequiredField: !1
                });
                return (0, r.jsxs)(c.ModalRoot, {
                    transitionState: D,
                    children: [(0, r.jsx)(c.ModalCloseButton, {
                        onClick: U,
                        className: g.modalClose
                    }), (0, r.jsx)(c.ModalHeader, {
                        className: g.headerContainer,
                        separator: !1,
                        children: (0, r.jsx)(c.Heading, {
                            className: g.header,
                            variant: "heading-xl/extrabold",
                            children: ei ? h.default.Messages.SOUNDBOARD_SOUND_UPDATE_MODAL_HEADER : h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_HEADER
                        })
                    }), (0, r.jsxs)(c.ModalContent, {
                        className: g.content,
                        children: [null != j && !j.hasFieldErrors() && (0, r.jsx)(c.FormErrorBlock, {
                            className: g.section,
                            children: j.message
                        }), P ? (0, r.jsx)(c.FormItem, {
                            required: !0,
                            className: g.section,
                            title: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT,
                            children: (0, r.jsx)(A.default, {
                                value: z,
                                onChange: X
                            })
                        }) : null, (ei || null != x) && (0, r.jsx)(N.default, {
                            sound: p,
                            volume: G,
                            disabled: en,
                            onChange: Q
                        }), ei || null != L ? null : (0, r.jsx)(c.FormItem, {
                            required: !0,
                            error: null == j ? void 0 : j.getFirstFieldErrorMessage("sound"),
                            className: g.section,
                            title: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_FILE,
                            children: (0, r.jsx)(S.default, {
                                filename: null !== (a = null == x ? void 0 : x.name) && void 0 !== a ? a : "",
                                buttonText: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_BROWSE,
                                placeholder: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_INPUT_PLACEHOLDER,
                                onFileSelect: $,
                                filters: R
                            })
                        }), (0, r.jsxs)("div", {
                            className: g.multiInput,
                            children: [(0, r.jsx)(c.FormItem, {
                                required: !0,
                                error: null == j ? void 0 : j.getFirstFieldErrorMessage("name"),
                                className: s(g.section, g.halfInput),
                                title: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                children: (0, r.jsx)(c.TextInput, {
                                    placeholder: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_NAME,
                                    value: v,
                                    onChange: M,
                                    maxLength: C.MAX_LENGTH_SOUND_NAME
                                })
                            }), es]
                        }), (0, r.jsx)(c.FormItem, {
                            error: null == j ? void 0 : j.getFirstFieldErrorMessage("volume"),
                            className: g.section,
                            title: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SOUND_VOLUME,
                            children: (0, r.jsx)(c.Slider, {
                                initialValue: G,
                                onValueChange: e => F(e),
                                minValue: 0,
                                maxValue: k
                            })
                        })]
                    }), (0, r.jsxs)(c.ModalFooter, {
                        children: [(0, r.jsx)(c.Button, {
                            disabled: !el,
                            submitting: K,
                            size: c.Button.Sizes.SMALL,
                            onClick: ea,
                            children: ei ? h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_SAVE : h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_UPLOAD
                        }), (0, r.jsx)(c.Button, {
                            disabled: K,
                            onClick: U,
                            size: c.Button.Sizes.SMALL,
                            look: c.Button.Looks.LINK,
                            color: c.Button.Colors.PRIMARY,
                            children: h.default.Messages.SOUNDBOARD_SOUND_UPLOAD_MODAL_CANCEL
                        }), null != et && (0, r.jsx)("div", {
                            className: g.soundStateHint,
                            children: (0, r.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: et
                            })
                        })]
                    })]
                })
            }
        },
        876189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var i = n("920040"),
                l = n("773670"),
                r = n("575482"),
                u = n.n(r),
                a = n("498225"),
                s = n("77078"),
                o = n("817963"),
                d = n("305961"),
                c = n("957255"),
                E = n("677099"),
                f = n("697218"),
                S = n("109024"),
                _ = n("368121"),
                I = n("427459"),
                N = n("305122"),
                T = n("235004"),
                O = n("846325"),
                A = n("782340"),
                C = n("393764");

            function m(e) {
                let {
                    availableSlots: t,
                    className: n
                } = e;
                return (0, i.jsxs)(s.Text, {
                    className: u(C.suffixNode, n),
                    variant: "text-sm/medium",
                    color: "text-primary",
                    children: [(0, i.jsx)(_.default, {
                        className: C.speakerIcon
                    }), A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_AVAILABLE_COUNT.format({
                        slots: t
                    })]
                })
            }

            function h(e) {
                let {
                    value: t,
                    className: n,
                    onChange: r
                } = e, _ = (0, a.useStateFromStoresObject)([E.default, c.default, f.default, d.default], () => {
                    let e = {};
                    for (let t of E.default.getFlattenedGuildIds()) {
                        let n = d.default.getGuild(t);
                        if (null == n) continue;
                        let i = (0, o.getManageResourcePermissions)(n, c.default, f.default);
                        i.canCreateExpressions && (e[n.id] = n)
                    }
                    return e
                }), h = (0, a.useStateFromStoresObject)([T.default], () => {
                    let e = {};
                    for (let [n, i] of Object.entries(_)) {
                        var t;
                        let l = (0, I.getAvailableSoundboardSoundCount)(null !== (t = T.default.getSoundsForGuild(n)) && void 0 !== t ? t : O.EMPTY_SOUND_LIST, i.premiumTier);
                        e[n] = l
                    }
                    return e
                }, [_]);
                l.useEffect(() => {
                    (0, N.maybeFetchSoundboardSounds)()
                }, []);
                let g = l.useMemo(() => Object.values(_).map(e => {
                        let {
                            name: t,
                            id: n
                        } = e;
                        return {
                            label: t,
                            value: n,
                            disabled: h[n] <= 0
                        }
                    }), [_, h]),
                    R = l.useCallback(e => null == e || "" === e.value ? null : (0, i.jsx)(S.default, {
                        className: u(C.guildSelectOptionIcon, {
                            [C.disabledOption]: e.disabled
                        }),
                        guild: _[e.value],
                        size: S.default.Sizes.SMOL,
                        active: !0
                    }), [_]),
                    L = l.useCallback(e => {
                        let t = null == e ? void 0 : e.value;
                        return null == t || "" === t ? null : (0, i.jsx)(m, {
                            className: u({
                                [C.disabledOption]: null == e ? void 0 : e.disabled
                            }),
                            availableSlots: h[t]
                        })
                    }, [h]),
                    p = l.useCallback(e => (0, i.jsx)("div", {
                        className: u({
                            [C.disabledOption]: e.disabled
                        }),
                        children: e.label
                    }), []),
                    U = l.useCallback(e => {
                        !(h[e] <= 0) && r(e)
                    }, [h, r]),
                    D = (() => {
                        let e = h[null != t ? t : ""];
                        return null == e || e > 0 ? t : void 0
                    })();
                return (0, i.jsx)(s.SearchableSelect, {
                    className: n,
                    onChange: U,
                    value: D,
                    multi: !1,
                    options: g,
                    renderOptionPrefix: R,
                    renderOptionSuffix: L,
                    renderOptionLabel: p,
                    placeholder: 0 === g.length ? A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_NONE_AVAILABLE : A.default.Messages.SOUNDBOARD_SOUND_UPLOAD_GUILD_SELECT_PLACEHOLDER
                })
            }
        },
        4233: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
                kind: "user",
                id: "2023-03_free_discord_stickers",
                label: "Free Default Stickers",
                defaultConfig: {
                    freeStickersEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        freeStickersEnabled: !0
                    }
                }]
            });
            var r = l
        },
        866353: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return l
                },
                getStickerSendability: function() {
                    return d
                },
                isSendableSticker: function() {
                    return c
                }
            });
            var i, l, r = n("991170"),
                u = n("719923"),
                a = n("4233"),
                s = n("24373"),
                o = n("49111");
            (i = l || (l = {}))[i.SENDABLE = 0] = "SENDABLE", i[i.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", i[i.NONSENDABLE = 2] = "NONSENDABLE", i[i.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let d = (e, t, n) => {
                    if (null == t) return l.NONSENDABLE;
                    let i = u.default.canUseStickersEverywhere(t);
                    if ((0, s.isStandardSticker)(e)) {
                        let {
                            freeStickersEnabled: e
                        } = a.default.getCurrentConfig({
                            location: "c036ff_1"
                        }, {
                            autoTrackExposure: !1
                        });
                        return i || e ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM
                    }
                    if ((0, s.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? l.SENDABLE : null == n.guild_id || r.default.can({
                        permission: o.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? i ? l.SENDABLE : l.SENDABLE_WITH_PREMIUM : l.NONSENDABLE : l.SENDABLE_WITH_BOOSTED_GUILD;
                    return l.NONSENDABLE
                },
                c = (e, t, n) => d(e, t, n) === l.SENDABLE
        },
        865372: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("427964"),
                l = n.n(i),
                r = n("498225"),
                u = n("913144"),
                a = n("80507"),
                s = n("374363"),
                o = n("364685"),
                d = n("49111"),
                c = n("397336");
            let E = {
                pendingUsages: []
            };
            d.Durations.DAY;
            let f = new a.default({
                    computeBonus: () => 100,
                    computeWeight: e => {
                        let t = 0;
                        return e <= 3 ? t = 100 : e <= 15 ? t = 70 : e <= 30 ? t = 50 : e <= 45 ? t = 30 : e <= 80 && (t = 10), t
                    },
                    lookupKey: e => o.default.getStickerById(e),
                    afterCompute: () => {},
                    numFrequentlyItems: 20
                }),
                S = () => {
                    o.default.isLoaded && f.compute()
                },
                _ = () => {
                    S()
                };

            function I() {
                var e;
                let t = null === (e = s.default.frecencyWithoutFetchingLatest.stickerFrecency) || void 0 === e ? void 0 : e.stickers;
                if (null == t) return !1;
                f.overwriteHistory(l.mapValues(t, e => ({
                    ...e,
                    recentUses: e.recentUses.map(Number).filter(e => e > 0)
                })), E.pendingUsages)
            }
            class N extends r.default.PersistedStore {
                initialize(e) {
                    this.waitFor(o.default), null != e && (E = e), this.syncWith([o.default], _), this.syncWith([s.default], I)
                }
                getState() {
                    return E
                }
                hasPendingUsage() {
                    return E.pendingUsages.length > 0
                }
                get stickerFrecencyWithoutFetchingLatest() {
                    return f
                }
            }
            N.displayName = "StickersPersistedStore", N.persistKey = "StickersPersistedStoreV2";
            var T = new N(u.default, {
                STICKER_TRACK_USAGE: e => {
                    let {
                        stickerIds: t
                    } = e;
                    null == t || t.forEach(e => {
                        f.track(e), E.pendingUsages.push({
                            key: e,
                            timestamp: Date.now()
                        })
                    }), S()
                },
                USER_SETTINGS_PROTO_UPDATE: function(e) {
                    let {
                        settings: {
                            type: t
                        },
                        wasSaved: n
                    } = e;
                    if (t !== c.UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS || !n) return !1;
                    E.pendingUsages = []
                }
            })
        },
        364685: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var i, l, r = n("379279"),
                u = n("498225"),
                a = n("913144"),
                s = n("802493"),
                o = n("595525"),
                d = n("212084"),
                c = n("867805"),
                E = n("267567"),
                f = n("813006"),
                S = n("778689"),
                _ = n("305961"),
                I = n("161585"),
                N = n("24373"),
                T = n("49111");
            (i = l || (l = {}))[i.Unloaded = 0] = "Unloaded", i[i.MaybeLoaded = 1] = "MaybeLoaded", i[i.Loaded = 2] = "Loaded";
            let O = 2,
                A = new Map,
                C = new Map,
                m = null,
                h = [],
                g = null,
                R = !1,
                L = new Map,
                p = (e, t) => {
                    L = new Map(L.set(e, t))
                },
                U = 1e3 * T.Durations.HOUR,
                D = () => {
                    if (0 !== O) return;
                    let e = s.default.database();
                    if (null == e) return;
                    O = 2;
                    let t = (0, o.tryLoadOrResetCacheGateway)("StickerStore.loadSavedGuildStickers", () => r.default.time("\uD83D\uDCBE", "loadSavedGuildStickers", () => d.default.getSync(e)));
                    if (null != t) {
                        for (let [e, n] of t)
                            if (S.default.isMember(e) && !L.has(e)) {
                                for (let t of n) P(t, !0, _.default.getGuild(e));
                                p(e, n)
                            }
                    }
                },
                P = function(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                    C.set(e.id, e), t && v(e, n)
                },
                v = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (null == m) return;
                    let {
                        tags: n
                    } = e, i = {
                        type: I.StickerMetadataTypes.STICKER_NAME,
                        value: e.name.trim().toLocaleLowerCase()
                    };
                    if ((0, N.isStandardSticker)(e)) {
                        let t = h.find(t => t.id === e.pack_id),
                            l = [i, ...(null != n ? n : "").split(",").map(e => ({
                                type: I.StickerMetadataTypes.TAG,
                                value: e.trim().toLocaleLowerCase()
                            }))];
                        null != t && l.push({
                            type: I.StickerMetadataTypes.PACK_NAME,
                            value: t.name
                        }), m.set(e.id, l)
                    } else if ((0, N.isGuildSticker)(e) && null != n) {
                        let l = c.default.getByName(n),
                            r = {
                                type: I.StickerMetadataTypes.TAG,
                                value: n.trim().toLocaleLowerCase()
                            },
                            u = [i, r];
                        if (null != t) {
                            let e = (t instanceof(0, f.default) ? t.name : t.properties.name).trim().toLocaleLowerCase();
                            null != e && "" !== e && u.push({
                                type: I.StickerMetadataTypes.GUILD_NAME,
                                value: e
                            })
                        }
                        if (null == l) {
                            m.set(e.id, u);
                            return
                        }
                        u.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: l.surrogates
                        }), l.forEachDiversity(e => u.push({
                            type: I.StickerMetadataTypes.CORRELATED_EMOJI,
                            value: e.surrogates
                        })), m.set(e.id, u)
                    }
                },
                M = (e, t, n) => {
                    A.set(e.id, e);
                    let i = [...h];
                    if (t) {
                        let t = i.findIndex(t => t.id === e.id); - 1 !== t ? i[t] = e : i.push(e), h = i
                    }(t || n) && e.stickers.forEach(e => P(e))
                },
                G = () => {
                    L.forEach((e, t) => {
                        let n = _.default.getGuild(t);
                        null != n && e.forEach(e => v(e, n))
                    }), h.forEach(e => {
                        e.stickers.forEach(e => v(e))
                    })
                };

            function F(e) {
                null != e.stickers && (e.stickers.forEach(t => P(t, !0, e)), p(e.id, e.stickers))
            }
            class w extends u.default.Store {
                initialize() {
                    this.waitFor(s.default, S.default, _.default)
                }
                get isLoaded() {
                    return 0 !== O
                }
                get stickerMetadata() {
                    return D(), null == m && (m = new Map, G()), m
                }
                get hasLoadedStickerPacks() {
                    return null != g && g + U > Date.now()
                }
                get isFetchingStickerPacks() {
                    return R
                }
                getStickerById(e) {
                    return !C.has(e) && D(), C.get(e)
                }
                getStickerPack(e) {
                    return A.get(e)
                }
                getPremiumPacks() {
                    return h
                }
                isPremiumPack(e) {
                    return h.some(t => t.id === e)
                }
                getRawStickersByGuild() {
                    return L
                }
                getAllStickersIterator() {
                    return D(), C.values()
                }
                getAllGuildStickers() {
                    return D(), L
                }
                getStickersByGuildId(e) {
                    return D(), L.get(e)
                }
            }
            w.displayName = "StickersStore";
            var y = new w(a.default, {
                BACKGROUND_SYNC: () => {
                    m = null, C = new Map, L = new Map, O = 0
                },
                CONNECTION_OPEN: e => {
                    let {
                        guilds: t
                    } = e;
                    m = null, C = new Map, L = new Map, t.forEach(F), O = t.every(e => null != e.stickers) ? 1 : 0
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    !E.default.isLurking(t.id) && (F(t), 1 === O && null == t.stickers && null != t.stickerUpdates && (O = 0))
                },
                GUILD_DELETE: function(e) {
                    var t;
                    let {
                        guild: n
                    } = e, i = null !== (t = L.get(n.id)) && void 0 !== t ? t : [];
                    i.forEach(e => {
                        null != m && m.delete(e.id), C.delete(e.id)
                    }), L.delete(n.id), L = new Map(L)
                },
                LOGOUT: () => {
                    O = 0, h = [], C.clear(), A.clear(), m = null, L.clear(), L = new Map(L), R = !1, g = null
                },
                STICKER_PACKS_FETCH_START: () => {
                    R = !0
                },
                STICKER_PACKS_FETCH_SUCCESS: e => {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => M(e, !0)), g = Date.now(), R = !1
                },
                STICKER_PACK_FETCH_SUCCESS: e => {
                    let {
                        pack: t,
                        ingestStickers: n
                    } = e;
                    M(t, !1, n)
                },
                GUILD_STICKERS_FETCH_SUCCESS: e => {
                    let {
                        guildId: t,
                        stickers: n
                    } = e;
                    n.forEach(e => P(e)), p(t, n)
                },
                GUILD_STICKERS_CREATE_SUCCESS: e => {
                    var t, n;
                    let {
                        guildId: i,
                        sticker: l
                    } = e, r = null !== (t = L.get(i)) && void 0 !== t ? t : [];
                    p(i, [...null !== (n = r.filter(e => e.id !== l.id)) && void 0 !== n ? n : [], l]), P(l)
                },
                STICKER_FETCH_SUCCESS: e => {
                    let {
                        sticker: t
                    } = e;
                    P(t, !1)
                },
                GUILD_STICKERS_UPDATE: e => {
                    var t;
                    let {
                        guildId: n,
                        stickers: i
                    } = e, l = e => {
                        let t;
                        let n = C.get(e.id);
                        return null != n && (0, N.isGuildSticker)(n) && (t = null != n.user ? n.user : void 0), {
                            ...e,
                            user: t
                        }
                    }, r = null !== (t = L.get(n)) && void 0 !== t ? t : [], u = r.filter(e => null == i.find(t => t.id === e.id));
                    u.forEach(e => {
                        C.delete(e.id), null != m && m.delete(e.id)
                    });
                    let a = i.map(e => l(e));
                    a.forEach(e => P(e)), p(n, a)
                }
            })
        },
        917219: function(e, t, n) {
            "use strict";
            var i, l, r, u;
            n.r(t), n.d(t, {
                VideoFilterType: function() {
                    return i
                },
                DefaultVideoBackground: function() {
                    return l
                },
                ANIMATED_DEFAULT_VIDEO_BACKGROUNDS: function() {
                    return a
                },
                DEFAULT_VIDEO_BACKGROUND_SORT: function() {
                    return s
                },
                BLUR_BACKGROUND_OPTION: function() {
                    return o
                },
                BACKGROUND_REPLACEMENT_SIZE: function() {
                    return d
                },
                MAX_BACKGROUND_IMAGE_UPLOAD_FILESIZE_BYTES: function() {
                    return c
                }
            }), (r = i || (i = {}))[r.BACKGROUND = 0] = "BACKGROUND", (u = l || (l = {}))[u.OPTION_1 = 0] = "OPTION_1", u[u.OPTION_2 = 1] = "OPTION_2", u[u.OPTION_3 = 2] = "OPTION_3", u[u.OPTION_4 = 3] = "OPTION_4", u[u.OPTION_7 = 7] = "OPTION_7", u[u.OPTION_8 = 8] = "OPTION_8", u[u.OPTION_9 = 9] = "OPTION_9", u[u.OPTION_10 = 10] = "OPTION_10";
            let a = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10],
                s = [l.OPTION_7, l.OPTION_8, l.OPTION_9, l.OPTION_10, l.OPTION_1, l.OPTION_2, l.OPTION_3, l.OPTION_4].reduce((e, t, n) => ({
                    ...e,
                    [t]: n
                }), {}),
                o = "blur",
                d = {
                    width: 1280,
                    height: 720
                },
                c = 10485760
        },
        746304: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                AudioSettingsDefaultVolumes: function() {
                    return i
                }
            }), (l = i || (i = {}))[l.USER = 100] = "USER", l[l.STREAM = 18] = "STREAM"
        },
        148606: function(e, t, n) {
            "use strict";
            var i, l;
            n.r(t), n.d(t, {
                CountryCodes: function() {
                    return i
                },
                CountryCodesSets: function() {
                    return r
                }
            }), (l = i || (i = {})).AD = "AD", l.AE = "AE", l.AF = "AF", l.AG = "AG", l.AI = "AI", l.AL = "AL", l.AM = "AM", l.AO = "AO", l.AQ = "AQ", l.AR = "AR", l.AS = "AS", l.AT = "AT", l.AU = "AU", l.AW = "AW", l.AX = "AX", l.AZ = "AZ", l.BA = "BA", l.BB = "BB", l.BD = "BD", l.BE = "BE", l.BF = "BF", l.BG = "BG", l.BH = "BH", l.BI = "BI", l.BJ = "BJ", l.BL = "BL", l.BM = "BM", l.BN = "BN", l.BO = "BO", l.BQ = "BQ", l.BR = "BR", l.BS = "BS", l.BT = "BT", l.BV = "BV", l.BW = "BW", l.BY = "BY", l.BZ = "BZ", l.CA = "CA", l.CC = "CC", l.CD = "CD", l.CF = "CF", l.CG = "CG", l.CH = "CH", l.CI = "CI", l.CK = "CK", l.CL = "CL", l.CM = "CM", l.CN = "CN", l.CO = "CO", l.CR = "CR", l.CU = "CU", l.CV = "CV", l.CW = "CW", l.CX = "CX", l.CY = "CY", l.CZ = "CZ", l.DE = "DE", l.DJ = "DJ", l.DK = "DK", l.DM = "DM", l.DO = "DO", l.DZ = "DZ", l.EC = "EC", l.EE = "EE", l.EG = "EG", l.EH = "EH", l.ER = "ER", l.ES = "ES", l.ET = "ET", l.FI = "FI", l.FJ = "FJ", l.FK = "FK", l.FM = "FM", l.FO = "FO", l.FR = "FR", l.GA = "GA", l.GB = "GB", l.GD = "GD", l.GE = "GE", l.GF = "GF", l.GG = "GG", l.GH = "GH", l.GI = "GI", l.GL = "GL", l.GM = "GM", l.GN = "GN", l.GP = "GP", l.GQ = "GQ", l.GR = "GR", l.GS = "GS", l.GT = "GT", l.GU = "GU", l.GW = "GW", l.GY = "GY", l.HK = "HK", l.HM = "HM", l.HN = "HN", l.HR = "HR", l.HT = "HT", l.HU = "HU", l.ID = "ID", l.IE = "IE", l.IL = "IL", l.IM = "IM", l.IN = "IN", l.IO = "IO", l.IQ = "IQ", l.IR = "IR", l.IS = "IS", l.IT = "IT", l.JE = "JE", l.JM = "JM", l.JO = "JO", l.JP = "JP", l.KE = "KE", l.KG = "KG", l.KH = "KH", l.KI = "KI", l.KM = "KM", l.KN = "KN", l.KP = "KP", l.KR = "KR", l.KW = "KW", l.KY = "KY", l.KZ = "KZ", l.LA = "LA", l.LB = "LB", l.LC = "LC", l.LI = "LI", l.LK = "LK", l.LR = "LR", l.LS = "LS", l.LT = "LT", l.LU = "LU", l.LV = "LV", l.LY = "LY", l.MA = "MA", l.MC = "MC", l.MD = "MD", l.ME = "ME", l.MF = "MF", l.MG = "MG", l.MH = "MH", l.MK = "MK", l.ML = "ML", l.MM = "MM", l.MN = "MN", l.MO = "MO", l.MP = "MP", l.MQ = "MQ", l.MR = "MR", l.MS = "MS", l.MT = "MT", l.MU = "MU", l.MV = "MV", l.MW = "MW", l.MX = "MX", l.MY = "MY", l.MZ = "MZ", l.NA = "NA", l.NC = "NC", l.NE = "NE", l.NF = "NF", l.NG = "NG", l.NI = "NI", l.NL = "NL", l.NO = "NO", l.NP = "NP", l.NR = "NR", l.NU = "NU", l.NZ = "NZ", l.OM = "OM", l.PA = "PA", l.PE = "PE", l.PF = "PF", l.PG = "PG", l.PH = "PH", l.PK = "PK", l.PL = "PL", l.PM = "PM", l.PN = "PN", l.PR = "PR", l.PS = "PS", l.PT = "PT", l.PW = "PW", l.PY = "PY", l.QA = "QA", l.RE = "RE", l.RO = "RO", l.RS = "RS", l.RU = "RU", l.RW = "RW", l.SA = "SA", l.SB = "SB", l.SC = "SC", l.SD = "SD", l.SE = "SE", l.SG = "SG", l.SH = "SH", l.SI = "SI", l.SJ = "SJ", l.SK = "SK", l.SL = "SL", l.SM = "SM", l.SN = "SN", l.SO = "SO", l.SR = "SR", l.SS = "SS", l.ST = "ST", l.SV = "SV", l.SX = "SX", l.SY = "SY", l.SZ = "SZ", l.TC = "TC", l.TD = "TD", l.TF = "TF", l.TG = "TG", l.TH = "TH", l.TJ = "TJ", l.TK = "TK", l.TL = "TL", l.TM = "TM", l.TN = "TN", l.TO = "TO", l.TR = "TR", l.TT = "TT", l.TV = "TV", l.TW = "TW", l.TZ = "TZ", l.UA = "UA", l.UG = "UG", l.UM = "UM", l.US = "US", l.UY = "UY", l.UZ = "UZ", l.VA = "VA", l.VC = "VC", l.VE = "VE", l.VG = "VG", l.VI = "VI", l.VN = "VN", l.VU = "VU", l.WF = "WF", l.WS = "WS", l.YE = "YE", l.YT = "YT", l.ZA = "ZA", l.ZM = "ZM", l.ZW = "ZW", l.XK = "XK", l.AC = "AC", l.AN = "AN", l.DG = "DG", l.EL = "EL", l.IC = "IC", l.MI = "MI", l.TP = "TP", l.WK = "WK";
            let r = {
                NON_STANDARD_CODES: new Set(["AC", "AN", "DG", "EL", "IC", "MI", "TP", "WK", "XK"]),
                ALL: new Set(["AC", "AD", "AE", "AF", "AG", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BS", "BT", "BV", "BW", "BY", "BZ", "CA", "CC", "CD", "CF", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CY", "CZ", "DE", "DG", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "EL", "ER", "ES", "ET", "FI", "FJ", "FK", "FM", "FO", "FR", "GA", "GB", "GD", "GE", "GF", "GG", "GH", "GI", "GL", "GM", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "IC", "ID", "IE", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JM", "JO", "JP", "KE", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "LY", "MA", "MC", "MD", "ME", "MF", "MG", "MH", "MI", "MK", "ML", "MM", "MN", "MO", "MP", "MQ", "MR", "MS", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "RW", "SA", "SB", "SC", "SD", "SE", "SG", "SH", "SI", "SJ", "SK", "SL", "SM", "SN", "SO", "SR", "SS", "ST", "SV", "SX", "SY", "SZ", "TC", "TD", "TF", "TG", "TH", "TJ", "TK", "TL", "TM", "TN", "TO", "TP", "TR", "TT", "TV", "TW", "TZ", "UA", "UG", "UM", "US", "UY", "UZ", "VA", "VC", "VE", "VG", "VI", "VN", "VU", "WF", "WK", "WS", "XK", "YE", "YT", "ZA", "ZM", "ZW"]),
                US_TERRITORIES: new Set(["AS", "GU", "MP", "PR", "VI"]),
                FRANCE_AND_FRENCH_REGION: new Set(["FR", "GF", "GP", "MQ", "NC", "PF", "PM", "RE", "TF", "WF", "YT"]),
                VAT_EU_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "PL", "PT", "RO", "SE", "SI", "SK"]),
                VAT_COUNTRIES: new Set(["AT", "AU", "BE", "BG", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IT", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                TAX_DOMESTIC: new Set(["CA", "GB", "US"]),
                EU_COUNTRIES: new Set(["AD", "AL", "AT", "AX", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FO", "FR", "GG", "GR", "HR", "HU", "IC", "IE", "IM", "IT", "JE", "LI", "LT", "LU", "LV", "MC", "MD", "MK", "MT", "NL", "NO", "PL", "PT", "RO", "RU", "SE", "SI", "SJ", "SK", "SM", "UA", "VA"]),
                EEA_COUNTRIES: new Set(["AT", "BE", "BG", "CY", "CZ", "DE", "DK", "EE", "EL", "ES", "FI", "FR", "GR", "HR", "HU", "IE", "IS", "IT", "LI", "LT", "LU", "LV", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SI", "SK"]),
                WITHOUT_POSTAL_CODES: new Set(["AE", "AG", "AN", "AO", "AW", "BF", "BI", "BJ", "BM", "BO", "BQ", "BS", "BW", "BZ", "CD", "CF", "CG", "CI", "CK", "CM", "CW", "DJ", "DM", "ER", "FJ", "GA", "GD", "GH", "GM", "GQ", "GY", "HK", "HM", "IE", "JM", "KE", "KI", "KM", "KN", "KP", "LY", "ML", "MO", "MR", "MW", "NA", "NR", "NU", "QA", "RW", "SB", "SC", "SL", "SR", "ST", "SX", "SY", "TD", "TF", "TG", "TK", "TL", "TO", "TV", "UG", "VU", "YE", "ZA", "ZW"]),
                TAX_EXCLUSIVE: new Set(["CA", "US"]),
                TAX_ADDRESS_REQUIRE_POSTAL_CODE: new Set(["CA", "US"])
            }
        },
        450205: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("666038");
            class l extends i.default {
                toString() {
                    return this.name
                }
                constructor(e) {
                    super(), this.id = e.id, this.type = e.type, this.name = e.name, this.revoked = e.revoked || !1, this.integrations = e.integrations || [], this.visibility = e.visibility || 0, this.friendSync = e.friend_sync || !1, this.showActivity = e.show_activity || !1, this.verified = e.verified || !1, this.accessToken = e.access_token || null, this.twoWayLink = e.two_way_link || !1, this.metadata = e.metadata || null, this.metadataVisibility = e.metadata_visibility || 0
                }
            }
        },
        522308: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("666038");
            class l extends i.default {
                static createFromServer(e, t) {
                    return new l({
                        id: e.id,
                        subscriptionId: e.subscription_id,
                        premiumGuildSubscription: null != e.premium_guild_subscription ? {
                            id: e.premium_guild_subscription.id,
                            guildId: e.premium_guild_subscription.guild_id
                        } : null,
                        canceled: e.canceled,
                        cooldownEndsAt: e.cooldown_ends_at,
                        subscription: t
                    })
                }
                isOnCooldown() {
                    return null != this.cooldownEndsAt && new Date(this.cooldownEndsAt).getTime() >= Date.now()
                }
                isAvailable() {
                    return null == this.premiumGuildSubscription && !this.isOnCooldown()
                }
                constructor(e) {
                    super(), this.id = e.id, this.subscriptionId = e.subscriptionId, this.premiumGuildSubscription = e.premiumGuildSubscription, this.canceled = e.canceled, this.cooldownEndsAt = e.cooldownEndsAt, this.subscription = e.subscription
                }
            }
            var r = l
        },
        47319: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var i = n("498225"),
                l = n("913144"),
                r = n("619340"),
                u = n("376556"),
                a = n("450205"),
                s = n("813006"),
                o = n("49111");
            let d = new Set([o.PlatformTypes.CONTACTS]),
                c = !0,
                E = [],
                f = [],
                S = {},
                _ = {},
                I = e => {
                    E = e.filter(e => !d.has(e.type) && u.default.isSupported(e.type)), f = e.filter(e => d.has(e.type)), c = !1
                };
            class N extends i.default.Store {
                isJoining(e) {
                    return S[e] || !1
                }
                isFetching() {
                    return c
                }
                getAccounts() {
                    return E
                }
                getLocalAccounts() {
                    return f
                }
                getAccount(e, t) {
                    return E.find(n => (null == e || n.id === e) && n.type === t)
                }
                getLocalAccount(e) {
                    return f.find(t => t.type === e)
                }
                isSuggestedAccountType(e) {
                    return _[e] || !1
                }
            }
            N.displayName = "ConnectedAccountsStore";
            var T = new N(l.default, {
                CONNECTION_OPEN: function(e) {
                    let t = e.connectedAccounts.map(e => new a.default(e));
                    I(t)
                },
                USER_CONNECTIONS_UPDATE: function(e) {
                    if (e.local && null != e.accounts) {
                        let t = e.accounts.map(e => new a.default({
                            ...e,
                            integrations: e.integrations.map(e => ({
                                ...e,
                                guild: new s.default(e.guild)
                            }))
                        }));
                        I(t)
                    } else r.default.fetch()
                },
                USER_CONNECTIONS_INTEGRATION_JOINING: function(e) {
                    S[e.integrationId] = e.joining
                },
                USER_CONNECTION_UPDATE: function(e) {
                    let {
                        platformType: t,
                        id: n,
                        revoked: i,
                        accessToken: l
                    } = e, r = E.find(e => e.id === n && e.type === t);
                    if (null == r) return !1;
                    null != i && (r.revoked = i), null != l && (r.accessToken = l)
                }
            })
        },
        337543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("498225"),
                l = n("913144"),
                r = n("9294"),
                u = n("49111");
            let a = {},
                s = {},
                o = {};

            function d(e, t) {
                var n;
                e = null != e ? e : "";
                let i = (0, r.parseExtraDataFromInviteKey)(e),
                    l = a[e],
                    s = null != l ? {
                        state: u.InviteStates.RESOLVING,
                        ...l
                    } : {
                        state: u.InviteStates.RESOLVING,
                        code: i.baseCode
                    };
                t(s), a = {
                    ...a,
                    [e]: s
                }, (null === (n = s.guild) || void 0 === n ? void 0 : n.id) != null && (o = {
                    ...o,
                    [s.guild.id]: e
                })
            }

            function c(e) {
                return d(e.code, t => {
                    t.state = "banned" in e && e.banned ? u.InviteStates.BANNED : u.InviteStates.EXPIRED
                })
            }
            class E extends i.default.Store {
                getInvite(e) {
                    return a[e]
                }
                getInviteError(e) {
                    return s[e]
                }
                getInvites() {
                    return a
                }
                getInviteKeyForGuildId(e) {
                    return o[e]
                }
            }
            E.displayName = "InviteStore";
            var f = new E(l.default, {
                INVITE_RESOLVE: function(e) {
                    let {
                        code: t
                    } = e, n = (0, r.parseExtraDataFromInviteKey)(t);
                    a = {
                        ...a,
                        [t]: {
                            code: n.baseCode,
                            state: u.InviteStates.RESOLVING
                        }
                    }
                },
                INVITE_RESOLVE_SUCCESS: function(e) {
                    return d(e.code, t => {
                        var n, i;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.expires_at = e.invite.expires_at, t.stage_instance = e.invite.stage_instance, t.friends_count = e.invite.friends_count, t.is_contact = e.invite.is_contact, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type, t.flags = e.invite.flags
                    })
                },
                INVITE_RESOLVE_FAILURE: c,
                INSTANT_INVITE_REVOKE_SUCCESS: c,
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        t.state = u.InviteStates.RESOLVED, t.inviter = e.invite.inviter
                    })
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    e.invites.forEach(e => d(e.code, e => {
                        e.state = u.InviteStates.EXPIRED
                    }))
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    return d(e.invite.code, t => {
                        var n, i;
                        t.state = u.InviteStates.RESOLVED, t.guild = e.invite.guild, t.channel = e.invite.channel, t.inviter = e.invite.inviter, t.approximate_member_count = null !== (n = e.invite.approximate_member_count) && void 0 !== n ? n : null, t.approximate_presence_count = null !== (i = e.invite.approximate_presence_count) && void 0 !== i ? i : null, t.target_type = e.invite.target_type, t.target_user = e.invite.target_user, t.target_application = e.invite.target_application, t.stage_instance = e.invite.stage_instance, t.guild_scheduled_event = e.invite.guild_scheduled_event, t.type = e.invite.type
                    })
                },
                INVITE_ACCEPT: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.ACCEPTING
                    })
                },
                INVITE_ACCEPT_SUCCESS: function(e) {
                    return d(e.code, t => {
                        t.state = u.InviteStates.ACCEPTED, t.guild = e.invite.guild, t.new_member = e.invite.new_member, t.channel = {
                            ...t.channel,
                            ...e.invite.channel
                        }
                    })
                },
                INVITE_ACCEPT_FAILURE: function(e) {
                    return s[e.code] = e.error, d(e.code, e => {
                        e.state = u.InviteStates.ERROR
                    })
                },
                INVITE_APP_OPENING: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_OPENING
                    })
                },
                INVITE_APP_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_OPENED
                    })
                },
                INVITE_APP_NOT_OPENED: function(e) {
                    return d(e.code, e => {
                        e.state = u.InviteStates.APP_NOT_OPENED
                    })
                }
            })
        },
        778588: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("498225"),
                l = n("913144");
            let r = [];

            function u() {
                r = []
            }
            class a extends i.default.Store {
                hasLayers() {
                    return r.length > 0
                }
                getLayers() {
                    return r
                }
            }
            a.displayName = "LayerStore";
            var s = new a(l.default, {
                LAYER_PUSH: function(e) {
                    let {
                        component: t
                    } = e;
                    if (r.indexOf(t) >= 0) return !1;
                    r = [...r, t]
                },
                LAYER_POP: function() {
                    if (0 === r.length) return !1;
                    r = r.slice(0, -1)
                },
                LAYER_POP_ALL: u,
                LOGOUT: u,
                NOTIFICATION_CLICK: u
            })
        },
        471671: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("161179"),
                l = n.n(i),
                r = n("498225"),
                u = n("913144"),
                a = n("816454");
            let s = new Map;

            function o(e) {
                let t = s.get(e);
                return null == t ? (console.warn("Window state not initialized", e), {
                    isElementFullscreen: !1,
                    focused: !1,
                    windowSize: {
                        width: 0,
                        height: 0
                    }
                }) : t
            }
            class d extends r.default.Store {
                isFocused() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).focused
                }
                getFocusedWindowId() {
                    let e = null;
                    return s.forEach((t, n) => {
                        t.focused && (e = n)
                    }), e
                }
                isElementFullScreen() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).isElementFullscreen
                }
                windowSize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, a.getMainWindowId)();
                    return o(e).windowSize
                }
            }
            d.displayName = "WindowStore";
            let c = new d(u.default, {
                WINDOW_INIT: function(e) {
                    l(!s.has(e.windowId), "Window initialized multiple times");
                    let {
                        width: t,
                        height: n,
                        isElementFullscreen: i,
                        focused: r
                    } = e;
                    return s.set(e.windowId, {
                        windowSize: {
                            width: t,
                            height: n
                        },
                        isElementFullscreen: i,
                        focused: r
                    }), !0
                },
                WINDOW_FULLSCREEN_CHANGE: function(e) {
                    let t = o(e.windowId);
                    return t.isElementFullscreen !== e.isElementFullscreen && (s.set(e.windowId, {
                        ...t,
                        isElementFullscreen: e.isElementFullscreen
                    }), !0)
                },
                WINDOW_FOCUS: function(e) {
                    let t = o(e.windowId);
                    return t.focused !== e.focused && (s.set(e.windowId, {
                        ...t,
                        focused: e.focused
                    }), !0)
                },
                WINDOW_RESIZED: function(e) {
                    let t = o(e.windowId);
                    return (t.windowSize.width !== e.width || t.windowSize.height !== e.height) && (s.set(e.windowId, {
                        ...t,
                        windowSize: {
                            width: e.width,
                            height: e.height
                        }
                    }), !0)
                },
                WINDOW_UNLOAD: function(e) {
                    return s.delete(e.windowId), !0
                }
            });
            n.el("599110").then(n.bind(n, "599110")).then(e => {
                let {
                    addExtraAnalyticsDecorator: t
                } = e;
                t(e => {
                    e.client_app_state = c.isFocused() ? "focused" : "unfocused"
                })
            });
            var E = c
        },
        181114: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Shine: function() {
                    return I
                },
                default: function() {
                    return T
                }
            });
            var i, l, r = n("920040"),
                u = n("773670"),
                a = n("575482"),
                s = n.n(a),
                o = n("28926"),
                d = n("77078"),
                c = n("252744"),
                E = n("145131"),
                f = n("212407");
            (i = l || (l = {})).DEFAULT = "default", i.SMALL = "small";
            let S = {
                    [l.DEFAULT]: f.shineDefault,
                    [l.SMALL]: f.shineSmall
                },
                _ = {
                    [l.DEFAULT]: f.shineInnerDefault,
                    [l.SMALL]: f.shineInnerSmall
                };
            class I extends u.PureComponent {
                render() {
                    let {
                        className: e,
                        shineSize: t,
                        shinePaused: n,
                        ...i
                    } = this.props;
                    return (0, r.jsx)(o.default.div, {
                        ...i,
                        className: s(f.shineContainer, e, {
                            [f.shinePaused]: n
                        }),
                        children: (0, r.jsx)(E.default, {
                            align: E.default.Align.CENTER,
                            justify: E.default.Justify.CENTER,
                            className: S[t],
                            children: (0, r.jsx)("div", {
                                className: _[t]
                            })
                        })
                    })
                }
            }
            I.defaultProps = {
                shineSize: l.DEFAULT
            };
            let N = e => {
                let {
                    children: t,
                    className: n,
                    disabled: i,
                    submitting: a,
                    pauseAnimation: o,
                    shineSize: E = l.DEFAULT,
                    shinePaused: S,
                    buttonShineClassName: _,
                    onlyShineOnHover: N,
                    ...T
                } = e, O = u.createRef(), A = (0, c.default)(O), C = !i && !a && !0 !== o && (!N || A);
                return (0, r.jsxs)(d.Button, {
                    buttonRef: O,
                    ...T,
                    className: s(f.shinyButton, n),
                    disabled: i,
                    submitting: a,
                    children: [t, C ? (0, r.jsx)(I, {
                        shinePaused: S,
                        className: s(f.buttonShine, N ? f.onlyShineOnHover : void 0, _),
                        shineSize: E
                    }) : null]
                })
            };
            N.ShineSizes = l;
            var T = N
        },
        461380: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("575482"),
                r = n.n(l),
                u = n("384737"),
                a = n("448052"),
                s = n("748802"),
                o = n("260792"),
                d = n("77078"),
                c = n("75196"),
                E = n("246604");
            let f = {
                    UP: E.directionUp,
                    RIGHT: E.directionRight,
                    DOWN: E.directionDown,
                    LEFT: E.directionLeft
                },
                S = e => {
                    let {
                        direction: t = f.DOWN,
                        width: n = 24,
                        height: l = 24,
                        color: S = "currentColor",
                        transition: _ = E.transition,
                        className: I,
                        foreground: N,
                        expanded: T,
                        ...O
                    } = e, {
                        enabled: A
                    } = (0, d.useRedesignIconContext)(), C = t;
                    if (!0 === T ? C = f.DOWN : !1 === T && (C = f.RIGHT), A) {
                        let e = {
                            [f.UP]: o.ChevronSmallUpIcon,
                            [f.DOWN]: u.ChevronSmallDownIcon,
                            [f.LEFT]: a.ChevronSmallLeftIcon,
                            [f.RIGHT]: s.ChevronSmallRightIcon
                        } [C];
                        return (0, i.jsx)(e, {
                            ...O,
                            className: I,
                            width: n,
                            height: l,
                            color: S,
                            colorClass: N
                        })
                    }
                    return (0, i.jsx)("svg", {
                        className: r(I, _, C),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, c.default)(O),
                        children: (0, i.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: S,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            S.Directions = f;
            var _ = S
        },
        978679: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("998460"),
                u = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        ...(0, u.default)(a),
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M16.886 7.999H20C21.104 7.999 22 8.896 22 9.999V11.999H2V9.999C2 8.896 2.897 7.999 4 7.999H7.114C6.663 7.764 6.236 7.477 5.879 7.121C4.709 5.951 4.709 4.048 5.879 2.879C7.012 1.746 8.986 1.746 10.121 2.877C11.758 4.514 11.979 7.595 11.998 7.941C11.9991 7.9525 11.9966 7.96279 11.9941 7.97304C11.992 7.98151 11.99 7.98995 11.99 7.999H12.01C12.01 7.98986 12.0079 7.98134 12.0058 7.97287C12.0034 7.96282 12.0009 7.95286 12.002 7.942C12.022 7.596 12.242 4.515 13.879 2.878C15.014 1.745 16.986 1.746 18.121 2.877C19.29 4.049 19.29 5.952 18.121 7.121C17.764 7.477 17.337 7.764 16.886 7.999ZM7.293 5.707C6.903 5.316 6.903 4.682 7.293 4.292C7.481 4.103 7.732 4 8 4C8.268 4 8.519 4.103 8.707 4.292C9.297 4.882 9.641 5.94 9.825 6.822C8.945 6.639 7.879 6.293 7.293 5.707ZM14.174 6.824C14.359 5.941 14.702 4.883 15.293 4.293C15.481 4.103 15.732 4 16 4C16.268 4 16.519 4.103 16.706 4.291C17.096 4.682 17.097 5.316 16.707 5.707C16.116 6.298 15.057 6.642 14.174 6.824ZM3 13.999V19.999C3 21.102 3.897 21.999 5 21.999H11V13.999H3ZM13 13.999V21.999H19C20.104 21.999 21 21.102 21 19.999V13.999H13Z"
                        })
                    })
                }, r.GiftIcon)
        },
        45029: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("434657"),
                u = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        className: r,
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        width: t,
                        height: n,
                        className: r,
                        viewBox: "0 0 24 24",
                        ...(0, u.default)(s),
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M17 11V7C17 4.243 14.756 2 12 2C9.242 2 7 4.243 7 7V11C5.897 11 5 11.896 5 13V20C5 21.103 5.897 22 7 22H17C18.103 22 19 21.103 19 20V13C19 11.896 18.103 11 17 11ZM12 18C11.172 18 10.5 17.328 10.5 16.5C10.5 15.672 11.172 15 12 15C12.828 15 13.5 15.672 13.5 16.5C13.5 17.328 12.828 18 12 18ZM15 11H9V7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V11Z",
                            "aria-hidden": !0
                        })
                    })
                }, r.LockIcon)
        },
        216422: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("202909"),
                u = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        viewBox: r = "0 0 24 24",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(s),
                        width: t,
                        height: n,
                        viewBox: r,
                        children: (0, i.jsx)("path", {
                            className: a,
                            fill: l,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, r.NitroWheelIcon)
        },
        132755: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("876726"),
                u = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, i.jsx)("path", {
                            className: r,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: l
                        })
                    })
                }, r.PlayIcon)
        },
        151185: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("424823"),
                u = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, i.jsx)("path", {
                            fill: l,
                            className: r,
                            d: "M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
                        })
                    })
                }, r.PlusSmallIcon)
        },
        78404: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("920040");
            n("773670");
            var l = n("469563"),
                r = n("912758"),
                u = n("75196"),
                a = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: l = "currentColor",
                        foreground: r,
                        ...a
                    } = e;
                    return (0, i.jsx)("svg", {
                        ...(0, u.default)(a),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 16",
                        children: (0, i.jsx)("path", {
                            className: r,
                            fill: l,
                            d: "M12.6667 2.00195H3.33333C2.6 2.00195 2 2.60195 2 3.33529V12.6686C2 13.402 2.6 14.002 3.33333 14.002H12.6667C13.4 14.002 14 13.402 14 12.6686V3.33529C14 2.60195 13.4 2.00195 12.6667 2.00195Z"
                        })
                    })
                }, r.StopIcon)
        },
        833858: function(e, t, n) {
            "use strict";

            function i(e) {
                return Array.isArray(e) ? e[0] : e
            }
            n.r(t), n.d(t, {
                getFirstQueryStringValue: function() {
                    return i
                }
            })
        },
        840707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("990746"),
                l = n("599110");

            function r(e, t, n) {
                let {
                    trackedActionData: i,
                    ...r
                } = t, u = {
                    url: r.url,
                    request_method: n
                };
                return new Promise((t, n) => {
                    e(r).then(e => {
                        let n = i.properties;
                        "function" == typeof i.properties && (n = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            ...u,
                            ...n
                        }), t(e)
                    }).catch(e => {
                        var t, r;
                        let a = i.properties;
                        "function" == typeof i.properties && (a = i.properties(e)), (0, l.trackNetworkAction)(i.event, {
                            status_code: e.status,
                            error_code: null === (t = e.body) || void 0 === t ? void 0 : t.code,
                            error_message: null === (r = e.body) || void 0 === r ? void 0 : r.message,
                            ...u,
                            ...a
                        }), n(e)
                    })
                })
            }
            var u = {
                get: function(e) {
                    return r(i.default.get, e, "get")
                },
                post: function(e) {
                    return r(i.default.post, e, "post")
                },
                put: function(e) {
                    return r(i.default.put, e, "put")
                },
                patch: function(e) {
                    return r(i.default.patch, e, "patch")
                },
                delete: function(e) {
                    return r(i.default.delete, e, "del")
                }
            }
        },
        563680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getFullScreenNode: function() {
                    return l
                },
                requestFullScreen: function() {
                    return r
                },
                exitFullScreen: function() {
                    return u
                },
                isFullScreen: function() {
                    return a
                },
                FULLSCREEN_CHANGE_EVENT: function() {
                    return s
                },
                subscribeDocumentToFullScreenChange: function() {
                    return o
                }
            });
            var i = n("605250");

            function l() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return t.find(e => null != e && function(e) {
                    return null != e.requestFullscreen || null != e.webkitRequestFullscreen || e.webkitSupportsFullscreen || null != e.mozRequestFullScreen || null != e.msRequestFullscreen
                }(e))
            }

            function r(e) {
                "function" == typeof e.requestFullscreen ? e.requestFullscreen() : "function" == typeof e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : "function" == typeof e.webkitEnterFullscreen ? e.webkitEnterFullscreen() : "function" == typeof e.mozRequestFullScreen ? e.mozRequestFullScreen() : "function" == typeof e.msRequestFullscreen ? e.msRequestFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported.")
            }

            function u(e, t) {
                let n = null != t ? t : document;
                a(null, n) && ("function" == typeof n.exitFullscreen ? n.exitFullscreen() : "function" == typeof n.webkitExitFullscreen ? n.webkitExitFullscreen() : "function" == typeof e.webkitExitFullscreen ? e.webkitExitFullscreen() : "function" == typeof n.mozCancelFullScreen ? n.mozCancelFullScreen() : "function" == typeof n.msExitFullscreen ? n.msExitFullscreen() : new(0, i.default)("FullScreenUtils").warn("Fullscreen API is not supported."))
            }

            function a(e, t) {
                let n = null != t ? t : document;
                return !!(null != n.fullscreenElement || null != n.mozFullScreenElement || null != n.webkitFullscreenElement || null != n.msFullscreenElement || null != e && e.webkitDisplayingFullscreen)
            }
            let s = (() => {
                if ("undefined" != typeof document) {
                    let e = document.createElement("video");
                    if ("function" == typeof e.requestFullscreen);
                    else if ("function" == typeof e.webkitRequestFullscreen) return "webkitfullscreenchange";
                    else if ("function" == typeof e.webkitEnterFullscreen) return "webkitendfullscreen";
                    else if ("function" == typeof e.mozRequestFullScreen) return "mozfullscreenchange";
                    else if ("function" == typeof e.msRequestFullscreen) return "msfullscreenchange"
                } else console.warn("FullScreenUtils has been imported in a non-web environment");
                return "fullscreenchange"
            })();

            function o(e, t) {
                return e.addEventListener(s, t), e.addEventListener("webkitfullscreenchange", t), () => {
                    e.removeEventListener(s, t), e.removeEventListener("webkitfullscreenchange", t)
                }
            }
        },
        866190: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsWindowFocused: function() {
                    return a
                }
            });
            var i = n("773670"),
                l = n("498225"),
                r = n("244201"),
                u = n("471671");

            function a() {
                let {
                    windowId: e
                } = i.useContext(r.default);
                return (0, l.useStateFromStores)([u.default], () => u.default.isFocused(e), [e])
            }
        }
    }
]);