"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
}), n("702976");
var i = n("981980"),
  r = n("171718"),
  s = n("446674"),
  a = n("872717"),
  o = n("95410"),
  l = n("913144"),
  u = n("527015"),
  c = n("286235"),
  d = n("49111");
let f = (() => {
    let e = "".concat(location.protocol, "//").concat(location.host, "/__development/source_maps"),
      t = null,
      n = new i.default(5e3, 6e4, !0),
      s = () => {
        a.default.put({
          url: e,
          headers: {
            Authorization: r.default.getToken()
          },
          oldFormErrors: !0
        }).then(e => {
          401 === e.status || 403 === e.status ? (t = null, (0, u.setDeveloperOptionSettings)({
            sourceMapsEnabled: !1
          })) : 200 !== e.status ? t = setTimeout(s, n.fail()) : (n.succeed(), t = setTimeout(s, 750 * e.body.sourceMapCookieTTLSeconds))
        }, () => {
          t = setTimeout(s, n.fail())
        })
      };
    return {
      set: n => {
        let i = null != t;
        n !== i && (n ? t = setTimeout(s, 0) : (clearTimeout(t), t = null, a.default.delete({
          url: e,
          headers: {
            Authorization: r.default.getToken()
          },
          oldFormErrors: !0
        })))
      }
    }
  })(),
  E = "DeveloperOptionsStore",
  h = {
    trace: !1,
    canary: !1,
    logGatewayEvents: !1,
    logOverlayEvents: !1,
    logAnalyticsEvents: !1,
    sourceMapsEnabled: !1,
    axeEnabled: !1,
    analyticsDebuggerEnabled: !1,
    bugReporterEnabled: !0,
    idleStatusIndicatorEnabled: !1,
    appDirectoryIncludesInactiveCollections: !1
  },
  p = {
    ...h
  };

function _(e) {
  p = {
    ...h,
    ...p,
    ...e
  }, f.set(p.sourceMapsEnabled), o.default.set(E, p)
}
class S extends s.default.Store {
  initialize() {
    let e = o.default.get(E);
    null != e && (p = {
      ...h,
      ...e
    })
  }
  get isTracingRequests() {
    return p.trace
  }
  get isForcedCanary() {
    return p.canary
  }
  get isLoggingGatewayEvents() {
    return p.logGatewayEvents
  }
  get isLoggingOverlayEvents() {
    return p.logOverlayEvents
  }
  get isLoggingAnalyticsEvents() {
    return p.logAnalyticsEvents
  }
  get isAxeEnabled() {
    return p.axeEnabled
  }
  get sourceMapsEnabled() {
    return p.sourceMapsEnabled
  }
  get isAnalyticsDebuggerEnabled() {
    return p.analyticsDebuggerEnabled
  }
  get isBugReporterEnabled() {
    return p.bugReporterEnabled
  }
  get isIdleStatusIndicatorEnabled() {
    return p.idleStatusIndicatorEnabled
  }
  get appDirectoryIncludesInactiveCollections() {
    return p.appDirectoryIncludesInactiveCollections
  }
  getDebugOptionsHeaderValue() {
    Object.keys(p).map(e => p[e]);
    let e = Object.keys(p).filter(e => p[e]);
    return e.join(",")
  }
}
S.displayName = "DeveloperOptionsStore";
var m = new S(l.default, {
  LOGOUT: function(e) {
    _(h)
  },
  CONNECTION_OPEN: function(e) {
    var t;
    let n = ((null !== (t = e.user.flags) && void 0 !== t ? t : 0) & d.UserFlags.STAFF) === d.UserFlags.STAFF,
      i = n || null != e.user.personal_connection_id;
    n && f.set(p.sourceMapsEnabled), c.default.setTags({
      isStaff: i.toString()
    })
  },
  DEVELOPER_OPTIONS_UPDATE_SETTINGS: function(e) {
    let {
      settings: t
    } = e;
    _(t)
  }
})