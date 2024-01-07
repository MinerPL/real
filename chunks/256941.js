            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return w
                }
            }), n("222007");
            var i = n("316693"),
                r = n("446674"),
                o = n("913144"),
                t = n("26989"),
                a = n("305961"),
                f = n("697218"),
                _ = n("828674"),
                d = n("49111");
            let u = new Set,
                g = new Map,
                m = new Map,
                v = new Map,
                c = new Map,
                h = null;

            function l(e) {
                let s = f.default.getCurrentUser(),
                    n = a.default.getGuild(e);
                if (null == n || null == s) return !1;
                let r = new Set,
                    o = new Set,
                    u = new Set;
                if (c.set(e, n.isOwner(s)), n.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) {
                    var h, l;
                    let a = t.default.getMember(e, s.id),
                        f = new Set(null !== (h = null == a ? void 0 : a.roles) && void 0 !== h ? h : []);
                    for (let s in n.roles) {
                        ;
                        let t = n.roles[s];
                        if ((0, _.isSubscriptionRole)(t) && (r.add(s), (0, _.isSubscriptionRoleAvailableForPurchase)(t) && (o.add(s), f.has(s) && u.add(s))), f.has(s) && (l = t, i.default.has(l.permissions, d.Permissions.ADMINISTRATOR))) c.set(e, !0)
                    }
                }
                return g.set(e, r), v.set(e, u), m.set(e, o), !0
            }

            function y() {
                g.clear(), v.clear(), m.clear(), c.clear(), h = null
            }

            function V(e) {
                let {
                    guild: {
                        id: s
                    }
                } = e;
                if (null == h) return !1;
                let n = a.default.getGuild(s);
                if (null == n) return !1;
                let i = n.hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE);
                if (i && !h.has(s)) {
                    let e = new Set(h);
                    return e.add(s), h = e, !0
                }
                if (!i && h.has(s)) {
                    let e = new Set(h);
                    return e.delete(s), h = e, !0
                }
                return !1
            }

            function k(e) {
                let {
                    guildId: s
                } = e;
                return !!g.has(s) && l(s)
            }
            class b extends r.default.Store {
                initialize() {
                    this.waitFor(a.default)
                }
                getGuildIdsWithPurchasableRoles() {
                    return null == h ? function() {
                        let e = a.default.getGuilds(),
                            s = new Set;
                        for (let n in e) e[n].hasFeature(d.GuildFeatures.ROLE_SUBSCRIPTIONS_AVAILABLE_FOR_PURCHASE) && s.add(n);
                        return h = s, s
                    }() : h
                }
                buildRoles(e) {
                    !g.has(e) && l(e)
                }
                getSubscriptionRoles(e) {
                    var s;
                    return this.buildRoles(e), null !== (s = g.get(e)) && void 0 !== s ? s : u
                }
                getPurchasableSubscriptionRoles(e) {
                    var s;
                    return this.buildRoles(e), null !== (s = m.get(e)) && void 0 !== s ? s : u
                }
                getUserSubscriptionRoles(e) {
                    var s;
                    return this.buildRoles(e), null !== (s = v.get(e)) && void 0 !== s ? s : u
                }
                getUserIsAdmin(e) {
                    var s;
                    return this.buildRoles(e), null !== (s = c.get(e)) && void 0 !== s && s
                }
            }
            b.displayName = "SubscriptionRoleStore";
            var w = new b(o.default, {
                CONNECTION_OPEN: y,
                LOGOUT: y,
                GUILD_CREATE: V,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: s
                        }
                    } = e;
                    if ((null == h ? void 0 : h.has(s)) !== !0) return !1;
                    let n = new Set(h);
                    n.delete(s), h = n
                },
                GUILD_UPDATE: V,
                GUILD_ROLE_CREATE: k,
                GUILD_ROLE_UPDATE: k,
                GUILD_ROLE_DELETE: k,
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: s,
                        user: n
                    } = e, i = f.default.getCurrentUser();
                    return !!(n.id === (null == i ? void 0 : i.id) && g.has(s)) && l(s)
                }
            })