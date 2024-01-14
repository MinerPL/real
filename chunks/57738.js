"use strict";
n.r(e), n.d(e, {
  BrowserClient: function() {
    return l
  }
});
var r = n("675065"),
  i = n("103787"),
  a = n("4362"),
  s = n("714090"),
  o = n("585972"),
  c = n("130178");
class l extends r.BaseClient {
  eventFromException(t, e) {
    return (0, a.eventFromException)(this._options.stackParser, t, e, this._options.attachStacktrace)
  }
  eventFromMessage(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info",
      n = arguments.length > 2 ? arguments[2] : void 0;
    return (0, a.eventFromMessage)(this._options.stackParser, t, e, n, this._options.attachStacktrace)
  }
  sendEvent(t, e) {
    let n = this.getIntegrationById(o.BREADCRUMB_INTEGRATION_ID);
    n && n.addSentryBreadcrumb && n.addSentryBreadcrumb(t), super.sendEvent(t, e)
  }
  captureUserFeedback(t) {
    if (!this._isEnabled()) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("SDK not enabled, will not capture user feedback.");
      return
    }
    let e = (0, c.createUserFeedbackEnvelope)(t, {
      metadata: this.getSdkMetadata(),
      dsn: this.getDsn(),
      tunnel: this.getOptions().tunnel
    });
    this._sendEnvelope(e)
  }
  _prepareEvent(t, e, n) {
    return t.platform = t.platform || "javascript", super._prepareEvent(t, e, n)
  }
  _flushOutcomes() {
    let t = this._clearOutcomes();
    if (0 === t.length) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("No outcomes to send");
      return
    }
    if (!this._dsn) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("No dsn provided, will not send outcomes");
      return
    }("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("Sending outcomes:", t);
    let e = (0, i.createClientReportEnvelope)(t, this._options.tunnel && (0, i.dsnToString)(this._dsn));
    this._sendEnvelope(e)
  }
  constructor(t) {
    let e = s.WINDOW.SENTRY_SDK_SOURCE || (0, i.getSDKSource)();
    t._metadata = t._metadata || {}, t._metadata.sdk = t._metadata.sdk || {
      name: "sentry.javascript.browser",
      packages: [{
        name: "".concat(e, ":@sentry/browser"),
        version: r.SDK_VERSION
      }],
      version: r.SDK_VERSION
    }, super(t), t.sendClientReports && s.WINDOW.document && s.WINDOW.document.addEventListener("visibilitychange", () => {
      "hidden" === s.WINDOW.document.visibilityState && this._flushOutcomes()
    })
  }
}