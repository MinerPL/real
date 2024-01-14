"use strict";
r.r(e), r.d(e, {
  default: function() {
    return o
  }
}), r("70102"), r("424973");
var n = r("475898"),
  i = r("191899"),
  a = function() {
    function t(t) {
      this.done = !0, this.rules = t
    }
    return t.prototype.start = function(t) {
      return this.text = t, this.done = !1, this.nextSymbol()
    }, t.prototype.isDone = function() {
      return this.done && null === this.symbol
    }, t.prototype.nextSymbol = function() {
      this.symbol = null, this.value = null;
      do {
        if (this.done) return !1;
        var t, e, r = void 0;
        for (var n in t = null, this.rules) {
          var i = (r = this.rules[n]).exec(this.text);
          i && (null === t || i[0].length > t[0].length) && (t = i, e = n)
        }
        if (null != t && (this.text = this.text.substr(t[0].length), "" === this.text && (this.done = !0)), null == t) {
          this.done = !0, this.symbol = null, this.value = null;
          return
        }
      } while ("SKIP" === e);
      return this.symbol = e, this.value = t, !0
    }, t.prototype.accept = function(t) {
      if (this.symbol === t) {
        if (this.value) {
          var e = this.value;
          return this.nextSymbol(), e
        }
        return this.nextSymbol(), !0
      }
      return !1
    }, t.prototype.acceptNumber = function() {
      return this.accept("number")
    }, t.prototype.expect = function(t) {
      if (this.accept(t)) return !0;
      throw Error("expected " + t + " but found " + this.symbol)
    }, t
  }();

function o(t, e) {
  void 0 === e && (e = n.default);
  var r = {},
    o = new a(e.tokens);
  if (!o.start(t)) return null;
  return function() {
    o.expect("every");
    var t = o.acceptNumber();
    if (t && (r.interval = parseInt(t[0], 10)), o.isDone()) throw Error("Unexpected end");
    switch (o.symbol) {
      case "day(s)":
        r.freq = i.RRule.DAILY, o.nextSymbol() && (function() {
          if (o.accept("at"))
            do {
              var t = o.acceptNumber();
              if (!t) throw Error("Unexpected symbol " + o.symbol + ", expected hour");
              for (r.byhour = [parseInt(t[0], 10)]; o.accept("comma");) {
                if (!(t = o.acceptNumber())) throw Error("Unexpected symbol " + o.symbol + "; expected hour");
                r.byhour.push(parseInt(t[0], 10))
              }
            } while (o.accept("comma") || o.accept("at"))
        }(), c());
        break;
      case "weekday(s)":
        r.freq = i.RRule.WEEKLY, r.byweekday = [i.RRule.MO, i.RRule.TU, i.RRule.WE, i.RRule.TH, i.RRule.FR], o.nextSymbol(), c();
        break;
      case "week(s)":
        r.freq = i.RRule.WEEKLY, o.nextSymbol() && (s(), c());
        break;
      case "hour(s)":
        r.freq = i.RRule.HOURLY, o.nextSymbol() && (s(), c());
        break;
      case "minute(s)":
        r.freq = i.RRule.MINUTELY, o.nextSymbol() && (s(), c());
        break;
      case "month(s)":
        r.freq = i.RRule.MONTHLY, o.nextSymbol() && (s(), c());
        break;
      case "year(s)":
        r.freq = i.RRule.YEARLY, o.nextSymbol() && (s(), c());
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        r.freq = i.RRule.WEEKLY;
        var e = o.symbol.substr(0, 2).toUpperCase();
        if (r.byweekday = [i.RRule[e]], !o.nextSymbol()) return;
        for (; o.accept("comma");) {
          if (o.isDone()) throw Error("Unexpected end");
          var n = d();
          if (!n) throw Error("Unexpected symbol " + o.symbol + ", expected weekday");
          r.byweekday.push(i.RRule[n]), o.nextSymbol()
        }(function() {
          o.accept("on"), o.accept("the");
          var t = y();
          if (t)
            for (r.bymonthday = [t], o.nextSymbol(); o.accept("comma");) {
              if (!(t = y())) throw Error("Unexpected symbol " + o.symbol + "; expected monthday");
              r.bymonthday.push(t), o.nextSymbol()
            }
        })(), c();
        break;
      case "january":
      case "february":
      case "march":
      case "april":
      case "may":
      case "june":
      case "july":
      case "august":
      case "september":
      case "october":
      case "november":
      case "december":
        if (r.freq = i.RRule.YEARLY, r.bymonth = [u()], !o.nextSymbol()) return;
        for (; o.accept("comma");) {
          if (o.isDone()) throw Error("Unexpected end");
          var a = u();
          if (!a) throw Error("Unexpected symbol " + o.symbol + ", expected month");
          r.bymonth.push(a), o.nextSymbol()
        }
        s(), c();
        break;
      default:
        throw Error("Unknown symbol")
    }
  }(), r;

  function s() {
    var t = o.accept("on"),
      e = o.accept("the");
    if (t || e)
      do {
        var n = y(),
          a = d(),
          s = u();
        if (n) a ? (o.nextSymbol(), !r.byweekday && (r.byweekday = []), r.byweekday.push((0, i.RRule)[a].nth(n))) : (!r.bymonthday && (r.bymonthday = []), r.bymonthday.push(n), o.accept("day(s)"));
        else if (a) o.nextSymbol(), !r.byweekday && (r.byweekday = []), r.byweekday.push(i.RRule[a]);
        else if ("weekday(s)" === o.symbol) o.nextSymbol(), !r.byweekday && (r.byweekday = [i.RRule.MO, i.RRule.TU, i.RRule.WE, i.RRule.TH, i.RRule.FR]);
        else if ("week(s)" === o.symbol) {
          o.nextSymbol();
          var c = o.acceptNumber();
          if (!c) throw Error("Unexpected symbol " + o.symbol + ", expected week number");
          for (r.byweekno = [parseInt(c[0], 10)]; o.accept("comma");) {
            if (!(c = o.acceptNumber())) throw Error("Unexpected symbol " + o.symbol + "; expected monthday");
            r.byweekno.push(parseInt(c[0], 10))
          }
        } else {
          if (!s) return;
          o.nextSymbol(), !r.bymonth && (r.bymonth = []), r.bymonth.push(s)
        }
      } while (o.accept("comma") || o.accept("the") || o.accept("on"))
  }

  function u() {
    switch (o.symbol) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        return !1
    }
  }

  function d() {
    switch (o.symbol) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        return o.symbol.substr(0, 2).toUpperCase();
      default:
        return !1
    }
  }

  function y() {
    switch (o.symbol) {
      case "last":
        return o.nextSymbol(), -1;
      case "first":
        return o.nextSymbol(), 1;
      case "second":
        return o.nextSymbol(), o.accept("last") ? -2 : 2;
      case "third":
        return o.nextSymbol(), o.accept("last") ? -3 : 3;
      case "nth":
        var t = parseInt(o.value[1], 10);
        if (t < -366 || t > 366) throw Error("Nth out of range: " + t);
        return o.nextSymbol(), o.accept("last") ? -t : t;
      default:
        return !1
    }
  }

  function c() {
    if ("until" === o.symbol) {
      var t = Date.parse(o.text);
      if (!t) throw Error("Cannot parse until date:" + o.text);
      r.until = new Date(t)
    } else o.accept("for") && (r.count = parseInt(o.value[0], 10), o.expect("number"))
  }
}