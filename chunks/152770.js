            "use strict";
            var e = n("714919"),
                o = n("289275"),
                i = n("556028"),
                u = n("522552"),
                s = n("651696"),
                c = n("130170"),
                f = n("270700"),
                a = n("268540"),
                p = n("490653"),
                v = n("462892"),
                l = n("733931"),
                y = n("958260").f,
                h = n("485863").forEach,
                x = n("597018"),
                d = n("200258"),
                g = d.set,
                b = d.getterFor;
            t.exports = function(t, r, n) {
                var d, m = -1 !== t.indexOf("Map"),
                    S = -1 !== t.indexOf("Weak"),
                    w = m ? "set" : "add",
                    O = o[t],
                    j = O && O.prototype,
                    A = {};
                if (x && a(O) && (S || j.forEach && !u(function() {
                        new O().entries().next()
                    }))) {
                    var E = (d = r(function(r, n) {
                            g(f(r, E), {
                                type: t,
                                collection: new O
                            }), !v(n) && c(n, r[w], {
                                that: r,
                                AS_ENTRIES: m
                            })
                        })).prototype,
                        P = b(t);
                    h(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(t) {
                        var r = "add" === t || "set" === t;
                        t in j && !(S && "clear" === t) && s(E, t, function(n, e) {
                            var o = P(this).collection;
                            if (!r && S && !p(n)) return "get" === t && void 0;
                            var i = o[t](0 === n ? 0 : n, e);
                            return r ? this : i
                        })
                    }), S || y(E, "size", {
                        configurable: !0,
                        get: function() {
                            return P(this).collection.size
                        }
                    })
                } else d = n.getConstructor(r, t, m, w), i.enable();
                return l(d, t, !1, !0), A[t] = d, e({
                    global: !0,
                    forced: !0
                }, A), !S && n.setStrong(d, t, m), d
            }