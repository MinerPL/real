            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return m
                }
            }), n("222007"), n("70102");
            var a = n("522632"),
                i = n("872717"),
                l = n("913144"),
                r = n("550766"),
                u = n("299285"),
                d = n("760850"),
                o = n("915639"),
                c = n("86878"),
                s = n("546463"),
                E = n("686470"),
                I = n("535974"),
                p = n("568734"),
                A = n("269180"),
                f = n("773336"),
                _ = n("260365"),
                T = n("438931"),
                C = n("215082"),
                y = n("49111"),
                h = n("954016"),
                N = n("782340");

            function D(t) {
                let {
                    applicationId: e,
                    secret: n,
                    channelId: a,
                    intent: i = h.ActivityIntent.PLAY,
                    embedded: r = !1,
                    analyticsLocations: u = []
                } = t;
                S(e, null, a, r, u).then(() => A.default.waitConnected(e)).then(() => Promise.race([A.default.waitSubscribed(e, y.RPCEvents.ACTIVITY_JOIN)])).then(() => {
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN",
                        applicationId: e,
                        secret: n,
                        intent: i,
                        embedded: r
                    })
                }).catch(() => l.default.dispatch({
                    type: "ACTIVITY_JOIN_FAILED",
                    applicationId: e
                }))
            }

            function S(t, e, n) {
                let d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : [];
                if (d) return null == n ? Promise.reject(Error("Invalid channel ID")) : ((0, r.startEmbeddedActivity)(n, t, s), Promise.resolve());
                if (c.default.isConnected(t)) return Promise.resolve();
                let p = null;
                if (null == e) {
                    let n = E.default.getActiveLibraryApplication(t);
                    e = null != n ? n.branchId : t
                }
                if (I.default.isLaunchable(t, e)) {
                    var f;
                    let n = I.default.getState(t, e),
                        l = E.default.getActiveLaunchOptionId(t, e);
                    if (null == n) throw Error("Missing dispatch game when launching");
                    let r = E.default.getLibraryApplication(t, e);
                    if (null == r) throw Error("Missing library application when launching");
                    p = (f = t, i.default.post({
                        url: y.Endpoints.OAUTH2_AUTHORIZE,
                        query: {
                            client_id: f,
                            response_type: "token",
                            scope: [y.OAuth2Scopes.IDENTIFY].join(" ")
                        },
                        retries: 3,
                        body: {
                            authorize: !0
                        },
                        oldFormErrors: !0
                    }).then(t => {
                        let e = t.body.location.split(/#|\?/),
                            n = a.parse(e[e.length - 1]);
                        if ("invalid_request" === n.error) return null;
                        if (null != n.error) {
                            var i;
                            throw Error("OAuth2 Error: ".concat(n.error, ": ").concat(null !== (i = n.error_description) && void 0 !== i ? i : "unknown error"))
                        }
                        return n.access_token
                    }, t => {
                        if (404 === t.status) return null;
                        throw t
                    })).then(t => A.default.launchDispatchApplication(n, t, o.default.locale, r.getBranchName(), l))
                } else {
                    let e = u.default.getApplication(t);
                    p = null != e ? A.default.launch(e) : A.default.launchGame(t)
                }
                let _ = Error("game not found");
                return null != p ? (l.default.dispatch({
                    type: "LIBRARY_APPLICATION_ACTIVE_BRANCH_UPDATE",
                    applicationId: t,
                    branchId: e
                }), l.default.dispatch({
                    type: "GAME_LAUNCH_START",
                    applicationId: t
                }), p.then(e => {
                    l.default.dispatch({
                        type: "GAME_LAUNCH_SUCCESS",
                        applicationId: t,
                        pids: e
                    })
                }).catch(e => {
                    C.default.show(y.NoticeTypes.LAUNCH_GAME_FAILURE, N.default.Messages.GAME_LAUNCH_FAILED_LAUNCH_TARGET_NOT_FOUND), l.default.dispatch({
                        type: "GAME_LAUNCH_FAIL",
                        applicationId: t,
                        error: _
                    })
                })) : (l.default.dispatch({
                    type: "GAME_LAUNCH_FAIL",
                    applicationId: t,
                    error: _
                }), Promise.reject(_))
            }
            var m = {
                addGame(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_ADD_OVERRIDE",
                        pid: t
                    })
                },
                toggleOverlay(t, e) {
                    let n = s.default.getGameByName(t.name);
                    if (null != n) {
                        let t = E.default.getActiveLibraryApplication(n.id);
                        if (null != t) {
                            let e = p.toggleFlag(t.getFlags(), y.LibraryApplicationFlags.OVERLAY_DISABLED);
                            T.updateFlags(t.id, t.branchId, e);
                            return
                        }
                    }
                    l.default.dispatch({
                        type: "RUNNING_GAME_TOGGLE_OVERLAY",
                        game: t,
                        newEnabledValue: e
                    })
                },
                toggleDetection(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_TOGGLE_DETECTION",
                        game: t
                    })
                },
                editName(t, e) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_EDIT_NAME",
                        game: t,
                        newName: e
                    })
                },
                identifyGame: (t, e) => (0, d.default)().then(e => new Promise((n, a) => {
                    if (null == e) {
                        a(Error("Game utils module not loaded"));
                        return
                    }
                    e.identifyGame(t, (e, i) => {
                        if (0 !== e) {
                            a(Error("Error ".concat(e, " when fetching info on ").concat(t)));
                            return
                        }
                        if (null == i.icon || "" === i.icon || null == i.name || "" === i.name) {
                            a(Error("Did not find data on ".concat(t)));
                            return
                        }
                        l.default.dispatch({
                            type: "GAME_ICON_UPDATE",
                            gameName: i.name,
                            icon: "data:image/png;base64,".concat(i.icon)
                        }), n(i)
                    })
                })),
                getDetectableGames() {
                    !s.default.fetching && null == s.default.lastFetched && l.default.wait(() => {
                        l.default.dispatch({
                            type: "GAMES_DATABASE_FETCH"
                        }), i.default.get({
                            url: y.Endpoints.APPLICATIONS_DETECTABLE,
                            headers: {
                                "If-None-Match": s.default.detectableGamesEtag
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: e,
                                headers: {
                                    etag: n
                                }
                            } = t;
                            l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: e,
                                etag: n
                            })
                        }, t => {
                            let {
                                status: e
                            } = t;
                            304 === e ? l.default.dispatch({
                                type: "GAMES_DATABASE_UPDATE",
                                games: [],
                                etag: s.default.detectableGamesEtag
                            }) : l.default.dispatch({
                                type: "GAMES_DATABASE_FETCH_FAIL"
                            })
                        })
                    })
                },
                reportUnverifiedGame(t) {
                    let {
                        name: e,
                        iconHash: n,
                        publisher: a,
                        distributor: r,
                        sku: u,
                        executableName: o
                    } = t, c = (0, d.cleanExecutablePath)(o);
                    if (null != c) {
                        var s, E;
                        i.default.post({
                            url: y.Endpoints.UNVERIFIED_APPLICATIONS,
                            body: {
                                name: e,
                                os: (0, f.getPlatformName)(),
                                icon: n,
                                distributor_application: (s = r, E = u, null == s || "" === s ? null : {
                                    distributor: s,
                                    sku: E
                                }),
                                executable: c,
                                publisher: a,
                                report_version: 3
                            },
                            retries: 1,
                            oldFormErrors: !0
                        }).then(t => {
                            let {
                                body: {
                                    name: e,
                                    hash: n,
                                    missing_data: a
                                }
                            } = t;
                            l.default.dispatch({
                                type: "UNVERIFIED_GAME_UPDATE",
                                name: e,
                                hash: n,
                                missingData: a
                            })
                        })
                    }
                },
                uploadIcon(t, e, n) {
                    i.default.post({
                        url: y.Endpoints.UNVERIFIED_APPLICATIONS_ICONS,
                        body: {
                            application_name: t,
                            application_hash: e,
                            icon: n
                        },
                        retries: 1,
                        oldFormErrors: !0
                    })
                },
                deleteEntry(t) {
                    l.default.dispatch({
                        type: "RUNNING_GAME_DELETE_ENTRY",
                        game: t
                    })
                },
                launch: S,
                async join(t) {
                    let {
                        userId: e,
                        sessionId: n,
                        applicationId: a,
                        channelId: i,
                        messageId: r,
                        intent: u = h.ActivityIntent.PLAY,
                        embedded: d = !1
                    } = t;
                    if (__OVERLAY__) return l.default.dispatch({
                        type: "OVERLAY_JOIN_GAME",
                        userId: e,
                        sessionId: n,
                        applicationId: a,
                        channelId: i,
                        messageId: r
                    }), Promise.resolve(!0);
                    l.default.dispatch({
                        type: "ACTIVITY_JOIN_LOADING",
                        applicationId: a
                    });
                    try {
                        let t = await _.default.getJoinSecret(e, n, a, i, r);
                        return D({
                            applicationId: a,
                            secret: t,
                            channelId: i,
                            intent: u,
                            embedded: d
                        }), !0
                    } catch (t) {
                        return l.default.dispatch({
                            type: "ACTIVITY_JOIN_FAILED",
                            applicationId: a
                        }), !1
                    }
                },
                joinWithSecret: D
            }