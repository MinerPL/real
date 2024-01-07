            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078");

            function l(e, t) {
                (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await n.el("59833").then(n.bind(n, "59833"));
                    return n => (0, i.jsx)(a, {
                        analyticsLocation: e,
                        platformType: t,
                        ...n
                    })
                })
            }