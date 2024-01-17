"use strict";
n.r(t), n.d(t, {
  useCurrentUserHasAutomodQuarantinedProfile: function() {
    return N
  },
  useGuildAutomodProfileQuarantineErrors: function() {
    return p
  },
  useOpenFixQuarantinedProfileModal: function() {
    return S
  }
}), n("702976");
var s = n("884691"),
  l = n("65597"),
  a = n("79112"),
  i = n("685665"),
  r = n("929423"),
  o = n("271938"),
  u = n("26989"),
  d = n("305961"),
  c = n("957255"),
  f = n("162771"),
  E = n("681937"),
  _ = n("49111"),
  T = n("657944"),
  I = n("397336"),
  m = n("782340");

function N(e) {
  return (0, l.default)([o.default, u.default], () => {
    if (null == e) return !1;
    let t = o.default.getId();
    return (0, E.hasAutomodQuarantinedProfile)(u.default.getMember(e, t))
  }, [e])
}

function p(e) {
  return (0, l.useStateFromStoresObject)([o.default, u.default, f.default, d.default], () => {
    let t = {
        nick: void 0,
        bio: void 0
      },
      n = f.default.getGuildId(),
      s = null != e ? e : n,
      l = d.default.getGuild(s);
    if (null == l || null == s) return t;
    let a = o.default.getId(),
      i = u.default.getMember(s, a),
      r = (0, E.getAutomodQuarantinedProfileFlags)(null == i ? void 0 : i.flags);
    if (0 === r.size) return t;
    if (r.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME)) {
      if (null == e) {
        var c;
        t.nick = [m.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME_IN_GUILD.format({
          guildName: null !== (c = l.name) && void 0 !== c ? c : ""
        })]
      } else t.nick = [m.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_USERNAME]
    }
    return r.has(T.GuildMemberFlags.AUTOMOD_QUARANTINED_BIO) && (t.bio = [m.default.Messages.GUILD_AUTOMOD_PROFILE_ERROR_QUARANTINE_BIO]), t
  }, [e])
}

function S(e) {
  let {
    guildId: t,
    scrollPosition: n,
    analyticsLocation: o,
    analyticsLocations: u,
    openWithoutBackstack: f
  } = e, {
    analyticsLocations: E
  } = (0, i.default)(), T = (0, l.default)([d.default], () => d.default.getGuild(t), [t]), m = (0, l.default)([c.default], () => null != T && c.default.can(_.Permissions.CHANGE_NICKNAME, T), [T]), N = s.useCallback(() => {
    if (null == T) return;
    let e = _.UserSettingsSections.PROFILE_CUSTOMIZATION,
      t = I.ProfileCustomizationSubsection.GUILD;
    m ? (0, r.initGuildIdentitySettings)(T, null != u ? u : E) : t = I.ProfileCustomizationSubsection.USER_PROFILE, a.default.open(e, t, {
      scrollPosition: n,
      analyticsLocation: o,
      analyticsLocations: u,
      openWithoutBackstack: f
    })
  }, [m, n, o, u, f, T, E]);
  return [N, m]
}