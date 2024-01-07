            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var i = n("37983"),
                a = n("884691"),
                l = n("316693"),
                s = n("685698"),
                r = n("577776"),
                u = n("945330"),
                o = n("991170"),
                d = n("978970"),
                c = n("782340"),
                _ = n("190148");

            function E(e) {
                let {
                    application: t,
                    permissions: n,
                    deniedPermissions: E,
                    onPermissionsChange: f,
                    guild: h
                } = e, [p, T] = a.useState(o.default.NONE);
                a.useEffect(() => {
                    f(!0, n), T(l.default.invert(h.permissions)), f(!1, l.default.invert(h.permissions))
                }, [h, f, n]);
                let C = d.OrderedPermissions.filter(e => l.default.has(n, e)),
                    m = C.filter(e => !l.default.has(p, e)).map(e => {
                        let t = (0, d.getPermissionName)(e),
                            n = !l.default.has(E, e);
                        return (0, i.jsx)("li", {
                            className: _.permission,
                            children: (0, i.jsx)(s.Checkbox, {
                                value: n,
                                onChange: (t, n) => f(n, e),
                                type: s.Checkbox.Types.INVERTED,
                                children: (0, i.jsx)(r.Text, {
                                    variant: "text-md/normal",
                                    children: t
                                })
                            })
                        }, String(e))
                    }),
                    S = C.filter(e => l.default.has(p, e)).map(e => {
                        let t = (0, d.getPermissionName)(e);
                        return (0, i.jsxs)("li", {
                            className: _.permission,
                            children: [(0, i.jsx)("div", {
                                className: _.disabledPermissionIcon,
                                children: (0, i.jsx)(u.default, {
                                    className: _.icon
                                })
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: t
                            })]
                        }, String(e))
                    });
                return (0, i.jsxs)("div", {
                    className: _.botPermissions,
                    children: [(0, i.jsx)(r.Text, {
                        variant: "text-sm/medium",
                        color: "header-secondary",
                        className: _.permissionsLabel,
                        children: c.default.Messages.OAUTH2_CONFIRM_BOT_PERMISSIONS.format({
                            applicationName: t.name,
                            guildName: h.name
                        })
                    }), (0, i.jsx)("ul", {
                        className: _.permissionsList,
                        children: m
                    }), S.length > 0 ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(r.Text, {
                            variant: "text-sm/medium",
                            color: "header-secondary",
                            className: _.disabledPermissionsLabel,
                            children: c.default.Messages.OAUTH2_DISABLED_PERMISSIONS.format({
                                applicationName: t.name
                            })
                        }), (0, i.jsx)("ul", {
                            className: _.permissionsList,
                            children: S
                        })]
                    }) : null]
                })
            }