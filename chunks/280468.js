            "use strict";
            n.r(t), n.d(t, {
                requireSortedDescending: function() {
                    return s
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("249654");

            function s(e) {
                a(e.length <= 2 || l.default.compare(e[0].id, e[e.length - 1].id) >= 0, "messages must be sorted in descending order.")
            }