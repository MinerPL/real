"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("77078"),
  i = n("6466");
class r extends l.PureComponent {
  render() {
    let {
      label: e,
      value: t,
      renderValue: n,
      className: l,
      popoutProps: r
    } = this.props;
    return (0, a.jsx)(s.Popout, {
      ...r,
      renderPopout: this.renderPopout,
      children: (r, o) => {
        let {
          isShown: u
        } = o;
        return (0, a.jsx)(s.Clickable, {
          ...r,
          className: l,
          "aria-haspopup": "listbox",
          "aria-expanded": u,
          children: (0, a.jsx)(i.default, {
            label: e,
            value: t,
            renderValue: n
          })
        })
      }
    })
  }
  constructor(...e) {
    super(...e), this.renderPopout = e => {
      let {
        closePopout: t
      } = e, {
        options: n,
        value: l,
        renderOption: s,
        popoutClassName: r,
        scroller: o
      } = this.props;
      return (0, a.jsx)(i.QuickSelectPopout, {
        scroller: !!o,
        className: r,
        options: n,
        value: l,
        renderOption: s,
        onChange: e => {
          this.handleChange(e), t()
        }
      })
    }, this.handleChange = e => {
      let {
        onChange: t
      } = this.props;
      null == t || t(e)
    }
  }
}
var o = r