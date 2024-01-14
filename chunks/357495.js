"use strict";
r("70102"), r("854508"), r("781738"), Object.defineProperty(t, "__esModule", {
  value: !0
}), t.EditableInput = void 0;
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
  a = u(o),
  i = u(r("849122"));

function u(e) {
  return e && e.__esModule ? e : {
    default: e
  }
}
var l = [38, 40],
  c = 1,
  s = t.EditableInput = function(e) {
    function t(e) {
      ! function(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
      }(this, t);
      var r = function(e, t) {
        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t && ("object" == typeof t || "function" == typeof t) ? t : e
      }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return r.handleBlur = function() {
        r.state.blurValue && r.setState({
          value: r.state.blurValue,
          blurValue: null
        })
      }, r.handleChange = function(e) {
        r.setUpdatedValue(e.target.value, e)
      }, r.handleKeyDown = function(e) {
        var t, n = Number(String(e.target.value).replace(/%/g, ""));
        if (!isNaN(n) && (t = e.keyCode, l.indexOf(t) > -1)) {
          var o = r.getArrowOffset(),
            a = 38 === e.keyCode ? n + o : n - o;
          r.setUpdatedValue(a, e)
        }
      }, r.handleDrag = function(e) {
        if (r.props.dragLabel) {
          var t = Math.round(r.props.value + e.movementX);
          t >= 0 && t <= r.props.dragMax && r.props.onChange && r.props.onChange(r.getValueObjectWithLabel(t), e)
        }
      }, r.handleMouseDown = function(e) {
        r.props.dragLabel && (e.preventDefault(), r.handleDrag(e), window.addEventListener("mousemove", r.handleDrag), window.addEventListener("mouseup", r.handleMouseUp))
      }, r.handleMouseUp = function() {
        r.unbindEventListeners()
      }, r.unbindEventListeners = function() {
        window.removeEventListener("mousemove", r.handleDrag), window.removeEventListener("mouseup", r.handleMouseUp)
      }, r.state = {
        value: String(e.value).toUpperCase(),
        blurValue: String(e.value).toUpperCase()
      }, r.inputId = "rc-editable-input-" + c++, r
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
      key: "componentDidUpdate",
      value: function(e, t) {
        this.props.value !== this.state.value && (e.value !== this.props.value || t.value !== this.state.value) && (this.input === document.activeElement ? this.setState({
          blurValue: String(this.props.value).toUpperCase()
        }) : this.setState({
          value: String(this.props.value).toUpperCase(),
          blurValue: !this.state.blurValue && String(this.props.value).toUpperCase()
        }))
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.unbindEventListeners()
      }
    }, {
      key: "getValueObjectWithLabel",
      value: function(e) {
        var t, r, n;
        return t = {}, r = this.props.label, n = e, r in t ? Object.defineProperty(t, r, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = n, t
      }
    }, {
      key: "getArrowOffset",
      value: function() {
        return this.props.arrowOffset || 1
      }
    }, {
      key: "setUpdatedValue",
      value: function(e, t) {
        var r = this.props.label ? this.getValueObjectWithLabel(e) : e;
        this.props.onChange && this.props.onChange(r, t), this.setState({
          value: e
        })
      }
    }, {
      key: "render",
      value: function() {
        var e = this,
          t = (0, i.default)({
            default: {
              wrap: {
                position: "relative"
              }
            },
            "user-override": {
              wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
              input: this.props.style && this.props.style.input ? this.props.style.input : {},
              label: this.props.style && this.props.style.label ? this.props.style.label : {}
            },
            "dragLabel-true": {
              label: {
                cursor: "ew-resize"
              }
            }
          }, {
            "user-override": !0
          }, this.props);
        return a.default.createElement("div", {
          style: t.wrap
        }, a.default.createElement("input", {
          id: this.inputId,
          style: t.input,
          ref: function(t) {
            return e.input = t
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: "false"
        }), this.props.label && !this.props.hideLabel ? a.default.createElement("label", {
          htmlFor: this.inputId,
          style: t.label,
          onMouseDown: this.handleMouseDown
        }, this.props.label) : null)
      }
    }]), t
  }(o.PureComponent || o.Component);
t.default = s