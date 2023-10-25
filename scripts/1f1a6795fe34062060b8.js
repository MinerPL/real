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
        907572: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                FriendsIcon: function() {
                    return l
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("912557"),
                i = a("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: l = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...o
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 5v-.75C3 3.56 3.56 3 4.25 3s1.242.562 1.326 1.248C6.117 8.649 9.462 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.199-.147c-.289-.885-.841-1.723-1.317-2.31-.15-.184-.423-.056-.394.18l.25 1.996a.25.25 0 0 1-.248.281H9a2 2 0 0 1-2-2v-2.22c0-1.574-.671-3.054-1.53-4.374C3.888 10.969 3 7.888 3 5Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        775955: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return l
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("912557"),
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
                    return m
                }
            });
            var s = a("64379"),
                n = a("990746"),
                i = a("913144"),
                l = a("448993"),
                r = a("599110"),
                o = a("840707"),
                d = a("210898"),
                u = a("856368"),
                c = a("697543"),
                E = a("49111"),
                f = a("782340");
            a("2581");
            var m = {
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
                    if ((0, u.isInPomeloSuggestionsExperiment)()) try {
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
                        u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    let c = (t = e, !1 === /^[A-Za-z0-9_.]*$/.test(t) ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : t.includes("..") ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : t.length < 2 || t.length > 32 ? f.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
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
                    if ((0, d.getPomeloAttempt)()) try {
                        let t = await o.default.post({
                            url: u ? E.Endpoints.POMELO_ATTEMPT_UNAUTHED : E.Endpoints.POMELO_ATTEMPT,
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
                    return u
                }
            });
            var s = a("703275"),
                n = a.n(s),
                i = a("498225"),
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
            class d extends i.default.Store {
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
            d.displayName = "PomeloStore";
            var u = new d(l.default, {
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
                    return f
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
            var s = a("377849"),
                n = a.n(s),
                i = a("505143"),
                l = a("315102"),
                r = a("299039"),
                o = a("159885"),
                d = a("644417"),
                u = a("935583"),
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

            function f(e) {
                let t = (0, o.stripDiacritics)(e.username).replace(u.dirtyChars, "").replace(u.coalescePeriods, ".").toLowerCase();
                return "".concat(t).concat(e.discriminator).substring(0, 32)
            }
            let m = ["@", "#", ":"],
                g = ["```", "discord", "hypesquad", "system message", "system mesage", "sustem message", "sustem mesage", "clyde"],
                _ = ["discordtag", "everyone", "here", "discord nitro", "discord", "snowsgiving"];

            function S(e) {
                var t, a;
                let s = e.username.toLowerCase();
                if ((t = s, a = u.CONTROL_CHARACTERS_CODE, t.split("").filter(e => !a.includes(e.charCodeAt(0))).join("")).length < 2) return !0;
                for (let e of m)
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
                    type: d.NameValidationState.RATE_LIMIT,
                    message: c.default.Messages.APPLICATION_STORE_LISTING_PURCHASE_RATE_LIMIT_ERROR_SHORT
                })).with({
                    error: i.P.not(i.P.nullish)
                }, e => {
                    let {
                        error: t
                    } = e;
                    return {
                        type: d.NameValidationState.ERROR,
                        message: t
                    }
                }).with({
                    taken: !1
                }, () => ({
                    type: d.NameValidationState.AVAILABLE,
                    message: c.default.Messages.POMELO_EXISTING_FLOW_AVAILABLE
                })).with({
                    taken: !0
                }, () => ({
                    type: d.NameValidationState.ERROR,
                    message: c.default.Messages.POMELO_EXISTING_FLOW_ERROR_UNAVAILABLE
                })).with({
                    error: i.P.nullish
                }, () => ({
                    type: d.NameValidationState.INTERNAL_ERROR,
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
                    return u
                }
            });
            var s = a("773670"),
                n = a("427964"),
                i = a("744196"),
                l = a("255403"),
                r = a("947962"),
                o = a("2581"),
                d = a("415133");
            let u = function(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    u = (0, i.default)([o.default], () => o.default.validate(e), [e]),
                    c = (0, i.default)([o.default], () => o.default.isRateLimited()),
                    E = (0, r.usePomeloDebounceDelay)(),
                    f = s.useMemo(() => (0, n.debounce)(e => l.default.attemptPomelo(e, a ? "registration" : "modal", a), E), [E, a]);
                return s.useEffect(() => {
                    t && !c && null == u && "" !== e && f(e)
                }, [t, c, u, e, f]), s.useMemo(() => null != u ? (0, d.formatUsernameLiveCheckValidation)(u) : void 0, [u])
            }
        },
        386244: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var s = a("920040");
            a("773670");
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
            var s = a("920040");
            a("773670");
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
            var s = a("920040"),
                n = a("773670"),
                i = a("161179"),
                l = a.n(i),
                r = a("64379"),
                o = a("744196"),
                d = a("77078"),
                u = a("327037"),
                c = a("152584"),
                E = a("599417"),
                f = a("506885"),
                m = a("697218"),
                g = a("945330"),
                _ = a("599110"),
                S = a("158998"),
                h = a("255403"),
                I = a("2581"),
                T = a("415133"),
                M = a("998957"),
                N = a("426149"),
                L = a("767282"),
                O = a("935583"),
                R = a("15881"),
                v = a("49111"),
                x = a("782340"),
                C = a("308020");

            function p(e) {
                var t;
                let {
                    source: a,
                    transitionState: i,
                    onClose: p
                } = e, [A, y] = n.useState(R.PomeloModalSlides.INFO), [U, b] = n.useState(!1), [j, D] = n.useState(null), [k, w] = n.useState(O.EditState.NONE), [F, G] = n.useState(!1), [B, V] = n.useState(!1), H = n.useRef(null), W = (0, o.default)([I.default], () => I.default.usernameSuggestion()), X = (0, o.default)([I.default], () => I.default.isCurrentUsernameInvalid()), Y = (0, o.default)([m.default], () => {
                    let e = m.default.getCurrentUser();
                    return l(null != e, "PomeloModal: user cannot be undefined"), e
                });
                n.useEffect(() => (!I.default.wasSuggestionsFetched() && h.default.fetchSuggestions(), () => {
                    h.default.resetSuggestions()
                }), []), n.useEffect(() => {
                    k === O.EditState.EDIT_USERNAME && V(!0), _.default.track(v.AnalyticEvents.POMELO_EDIT_STEP_VIEWED, {
                        source: a,
                        step: k
                    })
                }, [k, a]), n.useEffect(() => {
                    !B && null != W && W.length > 0 && Z(e => ({
                        ...e,
                        username: W
                    }))
                }, [W, B]);
                let [z, Z] = n.useState({
                    username: (0, T.getDefaultPomelo)(Y),
                    globalName: S.default.getName(Y)
                }), q = n.useMemo(() => [{
                    slideId: R.PomeloModalSlides.INFO,
                    next: R.PomeloModalSlides.EDIT_SCREEN,
                    footerButtons: ["REMIND_ME_LATER", "GET_STARTED"]
                }, {
                    slideId: R.PomeloModalSlides.EDIT_SCREEN,
                    next: R.PomeloModalSlides.FINISH_LATER,
                    back: R.PomeloModalSlides.INFO,
                    footerButtons: [k === O.EditState.PREVIEW ? "GOT_IT" : "BACK", k === O.EditState.PREVIEW ? "GOT_IT" : k === O.EditState.EDIT_USERNAME ? "SUBMIT" : "NEXT"]
                }, {
                    slideId: R.PomeloModalSlides.FINISH_LATER,
                    back: R.PomeloModalSlides.EDIT_SCREEN
                }, {
                    slideId: R.PomeloModalSlides.FINISH_LATER
                }], [k]), K = q.length, Q = n.useCallback(async () => {
                    if (z.globalName.length <= 0) {
                        let e = x.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                            minNum: 1,
                            maxNum: 32
                        });
                        D(e), _.default.track(v.AnalyticEvents.POMELO_ERRORS, {
                            reason: e,
                            display_name_error: !0,
                            location: "modal"
                        });
                        return
                    }
                    if (S.default.getGlobalName(Y) === z.globalName) {
                        w(O.EditState.EDIT_USERNAME);
                        return
                    }
                    try {
                        D(null), b(!0), await (0, c.saveAccountRequest)({
                            global_name: z.globalName
                        }), w(O.EditState.EDIT_USERNAME)
                    } catch (a) {
                        let e = new E.default(a),
                            t = e.getAnyErrorMessage();
                        _.default.track(v.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            display_name_error: !0,
                            location: "modal"
                        }), D(t)
                    } finally {
                        b(!1)
                    }
                }, [Y, z]), $ = n.useCallback(async () => {
                    try {
                        D(null), b(!0), await h.default.createPomelo({
                            username: (0, T.formatPomeloForEditing)(z.username)
                        }), await (0, u.fetchProfile)(Y.id), w(O.EditState.PREVIEW)
                    } catch (a) {
                        let e = new E.default(a),
                            t = (null == e ? void 0 : e.status) != null && e.status >= 400 && e.status < 500 ? e.getAnyErrorMessage() : x.default.Messages.ERROR_GENERIC_TITLE;
                        D(t), _.default.track(v.AnalyticEvents.POMELO_ERRORS, {
                            reason: t,
                            username_error: !0,
                            location: "modal"
                        })
                    } finally {
                        b(!1)
                    }
                }, [z, Y.id]), J = X || (0, T.shouldSkipToEditUsername)(Y), ee = n.useCallback(() => {
                    w(J ? O.EditState.EDIT_USERNAME : O.EditState.EDIT_DISPLAY_NAME), y(q[Math.min(K - 1, A + 1)].slideId)
                }, [A, q, K, J]), et = n.useCallback(() => {
                    D(null), A === R.PomeloModalSlides.EDIT_SCREEN ? k === O.EditState.EDIT_USERNAME ? J ? (w(O.EditState.NONE), y(q[Math.max(0, A - 1)].slideId)) : w(O.EditState.EDIT_DISPLAY_NAME) : k === O.EditState.EDIT_DISPLAY_NAME ? (w(O.EditState.NONE), y(q[Math.max(0, A - 1)].slideId)) : k === O.EditState.PREVIEW && w(O.EditState.EDIT_USERNAME) : y(q[Math.max(0, A - 1)].slideId)
                }, [q, A, k, J]), ea = n.useCallback(() => {
                    y(R.PomeloModalSlides.FINISH_LATER)
                }, []), es = n.useMemo(() => A === R.PomeloModalSlides.EDIT_SCREEN && k === O.EditState.EDIT_DISPLAY_NAME ? Q : A === R.PomeloModalSlides.EDIT_SCREEN && k === O.EditState.EDIT_USERNAME ? $ : ee, [A, k, Q, $, ee]), en = n.useMemo(() => {
                    var e;
                    return P(null !== (t = null === (e = q.find(e => e.slideId === A)) || void 0 === e ? void 0 : e.footerButtons) && void 0 !== t ? t : [], {
                        handleNext: es,
                        handleBack: et,
                        handleRemindMeLater: ea,
                        onClose: p
                    }, U)
                }, [et, ea, es, p, q, A, U]), ei = n.useMemo(() => (0, T.getUserAvatarURLForPomelo)(Y), [Y]);
                n.useLayoutEffect(() => {
                    (0, f.default)(Y.id, ei)
                }, [Y, ei]), n.useEffect(() => {
                    var e, t;
                    switch (k) {
                        case O.EditState.EDIT_DISPLAY_NAME:
                            null === (e = H.current) || void 0 === e || e.focusDisplayName();
                            break;
                        case O.EditState.EDIT_USERNAME:
                            null === (t = H.current) || void 0 === t || t.focusUsername()
                    }
                }, [k]);
                let el = F || null != j || k !== O.EditState.EDIT_USERNAME ? void 0 : x.default.Messages.POMELO_SUGGESTION_ORIGIN_NOTICE.format({
                    source: Y.username
                });
                return (0, s.jsxs)(d.ModalRoot, {
                    className: C.modalRoot,
                    impression: {
                        impressionName: r.ImpressionNames.POMELO_LANDING,
                        impressionProperties: {
                            source: a,
                            impression_group: r.ImpressionGroups.POMELO_FLOW
                        }
                    },
                    transitionState: i,
                    size: d.ModalSize.DYNAMIC,
                    children: [(0, s.jsx)(d.Button, {
                        onClick: p,
                        size: d.Button.Sizes.MIN,
                        look: d.Button.Looks.BLANK,
                        className: C.closeContainer,
                        "aria-label": x.default.Messages.CLOSE,
                        children: (0, s.jsx)(g.default, {
                            width: 15,
                            height: 15,
                            className: C.close
                        })
                    }), (0, s.jsx)(d.ModalContent, {
                        className: C.contentContainer,
                        children: (0, s.jsxs)(d.Slides, {
                            activeSlide: A,
                            width: 480,
                            children: [(0, s.jsx)(d.Slide, {
                                id: R.PomeloModalSlides.INFO,
                                children: (0, s.jsx)(L.default, {
                                    user: Y
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: R.PomeloModalSlides.EDIT_SCREEN,
                                children: (0, s.jsx)(M.default, {
                                    user: Y,
                                    error: j,
                                    editState: k,
                                    userRef: H,
                                    formValues: z,
                                    footerNotice: el,
                                    onChangeFormValue: e => {
                                        D(null), null != e.username && G(!0), Z(t => ({
                                            ...t,
                                            ...e
                                        }))
                                    },
                                    onFocusUsername: () => w(O.EditState.EDIT_USERNAME),
                                    onFocusDisplayName: () => w(O.EditState.EDIT_DISPLAY_NAME),
                                    onClose: p
                                })
                            }), (0, s.jsx)(d.Slide, {
                                id: R.PomeloModalSlides.FINISH_LATER,
                                children: (0, s.jsx)(N.default, {
                                    onClose: p
                                })
                            })]
                        })
                    }), en]
                })
            }
            let P = (e, t, a) => 0 === e.length ? null : (0, s.jsxs)(d.ModalFooter, {
                className: C.footer,
                children: [(0, s.jsxs)("div", {
                    className: C.inline,
                    children: [e.includes("REMIND_ME_LATER") && (0, s.jsx)(d.Button, {
                        className: C.unfilledButton,
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        look: d.Button.Looks.BLANK,
                        color: d.Button.Colors.CUSTOM,
                        onClick: t.handleRemindMeLater,
                        children: x.default.Messages.POMELO_EXISTING_FLOW_PROMPT_SKIP_CTA
                    }), e.includes("NEXT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.default.Messages.NEXT
                    }), e.includes("SUBMIT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        submitting: a,
                        onClick: t.handleNext,
                        children: x.default.Messages.SUBMIT
                    }), e.includes("GET_STARTED") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.handleNext,
                        children: x.default.Messages.GET_STARTED
                    }), e.includes("GOT_IT") && (0, s.jsx)(d.Button, {
                        type: "button",
                        size: d.Button.Sizes.SMALL,
                        onClick: t.onClose,
                        children: x.default.Messages.GOT_IT
                    })]
                }), e.includes("BACK") && (0, s.jsx)(d.Button, {
                    className: C.unfilledButton,
                    type: "button",
                    size: d.Button.Sizes.SMALL,
                    look: d.Button.Looks.BLANK,
                    color: d.Button.Colors.CUSTOM,
                    onClick: t.handleBack,
                    children: x.default.Messages.BACK
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
            var s = a("920040");
            a("773670");
            var n = a("575482"),
                i = a.n(n),
                l = a("505143"),
                r = a("912557"),
                o = a("77078"),
                d = a("775955"),
                u = a("381546"),
                c = a("454925");
            let E = () => (0, s.jsx)(d.default, {
                    width: 13,
                    height: 13,
                    backgroundColor: r.default.colors.TEXT_POSITIVE.css
                }),
                f = () => (0, s.jsx)(u.default, {
                    width: 13,
                    height: 13,
                    color: r.default.colors.TEXT_DANGER.css
                }),
                m = () => (0, s.jsx)(u.default, {
                    width: 13,
                    height: 13,
                    color: r.default.colors.TEXT_WARNING.css
                });

            function g(e) {
                let t = (0, l.match)(e.type).with("info", () => (0, s.jsx)(m, {})).with("error", () => (0, s.jsx)(f, {})).with("success", () => (0, s.jsx)(E, {})).otherwise(() => null);
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
            var s = a("920040"),
                n = a("773670"),
                i = a("623829"),
                l = a("77078"),
                r = a("79112"),
                o = a("217513"),
                d = a("158998"),
                u = a("303270"),
                c = a("935583"),
                E = a("49111"),
                f = a("782340"),
                m = a("454925");

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
                                header: f.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: f.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            };
                        case c.EditState.EDIT_DISPLAY_NAME:
                            return {
                                header: f.default.Messages.POMELO_EXISTING_FLOW_STEP_1_TITLE, subtitle: f.default.Messages.POMELO_EXISTING_FLOW_STEP_1_SUBTITLE
                            };
                        case c.EditState.PREVIEW:
                            return {
                                header: f.default.Messages.POMELO_EXISTING_FLOW_COMPLETION_TITLE.format({
                                    displayName: t
                                }), subtitle: f.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
                                    onClick: () => {
                                        a(), r.default.open(E.UserSettingsSections.ACCOUNT)
                                    }
                                })
                            };
                        default:
                            return {
                                header: f.default.Messages.POMELO_EXISTING_FLOW_STEP_2_TITLE, subtitle: f.default.Messages.POMELO_EXISTING_FLOW_STEP_2_SUBTITLE
                            }
                    }
                }(_, d.default.getName(g), S), [T, M] = (0, i.useSpring)(() => ({
                    opacity: 0,
                    y: 10
                }));
                return n.useEffect(() => {
                    M({
                        y: 0,
                        opacity: 1,
                        from: {
                            y: 10,
                            opacity: 0
                        }
                    })
                }, [M, _]), (0, s.jsxs)("div", {
                    className: m.displayNameContainer,
                    children: [(0, s.jsxs)(i.animated.div, {
                        style: {
                            opacity: T.opacity,
                            y: T.y
                        },
                        children: [(0, s.jsx)(l.Heading, {
                            className: m.title,
                            color: "header-primary",
                            variant: "heading-xl/extrabold",
                            children: I.header
                        }), (0, s.jsx)(l.Heading, {
                            className: m.subtitle,
                            color: "header-secondary",
                            variant: "heading-sm/medium",
                            children: I.subtitle
                        })]
                    }), (0, s.jsx)(u.default, {
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
                    return O
                }
            });
            var s = a("920040"),
                n = a("773670"),
                i = a("575482"),
                l = a.n(i),
                r = a("623829"),
                o = a("744196"),
                d = a("77078"),
                u = a("206230"),
                c = a("526887"),
                E = a("289918"),
                f = a("935409"),
                m = a("158998"),
                g = a("415133"),
                _ = a("500645"),
                S = a("925922"),
                h = a("935583"),
                I = a("590456"),
                T = a("782340"),
                M = a("454925"),
                N = a("107681");
            let L = n.forwardRef(function(e, t) {
                let {
                    style: a,
                    value: n,
                    placeholder: i,
                    maxLength: r,
                    onFocus: o,
                    onChange: u
                } = e;
                return (0, s.jsx)(d.TextArea, {
                    className: l(M.userCardInput, a),
                    autosize: !0,
                    error: null,
                    showCharacterCount: !1,
                    spellCheck: !1,
                    showRemainingCharacterCount: !1,
                    value: n,
                    placeholder: i,
                    rows: 1,
                    maxLength: r,
                    onChange: u,
                    onFocus: o,
                    onKeyDown: e => {
                        "Enter" === e.key && e.preventDefault()
                    },
                    inputRef: t
                })
            });
            var O = n.forwardRef(function(e, t) {
                let {
                    user: a,
                    error: i,
                    formValues: O,
                    displayProfile: R,
                    onChangeFormValue: v,
                    onFocusDisplayName: x,
                    onFocusUsername: C,
                    editState: p
                } = e, {
                    username: P,
                    globalName: A
                } = O, y = n.useRef(null), U = n.useRef(null), b = n.useMemo(() => a.merge({
                    discriminator: "0000"
                }), [a]), [j, D] = (0, r.useSpring)(() => ({
                    opacity: 0,
                    y: 5
                }));
                n.useEffect(() => {
                    D({
                        y: 0,
                        opacity: 1,
                        from: {
                            y: 5,
                            opacity: 0
                        }
                    })
                }, [D, p]), n.useImperativeHandle(t, () => ({
                    focusDisplayName: () => {
                        var e, t, a;
                        null === (t = U.current) || void 0 === t || t.setSelection(0, null === (e = U.current) || void 0 === e ? void 0 : e.value.length), null === (a = U.current) || void 0 === a || a.focus()
                    },
                    focusUsername: () => {
                        var e, t, a;
                        null === (t = y.current) || void 0 === t || t.setSelection(0, null === (e = y.current) || void 0 === e ? void 0 : e.value.length), null === (a = y.current) || void 0 === a || a.focus()
                    }
                }), []);
                let k = (0, o.default)([u.default], () => u.default.useReducedMotion),
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
                    className: l(M.userCardContainer, {
                        [M.shinyCard]: p === h.EditState.PREVIEW
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: M.profileCard,
                        children: [(0, s.jsx)(E.default, {
                            displayProfile: R,
                            user: b,
                            allowEdit: !1,
                            guildId: void 0,
                            profileType: I.UserProfileTypes.POMELO_POPOUT,
                            showPremiumBadgeUpsell: !1
                        }), (0, s.jsx)(f.UserPopoutAvatar, {
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
                            className: M.legacyUsernameBadgeContainer,
                            children: (0, s.jsx)(d.Tooltip, {
                                position: "top",
                                text: T.default.Messages.ORIGINALLY_KNOWN_AS.format({
                                    legacyUsername: F
                                }),
                                spacing: 12,
                                children: e => (0, s.jsx)(d.Anchor, {
                                    ...e,
                                    onClick: e.onClick,
                                    children: (0, s.jsx)("img", {
                                        className: M.legacyUsernameBadge,
                                        alt: "",
                                        src: N
                                    })
                                })
                            })
                        })]
                    }), p !== h.EditState.PREVIEW && (0, s.jsxs)(r.animated.div, {
                        style: {
                            opacity: j.opacity,
                            y: j.y
                        },
                        className: M.inputContainer,
                        children: [p === h.EditState.EDIT_DISPLAY_NAME && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(d.Text, {
                                className: M.textPadding,
                                color: "text-muted",
                                variant: "text-sm/semibold",
                                children: T.default.Messages.DISPLAY_NAME
                            }), (0, s.jsx)(L, {
                                style: l(M.displayNameHeight, M["heading-xl/bold"]),
                                value: null != A ? A : "",
                                placeholder: m.default.getName(a),
                                maxLength: h.MAX_DISPLAY_NAME_LENGTH,
                                onChange: e => v({
                                    globalName: e
                                }),
                                onFocus: x,
                                ref: U
                            })]
                        }), p === h.EditState.EDIT_USERNAME && (0, s.jsxs)(s.Fragment, {
                            children: [(0, s.jsx)(d.Text, {
                                className: M.textPadding,
                                color: "text-muted",
                                variant: "text-sm/semibold",
                                children: T.default.Messages.USERNAME
                            }), (0, s.jsx)(L, {
                                style: l(M.userCardHeight, M.lowercaseUsername, M["heading-lg/medium"]),
                                value: null != P ? P : "",
                                placeholder: a.username,
                                maxLength: h.MAX_DISPLAY_NAME_LENGTH,
                                onChange: e => v({
                                    username: e.replace("@", "")
                                }),
                                onFocus: C,
                                ref: y
                            })]
                        }), (0, s.jsxs)("div", {
                            className: M.messageContainer,
                            children: [null != i && (0, s.jsx)(_.default, {
                                type: "error",
                                children: i
                            }), null != e.footerNotice && (0, s.jsx)(d.Text, {
                                variant: "text-sm/normal",
                                children: e.footerNotice
                            }), null == e.footerNotice && null == i && p === h.EditState.EDIT_USERNAME && (0, s.jsx)(S.default, {
                                username: P
                            })]
                        })]
                    }), p === h.EditState.PREVIEW && (0, s.jsxs)("div", {
                        className: M.userCard,
                        children: [(0, s.jsx)(d.Heading, {
                            color: "header-primary",
                            variant: "heading-xl/bold",
                            children: m.default.getName(a)
                        }), (0, s.jsx)(d.Heading, {
                            color: "text-normal",
                            variant: "heading-lg/medium",
                            children: a.username
                        }), (0, s.jsx)(d.Text, {
                            className: M.memberText,
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
                    return d
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("77078"),
                i = a("79112"),
                l = a("49111"),
                r = a("782340"),
                o = a("454925");

            function d(e) {
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
            var s = a("920040");
            a("773670");
            var n = a("575482"),
                i = a.n(n),
                l = a("77078"),
                r = a("564875"),
                o = a("701909"),
                d = a("386244"),
                u = a("253989"),
                c = a("49111"),
                E = a("782340"),
                f = a("454925"),
                m = a("259707");

            function g(e) {
                let {
                    user: t
                } = e;
                return (0, s.jsxs)("div", {
                    className: f.infoContainer,
                    children: [(0, s.jsx)("img", {
                        className: f.infoPicture,
                        alt: "",
                        src: m
                    }), (0, s.jsx)(l.Heading, {
                        className: f.title,
                        color: "header-primary",
                        variant: "heading-xl/bold",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_TITLE.format({
                            n: t.tag
                        })
                    }), (0, s.jsx)(l.Text, {
                        className: f.subtitleInfo,
                        color: "header-secondary",
                        variant: "text-md/medium",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_1.format()
                    }), (0, s.jsx)(l.Text, {
                        className: f.prompt,
                        color: "header-secondary",
                        variant: "text-sm/medium",
                        children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_BODY_2.format({
                            helpdeskArticle: o.default.getArticleURL(c.HelpdeskArticles.POMELO_FAQ)
                        })
                    }), (0, s.jsxs)("div", {
                        className: i([f.infoItem, f.infoItemSpacing]),
                        children: [(0, s.jsx)("div", {
                            className: f.infoIcon,
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
                        className: i([f.infoItem, f.infoItemSpacing]),
                        children: [(0, s.jsx)("div", {
                            className: f.infoIcon,
                            children: (0, s.jsx)(d.default, {
                                width: 20,
                                height: 20
                            })
                        }), (0, s.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-sm/medium",
                            children: E.default.Messages.POMELO_EXISTING_FLOW_PROMPT_ITEM_2.format()
                        })]
                    }), (0, s.jsxs)("div", {
                        className: f.infoItem,
                        children: [(0, s.jsx)("div", {
                            className: f.infoIcon,
                            children: (0, s.jsx)(u.default, {
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
                    return d
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("505143"),
                i = a("644417"),
                l = a("415133"),
                r = a("44984"),
                o = a("500645");

            function d(e) {
                let t = (0, r.useUsernameLiveCheck)((0, l.formatPomeloForEditing)(e.username));
                if (null == t) return null;
                let a = (0, n.match)(t.type).with(i.NameValidationState.RATE_LIMIT, () => "info").with(i.NameValidationState.ERROR, () => "error").with(i.NameValidationState.AVAILABLE, () => "success").with(i.NameValidationState.INTERNAL_ERROR, () => null).exhaustive();
                return null == a ? null : (0, s.jsx)(o.default, {
                    type: a,
                    children: t.message
                })
            }
        },
        564875: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return r
                }
            });
            var s = a("920040");
            a("773670");
            var n = a("469563"),
                i = a("907572"),
                l = a("75196"),
                r = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: n = "currentColor",
                        foreground: i,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, s.jsx)("path", {
                                fill: n,
                                className: i,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, s.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, i.FriendsIcon)
        }
    }
]);