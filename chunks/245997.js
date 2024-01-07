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
                u = n("271938"),
                a = n("42203"),
                l = n("923959"),
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
            let g = h();

            function p(e, t) {
                e.index = t
            }

            function I(e) {
                let t = l.default.getChannels(e),
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
                }), t[0, l.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, l.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, s.default)(n._categories, n).forEach(p), f[e] = n, n
            }

            function A() {
                f = {}, null != _ && I(_)
            }

            function N(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                f[t] = void 0, _ === t && I(t)
            }

            function m(e) {
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
                    this.waitFor(l.default, d.default, u.default, a.default, o.default), this.syncWith([o.default], S)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = f[e];
                        return null != t ? t : I(e)
                    }(e) : g
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
                GUILD_CREATE: N,
                GUILD_UPDATE: N,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete f[t]
                },
                CHANNEL_CREATE: m,
                CHANNEL_DELETE: m,
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
                    if (u.default.getId() !== n.id) return !1;
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
                    return null == t && null != E ? R(a.default.getChannel(E), null) : R(a.default.getChannel(t), t)
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
                        return u.default.getSessionId() !== i ? e : R(a.default.getChannel(n), n) || e
                    }, !1)
                }
            })