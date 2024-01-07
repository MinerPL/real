            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return I
                }
            }), r("222007");
            var n = r("37983"),
                s = r("884691"),
                i = r("627445"),
                a = r.n(i),
                o = r("446674"),
                u = r("77078"),
                l = r("437822"),
                d = r("135230"),
                E = r("697218"),
                _ = r("782340");
            class c extends s.Component {
                render() {
                    let {
                        color: e,
                        look: t,
                        size: r
                    } = this.props;
                    return (0, n.jsx)(u.Button, {
                        look: t,
                        size: r,
                        color: e,
                        disabled: this.state.isSendingVerificationEmail,
                        onClick: this.handleResendVerification,
                        children: _.default.Messages.RESEND_VERIFICATION_EMAIL
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        isSendingVerificationEmail: !1
                    }, this.handleResendVerification = () => {
                        let {
                            currentUser: e,
                            onClick: t
                        } = this.props;
                        null == t || t(), this.setState({
                            isSendingVerificationEmail: !0
                        }, () => {
                            l.default.verifyResend().then(() => (0, u.openModal)(t => (0, n.jsx)(u.ConfirmModal, {
                                header: _.default.Messages.VERIFICATION_EMAIL_TITLE,
                                confirmText: _.default.Messages.OKAY,
                                confirmButtonColor: u.Button.Colors.BRAND,
                                ...t,
                                children: (0, n.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: _.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                        email: e.email
                                    })
                                })
                            }))).catch(e => {
                                let {
                                    body: t
                                } = e, r = _.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (r = t.email), (0, u.openModal)(e => (0, n.jsx)(d.default, {
                                    title: _.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                    body: r,
                                    ...e
                                }))
                            }).then(() => this.setState({
                                isSendingVerificationEmail: !1
                            }))
                        })
                    }
                }
            }
            c.defaultProps = {
                size: u.Button.Sizes.MEDIUM,
                color: u.Button.Colors.BRAND
            };
            var I = o.default.connectStores([E.default], () => {
                let e = E.default.getCurrentUser();
                return a(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
                    currentUser: e
                }
            })(c)