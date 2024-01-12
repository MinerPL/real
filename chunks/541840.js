            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return S
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("77078"),
                i = s("913801"),
                r = s("778695"),
                o = s("476765"),
                d = s("44678"),
                u = s("782340"),
                c = s("978896"),
                S = function(e) {
                    let {
                        onClose: t,
                        onClaim: s,
                        code: S,
                        outboundPromotion: E,
                        transitionState: f
                    } = e, [T, m] = n.useState(null), _ = (0, o.useUID)();
                    return n.useEffect(() => {
                        null == S && (0, d.claimOutboundPromotion)(E.id).then(e => s(e)).catch(e => {
                            var t;
                            return m(null == e ? void 0 : null === (t = e.body) || void 0 === t ? void 0 : t.code)
                        })
                    }, [S, E.id, s]), (0, a.jsx)(l.ModalRoot, {
                        transitionState: f,
                        "aria-labelledby": _,
                        children: null != T ? (0, a.jsx)(r.DropsModalClaimErrorBody, {
                            onClose: t,
                            errorCode: T
                        }) : null == S ? (0, a.jsx)(l.ModalContent, {
                            children: (0, a.jsx)(l.Spinner, {
                                className: c.loading
                            })
                        }) : (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(l.ModalHeader, {
                                separator: !1,
                                className: c.headerContainer,
                                children: [(0, a.jsx)("div", {
                                    className: c.art
                                }), (0, a.jsx)(l.Heading, {
                                    variant: "heading-xl/semibold",
                                    children: u.default.Messages.OUTBOUND_PROMOTION_REDEMPTION_MODAL_TITLE
                                })]
                            }), (0, a.jsxs)(l.ModalContent, {
                                children: [(0, a.jsx)(l.Text, {
                                    variant: "text-md/normal",
                                    className: c.bodyText,
                                    children: E.outboundRedemptionModalBody
                                }), (0, a.jsx)(l.FormDivider, {
                                    className: c.formDivider
                                }), (0, a.jsxs)(l.FormSection, {
                                    title: u.default.Messages.REDEMPTION_CODE,
                                    className: c.formSection,
                                    children: [(0, a.jsx)(i.default, {
                                        value: S,
                                        buttonColor: l.Button.Colors.BRAND,
                                        buttonLook: l.Button.Looks.FILLED,
                                        delay: 1e3,
                                        inputClassName: c.textInput
                                    }), (0, a.jsx)(l.Text, {
                                        variant: "text-xs/normal",
                                        color: "header-secondary",
                                        className: c.confirmationText,
                                        children: u.default.Messages.OUTBOUND_PROMOTION_CODE_CONFIRMATION_EMAIL
                                    })]
                                })]
                            }), (0, a.jsxs)(l.ModalFooter, {
                                children: [(0, a.jsx)(l.Button, {
                                    color: l.Button.Colors.BRAND,
                                    onClick: () => {
                                        let e = (0, d.getOutboundPromotionRedemptionUrl)(S, E);
                                        window.open(e, "_blank")
                                    },
                                    children: u.default.Messages.REDEEM
                                }), (0, a.jsx)(l.Button, {
                                    onClick: t,
                                    look: l.Button.Looks.LINK,
                                    color: c.maybeLaterButton,
                                    children: u.default.Messages.MAYBE_LATER
                                })]
                            })]
                        })
                    })
                }