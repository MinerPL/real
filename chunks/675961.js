            "use strict";
            t.r(n), t.d(n, {
                CustomSoundType: function() {
                    return u
                },
                useCustomJoinSound: function() {
                    return d
                },
                getCustomJoinSound: function() {
                    return r
                }
            });
            var l, u, i = t("446674"),
                o = t("374363"),
                a = t("846325");

            function d(e) {
                return (0, i.useStateFromStores)([o.default], () => {
                    var n, t;
                    let l = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                    return s(e, l)
                })
            }

            function r(e) {
                var n, t;
                let l = null !== (t = null === (n = o.default.settings.guilds) || void 0 === n ? void 0 : n.guilds) && void 0 !== t ? t : {};
                return s(e, l)
            }

            function s(e, n) {
                var t, l;
                let u = null === (t = n[e]) || void 0 === t ? void 0 : t.joinSound,
                    i = null === (l = n[a.CUSTOM_CALL_SOUND_GLOBAL_GUILD_ID]) || void 0 === l ? void 0 : l.joinSound,
                    o = null != u ? u : i;
                return null != o ? {
                    ...o,
                    type: null != u ? 1 : 0
                } : void 0
            }(l = u || (u = {}))[l.GLOBAL = 0] = "GLOBAL", l[l.GUILD = 1] = "GUILD"