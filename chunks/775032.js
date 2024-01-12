            "use strict";
            s.r(l), s.d(l, {
                default: function() {
                    return n
                }
            });
            var t = s("446674"),
                a = s("697218");

            function n() {
                let e = (0, t.useStateFromStores)([a.default], () => {
                    var e;
                    return null === (e = a.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed
                });
                return e
            }