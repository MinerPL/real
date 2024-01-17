"use strict";
n.r(t), n.d(t, {
  DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
    return u
  },
  default: function() {
    return o
  }
});
var a = n("446674"),
  i = n("95410"),
  l = n("913144"),
  d = n("9503");
let u = 360,
  s = {
    devToolsEnabled: !1,
    sidebarWidth: u,
    lastOpenTabId: null,
    displayTools: !1,
    showDevWidget: !1,
    devWidgetPosition: {
      x: 0,
      y: 0
    }
  };
class r extends a.default.DeviceSettingsStore {
  initialize(e) {
    s = null != e ? e : s, l.default.actionLogger.persist = this.devToolsEnabled
  }
  getUserAgnosticState() {
    return s
  }
  get devToolsEnabled() {
    return s.devToolsEnabled
  }
  get sidebarWidth() {
    return this.displayTools ? s.sidebarWidth : 0
  }
  get lastOpenTabId() {
    var e;
    return null !== (e = s.lastOpenTabId) && void 0 !== e ? e : null
  }
  get displayTools() {
    return this.devToolsEnabled && s.displayTools
  }
  get showDevWidget() {
    return this.devToolsEnabled && s.showDevWidget
  }
  get devWidgetPosition() {
    return s.devWidgetPosition
  }
}
r.displayName = "DevToolsSettingsStore", r.persistKey = "DevToolsSettingsStore";
var o = new r(l.default, {
  DEV_TOOLS_SETTINGS_UPDATE: function(e) {
    (s.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (l.default.actionLogger.persist = e.settings.devToolsEnabled, i.default.set(d.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), s = {
      ...s,
      ...e.settings
    })
  }
})