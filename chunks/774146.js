            "use strict";
            n.r(t), n.d(t, {
                openNewUserAgeGateModal: function() {
                    return o
                },
                openClaimAccountModal: function() {
                    return d
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("551042"),
                r = n("586391"),
                a = n("843455");

            function o(e) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("377531").then(n.bind(n, "377531"));
                    return t => (0, s.jsx)(e, {
                        ...t
                    })
                }, {
                    modalKey: r.NEW_USER_AGE_GATE_MODAL_KEY,
                    onCloseRequest: a.NOOP,
                    onCloseCallback: e
                })
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = arguments.length > 1 ? arguments[1] : void 0;
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("633156").then(n.bind(n, "633156"));
                    return n => (0, s.jsx)(t, {
                        claimRequired: e,
                        ...n
                    })
                }, {
                    onCloseRequest: e ? a.NOOP : null,
                    onCloseCallback: t
                })
            }