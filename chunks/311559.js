            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return m
                }
            }), r("424973");
            var a = r("261438"),
                n = r("309501"),
                s = r("126153"),
                o = r("884691"),
                i = r.n(o),
                u = r("493110"),
                c = r.n(u),
                l = r("649487"),
                f = r("601684"),
                b = r("208007"),
                d = r("619081"),
                h = r("149142"),
                p = ["getItemString", "keyPath", "labelRenderer", "styling", "value", "valueRenderer", "isCustomNode"];

            function g(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, a)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(r), !0).forEach(function(t) {
                        (0, n.default)(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : g(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var v = function(e) {
                var t = e.getItemString,
                    r = e.keyPath,
                    n = e.labelRenderer,
                    o = e.styling,
                    u = e.value,
                    c = e.valueRenderer,
                    g = e.isCustomNode,
                    v = (0, s.default)(e, p),
                    m = g(u) ? "Custom" : (0, l.default)(u),
                    O = {
                        getItemString: t,
                        key: r[0],
                        keyPath: r,
                        labelRenderer: n,
                        nodeType: m,
                        styling: o,
                        value: u,
                        valueRenderer: c
                    },
                    k = y(y(y({}, v), O), {}, {
                        data: u,
                        isCustomNode: g
                    });
                switch (m) {
                    case "Object":
                    case "Error":
                    case "WeakMap":
                    case "WeakSet":
                        return i.createElement(f.default, k);
                    case "Array":
                        return i.createElement(b.default, k);
                    case "Iterable":
                    case "Map":
                    case "Set":
                        return i.createElement(d.default, k);
                    case "String":
                        return i.createElement(h.default, (0, a.default)({}, O, {
                            valueGetter: function(e) {
                                return '"'.concat(e, '"')
                            }
                        }));
                    case "Number":
                    case "Custom":
                        return i.createElement(h.default, O);
                    case "Boolean":
                        return i.createElement(h.default, (0, a.default)({}, O, {
                            valueGetter: function(e) {
                                return e ? "true" : "false"
                            }
                        }));
                    case "Date":
                        return i.createElement(h.default, (0, a.default)({}, O, {
                            valueGetter: function(e) {
                                return e.toISOString()
                            }
                        }));
                    case "Null":
                        return i.createElement(h.default, (0, a.default)({}, O, {
                            valueGetter: function() {
                                return "null"
                            }
                        }));
                    case "Undefined":
                        return i.createElement(h.default, (0, a.default)({}, O, {
                            valueGetter: function() {
                                return "undefined"
                            }
                        }));
                    case "Function":
                    case "Symbol":
                        return i.createElement(h.default, (0, a.default)({}, O, {
                            valueGetter: function(e) {
                                return e.toString()
                            }
                        }));
                    default:
                        return i.createElement(h.default, (0, a.default)({}, O, {
                            valueGetter: function() {
                                return "<".concat(m, ">")
                            }
                        }))
                }
            };
            v.propTypes = {
                getItemString: c.func.isRequired,
                keyPath: c.arrayOf(c.oneOfType([c.string, c.number]).isRequired).isRequired,
                labelRenderer: c.func.isRequired,
                styling: c.func.isRequired,
                value: c.any,
                valueRenderer: c.func.isRequired,
                isCustomNode: c.func.isRequired
            };
            var m = v