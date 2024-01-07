            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return G
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("414456"),
                i = s.n(l),
                r = s("627445"),
                o = s.n(r),
                d = s("446674"),
                u = s("819855"),
                c = s("77078"),
                S = s("430713"),
                E = s("152584"),
                f = s("642950"),
                m = s("583227"),
                T = s("426902"),
                _ = s("167209"),
                g = s("363861"),
                h = s("506885"),
                I = s("305961"),
                N = s("650893"),
                p = s("102985"),
                C = s("697218"),
                A = s("145131"),
                O = s("555158"),
                x = s("37785"),
                M = s("161778"),
                R = s("387225"),
                v = s("628235"),
                L = s("913299"),
                D = s("629145"),
                P = s("969927"),
                j = s("49111"),
                b = s("935583"),
                U = s("782340"),
                y = s("374204"),
                B = s("926622");
            class F extends n.PureComponent {
                componentDidMount() {
                    let {
                        currentUser: e
                    } = this.props;
                    (0, h.default)(e.id, e.getAvatarURL(void 0, 80))
                }
                componentWillUnmount() {
                    S.default.clearBackupCodes(), (0, E.accountDetailsClose)()
                }
                renderAccountWarning() {
                    let {
                        currentUser: e
                    } = this.props;
                    if (!e.isClaimed()) {
                        let e = (0, a.jsxs)("section", {
                            children: [(0, a.jsx)("div", {
                                className: y.accountWarningBodyText,
                                children: U.default.Messages.UNCLAIMED_ACCOUNT_BODY_2
                            }), (0, a.jsx)(c.Button, {
                                look: c.ButtonLooks.INVERTED,
                                size: c.ButtonSizes.SMALL,
                                color: c.Button.Colors.RED,
                                onClick: () => T.default.openClaimAccountModal(),
                                children: U.default.Messages.CLAIM_ACCOUNT_LONG
                            })]
                        });
                        return (0, a.jsx)(c.FormNotice, {
                            type: c.FormNotice.Types.DANGER,
                            className: B.marginBottom20,
                            imageData: {
                                src: s("389671"),
                                width: 60,
                                height: 60
                            },
                            title: U.default.Messages.UNCLAIMED_ACCOUNT_TITLE,
                            body: e
                        })
                    }
                    if (null == e.email) return null;
                    if (!e.verified) {
                        let e = (0, a.jsxs)("section", {
                            children: [(0, a.jsx)("div", {
                                className: y.accountWarningBodyText,
                                children: U.default.Messages.USER_SETTINGS_UNVERIFIED_EMAIL_BODY
                            }), (0, a.jsx)(R.default, {
                                size: c.ButtonSizes.SMALL,
                                color: c.Button.Colors.PRIMARY
                            })]
                        });
                        return (0, a.jsx)(c.FormNotice, {
                            type: c.FormNotice.Types.PRIMARY,
                            className: B.marginBottom20,
                            imageData: {
                                src: s("445113"),
                                width: 60,
                                height: 60
                            },
                            title: U.default.Messages.UNVERIFIED_EMAIL_TITLE,
                            body: e
                        })
                    }
                }
                renderPomeloWarning() {
                    return this.props.shouldRenderPomeloWarning ? (0, a.jsxs)(O.default, {
                        className: y.accountWarningBodyText,
                        messageType: O.HelpMessageTypes.WARNING,
                        children: [U.default.Messages.POMELO_ACTION_NEEDED.format(), " ", "", (0, a.jsx)(x.default, {
                            className: y.noticeTextButton,
                            onClick: () => (0, g.default)(b.PomeloEntrypoints.USER_SETTINGS),
                            children: U.default.Messages.GET_STARTED
                        })]
                    }) : null
                }
                renderAccountSettings() {
                    return (0, a.jsxs)(c.FormSection, {
                        tag: c.FormTitleTags.H1,
                        title: U.default.Messages.USER_SETTINGS_MY_ACCOUNT,
                        className: y.userSettingsAccount,
                        children: [this.renderPomeloWarning(), this.renderAccountWarning(), (0, a.jsx)(D.default, {})]
                    })
                }
                renderSecuritySettings() {
                    let {
                        backupCodes: e,
                        currentUser: t,
                        theme: n
                    } = this.props, l = (0, u.isThemeDark)(n) ? s("553847") : s("963040");
                    return (0, a.jsxs)(c.FormSection, {
                        className: i(y.userSettingsSecurity, B.marginTop40),
                        title: U.default.Messages.USER_SETTINGS_ACCOUNT_PASSWORD_AND_AUTHENTICATION,
                        tag: "h1",
                        children: [t.mfaEnabled ? (0, a.jsx)(c.FormSection, {
                            children: (0, a.jsxs)(c.FormTitle, {
                                className: i(y.isEnabled, B.marginBottom20),
                                children: [(0, a.jsx)("img", {
                                    alt: "",
                                    className: i(y.lockIcon),
                                    src: s("507822")
                                }), U.default.Messages.TWO_FA_ENABLED]
                            })
                        }) : null, (0, a.jsx)("div", {
                            children: (0, a.jsx)(c.Button, {
                                size: c.Button.Sizes.SMALL,
                                className: y.changePasswordButton,
                                onClick: () => (0, c.openModal)(e => (0, a.jsx)(P.default, {
                                    ...e,
                                    onSuccess: e.onClose
                                })),
                                children: U.default.Messages.CHANGE_PASSWORD
                            })
                        }), (0, a.jsxs)(A.default, {
                            align: A.default.Align.STRETCH,
                            children: [(0, a.jsx)(A.default.Child, {
                                wrap: !0,
                                children: (0, a.jsx)(v.default, {
                                    backupCodes: e
                                })
                            }), t.mfaEnabled ? null : (0, a.jsx)(A.default, {
                                align: A.default.Align.CENTER,
                                basis: "323px",
                                grow: 0,
                                children: (0, a.jsx)("img", {
                                    src: l,
                                    className: y.userSettingsSecurityImage,
                                    alt: ""
                                })
                            })]
                        })]
                    })
                }
                renderConfirmModals() {
                    let {
                        shouldRenderOwnedGuildsModal: e,
                        shouldRenderDeleteAccountConfirmModal: t,
                        shouldRenderDisableAccountErrorModal: s,
                        disableAccountErrorMessage: n
                    } = this.state;
                    if (e) {
                        let e = () => this.setState({
                            shouldRenderOwnedGuildsModal: !1
                        });
                        return (0, a.jsx)(c.DeclarativeConfirmModal, {
                            dismissable: !0,
                            header: U.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP,
                            confirmText: U.default.Messages.OKAY,
                            confirmButtonColor: c.ButtonColors.BRAND,
                            onCancel: e,
                            onConfirm: e,
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: U.default.Messages.DELETE_ACCOUNT_TRANSFER_OWNERSHIP_BODY
                            })
                        })
                    }
                    if (t) {
                        let e = () => this.setState({
                            shouldRenderDeleteAccountConfirmModal: !1
                        });
                        return (0, a.jsx)(c.DeclarativeConfirmModal, {
                            dismissable: !0,
                            header: U.default.Messages.DELETE_ACCOUNT,
                            confirmText: U.default.Messages.DELETE_ACCOUNT,
                            cancelText: U.default.Messages.CANCEL,
                            onCancel: e,
                            onConfirm: () => (0, E.disableAccount)("", !0).then(e),
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: U.default.Messages.DELETE_ACCOUNT_BODY
                            })
                        })
                    }
                    if (s) {
                        let e = () => this.setState({
                            shouldRenderDisableAccountErrorModal: !1,
                            disableAccountErrorMessage: null
                        });
                        return (0, a.jsx)(c.DeclarativeConfirmModal, {
                            dismissable: !0,
                            header: U.default.Messages.DELETE_ACCOUNT_ERROR,
                            confirmText: U.default.Messages.OKAY,
                            confirmButtonColor: c.ButtonColors.BRAND,
                            onCancel: e,
                            onConfirm: e,
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-md/normal",
                                children: n
                            })
                        })
                    }
                }
                render() {
                    if (this.props.hide) return (0, a.jsx)(f.default, {});
                    let {
                        currentUser: e
                    } = this.props;
                    return (0, a.jsxs)("div", {
                        children: [this.renderConfirmModals(), this.renderAccountSettings(), e.isClaimed() ? (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(c.FormDivider, {
                                className: B.marginTop40
                            }), this.renderSecuritySettings(), (0, a.jsx)(c.FormDivider, {
                                className: B.marginTop40
                            })]
                        }) : null, (0, a.jsx)(L.default, {
                            className: B.marginTop40,
                            currentUser: e,
                            handleDisableAccount: () => this.handleDisableAccount(!1),
                            handleDeleteAccount: () => this.handleDisableAccount(!0)
                        })]
                    })
                }
                handleDisableAccountError(e) {
                    if (e.body.code === j.AbortCodes.INVALID_PASSWORD) throw e;
                    this.setState({
                        shouldRenderDisableAccountErrorModal: !0,
                        disableAccountErrorMessage: e.body.message
                    })
                }
                handleSubmitDisableAccount(e, t) {
                    return (0, E.disableAccount)(e, t).then(j.NOOP, this.handleDisableAccountError)
                }
                handleDisableAccount() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        {
                            currentUser: t
                        } = this.props,
                        s = I.default.getGuilds(),
                        n = Object.keys(s).filter(e => s[e].ownerId === t.id);
                    if (n.length > 0) {
                        this.setState({
                            shouldRenderOwnedGuildsModal: !0
                        });
                        return
                    }
                    t.isClaimed() ? (0, c.openModal)(t => (0, a.jsx)(m.default, {
                        ...t,
                        handleSubmit: t => this.handleSubmitDisableAccount(t, e),
                        title: e ? U.default.Messages.DELETE_ACCOUNT : U.default.Messages.DISABLE_ACCOUNT,
                        actionText: e ? U.default.Messages.DELETE_ACCOUNT : U.default.Messages.DISABLE_ACCOUNT,
                        children: e ? U.default.Messages.DELETE_ACCOUNT_BODY : U.default.Messages.DISABLE_ACCOUNT_BODY
                    })) : this.setState({
                        shouldRenderDeleteAccountConfirmModal: !0
                    })
                }
                constructor(e) {
                    super(e), this.state = {
                        disableAccountErrorMessage: null,
                        shouldRenderOwnedGuildsModal: !1,
                        shouldRenderDeleteAccountConfirmModal: !1,
                        shouldRenderDisableAccountErrorModal: !1
                    }
                }
            }
            var G = () => {
                let e = (0, d.useStateFromStores)([C.default], () => {
                        let e = C.default.getCurrentUser();
                        return o(null != e, "ConnectedUserAccountSettings: currentUser cannot be undefined"), e
                    }),
                    t = (0, d.useStateFromStores)([N.default], () => N.default.getBackupCodes()),
                    s = (0, d.useStateFromStores)([p.default], () => p.default.hidePersonalInformation),
                    n = (0, d.useStateFromStores)([M.default], () => M.default.theme),
                    l = (0, _.useIsEligibleForPomelo)();
                return (0, a.jsx)(F, {
                    theme: n,
                    currentUser: e,
                    backupCodes: t,
                    hide: s,
                    shouldRenderPomeloWarning: l
                })
            }