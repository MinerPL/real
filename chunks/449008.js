"use strict";

function O(I) {
  throw Error("Unhandled value: ".concat(I))
}

function T(I) {
  return null != I
}

function _(I, N) {
  return I.size === N.size && (0 === I.size && 0 === N.size || Array.from(I).every(I => N.has(I)))
}
A.r(N), A.d(N, {
  assertNever: function() {
    return O
  },
  isNotNullish: function() {
    return T
  },
  areSetsEqual: function() {
    return _
  }
}), A("70102")