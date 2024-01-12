            n("222007");
            var DataView = n("864259"),
                Map = n("516863"),
                Promise = n("23588"),
                Set = n("892933"),
                WeakMap = n("445269"),
                e = n("33426"),
                o = n("6906"),
                i = "[object Map]",
                u = "[object Promise]",
                a = "[object Set]",
                c = "[object WeakMap]",
                s = "[object DataView]",
                f = o(DataView),
                p = o(Map),
                l = o(Promise),
                v = o(Set),
                h = o(WeakMap),
                _ = e;
            (DataView && _(new DataView(new ArrayBuffer(1))) != s || Map && _(new Map) != i || Promise && _(Promise.resolve()) != u || Set && _(new Set) != a || WeakMap && _(new WeakMap) != c) && (_ = function(t) {
                var r = e(t),
                    n = "[object Object]" == r ? t.constructor : void 0,
                    _ = n ? o(n) : "";
                if (_) switch (_) {
                    case f:
                        return s;
                    case p:
                        return i;
                    case l:
                        return u;
                    case v:
                        return a;
                    case h:
                        return c
                }
                return r
            }), t.exports = _