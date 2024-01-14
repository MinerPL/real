"use strict";
n.r(t), n.d(t, {
  toggleSpellcheck: function() {
    return u
  },
  learnWord: function() {
    return s
  },
  unlearnWord: function() {
    return a
  }
});
var l = n("913144");

function u() {
  l.default.dispatch({
    type: "SPELLCHECK_TOGGLE"
  })
}

function s(e) {
  l.default.dispatch({
    type: "SPELLCHECK_LEARN_WORD",
    word: e
  })
}

function a(e) {
  l.default.dispatch({
    type: "SPELLCHECK_UNLEARN_WORD",
    word: e
  })
}