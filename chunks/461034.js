            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = function(e) {
                    var t = e.rgb,
                        r = e.currentColor,
                        n = (0, a.default)({
                            default: {
                                swatches: {
                                    border: "1px solid #B3B3B3",
                                    borderBottom: "1px solid #F0F0F0",
                                    marginBottom: "2px",
                                    marginTop: "1px"
                                },
                                new: {
                                    height: "34px",
                                    background: "rgb(" + t.r + "," + t.g + ", " + t.b + ")",
                                    boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000"
                                },
                                current: {
                                    height: "34px",
                                    background: r,
                                    boxShadow: "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000"
                                },
                                label: {
                                    fontSize: "14px",
                                    color: "#000",
                                    textAlign: "center"
                                }
                            }
                        });
                    return o.createElement("div", null, o.createElement("div", {
                        style: n.label
                    }, "new"), o.createElement("div", {
                        style: n.swatches
                    }, o.createElement("div", {
                        style: n.new
                    }), o.createElement("div", {
                        style: n.current
                    })), o.createElement("div", {
                        style: n.label
                    }, "current"))
                }