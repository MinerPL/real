            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("901582"),
                i = n("252227"),
                r = n("143082"),
                u = n("832759"),
                o = n("60787"),
                d = n("466769"),
                c = n("736747"),
                f = n("49111"),
                h = n("782340"),
                p = n("394782");

            function m(e) {
                let {
                    onClose: t,
                    renderOutputDevices: n = !1,
                    renderInputDevices: m = !1,
                    renderInputModes: E = !1,
                    renderInputVolume: C = !1,
                    renderOutputVolume: S = !1,
                    onSelect: g
                } = e, _ = (0, c.default)(), I = (0, o.default)(), T = (0, d.default)(), v = (0, i.default)(), x = (0, r.default)(), N = (0, u.default)();
                return (0, a.jsx)(s.default, {
                    object: f.AnalyticsObjects.CONTEXT_MENU,
                    children: (0, a.jsxs)(l.Menu, {
                        onSelect: g,
                        className: p.menu,
                        onClose: t,
                        navId: "audio-device-context",
                        "aria-label": h.default.Messages.AUDIO_DEVICE_ACTIONS,
                        children: [m ? (0, a.jsx)(l.MenuGroup, {
                            label: h.default.Messages.INPUT_DEVICE,
                            children: I
                        }) : null, n ? (0, a.jsx)(l.MenuGroup, {
                            label: h.default.Messages.OUTPUT_DEVICE,
                            children: T
                        }) : null, E ? (0, a.jsx)(l.MenuGroup, {
                            label: h.default.Messages.FORM_LABEL_INPUT_MODE,
                            children: v
                        }) : null, (0, a.jsxs)(l.MenuGroup, {
                            children: [C ? x : null, S ? N : null, _]
                        })]
                    })
                })
            }