(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["53827"], {
        107681: function(e, t, a) {
            "use strict";
            e.exports = a.p + "93ddb0353236900986d8.png"
        },
        259707: function(e, t, a) {
            "use strict";
            e.exports = a.p + "80fd3641042d437f5b2b.png"
        },
        775955: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("669491"),
                i = a("75196");

            function l(e) {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: l = n.default.unsafe_rawColors.WHITE_500.css,
                    backgroundColor: r = n.default.unsafe_rawColors.BRAND_500.css,
                    ...o
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, i.default)(o),
                    width: t,
                    height: a,
                    viewBox: "0 0 14 14",
                    children: [(0, s.jsx)("path", {
                        fill: r,
                        d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166"
                    }), (0, s.jsx)("path", {
                        d: "M6.5,10.3L3.4,8l0.9-1.2l1.8,1.4l3.3-4.3l1.2,0.9L6.5,10.3z",
                        fill: l
                    })]
                })
            }
        },
        255403: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var s = a("759843"),
                n = a("872717"),
                i = a("913144"),
                l = a("448993"),
                r = a("599110"),
                o = a("840707"),
                u = a("210898"),
                d = a("856368"),
                c = a("697543"),
                E = a("49111"),
                m = a("782340");
            a("2581");
            var f = {
                resetSuggestions: () => i.default.dispatch({
                    type: "POMELO_SUGGESTIONS_RESET"
                }),
                async fetchSuggestionsRegistration(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    if ((0, c.hasRegistrationUsernameSuggestions)()) {
                        i.default.dispatch({
                            type: "POMELO_SUGGESTIONS_RESET"
                        });
                        try {
                            var a;
                            let s = await n.default.get({
                                url: E.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
                                query: null == e ? void 0 : {
                                    global_name: e
                                },
                                timeout: t
                            });
                            if (s.ok && (null === (a = s.body) || void 0 === a ? void 0 : a.username) != null) return i.default.dispatch({
                                type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                                suggestion: s.body,
                                source: e
                            })
                        } catch (e) {
                            return
                        }
                    }
                },
                async fetchSuggestions() {
                    if ((0, d.isInPomeloSuggestionsExperiment)()) try {
                        var e;
                        let t = await n.default.get({
                            url: E.Endpoints.POMELO_SUGGESTIONS
                        });
                        if (t.ok && (null === (e = t.body) || void 0 === e ? void 0 : e.username) != null) return i.default.dispatch({
                            type: "POMELO_SUGGESTIONS_SUCCESS",
                            suggestion: t.body
                        })
                    } catch (e) {
                        return
                    }
                },
                async attemptPomelo(e) {
                    var t, a;
                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                        d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    let c = (t = e, !1 === /^[A-Za-z0-9_.]*$/.test(t) ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : t.includes("..") ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : t.length < 2 || t.length > 32 ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                        maxNum: 32,
                        minNum: 2
                    }) : void 0);
                    if (null != c) return r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
                        reason: c,
                        username_error: !0,
                        location: n
                    }), i.default.dispatch({
                        type: "POMELO_ATTEMPT_FAILURE",
                        username: e,
                        error: c
                    });
                    if ((0, u.getPomeloAttempt)()) try {
                        let t = await o.default.post({
                            url: d ? E.Endpoints.POMELO_ATTEMPT_UNAUTHED : E.Endpoints.POMELO_ATTEMPT,
                            body: {
                                username: e
                            },
                            trackedActionData: {
                                event: s.NetworkActionNames.POMELO_ATTEMPT,
                                properties: {
                                    requested_username: e
                                }
                            }
                        });
                        t.body.taken && r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
                            reason: "already_taken",
                            username_error: !0,
                            location: n
                        }), i.default.dispatch({
                            type: "POMELO_ATTEMPT_SUCCESS",
                            username: e,
                            taken: t.body.taken
                        })
                    } catch (o) {
                        ;
                        let t = new l.APIError(o),
                            s = null !== (a = t.getAnyErrorMessage()) && void 0 !== a ? a : void 0;
                        r.default.track(E.AnalyticEvents.POMELO_ERRORS, {
                            reason: s,
                            username_error: !0,
                            location: n
                        }), i.default.dispatch({
                            username: e,
                            type: "POMELO_ATTEMPT_FAILURE",
                            error: null != t.status && t.status < 500 && 401 !== t.status ? s : void 0,
                            statusCode: t.status,
                            retryAfter: t.retryAfter
                        })
                    }
                },
                async createPomelo(e) {
                    let t = await o.default.post({
                        body: e,
                        url: E.Endpoints.POMELO_CREATE,
                        trackedActionData: {
                            event: s.NetworkActionNames.POMELO_CREATE
                        }
                    });
                    return i.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: t.body
                    }), t.body
                }
            }
        },
        210898: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getPomeloAttempt: function() {
                    return i
                }
            });
            var s = a("862205");
            let n = (0, s.createExperiment)({
                    kind: "user",
                    label: "Pomelo Attempt",
                    id: "2023-04_pomelo_attempt",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = () => n.getCurrentConfig({
                    location: "c22166_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
        },
        947962: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                usePomeloDebounceDelay: function() {
                    return i
                }
            });
            var s = a("862205");
            let n = (0, s.createExperiment)({
                    kind: "user",
                    label: "Pomelo Debounce Delay",
                    id: "2023-03_pomelo_debounce_delay",
                    defaultConfig: {
                        delay: 600
                    },
                    treatments: [{
                        id: 1,
                        label: "600ms",
                        config: {
                            delay: 600
                        }
                    }, {
                        id: 2,
                        label: "700ms",
                        config: {
                            delay: 700
                        }
                    }, {
                        id: 3,
                        label: "800ms",
                        config: {
                            delay: 800
                        }
                    }, {
                        id: 4,
                        label: "900ms",
                        config: {
                            delay: 900
                        }
                    }, {
                        id: 5,
                        label: "1000ms",
                        config: {
                            delay: 1e3
                        }
                    }]
                }),
                i = () => n.useExperiment({
                    location: "52560d_1"
                }, {
                    autoTrackExposure: !1
                }).delay
        },
        2581: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var s = a("693566"),
                n = a.n(s),
                i = a("446674"),
                l = a("913144");
            let r = {
                    taken: null,
                    error: void 0,
                    rateLimited: !0
                },
                o = {
                    validations: new n({
                        max: 100,
                        maxAge: 6e4
                    }),
                    currentUsernameInvalid: !1,
                    retryAfterTime: null,
                    suggestions: {
                        migration: {
                            suggestion: {
                                username: void 0
                            },
                            fetched: !1
                        },
                        registration: {
                            suggestion: {
                                username: void 0
                            },
                            source: void 0,
                            fetched: !1
                        }
                    }
                };
            class u extends i.default.Store {
                isRateLimited() {
                    return null != o.retryAfterTime && Date.now() < o.retryAfterTime
                }
                validate(e) {
                    let t = o.validations.get(e);
                    return this.isRateLimited() && (null == t || t.rateLimited) ? r : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
                }
                registrationUsernameSuggestion() {
                    return o.suggestions.registration.suggestion.username
                }
                usernameSuggestion() {
                    return o.suggestions.migration.suggestion.username
                }
                isCurrentUsernameInvalid() {
                    return o.currentUsernameInvalid
                }
                wasRegistrationSuggestionFetched(e) {
                    return o.suggestions.registration.source === e && o.suggestions.registration.fetched
                }
                wasSuggestionsFetched() {
                    return o.suggestions.migration.fetched
                }
            }
            u.displayName = "PomeloStore";
            var d = new u(l.default, {
                POMELO_ATTEMPT_SUCCESS: function(e) {
                    let {
                        username: t,
                        taken: a
                    } = e;
                    o.validations.set(t, {
                        taken: a
                    })
                },
                POMELO_ATTEMPT_FAILURE: function(e) {
                    let {
                        username: t,
                        error: a,
                        statusCode: s,
                        retryAfter: n
                    } = e;
                    429 === s ? o.validations.set(t, {
                        taken: null,
                        error: a,
                        rateLimited: !0
                    }, (null != n ? n : 7) * 1e3) : o.validations.set(t, {
                        taken: null,
                        error: a
                    }), null != n && (o.retryAfterTime = Date.now() + 1e3 * n)
                },
                POMELO_SUGGESTIONS_RESET: function() {
                    o.suggestions.migration = {
                        suggestion: {
                            username: void 0
                        },
                        fetched: !1
                    }, o.suggestions.registration = {
                        suggestion: {
                            username: void 0
                        },
                        source: void 0,
                        fetched: !1
                    }
                },
                POMELO_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        suggestion: t
                    } = e;
                    o.suggestions.migration = {
                        suggestion: t,
                        fetched: !0
                    }, (null == t ? void 0 : t.invalid_current_username) === !0 && (o.currentUsernameInvalid = !0)
                },
                POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        suggestion: t,
                        source: a
                    } = e;
                    o.suggestions.registration = {
                        suggestion: t,
                        source: a,
                        fetched: !0
                    }, (null == t ? void 0 : t.username) != null && o.validations.set(t.username, {
                        taken: !1
                    })
                }
            })
        },
        856368: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                isInPomeloSuggestionsExperiment: function() {
                    return i
                }
            });
            var s = a("862205");
            let n = (0, s.createExperiment)({
                    kind: "user",
                    label: "Pomelo Suggestions",
                    id: "2023-04_pomelo_suggestions",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "enabled",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = () => n.getCurrentConfig({
                    location: "1907ae_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
        },
        644417: function(e, t, a) {
            "use strict";
            var s, n;
            a.r(t), a.d(t, {
                NameValidationState: function() {
                    return s
                }
            }), (n = s || (s = {})).AVAILABLE = "AVAILABLE", n.ERROR = "ERROR", n.RATE_LIMIT = "RATE_LIMIT", n.INTERNAL_ERROR = "INTERNAL_ERROR"
        },
        415133: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getUserAvatarURLForPomelo: function() {
                    return E
                },
                getDefaultPomelo: function() {
                    return m
                },
                shouldSkipToEditUsername: function() {
                    return S
                },
                formatPomeloForEditing: function() {
                    return h
                },
                getMemberSince: function() {
                    return I
                },
                formatUsernameLiveCheckValidation: function() {
                    return T
                }
            });
            var s = a("866227"),
                n = a.n(s),
                i = a("506838"),
                l = a("315102"),
                r = a("299039"),
                o = a("159885"),
                u = a("644417"),
                d = a("935583"),
                c = a("782340");

            function E(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return l.default.getUserAvatarURL({
                    id: e.id,
                    avatar: e.avatar,
                    bot: e.bot,
                    discriminator: "0000"
                }, t, 80)
            }

            function m(e) {
                let t = (0, o.stripDiacritics)(e.username).replace(d.dirtyChars, "").replace(d.coalescePeriods, ".").toLowerCase();
                return "".concat(t).concat(e.discriminator).substring(0, 32)
            }
            let f = ["@", "#", ":"],
                g = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
                _ = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

            function S(e) {
                var t, a;
                let s = e.username.toLowerCase();
                if ((t = s, a = d.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !a.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
                for (let e of f)
                    if (s.includes(e)) return !0;
                for (let e of _)
                    if (s === e.toLowerCase()) return !0;
                for (let e of g)
                    if (s.includes(e.toLowerCase())) return !0;
                return !1
            }

            function h(e) {
                return e.toLowerCase().replace(/\s/g, "").replace("@", "")
            }

            function I(e) {
                let t = r.default.extractTimestamp(e);
                try {
                    return n(new Date(t)).format("MMM DD, YYYY")
                } catch (e) {}
                return null
            }

            function T(e) {
                return (0, i.match)(e).with({
                    rateLimited: !0
                }, () => ({
                    type: u.NameValidationState.RATE_LIMIT,
                    message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
                })).with({
                    error: i.P.not(i.P.nullish)
                }, e => {
                    let {
                        error: t
                    } = e;
                    return {
                        type: u.NameValidationState.ERROR,
                        message: t
                    }
                }).with({
                    taken: !1
                }, () => ({
                    type: u.NameValidationState.AVAILABLE,
                    message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
                })).with({
                    taken: !0
                }, () => ({
                    type: u.NameValidationState.ERROR,
                    message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
                })).with({
                    error: i.P.nullish
                }, () => ({
                    type: u.NameValidationState.INTERNAL_ERROR,
                    message: ""
                })).otherwise(() => void 0)
            }
        },
        697543: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useUURegistrationExperiment: function() {
                    return i
                },
                hasRegistrationUsernameSuggestions: function() {
                    return l
                }
            });
            var s = a("862205");
            let n = (0, s.createExperiment)({
                    kind: "user",
                    id: "2023-06_unique_username_registration",
                    label: "Unique Username Registration",
                    defaultConfig: {
                        livecheckEnabled: !0,
                        suggestions: !0
                    },
                    treatments: [{
                        id: 1,
                        label: "Unique Username Registration enabled -livecheck -suggestions",
                        config: {
                            livecheckEnabled: !1,
                            suggestions: !1
                        }
                    }, {
                        id: 2,
                        label: "Unique Username Registration enabled -livecheck +suggestions",
                        config: {
                            livecheckEnabled: !1,
                            suggestions: !0
                        }
                    }, {
                        id: 3,
                        label: "Unique Username Registration enabled +livecheck -suggestions",
                        config: {
                            livecheckEnabled: !0,
                            suggestions: !1
                        }
                    }, {
                        id: 4,
                        label: "Unique Username Registration enabled +livecheck +suggestions",
                        config: {
                            livecheckEnabled: !0,
                            suggestions: !0
                        }
                    }]
                }),
                i = () => n.useExperiment({
                    location: "83ca1a_3"
                }, {
                    autoTrackExposure: !1
                }),
                l = () => n.getCurrentConfig({
                    location: "83ca1a_4"
                }, {
                    autoTrackExposure: !1
                }).suggestions
        },
        44984: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useUsernameLiveCheck: function() {
                    return d
                }
            });
            var s = a("884691"),
                n = a("917351"),
                i = a("65597"),
                l = a("255403"),
                r = a("947962"),
                o = a("2581"),
                u = a("415133");
            let d = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    d = (0, i.default)([o.default], () => o.default.validate(e), [e]),
                    c = (0, i.default)([o.default], () => o.default.isRateLimited()),
                    E = (0, r.usePomeloDebounceDelay)(),
                    m = s.useMemo(() => (0, n.debounce)(e => l.default.attemptPomelo(e, a ? "registration" : "modal", a), E), [E, a]);
                return s.useEffect(() => {
                    t && !c && null == d && "" !== e && m(e)
                }, [t, c, d, e, m]), s.useMemo(() => null != d ? (0, u.formatUsernameLiveCheckValidation)(d) : void 0, [d])
            }
        },
        386244: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: i = "currentColor",
                    foreground: l,
                    ...r
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, n.default)(r),
                    width: t,
                    height: a,
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("g", {
                        clipPath: "url(#clip0_3283_145261)",
                        children: (0, s.jsx)("path", {
                            d: "M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z",
                            fill: i,
                            className: l
                        })
                    }), (0, s.jsx)("defs", {
                        children: (0, s.jsx)("clipPath", {
                            id: "clip0_3283_145261",
                            children: (0, s.jsx)("rect", {
                                width: "24",
                                height: "24",
                                fill: "white"
                            })
                        })
                    })]
                })
            }
        },
        253989: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("75196");

            function i(e) {
                let {
                    width: t = 16,
                    height: a = 16,
                    color: i = "currentColor",
                    foreground: l,
                    ...r
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, n.default)(r),
                    width: t,
                    height: a,
                    viewBox: "0 0 23 23",
                    children: (0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M11.5 23C17.8513 23 23 17.8513 23 11.5C23 5.14873 17.8513 0 11.5 0C5.14873 0 0 5.14873 0 11.5C0 17.8513 5.14873 23 11.5 23ZM10.0284 5.58634C10.5187 5.66805 10.8499 6.13176 10.7682 6.62205L10.4697 8.41282H13.7544L14.1022 6.32613C14.1839 5.83584 14.6476 5.50462 15.1379 5.58634C15.6282 5.66805 15.9594 6.13176 15.8777 6.62205L15.5792 8.41282H16.6933C17.1903 8.41282 17.5933 8.81577 17.5933 9.31282C17.5933 9.80988 17.1903 10.2128 16.6933 10.2128H15.2792L14.8223 12.9547H16.1256C16.6226 12.9547 17.0256 13.3577 17.0256 13.8547C17.0256 14.3518 16.6226 14.7547 16.1256 14.7547H14.5223L14.1745 16.8414C14.0928 17.3317 13.6291 17.6629 13.1388 17.5812C12.6485 17.4995 12.3173 17.0358 12.399 16.5455L12.6974 14.7547H9.41273L9.06495 16.8414C8.98324 17.3317 8.51953 17.6629 8.02924 17.5812C7.53895 17.4995 7.20773 17.0358 7.28944 16.5455L7.5879 14.7547H6.47395C5.97689 14.7547 5.57395 14.3518 5.57395 13.8547C5.57395 13.3577 5.97689 12.9547 6.47395 12.9547H7.8879L8.34489 10.2128H7.04168C6.54462 10.2128 6.14168 9.80988 6.14168 9.31282C6.14168 8.81577 6.54462 8.41282 7.04168 8.41282H8.64489L8.99267 6.32613C9.07438 5.83584 9.53809 5.50462 10.0284 5.58634ZM13.4544 10.2128L12.9974 12.9547H9.71273L10.1697 10.2128H13.4544Z",
                        fill: i,
                        className: l
                    })
                })
            }
        },
        892845: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return p
                }
            });
            var s = a("37983"),
                n = a("884691"),
                i = a("627445"),
                l = a.n(i),
                r = a("759843"),
                o = a("65597"),
                u = a("77078"),
                d = a("327037"),
                c = a("152584"),
                E = a("599417"),
                m = a("506885"),
                f = a("697218"),
                g = a("945330"),
                _ = a("599110"),
                S = a("158998"),
                h = a("255403"),
                I = a("2581"),
                T = a("415133"),
                N = a("998957"),
                M = a("426149"),
                O = a("767282"),
                L = a("935583"),
                R = a("15881"),
                v = a("49111"),
                P = a("782340"),
                x = a("968414");

            function p(e) {
                var t;
                let {
                    source: a,
                    transitionState: i,
                    onClose: p
                } = e, [A, y] = n.useState(R.PomeloModalSlides.INFO), [U, b] = n.useState(!1), [D, j] = n.useState(null), [k, w] = n.useState(L.EditState.NONE), [F, G] = n.useState(!1), [B, V] = n.useState(!1), W = n.useRef(null), H = (0, o.default)([I.default], () => I.default.usernameSuggestion()), X = (0, o.default)([I.default], () => I.default.isCurrentUsernameInvalid()), Y = (0, o.default)([f.default], () => {
                    let e = f.default.getCurrentUser();
                    return l(null != e, "PomeloModal: user cannot be undefined"), e
                });
                n.useEffect(() => (!I.default.wasSuggestionsFetched() && h.default.fetchSuggestions(), () => {
                    h.default.resetSuggestions()
                }), []), n.useEffect(() => {
                    k === L.EditState.EDIT_USERNAME && V(!0), _.default.track(v.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
                        source: a,
                        step: k
                    })
                }, [k, a]), n.useEffect(() => {
                    !B && null != H && H.length > 0 && q(e => ({
                        ...e,
                        username: H
                    }))
                }, [H, B]);
                let [z, q] = n.useState({
                    username: (0, T.getDefaultPomelo)(Y),
                    globalName: S.default.getName(Y)
                }), K = n.useMemo(() => [{
                    slideId: R.PomeloModalSlides.INFO,
                    next: R.PomeloModalSlides.EDIT_SCREEN,
                    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
                }, {
                    slideId: R.PomeloModalSlides.EDIT_SCREEN,
                    next: R.PomeloModalSlides.FINISH_LATER,
                    back: R.PomeloModalSlides.INFO,
                    footerButtons: [k === L.EditState.PREVIEW ? "GOT_IT" : "BACK", k === L.EditState.PREVIEW ? "GOT_IT" : k === L.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
                }, {
                    slideId: R.PomeloModalSlides.FINISH_LATER,
                    back: R.PomeloModalSlides.EDIT_SCREEN
                }, {
                    slideId: R.PomeloModalSlides.FINISH_LATER
                }], [k]), Z = K.length, Q = n.useCallback(async () => {
                    if (z.globalName.length <= 0) {
                        let e = P.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                            minNum: 1,
                            maxNum: 32
                        });
                        j(e), _.default.track(v.AnalyticEvents.POMELO_ERRORS, {
                            reason: e,
                            display_name_error: !0,
                            location: "modal"
                        });
                        return
                    }
                    if (S.default.getGlobalName(Y) === z.globalName) {
                        w(L.EditState.EDIT_USERNAME);
                        return
                    }
                    try {
                        j(null), b(!0), await (0, c.saveAccountRequest)({
                            global_name: z.globalName
                        }), w(L.EditState.EDIT_USERNAME)
                    } catch (a) {
                        let e = new E.default(a),
                            t = e.getAnyErrorMessage();
                        _.default.track(v.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            display_name_error: !0,
                            location: "modal"
                        }), j(t)
                    } finally {
                        b(!1)
                    }
                }, [Y, z]), $ = n.useCallback(async () => {
                    try {
                        j(null), b(!0), await h.default.createPomelo({
                            username: (0, T.formatPomeloForEditing)(z.username)
                        }), await (0, d.fetchProfile)(Y.id), w(L.EditState.PREVIEW)
                    } catch (a) {
                        let e = new E.default(a),
                            t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : P.default.Messages.ERROR_GENERIC_TITLE;
                        j(t), _.default.track(v.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            username_error: !0,
                            location: "modal"
                        })
                    } finally {
                        b(!1)
                    }
                }, [z, Y.id]), J = X || (0, T.shouldSkipToEditUsername)(Y), ee = n.useCallback(() => {
                    w(J ? L.EditState.EDIT_USERNAME : L.EditState.EDIT_DISPLAY_NAME), y(K[Math.min(Z - 1, A + 1)].slideId)
                }, [A, K, Z, J]), et = n.useCallback(() => {
                    j(null), A === R.PomeloModalSlides.EDIT_SCREEN ? k === L.EditState.EDIT_USERNAME ? J ? (w(L.EditState.NONE), y(K[Math.max(0, A - 1)].slideId)) : w(L.EditState.EDIT_DISPLAY_NAME) : k === L.EditState.EDIT_DISPLAY_NAME ? (w(L.EditState.NONE), y(K[Math.max(0, A - 1)].slideId)) : k === L.EditState.PREVIEW && w(L.EditState.EDIT_USERNAME) : y(K[Math.max(0, A - 1)].slideId)
                }, [K, A, k, J]), ea = n.useCallback(() => {
                    y(R.PomeloModalSlides.FINISH_LATER)
                }, []), es = n.useMemo(() => A === R.PomeloModalSlides.EDIT_SCREEN && k === L.EditState.EDIT_DISPLAY_NAME ? Q : A === R.PomeloModalSlides.EDIT_SCREEN && k === L.EditState.EDIT_USERNAME ? $ : ee, [A, k, Q, $, ee]), en = n.useMemo(() => {
                    var e;
                    return C(null !== (t = null === (e = K.find(e => e.slideId === A)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
                        handleNext: es,
                        handleBack: et,
                        handleRemindMeLater: ea,
                        onClose: p
                    }, U)
                }, [et, ea, es, p, K, A, U]), ei = n.useMemo(() => (0, T.getUserAvatarURLForPomelo)(Y), [Y]);
                n.useLayoutEffect(() => {
                    (0, m.default)(Y.id, ei)
                }, [Y, ei]), n.useEffect(() => {
                    var e, t;
                    switch (k) {
                        case L.EditState.EDIT_DISPLAY_NAME:
                            null === (e = W.current) || void 0 === e || e.focusDisplayName();
                            break;
                        case L.EditState.EDIT_USERNAME:
                            null === (t = W.current) || void 0 === t || t.focusUsername()
                    }
                }, [k]);
                let el = F || null != D || k !== L.EditState.EDIT_USERNAME ? void 0 : P.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                    source: Y.username
                });
                return (0, s.jsxs)(u.ModalRoot, {
                    className: x.modalRoot,
                    impression: {
                        impressionName: r.ImpressionNames.POMELO_LANDING,
                        impressionProperties: {
                            source: a,
                            impression_group: r.ImpressionGroups.POMELO_FLOW
                        }
                    },
                    transitionState: i,
                    size: u.ModalSize.DYNAMIC,
                    children: [(0, s.jsx)(u.Button, {
                        onClick: p,
                        size: u.Button.Sizes.MIN,
                        look: u.Button.Looks.BLANK,
                        className: x.closeContainer,
                        "aria-label": P.default.Messages.CLOSE,
                        children: (0, s.jsx)(g.default, {
                            width: 15,
                            height: 15,
                            className: x.close
                        })
                    }), (0, s.jsx)(u.ModalContent, {
                        className: x.contentContainer,
                        children: (0, s.jsxs)(u.Slides, {
                            activeSlide: A,
                            width: 480,
                            children: [(0, s.jsx)(u.Slide, {
                                id: R.PomeloModalSlides.INFO,
                                children: (0, s.jsx)(O.default, {
                                    user: Y
                                })
                            }), (0, s.jsx)(u.Slide, {
                                id: R.PomeloModalSlides.EDIT_SCREEN,
                                children: (0, s.jsx)(N.default, {
                                    user: Y,
                                    error: D,
                                    editState: k,
                                    userRef: W,
                                    formValues: z,
                                    footerNotice: el,
                                    onChangeFormValue: e => {
                                        j(null), null != e.username && G(!0), q(t => ({
                                            ...t,
                                            ...e
                                        }))
                                    },
                                    onFocusUsername: () => w(L.EditState.EDIT_USERNAME),
                                    onFocusDisplayName: () => w(L.EditState.EDIT_DISPLAY_NAME),
                                    onClose: p
                                })
                            }), (0, s.jsx)(u.Slide, {
                                id: R.PomeloModalSlides.FINISH_LATER,
                                children: (0, s.jsx)(M.default, {
                                    onClose: p
                                })
                            })]
                        })
                    }), en]
                })
            }
            let C = (e, t, a) => 0 === e.length ? null : (0, s.jsxs)(u.ModalFooter, {
                className: x.footer,
                children: [(0, s.jsxs)("div", {
                    className: x.inline,
                    children: [e.includes("REMIND_ME_LATER") && (0, s.jsx)(u.Button, {
                        className: x.unfilledButton,
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        look: u.Button.Looks.BLANK,
                        color: u.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children: P.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
                    }), e.includes("NEXT") && (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: P.default.Messages.NEXT
                    }), e.includes("SUBMIT") && (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: P.default.Messages.SUBMIT
                    }), e.includes("GET_STARTED") && (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: P.default.Messages.GET_STARTED
                    }), e.includes("GOT_IT") && (0, s.jsx)(u.Button, {
                        type: "button",
                        size: u.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: P.default.Messages.GOT_IT
                    })]
                }), e.includes("BACK") && (0, s.jsx)(u.Button, {
                    className: x.unfilledButton,
                    type: "button",
                    size: u.Button.Sizes.SMALL,
                    look: u.Button.Looks.BLANK,
                    color: u.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: P.default.Messages.BACK
                })]
            })
        },
        500645: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("414456"),
                i = a.n(n),
                l = a("506838"),
                r = a("669491"),
                o = a("77078"),
                u = a("775955"),
                d = a("381546"),
                c = a("341923");
            let E = () => (0, s.jsx)(u.default, {
                    width: 13,
                    height: 13,
                    backgroundColor: r.default.colors.TEXT_POSITIVE.css
                }),
                m = () => (0, s.jsx)(d.default, {
                    width: 13,
                    height: 13,
                    color: r.default.colors.TEXT_DANGER.css
                }),
                f = () => (0, s.jsx)(d.default, {
                    width: 13,
                    height: 13,
                    color: r.default.colors.TEXT_WARNING.css
                });

            function g(e) {
                let t = (0, l.match)(e.type).with("info", () => (0, s.jsx)(f, {})).with("error", () => (0, s.jsx)(m, {})).with("success", () => (0, s.jsx)(E, {})).otherwise(() => null);
                return (0, s.jsxs)(s.Fragment, {
                    children: [t, (0, s.jsx)(o.Text, {
                        variant: "text-sm/medium",
                        className: i(c.formMessage, {
                            [c.formMessageNegative]: "error" === e.type,
                            [c.formMessagePositive]: "success" === e.type
                        }),
                        children: e.children
                    })]
                })
            }
        },
        998957: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var s = a("37983"),
                n = a("884691"),
                i = a("301165"),
                l = a("77078"),
                r = a("79112"),
                o = a("217513"),
                u = a("158998"),
                d = a("303270"),
                c = a("935583"),
                E = a("49111"),
                m = a("782340"),
                f = a("341923");

            function g(e) {
                let {
                    userRef: t,
                    ...a
                } = e, {
                    user: g,
                    editState: _,
                    onClose: S
                } = a, h = (0, o.default)(g.id), I = function(e, t, a) {
                    switch (e) {
                        case c.EditState.EDIT_USERNAME:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            };
                        case c.EditState.EDIT_DISPLAY_NAME:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
                            };
                        case c.EditState.PREVIEW:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
                                    displayName: t
                                }), subtitle: m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                                    onClick: () => {
                                        a(), r.default.open(E.UserSettingsSections.ACCOUNT)
                                    }
                                })
                            };
                        default:
                            return {
                                header: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: m.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            }
                    }
                }(_, u.default.getName(g), S), [T, N] = (0, i.useSpring)(() => ({
                    opacity: 0,
                    y: 10
                }));
                return n.useEffect(() => {
                    N({
                        y: 0,
                        opacity: 1,
                        from: {
                            y: 10,
                            opacity: 0
                        }
                    })
                }, [N, _]), (0, s.jsxs)("div", {
                    className: f.displayNameContainer,
                    children: [(0, s.jsxs)(i.animated.div, {
                        style: {
                            opacity: T.opacity,
                            y: T.y
                        },
                        children: [(0, s.jsx)(l.Heading, {
                            className: f.title,
                            color: "header-primary",
                            variant: "heading-xl/extrabold",
                            children: I.header
                        }), (0, s.jsx)(l.Heading, {
                            className: f.subtitle,
                            color: "header-secondary",
                            variant: "heading-sm/medium",
                            children: I.subtitle
                        })]
                    }), (0, s.jsx)(d.default, {
                        ...a,
                        displayProfile: h,
                        ref: t
                    })]
                })
            }
        },
        303270: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return L
                }
            });
            var s = a("37983"),
                n = a("884691"),
                i = a("414456"),
                l = a.n(i),
                r = a("301165"),
                o = a("65597"),
                u = a("77078"),
                d = a("206230"),
                c = a("526887"),
                E = a("289918"),
                m = a("935409"),
                f = a("158998"),
                g = a("415133"),
                _ = a("500645"),
                S = a("925922"),
                h = a("935583"),
                I = a("590456"),
                T = a("782340"),
                N = a("341923"),
                M = a("107681");
            let O = n.forwardRef(function(e, t) {
                let {
                    style: a,
                    value: n,
                    placeholder: i,
                    maxLength: r,
                    onFocus: o,
                    onChange: d
                } = e;
                return (0, s.jsx)(u.TextArea, {
                    className: l(N.userCardInput, a),
                    autosize: !0,
                    error: null,
                    showCharacterCount: !1,
                    spellCheck: !1,
                    showRemainingCharacterCount: !1,
                    value: n,
                    placeholder: i,
                    rows: 1,
                    maxLength: r,
                    onChange: d,
                    onFocus: o,
                    onKeyDown: e => {
                        "Enter" === e.key && e.preventDefault()
                    },
                    inputRef: t
                })
            });
            var L = n.forwardRef(function(e, t) {
                let {
                    user: a,
                    error: i,
                    formValues: L,
                    displayProfile: R,
                    onChangeFormValue: v,
                    onFocusDisplayName: P,
                    onFocusUsername: x,
                    editState: p
                } = e, {
                    username: C,
                    globalName: A
                } = L, y = n.useRef(null), U = n.useRef(null), b = n.useMemo(() => a.merge({
                    discriminator: "0000"
                }), [a]), [D, j] = (0, r.useSpring)(() => ({
                    opacity: 0,
                    y: 5
                }));
                n.useEffect(() => {
                    j({
                        y: 0,
                        opacity: 1,
                        from: {
                            y: 5,
                            opacity: 0
                        }
                    })
                }, [j, p]), n.useImperativeHandle(t, () => ({
                    focusDisplayName: () => {
                        var e, t, a;
                        null === (t = U.current) || void 0 === t || t.setSelection(0, null === (e = U.current) || void 0 === e ? void 0 : e.value.length), null === (a = U.current) || void 0 === a || a.focus()
                    },
                    focusUsername: () => {
                        var e, t, a;
                        null === (t = y.current) || void 0 === t || t.setSelection(0, null === (e = y.current) || void 0 === e ? void 0 : e.value.length), null === (a = y.current) || void 0 === a || a.focus()
                    }
                }), []);
                let k = (0, o.default)([d.default], () => d.default.useReducedMotion),
                    {
                        createMultipleConfettiAt: w
                    } = n.useContext(c.ConfettiCannonContext),
                    F = null == R ? void 0 : R.getLegacyUsername();
                return n.useEffect(() => {
                    if (!k && p === h.EditState.PREVIEW) a.username.includes(h.POMELO_KEYWORD) && (w(window.innerWidth / 2 + 150, 0, {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: 0,
                                y: -180
                            },
                            maxValue: {
                                x: 500,
                                y: 180
                            }
                        }
                    }, 15), w(window.innerWidth / 2 - 150, 0, {
                        velocity: {
                            type: "static-random",
                            minValue: {
                                x: -500,
                                y: -180
                            },
                            maxValue: {
                                x: 0,
                                y: 180
                            }
                        }
                    }, 15))
                }, [w, p, a, k]), (0, s.jsxs)("div", {
                    className: l(N.userCardContainer, {
                        [N.shinyCard]: p === h.EditState.PREVIEW
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: N.profileCard,
                        children: [(0, s.jsx)(E.default, {
                            displayProfile: R,
                            user: b,
                            allowEdit: !1,
                            guildId: void 0,
                            profileType: I.UserProfileTypes.POMELO_POPOUT,
                            showPremiumBadgeUpsell: !1
                        }), (0, s.jsx)(m.UserPopoutAvatar, {
                            user: b,
                            displayProfile: R,
                            isMobile: !1,
                            status: null,
                            onClose: void 0,
                            disableUserProfileLink: !0,
                            hasBanner: !1,
                            profileType: I.UserProfileTypes.POMELO_POPOUT,
                            animateOnHover: !1
                        }), p === h.EditState.PREVIEW && null != F && (0, s.jsx)("div", {
                            className: N.legacyUsernameBadgeContainer,
                            children: (0, s.jsx)(u.Tooltip, {
                                position: "top",
                                text: T.default.Messages.ORIGINALLY_KNOWN_AS.format({
                                    legacyUsername: F
                                }),
                                spacing: 12,
                                children: e => (0, s.jsx)(u.Anchor, {
                                    ...e,
                                    onClick: e.onClick,
                                    children: (0, s.jsx)("img", {
                                        className: N.legacyUsernameBadge,
                                        alt: "",
                                        src: M
                                    })
                                })
                            })
                        })]
                    }), p !== h.EditState.PREVIEW && (0, s.jsxs)(r.animated.div, {
                        style: {
                            opacity: D.opacity,
                            y: D.y
                        },
                        className: N.inputContainer,
                        children: [p === h.EditState.EDIT_DISPLAY_NAME && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(u.Text, {
                                className: N.textPadding,
                                color: "text-muted",
                                variant: "text-sm/semibold",
                                children: T.default.Messages.DISPLAY_NAME
                            }), (0, s.jsx)(O, {
                                style: l(N.displayNameHeight, N["heading-xl/bold"]),
                                value: null != A ? A : "",
                                placeholder: f.default.getName(a),
                                maxLength: h.MAX_DISPLAY_NAME_LENGTH,
                                onChange: e => v({
                                    globalName: e
                                }),
                                onFocus: P,
                                ref: U
                            })]
                        }), p === h.EditState.EDIT_USERNAME && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(u.Text, {
                                className: N.textPadding,
                                color: "text-muted",
                                variant: "text-sm/semibold",
                                children: T.default.Messages.USERNAME
                            }), (0, s.jsx)(O, {
                                style: l(N.userCardHeight, N.lowercaseUsername, N["heading-lg/medium"]),
                                value: null != C ? C : "",
                                placeholder: a.username,
                                maxLength: h.MAX_DISPLAY_NAME_LENGTH,
                                onChange: e => v({
                                    username: e.replace("@", "")
                                }),
                                onFocus: x,
                                ref: y
                            })]
                        }), (0, s.jsxs)("div", {
                            className: N.messageContainer,
                            children: [null != i && (0, s.jsx)(_.default, {
                                type: "error",
                                children: i
                            }), null != e.footerNotice && (0, s.jsx)(u.Text, {
                                variant: "text-sm/normal",
                                children: e.footerNotice
                            }), null == e.footerNotice && null == i && p === h.EditState.EDIT_USERNAME && (0, s.jsx)(S.default, {
                                username: C
                            })]
                        })]
                    }), p === h.EditState.PREVIEW && (0, s.jsxs)("div", {
                        className: N.userCard,
                        children: [(0, s.jsx)(u.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: f.default.getName(a)
                        }), (0, s.jsx)(u.Heading, {
                            color: "text-normal",
                            variant: "heading-lg/medium",
                            children: a.username
                        }), (0, s.jsx)(u.Text, {
                            className: N.memberText,
                            color: "text-muted",
                            variant: "text-sm/medium",
                            children: T.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                date: (0, g.getMemberSince)(a.id)
                            })
                        })]
                    })]
                })
            })
        },
        426149: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("77078"),
                i = a("79112"),
                l = a("49111"),
                r = a("782340"),
                o = a("341923");

            function u(e) {
                let {
                    onClose: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: o.infoContainer,
                    children: [(0, s.jsx)(n.Heading, {
                        className: o.finishTitle,
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
                    }), (0, s.jsx)(n.Text, {
                        className: o.subtitleFinish,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
                    }), (0, s.jsx)(n.Text, {
                        className: o.promptFinish,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: r.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                            onClick: () => {
                                t(), i.default.open(l.UserSettingsSections.ACCOUNT)
                            }
                        })
                    }), (0, s.jsx)(n.Button, {
                        className: o.button,
                        type: "button",
                        size: n.Button.Sizes.SMALL,
                        onClick: t,
                        children: r.default.Messages.INVITES_DISABLED_CONFIRMATION
                    })]
                })
            }
        },
        767282: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return g
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("414456"),
                i = a.n(n),
                l = a("77078"),
                r = a("564875"),
                o = a("701909"),
                u = a("386244"),
                d = a("253989"),
                c = a("49111"),
                E = a("782340"),
                m = a("341923"),
                f = a("259707");

            function g(e) {
                let {
                    user: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: m.infoContainer,
                    children: [(0, s.jsx)("img", {
                        className: m.infoPicture,
                        alt: "",
                        src: f
                    }), (0, s.jsx)(l.Heading, {
                        className: m.title,
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
                            n: t.tag
                        })
                    }), (0, s.jsx)(l.Text, {
                        className: m.subtitleInfo,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
                    }), (0, s.jsx)(l.Text, {
                        className: m.prompt,
                        color: "header-secondary",
                        variant: "text-sm/medium",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                            helpdeskArticle: o.default.getArticleURL(c.HelpdeskArticles.POMELO_FAQ)
                        })
                    }), (0, s.jsxs)("div", {
                        className: i([m.infoItem, m.infoItemSpacing]),
                        children: [(0, s.jsx)("div", {
                            className: m.infoIcon,
                            children: (0, s.jsx)(r.default, {
                                width: 20,
                                height: 20
                            })
                        }), (0, s.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_1.format()
                        })]
                    }), (0, s.jsxs)("div", {
                        className: i([m.infoItem, m.infoItemSpacing]),
                        children: [(0, s.jsx)("div", {
                            className: m.infoIcon,
                            children: (0, s.jsx)(u.default, {
                                width: 20,
                                height: 20
                            })
                        }), (0, s.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
                        })]
                    }), (0, s.jsxs)("div", {
                        className: m.infoItem,
                        children: [(0, s.jsx)("div", {
                            className: m.infoIcon,
                            children: (0, s.jsx)(d.default, {
                                width: 20,
                                height: 20
                            })
                        }), (0, s.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: E.default.Messages.UNIQUE_USERNAME_EXISTING_FLOW_PROMPT_ITEM_3.format({
                                username: t.tag
                            })
                        })]
                    })]
                })
            }
        },
        15881: function(e, t, a) {
            "use strict";
            var s, n;
            a.r(t), a.d(t, {
                PomeloModalSlides: function() {
                    return s
                }
            }), (n = s || (s = {}))[n.INFO = 0] = "INFO", n[n.EDIT_SCREEN = 1] = "EDIT_SCREEN", n[n.FINISH_LATER = 2] = "FINISH_LATER"
        },
        925922: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var s = a("37983");
            a("884691");
            var n = a("506838"),
                i = a("644417"),
                l = a("415133"),
                r = a("44984"),
                o = a("500645");

            function u(e) {
                let t = (0, r.useUsernameLiveCheck)((0, l.formatPomeloForEditing)(e.username));
                if (null == t) return null;
                let a = (0, n.match)(t.type).with(i.NameValidationState.RATE_LIMIT, () => "info").with(i.NameValidationState.ERROR, () => "error").with(i.NameValidationState.AVAILABLE, () => "success").with(i.NameValidationState.INTERNAL_ERROR, () => null).exhaustive();
                return null == a ? null : (0, s.jsx)(o.default, {
                    type: a,
                    children: t.message
                })
            }
        }
    }
]);