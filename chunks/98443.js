"use strict";
n.r(t), n.d(t, {
  useNavPeekExperiment: function() {
    return l
  },
  getNavPeekExperimentConfig: function() {
    return u
  }
});
var i = n("868493"),
  r = n("133337");
let s = {
    removePeek: !1,
    removePeekSubtle: !1,
    removePeekRoundRight: !1,
    removePeekEdge: !1,
    removeForwardSwipe: !1,
    showNewPanels: !1
  },
  a = [{
    id: 0,
    label: "Control",
    config: {
      ...s,
      showNewPanels: !0
    }
  }, {
    id: 1,
    label: "Remove peek",
    config: {
      ...s,
      showNewPanels: !0,
      removePeek: !0
    }
  }, {
    id: 2,
    label: "Remove peek (subtle peek}",
    config: {
      ...s,
      showNewPanels: !0,
      removePeek: !0,
      removePeekSubtle: !0
    }
  }, {
    id: 3,
    label: "Remove peek (round right corner)",
    config: {
      ...s,
      showNewPanels: !0,
      removePeek: !0,
      removePeekRoundRight: !0
    }
  }, {
    id: 4,
    label: "Remove peek + flush right edge",
    config: {
      ...s,
      showNewPanels: !0,
      removePeek: !0,
      removePeekEdge: !0
    }
  }, {
    id: 5,
    label: "Remove peek + flush right edge + remove forward swipe",
    config: {
      ...s,
      showNewPanels: !0,
      removePeek: !0,
      removePeekEdge: !0,
      removeForwardSwipe: !0
    }
  }],
  o = (0, i.default)({
    kind: "user",
    id: "2023-12_mobile_redesign_nav_peek",
    label: "Mobile Redesign - Nav Experiment: Peek",
    defaultConfig: s,
    treatments: a
  });

function l(e, t) {
  return (0, r.useMergedExperimentConfigs)(o.existingUsers, o.newUsers, e, t)
}

function u(e, t) {
  return (0, r.getMergedExperimentConfigs)(o.existingUsers, o.newUsers, e, t)
}