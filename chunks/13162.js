            "use strict";
            n.r(t), n.d(t, {
                getPacksForUser: function() {
                    return a
                },
                collectPack: function() {
                    return s
                },
                uncollectPack: function() {
                    return d
                },
                updateInventorySettings: function() {
                    return c
                },
                getPackMetadata: function() {
                    return E
                },
                dismissPackAddedNotification: function() {
                    return _
                }
            });
            var l = n("872717"),
                r = n("913144"),
                u = n("569883"),
                i = n("871336"),
                o = n("49111");
            async function a() {
                r.default.dispatch({
                    type: "INVENTORY_FETCH"
                });
                try {
                    let e = await l.default.get({
                        url: o.Endpoints.INVENTORY_GET
                    });
                    r.default.dispatch({
                        type: "INVENTORY_FETCH_SUCCESS",
                        packs: e.body.map(e => i.default.fromServer(e))
                    })
                } catch (t) {
                    var e;
                    r.default.dispatch({
                        type: "INVENTORY_FETCH_ERROR",
                        is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
                    })
                }
            }
            async function s(e) {
                let {
                    authorId: t,
                    packId: n,
                    expressionName: u
                } = e;
                try {
                    let e = await l.default.put({
                        url: o.Endpoints.INVENTORY_ADD_PACK,
                        body: {
                            author_id: t,
                            pack_id: n,
                            name_override: u
                        }
                    });
                    r.default.dispatch({
                        type: "INVENTORY_COLLECT_PACK_SUCCESS",
                        pack: i.default.fromServer(e.body)
                    })
                } catch (e) {
                    return
                }
            }
            async function d(e) {
                let {
                    packId: t
                } = e;
                try {
                    await l.default.put({
                        url: o.Endpoints.INVENTORY_REMOVE_PACK,
                        body: {
                            pack_id: t
                        }
                    }), r.default.dispatch({
                        type: "INVENTORY_REMOVE_PACK_SUCCESS",
                        packId: t
                    })
                } catch (e) {
                    return
                }
            }
            async function c(e) {
                let {
                    guildId: t,
                    settings: n
                } = e;
                try {
                    await l.default.patch({
                        url: o.Endpoints.INVENTORY_UPDATE_SETTINGS(t),
                        body: {
                            is_emoji_pack_collectible: n.isEmojiPackCollectible
                        }
                    })
                } catch (e) {
                    return
                }
            }
            async function E(e) {
                let {
                    packId: t
                } = e;
                try {
                    let e = await l.default.get({
                        url: o.Endpoints.INVENTORY_PACK_METADATA(t)
                    });
                    return u.default.createFromServer(e.body)
                } catch (e) {
                    return
                }
            }

            function _() {
                r.default.dispatch({
                    type: "INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION"
                })
            }