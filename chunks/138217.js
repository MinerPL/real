            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("843762"), n("424973");
            var l = n("917351"),
                a = n.n(l),
                s = n("446674"),
                i = n("95410"),
                r = n("398183"),
                o = n("913144"),
                u = n("692038"),
                d = n("406297"),
                c = n("913491"),
                f = n("915639"),
                E = n("719926"),
                h = n("271938"),
                _ = n("42203"),
                S = n("377253"),
                T = n("660478"),
                p = n("27618"),
                N = n("162771"),
                I = n("282109"),
                m = n("697218"),
                A = n("49111");
            let g = "recentMentionFilterSettings",
                C = [],
                R = {},
                M = !1,
                O = !0,
                L = i.default.get(g, {
                    guildFilter: A.RecentMentionsFilters.ALL_SERVERS,
                    everyoneFilter: !0,
                    roleFilter: !0
                }),
                v = !1,
                D = 0,
                y = !1,
                x = !1;

            function P(e) {
                if (e instanceof E.default) return e;
                let t = S.default.getMessage(e.channel_id, e.id);
                return null != t ? t : (0, u.createMessageRecord)(e)
            }

            function U(e) {
                var t;
                let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                if ((0, c.default)(e)) return null;
                null == n && (n = e.channel_id);
                let l = _.default.getChannel(n);
                if (null == l || l.type === A.ChannelTypes.DM || L.guildFilter === A.RecentMentionsFilters.THIS_SERVER && l.getGuildId() !== N.default.getGuildId()) return null;
                let a = null === (t = e.author) || void 0 === t ? void 0 : t.id,
                    s = h.default.getId();
                if (null != a && p.default.isBlocked(a) || a === s) return null;
                e = P(e);
                let i = !L.everyoneFilter,
                    r = !L.roleFilter;
                return (0, d.default)({
                    message: e,
                    userId: s,
                    suppressEveryone: i,
                    suppressRoles: r
                }) ? (x && T.default.ackMessageId(l.id) !== e.id && (0, d.default)({
                    message: e,
                    userId: s,
                    suppressEveryone: I.default.isSuppressEveryoneEnabled(l.getGuildId()),
                    suppressRoles: I.default.isSuppressRolesEnabled(l.getGuildId())
                }) && (x = !1), e) : null
            }

            function F(e) {
                if (null == R[e]) return !1;
                delete R[e], C = a.filter(C, t => {
                    let {
                        id: n
                    } = t;
                    return n !== e
                })
            }

            function b(e) {
                let {
                    id: t
                } = e;
                return F(t)
            }

            function j(e) {
                let t = {
                    ...L
                };
                L = a.defaults(a.pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), L), i.default.set(g, L);
                let n = (e, n) => t[e] !== L[e] && L[e] === n,
                    l = n("guildFilter", A.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
                R = {};
                let s = [];
                l && C.forEach(e => {
                    let t = U(e);
                    null != t && (s.push(t), R[t.id] = !0)
                }), 0 === (C = s).length && (v = !1)
            }

            function G() {
                C = [], R = {}, v = !1, x = !1
            }

            function k() {
                a.forEach(C, e => {
                    e.timestamp.locale(f.default.locale)
                })
            }

            function w() {
                C = C.filter(e => !p.default.isBlocked(e.author.id))
            }

            function B(e) {
                let {
                    channel: t
                } = e;
                C = a.filter(C, e => e.channel_id !== t.id || (delete R[e.id], !1))
            }
            class H extends s.default.Store {
                initialize() {
                    this.waitFor(m.default, _.default, S.default, T.default)
                }
                isOpen() {
                    return y
                }
                get hasLoadedEver() {
                    return v
                }
                get lastLoaded() {
                    return D
                }
                getMentions() {
                    return v || C.length > 0 ? C : null
                }
                hasMention(e) {
                    return R[e]
                }
                get loading() {
                    return M
                }
                get hasMore() {
                    return O
                }
                get guildFilter() {
                    return L.guildFilter
                }
                get everyoneFilter() {
                    return L.everyoneFilter
                }
                get roleFilter() {
                    return L.roleFilter
                }
                get mentionsAreStale() {
                    return x
                }
            }
            H.displayName = "RecentMentionsStore";
            var V = new H(o.default, {
                LOAD_RECENT_MENTIONS: function(e) {
                    let {
                        guildId: t
                    } = e;
                    M = !0, null == t && L.guildFilter === A.RecentMentionsFilters.THIS_SERVER && j({
                        guildFilter: A.RecentMentionsFilters.ALL_SERVERS
                    })
                },
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    let {
                        hasMoreAfter: t,
                        messages: n,
                        isAfter: l
                    } = e, s = a.map(n, P);
                    l ? C = C.concat(s) : (C = s, R = {}), a.forEach(s, e => {
                        R[e.id] = !0
                    }), M = !1, O = t, D = (0, r.now)(), v = !0
                },
                LOAD_RECENT_MENTIONS_FAILURE: function() {
                    M = !1
                },
                SET_RECENT_MENTIONS_FILTER: j,
                CLEAR_MENTIONS: function(e) {
                    G()
                },
                TRUNCATE_MENTIONS: function(e) {
                    let {
                        size: t
                    } = e;
                    for (let e = t; e < C.length; ++e) delete R[C[e].id];
                    let n = C.length;
                    n > (C = C.slice(0, t)).length && (O = !0)
                },
                CHANNEL_SELECT: function() {
                    if (L.guildFilter !== A.RecentMentionsFilters.THIS_SERVER) return !1;
                    v = !1
                },
                CONNECTION_OPEN: G,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    C = a.filter(C, e => {
                        let n = _.default.getChannel(e.channel_id);
                        return null != n && n.getGuildId() !== t.id || (delete R[e.id], !1)
                    })
                },
                MESSAGE_CREATE: function(e) {
                    let {
                        channelId: t,
                        message: n
                    } = e, l = m.default.getCurrentUser();
                    if (null == l || !(0, d.isRawMessageMentioned)({
                            rawMessage: n,
                            userId: l.id,
                            suppressRoles: !1,
                            suppressEveryone: !1
                        })) return !1;
                    let a = U(n, t);
                    if (null == a) return !1;
                    (C = C.slice()).unshift(a), R[a.id] = !0
                },
                MESSAGE_UPDATE: function(e) {
                    let t = e.message.id;
                    if (null == R[String(t)]) return !1;
                    let n = a.findIndex(C, e => {
                        let {
                            id: n
                        } = e;
                        return n === t
                    });
                    C = C.slice();
                    let l = C[n];
                    null != l && (C[n] = (0, u.updateMessageRecord)(l, e.message))
                },
                MESSAGE_DELETE: b,
                RECENT_MENTION_DELETE: b,
                MESSAGE_DELETE_BULK: function(e) {
                    let {
                        ids: t
                    } = e;
                    a.forEach(t, F)
                },
                USER_SETTINGS_PROTO_UPDATE: k,
                I18N_LOAD_SUCCESS: k,
                CHANNEL_DELETE: B,
                THREAD_DELETE: B,
                RELATIONSHIP_ADD: w,
                RELATIONSHIP_REMOVE: w,
                MENTION_MODAL_OPEN: function() {
                    y = !0
                },
                MENTION_MODAL_CLOSE: function() {
                    y = !1
                },
                SET_RECENT_MENTIONS_STALE: function(e) {
                    x = !0
                }
            })