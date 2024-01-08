            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("446674"),
                u = n("305961"),
                r = n("49111");

            function l(e) {
                return (0, i.useStateFromStores)([u.default], () => {
                    var t;
                    if (null == e) return !1;
                    let n = u.default.getGuild(e);
                    return null !== (t = null == n ? void 0 : n.hasFeature(r.GuildFeatures.HUB)) && void 0 !== t && t
                }, [e])
            }