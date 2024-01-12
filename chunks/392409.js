            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return _
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("446674"),
                u = s("77078"),
                c = s("697218"),
                S = s("145131"),
                E = s("387225"),
                f = s("782340"),
                T = s("160918");
            class m extends n.Component {
                renderNotice() {
                    let {
                        isClaimed: e,
                        unclaimedNotice: t,
                        unverifiedNotice: s
                    } = this.props;
                    return e ? null != s ? s : f.default.Messages.NOTICE_UNVERIFIED_ACCOUNT : null != t ? t : f.default.Messages.NOTICE_UNCLAIMED_ACCOUNT
                }
                renderPrimaryAction() {
                    return this.props.isClaimed ? this.props.hasEmail ? (0, a.jsx)(S.default.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, a.jsx)(E.default, {})
                    }) : (0, a.jsx)(u.Button, {
                        size: u.Button.Sizes.MEDIUM,
                        color: u.Button.Colors.BRAND,
                        onClick: this.openChangeEmailModal,
                        children: f.default.Messages.ADD_EMAIL_SHORT
                    }) : (0, a.jsx)(S.default.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, a.jsx)(u.Button, {
                            size: u.Button.Sizes.MEDIUM,
                            color: u.Button.Colors.BRAND,
                            onClick: this.openClaimAccountModal,
                            children: f.default.Messages.CLAIM_ACCOUNT
                        })
                    })
                }
                renderSecondaryAction() {
                    return this.props.isClaimed && this.props.hasEmail ? (0, a.jsx)(S.default.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, a.jsx)(u.Button, {
                            color: u.Button.Colors.PRIMARY,
                            look: u.Button.Looks.LINK,
                            onClick: this.openChangeEmailModal,
                            children: f.default.Messages.CHANGE_EMAIL_SHORT
                        })
                    }) : null
                }
                openClaimAccountModal() {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("633156").then(s.bind(s, "633156"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                }
                openChangeEmailModal() {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await s.el("867693").then(s.bind(s, "867693"));
                        return t => (0, a.jsx)(e, {
                            ...t
                        })
                    })
                }
                render() {
                    let {
                        className: e,
                        isClaimed: t,
                        isVerified: s
                    } = this.props;
                    return t && s ? null : (0, a.jsx)(u.Card, {
                        className: i(T.wrapper, e),
                        children: (0, a.jsxs)(S.default, {
                            align: S.default.Align.CENTER,
                            children: [(0, a.jsx)(S.default.Child, {
                                className: T.image,
                                grow: 0,
                                shrink: 0
                            }), (0, a.jsxs)(S.default.Child, {
                                children: [(0, a.jsx)(u.Text, {
                                    variant: "text-sm/normal",
                                    children: this.renderNotice()
                                }), (0, a.jsxs)(S.default, {
                                    justify: S.default.Justify.CENTER,
                                    className: T.content,
                                    children: [this.renderPrimaryAction(), this.renderSecondaryAction()]
                                })]
                            })]
                        })
                    })
                }
            }
            var _ = d.default.connectStores([c.default], () => {
                let e = c.default.getCurrentUser();
                return o(null != e, "EmailNotice: currentUser cannot be undefined"), {
                    isClaimed: e.isClaimed(),
                    isVerified: e.verified,
                    hasEmail: null != e.email
                }
            })(m)