            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var i = n("872717"),
                r = n("689988"),
                l = n("870691"),
                o = n("42203"),
                s = n("49111");
            let a = {},
                u = 0;

            function c() {
                a = {
                    ...l.default.getCollapsedCategories()
                }
            }

            function d() {
                !__OVERLAY__ && (clearTimeout(u), u = setTimeout(() => f(), 15e3))
            }
            async function f(e, t) {
                null == e || e === s.ME ? await i.default.patch({
                    url: s.Endpoints.USER_GUILD_SETTINGS(s.ME),
                    body: t
                }) : await E(null != t ? {
                    [null != e ? e : s.ME]: t
                } : {})
            }
            async function E(e) {
                clearTimeout(u);
                let t = 0 !== Object.keys(e).length,
                    n = l.default.getCollapsedCategories(),
                    r = function() {
                        let e = {},
                            t = l.default.getCollapsedCategories();
                        for (let n in t) t[n] !== a[n] && (e[n] = !0);
                        for (let n in a) t[n] !== a[n] && (e[n] = !0);
                        return e
                    }();
                for (let i in r) {
                    let r = o.default.getChannel(i);
                    null != r && null != r.guild_id && (!(r.guild_id in e) && (e[r.guild_id] = {}), null == e[r.guild_id].channel_overrides && (e[r.guild_id].channel_overrides = {}), e[r.guild_id].channel_overrides[r.id] = {
                        ...e[r.guild_id].channel_overrides[r.id],
                        collapsed: r.id in n
                    }, t = !0)
                }
                return t ? (a = {
                    ...n
                }, delete e[s.FAVORITES], (await i.default.patch({
                    url: s.Endpoints.USER_GUILD_SETTINGS_BULK,
                    body: {
                        guilds: e
                    }
                })).body) : []
            }

            function _() {
                a = {
                    ...l.default.getCollapsedCategories()
                }
            }
            class I extends r.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: d,
                        CATEGORY_EXPAND: d,
                        CATEGORY_COLLAPSE_ALL: d,
                        CATEGORY_EXPAND_ALL: d,
                        POST_CONNECTION_OPEN: c,
                        USER_GUILD_SETTINGS_FULL_UPDATE: _
                    }, this.saveUserGuildSettings = f, this.saveUserGuildSettingsBulk = E
                }
            }
            var h = new I