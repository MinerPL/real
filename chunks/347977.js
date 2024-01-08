            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return o
                },
                setHasUnsubmittedChanges: function() {
                    return u
                },
                setShowWarning: function() {
                    return a
                }
            });
            var i = n("308503"),
                r = n("659500"),
                s = n("49111");
            let l = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, i.default)(e => l),
                u = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                a = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && r.ComponentDispatch.dispatch(s.ComponentActions.EMPHASIZE_NOTICE)
                }