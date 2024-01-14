"use strict";
n.r(e), n.d(e, {
  BrowserTracing: function() {
    return d
  }
});
var r = n("675065"),
  i = n("103787"),
  a = n("845164"),
  s = n("304063"),
  o = n("907888"),
  c = n("339448"),
  l = n("307447");
let u = {
  ...r.TRACING_DEFAULTS,
  markBackgroundTransactions: !0,
  routingInstrumentation: c.instrumentRoutingWithDefaults,
  startTransactionOnLocationChange: !0,
  startTransactionOnPageLoad: !0,
  enableLongTask: !0,
  _experiments: {},
  ...o.defaultRequestInstrumentationOptions
};
class d {
  __init() {
    this.name = "BrowserTracing"
  }
  __init2() {
    this._hasSetTracePropagationTargets = !1
  }
  setupOnce(t, e) {
    this._getCurrentHub = e;
    let n = e(),
      r = n.getClient(),
      s = r && r.getOptions(),
      {
        routingInstrumentation: c,
        startTransactionOnLocationChange: l,
        startTransactionOnPageLoad: u,
        markBackgroundTransactions: d,
        traceFetch: h,
        traceXHR: f,
        shouldCreateSpanForRequest: p,
        enableHTTPTimings: _,
        _experiments: g
      } = this.options,
      m = s && s.tracePropagationTargets,
      y = m || this.options.tracePropagationTargets;
    ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && this._hasSetTracePropagationTargets && m && i.logger.warn("[Tracing] The `tracePropagationTargets` option was set in the BrowserTracing integration and top level `Sentry.init`. The top level `Sentry.init` value is being used."), c(t => {
      let n = this._createRouteTransaction(t);
      return this.options._experiments.onStartRouteTransaction && this.options._experiments.onStartRouteTransaction(n, t, e), n
    }, u, l), d && (0, a.registerBackgroundTabDetection)(), g.enableInteractions && this._registerInteractionListener(), (0, o.instrumentOutgoingRequests)({
      traceFetch: h,
      traceXHR: f,
      tracePropagationTargets: y,
      shouldCreateSpanForRequest: p,
      enableHTTPTimings: _
    })
  }
  _createRouteTransaction(t) {
    if (!this._getCurrentHub) {
      ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(t.op, " transaction because _getCurrentHub is invalid."));
      return
    }
    let e = this._getCurrentHub(),
      {
        beforeNavigate: n,
        idleTimeout: a,
        finalTimeout: o,
        heartbeatInterval: c
      } = this.options,
      u = "pageload" === t.op,
      d = u ? h("sentry-trace") : "",
      f = u ? h("baggage") : "",
      {
        traceparentData: p,
        dynamicSamplingContext: _,
        propagationContext: g
      } = (0, i.tracingContextFromHeaders)(d, f),
      m = {
        ...t,
        ...p,
        metadata: {
          ...t.metadata,
          dynamicSamplingContext: p && !_ ? {} : _
        },
        trimEnd: !0
      },
      y = "function" == typeof n ? n(m) : m,
      v = void 0 === y ? {
        ...m,
        sampled: !1
      } : y;
    v.metadata = v.name !== m.name ? {
      ...v.metadata,
      source: "custom"
    } : v.metadata, this._latestRouteName = v.name, this._latestRouteSource = v.metadata && v.metadata.source, !1 === v.sampled && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Will not send ".concat(v.op, " transaction because of beforeNavigate.")), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.log("[Tracing] Starting ".concat(v.op, " transaction on scope"));
    let {
      location: E
    } = l.WINDOW, b = (0, r.startIdleTransaction)(e, v, a, o, !0, {
      location: E
    }, c), S = e.getScope();
    return u && p ? S.setPropagationContext(g) : S.setPropagationContext({
      traceId: b.traceId,
      spanId: b.spanId,
      parentSpanId: b.parentSpanId,
      sampled: !!b.sampled
    }), b.registerBeforeFinishCallback(t => {
      this._collectWebVitals(), (0, s.addPerformanceEntries)(t)
    }), b
  }
  _registerInteractionListener() {
    let t;
    let e = () => {
      let {
        idleTimeout: e,
        finalTimeout: n,
        heartbeatInterval: a
      } = this.options, s = "ui.action.click", o = (0, r.getActiveTransaction)();
      if (o && o.op && ["navigation", "pageload"].includes(o.op)) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(s, " transaction because a pageload or navigation transaction is in progress."));
        return
      }
      if (t && (t.setFinishReason("interactionInterrupted"), t.finish(), t = void 0), !this._getCurrentHub) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(s, " transaction because _getCurrentHub is invalid."));
        return
      }
      if (!this._latestRouteName) {
        ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && i.logger.warn("[Tracing] Did not create ".concat(s, " transaction because _latestRouteName is missing."));
        return
      }
      let c = this._getCurrentHub(),
        {
          location: u
        } = l.WINDOW,
        d = {
          name: this._latestRouteName,
          op: s,
          trimEnd: !0,
          metadata: {
            source: this._latestRouteSource || "url"
          }
        };
      t = (0, r.startIdleTransaction)(c, d, e, n, !0, {
        location: u
      }, a)
    };
    ["click"].forEach(t => {
      addEventListener(t, e, {
        once: !1,
        capture: !0
      })
    })
  }
  constructor(t) {
    d.prototype.__init.call(this), d.prototype.__init2.call(this), (0, r.addTracingExtensions)(), ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && (this._hasSetTracePropagationTargets = !!(t && (t.tracePropagationTargets || t.tracingOrigins))), this.options = {
      ...u,
      ...t
    }, void 0 !== this.options._experiments.enableLongTask && (this.options.enableLongTask = this.options._experiments.enableLongTask), t && !t.tracePropagationTargets && t.tracingOrigins && (this.options.tracePropagationTargets = t.tracingOrigins), this._collectWebVitals = (0, s.startTrackingWebVitals)(), this.options.enableLongTask && (0, s.startTrackingLongTasks)(), this.options._experiments.enableInteractions && (0, s.startTrackingInteractions)()
  }
}

function h(t) {
  let e = (0, i.getDomElement)("meta[name=".concat(t, "]"));
  return e ? e.getAttribute("content") : void 0
}