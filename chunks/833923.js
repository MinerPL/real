"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("222007");
var a = n("37983"),
  s = n("884691"),
  i = n("917351"),
  l = n.n(i),
  r = n("284679"),
  o = n("130651");
class u extends s.PureComponent {
  onDataUpdate(e, t) {
    let {
      maxValue: n,
      data: a,
      animate: s
    } = this.props, i = null == e || e.data !== t.data && !l.isEqual(e.data, t.data);
    if (i && (this.dataChangedAt = performance.now(), this.maxValue = null != n ? n : Math.max(...a)), i || null == e || !e.animate && s || e.color !== this.props.color) {
      let e = r.hexToRgb(this.props.color);
      this.fillColor = "rgba(".concat(e.r, ", ").concat(e.g, ", ").concat(e.b, ", 0.5)"), window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation)
    }
  }
  componentDidMount() {
    this.animationFrameRequestId = 0, this.onDataUpdate(null, this.props)
  }
  componentDidUpdate(e) {
    this.onDataUpdate(e, this.props)
  }
  componentWillUnmount() {
    window.cancelAnimationFrame(this.animationFrameRequestId), this.animationFrameRequestId = 0
  }
  render() {
    let {
      className: e,
      pixelWidth: t,
      pixelHeight: n
    } = this.props;
    return (0, a.jsx)("div", {
      className: e,
      children: (0, a.jsx)("canvas", {
        ref: this.canvas,
        className: o.canvas,
        width: t,
        height: n
      })
    })
  }
  constructor(...e) {
    super(...e), this.canvas = s.createRef(), this.updateAnimation = e => {
      let t, n;
      let a = this.canvas.current;
      if (null == a) return;
      let {
        data: s,
        updateInterval: i,
        color: l,
        numUpdatesToShow: o,
        lineWidth: u,
        animate: d,
        gradientStopColor: c
      } = this.props;
      if (s.length < 2) return;
      let f = Math.max(Math.min((e - this.dataChangedAt) / i, 1), 0),
        E = a.getContext("2d"),
        _ = this.maxValue;
      E.strokeStyle = l, E.lineWidth = u;
      let h = a.height - E.lineWidth,
        C = E.createLinearGradient(0, 0, 0, h);
      if (null != c) C.addColorStop(0, c);
      else {
        let {
          r: e,
          g: t,
          b: n
        } = r.hexToRgb(l);
        C.addColorStop(0, "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"))
      }
      C.addColorStop(1, this.fillColor), E.fillStyle = C;
      let I = s.length >= o ? o : s.length;
      E.setTransform(1, 0, 0, -1, 0, a.height), E.clearRect(0, 0, a.width, a.height), E.translate(0, .5 * E.lineWidth);
      let T = Math.floor(a.width / (I - 3)),
        S = .5 * T;
      E.translate(T - T * f, 0), E.beginPath();
      let m = -T;
      s.forEach((e, a) => {
        t = {
          x: m,
          y: h * e / _
        }, 0 === a ? E.moveTo(t.x, t.y) : E.bezierCurveTo(n.x + S, n.y, t.x - S, t.y, t.x, t.y), n = t, m += T
      }), E.stroke(), E.lineTo(m - T, 0), E.lineTo(0, 0), E.fill(), d && f < 1 && (this.animationFrameRequestId = window.requestAnimationFrame(this.updateAnimation))
    }
  }
}
u.defaultProps = {
  animate: !0
};
var d = u