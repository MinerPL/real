            "use strict";
            a.r(t), a.d(t, {
                getAllRolesRows: function() {
                    return i
                },
                getAllExistingRolesWithPermission: function() {
                    return o
                }
            });
            var s = a("316693"),
                n = a("454273"),
                l = a("991170");
            let r = (e, t, a) => {
                    if (null == e.id) return !1;
                    let n = l.default.computePermissionsForRoles({
                        forceRoles: {
                            [e.id]: e
                        },
                        context: a
                    });
                    return s.default.has(n, t)
                },
                i = e => null == e.roles ? [] : Object.values(e.roles).sort(n.sortRoles).map(e => (0, n.getRoleRowData)(e)),
                o = (e, t, a) => Object.values(e.roles).filter(e => (0, n.isAdmin)(e) || r(e, a, t))