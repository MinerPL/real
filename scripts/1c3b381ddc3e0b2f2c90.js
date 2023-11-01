(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["17523"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), o.test(e)) ? "rtl" : s.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                o = RegExp("^[^" + r + "]*[" + i + "]"),
                s = RegExp("^[^" + i + "]*[" + r + "]")
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), h.test(e) ? e = e.substr(0, e.length - 2) : A.test(e) && (e = e.substr(0, e.length - 1)), (n = b.exec(e)) ? u.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = v.exec(e)) && c.test(n[1]) && (e = n[1], g.test(e) ? e += "e" : y.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = p.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = C.exec(e)) && u.test(n[1]) && (e = n[1] + i[n[2]]), (n = S.exec(e)) && u.test(n[1]) && (e = n[1] + r[n[2]]), (n = T.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = E.exec(e)) && d.test(n[1]) && (e = n[1]), (n = _.exec(e)) && (d.test(n[1]) || a.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
            };
            var i = {
                    ational: "ate",
                    tional: "tion",
                    enci: "ence",
                    anci: "ance",
                    izer: "ize",
                    bli: "ble",
                    alli: "al",
                    entli: "ent",
                    eli: "e",
                    ousli: "ous",
                    ization: "ize",
                    ation: "ate",
                    ator: "ate",
                    alism: "al",
                    iveness: "ive",
                    fulness: "ful",
                    ousness: "ous",
                    aliti: "al",
                    iviti: "ive",
                    biliti: "ble",
                    logi: "log"
                },
                r = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                o = "[aeiouy]",
                s = "([^aeiou][^aeiouy]*)",
                l = "(" + o + "[aeiou]*)",
                u = RegExp("^" + s + "?" + l + s),
                a = RegExp("^" + s + "?" + l + s + l + "?$"),
                d = RegExp("^" + s + "?(" + l + s + "){2,}"),
                c = RegExp("^" + s + "?" + o),
                f = RegExp("^" + s + o + "[^aeiouwxy]$"),
                m = /ll$/,
                _ = /^(.+?)e$/,
                p = /^(.+?)y$/,
                E = /^(.+?(s|t))(ion)$/,
                v = /^(.+?)(ed|ing)$/,
                g = /(at|bl|iz)$/,
                b = /^(.+?)eed$/,
                A = /^.+?[^s]s$/,
                h = /^.+?(ss|i)es$/,
                y = /([^aeiouylsz])\1$/,
                C = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                S = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                T = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("884691");

            function r() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: r,
                            children: o
                        } = t, s = (0, i.useRef)();
                        return !s.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !r && (r = () => n)), s.current = r()), (0, i.createElement)(e.Provider, {
                            value: s.current
                        }, o)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            r = (0, i.useContext)(e);
                        if (!r) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return r(t, n)
                    },
                    useStoreApi: () => {
                        let t = (0, i.useContext)(e);
                        if (!t) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return (0, i.useMemo)(() => ({
                            getState: t.getState,
                            setState: t.setState,
                            subscribe: t.subscribe,
                            destroy: t.destroy
                        }), [t])
                    }
                }
            }
        },
        583397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "c133c9df9ee4552c188a.svg"
        },
        378675: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d063b4bf17f1fee95f05.svg"
        },
        665718: function(e, t, n) {
            "use strict";
            e.exports = n.p + "5420f8fd9d89897c6448.svg"
        },
        897327: function(e, t, n) {
            "use strict";
            e.exports = n.p + "d8197d45ef3e7289594d.svg"
        },
        926607: function(e, t, n) {
            "use strict";

            function i(e, t) {
                return !t && (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            n.r(t), n.d(t, {
                _: function() {
                    return i
                }
            })
        },
        289867: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("913144"),
                r = {
                    toggleMembersSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_MEMBERS_SECTION"
                        })
                    },
                    toggleProfilePanelSection() {
                        i.default.dispatch({
                            type: "PROFILE_PANEL_TOGGLE_SECTION"
                        })
                    },
                    toggleSummariesSection() {
                        i.default.dispatch({
                            type: "CHANNEL_TOGGLE_SUMMARIES_SECTION"
                        })
                    }
                }
        },
        642950: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("37983"),
                r = n("884691"),
                o = n("414456"),
                s = n.n(o),
                l = n("77078"),
                u = n("54239"),
                a = n("79112"),
                d = n("49111"),
                c = n("782340"),
                f = n("519409");
            class m extends r.Component {
                render() {
                    return (0, i.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, i.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, i.jsx)(l.Clickable, {
                            className: s(f.streamerModeEnabledBtn, {
                                [f.disabled]: this.props.disableButton
                            }),
                            onClick: this.handleClick,
                            children: c.default.Messages.STREAMER_MODE_ENABLED
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = () => {
                        !this.props.disableButton && ((0, u.pushLayer)(d.Layers.USER_SETTINGS), a.default.setSection(d.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            m.defaultProps = {
                disableButton: !1
            };
            var _ = m
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var o = r
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return r
                },
                AutomodMentionRaidLimit: function() {
                    return o
                },
                AutomodMentionRaidNotice: function() {
                    return s
                },
                AutomodCustomMessage: function() {
                    return l
                },
                AutomodServerPolicy: function() {
                    return u
                },
                AutomodUserProfile: function() {
                    return a
                }
            });
            var i = n("862205");
            let r = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-11_automod_non_community_guilds_release",
                    label: "Automod Non-Community Guilds Release",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Non-Community Guilds Release",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                o = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2022-12_mention_raid_limit",
                    label: "Automod Mention Raid Limit",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Limit",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                s = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-01_mention_raid_notice",
                    label: "Automod Mention Raid Notice",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Mention Raid Notice",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                l = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-02_automod_custom_message",
                    label: "Automod Custom Message",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Custom Message",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                u = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-02_free_form",
                    label: "Automod Server Policy",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod Server Policy",
                        config: {
                            enabled: !0
                        }
                    }, {
                        id: 10,
                        label: "Automod Server Policy Rules Summarization",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                a = (0, i.createExperiment)({
                    kind: "guild",
                    id: "2023-05_automod_user_profile_ab",
                    label: "Automod on User Profile A/B",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Automod on User Profile enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                })
        },
        926809: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInNonCommunityGuildsRollout: function() {
                    return r
                },
                useIsInNonCommunityGuildsRollout: function() {
                    return o
                },
                isInMentionRaidExperiment: function() {
                    return s
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return l
                },
                isInMentionRaidNoticeExperiment: function() {
                    return u
                },
                useIsCustomMessageExperimentEnabled: function() {
                    return a
                },
                useIsServerPolicyExperimentEnabled: function() {
                    return d
                },
                useIsUserProfileRuleExperimentEnabled: function() {
                    return c
                }
            });
            var i = n("831585");

            function r(e) {
                let {
                    enabled: t
                } = i.AutomodNonCommunityGuildsRelease.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_1"
                });
                return t
            }

            function o(e) {
                let {
                    enabled: t
                } = i.AutomodNonCommunityGuildsRelease.useExperiment({
                    guildId: e,
                    location: "988d4e_2"
                }, {
                    autoTrackExposure: !0
                });
                return t
            }

            function s(e) {
                let {
                    enabled: t
                } = i.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function l(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    {
                        enabled: n
                    } = i.AutomodMentionRaidLimit.useExperiment({
                        guildId: e,
                        location: "988d4e_4"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function u(e) {
                if (null == e) return !1;
                let {
                    enabled: t
                } = i.AutomodMentionRaidNotice.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                });
                return t
            }

            function a(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodCustomMessage.useExperiment({
                        guildId: e,
                        location: "988d4e_6"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodServerPolicy.useExperiment({
                        guildId: e,
                        location: "988d4e_7"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    {
                        enabled: n
                    } = i.AutomodUserProfile.useExperiment({
                        guildId: e,
                        location: "988d4e_8"
                    }, {
                        autoTrackExposure: t
                    });
                return n
            }
        },
        232268: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("65597"),
                o = n("880731");

            function s(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, s = (0, r.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return s ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691"),
                r = n("65597"),
                o = n("526887"),
                s = n("880731");

            function l() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(o.ConfettiCannonContext), t = (0, r.default)([s.default], () => s.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), l = i.useMemo(() => ({
                    fire: (i, r, o) => {
                        var s, l;
                        let u = (null == o ? void 0 : o.settings) != null ? {
                                ...t,
                                ...o.settings
                            } : t,
                            a = n(u);
                        e(i, r, a, (null !== (s = null == o ? void 0 : o.count) && void 0 !== s ? s : u.confettiCount) * (null !== (l = null == o ? void 0 : o.countMultiplier) && void 0 !== l ? l : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [e, n, t]);
                return l
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return o
                }
            });
            var i = n("446674"),
                r = n("160299");

            function o() {
                let {
                    localizedPricingPromo: e,
                    hasError: t
                } = (0, i.useStateFromStoresObject)([r.default], () => ({
                    localizedPricingPromo: r.default.localizedPricingPromo,
                    hasError: r.default.localizedPricingPromoHasError
                }));
                return t ? null : e
            }
        },
        485138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useTrackLocalizedPricingPromoImpression: function() {
                    return o
                }
            });
            var i = n("759843"),
                r = n("428958");

            function o(e, t) {
                (0, r.default)({
                    type: i.ImpressionTypes.VIEW,
                    name: i.ImpressionNames.LOCALIZED_PRICING_UPSELL_VIEWED,
                    properties: {
                        country_code: t,
                        action_location: e
                    }
                })
            }
        },
        970366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAppUIViewed: function() {
                    return u
                }
            });
            var i = n("748820"),
                r = n("49671"),
                o = n("599110"),
                s = n("49111");
            let l = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        o.default.track(e, {
                            ... function() {
                                var e, t, n, i;
                                let o = "--campaign-id=",
                                    s = null !== (i = null === (n = r.default) || void 0 === n ? void 0 : null === (t = n.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== i ? i : [];
                                for (let e of s)
                                    if (e.startsWith(o)) return {
                                        referrer: e.substr(o.length)
                                    };
                                return {}
                            }(),
                            ... function() {
                                let e = !1,
                                    t = {
                                        total_compressed_byte_size: 0,
                                        total_uncompressed_byte_size: 0,
                                        total_transfer_byte_size: 0,
                                        js_compressed_byte_size: 0,
                                        js_uncompressed_byte_size: 0,
                                        js_transfer_byte_size: 0,
                                        css_compressed_byte_size: 0,
                                        css_uncompressed_byte_size: 0,
                                        css_transfer_byte_size: 0
                                    };
                                return null != window.performance && null != window.performance.getEntries && window.performance.getEntries().forEach(n => {
                                    let i = null != n.encodedBodySize ? n.encodedBodySize : n.decodedBodySize,
                                        r = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        o = n.transferSize;
                                    null != r && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += r, null != o && (t.total_uncompressed_byte_size += o), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += r, null != o && (t.js_uncompressed_byte_size += o)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += r, null != o && (t.css_uncompressed_byte_size += o))))
                                }), e ? t : {}
                            }(),
                            load_id: this.loadId,
                            screen_name: t,
                            duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
                        })
                    })
                }
                trackAppUIViewed(e) {
                    !this.appUIViewed && (this.trackEvent(s.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
                }
                constructor() {
                    this.loadId = (0, i.v4)(), this.appUIViewed = !1
                }
            };

            function u(e) {
                l.trackAppUIViewed(e)
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return u
                },
                trackProfilePanelToggled: function() {
                    return a
                }
            });
            var i = n("373469"),
                r = n("824563"),
                o = n("27618"),
                s = n("599110"),
                l = n("49111");
            let u = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: r,
                        customStatusActivity: o,
                        status: u
                    } = e;
                    s.default.track(l.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != r && (null == r ? void 0 : r.type) !== l.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == r ? void 0 : r.type) === l.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: u,
                        has_custom_status: null != o,
                        has_profile_effect: null != t.profileEffectID,
                        ...d(t)
                    })
                },
                a = (e, t) => {
                    s.default.track(l.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        s = null != i.default.getAnyStreamForUser(n),
                        u = r.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return s ? t === l.ActivityTypes.PLAYING : t !== l.ActivityTypes.CUSTOM_STATUS
                        }),
                        a = null == u ? void 0 : u.assets,
                        d = o.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == a ? void 0 : a.large_image) && void 0 !== t ? t : null == a ? void 0 : a.small_image),
                        is_friend: d,
                        viewed_profile_user_id: n,
                        profile_has_nitro_customization: e.hasPremiumCustomization(),
                        profile_has_theme_color_customized: e.hasThemeColors(),
                        profile_has_theme_animation: null != e.popoutAnimationParticleType
                    }
                }
        },
        476108: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("446674"),
                r = n("95410"),
                o = n("913144"),
                s = n("49111");
            let l = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                u = l,
                a = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
                    u = null != e ? e : l
                }
                get defaultRoute() {
                    return s.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = u.lastViewedNonVoicePath) && void 0 !== e ? e : s.Routes.ME
                }
                get fallbackRoute() {
                    return s.Routes.ME
                }
                getState() {
                    return u
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = r.default.get(a, null);
                return r.default.remove(a), {
                    lastViewedPath: e
                }
            }];
            var c = new d(o.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return u.lastViewedNonVoicePath = t, !0
                }
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let i, r, o;
            n.r(t), n.d(t, {
                default: function() {
                    return z
                }
            });
            var s, l, u = n("866227"),
                a = n.n(u),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                m = n("21121"),
                _ = n("934306"),
                p = n("288518"),
                E = n("486503"),
                v = n("233069"),
                g = n("42203"),
                b = n("305961"),
                A = n("660478"),
                h = n("282109"),
                y = n("697218"),
                C = n("299039"),
                S = n("724210");
            (s = l || (l = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let T = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? l.FAVORITE : l.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let i = null !== (n = null !== (t = A.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = a(r).valueOf(),
                            t = C.default.fromTimestamp(e);
                        return C.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: h.default.isMessagesFavorite(e.id) && (0, m.isInMainTabsExperiment)(),
                    isRequest: p.default.isMessageRequest(e.id) || E.default.isSpam(e.id)
                }
            }

            function R() {
                T.clear(), Object.values(g.default.getMutablePrivateChannels()).forEach(e => {
                    T.set(e.id, I(e))
                }), (0, m.isInMainTabsExperiment)() && (0, _.isSplitMessagesTab)() && h.default.getAddedToMessages().forEach(e => {
                    let t = g.default.getChannel(e);
                    null != t && (0, v.isGuildTextChannelType)(t.type) && T.set(t.id, I(t))
                })
            }

            function x() {
                let e = g.default.getMutablePrivateChannels();
                for (let t in e) T.set(t, I(e[t]))
            }
            let P = (i = [], r = [], o = [], () => {
                let e = T.values(l.FAVORITE),
                    t = T.values(l.DEFAULT);
                return (i !== e || r !== t) && (o = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return o.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return o.push(t)
                }), r = t), o
            });
            class M extends d.default.Store {
                initialize() {
                    this.waitFor(g.default, b.default, y.default, p.default, h.default), this.syncWith([h.default, p.default], R)
                }
                getPrivateChannelIds() {
                    return P()
                }
                getSortedChannels() {
                    return [T.values(l.FAVORITE), T.values(l.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return T.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            M.displayName = "PrivateChannelSortStore";
            var z = new M(f.default, {
                CONNECTION_OPEN: R,
                CONNECTION_OPEN_SUPPLEMENTAL: R,
                OVERLAY_INITIALIZE: R,
                CACHE_LOADED: x,
                CACHE_LOADED_LAZY: x,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, v.isPrivate)(e.type) || T.has(e.id)) && T.set(e.id, I(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, v.isPrivate)(t.type) || t.id === S.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    T.set(t.id, I(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return T.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!T.has(t)) return !1;
                    let i = g.default.getChannel(t);
                    return null != i && T.set(t, I(i, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return T.delete(t)
                }
            })
        }
    }
]);