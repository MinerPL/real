            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = r("281859"),
                u = r("123090"),
                l = function(e) {
                    var t = e.color,
                        r = e.onClick,
                        n = e.onSwatchHover,
                        l = e.active,
                        c = (0, a.default)({
                            default: {
                                color: {
                                    background: t,
                                    width: "15px",
                                    height: "15px",
                                    float: "left",
                                    marginRight: "5px",
                                    marginBottom: "5px",
                                    position: "relative",
                                    cursor: "pointer"
                                },
                                dot: {
                                    absolute: "5px 5px 5px 5px",
                                    background: i.getContrastingColor(t),
                                    borderRadius: "50%",
                                    opacity: "0"
                                }
                            },
                            active: {
                                dot: {
                                    opacity: "1"
                                }
                            },
                            "color-#FFFFFF": {
                                color: {
                                    boxShadow: "inset 0 0 0 1px #ddd"
                                },
                                dot: {
                                    background: "#000"
                                }
                            },
                            transparent: {
                                dot: {
                                    background: "#000"
                                }
                            }
                        }, {
                            active: l,
                            "color-#FFFFFF": "#FFFFFF" === t,
                            transparent: "transparent" === t
                        });
                    return o.createElement(u.Swatch, {
                        style: c.color,
                        color: t,
                        onClick: void 0 === r ? function() {} : r,
                        onHover: n,
                        focusStyle: {
                            boxShadow: "0 0 4px " + t
                        }
                    }, o.createElement("div", {
                        style: c.dot
                    }))
                }