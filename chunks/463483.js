            function i(t, e) {
                if (!t) throw Error(e || "Assertion failed")
            }
            r("70102"), t.exports = i, i.equal = function(t, e, r) {
                if (t != e) throw Error(r || "Assertion failed: " + t + " != " + e)
            }