            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("389463"),
                i = r("151261"),
                o = function(e) {
                    return e && e[n.default] && e === e[0, n.default]()
                },
                s = function(e) {
                    return {
                        onCreateRule: function(t, r, n) {
                            if (!o(r)) return null;
                            var s = (0, i.createRule)(t, {}, n);
                            return r.subscribe(function(t) {
                                for (var r in t) s.prop(r, t[r], e)
                            }), s
                        },
                        onProcessRule: function(t) {
                            if (!t || "style" === t.type) {
                                var r = t.style,
                                    n = function(n) {
                                        var i = r[n];
                                        if (!o(i)) return "continue";
                                        delete r[n], i.subscribe({
                                            next: function(r) {
                                                t.prop(n, r, e)
                                            }
                                        })
                                    };
                                for (var i in r)
                                    if ("continue" === n(i)) continue
                            }
                        }
                    }
                }