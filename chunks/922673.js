            "use strict";
            n.r(t), n.d(t, {
                getHighestHoistedRole: function() {
                    return s
                }
            }), n("222007"), n("446674");
            var i = n("26989"),
                a = n("305961"),
                l = n("991170");
            let s = function(e, t) {
                let [n, s] = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [a.default, i.default];
                if (null == e || null == t) return null;
                let r = n.getGuild(e);
                if (null == r) return null;
                let u = s.getMember(r.id, t);
                return null == u ? null : l.default.getHighestHoistedRole(r, u)
            }