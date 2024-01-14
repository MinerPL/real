"use strict";
var r, i, n, c = s("112774");

function o(t) {
  for (var e = t.length; --e >= 0;) t[e] = 0
}
var f = 286,
  u = 2 * f + 1,
  a = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0],
  d = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13],
  p = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7],
  b = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15],
  h = Array((f + 2) * 2);
o(h);
var l = Array(60);
o(l);
var g = Array(512);
o(g);
var v = Array(256);
o(v);
var x = Array(29);
o(x);
var m = Array(30);

function y(t, e, s, r, i) {
  this.static_tree = t, this.extra_bits = e, this.extra_base = s, this.elems = r, this.max_length = i, this.has_stree = t && t.length
}

function _(t, e) {
  this.dyn_tree = t, this.max_code = 0, this.stat_desc = e
}

function w(t) {
  return t < 256 ? g[t] : g[256 + (t >>> 7)]
}

function M(t, e) {
  t.pending_buf[t.pending++] = 255 & e, t.pending_buf[t.pending++] = e >>> 8 & 255
}

function S(t, e, s) {
  t.bi_valid > 16 - s ? (t.bi_buf |= e << t.bi_valid & 65535, M(t, t.bi_buf), t.bi_buf = e >> 16 - t.bi_valid, t.bi_valid += s - 16) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += s)
}

function k(t, e, s) {
  S(t, s[2 * e], s[2 * e + 1])
}

function E(t, e) {
  var s = 0;
  do s |= 1 & t, t >>>= 1, s <<= 1; while (--e > 0);
  return s >>> 1
}
o(m);

function A(t, e, s) {
  var r, i, n = Array(16),
    c = 0;
  for (r = 1; r <= 15; r++) n[r] = c = c + s[r - 1] << 1;
  for (i = 0; i <= e; i++) {
    var o = t[2 * i + 1];
    0 !== o && (t[2 * i] = E(n[o]++, o))
  }
}

function B(t) {
  var e;
  for (e = 0; e < f; e++) t.dyn_ltree[2 * e] = 0;
  for (e = 0; e < 30; e++) t.dyn_dtree[2 * e] = 0;
  for (e = 0; e < 19; e++) t.bl_tree[2 * e] = 0;
  t.dyn_ltree[512] = 1, t.opt_len = t.static_len = 0, t.last_lit = t.matches = 0
}

function I(t) {
  t.bi_valid > 8 ? M(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0
}

function R(t, e, s, r) {
  var i = 2 * e,
    n = 2 * s;
  return t[i] < t[n] || t[i] === t[n] && r[e] <= r[s]
}

function j(t, e, s) {
  for (var r = t.heap[s], i = s << 1; i <= t.heap_len && (i < t.heap_len && R(e, t.heap[i + 1], t.heap[i], t.depth) && i++, !R(e, r, t.heap[i], t.depth));) {
    ;
    t.heap[s] = t.heap[i], s = i, i <<= 1
  }
  t.heap[s] = r
}

function C(t, e, s) {
  var r, i, n, c, o = 0;
  if (0 !== t.last_lit)
    do r = t.pending_buf[t.d_buf + 2 * o] << 8 | t.pending_buf[t.d_buf + 2 * o + 1], i = t.pending_buf[t.l_buf + o], o++, 0 === r ? k(t, i, e) : (k(t, (n = v[i]) + 256 + 1, e), 0 !== (c = a[n]) && S(t, i -= x[n], c), k(t, n = w(--r), s), 0 !== (c = d[n]) && S(t, r -= m[n], c)); while (o < t.last_lit);
  k(t, 256, e)
}

function O(t, e) {
  var s, r, i, n = e.dyn_tree,
    c = e.stat_desc.static_tree,
    o = e.stat_desc.has_stree,
    f = e.stat_desc.elems,
    a = -1;
  for (s = 0, t.heap_len = 0, t.heap_max = u; s < f; s++) 0 !== n[2 * s] ? (t.heap[++t.heap_len] = a = s, t.depth[s] = 0) : n[2 * s + 1] = 0;
  for (; t.heap_len < 2;) n[2 * (i = t.heap[++t.heap_len] = a < 2 ? ++a : 0)] = 1, t.depth[i] = 0, t.opt_len--, o && (t.static_len -= c[2 * i + 1]);
  for (e.max_code = a, s = t.heap_len >> 1; s >= 1; s--) j(t, n, s);
  i = f;
  do s = t.heap[1], t.heap[1] = t.heap[t.heap_len--], j(t, n, 1), r = t.heap[1], t.heap[--t.heap_max] = s, t.heap[--t.heap_max] = r, n[2 * i] = n[2 * s] + n[2 * r], t.depth[i] = (t.depth[s] >= t.depth[r] ? t.depth[s] : t.depth[r]) + 1, n[2 * s + 1] = n[2 * r + 1] = i, t.heap[1] = i++, j(t, n, 1); while (t.heap_len >= 2);
  t.heap[--t.heap_max] = t.heap[1], ! function(t, e) {
    var s, r, i, n, c, o, f = e.dyn_tree,
      a = e.max_code,
      d = e.stat_desc.static_tree,
      p = e.stat_desc.has_stree,
      b = e.stat_desc.extra_bits,
      h = e.stat_desc.extra_base,
      l = e.stat_desc.max_length,
      g = 0;
    for (n = 0; n <= 15; n++) t.bl_count[n] = 0;
    for (f[2 * t.heap[t.heap_max] + 1] = 0, s = t.heap_max + 1; s < u; s++)(n = f[2 * f[2 * (r = t.heap[s]) + 1] + 1] + 1) > l && (n = l, g++), f[2 * r + 1] = n, !(r > a) && (t.bl_count[n]++, c = 0, r >= h && (c = b[r - h]), o = f[2 * r], t.opt_len += o * (n + c), p && (t.static_len += o * (d[2 * r + 1] + c)));
    if (0 !== g) {
      do {
        for (n = l - 1; 0 === t.bl_count[n];) n--;
        t.bl_count[n]--, t.bl_count[n + 1] += 2, t.bl_count[l]--, g -= 2
      } while (g > 0);
      for (n = l; 0 !== n; n--)
        for (r = t.bl_count[n]; 0 !== r;) {
          if (!((i = t.heap[--s]) > a)) f[2 * i + 1] !== n && (t.opt_len += (n - f[2 * i + 1]) * f[2 * i], f[2 * i + 1] = n), r--
        }
    }
  }(t, e), A(n, a, t.bl_count)
}

function P(t, e, s) {
  var r, i, n = -1,
    c = e[1],
    o = 0,
    f = 7,
    u = 4;
  for (0 === c && (f = 138, u = 3), e[(s + 1) * 2 + 1] = 65535, r = 0; r <= s; r++) {
    if (i = c, c = e[(r + 1) * 2 + 1], !(++o < f) || i !== c) {
      o < u ? t.bl_tree[2 * i] += o : 0 !== i ? (i !== n && t.bl_tree[2 * i]++, t.bl_tree[32]++) : o <= 10 ? t.bl_tree[34]++ : t.bl_tree[36]++;
      o = 0, n = i, 0 === c ? (f = 138, u = 3) : i === c ? (f = 6, u = 3) : (f = 7, u = 4)
    }
  }
}

function T(t, e, s) {
  var r, i, n = -1,
    c = e[1],
    o = 0,
    f = 7,
    u = 4;
  for (0 === c && (f = 138, u = 3), r = 0; r <= s; r++) {
    if (i = c, c = e[(r + 1) * 2 + 1], !(++o < f) || i !== c) {
      if (o < u)
        do k(t, i, t.bl_tree); while (0 != --o);
      else 0 !== i ? (i !== n && (k(t, i, t.bl_tree), o--), k(t, 16, t.bl_tree), S(t, o - 3, 2)) : o <= 10 ? (k(t, 17, t.bl_tree), S(t, o - 3, 3)) : (k(t, 18, t.bl_tree), S(t, o - 11, 7));
      o = 0, n = i, 0 === c ? (f = 138, u = 3) : i === c ? (f = 6, u = 3) : (f = 7, u = 4)
    }
  }
}
var D = !1;

function z(t, e, s, r) {
  var i, n, o, f;
  S(t, 0 + (r ? 1 : 0), 3), i = t, n = e, o = s, f = !0, I(i), f && (M(i, o), M(i, ~o)), c.arraySet(i.pending_buf, i.window, n, o, i.pending), i.pending += o
}
e._tr_init = function(t) {
  !D && (! function() {
    var t, e, s, c, o, u = Array(16);
    for (c = 0, s = 0; c < 28; c++)
      for (t = 0, x[c] = s; t < 1 << a[c]; t++) v[s++] = c;
    for (v[s - 1] = c, o = 0, c = 0; c < 16; c++)
      for (t = 0, m[c] = o; t < 1 << d[c]; t++) g[o++] = c;
    for (o >>= 7; c < 30; c++)
      for (t = 0, m[c] = o << 7; t < 1 << d[c] - 7; t++) g[256 + o++] = c;
    for (e = 0; e <= 15; e++) u[e] = 0;
    for (t = 0; t <= 143;) h[2 * t + 1] = 8, t++, u[8]++;
    for (; t <= 255;) h[2 * t + 1] = 9, t++, u[9]++;
    for (; t <= 279;) h[2 * t + 1] = 7, t++, u[7]++;
    for (; t <= 287;) h[2 * t + 1] = 8, t++, u[8]++;
    for (A(h, f + 1, u), t = 0; t < 30; t++) l[2 * t + 1] = 5, l[2 * t] = E(t, 5);
    r = new y(h, a, 257, f, 15), i = new y(l, d, 0, 30, 15), n = new y([], p, 0, 19, 7)
  }(), D = !0), t.l_desc = new _(t.dyn_ltree, r), t.d_desc = new _(t.dyn_dtree, i), t.bl_desc = new _(t.bl_tree, n), t.bi_buf = 0, t.bi_valid = 0, B(t)
}, e._tr_stored_block = z, e._tr_flush_block = function(t, e, s, r) {
  var i, n, c = 0;
  t.level > 0 ? (2 === t.strm.data_type && (t.strm.data_type = function(t) {
    var e, s = 4093624447;
    for (e = 0; e <= 31; e++, s >>>= 1)
      if (1 & s && 0 !== t.dyn_ltree[2 * e]) return 0;
    if (0 !== t.dyn_ltree[18] || 0 !== t.dyn_ltree[20] || 0 !== t.dyn_ltree[26]) return 1;
    for (e = 32; e < 256; e++)
      if (0 !== t.dyn_ltree[2 * e]) return 1;
    return 0
  }(t)), O(t, t.l_desc), O(t, t.d_desc), c = function(t) {
    var e;
    for (P(t, t.dyn_ltree, t.l_desc.max_code), P(t, t.dyn_dtree, t.d_desc.max_code), O(t, t.bl_desc), e = 18; e >= 3 && 0 === t.bl_tree[2 * b[e] + 1]; e--);
    return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e
  }(t), i = t.opt_len + 3 + 7 >>> 3, (n = t.static_len + 3 + 7 >>> 3) <= i && (i = n)) : i = n = s + 5, s + 4 <= i && -1 !== e ? z(t, e, s, r) : 4 === t.strategy || n === i ? (S(t, 2 + (r ? 1 : 0), 3), C(t, h, l)) : (S(t, 4 + (r ? 1 : 0), 3), ! function(t, e, s, r) {
    var i;
    for (S(t, e - 257, 5), S(t, s - 1, 5), S(t, r - 4, 4), i = 0; i < r; i++) S(t, t.bl_tree[2 * b[i] + 1], 3);
    T(t, t.dyn_ltree, e - 1), T(t, t.dyn_dtree, s - 1)
  }(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, c + 1), C(t, t.dyn_ltree, t.dyn_dtree)), B(t), r && I(t)
}, e._tr_tally = function(t, e, s) {
  return t.pending_buf[t.d_buf + 2 * t.last_lit] = e >>> 8 & 255, t.pending_buf[t.d_buf + 2 * t.last_lit + 1] = 255 & e, t.pending_buf[t.l_buf + t.last_lit] = 255 & s, t.last_lit++, 0 === e ? t.dyn_ltree[2 * s]++ : (t.matches++, e--, t.dyn_ltree[(v[s] + 256 + 1) * 2]++, t.dyn_dtree[2 * w(e)]++), t.last_lit === t.lit_bufsize - 1
}, e._tr_align = function(t) {
  var e;
  S(t, 2, 3), k(t, 256, h), 16 === (e = t).bi_valid ? (M(e, e.bi_buf), e.bi_buf = 0, e.bi_valid = 0) : e.bi_valid >= 8 && (e.pending_buf[e.pending++] = 255 & e.bi_buf, e.bi_buf >>= 8, e.bi_valid -= 8)
}