            "use strict";
            r("70102"), r("424973");
            var i = TypeError;
            t.exports = function(t) {
                if (!t || "function" != typeof t.next) throw new i("iterator must be an object with a `next` method");
                if (arguments.length > 1) {
                    var e, r = arguments[1];
                    if ("function" != typeof r) throw new i("`callback`, if provided, must be a function")
                }
                for (var n = r || [];
                    (e = t.next()) && !e.done;) r ? r(e.value) : n.push(e.value);
                if (!r) return n
            }