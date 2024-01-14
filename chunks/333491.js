"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
}), n("222007");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("458960"),
  o = n("65597"),
  u = n("206230"),
  d = n("979268"),
  c = n("520899"),
  f = n("954038");
class E extends a.PureComponent {
  componentDidUpdate(e) {
    e.count < this.props.count && !this.props.reducedMotion && r.default.sequence([r.default.timing(this.animationScale, {
      toValue: 1.8,
      duration: 300
    }), r.default.timing(this.animationScale, {
      toValue: 1,
      duration: 200
    })]).start()
  }
  render() {
    let {
      count: e,
      className: t
    } = this.props;
    return 0 === e ? null : (0, l.jsx)(r.default.div, {
      className: i(f.badge, t),
      style: {
        transform: [{
          scale: this.animationScale
        }]
      },
      children: e
    })
  }
  constructor(...e) {
    super(...e), this.animationScale = new r.default.Value(1)
  }
}

function h(e) {
  let {
    className: t
  } = e, {
    showReminders: n
  } = d.default.useExperiment({
    location: "f79435_1"
  }, {
    autoTrackExposure: !1
  }), a = (0, o.default)([c.default], () => n ? c.default.getOverdueMessageReminderCount() : 0, [n]), s = (0, o.default)([u.default], () => u.default.useReducedMotion);
  return n ? (0, l.jsx)(E, {
    count: a,
    className: t,
    reducedMotion: s
  }) : null
}