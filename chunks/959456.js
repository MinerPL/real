"use strict";
n.r(e), n.d(e, {
  PROFILE_MAP: function() {
    return E
  },
  addProfileToMap: function() {
    return b
  },
  addProfilesToEnvelope: function() {
    return _
  },
  createProfilingEvent: function() {
    return v
  },
  findProfiledTransactionsFromEnvelope: function() {
    return g
  },
  isValidSampleRate: function() {
    return y
  }
}), n("70102"), n("424973"), n("222007"), n("808653");
var r, i = n("675065"),
  a = n("103787"),
  s = n("714090");
let o = String(0),
  c = "",
  l = "",
  u = "",
  d = s.WINDOW.navigator && s.WINDOW.navigator.userAgent || "",
  h = "",
  f = s.WINDOW.navigator && s.WINDOW.navigator.language || s.WINDOW.navigator && s.WINDOW.navigator.languages && s.WINDOW.navigator.languages[0] || "",
  p = s.WINDOW.navigator && s.WINDOW.navigator.userAgentData;
if ("object" == typeof(r = p) && null !== r && "getHighEntropyValues" in r) p.getHighEntropyValues(["architecture", "model", "platform", "platformVersion", "fullVersionList"]).then(t => {
  if (c = t.platform || "", u = t.architecture || "", h = t.model || "", l = t.platformVersion || "", t.fullVersionList && t.fullVersionList.length > 0) {
    let e = t.fullVersionList[t.fullVersionList.length - 1];
    d = "".concat(e.brand, " ").concat(e.version)
  }
}).catch(t => void 0);

function _(t, e) {
  if (!e.length) return t;
  for (let n of e) t[1].push([{
    type: "profile"
  }, n]);
  return t
}

function g(t) {
  let e = [];
  return (0, a.forEachEnvelopeItem)(t, (t, n) => {
    if ("transaction" === n)
      for (let n = 1; n < t.length; n++) {
        let r = t[n];
        r && r.contexts && r.contexts.profile && r.contexts.profile.profile_id && e.push(t[n])
      }
  }), e
}
let m = new WeakMap;

function y(t) {
  return "number" != typeof t && "boolean" != typeof t || "number" == typeof t && isNaN(t) ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn("[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ".concat(JSON.stringify(t), " of type ").concat(JSON.stringify(typeof t), ".")), !1) : !0 === t || !1 === t || !(t < 0) && !(t > 1) || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.warn("[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ".concat(t, ".")), !1)
}

function v(t, e, n) {
  var r;
  return ((r = e).samples.length < 2 ? (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains less than 2 samples"), !1) : !!r.frames.length || (("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Discarding profile because it contains no frames"), !1)) ? function(t, e, n) {
    if ("transaction" !== t.type) throw TypeError("Profiling events may only be attached to transactions, this should never occur.");
    if (null == e) throw TypeError("Cannot construct profiling event envelope without a valid profile. Got ".concat(e, " instead."));
    let r = function(t) {
        let e = t && t.contexts && t.contexts.trace && t.contexts.trace.trace_id;
        return ("string" == typeof e && 32 !== e.length && ("undefined" == typeof __SENTRY_DEBUG__ || __SENTRY_DEBUG__) && a.logger.log("[Profiling] Invalid traceId: ".concat(e, " on profiled event")), "string" != typeof e) ? "" : e
      }(t),
      p = function(t) {
        return "thread_metadata" in t ? t : function(t) {
          let e;
          let n = 0,
            r = {
              samples: [],
              stacks: [],
              frames: [],
              thread_metadata: {
                [o]: {
                  name: "main"
                }
              }
            };
          if (!t.samples.length) return r;
          let i = t.samples[0].timestamp,
            s = "number" == typeof performance.timeOrigin ? performance.timeOrigin : a.browserPerformanceTimeOrigin || 0,
            c = s - (a.browserPerformanceTimeOrigin || s);
          for (let a = 0; a < t.samples.length; a++) {
            let s = t.samples[a];
            if (void 0 === s.stackId) {
              void 0 === e && (e = n, r.stacks[e] = [], n++), r.samples[a] = {
                elapsed_since_start_ns: ((s.timestamp + c - i) * 1e6).toFixed(0),
                stack_id: e,
                thread_id: o
              };
              continue
            }
            let l = t.stacks[s.stackId],
              u = [];
            for (; l;) {
              u.push(l.frameId);
              let e = t.frames[l.frameId];
              void 0 === r.frames[l.frameId] && (r.frames[l.frameId] = {
                function: e.name,
                abs_path: "number" == typeof e.resourceId ? t.resources[e.resourceId] : void 0,
                lineno: e.line,
                colno: e.column
              }), l = void 0 === l.parentId ? void 0 : t.stacks[l.parentId]
            }
            let d = {
              elapsed_since_start_ns: ((s.timestamp + c - i) * 1e6).toFixed(0),
              stack_id: n,
              thread_id: o
            };
            r.stacks[n] = u, r.samples[a] = d, n++
          }
          return r
        }(t)
      }(e),
      _ = "number" == typeof t.start_timestamp ? 1e3 * t.start_timestamp : Date.now(),
      g = "number" == typeof t.timestamp ? 1e3 * t.timestamp : Date.now(),
      y = {
        event_id: n,
        timestamp: new Date(_).toISOString(),
        platform: "javascript",
        version: "1",
        release: t.release || "",
        environment: t.environment || i.DEFAULT_ENVIRONMENT,
        runtime: {
          name: "javascript",
          version: s.WINDOW.navigator.userAgent
        },
        os: {
          name: c,
          version: l,
          build_number: d
        },
        device: {
          locale: f,
          model: h,
          manufacturer: d,
          architecture: u,
          is_emulator: !1
        },
        debug_meta: {
          images: function(t) {
            let e;
            let n = a.GLOBAL_OBJ._sentryDebugIds;
            if (!n) return [];
            let r = (0, i.getCurrentHub)();
            if (!r) return [];
            let s = r.getClient();
            if (!s) return [];
            let o = s.getOptions();
            if (!o) return [];
            let c = o.stackParser;
            if (!c) return [];
            let l = m.get(c);
            l ? e = l : (e = new Map, m.set(c, e));
            let u = Object.keys(n).reduce((t, r) => {
                let i;
                let a = e.get(r);
                a ? i = a : (i = c(r), e.set(r, i));
                for (let e = i.length - 1; e >= 0; e--) {
                  let a = i[e],
                    s = a && a.filename;
                  if (a && s) {
                    t[s] = n[r];
                    break
                  }
                }
                return t
              }, {}),
              d = [];
            for (let e of t) e && u[e] && d.push({
              type: "sourcemap",
              code_file: e,
              debug_id: u[e]
            });
            return d
          }(e.resources)
        },
        profile: p,
        transactions: [{
          name: t.transaction || "",
          id: t.event_id || (0, a.uuid4)(),
          trace_id: r,
          active_thread_id: o,
          relative_start_ns: "0",
          relative_end_ns: ((g - _) * 1e6).toFixed(0)
        }]
      };
    return y
  }(n, e, t) : null
}
let E = new Map;

function b(t, e) {
  if (E.set(t, e), E.size > 30) {
    let t = E.keys().next().value;
    E.delete(t)
  }
}