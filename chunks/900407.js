"use strict";
n.r(e), n.d(e, {
  getNavigationEntry: function() {
    return a
  }
});
var r = n("307447");
let i = () => {
    let t = r.WINDOW.performance.timing,
      e = r.WINDOW.performance.navigation.type,
      n = {
        entryType: "navigation",
        startTime: 0,
        type: 2 == e ? "back_forward" : 1 === e ? "reload" : "navigate"
      };
    for (let e in t) "navigationStart" !== e && "toJSON" !== e && (n[e] = Math.max(t[e] - t.navigationStart, 0));
    return n
  },
  a = () => r.WINDOW.__WEB_VITALS_POLYFILL__ ? r.WINDOW.performance && (performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || i()) : r.WINDOW.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]