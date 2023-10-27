(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["96121"], {
        861435: function(e, t, n) {
            "use strict";
            var l = {
                    childContextTypes: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                a = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    arguments: !0,
                    arity: !0
                },
                i = "function" == typeof Object.getOwnPropertySymbols;
            e.exports = function(e, t, n) {
                if ("string" != typeof t) {
                    var r = Object.getOwnPropertyNames(t);
                    i && (r = r.concat(Object.getOwnPropertySymbols(t)));
                    for (var s = 0; s < r.length; ++s)
                        if (!l[r[s]] && !a[r[s]] && (!n || !n[r[s]])) try {
                            e[r[s]] = t[r[s]]
                        } catch (e) {}
                }
                return e
            }
        },
        962429: function(e, t, n) {
            "use strict";

            function l(e, t) {
                if (e.length !== t.length) return !1;
                for (let n = 0; n < t.length && n < e.length; n++)
                    if (!Object.is(e[n], t[n])) return !1;
                return !0
            }
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            })
        },
        365444: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useForceUpdate: function() {
                    return l.default
                },
                useStableMemo: function() {
                    return a.default
                },
                useLazyValue: function() {
                    return i.default
                }
            });
            var l = n("732427"),
                a = n("866490"),
                i = n("246105")
        },
        732427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("773670");

            function a() {
                let [, e] = (0, l.useState)({});
                return (0, l.useCallback)(() => e({}), [])
            }
        },
        246105: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("773670");
            let a = {};

            function i(e) {
                let t = (0, l.useRef)(a);
                return t.current === a && (t.current = e()), t.current
            }
        },
        866490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("773670"),
                a = n("962429");
            let i = [];

            function r(e, t) {
                let n = (0, l.useRef)(),
                    r = (0, l.useRef)(i);
                return r.current === i ? (n.current = e(), r.current = t) : !(0, a.default)(t, r.current) && (n.current = e(), r.current = t), n.current
            }
        },
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        54239: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                pushLayer: function() {
                    return a
                },
                popLayer: function() {
                    return i
                },
                popAllLayers: function() {
                    return r
                }
            });
            var l = n("913144");

            function a(e) {
                l.default.dispatch({
                    type: "LAYER_PUSH",
                    component: e
                })
            }

            function i() {
                l.default.dispatch({
                    type: "LAYER_POP"
                })
            }

            function r() {
                l.default.dispatch({
                    type: "LAYER_POP_ALL"
                })
            }
        },
        79112: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("990746"),
                a = n("173333"),
                i = n("913144"),
                r = n("211895"),
                s = n("26092"),
                o = n("599110"),
                u = n("315102"),
                c = n("730622"),
                d = n("49111"),
                E = n("191349"),
                _ = n("782340"),
                I = {
                    open() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                                openWithoutBackstack: !1
                            };
                        (0, r.default)(e, t, n)
                    },
                    init: function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 ? arguments[2] : void 0;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_INIT",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    close() {
                        let e = s.default.onClose;
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLOSE"
                        }), null != e && e()
                    },
                    setSection(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SET_SECTION",
                            section: e,
                            subsection: t,
                            ...n
                        })
                    },
                    clearSubsection(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SUBSECTION",
                            forSection: e
                        })
                    },
                    clearScrollPosition(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION",
                            forSection: e
                        })
                    },
                    updateAccount(e) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_UPDATE_ACCOUNT",
                            settings: e
                        })
                    },
                    submitComplete() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_COMPLETE"
                        })
                    },
                    reset() {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_RESET"
                        })
                    },
                    saveAccountChanges(e, t) {
                        i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT"
                        });
                        let {
                            username: n,
                            email: r,
                            emailToken: s,
                            password: I,
                            avatar: T,
                            newPassword: S,
                            discriminator: N
                        } = e, {
                            close: C
                        } = t;
                        return (0, c.default)(e => {
                            let t = {
                                    username: n,
                                    email: r,
                                    email_token: s,
                                    password: I,
                                    avatar: T,
                                    new_password: S,
                                    ...e,
                                    discriminator: null != N && "" !== N ? N : void 0
                                },
                                i = a.default.get(d.DEVICE_TOKEN),
                                o = (0, E.getDevicePushProvider)();
                            null != o && null != i && (t.push_provider = o, t.push_token = i);
                            let u = a.default.get(d.DEVICE_VOIP_TOKEN);
                            return null != E.DEVICE_PUSH_VOIP_PROVIDER && null != u && (t.push_voip_provider = E.DEVICE_PUSH_VOIP_PROVIDER, t.push_voip_token = u), l.default.patch({
                                url: d.Endpoints.ME,
                                oldFormErrors: !0,
                                body: t
                            })
                        }, {
                            checkEnabled: !1,
                            modalProps: {
                                title: _.default.Messages.TWO_FA_CHANGE_ACCOUNT
                            },
                            hooks: {
                                onEarlyClose: () => i.default.dispatch({
                                    type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                                    errors: {}
                                })
                            }
                        }).then(e => {
                            let t = e.body,
                                n = t.token;
                            return o.default.track(d.AnalyticEvents.USER_AVATAR_UPDATED, {
                                animated: (0, u.isAnimatedIconHash)(t.avatar)
                            }), delete t.token, i.default.dispatch({
                                type: "UPDATE_TOKEN",
                                token: n,
                                userId: t.id
                            }), i.default.dispatch({
                                type: "CURRENT_USER_UPDATE",
                                user: t
                            }), null != S && i.default.dispatch({
                                type: "USER_PASSWORD_UPDATE",
                                user: t,
                                newPassword: S
                            }), null != I && null != S && i.default.dispatch({
                                type: "PASSWORD_UPDATED",
                                userId: t.id
                            }), C ? this.close() : this.submitComplete(), e
                        }, e => (i.default.dispatch({
                            type: "USER_SETTINGS_MODAL_SUBMIT_FAILURE",
                            errors: e.body
                        }), e))
                    }
                }
        },
        920636: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                r = n.n(i),
                s = n("77078"),
                o = n("782340"),
                u = n("430230");
            class c extends a.PureComponent {
                render() {
                    var e;
                    let {
                        title: t,
                        actionText: n,
                        children: i,
                        error: c,
                        isLoading: d,
                        maxLength: E,
                        transitionState: _,
                        helpMessage: I,
                        retryPrompt: T,
                        retrySuccessMessage: S
                    } = this.props, {
                        code: N,
                        errorMessage: C,
                        retrySuccess: f
                    } = this.state, A = a.Children.count(i) > 0 ? (0, l.jsx)(s.Card, {
                        type: s.Card.Types.WARNING,
                        className: u.card,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: i
                        })
                    }) : null, R = null != T ? (0, l.jsxs)(s.Text, {
                        className: r(u.submitText, u.spacing),
                        variant: "text-sm/normal",
                        children: [(0, l.jsx)("br", {}), (0, l.jsx)(s.Clickable, {
                            className: r(u.spacing, u.link),
                            onClick: this.handleRetry,
                            children: (0, l.jsx)(s.Anchor, {
                                children: T
                            })
                        })]
                    }) : null, L = f ? (0, l.jsx)(s.Card, {
                        type: s.Card.Types.SUCCESS,
                        className: u.card,
                        children: (0, l.jsx)(s.Text, {
                            variant: "text-md/normal",
                            children: S
                        })
                    }) : null;
                    return (0, l.jsx)(s.ModalRoot, {
                        transitionState: _,
                        children: (0, l.jsxs)("form", {
                            onSubmit: this.handleSubmit,
                            children: [(0, l.jsx)(s.ModalHeader, {
                                separator: !1,
                                children: (0, l.jsx)(s.Heading, {
                                    variant: "heading-lg/semibold",
                                    children: t
                                })
                            }), (0, l.jsxs)(s.ModalContent, {
                                children: [null != I ? (0, l.jsx)(s.Text, {
                                    color: "text-normal",
                                    variant: "text-md/normal",
                                    className: u.spacing,
                                    children: I
                                }) : null, A, L, (0, l.jsxs)(s.FormItem, {
                                    title: this.getLabelText(),
                                    className: u.spacing,
                                    children: [(0, l.jsx)(s.TextInput, {
                                        inputRef: this.setRef,
                                        onChange: this.handleCodeChange,
                                        placeholder: null !== (e = this.getPlaceholder()) && void 0 !== e ? e : void 0,
                                        maxLength: null != E ? E : 10,
                                        value: N,
                                        autoComplete: "one-time-code",
                                        autoFocus: !0
                                    }), this.errorPresent() ? (0, l.jsx)(s.Text, {
                                        color: "text-danger",
                                        variant: "text-xs/normal",
                                        className: u.error,
                                        children: null != c ? c : C
                                    }) : null, R]
                                })]
                            }), (0, l.jsxs)(s.ModalFooter, {
                                children: [(0, l.jsx)(s.Button, {
                                    type: "submit",
                                    disabled: d || 0 === N.length,
                                    children: null != n ? n : o.default.Messages.CONFIRM
                                }), (0, l.jsx)(s.Button, {
                                    onClick: this.handleCancel,
                                    disabled: d,
                                    look: s.Button.Looks.LINK,
                                    color: s.Button.Colors.PRIMARY,
                                    children: o.default.Messages.CANCEL
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
                        return null !== (e = this.props.label) && void 0 !== e ? e : this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL : o.default.Messages.TWO_FA_ENTER_TOKEN_LABEL
                    }, this.getSupportedCodeTypes = () => this.props.disallowBackupCodes ? o.default.Messages.TWO_FA_AUTH_CODE_NO_BACKUP : o.default.Messages.TWO_FA_AUTH_CODE, this.getPlaceholder = () => {
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
            c.defaultProps = {
                btnClass: "",
                isLoading: !1,
                disallowBackupCodes: !1,
                error: null,
                forceNoPlaceholder: !1
            };
            var d = c
        },
        276825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CheckmarkSmallIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M18.707 7.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L10 14.586l7.293-7.293a1 1 0 0 1 1.414 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        31745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CirclePlusIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm0-17a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-4H7a1 1 0 1 1 0-2h4V7a1 1 0 0 1 1-1Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        505088: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleXIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12s4.925 11 11 11Zm4.707-15.707a1 1 0 0 0-1.414 0L12 10.586 8.707 7.293a1 1 0 0 0-1.414 1.414L10.586 12l-3.293 3.293a1 1 0 1 0 1.414 1.414L12 13.414l3.293 3.293a1 1 0 0 0 1.414-1.414L13.414 12l3.293-3.293a1 1 0 0 0 0-1.414Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        772279: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CompassIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM7.739 9.307A2 2 0 0 1 9.307 7.74l7.222-1.445a1 1 0 0 1 1.177 1.177l-1.444 7.222a2 2 0 0 1-1.57 1.569l-7.221 1.444a1 1 0 0 1-1.177-1.177L7.74 9.307ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        907572: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FriendsIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M13 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 5v-.75C3 3.56 3.56 3 4.25 3s1.242.562 1.326 1.248C6.117 8.649 9.462 12 13 12h1a8 8 0 0 1 8 8 2 2 0 0 1-2 2 .21.21 0 0 1-.199-.147c-.289-.885-.841-1.723-1.317-2.31-.15-.184-.423-.056-.394.18l.25 1.996a.25.25 0 0 1-.248.281H9a2 2 0 0 1-2-2v-2.22c0-1.574-.671-3.054-1.53-4.374C3.888 10.969 3 7.888 3 5Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        358917: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                HeadphonesIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 3a9 9 0 0 0-8.945 10h1.862a5 5 0 0 1 4.097 2.133L10.39 17.1a3.104 3.104 0 0 1-.17 3.782c-.821.973-2.279 1.448-3.551.742A10.997 10.997 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 4.143-2.29 7.75-5.67 9.624-1.272.707-2.73.23-3.55-.742a3.104 3.104 0 0 1-.17-3.782l1.377-1.967A5 5 0 0 1 19.082 13h1.862A9 9 0 0 0 12 3Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        696675: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MicrophoneIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        504318: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PencilIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "m13.957 5.457 4.586 4.586a1 1 0 0 0 1.414 0l1.379-1.379a2 2 0 0 0 0-2.828l-3.172-3.172a2 2 0 0 0-2.828 0l-1.379 1.379a1 1 0 0 0 0 1.414ZM2.111 20.156l.727-4.218a3 3 0 0 1 .835-1.611l7.87-7.87a1 1 0 0 1 1.414 0l4.586 4.586a1 1 0 0 1 0 1.414l-7.87 7.87a3 3 0 0 1-1.611.835l-4.218.727a1.5 1.5 0 0 1-1.733-1.733Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        287083: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageIcon: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("912557"),
                i = n("75196");
            let r = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: r = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...o
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, i.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, l.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        fillRule: "evenodd",
                        d: "M19.615 18.25c-.335-.364-.35-.914-.079-1.328a9 9 0 1 0-15.072 0c.27.414.256.964-.079 1.328l-.019.02c-.407.442-1.113.428-1.452-.068A10.949 10.949 0 0 1 1 12C1 5.925 5.925 1 12 1s11 4.925 11 11c0 2.3-.706 4.436-1.914 6.202-.339.496-1.045.51-1.452.068l-.02-.02Zm-2.785-3.017c.428.463 1.176.42 1.454-.145a7 7 0 1 0-12.568 0c.278.565 1.026.608 1.454.145l.054-.06c.304-.329.342-.817.168-1.23a5 5 0 1 1 9.216 0c-.174.413-.136.901.168 1.23l.054.06ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-8.669 8.03c-.252.725.12 1.5.808 1.84A10.955 10.955 0 0 0 12 23c1.745 0 3.395-.406 4.861-1.13.69-.34 1.06-1.115.808-1.84a6.003 6.003 0 0 0-11.338 0Z",
                        clipRule: "evenodd",
                        className: s
                    })
                })
            }
        },
        812204: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            }), (l = a || (a = {})).POPOUT_WINDOW = "popout window", l.OVERLAY = "overlay", l.NOTICE = "notice", l.PREMIUM_UPSELL_TOOLTIP = "premium upsell tooltip", l.BADGE = "badge", l.USER_SETTINGS = "user settings", l.USER_SETTINGS_MENU = "user settings menu", l.ACCOUNT = "account", l.TEXT_AND_IMAGES = "text and images", l.GUILD_SETTINGS = "guild settings", l.OVERVIEW = "overview", l.STICKERS = "stickers", l.VANITY_URL = "vanity url", l.PREMIUM_MARKETING = "premium marketing", l.PREMIUM_MARKETING_PLAN_COMPARISON = "premium marketing plan comparison", l.PREMIUM_PAYMENT_MODAL = "premium payment modal", l.PREMIUM_UPSELL_ALERT = "premium upsell alert", l.PREMIUM_UPSELL_MODAL = "premium upsell modal", l.PREMIUM_SETTINGS = "premium settings", l.PAYMENT_FLOW_TEST_PAGE = "payment flow test page", l.PREMIUM_PAYMENT_ACTION_SHEET = "premium payment action sheet", l.CHANNEL_CALL = "channel call", l.CHANNEL_CALL_CONNECTING_SCREEN = "channel call connecting screen", l.RTC_PANEL = "rtc panel", l.SOUNDBOARD_BUTTON = "soundboard button", l.SOUNDBOARD_POPOUT = "soundboard popout", l.SOUNDBOARD_WHEEL = "soundboard wheel", l.SOUNDBOARD_ACTION_SHEET = "soundboard action sheet", l.GIFT_BUTTON = "gift button", l.EXPRESSION_SUGGESTIONS = "expression suggestions", l.EMOJI_PICKER = "emoji picker", l.STICKER_PICKER = "sticker picker", l.STICKER_POPOUT = "sticker popout", l.PREMIUM_UPSELL = "premium upsell", l.EMPTY_STATE = "empty state", l.SUBSCRIPTION_DETAILS = "subscription details", l.SUBSCRIPTION_HEADER = "subscription header", l.ACCOUNT_CREDIT_BANNER = "account credit banner", l.PREMIUM_UNCANCEL_MODAL = "premium uncancel modal", l.PAST_DUE_ONE_TIME_PAYMENT_METHOD_BANNER = "past due one time payment method banner", l.STREAM_QUALITY_INDICATOR = "stream quality indicator", l.PREMIUM_TIER_0_TRIAL_ENDING_NOTICE = "premium tier 0 trial ending notice", l.PREMIUM_TIER_2_TRIAL_ENDING_NOTICE = "premium tier 2 trial ending notice", l.BOOSTED_GUILD_PERKS_MODAL = "boosted guild perks modal", l.GUILD_BOOSTING_PREMIUM_UPSELL = "guild boosting premium upsell", l.RPC = "rpc", l.BILLING_STANDALONE = "billing standalone", l.GUILD_CHANNEL_LIST = "guild channel list", l.GUILD_CHANNEL_LIST_FOOTER = "guild channel list footer", l.STICKER_MESSAGE = "sticker message", l.CHANNEL_TEXT_AREA = "channel text area", l.HEADER_BAR = "header bar", l.GUILD_ROLE_SUBSCRIPTION_CANCELLATION_MODAL = "guild role subscription cancellation modal", l.GUILD_ROLE_SUBSCRIPTION_PURCHASE_SYSTEM_MESSAGE = "guild role subscription purchase system message", l.GUILD_ROLE_SUBSCRIPTION_EMOJI_PICKER_UPSELL = "guild role subscription emoji picker upsell", l.GUILD_ROLE_SUBSCRIPTION_EMOJI_TEXT_POPOVER_UPSELL = "guild role subscription emoji text popover upsell", l.PREMIUM_SUBSCRIPTION_CANCELLATION_MODAL = "premium subscription cancellation modal", l.APPLICATION_SUBSCRIPTION_CANCELLATION_MODAL = "application subscription cancellation modal", l.PENDING_PLAN_CHANGE_NOTICE = "pending plan change notice", l.SUBSCRIPTION_CANCEL_DOWNGRADE_MODAL = "subscription cancel downgrade modal", l.GUILD_HEADER = "guild header", l.GUILD_BANNER = "guild banner", l.GUILD_BANNER_NOTICE = "guild banner notice", l.GUILD_BOOST_PURCHASE_MODAL = "guild boost purchase modal", l.GUILD_BOOST_CANCELLATION_MODAL = "guild boost cancellation modal", l.GUILD_BOOST_UNCANCELLATION_MODAL = "guild boost uncancellation modal", l.GUILD_BOOSTING_PROGRESS_BAR = "guild boosting progress bar", l.GUILD_BOOSTING_TIER_NONE = "guild boosting tier none", l.GUILD_BOOSTING_TIER_1 = "guild boosting tier 1", l.GUILD_BOOSTING_TIER_2 = "guild boosting tier 2", l.GUILD_BOOSTING_TIER_3 = "guild boosting tier 3", l.GUILD_BOOSTING_UPSELL_BANNER = "guild boosting upsell banner", l.GUILD_BOOSTING_SIDEBAR_DISPLAY = "guild boosting sidebar display", l.GUILDS_LIST = "guilds list", l.ACTIVITY_CHANNEL_SELECTOR = "activity channel selector", l.ACTIVITY_DIRECTORY = "activity directory", l.ACTIVITY_TILE = "activity tile", l.ACTIVITY_UPSELL = "activity upsell", l.ACTIVITY_VOICE_CONTROLS_TOGGLE = "activity voice controls toggle", l.INSTANT_INVITE_MODAL = "instant invite modal", l.IMAGE_CROPPING_MODAL = "image cropping modal", l.GIF_PICKER = "gif picker", l.EXTERNAL_INVITE_LINK_MODAL = "external invite link modal", l.INVITE_MODAL = "invite modal", l.INVITE_EMBED = "invite embed", l.NEW_GUILD_BUTTON = "new guild button", l.CHARACTER_COUNT = "character count", l.DM_CHANNEL = "dm channel", l.GUILD_CHANNEL = "guild channel", l.FORUM_CHANNEL = "forum channel", l.FILE_UPLOAD_POPOUT = "file upload popout", l.EMOJI = "emoji", l.PROFILE = "profile", l.PROFILE_MODAL = "profile modal", l.PROFILE_POPOUT = "profile popout", l.GUILD_PROFILE = "guild profile", l.EDIT_AVATAR = "edit avatar", l.EDIT_BANNER = "edit banner", l.CHAT_INPUT = "chat input", l.CREATE_THREAD = "create thread", l.PREMIUM_PREVIEW_UPSELL_HEADER = "premium preview upsell header", l.PREMIUM_UPSELL_OVERLAY = "premium upsell overlay", l.SELECT_IMAGE_MODAL = "select image modal", l.VIDEO_BACKGROUND_OPTIONS = "video background options", l.VIDEO_BACKGROUND_IMAGE_OPTION = "video background image option", l.VIDEO_BACKGROUND_CUSTOM_UPSELL = "video background custom upsell", l.CAMERA_PREVIEW = "camera preview", l.HOME_PAGE_PREMIUM_TAB = "home page premium tab", l.HOME_PAGE_SHOP_TAB = "home page shop tab", l.PREMIUM_MARKETING_SURFACE = "premium marketing surface", l.PREMIUM_MARKETING_HERO_CTA = "premium marketing hero cta", l.PREMIUM_MARKETING_TIER_1_CTA = "premium marketing tier 1 cta", l.PREMIUM_MARKETING_TIER_2_CTA = "premium marketing tier 2 cta", l.PREMIUM_MARKETING_LOCALIZED_PRICING_TIER_2_CTA = "premium marketing localized pricing tier 2 cta", l.PREMIUM_MARKETING_SURFACE_HERO_CTA = "premium marketing surface hero cta", l.PREMIUM_MARKETING_SURFACE_TIER_2_CTA = "premium marketing surface tier 2 cta", l.PREMIUM_MARKETING_SURFACE_TIER_1_CTA = "premium marketing surface tier 1 cta", l.PREMIUM_MARKETING_TIER_CARD = "premium marketing tier card", l.PREMIUM_MARKETING_PERK_CARD = "premium marketing perk card", l.PREMIUM_MARKETING_FEATURE = "premium marketing feature", l.PREMIUM_MARKETING_COMPARISON_TABLE = "premium marketing comparison table", l.PREMIUM_MARKETING_FOOTER = "premium marketing footer", l.PREMIUM_MARKETING_GIFT_SECTION = "premium marketing gift section", l.CHANNEL_CALL_ACTION_BAR = "channel call action bar", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_EMOJI = "aggregate premium upsell modal emoji", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_PROFILE_CUSTOMIZATION = "aggregate premium upsell modal profile customization", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_HD_STREAMING = "aggregate premium upsell modal hd streaming", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_LARGER_FILE_UPLOADS = "aggregate premium upsell modal larger file uploads", l.AGGREGATE_PREMIUM_UPSELL_MODAL_FEATURE_BOGO = "aggregate premium upsell modal bogo", l.CHANNEL_EXPANDED_CONTROLS = "channel expanded controls", l.VOICE_CONTROL_TRAY = "voice control tray", l.ACTIVE_NOW_COLUMN = "active now column", l.CONTEXT_MENU = "context menu", l.CHANNEL_ACTIVITY_FEED_VOICE_MENU = "channel activity feed voice menu", l.CHANNEL_AUDIT_LOG_MENU = "channel audit log menu", l.CHANNEL_CATEGORY_MENU = "channel category menu", l.CHANNEL_LIST_DIRECTORY_CHANNEL_MENU = "channel list menu", l.CHANNEL_LIST_STORE_CHANNEL_MENU = "channel list store channel menu", l.CHANNEL_LIST_TEXT_CHANNEL_MENU = "channel list text channel menu", l.CHANNEL_LIST_THREAD_MENU = "channel list thread menu", l.CHANNEL_LIST_VOICE_CHANNEL_MENU = "channel list voice channel menu", l.CHANNEL_TITLE_MENU = "channel title menu", l.GROUP_DM_MENU = "group dm menu", l.AUDIT_LOG_USER_MENU = "audit log user menu", l.BANNED_USER_MENU = "banned user menu", l.DM_USER_MENU = "dm user menu", l.GROUP_DM_USER_MENU = "group dm user menu", l.GUILD_CHANNEL_USER_MENU = "guild channel user menu", l.GUILD_MODERATION_USER_MENU = "guild moderation user menu", l.GUILD_MODERATION_RAID_MENU = "guild moderation raid menu", l.GUILD_SETTINGS_USER_MENU = "guild settings user menu", l.GUILD_USER_MENU = "guild user menu", l.THREAD_USER_MENU = "thread user menu", l.USER_GENERIC_MENU = "user generic menu", l.USER_PROFILE_ACTIONS_MENU = "user profile actions menu", l.VOICE_ACTION_SHEET = "voice action sheet", l.FOCUSED_VOICE_CONTROLS = "focused voice controls", l.MASKED_LINK = "masked link", l.LAST_NITRO_HOST_ACTION_SHEET = "last nitro host action sheet", l.LAST_NITRO_HOST_LEFT_ACTION_SHEET = "last nitro host left action sheet", l.PREMIUM_TIER_0_ANNOUNCEMENT_ACTION_SHEET = "premium tier 0 announcement action sheet", l.PS_VOICE_CONNECT_UPSELL = "ps voice connect upsell", l.PROFILE_THEME_UPSELL_MODAL = "profile theme upsell modal", l.EDIT_AVATAR_DECORATION_MODAL = "edit avatar decoration modal", l.EDIT_AVATAR_DECORATION_SHEET = "edit avatar decoration sheet", l.EDIT_PROFILE_EFFECT_MODAL = "edit profile effect modal", l.EDIT_PROFILE_EFFECT_ACTION_SHEET = "edit profile effect action sheet", l.ACCOUNT_PROFILE_POPOUT = "account profile popout", l.CHANNEL_CALL_OVERFLOW_ACTION_SHEET = "channel_call_overflow_action_sheet", l.USER_SETTINGS_TRY_OUT_PREMIUM = "user settings try out premium", l.ACTIVITY_COACH_MARK_NITRO = "activity coach mark nitro", l.ACTIVITY_COACH_MARK_BOOSTING = "activity coach mark boosting", l.ACTIVITY_COACH_MARK_HALLOWEEN_2022 = "activity coach mark halloween 2022", l.PREMIUM_TRIAL_TUTORIAL_COACHMARK = "premium trial tutorial coachmark", l.PREMIUM_TRIAL_TUTORIAL_TOOLTIP = "premium trial tutorial tooltip", l.ACTIVITY_COACH_MARK_BASH_OUT = "activity coach mark bash out", l.ACTIVITY_COACH_MARK_POKER = "activity coach mark poker", l.ACTIVITY_COACH_MARK_GARTIC_PHONE = "activity coach mark gartic phone", l.ACTIVITIES_COACH_MARK_GAME_NIGHT = "activities coach mark game night", l.STAGE_VIDEO_LIMIT = "stage video limit", l.ACTIVITIES_MINI_SHELF = "activities mini shelf", l.ACTIVITIES_MINI_SHELF_BANNER = "activities mini shelf banner", l.VC_TILE_ACTIVITY_INVITE = "vc tile activity invite", l.VC_TILE_ACTIVITY_SUGGESTION = "vc tile activity suggestion", l.VC_TILE_ACTIVITY_SHELF_BUTTON = "vc tile activity shelf button", l.BURST_REACTION_TUTORIAL_COACHMARK = "super reaction tutorial coachmark", l.APP_ICON_EDITOR = "app icon editor", l.CLIENT_THEMES_EDITOR = "client themes editor", l.CLIENT_THEMES_THEME_SELECTOR = "client themes theme selector", l.AUTOMOD_PROFILE_QUARANTINE_ALERT = "automod profile quarantine alert", l.SHARE_NITRO_EMBED = "share nitro embed", l.EMBEDDED_ACTIVITY_MESSAGE = "embedded activity message", l.REFERRAL_TRIALS_COMPOSER_BUTTON = "referral trials composer button", l.REFERRAL_TRIALS_POPOUT = "referral trials popout", l.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL = "premium marketing announcement modal", l.PREMIUM_MARKETING_PAGE_BANNER = "premium marketing page banner", l.ACTIVITY_BOOKMARK = "activity bookmark", l.ACTIVITY_BOOKMARK_LAUNCHER = "activity bookmark launcher", l.ACTIVITY_DETAIL_PAGE = "activity detail page", l.ACTIVITIES_PAGE = "activities page", l.ACTIVITIES_PAGE_NOTIFICATION_DOT = "activities page cta", l.ACTIVITIES_PAGE_WHATS_NEW_TILE = "activities page whats new tile", l.VOICE_PANEL_PRE_JOIN = "voice panel pre-join content", l.ACTIVITIES_IM_FEELING_LUCKY = "activities im feeling lucky", l.ACTIVITIES_HAPPENING_NOW = "activities happening now", l.MEDIA_VIEWER = "media viewer", l.MESSAGE_LONG_PRESS_MENU = "message long press menu", l.COLLECTIBLES_SHOP = "collectibles shop", l.COLLECTIBLES_SHOP_CARD = "collectibles shop card", l.COLLECTIBLES_SHOP_CARD_PREVIEW_BUTTON = "collectibles shop card preview button", l.COLLECTIBLES_SHOP_DETAILS_MODAL = "collectibles shop details modal", l.COLLECTIBLES_PROFILE_SETTINGS_UPSELL = "collectibles profile settings upsell", l.COLLECTIBLES_PREMIUM_MARKETING_PAGE_UPSELL = "collectibles premium marketing page upsell", l.COLLECTIBLES_PAYMENT_MODAL = "collectibles payment modal", l.COLLECTIBLES_COLLECTED_MODAL = "collectibles collected modal", l.COLLECTIBLES_USER_POPOUT_UPSELL = "collectibles user popout upsell", l.COLLECTIBLES_ACCOUNT_SWITCH_UPSELL = "collectibles account switch upsell", l.COLLECTIBLES_FEATURE_EDUCATION_TOOLTIP = "collectibles feature education tooltip", l.PREMIUM_BILLING_INFO = "premium billing info", l.PREMIUM_SUBSCRIPTION_DETAILS = "premium subscription details", l.APP_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "application subscription payment source with invoice", l.GUILD_BOOST_SLOT_CANCELLATION_MODAL_CURRENT_INVOICE_PREVIEW = "guild boost slot cancellation modal current invoice preview", l.GUILD_BOOST_SLOT_CANCELLATION_MODAL_RENEWAL_INVOICE_PREVIEW = "guild boost slot cancellation modal renewal invoice preview", l.GUILD_BOOSTING_REVIEW_PRORATED = "guild boosting review prorated", l.GUILD_BOOSTING_REVIEW_RENEWAL = "guild boosting review renewal", l.GUILD_ROLE_SUBSCRIPTION_PAYMENT_SOURCE_WITH_INVOICE = "guild role subscription payment source with invoice", l.PREMIUM_PLAN_SELECT = "premium_plan_select", l.CANCEL_INVOICE_PREVIEW = "cancel_invoice_preview", l.PREMIUM_SUBSCRIPTION_FINE_PRINT_CONTENT = "premium subscription fine print content", l.SUBSCRIPTION_INVOICE_FOOTER = "subscription invoice footer", l.BILLING_SWITCH_PLAN_IMMEDIATE_PRORATED_INVOICE_PREVIEW = "billing switch plan immediate prorated invoice preview", l.BILLING_SWITCH_PLAN_IMMEDIATE_RENEWAL_INVOICE_PREVIEW = "billing switch plan immediate renewal invoice preview", l.GUILD_BOOSTING_PLAN_SELECT = "GUILD_BOOSTING_PLAN_SELECT", l.MEMBER_SAFETY_PAGE = "member safety page", l.GUILD_SETTINGS_MEMBERS_PAGE = "guild settings members page", l.GUILD_MEMBER_MOD_VIEW = "guild member mod view", l.GUILD_PRODUCT_EMBED_CARD = "guild product embed card", l.GUILD_PRODUCT_INFO_MODAL = "guild product info modal", l.GUILD_PRODUCT_PAYMENT_MODAL = "guild product payment modal", l.GUILD_SHOP_PAGE = "guild shop page", l.ACTIVITY_SHELF_ACTIVITY_DETAILS = "activity shelf activty details", l.MESSAGE_REMIX_TAG = "message remix tag", l.MESSAGE_REMIX_BUTTON = "message remix button", l.HAPPENING_NOW_EMBEDDED_ACTIVITY = "happening now embedded activity", l.CLIPS_SETTINGS = "clips settings", l.CLIPS_GALLERY = "clips gallery", l.CLIPS_GALLERY_ITEM = "clips gallery item", l.CLIPS_EDITOR = "clips editor", l.CLIPS_SHARE_MODAL = "clips share modal", l.CHANNEL_ATTACH_BUTTON = "channel attach button", l.PREMIUM_TRIAL_OFFER_ACTION_SHEET = "premium trial offer action sheet", l.PREMIUM_SUBSCRIBER_NITRO_HOME = "premium subscriber nitro home", l.CLYDE_PROFILE_SHARE_MODAL = "clyde profile share modal", l.PROFILE_EFFECT_SHOP_COACHMARK = "profile effect shop coachmark", l.ACTIVITY_IN_TEXT_ACTIONBAR = "activity in text actionbar", l.GUILD_EVENT_CARD = "guild event card", l.EVENT_SETTINGS = "event settings";
            var l, a, i = a
        },
        757767: function(e, t, n) {
            "use strict";
            var l, a;
            n.r(t), n.d(t, {
                RecurrenceOptions: function() {
                    return l
                }
            }), (a = l || (l = {}))[a.NONE = 0] = "NONE", a[a.WEEKLY = 1] = "WEEKLY", a[a.MONTHLY = 2] = "MONTHLY", a[a.YEARLY = 3] = "YEARLY", a[a.WEEKDAY_ONLY = 4] = "WEEKDAY_ONLY"
        },
        651072: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("862205");
            let a = (0, l.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = a
        },
        822516: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MAX_DAYS_AHEAD_AN_EVENT_CAN_START: function() {
                    return o
                },
                MAX_DAYS_AHEAD_AN_EVENT_CAN_END: function() {
                    return u
                },
                MAX_YEARS_AHEAD_RECURRING_EVENT: function() {
                    return c
                },
                getInitialEventStartDate: function() {
                    return I
                },
                getEventTimeData: function() {
                    return N
                },
                getScheduleFromEventData: function() {
                    return f
                },
                getScheduleFromEvent: function() {
                    return A
                },
                getRRule: function() {
                    return R
                },
                generateNextRecurrences: function() {
                    return L
                },
                recurrenceOptionToRecurrenceRule: function() {
                    return m
                },
                recurrenceRuleToOption: function() {
                    return p
                }
            });
            var l = n("427964"),
                a = n("377849"),
                i = n.n(a),
                r = n("958587"),
                s = n("757767");
            n("745049");
            let o = 365,
                u = o + 1,
                c = 4,
                d = [r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday],
                E = [r.RRule.SU.weekday, r.RRule.MO.weekday, r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday],
                _ = [r.RRule.TU.weekday, r.RRule.WE.weekday, r.RRule.TH.weekday, r.RRule.FR.weekday, r.RRule.SA.weekday],
                I = () => {
                    let e = i().add(1, "hour"),
                        t = e.hour();
                    return e.minutes() >= 30 && (t += 1), e.hour(t).minutes(0).seconds(0)
                },
                T = (e, t) => e.format(e.get("years") === t.get("years") ? "ddd MMM Do \xb7 LT" : "ddd MMM Do, YYYY \xb7 LT"),
                S = (e, t) => {
                    let n = e.diff(t, "days");
                    return n > 1 ? T(e, t) : e.calendar(t)
                };

            function N(e, t, n) {
                null == n && (n = i());
                let l = i(e),
                    a = null != t && "" !== t ? i(t) : void 0,
                    r = null != t && l.isSame(a, "day");
                return {
                    startDateTimeString: S(l, n),
                    endDateTimeString: null != a ? r ? a.format("LT") : T(a, n) : void 0,
                    currentOrPastEvent: l <= n,
                    upcomingEvent: l <= i().add(1, "hour"),
                    withinStartWindow: l <= i().add(15, "minute"),
                    diffMinutes: l.diff(n, "minutes")
                }
            }

            function C(e, t) {
                let n;
                return null != e && (n = {
                    startDate: i(e),
                    endDate: void 0
                }, null != t && (n.endDate = i(t))), n
            }

            function f(e) {
                return C(e.scheduledStartTime, e.scheduledEndTime)
            }

            function A(e) {
                return C(e.scheduled_start_time, e.scheduled_end_time)
            }

            function R(e) {
                return new r.RRule({
                    dtstart: new Date(e.start),
                    until: null != e.end ? new Date(e.end) : null,
                    freq: e.frequency,
                    interval: e.interval,
                    byweekday: null != e.byWeekday ? [...e.byWeekday] : null,
                    bymonth: null != e.byMonth ? [...e.byMonth] : null,
                    bymonthday: null != e.byMonthDay ? [...e.byMonthDay] : null,
                    byyearday: null != e.byYearDay ? [...e.byYearDay] : null,
                    count: e.count
                })
            }

            function L(e, t, n) {
                let l = [],
                    a = null == n,
                    i = null != n ? n : new Date,
                    r = new Date;
                r.setFullYear(r.getFullYear() + c);
                let s = a ? e + 1 : e;
                for (let e = 0; e < s && i < r; e++) {
                    let n = t.after(i);
                    if (null == n) break;
                    i = new Date(n), n.setMilliseconds(0), (!a || e > 0) && l.push(n)
                }
                return l
            }

            function h(e) {
                let t = new r.Weekday(e.toDate().getDay()),
                    n = new r.Weekday(e.toDate().getUTCDay());
                return n.weekday - t.weekday > 0 ? _ : n.weekday - t.weekday < 0 ? E : d
            }

            function m(e, t) {
                let n = function(e, t) {
                    let n = h(t),
                        l = t.toDate();
                    switch (l.setMilliseconds(0), e) {
                        case s.RecurrenceOptions.NONE:
                            return null;
                        case s.RecurrenceOptions.WEEKLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.WEEKLY
                            });
                        case s.RecurrenceOptions.YEARLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.YEARLY
                            });
                        case s.RecurrenceOptions.WEEKDAY_ONLY:
                            return new r.RRule({
                                dtstart: l,
                                freq: r.RRule.DAILY,
                                byweekday: n
                            })
                    }
                }(e, t);
                if (null == n) return null;
                let {
                    dtstart: l,
                    until: a,
                    freq: i,
                    interval: o,
                    byweekday: u,
                    bymonth: c,
                    bymonthday: d,
                    byyearday: E,
                    count: _
                } = n.options;
                return {
                    start: l.toISOString(),
                    end: null == a ? void 0 : a.toISOString(),
                    frequency: i,
                    interval: o,
                    byWeekday: null != u ? new Set(u) : null,
                    byMonth: null != c ? new Set(c) : null,
                    byMonthDay: null != d ? new Set(d) : null,
                    byYearDay: null != E ? new Set(E) : null,
                    count: _
                }
            }

            function p(e, t) {
                if (null == t) return s.RecurrenceOptions.NONE;
                let n = R(t);
                switch (n.options.freq) {
                    case r.RRule.WEEKLY:
                        return s.RecurrenceOptions.WEEKLY;
                    case r.RRule.YEARLY:
                        return s.RecurrenceOptions.YEARLY;
                    case r.RRule.DAILY:
                        if (!(0, l.isEqual)(n.options.byweekday, h(e))) return s.RecurrenceOptions.NONE;
                        return s.RecurrenceOptions.WEEKDAY_ONLY;
                    default:
                        return s.RecurrenceOptions.NONE
                }
            }
        },
        124163: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("77078"),
                i = n("782340"),
                r = n("906930");

            function s(e) {
                let {
                    sendStartNotification: t,
                    setSendStartNotification: n
                } = e, s = t ? i.default.Messages.GUILD_NOTIFY_MEMBERS_ENABLED_NEW : i.default.Messages.GUILD_NOTIFY_MEMBERS_DISABLED_NEW;
                return (0, l.jsx)("div", {
                    className: r.notificationToggle,
                    children: (0, l.jsx)(a.Checkbox, {
                        type: a.Checkbox.Types.INVERTED,
                        size: 14,
                        className: r.checkbox,
                        value: t,
                        onChange: function() {
                            n(!t)
                        },
                        children: (0, l.jsx)(a.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: (0, l.jsx)(a.Tooltip, {
                                position: "bottom",
                                tooltipClassName: r.tooltip,
                                text: i.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                "aria-label": i.default.Messages.GUILD_NOTIFY_MEMBERS_TOOLTIP_NEW,
                                children: e => (0, l.jsx)("span", {
                                    ...e,
                                    children: s
                                })
                            })
                        })
                    })
                })
            }
        },
        29913: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                r = n("77078"),
                s = n("849467"),
                o = n("782340"),
                u = n("490410");

            function c(e) {
                let {
                    guild: t,
                    speakers: n,
                    speakerCount: a,
                    className: c
                } = e, d = n.slice(0, 5), E = d.map(e => {
                    var n, a;
                    return (0, l.jsxs)("div", {
                        className: u.speakerContainer,
                        children: [(0, l.jsx)(r.Avatar, {
                            src: null == e ? void 0 : null === (n = e.user) || void 0 === n ? void 0 : n.getAvatarURL(t.id, 20),
                            size: r.AvatarSizes.SIZE_20,
                            className: u.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, l.jsx)("div", {
                            className: u.textInGridContainer,
                            children: (0, l.jsx)(r.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: u.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), _ = a - d.length;
                return (0, l.jsxs)("div", {
                    className: i(u.grid, c),
                    children: [E, _ > 0 && (0, l.jsxs)("div", {
                        className: u.speakerContainer,
                        children: [(0, l.jsx)("div", {
                            className: u.iconMicrophone,
                            children: (0, l.jsx)(s.default, {
                                height: 12
                            })
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: u.textInGrid,
                            children: o.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: _
                            })
                        })]
                    })]
                })
            }
        },
        191349: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DEVICE_PUSH_VOIP_PROVIDER: function() {
                    return r
                },
                getDevicePushProvider: function() {
                    return s
                }
            });
            var l, a, i = n("773336");
            let r = null;

            function s() {
                return (0, i.isAndroid)(), null
            }(l = a || (a = {})).REMINDER = "reminder", l.TOP_MESSAGE_PUSH = "top_messages_push", l.TRENDING_CONTENT_PUSH = "trending_content_push"
        },
        887143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useCanSendStageStartNotification: function() {
                    return s
                },
                useDefaultSendStartStageNotificationToggle: function() {
                    return o
                }
            });
            var l = n("498225"),
                a = n("525065"),
                i = n("957255"),
                r = n("809924");

            function s(e) {
                let t = (0, l.useStateFromStores)([i.default], () => null != e && i.default.can(r.Permissions.MENTION_EVERYONE, e), [e]);
                return t
            }

            function o(e) {
                let t = null == e ? void 0 : e.guild_id,
                    n = (0, l.useStateFromStores)([a.default], () => a.default.getMemberCount(t), [t]);
                return null == e || null != n && !(n > 5e4) && !0
            }
        },
        567469: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageParticipants: function() {
                    return s
                },
                useStageParticipantsCount: function() {
                    return o
                },
                useSortedRequestToSpeakParticipants: function() {
                    return u
                },
                useActualStageSpeakerCount: function() {
                    return c
                }
            });
            var l = n("498225"),
                a = n("334572"),
                i = n("488464"),
                r = n("998716");

            function s(e, t) {
                let [n] = (0, l.useStateFromStores)([i.default], () => [i.default.getMutableParticipants(e, t), i.default.getParticipantsVersion(e)], [e, t], a.isVersionEqual);
                return n
            }

            function o(e, t) {
                return (0, l.useStateFromStores)([i.default], () => i.default.getParticipantCount(e, t), [e, t])
            }

            function u(e) {
                let [t] = (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableRequestToSpeakParticipants(e);
                    return [t, i.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], a.isVersionEqual);
                return t
            }

            function c(e) {
                return (0, l.useStateFromStores)([i.default], () => {
                    let t = i.default.getMutableParticipants(e, r.StageChannelParticipantNamedIndex.SPEAKER),
                        n = t.filter(e => e.type === r.StageChannelParticipantTypes.VOICE);
                    return n.length
                }, [e])
            }
        },
        193038: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                r = n("77078"),
                s = n("272339"),
                o = n("361136"),
                u = function(e) {
                    let {
                        count: t,
                        className: n
                    } = e;
                    return (0, l.jsxs)("div", {
                        className: i(o.container, n),
                        children: [(0, l.jsx)(s.default, {
                            width: 12,
                            height: 12,
                            className: o.icon
                        }), (0, l.jsx)(r.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: null != t ? t : 0
                        })]
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("575482"),
                i = n.n(a),
                r = n("782340"),
                s = n("153930"),
                o = n("284434"),
                u = n("315956");

            function c(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: i(s.container, t),
                    children: [(0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: u,
                        className: i(s.sparkleIcon, s.sparkleBottom)
                    }), n, (0, l.jsx)("img", {
                        alt: r.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: o,
                        className: i(s.sparkleIcon, s.sparkleTop)
                    })]
                })
            }
        },
        911457: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                StageDiscoveryRecommendationSource: function() {
                    return a
                },
                default: function() {
                    return S
                }
            });
            var l, a, i = n("920040");
            n("773670");
            var r = n("575482"),
                s = n.n(r),
                o = n("77078"),
                u = n("687521"),
                c = n("29913"),
                d = n("580357"),
                E = n("109024"),
                _ = n("228427"),
                I = n("193038"),
                T = n("793680");

            function S(e) {
                let {
                    guild: t,
                    stageInstance: n,
                    showGuildPopout: l,
                    setShowGuildPopout: r,
                    handleGuildNameClick: S,
                    source: N,
                    speakers: C,
                    speakerCount: f,
                    audienceCount: A,
                    channelName: R
                } = e, L = t.id;
                return (0, i.jsx)("div", {
                    className: T.contentContainer,
                    children: (0, i.jsxs)("div", {
                        className: T.headerContainer,
                        children: [(0, i.jsxs)("div", {
                            className: T.guildInfoContainer,
                            children: [(0, i.jsx)(u.default, {
                                guildId: L,
                                shouldShow: l,
                                onRequestClose: () => r(!1),
                                children: () => (0, i.jsxs)(o.Clickable, {
                                    className: T.flexContainerRow,
                                    onClick: S,
                                    children: [(0, i.jsx)(E.default, {
                                        guild: t,
                                        size: E.default.Sizes.MINI,
                                        className: T.guildIcon
                                    }), (0, i.jsxs)("div", {
                                        className: T.flexContainerRow,
                                        children: [(0, i.jsx)(o.Text, {
                                            color: "header-secondary",
                                            variant: "text-sm/normal",
                                            className: s(T.guildName, {
                                                [T.disabled]: null == S
                                            }),
                                            children: t.name
                                        }), (0, i.jsx)(d.default, {
                                            guild: t
                                        })]
                                    })]
                                })
                            }), (0, i.jsxs)("div", {
                                className: T.rightJustifiedContent,
                                children: [N === a.FEATURED && (0, i.jsx)("div", {
                                    className: T.featuredTag,
                                    children: (0, i.jsx)(o.Text, {
                                        variant: "text-sm/normal",
                                        className: T.featuredTagText,
                                        children: "Featured"
                                    })
                                }), (0, i.jsx)(I.default, {
                                    count: A,
                                    className: T.audienceCount
                                })]
                            })]
                        }), (0, i.jsx)(o.Text, {
                            color: "header-primary",
                            variant: "text-lg/semibold",
                            className: T.topicText,
                            children: n.topic
                        }), (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            className: T.description,
                            variant: "text-sm/normal",
                            children: n.description
                        }), (0, i.jsx)(c.default, {
                            guild: t,
                            speakers: C,
                            speakerCount: f,
                            className: T.speakers
                        }), null != R && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)("hr", {
                                className: T.divider
                            }), (0, i.jsxs)("div", {
                                className: T.footer,
                                children: [(0, i.jsx)(_.default, {
                                    width: 20,
                                    height: 20,
                                    className: T.icon
                                }), (0, i.jsx)(o.Text, {
                                    color: "header-secondary",
                                    className: T.label,
                                    variant: "text-sm/normal",
                                    children: R
                                })]
                            })]
                        })]
                    })
                })
            }(l = a || (a = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.TRENDING = 1] = "TRENDING", l[l.PERSONALIZED = 2] = "PERSONALIZED", l[l.USER_GUILDS = 3] = "USER_GUILDS", l[l.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", l[l.INTRO_CARD = 5] = "INTRO_CARD", l[l.FEATURED = 6] = "FEATURED"
        },
        444594: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("498225"),
                i = n("77078"),
                r = n("697218"),
                s = n("627490"),
                o = n("987772"),
                u = n("564875"),
                c = n("625687"),
                d = n("701909"),
                E = n("387111"),
                _ = n("567469"),
                I = n("998716"),
                T = n("911457"),
                S = n("49111"),
                N = n("745049"),
                C = n("782340"),
                f = n("468263");

            function A(e) {
                let {
                    icon: t
                } = e;
                return (0, l.jsx)("div", {
                    className: f.iconContainer,
                    children: (0, l.jsx)(t, {
                        width: 24,
                        height: 24
                    })
                })
            }

            function R(e) {
                let {
                    icon: t,
                    text: n
                } = e;
                return (0, l.jsxs)("div", {
                    className: f.listItemContainer,
                    children: [(0, l.jsx)("div", {
                        className: f.listItemIconContainer,
                        children: t
                    }), (0, l.jsx)(i.Text, {
                        className: f.listItemText,
                        variant: "text-md/normal",
                        color: "header-secondary",
                        children: n
                    })]
                })
            }

            function L(e) {
                var t;
                let {
                    guild: n,
                    channel: i,
                    stageData: s
                } = e, o = (0, a.useStateFromStores)([r.default], () => r.default.getCurrentUser(), []), u = {
                    id: "1337",
                    guild_id: n.id,
                    channel_id: i.id,
                    topic: s.topic,
                    description: s.description,
                    privacy_level: null !== (t = s.privacyLevel) && void 0 !== t ? t : N.GuildScheduledEventPrivacyLevel.PUBLIC
                }, c = (0, _.useStageParticipants)(i.id, I.StageChannelParticipantNamedIndex.SPEAKER), d = (0, _.useStageParticipantsCount)(i.id, I.StageChannelParticipantNamedIndex.AUDIENCE), S = c.slice(0, 5);
                return null == S.find(e => {
                    var t;
                    return (null === (t = e.user) || void 0 === t ? void 0 : t.id) === (null == o ? void 0 : o.id)
                }) && S.push({
                    user: o,
                    userNick: E.default.getName(n.id, i.id, o)
                }), (0, l.jsx)("div", {
                    className: f.previewCardContainer,
                    children: (0, l.jsx)("div", {
                        className: f.previewCard,
                        children: (0, l.jsx)(T.default, {
                            guild: n,
                            stageInstance: u,
                            showGuildPopout: !1,
                            setShowGuildPopout: () => {},
                            source: T.StageDiscoveryRecommendationSource.UNSPECIFIED,
                            speakers: S,
                            speakerCount: c.length,
                            audienceCount: Math.max(1337, d),
                            channelName: i.name
                        })
                    })
                })
            }

            function h(e) {
                let {
                    guild: t,
                    channel: n,
                    stageData: a,
                    headerId: r,
                    loading: E,
                    onNext: _,
                    onCancel: I,
                    onBack: T
                } = e;
                return null == t || null == n || null == a ? null : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)(L, {
                        guild: t,
                        channel: n,
                        stageData: a
                    }), (0, l.jsxs)(i.ModalContent, {
                        className: f.container,
                        children: [(0, l.jsxs)("div", {
                            className: f.header,
                            children: [(0, l.jsx)(i.Heading, {
                                id: r,
                                className: f.title,
                                variant: "heading-xl/semibold",
                                children: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_TITLE
                            }), (0, l.jsx)(i.Text, {
                                className: f.subtitle,
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SUBTITLE
                            })]
                        }), (0, l.jsxs)("div", {
                            className: f.list,
                            children: [(0, l.jsx)(R, {
                                icon: (0, l.jsx)(A, {
                                    icon: s.default
                                }),
                                text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_ONE
                            }), (0, l.jsx)(R, {
                                icon: (0, l.jsx)(A, {
                                    icon: u.default
                                }),
                                text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_TWO
                            }), (0, l.jsx)(R, {
                                icon: (0, l.jsx)(A, {
                                    icon: o.default
                                }),
                                text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_THREE
                            }), (0, l.jsx)(R, {
                                icon: (0, l.jsx)(c.default, {
                                    className: f.badgeIconBackground,
                                    foreground: f.badgeIconForeground,
                                    width: 40,
                                    height: 40
                                }),
                                text: C.default.Messages.START_STAGE_PUBLIC_PREVIEW_SECTION_FOUR.format({
                                    articleURL: d.default.getArticleURL(S.HelpdeskArticles.STAGE_CHANNEL_GUIDELINES)
                                })
                            })]
                        })]
                    }), (0, l.jsxs)(i.ModalFooter, {
                        children: [(0, l.jsx)(i.Button, {
                            color: i.Button.Colors.GREEN,
                            onClick: _,
                            submitting: E,
                            children: C.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        }), (0, l.jsx)(i.Button, {
                            color: i.Button.Colors.PRIMARY,
                            className: f.cancelButton,
                            onClick: I,
                            children: C.default.Messages.CANCEL
                        }), (0, l.jsx)(i.Button, {
                            look: i.Button.Looks.LINK,
                            color: i.Button.Colors.LINK,
                            className: f.backButton,
                            onClick: T,
                            size: i.Button.Sizes.MIN,
                            children: C.default.Messages.BACK
                        })]
                    })]
                })
            }
        },
        813934: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("377849"),
                r = n.n(i),
                s = n("498225"),
                o = n("77078"),
                u = n("679653"),
                c = n("776863"),
                d = n("822516"),
                E = n("124163"),
                _ = n("953143"),
                I = n("269596"),
                T = n("27618"),
                S = n("697218"),
                N = n("228427"),
                C = n("599110"),
                f = n("887143"),
                A = n("834052"),
                R = n("151642"),
                L = n("29846"),
                h = n("837979"),
                m = n("49111"),
                p = n("745049"),
                O = n("533613"),
                g = n("782340"),
                v = n("465128");

            function M(e) {
                let {
                    stageChannelsInGuild: t,
                    channel: n,
                    onSelectChannel: a
                } = e;
                return null == a ? null : (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(o.FormItem, {
                        title: g.default.Messages.START_STAGE_MODAL_SET_TOPIC_SELECT_LABEL + " asdf",
                        className: v.channelSelectionFormItem,
                        required: !0,
                        children: (0, l.jsx)(o.SearchableSelect, {
                            value: n.id,
                            options: t.map(e => ({
                                value: e.id,
                                label: (0, u.computeChannelName)(e, S.default, T.default, !0)
                            })),
                            onChange: e => {
                                let n = t.find(t => t.id === e);
                                null != n && a(n)
                            },
                            renderOptionPrefix: () => (0, l.jsx)(N.default, {
                                height: 24
                            })
                        })
                    })
                })
            }

            function U(e) {
                var t, n, i, T, S, N;
                let {
                    channel: U,
                    guild: D,
                    header: P,
                    error: x,
                    loading: G,
                    onSave: y,
                    onEventSave: b,
                    onClose: w,
                    onSelectChannel: B,
                    isEvent: j = !1,
                    defaultOptions: V,
                    isSlideReady: k = !0
                } = e, H = a.useMemo(() => A.default.getStageInstanceByChannel(U.id), [U.id]), [F, Y] = a.useState(null !== (n = null !== (t = null == V ? void 0 : V.topic) && void 0 !== t ? t : null == H ? void 0 : H.topic) && void 0 !== n ? n : ""), [W, K] = a.useState(null !== (i = null == V ? void 0 : V.description) && void 0 !== i ? i : ""), [Z] = a.useState(j), [q, X] = a.useState(null !== (T = null == V ? void 0 : V.schedule) && void 0 !== T ? T : {
                    startDate: (0, d.getInitialEventStartDate)()
                }), [z, J] = a.useState(Z && (null == V ? void 0 : V.schedule) != null), Q = (0, f.useCanSendStageStartNotification)(U), $ = (0, f.useDefaultSendStartStageNotificationToggle)(U), ee = null == H && Q && !Z, [et, en] = a.useState(ee && $), el = (0, s.useStateFromStores)([I.default], () => I.default.hasHotspot(O.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), ea = p.GuildScheduledEventPrivacyLevel.GUILD_ONLY, [ei] = a.useState(null !== (N = null !== (S = null == V ? void 0 : V.privacyLevel) && void 0 !== S ? S : null == H ? void 0 : H.privacy_level) && void 0 !== N ? N : ea), [er, es] = a.useState(null == V ? void 0 : V.recurrenceRule), eo = (0, R.useStageBlockedUsersCount)(U.id), [eu, ec] = a.useState(!1), ed = (0, u.default)(U), eE = (0, c.useChannelsUserCanStartStageIn)(D), e_ = null != B, eI = eE.length > 1;
                a.useEffect(() => {
                    C.default.track(m.AnalyticEvents.START_STAGE_OPENED, {
                        stage_instance_id: null == H ? void 0 : H.id,
                        can_start_public_stage: !1,
                        guild_id: U.guild_id
                    })
                }, []);
                let eT = e => {
                        if (e.preventDefault(), ei === p.GuildScheduledEventPrivacyLevel.PUBLIC && F.length < 20 && !eu) {
                            ec(!0);
                            return
                        }
                        let t = {
                            topic: F,
                            privacyLevel: ei,
                            sendStartNotification: et
                        };
                        if (Z) {
                            if (!z) return;
                            null == b || b({
                                ...t,
                                schedule: q,
                                description: W,
                                entityType: p.GuildScheduledEventEntityTypes.STAGE_INSTANCE
                            });
                            return
                        }
                        null == y || y(t)
                    },
                    {
                        color: eS,
                        text: eN
                    } = function(e, t, n) {
                        if (n) return {
                            color: o.Button.Colors.BRAND,
                            text: g.default.Messages.SCHEDULE_EVENT
                        };
                        if (t === p.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            if ((null == e ? void 0 : e.privacy_level) !== p.GuildScheduledEventPrivacyLevel.PUBLIC) return {
                                color: o.Button.Colors.BRAND,
                                text: g.default.Messages.CONTINUE
                            }
                        }
                        return null == e ? {
                            color: o.Button.Colors.GREEN,
                            text: g.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_BUTTON
                        } : {
                            color: o.Button.Colors.BRAND,
                            text: g.default.Messages.SAVE_CHANGES
                        }
                    }(H, ei, Z),
                    eC = a.useRef(null);
                a.useEffect(() => {
                    var e;
                    k && (null === (e = eC.current) || void 0 === e || e.focus())
                }, [k]);
                let ef = z && null != q.startDate && q.startDate >= r();
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)(o.ModalContent, {
                        className: v.modalContent,
                        children: [P, (0, l.jsx)("div", {
                            className: v.blockedUsersContainer,
                            children: null == H && eo > 0 && (0, l.jsx)(L.BlockedUsersNotice, {
                                channelId: U.id
                            })
                        }), (0, l.jsxs)("form", {
                            onSubmit: eT,
                            className: v.form,
                            children: [(0, l.jsxs)(o.FormItem, {
                                title: j ? g.default.Messages.GUILD_EVENT_CREATE_TOPIC_LABEL : g.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_LABEL,
                                className: v.topicFormItem,
                                required: !0,
                                children: [(0, l.jsx)(o.TextInput, {
                                    className: v.textInput,
                                    onChange: e => Y(e),
                                    placeholder: g.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TOPIC_PLACEHOLDER,
                                    maxLength: h.MAX_STAGE_TOPIC_LENGTH,
                                    value: F,
                                    autoComplete: "off",
                                    inputRef: eC
                                }), eu && (0, l.jsx)(o.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-warning",
                                    className: v.warning,
                                    children: g.default.Messages.START_STAGE_PUBLIC_SHORT_TOPIC_WARNING
                                }), null != x ? (0, l.jsx)(o.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: v.warning,
                                    children: x.getAnyErrorMessage()
                                }) : null]
                            }), e_ && eI ? (0, l.jsx)(M, {
                                stageChannelsInGuild: eE,
                                channel: U,
                                onSelectChannel: B
                            }) : null, Z && (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(_.default, {
                                    className: v.formItem,
                                    onScheduleChange: X,
                                    onRecurrenceChange: e => {
                                        let t = q.startDate;
                                        if (null == t) return;
                                        let n = (0, d.recurrenceOptionToRecurrenceRule)(e, t);
                                        es(n)
                                    },
                                    schedule: q,
                                    recurrenceRule: er,
                                    timeSelected: z,
                                    onTimeChange: J
                                }), null != q.startDate && q.startDate < r() ? (0, l.jsx)(o.Text, {
                                    color: "text-danger",
                                    variant: "text-xs/normal",
                                    className: v.warning,
                                    children: g.default.Messages.GUILD_EVENT_PAST_START_DATE
                                }) : null]
                            }), j && (0, l.jsx)(o.FormItem, {
                                title: g.default.Messages.CREATE_STAGE_INSTANCE_DESCRIPTION_INPUT_LABEL,
                                className: v.formItem,
                                children: (0, l.jsx)(o.TextArea, {
                                    placeholder: g.default.Messages.GUILD_EVENT_CREATE_DESCRIPTION_PLACEHOLDER,
                                    value: W,
                                    onChange: e => K(e),
                                    maxLength: p.GUILD_EVENT_MAX_DESCRIPTION_LENGTH
                                })
                            }), ee ? (0, l.jsx)(E.default, {
                                sendStartNotification: et,
                                setSendStartNotification: en,
                                showNotificationNewBadge: el
                            }) : null, e_ && !eI ? (0, l.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                className: v.channelSelection,
                                children: g.default.Messages.START_STAGE_MODAL_SET_TOPIC_HELP_TEXT.format({
                                    stageName: ed,
                                    stageHook: (e, t) => (0, l.jsx)("span", {
                                        className: v.channelName,
                                        children: U.name
                                    }, t)
                                })
                            }) : null]
                        })]
                    }), (0, l.jsxs)(o.ModalFooter, {
                        children: [(0, l.jsx)(o.Button, {
                            color: eS,
                            onClick: eT,
                            disabled: "" === F || null == ei || j && !ef,
                            submitting: G,
                            children: eN
                        }), (0, l.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            className: v.cancelButton,
                            onClick: w,
                            children: g.default.Messages.CANCEL
                        })]
                    })]
                })
            }
        },
        435768: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return A
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("498225"),
                r = n("77078"),
                s = n("305961"),
                o = n("476765"),
                u = n("228427"),
                c = n("834052"),
                d = n("119184"),
                E = n("444594"),
                _ = n("813934"),
                I = n("767680"),
                T = n("249873"),
                S = n("837979"),
                N = n("782340"),
                C = n("519939");

            function f(e) {
                let {
                    guild: t,
                    channel: n,
                    stageInstance: a,
                    headerId: i,
                    onClose: s,
                    loading: o,
                    error: c,
                    onSave: E,
                    defaultOptions: I,
                    isSlideReady: T
                } = e;
                return (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsxs)("div", {
                        className: C.content,
                        children: [(0, l.jsx)(d.default, {
                            children: (0, l.jsx)("div", {
                                className: C.stageIconBackground,
                                children: (0, l.jsx)(u.default, {
                                    width: 32,
                                    height: 32,
                                    className: C.stageIcon
                                })
                            })
                        }), (0, l.jsx)(r.Heading, {
                            id: i,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: C.headerTitle,
                            children: null == a ? N.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_TITLE : N.default.Messages.EDIT_STAGE_CHANNEL_TITLE
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "header-secondary",
                            className: C.headerSubtitle,
                            children: null == a ? N.default.Messages.START_STAGE_CHANNEL_EVENT_MODAL_SUBTITLE : N.default.Messages.EDIT_STAGE_SUBTITLE
                        })]
                    }), (0, l.jsx)(_.default, {
                        guild: t,
                        channel: n,
                        onSave: E,
                        error: c,
                        loading: o,
                        onClose: s,
                        defaultOptions: I,
                        isSlideReady: T
                    })]
                })
            }

            function A(e) {
                let {
                    channel: t,
                    onClose: n,
                    transitionState: u,
                    ...d
                } = e, _ = (0, o.useUID)(), N = (0, i.useStateFromStores)([s.default], () => s.default.getGuild(t.guild_id)), A = a.useMemo(() => c.default.getStageInstanceByChannel(t.id), [t.id]), {
                    loading: R,
                    error: L,
                    onSave: h
                } = (0, I.default)(t, n), {
                    modalStep: m,
                    setModalStep: p,
                    readySlide: O,
                    handleSlideReady: g,
                    savedOptions: v,
                    handleSettingsSave: M,
                    handleDelayedSave: U
                } = (0, T.default)({
                    stageInstance: A,
                    defaultStep: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                    error: L,
                    onSave: h
                });
                return (a.useEffect(() => {
                    null == N && n()
                }, [N, n]), null == N) ? null : (0, l.jsx)(r.ModalRoot, {
                    transitionState: u,
                    "aria-labelledby": _,
                    ...d,
                    size: r.ModalSize.SMALL,
                    children: (0, l.jsxs)(r.Slides, {
                        activeSlide: m,
                        width: 440,
                        onSlideReady: g,
                        children: [(0, l.jsx)(r.Slide, {
                            id: S.StartStageSteps.STAGE_CHANNEL_SETTINGS,
                            children: (0, l.jsx)("div", {
                                className: C.slideContainer,
                                children: (0, l.jsx)(f, {
                                    guild: N,
                                    channel: t,
                                    stageInstance: A,
                                    headerId: _,
                                    onClose: n,
                                    loading: R,
                                    error: L,
                                    onSave: M,
                                    defaultOptions: v,
                                    isSlideReady: O === S.StartStageSteps.STAGE_CHANNEL_SETTINGS
                                })
                            })
                        }), (0, l.jsx)(r.Slide, {
                            id: S.StartStageSteps.PUBLIC_STAGE_PREVIEW,
                            children: (0, l.jsx)("div", {
                                className: C.slideContainer,
                                children: (0, l.jsx)(E.default, {
                                    headerId: _,
                                    guild: N,
                                    channel: t,
                                    stageData: v,
                                    loading: R,
                                    onNext: U,
                                    onCancel: n,
                                    onBack: () => p(S.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                                })
                            })
                        })]
                    })
                })
            }
        },
        767680: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("773670"),
                a = n("851387"),
                i = n("987317"),
                r = n("448993"),
                s = n("597517"),
                o = n("887143"),
                u = n("244480"),
                c = n("834052"),
                d = n("533613");

            function E(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                    [E, _] = l.useState(!1),
                    [I, T] = l.useState(null),
                    S = l.useMemo(() => c.default.getStageInstanceByChannel(null == e ? void 0 : e.id), [null == e ? void 0 : e.id]),
                    N = (0, o.useCanSendStageStartNotification)(e),
                    C = async l => {
                        let {
                            topic: o,
                            privacyLevel: c,
                            sendStartNotification: E
                        } = l;
                        if (null != e && "" !== o && null != c) {
                            _(!0), T(null), null != n && (a.default.selectGuild(n), i.default.selectVoiceChannel(e.id));
                            try {
                                let n;
                                null != S ? n = await u.editStage(e, o, c) : (n = await u.startStage(e, o, c, null != E && E), N && s.hideHotspot(d.HotspotLocations.LIVE_STAGE_NOTIFICATION_BADGE)), t(n)
                            } catch (t) {
                                let e = new r.APIError(t);
                                T(e), _(!1)
                            }
                        }
                    };
                return {
                    loading: E,
                    error: I,
                    onSave: C
                }
            }
        },
        249873: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("773670"),
                a = n("161179"),
                i = n.n(a),
                r = n("837979"),
                s = n("745049");

            function o(e) {
                let {
                    stageInstance: t,
                    defaultStep: n,
                    error: a,
                    onSave: o
                } = e, [u, c] = l.useState(n), [d, E] = l.useState(), [_, I] = l.useState(null);
                return l.useEffect(() => {
                    null != a && c(r.StartStageSteps.STAGE_CHANNEL_SETTINGS)
                }, [a]), {
                    modalStep: u,
                    setModalStep: c,
                    readySlide: _,
                    handleSlideReady: function(e) {
                        return I(e)
                    },
                    savedOptions: d,
                    handleSettingsSave: function(e) {
                        if (E(e), e.privacyLevel === s.GuildScheduledEventPrivacyLevel.PUBLIC) {
                            if ((null == t ? void 0 : t.privacy_level) !== s.GuildScheduledEventPrivacyLevel.PUBLIC) {
                                c(r.StartStageSteps.PUBLIC_STAGE_PREVIEW);
                                return
                            }
                        }
                        o(e)
                    },
                    handleDelayedSave: function() {
                        i(null != d, "Must have some saved options."), o(d)
                    }
                }
            }
        },
        211895: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("913144"),
                a = n("54239"),
                i = n("49111");

            function r() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        openWithoutBackstack: !1
                    };
                l.default.dispatch({
                    type: "USER_SETTINGS_MODAL_OPEN",
                    section: e,
                    subsection: t,
                    ...n
                }), (0, a.pushLayer)(i.Layers.USER_SETTINGS)
            }
        },
        26092: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            });
            var l = n("427964"),
                a = n.n(l),
                i = n("498225"),
                r = n("913144"),
                s = n("697218"),
                o = n("49111");
            let u = o.FormStates.CLOSED,
                c = null,
                d = null,
                E = {},
                _ = {},
                I = {},
                T = null,
                S = null,
                N = !1,
                C = !1,
                f = null,
                A = null,
                R = null,
                L = [],
                h = null,
                m = null;

            function p(e) {
                var t, n, l, a, i, r;
                let c = s.default.getCurrentUser();
                if (null == c) return O();
                d = null !== (t = e.section) && void 0 !== t ? t : d, h = null !== (n = e.section) && void 0 !== n ? n : d, null != e.subsection && null != d && (E[d] = e.subsection), null != e.scrollPosition && null != d && (_[d] = e.scrollPosition), C = !!e.openWithoutBackstack, u = o.FormStates.OPEN, I = {}, S = {
                    ...T = {
                        [o.UserSettingsSections.ACCOUNT]: {
                            userId: c.id,
                            username: c.username,
                            discriminator: c.discriminator,
                            email: c.email,
                            avatar: c.avatar,
                            password: "",
                            newPassword: null,
                            claimed: c.isClaimed()
                        }
                    }
                }, A = null !== (l = e.onClose) && void 0 !== l ? l : null, R = null !== (a = e.analyticsLocation) && void 0 !== a ? a : null, L = null !== (i = e.analyticsLocations) && void 0 !== i ? i : [], m = null !== (r = e.impressionSource) && void 0 !== r ? r : null
            }

            function O() {
                u = o.FormStates.CLOSED, N = !1, T = null, h = null, S = null, c = null, d = null, E = {}, _ = {}, A = null, R = null, L = [], m = null
            }

            function g() {
                u = o.FormStates.OPEN, I = {}
            }
            class v extends i.default.Store {
                initialize() {
                    this.waitFor(s.default)
                }
                hasChanges() {
                    return null != S && null != T && (!!this.isOpen() || f === o.DrawerTabTypes.USER_SETTINGS) && !a.isEqual(S, T)
                }
                isOpen() {
                    return N
                }
                getPreviousSection() {
                    return c
                }
                getSection() {
                    return d
                }
                getSubsection() {
                    return null != d ? E[d] : null
                }
                getScrollPosition() {
                    return null != d ? _[d] : null
                }
                shouldOpenWithoutBackstack() {
                    return C
                }
                getProps() {
                    return {
                        submitting: u === o.FormStates.SUBMITTING,
                        section: d,
                        subsection: null != d ? E[d] : null,
                        scrollPosition: null != d ? _[d] : null,
                        settings: S,
                        errors: I,
                        hasChanges: this.hasChanges(),
                        openWithoutBackstack: C,
                        analyticsLocation: R,
                        analyticsLocations: L,
                        initialSection: h,
                        impressionSource: m
                    }
                }
                get onClose() {
                    return A
                }
            }
            v.displayName = "UserSettingsModalStore";
            var M = new v(r.default, {
                USER_SETTINGS_MODAL_OPEN: function(e) {
                    N = !0, p(e)
                },
                USER_SETTINGS_MODAL_INIT: p,
                USER_SETTINGS_MODAL_CLOSE: O,
                LOGOUT: O,
                USER_SETTINGS_MODAL_SUBMIT: function() {
                    u = o.FormStates.SUBMITTING
                },
                USER_SETTINGS_MODAL_SUBMIT_FAILURE: function(e) {
                    var t;
                    if (u !== o.FormStates.SUBMITTING) return !1;
                    u = o.FormStates.OPEN, d = o.UserSettingsSections.ACCOUNT, I = null !== (t = e.errors) && void 0 !== t ? t : {}
                },
                USER_SETTINGS_MODAL_SET_SECTION: function(e) {
                    var t;
                    c = d, d = e.section, R = null, L = null !== (t = e.analyticsLocations) && void 0 !== t ? t : [], null != e.subsection && (E[d] = e.subsection)
                },
                USER_SETTINGS_MODAL_CLEAR_SUBSECTION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete E[t] : null != d && delete E[d]
                },
                USER_SETTINGS_MODAL_CLEAR_SCROLL_POSITION: function(e) {
                    let {
                        forSection: t
                    } = e;
                    null != t ? delete _[t] : null != d && delete _[d]
                },
                USER_SETTINGS_MODAL_UPDATE_ACCOUNT: function(e) {
                    let {
                        settings: t
                    } = e;
                    null == S && (S = {});
                    let n = S[o.UserSettingsSections.ACCOUNT];
                    S[o.UserSettingsSections.ACCOUNT] = {
                        ...n,
                        ...t
                    }
                },
                USER_SETTINGS_MODAL_SUBMIT_COMPLETE: g,
                USER_SETTINGS_MODAL_RESET: function() {
                    let e = s.default.getCurrentUser();
                    g(), null != e && (S = {
                        ...T = {
                            [o.UserSettingsSections.ACCOUNT]: {
                                userId: e.id,
                                username: e.username,
                                discriminator: e.discriminator,
                                email: e.email,
                                avatar: e.avatar,
                                password: "",
                                newPassword: null,
                                claimed: e.isClaimed()
                            }
                        }
                    })
                },
                DRAWER_SELECT_TAB: function(e) {
                    return f = e.tab, null == d && f === o.DrawerTabTypes.USER_SETTINGS && p({
                        type: "USER_SETTINGS_MODAL_INIT",
                        section: null,
                        subsection: null,
                        scrollPosition: null,
                        openWithoutBackstack: !1
                    })
                }
            })
        },
        931138: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("920040"),
                a = n("773670"),
                i = n("575482"),
                r = n.n(i),
                s = n("77078"),
                o = n("760607"),
                u = n("13681");

            function c(e) {
                let {
                    children: t,
                    size: n = 16,
                    className: i,
                    flowerStarClassName: c,
                    ...d
                } = e, E = a.Children.only(t), _ = (0, s.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: r(u.flowerStarContainer, i),
                    style: {
                        width: n,
                        height: n
                    },
                    children: [(0, l.jsx)(o.default, {
                        ...d,
                        className: r(c, u.flowerStar)
                    }), (0, l.jsx)("div", {
                        className: r(u.childContainer, {
                            [u.redesignIconChildContainer]: _
                        }),
                        children: E
                    })]
                })
            }
        },
        476765: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                uid: function() {
                    return r
                },
                useUID: function() {
                    return s
                },
                UID: function() {
                    return o
                }
            });
            var l = n("552473"),
                a = n.n(l),
                i = n("365444");
            let r = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "uid_";
                    return a(e)
                },
                s = () => (0, i.useLazyValue)(() => r()),
                o = e => {
                    let {
                        children: t
                    } = e;
                    return t(s())
                }
        },
        381546: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("505088"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        backgroundColor: s,
                        ...o
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 14 14",
                        children: [null != s ? (0, l.jsx)("circle", {
                            r: 5,
                            cx: 7,
                            cy: 7,
                            fill: s
                        }) : null, (0, l.jsx)("path", {
                            fill: a,
                            className: i,
                            d: "M7.02799 0.333252C3.346 0.333252 0.361328 3.31792 0.361328 6.99992C0.361328 10.6819 3.346 13.6666 7.02799 13.6666C10.71 13.6666 13.6947 10.6819 13.6947 6.99992C13.6947 3.31792 10.7093 0.333252 7.02799 0.333252ZM10.166 9.19525L9.22333 10.1379L7.02799 7.94325L4.83266 10.1379L3.89 9.19525L6.08466 6.99992L3.88933 4.80459L4.832 3.86259L7.02733 6.05792L9.22266 3.86259L10.1653 4.80459L7.97066 6.99992L10.166 9.19525Z"
                        })]
                    })
                }, i.CircleXIcon)
        },
        627490: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("772279"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        className: i,
                        foreground: s,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(o),
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: a,
                            d: "M12 10.9C11.39 10.9 10.9 11.39 10.9 12C10.9 12.61 11.39 13.1 12 13.1C12.61 13.1 13.1 12.61 13.1 12C13.1 11.39 12.61 10.9 12 10.9ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM14.19 14.19L6 18L9.81 9.81L18 6L14.19 14.19Z"
                        })
                    })
                }, i.CompassIcon)
        },
        760607: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196"),
                i = function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: r,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: i,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        272339: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("358917"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            children: (0, l.jsx)("path", {
                                d: "M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z",
                                className: i,
                                fill: a
                            })
                        })
                    })
                }, i.HeadphonesIcon)
        },
        849467: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("696675"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, l.jsxs)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: i,
                            fill: a
                        }), (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: i,
                            fill: a
                        })]
                    })
                }, i.MicrophoneIcon)
        },
        987772: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("504318"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M19.2929 9.8299L19.9409 9.18278C21.353 7.77064 21.353 5.47197 19.9409 4.05892C18.5287 2.64678 16.2292 2.64678 14.817 4.05892L14.1699 4.70694L19.2929 9.8299ZM12.8962 5.97688L5.18469 13.6906L10.3085 18.813L18.0201 11.0992L12.8962 5.97688ZM4.11851 20.9704L8.75906 19.8112L4.18692 15.239L3.02678 19.8796C2.95028 20.1856 3.04028 20.5105 3.26349 20.7337C3.48669 20.9569 3.8116 21.046 4.11851 20.9704Z",
                            className: i,
                            fill: a
                        })
                    })
                }, i.PencilIcon)
        },
        564875: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("907572"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(s),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, l.jsx)("path", {
                                fill: a,
                                className: i,
                                fillRule: "nonzero",
                                d: "M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z",
                                transform: "translate(2 4)"
                            }), (0, l.jsx)("path", {
                                d: "M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                            })]
                        })
                    })
                }, i.FriendsIcon)
        },
        351825: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("31745"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        className: i,
                        foreground: r
                    } = e;
                    return (0, l.jsx)("svg", {
                        className: i,
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: r,
                            fill: a,
                            d: "M12 2.00098C6.486 2.00098 2 6.48698 2 12.001C2 17.515 6.486 22.001 12 22.001C17.514 22.001 22 17.515 22 12.001C22 6.48698 17.514 2.00098 12 2.00098ZM17 13.001H13V17.001H11V13.001H7V11.001H11V7.00098H13V11.001H17V13.001Z"
                        })
                    })
                }, i.CirclePlusIcon)
        },
        228427: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("287083"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: n = 32,
                        color: a = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, l.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 13C14 14.1 13.1 15 12 15C10.9 15 10 14.1 10 13C10 11.9 10.9 11 12 11C13.1 11 14 11.9 14 13ZM8.5 20V19.5C8.5 17.8 9.94 16.5 12 16.5C14.06 16.5 15.5 17.8 15.5 19.5V20H8.5ZM7 13C7 10.24 9.24 8 12 8C14.76 8 17 10.24 17 13C17 13.91 16.74 14.75 16.31 15.49L17.62 16.25C18.17 15.29 18.5 14.19 18.5 13C18.5 9.42 15.58 6.5 12 6.5C8.42 6.5 5.5 9.42 5.5 13C5.5 14.18 5.82 15.29 6.38 16.25L7.69 15.49C7.26 14.75 7 13.91 7 13ZM2.5 13C2.5 7.75 6.75 3.5 12 3.5C17.25 3.5 21.5 7.75 21.5 13C21.5 14.73 21.03 16.35 20.22 17.75L21.51 18.5C22.45 16.88 23 15 23 13C23 6.93 18.07 2 12 2C5.93 2 1 6.93 1 13C1 15 1.55 16.88 2.48 18.49L3.77 17.74C2.97 16.35 2.5 14.73 2.5 13Z",
                            fill: a
                        })
                    })
                }, i.StageIcon)
        },
        625687: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("75196");

            function i(e) {
                let {
                    width: t = 32,
                    height: n = 32,
                    color: i = "currentColor",
                    foreground: r,
                    ...s
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, a.default)(s),
                    width: t,
                    height: n,
                    viewBox: "0 0 32 32",
                    children: [(0, l.jsx)("rect", {
                        width: "32",
                        height: "32",
                        rx: "16",
                        fill: i
                    }), (0, l.jsx)("path", {
                        d: "M23 9.99995C19.56 9.99995 16.826 6.43495 16.799 6.39795C16.421 5.89795 15.579 5.89795 15.201 6.39795C15.174 6.43495 12.44 9.99995 9 9.99995C8.447 9.99995 8 10.4479 8 10.9999V17.9999C8 21.8069 14.764 25.4779 15.534 25.8839C15.68 25.9609 15.84 25.9979 16 25.9979C16.16 25.9979 16.32 25.9599 16.466 25.8839C17.236 25.4779 24 21.8069 24 17.9999V10.9999C24 10.4479 23.553 9.99995 23 9.99995ZM19 19.9999L16 17.9999L13 19.9999L14 16.9999L12 14.9999H15L16 11.9999L17 14.9999H20L18 16.9999L19 19.9999Z",
                        className: r
                    })]
                })
            }
        },
        486952: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("469563"),
                i = n("276825"),
                r = n("75196"),
                s = (0, a.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: a = "currentColor",
                        ...i
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, r.default)(i),
                        width: t,
                        height: n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            d: "M7.4,11.17,4,8.62,5,7.26l2,1.53L10.64,4l1.36,1Z",
                            fill: a
                        })
                    })
                }, i.CheckmarkSmallIcon)
        },
        141302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                AnalyticsContexts: function() {
                    return a
                },
                MINIMUM_MEMBER_COUNT: function() {
                    return T
                },
                startLurking: function() {
                    return S
                },
                viewGuild: function() {
                    return N
                },
                makeDiscoverableGuild: function() {
                    return C
                },
                trackDiscoveryViewed: function() {
                    return f
                },
                trackDiscoveryExited: function() {
                    return A
                },
                trackSearchClosed: function() {
                    return R
                },
                trackSearchStarted: function() {
                    return L
                },
                trackTagSearchStarted: function() {
                    return h
                },
                trackSearchResultsViewed: function() {
                    return m
                },
                trackGuildJoinClicked: function() {
                    return p
                },
                getDiscoverableGuild: function() {
                    return O
                }
            });
            var l, a, i = n("126617"),
                r = n("990746"),
                s = n("851387"),
                o = n("267567"),
                u = n("393414"),
                c = n("239380"),
                d = n("525065"),
                E = n("305961"),
                _ = n("599110"),
                I = n("49111");
            (l = a || (a = {})).SEARCH = "Search", l.RECOMMENDED = "Recommended", l.POPULAR = "Popular", l.RECOMMENDED_E3 = "Recommended - E3", l.HEADER = "Header";
            let T = ">200";
            async function S(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    {
                        channelId: l,
                        onSuccess: a,
                        joinSource: i,
                        loadId: r,
                        setsHistorySnapshot: d = !0
                    } = n,
                    _ = (0, u.getHistory)();
                d && o.default.setHistorySnapshot({
                    ..._
                });
                let I = E.default.getGuild(e),
                    T = {
                        state: {
                            analyticsSource: t
                        }
                    };
                null != I && null != I.joinedAt ? (0, c.transitionToGuild)(e, T) : (await s.default.joinGuild(e, {
                    lurker: !0,
                    source: i,
                    loadId: r,
                    lurkLocation: null == t ? void 0 : t.page
                }), await s.default.transitionToGuildSync(e, {
                    ...T,
                    welcomeModalChannelId: l,
                    search: _.location.search
                }, l)), null == a || a()
            }
            async function N(e) {
                let t, {
                    loadId: n,
                    guildId: l,
                    index: i,
                    analyticsContext: r,
                    categoryId: s
                } = e;
                "string" == typeof r && r in a && (t = r);
                let o = {
                    page: I.AnalyticsPages.GUILD_DISCOVERY,
                    object: I.AnalyticsObjects.CARD,
                    section: t
                };
                await S(l, o, {
                        loadId: n
                    }),
                    function(e) {
                        let {
                            loadId: t,
                            guildId: n,
                            index: l,
                            analyticsContext: a,
                            categoryId: i
                        } = e, r = {
                            page: I.AnalyticsPages.GUILD_DISCOVERY,
                            section: a
                        };
                        "string" != typeof a && null != a.location && (r = a.location), _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_GUILD_SELECTED, {
                            location: r,
                            guild_id: n,
                            load_id: t,
                            card_index: l,
                            location_object: I.AnalyticsObjects.CARD,
                            category_id: i
                        })
                    }({
                        loadId: n,
                        guildId: l,
                        index: i,
                        analyticsContext: r,
                        categoryId: s
                    })
            }

            function C(e) {
                return {
                    id: e.id,
                    name: e.name,
                    description: e.description,
                    splash: e.splash,
                    banner: e.banner,
                    icon: e.icon,
                    features: new Set(e.features),
                    presenceCount: e.approximate_presence_count,
                    memberCount: e.approximate_member_count,
                    premiumSubscriptionCount: e.premium_subscription_count,
                    preferredLocale: e.preferred_locale,
                    discoverySplash: e.discovery_splash,
                    emojis: e.emojis,
                    emojiCount: e.emoji_count,
                    stickers: e.stickers,
                    stickerCount: e.sticker_count,
                    keywords: e.keywords
                }
            }

            function f(e) {
                let {
                    loadId: t,
                    gamesYouPlayGuilds: n,
                    allGuilds: l,
                    categoryId: a,
                    recommendationsSource: i = null
                } = e, r = n.length, s = l.length;
                _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_VIEWED, {
                    load_id: t,
                    num_guilds: r + s,
                    num_guilds_recommended: r,
                    num_guilds_popular: s,
                    recommended_guild_ids: n.map(e => e.id),
                    category_id: a,
                    recommendations_source: i
                })
            }

            function A(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_EXITED, {
                    load_id: e,
                    guild_ids_viewed: t,
                    recommendations_source: n
                })
            }

            function R(e) {
                _.default.track(I.AnalyticEvents.SEARCH_CLOSED, {
                    load_id: e
                })
            }

            function L(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                _.default.track(I.AnalyticEvents.SEARCH_STARTED, {
                    search_type: I.SearchTypes.GUILD_DISCOVERY,
                    load_id: e,
                    location: n.location,
                    category_id: t
                })
            }

            function h(e, t, n, l) {
                _.default.track(I.AnalyticEvents.SEARCH_STARTED, {
                    search_type: I.SearchTypes.GUILD_DISCOVERY_TAG,
                    load_id: e,
                    location: {
                        page: I.AnalyticsPages.GUILD_DISCOVERY,
                        section: n
                    },
                    category_id: t,
                    guild_id: l
                })
            }

            function m(e) {
                let {
                    loadId: t,
                    searchId: n,
                    query: l,
                    guildResults: a,
                    analyticsContext: i,
                    categoryId: r,
                    isTagSearch: s
                } = e;
                _.default.track(I.AnalyticEvents.SEARCH_RESULT_VIEWED, {
                    search_type: s ? I.SearchTypes.GUILD_DISCOVERY_TAG : I.SearchTypes.GUILD_DISCOVERY,
                    load_id: t,
                    search_id: n,
                    total_results: void 0 !== a ? a.length : null,
                    guild_ids: void 0 !== a ? a.map(e => e.id) : null,
                    query: l,
                    location: i.location,
                    category_id: r
                })
            }

            function p(e) {
                let t = o.default.getLoadId(e);
                _.default.track(I.AnalyticEvents.GUILD_DISCOVERY_GUILD_JOIN_CLICKED, {
                    guild_id: e,
                    load_id: t,
                    guild_size: d.default.getMemberCount(e)
                })
            }
            async function O(e) {
                try {
                    var t, n;
                    let l = await r.default.get({
                            url: I.Endpoints.GUILD_DISCOVERY,
                            query: i.stringify({
                                guild_ids: e
                            }),
                            oldFormErrors: !0
                        }),
                        a = null === (n = l.body) || void 0 === n ? void 0 : null === (t = n.guilds) || void 0 === t ? void 0 : t[0];
                    if (null == a) return a;
                    return C(a)
                } catch (e) {
                    return null
                }
            }
        },
        615931: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                resolveThunk: function() {
                    return i
                }
            });
            var l = n("427964"),
                a = n.n(l);
            let i = e => "function" == typeof e ? e() : e;
            a.curry((e, t, n) => i(t) ? e(n) : n({}))
        },
        730622: function(e, t, n) {
            "use strict";
            let l, a;
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var i = n("697218"),
                r = n("615931");
            let s = () => {
                throw Error("updateModal has not been implemented.")
            };
            {
                let e = n("670924");
                l = e.showModal, s = e.updateModalProps, a = n("551042").closeModal
            }

            function o(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: i,
                    modalProps: r = {},
                    hooks: {
                        onEarlyClose: o
                    } = {}
                } = e;
                if (null == l) {
                    null == o || o();
                    return
                }
                let c = l(I, d, r);

                function d() {
                    null == o || o()
                }

                function E(e) {
                    a(c), n(e)
                }

                function _(e) {
                    a(c), i(e)
                }

                function I(e) {
                    return s(c, I, d, {
                        ...r,
                        isLoading: !0
                    }), u({
                        promiseFn: t,
                        resolve: E,
                        reject: _,
                        code: e,
                        mfaCodeHandler: T,
                        isModalOpen: !0
                    })
                }

                function T(e) {
                    let {
                        res: t
                    } = e;
                    s(c, I, d, {
                        ...r,
                        error: t.body.message
                    })
                }
            }

            function u(e) {
                let {
                    promiseFn: t,
                    resolve: n,
                    reject: l,
                    code: a,
                    mfaCodeHandler: i = o,
                    isModalOpen: r = !1,
                    ...s
                } = e;
                return t(null != a ? {
                    code: a
                } : {}).then(n, e => {
                    var a, o;
                    if (a = e, o = r, a.body && 60008 === a.body.code || o && 429 === a.status) return i({
                        promiseFn: t,
                        resolve: n,
                        reject: l,
                        res: e,
                        ...s
                    });
                    l(e)
                })
            }

            function c(e, t) {
                var n, l;
                let {
                    checkEnabled: a = null !== (l = null === (n = i.default.getCurrentUser()) || void 0 === n ? void 0 : n.mfaEnabled) && void 0 !== l && l,
                    ...s
                } = null != t ? t : {};
                return new Promise((t, n) => {
                    ((0, r.resolveThunk)(a) ? o : u)({
                        promiseFn: e,
                        resolve: t,
                        reject: n,
                        ...s
                    })
                })
            }
        },
        334572: function(e, t, n) {
            "use strict";

            function l(e, t) {
                let [, n] = e, [, l] = t;
                return n === l
            }
            n.r(t), n.d(t, {
                isVersionEqual: function() {
                    return l
                }
            })
        },
        670924: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                showModal: function() {
                    return s
                },
                updateModalProps: function() {
                    return o
                }
            });
            var l = n("920040");
            n("773670");
            var a = n("551042"),
                i = n("920636");
            let r = (e, t, n) => function(a) {
                return (0, l.jsx)(i.default, {
                    handleSubmit: e,
                    handleEarlyClose: t,
                    ...n,
                    ...a
                })
            };

            function s(e, t, n) {
                return (0, a.openModal)(r(e, t, n), {
                    onCloseCallback: t
                })
            }

            function o(e, t, n, l) {
                return (0, a.updateModal)(e, r(t, n, l))
            }
        }
    }
]);