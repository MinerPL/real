"use strict";
s.r(t), s.d(t, {
  default: function() {
    return N
  }
});
var i = s("37983");
s("884691");
var l = s("446674"),
  n = s("225389"),
  a = s("77078"),
  r = s("519705"),
  d = s("282109"),
  o = s("34676"),
  u = s("49111"),
  c = s("782340"),
  h = s("775247");

function N(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStoresObject)([d.default], () => ({
    highligths: d.default.getNotifyHighlights(t),
    mobilePush: d.default.isMobilePushEnabled(t),
    suppressRoles: d.default.isSuppressRolesEnabled(t),
    suppressEveryone: d.default.isSuppressEveryoneEnabled(t),
    muteScheduledEvents: d.default.isMuteScheduledEventsEnabled(t)
  })), N = r.default.updateGuildNotificationSettings;
  return (0, i.jsxs)("div", {
    children: [(0, i.jsx)(f, {
      value: s.suppressEveryone,
      title: c.default.Messages.FORM_LABEL_SUPPRESS_EVERYONE.format(),
      onChange: e => N(t, {
        suppress_everyone: e
      }, o.NotificationLabel.suppressEveryone(e))
    }), (0, i.jsx)(f, {
      value: s.suppressRoles,
      title: c.default.Messages.FORM_LABEL_SUPPRESS_ROLES,
      onChange: e => N(t, {
        suppress_roles: e
      }, o.NotificationLabel.suppressRoles(e))
    }), (0, i.jsx)(f, {
      title: (0, i.jsxs)("div", {
        className: h.advanceSettingTitle,
        children: [c.default.Messages.FORM_LABEL_SUPPRESS_HIGHLIGHTS, (0, i.jsx)(a.Tooltip, {
          text: c.default.Messages.HIGHLIGHTS_NOTE_SUBTEXT,
          children: e => {
            let {
              onMouseEnter: t,
              onMouseLeave: s
            } = e;
            return (0, i.jsx)(n.CircleInformationIcon, {
              width: 14,
              height: 14,
              onMouseEnter: t,
              onMouseLeave: s,
              color: a.tokens.colors.ICON_MUTED,
              className: h.settingTitleIcon
            })
          }
        })]
      }),
      value: s.highligths === u.HighlightSettings.ENABLED,
      onChange: e => N(t, {
        notify_highlights: e ? u.HighlightSettings.ENABLED : u.HighlightSettings.DISABLED
      }, o.NotificationLabel.highlights(e))
    }), (0, i.jsx)(f, {
      value: s.muteScheduledEvents,
      title: c.default.Messages.FORM_LABEL_MUTE_SCHEDULED_EVENTS,
      onChange: e => N(t, {
        mute_scheduled_events: e
      }, o.NotificationLabel.mutedEvents(e))
    }), (0, i.jsx)(f, {
      value: s.mobilePush,
      title: c.default.Messages.FORM_LABEL_MOBILE_PUSH_NOTIFICATIONS,
      onChange: e => N(t, {
        mobile_push: e
      }, o.NotificationLabel.mobilePush(e))
    })]
  })
}

function f(e) {
  return (0, i.jsx)(a.FormSwitch, {
    hideBorder: !0,
    className: h.advanceSetting,
    value: e.value,
    onChange: e.onChange,
    note: e.subtitle,
    children: e.title
  })
}