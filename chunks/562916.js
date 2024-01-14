"use strict";
n.r(t), n.d(t, {
  AMPMParser: function() {
    return d
  }
}), n("222007"), n("70102"), n("426094"), n("854508");
var r = n("232985"),
  a = n("238418");

function o(e) {
  return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function i(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}

function s(e, t) {
  return (s = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function u(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function l(e) {
  return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var d = function(e) {
  ! function(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && s(e, t)
  }(m, e);
  var t, n, r, d, f, p = (t = m, n = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (e) {
      return !1
    }
  }(), function() {
    var e, r = l(t);
    if (n) {
      var a = l(this).constructor;
      e = Reflect.construct(r, arguments, a)
    } else e = r.apply(this, arguments);
    return function(e, t) {
      return t && ("object" === o(t) || "function" == typeof t) ? t : u(e)
    }(this, e)
  });

  function m() {
    var e;
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, m);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return c(u(e = p.call.apply(p, [this].concat(n))), "priority", 80), c(u(e), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]), e
  }
  return r = m, d = [{
    key: "parse",
    value: function(e, t, n) {
      switch (t) {
        case "a":
        case "aa":
        case "aaa":
          return n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          });
        case "aaaaa":
          return n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          });
        default:
          return n.dayPeriod(e, {
            width: "wide",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "abbreviated",
            context: "formatting"
          }) || n.dayPeriod(e, {
            width: "narrow",
            context: "formatting"
          })
      }
    }
  }, {
    key: "set",
    value: function(e, t, n) {
      return e.setUTCHours((0, a.dayPeriodEnumToHours)(n), 0, 0, 0), e
    }
  }], i(r.prototype, d), f && i(r, f), m
}(r.Parser)