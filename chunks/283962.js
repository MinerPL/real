"use strict";
s.r(t), s.d(t, {
  useNewOwnerOnboardingRequired: function() {
    return d
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("77078"),
  i = s("446674"),
  r = s("697218"),
  o = s("49111");

function d(e) {
  let t = (null == e ? void 0 : e.hasFeature(o.GuildFeatures.CREATOR_MONETIZABLE_PENDING_NEW_OWNER_ONBOARDING)) === !0,
    d = (null == e ? void 0 : e.hasFeature(o.GuildFeatures.ROLE_SUBSCRIPTIONS_ENABLED)) === !0,
    u = (0, i.useStateFromStores)([r.default], () => r.default.getCurrentUser()),
    c = (null == e ? void 0 : e.isOwner(u)) === !0;
  n.useEffect(() => {
    null != e && t && c && (0, l.openModalLazy)(async () => {
      let {
        default: t
      } = await s.el("795262").then(s.bind(s, "795262"));
      return s => (0, a.jsx)(t, {
        ...s,
        guildId: e.id,
        requireTeamSetup: d
      })
    })
  }, [t, d, e, c])
}