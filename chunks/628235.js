            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return L
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                l = s("627445"),
                i = s.n(l),
                r = s("446674"),
                o = s("77078"),
                d = s("430713"),
                u = s("984557"),
                c = s("920636"),
                S = s("583227"),
                E = s("878720"),
                f = s("601745"),
                T = s("685223"),
                m = s("271938"),
                _ = s("650893"),
                g = s("697218"),
                h = s("145131"),
                I = s("306160"),
                N = s("222038"),
                p = s("462369"),
                C = s("803163"),
                A = s("49111"),
                O = s("482931"),
                x = s("782340"),
                R = s("374204"),
                M = s("926622");

            function v(e) {
                let {
                    code: {
                        code: t,
                        consumed: s
                    }
                } = e, l = "".concat(t.substr(0, 4), "-").concat(t.substr(4)), i = n.useRef(null), r = n.useCallback(e => {
                    if ("c" === e.key && e.metaKey && I.SUPPORTS_COPY) {
                        var t;
                        e.preventDefault(), e.stopPropagation(), (0, I.copy)(l), null == i || null === (t = i.current) || void 0 === t || t.focus()
                    }
                }, [l]);
                return (0, a.jsx)("li", {
                    className: M.marginBottom20,
                    children: (0, a.jsx)(o.Clickable, {
                        innerRef: i,
                        className: R.backupCode,
                        onKeyDown: r,
                        children: (0, a.jsx)(o.Checkbox, {
                            displayOnly: !0,
                            readOnly: !0,
                            className: R.codeCheckbox,
                            value: s,
                            children: (0, a.jsx)("span", {
                                className: R.code,
                                children: l
                            })
                        })
                    })
                })
            }
            class D extends n.PureComponent {
                maskPhoneNumber(e) {
                    return null == e ? "" : "".concat("*".repeat(e.length - 4)).concat(e.slice(-4))
                }
                renderMFASMS() {
                    let e, t;
                    let {
                        revealed: s
                    } = this.state, {
                        currentUser: n,
                        togglingSMS: l
                    } = this.props, i = null != n.phone, r = n.hasFlag(A.UserFlags.MFA_SMS);
                    if (i || r) {
                        let e = s ? n.phone : this.maskPhoneNumber(n.phone);
                        t = (0, a.jsxs)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: M.marginBottom8,
                            children: [x.default.Messages.MFA_SMS_AUTH_CURRENT_PHONE.format({
                                phoneNumber: e
                            }), (0, a.jsx)(o.Anchor, {
                                onClick: this.togglePhoneNumberVisibility,
                                className: R.phoneRevealer,
                                children: s ? x.default.Messages.MFA_SMS_PHONE_NUMBER_HIDE : x.default.Messages.MFA_SMS_PHONE_NUMBER_REVEAL
                            })]
                        })
                    }
                    if (r) e = (0, a.jsx)(h.default, {
                        className: i ? "" : M.marginTop8,
                        children: (0, a.jsx)(o.Button, {
                            color: o.Button.Colors.RED,
                            look: o.Button.Looks.OUTLINED,
                            size: o.Button.Sizes.SMALL,
                            submitting: l,
                            onClick: this.handleDisableSMS,
                            children: x.default.Messages.MFA_SMS_REMOVE
                        })
                    });
                    else {
                        let t = (0, p.getSMSBackupDisabledMessage)(n);
                        e = (0, a.jsxs)(h.default, {
                            className: i ? "" : M.marginTop8,
                            children: [(0, a.jsx)(o.Button, {
                                onClick: this.handleEnableSMS,
                                size: o.Button.Sizes.SMALL,
                                submitting: l,
                                disabled: null != t,
                                children: null != t ? t : x.default.Messages.MFA_SMS_ENABLE
                            }), i ? (0, a.jsx)(o.Button, {
                                onClick: this.handleChangePhoneNumber,
                                color: o.Button.Colors.PRIMARY,
                                size: o.Button.Sizes.SMALL,
                                look: o.Button.Looks.LINK,
                                children: x.default.Messages.CHANGE_PHONE_NUMBER
                            }) : null]
                        })
                    }
                    return (0, a.jsxs)(o.FormSection, {
                        className: M.marginTop40,
                        title: x.default.Messages.MFA_SMS_AUTH,
                        children: [(0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            children: x.default.Messages.MFA_SMS_AUTH_SALES_PITCH
                        }), t, e]
                    })
                }
                renderTOTPRemove() {
                    let {
                        totpDisabledReason: e
                    } = this.props, t = null !== e;
                    return (0, a.jsx)(o.Tooltip, {
                        text: e,
                        shouldShow: t,
                        children: e => (0, a.jsx)(o.Button, {
                            ...e,
                            onClick: this.handleDisableMFA,
                            size: o.Button.Sizes.SMALL,
                            color: o.ButtonColors.RED,
                            look: o.ButtonLooks.OUTLINED,
                            disabled: t,
                            children: x.default.Messages.TWO_FA_REMOVE
                        })
                    })
                }
                renderEnabled() {
                    let e;
                    let {
                        backupCodes: t
                    } = this.props, s = (0, a.jsx)(o.Button, {
                        onClick: this.sendMFABackupCodesVerificationKeyEmail,
                        size: o.Button.Sizes.SMALL,
                        children: x.default.Messages.TWO_FA_VIEW_BACKUP_CODES
                    });
                    if (t.length > 0) {
                        s = (0, a.jsx)(u.default, {
                            fileContents: this.getDownloadFileContents,
                            contentType: "text/plain",
                            fileName: "discord_backup_codes.txt",
                            children: (0, a.jsx)(o.Button, {
                                size: o.Button.Sizes.SMALL,
                                children: x.default.Messages.TWO_FA_DOWNLOAD_CODES
                            })
                        });
                        let n = e => e.map(e => (0, a.jsx)(v, {
                            code: e
                        }, e.code));
                        e = (0, a.jsxs)(o.FormSection, {
                            title: x.default.Messages.TWO_FA_BACKUP_CODES_LABEL,
                            children: [(0, a.jsx)(o.FormText, {
                                type: o.FormText.Types.DESCRIPTION,
                                className: M.marginBottom20,
                                children: x.default.Messages.TWO_FA_BACKUP_CODES_BODY.format()
                            }), (0, a.jsxs)(h.default, {
                                children: [(0, a.jsx)(h.default.Child, {
                                    children: (0, a.jsx)("ul", {
                                        className: R.checkboxGroup,
                                        children: n(t.slice(0, t.length / 2))
                                    })
                                }), (0, a.jsx)(h.default.Child, {
                                    children: (0, a.jsx)("ul", {
                                        className: R.checkboxGroup,
                                        children: n(t.slice(t.length / 2))
                                    })
                                })]
                            }), (0, a.jsx)("div", {
                                children: (0, a.jsx)(o.Button, {
                                    onClick: this.generateBackupCodes,
                                    look: o.ButtonLooks.LINK,
                                    size: o.ButtonSizes.MIN,
                                    children: x.default.Messages.TWO_FA_GENERATE_CODES
                                })
                            }), (0, a.jsx)(o.FormDivider, {
                                className: M.marginTop20
                            })]
                        })
                    }
                    return (0, a.jsxs)(o.FormSection, {
                        children: [(0, a.jsx)(o.FormTitle, {
                            children: x.default.Messages.TWO_FA
                        }), (0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: M.marginBottom20,
                            children: x.default.Messages.TWO_FA_DESCRIPTION
                        }), (0, a.jsxs)(h.default, {
                            justify: h.default.Justify.START,
                            className: M.marginBottom20,
                            children: [(0, a.jsx)(h.default.Child, {
                                wrap: !0,
                                grow: 0,
                                children: s
                            }), (0, a.jsx)(h.default.Child, {
                                wrap: !0,
                                children: this.props.hasTOTPEnabled ? this.renderTOTPRemove() : (0, a.jsx)(o.Button, {
                                    onClick: C.default.enableMFA,
                                    size: o.ButtonSizes.SMALL,
                                    children: x.default.Messages.TWO_FA_ENABLE
                                })
                            })]
                        }), e, this.renderMFASMS(), (0, a.jsx)(T.default, {})]
                    })
                }
                renderDisabled() {
                    return (0, a.jsxs)(o.FormSection, {
                        title: x.default.Messages.TWO_FA,
                        children: [(0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            className: M.marginBottom20,
                            children: x.default.Messages.TWO_FA_SALES_PITCH
                        }), (0, a.jsx)(o.FormItem, {
                            children: (0, a.jsx)(o.Button, {
                                onClick: C.default.enableMFA,
                                size: o.ButtonSizes.SMALL,
                                children: x.default.Messages.TWO_FA_ENABLE
                            })
                        }), (0, a.jsx)(T.default, {})]
                    })
                }
                render() {
                    let {
                        currentUser: e
                    } = this.props;
                    return N.hasCrypto ? e.verified ? e.mfaEnabled ? this.renderEnabled() : this.renderDisabled() : (0, a.jsx)(o.FormSection, {
                        title: x.default.Messages.TWO_FA,
                        children: (0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            children: x.default.Messages.TWO_FA_NOT_VERIFIED
                        })
                    }) : (0, a.jsx)(o.FormSection, {
                        title: x.default.Messages.TWO_FA,
                        children: (0, a.jsx)(o.FormText, {
                            type: o.FormText.Types.DESCRIPTION,
                            children: x.default.Messages.TWO_FA_USE_DESKTOP_APP
                        })
                    })
                }
                openPhoneVerificationModal() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    (0, o.openModal)(t => (0, a.jsx)(f.default, {
                        reason: E.ChangePhoneReason.USER_SETTINGS_UPDATE,
                        ...t,
                        ...e
                    }), {
                        modalKey: O.PHONE_VERIFICATION_MODAL_KEY
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        revealed: !1,
                        password: ""
                    }, this.togglePhoneNumberVisibility = e => {
                        e.preventDefault(), this.setState({
                            revealed: !this.state.revealed
                        })
                    }, this.handleDisableMFA = () => {
                        d.default.disable()
                    }, this.generateBackupCodes = async () => {
                        let e = _.default.getVerificationKey();
                        await d.default.confirmViewBackupCodes(e, !0)
                    }, this.sendMFABackupCodesVerificationKeyEmail = () => {
                        (0, o.openModal)(e => (0, a.jsx)(S.default, {
                            ...e,
                            handleSubmit: e => d.default.sendMFABackupCodesVerificationKeyEmail(e).then(() => {
                                this.viewBackupCodes(e)
                            }),
                            title: x.default.Messages.TWO_FA_VIEW_BACKUP_CODES_ENTER_PASSWORD,
                            actionText: x.default.Messages.TWO_FA_BACKUP_CODES_NEXT_ACTION
                        }))
                    }, this.viewBackupCodes = e => {
                        (0, o.openModal)(t => (0, a.jsx)(c.default, {
                            ...t,
                            handleSubmit: e => d.default.confirmViewBackupCodes(e, !1).then(() => t.onClose()),
                            maxLength: 8,
                            title: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_LABEL,
                            label: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_INPUT_LABEL,
                            forceNoPlaceholder: !0,
                            retryPrompt: x.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_PROMPT,
                            retrySuccessMessage: x.default.Messages.TWO_FA_CONFIRM_VIEW_RESEND_EMAIL_SUCCESS,
                            onRetry: () => d.default.sendMFABackupCodesVerificationKeyEmail(e),
                            actionText: x.default.Messages.TWO_FA_VIEW_CODES_SUBMIT,
                            helpMessage: x.default.Messages.TWO_FA_CONFIRM_VIEW_BACKUP_CODES_BODY
                        }))
                    }, this.getDownloadFileContents = () => {
                        let e = this.props.backupCodes.map(e => {
                                let {
                                    consumed: t,
                                    code: s
                                } = e;
                                return "* ".concat(s.substr(0, 4), "-").concat(s.substr(4), " ").concat(t ? "(used)" : "")
                            }).join("\r\n"),
                            t = x.default.Messages.TWO_FA_DISCORD_BACKUP_CODES.format({
                                email: this.props.currentUser.email
                            });
                        return "".concat(t, "\r\n\r\n").concat(e)
                    }, this.handleChangePhoneNumber = () => {
                        this.openPhoneVerificationModal()
                    }, this.handleEnableSMS = () => {
                        let {
                            currentUser: e
                        } = this.props, t = () => {
                            (0, o.openModal)(e => (0, a.jsx)(S.default, {
                                ...e,
                                handleSubmit: d.default.enableSMS,
                                title: x.default.Messages.MFA_SMS_ENABLE
                            }))
                        };
                        null == e.phone ? this.openPhoneVerificationModal({
                            onAddedPhone: t
                        }) : t()
                    }, this.handleDisableSMS = () => {
                        (0, o.openModal)(e => (0, a.jsx)(S.default, {
                            ...e,
                            handleSubmit: d.default.disableSMS,
                            title: x.default.Messages.MFA_SMS_REMOVE,
                            children: x.default.Messages._MFA_SMS_CONFIRM_REMOVE_BODY
                        }))
                    }
                }
            }

            function L(e) {
                let t = (0, r.useStateFromStores)([g.default], () => g.default.getCurrentUser());
                i(null != t, "TwoFactorAuth: currentUser cannot be undefined");
                let s = (0, r.useStateFromStoresObject)([_.default, m.default], () => ({
                        togglingSMS: _.default.togglingSMS,
                        hasTOTPEnabled: m.default.hasTOTPEnabled()
                    })),
                    n = (0, p.use2FARemoveDisableReason)();
                return (0, a.jsx)(D, {
                    currentUser: t,
                    ...s,
                    ...e,
                    totpDisabledReason: n
                })
            }