"use strict";
n.r(t), n.d(t, {
  openAgeGateModal: function() {
    return r
  },
  closeAgeGateModal: function() {
    return o
  },
  openSuccessAgeGateModal: function() {
    return u
  },
  openFailureAgeGateModal: function() {
    return d
  }
});
var a = n("913144");
n("437822"), n("393414");
var s = n("599110"),
  i = n("586391"),
  l = n("49111");

function r(e) {
  s.default.track(l.AnalyticEvents.OPEN_MODAL, {
    type: "Enter Your Birthday",
    source: {
      section: e
    }
  }), a.default.dispatch({
    type: "AGE_GATE_MODAL_OPEN",
    source: e
  })
}

function o(e) {
  a.default.wait(() => a.default.dispatch({
    type: "AGE_GATE_MODAL_CLOSE"
  })), void 0 !== e && s.default.track(l.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: i.AgeGateAnalyticAction.AGE_GATE_CLOSE
  })
}

function u(e) {
  a.default.wait(() => {
    a.default.dispatch({
      type: "AGE_GATE_SUCCESS_MODAL_OPEN"
    })
  }), s.default.track(l.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: i.AgeGateAnalyticAction.AGE_GATE_SUCCESS
  })
}

function d(e, t) {
  a.default.wait(() => {
    a.default.dispatch({
      type: "AGE_GATE_FAILURE_MODAL_OPEN",
      underageMessage: t
    })
  }), s.default.track(l.AnalyticEvents.AGE_GATE_ACTION, {
    source: e,
    action: i.AgeGateAnalyticAction.AGE_GATE_FAILURE
  })
}