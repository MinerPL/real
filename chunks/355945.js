            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Checkboard = void 0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                o = r("884691"),
                a = l(o),
                i = l(r("849122")),
                u = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                    return t.default = e, t
                }(r("595952"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = t.Checkboard = function(e) {
                var t = e.white,
                    r = e.grey,
                    l = e.size,
                    c = e.renderers,
                    s = e.borderRadius,
                    f = e.boxShadow,
                    d = e.children,
                    p = (0, i.default)({
                        default: {
                            grid: {
                                borderRadius: s,
                                boxShadow: f,
                                absolute: "0px 0px 0px 0px",
                                background: "url(" + u.get(t, r, l, c.canvas) + ") center left"
                            }
                        }
                    });
                return (0, o.isValidElement)(d) ? a.default.cloneElement(d, n({}, d.props, {
                    style: n({}, d.props.style, p.grid)
                })) : a.default.createElement("div", {
                    style: p.grid
                })
            };
            c.defaultProps = {
                size: 8,
                white: "transparent",
                grey: "rgba(0,0,0,.08)",
                renderers: {}
            }, t.default = c