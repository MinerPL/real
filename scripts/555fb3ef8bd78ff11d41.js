(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["86428"], {
        43264: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return M
                }
            });
            var l = a("920040");
            a("773670");
            var s = a("498225"),
                i = a("77078"),
                n = a("546463"),
                r = a("145131"),
                o = a("701909"),
                d = a("49111"),
                u = a("782340"),
                N = a("142352");
            let c = o.default.getArticleURL(d.HelpdeskArticles.MISSING_ENTITLEMENT);
            var M = s.default.connectStores([n.default], e => {
                let {
                    applicationId: t
                } = e;
                return {
                    application: n.default.getGame(t)
                }
            })(function(e) {
                let {
                    application: t,
                    transitionState: a,
                    onClose: s
                } = e;
                return (0, l.jsxs)(i.ModalRoot, {
                    transitionState: a,
                    size: i.ModalSize.MEDIUM,
                    children: [(0, l.jsxs)(i.ModalHeader, {
                        align: r.default.Align.CENTER,
                        justify: r.default.Justify.BETWEEN,
                        children: [(0, l.jsx)(i.FormTitle, {
                            tag: i.FormTitleTags.H4,
                            children: null != t ? u.default.Messages.MISSING_ENTITLEMENT_MODAL_HEADER.format({
                                applicationName: t.name
                            }) : u.default.Messages.MISSING_ENTITLEMENT_MODAL_HEADER_UNKNOWN_APPLICATION
                        }), (0, l.jsx)(i.ModalCloseButton, {
                            onClick: s
                        })]
                    }), (0, l.jsxs)(i.ModalContent, {
                        children: [(0, l.jsx)("div", {
                            className: N.missingEntitlementImage
                        }), (0, l.jsx)(i.Text, {
                            className: N.text,
                            variant: "text-md/normal",
                            children: null != t ? u.default.Messages.MISSING_ENTITLEMENT_MODAL_BODY.format({
                                applicationName: t.name,
                                supportArticleURL: c
                            }) : u.default.Messages.MISSING_ENTITLEMENT_MODAL_BODY_UNKNOWN_APPLICATION.format({
                                supportArticleURL: c
                            })
                        })]
                    }), (0, l.jsx)(i.ModalFooter, {
                        children: (0, l.jsx)(i.Button, {
                            onClick: s,
                            children: u.default.Messages.OKAY
                        })
                    })]
                })
            })
        }
    }
]);