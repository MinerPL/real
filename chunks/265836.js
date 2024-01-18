"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("862337");
class i extends l.Component {
  static getDerivedStateFromProps(e) {
    return e.disable ? {
      hovered: !1
    } : null
  }
  componentDidMount() {
    let {
      pauseOnHover: e,
      disable: t
    } = this.props, n = this.state.hovered && e;
    !t && !n && this.startTimer()
  }
  componentWillUnmount() {
    this.stopTimer()
  }
  componentDidUpdate(e, t) {
    var n, s, l, a;
    let {
      props: i
    } = this;
    let r = (n = i, s = this.state, !n.disable && !(s.hovered && n.pauseOnHover));
    let o = (l = e, a = t, !l.disable && !(a.hovered && l.pauseOnHover));
    r && !o || e.interval !== i.interval ? this.startTimer() : !r && o && this.stopTimer()
  }
  startTimer() {
    let {
      interval: e,
      onInterval: t,
      disable: n
    } = this.props;
    !n && this.timer.start(e, () => {
      t()
    })
  }
  stopTimer() {
    this.timer.stop()
  }
  render() {
    let {
      children: e,
      className: t,
      disable: n
    } = this.props, l = n ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, s.jsx)("div", {
      ...l,
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), this.timer = new a.Interval, this.state = {
      hovered: !1
    }, this.handlePause = () => {
      !this.state.hovered && this.setState({
        hovered: !0
      })
    }, this.handleResume = () => {
      this.setState({
        hovered: !1
      })
    }
  }
}
i.defaultProps = {
  disable: !1,
  pauseOnHover: !1
};
var r = i