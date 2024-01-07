            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("77078"),
                l = {
                    show(e) {
                        let {
                            url: t,
                            trustUrl: l,
                            onConfirm: s,
                            isProtocol: r
                        } = e;
                        (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("153128").then(n.bind(n, "153128"));
                            return n => (0, i.jsx)(e, {
                                ...n,
                                url: t,
                                isProtocol: r,
                                trustUrl: l,
                                onConfirm: s
                            })
                        })
                    }
                }