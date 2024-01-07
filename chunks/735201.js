            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            }), n("222007");
            var r = n("446674"),
                i = n("913144");
            let l = {},
                s = null,
                a = [],
                o = !1,
                u = null,
                c = null;

            function d() {
                o = !0
            }
            class f extends r.default.Store {
                getAppliedGuildBoostsForGuild(e) {
                    return null != l[e] ? l[e].subscriptions : null
                }
                getLastFetchedAtForGuild(e) {
                    return null != l[e] ? l[e].lastFetchedAt : null
                }
                getCurrentUserAppliedBoosts() {
                    return a
                }
                getAppliedGuildBoost(e) {
                    return a.find(t => t.id === e)
                }
                get isModifyingAppliedBoost() {
                    return o
                }
                get applyBoostError() {
                    return u
                }
                get unapplyBoostError() {
                    return c
                }
                get cooldownEndsAt() {
                    return s
                }
            }
            f.displayName = "AppliedGuildBoostStore";
            var p = new f(i.default, {
                GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        appliedBoosts: n
                    } = e;
                    l[t] = {
                        subscriptions: n,
                        lastFetchedAt: Date.now()
                    }
                },
                USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
                    let {
                        appliedGuildBoosts: t
                    } = e;
                    a = t
                },
                APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
                    let {
                        endsAt: t
                    } = e;
                    s = t
                },
                GUILD_UNAPPLY_BOOST_START: d,
                GUILD_APPLY_BOOST_START: d,
                GUILD_APPLY_BOOST_SUCCESS: function(e) {
                    let {
                        appliedGuildBoost: t
                    } = e, n = new Set(t.map(e => e.id));
                    a = [...t, ...a.filter(e => !n.has(e.id))], u = null, o = !1
                },
                GUILD_APPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, u = t
                },
                GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
                    let {
                        boostId: t
                    } = e;
                    a = a.filter(e => e.id !== t), o = !1
                },
                GUILD_UNAPPLY_BOOST_FAIL: function(e) {
                    let {
                        error: t
                    } = e;
                    o = !1, c = t
                }
            })