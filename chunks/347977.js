            "use strict";
            n.r(t), n.d(t, {
                useMemberVerificationFormNoticeStore: function() {
                    return o
                },
                setHasUnsubmittedChanges: function() {
                    return d
                },
                setShowWarning: function() {
                    return u
                }
            });
            var s = n("308503"),
                i = n("659500"),
                r = n("49111");
            let a = Object.freeze({
                    hasUnsubmittedChanges: !1,
                    shouldShowWarning: !1
                }),
                o = (0, s.default)(e => a),
                d = e => {
                    o.setState({
                        hasUnsubmittedChanges: e
                    })
                },
                u = e => {
                    o.setState({
                        shouldShowWarning: e
                    }), e && i.ComponentDispatch.dispatch(r.ComponentActions.EMPHASIZE_NOTICE)
                }