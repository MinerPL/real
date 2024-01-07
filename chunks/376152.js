            "use strict";
            n.r(t), n.d(t, {
                fetchDropsEligibility: function() {
                    return r
                },
                fetchCodePlatformAvailability: function() {
                    return o
                },
                claimDropsRewardCode: function() {
                    return u
                },
                fetchDropsUserStatus: function() {
                    return d
                },
                unenrollDropsUser: function() {
                    return c
                },
                fetchEnrolledUser: function() {
                    return f
                },
                enrollDropsUser: function() {
                    return E
                },
                sendHeartbeat: function() {
                    return _
                },
                fetchProgress: function() {
                    return h
                }
            });
            var l = n("872717"),
                a = n("913144"),
                s = n("373469"),
                i = n("49111");
            let r = async e => {
                let t = !1;
                try {
                    let n = await l.default.get({
                        url: i.Endpoints.DROPS_ELIGIBILITY,
                        query: {
                            drops_quest_id: e
                        }
                    });
                    t = n.body.eligible
                } catch (e) {
                    t = !1
                }
                a.default.dispatch({
                    type: "DROPS_ELIGIBILITY_FETCH_SUCCESS",
                    isEligible: t,
                    dropsQuestId: e
                })
            }, o = async e => {
                let t = [];
                try {
                    let n = await l.default.get({
                        url: i.Endpoints.DROPS_PLATFORM_AVAILABILITY,
                        query: {
                            drops_quest_id: e
                        }
                    });
                    t = n.body.available_platforms
                } catch (e) {
                    t = []
                }
                a.default.dispatch({
                    type: "DROPS_PLATFORM_AVAILABILITY_SUCCESS",
                    availablePlatforms: t
                })
            }, u = async (e, t) => {
                try {
                    let n = await l.default.post({
                        url: i.Endpoints.DROPS_CLAIM_REWARD_CODE,
                        query: {
                            drops_quest_id: e,
                            platform: t
                        }
                    });
                    return a.default.dispatch({
                        type: "DROPS_REWARD_CODE_CLAIM_SUCCESS",
                        rewardCode: n.body.code
                    }), n.body.code
                } catch (e) {
                    throw e
                }
            }, d = async () => {
                try {
                    let e = await l.default.get({
                        url: i.Endpoints.DROPS_USER_STATUS
                    });
                    a.default.dispatch({
                        type: "DROPS_USER_STATUS_FETCH_SUCCESS",
                        codes: e.body
                    })
                } catch (e) {
                    a.default.dispatch({
                        type: "DROPS_USER_STATUS_FETCH_FAILURE"
                    })
                }
            }, c = async e => {
                await l.default.delete({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                }), a.default.dispatch({
                    type: "DROPS_UNENROLL_USER",
                    dropsQuestId: e
                }), await d()
            }, f = async e => {
                let t = await l.default.get({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                });
                await a.default.dispatch({
                    type: "DROPS_ENROLLED_USER_FETCH_SUCCESS",
                    enrolledUser: t.body.user,
                    isEnrolled: t.body.enrolled,
                    dropsQuestId: e
                })
            }, E = async e => {
                await l.default.post({
                    url: i.Endpoints.DROPS_ENROLL_USER,
                    query: {
                        drops_quest_id: e
                    }
                }), a.default.dispatch({
                    type: "DROPS_ENROLL_SUCCESS"
                })
            }, _ = async (e, t, n) => {
                let r = s.default.getViewerIds(t);
                try {
                    let s = await l.default.post({
                        url: i.Endpoints.DROPS_HEARTBEAT(e),
                        query: {
                            stream_key: t,
                            application_id: n,
                            viewer_count: r.length
                        },
                        retries: 2
                    });
                    a.default.dispatch({
                        type: "DROPS_HEARTBEAT_SUCCESS",
                        dropsQuestId: e,
                        completed: s.body.completed,
                        progress: s.body.progress
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "DROPS_HEARTBEAT_FAILURE",
                        dropsQuestId: e,
                        statusCode: null == t ? void 0 : t.status
                    })
                }
            }, h = async e => {
                try {
                    let t = await l.default.get({
                        url: i.Endpoints.DROPS_PROGRESS(e)
                    });
                    a.default.dispatch({
                        type: "DROPS_FETCH_PROGRESS_SUCCESS",
                        dropsQuestId: e,
                        completed: t.body.completed,
                        progress: t.body.progress
                    })
                } catch (t) {
                    a.default.dispatch({
                        type: "DROPS_FETCH_PROGRESS_FAILURE",
                        dropsQuestId: e
                    })
                }
            }