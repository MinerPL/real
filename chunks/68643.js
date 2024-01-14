"use strict";
n.r(t), n.d(t, {
  Shaker: function() {
    return l
  }
}), n("222007");
var i = n("37983"),
  r = n("884691"),
  s = n("917351"),
  a = n.n(s),
  o = n("206230");
class l extends r.Component {
  componentDidMount() {
    this.props.isShaking && this.startShaking()
  }
  componentDidUpdate(e) {
    this.props.isShaking !== e.isShaking && this.setShaking(this.props.isShaking)
  }
  setShaking(e) {
    e ? this.startShaking() : this.stopShaking()
  }
  startShaking() {
    this.shouldRenderFrame = !0, this.animationFrame = requestAnimationFrame(this.animate)
  }
  stopShaking() {
    null != this.animationFrame && cancelAnimationFrame(this.animationFrame);
    let e = this.ref.current;
    null != e && (e.style.transform = "")
  }
  render() {
    let {
      className: e,
      children: t
    } = this.props;
    return (0, i.jsx)("div", {
      className: e,
      ref: this.ref,
      children: t
    })
  }
  constructor(...e) {
    super(...e), this.ref = r.createRef(), this.shouldRenderFrame = !0, this.animate = () => {
      let {
        intensity: e,
        isShaking: t
      } = this.props;
      if (!t) return;
      let n = this.ref.current;
      if (this.shouldRenderFrame && null != n) {
        let t = a.random(-e, e, !0),
          i = a.random(-e, e, !0);
        n.style.transform = o.default.useReducedMotion ? "" : "translate3d(".concat(t, "px,").concat(i, "px,0px)")
      }
      this.shouldRenderFrame = !this.shouldRenderFrame, this.animationFrame = requestAnimationFrame(this.animate)
    }
  }
}
l.defaultProps = {
  isShaking: !0,
  intensity: 5
}