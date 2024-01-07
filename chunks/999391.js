            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return E
                }
            });
            var n = s("37983"),
                l = s("884691"),
                a = s("627445"),
                r = s.n(a),
                o = s("446674"),
                u = s("752113"),
                i = s("697218"),
                c = s("719923"),
                d = s("782340");
            class f extends l.Component {
                render() {
                    let {
                        user: e,
                        transitionState: t,
                        onClose: s
                    } = this.props;
                    return (0, n.jsxs)(u.default, {
                        transitionState: t,
                        "aria-label": d.default.Messages.PREMIUM_REQUIRED,
                        children: [(0, n.jsx)(u.default.Header, {
                            onClose: () => s(!1),
                            children: d.default.Messages.PREMIUM_REQUIRED
                        }), (0, n.jsx)(u.default.Content, {
                            type: u.default.Types.UPGRADE,
                            children: c.default.isPremium(e) && !c.default.canInstallPremiumApplications(e) ? d.default.Messages.PREMIUM_UPGRADE_REQUIRED_BODY : d.default.Messages.PREMIUM_SUBSCRIPTION_REQUIRED_BODY
                        }), (0, n.jsx)(u.default.Footer, {
                            primary: {
                                onClick: () => s(!0),
                                label: d.default.Messages.PREMIUM_REQUIRED_GET_NITRO
                            }
                        })]
                    })
                }
            }
            var E = o.default.connectStores([i.default], () => {
                let e = i.default.getCurrentUser();
                return r(null != e, "PremiumRequiredModal: user cannot be null"), {
                    user: e
                }
            })(f)