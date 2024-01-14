"use strict";
r("70102"), r("781738");
var n = function(t) {
  if (void 0 === t) throw Error("invariant(...): Second argument must be a string.")
};
t.exports = function(t, e) {
  for (var r, i = arguments.length, o = Array(i > 2 ? i - 2 : 0), a = 2; a < i; a++) o[a - 2] = arguments[a];
  if (n(e), !t) {
    if (void 0 === e) r = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
    else {
      var u = 0;
      (r = Error(e.replace(/%s/g, function() {
        return String(o[u++])
      }))).name = "Invariant Violation"
    }
    throw r.framesToPop = 1, r
  }
}