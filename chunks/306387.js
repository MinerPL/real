            "use strict";
            var e = n("522552"),
                o = n("490653"),
                i = n("113763"),
                u = n("426716"),
                s = Object.isExtensible,
                c = e(function() {
                    s(1)
                });
            t.exports = c || u ? function(t) {
                return !!o(t) && (!u || "ArrayBuffer" !== i(t)) && (!s || s(t))
            } : s