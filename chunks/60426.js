            "use strict";
            var i = r("366400"),
                n = r("16662");
            t.exports = function() {
                var t = n();
                return i(Array.prototype, {
                    map: t
                }, {
                    map: function() {
                        return Array.prototype.map !== t
                    }
                }), t
            }