            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = r("123090"),
                u = (0, a.handleHover)(function(e) {
                    var t = e.hover,
                        r = e.color,
                        n = e.onClick,
                        u = e.onSwatchHover,
                        l = {
                            position: "relative",
                            zIndex: "2",
                            outline: "2px solid #fff",
                            boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)"
                        },
                        c = (0, a.default)({
                            default: {
                                swatch: {
                                    width: "25px",
                                    height: "25px",
                                    fontSize: "0"
                                }
                            },
                            hover: {
                                swatch: l
                            }
                        }, {
                            hover: t
                        });
                    return o.createElement("div", {
                        style: c.swatch
                    }, o.createElement(i.Swatch, {
                        color: r,
                        onClick: n,
                        onHover: u,
                        focusStyle: l
                    }))
                })