            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                s = n.n(i),
                l = n("77078"),
                a = n("978970"),
                o = n("36694"),
                u = n("945330"),
                c = n("705179");

            function d(e) {
                let {
                    grantedPermissions: t,
                    disabledPermissions: n,
                    grantedPermissionsHeader: i,
                    disabledPermissionsHeader: d,
                    className: f
                } = e;
                return (0, r.jsxs)("div", {
                    className: s(c.list, f),
                    children: [null != t && t.length > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [null != i ? (0, r.jsx)(l.FormTitle, {
                            className: c.permissionHeader,
                            children: i
                        }) : null, (0, r.jsx)("div", {
                            className: c.container,
                            children: t.map(e => (0, r.jsxs)("div", {
                                className: c.permission,
                                children: [(0, r.jsx)(o.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.check
                                }), (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, r.jsxs)(r.Fragment, {
                        children: [null != d ? (0, r.jsx)(l.FormTitle, {
                            className: c.permissionHeader,
                            children: d
                        }) : null, (0, r.jsx)("div", {
                            className: c.container,
                            children: n.map(e => (0, r.jsxs)("div", {
                                className: c.permission,
                                children: [(0, r.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.cross
                                }), (0, r.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null]
                })
            }