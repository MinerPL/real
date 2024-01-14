"use strict";
n("70102"), n("854508"), n("781738"), Object.defineProperty(e, "__esModule", {
  value: !0
});
var o = function() {
    function t(t, e) {
      for (var n = 0; n < e.length; n++) {
        var o = e[n];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }
    return function(e, n, o) {
      return n && t(e.prototype, n), o && t(e, o), e
    }
  }(),
  i = function(t) {
    return t && t.__esModule ? t : {
      default: t
    }
  }(n("884691")),
  s = n("315401"),
  Gamepad = function(t) {
    function Gamepad(t, e) {
      ! function(t, e) {
        if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
      }(this, Gamepad);
      var n = function(t, e) {
        if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e && ("object" == typeof e || "function" == typeof e) ? e : t
      }(this, (Gamepad.__proto__ || Object.getPrototypeOf(Gamepad)).call(this, t, e));
      return n.padState = {
        connected: !1,
        buttons: {
          A: !1,
          B: !1,
          X: !1,
          Y: !1,
          LB: !1,
          LT: !1,
          LS: !1,
          RB: !1,
          RT: !1,
          RS: !1,
          Start: !1,
          Back: !1,
          DPadUp: !1,
          DPadRight: !1,
          DPadDown: !1,
          DPadLeft: !1
        },
        axis: {
          LeftStickX: 0,
          LeftStickY: 0,
          RightStickX: 0,
          RightStickY: 0,
          RightTrigger: 0,
          LeftTrigger: 0
        }
      }, n
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
    }(Gamepad, t), o(Gamepad, [{
      key: "componentDidMount",
      value: function() {
        this.mounted = !0, window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.mounted = !1
      }
    }, {
      key: "updateGamepad",
      value: function() {
        if (this.mounted) {
          var t = this.props.gamepadIndex,
            e = navigator.getGamepads();
          if (e.length && e.length > t && e[t]) {
            var n = e[t];
            !this.padState.connected && (this.padState.connected = !0, this.props.onConnect(t)), this.updateAllButtons(n), this.updateAllAxis(n)
          } else this.padState.connected && (this.padState.connected = !1, this.props.onDisconnect(t));
          window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
        }
      }
    }, {
      key: "updateAllButtons",
      value: function(t) {
        for (var e = 0; e < t.buttons.length; ++e) {
          var n = t.buttons[e].pressed,
            o = t.buttons[e].value,
            i = this.buttonIndexToButtonName(e);
          this.updateButton(i, n);
          var s = this.buttonIndexToAxisName(e);
          this.updateAxis(s, o)
        }
      }
    }, {
      key: "updateButton",
      value: function(t, e) {
        void 0 === this.padState.buttons[t] ? console.error("Unknown button " + t) : this.padState.buttons[t] !== e && (this.padState.buttons[t] = e, this.props.onButtonChange(t, e), this.props["onButton" + (e ? "Down" : "Up")](t), e && this.props["on" + t.replace("DPad", "")]())
      }
    }, {
      key: "updateAllAxis",
      value: function(t) {
        for (var e = 0; e < t.axes.length; ++e) {
          var n = this.axisIndexToAxisName(e);
          t.axes[e], this.updateAxis(n, t.axes[e])
        }
      }
    }, {
      key: "updateAxis",
      value: function(t, e) {
        if (t && null != e) {
          var n = "-" === t[0],
            o = e * (n ? -1 : 1);
          if (Math.abs(o) < this.props.deadZone && (o = 0), n && (t = t.substr(1)), this.padState.axis[t] !== o) {
            var i = this.padState.axis[t];
            this.padState.axis[t] = o, this.props.onAxisChange(t, o, i), "LeftStickX" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onRight(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onLeft()), "LeftStickY" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onUp(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onDown())
          }
        }
      }
    }, {
      key: "buttonIndexToButtonName",
      value: function(t) {
        var e = this.props.layout;
        return e.buttons && e.buttons.length >= t + 1 ? e.buttons[t] : null
      }
    }, {
      key: "buttonIndexToAxisName",
      value: function(t) {
        var e = this.props.layout;
        return e.buttonAxis && e.buttonAxis.length >= t + 1 ? e.buttonAxis[t] : null
      }
    }, {
      key: "axisIndexToAxisName",
      value: function(t) {
        var e = this.props.layout;
        return e.axis && e.axis.length >= t + 1 ? e.axis[t] : null
      }
    }, {
      key: "render",
      value: function() {
        return i.default.Children.only(this.props.children)
      }
    }]), Gamepad
  }(i.default.Component);
Gamepad.defaultProps = {
  layout: s.XBOX,
  stickThreshold: .5,
  deadZone: .08,
  gamepadIndex: 0,
  onConnect: function() {},
  onDisconnect: function() {},
  onButtonDown: function() {},
  onButtonUp: function() {},
  onButtonChange: function() {},
  onAxisChange: function() {},
  onA: function() {},
  onB: function() {},
  onX: function() {},
  onY: function() {},
  onStart: function() {},
  onBack: function() {},
  onLT: function() {},
  onRT: function() {},
  onLB: function() {},
  onRB: function() {},
  onLS: function() {},
  onRS: function() {},
  onUp: function() {},
  onDown: function() {},
  onLeft: function() {},
  onRight: function() {}
}, e.default = Gamepad