"use strict";
n.r(t), n.d(t, {
  default: function() {
    return E
  },
  useChannelNotificationSettingsItemInner: function() {
    return h
  },
  useChannelNotificationCustomSettingsItem: function() {
    return M
  }
}), n("222007"), n("702976");
var i = n("37983"),
  a = n("884691"),
  s = n("446674"),
  l = n("77078"),
  o = n("519705"),
  r = n("437756"),
  d = n("277796"),
  u = n("507313"),
  S = n("282109"),
  g = n("34676"),
  _ = n("49111"),
  c = n("133335"),
  N = n("397336"),
  f = n("782340");

function E(e) {
  return (0, i.jsx)(l.MenuItem, {
    id: "channel_notification_settings",
    label: f.default.Messages.NOTIFICATIONS,
    children: h(e)
  })
}

function h(e) {
  let t = (0, r.useChannelPresetSettings)(e),
    n = (0, r.useChannelPresetInheritance)(e),
    d = t.preset === u.Presets.CUSTOM && !n.inherited,
    [g, c] = a.useState(d),
    [N, E] = a.useState(!1),
    h = N ? u.Presets.CUSTOM : t.preset,
    O = M(e, () => E(!1)),
    I = (0, s.useStateFromStores)([S.default], () => S.default.getNewForumThreadsCreated(e));
  if (e.type === _.ChannelTypes.GUILD_VOICE) return null;
  let T = "parent" === n.inheritedFrom ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT;
  return e.type === _.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(l.MenuGroup, {
    children: [(0, i.jsx)(l.MenuRadioItem, {
      id: "cns_default",
      label: T,
      checked: n.inherited,
      group: "channel_notification_settings",
      subtext: t.notification === _.UserNotificationSettings.NO_MESSAGES ? f.default.Messages.FORM_LABEL_NOTHING : f.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
      action: () => (0, r.updateChannelToGuildDefault)(e.guild_id, e.id)
    }), (0, i.jsx)(l.MenuRadioItem, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !n.inherited && t.notification !== _.UserNotificationSettings.NO_MESSAGES,
      label: f.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
      action: () => (0, r.updateChannelNotificationSetting)(e.guild_id, e.id, _.UserNotificationSettings.ONLY_MENTIONS)
    }), (0, i.jsx)(l.MenuRadioItem, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: f.default.Messages.FORM_LABEL_NOTHING,
      checked: !n.inherited && t.notification === _.UserNotificationSettings.NO_MESSAGES,
      action: () => (0, r.updateChannelNotificationSetting)(e.guild_id, e.id, _.UserNotificationSettings.NO_MESSAGES)
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [e.isForumLikeChannel() ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: f.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: I,
        action: () => o.default.setForumThreadsCreated(e, !I)
      }), (0, i.jsx)(l.MenuSeparator, {})]
    }) : null, (0, i.jsxs)(l.MenuGroup, {
      children: [(0, i.jsx)(l.MenuRadioItem, {
        id: "cns_default",
        label: T,
        group: "channel_notification_settings",
        checked: n.inherited && !N,
        subtext: n.inheritedPreset,
        action: () => ((0, r.updateChannelToGuildDefault)(e.guild_id, e.id), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: f.default.Messages.NOTIFICATION_PRESET_1,
        checked: !n.inherited && h === u.Presets.ALL_MESSAGES,
        action: () => ((0, r.updateChannelPreset)(e.guild_id, e.id, u.Presets.ALL_MESSAGES), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: f.default.Messages.NOTIFICATION_PRESET_2,
        checked: !n.inherited && h === u.Presets.MENTIONS,
        action: () => ((0, r.updateChannelPreset)(e.guild_id, e.id, u.Presets.MENTIONS), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: f.default.Messages.NOTIFICATION_PRESET_3,
        checked: !n.inherited && h === u.Presets.NOTHING,
        action: () => ((0, r.updateChannelPreset)(e.guild_id, e.id, u.Presets.NOTHING), E(!1))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: f.default.Messages.NOTIFICATION_PRESET_CUSTOM,
        checked: N || !n.inherited && h === u.Presets.CUSTOM,
        action: () => (c(!0), E(!0))
      })]
    }), (g || d) && O]
  })
}

function M(e, t) {
  let {
    notification: n,
    unread: a
  } = (0, r.useChannelPresetSettings)(e), s = e => {
    e(), t()
  }, u = t => {
    let n = {
      message_notifications: t
    };
    t === _.UserNotificationSettings.ALL_MESSAGES && a !== c.UnreadSetting.ALL_MESSAGES && (n.flags = (0, d.withChannelUnreadFlags)(S.default.getChannelIdFlags(e.guild_id, e.id), N.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), o.default.updateChannelOverrideSettings(e.guild_id, e.id, n, g.NotificationLabel.notifications(t))
  };
  return (0, i.jsxs)(l.MenuGroup, {
    children: [(0, i.jsxs)(l.MenuItem, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, i.jsx)(l.MenuRadioItem, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === c.UnreadSetting.ALL_MESSAGES,
        label: f.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        action: () => s(() => (0, r.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ALL_MESSAGES))
      }), (0, i.jsx)(l.MenuRadioItem, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === c.UnreadSetting.ONLY_MENTIONS,
        label: f.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        disabled: a !== c.UnreadSetting.ONLY_MENTIONS && n === _.UserNotificationSettings.ALL_MESSAGES,
        subtext: a !== c.UnreadSetting.ONLY_MENTIONS && n === _.UserNotificationSettings.ALL_MESSAGES ? f.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
        action: () => s(() => (0, r.updateChannelUnreadSetting)(e.guild_id, e.id, c.UnreadSetting.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, i.jsxs)(l.MenuItem, {
      id: "push_settings",
      label: f.default.Messages.NOTIFICATIONS,
      children: [(0, i.jsx)(l.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: f.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        checked: n === _.UserNotificationSettings.ALL_MESSAGES,
        subtext: a !== c.UnreadSetting.ALL_MESSAGES && n !== _.UserNotificationSettings.ALL_MESSAGES ? f.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
        action: () => s(() => u(_.UserNotificationSettings.ALL_MESSAGES))
      }), (0, i.jsx)(l.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: n === _.UserNotificationSettings.ONLY_MENTIONS,
        label: f.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        action: () => s(() => u(_.UserNotificationSettings.ONLY_MENTIONS))
      }), (0, i.jsx)(l.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: f.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
        checked: n === _.UserNotificationSettings.NO_MESSAGES,
        action: () => s(() => u(_.UserNotificationSettings.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}