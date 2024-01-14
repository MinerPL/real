"use strict";
r.r(t), r.d(t, {
  default: function() {
    return f
  }
}), r("70102"), r("854508");
var n = r("884691"),
  o = r.n(n),
  a = r("849122"),
  i = r("746462"),
  u = r("892023"),
  l = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
    }
    return e
  },
  c = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  }();

function s(e, t) {
  if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && ("object" == typeof t || "function" == typeof t) ? t : e
}
var f = function(e) {
  function t() {
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, t);
    for (var e, r, n, o = arguments.length, a = Array(o), u = 0; u < o; u++) a[u] = arguments[u];
    return r = n = s(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(a))), n.handleChange = function(e) {
      var t = i.calculateChange(e, n.props.hsl, n.props.direction, n.props.a, n.container);
      t && "function" == typeof n.props.onChange && n.props.onChange(t, e)
    }, n.handleMouseDown = function(e) {
      n.handleChange(e), window.addEventListener("mousemove", n.handleChange), window.addEventListener("mouseup", n.handleMouseUp)
    }, n.handleMouseUp = function() {
      n.unbindEventListeners()
    }, n.unbindEventListeners = function() {
      window.removeEventListener("mousemove", n.handleChange), window.removeEventListener("mouseup", n.handleMouseUp)
    }, s(n, r)
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
  }(t, e), c(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.unbindEventListeners()
    }
  }, {
    key: "render",
    value: function() {
      var e = this,
        t = this.props.rgb,
        r = (0, a.default)({
          default: {
            alpha: {
              absolute: "0px 0px 0px 0px",
              borderRadius: this.props.radius
            },
            checkboard: {
              absolute: "0px 0px 0px 0px",
              overflow: "hidden",
              borderRadius: this.props.radius
            },
            gradient: {
              absolute: "0px 0px 0px 0px",
              background: "linear-gradient(to right, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)",
              boxShadow: this.props.shadow,
              borderRadius: this.props.radius
            },
            container: {
              position: "relative",
              height: "100%",
              margin: "0 3px"
            },
            pointer: {
              position: "absolute",
              left: 100 * t.a + "%"
            },
            slider: {
              width: "4px",
              borderRadius: "1px",
              height: "8px",
              boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
              background: "#fff",
              marginTop: "1px",
              transform: "translateX(-2px)"
            }
          },
          vertical: {
            gradient: {
              background: "linear-gradient(to bottom, rgba(" + t.r + "," + t.g + "," + t.b + ", 0) 0%,\n           rgba(" + t.r + "," + t.g + "," + t.b + ", 1) 100%)"
            },
            pointer: {
              left: 0,
              top: 100 * t.a + "%"
            }
          },
          overwrite: l({}, this.props.style)
        }, {
          vertical: "vertical" === this.props.direction,
          overwrite: !0
        });
      return o.createElement("div", {
        style: r.alpha
      }, o.createElement("div", {
        style: r.checkboard
      }, o.createElement(u.default, {
        renderers: this.props.renderers
      })), o.createElement("div", {
        style: r.gradient
      }), o.createElement("div", {
        style: r.container,
        ref: function(t) {
          return e.container = t
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, o.createElement("div", {
        style: r.pointer
      }, this.props.pointer ? o.createElement(this.props.pointer, this.props) : o.createElement("div", {
        style: r.slider
      }))))
    }
  }]), t
}(n.PureComponent || n.Component)