            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var r = n("37983"),
                o = n("884691"),
                i = n("627445"),
                a = n.n(i),
                u = n("446674"),
                s = n("77078"),
                l = n("437822"),
                c = n("135230"),
                d = n("697218"),
                f = n("782340");
            class p extends o.Component {
                render() {
                    let {
                        color: e,
                        look: t,
                        size: n
                    } = this.props;
                    return (0, r.jsx)(s.Button, {
                        look: t,
                        size: n,
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
                            l.default.verifyResend().then(() => (0, s.openModal)(t => (0, r.jsx)(s.ConfirmModal, {
                                header: f.default.Messages.VERIFICATION_EMAIL_TITLE,
                                confirmText: f.default.Messages.OKAY,
                                confirmButtonColor: s.Button.Colors.BRAND,
                                ...t,
                                children: (0, r.jsx)(s.Text, {
                                    variant: "text-md/normal",
                                    children: f.default.Messages.VERIFICATION_EMAIL_BODY.format({
                                        email: e.email
                                    })
                                })
                            }))).catch(e => {
                                let {
                                    body: t
                                } = e, n = f.default.Messages.VERIFICATION_EMAIL_ERROR_BODY;
                                null != t && t.email && (n = t.email), (0, s.openModal)(e => (0, r.jsx)(c.default, {
                                    title: f.default.Messages.VERIFICATION_EMAIL_ERROR_TITLE,
                                    body: n,
                                    ...e
                                }))
                            }).then(() => this.setState({
                                isSendingVerificationEmail: !1
                            }))
                        })
                    }
                }
            }
            p.defaultProps = {
                size: s.Button.Sizes.MEDIUM,
                color: s.Button.Colors.BRAND
            };
            var h = u.default.connectStores([d.default], () => {
                let e = d.default.getCurrentUser();
                return a(null != e, "ResendEmailVerificationButton: currentUser cannot be undefined"), {
                    currentUser: e
                }
            })(p)