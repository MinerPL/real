            "use strict";
            u.r(t), u.d(t, {
                default: function() {
                    return m
                }
            }), u("222007");
            var n = u("627445"),
                r = u.n(n),
                l = u("446674"),
                a = u("913144"),
                i = u("689275"),
                o = u("42203"),
                d = u("660478");
            let s = {},
                f = new Set;
            class c extends l.default.Store {
                initialize() {
                    this.waitFor(i.default, o.default, d.default)
                }
                getCount(e) {
                    return s[e]
                }
                getThreadIdsMissingCounts(e, t) {
                    return r(i.default.hasLoaded(e), "must wait for THREAD_LIST_SYNC before calling this"), t.filter(e => !(e in s) && !f.has(e))
                }
            }
            c.displayName = "ForumPostUnreadCountStore";
            var m = new c(a.default, {
                CONNECTION_OPEN: function() {
                    s = {}, f = new Set
                },
                THREAD_CREATE: function(e) {
                    let {
                        channel: t,
                        isNewlyCreated: u
                    } = e;
                    if (!u || !i.default.hasLoaded(t.guild_id)) return !1;
                    s[t.id] = 0
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        optimistic: u,
                        isPushNotification: n
                    } = e;
                    if (u || n || !(t in s)) return !1;
                    s[t]++
                },
                FORUM_UNREADS: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(e => {
                        null != e.count && (s[e.threadId] = e.count)
                    })
                },
                MESSAGE_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    if (!(t in s)) {
                        let e = o.default.getChannel(t),
                            u = o.default.getChannel(null == e ? void 0 : e.parent_id);
                        if (!(null == u ? void 0 : u.isForumLikeChannel())) return !1
                    }
                    s[t] = d.default.getUnreadCount(t)
                },
                REQUEST_FORUM_UNREADS: function(e) {
                    let {
                        threads: t
                    } = e;
                    t.forEach(e => {
                        let {
                            threadId: t
                        } = e;
                        return f.add(t)
                    })
                }
            })