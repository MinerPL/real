"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
}), n("222007");
var s, i, r = n("599110"),
  a = n("253981"),
  o = n("340454"),
  d = n("361572"),
  u = n("49111");
(i = s || (s = {})).MESSAGE = "Discord Message Link", i.CHANNEL = "Discord Channel Link", i.SERVER_INVITE = "Discord Server Invite", i.GIFT = "Discord Gift Link", i.UNKNOWN = "Unknown";
let l = [e => o.default.isInvite(e) ? "Discord Server Invite" : null, e => {
  let t = a.default.safeParseWithQuery(e);
  if (null == t) return null;
  let n = (0, d.tryParseChannelPath)(t.path);
  return null == n ? null : f({
    guildId: n.guildId,
    channelId: n.channelId,
    messageId: n.messageId
  })
}];

function f(e) {
  return null != e.guildId && null != e.channelId && null != e.messageId ? "Discord Message Link" : null != e.guildId && null != e.channelId ? "Discord Channel Link" : "Unknown"
}
var _ = {
  trackDiscordLinkClicked: function(e) {
    r.default.track(u.AnalyticEvents.LINK_CLICKED, {
      is_discord_link: !0,
      discord_link_type: f(e)
    })
  },
  trackLinkClicked: function(e, t) {
    var n, s;
    if (null == e && null == t) return;
    let i = a.default.isDiscordUrl(e, !0) || null != t;
    r.default.track(u.AnalyticEvents.LINK_CLICKED, {
      is_discord_link: i,
      discord_link_type: i ? (n = e, null == (s = t) && null == n ? "Unknown" : null == s ? function(e) {
        for (let t of l) {
          let n = t(e);
          if (null != n) return n
        }
        return "Unknown"
      }(n) : f(s)) : null
    })
  },
  trackAnnouncementMessageLinkClicked: function(e) {
    let {
      messageId: t,
      channelId: n,
      guildId: s,
      sourceChannelId: i,
      sourceGuildId: a
    } = e;
    r.default.track(u.AnalyticEvents.ANNOUNCEMENT_MESSAGE_LINK_CLICKED, {
      message_id: t,
      channel_id: n,
      guild_id: s,
      source_channel_id: i,
      source_guild_id: a
    })
  }
}