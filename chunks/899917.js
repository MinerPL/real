            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return _
                }
            });
            var n = r("37983");
            r("884691");
            var s = r("446674"),
                i = r("77078"),
                a = r("387225"),
                o = r("697218"),
                u = r("145131"),
                l = r("782340"),
                d = r("557573");

            function E(e) {
                let {
                    onClose: t
                } = e, u = (0, s.useStateFromStores)([o.default], () => o.default.getCurrentUser());

                function d() {
                    null == t || t()
                }

                function E() {
                    d(), (0, i.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await r.el("867693").then(r.bind(r, "867693"));
                        return t => (0, n.jsx)(e, {
                            ...t
                        })
                    })
                }
                return (null == u ? void 0 : u.email) == null ? (0, n.jsx)(i.Button, {
                    onClick: E,
                    color: i.Button.Colors.BRAND,
                    look: i.Button.Looks.FILLED,
                    children: l.default.Messages.ADD_EMAIL_SHORT
                }) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(i.Button, {
                        onClick: E,
                        color: i.Button.Colors.PRIMARY,
                        look: i.Button.Looks.LINK,
                        children: l.default.Messages.CHANGE_EMAIL_SHORT
                    }), (0, n.jsx)(a.default, {
                        color: i.Button.Colors.BRAND,
                        onClick: d
                    })]
                })
            }
            var _ = function(e) {
                let {
                    onClose: t,
                    transitionState: r
                } = e;
                return (0, n.jsxs)(i.ModalRoot, {
                    transitionState: r,
                    children: [(0, n.jsx)(i.ModalHeader, {
                        children: (0, n.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: l.default.Messages.PREMIUM_NOT_VERIFIED
                        })
                    }), (0, n.jsxs)(i.ModalContent, {
                        children: [(0, n.jsx)("div", {
                            className: d.imageUnverified
                        }), (0, n.jsx)(i.Text, {
                            variant: "text-md/normal",
                            className: d.message,
                            children: l.default.Messages.PREMIUM_NOT_VERIFIED_BODY
                        })]
                    }), (0, n.jsx)(i.ModalFooter, {
                        children: (0, n.jsx)(u.default, {
                            justify: u.default.Justify.END,
                            children: (0, n.jsx)(E, {
                                onClose: t
                            })
                        })
                    })]
                })
            }