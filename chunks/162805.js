            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var i = n("446674"),
                a = n("233736"),
                l = n("913144");
            let s = {},
                r = {},
                u = {
                    scrollTop: 0
                };

            function o(e) {
                return {
                    guildId: e,
                    scrollTop: null,
                    scrollTo: null
                }
            }

            function d(e) {
                if (null != s[e]) {
                    let {
                        scrollTop: t,
                        scrollHeight: n,
                        offsetHeight: i
                    } = s[e];
                    return t === n - i
                }
                return !0
            }
            class c extends i.default.Store {
                percentageScrolled(e) {
                    if (null != s[e]) {
                        let {
                            scrollTop: t,
                            scrollHeight: n
                        } = s[e];
                        return t / n
                    }
                    return 1
                }
                getChannelDimensions(e) {
                    return s[e]
                }
                getGuildDimensions(e) {
                    var t;
                    return null !== (t = r[e]) && void 0 !== t ? t : o(e)
                }
                getGuildListDimensions() {
                    return u
                }
                isAtBottom(e) {
                    return d(e)
                }
            }
            c.displayName = "DimensionStore";
            var _ = new c(l.default, {
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    let {
                        channelId: t,
                        scrollTop: n,
                        scrollHeight: i,
                        offsetHeight: l
                    } = e, r = s[t];
                    if (null == n || null == i || null == l) {
                        if (null == r) return !1;
                        delete s[t]
                    } else {
                        let e = {
                            channelId: t,
                            scrollTop: n,
                            scrollHeight: i,
                            offsetHeight: l
                        };
                        if (null != r && (0, a.default)(r, e)) return !1;
                        s[t] = e
                    }
                },
                UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
                    let {
                        guildId: t,
                        scrollTop: n,
                        scrollTo: i
                    } = e;
                    null == r[t] && (r[t] = o(t)), void 0 !== n && (r[t].scrollTop = n);
                    let a = !1;
                    return void 0 !== i && (a = r[t].scrollTo !== i, r[t].scrollTo = i), null != i || a
                },
                UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
                    let {
                        scrollTop: t
                    } = e;
                    u.scrollTop = t
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    d(t) && delete s[t]
                }
            })