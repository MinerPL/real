            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var s = n("446674"),
                i = n("233736"),
                r = n("913144");
            let a = {},
                o = {},
                d = {
                    scrollTop: 0
                };

            function u(e) {
                return {
                    guildId: e,
                    scrollTop: null,
                    scrollTo: null
                }
            }

            function l(e) {
                if (null != a[e]) {
                    let {
                        scrollTop: t,
                        scrollHeight: n,
                        offsetHeight: s
                    } = a[e];
                    return t === n - s
                }
                return !0
            }
            class f extends s.default.Store {
                percentageScrolled(e) {
                    if (null != a[e]) {
                        let {
                            scrollTop: t,
                            scrollHeight: n
                        } = a[e];
                        return t / n
                    }
                    return 1
                }
                getChannelDimensions(e) {
                    return a[e]
                }
                getGuildDimensions(e) {
                    var t;
                    return null !== (t = o[e]) && void 0 !== t ? t : u(e)
                }
                getGuildListDimensions() {
                    return d
                }
                isAtBottom(e) {
                    return l(e)
                }
            }
            f.displayName = "DimensionStore";
            var _ = new f(r.default, {
                UPDATE_CHANNEL_DIMENSIONS: function(e) {
                    let {
                        channelId: t,
                        scrollTop: n,
                        scrollHeight: s,
                        offsetHeight: r
                    } = e, o = a[t];
                    if (null == n || null == s || null == r) {
                        if (null == o) return !1;
                        delete a[t]
                    } else {
                        let e = {
                            channelId: t,
                            scrollTop: n,
                            scrollHeight: s,
                            offsetHeight: r
                        };
                        if (null != o && (0, i.default)(o, e)) return !1;
                        a[t] = e
                    }
                },
                UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
                    let {
                        guildId: t,
                        scrollTop: n,
                        scrollTo: s
                    } = e;
                    null == o[t] && (o[t] = u(t)), void 0 !== n && (o[t].scrollTop = n);
                    let i = !1;
                    return void 0 !== s && (i = o[t].scrollTo !== s, o[t].scrollTo = s), null != s || i
                },
                UPDATE_GUILD_LIST_DIMENSIONS: function(e) {
                    let {
                        scrollTop: t
                    } = e;
                    d.scrollTop = t
                },
                CALL_CREATE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    l(t) && delete a[t]
                }
            })