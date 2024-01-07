            "use strict";
            n.r(t), n.d(t, {
                uninstallBranchPrompt: function() {
                    return r
                }
            });
            var a = n("77078"),
                s = n("299285"),
                i = n("605250"),
                l = n("190017");

            function r(e, t, r) {
                ! function(e, t) {
                    let l = s.default.getApplication(e);
                    if (null == l) {
                        new(0, i.default)("DispatchUninstallActionCreators").log("Application not found for game ".concat(e));
                        return
                    }(0, a.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await n.el("857727").then(n.bind(n, "857727"));
                        return n => e({
                            game: l,
                            onConfirmUninstall: t,
                            ...n
                        })
                    })
                }(e, () => (0, l.uninstallApplication)(e, t, r))
            }