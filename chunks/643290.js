"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  i = n("446674"),
  r = n("77078"),
  s = n("442939"),
  u = n("915639"),
  o = n("953109"),
  d = n("299039"),
  c = n("782340"),
  f = n("258818");

function m(e) {
  var t, n;
  let {
    clip: m
  } = e, [v] = (0, s.default)([null !== (t = m.applicationId) && void 0 !== t ? t : ""]), E = (0, i.useStateFromStores)([u.default], () => u.default.locale), p = l.useMemo(() => new Date(d.default.extractTimestamp(m.id)), [m.id]);
  return (0, a.jsxs)("div", {
    className: f.root,
    children: [(0, a.jsxs)("div", {
      className: f.nameSection,
      children: [(0, a.jsx)(o.default, {
        game: v
      }), (0, a.jsx)(r.Text, {
        className: f.name,
        variant: "text-md/medium",
        color: "interactive-active",
        children: null !== (n = null == v ? void 0 : v.name) && void 0 !== n ? n : m.applicationName
      })]
    }), (0, a.jsxs)("div", {
      className: f.timeContainer,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.FormTitle, {
          className: f.timeTitle,
          children: c.default.Messages.CLIPS_EDIT_DATE_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: p.toLocaleDateString(E, {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
          })
        })]
      }), (0, a.jsxs)("div", {
        children: [(0, a.jsx)(r.FormTitle, {
          className: f.timeTitle,
          children: c.default.Messages.CLIPS_EDIT_TIME_TITLE
        }), (0, a.jsx)(r.Text, {
          variant: "text-sm/normal",
          color: "interactive-active",
          children: p.toLocaleTimeString(E, {
            hour: "numeric",
            minute: "numeric"
          })
        })]
      })]
    })]
  })
}