"use strict";
n.r(t), n.d(t, {
  useChannelNotificationRadioItems: function() {
    return _
  },
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  l = n("77078"),
  u = n("519705"),
  s = n("721281"),
  d = n("282109"),
  o = n("34676"),
  r = n("49111"),
  c = n("782340");

function f(e) {
  var t, n, a;
  let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case r.ChannelTypes.GUILD_VOICE:
      ;
      return i ? (t = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case r.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return n = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return a = e, [{
        setting: r.UserNotificationSettings.NULL,
        label: null != a.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: r.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: r.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: r.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function _(e) {
  let t = e.getGuildId(),
    n = e.id,
    _ = (0, i.useStateFromStores)([d.default], () => {
      let n = r.UserNotificationSettings.NULL;
      return null != e.parent_id && (n = d.default.getChannelMessageNotifications(t, e.parent_id)), n !== r.UserNotificationSettings.NULL ? n : d.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    E = (0, i.useStateFromStores)([d.default], () => d.default.getNewForumThreadsCreated(e)),
    S = (0, i.useStateFromStores)([d.default], () => d.default.getChannelOverrides(t)[n], [t, n]),
    N = null == S ? r.UserNotificationSettings.NULL : S.message_notifications,
    g = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
    M = f(e, g);
  return null == M ? null : (0, a.jsxs)(a.Fragment, {
    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(l.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: E,
        action: () => u.default.setForumThreadsCreated(e, !E)
      }), (0, a.jsx)(l.MenuSeparator, {})]
    }) : null, M.map(i => {
      let {
        setting: s,
        label: d
      } = i;
      return (0, a.jsx)(l.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(s),
        label: d,
        subtext: s === r.UserNotificationSettings.NULL ? function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case r.UserNotificationSettings.ALL_MESSAGES:
              return t.type === r.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case r.UserNotificationSettings.ONLY_MENTIONS:
              return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case r.UserNotificationSettings.NO_MESSAGES:
              return c.default.Messages.FORM_LABEL_NOTHING;
            case r.UserNotificationSettings.NULL:
            default:
              return
          }
        }(_, e, g) : void 0,
        action: () => {
          var e;
          return e = s, void(null != t && u.default.updateChannelOverrideSettings(t, n, {
            message_notifications: e
          }, o.NotificationLabel.notifications(e)))
        },
        checked: s === N
      }, s)
    })]
  })
}

function E(e) {
  var t, n;
  let u = _(e),
    o = (0, i.useStateFromStores)([d.default], () => d.default.resolvedMessageNotifications(e), [e]),
    E = (0, i.useStateFromStores)([d.default], () => d.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    S = null == E ? r.UserNotificationSettings.NULL : E.message_notifications,
    N = (0, s.useVoiceActivityNotificationSettingsExperiment)(e),
    g = S === r.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, N)) || void 0 === n ? void 0 : null === (t = n.find(e => {
      let {
        setting: t
      } = e;
      return t === o
    })) || void 0 === t ? void 0 : t.label;
  return null != u ? (0, a.jsx)(l.MenuItem, {
    id: "channel-notifications",
    label: c.default.Messages.NOTIFICATION_SETTINGS,
    subtext: g,
    children: u
  }) : null
}