            "use strict";
            n.r(t), n.d(t, {
                useIsHomeSelected: function() {
                    return i
                }
            });
            var l = n("803182"),
                a = n("393027"),
                s = n("49111");

            function i() {
                let e = (0, a.default)(e => e.guildId),
                    {
                        pathname: t
                    } = (0, l.useLocation)(),
                    n = t.startsWith(s.Routes.GUILD_DISCOVERY),
                    i = t.startsWith(s.Routes.GUILD_MEMBER_VERIFICATION("")),
                    r = t.startsWith(s.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(""));
                return null == e && !(n || i || r)
            }