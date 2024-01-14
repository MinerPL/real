"use strict";
n("70102"), n("854508");
var r = function() {
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
  Animation = n("439382");
n("375028");
var i = n("52296"),
  o = n("330139"),
  a = n("242173"),
  u = i.inOut(i.ease),
  s = function(t) {
    function e(t) {
      ! function(t, e) {
        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
      }(this, e);
      var n = function(t, e) {
        if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e && ("object" == typeof e || "function" == typeof e) ? e : t
      }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this));
      return n._toValue = t.toValue, n._easing = void 0 !== t.easing ? t.easing : u, n._duration = void 0 !== t.duration ? t.duration : 500, n._delay = void 0 !== t.delay ? t.delay : 0, n.__isInteraction = void 0 === t.isInteraction || t.isInteraction, n
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
    }(e, t), r(e, [{
      key: "start",
      value: function(t, e, n) {
        var r = this;
        this.__active = !0, this._fromValue = t, this._onUpdate = e, this.__onEnd = n;
        var i = function() {
          0 === r._duration ? (r._onUpdate(r._toValue), r.__debouncedOnEnd({
            finished: !0
          })) : (r._startTime = Date.now(), r._animationFrame = o.current(r.onUpdate.bind(r)))
        };
        this._delay ? this._timeout = setTimeout(i, this._delay) : i()
      }
    }, {
      key: "onUpdate",
      value: function() {
        var t = Date.now();
        if (t >= this._startTime + this._duration) {
          0 === this._duration ? this._onUpdate(this._toValue) : this._onUpdate(this._fromValue + this._easing(1) * (this._toValue - this._fromValue)), this.__debouncedOnEnd({
            finished: !0
          });
          return
        }
        this._onUpdate(this._fromValue + this._easing((t - this._startTime) / this._duration) * (this._toValue - this._fromValue)), this.__active && (this._animationFrame = o.current(this.onUpdate.bind(this)))
      }
    }, {
      key: "stop",
      value: function() {
        this.__active = !1, clearTimeout(this._timeout), a.current(this._animationFrame), this.__debouncedOnEnd({
          finished: !1
        })
      }
    }]), e
  }(Animation);
t.exports = s