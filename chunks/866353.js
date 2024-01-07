            "use strict";
            n.r(t), n.d(t, {
                StickerSendability: function() {
                    return i
                },
                getStickerSendability: function() {
                    return u
                },
                isSendableSticker: function() {
                    return d
                }
            });
            var l, i, r = n("991170"),
                s = n("719923"),
                a = n("24373"),
                o = n("49111");
            (l = i || (i = {}))[l.SENDABLE = 0] = "SENDABLE", l[l.SENDABLE_WITH_PREMIUM = 1] = "SENDABLE_WITH_PREMIUM", l[l.NONSENDABLE = 2] = "NONSENDABLE", l[l.SENDABLE_WITH_BOOSTED_GUILD = 3] = "SENDABLE_WITH_BOOSTED_GUILD";
            let u = (e, t, n) => {
                    if (null == t) return 2;
                    let l = s.default.canUseCustomStickersEverywhere(t);
                    if ((0, a.isStandardSticker)(e)) return 0;
                    if ((0, a.isGuildSticker)(e) && null != n) return e.available ? null != n.guild_id && "" !== n.guild_id && n.guild_id === e.guild_id ? 0 : null == n.guild_id || r.default.can({
                        permission: o.Permissions.USE_EXTERNAL_STICKERS,
                        user: t,
                        context: n
                    }) ? l ? 0 : 1 : 2 : 3;
                    return 2
                },
                d = (e, t, n) => 0 === u(e, t, n)