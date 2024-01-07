            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return l
                }
            }), n("222007");
            var i = n("917351"),
                r = n.n(i),
                o = n("866227"),
                t = n.n(o),
                a = n("446674"),
                f = n("913144"),
                _ = n("305961");
            let d = {
                    packsById: new Map
                },
                u = d,
                g = !1,
                m = null,
                v = !1;

            function c(e) {
                let s = null != u.packsById.get(e.id);
                if (s) u.packsById.set(e.id, e);
                else {
                    let s = [...u.packsById];
                    u.packsById = new Map, u.packsById.set(e.id, e), s.forEach(e => {
                        let [s, n] = e;
                        return u.packsById.set(s, n)
                    })
                }
            }
            class h extends a.default.PersistedStore {
                initialize(e) {
                    this.waitFor(_.default), u = (null == e ? void 0 : e.packsById) instanceof Map ? e : d
                }
                getState() {
                    return u
                }
                getPacksForUser() {
                    return [...u.packsById.values()].filter(e => !(null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(e.id)))
                }
                countPacksCollected() {
                    return u.packsById.size
                }
                getPackByPackId(e) {
                    let {
                        packId: s,
                        allowDuplicateGuildPack: n
                    } = e;
                    return !0 !== n && (null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(s)) ? null : u.packsById.get(s)
                }
                getPacksById() {
                    return u.packsById
                }
                getIsFetching() {
                    return g
                }
                getSortedPackIds() {
                    var e;
                    return null !== (e = [...u.packsById.keys()].filter(e => !(null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(e)))) && void 0 !== e ? e : []
                }
                getPackEmojisTTL() {
                    return m
                }
                getHasPackAddedNotification() {
                    return v
                }
                hasPersistedState() {
                    return !r.isEmpty(u.packsById)
                }
                _isADuplicateGuildPack(e) {
                    var s;
                    return (null === (s = _.default.getGuild(e)) || void 0 === s ? void 0 : s.joinedAt) != null
                }
                clear() {
                    u = d, g = !1, m = null
                }
            }
            h.displayName = "InventoryStore", h.persistKey = "InventoryStore";
            var l = new h(f.default, {
                LOGOUT: function() {
                    u = d, g = !1, m = null
                },
                INVENTORY_FETCH: function(e) {
                    let {} = e;
                    !g && (g = !0)
                },
                INVENTORY_FETCH_SUCCESS: function(e) {
                    let {
                        packs: s
                    } = e;
                    s.forEach(e => {
                        u.packsById.set(e.id, e)
                    }), g = !1, m = t(t()).add(30, "minutes").valueOf()
                },
                INVENTORY_FETCH_ERROR: function(e) {
                    let {
                        is4XXError: s
                    } = e;
                    g = !1, m = t(t()).add(s ? 10 : 1, "minutes").valueOf()
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
                    let {
                        pack: s
                    } = e;
                    c(s), v = !0
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
                    let {
                        packId: s
                    } = e;
                    u.packsById.delete(s)
                },
                INVENTORY_PACK_UPDATE: function(e) {
                    let {
                        pack: s
                    } = e;
                    c(s)
                },
                INVENTORY_PACK_DELETE: function(e) {
                    let {
                        pack: s
                    } = e;
                    u.packsById.delete(s.id)
                },
                INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION: function(e) {
                    let {} = e;
                    v = !1
                },
                POST_CONNECTION_OPEN: function(e) {
                    let {} = e;
                    g = !1, m = null
                }
            })