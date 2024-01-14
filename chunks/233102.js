"use strict";
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("446674"),
  r = n("696336"),
  d = n("162771"),
  u = n("959479"),
  c = n("560995"),
  f = n("246458"),
  h = n("637842"),
  p = n("890291"),
  g = n("758547"),
  m = n("782340"),
  E = n("893908");

function S(e) {
  let {
    closePopout: t
  } = e;
  return (0, i.jsx)(h.default, {
    onClose: t
  })
}
class v extends a.PureComponent {
  render() {
    let {
      selectedGuildId: e,
      locked: t,
      contained: n
    } = this.props, a = null != e ? (0, i.jsx)(f.default, {
      guildId: e,
      onDragStart: this.onDragStart
    }, e) : (0, i.jsx)(g.default, {
      title: m.default.Messages.DIRECT_MESSAGES,
      renderSettings: S,
      onDragStart: this.onDragStart,
      children: (0, i.jsx)(p.default, {})
    }), l = n ? "div" : c.default;
    return (0, i.jsxs)(l, {
      className: s(E.base, {
        [E.widget]: !n
      }),
      children: [(0, i.jsx)(r.default, {
        isOverlay: !0,
        disableAppDownload: !0,
        isVisible: !t
      }), a]
    })
  }
  constructor(...e) {
    super(...e), this.onDragStart = e => {
      let {
        dragStart: t
      } = this.props;
      t(u.Operations.MOVE, e.clientX, e.clientY)
    }
  }
}
v.defaultProps = {
  contained: !1
};
var y = o.default.connectStores([d.default], () => ({
  selectedGuildId: d.default.getGuildId()
}))(v)