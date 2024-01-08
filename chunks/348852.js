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
                let e = (0, l.useStateFromStores)([r.default], () => Object.values(r.default.getVideoDevices())),
                    t = (0, l.useStateFromStores)([r.default], () => r.default.getVideoDeviceId());
                return e.map(e => {
                    let {
                        id: n,
                        disabled: l,
                        name: r
                    } = e;
                    return (0, a.jsx)(s.MenuRadioItem, {
                        group: "video-devices",
                        id: "video-device-".concat(n),
                        disabled: l,
                        label: r,
                        checked: n === t,
                        action: () => i.default.setVideoDevice(n)
                    }, "video-device-".concat(n))
                })
            }