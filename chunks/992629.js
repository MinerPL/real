"use strict";
n.r(e), n.d(e, {
  default: function() {
    return f
  }
}), n("222007");
var o = n("37983"),
  i = n("884691"),
  s = n("464934"),
  a = n("669491"),
  r = n("77078"),
  u = n("958638"),
  l = n("44930"),
  c = n("140014");
let d = {
  A: {
    Icon: u.default,
    color: a.default.unsafe_rawColors.PRIMARY_400.css
  },
  B: {
    Icon: l.default,
    color: a.default.unsafe_rawColors.RED_360.css
  }
};
class GamepadButton extends i.Component {
  render() {
    let {
      type: t,
      text: e,
      style: n,
      onClick: i
    } = this.props, s = t.Icon;
    return (0, o.jsxs)(r.Clickable, {
      className: c.gamepadButtonContainer,
      style: null != i ? {
        cursor: "pointer"
      } : void 0,
      onClick: i,
      children: [(0, o.jsx)(s, {
        className: n,
        color: t.color,
        backgroundColor: a.default.unsafe_rawColors.PRIMARY_600.css
      }), (0, o.jsx)("div", {
        className: c.gamepadButtonText,
        children: e
      })]
    })
  }
}
GamepadButton.A = d.A, GamepadButton.B = d.B;
class Gamepad extends i.PureComponent {
  render() {
    let {
      onAPressed: t,
      onBPressed: e,
      children: n
    } = this.props;
    if (null == n) return null;
    let a = i.cloneElement(i.Children.only(n), {
      hasGamepad: this.state.gamepadConnected
    });
    return (0, o.jsx)(s.default, {
      onA: t,
      onB: e,
      onConnect: this.setGamepadConnected,
      onDisconnect: this.setGamepadDisconnected,
      children: a
    })
  }
  constructor(...t) {
    super(...t), this.state = {
      gamepadConnected: !1
    }, this.setGamepadConnected = () => {
      this.setState({
        gamepadConnected: !0
      })
    }, this.setGamepadDisconnected = () => {
      this.setState({
        gamepadConnected: !1
      })
    }
  }
}
Gamepad.Button = GamepadButton;
var f = Gamepad