            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("296892");

            function r(e) {
                let t = (0, i.default)({
                        ...e,
                        id: "".concat(e.id, "_existing_users"),
                        label: "".concat(e.label, " - Existing Users")
                    }),
                    n = (0, i.default)({
                        ...e,
                        id: "".concat(e.id, "_new_users"),
                        label: "".concat(e.label, " - New Users")
                    });
                return {
                    existingUsers: t,
                    newUsers: n
                }
            }