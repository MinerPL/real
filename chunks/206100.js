            "use strict";
            n.r(t), n.d(t, {
                OperatingSystemSection: function() {
                    return _
                }
            }), n("70102");
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("77078"),
                r = n("84084"),
                o = n("260162"),
                u = n("415844"),
                d = n("49111"),
                c = n("782340"),
                f = n("50536");
            let m = {
                [d.OperatingSystems.WINDOWS]: {
                    icon: u.default,
                    getLabel: () => c.default.Messages.WINDOWS
                },
                [d.OperatingSystems.MACOS]: {
                    icon: o.default,
                    getLabel: () => c.default.Messages.MACOS
                },
                [d.OperatingSystems.LINUX]: {
                    icon: r.default,
                    getLabel: () => c.default.Messages.LINUX
                }
            };

            function E(e) {
                let {
                    operatingSystem: t,
                    className: n
                } = e, s = m[t];
                if (null == s) throw Error("Unexpected operating system: ".concat(t));
                let l = s.icon;
                return (0, a.jsx)(i.Tooltip, {
                    text: s.getLabel(),
                    children: e => (0, a.jsx)(l, {
                        ...e,
                        className: n
                    })
                })
            }
            let _ = e => {
                let {
                    systems: t,
                    className: n,
                    iconClassName: s
                } = e;
                return (0, a.jsx)("div", {
                    className: l(f.OSSection, n),
                    children: t.map(e => (0, a.jsx)(E, {
                        operatingSystem: e,
                        className: l(f.purchaseUnitOperatingSystem, s)
                    }, e))
                })
            }