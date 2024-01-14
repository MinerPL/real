"use strict";
l.r(t), l.d(t, {
  default: function() {
    return f
  }
});
var a = l("37983"),
  n = l("884691"),
  s = l("414456"),
  i = l.n(s),
  o = l("77078"),
  d = l("230559"),
  C = l("553275"),
  r = l("948512"),
  u = l("782340"),
  c = l("386665");

function f(e) {
  let {
    searchState: t
  } = e, l = n.useMemo(() => ({
    [C.SearchState.LOADING]: null,
    [C.SearchState.SUCCESS_STILL_INDEXING]: {
      icon: (0, a.jsx)(d.default, {}),
      message: u.default.Messages.SEARCH_GUILD_STILL_INDEXING
    },
    [C.SearchState.SUCCESS_EMPTY]: {
      icon: (0, a.jsx)(r.default, {}),
      message: u.default.Messages.MEMBER_SAFETY_TABLE_NO_RESULTS
    },
    [C.SearchState.SUCCESS_FULL]: null
  }), []), s = l[t];
  return null == s ? null : (0, a.jsxs)("div", {
    className: i(c.noResultsContainer),
    children: [(0, a.jsx)("div", {
      className: i(c.noResultsIconContainer),
      children: s.icon
    }), (0, a.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      children: s.message
    })]
  })
}