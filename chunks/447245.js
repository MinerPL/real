                var Symbol = n("330206"),
                    r = Object.prototype,
                    o = r.hasOwnProperty,
                    i = r.toString,
                    u = Symbol ? Symbol.toStringTag : void 0;
                t.exports = function(t) {
                    var e = o.call(t, u),
                        n = t[u];
                    try {
                        t[u] = void 0;
                        var r = !0
                    } catch (t) {}
                    var c = i.call(t);
                    return r && (e ? t[u] = n : delete t[u]), c
                }