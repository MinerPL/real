            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("679243"),
                s = n("42887"),
                i = n("944832"),
                r = n("929018");

            function u(e) {
                let {
                    aspectRatio: t,
                    blocked: n,
                    channel: u,
                    className: o,
                    focused: d,
                    children: c,
                    inCall: f,
                    inPopout: h,
                    noBorder: p,
                    onClick: m,
                    onContextMenu: E,
                    onDoubleClick: C,
                    onVideoResize: S,
                    paused: g,
                    pulseSpeakingIndicator: _,
                    participant: I,
                    width: T,
                    ...v
                } = e, x = s.default.getVideoComponent();
                return (0, a.jsx)("div", {
                    style: {
                        width: T
                    },
                    className: r.spaceBetweenTiles,
                    children: (0, a.jsxs)(i.default, {
                        className: r.tileSizer,
                        aspectRatio: t,
                        children: [(0, a.jsx)(l.default, {
                            blocked: n,
                            channel: u,
                            className: o,
                            focused: d,
                            inCall: f,
                            inPopout: h,
                            noBorder: p,
                            onClick: m,
                            onContextMenu: E,
                            onDoubleClick: C,
                            onVideoResize: S,
                            participant: I,
                            paused: g,
                            pulseSpeakingIndicator: _,
                            videoComponent: x,
                            width: T,
                            ...v
                        }), c]
                    })
                })
            }