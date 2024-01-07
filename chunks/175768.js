            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("222007");
            var a = r("37983"),
                n = r("884691"),
                i = r("414456"),
                l = r.n(i),
                o = r("77078"),
                s = r("811199"),
                c = r("694735"),
                d = r("186720");

            function u() {
                let e = {
                        BOGOAnnouncementModal: async () => {
                            let {
                                default: e
                            } = await r.el("981125").then(r.bind(r, "981125"));
                            return t => (0, a.jsx)(e, {
                                renderModalProps: t
                            })
                        },
                        InventoryTryPacksModal: async () => {
                            let {
                                default: e
                            } = await r.el("953314").then(r.bind(r, "953314"));
                            return t => (0, a.jsx)(e, {
                                renderModalProps: t
                            })
                        }
                    },
                    t = Object.keys(e).map(e => ({
                        label: e,
                        value: e
                    })),
                    [i, u] = n.useState(t[0].value);
                return (0, a.jsx)(o.ScrollerThin, {
                    className: l(c.panel),
                    children: (0, a.jsx)("div", {
                        className: d.panelInner,
                        children: (0, a.jsxs)("section", {
                            className: d.section,
                            children: [(0, a.jsx)(o.Heading, {
                                variant: "heading-md/semibold",
                                children: "Open a Modal"
                            }), (0, a.jsxs)("div", {
                                className: d.inputRow,
                                children: [(0, a.jsx)(o.Select, {
                                    className: d.input,
                                    options: t,
                                    isSelected: e => i === e,
                                    placeholder: "Trial ID",
                                    serialize: e => String(e),
                                    select: e => u(e),
                                    popoutLayerContext: s.devToolsLayerContext
                                }), (0, a.jsx)(o.Button, {
                                    onClick: () => {
                                        (0, o.openModalLazy)(e[i])
                                    },
                                    children: "Open"
                                })]
                            })]
                        })
                    })
                })
            }