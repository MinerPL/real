            "use strict";
            n.r(t), n.d(t, {
                maybeGetPacksForUser: function() {
                    return I
                },
                getPackIconURL: function() {
                    return C
                },
                getAddOrRemovePackHandler: function() {
                    return p
                },
                getMaxPacksForUserType: function() {
                    return m
                }
            });
            var l = n("811022"),
                r = n("412745"),
                u = n("697218"),
                i = n("599110"),
                o = n("315102"),
                a = n("252931"),
                s = n("13162"),
                d = n("166465"),
                c = n("365058"),
                E = n("49111");
            let _ = new l.default("InventoryUtils");

            function f(e) {}
            async function I() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
                    t = "maybeGetPacks, trigger point: ".concat(e, " "),
                    n = u.default.getCurrentUser();
                if (null == n) {
                    f(t + "no current user");
                    return
                }
                let l = (0, a.getInventoryGuildPacksUserExperimentConfig)({
                    user: n
                });
                if (!l.viewAndUseEnabled) {
                    f(t + "packs experiment not enabled"), d.default.hasPersistedState() && d.default.clear();
                    return
                }
                let r = d.default.getPackEmojisTTL();
                if (null != r && Date.now() < r) {
                    f(t + "ttl has not passed");
                    return
                }
                if (d.default.getIsFetching()) {
                    f(t + "currently fetching, so not going to fetch again");
                    return
                }
                f(t + "fetching"), await (0, s.getPacksForUser)()
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return o.default.getGuildIconURL({
                    id: e.id,
                    size: t,
                    icon: e.icon,
                    canAnimate: n
                })
            }
            let p = e => {
                    let {
                        expressionSourceGuild: t,
                        action: n,
                        onComplete: l,
                        nonce: u,
                        expressionName: o
                    } = e;
                    return () => {
                        if (null == t) {
                            null == l || l();
                            return
                        }
                        let e = t.id,
                            a = t.isDiscoverable();
                        n === r.EmojiPopoutType.ADD_PACK ? (0, s.collectPack)({
                            packId: e,
                            expressionName: a ? void 0 : o
                        }) : n === r.EmojiPopoutType.REMOVE_PACK && (0, s.uncollectPack)({
                            packId: e
                        }), i.default.track(E.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                            type: n,
                            inventory_pack_id: e,
                            nonce: u
                        }), null == l || l()
                    }
                },
                m = e => e ? c.INVENTORY_MAX_PACKS : c.INVENTORY_MAX_FREE_PACKS