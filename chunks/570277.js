var r, o = n("390493");
n("843762"), n("781738"), n("70102"), n("424973"), t = e.exports = f, r = "object" == typeof o && o.env && o.env.NODE_DEBUG && /\bsemver\b/i.test(o.env.NODE_DEBUG) ? function() {
  var e = Array.prototype.slice.call(arguments, 0);
  e.unshift("SEMVER"), console.log.apply(console, e)
} : function() {}, t.SEMVER_SPEC_VERSION = "2.0.0";
var a = Number.MAX_SAFE_INTEGER || 9007199254740991,
  i = t.re = [],
  s = t.src = [],
  c = t.tokens = {},
  l = 0;

function u(e) {
  c[e] = l++
}
u("NUMERICIDENTIFIER"), s[c.NUMERICIDENTIFIER] = "0|[1-9]\\d*", u("NUMERICIDENTIFIERLOOSE"), s[c.NUMERICIDENTIFIERLOOSE] = "[0-9]+", u("NONNUMERICIDENTIFIER"), s[c.NONNUMERICIDENTIFIER] = "\\d*[a-zA-Z-][a-zA-Z0-9-]*", u("MAINVERSION"), s[c.MAINVERSION] = "(" + s[c.NUMERICIDENTIFIER] + ")\\.(" + s[c.NUMERICIDENTIFIER] + ")\\.(" + s[c.NUMERICIDENTIFIER] + ")", u("MAINVERSIONLOOSE"), s[c.MAINVERSIONLOOSE] = "(" + s[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[c.NUMERICIDENTIFIERLOOSE] + ")\\.(" + s[c.NUMERICIDENTIFIERLOOSE] + ")", u("PRERELEASEIDENTIFIER"), s[c.PRERELEASEIDENTIFIER] = "(?:" + s[c.NUMERICIDENTIFIER] + "|" + s[c.NONNUMERICIDENTIFIER] + ")", u("PRERELEASEIDENTIFIERLOOSE"), s[c.PRERELEASEIDENTIFIERLOOSE] = "(?:" + s[c.NUMERICIDENTIFIERLOOSE] + "|" + s[c.NONNUMERICIDENTIFIER] + ")", u("PRERELEASE"), s[c.PRERELEASE] = "(?:-(" + s[c.PRERELEASEIDENTIFIER] + "(?:\\." + s[c.PRERELEASEIDENTIFIER] + ")*))", u("PRERELEASELOOSE"), s[c.PRERELEASELOOSE] = "(?:-?(" + s[c.PRERELEASEIDENTIFIERLOOSE] + "(?:\\." + s[c.PRERELEASEIDENTIFIERLOOSE] + ")*))", u("BUILDIDENTIFIER"), s[c.BUILDIDENTIFIER] = "[0-9A-Za-z-]+", u("BUILD"), s[c.BUILD] = "(?:\\+(" + s[c.BUILDIDENTIFIER] + "(?:\\." + s[c.BUILDIDENTIFIER] + ")*))", u("FULL"), u("FULLPLAIN"), s[c.FULLPLAIN] = "v?" + s[c.MAINVERSION] + s[c.PRERELEASE] + "?" + s[c.BUILD] + "?", s[c.FULL] = "^" + s[c.FULLPLAIN] + "$", u("LOOSEPLAIN"), s[c.LOOSEPLAIN] = "[v=\\s]*" + s[c.MAINVERSIONLOOSE] + s[c.PRERELEASELOOSE] + "?" + s[c.BUILD] + "?", u("LOOSE"), s[c.LOOSE] = "^" + s[c.LOOSEPLAIN] + "$", u("GTLT"), s[c.GTLT] = "((?:<|>)?=?)", u("XRANGEIDENTIFIERLOOSE"), s[c.XRANGEIDENTIFIERLOOSE] = s[c.NUMERICIDENTIFIERLOOSE] + "|x|X|\\*", u("XRANGEIDENTIFIER"), s[c.XRANGEIDENTIFIER] = s[c.NUMERICIDENTIFIER] + "|x|X|\\*", u("XRANGEPLAIN"), s[c.XRANGEPLAIN] = "[v=\\s]*(" + s[c.XRANGEIDENTIFIER] + ")(?:\\.(" + s[c.XRANGEIDENTIFIER] + ")(?:\\.(" + s[c.XRANGEIDENTIFIER] + ")(?:" + s[c.PRERELEASE] + ")?" + s[c.BUILD] + "?)?)?", u("XRANGEPLAINLOOSE"), s[c.XRANGEPLAINLOOSE] = "[v=\\s]*(" + s[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[c.XRANGEIDENTIFIERLOOSE] + ")(?:\\.(" + s[c.XRANGEIDENTIFIERLOOSE] + ")(?:" + s[c.PRERELEASELOOSE] + ")?" + s[c.BUILD] + "?)?)?", u("XRANGE"), s[c.XRANGE] = "^" + s[c.GTLT] + "\\s*" + s[c.XRANGEPLAIN] + "$", u("XRANGELOOSE"), s[c.XRANGELOOSE] = "^" + s[c.GTLT] + "\\s*" + s[c.XRANGEPLAINLOOSE] + "$", u("COERCE"), s[c.COERCE] = "(^|[^\\d])(\\d{1,16})(?:\\.(\\d{1,16}))?(?:\\.(\\d{1,16}))?(?:$|[^\\d])", u("COERCERTL"), i[c.COERCERTL] = RegExp(s[c.COERCE], "g"), u("LONETILDE"), s[c.LONETILDE] = "(?:~>?)", u("TILDETRIM"), s[c.TILDETRIM] = "(\\s*)" + s[c.LONETILDE] + "\\s+", i[c.TILDETRIM] = RegExp(s[c.TILDETRIM], "g");
u("TILDE"), s[c.TILDE] = "^" + s[c.LONETILDE] + s[c.XRANGEPLAIN] + "$", u("TILDELOOSE"), s[c.TILDELOOSE] = "^" + s[c.LONETILDE] + s[c.XRANGEPLAINLOOSE] + "$", u("LONECARET"), s[c.LONECARET] = "(?:\\^)", u("CARETTRIM"), s[c.CARETTRIM] = "(\\s*)" + s[c.LONECARET] + "\\s+", i[c.CARETTRIM] = RegExp(s[c.CARETTRIM], "g");
u("CARET"), s[c.CARET] = "^" + s[c.LONECARET] + s[c.XRANGEPLAIN] + "$", u("CARETLOOSE"), s[c.CARETLOOSE] = "^" + s[c.LONECARET] + s[c.XRANGEPLAINLOOSE] + "$", u("COMPARATORLOOSE"), s[c.COMPARATORLOOSE] = "^" + s[c.GTLT] + "\\s*(" + s[c.LOOSEPLAIN] + ")$|^$", u("COMPARATOR"), s[c.COMPARATOR] = "^" + s[c.GTLT] + "\\s*(" + s[c.FULLPLAIN] + ")$|^$", u("COMPARATORTRIM"), s[c.COMPARATORTRIM] = "(\\s*)" + s[c.GTLT] + "\\s*(" + s[c.LOOSEPLAIN] + "|" + s[c.XRANGEPLAIN] + ")", i[c.COMPARATORTRIM] = RegExp(s[c.COMPARATORTRIM], "g");
u("HYPHENRANGE"), s[c.HYPHENRANGE] = "^\\s*(" + s[c.XRANGEPLAIN] + ")\\s+-\\s+(" + s[c.XRANGEPLAIN] + ")\\s*$", u("HYPHENRANGELOOSE"), s[c.HYPHENRANGELOOSE] = "^\\s*(" + s[c.XRANGEPLAINLOOSE] + ")\\s+-\\s+(" + s[c.XRANGEPLAINLOOSE] + ")\\s*$", u("STAR"), s[c.STAR] = "(<|>)?=?\\s*\\*";
for (var d = 0; d < l; d++) r(d, s[d]), !i[d] && (i[d] = new RegExp(s[d]));

function p(e, t) {
  if ((!t || "object" != typeof t) && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof f) return e;
  if ("string" != typeof e || e.length > 256 || !(t.loose ? i[c.LOOSE] : i[c.FULL]).test(e)) return null;
  try {
    return new f(e, t)
  } catch (e) {
    return null
  }
}
t.parse = p, t.valid = function(e, t) {
  var n = p(e, t);
  return n ? n.version : null
};
t.clean = function(e, t) {
  var n = p(e.trim().replace(/^[=v]+/, ""), t);
  return n ? n.version : null
};

function f(e, t) {
  if ((!t || "object" != typeof t) && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof f) {
    if (e.loose === t.loose) return e;
    e = e.version
  } else if ("string" != typeof e) throw TypeError("Invalid Version: " + e);
  if (e.length > 256) throw TypeError("version is longer than 256 characters");
  if (!(this instanceof f)) return new f(e, t);
  r("SemVer", e, t), this.options = t, this.loose = !!t.loose;
  var n = e.trim().match(t.loose ? i[c.LOOSE] : i[c.FULL]);
  if (!n) throw TypeError("Invalid Version: " + e);
  if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > a || this.major < 0) throw TypeError("Invalid major version");
  if (this.minor > a || this.minor < 0) throw TypeError("Invalid minor version");
  if (this.patch > a || this.patch < 0) throw TypeError("Invalid patch version");
  n[4] ? this.prerelease = n[4].split(".").map(function(e) {
    if (/^[0-9]+$/.test(e)) {
      var t = +e;
      if (t >= 0 && t < a) return t
    }
    return e
  }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format()
}
t.SemVer = f, f.prototype.format = function() {
  return this.version = this.major + "." + this.minor + "." + this.patch, this.prerelease.length && (this.version += "-" + this.prerelease.join(".")), this.version
}, f.prototype.toString = function() {
  return this.version
}, f.prototype.compare = function(e) {
  return r("SemVer.compare", this.version, this.options, e), !(e instanceof f) && (e = new f(e, this.options)), this.compareMain(e) || this.comparePre(e)
}, f.prototype.compareMain = function(e) {
  return !(e instanceof f) && (e = new f(e, this.options)), h(this.major, e.major) || h(this.minor, e.minor) || h(this.patch, e.patch)
}, f.prototype.comparePre = function(e) {
  if (!(e instanceof f) && (e = new f(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
  if (!this.prerelease.length && e.prerelease.length) return 1;
  if (!this.prerelease.length && !e.prerelease.length) return 0;
  var t = 0;
  do {
    var n = this.prerelease[t],
      o = e.prerelease[t];
    if (r("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
    if (void 0 === o) return 1;
    else if (void 0 === n) return -1;
    else if (n === o) continue;
    else return h(n, o)
  } while (++t)
}, f.prototype.compareBuild = function(e) {
  !(e instanceof f) && (e = new f(e, this.options));
  var t = 0;
  do {
    var n = this.build[t],
      o = e.build[t];
    if (r("prerelease compare", t, n, o), void 0 === n && void 0 === o) return 0;
    if (void 0 === o) return 1;
    else if (void 0 === n) return -1;
    else if (n === o) continue;
    else return h(n, o)
  } while (++t)
}, f.prototype.inc = function(e, t) {
  switch (e) {
    case "premajor":
      this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t);
      break;
    case "preminor":
      this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t);
      break;
    case "prepatch":
      this.prerelease.length = 0, this.inc("patch", t), this.inc("pre", t);
      break;
    case "prerelease":
      0 === this.prerelease.length && this.inc("patch", t), this.inc("pre", t);
      break;
    case "major":
      (0 !== this.minor || 0 !== this.patch || 0 === this.prerelease.length) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
      break;
    case "minor":
      (0 !== this.patch || 0 === this.prerelease.length) && this.minor++, this.patch = 0, this.prerelease = [];
      break;
    case "patch":
      0 === this.prerelease.length && this.patch++, this.prerelease = [];
      break;
    case "pre":
      if (0 === this.prerelease.length) this.prerelease = [0];
      else {
        for (var n = this.prerelease.length; --n >= 0;) "number" == typeof this.prerelease[n] && (this.prerelease[n]++, n = -2); - 1 === n && this.prerelease.push(0)
      }
      t && (this.prerelease[0] === t ? isNaN(this.prerelease[1]) && (this.prerelease = [t, 0]) : this.prerelease = [t, 0]);
      break;
    default:
      throw Error("invalid increment argument: " + e)
  }
  return this.format(), this.raw = this.version, this
}, t.inc = function(e, t, n, r) {
  "string" == typeof n && (r = n, n = void 0);
  try {
    return new f(e, n).inc(t, r).version
  } catch (e) {
    return null
  }
};
t.diff = function(e, t) {
  if (b(e, t)) return null;
  var n = p(e),
    r = p(t),
    o = "";
  if (n.prerelease.length || r.prerelease.length) {
    o = "pre";
    var a = "prerelease"
  }
  for (var i in n)
    if (("major" === i || "minor" === i || "patch" === i) && n[i] !== r[i]) return o + i;
  return a
};
t.compareIdentifiers = h;
var m = /^[0-9]+$/;

function h(e, t) {
  var n = m.test(e),
    r = m.test(t);
  return n && r && (e = +e, t = +t), e === t ? 0 : n && !r ? -1 : r && !n ? 1 : e < t ? -1 : 1
}
t.rcompareIdentifiers = function(e, t) {
  return h(t, e)
};
t.major = function(e, t) {
  return new f(e, t).major
};
t.minor = function(e, t) {
  return new f(e, t).minor
};
t.patch = function(e, t) {
  return new f(e, t).patch
};

function g(e, t, n) {
  return new f(e, n).compare(new f(t, n))
}
t.compare = g, t.compareLoose = function(e, t) {
  return g(e, t, !0)
};
t.compareBuild = function(e, t, n) {
  var r = new f(e, n),
    o = new f(t, n);
  return r.compare(o) || r.compareBuild(o)
};
t.rcompare = function(e, t, n) {
  return g(t, e, n)
};
t.sort = function(e, n) {
  return e.sort(function(e, r) {
    return t.compareBuild(e, r, n)
  })
};
t.rsort = function(e, n) {
  return e.sort(function(e, r) {
    return t.compareBuild(r, e, n)
  })
};

function v(e, t, n) {
  return g(e, t, n) > 0
}

function y(e, t, n) {
  return 0 > g(e, t, n)
}

function b(e, t, n) {
  return 0 === g(e, t, n)
}

function x(e, t, n) {
  return 0 !== g(e, t, n)
}

function S(e, t, n) {
  return g(e, t, n) >= 0
}

function w(e, t, n) {
  return 0 >= g(e, t, n)
}

function D(e, t, n, r) {
  switch (t) {
    case "===":
      return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e === n;
    case "!==":
      return "object" == typeof e && (e = e.version), "object" == typeof n && (n = n.version), e !== n;
    case "":
    case "=":
    case "==":
      return b(e, n, r);
    case "!=":
      return x(e, n, r);
    case ">":
      return v(e, n, r);
    case ">=":
      return S(e, n, r);
    case "<":
      return y(e, n, r);
    case "<=":
      return w(e, n, r);
    default:
      throw TypeError("Invalid operator: " + t)
  }
}

function C(e, t) {
  if ((!t || "object" != typeof t) && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof C) {
    if (!!t.loose === e.loose) return e;
    e = e.value
  }
  if (!(this instanceof C)) return new C(e, t);
  r("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === P ? this.value = "" : this.value = this.operator + this.semver.version, r("comp", this)
}
t.gt = v, t.lt = y, t.eq = b, t.neq = x, t.gte = S, t.lte = w, t.cmp = D, t.Comparator = C;
var P = {};

function Range(e, t) {
  if ((!t || "object" != typeof t) && (t = {
      loose: !!t,
      includePrerelease: !1
    }), e instanceof Range) return !!t.loose === e.loose && !!t.includePrerelease === e.includePrerelease ? e : new Range(e.raw, t);
  if (e instanceof C) return new Range(e.value, t);
  if (!(this instanceof Range)) return new Range(e, t);
  if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e, this.set = e.split(/\s*\|\|\s*/).map(function(e) {
      return this.parseRange(e.trim())
    }, this).filter(function(e) {
      return e.length
    }), !this.set.length) throw TypeError("Invalid SemVer Range: " + e);
  this.format()
}

function k(e, t) {
  for (var n = !0, r = e.slice(), o = r.pop(); n && r.length;) n = r.every(function(e) {
    return o.intersects(e, t)
  }), o = r.pop();
  return n
}
C.prototype.parse = function(e) {
  var t = this.options.loose ? i[c.COMPARATORLOOSE] : i[c.COMPARATOR],
    n = e.match(t);
  if (!n) throw TypeError("Invalid comparator: " + e);
  this.operator = void 0 !== n[1] ? n[1] : "", "=" === this.operator && (this.operator = ""), n[2] ? this.semver = new f(n[2], this.options.loose) : this.semver = P
}, C.prototype.toString = function() {
  return this.value
}, C.prototype.test = function(e) {
  if (r("Comparator.test", e, this.options.loose), this.semver === P || e === P) return !0;
  if ("string" == typeof e) try {
    e = new f(e, this.options)
  } catch (e) {
    return !1
  }
  return D(e, this.operator, this.semver, this.options)
}, C.prototype.intersects = function(e, t) {
  if (!(e instanceof C)) throw TypeError("a Comparator is required");
  if ((!t || "object" != typeof t) && (t = {
      loose: !!t,
      includePrerelease: !1
    }), "" === this.operator) return "" === this.value || (n = new Range(e.value, t), R(this.value, n, t));
  if ("" === e.operator) return "" === e.value || (n = new Range(this.value, t), R(e.semver, n, t));
  var n, r = (">=" === this.operator || ">" === this.operator) && (">=" === e.operator || ">" === e.operator),
    o = ("<=" === this.operator || "<" === this.operator) && ("<=" === e.operator || "<" === e.operator),
    a = this.semver.version === e.semver.version,
    i = (">=" === this.operator || "<=" === this.operator) && (">=" === e.operator || "<=" === e.operator),
    s = D(this.semver, "<", e.semver, t) && (">=" === this.operator || ">" === this.operator) && ("<=" === e.operator || "<" === e.operator),
    c = D(this.semver, ">", e.semver, t) && ("<=" === this.operator || "<" === this.operator) && (">=" === e.operator || ">" === e.operator);
  return r || o || a && i || s || c
}, t.Range = Range, Range.prototype.format = function() {
  return this.range = this.set.map(function(e) {
    return e.join(" ").trim()
  }).join("||").trim(), this.range
}, Range.prototype.toString = function() {
  return this.range
}, Range.prototype.parseRange = function(e) {
  var t = this.options.loose;
  e = e.trim();
  var n = t ? i[c.HYPHENRANGELOOSE] : i[c.HYPHENRANGE];
  e = e.replace(n, T), r("hyphen replace", e), e = e.replace(i[c.COMPARATORTRIM], "$1$2$3"), r("comparator trim", e, i[c.COMPARATORTRIM]), e = (e = (e = e.replace(i[c.TILDETRIM], "$1~")).replace(i[c.CARETTRIM], "$1^")).split(/\s+/).join(" ");
  var o = t ? i[c.COMPARATORLOOSE] : i[c.COMPARATOR],
    a = e.split(" ").map(function(e) {
      return function(e, t) {
        return r("comp", e, t), e = function(e, t) {
          return e.trim().split(/\s+/).map(function(e) {
            return function(e, t) {
              r("caret", e, t);
              var n = t.loose ? i[c.CARETLOOSE] : i[c.CARET];
              return e.replace(n, function(t, n, o, a, i) {
                var s;
                return r("caret", e, t, n, o, a, i), E(n) ? s = "" : E(o) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : E(a) ? s = "0" === n ? ">=" + n + "." + o + ".0 <" + n + "." + (+o + 1) + ".0" : ">=" + n + "." + o + ".0 <" + (+n + 1) + ".0.0" : i ? (r("replaceCaret pr", i), s = "0" === n ? "0" === o ? ">=" + n + "." + o + "." + a + "-" + i + " <" + n + "." + o + "." + (+a + 1) : ">=" + n + "." + o + "." + a + "-" + i + " <" + n + "." + (+o + 1) + ".0" : ">=" + n + "." + o + "." + a + "-" + i + " <" + (+n + 1) + ".0.0") : (r("no pr"), s = "0" === n ? "0" === o ? ">=" + n + "." + o + "." + a + " <" + n + "." + o + "." + (+a + 1) : ">=" + n + "." + o + "." + a + " <" + n + "." + (+o + 1) + ".0" : ">=" + n + "." + o + "." + a + " <" + (+n + 1) + ".0.0"), r("caret return", s), s
              })
            }(e, t)
          }).join(" ")
        }(e, t), r("caret", e), e = function(e, t) {
          return e.trim().split(/\s+/).map(function(e) {
            return function(e, t) {
              var n = t.loose ? i[c.TILDELOOSE] : i[c.TILDE];
              return e.replace(n, function(t, n, o, a, i) {
                var s;
                return r("tilde", e, t, n, o, a, i), E(n) ? s = "" : E(o) ? s = ">=" + n + ".0.0 <" + (+n + 1) + ".0.0" : E(a) ? s = ">=" + n + "." + o + ".0 <" + n + "." + (+o + 1) + ".0" : i ? (r("replaceTilde pr", i), s = ">=" + n + "." + o + "." + a + "-" + i + " <" + n + "." + (+o + 1) + ".0") : s = ">=" + n + "." + o + "." + a + " <" + n + "." + (+o + 1) + ".0", r("tilde return", s), s
              })
            }(e, t)
          }).join(" ")
        }(e, t), r("tildes", e), e = function(e, t) {
          return r("replaceXRanges", e, t), e.split(/\s+/).map(function(e) {
            return function(e, t) {
              e = e.trim();
              var n = t.loose ? i[c.XRANGELOOSE] : i[c.XRANGE];
              return e.replace(n, function(n, o, a, i, s, c) {
                r("xRange", e, n, o, a, i, s, c);
                var l = E(a),
                  u = l || E(i),
                  d = u || E(s);
                return "=" === o && d && (o = ""), c = t.includePrerelease ? "-0" : "", l ? n = ">" === o || "<" === o ? "<0.0.0-0" : "*" : o && d ? (u && (i = 0), s = 0, ">" === o ? (o = ">=", u ? (a = +a + 1, i = 0) : i = +i + 1, s = 0) : "<=" === o && (o = "<", u ? a = +a + 1 : i = +i + 1), n = o + a + "." + i + "." + s + c) : u ? n = ">=" + a + ".0.0" + c + " <" + (+a + 1) + ".0.0" + c : d && (n = ">=" + a + "." + i + ".0" + c + " <" + a + "." + (+i + 1) + ".0" + c), r("xRange return", n), n
              })
            }(e, t)
          }).join(" ")
        }(e, t), r("xrange", e), e = function(e, t) {
          return r("replaceStars", e, t), e.trim().replace(i[c.STAR], "")
        }(e, t), r("stars", e), e
      }(e, this.options)
    }, this).join(" ").split(/\s+/);
  return this.options.loose && (a = a.filter(function(e) {
    return !!e.match(o)
  })), a = a.map(function(e) {
    return new C(e, this.options)
  }, this)
}, Range.prototype.intersects = function(e, t) {
  if (!(e instanceof Range)) throw TypeError("a Range is required");
  return this.set.some(function(n) {
    return k(n, t) && e.set.some(function(e) {
      return k(e, t) && n.every(function(n) {
        return e.every(function(e) {
          return n.intersects(e, t)
        })
      })
    })
  })
}, t.toComparators = function(e, t) {
  return new Range(e, t).set.map(function(e) {
    return e.map(function(e) {
      return e.value
    }).join(" ").trim().split(" ")
  })
};

function E(e) {
  return !e || "x" === e.toLowerCase() || "*" === e
}

function T(e, t, n, r, o, a, i, s, c, l, u, d, p) {
  return t = E(n) ? "" : E(r) ? ">=" + n + ".0.0" : E(o) ? ">=" + n + "." + r + ".0" : ">=" + t, (t + " " + (s = E(c) ? "" : E(l) ? "<" + (+c + 1) + ".0.0" : E(u) ? "<" + c + "." + (+l + 1) + ".0" : d ? "<=" + c + "." + l + "." + u + "-" + d : "<=" + s)).trim()
}
Range.prototype.test = function(e) {
  if (!e) return !1;
  if ("string" == typeof e) try {
    e = new f(e, this.options)
  } catch (e) {
    return !1
  }
  for (var t = 0; t < this.set.length; t++)
    if (function(e, t, n) {
        for (var o = 0; o < e.length; o++)
          if (!e[o].test(t)) return !1;
        if (t.prerelease.length && !n.includePrerelease) {
          for (o = 0; o < e.length; o++)
            if (r(e[o].semver), e[o].semver !== P && e[o].semver.prerelease.length > 0) {
              var a = e[o].semver;
              if (a.major === t.major && a.minor === t.minor && a.patch === t.patch) return !0
            } return !1
        }
        return !0
      }(this.set[t], e, this.options)) return !0;
  return !1
};

function R(e, t, n) {
  try {
    t = new Range(t, n)
  } catch (e) {
    return !1
  }
  return t.test(e)
}
t.satisfies = R, t.maxSatisfying = function(e, t, n) {
  var r = null,
    o = null;
  try {
    var a = new Range(t, n)
  } catch (e) {
    return null
  }
  return e.forEach(function(e) {
    a.test(e) && (!r || -1 === o.compare(e)) && (o = new f(r = e, n))
  }), r
};
t.minSatisfying = function(e, t, n) {
  var r = null,
    o = null;
  try {
    var a = new Range(t, n)
  } catch (e) {
    return null
  }
  return e.forEach(function(e) {
    a.test(e) && (!r || 1 === o.compare(e)) && (o = new f(r = e, n))
  }), r
};
t.minVersion = function(e, t) {
  e = new Range(e, t);
  var n = new f("0.0.0");
  if (e.test(n)) return n;
  if (n = new f("0.0.0-0"), e.test(n)) return n;
  n = null;
  for (var r = 0; r < e.set.length; ++r) e.set[r].forEach(function(e) {
    var t = new f(e.semver.version);
    switch (e.operator) {
      case ">":
        0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
      case "":
      case ">=":
        (!n || v(n, t)) && (n = t);
        break;
      case "<":
      case "<=":
        break;
      default:
        throw Error("Unexpected operation: " + e.operator)
    }
  });
  return n && e.test(n) ? n : null
};
t.validRange = function(e, t) {
  try {
    return new Range(e, t).range || "*"
  } catch (e) {
    return null
  }
};
t.ltr = function(e, t, n) {
  return M(e, t, "<", n)
};
t.gtr = function(e, t, n) {
  return M(e, t, ">", n)
};

function M(e, t, n, r) {
  switch (e = new f(e, r), t = new Range(t, r), n) {
    case ">":
      o = v, a = w, i = y, s = ">", c = ">=";
      break;
    case "<":
      o = y, a = S, i = v, s = "<", c = "<=";
      break;
    default:
      throw TypeError('Must provide a hilo val of "<" or ">"')
  }
  if (R(e, t, r)) return !1;
  for (var o, a, i, s, c, l = 0; l < t.set.length; ++l) {
    var u = t.set[l],
      d = null,
      p = null;
    if (u.forEach(function(e) {
        e.semver === P && (e = new C(">=0.0.0")), d = d || e, p = p || e, o(e.semver, d.semver, r) ? d = e : i(e.semver, p.semver, r) && (p = e)
      }), d.operator === s || d.operator === c) return !1;
    if ((!p.operator || p.operator === s) && a(e, p.semver)) return !1;
    if (p.operator === c && i(e, p.semver)) return !1
  }
  return !0
}
t.outside = M, t.prerelease = function(e, t) {
  var n = p(e, t);
  return n && n.prerelease.length ? n.prerelease : null
};
t.intersects = function(e, t, n) {
  return e = new Range(e, n), t = new Range(t, n), e.intersects(t)
};
t.coerce = function(e, t) {
  if (e instanceof f) return e;
  if ("number" == typeof e && (e = String(e)), "string" != typeof e) return null;
  var n, r = null;
  if ((t = t || {}).rtl) {
    for (;
      (n = i[c.COERCERTL].exec(e)) && (!r || r.index + r[0].length !== e.length);)(!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), i[c.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
    i[c.COERCERTL].lastIndex = -1
  } else r = e.match(i[c.COERCE]);
  return null === r ? null : p(r[2] + "." + (r[3] || "0") + "." + (r[4] || "0"), t)
}