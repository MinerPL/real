            "use strict";
            n.r(t), n.d(t, {
                Directions: function() {
                    return r
                },
                default: function() {
                    return c
                }
            }), n("70102");
            var r, l, s = n("37983");
            n("884691");
            var a = n("414456"),
                o = n.n(a),
                i = n("75196"),
                u = n("741460");
            (l = r || (r = {})).LEFT = "LEFT", l.RIGHT = "RIGHT", l.UP = "UP", l.DOWN = "DOWN", l.UP_LEFT = "UP_LEFT", l.DOWN_RIGHT = "DOWN_RIGHT";
            let d = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = "currentColor",
                    direction: l,
                    foreground: a,
                    className: d,
                    title: c,
                    ...h
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, i.default)(h),
                    width: t,
                    height: n,
                    className: o(d, function(e) {
                        switch (e) {
                            case "LEFT":
                                return u.left;
                            case "RIGHT":
                                return u.right;
                            case "UP":
                                return null;
                            case "DOWN":
                                return u.down;
                            case "UP_LEFT":
                                return u.upLeft;
                            case "DOWN_RIGHT":
                                return u.downRight;
                            default:
                                throw Error("Invalid Direction ".concat(e))
                        }
                    }(l)),
                    viewBox: "0 0 24 24",
                    children: [null != c ? (0, s.jsx)("title", {
                        children: c
                    }) : null, (0, s.jsx)("polygon", {
                        className: a,
                        fill: r,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                })
            };
            d.Directions = r;
            var c = d