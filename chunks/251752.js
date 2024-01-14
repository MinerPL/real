"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("37983"),
  n = s("884691"),
  i = s("414456"),
  r = s.n(i),
  l = s("77078"),
  u = s("980428"),
  o = s("772280"),
  d = s("782340"),
  c = s("911545"),
  f = n.forwardRef(function(e, t) {
    let {
      currentPageIndex: s,
      numPages: n,
      onChangePage: i,
      children: f,
      className: E,
      showPageCount: p = !0,
      ...I
    } = e, m = s <= 0, _ = s >= n - 1;
    return (0, a.jsxs)("div", {
      className: r(c.paginator, E),
      ref: t,
      ...I,
      children: [f, (0, a.jsxs)("div", {
        className: c.pageActions,
        children: [(0, a.jsx)(l.Clickable, {
          className: r(c.pageButtonPrev, {
            [c.disabled]: m
          }),
          tabIndex: m ? -1 : 0,
          onClick: m ? void 0 : () => i(s - 1),
          children: (0, a.jsx)(u.default, {
            className: c.pageButtonIcon,
            "aria-label": d.default.Messages.PAGINATION_PREVIOUS
          })
        }), p ? (0, a.jsx)("div", {
          className: c.pageIndicator,
          children: d.default.Messages.PAGINATOR_OF_PAGES.format({
            currentPage: s + 1,
            numPages: n
          })
        }) : (0, a.jsx)("div", {
          className: c.pageIndicator,
          children: d.default.Messages.PAGINATOR_CURRENT_PAGE.format({
            currentPage: s + 1
          })
        }), (0, a.jsx)(l.Clickable, {
          className: r(c.pageButtonNext, {
            [c.disabled]: _
          }),
          tabIndex: _ ? -1 : 0,
          onClick: _ ? void 0 : () => i(s + 1),
          children: (0, a.jsx)(o.default, {
            className: c.pageButtonIcon,
            "aria-label": d.default.Messages.PAGINATION_NEXT
          })
        })]
      })]
    })
  })