            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            }), s("222007");
            var n = s("37983"),
                l = s("884691"),
                a = s("77078"),
                r = s("752113"),
                c = s("782340");
            class o extends l.Component {
                render() {
                    let {
                        transitionState: e
                    } = this.props;
                    return (0, n.jsxs)(r.default, {
                        transitionState: e,
                        "aria-label": c.default.Messages.PREMIUM_NOT_CLAIMED,
                        children: [(0, n.jsx)(r.default.Header, {
                            children: c.default.Messages.PREMIUM_NOT_CLAIMED
                        }), (0, n.jsx)(r.default.Content, {
                            type: r.default.Types.UNCLAIMED,
                            children: c.default.Messages.PREMIUM_NOT_CLAIMED_BODY
                        }), (0, n.jsx)(r.default.Footer, {
                            secondary: {
                                onClick: this.cancel,
                                label: c.default.Messages.NEVERMIND
                            },
                            primary: {
                                onClick: this.claimAccount,
                                label: c.default.Messages.CLAIM_ACCOUNT
                            }
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.cancel = () => {
                        let {
                            onClose: e
                        } = this.props;
                        null == e || e()
                    }, this.claimAccount = () => {
                        let {
                            onClose: e
                        } = this.props;
                        null == e || e(), (0, a.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await s.el("633156").then(s.bind(s, "633156"));
                            return t => (0, n.jsx)(e, {
                                ...t
                            })
                        })
                    }
                }
            }
            var i = o