            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return o
                }
            }), s("222007");
            var a = s("446674"),
                n = s("913144");
            let r = !1,
                i = new Map,
                l = 0,
                u = new Set;

            function d(e) {
                let t = new Set(u);
                t.delete(e), u = t
            }
            class c extends a.default.Store {
                get quests() {
                    return i
                }
                get isFetchingCurrentQuests() {
                    return r
                }
                get lastFetchedCurrentQuests() {
                    return l
                }
                isEnrolling(e) {
                    return u.has(e)
                }
            }
            c.displayName = "QuestsStore";
            var o = new c(n.default, {
                LOGOUT: function() {
                    r = !1, i = new Map, l = 0, u = new Set
                },
                QUESTS_FETCH_CURRENT_QUESTS_BEGIN: function() {
                    l = Date.now(), r = !0
                },
                QUESTS_FETCH_CURRENT_QUESTS_SUCCESS: function(e) {
                    let {
                        quests: t
                    } = e;
                    for (let e of (r = !1, i = new Map, t)) i.set(e.id, e)
                },
                QUESTS_FETCH_CURRENT_QUESTS_FAILURE: function() {
                    l = 0, r = !1
                },
                QUESTS_SEND_HEARTBEAT_SUCCESS: function(e) {
                    let {
                        questId: t,
                        userStatus: s
                    } = e;
                    i = new Map(i);
                    let a = i.get(t);
                    null != a && i.set(t, {
                        ...a,
                        userStatus: s
                    })
                },
                QUESTS_ENROLL_BEGIN: function(e) {
                    let {
                        questId: t
                    } = e, s = new Set(u);
                    s.add(t), u = s
                },
                QUESTS_ENROLL_SUCCESS: function(e) {
                    let {
                        enrolledQuestUserStatus: t
                    } = e, s = new Map(i), a = s.get(t.questId);
                    null != a && s.set(t.questId, {
                        ...a,
                        userStatus: t
                    }), i = s, d(t.questId)
                },
                QUESTS_ENROLL_FAILURE: function(e) {
                    let {
                        questId: t
                    } = e;
                    d(t)
                }
            })