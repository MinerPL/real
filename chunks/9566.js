"use strict";
n.r(t), n.d(t, {
  fetchApplicationCommandIndex: function() {
    return o
  },
  requestApplicationCommandIndex: function() {
    return r
  }
});
var i = n("872717"),
  l = n("913144"),
  a = n("599110"),
  s = n("49111");
async function o(e, t, n) {
  let o, r = 0;
  switch (e.type) {
    case "channel":
      o = s.Endpoints.APPLICATION_COMMAND_INDEX_CHANNEL(e.channelId);
      break;
    case "guild":
      o = s.Endpoints.APPLICATION_COMMAND_INDEX_GUILD(e.guildId);
      break;
    case "user":
      o = s.Endpoints.APPLICATION_COMMAND_INDEX_USER
  }
  let u = async t => r >= 3 ? (c(!0), l.default.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
    target: e
  })) : (await new Promise(e => setTimeout(e, t)), d()), d = () => i.default.get({
    url: o,
    retries: 3 - r - 1,
    signal: n.signal,
    onRequestCreated: () => r++
  }).then(t => 202 === t.status ? u(5e3) : (c(!1), l.default.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_SUCCESS",
    target: e,
    index: t.body
  })), t => {
    if (n.signal.aborted) {
      c(!0);
      return
    }
    return 429 === t.status ? u(1e3 * t.body.retry_after) : (c(!0), l.default.dispatch({
      type: "APPLICATION_COMMAND_INDEX_FETCH_FAILURE",
      target: e
    }))
  }), c = e => {
    let i = performance.now() - t;
    a.default.track(s.AnalyticEvents.APPLICATION_COMMAND_PERFORMANCE, {
      duration_ms: i,
      error: e,
      aborted: n.signal.aborted,
      include_applications: !0,
      retries: Math.max(r - 1, 0),
      kind: null,
      command_type: null
    })
  };
  await d()
}

function r(e) {
  l.default.dispatch({
    type: "APPLICATION_COMMAND_INDEX_FETCH_REQUEST",
    start: performance.now(),
    target: e
  })
}