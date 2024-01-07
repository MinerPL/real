            "use strict";
            n.r(t), n.d(t, {
                getRecipients: function() {
                    return i
                }
            }), n("843762");
            var a = n("917351"),
                l = n.n(a),
                s = n("449008");

            function i(e, t) {
                return l(e).map(t.getUser).unshift(t.getCurrentUser()).filter(s.isNotNullish).sortBy(e => e.username.toLowerCase()).value()
            }