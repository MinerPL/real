            "use strict";
            var r = s("390493");

            function i() {
                throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
            s("70102"), s("311790"), s("477657"), s("811875"), s("90301"), s("652153"), s("28797"), s("817884"), s("597349"), s("667536"), s("690341");
            var n = s("912065"),
                c = s("664813"),
                o = n.Buffer,
                f = n.kMaxLength,
                u = s.g.crypto || s.g.msCrypto,
                a = 4294967295;

            function d(t, e) {
                if ("number" != typeof t || t != t) throw TypeError("offset must be a number");
                if (t > a || t < 0) throw TypeError("offset must be a uint32");
                if (t > f || t > e) throw RangeError("offset out of range")
            }

            function p(t, e, s) {
                if ("number" != typeof t || t != t) throw TypeError("size must be a number");
                if (t > a || t < 0) throw TypeError("size must be a uint32");
                if (t + e > s || t > f) throw RangeError("buffer too small")
            }
            u && u.getRandomValues || !r.browser ? (e.randomFill = function(t, e, r, i) {
                if (!o.isBuffer(t) && !(t instanceof s.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                if ("function" == typeof e) i = e, e = 0, r = t.length;
                else if ("function" == typeof r) i = r, r = t.length - e;
                else if ("function" != typeof i) throw TypeError('"cb" argument must be a function');
                return d(e, t.length), p(r, e, t.length), b(t, e, r, i)
            }, e.randomFillSync = function(t, e, r) {
                if (void 0 === e && (e = 0), !o.isBuffer(t) && !(t instanceof s.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                return d(e, t.length), void 0 === r && (r = t.length - e), p(r, e, t.length), b(t, e, r)
            }) : (e.randomFill = i, e.randomFillSync = i);

            function b(t, e, s, i) {
                if (r.browser) {
                    var n = t.buffer,
                        o = new Uint8Array(n, e, s);
                    if (u.getRandomValues(o), i) {
                        r.nextTick(function() {
                            i(null, t)
                        });
                        return
                    }
                    return t
                }
                if (i) {
                    c(s, function(s, r) {
                        if (s) return i(s);
                        r.copy(t, e), i(null, t)
                    });
                    return
                }
                return c(s).copy(t, e), t
            }