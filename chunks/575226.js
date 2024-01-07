            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("866227"),
                l = i.n(n),
                s = i("446674"),
                a = i("913144"),
                r = i("299039");
            let o = {
                    lastSeenNewlyAddedEmojiIds: {}
                },
                u = o,
                c = {};

            function d() {
                for (let e in c) u.lastSeenNewlyAddedEmojiIds[e] = c[e]
            }
            class f extends s.default.PersistedStore {
                initialize(e) {
                    u = null != e ? e : o
                }
                getState() {
                    return u
                }
                getLastSeenEmojiByGuild(e) {
                    return u.lastSeenNewlyAddedEmojiIds[e]
                }
                isNewerThanLastSeen(e, t) {
                    if (null == e || null == t) return !1;
                    let i = this.getLastSeenEmojiByGuild(e);
                    if (null == i) return !0;
                    if (r.default.compare(t, i.id) > 0) return !0;
                    {
                        let e = l(i.lastSeen),
                            t = l().isBefore(e.add(2, "weeks"));
                        return t && !i.acknowledged
                    }
                }
            }
            f.displayName = "NewlyAddedEmojiStore", f.persistKey = "NewlyAddedEmojiStore", f.migrations = [e => {
                let t = e.lastSeenNewlyAddedEmojiIds,
                    i = {};
                for (let e in t) {
                    let n = t[e];
                    i[e] = {
                        id: n,
                        lastSeen: Date.now(),
                        acknowledged: !1
                    }
                }
                return {
                    lastSeenNewlyAddedEmojiIds: i
                }
            }];
            var E = new f(a.default, {
                LOGOUT: function() {
                    u = o, c = {}
                },
                NEWLY_ADDED_EMOJI_SEEN_ACKNOWLEDGED: function(e) {
                    var t;
                    let {
                        guildId: i,
                        emojiId: n
                    } = e, l = null !== (t = c[i]) && void 0 !== t ? t : u.lastSeenNewlyAddedEmojiIds[i];
                    null == l || 0 > r.default.compare(l.id, n) ? c[i] = {
                        id: n,
                        lastSeen: Date.now(),
                        acknowledged: !0
                    } : c[i] = {
                        ...l,
                        acknowledged: !0
                    }
                },
                NEWLY_ADDED_EMOJI_SEEN_PENDING: function(e) {
                    var t;
                    let {
                        guildId: i,
                        emojiId: n
                    } = e, l = null !== (t = c[i]) && void 0 !== t ? t : u.lastSeenNewlyAddedEmojiIds[i];
                    (null == l || 0 > r.default.compare(l.id, n)) && (c[i] = {
                        id: n,
                        lastSeen: Date.now(),
                        acknowledged: !1
                    })
                },
                NEWLY_ADDED_EMOJI_SEEN_UPDATED: d,
                CLEAR_CACHES: function() {
                    u = o, d()
                },
                CONNECTION_CLOSED: d
            })