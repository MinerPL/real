"use strict";
var n = i("145661"),
  r = i("868822"),
  a = i("64980"),
  s = i("78117"),
  o = i("664144"),
  l = i("418855"),
  u = i("125359"),
  c = i("551544"),
  h = i("969708"),
  f = i("113806"),
  d = i("998270"),
  m = i("590455"),
  v = i("474172"),
  p = i("47361"),
  g = i("87078"),
  x = i("622279"),
  I = i("174669")("replace"),
  w = Math.max,
  y = Math.min,
  b = a([].concat),
  A = a([].push),
  F = a("".indexOf),
  k = a("".slice),
  E = "$0" === "a".replace(/./, "$0"),
  C = !!/./ [I] && "" === /./ [I]("a", "$0");
s("replace", function(t, e, i) {
  var a = C ? "$" : "$0";
  return [function(t, i) {
    var n = m(this),
      a = c(t) ? void 0 : p(t, I);
    return a ? r(a, t, n, i) : r(e, d(n), t, i)
  }, function(t, r) {
    var s = l(this),
      o = d(t);
    if ("string" == typeof r && -1 === F(r, a) && -1 === F(r, "$<")) {
      var c = i(e, s, o, r);
      if (c.done) return c.value
    }
    var m = u(r);
    !m && (r = d(r));
    var p = s.global;
    p && (q = s.unicode, s.lastIndex = 0);
    for (var I = []; null !== (R = x(s, o));) {
      ;
      if (A(I, R), !p) break;
      "" === d(R[0]) && (s.lastIndex = v(o, f(s.lastIndex), q))
    }
    for (var E = "", C = 0, _ = 0; _ < I.length; _++) {
      for (var T, q, R, O, $ = d((R = I[_])[0]), S = w(y(h(R.index), o.length), 0), D = [], M = 1; M < R.length; M++) {
        ;
        A(D, void 0 === (T = R[M]) ? T : String(T))
      }
      var P = R.groups;
      if (m) {
        var W = b([$], D, S, o);
        void 0 !== P && A(W, P), O = d(n(r, void 0, W))
      } else O = g($, o, S, D, P, r);
      S >= C && (E += k(o, C, S) + O, C = S + $.length)
    }
    return E + k(o, C)
  }]
}, !!o(function() {
  var t = /./;
  return t.exec = function() {
    var t = [];
    return t.groups = {
      a: "7"
    }, t
  }, "7" !== "".replace(t, "$<a>")
}) || !E || C)