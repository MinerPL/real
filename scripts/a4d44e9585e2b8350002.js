(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81467"], {
        225936: function(e, t, s) {
            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return v
                }
            }), s("222007");
            var a = s("37983"),
                n = s("884691"),
                r = s("866227"),
                i = s.n(r),
                l = s("730290"),
                o = s("872717"),
                d = s("862337"),
                u = s("77078"),
                c = s("992629"),
                h = s("145131"),
                m = s("364719"),
                g = s("258078"),
                p = s("599110"),
                f = s("49111"),
                N = s("782340"),
                x = s("249760"),
                _ = s("120891"),
                T = s("265369"),
                C = s("799557");
            let E = e => {
                    let {
                        step: t,
                        children: s
                    } = e;
                    return (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(u.Heading, {
                            className: x.sectionSubheader,
                            variant: "heading-sm/semibold",
                            children: N.default.Messages.STEP_NUMBER.format({
                                number: t
                            })
                        }), (0, a.jsx)(g.default, {
                            className: x.sectionSubtitle,
                            size: g.default.Sizes.SIZE_24,
                            children: s
                        })]
                    })
                },
                j = e => {
                    let {
                        pin: t,
                        timeRemaining: s
                    } = e;
                    return (0, a.jsxs)(n.Fragment, {
                        children: [(0, a.jsx)(u.Text, {
                            className: x.pinNumber,
                            variant: "text-sm/normal",
                            children: t
                        }), (0, a.jsx)(u.Text, {
                            className: x.pinExpiresText,
                            tag: "strong",
                            variant: "text-sm/normal",
                            children: s
                        })]
                    })
                };
            class I extends n.PureComponent {
                componentDidMount() {
                    let e = l.parse(this.props.location.search),
                        {
                            code: t,
                            state: s
                        } = e;
                    p.default.track(f.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        previous_step: "microsoft auth",
                        current_step: "PIN code display",
                        session_id: s,
                        platform_type: f.PlatformTypes.XBOX
                    }), i.locale(window.navigator.userLanguage || window.navigator.language), o.default.post({
                        url: f.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION("xbox"),
                        body: {
                            code: t,
                            state: s
                        },
                        oldFormErrors: !0
                    }).then(e => {
                        this.setState({
                            pin: e.body.short_code,
                            currentTime: i(),
                            endTime: i(e.body.expires_at),
                            loading: !1
                        }), this.interval = new d.Interval, this.interval.start(1e3, this.tick)
                    }).catch(e => {
                        let t;
                        try {
                            t = e.body.message
                        } catch (s) {
                            t = String(e)
                        }
                        p.default.track(f.AnalyticEvents.ACCOUNT_LINK_FAILED, {
                            error_message: t,
                            status_code: e.status,
                            link_method: "pin",
                            current_step: "PIN code display",
                            platform_type: f.PlatformTypes.XBOX
                        }), this.setState({
                            errorMessage: t
                        })
                    })
                }
                componentWillUnmount() {
                    null != this.interval && this.interval.stop()
                }
                handleDone() {
                    window.location = f.Routes.CONNECTIONS(f.PlatformTypes.XBOX)
                }
                goBack() {
                    window.history.back()
                }
                renderXboxButtons() {
                    return (0, a.jsxs)("div", {
                        className: _.xboxButtonContainer,
                        children: [(0, a.jsx)(c.default.Button, {
                            type: c.default.Button.A,
                            text: N.default.Messages.CLOSE,
                            style: _.gamepadButton,
                            onClick: this.handleDone
                        }), this.renderErrorMessage()]
                    })
                }
                renderErrorMessage() {
                    let {
                        errorMessage: e
                    } = this.state;
                    return null == e ? null : (0, a.jsxs)("div", {
                        className: _.errorMessageContainer,
                        children: [(0, a.jsx)(m.default, {
                            className: _.errorMessageIcon
                        }), (0, a.jsx)("div", {
                            className: _.errorMessage,
                            children: e
                        })]
                    })
                }
                renderContent() {
                    let {
                        pin: e
                    } = this.state, t = null == e ? null : (0, a.jsx)(j, {
                        pin: e,
                        timeRemaining: this.getMinutesLeftText()
                    });
                    return (0, a.jsxs)("div", {
                        className: _.pageWrapper,
                        children: [(0, a.jsx)("img", {
                            alt: "Discord",
                            className: _.logo,
                            src: T
                        }), (0, a.jsxs)(h.default, {
                            className: _.container,
                            justify: h.default.Justify.CENTER,
                            align: h.default.Align.CENTER,
                            children: [(0, a.jsxs)(h.default.Child, {
                                className: x.leftPanel,
                                children: [t, (0, a.jsx)(u.Heading, {
                                    className: x.sectionTitle,
                                    variant: "heading-sm/semibold",
                                    children: N.default.Messages.LINK_YOUR_DISCORD_ACCOUNT
                                }), (0, a.jsx)(E, {
                                    step: 1,
                                    children: N.default.Messages.XBOX_PIN_STEP1
                                }), (0, a.jsx)(E, {
                                    step: 2,
                                    children: N.default.Messages.XBOX_PIN_STEP2
                                }), (0, a.jsx)(E, {
                                    step: 3,
                                    children: N.default.Messages.XBOX_PIN_STEP3
                                }), this.renderXboxButtons()]
                            }), (0, a.jsx)(h.default.Child, {
                                className: _.rightPanel,
                                children: (0, a.jsx)("img", {
                                    alt: "",
                                    className: _.image,
                                    src: C
                                })
                            })]
                        })]
                    })
                }
                render() {
                    return (0, a.jsx)(c.default, {
                        onAPressed: this.handleDone,
                        onBPressed: this.goBack,
                        children: this.renderContent()
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        pin: "",
                        currentTime: i(),
                        endTime: null,
                        loading: !0,
                        errorMessage: null
                    }, this.tick = () => {
                        let {
                            endTime: e
                        } = this.state;
                        if (this.setState({
                                currentTime: i()
                            }), null != e && i().isAfter(e)) {
                            var t;
                            null === (t = this.interval) || void 0 === t || t.stop()
                        }
                    }, this.getMinutesLeftText = () => {
                        let {
                            endTime: e
                        } = this.state;
                        if (this.state.loading) return N.default.Messages.LOADING_YOUR_PIN;
                        if (null != e && i().isAfter(e)) return N.default.Messages.YOUR_PIN_IS_EXPIRED;
                        if (null != e) return N.default.Messages.YOUR_PIN_EXPIRES.format({
                            time: e.fromNow()
                        })
                    }
                }
            }
            var v = I
        }
    }
]);