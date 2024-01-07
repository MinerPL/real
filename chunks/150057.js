            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("446674"),
                s = n("913144"),
                i = n("269596"),
                l = n("305961"),
                r = n("49111");
            let o = !1;

            function u(e) {
                let t = l.default.getGuild(e);
                return !!(null != t && t.hasFeature(r.GuildFeatures.HUB)) && (o = !0, !0)
            }

            function d() {
                return !0
            }
            class c extends a.default.Store {
                initialize() {
                    this.waitFor(l.default, i.default), this.syncWith([i.default], d)
                }
                channelNoticePredicate(e) {
                    return !!e.hasFeature(r.GuildFeatures.LINKED_TO_HUB) && !o && !0
                }
            }
            c.displayName = "HubLinkNoticeStore";
            var E = new c(s.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of e.guilds)
                        if (u(t.id)) return !0;
                    return !1
                },
                GUILD_CREATE: function(e) {
                    let {
                        guild: t
                    } = e;
                    return u(t.id)
                }
            })