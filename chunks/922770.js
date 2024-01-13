            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                r = n("305961"),
                u = n("49111");

            function l(e) {
                return (0, i.useStateFromStores)([r.default], () => {
                    var t;
                    if (null == e) return !1;
                    let n = r.default.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(u.GuildFeatures.HUB)) && void 0 !== t && t
                }, [e])
            }