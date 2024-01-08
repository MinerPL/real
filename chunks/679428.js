            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            }), n("222007");
            var i = n("872717"),
                l = n("689988"),
                r = n("870691"),
                s = n("42203"),
                a = n("49111");
            let o = {},
                u = 0;

            function d() {
                o = {
                    ...r.default.getCollapsedCategories()
                }
            }

            function c() {
                !__OVERLAY__ && (clearTimeout(u), u = setTimeout(() => f(), 15e3))
            }
            async function f(e, t) {
                null == e || e === a.ME ? await i.default.patch({
                    url: a.Endpoints.USER_GUILD_SETTINGS(a.ME),
                    body: t
                }) : await h(null != t ? {
                    [null != e ? e : a.ME]: t
                } : {})
            }
            async function h(e) {
                clearTimeout(u);
                let t = 0 !== Object.keys(e).length,
                    n = r.default.getCollapsedCategories(),
                    l = function() {
                        let e = {},
                            t = r.default.getCollapsedCategories();
                        for (let n in t) t[n] !== o[n] && (e[n] = !0);
                        for (let n in o) t[n] !== o[n] && (e[n] = !0);
                        return e
                    }();
                for (let i in l) {
                    let l = s.default.getChannel(i);
                    null != l && null != l.guild_id && (!(l.guild_id in e) && (e[l.guild_id] = {}), null == e[l.guild_id].channel_overrides && (e[l.guild_id].channel_overrides = {}), e[l.guild_id].channel_overrides[l.id] = {
                        ...e[l.guild_id].channel_overrides[l.id],
                        collapsed: l.id in n
                    }, t = !0)
                }
                return t ? (o = {
                    ...n
                }, delete e[a.FAVORITES], (await i.default.patch({
                    url: a.Endpoints.USER_GUILD_SETTINGS_BULK,
                    body: {
                        guilds: e
                    }
                })).body) : []
            }

            function E() {
                o = {
                    ...r.default.getCollapsedCategories()
                }
            }
            class _ extends l.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        CATEGORY_COLLAPSE: c,
                        CATEGORY_EXPAND: c,
                        CATEGORY_COLLAPSE_ALL: c,
                        CATEGORY_EXPAND_ALL: c,
                        POST_CONNECTION_OPEN: d,
                        USER_GUILD_SETTINGS_FULL_UPDATE: E
                    }, this.saveUserGuildSettings = f, this.saveUserGuildSettingsBulk = h
                }
            }
            var I = new _