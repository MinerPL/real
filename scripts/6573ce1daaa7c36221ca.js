(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["46647"], {
        92693: function(e, t, n) {
            "use strict";
            e.exports = n.p + "0c1a82e7889ced7b3bf1.svg"
        },
        152584: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                accountDetailsInit: function() {
                    return T
                },
                accountDetailsClose: function() {
                    return N
                },
                disableAccount: function() {
                    return C
                },
                saveAccountRequest: function() {
                    return f
                },
                saveAccountChanges: function() {
                    return A
                },
                getHarvestStatus: function() {
                    return I
                },
                requestHarvest: function() {
                    return R
                },
                setPendingAvatar: function() {
                    return h
                },
                setPendingGlobalNameName: function() {
                    return p
                },
                setPendingAvatarDecoration: function() {
                    return U
                },
                setPendingProfileEffectID: function() {
                    return m
                },
                clearErrors: function() {
                    return O
                },
                resetPendingAccountChanges: function() {
                    return v
                },
                resetAllPending: function() {
                    return g
                },
                resetAndCloseUserProfileForm: function() {
                    return M
                },
                setDisableSubmit: function() {
                    return D
                }
            });
            var s = n("990746"),
                o = n("173333"),
                r = n("819855"),
                l = n("913144"),
                a = n("393414"),
                i = n("599110"),
                u = n("315102"),
                d = n("730622"),
                _ = n("437822"),
                E = n("49111"),
                c = n("191349"),
                S = n("782340");

            function T() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function N() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function C(e, t) {
                let n = t ? S.default.Messages.DELETE_ACCOUNT : S.default.Messages.DISABLE_ACCOUNT,
                    o = t ? E.Endpoints.DELETE_ACCOUNT : E.Endpoints.DISABLE_ACCOUNT;
                return (0, d.default)(t => s.default.post({
                    url: o,
                    body: {
                        password: e,
                        ...t
                    },
                    oldFormErrors: !0
                }), {
                    modalProps: {
                        title: n
                    },
                    checkEnabled: !1
                }).then(() => {
                    _.default.logoutInternal(), (0, a.transitionTo)(E.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function f(e) {
                let t = await s.default.patch({
                        url: E.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, l.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && l.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return l.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: s,
                    emailToken: r,
                    password: a,
                    avatar: _,
                    avatarDecoration: T,
                    newPassword: N,
                    globalName: C
                } = e;
                return l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let l = {
                        username: t,
                        email: s,
                        email_token: r,
                        password: a,
                        avatar: _,
                        discriminator: n,
                        global_name: C,
                        new_password: N,
                        ...e
                    };
                    null === T && (l.avatar_decoration_id = null), null != T && (l.avatar_decoration_id = T.id, l.avatar_decoration_sku_id = T.skuId);
                    let i = o.default.get(E.DEVICE_TOKEN),
                        u = (0, c.getDevicePushProvider)();
                    null != u && null != i && (l.push_provider = u, l.push_token = i);
                    let d = o.default.get(E.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != d && (l.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, l.push_voip_token = d), f(l)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: S.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => l.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return i.default.track(E.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), l.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function I() {
                return s.default.get({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R() {
                return s.default.post({
                    url: E.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? r.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : r.AccessibilityAnnouncer.announce(S.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function p(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function m(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function O() {
                l.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function v() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function g() {
                l.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function M() {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function D(e) {
                l.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var s = n("920040"),
                o = n("773670"),
                r = n("575482"),
                l = n.n(r),
                a = n("77078"),
                i = n("782340"),
                u = n("430230");
            class d extends o.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: r,
                        error: d,
                        isLoading: _,
                        maxLength: E,
                        transitionState: c,
                        helpMessage: S,
                        retryPrompt: T,
                        retrySuccessMessage: N
                    } = this.props, {
                        code: C,
                        errorMessage: f,
                        retrySuccess: A
                    } = this.state, I = o.Children.count(r) > 0 ? (0, s.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: u.card,
                        children: (0, s.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: r
                        })
                    }) : null, R = null != T ? (0, s.jsxs)(a.Text, {
                        className: l(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, s.jsx)("br", {}), (0, s.jsx)(a.Clickable, {
                            className: l(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, s.jsx)(a.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, h = A ? (0, s.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, s.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: N
                        })
                    }) : null;
                    return (0, s.jsx)(a.ModalRoot, {
                        transitionState: c,
                        children: (0, s.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, s.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, s.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, s.jsxs)(a.ModalContent, {
                                children: [null != S ? (0, s.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: S
                                }) : null, I, h, (0, s.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, s.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: C,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, s.jsx)(a.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != d ? d : f
                                    }) : null, R]
                                })]
                            }), (0, s.jsxs)(a.ModalFooter, {
                                children: [(0, s.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: _ || 0 === C.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, s.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: _,
                                    look: a.Button.Looks.LINK,
                                    color: a.Button.Colors.PRIMARY,
                                    children: i.default.Messages.CANCEL
                                })]
                            })]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        code: "",
                        errorMessage: "",
                        retrySuccess: !1
                    }, this.setRef = e => {
                        this._input = e
                    }, this.getLabelText = () => {
                        var e;
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : i.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? i.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : i.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
                        var e;
                        return this.props.forceNoPlaceholder ? null : null !== (e = this.props.placeholder) && void 0 !== e ? e : this.getSupportedCodeTypes()
                    }, this.errorPresent = () => null != this.props.error && "" !== this.props.error || null != this.state.errorMessage && "" !== this.state.errorMessage, this.handleRetry = () => {
                        let {
                            onRetry: e
                        } = this.props;
                        null == e || e().then(() => this.setState({
                            retrySuccess: !0
                        }))
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            handleSubmit: t,
                            onError: n
                        } = this.props;
                        t(this.state.code).catch(e => {
                            null != e.body && (null == n || n(e.body), e.body.message && this.setState({
                                errorMessage: e.body.message
                            }))
                        })
                    }, this.handleCancel = () => {
                        let {
                            onClose: e,
                            handleEarlyClose: t
                        } = this.props;
                        e(), null == t || t()
                    }, this.handleCodeChange = e => {
                        this.setState({
                            code: e
                        })
                    }
                }
            }
            d.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var _ = d
        },
        893044: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("920040"),
                o = n("773670"),
                r = n("498225"),
                l = n("77078"),
                a = n("599417"),
                i = n("734990"),
                u = n("790618"),
                d = n("258078"),
                _ = n("782340"),
                E = n("414198");

            function c(e) {
                var t;
                let {
                    isSlideReady: n,
                    error: c,
                    setEmailToken: S,
                    setError: T,
                    onNext: N,
                    onClose: C
                } = e, [f, A] = o.useState(!1), [I, R] = o.useState(""), [h, p] = o.useState(!1), U = (0, r.useStateFromStores)([u.default], () => u.default.getErrors()), m = o.useRef(null);
                o.useEffect(() => {
                    if (n) {
                        var e;
                        null === (e = m.current) || void 0 === e || e.focus()
                    }
                }, [n]);
                let O = async e => {
                    e.preventDefault(), T(null), A(!0);
                    try {
                        let {
                            token: e
                        } = await (0, i.confirmEmailChange)(I);
                        S(e), N()
                    } catch (t) {
                        let e = new a.default(t);
                        T(e.getAnyErrorMessage())
                    } finally {
                        A(!1)
                    }
                }, v = async () => {
                    if (!h) {
                        p(!0);
                        try {
                            await (0, i.sendConfirmationCode)(!0), (0, l.showToast)((0, l.createToast)(_.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, l.ToastType.SUCCESS))
                        } catch (n) {
                            let e = new a.default(n),
                                t = e.getAnyErrorMessage();
                            null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
                        } finally {
                            p(!1)
                        }
                    }
                };
                return (0, s.jsxs)("form", {
                    onSubmit: O,
                    children: [(0, s.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: E.header,
                        children: [(0, s.jsx)(d.default, {
                            color: d.default.Colors.HEADER_PRIMARY,
                            size: d.default.Sizes.SIZE_24,
                            className: E.title,
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
                        }), (0, s.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: E.subtitle,
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
                        }), (0, s.jsx)(l.ModalCloseButton, {
                            onClick: C,
                            className: E.modalCloseButton
                        })]
                    }), (0, s.jsxs)(l.ModalContent, {
                        className: E.content,
                        children: [(0, s.jsx)(l.FormItem, {
                            title: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                            error: null != c ? c : null == U ? void 0 : null === (t = U.email_token) || void 0 === t ? void 0 : t[0],
                            children: (0, s.jsx)(l.TextInput, {
                                value: I,
                                onChange: R,
                                inputRef: m
                            })
                        }), (0, s.jsx)(l.Text, {
                            className: E.help,
                            variant: "text-sm/normal",
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
                                onResend: v
                            })
                        })]
                    }), (0, s.jsx)(l.ModalFooter, {
                        children: (0, s.jsx)(l.Button, {
                            type: "submit",
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.MEDIUM,
                            submitting: f,
                            children: _.default.Messages.NEXT
                        })
                    })]
                })
            }
        },
        509943: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("920040"),
                o = n("773670"),
                r = n("498225"),
                l = n("77078"),
                a = n("599417"),
                i = n("734990"),
                u = n("697218"),
                d = n("258078"),
                _ = n("782340"),
                E = n("414198");

            function c(e) {
                let {
                    onNext: t,
                    onClose: n
                } = e, [c, S] = o.useState(!1), T = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), N = async e => {
                    e.preventDefault(), S(!0);
                    try {
                        await (0, i.sendConfirmationCode)(), t()
                    } catch (n) {
                        let e = new a.default(n),
                            t = e.getAnyErrorMessage();
                        null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
                    } finally {
                        S(!1)
                    }
                };
                return (0, s.jsxs)("form", {
                    onSubmit: N,
                    children: [(0, s.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: E.confirmStartHeader,
                        children: [(0, s.jsx)(d.default, {
                            color: d.default.Colors.HEADER_PRIMARY,
                            size: d.default.Sizes.SIZE_24,
                            className: E.title,
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
                        }), (0, s.jsx)(l.Text, {
                            className: E.description,
                            variant: "text-md/normal",
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
                                oldEmail: null == T ? void 0 : T.email
                            })
                        }), (0, s.jsx)(l.ModalCloseButton, {
                            onClick: n,
                            className: E.modalCloseButton
                        })]
                    }), (0, s.jsx)(l.ModalContent, {
                        className: E.content,
                        children: (0, s.jsxs)("div", {
                            className: E.buttons,
                            children: [(0, s.jsx)(l.Button, {
                                type: "submit",
                                color: l.Button.Colors.BRAND,
                                size: l.Button.Sizes.MEDIUM,
                                submitting: c,
                                className: E.submit,
                                children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
                            }), (0, s.jsx)(l.Button, {
                                className: E.cancel,
                                look: l.Button.Looks.LINK,
                                color: l.Button.Colors.PRIMARY,
                                onClick: n,
                                children: _.default.Messages.CANCEL
                            })]
                        })
                    })]
                })
            }
        },
        867693: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var s = n("920040"),
                o = n("773670"),
                r = n("64379"),
                l = n("498225"),
                a = n("77078"),
                i = n("152584"),
                u = n("697218"),
                d = n("893044"),
                _ = n("509943"),
                E = n("457818"),
                c = n("397336"),
                S = n("414198"),
                T = n("92693");

            function N(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: N
                } = e, C = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), f = o.useRef(null !== (t = null == C ? void 0 : C.verified) && void 0 !== t && t);
                o.useEffect(() => () => (0, i.accountDetailsClose)(), []);
                let A = null == C ? void 0 : C.verified,
                    I = A ? c.ChangeEmailSteps.CONFIRM_START : c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                    [R, h] = o.useState(I),
                    [p, U] = o.useState(null),
                    [m, O] = o.useState(null),
                    [v, g] = o.useState(null),
                    M = {
                        impression_group: r.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
                    };
                return (0, s.jsxs)(a.ModalRoot, {
                    transitionState: n,
                    disableTrack: !0,
                    children: [R === c.ChangeEmailSteps.CONFIRM_START ? (0, s.jsx)("img", {
                        alt: "",
                        className: S.headerImage,
                        src: T
                    }) : null, (0, s.jsxs)(a.Slides, {
                        activeSlide: R,
                        width: 440,
                        onSlideReady: e => U(e),
                        children: [(0, s.jsx)(a.Slide, {
                            id: c.ChangeEmailSteps.CONFIRM_START,
                            impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                            impressionProperties: M,
                            children: (0, s.jsx)(_.default, {
                                onNext: () => h(c.ChangeEmailSteps.CONFIRM_CODE),
                                onClose: N
                            })
                        }), (0, s.jsx)(a.Slide, {
                            id: c.ChangeEmailSteps.CONFIRM_CODE,
                            impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                            impressionProperties: M,
                            children: (0, s.jsx)(d.default, {
                                error: v,
                                setError: g,
                                setEmailToken: O,
                                isSlideReady: p === c.ChangeEmailSteps.CONFIRM_CODE,
                                onNext: () => h(c.ChangeEmailSteps.EMAIL_AND_PASSWORD),
                                onClose: N
                            })
                        }), (0, s.jsx)(a.Slide, {
                            id: c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                            impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                            impressionProperties: {
                                ...M,
                                email_verified: f.current
                            },
                            children: (0, s.jsx)(E.default, {
                                emailToken: m,
                                isSlideReady: p === c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                                onBack: A ? () => h(c.ChangeEmailSteps.CONFIRM_CODE) : null,
                                onClose: N
                            })
                        })]
                    })]
                })
            }
        },
        457818: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var s = n("920040"),
                o = n("773670"),
                r = n("498225"),
                l = n("77078"),
                a = n("152584"),
                i = n("790618"),
                u = n("258078"),
                d = n("648661"),
                _ = n("782340"),
                E = n("414198");

            function c(e) {
                var t, n;
                let {
                    emailToken: c,
                    isSlideReady: S,
                    onClose: T,
                    onBack: N
                } = e, [C, f] = o.useState(""), [A, I] = o.useState(""), [R, h] = o.useState(!1), p = (0, r.useStateFromStores)([i.default], () => i.default.getErrors()), U = o.useRef(null);
                async function m(e) {
                    var t, n;
                    e.preventDefault(), h(!0);
                    let s = await (0, a.saveAccountChanges)({
                        email: C,
                        emailToken: c,
                        password: A
                    });
                    h(!1), (null == s ? void 0 : s.ok) ? T() : (null == s ? void 0 : null === (t = s.body) || void 0 === t ? void 0 : t.username) != null ? (0, d.showInvalidUsernameToast)() : (null == s ? void 0 : null === (n = s.body) || void 0 === n ? void 0 : n.email_token) != null && (null == N || N())
                }
                return o.useEffect(() => {
                    if (S) {
                        var e;
                        null === (e = U.current) || void 0 === e || e.focus()
                    }
                }, [S]), (0, s.jsxs)("form", {
                    onSubmit: m,
                    children: [(0, s.jsxs)(l.ModalHeader, {
                        separator: !1,
                        className: E.header,
                        children: [(0, s.jsx)(u.default, {
                            color: u.default.Colors.HEADER_PRIMARY,
                            size: u.default.Sizes.SIZE_24,
                            className: E.title,
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
                        }), (0, s.jsx)(l.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: E.subtitle,
                            children: _.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
                        }), (0, s.jsx)(l.ModalCloseButton, {
                            onClick: T,
                            className: E.modalCloseButton
                        })]
                    }), (0, s.jsxs)(l.ModalContent, {
                        className: E.content,
                        children: [(0, s.jsx)(l.FormItem, {
                            title: _.default.Messages.EMAIL,
                            error: null == p ? void 0 : null === (t = p.email) || void 0 === t ? void 0 : t[0],
                            children: (0, s.jsx)(l.TextInput, {
                                type: "email",
                                value: C,
                                onChange: f,
                                inputRef: U
                            })
                        }), (0, s.jsx)(l.FormItem, {
                            className: E.password,
                            title: _.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                            error: null == p ? void 0 : null === (n = p.password) || void 0 === n ? void 0 : n[0],
                            children: (0, s.jsx)(l.TextInput, {
                                type: "password",
                                value: A,
                                onChange: I
                            })
                        })]
                    }), (0, s.jsxs)(l.ModalFooter, {
                        children: [(0, s.jsx)(l.Button, {
                            type: "submit",
                            color: l.Button.Colors.BRAND,
                            size: l.Button.Sizes.MEDIUM,
                            submitting: R,
                            children: _.default.Messages.DONE
                        }), null != N ? (0, s.jsx)(l.Button, {
                            className: E.cancel,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: N,
                            children: _.default.Messages.BACK
                        }) : (0, s.jsx)(l.Button, {
                            className: E.cancel,
                            look: l.Button.Looks.LINK,
                            color: l.Button.Colors.PRIMARY,
                            onClick: T,
                            children: _.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        648661: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showInvalidUsernameToast: function() {
                    return r
                }
            });
            var s = n("77078"),
                o = n("782340");

            function r() {
                (0, s.showToast)((0, s.createToast)(o.default.Messages.USER_SETTINGS_UPDATE_FAILURE, s.ToastType.FAILURE))
            }
        },
        734990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                sendConfirmationCode: function() {
                    return l
                },
                confirmEmailChange: function() {
                    return a
                }
            });
            var s = n("64379"),
                o = n("840707"),
                r = n("49111");

            function l() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return o.default.put({
                    url: r.Endpoints.USER_EMAIL,
                    trackedActionData: {
                        event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                        properties: {
                            is_resend: e
                        }
                    }
                })
            }
            async function a(e) {
                let t = await o.default.post({
                    url: r.Endpoints.USER_EMAIL_VERIFY_CODE,
                    body: {
                        code: e
                    },
                    trackedActionData: {
                        event: s.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE
                    }
                });
                return t.body
            }
        },
        790618: function(e, t, n) {
            "use strict";
            let s, o, r, l, a, i, u, d, _, E, c, S, T, N;
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var C = n("498225"),
                f = n("913144"),
                A = n("49111");
            let I = A.FormStates.CLOSED,
                R = {},
                h = !1;

            function p() {
                I = A.FormStates.OPEN, R = {}
            }

            function U() {
                I = A.FormStates.CLOSED, R = {}
            }

            function m() {
                O(), v(), R = {}
            }

            function O() {
                s = void 0, o = void 0, r = void 0, l = void 0
            }

            function v() {
                a = void 0, i = void 0, u = void 0, d = void 0, _ = void 0, l = void 0
            }

            function g() {
                c = void 0, S = void 0, T = void 0, N = void 0, E = void 0
            }
            class M extends C.default.Store {
                getFormState() {
                    return I
                }
                getErrors() {
                    return R
                }
                showNotice() {
                    return void 0 !== s || void 0 !== a || void 0 !== i || void 0 !== u || void 0 !== d || void 0 !== _ || void 0 !== r || void 0 !== l || void 0 !== o
                }
                getPendingAvatar() {
                    return s
                }
                getPendingGlobalName() {
                    return o
                }
                getPendingBanner() {
                    return a
                }
                getPendingBio() {
                    return i
                }
                getPendingPronouns() {
                    return u
                }
                getPendingAccentColor() {
                    return d
                }
                getPendingThemeColors() {
                    return _
                }
                getPendingAvatarDecoration() {
                    return r
                }
                getPendingProfileEffectID() {
                    return l
                }
                getAllPending() {
                    return {
                        pendingAvatar: s,
                        pendingBanner: a,
                        pendingBio: i,
                        pendingPronouns: u,
                        pendingAccentColor: d,
                        pendingThemeColors: _,
                        pendingAvatarDecoration: r,
                        pendingProfileEffectID: l,
                        pendingGlobalName: o
                    }
                }
                getTryItOutThemeColors() {
                    return E
                }
                getTryItOutAvatar() {
                    return c
                }
                getTryItOutAvatarDecoration() {
                    return S
                }
                getTryItOutProfileEffectID() {
                    return T
                }
                getTryItOutBanner() {
                    return N
                }
                getAllTryItOut() {
                    return {
                        tryItOutThemeColors: E,
                        tryItOutAvatar: c,
                        tryItOutAvatarDecoration: S,
                        tryItOutProfileEffectID: T,
                        tryItOutBanner: N
                    }
                }
                getIsDisableSubmit() {
                    return h
                }
            }
            M.displayName = "UserSettingsAccountStore";
            var D = new M(f.default, {
                USER_SETTINGS_ACCOUNT_INIT: p,
                USER_SETTINGS_MODAL_INIT: p,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: p,
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    return t === A.UserSettingsSections.ACCOUNT && p()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: U,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    m(), g(), U()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    I = A.FormStates.SUBMITTING, R = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (I !== A.FormStates.SUBMITTING) return !1;
                    I = A.FormStates.OPEN, R = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    s = t, c = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME: function(e) {
                    let {
                        globalName: t
                    } = e;
                    o = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION: function(e) {
                    let {
                        avatarDecoration: t
                    } = e;
                    r = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectID: t
                    } = e;
                    l = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    a = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_BIO: function(e) {
                    let {
                        bio: t
                    } = e;
                    i = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PRONOUNS: function(e) {
                    let {
                        pronouns: t
                    } = e;
                    u = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_ACCENT_COLOR: function(e) {
                    let {
                        color: t
                    } = e;
                    d = t
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    _ = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR: function(e) {
                    let {
                        avatar: t
                    } = e;
                    c = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_AVATAR_DECORATION: function(e) {
                    let {
                        avatarDecoration: t
                    } = e;
                    S = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectID: t
                    } = e;
                    T = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    N = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    E = t
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    R = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: O,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: v,
                USER_SETTINGS_RESET_ALL_PENDING: m,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: g,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    r = void 0
                },
                LOGOUT: function() {
                    s = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    h = t
                }
            })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return r
                }
            });
            var s = n("427964"),
                o = n.n(s);
            let r = e => "function" == typeof e ? e() : e;
            o.curry((e, t, n) => r(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let s, o;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("697218"),
                l = n("615931");
            let a = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                s = e.showModal, a = e.updateModalProps, o = n("551042").closeModal
            }

            function i(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: r,
                    modalProps: l = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == s) {
                    null == i || i();
                    return
                }
                let d = s(S, _, l);

                function _() {
                    null == i || i()
                }

                function E(e) {
                    o(d), n(e)
                }

                function c(e) {
                    o(d), r(e)
                }

                function S(e) {
                    return a(d, S, _, {
                        ...l,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: c,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    a(d, S, _, {
                        ...l,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: s,
                    code: o,
                    mfaCodeHandler: r = i,
                    isModalOpen: l = !1,
                    ...a
                } = e;
                return t(null != o ? {
                    code: o
                } : {}).then(n, e => {
                    var o, i;
                    if (o = e, i = l, o.body && 60008 === o.body.code || i && 429 === o.status) return r({
                        promiseFn: t,
                        resolve: n,
                        reject: s,
                        res: e,
                        ...a
                    });
                    s(e)
                })
            }

            function d(e, t) {
                var n, s;
                let {
                    checkEnabled: o = null !== (s = null === (n = r.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== s && s,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, l.resolveThunk)(o) ? i : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...a
                    })
                })
            }
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return a
                },
                updateModalProps: function() {
                    return i
                }
            });
            var s = n("920040");
            n("773670");
            var o = n("551042"),
                r = n("920636");
            let l = (e, t, n) => function(o) {
                return (0, s.jsx)(r.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...o
                })
            };

            function a(e, t, n) {
                return (0, o.openModal)(l(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, s) {
                return (0, o.updateModal)(e, l(t, n, s))
            }
        }
    }
]);