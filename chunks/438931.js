            "use strict";
            n.r(e), n.d(e, {
                updateFlags: function() {
                    return r
                }
            });
            var a = n("872717"),
                i = n("913144"),
                l = n("49111");

            function r(t, e, n) {
                return i.default.dispatch({
                    type: "LIBRARY_APPLICATION_FLAGS_UPDATE_START",
                    applicationId: t,
                    branchId: e,
                    flags: n
                }), a.default.patch({
                    url: l.Endpoints.LIBRARY_APPLICATION_BRANCH(t, e),
                    body: {
                        flags: n
                    },
                    oldFormErrors: !0
                }).then(t => {
                    i.default.dispatch({
                        type: "LIBRARY_APPLICATION_FLAGS_UPDATE_SUCCESS",
                        libraryApplication: t.body
                    })
                })
            }