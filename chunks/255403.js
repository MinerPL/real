            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var i = n("759843"),
                a = n("872717"),
                s = n("913144"),
                r = n("448993"),
                o = n("599110"),
                u = n("840707"),
                l = n("210898"),
                d = n("856368"),
                g = n("697543"),
                c = n("49111"),
                m = n("782340");
            n("2581");
            var E = {
                resetSuggestions: () => s.default.dispatch({
                    type: "POMELO_SUGGESTIONS_RESET"
                }),
                async fetchSuggestionsRegistration(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1500;
                    if ((0, g.hasRegistrationUsernameSuggestions)()) {
                        s.default.dispatch({
                            type: "POMELO_SUGGESTIONS_RESET"
                        });
                        try {
                            var n;
                            let i = await a.default.get({
                                url: c.Endpoints.POMELO_SUGGESTIONS_UNAUTHED,
                                query: null == e ? void 0 : {
                                    global_name: e
                                },
                                timeout: t
                            });
                            if (i.ok && (null === (n = i.body) || void 0 === n ? void 0 : n.username) != null) return s.default.dispatch({
                                type: "POMELO_REGISTRATION_SUGGESTIONS_SUCCESS",
                                suggestion: i.body,
                                source: e
                            })
                        } catch (e) {
                            return
                        }
                    }
                },
                async fetchSuggestions(e) {
                    if ((0, d.isInPomeloSuggestionsExperiment)()) try {
                        var t;
                        s.default.dispatch({
                            type: "POMELO_SUGGESTIONS_FETCH",
                            usernameSuggestionLoading: !0
                        });
                        let n = await a.default.get({
                            url: c.Endpoints.POMELO_SUGGESTIONS,
                            timeout: e
                        });
                        if (n.ok && (null === (t = n.body) || void 0 === t ? void 0 : t.username) != null) return s.default.dispatch({
                            type: "POMELO_SUGGESTIONS_SUCCESS",
                            suggestion: n.body
                        })
                    } catch (e) {
                        return
                    }
                },
                async attemptPomelo(e) {
                    var t, n;
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "modal",
                        d = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        g = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    let E = (t = e, !1 === /^[A-Za-z0-9_.]*$/.test(t) ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_INVALID : t.includes("..") ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_DOT_DOT : t.length < 2 || t.length > 32 ? m.default.Messages.POMELO_EXISTING_FLOW_ERROR_LIMIT.format({
                        maxNum: 32,
                        minNum: 2
                    }) : void 0);
                    if (null != E) return o.default.track(c.AnalyticEvents.POMELO_ERRORS, {
                        reason: E,
                        username_error: !0,
                        location: a,
                        one_click_flow: g
                    }), s.default.dispatch({
                        type: "POMELO_ATTEMPT_FAILURE",
                        username: e,
                        error: E
                    });
                    if ((0, l.getPomeloAttempt)()) try {
                        let t = await u.default.post({
                            url: d ? c.Endpoints.POMELO_ATTEMPT_UNAUTHED : c.Endpoints.POMELO_ATTEMPT,
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
                        t.body.taken && o.default.track(c.AnalyticEvents.POMELO_ERRORS, {
                            reason: "already_taken",
                            username_error: !0,
                            location: a,
                            one_click_flow: g
                        }), s.default.dispatch({
                            type: "POMELO_ATTEMPT_SUCCESS",
                            username: e,
                            taken: t.body.taken
                        })
                    } catch (u) {
                        ;
                        let t = new r.APIError(u),
                            i = null !== (n = t.getAnyErrorMessage()) && void 0 !== n ? n : void 0;
                        o.default.track(c.AnalyticEvents.POMELO_ERRORS, {
                            reason: i,
                            username_error: !0,
                            location: a,
                            one_click_flow: g
                        }), s.default.dispatch({
                            username: e,
                            type: "POMELO_ATTEMPT_FAILURE",
                            error: null != t.status && t.status < 500 && 401 !== t.status ? i : void 0,
                            statusCode: t.status,
                            retryAfter: t.retryAfter
                        })
                    }
                },
                async createPomelo(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = await u.default.post({
                            body: e,
                            url: c.Endpoints.POMELO_CREATE,
                            trackedActionData: {
                                event: i.NetworkActionNames.POMELO_CREATE,
                                properties: {
                                    one_click_flow: t
                                }
                            }
                        });
                    return s.default.dispatch({
                        type: "CURRENT_USER_UPDATE",
                        user: n.body
                    }), n.body
                }
            }