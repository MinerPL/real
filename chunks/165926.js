            "use strict";
            n.r(t), n.d(t, {
                setNewUser: function() {
                    return a
                },
                setNewUserFlowCompleted: function() {
                    return l
                }
            });
            var s = n("913144");

            function a(e) {
                s.default.wait(() => s.default.dispatch({
                    type: "NUF_NEW_USER",
                    newUserType: e
                }))
            }

            function l() {
                s.default.wait(() => s.default.dispatch({
                    type: "NUF_COMPLETE"
                }))
            }