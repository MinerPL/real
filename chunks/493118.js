            var e = n("954873"),
                o = n("203080"),
                c = n("738279"),
                u = n("840132"),
                a = n("569787");
            t.exports = function(t, r, n) {
                var i = t.constructor;
                switch (r) {
                    case "[object ArrayBuffer]":
                        return e(t);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new i(+t);
                    case "[object DataView]":
                        return o(t, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return a(t, n);
                    case "[object Map]":
                    case "[object Set]":
                        return new i;
                    case "[object Number]":
                    case "[object String]":
                        return new i(t);
                    case "[object RegExp]":
                        return c(t);
                    case "[object Symbol]":
                        return u(t)
                }
            }