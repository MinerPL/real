            var n = r("127704"),
                o = r("663008"),
                a = r("697244"),
                i = r("646767"),
                u = r("260333");
            e.exports = function(e, t, r) {
                var l = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return n(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new l(+e);
                    case "[object DataView]":
                        return o(e, r);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return u(e, r);
                    case "[object Map]":
                    case "[object Set]":
                        return new l;
                    case "[object Number]":
                    case "[object String]":
                        return new l(e);
                    case "[object RegExp]":
                        return a(e);
                    case "[object Symbol]":
                        return i(e)
                }
            }