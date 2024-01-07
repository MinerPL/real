            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            }), i("222007");
            var _ = i("446674"),
                s = i("913144"),
                o = i("521012");
            let I = !1,
                u = {};

            function r(e) {
                let {
                    guildBoostSlot: t
                } = e;
                u = {
                    ...u,
                    [t.id]: t
                }
            }

            function T() {
                let e = {};
                for (let t of Object.values(u)) e[t.id] = t, t.subscription = o.default.getSubscriptionById(t.subscriptionId);
                u = e
            }
            class d extends _.default.Store {
                initialize() {
                    this.syncWith([o.default], T)
                }
                get hasFetched() {
                    return I
                }
                get boostSlots() {
                    return u
                }
                getGuildBoostSlot(e) {
                    return u[e]
                }
            }
            d.displayName = "GuildBoostSlotStore";
            var l = new d(s.default, {
                GUILD_BOOST_SLOTS_FETCH_SUCCESS: function(e) {
                    let {
                        guildBoostSlots: t
                    } = e;
                    u = {}, t.forEach(e => {
                        u[e.id] = e
                    }), I = !0
                },
                GUILD_BOOST_SLOT_UPDATE_SUCCESS: r,
                GUILD_BOOST_SLOT_CREATE: r,
                GUILD_BOOST_SLOT_UPDATE: r,
                LOGOUT: function() {
                    u = {}, I = !1
                }
            })