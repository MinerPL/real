            var Symbol = A("506264"),
                a = Object.prototype,
                l = a.hasOwnProperty,
                n = a.toString,
                r = Symbol ? Symbol.toStringTag : void 0;
            e.exports = function(e) {
                var t = l.call(e, r),
                    A = e[r];
                try {
                    e[r] = void 0;
                    var a = !0
                } catch (e) {}
                var s = n.call(e);
                return a && (t ? e[r] = A : delete e[r]), s
            }