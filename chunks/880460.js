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
  o = n("884691"),
  a = n("599277"),
  u = n("24243");
t.exports = function(t) {
  var e = "node",
    n = function(n) {
      function s() {
        return ! function(t, e) {
            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
          }(this, s),
          function(t, e) {
            if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e && ("object" == typeof e || "function" == typeof e) ? e : t
          }(this, (s.__proto__ || Object.getPrototypeOf(s)).apply(this, arguments))
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
      }(s, n), i(s, [{
        key: "componentWillUnmount",
        value: function() {
          this._propsAnimated && this._propsAnimated.__detach()
        }
      }, {
        key: "setNativeProps",
        value: function(t) {
          !1 === u.current(this.refs[e], t, this) && this.forceUpdate()
        }
      }, {
        key: "componentWillMount",
        value: function() {
          this.attachProps(this.props)
        }
      }, {
        key: "attachProps",
        value: function(t) {
          var n = this,
            r = this._propsAnimated;
          this._propsAnimated = new a(t, function() {
            !1 === u.current(n.refs[e], n._propsAnimated.__getAnimatedValue(), n) && n.forceUpdate()
          }), r && r.__detach()
        }
      }, {
        key: "componentWillReceiveProps",
        value: function(t) {
          this.attachProps(t)
        }
      }, {
        key: "render",
        value: function() {
          var n = this._propsAnimated.__getValue(),
            i = n.style,
            a = function(t, e) {
              var n = {};
              for (var r in t) {
                if (!(e.indexOf(r) >= 0)) Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r])
              }
              return n
            }(n, ["style"]);
          return o.createElement(t, r({}, a, {
            style: u.transformStyles(i),
            ref: e,
            __source: {
              fileName: "src/createAnimatedComponent.js",
              lineNumber: 78
            }
          }))
        }
      }]), s
    }(o.Component);
  return n.propTypes = {
    style: function(e, n, r) {
      if (!t.propTypes) return
    }
  }, n
}