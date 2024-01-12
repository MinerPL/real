            s("860677"), s("70102");
            var r, i, n = s("912065").Buffer,
                c = s("463316"),
                o = s("408475"),
                f = s("58492"),
                u = s("127368"),
                a = s.g.crypto && s.g.crypto.subtle,
                d = {
                    sha: "SHA-1",
                    "sha-1": "SHA-1",
                    sha1: "SHA-1",
                    sha256: "SHA-256",
                    "sha-256": "SHA-256",
                    sha384: "SHA-384",
                    "sha-384": "SHA-384",
                    "sha-512": "SHA-512",
                    sha512: "SHA-512"
                },
                p = [];

            function b() {
                return i ? i : i = s.g.process && s.g.process.nextTick ? s.g.process.nextTick : s.g.queueMicrotask ? s.g.queueMicrotask : s.g.setImmediate ? s.g.setImmediate : s.g.setTimeout
            }

            function h(t, e, s, r, i) {
                return a.importKey("raw", t, {
                    name: "PBKDF2"
                }, !1, ["deriveBits"]).then(function(t) {
                    return a.deriveBits({
                        name: "PBKDF2",
                        salt: e,
                        iterations: s,
                        hash: {
                            name: i
                        }
                    }, t, r << 3)
                }).then(function(t) {
                    return n.from(t)
                })
            }
            t.exports = function(t, e, i, l, g, v) {
                "function" == typeof g && (v = g, g = void 0);
                var x = d[(g = g || "sha1").toLowerCase()];
                if (!x || "function" != typeof s.g.Promise) {
                    b()(function() {
                        var s;
                        try {
                            s = f(t, e, i, l, g)
                        } catch (t) {
                            return v(t)
                        }
                        v(null, s)
                    });
                    return
                }
                if (c(i, l), t = u(t, o, "Password"), e = u(e, o, "Salt"), "function" != typeof v) throw Error("No callback provided to pbkdf2");
                ! function(t, e) {
                    t.then(function(t) {
                        b()(function() {
                            e(null, t)
                        })
                    }, function(t) {
                        b()(function() {
                            e(t)
                        })
                    })
                }((function(t) {
                    if (s.g.process && !s.g.process.browser || !a || !a.importKey || !a.deriveBits) return Promise.resolve(!1);
                    if (void 0 !== p[t]) return p[t];
                    var e = h(r = r || n.alloc(8), r, 10, 128, t).then(function() {
                        return !0
                    }).catch(function() {
                        return !1
                    });
                    return p[t] = e, e
                })(x).then(function(s) {
                    return s ? h(t, e, i, l, x) : f(t, e, i, l, g)
                }), v)
            }