            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            }), n("424973"), n("222007"), n("808653");
            var l = n("446674"),
                i = n("913144"),
                a = n("320954"),
                u = n("379881"),
                r = n("271938"),
                d = n("42203"),
                o = n("923959"),
                s = n("305961"),
                c = n("49111");
            let E = null,
                C = {},
                f = null;

            function _() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let A = _();

            function T(e, t) {
                e.index = t
            }

            function S(e) {
                let t = o.default.getChannels(e),
                    n = _(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, i = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        i.push({
                            channel: l,
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
                }), t[0, o.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, o.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, a.default)(n._categories, n).forEach(T), C[e] = n, n
            }

            function h() {
                C = {}, null != E && S(E)
            }

            function I(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                C[t] = void 0, E === t && S(t)
            }

            function L(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                C[t] = void 0, E === t && S(t)
            }

            function N(e) {
                let {
                    guildId: t
                } = e;
                C[t] = void 0, t === E && S(t)
            }

            function g(e, t) {
                if (f = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (C[n] = void 0, n === E && S(n), !0)
            }

            function D() {
                S(c.FAVORITES)
            }
            class U extends l.default.Store {
                initialize() {
                    this.waitFor(o.default, s.default, r.default, d.default, u.default), this.syncWith([u.default], D)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = C[e];
                        return null != t ? t : S(e)
                    }(e) : A
                }
            }
            U.displayName = "GuildCategoryStore";
            var R = new U(i.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != C[t]) return !1;
                    S(t)
                },
                CONNECTION_OPEN: h,
                OVERLAY_INITIALIZE: h,
                CACHE_LOADED_LAZY: h,
                GUILD_CREATE: I,
                GUILD_UPDATE: I,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete C[t]
                },
                CHANNEL_CREATE: L,
                CHANNEL_DELETE: L,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (C[e] = void 0, n = !0, E === e && S(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (r.default.getId() !== n.id) return !1;
                    C[t] = void 0, t === E && S(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    S(E)
                },
                GUILD_ROLE_CREATE: N,
                GUILD_ROLE_UPDATE: N,
                GUILD_ROLE_DELETE: N,
                IMPERSONATE_UPDATE: N,
                IMPERSONATE_STOP: N,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != f ? g(d.default.getChannel(f), null) : g(d.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: l
                        } = t;
                        return r.default.getSessionId() !== l ? e : g(d.default.getChannel(n), n) || e
                    }, !1)
                }
            })