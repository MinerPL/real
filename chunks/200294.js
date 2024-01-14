"use strict";
n.r(t), n.d(t, {
  renderHeader: function() {
    return o
  },
  renderAutocompleteGroup: function() {
    return s
  }
});
var l = n("37983"),
  i = n("884691");
n("41170");
var r = n("501536");

function o(e) {
  let {
    titleWithQuery: t,
    titleWithoutQuery: n,
    query: i,
    getQuery: o,
    headerClassName: s,
    headerTrailingContent: a
  } = e, u = i.length > 0 ? t.format({
    prefix: o(i)
  }) : n;
  return (0, l.jsx)(r.default.Title, {
    className: s,
    title: u,
    children: a
  }, "autocomplete-title-".concat(u))
}

function s(e) {
  let {
    query: t,
    selectedIndex: n,
    autocompletes: r,
    onHover: s,
    onClick: a,
    titleWithQuery: u,
    titleWithoutQuery: d,
    Component: c,
    getProps: f,
    getQuery: p,
    key: m,
    indexOffset: h = 0,
    headerClassName: E,
    headerTrailingContent: S,
    footer: g
  } = e;
  if (null == g && (null == r || 0 === r.length)) return null;
  let C = null == r ? void 0 : r.map((e, t) => {
    let l = t + h,
      r = f(e, l);
    return (0, i.createElement)(c, {
      onClick: a,
      onHover: s,
      selected: n === l,
      index: l,
      ...r,
      key: r.key
    })
  });
  return (0, l.jsxs)(i.Fragment, {
    children: [null != u && null != d ? o({
      titleWithQuery: u,
      titleWithoutQuery: d,
      query: t,
      getQuery: p,
      headerClassName: E,
      headerTrailingContent: S
    }) : null, C, g]
  }, m)
}