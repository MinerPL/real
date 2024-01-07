            "use strict";
            r.r(t);
            var n = r("884691"),
                o = r.n(n),
                a = r("416037"),
                i = r.n(a),
                u = r("849122"),
                l = r("882982"),
                c = r("281859"),
                s = r("123090"),
                f = r("113296"),
                d = function(e) {
                    var t = e.onChange,
                        r = e.onSwatchHover,
                        n = e.hex,
                        a = e.colors,
                        i = e.width,
                        d = e.triangle,
                        p = e.styles,
                        h = e.className,
                        b = "transparent" === n,
                        v = function(e, r) {
                            c.isValidHex(e) && t({
                                hex: e,
                                source: "hex"
                            }, r)
                        },
                        g = (0, u.default)((0, l.default)({
                            default: {
                                card: {
                                    width: i,
                                    background: "#fff",
                                    boxShadow: "0 1px rgba(0,0,0,.1)",
                                    borderRadius: "6px",
                                    position: "relative"
                                },
                                head: {
                                    height: "110px",
                                    background: n,
                                    borderRadius: "6px 6px 0 0",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative"
                                },
                                body: {
                                    padding: "10px"
                                },
                                label: {
                                    fontSize: "18px",
                                    color: c.getContrastingColor(n),
                                    position: "relative"
                                },
                                triangle: {
                                    width: "0px",
                                    height: "0px",
                                    borderStyle: "solid",
                                    borderWidth: "0 10px 10px 10px",
                                    borderColor: "transparent transparent " + n + " transparent",
                                    position: "absolute",
                                    top: "-10px",
                                    left: "50%",
                                    marginLeft: "-10px"
                                },
                                input: {
                                    width: "100%",
                                    fontSize: "12px",
                                    color: "#666",
                                    border: "0px",
                                    outline: "none",
                                    height: "22px",
                                    boxShadow: "inset 0 0 0 1px #ddd",
                                    borderRadius: "4px",
                                    padding: "0 7px",
                                    boxSizing: "border-box"
                                }
                            },
                            "hide-triangle": {
                                triangle: {
                                    display: "none"
                                }
                            }
                        }, void 0 === p ? {} : p), {
                            "hide-triangle": "hide" === d
                        });
                    return o.createElement("div", {
                        style: g.card,
                        className: "block-picker " + (void 0 === h ? "" : h)
                    }, o.createElement("div", {
                        style: g.triangle
                    }), o.createElement("div", {
                        style: g.head
                    }, b && o.createElement(s.Checkboard, {
                        borderRadius: "6px 6px 0 0"
                    }), o.createElement("div", {
                        style: g.label
                    }, n)), o.createElement("div", {
                        style: g.body
                    }, o.createElement(f.default, {
                        colors: a,
                        onClick: v,
                        onSwatchHover: r
                    }), o.createElement(s.EditableInput, {
                        style: {
                            input: g.input
                        },
                        value: n,
                        onChange: v
                    })))
                };
            d.propTypes = {
                width: i.oneOfType([i.string, i.number]),
                colors: i.arrayOf(i.string),
                triangle: i.oneOf(["top", "hide"]),
                styles: i.object
            }, d.defaultProps = {
                width: 170,
                colors: ["#D9E3F0", "#F47373", "#697689", "#37D67A", "#2CCCE4", "#555555", "#dce775", "#ff8a65", "#ba68c8"],
                triangle: "top",
                styles: {}
            }, (0, s.ColorWrap)(d)