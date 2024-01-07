            r("860677"), r("70102");
            var i, n, o = r("912065").Buffer,
                a = r("463316"),
                s = r("408475"),
                f = r("58492"),
                h = r("127368"),
                c = r.g.crypto && r.g.crypto.subtle,
                u = {
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
                d = [];

            function l() {
                return n ? n : n = r.g.process && r.g.process.nextTick ? r.g.process.nextTick : r.g.queueMicrotask ? r.g.queueMicrotask : r.g.setImmediate ? r.g.setImmediate : r.g.setTimeout
            }

            function p(t, e, r, i, n) {
                return c.importKey("raw", t, {
                    name: "PBKDF2"
                }, !1, ["deriveBits"]).then(function(t) {
                    return c.deriveBits({
                        name: "PBKDF2",
                        salt: e,
                        iterations: r,
                        hash: {
                            name: n
                        }
                    }, t, i << 3)
                }).then(function(t) {
                    return o.from(t)
                })
            }
            t.exports = function(t, e, n, b, m, g) {
                "function" == typeof m && (g = m, m = void 0);
                var y = u[(m = m || "sha1").toLowerCase()];
                if (!y || "function" != typeof r.g.Promise) {
                    l()(function() {
                        var r;
                        try {
                            r = f(t, e, n, b, m)
                        } catch (t) {
                            return g(t)
                        }
                        g(null, r)
                    });
                    return
                }
                if (a(n, b), t = h(t, s, "Password"), e = h(e, s, "Salt"), "function" != typeof g) throw Error("No callback provided to pbkdf2");
                ! function(t, e) {
                    t.then(function(t) {
                        l()(function() {
                            e(null, t)
                        })
                    }, function(t) {
                        l()(function() {
                            e(t)
                        })
                    })
                }((function(t) {
                    if (r.g.process && !r.g.process.browser || !c || !c.importKey || !c.deriveBits) return Promise.resolve(!1);
                    if (void 0 !== d[t]) return d[t];
                    var e = p(i = i || o.alloc(8), i, 10, 128, t).then(function() {
                        return !0
                    }).catch(function() {
                        return !1
                    });
                    return d[t] = e, e
                })(y).then(function(r) {
                    return r ? p(t, e, n, b, y) : f(t, e, n, b, m)
                }), g)
            }