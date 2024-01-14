"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("37983");
n("884691");
var s = n("446674"),
  i = n("77078"),
  l = n("340626"),
  r = n("40546"),
  o = n("397039"),
  u = n("926787"),
  d = n("868246"),
  c = n("649725"),
  E = n("866487"),
  f = n("447621"),
  _ = n("782340");
let h = e => {
  switch (e) {
    case 1:
      return f.CategoryIcons.Activity;
    case 2:
      return f.CategoryIcons.Music;
    case 3:
      return f.CategoryIcons.Television;
    case 5:
      return f.CategoryIcons.Science;
    case 6:
      return f.CategoryIcons.Education;
    default:
      return f.CategoryIcons.Discover
  }
};
var C = () => {
  let {
    currentCategoryId: e,
    isViewingSearchResults: t
  } = (0, s.useStateFromStoresObject)([u.default], () => ({
    currentCategoryId: u.default.getCurrentCategoryId(),
    isViewingSearchResults: u.default.getMostRecentQuery().length > 0
  })), n = (0, s.useStateFromStores)([d.default], () => d.default.getDiscoveryCategories(), [], d.areDiscoveryCategoriesEqual), f = null == n ? void 0 : n.map(e => ({
    ...e,
    icon: h(e.categoryId)
  })), C = e => {
    (0, l.selectCategory)(e, !0), o.default.closeSidebar(), t && (0, l.clearSearch)()
  };
  return (0, a.jsxs)(i.Scroller, {
    children: [(0, a.jsx)(E.DiscoverySidebarHeader, {
      text: _.default.Messages.DISCOVER
    }), (0, a.jsx)(c.default, {
      categories: f,
      handleCategorySelect: C,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    }), (0, a.jsx)(r.default, {
      handleCategorySelect: C,
      currentCategoryId: e,
      shouldDisplaySelectedCategory: !t
    })]
  })
}