            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            }), r("781738");
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = r("281859"),
                u = r("123090"),
                l = function(e) {
                    var t = e.onChange,
                        r = e.rgb,
                        n = e.hsl,
                        l = e.hex,
                        c = e.disableAlpha,
                        s = (0, a.default)({
                            default: {
                                fields: {
                                    display: "flex",
                                    paddingTop: "4px"
                                },
                                single: {
                                    flex: "1",
                                    paddingLeft: "6px"
                                },
                                alpha: {
                                    flex: "1",
                                    paddingLeft: "6px"
                                },
                                double: {
                                    flex: "2"
                                },
                                input: {
                                    width: "80%",
                                    padding: "4px 10% 3px",
                                    border: "none",
                                    boxShadow: "inset 0 0 0 1px #ccc",
                                    fontSize: "11px"
                                },
                                label: {
                                    display: "block",
                                    textAlign: "center",
                                    fontSize: "11px",
                                    color: "#222",
                                    paddingTop: "3px",
                                    paddingBottom: "4px",
                                    textTransform: "capitalize"
                                }
                            },
                            disableAlpha: {
                                alpha: {
                                    display: "none"
                                }
                            }
                        }, {
                            disableAlpha: c
                        }),
                        f = function(e, o) {
                            e.hex ? i.isValidHex(e.hex) && t({
                                hex: e.hex,
                                source: "hex"
                            }, o) : e.r || e.g || e.b ? t({
                                r: e.r || r.r,
                                g: e.g || r.g,
                                b: e.b || r.b,
                                a: r.a,
                                source: "rgb"
                            }, o) : e.a && (e.a < 0 ? e.a = 0 : e.a > 100 && (e.a = 100), e.a /= 100, t({
                                h: n.h,
                                s: n.s,
                                l: n.l,
                                a: e.a,
                                source: "rgb"
                            }, o))
                        };
                    return o.createElement("div", {
                        style: s.fields,
                        className: "flexbox-fix"
                    }, o.createElement("div", {
                        style: s.double
                    }, o.createElement(u.EditableInput, {
                        style: {
                            input: s.input,
                            label: s.label
                        },
                        label: "hex",
                        value: l.replace("#", ""),
                        onChange: f
                    })), o.createElement("div", {
                        style: s.single
                    }, o.createElement(u.EditableInput, {
                        style: {
                            input: s.input,
                            label: s.label
                        },
                        label: "r",
                        value: r.r,
                        onChange: f,
                        dragLabel: "true",
                        dragMax: "255"
                    })), o.createElement("div", {
                        style: s.single
                    }, o.createElement(u.EditableInput, {
                        style: {
                            input: s.input,
                            label: s.label
                        },
                        label: "g",
                        value: r.g,
                        onChange: f,
                        dragLabel: "true",
                        dragMax: "255"
                    })), o.createElement("div", {
                        style: s.single
                    }, o.createElement(u.EditableInput, {
                        style: {
                            input: s.input,
                            label: s.label
                        },
                        label: "b",
                        value: r.b,
                        onChange: f,
                        dragLabel: "true",
                        dragMax: "255"
                    })), o.createElement("div", {
                        style: s.alpha
                    }, o.createElement(u.EditableInput, {
                        style: {
                            input: s.input,
                            label: s.label
                        },
                        label: "a",
                        value: Math.round(100 * r.a),
                        onChange: f,
                        dragLabel: "true",
                        dragMax: "100"
                    })))
                }