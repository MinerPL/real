            "use strict";
            var n = Object.prototype.hasOwnProperty;
            t.exports = function(t, e, r) {
                if (!t) return null;
                var i = {};
                for (var o in t) n.call(t, o) && (i[o] = e.call(r, t[o], o, t));
                return i
            }