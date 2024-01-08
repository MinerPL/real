            "use strict";
            var i, n, a, o = r("112774");

            function s(t) {
                for (var e = t.length; --e >= 0;) t[e] = 0
            }
            var f = 286,
                h = 2 * f + 1,
                c = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
                u = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
                d = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
                l = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
                p = Array((f + 2) * 2);
            s(p);
            var b = Array(60);
            s(b);
            var m = Array(512);
            s(m);
            var g = Array(256);
            s(g);
            var v = Array(29);
            s(v);
            var y = Array(30);

            function _(t, e, r, i, n) {
                this.static_tree = t, this.extra_bits = e, this.extra_base = r, this.elems = i, this.max_length = n, this.has_stree = t && t.length
            }

            function w(t, e) {
                this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
            }

            function M(t) {
                return t < 256 ? m[t] : m[256 + (t >>> 7)]
            }

            function S(t, e) {
                t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
            }

            function k(t, e, r) {
                t.bi_valid > 16 - r ? (t.bi_buf |= e << t.bi_valid & 65535, S(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += r - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += r)
            }

            function E(t, e, r) {
                k(t, r[2 * e], r[2 * e + 1])
            }

            function A(t, e) {
                var r = 0;
                do r |= 1 & t, t >>>= 1, r <<= 1; while (--e > 0);
                return r >>> 1
            }
            s(y);

            function x(t, e, r) {
                var i, n, a = Array(16),
                    o = 0;
                for (i = 1; i <= 15; i++) a[i] = o = o + r[i - 1] << 1;
                for (n = 0; n <= e; n++) {
                    var s = t[2 * n + 1];
                    0 !== s && (t[2 * n] = A(a[s]++, s))
                }
            }

            function B(t) {
                var e;
                for (e = 0; e < f; e++) t.dyn_ltree[2 * e] = 0;
                for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
                for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
                t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
            }

            function R(t) {
                t.bi_valid > 8 ? S(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
            }

            function I(t, e, r, i) {
                var n = 2 * e,
                    a = 2 * r;
                return t[n] < t[a] || t[n] === t[a] && i[e] <= i[r]
            }

            function C(t, e, r) {
                for (var i = t.heap[r], n = r << 1; n <= t.heap_len && (n < t.heap_len && I(e, t.heap[n + 1], t.heap[n], t.depth) && n++, !I(e, i, t.heap[n], t.depth));) {
                    ;
                    t.heap[r] = t.heap[n], r = n, n <<= 1
                }
                t.heap[r] = i
            }

            function j(t, e, r) {
                var i, n, a, o, s = 0;
                if (0 !== t.last_lit)
                    do i = t.pending_buf[t.d_buf + 2 * s] << 8 | t.pending_buf[t.d_buf + 2 * s + 1], n = t.pending_buf[t.l_buf + s], s++, 0 === i ? E(t, n, e) : (E(t, (a = g[n]) + 256 + 1, e), 0 !== (o = c[a]) && k(t, n -= v[a], o), E(t, a = M(--i), r), 0 !== (o = u[a]) && k(t, i -= y[a], o)); while (s < t.last_lit);
                E(t, 256, e)
            }

            function T(t, e) {
                var r, i, n, a = e.dyn_tree,
                    o = e.stat_desc.static_tree,
                    s = e.stat_desc.has_stree,
                    f = e.stat_desc.elems,
                    c = -1;
                for (r = 0, t.heap_len = 0, t.heap_max = h; r < f; r++) 0 !== a[2 * r] ? (t.heap[++t.heap_len] = c = r, t.depth[r] = 0) : a[2 * r + 1] = 0;
                for (; t.heap_len < 2;) a[2 * (n = t.heap[++t.heap_len] = c < 2 ? ++c : 0)] = 1, t.depth[n] = 0, t.opt_len--, s && (t.static_len -= o[2 * n + 1]);
                for (e.max_code = c, r = t.heap_len >> 1; r >= 1; r--) C(t, a, r);
                n = f;
                do r = t.heap[1], t.heap[1] = t.heap[t.heap_len--], C(t, a, 1), i = t.heap[1], t.heap[--t.heap_max] = r, t.heap[--t.heap_max] = i, a[2 * n] = a[2 * r] + a[2 * i], t.depth[n] = (t.depth[r] >= t.depth[i] ? t.depth[r] : t.depth[i]) + 1, a[2 * r + 1] = a[2 * i + 1] = n, t.heap[1] = n++, C(t, a, 1); while (t.heap_len >= 2);
                t.heap[--t.heap_max] = t.heap[1], ! function(t, e) {
                    var r, i, n, a, o, s, f = e.dyn_tree,
                        c = e.max_code,
                        u = e.stat_desc.static_tree,
                        d = e.stat_desc.has_stree,
                        l = e.stat_desc.extra_bits,
                        p = e.stat_desc.extra_base,
                        b = e.stat_desc.max_length,
                        m = 0;
                    for (a = 0; a <= 15; a++) t.bl_count[a] = 0;
                    for (f[2 * t.heap[t.heap_max] + 1] = 0, r = t.heap_max + 1; r < h; r++)(a = f[2 * f[2 * (i = t.heap[r]) + 1] + 1] + 1) > b && (a = b, m++), f[2 * i + 1] = a, !(i > c) && (t.bl_count[a]++, o = 0, i >= p && (o = l[i - p]), s = f[2 * i], t.opt_len += s * (a + o), d && (t.static_len += s * (u[2 * i + 1] + o)));
                    if (0 !== m) {
                        do {
                            for (a = b - 1; 0 === t.bl_count[a];) a--;
                            t.bl_count[a]--, t.bl_count[a + 1] += 2, t.bl_count[b]--, m -= 2
                        } while (m > 0);
                        for (a = b; 0 !== a; a--)
                            for (i = t.bl_count[a]; 0 !== i;) {
                                if (!((n = t.heap[--r]) > c)) f[2 * n + 1] !== a && (t.opt_len += (a - f[2 * n + 1]) * f[2 * n], f[2 * n + 1] = a), i--
                            }
                    }
                }(t, e), x(a, c, t.bl_count)
            }

            function P(t, e, r) {
                var i, n, a = -1,
                    o = e[1],
                    s = 0,
                    f = 7,
                    h = 4;
                for (0 === o && (f = 138, h = 3), e[(r + 1) * 2 + 1] = 65535, i = 0; i <= r; i++) {
                    if (n = o, o = e[(i + 1) * 2 + 1], !(++s < f) || n !== o) {
                        s < h ? t.bl_tree[2 * n] += s : 0 !== n ? (n !== a && t.bl_tree[2 * n]++, t.bl_tree[32]++) : s <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++;
                        s = 0, a = n, 0 === o ? (f = 138, h = 3) : n === o ? (f = 6, h = 3) : (f = 7, h = 4)
                    }
                }
            }

            function z(t, e, r) {
                var i, n, a = -1,
                    o = e[1],
                    s = 0,
                    f = 7,
                    h = 4;
                for (0 === o && (f = 138, h = 3), i = 0; i <= r; i++) {
                    if (n = o, o = e[(i + 1) * 2 + 1], !(++s < f) || n !== o) {
                        if (s < h)
                            do E(t, n, t.bl_tree); while (0 != --s);
                        else 0 !== n ? (n !== a && (E(t, n, t.bl_tree), s--), E(t, 16, t.bl_tree), k(t, s - 3, 2)) : s <= 10 ? (E(t, 17, t.bl_tree), k(t, s - 3, 3)) : (E(t, 18, t.bl_tree), k(t, s - 11, 7));
                        s = 0, a = n, 0 === o ? (f = 138, h = 3) : n === o ? (f = 6, h = 3) : (f = 7, h = 4)
                    }
                }
            }
            var O = !1;

            function L(t, e, r, i) {
                var n, a, s, f;
                k(t, 0 + (i ? 1 : 0), 3), n = t, a = e, s = r, f = !0, R(n), f && (S(n, s), S(n, ~s)), o.arraySet(n.pending_buf, n.window, a, s, n.pending), n.pending += s
            }
            e._tr_init = function(t) {
                !O && (! function() {
                    var t, e, r, o, s, h = Array(16);
                    for (o = 0, r = 0; o < 28; o++)
                        for (t = 0, v[o] = r; t < 1 << c[o]; t++) g[r++] = o;
                    for (g[r - 1] = o, s = 0, o = 0; o < 16; o++)
                        for (t = 0, y[o] = s; t < 1 << u[o]; t++) m[s++] = o;
                    for (s >>= 7; o < 30; o++)
                        for (t = 0, y[o] = s << 7; t < 1 << u[o] - 7; t++) m[256 + s++] = o;
                    for (e = 0; e <= 15; e++) h[e] = 0;
                    for (t = 0; t <= 143;) p[2 * t + 1] = 8, t++, h[8]++;
                    for (; t <= 255;) p[2 * t + 1] = 9, t++, h[9]++;
                    for (; t <= 279;) p[2 * t + 1] = 7, t++, h[7]++;
                    for (; t <= 287;) p[2 * t + 1] = 8, t++, h[8]++;
                    for (x(p, f + 1, h), t = 0; t < 30; t++) b[2 * t + 1] = 5, b[2 * t] = A(t, 5);
                    i = new _(p, c, 257, f, 15), n = new _(b, u, 0, 30, 15), a = new _([], d, 0, 19, 7)
                }(), O = !0), t.l_desc = new w(t.dyn_ltree, i), t.d_desc = new w(t.dyn_dtree, n), t.bl_desc = new w(t.bl_tree, a), t.bi_buf = 0, t.bi_valid = 0, B(t)
            }, e._tr_stored_block = L, e._tr_flush_block = function(t, e, r, i) {
                var n, a, o = 0;
                t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function(t) {
                    var e, r = 4093624447;
                    for (e = 0; e <= 31; e++, r >>>= 1)
                        if (1 & r && 0 !== t.dyn_ltree[2 * e]) return 0;
                    if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
                    for (e = 32; e < 256; e++)
                        if (0 !== t.dyn_ltree[2 * e]) return 1;
                    return 0
                }(t)), T(t, t.l_desc), T(t, t.d_desc), o = function(t) {
                    var e;
                    for (P(t, t.dyn_ltree, t.l_desc.max_code), P(t, t.dyn_dtree, t.d_desc.max_code), T(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * l[e] + 1]; e--);
                    return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
                }(t), n = t.opt_len + 3 + 7 >>> 3, (a = t.static_len + 3 + 7 >>> 3) <= n && (n = a)) : n = a = r + 5, r + 4 <= n && -1 !== e ? L(t, e, r, i) : 4 === t.strategy || a === n ? (k(t, 2 + (i ? 1 : 0), 3), j(t, p, b)) : (k(t, 4 + (i ? 1 : 0), 3), ! function(t, e, r, i) {
                    var n;
                    for (k(t, e - 257, 5), k(t, r - 1, 5), k(t, i - 4, 4), n = 0; n < i; n++) k(t, t.bl_tree[2 * l[n] + 1], 3);
                    z(t, t.dyn_ltree, e - 1), z(t, t.dyn_dtree, r - 1)
                }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, o + 1), j(t, t.dyn_ltree, t.dyn_dtree)), B(t), i && R(t)
            }, e._tr_tally = function(t, e, r) {
                return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & r, t.last_lit++, 0 === e ? t.dyn_ltree[2 * r]++ : (t.matches++, e--, t.dyn_ltree[(g[r] + 256 + 1) * 2]++, t.dyn_dtree[2 * M(e)]++), t.last_lit === t.lit_bufsize - 1
            }, e._tr_align = function(t) {
                var e;
                k(t, 2, 3), E(t, 256, p), 16 === (e = t).bi_valid ? (S(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
            }