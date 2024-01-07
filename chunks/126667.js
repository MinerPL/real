            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("627445"),
                l = n.n(i),
                r = n("446674"),
                o = n("437822"),
                u = n("152584"),
                d = n("648661"),
                c = n("330387"),
                E = n("790618"),
                f = n("697218"),
                _ = n("67211"),
                h = n("892313"),
                C = n("49111"),
                T = e => {
                    let {
                        transitionState: t,
                        onClose: n
                    } = e, i = (0, r.useStateFromStores)([E.default], () => E.default.getErrors()), T = (0, r.useStateFromStores)([E.default], () => E.default.getFormState()), I = (0, r.useStateFromStores)([f.default], () => {
                        let e = f.default.getCurrentUser();
                        return l(null != e, "EmailVerificationModal: user cannot be undefined"), e
                    }), S = (0, r.useStateFromStores)([c.default], () => c.default.getAction()), N = !h.default.isEmailReverification(S), A = null != I.email, [m, p] = s.useState(!0), g = T === C.FormStates.SUBMITTING;

                    function R(e) {
                        var t, n;
                        return null !== (n = null == i ? void 0 : null === (t = i[e]) || void 0 === t ? void 0 : t[0]) && void 0 !== n ? n : ""
                    }
                    let O = R("email"),
                        L = R("password");
                    return (0, a.jsx)(_.default, {
                        transitionState: t,
                        email: I.email,
                        emailError: O,
                        passwordError: L,
                        submitting: g,
                        canResend: m && !g && A && 0 === O.length && 0 === L.length,
                        canChange: N,
                        onChangeEmailClick: function() {
                            p(!1)
                        },
                        onVerify: function(e, t) {
                            (0, u.saveAccountChanges)({
                                email: e,
                                password: t
                            }).then(e => {
                                var t;
                                !(null == e ? void 0 : e.ok) && (null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.username) != null && (0, d.showInvalidUsernameToast)()
                            }), p(!0)
                        },
                        onResend: function() {
                            o.default.verifyResend()
                        },
                        onClose: n
                    })
                }