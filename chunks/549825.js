            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var r = n("414456"),
                i = n.n(r),
                l = n("77078"),
                a = n("978970"),
                u = n("36694"),
                o = n("945330"),
                c = n("705179");

            function d(e) {
                let {
                    grantedPermissions: t,
                    disabledPermissions: n,
                    grantedPermissionsHeader: r,
                    disabledPermissionsHeader: d,
                    className: f
                } = e;
                return (0, s.jsxs)("div", {
                    className: i(c.list, f),
                    children: [null != t && t.length > 0 ? (0, s.jsxs)(s.Fragment, {
                        children: [null != r ? (0, s.jsx)(l.FormTitle, {
                            className: c.permissionHeader,
                            children: r
                        }) : null, (0, s.jsx)("div", {
                            className: c.container,
                            children: t.map(e => (0, s.jsxs)("div", {
                                className: c.permission,
                                children: [(0, s.jsx)(u.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.check
                                }), (0, s.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null, null != n && n.length > 0 ? (0, s.jsxs)(s.Fragment, {
                        children: [null != d ? (0, s.jsx)(l.FormTitle, {
                            className: c.permissionHeader,
                            children: d
                        }) : null, (0, s.jsx)("div", {
                            className: c.container,
                            children: n.map(e => (0, s.jsxs)("div", {
                                className: c.permission,
                                children: [(0, s.jsx)(o.default, {
                                    width: 16,
                                    height: 16,
                                    className: c.cross
                                }), (0, s.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    children: (0, a.getPermissionName)(e)
                                })]
                            }, e.toString()))
                        })]
                    }) : null]
                })
            }