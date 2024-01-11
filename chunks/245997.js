            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            }), n("424973"), n("222007"), n("808653");
            var i = n("446674"),
                r = n("913144"),
                s = n("320954"),
                o = n("379881"),
                l = n("271938"),
                u = n("42203"),
                a = n("923959"),
                d = n("305961"),
                c = n("49111");
            let _ = null,
                f = {},
                E = null;

            function h() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let p = h();

            function g(e, t) {
                e.index = t
            }

            function I(e) {
                let t = a.default.getChannels(e),
                    n = h(),
                    i = e => {
                        var t;
                        let {
                            channel: i
                        } = e, r = null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        r.push({
                            channel: i,
                            index: -1
                        })
                    };
                return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, a.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, a.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, s.default)(n._categories, n).forEach(g), f[e] = n, n
            }

            function A() {
                f = {}, null != _ && I(_)
            }

            function m(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                f[t] = void 0, _ === t && I(t)
            }

            function N(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                f[t] = void 0, _ === t && I(t)
            }

            function v(e) {
                let {
                    guildId: t
                } = e;
                f[t] = void 0, t === _ && I(t)
            }

            function R(e, t) {
                if (E = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (f[n] = void 0, n === _ && I(n), !0)
            }

            function S() {
                I(c.FAVORITES)
            }
            class T extends i.default.Store {
                initialize() {
                    this.waitFor(a.default, d.default, l.default, u.default, o.default), this.syncWith([o.default], S)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = f[e];
                        return null != t ? t : I(e)
                    }(e) : p
                }
            }
            T.displayName = "GuildCategoryStore";
            var C = new T(r.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (_ = null != t ? t : null, null == t || null != f[t]) return !1;
                    I(t)
                },
                CONNECTION_OPEN: A,
                OVERLAY_INITIALIZE: A,
                CACHE_LOADED_LAZY: A,
                GUILD_CREATE: m,
                GUILD_UPDATE: m,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete f[t]
                },
                CHANNEL_CREATE: N,
                CHANNEL_DELETE: N,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (f[e] = void 0, n = !0, _ === e && I(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (l.default.getId() !== n.id) return !1;
                    f[t] = void 0, t === _ && I(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == _) return !1;
                    I(_)
                },
                GUILD_ROLE_CREATE: v,
                GUILD_ROLE_UPDATE: v,
                GUILD_ROLE_DELETE: v,
                IMPERSONATE_UPDATE: v,
                IMPERSONATE_STOP: v,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != E ? R(u.default.getChannel(E), null) : R(u.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: i
                        } = t;
                        return l.default.getSessionId() !== i ? e : R(u.default.getChannel(n), n) || e
                    }, !1)
                }
            })