            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Swatch = void 0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                o = l(r("884691")),
                a = l(r("849122")),
                i = r("662525"),
                u = l(r("355945"));

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var c = t.Swatch = function(e) {
                var t = e.color,
                    r = e.style,
                    i = e.onClick,
                    l = void 0 === i ? function() {} : i,
                    c = e.onHover,
                    s = e.title,
                    f = void 0 === s ? t : s,
                    d = e.children,
                    p = e.focus,
                    h = e.focusStyle,
                    b = "transparent" === t,
                    v = (0, a.default)({
                        default: {
                            swatch: n({
                                background: t,
                                height: "100%",
                                width: "100%",
                                cursor: "pointer",
                                position: "relative",
                                outline: "none"
                            }, r, p ? void 0 === h ? {} : h : {})
                        }
                    }),
                    g = {};
                return c && (g.onMouseOver = function(e) {
                    return c(t, e)
                }), o.default.createElement("div", n({
                    style: v.swatch,
                    onClick: function(e) {
                        return l(t, e)
                    },
                    title: f,
                    tabIndex: 0,
                    onKeyDown: function(e) {
                        return 13 === e.keyCode && l(t, e)
                    }
                }, g), d, b && o.default.createElement(u.default, {
                    borderRadius: v.swatch.borderRadius,
                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
                }))
            };
            t.default = (0, i.handleFocus)(c)