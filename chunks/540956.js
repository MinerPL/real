            r("222007");
            var DataView = r("864259"),
                Map = r("516863"),
                Promise = r("23588"),
                Set = r("892933"),
                WeakMap = r("445269"),
                e = r("33426"),
                o = r("6906"),
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
                var n = e(t),
                    r = "[object Object]" == n ? t.constructor : void 0,
                    _ = r ? o(r) : "";
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
                return n
            }), t.exports = _