"use strict";
n.r(e), n.d(e, {
  defaultRequestInstrumentationOptions: function() {
    return s
  },
  instrumentOutgoingRequests: function() {
    return o
  }
}), n("222007"), n("424973");
var r = n("675065"),
  i = n("103787");
let a = ["localhost", /^\/(?!\/)/],
  s = {
    traceFetch: !0,
    traceXHR: !0,
    enableHTTPTimings: !0,
    tracingOrigins: a,
    tracePropagationTargets: a
  };

function o(t) {
  let {
    traceFetch: e,
    traceXHR: n,
    tracePropagationTargets: o,
    tracingOrigins: l,
    shouldCreateSpanForRequest: d,
    enableHTTPTimings: h
  } = {
    traceFetch: s.traceFetch,
    traceXHR: s.traceXHR,
    ...t
  }, f = "function" == typeof d ? d : t => !0, p = t => (function(t, e) {
    return (0, i.stringMatchesSomePattern)(t, e || a)
  })(t, o || l), _ = {};
  e && (0, i.addInstrumentationHandler)("fetch", t => {
    let e = function(t, e, n, a) {
      if (!(0, r.hasTracingEnabled)() || !t.fetchData) return;
      let s = e(t.fetchData.url);
      if (t.endTimestamp && s) {
        let e = t.fetchData.__span;
        if (!e) return;
        let n = a[e];
        if (n) {
          if (t.response) {
            n.setHttpStatus(t.response.status);
            let e = t.response && t.response.headers && t.response.headers.get("content-length"),
              r = parseInt(e);
            r > 0 && n.setData("http.response_content_length", r)
          } else t.error && n.setStatus("internal_error");
          n.finish(), delete a[e]
        }
        return
      }
      let o = (0, r.getCurrentHub)(),
        c = o.getScope(),
        l = o.getClient(),
        u = c.getSpan(),
        {
          method: d,
          url: h
        } = t.fetchData,
        f = s && u ? u.startChild({
          data: {
            url: h,
            type: "fetch",
            "http.method": d
          },
          description: "".concat(d, " ").concat(h),
          op: "http.client"
        }) : void 0;
      if (f && (t.fetchData.__span = f.spanId, a[f.spanId] = f), n(t.fetchData.url) && l) {
        let e = t.args[0];
        t.args[1] = t.args[1] || {};
        let n = t.args[1];
        n.headers = function(t, e, n, a) {
          let s = n.getSpan(),
            o = s && s.transaction,
            {
              traceId: c,
              sampled: l,
              dsc: u
            } = n.getPropagationContext(),
            d = s ? s.toTraceparent() : (0, i.generateSentryTraceHeader)(c, void 0, l),
            h = o ? o.getDynamicSamplingContext() : u || (0, r.getDynamicSamplingContextFromClient)(c, e, n),
            f = (0, i.dynamicSamplingContextToSentryBaggageHeader)(h),
            p = "undefined" != typeof Request && (0, i.isInstanceOf)(t, Request) ? t.headers : a.headers;
          if (!p) return {
            "sentry-trace": d,
            baggage: f
          };
          if ("undefined" != typeof Headers && (0, i.isInstanceOf)(p, Headers)) {
            let t = new Headers(p);
            return t.append("sentry-trace", d), f && t.append(i.BAGGAGE_HEADER_NAME, f), t
          }
          if (Array.isArray(p)) {
            let t = [...p, ["sentry-trace", d]];
            return f && t.push([i.BAGGAGE_HEADER_NAME, f]), t
          } else {
            let t = "baggage" in p ? p.baggage : void 0,
              e = [];
            return Array.isArray(t) ? e.push(...t) : t && e.push(t), f && e.push(f), {
              ...p,
              "sentry-trace": d,
              baggage: e.length > 0 ? e.join(",") : void 0
            }
          }
        }(e, l, c, n)
      }
      return f
    }(t, f, p, _);
    h && e && c(e)
  }), n && (0, i.addInstrumentationHandler)("xhr", t => {
    let e = function(t, e, n, a) {
      let s = t.xhr,
        o = s && s[i.SENTRY_XHR_DATA_KEY];
      if (!(0, r.hasTracingEnabled)() || s && s.__sentry_own_request__ || !s || !o) return;
      let c = e(o.url);
      if (t.endTimestamp && c) {
        let t = s.__sentry_xhr_span_id__;
        if (!t) return;
        let e = a[t];
        e && (e.setHttpStatus(o.status_code), e.finish(), delete a[t]);
        return
      }
      let l = (0, r.getCurrentHub)(),
        d = l.getScope(),
        h = d.getSpan(),
        f = c && h ? h.startChild({
          data: {
            ...o.data,
            type: "xhr",
            "http.method": o.method,
            url: o.url
          },
          description: "".concat(o.method, " ").concat(o.url),
          op: "http.client"
        }) : void 0;
      if (f && (s.__sentry_xhr_span_id__ = f.spanId, a[s.__sentry_xhr_span_id__] = f), s.setRequestHeader && n(o.url)) {
        if (f) {
          let t = f && f.transaction,
            e = t && t.getDynamicSamplingContext(),
            n = (0, i.dynamicSamplingContextToSentryBaggageHeader)(e);
          u(s, f.toTraceparent(), n)
        } else {
          let t = l.getClient(),
            {
              traceId: e,
              sampled: n,
              dsc: a
            } = d.getPropagationContext(),
            o = (0, i.generateSentryTraceHeader)(e, void 0, n),
            c = a || (t ? (0, r.getDynamicSamplingContextFromClient)(e, t, d) : void 0),
            h = (0, i.dynamicSamplingContextToSentryBaggageHeader)(c);
          u(s, o, h)
        }
      }
      return f
    }(t, f, p, _);
    h && e && c(e)
  })
}

function c(t) {
  let e = t.data.url,
    n = new PerformanceObserver(r => {
      let a = r.getEntries();
      a.forEach(r => {
        if (("fetch" === r.initiatorType || "xmlhttprequest" === r.initiatorType) && r.name.endsWith(e)) {
          let e = function(t) {
            let {
              name: e,
              version: n
            } = function(t) {
              let e = "unknown",
                n = "unknown",
                r = "";
              for (let i of t) {
                if ("/" === i) {
                  [e, n] = t.split("/");
                  break
                }
                if (!isNaN(Number(i))) {
                  e = "h" === r ? "http" : r, n = t.split(r)[1];
                  break
                }
                r += i
              }
              return r === t && (e = r), {
                name: e,
                version: n
              }
            }(t.nextHopProtocol), r = [];
            return (r.push(["network.protocol.version", n], ["network.protocol.name", e]), i.browserPerformanceTimeOrigin) ? [...r, ["http.request.redirect_start", l(t.redirectStart)],
              ["http.request.fetch_start", l(t.fetchStart)],
              ["http.request.domain_lookup_start", l(t.domainLookupStart)],
              ["http.request.domain_lookup_end", l(t.domainLookupEnd)],
              ["http.request.connect_start", l(t.connectStart)],
              ["http.request.secure_connection_start", l(t.secureConnectionStart)],
              ["http.request.connection_end", l(t.connectEnd)],
              ["http.request.request_start", l(t.requestStart)],
              ["http.request.response_start", l(t.responseStart)],
              ["http.request.response_end", l(t.responseEnd)]
            ] : r
          }(r);
          e.forEach(e => t.setData(...e)), n.disconnect()
        }
      })
    });
  n.observe({
    entryTypes: ["resource"]
  })
}

function l(t) {
  return ((i.browserPerformanceTimeOrigin || performance.timeOrigin) + t) / 1e3
}

function u(t, e, n) {
  try {
    t.setRequestHeader("sentry-trace", e), n && t.setRequestHeader(i.BAGGAGE_HEADER_NAME, n)
  } catch (t) {}
}