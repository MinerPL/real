"use strict";
n("70102"), n("854508");
var r = Object.assign || function(t) {
    for (var e = 1; e < arguments.length; e++) {
      var n = arguments[e];
      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
    }
    return t
  },
  i = function() {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
      }
    }
    return function(e, n, r) {
      return n && t(e.prototype, n), r && t(e, r), e
    }
  }(),
  o = n("867031"),
  a = n("467411"),
  u = function(t) {
    function e(t, n) {
      ! function(t, e) {
        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
      }(this, e);
      var i = function(t, e) {
        if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e && ("object" == typeof e || "function" == typeof e) ? e : t
      }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return t.style && (t = r({}, t, {
        style: new a(t.style)
      })), i._props = t, i._callback = n, i.__attach(), i
    }
    return ! function(t, e) {
      if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
      t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
    }(e, t), i(e, [{
      key: "__getValue",
      value: function() {
        var t = {};
        for (var e in this._props) {
          var n = this._props[e];
          n instanceof o ? t[e] = n.__getValue() : t[e] = n
        }
        return t
      }
    }, {
      key: "__getAnimatedValue",
      value: function() {
        var t = {};
        for (var e in this._props) {
          var n = this._props[e];
          n instanceof o && (t[e] = n.__getAnimatedValue())
        }
        return t
      }
    }, {
      key: "__attach",
      value: function() {
        for (var t in this._props) {
          var e = this._props[t];
          e instanceof o && e.__addChild(this)
        }
      }
    }, {
      key: "__detach",
      value: function() {
        for (var t in this._props) {
          var e = this._props[t];
          e instanceof o && e.__removeChild(this)
        }
      }
    }, {
      key: "update",
      value: function() {
        this._callback()
      }
    }]), e
  }(o);
t.exports = u