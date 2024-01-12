            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var s = n("917351"),
                i = n.n(s),
                r = n("866227"),
                a = n.n(r),
                o = n("446674"),
                d = n("913144"),
                u = n("305961");
            let l = {
                    packsById: new Map
                },
                f = l,
                _ = !1,
                c = null,
                g = !1;

            function m(e) {
                let t = null != f.packsById.get(e.id);
                if (t) f.packsById.set(e.id, e);
                else {
                    let t = [...f.packsById];
                    f.packsById = new Map, f.packsById.set(e.id, e), t.forEach(e => {
                        let [t, n] = e;
                        return f.packsById.set(t, n)
                    })
                }
            }
            class h extends o.default.PersistedStore {
                initialize(e) {
                    this.waitFor(u.default), f = (null == e ? void 0 : e.packsById) instanceof Map ? e : l
                }
                getState() {
                    return f
                }
                getPacksForUser() {
                    return [...f.packsById.values()].filter(e => !(null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(e.id)))
                }
                countPacksCollected() {
                    return f.packsById.size
                }
                getPackByPackId(e) {
                    let {
                        packId: t,
                        allowDuplicateGuildPack: n
                    } = e;
                    return !0 !== n && (null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(t)) ? null : f.packsById.get(t)
                }
                getPacksById() {
                    return f.packsById
                }
                getIsFetching() {
                    return _
                }
                getSortedPackIds() {
                    var e;
                    return null !== (e = [...f.packsById.keys()].filter(e => !(null === this || void 0 === this ? void 0 : this._isADuplicateGuildPack(e)))) && void 0 !== e ? e : []
                }
                getPackEmojisTTL() {
                    return c
                }
                getHasPackAddedNotification() {
                    return g
                }
                hasPersistedState() {
                    return !i.isEmpty(f.packsById)
                }
                _isADuplicateGuildPack(e) {
                    var t;
                    return (null === (t = u.default.getGuild(e)) || void 0 === t ? void 0 : t.joinedAt) != null
                }
                clear() {
                    f = l, _ = !1, c = null
                }
            }
            h.displayName = "InventoryStore", h.persistKey = "InventoryStore";
            var v = new h(d.default, {
                LOGOUT: function() {
                    f = l, _ = !1, c = null
                },
                INVENTORY_FETCH: function(e) {
                    let {} = e;
                    !_ && (_ = !0)
                },
                INVENTORY_FETCH_SUCCESS: function(e) {
                    let {
                        packs: t
                    } = e;
                    t.forEach(e => {
                        f.packsById.set(e.id, e)
                    }), _ = !1, c = a(a()).add(30, "minutes").valueOf()
                },
                INVENTORY_FETCH_ERROR: function(e) {
                    let {
                        is4XXError: t
                    } = e;
                    _ = !1, c = a(a()).add(t ? 10 : 1, "minutes").valueOf()
                },
                INVENTORY_COLLECT_PACK_SUCCESS: function(e) {
                    let {
                        pack: t
                    } = e;
                    m(t), g = !0
                },
                INVENTORY_REMOVE_PACK_SUCCESS: function(e) {
                    let {
                        packId: t
                    } = e;
                    f.packsById.delete(t)
                },
                INVENTORY_PACK_UPDATE: function(e) {
                    let {
                        pack: t
                    } = e;
                    m(t)
                },
                INVENTORY_PACK_DELETE: function(e) {
                    let {
                        pack: t
                    } = e;
                    f.packsById.delete(t.id)
                },
                INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION: function(e) {
                    let {} = e;
                    g = !1
                },
                POST_CONNECTION_OPEN: function(e) {
                    let {} = e;
                    _ = !1, c = null
                }
            })