"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("526812"),
  i = n("404607"),
  r = n("670902"),
  o = n("339792"),
  u = n("680986"),
  d = n("258039"),
  c = n("821343"),
  f = n("68238"),
  h = n("664336"),
  p = n("782340");

function m(e) {
  var t, n;
  let {
    channel: m
  } = e, E = (0, u.useCanManageChannel)(m), C = (0, l.useStateFromStores)([s.default], () => s.default.hasHidden(m.id)), g = (0, d.isOnboardingDismissed)(m.id), {
    sortOrder: S,
    tagFilter: _
  } = (0, o.useForumChannelStore)(m.id), I = (0, l.useStateFromStores)([r.default, c.default], () => {
    let e = r.default.getThreadIds(m.id, S, _);
    if (e.length > 0) return !0;
    let t = c.default.getThreads(m.id, S, _);
    return !!(t.length > 0) || !1
  }, [m.id, S, _]), T = m.isMediaChannel();
  if (!E || g || T && I) return null;
  let v = (t = C, n = T, t ? n ? p.default.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_SHOW : p.default.Messages.FORUM_CHANNEL_ONBOARDING_SHOW : n ? p.default.Messages.MEDIA_CHANNEL_ADMIN_EDUCATION_HIDE : p.default.Messages.FORUM_CHANNEL_ONBOARDING_HIDE);
  return (0, a.jsx)(h.Icon, {
    tooltip: v,
    icon: f.default,
    onClick: () => i.default.hideAdminOnboarding(m.id, !C),
    selected: !C
  })
}