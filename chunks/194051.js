            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var a, r, s = n("917351"),
                i = n("446674"),
                l = n("407846"),
                u = n("913144"),
                o = n("766274"),
                d = n("271938"),
                c = n("9759"),
                f = n("837374");
            (r = a || (a = {}))[r.INVALID = 0] = "INVALID", r[r.VALID_USER_ONLY = 1] = "VALID_USER_ONLY", r[r.VALID = 2] = "VALID";
            let E = new Set,
                h = new Set,
                p = new Set,
                S = [],
                _ = {
                    BROADCASTS_BY_USER_ID: e => "user:".concat(e),
                    BROADCASTS_BY_CHANNEL_ID: e => "channel:".concat(e),
                    BROADCASTS_BY_VALIDITY: e => "validity:".concat(e)
                },
                C = new l.default(function(e) {
                    let t = E.has(e.userId) ? 1 : 0;
                    return null != e.viewers && (t = 2), [_.BROADCASTS_BY_USER_ID(e.userId), _.BROADCASTS_BY_CHANNEL_ID(e.channelId), _.BROADCASTS_BY_VALIDITY(t)]
                }, e => e.channelId);

            function m(e, t, n) {
                if (d.default.getId() === e) return !1;
                if (null == t) {
                    let t = C.get(e);
                    return !!(null != t && (0, s.isEqual)(t.source, n)) && (C.delete(e), void 0)
                }!E.has(e) && !h.has(e) && (p.add(e), S = [...p]);
                let a = (0, f.broadcastFromServer)(t, e, n);
                C.set(e, a)
            }

            function g(e) {
                return null != e ? {
                    type: f.BroadcastSourceType.GUILD,
                    guildId: e
                } : {
                    type: f.BroadcastSourceType.GLOBAL
                }
            }
            class T extends i.default.Store {
                getBroadcasts() {
                    return C.values(_.BROADCASTS_BY_VALIDITY(2))
                }
                getBroadcastsToValidateChannels() {
                    return C.values(_.BROADCASTS_BY_VALIDITY(1))
                }
                getBroadcastByChannel(e) {
                    return C.values(_.BROADCASTS_BY_CHANNEL_ID(e))[0]
                }
                getBroadcastByUser(e) {
                    return C.get(e)
                }
                getUserIdsToValidate() {
                    return S
                }
            }
            T.displayName = "BroadcastingStore";
            var I = new T(u.default, {
                PRESENCE_UPDATES: function(e) {
                    let {
                        updates: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: n,
                            guildId: a
                        } = e;
                        m(t.id, n, g(a))
                    })
                },
                PRESENCES_REPLACE: function(e) {
                    let {
                        presences: t
                    } = e;
                    return t.forEach(e => {
                        let {
                            user: t,
                            broadcast: n,
                            guildId: a
                        } = e;
                        m(t.id, n, g(a))
                    })
                },
                CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
                    let {
                        presences: t,
                        guilds: n
                    } = e;
                    t.forEach(e => {
                        let {
                            user: t,
                            broadcast: n,
                            guildId: a
                        } = e;
                        m(t.id, n, g(a))
                    }), n.forEach(e => {
                        let {
                            presences: t,
                            id: n
                        } = e;
                        t.forEach(e => {
                            let {
                                user: t,
                                broadcast: a
                            } = e;
                            m(t.id, a, g(n))
                        })
                    })
                },
                BROADCASTER_BUCKETS_RECEIVED: function(e) {
                    let {
                        data: t
                    } = e;
                    Object.keys(t).forEach(e => {
                        c.CAN_VIEW_BROADCASTS_BUCKETS.includes(t[e]) ? E.add(e) : h.add(e), p.clear(), S = [...p];
                        let n = C.get(e);
                        null != n && (C.delete(e), C.set(e, n))
                    })
                },
                BROADCAST_VIEWERS_UPDATE: function(e) {
                    let {
                        viewers: t
                    } = e;
                    Object.entries(t).forEach(e => {
                        let [t, n] = e, a = C.get(t);
                        null != a && C.set(t, {
                            ...a,
                            viewers: n
                        })
                    })
                },
                CHANNEL_RECIPIENT_ADD: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = C.values(_.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers || a.viewers.some(e => e.id === n.id)) return !1;
                    C.set(a.userId, {
                        ...a,
                        viewers: [...a.viewers, new o.default(n)]
                    })
                },
                CHANNEL_RECIPIENT_REMOVE: function(e) {
                    let {
                        channelId: t,
                        user: n
                    } = e, a = C.values(_.BROADCASTS_BY_CHANNEL_ID(t))[0];
                    if (null == a || null == a.viewers) return !1;
                    C.set(a.userId, {
                        ...a,
                        viewers: a.viewers.filter(e => e.id !== n.id)
                    })
                },
                CHANNEL_CREATE: function(e) {
                    var t;
                    let {
                        channel: n
                    } = e, a = C.values(_.BROADCASTS_BY_CHANNEL_ID(n.id))[0];
                    if (null == a) return !1;
                    let r = null !== (t = n.rawRecipients) && void 0 !== t ? t : [];
                    C.set(a.userId, {
                        ...a,
                        viewers: r.filter(e => e.id !== a.userId).map(e => new o.default(e))
                    })
                },
                LOGOUT: function() {
                    E.clear(), h.clear(), p.clear(), S = [], C.clear()
                }
            })