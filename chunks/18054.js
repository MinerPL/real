"use strict";
E.r(e), E.d(e, {
  init: function() {
    return a
  },
  close: function() {
    return o
  },
  setSection: function() {
    return r
  },
  updateChannel: function() {
    return D
  },
  saveChannel: function() {
    return d
  },
  deleteChannel: function() {
    return s
  },
  default: function() {
    return A
  }
}), E("702976");
var C = E("872717"),
  n = E("913144"),
  l = E("81732");
E("21121"), E("693051");
var t = E("263024");
E("492114");
var F = E("42203"),
  i = E("54239"),
  u = E("49111");

function a(B, e, E) {
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_INIT",
    channelId: B,
    location: e,
    subsection: E
  })
}

function o() {
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_CLOSE"
  })
}

function r(B) {
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_SET_SECTION",
    section: B
  })
}

function D(B) {
  let {
    name: e,
    type: E,
    topic: C,
    bitrate: l,
    userLimit: t,
    nsfw: F,
    flags: i,
    rateLimitPerUser: u,
    defaultThreadRateLimitPerUser: a,
    defaultAutoArchiveDuration: o,
    template: r,
    defaultReactionEmoji: D,
    rtcRegion: d,
    videoQualityMode: s,
    autoArchiveDuration: A,
    locked: c,
    invitable: _,
    availableTags: N,
    defaultSortOrder: f,
    defaultForumLayout: m,
    iconEmoji: T,
    themeColor: h
  } = B;
  n.default.dispatch({
    type: "CHANNEL_SETTINGS_UPDATE",
    name: e,
    channelType: E,
    topic: C,
    bitrate: l,
    userLimit: t,
    nsfw: F,
    flags: i,
    rateLimitPerUser: u,
    defaultThreadRateLimitPerUser: a,
    defaultAutoArchiveDuration: o,
    template: r,
    defaultReactionEmoji: D,
    rtcRegion: d,
    videoQualityMode: s,
    autoArchiveDuration: A,
    locked: c,
    invitable: _,
    availableTags: N,
    defaultSortOrder: f,
    defaultForumLayout: m,
    iconEmoji: T,
    themeColor: h
  })
}
async function d(B, e) {
  let {
    name: E,
    type: i,
    position: a,
    topic: o,
    bitrate: r,
    userLimit: D,
    nsfw: d,
    flags: s,
    permissionOverwrites: A,
    rateLimitPerUser: c,
    defaultThreadRateLimitPerUser: _,
    defaultAutoArchiveDuration: N,
    template: f,
    defaultReactionEmoji: m,
    rtcRegion: T,
    videoQualityMode: h,
    autoArchiveDuration: v,
    locked: S,
    invitable: I,
    availableTags: p,
    defaultSortOrder: L,
    defaultForumLayout: g,
    iconEmoji: O,
    themeColor: U
  } = e, y = F.default.getChannel(B);
  return n.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT"
  }), await t.default.unarchiveThreadIfNecessary(B), C.default.patch({
    url: u.Endpoints.CHANNEL(B),
    body: {
      name: E,
      type: i,
      position: a,
      topic: o,
      bitrate: r,
      user_limit: D,
      nsfw: d,
      flags: s,
      permission_overwrites: A,
      rate_limit_per_user: c,
      default_thread_rate_limit_per_user: _,
      default_auto_archive_duration: N,
      template: f,
      rtc_region: T,
      video_quality_mode: h,
      auto_archive_duration: v,
      locked: S,
      invitable: I,
      default_reaction_emoji: null != m ? {
        emoji_id: null == m ? void 0 : m.emojiId,
        emoji_name: null == m ? void 0 : m.emojiName
      } : null === m ? null : void 0,
      available_tags: null == p ? void 0 : p.map(B => ({
        id: B.id,
        name: B.name,
        emoji_id: B.emojiId,
        emoji_name: B.emojiName,
        moderated: B.moderated
      })),
      default_sort_order: L,
      default_forum_layout: g,
      icon_emoji: null != O ? {
        id: O.id,
        name: O.name
      } : null === O ? null : void 0,
      theme_color: U
    },
    oldFormErrors: !0
  }).then(e => {
    n.default.dispatch({
      type: "CHANNEL_SETTINGS_SUBMIT_SUCCESS",
      channelId: B
    });
    let E = null == y ? void 0 : y.getGuildId();
    return null != E && !(null == y ? void 0 : y.isThread()) && l.default.checkGuildTemplateDirty(E), e
  }, B => (n.default.dispatch({
    type: "CHANNEL_SETTINGS_SUBMIT_FAILURE",
    errors: B.body
  }), B))
}

function s(B) {
  let e = F.default.getChannel(B);
  C.default.delete({
    url: u.Endpoints.CHANNEL(B),
    oldFormErrors: !0
  }).then(() => {
    let B = null == e ? void 0 : e.getGuildId();
    null != B && !(null == e ? void 0 : e.isThread()) && l.default.checkGuildTemplateDirty(B), o()
  })
}
var A = {
  init: a,
  open: function(B, e, E) {
    a(B, e, E), (0, i.pushLayer)(u.Layers.CHANNEL_SETTINGS)
  },
  close: o,
  setSection: r,
  selectPermissionOverwrite: function(B) {
    n.default.dispatch({
      type: "CHANNEL_SETTINGS_OVERWRITE_SELECT",
      overwriteId: B
    })
  },
  updateChannel: D,
  saveChannel: d,
  deleteChannel: s,
  updateVoiceChannelStatus: function(B, e) {
    return C.default.put({
      url: u.Endpoints.UPDATE_VOICE_CHANNEL_STATUS(B),
      body: {
        status: e
      }
    })
  }
}