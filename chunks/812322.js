            "use strict";
            var r = n("207815"),
                a = n("979095"),
                o = n("984447"),
                i = n("756579"),
                l = n("119500"),
                u = Math.min,
                s = [].lastIndexOf,
                c = !!s && 1 / [1].lastIndexOf(1, -0) < 0,
                d = l("lastIndexOf");
            e.exports = c || !d ? function(e) {
                if (c) return r(s, this, arguments) || 0;
                var t = a(this),
                    n = i(t),
                    l = n - 1;
                for (arguments.length > 1 && (l = u(l, o(arguments[1]))), l < 0 && (l = n + l); l >= 0; l--)
                    if (l in t && t[l] === e) return l || 0;
                return -1
            } : s