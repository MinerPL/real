            "use strict";
            n.r(t), n.d(t, {
                CHANNEL_NEXT: function() {
                    return r
                },
                CHANNEL_PREV: function() {
                    return _
                },
                TOGGLE_PREVIOUS_GUILD: function() {
                    return A
                },
                NAVIGATE_BACK: function() {
                    return c
                },
                NAVIGATE_FORWARD: function() {
                    return C
                }
            });
            var i = n("473532"),
                o = n("722525"),
                l = n("393414"),
                a = n("239380"),
                d = n("18494"),
                u = n("162771"),
                s = n("773336"),
                E = n("49111");
            let r = {
                    binds: ["alt+down"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, i.default)(), !1)
                },
                _ = {
                    binds: ["alt+up"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, i.default)(-1), !1)
                },
                A = {
                    binds: ["mod+alt+right"],
                    comboKeysBindGlobal: !0,
                    action() {
                        let e;
                        let t = u.default.getGuildId();
                        if (null != t) e = E.ME;
                        else {
                            let t = u.default.getLastSelectedGuildId();
                            null != t && (e = t, (0, o.transitionToChannel)(t, d.default.getChannelId(t)))
                        }
                        return null != e && (0, a.transitionToGuild)(e), !1
                    }
                },
                c = {
                    binds: (0, s.isMac)() ? ["mod+["] : ["alt+left"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, l.back)(), !1)
                },
                C = {
                    binds: (0, s.isMac)() ? ["mod+]"] : ["alt+right"],
                    comboKeysBindGlobal: !0,
                    action: () => ((0, l.forward)(), !1)
                }