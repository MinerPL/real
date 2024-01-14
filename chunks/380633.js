"use strict";
n("414889");
var e, i = n("859514"),
  o = n("814026"),
  u = n("768897"),
  a = n("503486"),
  f = n("886639"),
  c = n("64980"),
  s = n("484784"),
  l = n("18563"),
  h = n("88052"),
  p = n("59393"),
  v = n("862799"),
  g = n("753580"),
  d = n("355540"),
  y = n("696397").codeAt,
  b = n("682714"),
  m = n("998270"),
  _ = n("89157"),
  w = n("79807"),
  k = n("753062"),
  E = n("515011"),
  R = E.set,
  x = E.getterFor("URL"),
  URLSearchParams = k.URLSearchParams,
  A = k.getState,
  S = a.URL,
  TypeError = a.TypeError,
  M = a.parseInt,
  O = Math.floor,
  I = Math.pow,
  N = c("".charAt),
  L = c(/./.exec),
  j = c([].join),
  P = c(1..toString),
  U = c([].pop),
  q = c([].push),
  B = c("".replace),
  C = c([].shift),
  T = c("".split),
  z = c("".slice),
  D = c("".toLowerCase),
  F = c([].unshift),
  W = "Invalid scheme",
  $ = "Invalid host",
  H = "Invalid port",
  Z = /[a-z]/i,
  G = /[\d+-.a-z]/i,
  J = /\d/,
  V = /^0x/i,
  Y = /^[0-7]+$/,
  K = /^\d+$/,
  X = /^[\da-f]+$/i,
  Q = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
  tt = /[\0\t\n\r #/:<>?@[\\\]^|]/,
  tr = /^[\u0000-\u0020]+/,
  tn = /(^|[^\u0000-\u0020])[\u0000-\u0020]+$/,
  te = /[\t\n\r]/g,
  ti = function(t) {
    var r, n, e, i, o, u, a, f = T(t, ".");
    if (f.length && "" === f[f.length - 1] && f.length--, (r = f.length) > 4) return t;
    for (e = 0, n = []; e < r; e++) {
      if ("" === (i = f[e])) return t;
      if (o = 10, i.length > 1 && "0" === N(i, 0) && (o = L(V, i) ? 16 : 8, i = z(i, 8 === o ? 1 : 2)), "" === i) u = 0;
      else {
        if (!L(10 === o ? K : 8 === o ? Y : X, i)) return t;
        u = M(i, o)
      }
      q(n, u)
    }
    for (e = 0; e < r; e++)
      if (u = n[e], e === r - 1) {
        if (u >= I(256, 5 - r)) return null
      } else if (u > 255) return null;
    for (e = 0, a = U(n); e < n.length; e++) a += n[e] * I(256, 3 - e);
    return a
  },
  to = function(t) {
    var r, n, e, i, o, u, a, f = [0, 0, 0, 0, 0, 0, 0, 0],
      c = 0,
      s = null,
      l = 0,
      h = function() {
        return N(t, l)
      };
    if (":" === h()) {
      if (":" !== N(t, 1)) return;
      l += 2, s = ++c
    }
    for (; h();) {
      if (8 === c) return;
      if (":" === h()) {
        if (null !== s) return;
        l++, s = ++c;
        continue
      }
      for (r = n = 0; n < 4 && L(X, h());) r = 16 * r + M(h(), 16), l++, n++;
      if ("." === h()) {
        if (0 === n) return;
        if (l -= n, c > 6) return;
        for (e = 0; h();) {
          if (i = null, e > 0) {
            if ("." !== h() || !(e < 4)) return;
            l++
          }
          if (!L(J, h())) return;
          for (; L(J, h());) {
            if (o = M(h(), 10), null === i) i = o;
            else {
              if (0 === i) return;
              i = 10 * i + o
            }
            if (i > 255) return;
            l++
          }
          f[c] = 256 * f[c] + i, (2 == ++e || 4 === e) && c++
        }
        if (4 !== e) return;
        break
      }
      if (":" === h()) {
        if (l++, !h()) return
      } else if (h()) return;
      f[c++] = r
    }
    if (null !== s)
      for (u = c - s, c = 7; 0 !== c && u > 0;) a = f[c], f[c--] = f[s + u - 1], f[s + --u] = a;
    else if (8 !== c) return;
    return f
  },
  tu = function(t) {
    for (var r = null, n = 1, e = null, i = 0, o = 0; o < 8; o++) 0 !== t[o] ? (i > n && (r = e, n = i), e = null, i = 0) : (null === e && (e = o), ++i);
    return i > n && (r = e, n = i), r
  },
  ta = function(t) {
    var r, n, e, i;
    if ("number" == typeof t) {
      for (n = 0, r = []; n < 4; n++) F(r, t % 256), t = O(t / 256);
      return j(r, ".")
    }
    if ("object" == typeof t) {
      for (n = 0, r = "", e = tu(t); n < 8; n++)(!i || 0 !== t[n]) && (i && (i = !1), e === n ? (r += n ? ":" : "::", i = !0) : (r += P(t[n], 16), n < 7 && (r += ":")));
      return "[" + r + "]"
    }
    return t
  },
  tf = {},
  tc = v({}, tf, {
    " ": 1,
    '"': 1,
    "<": 1,
    ">": 1,
    "`": 1
  }),
  ts = v({}, tc, {
    "#": 1,
    "?": 1,
    "{": 1,
    "}": 1
  }),
  tl = v({}, ts, {
    "/": 1,
    ":": 1,
    ";": 1,
    "=": 1,
    "@": 1,
    "[": 1,
    "\\": 1,
    "]": 1,
    "^": 1,
    "|": 1
  }),
  th = function(t, r) {
    var n = y(t, 0);
    return n > 32 && n < 127 && !p(r, t) ? t : encodeURIComponent(t)
  },
  tp = {
    ftp: 21,
    file: null,
    http: 80,
    https: 443,
    ws: 80,
    wss: 443
  },
  tv = function(t, r) {
    var n;
    return 2 === t.length && L(Z, N(t, 0)) && (":" === (n = N(t, 1)) || !r && "|" === n)
  },
  tg = function(t) {
    var r;
    return t.length > 1 && tv(z(t, 0, 2)) && (2 === t.length || "/" === (r = N(t, 2)) || "\\" === r || "?" === r || "#" === r)
  },
  td = {},
  ty = {},
  tb = {},
  tm = {},
  t_ = {},
  tw = {},
  tk = {},
  tE = {},
  tR = {},
  tx = {},
  tA = {},
  tS = {},
  tM = {},
  tO = {},
  tI = {},
  tN = {},
  tL = {},
  tj = {},
  tP = {},
  tU = {},
  tq = {},
  tB = function(t, r, n) {
    var e, i, o, u = m(t);
    if (r) {
      if (i = this.parse(u)) throw TypeError(i);
      this.searchParams = null
    } else {
      if (void 0 !== n && (e = new tB(n, !0)), i = this.parse(u, null, e)) throw TypeError(i);
      (o = A(new URLSearchParams)).bindURL(this), this.searchParams = o
    }
  };
tB.prototype = {
  type: "URL",
  parse: function(t, r, n) {
    var i = r || td,
      o = 0,
      u = "",
      a = !1,
      f = !1,
      c = !1;
    for (t = m(t), !r && (this.scheme = "", this.username = "", this.password = "", this.host = null, this.port = null, this.path = [], this.query = null, this.fragment = null, this.cannotBeABaseURL = !1, t = B(t, tr, ""), t = B(t, tn, "$1")), s = g(t = B(t, te, "")); o <= s.length;) {
      switch (l = s[o], i) {
        case td:
          if (l && L(Z, l)) u += D(l), i = ty;
          else {
            if (r) return W;
            i = tb;
            continue
          }
          break;
        case ty:
          if (l && (L(G, l) || "+" === l || "-" === l || "." === l)) u += D(l);
          else if (":" === l) {
            if (r && (this.isSpecial() !== p(tp, u) || "file" === u && (this.includesCredentials() || null !== this.port) || "file" === this.scheme && !this.host)) return;
            if (this.scheme = u, r) {
              this.isSpecial() && tp[this.scheme] === this.port && (this.port = null);
              return
            }
            u = "", "file" === this.scheme ? i = tO : this.isSpecial() && n && n.scheme === this.scheme ? i = tm : this.isSpecial() ? i = tE : "/" === s[o + 1] ? (i = t_, o++) : (this.cannotBeABaseURL = !0, q(this.path, ""), i = tP)
          } else {
            if (r) return W;
            u = "", i = tb, o = 0;
            continue
          }
          break;
        case tb:
          if (!n || n.cannotBeABaseURL && "#" !== l) return W;
          if (n.cannotBeABaseURL && "#" === l) {
            this.scheme = n.scheme, this.path = d(n.path), this.query = n.query, this.fragment = "", this.cannotBeABaseURL = !0, i = tq;
            break
          }
          i = "file" === n.scheme ? tO : tw;
          continue;
        case tm:
          if ("/" === l && "/" === s[o + 1]) i = tR, o++;
          else {
            i = tw;
            continue
          }
          break;
        case t_:
          if ("/" === l) {
            i = tx;
            break
          }
          i = tj;
          continue;
        case tw:
          if (this.scheme = n.scheme, l === e) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = d(n.path), this.query = n.query;
          else if ("/" === l || "\\" === l && this.isSpecial()) i = tk;
          else if ("?" === l) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = d(n.path), this.query = "", i = tU;
          else if ("#" === l) this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = d(n.path), this.query = n.query, this.fragment = "", i = tq;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, this.path = d(n.path), this.path.length--, i = tj;
            continue
          }
          break;
        case tk:
          if (this.isSpecial() && ("/" === l || "\\" === l)) i = tR;
          else if ("/" === l) i = tx;
          else {
            this.username = n.username, this.password = n.password, this.host = n.host, this.port = n.port, i = tj;
            continue
          }
          break;
        case tE:
          if (i = tR, "/" !== l || "/" !== N(u, o + 1)) continue;
          o++;
          break;
        case tR:
          if ("/" !== l && "\\" !== l) {
            i = tx;
            continue
          }
          break;
        case tx:
          if ("@" === l) {
            a && (u = "%40" + u), a = !0, h = g(u);
            for (var s, l, h, v, y, b, _ = 0; _ < h.length; _++) {
              var w = h[_];
              if (":" === w && !c) {
                c = !0;
                continue
              }
              var k = th(w, tl);
              c ? this.password += k : this.username += k
            }
            u = ""
          } else if (l === e || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) {
            if (a && "" === u) return "Invalid authority";
            o -= g(u).length + 1, u = "", i = tA
          } else u += l;
          break;
        case tA:
        case tS:
          if (r && "file" === this.scheme) {
            i = tN;
            continue
          }
          if (":" !== l || f) {
            if (l === e || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) {
              if (this.isSpecial() && "" === u) return $;
              if (r && "" === u && (this.includesCredentials() || null !== this.port)) return;
              if (v = this.parseHost(u)) return v;
              if (u = "", i = tL, r) return;
              continue
            } else "[" === l ? f = !0 : "]" === l && (f = !1), u += l
          } else {
            if ("" === u) return $;
            if (v = this.parseHost(u)) return v;
            if (u = "", i = tM, r === tS) return
          }
          break;
        case tM:
          if (L(J, l)) u += l;
          else {
            if (!(l === e || "/" === l || "?" === l || "#" === l || "\\" === l && this.isSpecial()) && !r) return H;
            if ("" !== u) {
              var E = M(u, 10);
              if (E > 65535) return H;
              this.port = this.isSpecial() && E === tp[this.scheme] ? null : E, u = ""
            }
            if (r) return;
            i = tL;
            continue
          }
          break;
        case tO:
          if (this.scheme = "file", "/" === l || "\\" === l) i = tI;
          else if (n && "file" === n.scheme) switch (l) {
            case e:
              this.host = n.host, this.path = d(n.path), this.query = n.query;
              break;
            case "?":
              this.host = n.host, this.path = d(n.path), this.query = "", i = tU;
              break;
            case "#":
              this.host = n.host, this.path = d(n.path), this.query = n.query, this.fragment = "", i = tq;
              break;
            default:
              !tg(j(d(s, o), "")) && (this.host = n.host, this.path = d(n.path), this.shortenPath()), i = tj;
              continue
          } else {
            i = tj;
            continue
          }
          break;
        case tI:
          if ("/" === l || "\\" === l) {
            i = tN;
            break
          }
          n && "file" === n.scheme && !tg(j(d(s, o), "")) && (tv(n.path[0], !0) ? q(this.path, n.path[0]) : this.host = n.host), i = tj;
          continue;
        case tN:
          if (l === e || "/" === l || "\\" === l || "?" === l || "#" === l) {
            if (!r && tv(u)) i = tj;
            else if ("" === u) {
              if (this.host = "", r) return;
              i = tL
            } else {
              if (v = this.parseHost(u)) return v;
              if ("localhost" === this.host && (this.host = ""), r) return;
              u = "", i = tL
            }
            continue
          }
          u += l;
          break;
        case tL:
          if (this.isSpecial()) {
            if (i = tj, "/" !== l && "\\" !== l) continue
          } else if (r || "?" !== l) {
            if (r || "#" !== l) {
              if (l !== e && (i = tj, "/" !== l)) continue
            } else this.fragment = "", i = tq
          } else this.query = "", i = tU;
          break;
        case tj:
          if (l === e || "/" === l || "\\" === l && this.isSpecial() || !r && ("?" === l || "#" === l)) {
            ;
            if (".." === (y = D(y = u)) || "%2e." === y || ".%2e" === y || "%2e%2e" === y) this.shortenPath(), "/" !== l && !("\\" === l && this.isSpecial()) && q(this.path, "");
            else {
              ;
              if ("." === (b = u) || "%2e" === D(b)) "/" !== l && !("\\" === l && this.isSpecial()) && q(this.path, "");
              else "file" === this.scheme && !this.path.length && tv(u) && (this.host && (this.host = ""), u = N(u, 0) + ":"), q(this.path, u)
            }
            if (u = "", "file" === this.scheme && (l === e || "?" === l || "#" === l))
              for (; this.path.length > 1 && "" === this.path[0];) C(this.path);
            "?" === l ? (this.query = "", i = tU) : "#" === l && (this.fragment = "", i = tq)
          } else u += th(l, ts);
          break;
        case tP:
          "?" === l ? (this.query = "", i = tU) : "#" === l ? (this.fragment = "", i = tq) : l !== e && (this.path[0] += th(l, tf));
          break;
        case tU:
          r || "#" !== l ? l !== e && ("'" === l && this.isSpecial() ? this.query += "%27" : "#" === l ? this.query += "%23" : this.query += th(l, tf)) : (this.fragment = "", i = tq);
          break;
        case tq:
          l !== e && (this.fragment += th(l, tc))
      }
      o++
    }
  },
  parseHost: function(t) {
    var r, n, e;
    if ("[" === N(t, 0)) {
      if ("]" !== N(t, t.length - 1) || !(r = to(z(t, 1, -1)))) return $;
      this.host = r
    } else if (this.isSpecial()) {
      if (L(Q, t = b(t)) || null === (r = ti(t))) return $;
      this.host = r
    } else {
      if (L(tt, t)) return $;
      for (e = 0, r = "", n = g(t); e < n.length; e++) r += th(n[e], tf);
      this.host = r
    }
  },
  cannotHaveUsernamePasswordPort: function() {
    return !this.host || this.cannotBeABaseURL || "file" === this.scheme
  },
  includesCredentials: function() {
    return "" !== this.username || "" !== this.password
  },
  isSpecial: function() {
    return p(tp, this.scheme)
  },
  shortenPath: function() {
    var t = this.path,
      r = t.length;
    r && ("file" !== this.scheme || 1 !== r || !tv(t[0], !0)) && t.length--
  },
  serialize: function() {
    var t = this.scheme,
      r = this.username,
      n = this.password,
      e = this.host,
      i = this.port,
      o = this.path,
      u = this.query,
      a = this.fragment,
      f = t + ":";
    return null !== e ? (f += "//", this.includesCredentials() && (f += r + (n ? ":" + n : "") + "@"), f += ta(e), null !== i && (f += ":" + i)) : "file" === t && (f += "//"), f += this.cannotBeABaseURL ? o[0] : o.length ? "/" + j(o, "/") : "", null !== u && (f += "?" + u), null !== a && (f += "#" + a), f
  },
  setHref: function(t) {
    var r = this.parse(t);
    if (r) throw TypeError(r);
    this.searchParams.update()
  },
  getOrigin: function() {
    var t = this.scheme,
      r = this.port;
    if ("blob" === t) try {
      return new tC(t.path[0]).origin
    } catch (t) {
      return "null"
    }
    return "file" !== t && this.isSpecial() ? t + "://" + ta(this.host) + (null !== r ? ":" + r : "") : "null"
  },
  getProtocol: function() {
    return this.scheme + ":"
  },
  setProtocol: function(t) {
    this.parse(m(t) + ":", td)
  },
  getUsername: function() {
    return this.username
  },
  setUsername: function(t) {
    var r = g(m(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.username = "";
      for (var n = 0; n < r.length; n++) this.username += th(r[n], tl)
    }
  },
  getPassword: function() {
    return this.password
  },
  setPassword: function(t) {
    var r = g(m(t));
    if (!this.cannotHaveUsernamePasswordPort()) {
      this.password = "";
      for (var n = 0; n < r.length; n++) this.password += th(r[n], tl)
    }
  },
  getHost: function() {
    var t = this.host,
      r = this.port;
    return null === t ? "" : null === r ? ta(t) : ta(t) + ":" + r
  },
  setHost: function(t) {
    !this.cannotBeABaseURL && this.parse(t, tA)
  },
  getHostname: function() {
    var t = this.host;
    return null === t ? "" : ta(t)
  },
  setHostname: function(t) {
    !this.cannotBeABaseURL && this.parse(t, tS)
  },
  getPort: function() {
    var t = this.port;
    return null === t ? "" : m(t)
  },
  setPort: function(t) {
    !this.cannotHaveUsernamePasswordPort() && ("" === (t = m(t)) ? this.port = null : this.parse(t, tM))
  },
  getPathname: function() {
    var t = this.path;
    return this.cannotBeABaseURL ? t[0] : t.length ? "/" + j(t, "/") : ""
  },
  setPathname: function(t) {
    !this.cannotBeABaseURL && (this.path = [], this.parse(t, tL))
  },
  getSearch: function() {
    var t = this.query;
    return t ? "?" + t : ""
  },
  setSearch: function(t) {
    "" === (t = m(t)) ? this.query = null: ("?" === N(t, 0) && (t = z(t, 1)), this.query = "", this.parse(t, tU)), this.searchParams.update()
  },
  getSearchParams: function() {
    return this.searchParams.facade
  },
  getHash: function() {
    var t = this.fragment;
    return t ? "#" + t : ""
  },
  setHash: function(t) {
    if ("" === (t = m(t))) {
      this.fragment = null;
      return
    }
    "#" === N(t, 0) && (t = z(t, 1)), this.fragment = "", this.parse(t, tq)
  },
  update: function() {
    this.query = this.searchParams.serialize() || null
  }
};
var tC = function(t) {
    var r = h(this, tT),
      n = w(arguments.length, 1) > 1 ? arguments[1] : void 0,
      e = R(r, new tB(t, !1, n));
    !o && (r.href = e.serialize(), r.origin = e.getOrigin(), r.protocol = e.getProtocol(), r.username = e.getUsername(), r.password = e.getPassword(), r.host = e.getHost(), r.hostname = e.getHostname(), r.port = e.getPort(), r.pathname = e.getPathname(), r.search = e.getSearch(), r.searchParams = e.getSearchParams(), r.hash = e.getHash())
  },
  tT = tC.prototype,
  tz = function(t, r) {
    return {
      get: function() {
        return x(this)[t]()
      },
      set: r && function(t) {
        return x(this)[r](t)
      },
      configurable: !0,
      enumerable: !0
    }
  };
if (o && (l(tT, "href", tz("serialize", "setHref")), l(tT, "origin", tz("getOrigin")), l(tT, "protocol", tz("getProtocol", "setProtocol")), l(tT, "username", tz("getUsername", "setUsername")), l(tT, "password", tz("getPassword", "setPassword")), l(tT, "host", tz("getHost", "setHost")), l(tT, "hostname", tz("getHostname", "setHostname")), l(tT, "port", tz("getPort", "setPort")), l(tT, "pathname", tz("getPathname", "setPathname")), l(tT, "search", tz("getSearch", "setSearch")), l(tT, "searchParams", tz("getSearchParams")), l(tT, "hash", tz("getHash", "setHash"))), s(tT, "toJSON", function() {
    return x(this).serialize()
  }, {
    enumerable: !0
  }), s(tT, "toString", function() {
    return x(this).serialize()
  }, {
    enumerable: !0
  }), S) {
  var tD = S.createObjectURL,
    tF = S.revokeObjectURL;
  tD && s(tC, "createObjectURL", f(tD, S)), tF && s(tC, "revokeObjectURL", f(tF, S))
}
_(tC, "URL"), i({
  global: !0,
  constructor: !0,
  forced: !u,
  sham: !o
}, {
  URL: tC
})