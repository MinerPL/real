"use strict";
a.r(t), a.d(t, {
  default: function() {
    return m
  }
});
var r = a("37983"),
  n = a("884691"),
  i = a("917351"),
  l = a.n(i),
  s = a("77078"),
  o = a("245622"),
  d = a("266331"),
  u = a("782340");
class c extends n.PureComponent {
  render() {
    let {
      screenshare: e
    } = this.props;
    if (null == e) return (0, r.jsx)(s.Spinner, {
      type: s.Spinner.Type.SPINNING_CIRCLE
    });
    let t = l.map(e, (e, t) => {
      if (!(d.hidden[t] || void 0 === e)) return (0, r.jsx)(d.Item, {
        label: t,
        value: e
      }, t)
    });
    return (0, r.jsx)(s.FormSection, {
      tag: s.FormTitleTags.H2,
      title: u.default.Messages.RTC_DEBUG_SCREENSHARE,
      children: (0, o.renderTwoColumns)(t)
    })
  }
}
var m = c