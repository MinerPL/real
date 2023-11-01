(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["88461"], {
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
                    return h
                }
            });
            var s = n("37983"),
                o = n("884691"),
                a = n("464934"),
                i = n("669491"),
                r = n("77078"),
                u = n("958638"),
                l = n("44930"),
                c = n("140014");
            let d = {
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
                        className: c.gamepadButtonContainer,
                        style: null != o ? {
                            cursor: "pointer"
                        } : void 0,
                        onClick: o,
                        children: [(0, s.jsx)(a, {
                            className: n,
                            color: t.color,
                            backgroundColor: i.default.unsafe_rawColors.PRIMARY_600.css
                        }), (0, s.jsx)("div", {
                            className: c.gamepadButtonText,
                            children: e
                        })]
                    })
                }
            }
            p.A = d.A, p.B = d.B;
            class f extends o.PureComponent {
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
            f.Button = p;
            var h = f
        },
        994509: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return x
                }
            });
            var s = n("37983"),
                o = n("884691"),
                a = n("872717"),
                i = n("992629"),
                r = n("145131"),
                u = n("364719"),
                l = n("599110"),
                c = n("49111"),
                d = n("782340"),
                p = n("202487"),
                f = n("120891"),
                h = n("265369"),
                g = n("799557");
            class m extends o.PureComponent {
                componentDidMount() {
                    l.default.track(c.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        previous_step: null,
                        current_step: "landing page",
                        platform_type: c.PlatformTypes.XBOX
                    })
                }
                handleLinkAccountPressed() {
                    a.default.get({
                        url: c.Endpoints.CONNECTIONS_AUTHORIZE_CONTINUATION(c.PlatformTypes.XBOX),
                        oldFormErrors: !0
                    }).then(t => {
                        window.location.href = t.body.url
                    }).catch(t => {
                        let e;
                        try {
                            e = t.body.message
                        } catch (n) {
                            e = String(t)
                        }
                        l.default.track(c.AnalyticEvents.ACCOUNT_LINK_FAILED, {
                            error_message: e,
                            status_code: t.status,
                            link_method: "pin",
                            current_step: "landing page",
                            platform_type: c.PlatformTypes.XBOX
                        }), this.setState({
                            errorMessage: e
                        })
                    })
                }
                goBack() {
                    window.location = c.Routes.CONNECTIONS(c.PlatformTypes.XBOX)
                }
                renderXboxButtons() {
                    return (0, s.jsxs)("div", {
                        className: f.xboxButtonContainer,
                        children: [(0, s.jsx)(i.default.Button, {
                            type: i.default.Button.A,
                            text: d.default.Messages.XBOX_LINK,
                            style: f.gamepadButton,
                            onClick: this.handleLinkAccountPressed
                        }), (0, s.jsx)(i.default.Button, {
                            type: i.default.Button.B,
                            text: d.default.Messages.CANCEL,
                            style: f.gamepadButton,
                            onClick: this.goBack
                        }), this.renderErrorMessage()]
                    })
                }
                renderErrorMessage() {
                    let {
                        errorMessage: t
                    } = this.state;
                    return null == t ? null : (0, s.jsxs)("div", {
                        className: f.errorMessageContainer,
                        children: [(0, s.jsx)(u.default, {
                            className: f.errorMessageIcon
                        }), (0, s.jsx)("div", {
                            className: f.errorMessage,
                            children: t
                        })]
                    })
                }
                renderContent() {
                    return (0, s.jsxs)("div", {
                        className: f.pageWrapper,
                        children: [(0, s.jsx)("img", {
                            alt: "Discord",
                            className: f.logo,
                            src: h
                        }), (0, s.jsxs)(r.default, {
                            className: f.container,
                            justify: r.default.Justify.CENTER,
                            align: r.default.Align.CENTER,
                            children: [(0, s.jsxs)(r.default.Child, {
                                className: p.leftPanel,
                                children: [(0, s.jsx)("div", {
                                    className: p.sectionTitle,
                                    children: d.default.Messages.DISCORD_RICH_PRESENCE
                                }), (0, s.jsx)("div", {
                                    className: p.sectionSubtitle,
                                    children: d.default.Messages.LINK_YOUR_XBOX_ACCOUNT_1
                                }), (0, s.jsx)("div", {
                                    className: p.sectionSubtitle,
                                    children: d.default.Messages.LINK_YOUR_XBOX_ACCOUNT_2
                                }), this.renderXboxButtons()]
                            }), (0, s.jsx)(r.default, {
                                className: f.rightPanel,
                                justify: r.default.Justify.END,
                                align: r.default.Align.CENTER,
                                children: (0, s.jsx)("img", {
                                    alt: "",
                                    className: f.image,
                                    src: g
                                })
                            })]
                        })]
                    })
                }
                render() {
                    return (0, s.jsx)(i.default, {
                        onAPressed: this.handleLinkAccountPressed,
                        onBPressed: this.goBack,
                        children: this.renderContent()
                    })
                }
                constructor(...t) {
                    super(...t), this.state = {
                        errorMessage: null
                    }
                }
            }
            var x = m
        }
    }
]);