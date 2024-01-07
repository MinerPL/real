            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return m
                }
            }), l("222007");
            var n = l("37983");
            l("884691");
            var a = l("448105"),
                s = l.n(a),
                i = l("917351"),
                r = l.n(i),
                o = l("509043"),
                u = l("77078"),
                d = l("49111"),
                c = l("782340"),
                f = l("558062"),
                m = function(e) {
                    let {
                        className: t,
                        guild: l,
                        roleStyle: a,
                        roleFilter: i,
                        onSelect: m,
                        onClose: p
                    } = e, E = e => r(l.roles).filter(i).filter(t => s(e.toLowerCase(), t.name.toLowerCase())).value();
                    return (0, n.jsx)(u.ComboboxPopout, {
                        className: t,
                        value: new Set,
                        onChange: m,
                        placeholder: c.default.Messages.ADD_ROLE_PLACEHOLDER,
                        "aria-label": c.default.Messages.ADD_ROLE_A11Y_LABEL,
                        onClose: p,
                        children: e => E(e).map(e => {
                            var t, l;
                            return (0, n.jsxs)(u.ComboboxItem, {
                                value: e.id,
                                children: ["dot" === a ? (0, n.jsx)(u.RoleDot, {
                                    className: f.popoutRoleDot,
                                    color: null !== (t = e.colorString) && void 0 !== t ? t : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR),
                                    background: !1,
                                    tooltip: !1
                                }) : (0, n.jsx)(u.RoleCircle, {
                                    className: f.popoutRoleCircle,
                                    color: null !== (l = e.colorString) && void 0 !== l ? l : (0, o.int2hex)(d.DEFAULT_ROLE_COLOR)
                                }), (0, n.jsx)(u.ComboboxItem.Label, {
                                    children: e.name
                                })]
                            }, e.id)
                        })
                    })
                }