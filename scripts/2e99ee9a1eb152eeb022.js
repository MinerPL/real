(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["13844"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), l.test(e)) ? "rtl" : s.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                r = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                l = RegExp("^[^" + r + "]*[" + i + "]"),
                s = RegExp("^[^" + i + "]*[" + r + "]")
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), x.test(e) ? e = e.substr(0, e.length - 2) : g.test(e) && (e = e.substr(0, e.length - 1)), (n = b.exec(e)) ? o.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = E.exec(e)) && c.test(n[1]) && (e = n[1], h.test(e) ? e += "e" : C.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = _.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = A.exec(e)) && o.test(n[1]) && (e = n[1] + i[n[2]]), (n = y.exec(e)) && o.test(n[1]) && (e = n[1] + r[n[2]]), (n = N.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = v.exec(e)) && d.test(n[1]) && (e = n[1]), (n = p.exec(e)) && (d.test(n[1]) || u.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                l = "[aeiouy]",
                s = "([^aeiou][^aeiouy]*)",
                a = "(" + l + "[aeiou]*)",
                o = RegExp("^" + s + "?" + a + s),
                u = RegExp("^" + s + "?" + a + s + a + "?$"),
                d = RegExp("^" + s + "?(" + a + s + "){2,}"),
                c = RegExp("^" + s + "?" + l),
                f = RegExp("^" + s + l + "[^aeiouwxy]$"),
                m = /ll$/,
                p = /^(.+?)e$/,
                _ = /^(.+?)y$/,
                v = /^(.+?(s|t))(ion)$/,
                E = /^(.+?)(ed|ing)$/,
                h = /(at|bl|iz)$/,
                b = /^(.+?)eed$/,
                g = /^.+?[^s]s$/,
                x = /^.+?(ss|i)es$/,
                C = /([^aeiouylsz])\1$/,
                A = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                y = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                N = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
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
                            children: l
                        } = t, s = (0, i.useRef)();
                        return !s.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !r && (r = () => n)), s.current = r()), (0, i.createElement)(e.Provider, {
                            value: s.current
                        }, l)
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
                    return p
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("54239"),
                u = n("79112"),
                d = n("49111"),
                c = n("782340"),
                f = n("519409");
            class m extends r.Component {
                render() {
                    return (0, i.jsxs)("div", {
                        className: f.streamerModeEnabled,
                        children: [(0, i.jsx)("div", {
                            className: f.streamerModeEnabledImage
                        }), (0, i.jsx)(a.Clickable, {
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
                        !this.props.disableButton && ((0, o.pushLayer)(d.Layers.USER_SETTINGS), u.default.setSection(d.UserSettingsSections.STREAMER_MODE))
                    }
                }
            }
            m.defaultProps = {
                disableButton: !1
            };
            var p = m
        },
        263436: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                LockUnlockedIcon: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("669491"),
                l = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, i.jsx)("svg", {
                    ...(0, l.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, i.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 1a4.985 4.985 0 0 0-3.308 1.25 1 1 0 0 0 1.324 1.5A3 3 0 0 1 15 6v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-2V6a5 5 0 0 0-5-5Zm1 14.732A2 2 0 0 0 12 12a2 2 0 0 0-1 3.732V17a1 1 0 1 0 2 0v-1.268Z",
                        clipRule: "evenodd",
                        className: a
                    })
                })
            }
        },
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");
            let r = i.createContext(void 0);
            var l = r
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return r
                },
                AutomodMentionRaidLimit: function() {
                    return l
                },
                AutomodMentionRaidNotice: function() {
                    return s
                },
                AutomodCustomMessage: function() {
                    return a
                },
                AutomodServerPolicy: function() {
                    return o
                },
                AutomodUserProfile: function() {
                    return u
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
                l = (0, i.createExperiment)({
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
                a = (0, i.createExperiment)({
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
                o = (0, i.createExperiment)({
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
                u = (0, i.createExperiment)({
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
                    return l
                },
                isInMentionRaidExperiment: function() {
                    return s
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return a
                },
                isInMentionRaidNoticeExperiment: function() {
                    return o
                },
                useIsCustomMessageExperimentEnabled: function() {
                    return u
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

            function l(e) {
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

            function a(e) {
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

            function o(e) {
                if (null == e) return !1;
                let {
                    enabled: t
                } = i.AutomodMentionRaidNotice.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_5"
                });
                return t
            }

            function u(e) {
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
                l = n("880731");

            function s(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, s = (0, r.default)([l.default], () => l.default.isEnabled({
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
                    return a
                }
            });
            var i = n("884691"),
                r = n("65597"),
                l = n("526887"),
                s = n("880731");

            function a() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(l.ConfettiCannonContext), t = (0, r.default)([s.default], () => s.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), a = i.useMemo(() => ({
                    fire: (i, r, l) => {
                        var s, a;
                        let o = (null == l ? void 0 : l.settings) != null ? {
                                ...t,
                                ...l.settings
                            } : t,
                            u = n(o);
                        e(i, r, u, (null !== (s = null == l ? void 0 : l.count) && void 0 !== s ? s : o.confettiCount) * (null !== (a = null == l ? void 0 : l.countMultiplier) && void 0 !== a ? a : 1), {
                            sprite: null == l ? void 0 : l.sprite
                        })
                    }
                }), [e, n, t]);
                return a
            }
        },
        959905: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLocalizedPromoQuery: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("160299");

            function l() {
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
                    return l
                }
            });
            var i = n("759843"),
                r = n("428958");

            function l(e, t) {
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
                    return o
                }
            });
            var i = n("748820"),
                r = n("49671"),
                l = n("599110"),
                s = n("49111");
            let a = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        l.default.track(e, {
                            ... function() {
                                var e, t, n, i;
                                let l = "--campaign-id=",
                                    s = null !== (i = null === (n = r.default) || void 0 === n ? void 0 : null === (t = n.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== i ? i : [];
                                for (let e of s)
                                    if (e.startsWith(l)) return {
                                        referrer: e.substr(l.length)
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
                                        l = n.transferSize;
                                    null != r && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += r, null != l && (t.total_uncompressed_byte_size += l), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += r, null != l && (t.js_uncompressed_byte_size += l)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += r, null != l && (t.css_uncompressed_byte_size += l))))
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

            function o(e) {
                a.trackAppUIViewed(e)
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return o
                },
                trackProfilePanelToggled: function() {
                    return u
                }
            });
            var i = n("373469"),
                r = n("824563"),
                l = n("27618"),
                s = n("599110"),
                a = n("49111");
            let o = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: r,
                        customStatusActivity: l,
                        status: o
                    } = e;
                    s.default.track(a.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != r && (null == r ? void 0 : r.type) !== a.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == r ? void 0 : r.type) === a.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: o,
                        has_custom_status: null != l,
                        has_profile_effect: null != t.profileEffectID,
                        ...d(t)
                    })
                },
                u = (e, t) => {
                    s.default.track(a.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        s = null != i.default.getAnyStreamForUser(n),
                        o = r.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return s ? t === a.ActivityTypes.PLAYING : t !== a.ActivityTypes.CUSTOM_STATUS
                        }),
                        u = null == o ? void 0 : o.assets,
                        d = l.default.isFriend(n);
                    return {
                        has_images: !!(null !== (t = null == u ? void 0 : u.large_image) && void 0 !== t ? t : null == u ? void 0 : u.small_image),
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
                l = n("913144"),
                s = n("49111");
            let a = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                o = a,
                u = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
                    o = null != e ? e : a
                }
                get defaultRoute() {
                    return s.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = o.lastViewedNonVoicePath) && void 0 !== e ? e : s.Routes.ME
                }
                get fallbackRoute() {
                    return s.Routes.ME
                }
                getState() {
                    return o
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = r.default.get(u, null);
                return r.default.remove(u), {
                    lastViewedPath: e
                }
            }];
            var c = new d(l.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return o.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return o.lastViewedNonVoicePath = t, !0
                }
            })
        },
        287850: function(e, t, n) {
            "use strict";
            let i, r, l;
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var s, a, o = n("866227"),
                u = n.n(o),
                d = n("446674"),
                c = n("407846"),
                f = n("913144"),
                m = n("21121"),
                p = n("934306"),
                _ = n("288518"),
                v = n("486503"),
                E = n("233069"),
                h = n("42203"),
                b = n("305961"),
                g = n("660478"),
                x = n("282109"),
                C = n("697218"),
                A = n("299039"),
                y = n("724210");
            (s = a || (a = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
            let N = new c.default(e => {
                let {
                    isRequest: t,
                    isFavorite: n
                } = e;
                return t ? [] : [n ? a.FAVORITE : a.DEFAULT]
            }, e => {
                let {
                    lastMessageId: t
                } = e;
                return -t
            });

            function R(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                    var t, n;
                    let i = null !== (n = null !== (t = g.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
                        r = e.isMessageRequestTimestamp;
                    if (null != r) {
                        let e = u(r).valueOf(),
                            t = A.default.fromTimestamp(e);
                        return A.default.compare(i, t) > 0 ? i : t
                    }
                    return i
                }(e);
                return {
                    channelId: e.id,
                    lastMessageId: t,
                    isFavorite: x.default.isMessagesFavorite(e.id) && (0, m.isInMainTabsExperiment)(),
                    isRequest: _.default.isMessageRequest(e.id) || v.default.isSpam(e.id)
                }
            }

            function T() {
                N.clear(), Object.values(h.default.getMutablePrivateChannels()).forEach(e => {
                    N.set(e.id, R(e))
                }), (0, m.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && x.default.getAddedToMessages().forEach(e => {
                    let t = h.default.getChannel(e);
                    null != t && (0, E.isGuildTextChannelType)(t.type) && N.set(t.id, R(t))
                })
            }

            function S() {
                let e = h.default.getMutablePrivateChannels();
                for (let t in e) N.set(t, R(e[t]))
            }
            let I = (i = [], r = [], l = [], () => {
                let e = N.values(a.FAVORITE),
                    t = N.values(a.DEFAULT);
                return (i !== e || r !== t) && (l = [], e.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return l.push(t)
                }), i = e, t.forEach(e => {
                    let {
                        channelId: t
                    } = e;
                    return l.push(t)
                }), r = t), l
            });
            class M extends d.default.Store {
                initialize() {
                    this.waitFor(h.default, b.default, C.default, _.default, x.default), this.syncWith([x.default, _.default], T)
                }
                getPrivateChannelIds() {
                    return I()
                }
                getSortedChannels() {
                    return [N.values(a.FAVORITE), N.values(a.DEFAULT)]
                }
                serializeForOverlay() {
                    let e = {};
                    return N.values().forEach(t => {
                        let {
                            channelId: n,
                            lastMessageId: i
                        } = t;
                        e[n] = i
                    }), e
                }
            }
            M.displayName = "PrivateChannelSortStore";
            var P = new M(f.default, {
                CONNECTION_OPEN: T,
                CONNECTION_OPEN_SUPPLEMENTAL: T,
                OVERLAY_INITIALIZE: T,
                CACHE_LOADED: S,
                CACHE_LOADED_LAZY: S,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e;
                    t.forEach(e => {
                        ((0, E.isPrivate)(e.type) || N.has(e.id)) && N.set(e.id, R(e))
                    })
                },
                CHANNEL_CREATE: function(e) {
                    let {
                        channel: t
                    } = e;
                    if (!(0, E.isPrivate)(t.type) || t.id === y.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
                    N.set(t.id, R(t))
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    return N.delete(t.id)
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e;
                    if (!N.has(t)) return !1;
                    let i = h.default.getChannel(t);
                    return null != i && N.set(t, R(i, n.id))
                },
                GUILD_CREATE: function(e) {
                    let t = e.guild.id;
                    return N.delete(t)
                }
            })
        },
        454589: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("145131"),
                u = n("461380"),
                d = n("298619");
            class c extends r.PureComponent {
                handleClick(e) {
                    let {
                        onBreadcrumbClick: t
                    } = this.props;
                    null != t && t(e)
                }
                render() {
                    let {
                        breadcrumbs: e,
                        className: t
                    } = this.props, n = e.map(this.renderBreadcrumb);
                    return (0, i.jsx)(o.default, {
                        justify: o.default.Justify.START,
                        className: s(d.breadcrumbs, t),
                        children: n
                    })
                }
                constructor(...e) {
                    super(...e), this.renderBreadcrumb = (e, t) => {
                        let {
                            activeId: n,
                            onBreadcrumbClick: r,
                            breadcrumbs: l,
                            renderCustomBreadcrumb: o,
                            separatorClassName: c
                        } = this.props, f = e.id === n, m = t === l.length - 1, p = null != o ? o(e, f) : (0, i.jsx)("span", {
                            className: s(d.breadcrumb, {
                                [d.activeBreadcrumb]: f,
                                [d.interactiveBreadcrumb]: null != r
                            }),
                            children: e.label
                        });
                        return (0, i.jsxs)("div", {
                            className: s(d.breadcrumbWrapper, {
                                [d.breadcrumbFinalWrapper]: m
                            }),
                            children: [null != r ? (0, i.jsx)(a.Clickable, {
                                tag: "span",
                                onClick: () => this.handleClick(e),
                                className: d.breadcrumbClickWrapper,
                                children: p
                            }) : p, m ? null : (0, i.jsx)(u.default, {
                                className: s(d.breadcrumbArrow, c),
                                direction: u.default.Directions.RIGHT
                            })]
                        }, e.id)
                    }
                }
            }
            var f = c
        },
        440351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("145131"),
                u = n("296165"),
                d = n("926622");
            class c extends r.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: r,
                        onAgree: l,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, i.jsxs)(o.default, {
                        className: u.gatedContent,
                        justify: o.default.Justify.CENTER,
                        align: o.default.Align.CENTER,
                        direction: o.default.Direction.VERTICAL,
                        children: [(0, i.jsx)("div", {
                            className: s(u.image, f)
                        }), (0, i.jsx)("div", {
                            className: s(u.title, d.marginBottom8),
                            children: e
                        }), (0, i.jsx)("div", {
                            className: s(u.description, d.marginBottom20),
                            children: t
                        }), (0, i.jsxs)(o.default, {
                            justify: o.default.Justify.CENTER,
                            align: o.default.Align.CENTER,
                            grow: 0,
                            children: [null != r ? (0, i.jsx)(a.Button, {
                                className: u.action,
                                size: a.ButtonSizes.LARGE,
                                color: a.ButtonColors.PRIMARY,
                                onClick: c,
                                children: r
                            }) : null, null != n ? (0, i.jsx)(a.Button, {
                                className: u.action,
                                color: a.Button.Colors.RED,
                                size: a.ButtonSizes.LARGE,
                                onClick: l,
                                children: n
                            }) : null]
                        })]
                    })
                }
            }
            var f = c
        },
        822332: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("77078"),
                o = n("782340"),
                u = n("440318");
            let d = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends r.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: r = d.BLOCK,
                        style: l
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: s(t, r),
                        style: l,
                        children: [(0, i.jsxs)(a.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [o.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, i.jsx)(a.Text, {
                            className: s(u.tip, n),
                            variant: "text-sm/normal",
                            children: e
                        })]
                    })
                }
            }
            c.Types = d;
            var f = c
        },
        265363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = "currentColor",
                    foreground: s,
                    ...a
                } = e;
                return (0, i.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    ...(0, r.default)(a),
                    width: t,
                    height: n,
                    children: [(0, i.jsx)("path", {
                        fill: l,
                        className: s,
                        d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                    }), (0, i.jsx)("path", {
                        fill: l,
                        className: s,
                        d: "M4 2C2.89543 2 2 2.89543 2 4V20C2 21.1046 2.89543 22 4 22H20C21.1046 22 22 21.1046 22 20V4C22 2.89543 21.1046 2 20 2H4ZM4 12C4 12 7.38036 7 12 7C16.6196 7 20 12 20 12C20 12 16.6196 17 12 17C7.38036 17 4 12 4 12Z"
                    })]
                })
            }
        },
        664336: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Icon: function() {
                    return _
                },
                Divider: function() {
                    return v
                },
                default: function() {
                    return h
                }
            });
            var i = n("37983"),
                r = n("884691"),
                l = n("414456"),
                s = n.n(l),
                a = n("353386"),
                o = n("394846"),
                u = n("77078"),
                d = n("597590"),
                c = n("980428"),
                f = n("772280"),
                m = n("587974"),
                p = n("133934");
            let _ = e => {
                    let {
                        className: t,
                        iconClassName: n,
                        children: r,
                        selected: l = !1,
                        disabled: a = !1,
                        showBadge: o = !1,
                        color: d,
                        foreground: c,
                        background: f,
                        icon: _,
                        onClick: v,
                        onContextMenu: E,
                        tooltip: h = null,
                        tooltipColor: b,
                        tooltipPosition: g = "bottom",
                        hideOnClick: x = !0,
                        role: C,
                        "aria-label": A,
                        "aria-hidden": y,
                        "aria-checked": N,
                        "aria-expanded": R,
                        "aria-haspopup": T
                    } = e, S = (0, i.jsx)(_, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: s(n, p.icon),
                        foreground: null != c ? c : void 0,
                        background: null != f ? f : void 0,
                        color: d
                    }), I = A;
                    return null == I && "string" == typeof h && (I = h), (0, i.jsx)(u.Tooltip, {
                        text: h,
                        color: b,
                        position: g,
                        hideOnClick: x,
                        children: e => {
                            let {
                                onMouseEnter: h,
                                onMouseLeave: b,
                                onFocus: g,
                                onBlur: x
                            } = e;
                            return null == v ? (0, i.jsx)("div", {
                                className: s(t, [p.iconWrapper]),
                                children: (0, i.jsx)(_, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: s(n, p.icon),
                                    foreground: null != c ? c : void 0,
                                    background: null != f ? f : void 0,
                                    color: d,
                                    "aria-hidden": y,
                                    onMouseEnter: h,
                                    onMouseLeave: b,
                                    onFocus: g,
                                    onBlur: x
                                })
                            }) : (0, i.jsxs)(u.Clickable, {
                                tag: "div",
                                onClick: a ? void 0 : v,
                                onContextMenu: a ? void 0 : E,
                                onMouseEnter: h,
                                onMouseLeave: b,
                                onFocus: g,
                                onBlur: x,
                                className: s(t, {
                                    [p.iconWrapper]: !0,
                                    [p.clickable]: !a && null != v,
                                    [p.selected]: l
                                }),
                                role: C,
                                "aria-label": I,
                                "aria-hidden": y,
                                "aria-checked": N,
                                "aria-haspopup": T,
                                "aria-expanded": R,
                                tabIndex: a || null == v ? -1 : 0,
                                children: [o ? (0, i.jsx)(m.default, {
                                    mask: m.default.Masks.HEADER_BAR_BADGE,
                                    children: S
                                }) : S, o ? (0, i.jsx)("span", {
                                    className: p.iconBadge
                                }) : null, r]
                            })
                        }
                    })
                },
                v = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: s(p.divider, t)
                    })
                },
                E = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: l,
                        childrenBottom: c,
                        toolbar: f,
                        onDoubleClick: m,
                        "aria-label": _,
                        "aria-labelledby": v,
                        role: E,
                        scrollable: h,
                        transparent: b = !1
                    } = e, g = r.useRef(null), x = r.useContext(d.default);
                    return (0, i.jsx)("section", {
                        className: s(t, p.container, {
                            [p.themed]: !b,
                            [p.transparent]: b,
                            [p.themedMobile]: o.isMobile
                        }),
                        "aria-label": _,
                        "aria-labelledby": v,
                        role: E,
                        ref: g,
                        children: (0, i.jsxs)(u.FocusRingScope, {
                            containerRef: g,
                            children: [(0, i.jsxs)("div", {
                                className: p.upperContainer,
                                children: [(0, i.jsxs)("div", {
                                    className: s(p.children, n, {
                                        [p.scrollable]: h
                                    }),
                                    onDoubleClick: m,
                                    children: [o.isMobile && null != x ? (0, i.jsx)(a.default, {
                                        onClick: x,
                                        className: p.hamburger
                                    }) : null, l]
                                }), null != f ? (0, i.jsx)("div", {
                                    className: p.toolbar,
                                    children: f
                                }) : null]
                            }), c]
                        })
                    })
                };
            E.Icon = _, E.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: r,
                    onContextMenu: l,
                    onClick: a,
                    id: o,
                    muted: d = !1,
                    level: c = 1
                } = e, f = (0, i.jsx)(u.HeadingLevel, {
                    forceLevel: c,
                    children: (0, i.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: d ? "header-secondary" : void 0,
                        className: s(t, p.title),
                        id: o,
                        children: r
                    })
                });
                return null != a ? (0, i.jsx)(u.Clickable, {
                    onClick: a,
                    onContextMenu: l,
                    className: s(n, p.titleWrapper),
                    children: f
                }) : (0, i.jsx)("div", {
                    className: s(n, p.titleWrapper),
                    onContextMenu: l,
                    children: f
                })
            }, E.Divider = v, E.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, i.jsx)(f.default, {
                    className: p.caret
                }) : (0, i.jsx)(c.default, {
                    className: p.caret
                })
            };
            var h = E
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("580420"),
                l = n.n(r),
                s = n("249907"),
                a = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...r
                    } = e;
                    return (0, i.jsxs)("button", {
                        type: "button",
                        className: l(s.btnHamburger, {
                            [s.btnHamburgerOpen]: t
                        }, n),
                        ...r,
                        children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                    })
                }
        }
    }
]);