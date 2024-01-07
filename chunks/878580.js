            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = r("726740"),
                u = function(e) {
                    var t = e.onClick,
                        r = e.hsl,
                        n = (0, a.default)({
                            default: {
                                swatches: {
                                    marginTop: "20px"
                                },
                                swatch: {
                                    boxSizing: "border-box",
                                    width: "20%",
                                    paddingRight: "1px",
                                    float: "left"
                                },
                                clear: {
                                    clear: "both"
                                }
                            }
                        });
                    return o.createElement("div", {
                        style: n.swatches
                    }, o.createElement("div", {
                        style: n.swatch
                    }, o.createElement(i.default, {
                        hsl: r,
                        offset: ".80",
                        active: .1 > Math.abs(r.l - .8) && .1 > Math.abs(r.s - .5),
                        onClick: t,
                        first: !0
                    })), o.createElement("div", {
                        style: n.swatch
                    }, o.createElement(i.default, {
                        hsl: r,
                        offset: ".65",
                        active: .1 > Math.abs(r.l - .65) && .1 > Math.abs(r.s - .5),
                        onClick: t
                    })), o.createElement("div", {
                        style: n.swatch
                    }, o.createElement(i.default, {
                        hsl: r,
                        offset: ".50",
                        active: .1 > Math.abs(r.l - .5) && .1 > Math.abs(r.s - .5),
                        onClick: t
                    })), o.createElement("div", {
                        style: n.swatch
                    }, o.createElement(i.default, {
                        hsl: r,
                        offset: ".35",
                        active: .1 > Math.abs(r.l - .35) && .1 > Math.abs(r.s - .5),
                        onClick: t
                    })), o.createElement("div", {
                        style: n.swatch
                    }, o.createElement(i.default, {
                        hsl: r,
                        offset: ".20",
                        active: .1 > Math.abs(r.l - .2) && .1 > Math.abs(r.s - .5),
                        onClick: t,
                        last: !0
                    })), o.createElement("div", {
                        style: n.clear
                    }))
                }