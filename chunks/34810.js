            "use strict";
            var n = i("664144"),
                r = i("503486").RegExp;
            t.exports = n(function() {
                var t = r("(?<a>b)", "g");
                return "b" !== t.exec("b").groups.a || "bc" !== "b".replace(t, "$<a>c")
            })