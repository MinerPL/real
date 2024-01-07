            "use strict";
            var i = r("537778");
            t.exports = function(t) {
                return i(t, "[[StartIndex]]") && i(t, "[[EndIndex]]") && t["[[StartIndex]]"] >= 0 && t["[[EndIndex]]"] >= t["[[StartIndex]]"] && String(parseInt(t["[[StartIndex]]"], 10)) === String(t["[[StartIndex]]"]) && String(parseInt(t["[[EndIndex]]"], 10)) === String(t["[[EndIndex]]"])
            }