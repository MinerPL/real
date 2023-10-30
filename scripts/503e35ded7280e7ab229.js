(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75919"], {
        563912: function(l, e, a) {
            "use strict";
            a.r(e), a.d(e, {
                default: function() {
                    return h
                }
            });
            var n = a("37983");
            a("884691");
            var d = a("446674"),
                s = a("77078"),
                i = a("546463"),
                t = a("189459"),
                o = a("145131"),
                u = a("701909"),
                r = a("782340"),
                c = a("552303"),
                h = l => {
                    let {
                        onClose: e,
                        transitionState: a
                    } = l, {
                        error: h,
                        applicationName: R
                    } = (0, d.useStateFromStoresObject)([t.default, i.default], () => {
                        let l = t.default.getLastError(),
                            e = null;
                        if (null != l && null != l.applicationId) {
                            let a = i.default.getGame(l.applicationId);
                            null != a && (e = a.name)
                        }
                        return {
                            error: l,
                            applicationName: e
                        }
                    });
                    return (0, n.jsxs)(s.ModalRoot, {
                        transitionState: a,
                        size: s.ModalSize.SMALL,
                        "aria-label": r.default.Messages.DISPATCH_ERROR_MODAL_HEADER,
                        children: [(0, n.jsxs)(s.ModalHeader, {
                            justify: o.default.Justify.BETWEEN,
                            separator: !1,
                            children: [(0, n.jsx)(o.default.Child, {
                                grow: 1,
                                children: (0, n.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: r.default.Messages.DISPATCH_ERROR_MODAL_HEADER
                                })
                            }), (0, n.jsx)(o.default.Child, {
                                grow: 0,
                                children: (0, n.jsx)(s.ModalCloseButton, {
                                    onClick: e
                                })
                            })]
                        }), (0, n.jsx)(s.ModalContent, {
                            children: (0, n.jsxs)("div", {
                                className: c.body,
                                children: [(0, n.jsx)("div", {
                                    children: r.default.Messages.DISPATCH_ERROR_MODAL_DESCRIPTION.format({
                                        link: "https://dis.gd/dispatch-error"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: c.supportCallToAction,
                                    children: r.default.Messages.DISPATCH_ERROR_MODAL_BODY
                                }), (0, n.jsx)("div", {
                                    className: c.errorLabel,
                                    children: r.default.Messages.DISPATCH_ERROR_MODAL_ERROR_LABEL
                                }), (0, n.jsx)("div", {
                                    className: c.errorDetails,
                                    children: (0, n.jsxs)("div", {
                                        children: [null != R ? "Game: ".concat(R, "\n") : null, (null == h ? void 0 : h.applicationId) != null ? "Game ID: ".concat(h.applicationId, "\n") : null, (null == h ? void 0 : h.branchId) != null && (null == h ? void 0 : h.applicationId) !== (null == h ? void 0 : h.branchId) ? "Branch ID: ".concat(null == h ? void 0 : h.branchId, "\n") : null, (null == h ? void 0 : h.code) != null ? "Error Code: ".concat(null == h ? void 0 : h.code, "\n") : null, (null == h ? void 0 : h.uuid) != null ? "Unique Case ID: ".concat(null == h ? void 0 : h.uuid) : null]
                                    })
                                })]
                            })
                        }), (0, n.jsxs)(s.ModalFooter, {
                            children: [(0, n.jsx)(s.Button, {
                                onClick: () => {
                                    window.open(u.default.getSubmitRequestURL())
                                },
                                children: r.default.Messages.DISPATCH_ERROR_MODAL_OPEN_TICKET
                            }), (0, n.jsx)(s.Button, {
                                look: s.Button.Looks.LINK,
                                onClick: e,
                                color: c.closeLink,
                                children: r.default.Messages.CLOSE
                            })]
                        })]
                    })
                }
        }
    }
]);