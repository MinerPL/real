            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("446674"),
                s = n("77078"),
                o = n("133457"),
                u = n("784736"),
                l = n("145131"),
                c = n("9074"),
                d = n("782340"),
                _ = n("639420");

            function E(e) {
                var t;
                let {
                    eulaId: n,
                    transitionState: E,
                    onClose: f
                } = e, I = (0, a.useStateFromStores)([u.default], () => u.default.getEULA(n));
                i.useEffect(() => {
                    (0, o.fetchEULA)(n)
                }, [n]);
                let p = null !== (t = null == I ? void 0 : I.name) && void 0 !== t ? t : d.default.Messages.LOADING,
                    A = null != I ? (0, r.jsx)(c.default, {
                        children: I.content,
                        className: _.markdown
                    }) : (0, r.jsx)(s.Spinner, {
                        className: _.spinner
                    });
                return (0, r.jsxs)(s.ModalRoot, {
                    transitionState: E,
                    size: s.ModalSize.SMALL,
                    "aria-label": p,
                    children: [(0, r.jsxs)(s.ModalHeader, {
                        justify: l.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(s.Heading, {
                            variant: "heading-lg/semibold",
                            children: p
                        }), (0, r.jsx)(s.ModalCloseButton, {
                            onClick: f
                        })]
                    }), (0, r.jsx)(s.ModalContent, {
                        children: A
                    })]
                })
            }