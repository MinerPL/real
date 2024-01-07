            "use strict";
            n.r(t), n.d(t, {
                useShouldRedactExplicitContent: function() {
                    return d
                },
                useShouldRedactExplicitContentForForum: function() {
                    return c
                }
            });
            var l = n("65597"),
                a = n("42203"),
                s = n("27618"),
                i = n("697218"),
                r = n("457971"),
                o = n("447435"),
                u = n("10130");
            let d = (e, t) => {
                    let n = (0, r.useIsEligibleForExplicitMediaRedaction)(),
                        {
                            explicitContentGuilds: d,
                            explicitContentFriendDm: c,
                            explicitContentNonFriendDm: m
                        } = (0, u.useExplicitContentSettingOrDefault)(),
                        f = (0, l.default)([s.default], () => s.default.getFriendIDs().includes(t)),
                        h = (0, l.default)([i.default], () => i.default.getCurrentUser()),
                        p = (0, l.default)([a.default], () => {
                            let t = a.default.getChannel(e);
                            return null != t && t.isPrivate()
                        });
                    return !!n && null != h && h.id !== t && (p && f ? (0, o.getShouldObscureForSetting)(c) : p ? (0, o.getShouldObscureForSetting)(m) : (0, o.getShouldObscureForSetting)(d))
                },
                c = () => {
                    let e = (0, r.useIsEligibleForExplicitMediaRedaction)(),
                        {
                            explicitContentGuilds: t
                        } = (0, u.useExplicitContentSettingOrDefault)(),
                        n = (0, l.default)([i.default], () => i.default.getCurrentUser());
                    return !!e && null != n && (0, o.getShouldObscureForSetting)(t)
                }