"use strict";
s.r(t), s.d(t, {
  default: function() {
    return W
  }
}), s("424973"), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("917351"),
  o = s.n(r),
  d = s("446674"),
  u = s("77078"),
  c = s("404118"),
  S = s("193990");
s("519705");
var E = s("533280"),
  f = s("408166"),
  T = s("298878"),
  m = s("54346"),
  _ = s("684581"),
  g = s("488284"),
  h = s("649649"),
  I = s("640497"),
  N = s("699668"),
  p = s("748021"),
  C = s("168067"),
  A = s("820974"),
  O = s("385649"),
  x = s("282109"),
  R = s("368121"),
  M = s("599110"),
  v = s("566673"),
  D = s("773336"),
  L = s("709681"),
  P = s("845579"),
  j = s("872173"),
  b = s("77809"),
  U = s("49111");
s("76618");
var B = s("782340"),
  y = s("9162"),
  F = s("926622");

function G(e) {
  let {
    label: t,
    enabled: s,
    disabled: n,
    onPreview: l,
    onChange: i
  } = e;
  return (0, a.jsx)(u.FormSwitch, {
    className: y.soundRow,
    value: s,
    onChange: i,
    disabled: n,
    children: (0, a.jsxs)("div", {
      className: y.notificationSound,
      children: [(0, a.jsx)("div", {
        className: y.soundName,
        children: t
      }), (0, a.jsx)(u.Clickable, {
        className: y.soundIcon,
        onClick: l,
        "aria-label": B.default.Messages.USER_SETTINGS_NOTIFICATIONS_PREVIEW_SOUND,
        children: (0, a.jsx)(R.default, {
          width: 16,
          height: 16,
          className: y.icon,
          "aria-hidden": !0
        })
      })]
    })
  })
}

function k(e) {
  let {
    disabledSounds: t,
    disableAllSounds: s,
    notifyMessagesInSelectedChannel: l
  } = e, {
    allowAprilFoolsSoundpack: r
  } = C.default.useExperiment({
    location: "791c79_1"
  }, {
    autoTrackExposure: !1
  }), {
    enabled: o
  } = f.ActivitiesSoundsExperiment.useExperiment({
    location: "791c79_2"
  }, {
    autoTrackExposure: !1
  }), d = g.default.useIsRingtoneEligible();
  n.useEffect(() => {
    C.default.trackExposure({
      location: "791c79_3"
    })
  }, []);
  let c = n.useRef(),
    E = n.useCallback((e, t) => {
      t.stopPropagation(), t.preventDefault(), null != c.current && c.current.stop(), c.current = L.playSound(e)
    }, []),
    T = n.useCallback((e, s) => {
      let a = t.filter(t => t !== e);
      !s && a.push(e), e === _.default.ringtone && M.default.track(U.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
        toggled_on: s,
        sound_name: e
      }), S.default.setDisabledSounds(a)
    }, [t]);
  n.useEffect(() => () => {
    var e;
    null === (e = c.current) || void 0 === e || e.stop()
  });
  let m = [{
    label: B.default.Messages.SOUND_MESSAGE,
    sound: "message1"
  }, {
    label: B.default.Messages.SOUND_DEAFEN,
    sound: "deafen"
  }, {
    label: B.default.Messages.SOUND_UNDEAFEN,
    sound: "undeafen"
  }, {
    label: B.default.Messages.MUTE,
    sound: "mute"
  }, {
    label: B.default.Messages.UNMUTE,
    sound: "unmute"
  }, {
    label: B.default.Messages.SOUND_VOICE_DISCONNECTED,
    sound: "disconnect"
  }, {
    label: B.default.Messages.SOUND_PTT_ACTIVATE,
    sound: "ptt_start"
  }, {
    label: B.default.Messages.SOUND_PTT_DEACTIVATE,
    sound: "ptt_stop"
  }, {
    label: B.default.Messages.SOUND_USER_JOIN,
    sound: "user_join"
  }, {
    label: B.default.Messages.SOUND_USER_LEAVE,
    sound: "user_leave"
  }, {
    label: B.default.Messages.SOUND_USER_MOVED,
    sound: "user_moved"
  }, {
    label: B.default.Messages.SOUND_OUTGOING_RING,
    sound: "call_calling"
  }, {
    label: B.default.Messages.SOUND_INCOMING_RING,
    sound: "call_ringing"
  }, ...d ? [{
    label: _.default.getRingtoneSettingsLabel(),
    sound: _.default.ringtone,
    disabled: t.includes("call_ringing")
  }] : [], {
    label: B.default.Messages.SOUND_STREAM_STARTED,
    sound: "stream_started"
  }, {
    label: B.default.Messages.SOUND_STREAM_STOPPED,
    sound: "stream_ended"
  }, {
    label: B.default.Messages.SOUND_VIEWER_JOIN,
    sound: "stream_user_joined"
  }, {
    label: B.default.Messages.SOUND_VIEWER_LEAVE,
    sound: "stream_user_left"
  }, ...o ? [{
    label: B.default.Messages.SOUND_ACTIVITY_START,
    sound: "activity_launch"
  }, {
    label: B.default.Messages.SOUND_ACTIVITY_END,
    sound: "activity_end"
  }, {
    label: B.default.Messages.SOUND_ACTIVITY_USER_JOIN,
    sound: "activity_user_join"
  }, {
    label: B.default.Messages.SOUND_ACTIVITY_USER_LEAVE,
    sound: "activity_user_left"
  }] : [], {
    label: B.default.Messages.SOUND_INVITED_TO_SPEAK,
    sound: "reconnect"
  }];
  return (0, a.jsxs)(u.FormSection, {
    tag: u.FormTitleTags.H1,
    title: B.default.Messages.SOUNDS,
    children: [r ? (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(u.FormTitle, {
        className: F.marginBottom20,
        children: B.default.Messages.SOUNDPACK_LABEL
      }), (0, a.jsx)(A.default, {
        className: i(y.soundpackSelect, F.marginBottom40)
      })]
    }) : null, (0, a.jsx)(u.FormSwitch, {
      note: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_NOTE,
      value: l,
      onChange: S.default.setNotifyMessagesInSelectedChannel,
      children: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL_LABEL
    }), (0, a.jsx)(u.FormSwitch, {
      note: B.default.Messages.SOUND_DISABLE_ALL_NOTE,
      value: s,
      onChange: S.default.toggleDisableAllSounds,
      children: B.default.Messages.SOUND_DISABLE_ALL
    }), m.map(e => {
      let {
        label: n,
        sound: l,
        disabled: i
      } = e;
      return (0, a.jsx)(G, {
        label: n,
        disabled: s || !0 === i,
        onChange: e => T(l, e),
        onPreview: e => E(l, e),
        enabled: !s && !t.includes(l)
      }, l)
    })]
  })
}

function H() {
  let e = (0, d.useStateFromStores)([m.default], () => m.default.getGuildAlertSettings()),
    [t, s] = n.useState(null),
    l = Object.keys(e).map(t => {
      let s = e[t];
      return {
        label: s.guildName,
        value: s.guildId
      }
    });
  return 0 === Object.keys(e).length ? null : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(u.Heading, {
      variant: "heading-lg/semibold",
      className: i(y.titleWithBeta, F.marginBottom20),
      children: [B.default.Messages.GUILD_COMMUNITY_ALERTS_HEADER, (0, a.jsx)(T.default, {})]
    }), (0, a.jsx)(u.FormText, {
      type: u.FormTextTypes.DESCRIPTION,
      className: F.marginBottom20,
      children: B.default.Messages.GUILD_COMMUNITY_ALERTS_DESCRIPTION
    }), (0, a.jsxs)(u.FormItem, {
      title: B.default.Messages.GUILD_COMMUNITY_ALERTS_CHOOSE_SERVER,
      children: [(0, a.jsx)(u.SingleSelect, {
        value: t,
        onChange: e => {
          s(e)
        },
        options: l
      }), null != t ? (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(u.FormSwitch, {
          className: i(F.marginBottom20, F.marginTop20),
          note: B.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_DESCRIPTION,
          value: !e[t].disableRaidAlertNag,
          onChange: () => {
            (0, j.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertNag = !e.disableRaidAlertNag
            }, j.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          children: B.default.Messages.GUILD_COMMUNITY_ALERTS_NAG_HEADER
        }), (0, a.jsx)(u.FormSwitch, {
          className: F.marginBottom20,
          note: B.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_DESCRIPTION,
          value: !e[t].disableRaidAlertPush,
          onChange: () => {
            (0, j.updateUserGuildSettings)(t, e => {
              e.disableRaidAlertPush = !e.disableRaidAlertPush
            }, j.UserSettingsDelay.INFREQUENT_USER_ACTION)
          },
          hideBorder: !0,
          children: B.default.Messages.GUILD_COMMUNITY_ALERTS_PUSH_HEADER
        })]
      }) : null]
    }), (0, a.jsx)(u.FormDivider, {
      className: i(null != t ? F.marginTop20 : F.marginTop40, F.marginBottom40)
    })]
  })
}
class w extends n.PureComponent {
  handleDesktopChange(e) {
    let t = e ? U.DesktopNotificationTypes.ALL : U.DesktopNotificationTypes.NEVER;
    if (t !== U.DesktopNotificationTypes.NEVER) {
      var s;
      s = "UserSettingsModal", v.default.requestPermission(e => {
        let t = e ? U.NotificationPermissionTypes.ENABLED : U.NotificationPermissionTypes.BLOCKED;
        S.default.setPermissionsState(t, s)
      })
    } else S.default.setDesktopType(t)
  }
  handleTTSChange(e) {
    let t = e.value;
    S.default.setTTSType(t)
  }
  render() {
    let {
      desktopType: e,
      afkTimeout: t,
      disableUnreadBadge: s,
      taskbarFlash: n,
      disabledSounds: l,
      disableAllSounds: r,
      notifyMessagesInSelectedChannel: d
    } = this.props, c = D.isPlatformEmbedded && (0, D.isWindows)(), S = o.range(1, 11).map(e => ({
      value: 60 * e,
      label: B.default.Messages.DURATION_MINUTES.format({
        minutes: e
      })
    }));
    return (0, a.jsxs)(u.FormSection, {
      tag: u.FormTitleTags.H1,
      title: B.default.Messages.NOTIFICATIONS,
      children: [(0, a.jsx)(u.FormSwitch, {
        className: F.marginBottom20,
        value: e !== U.DesktopNotificationTypes.NEVER,
        onChange: this.handleDesktopChange,
        note: B.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE_BODY,
        children: B.default.Messages.DESKTOP_NOTIFICATIONS_ENABLE
      }), (0, a.jsx)(u.FormSwitch, {
        className: c ? F.marginBottom20 : F.marginBottom40,
        value: !s,
        note: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_BODY,
        onChange: this.handleToggleShowUnreadBadge,
        children: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_BADGE_LABEL
      }), c ? (0, a.jsx)(u.FormSwitch, {
        className: F.marginBottom40,
        value: n,
        note: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_BODY,
        onChange: this.handleToggleShowFlash,
        children: B.default.Messages.USER_SETTINGS_NOTIFICATIONS_SHOW_FLASH_LABEL
      }) : null, (0, a.jsx)(V, {}), (0, a.jsxs)(u.FormItem, {
        title: B.default.Messages.FORM_LABEL_PUSH_AFK_TIMEOUT,
        children: [(0, a.jsx)(u.SingleSelect, {
          value: t,
          onChange: P.AfkTimeout.updateSetting,
          options: S
        }), (0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: F.marginTop8,
          children: B.default.Messages.FORM_DESCRIPTION_PUSH_AFK_TIMEOUT
        }), (0, a.jsx)(u.FormDivider, {
          className: i(F.marginTop40, F.marginBottom40)
        })]
      }), this.renderTTS(), (0, a.jsx)(u.FormDivider, {
        className: i(F.marginTop40, F.marginBottom40)
      }), (0, a.jsx)(H, {}), (0, a.jsx)(u.FormItem, {
        children: (0, a.jsx)(k, {
          disabledSounds: l,
          disableAllSounds: r,
          notifyMessagesInSelectedChannel: d
        })
      }), (0, a.jsx)(b.default, {})]
    })
  }
  constructor(...e) {
    super(...e), this.handleToggleShowUnreadBadge = () => {
      S.default.setDisableUnreadBadge(!this.props.disableUnreadBadge)
    }, this.handleToggleShowFlash = () => {
      S.default.setTaskbarFlash(!this.props.taskbarFlash)
    }, this.renderTTS = () => {
      if (!E.supported) return null;
      let e = [{
        name: B.default.Messages.TTS_ALLS,
        value: U.TTSNotificationTypes.ALL_CHANNELS
      }, {
        name: B.default.Messages.TTS_CURRENT,
        value: U.TTSNotificationTypes.SELECTED_CHANNEL
      }, {
        name: B.default.Messages.TTS_NEVER,
        value: U.TTSNotificationTypes.NEVER
      }];
      return (0, a.jsxs)(u.FormItem, {
        title: B.default.Messages.FORM_LABEL_TTS_NOTIFICATIONS,
        children: [(0, a.jsx)(u.FormText, {
          type: u.FormTextTypes.DESCRIPTION,
          className: F.marginBottom8,
          children: B.default.Messages.FORM_DESCRIPTION_TTS
        }), (0, a.jsx)(u.RadioGroup, {
          options: e,
          onChange: this.handleTTSChange,
          value: this.props.ttsType
        })]
      })
    }
  }
}

function V() {
  let e = I.NotificationsExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }).enabled,
    {
      manuallyOpen: t
    } = I.UnreadsEntryPointExperiment.useExperiment({
      location: "UserSettingsNotifications"
    }, {
      autoTrackExposure: !1
    }),
    s = (0, d.useStateFromStores)([x.default], () => x.default.useNewNotifications),
    [l, i] = n.useState(!1);
  return e && (s || t) ? (0, a.jsxs)(a.Fragment, {
    children: [s ? (0, a.jsx)(u.FormSwitch, {
      className: F.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || !s,
      note: B.default.Messages.NOTIF_MIGRATION_SETTINGS_SUBTITLE,
      onChange: () => Y(i),
      children: B.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : t ? (0, a.jsx)(u.FormSwitch, {
      className: F.marginBottom40,
      style: {
        marginTop: -20
      },
      value: s,
      disabled: l || s,
      note: "Turns on the new notification system",
      onChange: () => (0, p.openMigrationModal)(!0),
      children: B.default.Messages.NOTIF_MIGRATION_SETTINGS_TITLE
    }) : null, null]
  }) : null
}
async function Y(e) {
  e(!0);
  let t = await (0, h.listSnapshots)();
  0 === t.length ? await (0, N.revertToOldSystem)() : c.default.show({
    title: B.default.Messages.CONFIRM,
    body: B.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_BODY.format({
      date: new Date(t[t.length - 1].recorded_at)
    }),
    cancelText: B.default.Messages.CANCEL,
    confirmText: B.default.Messages.NOTIF_MIGRATION_SETTINGS_CONFIRM_ACTION,
    onConfirm: N.revertToOldSystem
  }), e(!1)
}

function W() {
  let e = (0, d.useStateFromStoresObject)([O.default], () => ({
    disableUnreadBadge: O.default.getDisableUnreadBadge(),
    taskbarFlash: O.default.taskbarFlash,
    disabledSounds: O.default.getDisabledSounds(),
    disableAllSounds: O.default.getDisableAllSounds(),
    desktopType: O.default.getDesktopType(),
    ttsType: O.default.getTTSType(),
    notifyMessagesInSelectedChannel: O.default.getNotifyMessagesInSelectedChannel()
  }));
  return (0, a.jsx)(w, {
    ...e,
    afkTimeout: P.AfkTimeout.useSetting()
  })
}