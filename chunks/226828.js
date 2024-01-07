            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = r("480583"),
                u = r("427257"),
                l = function(e) {
                    var t = e.onClick,
                        r = e.onSwatchHover,
                        n = e.group,
                        l = e.active,
                        c = (0, a.default)({
                            default: {
                                group: {
                                    paddingBottom: "10px",
                                    width: "40px",
                                    float: "left",
                                    marginRight: "10px"
                                }
                            }
                        });
                    return o.createElement("div", {
                        style: c.group
                    }, (0, i.default)(n, function(e, a) {
                        return o.createElement(u.default, {
                            key: e,
                            color: e,
                            active: e.toLowerCase() === l,
                            first: 0 === a,
                            last: a === n.length - 1,
                            onClick: t,
                            onSwatchHover: r
                        })
                    }))
                }