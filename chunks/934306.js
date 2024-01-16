"use strict";
n.r(t), n.d(t, {
  isOnNewPanels: function() {
    return a
  },
  useOnNewPanels: function() {
    return o
  },
  isSplitMessagesTab: function() {
    return l
  },
  isSplitMessagesTabAndOnMessagesTab: function() {
    return u
  },
  shouldHandleNewPanelsRoute: function() {
    return c
  }
});
var i = n("21121"),
  r = n("491246"),
  s = n("49111");

function a() {
  return (0, i.isInMainTabsExperiment)()
}

function o() {
  return (0, i.useInMainTabsExperiment)()
}

function l() {
  return (0, i.isInMainTabsExperiment)()
}

function u() {
  if (!l()) return !1;
  let e = (0, r.default)();
  return (null == e ? void 0 : e.name) === "messages"
}

function c(e) {
  return !!a() && null != e && e !== s.ME
}