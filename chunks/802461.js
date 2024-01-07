            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("446674"),
                r = n("913144");
            let o = {
                    captionsById: new Map
                },
                t = o,
                a = !1,
                f = null;
            class _ extends i.default.PersistedStore {
                initialize(e) {
                    t = null != e ? {
                        captionsById: new Map(e.captionsById)
                    } : o
                }
                getState() {
                    return t
                }
                getCaptionsForEmojiById(e) {
                    var s;
                    let {
                        emojiId: n
                    } = e;
                    return null !== (s = t.captionsById.get(n)) && void 0 !== s ? s : []
                }
                getIsFetching() {
                    return a
                }
                getEmojiCaptionsTTL() {
                    return f
                }
                hasPersistedState() {
                    return t.captionsById.size > 0
                }
                clear() {
                    t = o, a = !1, f = null
                }
            }
            _.displayName = "EmojiCaptionsStore", _.persistKey = "EmojiCaptionsStore";
            var d = new _(r.default, {
                LOGOUT: function() {
                    t = o, a = !1, f = null
                },
                EMOJI_CAPTIONS_FETCH: function(e) {
                    let {} = e;
                    !a && (a = !0)
                },
                EMOJI_CAPTIONS_FETCH_SUCCESS: function(e) {
                    let {
                        emojiCaptions: s
                    } = e;
                    t.captionsById = new Map(Object.entries(s)), a = !1, f = Date.now() + 216e5
                },
                EMOJI_CAPTIONS_FETCH_ERROR: function(e) {
                    let {
                        is4XXError: s
                    } = e;
                    a = !1;
                    f = Date.now() + 6e4 * (s ? 10 : 1)
                },
                POST_CONNECTION_OPEN: function(e) {
                    let {} = e;
                    a = !1
                }
            })