            "use strict";
            var r = n("522552"),
                a = n("633050");
            e.exports = !r(function() {
                var e = Error("a");
                return !("stack" in e) || (Object.defineProperty(e, "stack", a(1, 7)), 7 !== e.stack)
            })