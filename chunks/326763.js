            "use strict";
            s("70102"), s("424973");
            var r = TypeError;
            t.exports = function(t) {
                if (!t || "function" != typeof t.next) throw new r("iterator must be an object with a `next` method");
                if (arguments.length > 1) {
                    var e, s = arguments[1];
                    if ("function" != typeof s) throw new r("`callback`, if provided, must be a function")
                }
                for (var i = s || [];
                    (e = t.next()) && !e.done;) s ? s(e.value) : i.push(e.value);
                if (!s) return i
            }