(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["34651"], {
        717837: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), o.test(e)) ? "rtl" : r.test(e) ? "ltr" : "neutral"
            };
            var i = "֑-߿יִ-﷽ﹰ-ﻼ",
                l = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                o = RegExp("^[^" + l + "]*[" + i + "]"),
                r = RegExp("^[^" + i + "]*[" + l + "]")
        },
        111633: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t, n;
                return (e = String(e).toLowerCase()).length < 3 ? e : (121 === e.charCodeAt(0) && (t = !0, e = "Y" + e.substr(1)), E.test(e) ? e = e.substr(0, e.length - 2) : h.test(e) && (e = e.substr(0, e.length - 1)), (n = x.exec(e)) ? a.test(n[1]) && (e = e.substr(0, e.length - 1)) : (n = g.exec(e)) && c.test(n[1]) && (e = n[1], b.test(e) ? e += "e" : C.test(e) ? e = e.substr(0, e.length - 1) : f.test(e) && (e += "e")), (n = _.exec(e)) && c.test(n[1]) && (e = n[1] + "i"), (n = y.exec(e)) && a.test(n[1]) && (e = n[1] + i[n[2]]), (n = A.exec(e)) && a.test(n[1]) && (e = n[1] + l[n[2]]), (n = N.exec(e)) ? d.test(n[1]) && (e = n[1]) : (n = v.exec(e)) && d.test(n[1]) && (e = n[1]), (n = p.exec(e)) && (d.test(n[1]) || u.test(n[1]) && !f.test(n[1])) && (e = n[1]), m.test(e) && d.test(e) && (e = e.substr(0, e.length - 1)), t && (e = "y" + e.substr(1)), e)
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
                l = {
                    icate: "ic",
                    ative: "",
                    alize: "al",
                    iciti: "ic",
                    ical: "ic",
                    ful: "",
                    ness: ""
                },
                o = "[aeiouy]",
                r = "([^aeiou][^aeiouy]*)",
                s = "(" + o + "[aeiou]*)",
                a = RegExp("^" + r + "?" + s + r),
                u = RegExp("^" + r + "?" + s + r + s + "?$"),
                d = RegExp("^" + r + "?(" + s + r + "){2,}"),
                c = RegExp("^" + r + "?" + o),
                f = RegExp("^" + r + o + "[^aeiouwxy]$"),
                m = /ll$/,
                p = /^(.+?)e$/,
                _ = /^(.+?)y$/,
                v = /^(.+?(s|t))(ion)$/,
                g = /^(.+?)(ed|ing)$/,
                b = /(at|bl|iz)$/,
                x = /^(.+?)eed$/,
                h = /^.+?[^s]s$/,
                E = /^.+?(ss|i)es$/,
                C = /([^aeiouylsz])\1$/,
                y = RegExp("^(.+?)(ational|tional|enci|anci|izer|bli|alli|entli|eli|ousli|ization|ation|ator|alism|iveness|fulness|ousness|aliti|iviti|biliti|logi)$"),
                A = /^(.+?)(icate|ative|alize|iciti|ical|ful|ness)$/,
                N = RegExp("^(.+?)(al|ance|ence|er|ic|able|ible|ant|ement|ment|ent|ou|ism|ate|iti|ous|ive|ize)$")
        },
        949041: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("884691");

            function l() {
                let e = (0, i.createContext)(void 0);
                return {
                    Provider: t => {
                        let {
                            initialStore: n,
                            createStore: l,
                            children: o
                        } = t, r = (0, i.useRef)();
                        return !r.current && (n && (console.warn("Provider initialStore is deprecated and will be removed in the next version."), !l && (l = () => n)), r.current = l()), (0, i.createElement)(e.Provider, {
                            value: r.current
                        }, o)
                    },
                    useStore: function(t) {
                        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.is,
                            l = (0, i.useContext)(e);
                        if (!l) throw Error("Seems like you have not used zustand provider as an ancestor.");
                        return l(t, n)
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
                    return l
                }
            });
            var i = n("913144"),
                l = {
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
        597590: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var i = n("884691");
            let l = i.createContext(void 0);
            var o = l
        },
        831585: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AutomodNonCommunityGuildsRelease: function() {
                    return l
                },
                AutomodMentionRaidLimit: function() {
                    return o
                },
                AutomodMentionRaidNotice: function() {
                    return r
                },
                AutomodCustomMessage: function() {
                    return s
                },
                AutomodServerPolicy: function() {
                    return a
                },
                AutomodUserProfile: function() {
                    return u
                }
            });
            var i = n("862205");
            let l = (0, i.createExperiment)({
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
                r = (0, i.createExperiment)({
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
                s = (0, i.createExperiment)({
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
                a = (0, i.createExperiment)({
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
                    return l
                },
                useIsInNonCommunityGuildsRollout: function() {
                    return o
                },
                isInMentionRaidExperiment: function() {
                    return r
                },
                useIsMentionRaidExperimentEnabled: function() {
                    return s
                },
                isInMentionRaidNoticeExperiment: function() {
                    return a
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

            function l(e) {
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

            function r(e) {
                let {
                    enabled: t
                } = i.AutomodMentionRaidLimit.getCurrentConfig({
                    guildId: e,
                    location: "988d4e_3"
                });
                return t
            }

            function s(e) {
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

            function a(e) {
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
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("65597"),
                o = n("880731");

            function r(e) {
                let {
                    children: t,
                    confettiLocation: n
                } = e, r = (0, l.default)([o.default], () => o.default.isEnabled({
                    confettiLocation: n
                }));
                return r ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : null
            }
        },
        798592: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("884691"),
                l = n("65597"),
                o = n("526887"),
                r = n("880731");

            function s() {
                let {
                    createMultipleConfettiAt: e
                } = i.useContext(o.ConfettiCannonContext), t = (0, l.default)([r.default], () => r.default.getState()), n = i.useCallback(e => ({
                    size: {
                        type: "static-random",
                        minValue: e.confettiSize - 7,
                        maxValue: e.confettiSize + 7
                    }
                }), []), s = i.useMemo(() => ({
                    fire: (i, l, o) => {
                        var r, s;
                        let a = (null == o ? void 0 : o.settings) != null ? {
                                ...t,
                                ...o.settings
                            } : t,
                            u = n(a);
                        e(i, l, u, (null !== (r = null == o ? void 0 : o.count) && void 0 !== r ? r : a.confettiCount) * (null !== (s = null == o ? void 0 : o.countMultiplier) && void 0 !== s ? s : 1), {
                            sprite: null == o ? void 0 : o.sprite
                        })
                    }
                }), [e, n, t]);
                return s
            }
        },
        970366: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackAppUIViewed: function() {
                    return a
                }
            });
            var i = n("748820"),
                l = n("49671"),
                o = n("599110"),
                r = n("49111");
            let s = new class e {
                trackEvent(e, t) {
                    let n = Date.now();
                    requestIdleCallback(() => {
                        o.default.track(e, {
                            ... function() {
                                var e, t, n, i;
                                let o = "--campaign-id=",
                                    r = null !== (i = null === (n = l.default) || void 0 === n ? void 0 : null === (t = n.processUtils) || void 0 === t ? void 0 : null === (e = t.getMainArgvSync) || void 0 === e ? void 0 : e.call(t)) && void 0 !== i ? i : [];
                                for (let e of r)
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
                                        l = null != n.decodedBodySize ? n.decodedBodySize : n.encodedBodySize,
                                        o = n.transferSize;
                                    null != l && null != i && (e = !0, t.total_compressed_byte_size += i, t.total_uncompressed_byte_size += l, null != o && (t.total_uncompressed_byte_size += o), "resource" === n.entryType && ("script" === n.initiatorType && null != n.name && null != n.name.match(/\.js/) && (t.js_compressed_byte_size += i, t.js_uncompressed_byte_size += l, null != o && (t.js_uncompressed_byte_size += o)), "link" === n.initiatorType && null != n.name && null != n.name.match(/\.css/) && (t.css_compressed_byte_size += i, t.css_uncompressed_byte_size += l, null != o && (t.css_uncompressed_byte_size += o))))
                                }), e ? t : {}
                            }(),
                            load_id: this.loadId,
                            screen_name: t,
                            duration_ms_since_app_opened: n - window.GLOBAL_ENV.HTML_TIMESTAMP
                        })
                    })
                }
                trackAppUIViewed(e) {
                    !this.appUIViewed && (this.trackEvent(r.AnalyticEvents.APP_UI_VIEWED, e), this.appUIViewed = !0)
                }
                constructor() {
                    this.loadId = (0, i.v4)(), this.appUIViewed = !1
                }
            };

            function a(e) {
                s.trackAppUIViewed(e)
            }
        },
        893980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackProfilePanelViewed: function() {
                    return a
                },
                trackProfilePanelToggled: function() {
                    return u
                }
            });
            var i = n("373469"),
                l = n("824563"),
                o = n("27618"),
                r = n("599110"),
                s = n("49111");
            let a = e => {
                    let {
                        displayProfile: t,
                        isMobile: n,
                        loadDurationMs: i,
                        activity: l,
                        customStatusActivity: o,
                        status: a
                    } = e;
                    r.default.track(s.AnalyticEvents.DM_PROFILE_VIEWED, {
                        has_mobile_indicator: n,
                        has_activity: null != l && (null == l ? void 0 : l.type) !== s.ActivityTypes.CUSTOM_STATUS,
                        has_game_activity: (null == l ? void 0 : l.type) === s.ActivityTypes.PLAYING,
                        load_duration_ms: i,
                        profile_user_status: a,
                        has_custom_status: null != o,
                        has_profile_effect: null != t.profileEffectID,
                        ...d(t)
                    })
                },
                u = (e, t) => {
                    r.default.track(s.AnalyticEvents.DM_PROFILE_TOGGLED, {
                        is_profile_open: t,
                        ...d(e)
                    })
                },
                d = e => {
                    var t;
                    if (null == e) return {};
                    let n = e.userId,
                        r = null != i.default.getAnyStreamForUser(n),
                        a = l.default.findActivity(n, e => {
                            let {
                                type: t
                            } = e;
                            return r ? t === s.ActivityTypes.PLAYING : t !== s.ActivityTypes.CUSTOM_STATUS
                        }),
                        u = null == a ? void 0 : a.assets,
                        d = o.default.isFriend(n);
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
                l = n("95410"),
                o = n("913144"),
                r = n("49111");
            let s = {
                    lastViewedPath: null,
                    lastViewedNonVoicePath: null
                },
                a = s,
                u = "LAST_VIEWED_PATH";
            class d extends i.default.PersistedStore {
                initialize() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                    a = null != e ? e : s
                }
                get defaultRoute() {
                    return r.Routes.ME
                }
                get lastNonVoiceRoute() {
                    var e;
                    return null !== (e = a.lastViewedNonVoicePath) && void 0 !== e ? e : r.Routes.ME
                }
                get fallbackRoute() {
                    return r.Routes.ME
                }
                getState() {
                    return a
                }
            }
            d.displayName = "DefaultRouteStore", d.persistKey = "DefaultRouteStore", d.migrations = [() => {
                let e = l.default.get(u, null);
                return l.default.remove(u), {
                    lastViewedPath: e
                }
            }];
            var c = new d(o.default, {
                SAVE_LAST_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return a.lastViewedPath = t, !0
                },
                SAVE_LAST_NON_VOICE_ROUTE: function(e) {
                    let {
                        path: t
                    } = e;
                    return a.lastViewedNonVoicePath = t, !0
                }
            })
        },
        944832: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("414456"),
                o = n.n(l),
                r = n("561445"),
                s = e => {
                    let {
                        aspectRatio: t,
                        style: n,
                        className: l,
                        children: s
                    } = e;
                    return (0, i.jsx)("div", {
                        className: o(r.outer, l),
                        style: {
                            paddingTop: "".concat(1 / t * 100, "%"),
                            ...n
                        },
                        children: (0, i.jsx)("div", {
                            className: r.inner,
                            children: s
                        })
                    })
                }
        },
        440351: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("37983"),
                l = n("884691"),
                o = n("414456"),
                r = n.n(o),
                s = n("77078"),
                a = n("145131"),
                u = n("296165"),
                d = n("926622");
            class c extends l.PureComponent {
                render() {
                    let {
                        title: e,
                        description: t,
                        agreement: n,
                        disagreement: l,
                        onAgree: o,
                        onDisagree: c,
                        imageClassName: f
                    } = this.props;
                    return (0, i.jsxs)(a.default, {
                        className: u.gatedContent,
                        justify: a.default.Justify.CENTER,
                        align: a.default.Align.CENTER,
                        direction: a.default.Direction.VERTICAL,
                        children: [(0, i.jsx)("div", {
                            className: r(u.image, f)
                        }), (0, i.jsx)("div", {
                            className: r(u.title, d.marginBottom8),
                            children: e
                        }), (0, i.jsx)("div", {
                            className: r(u.description, d.marginBottom20),
                            children: t
                        }), (0, i.jsxs)(a.default, {
                            justify: a.default.Justify.CENTER,
                            align: a.default.Align.CENTER,
                            grow: 0,
                            children: [null != l ? (0, i.jsx)(s.Button, {
                                className: u.action,
                                size: s.ButtonSizes.LARGE,
                                color: s.ButtonColors.PRIMARY,
                                onClick: c,
                                children: l
                            }) : null, null != n ? (0, i.jsx)(s.Button, {
                                className: u.action,
                                color: s.Button.Colors.RED,
                                size: s.ButtonSizes.LARGE,
                                onClick: o,
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
                l = n("884691"),
                o = n("414456"),
                r = n.n(o),
                s = n("77078"),
                a = n("782340"),
                u = n("440318");
            let d = {
                BLOCK: u.block,
                INLINE: u.inline
            };
            class c extends l.PureComponent {
                render() {
                    let {
                        children: e,
                        className: t,
                        textClassName: n,
                        type: l = d.BLOCK,
                        style: o
                    } = this.props;
                    return (0, i.jsxs)("div", {
                        className: r(t, l),
                        style: o,
                        children: [(0, i.jsxs)(s.Text, {
                            variant: "text-sm/bold",
                            tag: "div",
                            color: "text-positive",
                            className: u.pro,
                            children: [a.default.Messages.FORM_LABEL_ROLES_PRO_TIP, ":"]
                        }), (0, i.jsx)(s.Text, {
                            className: r(u.tip, n),
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
                    return o
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("75196");

            function o(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = "currentColor",
                    foreground: r,
                    ...s
                } = e;
                return (0, i.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    ...(0, l.default)(s),
                    width: t,
                    height: n,
                    children: [(0, i.jsx)("path", {
                        fill: o,
                        className: r,
                        d: "M9.09091 12C9.09091 13.5786 10.3935 14.8571 12 14.8571C13.6065 14.8571 14.9091 13.5786 14.9091 12C14.9091 10.4214 13.6065 9.14286 12 9.14286C10.3935 9.14286 9.09091 10.4214 9.09091 12ZM13.3402 12C13.3402 12.789 12.689 13.4286 11.8857 13.4286C11.0823 13.4286 10.4311 12.789 10.4311 12C10.4311 11.211 11.0823 10.5714 11.8857 10.5714C12.689 10.5714 13.3402 11.211 13.3402 12Z"
                    }), (0, i.jsx)("path", {
                        fill: o,
                        className: r,
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
                    return b
                }
            });
            var i = n("37983"),
                l = n("884691"),
                o = n("414456"),
                r = n.n(o),
                s = n("353386"),
                a = n("394846"),
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
                        children: l,
                        selected: o = !1,
                        disabled: s = !1,
                        showBadge: a = !1,
                        color: d,
                        foreground: c,
                        background: f,
                        icon: _,
                        onClick: v,
                        onContextMenu: g,
                        tooltip: b = null,
                        tooltipColor: x,
                        tooltipPosition: h = "bottom",
                        hideOnClick: E = !0,
                        role: C,
                        "aria-label": y,
                        "aria-hidden": A,
                        "aria-checked": N,
                        "aria-expanded": R,
                        "aria-haspopup": S
                    } = e, j = (0, i.jsx)(_, {
                        x: 0,
                        y: 0,
                        width: 24,
                        height: 24,
                        className: r(n, p.icon),
                        foreground: null != c ? c : void 0,
                        background: null != f ? f : void 0,
                        color: d
                    }), M = y;
                    return null == M && "string" == typeof b && (M = b), (0, i.jsx)(u.Tooltip, {
                        text: b,
                        color: x,
                        position: h,
                        hideOnClick: E,
                        children: e => {
                            let {
                                onMouseEnter: b,
                                onMouseLeave: x,
                                onFocus: h,
                                onBlur: E
                            } = e;
                            return null == v ? (0, i.jsx)("div", {
                                className: r(t, [p.iconWrapper]),
                                children: (0, i.jsx)(_, {
                                    x: 0,
                                    y: 0,
                                    width: 24,
                                    height: 24,
                                    className: r(n, p.icon),
                                    foreground: null != c ? c : void 0,
                                    background: null != f ? f : void 0,
                                    color: d,
                                    "aria-hidden": A,
                                    onMouseEnter: b,
                                    onMouseLeave: x,
                                    onFocus: h,
                                    onBlur: E
                                })
                            }) : (0, i.jsxs)(u.Clickable, {
                                tag: "div",
                                onClick: s ? void 0 : v,
                                onContextMenu: s ? void 0 : g,
                                onMouseEnter: b,
                                onMouseLeave: x,
                                onFocus: h,
                                onBlur: E,
                                className: r(t, {
                                    [p.iconWrapper]: !0,
                                    [p.clickable]: !s && null != v,
                                    [p.selected]: o
                                }),
                                role: C,
                                "aria-label": M,
                                "aria-hidden": A,
                                "aria-checked": N,
                                "aria-haspopup": S,
                                "aria-expanded": R,
                                tabIndex: s || null == v ? -1 : 0,
                                children: [a ? (0, i.jsx)(m.default, {
                                    mask: m.default.Masks.HEADER_BAR_BADGE,
                                    children: j
                                }) : j, a ? (0, i.jsx)("span", {
                                    className: p.iconBadge
                                }) : null, l]
                            })
                        }
                    })
                },
                v = e => {
                    let {
                        className: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: r(p.divider, t)
                    })
                },
                g = e => {
                    let {
                        className: t,
                        innerClassName: n,
                        children: o,
                        childrenBottom: c,
                        toolbar: f,
                        onDoubleClick: m,
                        "aria-label": _,
                        "aria-labelledby": v,
                        role: g,
                        scrollable: b,
                        transparent: x = !1
                    } = e, h = l.useRef(null), E = l.useContext(d.default);
                    return (0, i.jsx)("section", {
                        className: r(t, p.container, {
                            [p.themed]: !x,
                            [p.transparent]: x,
                            [p.themedMobile]: a.isMobile
                        }),
                        "aria-label": _,
                        "aria-labelledby": v,
                        role: g,
                        ref: h,
                        children: (0, i.jsxs)(u.FocusRingScope, {
                            containerRef: h,
                            children: [(0, i.jsxs)("div", {
                                className: p.upperContainer,
                                children: [(0, i.jsxs)("div", {
                                    className: r(p.children, n, {
                                        [p.scrollable]: b
                                    }),
                                    onDoubleClick: m,
                                    children: [a.isMobile && null != E ? (0, i.jsx)(s.default, {
                                        onClick: E,
                                        className: p.hamburger
                                    }) : null, o]
                                }), null != f ? (0, i.jsx)("div", {
                                    className: p.toolbar,
                                    children: f
                                }) : null]
                            }), c]
                        })
                    })
                };
            g.Icon = _, g.Title = e => {
                let {
                    className: t,
                    wrapperClassName: n,
                    children: l,
                    onContextMenu: o,
                    onClick: s,
                    id: a,
                    muted: d = !1,
                    level: c = 1
                } = e, f = (0, i.jsx)(u.HeadingLevel, {
                    forceLevel: c,
                    children: (0, i.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        color: d ? "header-secondary" : void 0,
                        className: r(t, p.title),
                        id: a,
                        children: l
                    })
                });
                return null != s ? (0, i.jsx)(u.Clickable, {
                    onClick: s,
                    onContextMenu: o,
                    className: r(n, p.titleWrapper),
                    children: f
                }) : (0, i.jsx)("div", {
                    className: r(n, p.titleWrapper),
                    onContextMenu: o,
                    children: f
                })
            }, g.Divider = v, g.Caret = function(e) {
                let {
                    direction: t = "right"
                } = e;
                return "right" === t ? (0, i.jsx)(f.default, {
                    className: p.caret
                }) : (0, i.jsx)(c.default, {
                    className: p.caret
                })
            };
            var b = g
        },
        353386: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var i = n("37983");
            n("884691");
            var l = n("580420"),
                o = n.n(l),
                r = n("249907"),
                s = e => {
                    let {
                        open: t = !1,
                        className: n,
                        ...l
                    } = e;
                    return (0, i.jsxs)("button", {
                        type: "button",
                        className: o(r.btnHamburger, {
                            [r.btnHamburgerOpen]: t
                        }, n),
                        ...l,
                        children: [(0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {}), (0, i.jsx)("span", {})]
                    })
                }
        }
    }
]);