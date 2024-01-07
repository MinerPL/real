            "use strict";
            var i = r("366400"),
                n = r("888757");
            t.exports = function() {
                var t = n();
                return i(String.prototype, {
                    trim: t
                }, {
                    trim: function() {
                        return String.prototype.trim !== t
                    }
                }), t
            }