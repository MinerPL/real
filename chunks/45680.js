            "use strict";
            var i = Math.floor;
            t.exports = function(t, e) {
                var r = t % e;
                return i(r >= 0 ? r : r + e)
            }