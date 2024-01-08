            "use strict";
            n.r(t), n.d(t, {
                openNewUserAgeGateModal: function() {
                    return r
                },
                openClaimAccountModal: function() {
                    return u
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("551042"),
                l = n("586391"),
                s = n("843455");

            function r(e) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("377531").then(n.bind(n, "377531"));
                    return t => (0, i.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: l.NEW_USER_AGE_GATE_MODAL_KEY,
                    onCloseRequest: s.NOOP,
                    onCloseCallback: e
                })
            }

            function u() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                (0, a.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("633156").then(n.bind(n, "633156"));
                    return n => (0, i.jsx)(t, {
                        claimRequired: e,
                        ...n
                    })
                }, {
                    onCloseRequest: e ? s.NOOP : null,
                    onCloseCallback: t
                })
            }