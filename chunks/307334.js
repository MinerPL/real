            "use strict";
            var i = r("390493");

            function n() {
                throw Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
            }
            r("70102"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341");
            var a = r("912065"),
                o = r("664813"),
                s = a.Buffer,
                f = a.kMaxLength,
                h = r.g.crypto || r.g.msCrypto,
                c = 4294967295;

            function u(t, e) {
                if ("number" != typeof t || t != t) throw TypeError("offset must be a number");
                if (t > c || t < 0) throw TypeError("offset must be a uint32");
                if (t > f || t > e) throw RangeError("offset out of range")
            }

            function d(t, e, r) {
                if ("number" != typeof t || t != t) throw TypeError("size must be a number");
                if (t > c || t < 0) throw TypeError("size must be a uint32");
                if (t + e > r || t > f) throw RangeError("buffer too small")
            }
            h && h.getRandomValues || !i.browser ? (e.randomFill = function(t, e, i, n) {
                if (!s.isBuffer(t) && !(t instanceof r.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                if ("function" == typeof e) n = e, e = 0, i = t.length;
                else if ("function" == typeof i) n = i, i = t.length - e;
                else if ("function" != typeof n) throw TypeError('"cb" argument must be a function');
                return u(e, t.length), d(i, e, t.length), l(t, e, i, n)
            }, e.randomFillSync = function(t, e, i) {
                if (void 0 === e && (e = 0), !s.isBuffer(t) && !(t instanceof r.g.Uint8Array)) throw TypeError('"buf" argument must be a Buffer or Uint8Array');
                return u(e, t.length), void 0 === i && (i = t.length - e), d(i, e, t.length), l(t, e, i)
            }) : (e.randomFill = n, e.randomFillSync = n);

            function l(t, e, r, n) {
                if (i.browser) {
                    var a = t.buffer,
                        s = new Uint8Array(a, e, r);
                    if (h.getRandomValues(s), n) {
                        i.nextTick(function() {
                            n(null, t)
                        });
                        return
                    }
                    return t
                }
                if (n) {
                    o(r, function(r, i) {
                        if (r) return n(r);
                        i.copy(t, e), n(null, t)
                    });
                    return
                }
                return o(r).copy(t, e), t
            }