"use strict";
r("70102"), r("854508"), Object.defineProperty(t, "__esModule", {
  value: !0
}), t.active = void 0;
var n = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  o = function(e) {
    return e && e.__esModule ? e : {
      default: e
    }
  }(r("884691"));

function a(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var i = t.active = function(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "span";
  return function(r) {
    function i() {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, i);
      for (var r, u, l, c = arguments.length, s = Array(c), f = 0; f < c; f++) s[f] = arguments[f];
      return u = l = a(this, (r = i.__proto__ || Object.getPrototypeOf(i)).call.apply(r, [this].concat(s))), l.state = {
        active: !1
      }, l.handleMouseDown = function() {
        return l.setState({
          active: !0
        })
      }, l.handleMouseUp = function() {
        return l.setState({
          active: !1
        })
      }, l.render = function() {
        return o.default.createElement(t, {
          onMouseDown: l.handleMouseDown,
          onMouseUp: l.handleMouseUp
        }, o.default.createElement(e, n({}, l.props, l.state)))
      }, a(l, u)
    }
    return ! function(e, t) {
      if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }(i, r), i
  }(o.default.Component)
};
t.default = i