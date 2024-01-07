            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            }), n("222007");
            var i = n("37983"),
                r = n("884691"),
                o = n("627445"),
                l = n.n(o),
                s = n("446674"),
                a = n("77078"),
                u = n("913144"),
                d = n("430713"),
                c = n("984557"),
                _ = n("367376"),
                E = n("878720"),
                f = n("601745"),
                I = n("650893"),
                S = n("697218"),
                h = n("145131"),
                N = n("583227"),
                p = n("49111"),
                T = n("482931"),
                C = n("782340"),
                A = n("659248");
            let R = e => {
                let {
                    label: t,
                    text: n,
                    children: r,
                    ...o
                } = e;
                return (0, i.jsxs)(h.default, {
                    direction: h.default.Direction.VERTICAL,
                    ...o,
                    children: [(0, i.jsx)(a.FormTitle, {
                        tag: "h2",
                        children: t
                    }), null != n ? (0, i.jsx)(a.Text, {
                        variant: "text-md/normal",
                        className: A.sectionBody,
                        children: n
                    }) : null, (0, i.jsx)(h.default.Child, {
                        wrap: !0,
                        children: r
                    })]
                })
            };
            class g extends r.PureComponent {
                renderSMSSection() {
                    let {
                        currentUser: e
                    } = this.props, t = null != this.props.currentUser.phone, n = e.hasFlag(p.UserFlags.MFA_SMS), r = e.hasFlag(p.UserFlags.PARTNER) || e.hasFlag(p.UserFlags.STAFF);
                    return t ? (0, i.jsxs)(R, {
                        label: C.default.Messages.MFA_SMS_ENABLE,
                        text: C.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                        children: [(0, i.jsxs)(a.Text, {
                            variant: "text-md/normal",
                            className: A.sectionBody,
                            children: [(0, i.jsx)("strong", {
                                className: A.phoneNumber,
                                children: C.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
                                    phoneNumber: e.phone
                                })
                            }), (0, i.jsx)(a.Button, {
                                look: a.Button.Looks.LINK,
                                color: a.Button.Colors.LINK,
                                size: a.Button.Sizes.MIN,
                                className: A.linkButton,
                                onClick: this.handleChangePhoneNumber,
                                children: C.default.Messages.CHANGE_PHONE_NUMBER
                            })]
                        }), (0, i.jsx)(a.Button, {
                            onClick: this.handleEnableSMS,
                            disabled: n || r,
                            color: a.Button.Colors.GREEN,
                            size: a.Button.Sizes.SMALL,
                            children: r ? C.default.Messages.MFA_SMS_DISABLED_PARTNER : n ? C.default.Messages.MFA_SMS_ALREADY_ENABLED : C.default.Messages.MFA_SMS_ENABLE
                        })]
                    }) : (0, i.jsx)(R, {
                        label: C.default.Messages.MFA_SMS_ENABLE,
                        text: C.default.Messages.MFA_SMS_AUTH_SALES_PITCH,
                        children: (0, i.jsx)(a.Button, {
                            onClick: this.handleEnableSMS,
                            color: a.Button.Colors.GREEN,
                            size: a.Button.Sizes.SMALL,
                            disabled: r,
                            children: r ? C.default.Messages.MFA_SMS_DISABLED_PARTNER : C.default.Messages.MFA_SMS_ADD_PHONE
                        })
                    })
                }
                renderBackupCodesSection() {
                    return (0, i.jsx)(R, {
                        label: C.default.Messages.TWO_FA_DOWNLOAD_CODES,
                        text: C.default.Messages.TWO_FA_BACKUP_CODES_WARNING.format(),
                        children: (0, i.jsx)(c.default, {
                            fileContents: this.getDownloadFileContents,
                            contentType: "text/plain",
                            fileName: "discord_backup_codes.txt",
                            onDownload: () => u.default.dispatch({
                                type: "MFA_SEEN_BACKUP_CODE_PROMPT"
                            }),
                            children: (0, i.jsx)(a.Button, {
                                color: a.Button.Colors.GREEN,
                                size: a.Button.Sizes.SMALL,
                                children: C.default.Messages.TWO_FA_DOWNLOAD_CODES
                            })
                        })
                    })
                }
                renderHeader(e) {
                    return (0, i.jsxs)(a.ModalHeader, {
                        separator: !1,
                        children: [(0, i.jsxs)(h.default.Child, {
                            grow: 1,
                            shrink: 1,
                            children: [(0, i.jsx)(a.Heading, {
                                variant: "heading-lg/semibold",
                                className: A.header,
                                children: _.default.parse(C.default.Messages.TWO_FA_SUCCESS_HEADER)
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-xs/normal",
                                className: A.subHeader,
                                children: e
                            })]
                        }), (0, i.jsx)(h.default.Child, {
                            grow: 0,
                            children: (0, i.jsx)(a.ModalCloseButton, {
                                onClick: this.handleCloseModal
                            })
                        })]
                    })
                }
                renderConfirmModal(e) {
                    let {
                        onClose: t
                    } = this.props;
                    return (0, i.jsx)(a.DeclarativeConfirmModal, {
                        dismissable: !0,
                        header: C.default.Messages.TWO_FA_CONFIRM_TITLE,
                        confirmText: C.default.Messages.TWO_FA_CONFIRM_CONFIRM,
                        cancelText: C.default.Messages.CANCEL,
                        onCancel: () => this.setState({
                            showConfirmModal: !1
                        }),
                        onConfirm: () => {
                            u.default.dispatch({
                                type: "MFA_SEEN_BACKUP_CODE_PROMPT"
                            }), t()
                        },
                        children: (0, i.jsx)(a.Text, {
                            variant: "text-md/normal",
                            color: "text-normal",
                            children: e
                        })
                    })
                }
                render() {
                    let {
                        isTotp: e
                    } = this.props;
                    return e ? this.renderTotp() : this.renderWebAuthn()
                }
                renderTotp() {
                    let {
                        transitionState: e
                    } = this.props, {
                        showConfirmModal: t
                    } = this.state;
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: e,
                        className: A.modal,
                        children: [this.renderHeader(C.default.Messages.MFA_SMS_ENABLE_SHOULD_DO.format()), (0, i.jsxs)(a.ModalContent, {
                            className: A.modalInner,
                            children: [this.renderSMSSection(), (0, i.jsx)(a.FormDivider, {
                                className: A.divider
                            }), this.renderBackupCodesSection()]
                        }), t && this.renderConfirmModal(C.default.Messages.TWO_FA_CONFIRM_BODY)]
                    })
                }
                renderWebAuthn() {
                    let {
                        transitionState: e
                    } = this.props, {
                        showConfirmModal: t
                    } = this.state;
                    return (0, i.jsxs)(a.ModalRoot, {
                        transitionState: e,
                        className: A.modal,
                        children: [this.renderHeader(C.default.Messages.TWO_FA_WEBAUTHN_SHOULD_DO.format()), (0, i.jsx)(a.ModalContent, {
                            className: A.modalInner,
                            children: this.renderBackupCodesSection()
                        }), t && this.renderConfirmModal(C.default.Messages.TWO_FA_CONFIRM_WEBAUTHN_BODY)]
                    })
                }
                openPhoneVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, a.openModal)(t => (0, i.jsx)(f.default, {
                        reason: E.ChangePhoneReason.MFA_PHONE_UPDATE,
                        ...t,
                        ...e
                    }), {
                        modalKey: T.PHONE_VERIFICATION_MODAL_KEY
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        showConfirmModal: !1
                    }, this.handleCloseModal = () => {
                        let {
                            onClose: e,
                            hasSeenBackupPrompt: t
                        } = this.props;
                        t ? null == e || e() : this.setState({
                            showConfirmModal: !0
                        })
                    }, this.getDownloadFileContents = () => {
                        let e = this.props.backupCodes.map(e => {
                                let {
                                    consumed: t,
                                    code: n
                                } = e;
                                return "* ".concat(n.substr(0, 4), "-").concat(n.substr(4), " ").concat(t ? "(".concat(C.default.Messages.TWO_FA_BACKUP_CODE_USED, ")") : "")
                            }).join("\r\n"),
                            t = C.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
                                email: this.props.currentUser.email
                            });
                        return "".concat(t, "\r\n\r\n").concat(e)
                    }, this.handleChangePhoneNumber = () => {
                        this.openPhoneVerificationModal()
                    }, this.handleEnableSMS = () => {
                        let {
                            currentUser: e
                        } = this.props, t = () => {
                            (0, a.openModal)(e => (0, i.jsx)(N.default, {
                                ...e,
                                handleSubmit: e => d.default.enableSMS(e),
                                title: C.default.Messages.MFA_SMS_ENABLE
                            }))
                        };
                        null == e.phone ? this.openPhoneVerificationModal({
                            onAddedPhone: t
                        }) : t()
                    }
                }
            }
            var v = s.default.connectStores([S.default, I.default], () => {
                let e = S.default.getCurrentUser();
                return l(null != e, "MFAEnableSuccess: currentUser cannot be undefined"), {
                    currentUser: e,
                    backupCodes: I.default.getBackupCodes(),
                    hasSeenBackupPrompt: I.default.hasSeenBackupPrompt
                }
            })(g)