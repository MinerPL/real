            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                s = n("77078"),
                i = n("629109"),
                r = n("42887");

            function u() {
                let e = (0, l.useStateFromStores)([r.default], () => Object.values(r.default.getInputDevices())),
                    t = (0, l.useStateFromStores)([r.default], () => r.default.getInputDeviceId());
                return e.map(e => {
                    let {
                        id: n,
                        disabled: l,
                        name: r
                    } = e;
                    return (0, a.jsx)(s.MenuRadioItem, {
                        id: "input-".concat(n),
                        group: "input-devices",
                        disabled: l,
                        label: r,
                        checked: n === t,
                        action: () => i.default.setInputDevice(n)
                    }, "input-".concat(n))
                })
            }