            "use strict";
            n.r(t), n.d(t, {
                isCurrentUserTeen: function() {
                    return a
                }
            });
            var i = n("697218");
            let a = () => {
                var e;
                return (null === (e = i.default.getCurrentUser()) || void 0 === e ? void 0 : e.nsfwAllowed) === !1
            }