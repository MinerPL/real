            "use strict";
            n("854508"), e.exports = function(e, t, r, o) {
                var a = this;
                a.sequenceLevels[e] = 0;

                function i(t) {
                    var i;
                    a.fireCallback(r, t, e), "keyup" !== o && (i = n("791607"), a.ignoreNextKeyup = i(t)), setTimeout(function() {
                        a.resetSequences()
                    }, 10)
                }
                for (var s = 0; s < t.length; ++s) {
                    var c = s + 1 === t.length ? i : function(t) {
                        return function() {
                            a.nextExpectedAction = t, ++a.sequenceLevels[e], a.resetSequenceTimer()
                        }
                    }(o || a.getKeyInfo(t[s + 1]).action);
                    a.bindSingle(t[s], c, o, e, s)
                }
            }