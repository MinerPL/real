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
                    return S
                },
                accountDetailsClose: function() {
                    return C
                },
                disableAccount: function() {
                    return N
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
                    return O
                },
                setSingleTryItOutCollectiblesItem: function() {
                    return m
                },
                clearErrors: function() {
                    return v
                },
                resetPendingAccountChanges: function() {
                    return g
                },
                resetAllPending: function() {
                    return M
                },
                resetAndCloseUserProfileForm: function() {
                    return D
                },
                setDisableSubmit: function() {
                    return G
                }
            });
            var s = n("872717"),
                o = n("95410"),
                l = n("819855"),
                r = n("913144"),
                a = n("393414"),
                i = n("599110"),
                u = n("315102"),
                d = n("730622"),
                E = n("437822"),
                _ = n("49111"),
                c = n("191349"),
                T = n("782340");

            function S() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_INIT"
                })
            }

            function C() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_CLOSE"
                })
            }

            function N(e, t) {
                let n = t ? T.default.Messages.DELETE_ACCOUNT : T.default.Messages.DISABLE_ACCOUNT,
                    o = t ? _.Endpoints.DELETE_ACCOUNT : _.Endpoints.DISABLE_ACCOUNT;
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
                    E.default.logoutInternal(), (0, a.transitionTo)(_.Routes.DEFAULT_LOGGED_OUT)
                })
            }
            async function f(e) {
                let t = await s.default.patch({
                        url: _.Endpoints.ME,
                        oldFormErrors: !0,
                        body: e
                    }),
                    n = t.body;
                if (n.token) {
                    let t = n.token;
                    delete n.token, r.default.dispatch({
                        type: "UPDATE_TOKEN",
                        token: t,
                        userId: n.id
                    }), (null == e ? void 0 : e.password) != null && (null == e ? void 0 : e.new_password) != null && r.default.dispatch({
                        type: "PASSWORD_UPDATED",
                        userId: n.id
                    })
                }
                return r.default.dispatch({
                    type: "CURRENT_USER_UPDATE",
                    user: n
                }), t
            }

            function A(e) {
                let {
                    username: t,
                    discriminator: n,
                    email: s,
                    emailToken: l,
                    password: a,
                    avatar: E,
                    avatarDecoration: S,
                    newPassword: C,
                    globalName: N
                } = e;
                return r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT"
                }), (0, d.default)(e => {
                    let r = {
                        username: t,
                        email: s,
                        email_token: l,
                        password: a,
                        avatar: E,
                        discriminator: n,
                        global_name: N,
                        new_password: C,
                        ...e
                    };
                    null === S && (r.avatar_decoration_id = null), null != S && (r.avatar_decoration_id = S.id, r.avatar_decoration_sku_id = S.skuId);
                    let i = o.default.get(_.DEVICE_TOKEN),
                        u = (0, c.getDevicePushProvider)();
                    null != u && null != i && (r.push_provider = u, r.push_token = i);
                    let d = o.default.get(_.DEVICE_VOIP_TOKEN);
                    return null != c.DEVICE_PUSH_VOIP_PROVIDER && null != d && (r.push_voip_provider = c.DEVICE_PUSH_VOIP_PROVIDER, r.push_voip_token = d), f(r)
                }, {
                    checkEnabled: !1,
                    modalProps: {
                        title: T.default.Messages.TWO_FA_CHANGE_ACCOUNT
                    },
                    hooks: {
                        onEarlyClose: () => r.default.dispatch({
                            type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                            errors: {}
                        })
                    }
                }).then(e => {
                    let t = e.body;
                    return i.default.track(_.AnalyticEvents.USER_AVATAR_UPDATED, {
                        animated: (0, u.isAnimatedIconHash)(t.avatar)
                    }), r.default.dispatch({
                        type: "USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS"
                    }), e
                }, e => (r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE",
                    errors: e.body
                }), e))
            }

            function I() {
                return s.default.get({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function R() {
                return s.default.post({
                    url: _.Endpoints.USER_HARVEST,
                    oldFormErrors: !0
                })
            }

            function h(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR",
                    avatar: e
                }), null == e ? l.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_NONE) : l.AccessibilityAnnouncer.announce(T.default.Messages.A11Y_ANNOUNCEMENT_AVATAR_CHANGED)
            }

            function p(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_GLOBAL_NAME",
                    globalName: e
                })
            }

            function U(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_AVATAR_DECORATION",
                    avatarDecoration: e
                })
            }

            function O(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID",
                    profileEffectID: e
                })
            }

            function m(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM",
                    item: e
                })
            }

            function v() {
                r.default.dispatch({
                    type: "USER_SETTINGS_CLEAR_ERRORS"
                })
            }

            function g() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES"
                })
            }

            function M() {
                r.default.dispatch({
                    type: "USER_SETTINGS_RESET_ALL_PENDING"
                })
            }

            function D() {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM"
                })
            }

            function G(e) {
                r.default.dispatch({
                    type: "USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT",
                    disable: e
                })
            }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                o = n("884691"),
                l = n("414456"),
                r = n.n(l),
                a = n("77078"),
                i = n("782340"),
                u = n("347129");
            class d extends o.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: l,
                        error: d,
                        isLoading: E,
                        maxLength: _,
                        transitionState: c,
                        helpMessage: T,
                        retryPrompt: S,
                        retrySuccessMessage: C
                    } = this.props, {
                        code: N,
                        errorMessage: f,
                        retrySuccess: A
                    } = this.state, I = o.Children.count(l) > 0 ? (0, s.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: u.card,
                        children: (0, s.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: l
                        })
                    }) : null, R = null != S ? (0, s.jsxs)(a.Text, {
                        className: r(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, s.jsx)("br", {}), (0, s.jsx)(a.Clickable, {
                            className: r(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, s.jsx)(a.Anchor, {
                                children: S
                            })
                        })]
                    }) : null, h = A ? (0, s.jsx)(a.Card, {
                        type: a.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, s.jsx)(a.Text, {
                            variant: "text-md/normal",
                            children: C
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
                                children: [null != T ? (0, s.jsx)(a.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: T
                                }) : null, I, h, (0, s.jsxs)(a.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, s.jsx)(a.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != _ ? _ : 10,
                                        value: N,
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
                                    disabled: E || 0 === N.length,
                                    children: null != n ? n : i.default.Messages.CONFIRM
                                }), (0, s.jsx)(a.Button, {
                                    onClick: this.handleCancel,
                                    disabled: E,
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
            var E = d
        },
        893044: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            }), n("222007");
            var s = n("37983"),
                o = n("884691"),
                l = n("446674"),
                r = n("77078"),
                a = n("599417"),
                i = n("734990"),
                u = n("790618"),
                d = n("258078"),
                E = n("782340"),
                _ = n("679012");

            function c(e) {
                var t;
                let {
                    isSlideReady: n,
                    error: c,
                    setEmailToken: T,
                    setError: S,
                    onNext: C,
                    onClose: N
                } = e, [f, A] = o.useState(!1), [I, R] = o.useState(""), [h, p] = o.useState(!1), U = (0, l.useStateFromStores)([u.default], () => u.default.getErrors()), O = o.useRef(null);
                o.useEffect(() => {
                    if (n) {
                        var e;
                        null === (e = O.current) || void 0 === e || e.focus()
                    }
                }, [n]);
                let m = async e => {
                    e.preventDefault(), S(null), A(!0);
                    try {
                        let {
                            token: e
                        } = await (0, i.confirmEmailChange)(I);
                        T(e), C()
                    } catch (t) {
                        let e = new a.default(t);
                        S(e.getAnyErrorMessage())
                    } finally {
                        A(!1)
                    }
                }, v = async () => {
                    if (!h) {
                        p(!0);
                        try {
                            await (0, i.sendConfirmationCode)(!0), (0, r.showToast)((0, r.createToast)(E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT, r.ToastType.SUCCESS))
                        } catch (n) {
                            let e = new a.default(n),
                                t = e.getAnyErrorMessage();
                            null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
                        } finally {
                            p(!1)
                        }
                    }
                };
                return (0, s.jsxs)("form", {
                    onSubmit: m,
                    children: [(0, s.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: _.header,
                        children: [(0, s.jsx)(d.default, {
                            color: d.default.Colors.HEADER_PRIMARY,
                            size: d.default.Sizes.SIZE_24,
                            className: _.title,
                            children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_TITLE_DESKTOP
                        }), (0, s.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: _.subtitle,
                            children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_SUBTITLE
                        }), (0, s.jsx)(r.ModalCloseButton, {
                            onClick: N,
                            className: _.modalCloseButton
                        })]
                    }), (0, s.jsxs)(r.ModalContent, {
                        className: _.content,
                        children: [(0, s.jsx)(r.FormItem, {
                            title: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_PROMPT,
                            error: null != c ? c : null == U ? void 0 : null === (t = U.email_token) || void 0 === t ? void 0 : t[0],
                            children: (0, s.jsx)(r.TextInput, {
                                value: I,
                                onChange: R,
                                inputRef: O
                            })
                        }), (0, s.jsx)(r.Text, {
                            className: _.help,
                            variant: "text-sm/normal",
                            children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_RESEND.format({
                                onResend: v
                            })
                        })]
                    }), (0, s.jsx)(r.ModalFooter, {
                        children: (0, s.jsx)(r.Button, {
                            type: "submit",
                            color: r.Button.Colors.BRAND,
                            size: r.Button.Sizes.MEDIUM,
                            submitting: f,
                            children: E.default.Messages.NEXT
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
            }), n("222007");
            var s = n("37983"),
                o = n("884691"),
                l = n("446674"),
                r = n("77078"),
                a = n("599417"),
                i = n("734990"),
                u = n("697218"),
                d = n("258078"),
                E = n("782340"),
                _ = n("679012");

            function c(e) {
                let {
                    onNext: t,
                    onClose: n
                } = e, [c, T] = o.useState(!1), S = (0, l.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = async e => {
                    e.preventDefault(), T(!0);
                    try {
                        await (0, i.sendConfirmationCode)(), t()
                    } catch (n) {
                        let e = new a.default(n),
                            t = e.getAnyErrorMessage();
                        null != t && (0, r.showToast)((0, r.createToast)(t, r.ToastType.FAILURE))
                    } finally {
                        T(!1)
                    }
                };
                return (0, s.jsxs)("form", {
                    onSubmit: C,
                    children: [(0, s.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: _.confirmStartHeader,
                        children: [(0, s.jsx)(d.default, {
                            color: d.default.Colors.HEADER_PRIMARY,
                            size: d.default.Sizes.SIZE_24,
                            className: _.title,
                            children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_TITLE
                        }), (0, s.jsx)(r.Text, {
                            className: _.description,
                            variant: "text-md/normal",
                            children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_DESCRIPTION_NO_LINK.format({
                                oldEmail: null == S ? void 0 : S.email
                            })
                        }), (0, s.jsx)(r.ModalCloseButton, {
                            onClick: n,
                            className: _.modalCloseButton
                        })]
                    }), (0, s.jsx)(r.ModalContent, {
                        className: _.content,
                        children: (0, s.jsxs)("div", {
                            className: _.buttons,
                            children: [(0, s.jsx)(r.Button, {
                                type: "submit",
                                color: r.Button.Colors.BRAND,
                                size: r.Button.Sizes.MEDIUM,
                                submitting: c,
                                className: _.submit,
                                children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_SEND_BUTTON
                            }), (0, s.jsx)(r.Button, {
                                className: _.cancel,
                                look: r.Button.Looks.LINK,
                                color: r.Button.Colors.PRIMARY,
                                onClick: n,
                                children: E.default.Messages.CANCEL
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
                    return C
                }
            }), n("222007");
            var s = n("37983"),
                o = n("884691"),
                l = n("759843"),
                r = n("446674"),
                a = n("77078"),
                i = n("152584"),
                u = n("697218"),
                d = n("893044"),
                E = n("509943"),
                _ = n("457818"),
                c = n("397336"),
                T = n("679012"),
                S = n("92693");

            function C(e) {
                var t;
                let {
                    transitionState: n,
                    onClose: C
                } = e, N = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), f = o.useRef(null !== (t = null == N ? void 0 : N.verified) && void 0 !== t && t);
                o.useEffect(() => () => (0, i.accountDetailsClose)(), []);
                let A = null == N ? void 0 : N.verified,
                    I = A ? c.ChangeEmailSteps.CONFIRM_START : c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                    [R, h] = o.useState(I),
                    [p, U] = o.useState(null),
                    [O, m] = o.useState(null),
                    [v, g] = o.useState(null),
                    M = {
                        impression_group: l.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
                    };
                return (0, s.jsxs)(a.ModalRoot, {
                    transitionState: n,
                    disableTrack: !0,
                    children: [R === c.ChangeEmailSteps.CONFIRM_START ? (0, s.jsx)("img", {
                        alt: "",
                        className: T.headerImage,
                        src: S
                    }) : null, (0, s.jsxs)(a.Slides, {
                        activeSlide: R,
                        width: 440,
                        onSlideReady: e => U(e),
                        children: [(0, s.jsx)(a.Slide, {
                            id: c.ChangeEmailSteps.CONFIRM_START,
                            impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
                            impressionProperties: M,
                            children: (0, s.jsx)(E.default, {
                                onNext: () => h(c.ChangeEmailSteps.CONFIRM_CODE),
                                onClose: C
                            })
                        }), (0, s.jsx)(a.Slide, {
                            id: c.ChangeEmailSteps.CONFIRM_CODE,
                            impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
                            impressionProperties: M,
                            children: (0, s.jsx)(d.default, {
                                error: v,
                                setError: g,
                                setEmailToken: m,
                                isSlideReady: p === c.ChangeEmailSteps.CONFIRM_CODE,
                                onNext: () => h(c.ChangeEmailSteps.EMAIL_AND_PASSWORD),
                                onClose: C
                            })
                        }), (0, s.jsx)(a.Slide, {
                            id: c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                            impressionName: l.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
                            impressionProperties: {
                                ...M,
                                email_verified: f.current
                            },
                            children: (0, s.jsx)(_.default, {
                                emailToken: O,
                                isSlideReady: p === c.ChangeEmailSteps.EMAIL_AND_PASSWORD,
                                onBack: A ? () => h(c.ChangeEmailSteps.CONFIRM_CODE) : null,
                                onClose: C
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
            }), n("222007");
            var s = n("37983"),
                o = n("884691"),
                l = n("446674"),
                r = n("77078"),
                a = n("152584"),
                i = n("790618"),
                u = n("258078"),
                d = n("648661"),
                E = n("782340"),
                _ = n("679012");

            function c(e) {
                var t, n;
                let {
                    emailToken: c,
                    isSlideReady: T,
                    onClose: S,
                    onBack: C
                } = e, [N, f] = o.useState(""), [A, I] = o.useState(""), [R, h] = o.useState(!1), p = (0, l.useStateFromStores)([i.default], () => i.default.getErrors()), U = o.useRef(null);
                async function O(e) {
                    e.preventDefault(), h(!0);
                    let t = await (0, a.saveAccountChanges)({
                        email: N,
                        emailToken: c,
                        password: A
                    });
                    if (h(!1), null == t ? void 0 : t.ok) S();
                    else {
                        var n, s;
                        (null == t ? void 0 : null === (n = t.body) || void 0 === n ? void 0 : n.username) != null ? (0, d.showInvalidUsernameToast)() : (null == t ? void 0 : null === (s = t.body) || void 0 === s ? void 0 : s.email_token) != null && (null == C || C())
                    }
                }
                return o.useEffect(() => {
                    if (T) {
                        var e;
                        null === (e = U.current) || void 0 === e || e.focus()
                    }
                }, [T]), (0, s.jsxs)("form", {
                    onSubmit: O,
                    children: [(0, s.jsxs)(r.ModalHeader, {
                        separator: !1,
                        className: _.header,
                        children: [(0, s.jsx)(u.default, {
                            color: u.default.Colors.HEADER_PRIMARY,
                            size: u.default.Sizes.SIZE_24,
                            className: _.title,
                            children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_TITLE_DESKTOP
                        }), (0, s.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-md/normal",
                            className: _.subtitle,
                            children: E.default.Messages.USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_PROMPT_DESKTOP
                        }), (0, s.jsx)(r.ModalCloseButton, {
                            onClick: S,
                            className: _.modalCloseButton
                        })]
                    }), (0, s.jsxs)(r.ModalContent, {
                        className: _.content,
                        children: [(0, s.jsx)(r.FormItem, {
                            title: E.default.Messages.EMAIL,
                            error: null == p ? void 0 : null === (t = p.email) || void 0 === t ? void 0 : t[0],
                            children: (0, s.jsx)(r.TextInput, {
                                type: "email",
                                value: N,
                                onChange: f,
                                inputRef: U
                            })
                        }), (0, s.jsx)(r.FormItem, {
                            className: _.password,
                            title: E.default.Messages.USER_SETTINGS_LABEL_CURRENT_PASSWORD,
                            error: null == p ? void 0 : null === (n = p.password) || void 0 === n ? void 0 : n[0],
                            children: (0, s.jsx)(r.TextInput, {
                                type: "password",
                                value: A,
                                onChange: I
                            })
                        })]
                    }), (0, s.jsxs)(r.ModalFooter, {
                        children: [(0, s.jsx)(r.Button, {
                            type: "submit",
                            color: r.Button.Colors.BRAND,
                            size: r.Button.Sizes.MEDIUM,
                            submitting: R,
                            children: E.default.Messages.DONE
                        }), null != C ? (0, s.jsx)(r.Button, {
                            className: _.cancel,
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: C,
                            children: E.default.Messages.BACK
                        }) : (0, s.jsx)(r.Button, {
                            className: _.cancel,
                            look: r.Button.Looks.LINK,
                            color: r.Button.Colors.PRIMARY,
                            onClick: S,
                            children: E.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        648661: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showInvalidUsernameToast: function() {
                    return l
                }
            });
            var s = n("77078"),
                o = n("782340");

            function l() {
                (0, s.showToast)((0, s.createToast)(o.default.Messages.USER_SETTINGS_UPDATE_FAILURE, s.ToastType.FAILURE))
            }
        },
        734990: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                sendConfirmationCode: function() {
                    return r
                },
                confirmEmailChange: function() {
                    return a
                }
            });
            var s = n("759843"),
                o = n("840707"),
                l = n("49111");

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return o.default.put({
                    url: l.Endpoints.USER_EMAIL,
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
                    url: l.Endpoints.USER_EMAIL_VERIFY_CODE,
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
            let s, o, l, r, a, i, u, d, E, _, c, T, S, C;
            n.r(t), n.d(t, {
                default: function() {
                    return G
                }
            });
            var N = n("265586"),
                f = n("446674"),
                A = n("913144"),
                I = n("49111");
            let R = I.FormStates.CLOSED,
                h = {},
                p = !1;

            function U() {
                R = I.FormStates.OPEN, h = {}
            }

            function O() {
                R = I.FormStates.CLOSED, h = {}
            }

            function m() {
                v(), g(), h = {}
            }

            function v() {
                s = void 0, o = void 0, l = void 0, r = void 0
            }

            function g() {
                a = void 0, i = void 0, u = void 0, d = void 0, E = void 0, r = void 0
            }

            function M() {
                c = void 0, T = void 0, S = void 0, C = void 0, _ = void 0
            }
            class D extends f.default.Store {
                getFormState() {
                    return R
                }
                getErrors() {
                    return h
                }
                showNotice() {
                    return void 0 !== s || void 0 !== a || void 0 !== i || void 0 !== u || void 0 !== d || void 0 !== E || void 0 !== l || void 0 !== r || void 0 !== o
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
                    return E
                }
                getPendingAvatarDecoration() {
                    return l
                }
                getPendingProfileEffectID() {
                    return r
                }
                getAllPending() {
                    return {
                        pendingAvatar: s,
                        pendingBanner: a,
                        pendingBio: i,
                        pendingPronouns: u,
                        pendingAccentColor: d,
                        pendingThemeColors: E,
                        pendingAvatarDecoration: l,
                        pendingProfileEffectID: r,
                        pendingGlobalName: o
                    }
                }
                getTryItOutThemeColors() {
                    return _
                }
                getTryItOutAvatar() {
                    return c
                }
                getTryItOutAvatarDecoration() {
                    return T
                }
                getTryItOutProfileEffectID() {
                    return S
                }
                getTryItOutBanner() {
                    return C
                }
                getAllTryItOut() {
                    return {
                        tryItOutThemeColors: _,
                        tryItOutAvatar: c,
                        tryItOutAvatarDecoration: T,
                        tryItOutProfileEffectID: S,
                        tryItOutBanner: C
                    }
                }
                getIsDisableSubmit() {
                    return p
                }
            }
            D.displayName = "UserSettingsAccountStore";
            var G = new D(A.default, {
                USER_SETTINGS_ACCOUNT_INIT: U,
                USER_SETTINGS_MODAL_INIT: U,
                USER_SETTINGS_ACCOUNT_SUBMIT_SUCCESS: U,
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    let {
                        section: t
                    } = e;
                    return t === I.UserSettingsSections.ACCOUNT && U()
                },
                USER_SETTINGS_ACCOUNT_CLOSE: O,
                USER_SETTINGS_ACCOUNT_RESET_AND_CLOSE_FORM: function() {
                    m(), M(), O()
                },
                USER_SETTINGS_ACCOUNT_SUBMIT: function() {
                    R = I.FormStates.SUBMITTING, h = {}
                },
                USER_SETTINGS_ACCOUNT_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (R !== I.FormStates.SUBMITTING) return !1;
                    R = I.FormStates.OPEN, h = null !== (t = e.errors) && void 0 !== t ? t : {}
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
                    l = t
                },
                USER_SETTINGS_ACCOUNT_SET_SINGLE_TRY_IT_OUT_COLLECTIBLES_ITEM: function(e) {
                    let {
                        item: t
                    } = e;
                    (null == t ? void 0 : t.type) === N.CollectiblesItemType.PROFILE_EFFECT ? (T = null, S = null == t ? void 0 : t.id) : (S = null, T = t)
                },
                USER_SETTINGS_ACCOUNT_SET_PENDING_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectID: t
                    } = e;
                    r = t
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
                    E = t
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
                    T = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_PROFILE_EFFECT_ID: function(e) {
                    let {
                        profileEffectID: t
                    } = e;
                    S = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_BANNER: function(e) {
                    let {
                        banner: t
                    } = e;
                    C = t
                },
                USER_SETTINGS_ACCOUNT_SET_TRY_IT_OUT_THEME_COLORS: function(e) {
                    let {
                        themeColors: t
                    } = e;
                    _ = t
                },
                USER_SETTINGS_CLEAR_ERRORS: function() {
                    h = {}
                },
                USER_SETTINGS_RESET_PENDING_ACCOUNT_CHANGES: v,
                USER_SETTINGS_RESET_PENDING_PROFILE_CHANGES: g,
                USER_SETTINGS_RESET_ALL_PENDING: m,
                USER_SETTINGS_RESET_ALL_TRY_IT_OUT: M,
                USER_SETTINGS_RESET_PENDING_AVATAR_DECORATION: function() {
                    l = void 0
                },
                LOGOUT: function() {
                    s = void 0
                },
                USER_SETTINGS_ACCOUNT_SET_DISABLE_SUBMIT: function(e) {
                    let {
                        disable: t
                    } = e;
                    p = t
                }
            })
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return l
                }
            });
            var s = n("917351"),
                o = n.n(s);
            let l = e => "function" == typeof e ? e() : e;
            o.curry((e, t, n) => l(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let s, o;
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("70102");
            var l = n("697218"),
                r = n("615931");
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
                    reject: l,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: i
                    } = {}
                } = e;
                if (null == s) {
                    null == i || i();
                    return
                }
                let d = s(T, E, r);

                function E() {
                    null == i || i()
                }

                function _(e) {
                    o(d), n(e)
                }

                function c(e) {
                    o(d), l(e)
                }

                function T(e) {
                    return a(d, T, E, {
                        ...r,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: _,
                        reject: c,
                        code: e,
                        mfaCodeHandler: S,
                        isModalOpen: !0
                    })
                }

                function S(e) {
                    let {
                        res: t
                    } = e;
                    a(d, T, E, {
                        ...r,
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
                    mfaCodeHandler: l = i,
                    isModalOpen: r = !1,
                    ...a
                } = e;
                return t(null != o ? {
                    code: o
                } : {}).then(n, e => {
                    var o, i;
                    if (o = e, i = r, o.body && 60008 === o.body.code || i && 429 === o.status) return l({
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
                    checkEnabled: o = null !== (s = null === (n = l.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== s && s,
                    ...a
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, r.resolveThunk)(o) ? i : u)({
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
            var s = n("37983");
            n("884691");
            var o = n("551042"),
                l = n("920636");
            let r = (e, t, n) => function(o) {
                return (0, s.jsx)(l.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...o
                })
            };

            function a(e, t, n) {
                return (0, o.openModal)(r(e, t, n), {
                    onCloseCallback: t
                })
            }

            function i(e, t, n, s) {
                return (0, o.updateModal)(e, r(t, n, s))
            }
        },
        265586: function(e, t, n) {
            "use strict";
            var s, o;
            n.r(t), n.d(t, {
                CollectiblesItemType: function() {
                    return s
                }
            }), (o = s || (s = {}))[o.AVATAR_DECORATION = 0] = "AVATAR_DECORATION", o[o.PROFILE_EFFECT = 1] = "PROFILE_EFFECT"
        }
    }
]);