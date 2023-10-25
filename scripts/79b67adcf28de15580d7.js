(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["25285"], {
        225629: function(n, e, t) {
            "use strict";
            t.a(n, async function(n, r) {
                try {
                    t.r(e);
                    var i = t("795924"),
                        u = t("738113"),
                        a = n([i, u]);
                    [i, u] = a.then ? (await a)() : a, t.es(u, e), r()
                } catch (n) {
                    r(n)
                }
            })
        },
        738113: function(n, e, t) {
            "use strict";
            t.a(n, async function(r, i) {
                try {
                    t.r(e), t.d(e, {
                        crop_gif: function() {
                            return _
                        },
                        __wbindgen_string_new: function() {
                            return f
                        },
                        __wbindgen_rethrow: function() {
                            return d
                        }
                    });
                    var u = t("795924");
                    n = t.hmd(n);
                    var a = r([u]);
                    [u] = a.then ? (await a)() : a;
                    let l = "undefined" == typeof TextDecoder ? (0, n.require)("util").TextDecoder : TextDecoder,
                        s = new l("utf-8", {
                            ignoreBOM: !0,
                            fatal: !0
                        });
                    s.decode();
                    let w = null;

                    function c() {
                        return (null === w || w.buffer !== u.memory.buffer) && (w = new Uint8Array(u.memory.buffer)), w
                    }
                    let h = Array(32).fill(void 0);
                    h.push(void 0, null, !0, !1);
                    let b = h.length,
                        g = 0,
                        y = null;

                    function o() {
                        return (null === y || y.buffer !== u.memory.buffer) && (y = new Int32Array(u.memory.buffer)), y
                    }

                    function _(n, e, t, r, i) {
                        try {
                            let h = u.__wbindgen_add_to_stack_pointer(-16);
                            var a, _, f = function(n, e) {
                                    let t = e(1 * n.length);
                                    return c().set(n, t / 1), g = n.length, t
                                }(n, u.__wbindgen_malloc),
                                d = g;
                            u.crop_gif(h, f, d, e, t, r, i);
                            var l = o()[h / 4 + 0],
                                s = o()[h / 4 + 1];
                            var w = (a = l, _ = s, c().subarray(a / 1, a / 1 + _)).slice();
                            return u.__wbindgen_free(l, 1 * s), w
                        } finally {
                            u.__wbindgen_add_to_stack_pointer(16)
                        }
                    }

                    function f(n, e) {
                        var t, r, i = (t = n, r = e, s.decode(c().subarray(t, t + r)));
                        return function(n) {
                            b === h.length && h.push(h.length + 1);
                            let e = b;
                            return b = h[e], h[e] = n, e
                        }(i)
                    }

                    function d(n) {
                        throw function(n) {
                            var e;
                            let t = h[n];
                            return (e = n) < 36 || (h[e] = b, b = e), t
                        }(n)
                    }
                    i()
                } catch (n) {
                    i(n)
                }
            })
        },
        795924: function(n, e, t) {
            "use strict";
            t.a(n, async function(r, i) {
                try {
                    var u = t("738113"),
                        a = r([u]),
                        [u] = a.then ? (await a)() : a;
                    await t.v(e, n.id, "6c50d545de671668.module.wasm", {
                        "./index_bg.js": {
                            __wbindgen_string_new: u.__wbindgen_string_new,
                            __wbindgen_rethrow: u.__wbindgen_rethrow
                        }
                    }), i()
                } catch (n) {
                    i(n)
                }
            }, 1)
        }
    }
]);