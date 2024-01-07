            "use strict";
            l.r(i), l.d(i, {
                default: function() {
                    return d
                },
                getDisplayProfile: function() {
                    return a
                }
            }), l("222007");
            var t = l("446674"),
                n = l("697218"),
                r = l("117362"),
                u = l("811907"),
                o = l("713135");

            function d(e, i) {
                return (0, t.useStateFromStores)([n.default, o.default], () => a(e, i, [n.default, o.default]))
            }
            let s = (0, r.cachedFunction)((e, i) => new u.default(e, i));

            function a(e, i) {
                let [l, t] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [n.default, o.default], r = l.getUser(e), u = t.getUserProfile(e), d = t.getGuildMemberProfile(e, i);
                return null == r || null == u ? null : s(u, d)
            }