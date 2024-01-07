            "use strict";
            r.r(t);
            var n = r("884691"),
                o = r.n(n),
                a = r("416037"),
                i = r.n(a),
                u = r("849122"),
                l = r("882982"),
                c = r("123090"),
                s = r("878580"),
                f = r("372007"),
                d = function(e) {
                    var t = e.hsl,
                        r = e.onChange,
                        n = e.pointer,
                        a = e.styles,
                        i = e.className,
                        f = (0, u.default)((0, l.default)({
                            default: {
                                hue: {
                                    height: "12px",
                                    position: "relative"
                                },
                                Hue: {
                                    radius: "2px"
                                }
                            }
                        }, void 0 === a ? {} : a));
                    return o.createElement("div", {
                        style: f.wrap || {},
                        className: "slider-picker " + (void 0 === i ? "" : i)
                    }, o.createElement("div", {
                        style: f.hue
                    }, o.createElement(c.Hue, {
                        style: f.Hue,
                        hsl: t,
                        pointer: n,
                        onChange: r
                    })), o.createElement("div", {
                        style: f.swatches
                    }, o.createElement(s.default, {
                        hsl: t,
                        onClick: r
                    })))
                };
            d.propTypes = {
                styles: i.object
            }, d.defaultProps = {
                pointer: f.default,
                styles: {}
            }, (0, c.ColorWrap)(d)