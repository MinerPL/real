            "use strict";
            l.r(t), l.d(t, {
                PermissionOverrideType: function() {
                    return a
                },
                default: function() {
                    return E
                }
            });
            var n, a, s = l("37983");
            l("884691");
            var i = l("414456"),
                r = l.n(i),
                o = l("77078"),
                d = l("36694"),
                u = l("945330"),
                c = l("548775"),
                f = l("782340"),
                m = l("39185");
            (n = a || (a = {})).DENY = "DENY", n.PASSTHROUGH = "PASSTHROUGH", n.ALLOW = "ALLOW";
            let I = Object.keys(a);

            function T(e) {
                let {
                    value: t = "PASSTHROUGH",
                    onChange: l,
                    labelledBy: n,
                    disabled: a = !1
                } = e, i = (0, o.useRadioGroup)({
                    orientation: "horizontal",
                    isDisabled: a,
                    labelledBy: n
                });
                return (0, s.jsx)("div", {
                    className: r(m.group, {
                        [m.disabled]: a
                    }),
                    ...i,
                    children: I.map(e => (0, s.jsx)(N, {
                        type: e,
                        isSelected: t === e,
                        onSelect: e => {
                            t !== e && !a && l(e)
                        }
                    }, e))
                })
            }

            function N(e) {
                let t, l, n, {
                    type: a,
                    onSelect: i,
                    isSelected: I
                } = e;
                switch (a) {
                    case "DENY":
                        n = f.default.Messages.PERMISSION_OVERRIDE_DENY, t = u.default, l = m.deny;
                        break;
                    case "ALLOW":
                        n = f.default.Messages.PERMISSION_OVERRIDE_ALLOW, t = d.default, l = m.allow;
                        break;
                    default:
                        n = f.default.Messages.PERMISSION_OVERRIDE_PASSTHROUGH, t = c.default, l = m.passthrough
                }
                let T = (0, o.useRadioItem)({
                    isSelected: I,
                    label: n
                });
                return (0, s.jsx)(o.Clickable, {
                    className: r(m.item, l, {
                        [m.selected]: I
                    }),
                    onClick: () => i(a),
                    ...T,
                    children: (0, s.jsx)(t, {
                        width: 16,
                        height: 16
                    })
                })
            }
            T.Types = a;
            var E = T