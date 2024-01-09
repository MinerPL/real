            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            }), n("222007");
            var i = n("446674"),
                l = n("913144"),
                a = n("449008"),
                r = n("42203"),
                s = n("341542"),
                o = n("923959"),
                u = n("49111");
            let d = {},
                c = 0;

            function f() {
                c += 1
            }

            function h(e) {
                if (null == d[e]) return !1;
                delete d[e]
            }
            class E extends i.default.PersistedStore {
                initialize(e) {
                    this.waitFor(r.default, s.default), this.removeChangeListener(f), this.addChangeListener(f), d = null != e ? e : {}
                }
                getState() {
                    return d
                }
                isCollapsed(e) {
                    return null != e && "null" !== e && !!d[e] && d[e]
                }
                getCollapsedCategories() {
                    return d
                }
                get version() {
                    return c
                }
            }
            E.displayName = "CategoryCollapseStore", E.persistKey = "collapsedCategories";
            var _ = new E(l.default, {
                CONNECTION_OPEN: function(e) {
                    for (let t of (!e.userGuildSettings.partial && (d = {}), e.userGuildSettings.entries))
                        if (null != t.channel_overrides)
                            for (let e of t.channel_overrides) e.collapsed ? d[e.channel_id] = !0 : delete d[e.channel_id]
                },
                USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
                    let {
                        userGuildSettings: t
                    } = e, n = new Set(t.map(e => e.guild_id).filter(a.isNotNullish));
                    for (let e in d) {
                        let t = r.default.getChannel(e);
                        null != t && null != t.guild_id && n.has(t.guild_id) && delete d[t.id]
                    }
                    for (let e of t)
                        for (let t of e.channel_overrides) t.collapsed && (d[t.channel_id] = !0)
                },
                CATEGORY_COLLAPSE: function(e) {
                    let {
                        id: t
                    } = e;
                    if (d[t]) return !1;
                    d[t] = !0
                },
                CATEGORY_EXPAND: function(e) {
                    let {
                        id: t
                    } = e;
                    return h(t)
                },
                CATEGORY_COLLAPSE_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        "null" !== t.id && (d[t.id] = !0)
                    })
                },
                CATEGORY_EXPAND_ALL: function(e) {
                    let {
                        guildId: t
                    } = e;
                    o.default.getChannels(t)[u.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                        let {
                            channel: t
                        } = e;
                        delete d[t.id]
                    })
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: {
                            id: t
                        }
                    } = e;
                    return h(t)
                }
            })