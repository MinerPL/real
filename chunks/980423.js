            "use strict";
            n.r(t), n.d(t, {
                LiveIndicatorLooks: function() {
                    return s
                },
                LiveIndicatorShapes: function() {
                    return m
                },
                default: function() {
                    return _
                }
            });
            var a, s, l = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("669491"),
                u = n("956089"),
                d = n("782340"),
                c = n("164910");
            (a = s || (s = {})).RED = "RED", a.GRAY = "GRAY";
            let f = {
                    LARGE: c.liveLarge,
                    SMALL: c.liveSmall
                },
                m = {
                    [u.BadgeShapes.ROUND]: c.liveShapeRound,
                    [u.BadgeShapes.ROUND_LEFT]: c.liveShapeRoundLeft,
                    [u.BadgeShapes.ROUND_RIGHT]: c.liveShapeRoundRight,
                    [u.BadgeShapes.SQUARE]: ""
                };

            function E(e) {
                let {
                    className: t,
                    style: n,
                    shape: a = u.BadgeShapes.ROUND,
                    look: s = "RED",
                    size: i = f.LARGE
                } = e;
                return "RED" === s ? (0, l.jsx)(u.TextBadge, {
                    text: d.default.Messages.LIVE,
                    className: r(t, c.live, i),
                    color: o.default.unsafe_rawColors.RED_400.css,
                    shape: m[a],
                    style: n
                }) : (0, l.jsx)(u.TextBadge, {
                    text: d.default.Messages.LIVE,
                    className: r(t, c.live, i, c.grey),
                    disableColor: !0,
                    shape: m[a],
                    style: n
                })
            }
            E.Looks = s, E.Sizes = f;
            var _ = E