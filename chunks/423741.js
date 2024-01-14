"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("222007");
var i = n("37983"),
  a = n("884691"),
  l = n("446674"),
  s = n("77078"),
  o = n("539405"),
  r = n("901165"),
  d = n("476765"),
  u = n("101698"),
  c = n("6791"),
  f = n("49111"),
  h = n("782340"),
  p = n("482096");
let g = Object.values(c.OpacityBounds).map(e => 100 * e),
  m = (0, d.uid)();
class E extends a.PureComponent {
  handleUpdateBackgroundOpacity(e) {
    o.default.setTextWidgetOpacity((0, u.default)(e / 100)), o.default.track(f.AnalyticEvents.OVERLAY_SETTINGS_UPDATED, {
      text_opacity_slider: e
    })
  }
  handlePreviewBackgroundOpacity(e) {
    o.default.setTextWidgetOpacity((0, u.default)(e / 100))
  }
  render() {
    return (0, i.jsxs)("div", {
      className: p.container,
      children: [(0, i.jsx)(s.FormTitle, {
        id: m,
        tag: s.FormTitleTags.H5,
        className: p.title,
        children: h.default.Messages.FORM_LABEL_OVERLAY_CHAT_OPACITY
      }), (0, i.jsx)("div", {
        className: p.sliderContainer,
        children: (0, i.jsx)(s.Slider, {
          mini: !0,
          initialValue: this.initialValue,
          defaultValue: this.initialValue,
          minValue: g[0],
          maxValue: g[g.length - 1],
          handleSize: 10,
          onValueChange: this.handleUpdateBackgroundOpacity,
          asValueChanges: this.handlePreviewBackgroundOpacity,
          markers: g,
          onMarkerRender: f.NOOP,
          equidistant: !0,
          stickToMarkers: !0,
          "aria-labelledby": m
        })
      })]
    })
  }
  constructor(...e) {
    super(...e), this.initialValue = 100 * this.props.opacity
  }
}
var S = l.default.connectStores([r.default], () => ({
  opacity: r.default.getTextWidgetOpacity()
}))(E)