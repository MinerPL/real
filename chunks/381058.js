            "use strict";
            r.r(t);
            var n = r("884691"),
                o = r.n(n),
                a = r("416037"),
                i = r.n(a),
                u = r("849122"),
                l = r("480583"),
                c = r("882982"),
                s = r("281859"),
                f = r("123090"),
                d = r("263736"),
                p = r("981101"),
                h = function(e) {
                    var t = e.onChange,
                        r = e.onSwatchHover,
                        n = e.colors,
                        a = e.hex,
                        i = e.rgb,
                        h = e.styles,
                        b = void 0 === h ? {} : h,
                        v = e.className,
                        g = (0, u.default)((0, c.default)({
                            default: {
                                Compact: {
                                    background: "#f6f6f6",
                                    radius: "4px"
                                },
                                compact: {
                                    paddingTop: "5px",
                                    paddingLeft: "5px",
                                    boxSizing: "initial",
                                    width: "240px"
                                },
                                clear: {
                                    clear: "both"
                                }
                            }
                        }, b)),
                        x = function(e, r) {
                            e.hex ? s.isValidHex(e.hex) && t({
                                hex: e.hex,
                                source: "hex"
                            }, r) : t(e, r)
                        };
                    return o.createElement(f.Raised, {
                        style: g.Compact,
                        styles: b
                    }, o.createElement("div", {
                        style: g.compact,
                        className: "compact-picker " + (void 0 === v ? "" : v)
                    }, o.createElement("div", null, (0, l.default)(n, function(e) {
                        return o.createElement(d.default, {
                            key: e,
                            color: e,
                            active: e.toLowerCase() === a,
                            onClick: x,
                            onSwatchHover: r
                        })
                    }), o.createElement("div", {
                        style: g.clear
                    })), o.createElement(p.default, {
                        hex: a,
                        rgb: i,
                        onChange: x
                    })))
                };
            h.propTypes = {
                colors: i.arrayOf(i.string),
                styles: i.object
            }, h.defaultProps = {
                colors: ["#4D4D4D", "#999999", "#FFFFFF", "#F44E3B", "#FE9200", "#FCDC00", "#DBDF00", "#A4DD00", "#68CCCA", "#73D8FF", "#AEA1FF", "#FDA1FF", "#333333", "#808080", "#cccccc", "#D33115", "#E27300", "#FCC400", "#B0BC00", "#68BC00", "#16A5A5", "#009CE0", "#7B64FF", "#FA28FF", "#000000", "#666666", "#B3B3B3", "#9F0500", "#C45100", "#FB9E00", "#808900", "#194D33", "#0C797D", "#0062B1", "#653294", "#AB149E"],
                styles: {}
            }, (0, f.ColorWrap)(h)