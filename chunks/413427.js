"use strict";
n.r(t), n.d(t, {
  default: function() {
    return s
  }
}), n("222007");
var s, a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  r = n.n(i),
  o = n("49111"),
  u = n("624067");

function d() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    t = arguments.length > 1 ? arguments[1] : void 0,
    n = arguments.length > 2 ? arguments[2] : void 0,
    s = "" !== e ? e : null != n.value && "" !== n.value ? n.value : "";
  return (null == t.minLen || !(s.length < t.minLen)) && (null == t.maxLen || !(s.length > t.maxLen)) && !0
}
s = class extends l.Component {
  componentDidUpdate(e, t) {
    if (t.focused !== this.state.focused && this.state.focused) {
      var n;
      null === (n = this.inputRef.current) || void 0 === n || n.focus()
    }
    null !== this.props.value && this.props.value !== e.value && this.props.value !== this.state.value && d(this.props.value, this.props, this.state) && this.setState({
      value: this.props.value
    })
  }
  render() {
    let e;
    let {
      className: t,
      name: n,
      autoComplete: s,
      maxLen: l
    } = this.props, i = {
      position: "absolute",
      left: 0,
      width: "100%",
      opacity: 1
    };
    return this.state.focused ? e = {
      visibility: "hidden",
      pointerEvents: "none"
    } : i.opacity = 0, (0, a.jsx)("div", {
      className: r(u.outer, t),
      children: (0, a.jsxs)("div", {
        className: u.container,
        children: [(0, a.jsx)("input", {
          type: "text",
          className: u.input,
          ref: this.inputRef,
          style: i,
          value: this.state.value,
          name: n,
          maxLength: l,
          autoComplete: s,
          onKeyPress: this.handleKeyPress,
          onChange: this.handleChange,
          onFocus: this.handleFocus,
          onBlur: this.handleBlur
        }), (0, a.jsx)("div", {
          className: u.input,
          style: e,
          children: this.state.value
        })]
      })
    })
  }
  constructor(...e) {
    super(...e), this.inputRef = l.createRef(), this.state = {
      focused: !1,
      lastGoodValue: this.props.value,
      value: this.props.value
    }, this.handleChange = e => {
      let {
        onChange: t
      } = this.props;
      this.setState({
        value: e.currentTarget.value
      }), null == t || t(e)
    }, this.handleFocus = e => {
      let {
        onFocus: t
      } = this.props;
      this.setState({
        focused: !0,
        lastGoodValue: e.currentTarget.value
      }), null == t || t(e)
    }, this.handleBlur = e => {
      if (d("", this.props, this.state)) {
        this.setState({
          focused: !1
        });
        let {
          onBlur: t
        } = this.props;
        null == t || t(e)
      } else this.setState({
        focused: !1,
        value: this.state.lastGoodValue
      })
    }, this.handleKeyPress = e => {
      if (e.which === o.KeyboardKeys.ENTER) {
        var t;
        null === (t = this.inputRef.current) || void 0 === t || t.blur()
      }
    }
  }
}