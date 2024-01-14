"use strict";
n.r(t), n.d(t, {
  DEVTOOLS_SIDEBAR_MIN_WIDTH: function() {
    return u
  },
  default: function() {
    return o
  }
});
var i = n("446674"),
  a = n("95410"),
  l = n("913144"),
  s = n("9503");
let u = 360,
  d = {
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
class r extends i.default.DeviceSettingsStore {
  initialize(e) {
    d = null != e ? e : d, l.default.actionLogger.persist = this.devToolsEnabled
  }
  getUserAgnosticState() {
    return d
  }
  get devToolsEnabled() {
    return d.devToolsEnabled
  }
  get sidebarWidth() {
    return this.displayTools ? d.sidebarWidth : 0
  }
  get lastOpenTabId() {
    var e;
    return null !== (e = d.lastOpenTabId) && void 0 !== e ? e : null
  }
  get displayTools() {
    return this.devToolsEnabled && d.displayTools
  }
  get showDevWidget() {
    return this.devToolsEnabled && d.showDevWidget
  }
  get devWidgetPosition() {
    return d.devWidgetPosition
  }
}
r.displayName = "DevToolsSettingsStore", r.persistKey = "DevToolsSettingsStore";
var o = new r(l.default, {
  DEV_TOOLS_SETTINGS_UPDATE: function(e) {
    (d.devToolsEnabled || e.settings.devToolsEnabled) && (null != e.settings.devToolsEnabled && (l.default.actionLogger.persist = e.settings.devToolsEnabled, a.default.set(s.STORAGE_KEY_LOG_DISPATCHES, e.settings.devToolsEnabled)), d = {
      ...d,
      ...e.settings
    })
  }
})