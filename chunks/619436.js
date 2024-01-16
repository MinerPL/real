"use strict";
n.r(t), n.d(t, {
  useChannelNotificationRadioItems: function() {
    return E
  },
  default: function() {
    return _
  }
});
var a = n("37983");
n("884691");
var i = n("446674"),
  s = n("77078"),
  l = n("519705"),
  u = n("721281"),
  r = n("282109"),
  o = n("34676"),
  d = n("49111"),
  f = n("782340");

function c(e) {
  var t, n, a;
  let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case d.ChannelTypes.GUILD_VOICE:
      ;
      return i ? (t = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != t.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ALL_MESSAGES,
        label: f.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: f.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: f.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case d.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return n = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != n.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: f.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: f.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return a = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != a.parent_id ? f.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : f.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ALL_MESSAGES,
        label: f.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: f.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function E(e) {
  let t = e.getGuildId(),
    n = e.id,
    E = (0, i.useStateFromStores)([r.default], () => {
      let n = d.UserNotificationSettings.NULL;
      return null != e.parent_id && (n = r.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : r.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    _ = (0, i.useStateFromStores)([r.default], () => r.default.getNewForumThreadsCreated(e)),
    N = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(t)[n], [t, n]),
    g = null == N ? d.UserNotificationSettings.NULL : N.message_notifications,
    C = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
    M = c(e, C);
  return null == M ? null : (0, a.jsxs)(a.Fragment, {
    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: f.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: _,
        action: () => l.default.setForumThreadsCreated(e, !_)
      }), (0, a.jsx)(s.MenuSeparator, {})]
    }) : null, M.map(i => {
      let {
        setting: u,
        label: r
      } = i;
      return (0, a.jsx)(s.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(u),
        label: r,
        subtext: u === d.UserNotificationSettings.NULL ? function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case d.UserNotificationSettings.ALL_MESSAGES:
              return t.type === d.ChannelTypes.GUILD_VOICE && n ? f.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : f.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case d.UserNotificationSettings.ONLY_MENTIONS:
              return f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case d.UserNotificationSettings.NO_MESSAGES:
              return f.default.Messages.FORM_LABEL_NOTHING;
            case d.UserNotificationSettings.NULL:
            default:
              return
          }
        }(E, e, C) : void 0,
        action: () => {
          var e;
          return e = u, void(null != t && l.default.updateChannelOverrideSettings(t, n, {
            message_notifications: e
          }, o.NotificationLabel.notifications(e)))
        },
        checked: u === g
      }, u)
    })]
  })
}

function _(e) {
  var t, n;
  let l = E(e),
    o = (0, i.useStateFromStores)([r.default], () => r.default.resolvedMessageNotifications(e), [e]),
    _ = (0, i.useStateFromStores)([r.default], () => r.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    N = null == _ ? d.UserNotificationSettings.NULL : _.message_notifications,
    g = (0, u.useVoiceActivityNotificationSettingsExperiment)(e),
    C = N === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? f.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = c(e, g)) || void 0 === n ? void 0 : null === (t = n.find(e => {
      let {
        setting: t
      } = e;
      return t === o
    })) || void 0 === t ? void 0 : t.label;
  return null != l ? (0, a.jsx)(s.MenuItem, {
    id: "channel-notifications",
    label: f.default.Messages.NOTIFICATION_SETTINGS,
    subtext: C,
    children: l
  }) : null
}