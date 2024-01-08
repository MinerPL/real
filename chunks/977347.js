            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                r = n("782340");

            function i() {
                function e() {
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("649486").then(n.bind(n, "649486"));
                        return t => (0, a.jsx)(e, {
                            source: "Screenshare Unavailable",
                            ...t
                        })
                    })
                }(0, s.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("861054").then(n.bind(n, "861054"));
                    return n => (0, a.jsx)(t, {
                        ...n,
                        header: r.default.Messages.SCREENSHARE_UNAVAILABLE,
                        body: r.default.Messages.SCREENSHARE_UNAVAILABLE_DOWNLOAD_APP,
                        confirmText: r.default.Messages.DOWNLOAD_APP,
                        onConfirm: e
                    })
                })
            }