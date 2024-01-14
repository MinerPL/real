"use strict";
s.r(t), s.d(t, {
  watchCandidateGames: function() {
    return i
  },
  stopWatchingCandidateGames: function() {
    return r
  }
}), s("70102");
var a = s("913144"),
  n = s("773336"),
  l = s("50885");

function i() {
  if (!(0, n.isDesktop)()) throw Error("Attempted to observe candidate games on a non-desktop platform");
  l.default.setCandidateGamesCallback(e => {
    a.default.dispatch({
      type: "CANDIDATE_GAMES_CHANGE",
      games: e
    })
  }), a.default.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_START"
  })
}

function r() {
  if (!(0, n.isDesktop)()) throw Error("Attempted to stop observing candidate games on a non-desktop platform");
  l.default.clearCandidateGamesCallback(), a.default.dispatch({
    type: "GAME_DETECTION_WATCH_CANDIDATE_GAMES_STOP"
  })
}