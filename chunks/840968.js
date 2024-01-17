"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
}), n("222007");
var s = n("37983");
n("884691");
var l = n("489622"),
  a = n("956967"),
  i = n("782340"),
  r = n("185401");

function o(e) {
  let {
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o
  } = e, [u, d] = (0, a.useOpenFixQuarantinedProfileModal)({
    guildId: t,
    analyticsLocations: n,
    analyticsLocation: o,
    openWithoutBackstack: !0
  }), c = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_NO_PERMS, f = d ? i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_USER_PROFILE_CTA : i.default.Messages.GUILD_AUTOMOD_NAGBAR_QUARANTINED_ACCOUNT_USERNAME_CTA;
  return (0, s.jsxs)(l.default, {
    color: l.NoticeColors.CUSTOM,
    className: r.quarantineNotice,
    children: [c, (0, s.jsx)(l.NoticeButton, {
      onClick: u,
      children: f
    })]
  })
}