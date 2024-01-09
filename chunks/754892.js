            var Symbol = r("506264"),
                n = Object.prototype,
                i = n.hasOwnProperty,
                o = n.toString,
                a = Symbol ? Symbol.toStringTag : void 0;
            t.exports = function(t) {
                var e = i.call(t, a),
                    r = t[a];
                try {
                    t[a] = void 0;
                    var n = !0
                } catch (t) {}
                var c = o.call(t);
                return n && (e ? t[a] = r : delete t[a]), c
            }