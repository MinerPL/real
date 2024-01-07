            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("794252");
            var n = s("37983");
            s("884691");
            var a = s("414456"),
                l = s.n(a),
                i = s("506838"),
                r = s("681187"),
                o = s("605160"),
                u = s("265363"),
                d = s("17264"),
                c = e => {
                    let {
                        obscureReason: t,
                        iconClassname: s
                    } = e;
                    return (0, i.match)(t).with(o.ObscureReason.EXPLICIT_CONTENT, () => (0, n.jsx)(r.ImageWarningIcon, {
                        className: l(s, d.obscuredIcon),
                        color: "white"
                    })).with(o.ObscureReason.SPOILER, () => (0, n.jsx)(u.default, {
                        className: s
                    })).otherwise(() => null)
                }