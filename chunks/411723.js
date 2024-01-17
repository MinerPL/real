"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var n = a("37983");
a("884691");
var l = a("866227"),
  s = a.n(l),
  i = a("446674"),
  r = a("77078"),
  o = a("442939"),
  u = a("730859"),
  d = a("697218"),
  c = a("953109"),
  m = a("449008"),
  h = a("782340"),
  g = a("127789"),
  f = function(e) {
    let {
      attachment: t,
      guildId: a
    } = e, {
      application: l,
      clip_participants: f,
      title: A
    } = t, _ = (0, o.useGetOrFetchApplication)(null == l ? void 0 : l.id), x = (0, i.useStateFromStoresArray)([d.default], () => {
      var e;
      return null !== (e = null == f ? void 0 : f.map(e => {
        let {
          id: t
        } = e;
        return d.default.getUser(t)
      }).filter(m.isNotNullish)) && void 0 !== e ? e : []
    }), p = null == _ ? void 0 : _.name, I = s(t.clip_created_at).fromNow();
    return null == t.clip_created_at ? null : (0, n.jsxs)("div", {
      className: g.container,
      children: [(0, n.jsx)(c.default, {
        game: _
      }), (0, n.jsxs)("div", {
        className: g.textSection,
        children: [null != A && "" !== A ? (0, n.jsx)(r.Text, {
          variant: "text-md/semibold",
          color: "interactive-active",
          children: A
        }) : (0, n.jsx)(r.Text, {
          variant: "text-md/semibold",
          color: "text-muted",
          children: h.default.Messages.CLIPS_UNTITLED
        }), (0, n.jsxs)(r.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: g.subtitle,
          children: [null != p ? "".concat(p, " • ") : null, I]
        }), (0, n.jsx)(r.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          className: g.subtitle
        })]
      }), null != f && f.length > 0 && (0, n.jsx)(u.default, {
        maxUsers: 4,
        users: x,
        className: g.facePile,
        guildId: a
      })]
    })
  }