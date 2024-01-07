            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                r = n("913144");
            let o = {
                    topEmojisByGuildId: {}
                },
                t = o,
                a = {};
            class f extends i.default.PersistedStore {
                initialize(e) {
                    t = null != e ? e : o
                }
                getState() {
                    return t
                }
                getTopEmojiIdsByGuildId(e) {
                    return t.topEmojisByGuildId[e]
                }
                getIsFetching(e) {
                    return a[e]
                }
            }
            f.displayName = "TopEmojiStore", f.persistKey = "TopEmojiStore";
            var _ = new f(r.default, {
                LOGOUT: function() {
                    t = o, a = {}
                },
                TOP_EMOJIS_FETCH: function(e) {
                    let {
                        guildId: s
                    } = e;
                    a[s] = !0
                },
                TOP_EMOJIS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: s,
                        topEmojisMetadata: n
                    } = e;
                    t.topEmojisByGuildId[s] = n.map(e => e.emojiId), a[s] = !1
                }
            })