            e("222007");
            var DataView = e("568958"),
                Map = e("316923"),
                Promise = e("42852"),
                Set = e("817909"),
                WeakMap = e("798614"),
                n = e("60297"),
                o = e("521532"),
                i = "[object Map]",
                u = "[object Promise]",
                a = "[object Set]",
                c = "[object WeakMap]",
                s = "[object DataView]",
                f = o(DataView),
                p = o(Map),
                v = o(Promise),
                l = o(Set),
                h = o(WeakMap),
                _ = n;
            (DataView && _(new DataView(new ArrayBuffer(1))) != s || Map && _(new Map) != i || Promise && _(Promise.resolve()) != u || Set && _(new Set) != a || WeakMap && _(new WeakMap) != c) && (_ = function(t) {
                var r = n(t),
                    e = "[object Object]" == r ? t.constructor : void 0,
                    _ = e ? o(e) : "";
                if (_) switch (_) {
                    case f:
                        return s;
                    case p:
                        return i;
                    case v:
                        return u;
                    case l:
                        return a;
                    case h:
                        return c
                }
                return r
            }), t.exports = _