            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = r("281859"),
                u = r("123090"),
                l = r("479023"),
                c = function(e) {
                    var t = e.color,
                        r = e.onClick,
                        n = e.onSwatchHover,
                        c = e.first,
                        s = e.last,
                        f = e.active,
                        d = (0, a.default)({
                            default: {
                                color: {
                                    width: "40px",
                                    height: "24px",
                                    cursor: "pointer",
                                    background: t,
                                    marginBottom: "1px"
                                },
                                check: {
                                    color: i.getContrastingColor(t),
                                    marginLeft: "8px",
                                    display: "none"
                                }
                            },
                            first: {
                                color: {
                                    overflow: "hidden",
                                    borderRadius: "2px 2px 0 0"
                                }
                            },
                            last: {
                                color: {
                                    overflow: "hidden",
                                    borderRadius: "0 0 2px 2px"
                                }
                            },
                            active: {
                                check: {
                                    display: "block"
                                }
                            },
                            "color-#FFFFFF": {
                                color: {
                                    boxShadow: "inset 0 0 0 1px #ddd"
                                },
                                check: {
                                    color: "#333"
                                }
                            },
                            transparent: {
                                check: {
                                    color: "#333"
                                }
                            }
                        }, {
                            first: c,
                            last: s,
                            active: f,
                            "color-#FFFFFF": "#FFFFFF" === t,
                            transparent: "transparent" === t
                        });
                    return o.createElement(u.Swatch, {
                        color: t,
                        style: d.color,
                        onClick: void 0 === r ? function() {} : r,
                        onHover: n,
                        focusStyle: {
                            boxShadow: "0 0 4px " + t
                        }
                    }, o.createElement("div", {
                        style: d.check
                    }, o.createElement(l.default, null)))
                }