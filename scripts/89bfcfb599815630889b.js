(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81467"], {
        582247: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var s = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var s = e[n];
                            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                        }
                    }
                    return function(e, n, s) {
                        return n && t(e.prototype, n), s && t(e, s), e
                    }
                }(),
                o = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n("884691")),
                a = n("315401"),
                i = function(t) {
                    function e(t, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, e);
                        var s = function(t, e) {
                            if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e && ("object" == typeof e || "function" == typeof e) ? e : t
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return s.padState = {
                            connected: !1,
                            buttons: {
                                A: !1,
                                B: !1,
                                X: !1,
                                Y: !1,
                                LB: !1,
                                LT: !1,
                                LS: !1,
                                RB: !1,
                                RT: !1,
                                RS: !1,
                                Start: !1,
                                Back: !1,
                                DPadUp: !1,
                                DPadRight: !1,
                                DPadDown: !1,
                                DPadLeft: !1
                            },
                            axis: {
                                LeftStickX: 0,
                                LeftStickY: 0,
                                RightStickX: 0,
                                RightStickY: 0,
                                RightTrigger: 0,
                                LeftTrigger: 0
                            }
                        }, s
                    }
                    return ! function(t, e) {
                        if ("function" != typeof e && null !== e) throw TypeError("Super expression must either be null or a function, not " + typeof e);
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
                    }(e, t), s(e, [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0, window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1
                        }
                    }, {
                        key: "updateGamepad",
                        value: function() {
                            if (this.mounted) {
                                var t = this.props.gamepadIndex,
                                    e = navigator.getGamepads();
                                if (e.length && e.length > t && e[t]) {
                                    var n = e[t];
                                    !this.padState.connected && (this.padState.connected = !0, this.props.onConnect(t)), this.updateAllButtons(n), this.updateAllAxis(n)
                                } else this.padState.connected && (this.padState.connected = !1, this.props.onDisconnect(t));
                                window && window.requestAnimationFrame && window.requestAnimationFrame(this.updateGamepad.bind(this))
                            }
                        }
                    }, {
                        key: "updateAllButtons",
                        value: function(t) {
                            for (var e = 0; e < t.buttons.length; ++e) {
                                var n = t.buttons[e].pressed,
                                    s = t.buttons[e].value,
                                    o = this.buttonIndexToButtonName(e);
                                this.updateButton(o, n);
                                var a = this.buttonIndexToAxisName(e);
                                this.updateAxis(a, s)
                            }
                        }
                    }, {
                        key: "updateButton",
                        value: function(t, e) {
                            void 0 === this.padState.buttons[t] ? console.error("Unknown button " + t) : this.padState.buttons[t] !== e && (this.padState.buttons[t] = e, this.props.onButtonChange(t, e), this.props["onButton" + (e ? "Down" : "Up")](t), e && this.props["on" + t.replace("DPad", "")]())
                        }
                    }, {
                        key: "updateAllAxis",
                        value: function(t) {
                            for (var e = 0; e < t.axes.length; ++e) {
                                var n = this.axisIndexToAxisName(e);
                                t.axes[e], this.updateAxis(n, t.axes[e])
                            }
                        }
                    }, {
                        key: "updateAxis",
                        value: function(t, e) {
                            if (t && null != e) {
                                var n = "-" === t[0],
                                    s = e * (n ? -1 : 1);
                                if (Math.abs(s) < this.props.deadZone && (s = 0), n && (t = t.substr(1)), this.padState.axis[t] !== s) {
                                    var o = this.padState.axis[t];
                                    this.padState.axis[t] = s, this.props.onAxisChange(t, s, o), "LeftStickX" === t && (o <= this.props.stickThreshold && s > this.props.stickThreshold && this.props.onRight(), o >= -this.props.stickThreshold && s < -this.props.stickThreshold && this.props.onLeft()), "LeftStickY" === t && (o <= this.props.stickThreshold && s > this.props.stickThreshold && this.props.onUp(), o >= -this.props.stickThreshold && s < -this.props.stickThreshold && this.props.onDown())
                                }
                            }
                        }
                    }, {
                        key: "buttonIndexToButtonName",
                        value: function(t) {
                            var e = this.props.layout;
                            return e.buttons && e.buttons.length >= t + 1 ? e.buttons[t] : null
                        }
                    }, {
                        key: "buttonIndexToAxisName",
                        value: function(t) {
                            var e = this.props.layout;
                            return e.buttonAxis && e.buttonAxis.length >= t + 1 ? e.buttonAxis[t] : null
                        }
                    }, {
                        key: "axisIndexToAxisName",
                        value: function(t) {
                            var e = this.props.layout;
                            return e.axis && e.axis.length >= t + 1 ? e.axis[t] : null
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return o.default.Children.only(this.props.children)
                        }
                    }]), e
                }(o.default.Component);
            i.defaultProps = {
                layout: a.XBOX,
                stickThreshold: .5,
                deadZone: .08,
                gamepadIndex: 0,
                onConnect: function() {},
                onDisconnect: function() {},
                onButtonDown: function() {},
                onButtonUp: function() {},
                onButtonChange: function() {},
                onAxisChange: function() {},
                onA: function() {},
                onB: function() {},
                onX: function() {},
                onY: function() {},
                onStart: function() {},
                onBack: function() {},
                onLT: function() {},
                onRT: function() {},
                onLB: function() {},
                onRB: function() {},
                onLS: function() {},
                onRS: function() {},
                onUp: function() {},
                onDown: function() {},
                onLeft: function() {},
                onRight: function() {}
            }, e.default = i
        },
        464934: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.layouts = e.Gamepad = void 0;
            var s = a(n("582247")),
                o = a(n("315401"));

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            s.default.layouts = o.default, e.Gamepad = s.default, e.layouts = o.default, e.default = s.default
        },
        490780: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = {
                buttons: ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "Back", "Start", "LS", "RS", "DPadUp", "DPadDown", "DPadLeft", "DPadRight"],
                axis: ["LeftStickX", "-LeftStickY", "RightStickX", "-RightStickY"],
                buttonAxis: [null, null, null, null, null, null, "LeftTrigger", "RightTrigger"]
            }
        },
        315401: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.XBOX = void 0;
            var s = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n("490780"));
            e.XBOX = s.default, e.default = {
                XBOX: s.default
            }
        },
        265369: function(t, e, n) {
            "use strict";
            t.exports = n.p + "99c9ca7d01d903b18cad.svg"
        },
        799557: function(t, e, n) {
            "use strict";
            t.exports = n.p + "dfcd6ac84e97da5203b5.png"
        },
        992629: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return f
                }
            });
            var s = n("37983"),
                o = n("884691"),
                a = n("464934"),
                i = n("669491"),
                r = n("77078"),
                u = n("958638"),
                l = n("44930"),
                d = n("140014");
            let c = {
                A: {
                    Icon: u.default,
                    color: i.default.unsafe_rawColors.PRIMARY_400.css
                },
                B: {
                    Icon: l.default,
                    color: i.default.unsafe_rawColors.RED_360.css
                }
            };
            class p extends o.Component {
                render() {
                    let {
                        type: t,
                        text: e,
                        style: n,
                        onClick: o
                    } = this.props, a = t.Icon;
                    return (0, s.jsxs)(r.Clickable, {
                        className: d.gamepadButtonContainer,
                        style: null != o ? {
                            cursor: "pointer"
                        } : void 0,
                        onClick: o,
                        children: [(0, s.jsx)(a, {
                            className: n,
                            color: t.color,
                            backgroundColor: i.default.unsafe_rawColors.PRIMARY_600.css
                        }), (0, s.jsx)("div", {
                            className: d.gamepadButtonText,
                            children: e
                        })]
                    })
                }
            }
            p.A = c.A, p.B = c.B;
            class h extends o.PureComponent {
                render() {
                    let {
                        onAPressed: t,
                        onBPressed: e,
                        children: n
                    } = this.props;
                    if (null == n) return null;
                    let i = o.cloneElement(o.Children.only(n), {
                        hasGamepad: this.state.gamepadConnected
                    });
                    return (0, s.jsx)(a.default, {
                        onA: t,
                        onB: e,
                        onConnect: this.setGamepadConnected,
                        onDisconnect: this.setGamepadDisconnected,
                        children: i
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        gamepadConnected: !1
                    }, this.setGamepadConnected = () => {
                        this.setState({
                            gamepadConnected: !0
                        })
                    }, this.setGamepadDisconnected = () => {
                        this.setState({
                            gamepadConnected: !1
                        })
                    }
                }
            }
            h.Button = p;
            var f = h
        },
        225936: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return S
                }
            });
            var s = n("37983"),
                o = n("884691"),
                a = n("866227"),
                i = n.n(a),
                r = n("730290"),
                u = n("872717"),
                l = n("862337"),
                d = n("77078"),
                c = n("992629"),
                p = n("145131"),
                h = n("364719"),
                f = n("258078"),
                m = n("599110"),
                g = n("49111"),
                x = n("782340"),
                v = n("249760"),
                b = n("120891"),
                _ = n("265369"),
                y = n("799557");
            let T = t => {
                    let {
                        step: e,
                        children: n
                    } = t;
                    return (0, s.jsxs)(o.Fragment, {
                        children: [(0, s.jsx)(d.Heading, {
                            className: v.sectionSubheader,
                            variant: "heading-sm/semibold",
                            children: x.default.Messages.STEP_NUMBER.format({
                                number: e
                            })
                        }), (0, s.jsx)(f.default, {
                            className: v.sectionSubtitle,
                            size: f.default.Sizes.SIZE_24,
                            children: n
                        })]
                    })
                },
                C = t => {
                    let {
                        pin: e,
                        timeRemaining: n
                    } = t;
                    return (0, s.jsxs)(o.Fragment, {
                        children: [(0, s.jsx)(d.Text, {
                            className: v.pinNumber,
                            variant: "text-sm/normal",
                            children: e
                        }), (0, s.jsx)(d.Text, {
                            className: v.pinExpiresText,
                            tag: "strong",
                            variant: "text-sm/normal",
                            children: n
                        })]
                    })
                };
            class N extends o.PureComponent {
                componentDidMount() {
                    let t = r.parse(this.props.location.search),
                        {
                            code: e,
                            state: n
                        } = t;
                    m.default.track(g.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        previous_step: "microsoft auth",
                        current_step: "PIN code display",
                        session_id: n,
                        platform_type: g.PlatformTypes.XBOX
                    }), i.locale(window.navigator.userLanguage || window.navigator.language), u.default.post({
                        url: g.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION("xbox"),
                        body: {
                            code: e,
                            state: n
                        },
                        oldFormErrors: !0
                    }).then(t => {
                        this.setState({
                            pin: t.body.short_code,
                            currentTime: i(),
                            endTime: i(t.body.expires_at),
                            loading: !1
                        }), this.interval = new l.Interval, this.interval.start(1e3, this.tick)
                    }).catch(t => {
                        let e;
                        try {
                            e = t.body.message
                        } catch (n) {
                            e = String(t)
                        }
                        m.default.track(g.AnalyticEvents.ACCOUNT_LINK_FAILED, {
                            error_message: e,
                            status_code: t.status,
                            link_method: "pin",
                            current_step: "PIN code display",
                            platform_type: g.PlatformTypes.XBOX
                        }), this.setState({
                            errorMessage: e
                        })
                    })
                }
                componentWillUnmount() {
                    null != this.interval && this.interval.stop()
                }
                handleDone() {
                    window.location = g.Routes.CONNECTIONS(g.PlatformTypes.XBOX)
                }
                goBack() {
                    window.history.back()
                }
                renderXboxButtons() {
                    return (0, s.jsxs)("div", {
                        className: b.xboxButtonContainer,
                        children: [(0, s.jsx)(c.default.Button, {
                            type: c.default.Button.A,
                            text: x.default.Messages.CLOSE,
                            style: b.gamepadButton,
                            onClick: this.handleDone
                        }), this.renderErrorMessage()]
                    })
                }
                renderErrorMessage() {
                    let {
                        errorMessage: t
                    } = this.state;
                    return null == t ? null : (0, s.jsxs)("div", {
                        className: b.errorMessageContainer,
                        children: [(0, s.jsx)(h.default, {
                            className: b.errorMessageIcon
                        }), (0, s.jsx)("div", {
                            className: b.errorMessage,
                            children: t
                        })]
                    })
                }
                renderContent() {
                    let {
                        pin: t
                    } = this.state, e = null == t ? null : (0, s.jsx)(C, {
                        pin: t,
                        timeRemaining: this.getMinutesLeftText()
                    });
                    return (0, s.jsxs)("div", {
                        className: b.pageWrapper,
                        children: [(0, s.jsx)("img", {
                            alt: "Discord",
                            className: b.logo,
                            src: _
                        }), (0, s.jsxs)(p.default, {
                            className: b.container,
                            justify: p.default.Justify.CENTER,
                            align: p.default.Align.CENTER,
                            children: [(0, s.jsxs)(p.default.Child, {
                                className: v.leftPanel,
                                children: [e, (0, s.jsx)(d.Heading, {
                                    className: v.sectionTitle,
                                    variant: "heading-sm/semibold",
                                    children: x.default.Messages.LINK_YOUR_DISCORD_ACCOUNT
                                }), (0, s.jsx)(T, {
                                    step: 1,
                                    children: x.default.Messages.XBOX_PIN_STEP1
                                }), (0, s.jsx)(T, {
                                    step: 2,
                                    children: x.default.Messages.XBOX_PIN_STEP2
                                }), (0, s.jsx)(T, {
                                    step: 3,
                                    children: x.default.Messages.XBOX_PIN_STEP3
                                }), this.renderXboxButtons()]
                            }), (0, s.jsx)(p.default.Child, {
                                className: b.rightPanel,
                                children: (0, s.jsx)("img", {
                                    alt: "",
                                    className: b.image,
                                    src: y
                                })
                            })]
                        })]
                    })
                }
                render() {
                    return (0, s.jsx)(c.default, {
                        onAPressed: this.handleDone,
                        onBPressed: this.goBack,
                        children: this.renderContent()
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        pin: "",
                        currentTime: i(),
                        endTime: null,
                        loading: !0,
                        errorMessage: null
                    }, this.tick = () => {
                        let {
                            endTime: t
                        } = this.state;
                        if (this.setState({
                                currentTime: i()
                            }), null != t && i().isAfter(t)) {
                            var e;
                            null === (e = this.interval) || void 0 === e || e.stop()
                        }
                    }, this.getMinutesLeftText = () => {
                        let {
                            endTime: t
                        } = this.state;
                        if (this.state.loading) return x.default.Messages.LOADING_YOUR_PIN;
                        if (null != t && i().isAfter(t)) return x.default.Messages.YOUR_PIN_IS_EXPIRED;
                        if (null != t) return x.default.Messages.YOUR_PIN_EXPIRES.format({
                            time: t.fromNow()
                        })
                    }
                }
            }
            var S = N
        }
    }
]);