"use strict";
n.r(t);
var i = n("868493");
n("133337");
let r = {
    removePeek: !1,
    removePeekSubtle: !1,
    removePeekRoundRight: !1,
    removePeekEdge: !1,
    removeForwardSwipe: !1,
    showNewPanels: !1
  },
  s = [{
    id: 0,
    label: "Control",
    config: {
      ...r,
      showNewPanels: !0
    }
  }, {
    id: 1,
    label: "Remove peek",
    config: {
      ...r,
      showNewPanels: !0,
      removePeek: !0
    }
  }, {
    id: 2,
    label: "Remove peek (subtle peek}",
    config: {
      ...r,
      showNewPanels: !0,
      removePeek: !0,
      removePeekSubtle: !0
    }
  }, {
    id: 3,
    label: "Remove peek (round right corner)",
    config: {
      ...r,
      showNewPanels: !0,
      removePeek: !0,
      removePeekRoundRight: !0
    }
  }, {
    id: 4,
    label: "Remove peek + flush right edge",
    config: {
      ...r,
      showNewPanels: !0,
      removePeek: !0,
      removePeekEdge: !0
    }
  }, {
    id: 5,
    label: "Remove peek + flush right edge + remove forward swipe",
    config: {
      ...r,
      showNewPanels: !0,
      removePeek: !0,
      removePeekEdge: !0,
      removeForwardSwipe: !0
    }
  }];
(0, i.default)({
  kind: "user",
  id: "2023-12_mobile_redesign_nav_peek",
  label: "Mobile Redesign - Nav Experiment: Peek",
  defaultConfig: r,
  treatments: s
})