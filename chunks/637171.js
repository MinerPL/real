"use strict";
r.r(t), r.d(t, {
  default: function() {
    return d
  }
});
var a = r("37983"),
  n = r("884691"),
  i = r("414456"),
  l = r.n(i),
  o = r("77078"),
  s = r("158352"),
  c = r("694735");

function d(e) {
  let {
    columns: t,
    rowComponent: r,
    headerClassName: i,
    stickyHeader: d,
    onClickRow: u,
    selectedRowKey: h,
    ...p
  } = e, f = n.useMemo(() => t.map(e => ({
    renderHeader: () => (0, a.jsx)(o.Text, {
      variant: "text-sm/semibold",
      children: e.key
    }),
    ...e
  })), [t]);
  return (0, a.jsx)(s.default, {
    ...p,
    columns: f,
    rowComponent: null != r ? r : e => {
      let {
        item: t,
        children: r
      } = e, n = l(c.tableRow, {
        [c.selectedTableRow]: t.key === h
      });
      return null != u ? (0, a.jsx)(o.Clickable, {
        className: n,
        onClick: () => u(t.key),
        children: r
      }) : (0, a.jsx)("div", {
        className: n,
        children: r
      })
    },
    headerClassName: l(c.tableHeader, i),
    stickyHeader: null == d || d
  })
}