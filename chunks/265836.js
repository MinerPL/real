"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var s = n("37983"),
  i = n("884691"),
  l = n("862337");
class r extends i.Component {
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
    var n, s, i, l;
    let {
      props: r
    } = this;
    let a = (n = r, s = this.state, !n.disable && !(s.hovered && n.pauseOnHover));
    let u = (i = e, l = t, !i.disable && !(l.hovered && i.pauseOnHover));
    a && !u || e.interval !== r.interval ? this.startTimer() : !a && u && this.stopTimer()
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
    } = this.props, i = n ? null : {
      onMouseEnter: this.handlePause,
      onFocus: this.handlePause,
      onMouseLeave: this.handleResume,
      onBlur: this.handleResume
    };
    return (0, s.jsx)("div", {
      ...i,
      className: t,
      children: e
    })
  }
  constructor(...e) {
    super(...e), this.timer = new l.Interval, this.state = {
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
r.defaultProps = {
  disable: !1,
  pauseOnHover: !1
};
var a = r