            "use strict";
            var e = n("503486"),
                o = n("868822"),
                i = n("188523"),
                u = n("308274"),
                f = n("969006"),
                c = n("116180"),
                a = n("664144"),
                RangeError = e.RangeError,
                Int8Array = e.Int8Array,
                s = Int8Array && Int8Array.prototype,
                y = s && s.set,
                h = i.aTypedArray,
                p = i.exportTypedArrayMethod,
                v = !a(function() {
                    var t = new Uint8ClampedArray(2);
                    return o(y, t, {
                        length: 1,
                        0: 3
                    }, 1), 3 !== t[1]
                }),
                d = v && i.NATIVE_ARRAY_BUFFER_VIEWS && a(function() {
                    var t = new Int8Array(2);
                    return t.set(1), t.set("2", 1), 0 !== t[0] || 2 !== t[1]
                });
            p("set", function(t) {
                h(this);
                var r = f(arguments.length > 1 ? arguments[1] : void 0, 1),
                    n = c(t);
                if (v) return o(y, this, n, r);
                var e = this.length,
                    i = u(n),
                    a = 0;
                if (i + r > e) throw RangeError("Wrong length");
                for (; a < i;) this[r + a] = n[a++]
            }, !v || d)