            "use strict";
            t.extend = function(e) {
                var t, n, a, o, i = Array.prototype.slice.call(arguments, 1);
                for (t = 0, n = i.length; t < n; t += 1)
                    if (a = i[t])
                        for (o in a) r.call(a, o) && (e[o] = a[o]);
                return e
            };
            var r = Object.prototype.hasOwnProperty;
            t.hop = r