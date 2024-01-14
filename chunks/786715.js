"use strict";
n.r(t), n.d(t, {
  LocalWeekParser: function() {
    return m
  }
}), n("222007"), n("70102"), n("426094"), n("854508");
var r = n("232985"),
  a = n("272347"),
  o = n("238418"),
  i = n("336501"),
  s = n("63173");

function u(e) {
  return (u = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
    return typeof e
  } : function(e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  })(e)
}

function l(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
  }
}

function c(e, t) {
  return (c = Object.setPrototypeOf || function(e, t) {
    return e.__proto__ = t, e
  })(e, t)
}

function d(e) {
  if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e
}

function f(e) {
  return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
    return e.__proto__ || Object.getPrototypeOf(e)
  })(e)
}

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
var m = function(e) {
  ! function(e, t) {
    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function");
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        writable: !0,
        configurable: !0
      }
    }), t && c(e, t)
  }(y, e);
  var t, n, r, m, h, _ = (t = y, n = function() {
    if ("undefined" == typeof Reflect || !Reflect.construct || Reflect.construct.sham) return !1;
    if ("function" == typeof Proxy) return !0;
    try {
      return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
    } catch (e) {
      return !1
    }
  }(), function() {
    var e, r = f(t);
    if (n) {
      var a = f(this).constructor;
      e = Reflect.construct(r, arguments, a)
    } else e = r.apply(this, arguments);
    return function(e, t) {
      return t && ("object" === u(t) || "function" == typeof t) ? t : d(e)
    }(this, e)
  });

  function y() {
    var e;
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, y);
    for (var t = arguments.length, n = Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return p(d(e = _.call.apply(_, [this].concat(n))), "priority", 100), p(d(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]), e
  }
  return r = y, m = [{
    key: "parse",
    value: function(e, t, n) {
      switch (t) {
        case "w":
          return (0, o.parseNumericPattern)(a.numericPatterns.week, e);
        case "wo":
          return n.ordinalNumber(e, {
            unit: "week"
          });
        default:
          return (0, o.parseNDigits)(t.length, e)
      }
    }
  }, {
    key: "validate",
    value: function(e, t) {
      return t >= 1 && t <= 53
    }
  }, {
    key: "set",
    value: function(e, t, n, r) {
      return (0, s.default)((0, i.default)(e, n, r), r)
    }
  }], l(r.prototype, m), h && l(r, h), y
}(r.Parser)