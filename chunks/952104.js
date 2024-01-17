"use strict";
n.r(t), n.d(t, {
  AutomodUserProfileQuarantineChatInputNotice: function() {
    return f
  }
}), n("222007");
var s = n("37983");
n("884691");
var a = n("77078"),
  l = n("812204"),
  i = n("685665"),
  r = n("594864"),
  o = n("533930"),
  u = n("956967"),
  d = n("782340"),
  c = n("382814");

function f(e) {
  var t, n;
  let {
    guild: f
  } = e, {
    analyticsLocations: h
  } = (0, i.default)(l.default.AUTOMOD_PROFILE_QUARANTINE_ALERT), [C, p] = (0, u.useOpenFixQuarantinedProfileModal)({
    guildId: null !== (t = null == f ? void 0 : f.id) && void 0 !== t ? t : "",
    analyticsLocations: h,
    openWithoutBackstack: !0
  }), m = p ? d.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_DESCRIPTION : d.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_NO_PERMS_DESCRIPTION, g = p ? d.default.Messages.GUILD_AUTOMOD_UPDATE_PROFILE_CTA : d.default.Messages.GUILD_AUTOMOD_UPDATE_ACCOUNT_USERNAME_CTA;
  return (0, s.jsx)("div", {
    children: (0, s.jsx)(r.MessageNoticeBanner, {
      bannerIcon: (0, s.jsx)(o.default, {
        className: c.bannerIcon,
        width: 32,
        height: 32
      }),
      bannerHeader: d.default.Messages.GUILD_AUTOMOD_PROFILE_INVALID_MODAL_TITLE_MOBILE.format({
        guildName: null !== (n = null == f ? void 0 : f.name) && void 0 !== n ? n : ""
      }),
      bannerSubtext: m,
      containerStyles: c.bannerContainer,
      headerStyles: c.bannerHeader,
      children: (0, s.jsx)(a.Button, {
        onClick: () => {
          C()
        },
        size: a.Button.Sizes.SMALL,
        children: g
      })
    })
  })
}