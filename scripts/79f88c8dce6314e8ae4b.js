(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["76546"], {
        255403: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var i = n("64379"),
                a = n("990746"),
                r = n("913144"),
                s = n("448993"),
                o = n("599110"),
                u = n("840707"),
                l = n("210898"),
                d = n("856368"),
                c = n("697543"),
                g = n("49111"),
                m = n("782340");
            n("2581");
            var f = {
                resetSuggestions: () => r.default.dispatch({
                    type: "POMELO_SUGGESTIONS_RESET"
                }),
                async fetchSuggestionsRegistration(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    if ((0, c.hasRegistrationUsernameSuggestions)()) {
                        r.default.dispatch({
                            type: "POMELO_SUGGESTIONS_RESET"
                        });
                        try {
                            var n;
                            let i = await a.default.get({
                                url: g.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
                                query: null == e ? void 0 : {
                                    global_name: e
                                },
                                timeout: t
                            });
                            if (i.ok && (null === (n = i.body) || void 0 === n ? void 0 : n.username) != null) return r.default.dispatch({
                                type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                                suggestion: i.body,
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
                        let t = await a.default.get({
                            url: g.Endpoints.POMELO_SUGGESTIONS
                        });
                        if (t.ok && (null === (e = t.body) || void 0 === e ? void 0 : e.username) != null) return r.default.dispatch({
                            type: "POMELO_SUGGESTIONS_SUCCESS",
                            suggestion: t.body
                        })
                    } catch (e) {
                        return
                    }
                },
                async attemptPomelo(e) {
                    var t, n;
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                        d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    let c = (t = e, !1 === /^[A-Za-z0-9_.]*$/.test(t) ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : t.includes("..") ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : t.length < 2 || t.length > 32 ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                        maxNum: 32,
                        minNum: 2
                    }) : void 0);
                    if (null != c) return o.default.track(g.AnalyticEvents.POMELO_ERRORS, {
                        reason: c,
                        username_error: !0,
                        location: a
                    }), r.default.dispatch({
                        type: "POMELO_ATTEMPT_FAILURE",
                        username: e,
                        error: c
                    });
                    if ((0, l.getPomeloAttempt)()) try {
                        let t = await u.default.post({
                            url: d ? g.Endpoints.POMELO_ATTEMPT_UNAUTHED : g.Endpoints.POMELO_ATTEMPT,
                            body: {
                                username: e
                            },
                            trackedActionData: {
                                event: i.NetworkActionNames.POMELO_ATTEMPT,
                                properties: {
                                    requested_username: e
                                }
                            }
                        });
                        t.body.taken && o.default.track(g.AnalyticEvents.POMELO_ERRORS, {
                            reason: "already_taken",
                            username_error: !0,
                            location: a
                        }), r.default.dispatch({
                            type: "POMELO_ATTEMPT_SUCCESS",
                            username: e,
                            taken: t.body.taken
                        })
                    } catch (u) {
                        ;
                        let t = new s.APIError(u),
                            i = null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : void 0;
                        o.default.track(g.AnalyticEvents.POMELO_ERRORS, {
                            reason: i,
                            username_error: !0,
                            location: a
                        }), r.default.dispatch({
                            username: e,
                            type: "POMELO_ATTEMPT_FAILURE",
                            error: null != t.status && t.status < 500 && 401 !== t.status ? i : void 0,
                            statusCode: t.status,
                            retryAfter: t.retryAfter
                        })
                    }
                },
                async createPomelo(e) {
                    let t = await u.default.post({
                        body: e,
                        url: g.Endpoints.POMELO_CREATE,
                        trackedActionData: {
                            event: i.NetworkActionNames.POMELO_CREATE
                        }
                    });
                    return r.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: t.body
                    }), t.body
                }
            }
        },
        210898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPomeloAttempt: function() {
                    return r
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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
                r = () => a.getCurrentConfig({
                    location: "c22166_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
        },
        947962: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                usePomeloDebounceDelay: function() {
                    return r
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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
                r = () => a.useExperiment({
                    location: "52560d_1"
                }, {
                    autoTrackExposure: !1
                }).delay
        },
        2581: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var i = n("703275"),
                a = n.n(i),
                r = n("498225"),
                s = n("913144");
            let o = {
                    taken: null,
                    error: void 0,
                    rateLimited: !0
                },
                u = {
                    validations: new a({
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
            class l extends r.default.Store {
                isRateLimited() {
                    return null != u.retryAfterTime && Date.now() < u.retryAfterTime
                }
                validate(e) {
                    let t = u.validations.get(e);
                    return this.isRateLimited() && (null == t || t.rateLimited) ? o : this.isRateLimited() || null == t || !t.rateLimited ? t : void 0
                }
                registrationUsernameSuggestion() {
                    return u.suggestions.registration.suggestion.username
                }
                usernameSuggestion() {
                    return u.suggestions.migration.suggestion.username
                }
                isCurrentUsernameInvalid() {
                    return u.currentUsernameInvalid
                }
                wasRegistrationSuggestionFetched(e) {
                    return u.suggestions.registration.source === e && u.suggestions.registration.fetched
                }
                wasSuggestionsFetched() {
                    return u.suggestions.migration.fetched
                }
            }
            l.displayName = "PomeloStore";
            var d = new l(s.default, {
                POMELO_ATTEMPT_SUCCESS: function(e) {
                    let {
                        username: t,
                        taken: n
                    } = e;
                    u.validations.set(t, {
                        taken: n
                    })
                },
                POMELO_ATTEMPT_FAILURE: function(e) {
                    let {
                        username: t,
                        error: n,
                        statusCode: i,
                        retryAfter: a
                    } = e;
                    429 === i ? u.validations.set(t, {
                        taken: null,
                        error: n,
                        rateLimited: !0
                    }, (null != a ? a : 7) * 1e3) : u.validations.set(t, {
                        taken: null,
                        error: n
                    }), null != a && (u.retryAfterTime = Date.now() + 1e3 * a)
                },
                POMELO_SUGGESTIONS_RESET: function() {
                    u.suggestions.migration = {
                        suggestion: {
                            username: void 0
                        },
                        fetched: !1
                    }, u.suggestions.registration = {
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
                    u.suggestions.migration = {
                        suggestion: t,
                        fetched: !0
                    }, (null == t ? void 0 : t.invalid_current_username) === !0 && (u.currentUsernameInvalid = !0)
                },
                POMELO_REGISTRATION_SUGGESTIONS_SUCCESS: function(e) {
                    let {
                        suggestion: t,
                        source: n
                    } = e;
                    u.suggestions.registration = {
                        suggestion: t,
                        source: n,
                        fetched: !0
                    }, (null == t ? void 0 : t.username) != null && u.validations.set(t.username, {
                        taken: !1
                    })
                }
            })
        },
        856368: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isInPomeloSuggestionsExperiment: function() {
                    return r
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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
                r = () => a.getCurrentConfig({
                    location: "1907ae_1"
                }, {
                    autoTrackExposure: !1
                }).enabled
        },
        644417: function(e, t, n) {
            "use strict";
            var i, a;
            n.r(t), n.d(t, {
                NameValidationState: function() {
                    return i
                }
            }), (a = i || (i = {})).AVAILABLE = "AVAILABLE", a.ERROR = "ERROR", a.RATE_LIMIT = "RATE_LIMIT", a.INTERNAL_ERROR = "INTERNAL_ERROR"
        },
        415133: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getUserAvatarURLForPomelo: function() {
                    return g
                },
                getDefaultPomelo: function() {
                    return m
                },
                shouldSkipToEditUsername: function() {
                    return O
                },
                formatPomeloForEditing: function() {
                    return v
                },
                getMemberSince: function() {
                    return R
                },
                formatUsernameLiveCheckValidation: function() {
                    return S
                }
            });
            var i = n("377849"),
                a = n.n(i),
                r = n("505143"),
                s = n("315102"),
                o = n("299039"),
                u = n("159885"),
                l = n("644417"),
                d = n("935583"),
                c = n("782340");

            function g(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return s.default.getUserAvatarURL({
                    id: e.id,
                    avatar: e.avatar,
                    bot: e.bot,
                    discriminator: "0000"
                }, t, 80)
            }

            function m(e) {
                let t = (0, u.stripDiacritics)(e.username).replace(d.dirtyChars, "").replace(d.coalescePeriods, ".").toLowerCase();
                return "".concat(t).concat(e.discriminator).substring(0, 32)
            }
            let f = ["@", "#", ":"],
                E = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
                _ = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

            function O(e) {
                var t, n;
                let i = e.username.toLowerCase();
                if ((t = i, n = d.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !n.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
                for (let e of f)
                    if (i.includes(e)) return !0;
                for (let e of _)
                    if (i === e.toLowerCase()) return !0;
                for (let e of E)
                    if (i.includes(e.toLowerCase())) return !0;
                return !1
            }

            function v(e) {
                return e.toLowerCase().replace(/\s/g, "").replace("@", "")
            }

            function R(e) {
                let t = o.default.extractTimestamp(e);
                try {
                    return a(new Date(t)).format("MMM DD, YYYY")
                } catch (e) {}
                return null
            }

            function S(e) {
                return (0, r.match)(e).with({
                    rateLimited: !0
                }, () => ({
                    type: l.NameValidationState.RATE_LIMIT,
                    message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
                })).with({
                    error: r.P.not(r.P.nullish)
                }, e => {
                    let {
                        error: t
                    } = e;
                    return {
                        type: l.NameValidationState.ERROR,
                        message: t
                    }
                }).with({
                    taken: !1
                }, () => ({
                    type: l.NameValidationState.AVAILABLE,
                    message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
                })).with({
                    taken: !0
                }, () => ({
                    type: l.NameValidationState.ERROR,
                    message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
                })).with({
                    error: r.P.nullish
                }, () => ({
                    type: l.NameValidationState.INTERNAL_ERROR,
                    message: ""
                })).otherwise(() => void 0)
            }
        },
        697543: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUURegistrationExperiment: function() {
                    return r
                },
                hasRegistrationUsernameSuggestions: function() {
                    return s
                }
            });
            var i = n("862205");
            let a = (0, i.createExperiment)({
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
                r = () => a.useExperiment({
                    location: "83ca1a_3"
                }, {
                    autoTrackExposure: !1
                }),
                s = () => a.getCurrentConfig({
                    location: "83ca1a_4"
                }, {
                    autoTrackExposure: !1
                }).suggestions
        },
        44984: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUsernameLiveCheck: function() {
                    return d
                }
            });
            var i = n("773670"),
                a = n("427964"),
                r = n("744196"),
                s = n("255403"),
                o = n("947962"),
                u = n("2581"),
                l = n("415133");
            let d = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    d = (0, r.default)([u.default], () => u.default.validate(e), [e]),
                    c = (0, r.default)([u.default], () => u.default.isRateLimited()),
                    g = (0, o.usePomeloDebounceDelay)(),
                    m = i.useMemo(() => (0, a.debounce)(e => s.default.attemptPomelo(e, n ? "registration" : "modal", n), g), [g, n]);
                return i.useEffect(() => {
                    t && !c && null == d && "" !== e && m(e)
                }, [t, c, d, e, m]), i.useMemo(() => null != d ? (0, l.formatUsernameLiveCheckValidation)(d) : void 0, [d])
            }
        },
        79345: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useUsernameStatus: function() {
                    return r
                }
            });
            var i = n("773670"),
                a = n("44984");
            let r = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : void 0,
                    s = (0, a.useUsernameLiveCheck)(e, t, n),
                    [o, u] = i.useState(void 0);
                return i.useEffect(() => {
                    "" === e || e === r ? u(void 0) : null != s && u(s)
                }, [s, e, r]), o
            }
        },
        447997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var i = n("920040"),
                a = n("773670"),
                r = n("623829"),
                s = n("2621");
            let o = () => {
                let e = a.useRef(null),
                    [t, n] = a.useState(0),
                    i = a.useMemo(() => new s.default(e => {
                        let [t] = e;
                        return n(t.contentRect.height)
                    }), []);
                return a.useLayoutEffect(() => (null != e.current && i.observe(e.current), () => i.disconnect()), [i]), {
                    ref: e,
                    height: t
                }
            };

            function u(e) {
                let {
                    show: t,
                    children: n,
                    top: a = 0,
                    bottom: s = 0
                } = e, {
                    ref: u,
                    height: l
                } = o(), d = (0, r.useSpring)({
                    from: {
                        height: 0,
                        paddingBottom: "0px",
                        marginTop: "0px"
                    },
                    to: {
                        height: t ? l : 0,
                        paddingBottom: t ? "".concat(s, "px") : "0px",
                        marginTop: t ? "".concat(a, "px") : "0px"
                    },
                    config: {
                        tension: 170,
                        friction: 26
                    }
                }), c = (0, r.useSpring)({
                    from: {
                        opacity: 0
                    },
                    to: {
                        opacity: t ? 1 : 0
                    },
                    config: {
                        duration: 200,
                        easing: t ? e => e ** 4 : e => e * (2 - e)
                    }
                });
                return (0, i.jsx)(r.animated.div, {
                    style: {
                        overflow: "hidden",
                        height: d.height,
                        paddingBottom: d.paddingBottom,
                        marginTop: d.marginTop
                    },
                    children: (0, i.jsx)(r.animated.div, {
                        style: {
                            opacity: c.opacity
                        },
                        ref: u,
                        children: n
                    })
                })
            }
        }
    }
]);