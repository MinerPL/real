"use strict";
n.r(t), n.d(t, {
  setHighlightedSummary: function() {
    return S
  },
  toggleTopicsBar: function() {
    return N
  },
  setSelectedSummary: function() {
    return M
  },
  updateVisibleMessages: function() {
    return T
  },
  useSummaryPolling: function() {
    return j
  },
  setSummaryFeedback: function() {
    return y
  },
  deleteSummary: function() {
    return O
  },
  default: function() {
    return D
  }
}), n("222007");
var l = n("884691"),
  a = n("917351"),
  s = n.n(a),
  i = n("394846"),
  r = n("65597"),
  o = n("872717"),
  u = n("913144"),
  d = n("448993"),
  c = n("734575"),
  m = n("104589"),
  f = n("116460"),
  h = n("42203"),
  p = n("718517"),
  g = n("347738");
let E = 30 * p.default.Millis.SECOND,
  v = 5 * p.default.Millis.SECOND,
  C = {},
  I = {};
async function x(e, t) {
  let n, l;
  if (!g.default.shouldFetch(e, t)) return;
  let a = Date.now();
  u.default.dispatch({
    type: "REQUEST_CHANNEL_SUMMARY",
    channelId: e,
    summaryId: t,
    requestedAt: a
  });
  try {
    let n = await o.default.get("/channels/".concat(e, "/summaries/").concat(t));
    l = null == n ? void 0 : n.body
  } catch (e) {
    n = new d.APIError(e)
  }
  u.default.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARY",
    channelId: e,
    summary: l,
    error: n,
    requestedAt: a,
    receivedAt: Date.now()
  })
}
async function _(e) {
  var t, n;
  let l, a;
  if (!g.default.shouldFetch(e)) return;
  let i = Date.now();
  u.default.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES",
    channelId: e,
    requestedAt: i
  });
  try {
    a = await o.default.get("/channels/".concat(e, "/summaries"))
  } catch (e) {
    l = new d.APIError(e)
  }
  let r = (null == a ? void 0 : null === (t = a.body) || void 0 === t ? void 0 : t.summaries) instanceof Array ? a.body.summaries : null !== (n = null == a ? void 0 : a.body) && void 0 !== n ? n : [];
  r = s.takeRight(r, 75), u.default.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARIES",
    channelId: e,
    summaries: r,
    error: null != l ? l : void 0,
    requestedAt: i,
    receivedAt: Date.now()
  })
}

function S(e, t) {
  u.default.dispatch({
    type: "SET_HIGHLIGHTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function N() {
  u.default.dispatch({
    type: "TOGGLE_TOPICS_BAR"
  })
}

function M(e, t) {
  null != e && null != t && x(e, t), u.default.dispatch({
    type: "SET_SELECTED_SUMMARY",
    channelId: e,
    summaryId: null != t ? t : null
  })
}

function T(e, t) {
  u.default.dispatch({
    type: "UPDATE_VISIBLE_MESSAGES",
    topVisibleMessage: null != e ? e : null,
    bottomVisibleMessage: null != t ? t : null
  })
}

function A(e, t) {
  return null == C[e] && (C[e] = 0), null === t ? C[e] = 0 : C[e] += t, C[e]
}

function j(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = (0, r.default)([h.default], () => h.default.getChannel(e), [e]),
    [a, s] = l.useState(null),
    o = (0, c.useChannelSummariesExperiment)(n) && !i.isMobile;
  l.useEffect(() => {
    if (o) return s(e), () => {
      s(null)
    }
  }, [e, o]), l.useEffect(() => {
    if (a !== e && null != a && b.stopPolling(e), o && null != a) return (t || null != e && a !== e) && b.fetchSummaries(e), b.startPolling(e), () => {
      null != a && b.stopPolling(e)
    }
  }, [e, t, a, o])
}

function y(e, t) {
  u.default.dispatch({
    type: "SET_SUMMARY_FEEDBACK",
    summary: e,
    rating: t
  })
}
async function R() {
  var e;
  let t, n;
  if (!g.default.shouldFetchChannelAffinities()) return Promise.resolve(null);
  let l = Date.now();
  u.default.dispatch({
    type: "REQUEST_CHANNEL_AFFINITIES",
    requestedAt: l
  });
  try {
    n = await o.default.get("/users/@me/affinities/channels")
  } catch (e) {
    t = new d.APIError(e)
  }
  let a = null == n ? void 0 : null === (e = n.body) || void 0 === e ? void 0 : e.channel_affinities;
  u.default.dispatch({
    type: "RECEIVE_CHANNEL_AFFINITIES",
    affinities: a,
    error: null != t ? t : void 0,
    requestedAt: l,
    receivedAt: Date.now()
  })
}
async function L(e) {
  let t, n, {
    useQuickSwitcher: l = !0,
    useChannelAffinities: a = !0
  } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  e = null != e ? e : [];
  let s = Date.now();
  if (0 === (e = e.concat(g.default.defaultChannelIds({
      withQuickSwitcher: l,
      withChannelAffinities: a
    })).filter(e => {
      let t = h.default.getChannel(e);
      return (0, c.canSeeChannelSummaries)(t, !1, !0)
    }).filter(e => {
      let t = Date.now(),
        n = g.default.status(e);
      if (null == n ? void 0 : n.fetching) return !1;
      let l = null == n ? void 0 : n.lastReceivedAt;
      return null == l || t - l > E
    }).slice(0, 50)).length) return Promise.resolve(null);
  u.default.dispatch({
    type: "REQUEST_CHANNEL_SUMMARIES_BULK",
    channelIds: e,
    requestedAt: s
  });
  try {
    n = await o.default.post({
      url: "/users/@me/summaries",
      body: {
        channel_ids: e
      }
    })
  } catch (e) {
    t = new d.APIError(e)
  }
  let i = null == n ? void 0 : n.body.summaries;
  u.default.dispatch({
    type: "RECEIVE_CHANNEL_SUMMARIES_BULK",
    requestedAt: s,
    receivedAt: Date.now(),
    summaries: i,
    requestArgs: {
      channelIds: e
    },
    error: t
  })
}
async function O(e) {
  try {
    await o.default.delete("/channels/".concat(e.channelId, "/summaries/").concat(e.id)), u.default.dispatch({
      type: "DELETE_SUMMARY",
      summary: e
    })
  } catch (e) {
    throw new d.APIError(e)
  }
}
let b = {
  startPolling: function(e) {
    let t = A(e, 1);
    t - 1 == 0 && (I[e] = setInterval(async () => {
      await b.fetchSummaries(e)
    }, v))
  },
  stopPolling: function(e) {
    let t = A(e, -1);
    t <= 0 && (A(e, 0), clearInterval(I[e]))
  },
  setSummaryFeedback: y,
  useSummaryPolling: j,
  updateVisibleMessages: T,
  setSelectedSummary: M,
  setHighlightedSummary: S,
  fetchSummaries: _,
  fetchSummariesBulk: L,
  useChannelSummaries: function(e) {
    let {
      channelIds: t = []
    } = e;
    return ! function() {
      let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        t = l.useMemo(() => e.join(","), [e]);
      l.useEffect(() => {
        (async function e() {
          try {
            await R()
          } catch (e) {}
          try {
            var e, n;
            (null === (e = f.default.getProps().results) || void 0 === e ? void 0 : e.length) === 0 && (0, m.search)(null !== (n = f.default.getProps().query) && void 0 !== n ? n : "")
          } catch (e) {}
          await L(t.split(","))
        })()
      }, [t])
    }(t), (0, r.useStateFromStoresArray)([g.default], () => g.default.topSummaries(), [])
  },
  deleteSummary: O
};
var D = b