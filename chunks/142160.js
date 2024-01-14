"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
}), s("222007");
var l = s("37983"),
  a = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("474293"),
  o = s("360867");
let d = {
    XSMALL: o.xsmall,
    SMALL: o.small,
    MEDIUM: o.medium,
    LARGE: o.large
  },
  u = {
    DEFAULT: "default",
    STATIC: "static"
  };
class c extends a.PureComponent {
  render() {
    let {
      size: e,
      src: t,
      srcHover: s,
      className: a,
      ...n
    } = this.props, {
      hovered: d
    } = this.state, u = this.getMode();
    return (0, l.jsx)("button", {
      className: i((0, r.getClass)(o, "iconButton", u), a, e),
      style: {
        backgroundImage: "url('".concat(d && null != s ? s : t, "')")
      },
      onMouseEnter: this.handleHover,
      onFocus: this.handleHover,
      onMouseLeave: this.handleBlur,
      onBlur: this.handleBlur,
      ...n
    })
  }
  constructor(...e) {
    super(...e), this.state = {
      hovered: !1
    }, this.getMode = () => null != this.props.srcHover ? u.STATIC : u.DEFAULT, this.handleHover = e => {
      let {
        onMouseEnter: t
      } = this.props;
      null == t || t(e), !this.state.hovered && this.setState({
        hovered: !0
      })
    }, this.handleBlur = e => {
      let {
        onMouseLeave: t
      } = this.props;
      null == t || t(e), this.state.hovered && this.setState({
        hovered: !1
      })
    }
  }
}
c.Sizes = d, c.defaultProps = {
  size: d.MEDIUM,
  disabled: !1
};
var h = c