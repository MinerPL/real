"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  l = n("884691"),
  i = n("414456"),
  r = n.n(i),
  s = n("446674"),
  u = n("77078"),
  o = n("308289"),
  d = n("697218"),
  c = n("564875"),
  f = n("449008"),
  m = n("387111"),
  v = n("782340"),
  E = n("887642");

function p(e) {
  let {
    user: t
  } = e, n = m.default.useName(null, null, t);
  return (0, a.jsxs)("div", {
    className: E.userItem,
    children: [(0, a.jsx)(o.default, {
      user: t
    }), (0, a.jsx)(u.Text, {
      color: "header-primary",
      variant: "text-sm/medium",
      children: n
    })]
  })
}

function h(e) {
  let {
    clip: t,
    className: n
  } = e, i = (0, s.useStateFromStoresArray)([d.default], () => t.users.map(d.default.getUser).filter(f.isNotNullish)), o = l.useCallback(e => {
    let {
      row: t
    } = e, n = i[t];
    return null == n ? null : (0, a.jsx)(p, {
      user: n
    }, t)
  }, [i]);
  return (0, a.jsxs)("div", {
    className: r(n, E.root),
    children: [(0, a.jsx)("div", {
      className: E.header,
      children: (0, a.jsxs)(u.FormTitle, {
        className: E.title,
        children: [v.default.Messages.CLIPS_EDIT_USER_LIST_TITLE, (0, a.jsxs)("div", {
          className: E.userCountPill,
          children: [(0, a.jsx)(u.Text, {
            color: "text-normal",
            variant: "text-xs/medium",
            children: i.length
          }), (0, a.jsx)(c.default, {
            className: E.userCountIcon
          })]
        })]
      })
    }), (0, a.jsx)(u.List, {
      className: E.userList,
      sectionHeight: 0,
      rowHeight: 40,
      sections: [i.length],
      renderRow: o
    })]
  })
}