            "use strict";
            l.r(e), l.d(e, {
                installApplication: function() {
                    return u
                }
            });
            var n = l("37983");
            l("884691");
            var a = l("77078"),
                i = l("190017"),
                s = l("971427"),
                o = l("98328");

            function u(t, e, u, c, r) {
                let d = o.default.getInstallationPath(t.id, e),
                    p = null != t.eulaId && !s.default.hasAcceptedEULA(t.eulaId);
                null == d || p ? (0, a.openModalLazy)(async () => {
                    let {
                        default: a
                    } = await l.el("727441").then(l.bind(l, "727441"));
                    return l => (0, n.jsx)(a, {
                        ...l,
                        applicationId: t.id,
                        branchId: e,
                        analyticsLocation: r
                    })
                }) : (0, i.installApplication)({
                    application: t,
                    branchId: e,
                    buildId: u,
                    manifestIds: c,
                    installationPath: d,
                    analyticsLocation: r
                })
            }