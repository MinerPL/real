"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("702976");
var s = n("37983"),
  i = n("884691"),
  a = n("446674"),
  l = n("77078"),
  u = n("519705"),
  r = n("277796"),
  o = n("546770"),
  d = n("507313"),
  c = n("282109"),
  f = n("34676"),
  S = n("49111"),
  E = n("133335"),
  g = n("397336"),
  _ = n("782340");

function M(e) {
  return (0, s.jsxs)(l.MenuItem, {
    id: "notification",
    label: _.default.Messages.NOTIFICATIONS,
    action: () => {
      (0, l.openModalLazy)(async () => {
        let {
          default: t
        } = await n.el("747593").then(n.bind(n, "747593"));
        return n => (0, s.jsx)(t, {
          ...n,
          guildId: e
        })
      })
    },
    children: [function(e) {
      let [t, n] = i.useState(!1), [M, N] = i.useState(!1), h = (0, a.useStateFromStores)([c.default], () => c.default.getGuildUnreadSetting(e)), I = (0, a.useStateFromStores)([c.default], () => c.default.getMessageNotifications(e)), p = M ? d.Presets.CUSTOM : (0, d.presetFromSettings)(h, I), A = t => {
        N(!1);
        let n = {
          message_notifications: t
        };
        t === S.UserNotificationSettings.ALL_MESSAGES && h !== E.UnreadSetting.ALL_MESSAGES && (n.flags = (0, r.withGuildUnreadFlags)(c.default.getGuildFlags(e), g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES)), u.default.updateGuildNotificationSettings(e, n, f.NotificationLabel.notifications(t))
      }, T = t => {
        N(!1);
        let n = c.default.getGuildFlags(e);
        u.default.updateGuildNotificationSettings(e, {
          flags: (0, r.withGuildUnreadFlags)(n, t === E.UnreadSetting.ALL_MESSAGES ? g.GuildNotificationSettingsFlags.UNREADS_ALL_MESSAGES : g.GuildNotificationSettingsFlags.UNREADS_ONLY_MENTIONS)
        }, f.NotificationLabel.unreads(t))
      };
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsxs)(l.MenuGroup, {
          children: [(0, s.jsx)(l.MenuRadioItem, {
            id: "everything",
            group: "notification-preset",
            checked: p === d.Presets.ALL_MESSAGES,
            label: _.default.Messages.NOTIFICATION_PRESET_1,
            action: () => ((0, o.updateGuildPreset)(e, d.Presets.ALL_MESSAGES), N(!1))
          }), (0, s.jsx)(l.MenuRadioItem, {
            id: "essentials",
            group: "notification-preset",
            checked: p === d.Presets.MENTIONS,
            label: _.default.Messages.NOTIFICATION_PRESET_2,
            action: () => ((0, o.updateGuildPreset)(e, d.Presets.MENTIONS), N(!1))
          }), (0, s.jsx)(l.MenuRadioItem, {
            id: "nothing",
            group: "notification-preset",
            checked: p === d.Presets.NOTHING,
            label: _.default.Messages.NOTIFICATION_PRESET_3,
            action: () => ((0, o.updateGuildPreset)(e, d.Presets.NOTHING), N(!1))
          }), (0, s.jsx)(l.MenuRadioItem, {
            id: "custom",
            group: "notification-preset",
            checked: p === d.Presets.CUSTOM,
            action: () => (n(!0), N(!0)),
            label: _.default.Messages.NOTIFICATION_PRESET_CUSTOM
          })]
        }), (p === d.Presets.CUSTOM || t) && (0, s.jsxs)(l.MenuGroup, {
          children: [(0, s.jsxs)(l.MenuItem, {
            id: "unread_setting",
            label: "Unread Badges",
            children: [(0, s.jsx)(l.MenuRadioItem, {
              id: "unread_setting_all_messages",
              group: "unread_setting",
              checked: h === E.UnreadSetting.ALL_MESSAGES,
              label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              action: () => T(E.UnreadSetting.ALL_MESSAGES)
            }), (0, s.jsx)(l.MenuRadioItem, {
              id: "unread_setting_mention_only",
              group: "unread_setting",
              checked: h === E.UnreadSetting.ONLY_MENTIONS,
              label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => T(E.UnreadSetting.ONLY_MENTIONS),
              disabled: h !== E.UnreadSetting.ONLY_MENTIONS && I === S.UserNotificationSettings.ALL_MESSAGES,
              subtext: h !== E.UnreadSetting.ONLY_MENTIONS && I === S.UserNotificationSettings.ALL_MESSAGES ? _.default.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED : void 0
            })]
          }, "unread_setting"), (0, s.jsxs)(l.MenuItem, {
            id: "push_settings",
            label: _.default.Messages.NOTIFICATIONS,
            children: [(0, s.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything",
              label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
              checked: I === S.UserNotificationSettings.ALL_MESSAGES,
              action: () => A(S.UserNotificationSettings.ALL_MESSAGES),
              subtext: h !== E.UnreadSetting.ALL_MESSAGES && I !== S.UserNotificationSettings.ALL_MESSAGES ? _.default.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING : void 0
            }), (0, s.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_mention",
              checked: I === S.UserNotificationSettings.ONLY_MENTIONS,
              label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
              action: () => A(S.UserNotificationSettings.ONLY_MENTIONS)
            }), (0, s.jsx)(l.MenuRadioItem, {
              group: "notification-preset",
              id: "push_settings_everything_nothing",
              label: _.default.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
              checked: I === S.UserNotificationSettings.NO_MESSAGES,
              action: () => A(S.UserNotificationSettings.NO_MESSAGES)
            })]
          }, "push_settings")]
        })]
      })
    }(e), function(e) {
      let t = (0, a.useStateFromStoresObject)([c.default], () => ({
          highligths: c.default.getNotifyHighlights(e),
          mobilePush: c.default.isMobilePushEnabled(e),
          suppressRoles: c.default.isSuppressRolesEnabled(e),
          suppressEveryone: c.default.isSuppressEveryoneEnabled(e),
          muteScheduledEvents: c.default.isMuteScheduledEventsEnabled(e)
        })),
        n = u.default.updateGuildNotificationSettings;
      return (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsxs)(l.MenuGroup, {
          children: [(0, s.jsx)(l.MenuCheckboxItem, {
            id: "mention",
            checked: t.suppressEveryone,
            label: _.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
            action: () => n(e, {
              suppress_everyone: !t.suppressEveryone
            }, f.NotificationLabel.suppressEveryone(!t.suppressEveryone))
          }), (0, s.jsx)(l.MenuCheckboxItem, {
            id: "roles",
            checked: t.suppressRoles,
            label: _.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
            action: () => n(e, {
              suppress_roles: !t.suppressRoles
            }, f.NotificationLabel.suppressRoles(!t.suppressRoles))
          }), (0, s.jsx)(l.MenuCheckboxItem, {
            id: "hightlight",
            label: _.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS,
            checked: t.highligths === S.HighlightSettings.ENABLED,
            action: () => n(e, {
              notify_highlights: t.highligths === S.HighlightSettings.ENABLED ? S.HighlightSettings.DISABLED : S.HighlightSettings.ENABLED
            }, f.NotificationLabel.highlights(t.highligths !== S.HighlightSettings.ENABLED))
          })]
        }), (0, s.jsxs)(l.MenuGroup, {
          children: [(0, s.jsx)(l.MenuCheckboxItem, {
            id: "event",
            checked: t.muteScheduledEvents,
            label: _.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
            action: () => n(e, {
              mute_scheduled_events: !t.muteScheduledEvents
            }, f.NotificationLabel.mutedEvents(!t.muteScheduledEvents))
          }), (0, s.jsx)(l.MenuCheckboxItem, {
            id: "mobile_push",
            checked: t.mobilePush,
            label: _.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
            action: () => n(e, {
              mobile_push: !t.mobilePush
            }, f.NotificationLabel.mobilePush(!t.mobilePush))
          })]
        })]
      })
    }(e)]
  })
}