"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
}), n("424973");
var l = n("233069"),
  i = n("27618"),
  r = n("697218"),
  s = n("679653"),
  a = n("49111"),
  o = n("782340");

function u(e) {
  let {
    isSubscriptionGated: t,
    needSubscriptionToAccess: n
  } = e;
  if (t) return n ? o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_LOCKED : o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_PREMIUM_UNLOCKED
}

function d(e) {
  let t, {
      channel: n,
      unread: d = !1,
      mentionCount: c = 0,
      userCount: f,
      embeddedActivitiesCount: E,
      isSubscriptionGated: _,
      needSubscriptionToAccess: p
    } = e,
    h = (0, s.computeChannelName)(n, r.default, i.default);
  switch (n.type) {
    case a.ChannelTypes.DM:
      t = d ? o.default.Messages.DIRECT_MESSAGE_A11Y_LABEL_WITH_UNREADS : o.default.Messages.DIRECT_MESSAGE_A11Y_LABEL;
      break;
    case a.ChannelTypes.GROUP_DM:
      t = d ? o.default.Messages.GROUP_MESSAGE_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GROUP_MESSAGE_A11Y_LABEL;
      break;
    case a.ChannelTypes.GUILD_STORE:
      t = o.default.Messages.GUILD_SIDEBAR_STORE_CHANNEL_A11Y_LABEL;
      break;
    case a.ChannelTypes.GUILD_DIRECTORY:
      t = o.default.Messages.GUILD_SIDEBAR_DIRECTORY_CHANNEL_A11Y_LABEL;
      break;
    case a.ChannelTypes.GUILD_ANNOUNCEMENT:
      t = c > 0 ? o.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? o.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GUILD_SIDEBAR_ANNOUNCEMENT_CHANNEL_A11Y_LABEL;
      break;
    case a.ChannelTypes.GUILD_VOICE:
      let S = [o.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL.format({
        channelName: n.name
      })];
      if (c > 0 && S.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_MENTIONS.format({
          mentionCount: c
        })), d && S.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_UNREAD), null != f) {
        let e = n.userLimit;
        null != e && e > 0 ? S.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_LIMIT.format({
          userCount: f,
          limit: e
        })) : S.push(o.default.Messages.GUILD_SIDEBAR_VOICE_CHANNEL_A11Y_LABEL_USERS.format({
          userCount: f
        }))
      }
      null != E && E > 0 && S.push(o.default.Messages.GUILD_SIDEBAR_CHANNEL_A11Y_LABEL_ACTIVITIES.format({
        activitiesCount: E
      }));
      let T = u({
        isSubscriptionGated: _,
        needSubscriptionToAccess: p
      });
      return null != T && S.push(T), S.join(", ");
    case a.ChannelTypes.GUILD_STAGE_VOICE:
      t = o.default.Messages.GUILD_SIDEBAR_STAGE_CHANNEL_A11Y_LABEL;
      break;
    default:
      t = l.THREAD_CHANNEL_TYPES.has(n.type) ? c > 0 ? o.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS : d ? o.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL : c > 0 ? o.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_MENTIONS : d ? o.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL_WITH_UNREADS : o.default.Messages.GUILD_SIDEBAR_DEFAULT_CHANNEL_A11Y_LABEL
  }
  let m = [t.format({
      channelName: h,
      mentionCount: c
    })],
    C = u({
      isSubscriptionGated: _,
      needSubscriptionToAccess: p
    });
  return null != C && m.push(C), m.join(", ")
}