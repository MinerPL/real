"use strict";
l.r(t), l.d(t, {
  default: function() {
    return c
  }
}), l("70102");
var i = l("37983");
l("884691");
var a = l("77078"),
  n = l("682777"),
  s = l("449281"),
  r = l("782340");

function c(e) {
  let t, l, {
    category: c,
    className: o,
    onViewAll: d
  } = e;
  return null == c || (0, n.isAllCategory)(c) ? (t = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING, l = r.default.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING) : (t = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format({
    categoryName: c.name
  }), l = r.default.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format({
    viewAllHook: (e, t) => (0, i.jsx)(a.Anchor, {
      onClick: d,
      children: e
    }, t)
  })), (0, i.jsx)(s.default, {
    className: o,
    heading: t,
    body: l
  })
}