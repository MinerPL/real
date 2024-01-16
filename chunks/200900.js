"use strict";
s.r(S), s.d(S, {
  getGuildPermissionSpec: function() {
    return n
  },
  generateGuildPermissionSpec: function() {
    return I
  },
  generateChannelGeneralSection: function() {
    return t
  },
  generateChannelMembershipSection: function() {
    return r
  },
  generateChannelTextSection: function() {
    return N
  },
  generateChannelVoiceSection: function() {
    return o
  },
  generateChannelVoiceChatSection: function() {
    return R
  },
  generateChannelStageVoiceSection: function() {
    return A
  },
  generateChannelStageSection: function() {
    return O
  },
  generateChannelEventsSection: function() {
    return P
  },
  renderDescription: function() {
    return T
  }
}), s("424973");
var e = s("843455");

function i(E) {
  let S = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  return !S && (E.permissions = E.permissions.filter(E => {
    let {
      isExperimental: S
    } = E;
    return !S
  })), E
}

function _(E, S) {
  return E.map(E => S[E.toString()])
}

function n(E, S) {
  return {
    [e.Permissions.VIEW_CHANNEL.toString()]: {
      title: E.ROLE_PERMISSIONS_VIEW_CHANNEL,
      description: E.ROLE_PERMISSIONS_VIEW_CHANNEL_DESCRIPTION,
      flag: e.Permissions.VIEW_CHANNEL
    },
    [e.Permissions.MANAGE_CHANNELS.toString()]: {
      title: E.MANAGE_CHANNELS,
      description: E.ROLE_PERMISSIONS_MANAGE_CHANNELS_DESCRIPTION,
      flag: e.Permissions.MANAGE_CHANNELS
    },
    [e.Permissions.MANAGE_ROLES.toString()]: {
      title: E.MANAGE_ROLES,
      description: E.ROLE_PERMISSIONS_MANAGE_ROLES_DESCRIPTION,
      flag: e.Permissions.MANAGE_ROLES
    },
    [e.Permissions.MANAGE_GUILD_EXPRESSIONS.toString()]: {
      title: E.MANAGE_EXPRESSIONS,
      description: E.ROLE_PERMISSIONS_MANAGE_EXPRESSIONS_DESCRIPTION,
      flag: e.Permissions.MANAGE_GUILD_EXPRESSIONS
    },
    [e.Permissions.CREATE_GUILD_EXPRESSIONS.toString()]: {
      title: E.CREATE_EXPRESSIONS,
      description: E.ROLE_PERMISSIONS_CREATE_EXPRESSIONS_DESCRIPTION,
      flag: e.Permissions.CREATE_GUILD_EXPRESSIONS
    },
    [e.Permissions.VIEW_AUDIT_LOG.toString()]: {
      title: E.VIEW_AUDIT_LOG,
      description: E.ROLE_PERMISSIONS_VIEW_AUDIT_LOG_DESCRIPTION,
      flag: e.Permissions.VIEW_AUDIT_LOG
    },
    [e.Permissions.VIEW_GUILD_ANALYTICS.toString()]: {
      title: E.VIEW_GUILD_ANALYTICS,
      description: E.ROLE_PERMISSIONS_VIEW_GUILD_ANALYTICS_DESCRIPTION,
      flag: e.Permissions.VIEW_GUILD_ANALYTICS
    },
    [e.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS.toString()]: {
      title: E.VIEW_CREATOR_MONETIZATION_ANALYTICS,
      description: E.ROLE_PERMISSIONS_VIEW_CREATOR_MONETIZATION_ANALYTICS_DESCRIPTION,
      flag: e.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS
    },
    [e.Permissions.MANAGE_WEBHOOKS.toString()]: {
      title: E.MANAGE_WEBHOOKS,
      description: E.ROLE_PERMISSIONS_MANAGE_WEBHOOKS_DESCRIPTION,
      flag: e.Permissions.MANAGE_WEBHOOKS
    },
    [e.Permissions.MANAGE_GUILD.toString()]: {
      title: E.MANAGE_SERVER,
      description: E.ROLE_PERMISSIONS_MANAGE_SERVER_DESCRIPTION,
      flag: e.Permissions.MANAGE_GUILD
    },
    [e.Permissions.CREATE_INSTANT_INVITE.toString()]: {
      title: E.CREATE_INSTANT_INVITE,
      description: E.ROLE_PERMISSIONS_CREATE_INSTANT_INVITE_DESCRIPTION,
      flag: e.Permissions.CREATE_INSTANT_INVITE
    },
    [e.Permissions.CHANGE_NICKNAME.toString()]: {
      title: E.CHANGE_NICKNAME,
      description: E.ROLE_PERMISSIONS_CHANGE_NICKNAME_DESCRIPTION,
      flag: e.Permissions.CHANGE_NICKNAME
    },
    [e.Permissions.MANAGE_NICKNAMES.toString()]: {
      title: E.MANAGE_NICKNAMES,
      description: E.ROLE_PERMISSIONS_MANAGE_NICKNAMES_DESCRIPTION,
      flag: e.Permissions.MANAGE_NICKNAMES
    },
    [e.Permissions.KICK_MEMBERS.toString()]: {
      title: S.showMembershipManualApprovalPermissions ? E.KICK_MEMBERS_AND_REVIEW_APPLICATIONS : E.KICK_MEMBERS,
      description: S.showMembershipManualApprovalPermissions ? E.ROLE_PERMISSIONS_KICK_MEMBERS_AND_REVIEW_APPLICATION_DESCRIPTION : E.ROLE_PERMISSIONS_KICK_MEMBERS_DESCRIPTION,
      flag: e.Permissions.KICK_MEMBERS
    },
    [e.Permissions.BAN_MEMBERS.toString()]: {
      title: E.BAN_MEMBERS,
      description: E.ROLE_PERMISSIONS_BAN_MEMBERS_DESCRIPTION,
      flag: e.Permissions.BAN_MEMBERS
    },
    [e.Permissions.MODERATE_MEMBERS.toString()]: {
      title: E.MODERATE_MEMBER,
      description: E.ROLE_PERMISSIONS_MODERATE_MEMBER_DESCRIPTION,
      flag: e.Permissions.MODERATE_MEMBERS
    },
    [e.Permissions.SEND_MESSAGES.toString()]: {
      title: S.showForumPermissions ? E.SEND_MESSAGES_AND_CREATE_FORUM_POSTS : E.SEND_MESSAGES,
      description: S.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_WITH_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_DESCRIPTION,
      flag: e.Permissions.SEND_MESSAGES
    },
    [e.Permissions.EMBED_LINKS.toString()]: {
      title: E.EMBED_LINKS,
      description: E.ROLE_PERMISSIONS_EMBED_LINKS_DESCRIPTION,
      flag: e.Permissions.EMBED_LINKS
    },
    [e.Permissions.ATTACH_FILES.toString()]: {
      title: E.ATTACH_FILES,
      description: E.ROLE_PERMISSIONS_ATTACH_FILES_DESCRIPTION,
      flag: e.Permissions.ATTACH_FILES
    },
    [e.Permissions.ADD_REACTIONS.toString()]: {
      title: E.ADD_REACTIONS,
      description: E.ROLE_PERMISSIONS_ADD_REACTIONS_DESCRIPTION,
      flag: e.Permissions.ADD_REACTIONS
    },
    [e.Permissions.USE_EXTERNAL_EMOJIS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_EMOJIS_DESCRIPTION,
      flag: e.Permissions.USE_EXTERNAL_EMOJIS
    },
    [e.Permissions.USE_EXTERNAL_STICKERS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_STICKERS_DESCRIPTION,
      flag: e.Permissions.USE_EXTERNAL_STICKERS
    },
    [e.Permissions.MENTION_EVERYONE.toString()]: {
      title: E.MENTION_EVERYONE,
      description: E.ROLE_PERMISSIONS_MENTION_EVERYONE_DESCRIPTION,
      flag: e.Permissions.MENTION_EVERYONE
    },
    [e.Permissions.MANAGE_MESSAGES.toString()]: {
      title: E.MANAGE_MESSAGES,
      description: E.ROLE_PERMISSIONS_MANAGE_MESSAGES_DESCRIPTION,
      flag: e.Permissions.MANAGE_MESSAGES
    },
    [e.Permissions.READ_MESSAGE_HISTORY.toString()]: {
      title: E.READ_MESSAGE_HISTORY,
      description: E.ROLE_PERMISSIONS_READ_MESSAGE_HISTORY_DESCRIPTION,
      flag: e.Permissions.READ_MESSAGE_HISTORY
    },
    [e.Permissions.SEND_TTS_MESSAGES.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES,
      description: E.ROLE_PERMISSIONS_SEND_TTS_MESSAGES_DESCRIPTION,
      flag: e.Permissions.SEND_TTS_MESSAGES
    },
    [e.Permissions.USE_APPLICATION_COMMANDS.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS,
      description: E.ROLE_PERMISSIONS_USE_APPLICATION_COMMANDS_GUILD_DESCRIPTION,
      flag: e.Permissions.USE_APPLICATION_COMMANDS
    },
    [e.Permissions.SEND_VOICE_MESSAGES.toString()]: {
      title: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE,
      description: E.ROLE_PERMISSIONS_SEND_VOICE_MESSAGE_GUILD_DESCRIPTION,
      flag: e.Permissions.SEND_VOICE_MESSAGES
    },
    [e.Permissions.USE_CLYDE_AI.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: e.Permissions.USE_CLYDE_AI
    },
    [e.Permissions.CONNECT.toString()]: {
      title: E.CONNECT,
      description: E.ROLE_PERMISSIONS_CONNECT_DESCRIPTION,
      flag: e.Permissions.CONNECT
    },
    [e.Permissions.SPEAK.toString()]: {
      title: E.SPEAK,
      description: E.ROLE_PERMISSIONS_SPEAK_DESCRIPTION,
      flag: e.Permissions.SPEAK
    },
    [e.Permissions.STREAM.toString()]: {
      title: E.VIDEO,
      description: E.ROLE_PERMISSIONS_STREAM_DESCRIPTION,
      flag: e.Permissions.STREAM
    },
    [e.Permissions.USE_EMBEDDED_ACTIVITIES.toString()]: {
      title: E.USE_EMBEDDED_ACTIVITIES,
      description: E.ROLE_PERMISSIONS_USE_EMBEDDED_ACTIVITIES_DESCRIPTION,
      flag: e.Permissions.USE_EMBEDDED_ACTIVITIES
    },
    [e.Permissions.USE_SOUNDBOARD.toString()]: {
      title: E.USE_SOUNDBOARD,
      description: (null == S ? void 0 : S.SOUNDBOARD_DESCRIPTION) || E.ROLE_PERMISSIONS_USE_SOUNDBOARD_DESCRIPTION,
      flag: e.Permissions.USE_SOUNDBOARD
    },
    [e.Permissions.USE_EXTERNAL_SOUNDS.toString()]: {
      title: E.USE_EXTERNAL_SOUNDS,
      description: E.ROLE_PERMISSIONS_USE_EXTERNAL_SOUNDS_DESCRIPTION,
      flag: e.Permissions.USE_EXTERNAL_SOUNDS
    },
    [e.Permissions.USE_VAD.toString()]: {
      title: E.USE_VAD,
      description: E.ROLE_PERMISSIONS_USE_VAD_DESCRIPTION,
      flag: e.Permissions.USE_VAD
    },
    [e.Permissions.PRIORITY_SPEAKER.toString()]: {
      title: E.PRIORITY_SPEAKER,
      description: (null == S ? void 0 : S.PRIORITY_SPEAKER_DESCRIPTION) || E.ROLE_PERMISSIONS_PRIORITY_SPEAKER_DESCRIPTION,
      flag: e.Permissions.PRIORITY_SPEAKER
    },
    [e.Permissions.MUTE_MEMBERS.toString()]: {
      title: E.MUTE_MEMBERS,
      description: E.ROLE_PERMISSIONS_MUTE_MEMBERS_DESCRIPTION,
      flag: e.Permissions.MUTE_MEMBERS
    },
    [e.Permissions.DEAFEN_MEMBERS.toString()]: {
      title: E.DEAFEN_MEMBERS,
      description: E.ROLE_PERMISSIONS_DEAFEN_MEMBERS_DESCRIPTION,
      flag: e.Permissions.DEAFEN_MEMBERS
    },
    [e.Permissions.MOVE_MEMBERS.toString()]: {
      title: E.MOVE_MEMBERS,
      description: E.ROLE_PERMISSIONS_MOVE_MEMBERS_DESCRIPTION,
      flag: e.Permissions.MOVE_MEMBERS
    },
    [e.Permissions.REQUEST_TO_SPEAK.toString()]: {
      title: E.REQUEST_TO_SPEAK,
      description: E.ROLE_PERMISSIONS_REQUEST_TO_SPEAK_DESCRIPTION,
      flag: e.Permissions.REQUEST_TO_SPEAK,
      isExperimental: !0
    },
    [e.Permissions.ADMINISTRATOR.toString()]: {
      title: E.ADMINISTRATOR,
      description: "string" == typeof E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION ? E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION : E.ROLE_PERMISSIONS_ADMINISTRATOR_DESCRIPTION.format(),
      flag: e.Permissions.ADMINISTRATOR
    },
    [e.Permissions.MANAGE_EVENTS.toString()]: {
      title: E.MANAGE_EVENTS,
      description: E.ROLE_PERMISSIONS_MANAGE_EVENTS_DESCRIPTION,
      flag: e.Permissions.MANAGE_EVENTS
    },
    [e.Permissions.CREATE_EVENTS.toString()]: {
      title: E.CREATE_EVENTS,
      description: E.ROLE_PERMISSIONS_CREATE_EVENTS_DESCRIPTION,
      flag: e.Permissions.CREATE_EVENTS
    },
    [e.Permissions.MANAGE_THREADS.toString()]: {
      title: S.showForumPermissions ? E.MANAGE_THREADS_AND_FORUM_POSTS : E.MANAGE_THREADS,
      description: S.showForumPermissions ? E.ROLE_PERMISSIONS_MANAGE_THREADS_AND_FORUMS_DESCRIPTION : E.ROLE_PERMISSIONS_MANAGE_THREADS_DESCRIPTION,
      flag: e.Permissions.MANAGE_THREADS
    },
    [e.Permissions.CREATE_PUBLIC_THREADS.toString()]: {
      title: E.CREATE_PUBLIC_THREADS,
      description: E.ROLE_PERMISSIONS_CREATE_PUBLIC_THREADS_DESCRIPTION,
      flag: e.Permissions.CREATE_PUBLIC_THREADS
    },
    [e.Permissions.CREATE_PRIVATE_THREADS.toString()]: {
      title: E.CREATE_PRIVATE_THREADS,
      description: E.ROLE_PERMISSIONS_CREATE_PRIVATE_THREADS_DESCRIPTION,
      flag: e.Permissions.CREATE_PRIVATE_THREADS
    },
    [e.Permissions.SEND_MESSAGES_IN_THREADS.toString()]: {
      title: S.showForumPermissions ? E.SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS : E.SEND_MESSAGES_IN_THREADS,
      description: S.showForumPermissions ? E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_AND_FORUM_POSTS_DESCRIPTION : E.ROLE_PERMISSIONS_SEND_MESSAGES_IN_THREADS_DESCRIPTION,
      flag: e.Permissions.SEND_MESSAGES_IN_THREADS
    },
    [e.Permissions.USE_CLYDE_AI.toString()]: {
      title: E.ROLE_PERMISSIONS_USE_CLYDE_AI,
      description: E.ROLE_PERMISSIONS_USE_CLYDE_AI_GUILD_DESCRIPTION,
      flag: e.Permissions.USE_CLYDE_AI
    },
    [e.Permissions.SET_VOICE_CHANNEL_STATUS.toString()]: {
      title: E.VOICE_CHANNEL_STATUS_PERMISSION_TITLE,
      description: E.VOICE_CHANNEL_STATUS_PERMISSION_DESCRIPTION,
      flag: e.Permissions.SET_VOICE_CHANNEL_STATUS
    }
  }
}

function I(E, S) {
  var s;
  let I = n(E, S),
    t = [function(E, S, s) {
      let n = [e.Permissions.VIEW_CHANNEL, e.Permissions.MANAGE_CHANNELS, e.Permissions.MANAGE_ROLES, e.Permissions.CREATE_GUILD_EXPRESSIONS, e.Permissions.MANAGE_GUILD_EXPRESSIONS, e.Permissions.VIEW_AUDIT_LOG, e.Permissions.VIEW_GUILD_ANALYTICS];
      return s.showCreatorMonetizationAnalyticsPermission && n.push(e.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS), n.push(e.Permissions.MANAGE_WEBHOOKS), n.push(e.Permissions.MANAGE_GUILD), i({
        title: S.ROLE_PERMISSIONS_SECTION_GENERAL_GUILD,
        permissions: _(n, E)
      })
    }(I, E, S), function(E, S) {
      let s = [e.Permissions.CREATE_INSTANT_INVITE, e.Permissions.CHANGE_NICKNAME, e.Permissions.MANAGE_NICKNAMES, e.Permissions.KICK_MEMBERS, e.Permissions.BAN_MEMBERS, e.Permissions.MODERATE_MEMBERS];
      return i({
        title: S.ROLE_PERMISSIONS_SECTION_MEMBERSHIP,
        permissions: _(s, E)
      })
    }(I, E), function(E, S, s) {
      let n = [e.Permissions.SEND_MESSAGES, e.Permissions.SEND_MESSAGES_IN_THREADS, e.Permissions.CREATE_PUBLIC_THREADS, e.Permissions.CREATE_PRIVATE_THREADS, e.Permissions.EMBED_LINKS, e.Permissions.ATTACH_FILES, e.Permissions.ADD_REACTIONS, e.Permissions.USE_EXTERNAL_EMOJIS, e.Permissions.USE_EXTERNAL_STICKERS, e.Permissions.MENTION_EVERYONE, e.Permissions.MANAGE_MESSAGES, e.Permissions.MANAGE_THREADS, e.Permissions.READ_MESSAGE_HISTORY, e.Permissions.SEND_TTS_MESSAGES, e.Permissions.USE_APPLICATION_COMMANDS, e.Permissions.SEND_VOICE_MESSAGES, e.Permissions.USE_CLYDE_AI];
      !s.showClydeAIPermissions && (n = n.filter(E => E !== e.Permissions.USE_CLYDE_AI));
      let I = {
        title: S.ROLE_PERMISSIONS_SECTION_TEXT,
        permissions: _(n, E)
      };
      return i(I)
    }(I, E, S), function(E, S, s) {
      let n = [e.Permissions.CONNECT, e.Permissions.SPEAK, e.Permissions.STREAM, e.Permissions.USE_EMBEDDED_ACTIVITIES, e.Permissions.USE_SOUNDBOARD, e.Permissions.USE_EXTERNAL_SOUNDS, e.Permissions.USE_VAD, e.Permissions.PRIORITY_SPEAKER, e.Permissions.MUTE_MEMBERS, e.Permissions.DEAFEN_MEMBERS, e.Permissions.MOVE_MEMBERS, e.Permissions.SET_VOICE_CHANNEL_STATUS],
        I = {
          title: S.ROLE_PERMISSIONS_SECTION_VOICE,
          permissions: _(n, E)
        };
      return i(I)
    }(I, E, 0)];
  return S.showStageChannelPermissions && t.push(function(E, S, s) {
    let n = {
      title: S.ROLE_PERMISSIONS_SECTION_STAGE,
      permissions: _([e.Permissions.REQUEST_TO_SPEAK], E)
    };
    return i(n, s.showExperimental)
  }(I, E, S)), t.push(function(E, S, s) {
    let n = {
      title: S.ROLE_PERMISSIONS_SECTION_GUILD_EVENTS,
      permissions: _([e.Permissions.CREATE_EVENTS, e.Permissions.MANAGE_EVENTS], E)
    };
    return i(n, s.showExperimental)
  }(I, E, S)), t.push((s = I, i({
    title: E.ROLE_PERMISSIONS_SECTION_ADVANCED,
    permissions: _([e.Permissions.ADMINISTRATOR], s)
  }))), t
}

function t(E, S) {
  let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    showManageWebhooks: !0
  };
  return {
    title: S,
    permissions: _((null == s ? void 0 : s.showManageWebhooks) ? [e.Permissions.VIEW_CHANNEL, e.Permissions.MANAGE_CHANNELS, e.Permissions.MANAGE_ROLES, e.Permissions.MANAGE_WEBHOOKS] : [e.Permissions.VIEW_CHANNEL, e.Permissions.MANAGE_CHANNELS, e.Permissions.MANAGE_ROLES], E)
  }
}

function r(E, S) {
  return {
    title: S,
    permissions: _([e.Permissions.CREATE_INSTANT_INVITE], E)
  }
}

function N(E, S, s) {
  let i = [e.Permissions.SEND_MESSAGES, e.Permissions.SEND_MESSAGES_IN_THREADS, e.Permissions.CREATE_PUBLIC_THREADS, e.Permissions.CREATE_PRIVATE_THREADS, e.Permissions.EMBED_LINKS, e.Permissions.ATTACH_FILES, e.Permissions.ADD_REACTIONS, e.Permissions.USE_EXTERNAL_EMOJIS, e.Permissions.USE_EXTERNAL_STICKERS, e.Permissions.MENTION_EVERYONE, e.Permissions.MANAGE_MESSAGES, e.Permissions.MANAGE_THREADS, e.Permissions.READ_MESSAGE_HISTORY, e.Permissions.SEND_TTS_MESSAGES, e.Permissions.USE_APPLICATION_COMMANDS, e.Permissions.SEND_VOICE_MESSAGES, e.Permissions.USE_CLYDE_AI, e.Permissions.USE_EMBEDDED_ACTIVITIES];
  return (!s.showPrivateThreads || !s.showCreateThreads) && (i = i.filter(E => E !== e.Permissions.CREATE_PRIVATE_THREADS)), !s.showCreateThreads && (i = i.filter(E => E !== e.Permissions.CREATE_PUBLIC_THREADS)), !s.showClydeAIPermissions && (i = i.filter(E => E !== e.Permissions.USE_CLYDE_AI)), {
    title: S,
    description: s.sectionDescription,
    permissions: _(i, E)
  }
}

function o(E, S) {
  let s = [e.Permissions.CONNECT, e.Permissions.SPEAK, e.Permissions.STREAM, e.Permissions.USE_EMBEDDED_ACTIVITIES, e.Permissions.USE_SOUNDBOARD, e.Permissions.USE_EXTERNAL_SOUNDS, e.Permissions.USE_VAD, e.Permissions.PRIORITY_SPEAKER, e.Permissions.MUTE_MEMBERS, e.Permissions.DEAFEN_MEMBERS, e.Permissions.MOVE_MEMBERS, e.Permissions.SET_VOICE_CHANNEL_STATUS];
  return {
    title: S,
    permissions: _(s, E)
  }
}

function R(E, S, s) {
  let i = [e.Permissions.SEND_MESSAGES, e.Permissions.EMBED_LINKS, e.Permissions.ATTACH_FILES, e.Permissions.ADD_REACTIONS, e.Permissions.USE_EXTERNAL_EMOJIS, e.Permissions.USE_EXTERNAL_STICKERS, e.Permissions.MENTION_EVERYONE, e.Permissions.MANAGE_MESSAGES, e.Permissions.READ_MESSAGE_HISTORY, e.Permissions.SEND_TTS_MESSAGES, e.Permissions.USE_APPLICATION_COMMANDS, e.Permissions.SEND_VOICE_MESSAGES];
  return {
    title: S,
    description: s.sectionDescription,
    permissions: _(i, E)
  }
}

function A(E, S, s) {
  return {
    title: S,
    permissions: _(s ? [e.Permissions.CONNECT, e.Permissions.STREAM, e.Permissions.MUTE_MEMBERS, e.Permissions.MOVE_MEMBERS] : [e.Permissions.CONNECT, e.Permissions.MUTE_MEMBERS, e.Permissions.MOVE_MEMBERS], E)
  }
}

function O(E, S) {
  return {
    title: S,
    permissions: _([e.Permissions.REQUEST_TO_SPEAK, e.Permissions.MENTION_EVERYONE], E)
  }
}

function P(E, S) {
  let s = [e.Permissions.CREATE_EVENTS, e.Permissions.MANAGE_EVENTS],
    i = {
      title: S,
      permissions: _(s, E)
    };
  return i
}

function T(E) {
  return null == E ? E : "string" == typeof E ? E.trim() : "function" == typeof E.format ? E.format() : E
}