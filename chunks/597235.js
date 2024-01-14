"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("37983"),
  l = s("884691"),
  i = s("446674"),
  n = s("69927"),
  u = s("766274"),
  r = s("305961"),
  o = s("549103"),
  d = s("50926"),
  c = s("122766"),
  E = s("117370"),
  I = s("276566"),
  S = s("782340"),
  f = s("130769"),
  T = function(e) {
    let {
      guildId: t
    } = e, s = (0, c.useSelectedGuildJoinRequest)({
      guildId: t
    }), {
      user: T
    } = null != s ? s : {}, _ = l.useMemo(() => null != T ? new u.default(T) : null, [T]), R = (0, i.useStateFromStores)([r.default], () => r.default.getGuild(t), [t]);
    return (0, n.usePageTitle)({
      subsection: S.default.Messages.GUILD_SETTINGS_MEMBER_VERIFICATION_REQUIREMENTS,
      location: null == R ? void 0 : R.name
    }), l.useEffect(() => {
      d.default.fetchVerificationForm(t)
    }, [t]), (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)("div", {
        className: f.content,
        children: (0, a.jsx)(E.default, {
          guildId: t
        })
      }), null != s && null != R && null != _ && (0, a.jsx)("section", {
        className: f.sidebar,
        children: (0, a.jsx)(I.default, {
          guild: R,
          guildJoinRequest: s,
          guildJoinRequestUser: _,
          onClose: () => o.default.setSelectedGuildJoinRequest(t, null)
        })
      })]
    })
  }