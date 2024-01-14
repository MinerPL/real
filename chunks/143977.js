"use strict";
r("70102"), r("854508"), Object.defineProperty(t, "__esModule", {
  value: !0
}), t.Saturation = void 0;
var n = function() {
    function e(e, t) {
      for (var r = 0; r < t.length; r++) {
        var n = t[r];
        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
      }
    }
    return function(t, r, n) {
      return r && e(t.prototype, r), n && e(t, n), t
    }
  }(),
  o = r("884691"),
  a = c(o),
  i = c(r("849122")),
  u = c(r("229042")),
  l = function(e) {
    if (e && e.__esModule) return e;
    var t = {};
    if (null != e)
      for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
    return t.default = e, t
  }(r("540569"));

function c(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var s = t.Saturation = function(e) {
  function t(e) {
    ! function(e, t) {
      if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }(this, t);
    var r = function(e, t) {
      if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t && ("object" == typeof t || "function" == typeof t) ? t : e
    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
    return r.handleChange = function(e) {
      "function" == typeof r.props.onChange && r.throttle(r.props.onChange, l.calculateChange(e, r.props.hsl, r.container), e)
    }, r.handleMouseDown = function(e) {
      r.handleChange(e);
      var t = r.getContainerRenderWindow();
      t.addEventListener("mousemove", r.handleChange), t.addEventListener("mouseup", r.handleMouseUp)
    }, r.handleMouseUp = function() {
      r.unbindEventListeners()
    }, r.throttle = (0, u.default)(function(e, t, r) {
      e(t, r)
    }, 50), r
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
  }(t, e), n(t, [{
    key: "componentWillUnmount",
    value: function() {
      this.throttle.cancel(), this.unbindEventListeners()
    }
  }, {
    key: "getContainerRenderWindow",
    value: function() {
      for (var e = this.container, t = window; !t.document.contains(e) && t.parent !== t;) t = t.parent;
      return t
    }
  }, {
    key: "unbindEventListeners",
    value: function() {
      var e = this.getContainerRenderWindow();
      e.removeEventListener("mousemove", this.handleChange), e.removeEventListener("mouseup", this.handleMouseUp)
    }
  }, {
    key: "render",
    value: function() {
      var e = this,
        t = this.props.style || {},
        r = t.color,
        n = t.white,
        o = t.black,
        u = t.pointer,
        l = t.circle,
        c = (0, i.default)({
          default: {
            color: {
              absolute: "0px 0px 0px 0px",
              background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
              borderRadius: this.props.radius
            },
            white: {
              absolute: "0px 0px 0px 0px",
              borderRadius: this.props.radius
            },
            black: {
              absolute: "0px 0px 0px 0px",
              boxShadow: this.props.shadow,
              borderRadius: this.props.radius
            },
            pointer: {
              position: "absolute",
              top: -(100 * this.props.hsv.v) + 100 + "%",
              left: 100 * this.props.hsv.s + "%",
              cursor: "default"
            },
            circle: {
              width: "4px",
              height: "4px",
              boxShadow: "0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)",
              borderRadius: "50%",
              cursor: "hand",
              transform: "translate(-2px, -2px)"
            }
          },
          custom: {
            color: r,
            white: n,
            black: o,
            pointer: u,
            circle: l
          }
        }, {
          custom: !!this.props.style
        });
      return a.default.createElement("div", {
        style: c.color,
        ref: function(t) {
          return e.container = t
        },
        onMouseDown: this.handleMouseDown,
        onTouchMove: this.handleChange,
        onTouchStart: this.handleChange
      }, a.default.createElement("style", null, "\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        "), a.default.createElement("div", {
        style: c.white,
        className: "saturation-white"
      }, a.default.createElement("div", {
        style: c.black,
        className: "saturation-black"
      }), a.default.createElement("div", {
        style: c.pointer
      }, this.props.pointer ? a.default.createElement(this.props.pointer, this.props) : a.default.createElement("div", {
        style: c.circle
      }))))
    }
  }]), t
}(o.PureComponent || o.Component);
t.default = s