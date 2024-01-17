"use strict";
s.r(t), s.d(t, {
  TestModeStoreListingButtonEnums: function() {
    return c
  },
  default: function() {
    return E
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("77078"),
  r = s("272030"),
  u = s("741130"),
  o = s("698041"),
  d = s("782340");
let c = {
  DropdownSizes: u.default.DropdownSizes,
  Sizes: u.default.Sizes,
  Colors: u.default.Colors,
  Looks: u.default.Looks
};
class _ extends n.PureComponent {
  render() {
    let {
      storeListings: e,
      primaryStoreListing: t,
      skuId: s,
      onStoreListingSelect: n,
      currentStoreListingId: l,
      ...i
    } = this.props, r = null != t ? 1 : 0;
    return (r += e.length) < 2 ? null : (0, a.jsx)(u.default, {
      onClick: this.handleContextMenu,
      onDropdownClick: this.handleContextMenu,
      onContextMenu: this.handleContextMenu,
      ...i,
      children: d.default.Messages.APPLICATION_TEST_MODE_VIEW_OTHER_LISTINGS
    })
  }
  constructor(...e) {
    super(...e), this.renderContextMenu = () => {
      let {
        storeListings: e,
        onStoreListingSelect: t,
        currentStoreListingId: s,
        onMenuSelect: n
      } = this.props, l = e.map(e => e.id !== s ? (0, a.jsx)(i.MenuItem, {
        id: "".concat(e.id),
        label: e.id,
        action: () => {
          r.closeContextMenu(), null == t || t(e)
        }
      }) : null);
      return (0, a.jsx)(i.Menu, {
        onSelect: n,
        navId: "test-store-listing",
        "aria-label": d.default.Messages.GENERIC_ACTIONS_MENU_LABEL,
        onClose: r.closeContextMenu,
        children: l
      })
    }, this.handleContextMenu = e => {
      e.stopPropagation(), r.openContextMenu(e, this.renderContextMenu)
    }
  }
}
var E = l.default.connectStores([o.default], e => {
  let {
    skuId: t
  } = e;
  return {
    storeListings: o.default.getUnpublishedForSKU(t),
    primaryStoreListing: o.default.getForSKU(t)
  }
})(_)