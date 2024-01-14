"use strict";
s.r(t), s.d(t, {
  default: function() {
    return _
  }
});
var l = s("37983"),
  n = s("884691"),
  r = s("414456"),
  o = s.n(r),
  a = s("862337"),
  i = s("77078"),
  u = s("920700"),
  c = s("306160"),
  d = s("782340"),
  f = s("166392");
class E extends n.PureComponent {
  componentWillUnmount() {
    this._timeout.stop()
  }
  render() {
    let {
      isVertical: e,
      value: t,
      text: s,
      className: n,
      inputClassName: r
    } = this.props, {
      mode: a
    } = this.state, c = a === u.default.Modes.SUCCESS ? d.default.Messages.COPIED : s;
    return e ? (0, l.jsxs)("div", {
      className: o(n, a),
      children: [(0, l.jsx)(i.TextInput, {
        value: t,
        inputClassName: r
      }), (0, l.jsx)(i.Button, {
        className: f.button,
        onClick: this.handleCopy,
        size: i.Button.Sizes.MIN,
        color: this.getVerticalButtonColor(a),
        look: i.Button.Looks.FILLED,
        children: c
      })]
    }) : (0, l.jsx)(u.default, {
      ...this.props,
      onCopy: this.handleCopy,
      mode: a,
      text: c
    })
  }
  handleCopy() {
    let {
      onCopy: e,
      value: t,
      delay: s
    } = this.props, l = (0, c.copy)(t);
    this.setState({
      mode: l ? u.default.Modes.SUCCESS : u.default.Modes.ERROR
    }), this._timeout.start(s, () => this.setState({
      mode: u.default.Modes.DEFAULT
    })), null == e || e()
  }
  getVerticalButtonColor(e) {
    switch (e) {
      case u.default.Modes.SUCCESS:
        return i.Button.Colors.GREEN;
      case u.default.Modes.ERROR:
        return i.Button.Colors.RED;
      default:
        return i.Button.Colors.BRAND
    }
  }
  constructor(e) {
    super(e), this.state = {
      mode: u.default.Modes.DEFAULT
    }, this._timeout = new a.Timeout, this.handleCopy = this.handleCopy.bind(this)
  }
}
E.defaultProps = {
  isVertical: !1,
  delay: 300
};
var _ = E