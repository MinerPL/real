"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
}), s("222007"), s("808653"), s("424973");
var a = s("37983"),
  n = s("884691"),
  l = s("448105"),
  i = s.n(l),
  r = s("77078"),
  o = s("6466");
class d extends n.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      popoutProps: s,
      renderValue: n,
      className: l
    } = this.props;
    return (0, a.jsx)(r.Popout, {
      ...s,
      renderPopout: this.renderPopout,
      children: s => (0, a.jsx)(r.Clickable, {
        ...s,
        className: l,
        children: (0, a.jsx)(o.default, {
          label: e,
          value: t,
          renderValue: n
        })
      })
    })
  }
  constructor(...e) {
    super(...e), this.renderItems = e => {
      let {
        items: t,
        renderItem: s
      } = this.props;
      return t.reduce((t, a, n) => (i(e.toLowerCase(), a.label.toLowerCase()) && t.push(s(a, n)), t), [])
    }, this.renderPopout = e => {
      let {
        closePopout: t
      } = e, {
        placeholder: s,
        popoutClassName: n,
        onChange: l,
        value: i
      } = this.props;
      return (0, a.jsx)(r.ComboboxPopout, {
        className: n,
        placeholder: s,
        value: new Set([i.value]),
        onChange: l,
        onClose: t,
        children: e => this.renderItems(e)
      })
    }
  }
}
var u = d