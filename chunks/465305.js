"use strict";
s.r(S), s.d(S, {
  default: function() {
    return L
  }
}), s("222007");
var e = s("200900"),
  i = s("79112"),
  _ = s("980215"),
  n = s("250666"),
  I = s("680986"),
  t = s("867965"),
  r = s("348934"),
  N = s("520141"),
  o = s("592407"),
  R = s("819450"),
  A = s("178225"),
  O = s("300322"),
  P = s("233069"),
  T = s("305961"),
  M = s("701909"),
  C = s("49111"),
  a = s("606762"),
  l = s("782340");

function D(E) {
  let S = (0, A.isGuildEligibleForStageChannels)(E),
    s = (0, I.getEnableForumPermissions)(E),
    e = (0, N.isMemberVerificationManualApproval)(E),
    t = T.default.getGuild(E),
    r = null != t && (0, n.isCreatorMonetizationEnabledGuild)(t),
    o = (0, _.getClydeExperimentEnabled)(t);
  return {
    PRIORITY_SPEAKER_DESCRIPTION: l.default.Messages.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION_APP.format({
      keybind: l.default.Messages.KEYBIND_PUSH_TO_TALK_PRIORITY,
      onClick: () => {
        i.default.open(C.UserSettingsSections.KEYBINDS)
      }
    }),
    SOUNDBOARD_DESCRIPTION: l.default.Messages.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION_LEARN_MORE.format({
      helpCenterArticle: M.default.getArticleURL(C.HelpdeskArticles.SOUNDBOARD)
    }),
    showStageChannelPermissions: S,
    showExperimental: !0,
    showForumPermissions: s,
    showMembershipManualApprovalPermissions: e,
    showCreatorMonetizationAnalyticsPermission: r,
    showClydeAIPermissions: o
  }
}

function m(E, S) {
  return E ? [S()] : []
}
var L = {
  generateChannelPermissionSpec: function(E, S, s, i) {
    var n, N, A, M, m, L;
    let g = (0, I.getEnableForumPermissions)(E),
      u = (0, a.getChannelPermissionSpecMap)(S, s, g, i),
      c = D(E),
      G = O.VoiceInThreadsExperiment.getCurrentConfig({
        guildId: E,
        location: "3ad37d_1"
      }).enabled && P.VOICE_THREAD_PARENT_CHANNEL_TYPES.has(S.type),
      d = (0, R.isStageVideoEnabled)(E),
      U = (0, r.canCurrentUserManageMessageFilters)(E),
      f = S.isMediaChannel(),
      p = T.default.getGuild(E),
      V = (0, _.getClydeExperimentEnabled)(p);
    switch (S.type) {
      case C.ChannelTypes.GUILD_CATEGORY:
        ;
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CATEGORY), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: !0,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), ...(n = c.showStageChannelPermissions, N = () => e.generateChannelStageSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), n ? [N()] : []), e.generateChannelEventsSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_VOICE:
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !0
        }), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), e.generateChannelVoiceChatSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        }), e.generateChannelEventsSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS)];
      case C.ChannelTypes.GUILD_STAGE_VOICE:
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL, {
          showManageWebhooks: !1
        }), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelStageVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE, d), e.generateChannelStageSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_STAGE), e.generateChannelEventsSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS), e.generateChannelVoiceChatSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT, {
          sectionDescription: U ? l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE_CHAT_DESCRIPTION.format({
            setUpAutomod: () => {
              o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0
        })];
      case C.ChannelTypes.GUILD_FORUM:
      case C.ChannelTypes.GUILD_MEDIA:
        ;
        let h = f ? l.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL : l.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS,
          H = f ? l.default.Messages.ROLE_PERMISSIONS_SECTION_MEDIA_CHANNEL_DESCRIPTION : l.default.Messages.ROLE_PERMISSIONS_SECTION_FORUMS_DESCRIPTION;
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, h, {
          showPrivateThreads: !1,
          showCreateThreads: !1,
          sectionDescription: U ? H.format({
            setUpAutomod: () => {
              !f && (0, t.trackForumEnableAutomodClicked)(), o.default.open(E, C.GuildSettingsSections.GUILD_AUTOMOD)
            }
          }) : void 0,
          showClydeAIPermissions: V
        }), ...(A = G, M = () => e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), A ? [M()] : [])];
      default:
        ;
        return [e.generateChannelGeneralSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_GENERAL_CHANNEL), e.generateChannelMembershipSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_MEMBERSHIP), e.generateChannelTextSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_TEXT, {
          showPrivateThreads: S.type !== C.ChannelTypes.GUILD_ANNOUNCEMENT,
          showCreateThreads: !0,
          showClydeAIPermissions: V
        }), ...(m = G, L = () => e.generateChannelVoiceSection(u, l.default.Messages.ROLE_PERMISSIONS_SECTION_VOICE), m ? [L()] : [])]
    }
  },
  generateGuildPermissionSpec: function(E) {
    var S, s;
    let i = new Set,
      _ = E.hasFeature(C.GuildFeatures.COMMUNITY);
    return !_ && i.add(C.Permissions.VIEW_GUILD_ANALYTICS.toString()), S = e.generateGuildPermissionSpec(l.default.Messages, D(E.id)), 0 === (s = i).size ? S : S.map(E => ({
      ...E,
      permissions: E.permissions.filter(E => !s.has(E.flag.toString()))
    }))
  },
  getGuildPermissionSpecMap: function(E) {
    return e.getGuildPermissionSpec(l.default.Messages, D(E.id))
  }
}