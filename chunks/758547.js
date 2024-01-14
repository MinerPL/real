"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var a = n("414456"),
  l = n.n(a),
  s = n("77078"),
  o = n("474571"),
  r = n("560995"),
  d = n("49111"),
  u = n("782340"),
  c = n("121162"),
  f = function(e) {
    let t;
    let {
      title: n,
      header: a,
      children: f,
      renderSettings: h,
      onDragStart: p
    } = e;
    return t = null != n ? (0, i.jsxs)(r.default.Bar, {
      className: l(c.header, c.draggableStartArea),
      onMouseDown: p,
      children: [(0, i.jsx)(r.default.Content, {
        className: l(c.headerTitle, c.draggableStartArea),
        dynamicSize: !0,
        children: n
      }), (0, i.jsx)(r.default.Content, {
        children: (0, i.jsx)(s.Popout, {
          position: "right",
          renderPopout: null != h ? h : d.NOOP,
          autoInvert: !1,
          children: e => (0, i.jsx)(r.default.Icon, {
            ...e,
            icon: o.default,
            label: u.default.Messages.SETTINGS
          })
        })
      })]
    }) : a, (0, i.jsxs)("div", {
      className: c.sidebar,
      children: [t, (0, i.jsx)("div", {
        className: c.children,
        children: f
      })]
    })
  }