            "use strict";
            s.r(t), s.d(t, {
                fetchCurrentQuests: function() {
                    return d
                },
                sendHeartbeat: function() {
                    return c
                },
                enrollInQuest: function() {
                    return o
                }
            });
            var a = s("872717"),
                n = s("913144"),
                r = s("599417"),
                i = s("2973"),
                l = s("227231"),
                u = s("49111");
            async function d() {
                n.default.dispatch({
                    type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN"
                });
                try {
                    let e = await a.default.get({
                        url: u.Endpoints.QUESTS_CURRENT_QUESTS
                    });
                    n.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                        quests: e.body.map(l.questWithUserStatusFromServer)
                    })
                } catch (e) {
                    n.default.dispatch({
                        type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                        error: new r.default(e)
                    })
                }
            }
            async function c(e) {
                let {
                    questId: t,
                    streamKey: s,
                    applicationId: i
                } = e;
                try {
                    let e = await a.default.post({
                        url: u.Endpoints.QUESTS_HEARTBEAT(t),
                        body: {
                            stream_key: s,
                            application_id: i
                        }
                    });
                    n.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
                        userStatus: (0, l.questUserStatusFromServer)(e.body),
                        applicationId: i,
                        questId: t,
                        streamKey: s
                    })
                } catch (e) {
                    n.default.dispatch({
                        type: "QUESTS_SEND_HEARTBEAT_FAILURE",
                        error: new r.default(e),
                        questId: t,
                        streamKey: s
                    })
                }
            }
            async function o(e) {
                let t = i.default.isEnrolling(e);
                if (!t) {
                    n.default.dispatch({
                        type: "QUESTS_ENROLL_BEGIN",
                        questId: e
                    });
                    try {
                        let t = await a.default.post({
                            url: u.Endpoints.QUESTS_ENROLL(e)
                        });
                        n.default.dispatch({
                            type: "QUESTS_ENROLL_SUCCESS",
                            enrolledQuestUserStatus: (0, l.questUserStatusFromServer)(t.body)
                        })
                    } catch (t) {
                        n.default.dispatch({
                            type: "QUESTS_ENROLL_FAILURE",
                            questId: e
                        })
                    }
                }
            }