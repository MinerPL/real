"use strict";
s.r(t), s.d(t, {
  default: function() {
    return c
  }
});
var n = s("37983");
s("884691");
var a = s("414456"),
  l = s.n(a),
  i = s("77078"),
  r = s("232259"),
  o = s("680986"),
  u = s("782340"),
  d = s("893974"),
  c = e => {
    var t, s;
    let {
      message: a,
      channel: c,
      renderColon: h,
      hasUnreads: f
    } = e, {
      user: m,
      author: g
    } = (0, o.useForumPostAuthor)(c), S = null !== (s = null !== (t = null == g ? void 0 : g.nick) && void 0 !== t ? t : null == m ? void 0 : m.username) && void 0 !== s ? s : "", p = (0, r.useUsernameHook)(null == a ? void 0 : a.author, c.id, c.guild_id, !0, u.default.Messages.FORUM_POST_AUTHOR_A11Y_LABEL.format({
      name: S
    }))(null != g ? g : void 0)((0, n.jsx)(n.Fragment, {
      children: S
    }), c.id);
    return (0, n.jsxs)(i.Text, {
      tag: "span",
      className: l(d.author, {
        [d.hasUnreads]: f
      }),
      variant: "text-sm/semibold",
      children: [p, !0 === h ? ": " : null]
    })
  }