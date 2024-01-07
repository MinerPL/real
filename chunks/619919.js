            "use strict";
            r.r(t);
            var n = r("884691"),
                o = r.n(n),
                a = r("416037"),
                i = r.n(a),
                u = r("849122"),
                l = r("882982"),
                c = r("123090"),
                s = r("347415"),
                f = r("591660"),
                d = r("119909"),
                p = function(e) {
                    var t = e.width,
                        r = e.onChange,
                        n = e.rgb,
                        a = e.hsl,
                        i = e.hsv,
                        p = e.hex,
                        h = e.header,
                        b = e.styles,
                        v = e.className,
                        g = (0, u.default)((0, l.default)({
                            default: {
                                picker: {
                                    width: t,
                                    background: "#fff",
                                    border: "1px solid #dfe1e5",
                                    boxSizing: "initial",
                                    display: "flex",
                                    flexWrap: "wrap",
                                    borderRadius: "8px 8px 0px 0px"
                                },
                                head: {
                                    height: "57px",
                                    width: "100%",
                                    paddingTop: "16px",
                                    paddingBottom: "16px",
                                    paddingLeft: "16px",
                                    fontSize: "20px",
                                    boxSizing: "border-box",
                                    fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif"
                                },
                                saturation: {
                                    width: "70%",
                                    padding: "0px",
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                swatch: {
                                    width: "30%",
                                    height: "228px",
                                    padding: "0px",
                                    background: "rgba(" + n.r + ", " + n.g + ", " + n.b + ", 1)",
                                    position: "relative",
                                    overflow: "hidden"
                                },
                                body: {
                                    margin: "auto",
                                    width: "95%"
                                },
                                controls: {
                                    display: "flex",
                                    boxSizing: "border-box",
                                    height: "52px",
                                    paddingTop: "22px"
                                },
                                color: {
                                    width: "32px"
                                },
                                hue: {
                                    height: "8px",
                                    position: "relative",
                                    margin: "0px 16px 0px 16px",
                                    width: "100%"
                                },
                                Hue: {
                                    radius: "2px"
                                }
                            }
                        }, void 0 === b ? {} : b));
                    return o.createElement("div", {
                        style: g.picker,
                        className: "google-picker " + (void 0 === v ? "" : v)
                    }, o.createElement("div", {
                        style: g.head
                    }, h), o.createElement("div", {
                        style: g.swatch
                    }), o.createElement("div", {
                        style: g.saturation
                    }, o.createElement(c.Saturation, {
                        hsl: a,
                        hsv: i,
                        pointer: s.default,
                        onChange: r
                    })), o.createElement("div", {
                        style: g.body
                    }, o.createElement("div", {
                        style: g.controls,
                        className: "flexbox-fix"
                    }, o.createElement("div", {
                        style: g.hue
                    }, o.createElement(c.Hue, {
                        style: g.Hue,
                        hsl: a,
                        radius: "4px",
                        pointer: f.default,
                        onChange: r
                    }))), o.createElement(d.default, {
                        rgb: n,
                        hsl: a,
                        hex: p,
                        hsv: i,
                        onChange: r
                    })))
                };
            p.propTypes = {
                width: i.oneOfType([i.string, i.number]),
                styles: i.object,
                header: i.string
            }, p.defaultProps = {
                width: 652,
                styles: {},
                header: "Color picker"
            }, (0, c.ColorWrap)(p)