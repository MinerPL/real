"use strict";
n.r(t), n.d(t, {
  TestModeSKUButtonEnums: function() {
    return E
  },
  default: function() {
    return T
  }
}), n("222007");
var s = n("37983"),
  l = n("884691"),
  a = n("446674"),
  i = n("77078"),
  r = n("272030"),
  o = n("741130"),
  u = n("299285"),
  d = n("552712"),
  c = n("271560"),
  f = n("782340");
let E = {
  DropdownSizes: o.default.DropdownSizes,
  Sizes: o.default.Sizes,
  Colors: o.default.Colors,
  Looks: o.default.Looks
};
class _ extends l.PureComponent {
  render() {
    let {
      skus: e,
      children: t,
      applicationId: n,
      primarySKU: l,
      onSKUSelect: a,
      ...i
    } = this.props;
    return (0, s.jsx)(o.default, {
      onClick: this.handleClick,
      onDropdownClick: e.length > 0 ? this.handleContextMenu : null,
      onContextMenu: e.length > 0 ? this.handleContextMenu : void 0,
      ...i,
      children: t
    })
  }
  constructor(...e) {
    super(...e), this.renderContextMenu = () => {
      let {
        skus: e,
        onSKUSelect: t,
        onMenuSelect: n
      } = this.props;
      return (0, s.jsx)(i.Menu, {
        onSelect: n,
        navId: "test-skus",
        "aria-label": f.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: r.closeContextMenu,
        children: e.map(e => (0, s.jsx)(i.MenuItem, {
          id: "".concat(e.id),
          label: e.name,
          action: () => {
            null == t || t(e)
          }
        }, "".concat(e.id)))
      })
    }, this.handleContextMenu = e => {
      e.stopPropagation(), r.openContextMenu(e, this.renderContextMenu)
    }, this.handleClick = () => {
      let {
        onSKUSelect: e,
        primarySKU: t
      } = this.props;
      null != t && (null == e || e(t))
    }
  }
}
var T = a.default.connectStores([d.default, u.default], e => {
  var t;
  let {
    applicationId: n
  } = e, s = (0, c.getPrimarySKUForApplication)(n, u.default, d.default);
  return {
    skus: (null !== (t = d.default.getForApplication(n)) && void 0 !== t ? t : []).sort((e, t) => null != s && e.id === s.id ? -1 : null != s && t.id === s.id ? 1 : e.name >= t.name ? -1 : 1),
    primarySKU: s
  }
})(_)