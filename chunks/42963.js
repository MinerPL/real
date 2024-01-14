"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var r = n("308503"),
  i = n("95410"),
  l = n("605250"),
  o = n("599110"),
  u = n("149806"),
  a = n("49111");
let s = "UserFlowAnalyticsStore_current",
  c = "UserFlowAnalyticsStore";

function d(e) {
  if (e === u.FlowType.UNKNOWN) return null;
  let t = i.default.get("".concat(c, "-").concat(e));
  if (null == t) return null;
  let {
    version: n,
    ...r
  } = t;
  return 1 !== n ? null : r
}
new l.default("UserFlowAnalytics");
let f = (0, r.default)((e, t) => ({
  flows: {},
  currentFlow: null,
  activeFlow: () => {
    var e;
    let n = null !== (e = t().currentFlow) && void 0 !== e ? e : i.default.get(s);
    if (null == n) return null;
    let {
      [n]: r
    } = t().flows, l = null != r ? r : d(n);
    return (null == l ? void 0 : l.currentStep) != null ? n : null
  }
}));

function h(e, t) {
  let {
    [e]: n, ...r
  } = f.getState().flows, i = null != n ? n : d(e);
  if ((null == i ? void 0 : i.currentStep) == null || i.currentStep !== t) f.setState({
    flows: {
      ...r,
      [e]: {
        type: e,
        lastStep: null,
        lastTimestamp: null,
        currentStep: t,
        currentTimestamp: new Date,
        skipped: !1
      }
    },
    currentFlow: e
  })
}

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    r = e;
  if (e === u.FlowType.ANY) {
    var i;
    r = null !== (i = f.getState().activeFlow()) && void 0 !== i ? i : u.FlowType.UNKNOWN
  }
  let {
    [r]: l, ...o
  } = f.getState().flows, a = null != l ? l : d(r);
  if (null != a && null != a.currentStep) a.currentStep !== t && f.setState({
    flows: {
      ...o,
      [r]: {
        ...a,
        lastStep: a.currentStep,
        lastTimestamp: a.currentTimestamp,
        currentStep: t,
        currentTimestamp: new Date,
        ended: n
      }
    },
    currentFlow: r
  })
}
f.subscribe(e => {
  var t;
  if (null != e && (! function(e) {
      if (e.type === u.FlowType.UNKNOWN) return;
      let t = "".concat(c, "-").concat(e.type);
      e.ended ? (i.default.remove(t), i.default.remove(s)) : (i.default.set("".concat(c, "-").concat(e.type), {
        ...e,
        version: 1
      }), i.default.set(s, e.type))
    }(e), o.default.track(a.AnalyticEvents.NUO_TRANSITION, {
      flow_type: e.type,
      from_step: e.lastStep,
      to_step: e.currentStep,
      seconds_on_from_step: "function" != typeof(null === (t = e.lastTimestamp) || void 0 === t ? void 0 : t.getTime) ? 0 : (e.currentTimestamp.getTime() - e.lastTimestamp.getTime()) / 1e3
    }, {
      flush: !0
    }), e.ended)) {
    let t = {
      ...f.getState().flows
    };
    delete t[e.type], f.setState({
      flows: t,
      currentFlow: null
    })
  }
}, e => null != e.currentFlow ? e.flows[e.currentFlow] : void 0);

function I() {
  return null != f.getState().activeFlow()
}
var m = {
  flowStart: h,
  flowStepOrStart: function(e, t) {
    I() ? p(e, t) : h(e, t)
  },
  flowStep: p,
  hasActiveFlow: I
}