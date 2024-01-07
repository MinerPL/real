            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("95410"),
                l = n("77078"),
                s = n("773336"),
                r = {
                    show(e) {
                        (0, l.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("745705").then(n.bind(n, "745705"));
                            return n => (0, i.jsx)(t, {
                                ...n,
                                url: e
                            })
                        })
                    },
                    getBlockedDomains() {
                        if ((0, s.isDesktop)()) {
                            let e = a.default.get("BlockedDomainsV2");
                            return Promise.resolve(null == e ? [] : e.split("\n"))
                        }
                        return Promise.resolve([])
                    },
                    saveBlockedDomains(e) {
                        (0, s.isDesktop)() && a.default.set("BlockedDomainsV2", e.join("\n"))
                    }
                }