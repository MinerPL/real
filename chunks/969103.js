"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var a = n("884691"),
  l = n("446674"),
  s = n("928265"),
  i = n("204743"),
  r = n("26989"),
  o = n("697218"),
  u = n("49111"),
  d = n("237542"),
  c = e => {
    let t = (0, l.useStateFromStores)([i.default], () => (null == e ? void 0 : e.hasFeature(u.GuildFeatures.HUB)) ? i.default.hasViewedPrompt(d.GuildPrompts.REAL_NAME_PROMPT, e.id) : null),
      n = (0, l.useStateFromStores)([o.default], () => o.default.getCurrentUser()),
      c = (0, l.useStateFromStores)([r.default], () => (null == e ? void 0 : e.id) != null && null != n ? r.default.getMember(null == e ? void 0 : e.id, n.id) : null),
      f = (null == c ? void 0 : c.nick) != null;
    return a.useEffect(() => {
      f && null != e && !1 === t && s.default.viewPrompt(d.GuildPrompts.REAL_NAME_PROMPT, e.id)
    }, [f, e, t]), !1 === t && !f
  }