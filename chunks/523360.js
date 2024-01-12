            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983"),
                u = n("884691"),
                a = n("446674"),
                l = n("77078"),
                o = n("133457"),
                i = n("784736"),
                c = n("145131"),
                s = n("9074"),
                d = n("782340"),
                f = n("639420");

            function p(e) {
                var t;
                let {
                    eulaId: n,
                    transitionState: p,
                    onClose: h
                } = e, g = (0, a.useStateFromStores)([i.default], () => i.default.getEULA(n));
                u.useEffect(() => {
                    (0, o.fetchEULA)(n)
                }, [n]);
                let m = null !== (t = null == g ? void 0 : g.name) && void 0 !== t ? t : d.default.Messages.LOADING,
                    v = null != g ? (0, r.jsx)(s.default, {
                        children: g.content,
                        className: f.markdown
                    }) : (0, r.jsx)(l.Spinner, {
                        className: f.spinner
                    });
                return (0, r.jsxs)(l.ModalRoot, {
                    transitionState: p,
                    size: l.ModalSize.SMALL,
                    "aria-label": m,
                    children: [(0, r.jsxs)(l.ModalHeader, {
                        justify: c.default.Justify.BETWEEN,
                        children: [(0, r.jsx)(l.Heading, {
                            variant: "heading-lg/semibold",
                            children: m
                        }), (0, r.jsx)(l.ModalCloseButton, {
                            onClick: h
                        })]
                    }), (0, r.jsx)(l.ModalContent, {
                        children: v
                    })]
                })
            }