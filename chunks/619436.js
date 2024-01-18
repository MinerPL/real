"use strict";
n.r(t), n.d(t, {
  useChannelNotificationRadioItems: function() {
    return h
  },
  default: function() {
    return E
  }
});
var a = n("37983");
n("884691");
var l = n("446674"),
  s = n("77078"),
  i = n("519705"),
  r = n("721281"),
  o = n("282109"),
  u = n("34676"),
  d = n("49111"),
  c = n("782340");

function f(e) {
  var t, n, a;
  let l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
  switch (e.type) {
    case d.ChannelTypes.GUILD_VOICE:
      ;
      return l ? (t = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != t.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_TEXT_MENTIONS.format()
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]) : null;
    case d.ChannelTypes.GUILD_STAGE_VOICE:
      ;
      return n = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != n.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_LIVE_STAGES_ONLY
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }];
    default:
      ;
      return a = e, [{
        setting: d.UserNotificationSettings.NULL,
        label: null != a.parent_id ? c.default.Messages.FORM_LABEL_DEFAULT_CATEGORY : c.default.Messages.FORM_LABEL_DEFAULT
      }, {
        setting: d.UserNotificationSettings.ALL_MESSAGES,
        label: c.default.Messages.FORM_LABEL_ALL_MESSAGES
      }, {
        setting: d.UserNotificationSettings.ONLY_MENTIONS,
        label: c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format()
      }, {
        setting: d.UserNotificationSettings.NO_MESSAGES,
        label: c.default.Messages.FORM_LABEL_NOTHING
      }]
  }
}

function h(e) {
  let t = e.getGuildId(),
    n = e.id,
    h = (0, l.useStateFromStores)([o.default], () => {
      let n = d.UserNotificationSettings.NULL;
      return null != e.parent_id && (n = o.default.getChannelMessageNotifications(t, e.parent_id)), n !== d.UserNotificationSettings.NULL ? n : o.default.getMessageNotifications(t)
    }, [t, e.parent_id]),
    E = (0, l.useStateFromStores)([o.default], () => o.default.getNewForumThreadsCreated(e)),
    m = (0, l.useStateFromStores)([o.default], () => o.default.getChannelOverrides(t)[n], [t, n]),
    p = null == m ? d.UserNotificationSettings.NULL : m.message_notifications,
    S = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
    g = f(e, S);
  return null == g ? null : (0, a.jsxs)(a.Fragment, {
    children: [e.isForumLikeChannel() ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(s.MenuCheckboxItem, {
        id: "new-forum-threads-created",
        label: c.default.Messages.FORUM_NEW_POSTS_CREATED,
        checked: E,
        action: () => i.default.setForumThreadsCreated(e, !E)
      }), (0, a.jsx)(s.MenuSeparator, {})]
    }) : null, g.map(l => {
      let {
        setting: r,
        label: o
      } = l;
      return (0, a.jsx)(s.MenuRadioItem, {
        group: "channel-notifications",
        id: "".concat(r),
        label: o,
        subtext: r === d.UserNotificationSettings.NULL ? function(e, t) {
          let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          switch (e) {
            case d.UserNotificationSettings.ALL_MESSAGES:
              return t.type === d.ChannelTypes.GUILD_VOICE && n ? c.default.Messages.FORM_LABEL_ALL_VOICE_ACTIVITY : c.default.Messages.FORM_LABEL_ALL_MESSAGES;
            case d.UserNotificationSettings.ONLY_MENTIONS:
              return c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format();
            case d.UserNotificationSettings.NO_MESSAGES:
              return c.default.Messages.FORM_LABEL_NOTHING;
            case d.UserNotificationSettings.NULL:
            default:
              return
          }
        }(h, e, S) : void 0,
        action: () => {
          var e;
          return e = r, void(null != t && i.default.updateChannelOverrideSettings(t, n, {
            message_notifications: e
          }, u.NotificationLabel.notifications(e)))
        },
        checked: r === p
      }, r)
    })]
  })
}

function E(e) {
  var t, n;
  let i = h(e),
    u = (0, l.useStateFromStores)([o.default], () => o.default.resolvedMessageNotifications(e), [e]),
    E = (0, l.useStateFromStores)([o.default], () => o.default.getChannelOverrides(e.guild_id)[e.id], [e.guild_id, e.id]),
    m = null == E ? d.UserNotificationSettings.NULL : E.message_notifications,
    p = (0, r.useVoiceActivityNotificationSettingsExperiment)(e),
    S = m === d.UserNotificationSettings.NULL && e.isGuildStageVoice() ? c.default.Messages.FORM_LABEL_ONLY_MENTIONS.format() : null === (n = f(e, p)) || void 0 === n ? void 0 : null === (t = n.find(e => {
      let {
        setting: t
      } = e;
      return t === u
    })) || void 0 === t ? void 0 : t.label;
  return null != i ? (0, a.jsx)(s.MenuItem, {
    id: "channel-notifications",
    label: c.default.Messages.NOTIFICATION_SETTINGS,
    subtext: S,
    children: i
  }) : null
}