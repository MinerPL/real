            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                i = s("627445"),
                r = s.n(i),
                l = s("446674"),
                u = s("77078"),
                o = s("437822"),
                d = s("135230"),
                c = s("697218"),
                f = s("782340");
            class E extends n.Component {
                render() {
                    let {
                        color: e,
                        look: t,
                        size: s
                    } = this.props;
                    return (0, a.jsx)(u.Button, {
                        look: t,
                        size: s,
                        color: e,
                        disabled: this.state.isSendingVerificationEmail,
                        onClick: this.handleResendVerification,
                        children: f.default.Messages.RESEND_VERIFICATION_EMAIL
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
                            o.default.verifyResend().then(() => (0, u.openModal)(t => (0, a.jsx)(u.ConfirmModal, {
                                header: f.default.Messages.VERIFICATION_EMAIL_TITLE,
                                confirmText: f.default.Messages.OKAY,
                                confirmButtonColor: u.Button.Colors.BRAND,
                                ...t,
                                children: (0, a.jsx)(u.Text, {
                                    variant: "text-md/normal",
                                    children: f.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                        email: e.email
                                    })
                                })
                            }))).catch(e => {
                                let {
                                    body: t
                                } = e, s = f.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (s = t.email), (0, u.openModal)(e => (0, a.jsx)(d.default, {
                                    title: f.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                    body: s,
                                    ...e
                                }))
                            }).then(() => this.setState({
                                isSendingVerificationEmail: !1
                            }))
                        })
                    }
                }
            }
            E.defaultProps = {
                size: u.Button.Sizes.MEDIUM,
                color: u.Button.Colors.BRAND
            };
            var p = l.default.connectStores([c.default], () => {
                let e = c.default.getCurrentUser();
                return r(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
                    currentUser: e
                }
            })(E)