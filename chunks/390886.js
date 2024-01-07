            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var a = l("385976"),
                n = l("233069"),
                r = l("402671"),
                i = l("991170"),
                u = l("49111");

            function s(e, t, l) {
                if (e.type !== u.ActivityTypes.CUSTOM_STATUS || null == e.emoji) return !1;
                let s = e.emoji;
                if (null == s.id || null == l || !(0, n.isGuildTextChannelType)(l.type)) return !0;
                let o = a.default.getUsableCustomEmojiById(s.id),
                    d = r.default.isInternalEmojiForGuildId(o, l.getGuildId()),
                    c = i.default.can({
                        permission: u.Permissions.USE_EXTERNAL_EMOJIS,
                        user: t,
                        context: l
                    });
                return !d || c
            }