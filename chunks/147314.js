            "use strict";
            s.r(t), s.d(t, {
                showNewTerms: function() {
                    return l
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("551042");

            function l(e) {
                let {
                    demonetized: t = !1
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                (0, n.openModalLazy)(async () => {
                    let {
                        default: n
                    } = await s.el("997510").then(s.bind(s, "997510"));
                    return s => (0, a.jsx)(n, {
                        guildId: e,
                        demonetized: t,
                        ...s
                    })
                }, {
                    onCloseRequest: () => {}
                })
            }