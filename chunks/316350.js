"use strict";
n.r(t), n.d(t, {
  usePollFocusManager: function() {
    return o
  },
  PollFocusManager: function() {
    return d
  }
}), n("70102"), n("222007");
var s, l, a = n("37983"),
  i = n("884691");
(l = s || (s = {})).POLL_ANSWERS = "POLL_ANSWERS", l.ACTION_BUTTON = "ACTION_BUTTON";
let r = i.createContext(void 0);

function o() {
  let e = i.useContext(r);
  if (null == e) throw Error("No PollFocusContextProvider found");
  return e
}

function u(e) {
  let {
    children: t,
    actionButtonRef: n,
    pollAnswerRef: s,
    manageFocusOnAction: l
  } = e, o = i.useMemo(() => ({
    actionButtonRef: n,
    pollAnswerRef: s,
    manageFocusOnAction: l
  }), [n, s, l]);
  return (0, a.jsx)(r.Provider, {
    value: o,
    children: t
  })
}

function d(e) {
  let {
    children: t
  } = e, [n, s] = i.useState(), l = i.useRef(null), r = i.useRef(null);
  return i.useEffect(() => {
    var e, t, s;
    "POLL_ANSWERS" === n && null != r.current && (null === (t = r.current) || void 0 === t || null === (e = t.ref) || void 0 === e || e.focus()), "ACTION_BUTTON" === n && null != l.current && (null === (s = l.current) || void 0 === s || s.focus())
  }, [n]), (0, a.jsx)(u, {
    pollAnswerRef: r,
    actionButtonRef: l,
    manageFocusOnAction: e => {
      switch (e) {
        case "submit":
        case "cancel":
          s("ACTION_BUTTON");
          break;
        case "edit":
          s("POLL_ANSWERS")
      }
    },
    children: t
  })
}