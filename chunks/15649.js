            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("782340");

            function r(e) {
                let t = i.default.getLocale().toLowerCase();
                return t in e ? e[t] : e.default
            }