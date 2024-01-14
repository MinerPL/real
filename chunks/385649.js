"use strict";
s.r(t), s.d(t, {
  default: function() {
    return T
  }
});
var a = s("446674"),
  n = s("913144"),
  l = s("599110"),
  i = s("773336"),
  r = s("49111");
let u = {
    desktopType: i.isPlatformEmbedded ? r.DesktopNotificationTypes.ALL : r.DesktopNotificationTypes.NEVER,
    disableAllSounds: !1,
    disabledSounds: [],
    ttsType: r.TTSNotificationTypes.NEVER,
    disableUnreadBadge: !1,
    taskbarFlash: !0,
    notifyMessagesInSelectedChannel: !1
  },
  d = u;

function o(e, t) {
  !__OVERLAY__ && l.default.track(e, t)
}

function c(e) {
  let {
    desktopType: t
  } = e;
  d.desktopType = t, o(r.AnalyticEvents.LOCAL_SETTINGS_UPDATED, {
    notifications_enabled: t === r.DesktopNotificationTypes.ALL
  })
}
class E extends a.default.DeviceSettingsStore {
  initialize(e) {
    d = {
      ...u,
      ...e
    }
  }
  getUserAgnosticState() {
    return d
  }
  getDesktopType() {
    return d.desktopType
  }
  getTTSType() {
    return d.ttsType
  }
  getDisabledSounds() {
    return d.disabledSounds
  }
  getDisableAllSounds() {
    return d.disableAllSounds
  }
  getDisableUnreadBadge() {
    return d.disableUnreadBadge
  }
  getNotifyMessagesInSelectedChannel() {
    return d.notifyMessagesInSelectedChannel
  }
  get taskbarFlash() {
    return d.taskbarFlash
  }
  isSoundDisabled(e) {
    return d.disableAllSounds || -1 !== d.disabledSounds.indexOf(e)
  }
}
E.displayName = "NotificationSettingsStore", E.persistKey = "notifications", E.migrations = [e => {
  let t = {
    ...e
  };
  return t.disabledSounds = t.disabledSounds || [], t.disableUnreadBadge = t.disableUnreadBadge || !1, t.taskbarFlash = null == t.taskbarFlash || t.taskbarFlash, t.ttsType = t.ttsType || r.TTSNotificationTypes.NEVER, null == t.desktopType && (t.desktopType = i.isPlatformEmbedded ? r.DesktopNotificationTypes.ALL : r.DesktopNotificationTypes.NEVER), t
}];
var T = new E(n.default, {
  NOTIFICATIONS_SET_DESKTOP_TYPE: c,
  NOTIFICATIONS_SET_TTS_TYPE: function(e) {
    let {
      ttsType: t
    } = e;
    d.ttsType = t
  },
  NOTIFICATIONS_SET_DISABLED_SOUNDS: function(e) {
    let {
      sounds: t
    } = e;
    d.disabledSounds = t
  },
  NOTIFICATIONS_TOGGLE_ALL_DISABLED: function() {
    d.disableAllSounds = !d.disableAllSounds
  },
  NOTIFICATIONS_SET_PERMISSION_STATE: function(e) {
    let {
      enabled: t,
      source: s
    } = e;
    o(r.AnalyticEvents.ENABLE_NOTIFICATIONS, {
      enabled: t === r.NotificationPermissionTypes.ENABLED,
      source: s
    }), t === r.NotificationPermissionTypes.BLOCKED ? c({
      desktopType: r.DesktopNotificationTypes.NEVER
    }) : t === r.NotificationPermissionTypes.ENABLED && c({
      desktopType: r.DesktopNotificationTypes.ALL
    })
  },
  NOTIFICATIONS_SET_DISABLE_UNREAD_BADGE: function(e) {
    let {
      disableUnreadBadge: t
    } = e;
    d.disableUnreadBadge = t
  },
  NOTIFICATIONS_SET_TASKBAR_FLASH: function(e) {
    let {
      taskbarFlash: t
    } = e;
    d.taskbarFlash = t
  },
  NOTIFICATIONS_SET_NOTIFY_MESSAGES_IN_SELECTED_CHANNEL: function(e) {
    let {
      notify: t
    } = e;
    d.notifyMessagesInSelectedChannel = t
  }
})