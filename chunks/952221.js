            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("627445"),
                i = n.n(s),
                r = n("65597"),
                u = n("550410"),
                o = n("697218"),
                d = n("780166"),
                c = n("291499"),
                f = n("154891"),
                h = n("522253");

            function p(e) {
                let {
                    focused: t,
                    channelId: n,
                    streamerId: s,
                    stream: d
                } = e, p = l.useRef(null), m = (0, r.default)([o.default], () => o.default.getCurrentUser());
                i(null != m, "user cannot be null"), (0, f.default)(p, m, s, n);
                let {
                    handleClick: E,
                    handleMouseDown: C,
                    handleMouseEnter: S,
                    handleMouseMove: g,
                    handleMouseUp: _
                } = (0, c.default)({
                    user: m,
                    channelId: n,
                    streamerId: s,
                    stream: d,
                    focused: t,
                    canvas: p.current
                });
                return (0, a.jsx)(u.default, {
                    children: (0, a.jsx)("canvas", {
                        ref: p,
                        onClick: E,
                        onMouseDown: C,
                        onMouseEnter: S,
                        onMouseMove: g,
                        onMouseUp: _,
                        className: h.sharedCanvas
                    })
                })
            }

            function m(e) {
                let {
                    isSharedCanvasEnabled: t
                } = d.default.useExperiment({
                    guildId: e.guildId,
                    location: "d0de1c_1"
                }, {
                    autoTrackExposure: !0
                });
                return !t || e.hasScreenMessage ? null : (0, a.jsx)(p, {
                    ...e
                })
            }