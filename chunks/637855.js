            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            }), r("781738");
            var n = r("261438"),
                i = /\s*,\s*/g,
                o = /&/g,
                s = /\$([\w-]+)/g,
                a = function() {
                    return {
                        onProcessStyle: function(e, t, r) {
                            if ("style" !== t.type) return e;
                            var a, u, l = t.options.parent;
                            for (var c in e) {
                                var f = -1 !== c.indexOf("&"),
                                    d = "@" === c[0];
                                if (f || d) {
                                    if (a = function(e, t, r) {
                                            if (r) return (0, n.default)({}, r, {
                                                index: r.index + 1
                                            });
                                            var i = e.options.nestingLevel;
                                            i = void 0 === i ? 1 : i + 1;
                                            var o = (0, n.default)({}, e.options, {
                                                nestingLevel: i,
                                                index: t.indexOf(e) + 1
                                            });
                                            return delete o.name, o
                                        }(t, l, a), f) {
                                        var h = function(e, t) {
                                            for (var r = t.split(i), n = e.split(i), s = "", a = 0; a < r.length; a++) {
                                                for (var u = r[a], l = 0; l < n.length; l++) {
                                                    var c = n[l];
                                                    s && (s += ", "), s += -1 !== c.indexOf("&") ? c.replace(o, u) : u + " " + c
                                                }
                                            }
                                            return s
                                        }(c, t.selector);
                                        !u && (u = function(e, t) {
                                            return function(r, n) {
                                                var i = e.getRule(n) || t && t.getRule(n);
                                                return i ? i.selector : n
                                            }
                                        }(l, r)), h = h.replace(s, u);
                                        var p = t.key + "-" + c;
                                        "replaceRule" in l ? l.replaceRule(p, e[c], (0, n.default)({}, a, {
                                            selector: h
                                        })) : l.addRule(p, e[c], (0, n.default)({}, a, {
                                            selector: h
                                        }))
                                    } else d && l.addRule(c, {}, a).addRule(t.key, e[c], {
                                        selector: t.selector
                                    });
                                    delete e[c]
                                }
                            }
                            return e
                        }
                    }
                }