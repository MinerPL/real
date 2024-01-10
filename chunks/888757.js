            "use strict";
            var i = r("931472");
            t.exports = function() {
                return String.prototype.trim && "​" === "​".trim() && "᠎" === "᠎".trim() && "_᠎" === "_᠎".trim() && "᠎_" === "᠎_".trim() ? String.prototype.trim : i
            }