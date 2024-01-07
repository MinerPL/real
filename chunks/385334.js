            "use strict";
            s.r(t), s.d(t, {
                isRolePowerful: function() {
                    return i
                },
                getPowerfulPermissionTitles: function() {
                    return r
                }
            }), s("424973"), s("222007");
            var a = s("316693"),
                n = s("465305"),
                l = s("49111");

            function i(e) {
                return a.default.hasAny(e.permissions, l.ElevatedPermissions)
            }

            function r(e, t) {
                let s = [],
                    i = n.default.getGuildPermissionSpecMap(e);
                for (let e of l.ElevatedPermissionsList) a.default.has(t.permissions, e) && s.push(i[e.toString()].title);
                return s
            }