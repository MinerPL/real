"use strict";
n.r(t), n.d(t, {
  useChannelPollInteractions: function() {
    return r
  },
  updatePollState: function() {
    return o
  },
  getPollState: function() {
    return u
  }
});
var s = n("308503"),
  l = n("233736");
let a = {},
  i = (0, s.default)(e => ({
    polls: {},
    updatePollState(t, n, s) {
      e(e => {
        var l;
        return {
          polls: {
            ...e.polls,
            [t]: {
              ...e.polls[t],
              [n]: s(null === (l = e.polls[t]) || void 0 === l ? void 0 : l[n])
            }
          }
        }
      })
    }
  }));

function r(e) {
  return i(t => {
    var n;
    return null !== (n = t.polls[e]) && void 0 !== n ? n : a
  }, l.default)
}

function o(e, t, n) {
  i.getState().updatePollState(e, t, n)
}

function u(e, t) {
  var n;
  return null === (n = i.getState().polls[e]) || void 0 === n ? void 0 : n[t]
}