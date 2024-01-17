"use strict";
n.r(t), n.d(t, {
  usePollContext: function() {
    return i
  },
  PollContextProvider: function() {
    return r
  },
  useStyleClass: function() {
    return o
  },
  useMessageIds: function() {
    return u
  }
}), n("70102");
var s = n("37983"),
  l = n("884691");
let a = l.createContext(void 0);

function i() {
  let e = l.useContext(a);
  if (null == e) throw Error("No PollContextProvider found");
  return e
}

function r(e) {
  let {
    children: t,
    message: n,
    poll: i
  } = e, r = l.useMemo(() => ({
    message: n,
    poll: i
  }), [n, i]);
  return (0, s.jsx)(a.Provider, {
    value: r,
    children: t
  })
}

function o(e) {
  let t = function() {
    let {
      poll: e
    } = i();
    return e.resources
  }();
  return t.styles[e]
}

function u() {
  let {
    message: e
  } = i(), t = e.getChannelId();
  return l.useMemo(() => ({
    channelId: t,
    messageId: e.id
  }), [e.id, t])
}