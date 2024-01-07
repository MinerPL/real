            "use strict";
            n.r(t), n.d(t, {
                trustDomain: function() {
                    return a
                },
                trustProtocol: function() {
                    return l
                }
            });
            var i = n("913144");

            function a(e) {
                i.default.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_DOMAIN",
                    url: e
                })
            }

            function l(e) {
                i.default.dispatch({
                    type: "MASKED_LINK_ADD_TRUSTED_PROTOCOL",
                    url: e
                })
            }