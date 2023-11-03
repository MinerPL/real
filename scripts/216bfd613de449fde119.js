(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["82374"], {
        582247: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var o = function() {
                    function t(t, e) {
                        for (var n = 0; n < e.length; n++) {
                            var o = e[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
                        }
                    }
                    return function(e, n, o) {
                        return n && t(e.prototype, n), o && t(e, o), e
                    }
                }(),
                i = function(t) {
                    return t && t.__esModule ? t : {
                        default: t
                    }
                }(n("884691")),
                s = n("315401"),
                a = function(t) {
                    function e(t, n) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw TypeError("Cannot call a class as a function")
                        }(this, e);
                        var o = function(t, e) {
                            if (!t) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e && ("object" == typeof e || "function" == typeof e) ? e : t
                        }(this, (e.__proto__ || Object.getPrototypeOf(e)).call(this, t, n));
                        return o.padState = {
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
                        }, o
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
                    }(e, t), o(e, [{
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
                                    o = t.buttons[e].value,
                                    i = this.buttonIndexToButtonName(e);
                                this.updateButton(i, n);
                                var s = this.buttonIndexToAxisName(e);
                                this.updateAxis(s, o)
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
                                    o = e * (n ? -1 : 1);
                                if (Math.abs(o) < this.props.deadZone && (o = 0), n && (t = t.substr(1)), this.padState.axis[t] !== o) {
                                    var i = this.padState.axis[t];
                                    this.padState.axis[t] = o, this.props.onAxisChange(t, o, i), "LeftStickX" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onRight(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onLeft()), "LeftStickY" === t && (i <= this.props.stickThreshold && o > this.props.stickThreshold && this.props.onUp(), i >= -this.props.stickThreshold && o < -this.props.stickThreshold && this.props.onDown())
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
                            return i.default.Children.only(this.props.children)
                        }
                    }]), e
                }(i.default.Component);
            a.defaultProps = {
                layout: s.XBOX,
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
            }, e.default = a
        },
        464934: function(t, e, n) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.layouts = e.Gamepad = void 0;
            var o = s(n("582247")),
                i = s(n("315401"));

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            o.default.layouts = i.default, e.Gamepad = o.default, e.layouts = i.default, e.default = o.default
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
            var o = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }(n("490780"));
            e.XBOX = o.default, e.default = {
                XBOX: o.default
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
                    return p
                }
            });
            var o = n("37983"),
                i = n("884691"),
                s = n("464934"),
                a = n("669491"),
                r = n("77078"),
                u = n("958638"),
                l = n("44930"),
                c = n("140014");
            let d = {
                A: {
                    Icon: u.default,
                    color: a.default.unsafe_rawColors.PRIMARY_400.css
                },
                B: {
                    Icon: l.default,
                    color: a.default.unsafe_rawColors.RED_360.css
                }
            };
            class f extends i.Component {
                render() {
                    let {
                        type: t,
                        text: e,
                        style: n,
                        onClick: i
                    } = this.props, s = t.Icon;
                    return (0, o.jsxs)(r.Clickable, {
                        className: c.gamepadButtonContainer,
                        style: null != i ? {
                            cursor: "pointer"
                        } : void 0,
                        onClick: i,
                        children: [(0, o.jsx)(s, {
                            className: n,
                            color: t.color,
                            backgroundColor: a.default.unsafe_rawColors.PRIMARY_600.css
                        }), (0, o.jsx)("div", {
                            className: c.gamepadButtonText,
                            children: e
                        })]
                    })
                }
            }
            f.A = d.A, f.B = d.B;
            class h extends i.PureComponent {
                render() {
                    let {
                        onAPressed: t,
                        onBPressed: e,
                        children: n
                    } = this.props;
                    if (null == n) return null;
                    let a = i.cloneElement(i.Children.only(n), {
                        hasGamepad: this.state.gamepadConnected
                    });
                    return (0, o.jsx)(s.default, {
                        onA: t,
                        onB: e,
                        onConnect: this.setGamepadConnected,
                        onDisconnect: this.setGamepadDisconnected,
                        children: a
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
            h.Button = f;
            var p = h
        },
        923107: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                AIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M20.845 21.321a.5.5 0 0 1-.467.679h-1.516a1 1 0 0 1-.94-.66l-1.551-4.276H7.625l-1.55 4.277a1 1 0 0 1-.94.659H3.617a.5.5 0 0 1-.467-.678l7.087-18.594a1 1 0 0 1 .935-.644h1.624a1 1 0 0 1 .934.643l7.115 18.594ZM11.984 5.086l-3.435 9.438h6.87l-3.435-9.438Z",
                        className: r
                    })
                })
            }
        },
        993469: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                BIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M6.459 22a1 1 0 0 1-1-1V3.084a1 1 0 0 1 1-1h7.053c1.578 0 2.838.462 3.781 1.386.943.923 1.414 2.145 1.414 3.665 0 1.174-.269 2.127-.808 2.858a4.636 4.636 0 0 1-2.02 1.587c2.463.616 3.694 2.252 3.694 4.907 0 1.886-.548 3.28-1.645 4.185-1.097.885-2.646 1.328-4.647 1.328H6.459Zm6.158-11.43c1.078 0 1.915-.25 2.511-.75.597-.5.895-1.26.895-2.28 0-1.02-.298-1.78-.895-2.28-.596-.52-1.433-.78-2.51-.78H8.171v6.09h4.445Zm.606 9.034c1.116 0 1.992-.27 2.627-.808.654-.558.981-1.395.981-2.511s-.327-1.944-.981-2.482c-.635-.54-1.51-.809-2.627-.809h-5.05v6.61h5.05Z",
                        className: r
                    })
                })
            }
        },
        779807: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                WarningIcon: function() {
                    return a
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("669491"),
                s = n("75196");
            let a = t => {
                let {
                    width: e = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = t;
                return (0, o.jsx)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: e,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, o.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M9.996 3.103c.87-1.47 3.139-1.47 4.008 0l8.71 14.742C23.552 19.264 22.449 21 20.71 21H3.29c-1.74 0-2.842-1.736-2.004-3.155l8.71-14.742ZM13.25 17.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.188-3.748.372-5.94A1 1 0 0 0 12.436 7h-.871a1 1 0 0 0-.999 1.062l.372 5.94a1.064 1.064 0 0 0 2.124 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        364719: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("779807"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 16,
                        height: n = 16,
                        color: i = "currentColor",
                        foreground: s,
                        ...r
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: e,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, o.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, o.jsx)("path", {
                                className: s,
                                fill: i,
                                d: "M1,21 L23,21 L12,2 L1,21 L1,21 Z M13,18 L11,18 L11,16 L13,16 L13,18 L13,18 Z M13,14 L11,14 L11,10 L13,10 L13,14 L13,14 Z"
                            })
                        })
                    })
                }, s.WarningIcon)
        },
        958638: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("923107"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 30,
                        height: n = 30,
                        color: i = "currentColor",
                        foreground: s,
                        background: r,
                        backgroundColor: u,
                        ...l
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 30 30",
                        children: (0, o.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, o.jsx)("circle", {
                                cx: "15",
                                cy: "15",
                                r: "15",
                                fill: u,
                                className: r
                            }), (0, o.jsx)("path", {
                                d: "M22.1001 22H19.3946L18.2136 18.6522H11.9866L10.8056 22H8.1001L13.7259 7H16.4743L22.1001 22ZM15.1001 9.76087L12.8026 16.3261H17.3976L15.1001 9.76087Z",
                                fill: i,
                                className: s
                            })]
                        })
                    })
                }, s.AIcon)
        },
        44930: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, {
                default: function() {
                    return r
                }
            });
            var o = n("37983");
            n("884691");
            var i = n("469563"),
                s = n("993469"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(t) {
                    let {
                        width: e = 30,
                        height: n = 30,
                        color: i = "currentColor",
                        foreground: s,
                        background: r,
                        backgroundColor: u,
                        ...l
                    } = t;
                    return (0, o.jsx)("svg", {
                        ...(0, a.default)(l),
                        width: e,
                        height: n,
                        viewBox: "0 0 30 30",
                        children: (0, o.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, o.jsx)("circle", {
                                cx: "15",
                                cy: "15",
                                r: "15",
                                fill: u,
                                className: r
                            }), (0, o.jsx)("path", {
                                d: "M10.116 22.3089V7.12891H16.518C17.7206 7.12891 18.6886 7.48091 19.422 8.18491C20.17 8.88891 20.544 9.82024 20.544 10.9789C20.544 11.8882 20.3313 12.6216 19.906 13.1789C19.4953 13.7216 18.96 14.1176 18.3 14.3669C20.192 14.8216 21.138 16.0682 21.138 18.1069C21.138 19.5296 20.7126 20.5856 19.862 21.2749C19.026 21.9642 17.838 22.3089 16.298 22.3089H10.116ZM15.638 13.4209C17.2073 13.4209 17.992 12.7462 17.992 11.3969C17.992 10.7076 17.7866 10.1942 17.376 9.85691C16.9653 9.51957 16.386 9.35091 15.638 9.35091H12.668V13.4209H15.638ZM15.968 20.0869C16.76 20.0869 17.3906 19.9109 17.86 19.5589C18.344 19.2069 18.586 18.6422 18.586 17.8649C18.586 17.0876 18.344 16.5229 17.86 16.1709C17.3906 15.8189 16.76 15.6429 15.968 15.6429H12.668V20.0869H15.968Z",
                                fill: i,
                                className: s
                            })]
                        })
                    })
                }, s.BIcon)
        }
    }
]);