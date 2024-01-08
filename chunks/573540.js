            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("446674"),
                r = n("77078"),
                u = n("206230"),
                o = n("700507"),
                d = n("491605"),
                c = n("782340"),
                f = n("594180");

            function h(e) {
                let {
                    height: t
                } = e, l = (0, i.useStateFromStores)([u.default], () => u.default.useReducedMotion);
                return (0, a.jsxs)("div", {
                    className: f.root,
                    children: [(0, a.jsx)(d.default, {
                        importData: () => n.el("210565").then(n.t.bind(n, "210565", 19)).then(e => {
                            let {
                                default: t
                            } = e;
                            return t
                        }),
                        shouldAnimate: !l,
                        className: s(f.art, {
                            [f.hidden]: t <= 280
                        })
                    }), (0, a.jsx)(r.Heading, {
                        className: f.header,
                        variant: "heading-md/bold",
                        children: c.default.Messages.PLAYSTATION_TRANSFERRING
                    }), (0, a.jsx)(r.Text, {
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: c.default.Messages.CONSOLE_TRANSFERRING_SUBTITLE.format({
                            onCancel: o.disconnectRemote
                        })
                    })]
                })
            }