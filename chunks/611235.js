            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("808653");
            var r = n("190418"),
                a = n("753671"),
                o = {
                    name: "applyStyles",
                    enabled: !0,
                    phase: "write",
                    fn: function(e) {
                        var t = e.state;
                        Object.keys(t.elements).forEach(function(e) {
                            var n = t.styles[e] || {},
                                o = t.attributes[e] || {},
                                i = t.elements[e];
                            (0, a.isHTMLElement)(i) && (0, r.default)(i) && (Object.assign(i.style, n), Object.keys(o).forEach(function(e) {
                                var t = o[e];
                                !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                            }))
                        })
                    },
                    effect: function(e) {
                        var t = e.state,
                            n = {
                                popper: {
                                    position: t.options.strategy,
                                    left: "0",
                                    top: "0",
                                    margin: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                },
                                reference: {}
                            };
                        return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                            function() {
                                Object.keys(t.elements).forEach(function(e) {
                                    var o = t.elements[e],
                                        i = t.attributes[e] || {},
                                        s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function(e, t) {
                                            return e[t] = "", e
                                        }, {});
                                    (0, a.isHTMLElement)(o) && (0, r.default)(o) && (Object.assign(o.style, s), Object.keys(i).forEach(function(e) {
                                        o.removeAttribute(e)
                                    }))
                                })
                            }
                    },
                    requires: ["computeStyles"]
                }