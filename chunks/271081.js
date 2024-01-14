"use strict";
l.r(t), l.d(t, {
  default: function() {
    return h
  }
});
var i = l("37983"),
  a = l("884691"),
  n = l("65597"),
  s = l("599110"),
  r = l("831109"),
  c = l("136110"),
  o = l("412707"),
  d = l("155335"),
  u = l("769638"),
  p = l("464119"),
  m = l("463497"),
  _ = l("49111"),
  f = l("178206");

function h() {
  let e = (0, o.useApplicationDirectoryHistory)(e => e.guildId),
    t = (0, n.default)([r.default], () => r.default.getCategories()),
    l = (0, o.getPreviousView)();
  return a.useEffect(() => {
    s.default.track(_.AnalyticEvents.APP_DIRECTORY_PAGE_VIEWED, {
      current_page: o.ApplicationDirectoryViews.HOME,
      previous_page: null == l ? void 0 : l.type,
      guild_id: e
    })
  }, [e, l]), (0, i.jsxs)(c.default, {
    children: [(0, i.jsx)(p.default, {}), null != t && t.length > 0 && (0, i.jsx)(d.default, {
      className: f.categoryList
    }), (0, i.jsx)("main", {
      className: f.collectionsContainer,
      children: (0, i.jsx)(u.default, {})
    }), (0, i.jsx)(m.default, {})]
  })
}