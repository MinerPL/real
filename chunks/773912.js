            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("320959"),
                a = {
                    passive: !0
                },
                o = {
                    name: "eventListeners",
                    enabled: !0,
                    phase: "write",
                    fn: function() {},
                    effect: function(e) {
                        var t = e.state,
                            n = e.instance,
                            o = e.options,
                            i = o.scroll,
                            s = void 0 === i || i,
                            u = o.resize,
                            l = void 0 === u || u,
                            c = (0, r.default)(t.elements.popper),
                            d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                        return s && d.forEach(function(e) {
                                e.addEventListener("scroll", n.update, a)
                            }), l && c.addEventListener("resize", n.update, a),
                            function() {
                                s && d.forEach(function(e) {
                                    e.removeEventListener("scroll", n.update, a)
                                }), l && c.removeEventListener("resize", n.update, a)
                            }
                    },
                    data: {}
                }