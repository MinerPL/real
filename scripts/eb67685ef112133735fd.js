(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["84325"], {
        604972: function(t, e, s) {
            "use strict";
            t.exports = s.p + "5fc4852a2acb3abf0a64.svg"
        },
        993133: function(t, e, s) {
            "use strict";
            t.exports = s.p + "98626af1abdc5a1e486c.svg"
        },
        574072: function(t, e, s) {
            "use strict";
            t.exports = s.p + "ac36a2fad758d64ffbfb.svg"
        },
        47313: function(t, e, s) {
            "use strict";
            t.exports = s.p + "4bc279fff08f99f2f712.svg"
        },
        516486: function(t, e, s) {
            "use strict";
            t.exports = s.p + "22a55a08151860da8500.svg"
        },
        133848: function(t, e, s) {
            "use strict";
            t.exports = s.p + "dc2b34cbeee1f6097d9f.svg"
        },
        905692: function(t, e, s) {
            "use strict";
            s.r(e), s.d(e, {
                default: function() {
                    return S
                }
            });
            var a, n, i = s("920040"),
                c = s("773670"),
                o = s("498225"),
                r = s("77078"),
                l = s("850068"),
                A = s("758764"),
                T = s("599110"),
                u = s("153160"),
                d = s("520713"),
                C = s("49111"),
                E = s("782340"),
                N = s("430629");
            (a = n || (n = {}))[a.START = 0] = "START", a[a.FAIL = 1] = "FAIL", a[a.SUCCESS = 2] = "SUCCESS", a[a.CANCELED = 3] = "CANCELED";
            class h extends c.Component {
                componentDidMount() {
                    T.default.track(C.AnalyticEvents.OPEN_MODAL, {
                        type: C.AnalyticsSections.PAYMENT_AUTHENTICATION_MODAL
                    })
                }
                componentWillUnmount() {
                    T.default.track(C.AnalyticEvents.MODAL_DISMISSED, {
                        type: C.AnalyticsSections.PAYMENT_AUTHENTICATION_MODAL
                    })
                }
                getTitle() {
                    let {
                        step: t
                    } = this.state;
                    switch (t) {
                        case n.START:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE;
                        case n.SUCCESS:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_SUCCESS;
                        case n.CANCELED:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_CANCELED;
                        case n.FAIL:
                        default:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_TITLE_FAIL
                    }
                }
                getImageStyle() {
                    let {
                        step: t
                    } = this.state;
                    switch (t) {
                        case n.START:
                            return N.authenticationRequiredImage;
                        case n.SUCCESS:
                            return N.authenticationSuccessImage;
                        case n.CANCELED:
                        case n.FAIL:
                        default:
                            return N.authenticationFailImage
                    }
                }
                getMessage() {
                    let {
                        step: t
                    } = this.state, {
                        pendingPayment: e
                    } = this.props;
                    switch (t) {
                        case n.START:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_START.format({
                                price: (0, u.formatPrice)(e.amount, e.currency),
                                item: e.description
                            });
                        case n.SUCCESS:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_SUCCESS;
                        case n.CANCELED:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_CANCELED.format({
                                item: e.description
                            });
                        case n.FAIL:
                        default:
                            return E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_FAIL
                    }
                }
                renderButtons() {
                    let {
                        step: t
                    } = this.state, {
                        disableAuthentication: e
                    } = this.props;
                    switch (t) {
                        case n.START:
                            return (0, i.jsxs)(c.Fragment, {
                                children: [(0, i.jsx)(r.Button, {
                                    color: r.ButtonColors.BRAND,
                                    disabled: e,
                                    onClick: this.handleAuthenticate,
                                    children: E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON
                                }), (0, i.jsx)(r.Button, {
                                    look: r.Button.Looks.LINK,
                                    size: r.Button.Sizes.NONE,
                                    color: r.Button.Colors.PRIMARY,
                                    onClick: this.cancelPayment,
                                    className: N.cancelButton,
                                    children: E.default.Messages.PAYMENT_AUTHENTICATION_MODAL_BUTTON_CANCEL_PAYMENT
                                })]
                            });
                        case n.SUCCESS:
                        case n.CANCELED:
                        case n.FAIL:
                        default:
                            return (0, i.jsx)(r.Button, {
                                color: r.ButtonColors.BRAND,
                                onClick: this.close,
                                children: E.default.Messages.CLOSE
                            })
                    }
                }
                render() {
                    let {
                        transitionState: t
                    } = this.props;
                    return (0, i.jsxs)(r.ModalRoot, {
                        transitionState: t,
                        className: N.modal,
                        size: r.ModalSize.SMALL,
                        "aria-label": this.getTitle(),
                        children: [(0, i.jsxs)(r.ModalHeader, {
                            children: [(0, i.jsx)(r.Heading, {
                                variant: "heading-lg/semibold",
                                children: (0, i.jsx)("span", {
                                    className: N.modalTitle,
                                    children: this.getTitle()
                                })
                            }), (0, i.jsx)(r.ModalCloseButton, {
                                className: N.closeIcon,
                                onClick: this.close
                            })]
                        }), (0, i.jsxs)(r.ModalContent, {
                            className: N.content,
                            children: [(0, i.jsx)("div", {
                                className: this.getImageStyle()
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: this.getMessage()
                            })]
                        }), (0, i.jsx)(r.ModalFooter, {
                            className: N.footer,
                            children: this.renderButtons()
                        })]
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        step: n.START
                    }, this.close = async () => {
                        let {
                            step: t
                        } = this.state, {
                            onClose: e,
                            pendingPayment: s
                        } = this.props;
                        t === n.START && await (0, l.voidPendingPayment)(s.id), e()
                    }, this.cancelPayment = async () => {
                        let {
                            pendingPayment: t
                        } = this.props;
                        try {
                            await (0, l.voidPendingPayment)(t.id)
                        } catch (t) {
                            throw this.setState({
                                step: n.CANCELED
                            }), t
                        }
                        this.setState({
                            step: n.CANCELED
                        })
                    }, this.handleAuthenticate = async () => {
                        let {
                            pendingPayment: t
                        } = this.props, {
                            error: e
                        } = await (0, d.authenticatePaymentIntentForPaymentId)(t.id);
                        null != e ? this.setState({
                            step: n.FAIL
                        }) : this.setState({
                            step: n.SUCCESS
                        })
                    }
                }
            }
            var S = o.default.connectStores([A.default], () => ({
                disableAuthentication: A.default.isAwaitingAuthentication
            }))(h)
        }
    }
]);