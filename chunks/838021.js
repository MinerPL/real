            "use strict";
            n.r(t), n.d(t, {
                TOGGLE_CATEGORY_COLLAPSED: function() {
                    return u
                }
            });
            var i = n("820542"),
                o = n("870691"),
                l = n("923959"),
                a = n("162771"),
                d = n("49111");
            let u = {
                binds: ["mod+shift+a"],
                comboKeysBindGlobal: !0,
                action() {
                    let e = a.default.getGuildId();
                    if (null == e) return !1;
                    let t = l.default.getChannels(e)[d.ChannelTypes.GUILD_CATEGORY].some(e => {
                        let {
                            channel: t
                        } = e;
                        return "null" !== t.id && !o.default.isCollapsed(t.id)
                    });
                    return t ? (0, i.categoryCollapseAll)(e) : (0, i.categoryExpandAll)(e), !1
                }
            }