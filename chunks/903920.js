            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("884691"),
                o = r.n(n),
                a = r("849122"),
                i = r("987236"),
                u = r("892023"),
                l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                c = (0, i.handleFocus)(function(e) {
                    var t = e.color,
                        r = e.style,
                        n = e.onClick,
                        i = void 0 === n ? function() {} : n,
                        c = e.onHover,
                        s = e.title,
                        f = void 0 === s ? t : s,
                        d = e.children,
                        p = e.focus,
                        h = e.focusStyle,
                        b = "transparent" === t,
                        v = (0, a.default)({
                            default: {
                                swatch: l({
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
                    }), o.createElement("div", l({
                        style: v.swatch,
                        onClick: function(e) {
                            return i(t, e)
                        },
                        title: f,
                        tabIndex: 0,
                        onKeyDown: function(e) {
                            return 13 === e.keyCode && i(t, e)
                        }
                    }, g), d, b && o.createElement(u.default, {
                        borderRadius: v.swatch.borderRadius,
                        boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)"
                    }))
                })