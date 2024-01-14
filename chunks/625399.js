"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  },
  useChannelNotificationSettingsItemInner: function() {
    return E
  },
  useChannelNotificationCustomSettingsItem: function() {
    return M
  }
}), n("222007"), n("702976");
var i = n("37983"),
  a = n("884691"),
  s = n("77078"),
  l = n("519705"),
  o = n("437756"),
  d = n("277796"),
  r = n("507313"),
  u = n("282109"),
  S = n("34676"),
  g = n("49111"),
  _ = n("133335"),
  c = n("397336"),
  N = n("782340");

function f(e) {
  return (0, i.jsx)(s.MenuItem, {
    id: "channel_notification_settings",
    label: N.default.Messages.NOTIFICATIONS,
    children: E(e)
  })
}

function E(e) {
  let t = (0, o.useChannelPresetSettings)(e),
    n = (0, o.useChannelPresetInheritance)(e),
    l = t.preset === r.Presets.CUSTOM && !n.inherited,
    [d, u] = a.useState(l),
    [S, _] = a.useState(!1),
    c = S ? r.Presets.CUSTOM : t.preset,
    f = M(e, () => _(!1));
  if (e.type === g.ChannelTypes.GUILD_VOICE) return null;
  let E = "parent" === n.inheritedFrom ? N.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : N.default.Messages.FORM_LABEL_DEFAULT;
  return e.type === g.ChannelTypes.GUILD_STAGE_VOICE ? (0, i.jsxs)(s.MenuGroup, {
    children: [(0, i.jsx)(s.MenuRadioItem, {
      id: "cns_default",
      label: E,
      checked: n.inherited,
      group: "channel_notification_settings",
      subtext: t.notification === g.UserNotificationSettings.NO_MESSAGES ? N.default.Messages.FORM_LABEL_NOTHING : N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
      action: () => (0, o.updateChannelToGuildDefault)(e.guild_id, e.id)
    }), (0, i.jsx)(s.MenuRadioItem, {
      id: "cns_only_mention",
      group: "channel_notification_settings",
      checked: !n.inherited && t.notification !== g.UserNotificationSettings.NO_MESSAGES,
      label: N.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY,
      action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.ONLY_MENTIONS)
    }), (0, i.jsx)(s.MenuRadioItem, {
      id: "cns_no_message",
      group: "channel_notification_settings",
      label: N.default.Messages.FORM_LABEL_NOTHING,
      checked: !n.inherited && t.notification === g.UserNotificationSettings.NO_MESSAGES,
      action: () => (0, o.updateChannelNotificationSetting)(e.guild_id, e.id, g.UserNotificationSettings.NO_MESSAGES)
    })]
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(s.MenuGroup, {
      children: [(0, i.jsx)(s.MenuRadioItem, {
        id: "cns_default",
        label: E,
        group: "channel_notification_settings",
        checked: n.inherited && !S,
        subtext: n.inheritedPreset,
        action: () => ((0, o.updateChannelToGuildDefault)(e.guild_id, e.id), _(!1))
      }), (0, i.jsx)(s.MenuRadioItem, {
        id: "cns_everything",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_1,
        checked: !n.inherited && c === r.Presets.ALL_MESSAGES,
        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.ALL_MESSAGES), _(!1))
      }), (0, i.jsx)(s.MenuRadioItem, {
        id: "cns_essentials",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_2,
        checked: !n.inherited && c === r.Presets.MENTIONS,
        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.MENTIONS), _(!1))
      }), (0, i.jsx)(s.MenuRadioItem, {
        id: "cns_nothing",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_3,
        checked: !n.inherited && c === r.Presets.NOTHING,
        action: () => ((0, o.updateChannelPreset)(e.guild_id, e.id, r.Presets.NOTHING), _(!1))
      }), (0, i.jsx)(s.MenuRadioItem, {
        id: "cns_custom",
        group: "channel_notification_settings",
        label: N.default.Messages.NOTIFICATION_PRESET_CUSTOM,
        checked: S || !n.inherited && c === r.Presets.CUSTOM,
        action: () => (u(!0), _(!0))
      })]
    }), (d || l) && f]
  })
}

function M(e, t) {
  let {
    notification: n,
    unread: a
  } = (0, o.useChannelPresetSettings)(e), r = e => {
    e(), t()
  }, f = t => {
    let n = {
      message_notifications: t
    };
    t === g.UserNotificationSettings.ALL_MESSAGES && a !== _.UnreadSetting.ALL_MESSAGES && (n.flags = (0, d.withChannelUnreadFlags)(u.default.getChannelIdFlags(e.guild_id, e.id), c.ChannelNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), l.default.updateChannelOverrideSettings(e.guild_id, e.id, n, S.NotificationLabel.notifications(t))
  };
  return (0, i.jsxs)(s.MenuGroup, {
    children: [(0, i.jsxs)(s.MenuItem, {
      id: "unread_setting",
      label: "Unread Badges",
      children: [(0, i.jsx)(s.MenuRadioItem, {
        id: "unread_setting_all_messages",
        group: "unread_setting",
        checked: a === _.UnreadSetting.ALL_MESSAGES,
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        action: () => r(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ALL_MESSAGES))
      }), (0, i.jsx)(s.MenuRadioItem, {
        id: "unread_setting_mention_only",
        group: "unread_setting",
        checked: a === _.UnreadSetting.ONLY_MENTIONS,
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        disabled: a !== _.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES,
        subtext: a !== _.UnreadSetting.ONLY_MENTIONS && n === g.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0,
        action: () => r(() => (0, o.updateChannelUnreadSetting)(e.guild_id, e.id, _.UnreadSetting.ONLY_MENTIONS))
      })]
    }, "unread_setting"), (0, i.jsxs)(s.MenuItem, {
      id: "push_settings",
      label: N.default.Messages.NOTIFICATIONS,
      children: [(0, i.jsx)(s.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything",
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
        checked: n === g.UserNotificationSettings.ALL_MESSAGES,
        subtext: a !== _.UnreadSetting.ALL_MESSAGES && n !== g.UserNotificationSettings.ALL_MESSAGES ? N.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0,
        action: () => r(() => f(g.UserNotificationSettings.ALL_MESSAGES))
      }), (0, i.jsx)(s.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything_mention",
        checked: n === g.UserNotificationSettings.ONLY_MENTIONS,
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
        action: () => r(() => f(g.UserNotificationSettings.ONLY_MENTIONS))
      }), (0, i.jsx)(s.MenuRadioItem, {
        group: "notification-preset",
        id: "push_settings_everything_nothing",
        label: N.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
        checked: n === g.UserNotificationSettings.NO_MESSAGES,
        action: () => r(() => f(g.UserNotificationSettings.NO_MESSAGES))
      })]
    }, "push_settings")]
  })
}