"use strict";
n.r(t), n.d(t, {
  default: function() {
    return a
  }
}), n("222007");
var i, a, l = n("884691"),
  s = n("917351"),
  o = n.n(s),
  r = n("817736"),
  d = n("118810"),
  u = n("233736"),
  c = n("862337"),
  f = n("539405"),
  h = n("658530"),
  p = n("773336"),
  g = n("50885");
let m = {
    x: 0,
    y: 0
  },
  E = !1;

function S(e) {
  let {
    clientX: t,
    clientY: n
  } = e;
  E = !0, m.x = t, m.y = n
}
let v = new Map;

function y(e, t) {
  if (null == t) v.delete(e), 0 === v.size && (window.removeEventListener("mousemove", S), E = !1);
  else {
    let n = v.get(e);
    if (null != n && (0, u.default)(n.zone, t.zone)) return;
    0 === v.size && window.addEventListener("mousemove", S), v.set(e, t)
  }
  if (p.isPlatformEmbedded) {
    f.default.setClickZones(Array.from(v.values()).map(e => {
      let {
        zone: t
      } = e, n = {
        name: t.name,
        left: t.left / window.innerWidth,
        top: t.top / window.innerHeight,
        right: t.right / window.innerWidth,
        bottom: t.bottom / window.innerHeight
      };
      return n
    }));
    let e = g.default.requireModule("discord_overlay2");
    e.broadcastCommand({
        message: "set_click_zones",
        zones: Array.from(v.values()).map(e => {
          let {
            zone: t
          } = e;
          return t
        })
      }),
      function() {
        if (C) return;
        let e = g.default.requireModule("discord_overlay2");
        e.setClickZoneCallback((e, t, n) => {
          let i = v.get(e);
          null != i && (!E && (m.x = t, m.y = n), i.instance.click())
        }), C = !0
      }()
  }
}
let C = !1;
(i = class extends l.PureComponent {
  componentDidMount() {
    this.props.observe ? this.observeZone() : this.updateZone()
  }
  componentWillUnmount() {
    this.interval.stop(), y(this.zone, null)
  }
  componentDidUpdate(e) {
    let {
      observe: t
    } = this.props;
    t !== e.observe && (t ? this.observeZone() : this.interval.stop())
  }
  render() {
    return l.Children.only(this.props.children)
  }
  observeZone() {
    this.updateZone(), this.interval.start(this.props.observeInterval, this.updateZone)
  }
  click() {
    let e = (0, h.createMouseEvent)("click", m.x, m.y);
    (0, h.dispatchEventToPoint)(e, m.x, m.y)
  }
  constructor(...e) {
    super(...e), this.zone = o.uniqueId("ClickArea"), this.interval = new c.Interval, this.updateZone = () => {
      let e = (0, r.findDOMNode)(this);
      if ((0, d.isElement)(e)) {
        let {
          left: t,
          top: n,
          right: i,
          bottom: a
        } = e.getBoundingClientRect();
        y(this.zone, {
          instance: this,
          zone: {
            name: this.zone,
            left: Math.ceil(t),
            top: Math.ceil(n),
            right: Math.ceil(i),
            bottom: Math.ceil(a)
          }
        })
      }
    }
  }
}).defaultProps = {
  observe: !0,
  observeInterval: 1e3
}, a = i