(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["74613"], {
        583227: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var r = s("37983"),
                n = s("884691"),
                a = s("77078"),
                i = s("782340"),
                o = s("579993");
            class l extends n.PureComponent {
                render() {
                    let {
                        title: e,
                        actionText: t,
                        children: s,
                        transitionState: l
                    } = this.props, {
                        error: u,
                        isLoading: d,
                        value: E
                    } = this.state, c = n.Children.count(s) > 0 ? (0, r.jsx)(a.Card, {
                        type: a.Card.Types.WARNING,
                        className: o.card,
                        children: (0, r.jsx)(a.Text, {
                            className: o.warning,
                            variant: "text-md/normal",
                            children: s
                        })
                    }) : null;
                    return (0, r.jsx)(a.ModalRoot, {
                        transitionState: l,
                        children: (0, r.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, r.jsx)(a.ModalHeader, {
                                separator: !1,
                                children: (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: e
                                })
                            }), (0, r.jsxs)(a.ModalContent, {
                                children: [c, (0, r.jsxs)(a.FormItem, {
                                    title: i.default.Messages.FORM_LABEL_PASSWORD,
                                    className: o.spacing,
                                    children: [(0, r.jsx)(a.TextInput, {
                                        type: "password",
                                        autoComplete: "off",
                                        autoFocus: !0,
                                        value: E,
                                        onChange: this.handlePasswordChange
                                    }), null != u && "" !== u ? (0, r.jsxs)(a.Text, {
                                        variant: "text-xs/normal",
                                        color: "text-danger",
                                        className: o.error,
                                        children: [" ", u, " "]
                                    }) : null]
                                })]
                            }), (0, r.jsxs)(a.ModalFooter, {
                                children: [(0, r.jsx)(a.Button, {
                                    type: "submit",
                                    disabled: d || 0 === E.length,
                                    children: null != t ? t : i.default.Messages.CONFIRM
                                }), (0, r.jsx)(a.Button, {
                                    onClick: this.handleCancel,
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
                        value: "",
                        error: null,
                        isLoading: !1
                    }, this.handleSubmit = e => {
                        e.preventDefault();
                        let {
                            value: t
                        } = this.state, {
                            handleSubmit: s,
                            onClose: r,
                            onError: n
                        } = this.props;
                        this.setState({
                            isLoading: !0
                        }), s(t).then(e => r(null != e ? e : void 0), e => {
                            if (null != e.body) null == n || n(e.body), !this.shouldSkipErrorMsgRender(e.body) && (e.body.password ? this.setState({
                                error: e.body.password,
                                isLoading: !1
                            }) : e.body.message && this.setState({
                                error: e.body.message,
                                isLoading: !1
                            }))
                        }).finally(() => this.setState({
                            isLoading: !1
                        }))
                    }, this.shouldSkipErrorMsgRender = e => {
                        let {
                            skipErrorMsgAbortCode: t
                        } = this.props;
                        return null != t && (null == e ? void 0 : e.code) === t
                    }, this.handleCancel = () => {
                        let {
                            onClose: e
                        } = this.props;
                        e()
                    }, this.handlePasswordChange = e => {
                        let {
                            onPasswordChange: t
                        } = this.props;
                        null == t || t(e), this.setState({
                            value: e
                        })
                    }
                }
            }
            l.key = () => "password-confirm-modal";
            var u = l
        },
        189613: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return p
                }
            });
            var r = s("37983"),
                n = s("884691"),
                a = s("414456"),
                i = s.n(a),
                o = s("448105"),
                l = s.n(o),
                u = s("917351"),
                d = s.n(u),
                E = s("592861"),
                c = s("77078"),
                R = s("988415"),
                I = s("145131"),
                h = s("782340"),
                f = s("803853"),
                _ = s("212029");
            class p extends n.PureComponent {
                renderItems() {
                    let {
                        query: e
                    } = this.state, t = E.default.flatMap((e, t) => {
                        let {
                            alpha2: s,
                            phoneCountryCodes: n,
                            name: a
                        } = e, i = (0, R.getI18NCountryName)(s);
                        return n.map(e => ({
                            key: "".concat(t, "-").concat(e),
                            name: a,
                            translatedName: i,
                            countryData: {
                                name: a,
                                alpha2: s,
                                code: e
                            },
                            children: (0, r.jsxs)(I.default, {
                                className: f.countryItem,
                                justify: I.default.Justify.CENTER,
                                align: I.default.Align.CENTER,
                                children: [(0, r.jsx)(I.default.Child, {
                                    className: f.countryName,
                                    children: i
                                }), (0, r.jsx)(I.default.Child, {
                                    className: f.countryCode,
                                    grow: 0,
                                    shrink: 0,
                                    children: e
                                })]
                            })
                        }))
                    }), s = d(t).filter(t => 0 === e.length || l(e.toLowerCase(), t.name.toLowerCase()) || l(e.toLowerCase(), t.translatedName.toLowerCase())).map(e => (0, n.createElement)(c.PopoutList.Item, {
                        ...e,
                        key: e.key,
                        onClick: () => this.onClick(e.countryData)
                    })).value();
                    return 0 === s.length ? (0, r.jsx)(c.PopoutList.Empty, {
                        children: h.default.Messages.NONE
                    }) : (0, r.jsx)(c.ScrollerAuto, {
                        className: f.phoneFieldScroller,
                        children: s
                    })
                }
                render() {
                    let {
                        className: e
                    } = this.props;
                    return (0, r.jsxs)(c.PopoutList, {
                        className: i(f.phoneFieldPopout, _.elevationBorderLow, e),
                        children: [(0, r.jsx)(c.PopoutList.SearchBar, {
                            query: this.state.query,
                            placeholder: h.default.Messages.SEARCH_COUNTRY,
                            onChange: this.onChangeQuery,
                            onClear: this.onClearQuery,
                            autoComplete: "off"
                        }), (0, r.jsx)(c.PopoutList.Divider, {}), this.renderItems()]
                    })
                }
                constructor(e) {
                    super(e), this.onChangeQuery = e => {
                        this.setState({
                            query: e
                        })
                    }, this.onClearQuery = () => {
                        this.setState({
                            query: ""
                        })
                    }, this.onClick = e => {
                        var t, s;
                        null === (t = (s = this.props).onClick) || void 0 === t || t.call(s, e)
                    }, this.state = {
                        query: ""
                    }
                }
            }
        },
        892313: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return R
                }
            });
            var r = s("917351"),
                n = s.n(r),
                a = s("49111"),
                i = s("782340");
            let {
                CAPTCHA: o,
                EMAIL: l,
                PHONE: u,
                REVERIFY_EMAIL: d,
                REVERIFY_PHONE: E
            } = a.VerificationTypes, c = {
                [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL]: [l],
                [a.UserRequiredActions.REQUIRE_VERIFIED_PHONE]: [u],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL]: [d],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE]: [E],
                [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [l, u],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [u, d],
                [a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [l, E],
                [a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [d, E],
                [a.UserRequiredActions.REQUIRE_CAPTCHA]: [o],
                [a.UserRequiredActions.AGREEMENTS]: []
            };
            var R = {
                isPhoneReverification: (e, t) => void 0 !== e && e.isPhoneVerified() && (t === a.UserRequiredActions.REQUIRE_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || t === a.UserRequiredActions.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
                isEmailReverification: e => e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE || e === a.UserRequiredActions.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
                getVerificationTypes: e => null == e || "symbol" == typeof e ? [] : c[e],
                getButtonTitle(e) {
                    switch (e) {
                        case a.VerificationTypes.EMAIL:
                            return i.default.Messages.VERIFY_BY_EMAIL;
                        case a.VerificationTypes.PHONE:
                            return i.default.Messages.START_PHONE_VERIFICATION_BUTTON;
                        case a.VerificationTypes.REVERIFY_EMAIL:
                            return i.default.Messages.START_EMAIL_REVERIFICATION_BUTTON;
                        case a.VerificationTypes.REVERIFY_PHONE:
                            return i.default.Messages.START_PHONE_REVERIFICATION_BUTTON;
                        default:
                            return i.default.Messages.START_VERIFICATION_BUTTON
                    }
                },
                areVerificationTypesEqual: (e, t) => n.isEqual(e, t)
            }
        },
        601745: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var r = s("37983"),
                n = s("884691"),
                a = s("446674"),
                i = s("583227"),
                o = s("599417"),
                l = s("878720"),
                u = s("330387"),
                d = s("697218"),
                E = s("419522"),
                c = s("892313"),
                R = s("782340"),
                I = n.forwardRef(function(e, t) {
                    let {
                        onAddedPhone: s,
                        onClose: I,
                        transitionState: h,
                        reason: f
                    } = e, _ = (0, a.useStateFromStores)([d.default], () => d.default.getCurrentUser()), p = (0, a.useStateFromStores)([u.default], () => u.default.getAction()), [A, C] = n.useState(null), [N, y] = n.useState(null), [g, m] = n.useState(null), [T, P] = n.useState(!1), S = n.useCallback(async e => {
                        P(!0);
                        try {
                            c.default.isPhoneReverification(_, p) ? await l.default.beginReverifyPhone(e, f) : await l.default.beginAddPhone(e, f), m(null), C(e)
                        } catch (e) {
                            m(new o.default(e))
                        }
                        P(!1)
                    }, [_, f, p]), U = n.useCallback(async e => {
                        if (null != A && null != _) {
                            P(!0);
                            try {
                                let {
                                    token: t
                                } = await l.default.verifyPhone(A, e);
                                m(null), y(t)
                            } catch (e) {
                                m(new o.default(e))
                            }
                            P(!1)
                        }
                    }, [_, A]), O = n.useCallback(async e => {
                        null != N && (c.default.isPhoneReverification(_, p) ? await l.default.reverifyPhone(N, e, f) : await l.default.addPhone(N, e, f), null == s || s(), I())
                    }, [s, I, N, f, _, p]);
                    return null != N ? (0, r.jsx)(i.default, {
                        onClose: I,
                        transitionState: h,
                        title: R.default.Messages.USER_SETTINGS_EDIT_ACCOUNT_PASSWORD_LABEL,
                        handleSubmit: O
                    }) : (0, r.jsx)(E.default, {
                        onClose: I,
                        transitionState: h,
                        error: null == g ? void 0 : g.getAnyErrorMessage(),
                        working: T,
                        validPhone: null != A,
                        onAddPhone: S,
                        onVerifyPhone: U
                    })
                })
        },
        330387: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var r = s("446674"),
                n = s("913144");
            let a = null;
            class i extends r.default.Store {
                hasAction() {
                    return null != a
                }
                getAction() {
                    return a
                }
            }

            function o(e) {
                a = e.requiredAction
            }
            i.displayName = "UserRequiredActionStore";
            var l = new i(n.default, {
                CONNECTION_OPEN: o,
                USER_REQUIRED_ACTION_UPDATE: o
            })
        }
    }
]);