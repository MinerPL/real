            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var n = l("446674"),
                a = l("888355"),
                s = l("267567"),
                i = l("845579"),
                r = l("271938"),
                o = l("26989"),
                u = l("27618"),
                d = l("680894");

            function c(e, t) {
                let l = (0, n.useStateFromStores)([r.default], () => r.default.getId() === e),
                    c = (0, n.useStateFromStores)([s.default], () => null != t && s.default.isLurking(t)),
                    f = i.RestrictedGuildIds.useSetting(),
                    m = (0, a.useIsDMsToClydeEnabled)() && e === d.CLYDE_AI_USER_ID;
                return (0, n.useStateFromStores)([u.default, o.default], () => !l && !c && (u.default.isFriend(e) || null != o.default.memberOf(e).find(e => !f.includes(e))) || m)
            }