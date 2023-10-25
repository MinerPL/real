(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37897"], {
        610810: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("537851"),
                a = n("458109"),
                i = n("773670"),
                s = n("998744"),
                o = "hcaptcha-api-script-id",
                c = "hcaptchaOnLoad",
                d = [],
                p = function(e) {
                    void 0 === e && (e = {});
                    var t = (0, s.getMountElement)(e.scriptLocation);
                    delete e.scriptLocation;
                    var n = (0, s.getFrame)(t),
                        r = d.find(function(e) {
                            return e.scope === n.window
                        });
                    if (n.document.getElementById(o) && r) return r.promise;
                    var a = new Promise(function(r, a) {
                        n.window[c] = r;
                        var i = e.apihost || "https://js.hcaptcha.com";
                        delete e.apihost;
                        var d = n.document.createElement("script");
                        d.id = o, d.src = i + "/1/api.js?render=explicit&onload=" + c, d.async = void 0 === e.loadAsync || e.loadAsync, delete e.loadAsync, d.onerror = function(e) {
                            return a("script-error")
                        };
                        var p = (0, s.generateQuery)(e);
                        d.src += "" !== p ? "&" + p : "", t.appendChild(d)
                    });
                    return d.push({
                        promise: a,
                        scope: n.window
                    }), a
                },
                u = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this)._hcaptcha = void 0, n.renderCaptcha = n.renderCaptcha.bind((0, r.default)(n)), n.resetCaptcha = n.resetCaptcha.bind((0, r.default)(n)), n.removeCaptcha = n.removeCaptcha.bind((0, r.default)(n)), n.isReady = n.isReady.bind((0, r.default)(n)), n.loadCaptcha = n.loadCaptcha.bind((0, r.default)(n)), n.handleOnLoad = n.handleOnLoad.bind((0, r.default)(n)), n.handleSubmit = n.handleSubmit.bind((0, r.default)(n)), n.handleExpire = n.handleExpire.bind((0, r.default)(n)), n.handleError = n.handleError.bind((0, r.default)(n)), n.handleOpen = n.handleOpen.bind((0, r.default)(n)), n.handleClose = n.handleClose.bind((0, r.default)(n)), n.handleChallengeExpired = n.handleChallengeExpired.bind((0, r.default)(n)), n.ref = i.createRef(), n.apiScriptRequested = !1, n.state = {
                            isApiReady: !1,
                            isRemoved: !1,
                            elementId: t.id,
                            captchaId: ""
                        }, n
                    }(0, a.default)(t, e);
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        var e = this,
                            t = (0, s.getMountElement)(this.props.scriptLocation),
                            n = (0, s.getFrame)(t);
                        if (this._hcaptcha = n.window.hcaptcha || void 0, void 0 !== this._hcaptcha) {
                            this.setState({
                                isApiReady: !0
                            }, function() {
                                e.renderCaptcha()
                            });
                            return
                        }
                        this.loadCaptcha()
                    }, n.componentWillUnmount = function() {
                        var e = this.state.captchaId,
                            t = this._hcaptcha;
                        this.isReady() && (t.reset(e), t.remove(e))
                    }, n.shouldComponentUpdate = function(e, t) {
                        return this.state.isApiReady === t.isApiReady && this.state.isRemoved === t.isRemoved && !0
                    }, n.componentDidUpdate = function(e) {
                        var t = this;
                        !["sitekey", "size", "theme", "tabindex", "languageOverride", "endpoint"].every(function(n) {
                            return e[n] === t.props[n]
                        }) && this.removeCaptcha(function() {
                            t.renderCaptcha()
                        })
                    }, n.loadCaptcha = function() {
                        if (!this.apiScriptRequested) {
                            var e = this.props,
                                t = e.apihost,
                                n = e.assethost,
                                r = e.endpoint,
                                a = e.host,
                                i = e.imghost,
                                s = e.languageOverride,
                                o = e.reCaptchaCompat,
                                c = e.reportapi,
                                d = e.sentry,
                                u = e.custom,
                                l = e.loadAsync,
                                h = e.scriptLocation;
                            p({
                                apihost: t,
                                assethost: n,
                                endpoint: r,
                                hl: s,
                                host: a,
                                imghost: i,
                                recaptchacompat: !1 === o ? "off" : null,
                                reportapi: c,
                                sentry: d,
                                custom: u,
                                loadAsync: l,
                                scriptLocation: h
                            }).then(this.handleOnLoad).catch(this.handleError), this.apiScriptRequested = !0
                        }
                    }, n.renderCaptcha = function(e) {
                        if (this.state.isApiReady) {
                            var t = Object.assign({
                                    "open-callback": this.handleOpen,
                                    "close-callback": this.handleClose,
                                    "error-callback": this.handleError,
                                    "chalexpired-callback": this.handleChallengeExpired,
                                    "expired-callback": this.handleExpire,
                                    callback: this.handleSubmit
                                }, this.props, {
                                    hl: this.props.hl || this.props.languageOverride,
                                    languageOverride: void 0
                                }),
                                n = this._hcaptcha.render(this.ref.current, t);
                            this.setState({
                                isRemoved: !1,
                                captchaId: n
                            }, function() {
                                e && e()
                            })
                        }
                    }, n.resetCaptcha = function() {
                        var e = this.state.captchaId,
                            t = this._hcaptcha;
                        this.isReady() && t.reset(e)
                    }, n.removeCaptcha = function(e) {
                        var t = this.state.captchaId,
                            n = this._hcaptcha;
                        this.isReady() && this.setState({
                            isRemoved: !0
                        }, function() {
                            n.remove(t), e && e()
                        })
                    }, n.handleOnLoad = function() {
                        var e = this;
                        this.setState({
                            isApiReady: !0
                        }, function() {
                            var t = (0, s.getMountElement)(e.props.scriptLocation),
                                n = (0, s.getFrame)(t);
                            e._hcaptcha = n.window.hcaptcha, e.renderCaptcha(function() {
                                var t = e.props.onLoad;
                                t && t()
                            })
                        })
                    }, n.handleSubmit = function(e) {
                        var t = this.props.onVerify,
                            n = this.state,
                            r = n.isRemoved,
                            a = n.captchaId,
                            i = this._hcaptcha;
                        if (void 0 !== i && !r) {
                            var s = i.getResponse(a),
                                o = i.getRespKey(a);
                            t && t(s, o)
                        }
                    }, n.handleExpire = function() {
                        var e = this.props.onExpire,
                            t = this.state.captchaId,
                            n = this._hcaptcha;
                        this.isReady() && (n.reset(t), e && e())
                    }, n.handleError = function(e) {
                        var t = this.props.onError,
                            n = this.state.captchaId,
                            r = this._hcaptcha;
                        this.isReady() && r.reset(n), t && t(e)
                    }, n.isReady = function() {
                        var e = this.state,
                            t = e.isApiReady,
                            n = e.isRemoved;
                        return t && !n
                    }, n.handleOpen = function() {
                        this.isReady() && this.props.onOpen && this.props.onOpen()
                    }, n.handleClose = function() {
                        this.isReady() && this.props.onClose && this.props.onClose()
                    }, n.handleChallengeExpired = function() {
                        this.isReady() && this.props.onChalExpired && this.props.onChalExpired()
                    }, n.execute = function(e) {
                        void 0 === e && (e = null);
                        var t = this.state.captchaId,
                            n = this._hcaptcha;
                        if (this.isReady()) return e && "object" != typeof e && (e = null), n.execute(t, e)
                    }, n.setData = function(e) {
                        var t = this.state.captchaId,
                            n = this._hcaptcha;
                        this.isReady() && (e && "object" != typeof e && (e = null), n.setData(t, e))
                    }, n.getResponse = function() {
                        return this._hcaptcha.getResponse(this.state.captchaId)
                    }, n.getRespKey = function() {
                        return this._hcaptcha.getRespKey(this.state.captchaId)
                    }, n.render = function() {
                        var e = this.state.elementId;
                        return i.createElement("div", {
                            ref: this.ref,
                            id: e
                        })
                    }, t
                }(i.Component)
        },
        998744: function(e, t, n) {
            "use strict";

            function r(e) {
                return Object.entries(e).filter(function(e) {
                    e[0];
                    var t = e[1];
                    return t || !1 === t
                }).map(function(e) {
                    var t = e[0],
                        n = e[1];
                    return encodeURIComponent(t) + "=" + encodeURIComponent(n)
                }).join("&")
            }

            function a(e) {
                var t = e && e.ownerDocument || document,
                    n = t.defaultView || t.parentWindow || window;
                return {
                    document: t,
                    window: n
                }
            }

            function i(e) {
                return e || document.head
            }
            n.r(t), n.d(t, {
                generateQuery: function() {
                    return r
                },
                getFrame: function() {
                    return a
                },
                getMountElement: function() {
                    return i
                }
            })
        },
        985704: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("773670"),
                a = n.n(r);

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var s = function(e) {
                    var t = document.createElement("script");
                    t.async = !0, t.defer = !0, t.src = e, document.head && document.head.appendChild(t)
                },
                o = /(http|https):\/\/(www)?.+\/recaptcha/,
                c = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
                d = function(e) {
                    function t() {
                        for (var t, n = arguments.length, r = Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(r)) || this).container = void 0, t.timer = void 0, t.state = {
                            instanceKey: Date.now(),
                            ready: !1,
                            rendered: !1,
                            invisible: "invisible" === t.props.size
                        }, t._isAvailable = function() {
                            var e;
                            return !!(null == (e = window.grecaptcha) ? void 0 : e.ready)
                        }, t._inject = function() {
                            var e;
                            t.props.inject && (e = o, !Array.from(document.scripts).reduce(function(t, n) {
                                return t || e.test(n.src)
                            }, !1)) && s("https://recaptcha.net/recaptcha/api.js?render=explicit" + (t.props.hl ? "&hl=" + t.props.hl : ""))
                        }, t._prepare = function() {
                            var e = t.props,
                                n = e.explicit,
                                r = e.onLoad;
                            window.grecaptcha.ready(function() {
                                t.setState({
                                    ready: !0
                                }, function() {
                                    n || t.renderExplicitly(), r && r()
                                })
                            })
                        }, t._renderRecaptcha = function(e, t) {
                            return window.grecaptcha.render(e, t)
                        }, t._resetRecaptcha = function() {
                            return window.grecaptcha.reset(t.state.instanceId)
                        }, t._executeRecaptcha = function() {
                            return window.grecaptcha.execute(t.state.instanceId)
                        }, t._getResponseRecaptcha = function() {
                            return window.grecaptcha.getResponse(t.state.instanceId)
                        }, t._onVerify = function(e) {
                            return t.props.onVerify(e)
                        }, t._onExpire = function() {
                            return t.props.onExpire && t.props.onExpire()
                        }, t._onError = function() {
                            return t.props.onError && t.props.onError()
                        }, t._stopTimer = function() {
                            t.timer && clearInterval(t.timer)
                        }, t.componentDidMount = function() {
                            t._inject(), t._isAvailable() ? t._prepare() : t.timer = window.setInterval(function() {
                                t._isAvailable() && (t._prepare(), t._stopTimer())
                            }, 500)
                        }, t.componentWillUnmount = function() {
                            t._stopTimer()
                        }, t.renderExplicitly = function() {
                            return new Promise(function(e, n) {
                                if (t.state.rendered) return n(Error("This recaptcha instance has been already rendered."));
                                if (!t.state.ready || !t.container) return n(Error("Recaptcha is not ready for rendering yet."));
                                var r = t._renderRecaptcha(t.container, {
                                    sitekey: t.props.sitekey,
                                    theme: t.props.theme,
                                    size: t.props.size,
                                    badge: t.state.invisible ? t.props.badge : void 0,
                                    tabindex: t.props.tabindex,
                                    callback: t._onVerify,
                                    "expired-callback": t._onExpire,
                                    "error-callback": t._onError,
                                    isolated: t.state.invisible ? t.props.isolated : void 0,
                                    hl: t.state.invisible ? void 0 : t.props.hl
                                });
                                t.setState({
                                    instanceId: r,
                                    rendered: !0
                                }, function() {
                                    t.props.onRender && t.props.onRender(), e()
                                })
                            })
                        }, t.reset = function() {
                            return new Promise(function(e, n) {
                                if (t.state.rendered) return t._resetRecaptcha(), e();
                                n(Error("This recaptcha instance did not render yet."))
                            })
                        }, t.execute = function() {
                            return new Promise(function(e, n) {
                                return t.state.invisible ? (t.state.rendered && (t._executeRecaptcha(), e()), n(Error("This recaptcha instance did not render yet."))) : n(Error("Manual execution is only available for invisible size."))
                            })
                        }, t.getResponse = function() {
                            return new Promise(function(e, n) {
                                if (t.state.rendered) return e(t._getResponseRecaptcha());
                                n(Error("This recaptcha instance did not render yet."))
                            })
                        }, t.render = function() {
                            var e = a.createElement("div", {
                                key: t.state.instanceKey,
                                id: t.props.id,
                                className: t.props.className,
                                ref: function(e) {
                                    return t.container = e
                                }
                            });
                            return t.props.children ? t.props.children({
                                renderExplicitly: t.renderExplicitly,
                                reset: t.reset,
                                execute: t.execute,
                                getResponse: t.getResponse,
                                recaptchaComponent: e
                            }) : e
                        }, t
                    }
                    return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, i(t, e), t.getDerivedStateFromProps = function(e, t) {
                        var n = "invisible" === e.size;
                        return n !== t.invisible ? {
                            invisible: n
                        } : null
                    }, t.prototype.componentDidUpdate = function(e) {
                        var t = this;
                        c.reduce(function(n, r) {
                            return t.props[r] !== e[r] ? [].concat(n, [r]) : n
                        }, []).length > 0 && this.setState({
                            instanceKey: Date.now(),
                            rendered: !1
                        }, function() {
                            t.props.explicit || t.renderExplicitly()
                        })
                    }, t
                }(r.Component);
            d.defaultProps = {
                id: "",
                className: "g-recaptcha",
                theme: "light",
                size: "normal",
                badge: "bottomright",
                tabindex: 0,
                explicit: !1,
                inject: !0,
                isolated: !1,
                hl: ""
            }
        },
        954035: function(e, t, n) {
            "use strict";
            e.exports = n.p + "863db41a48a43395cd55.svg"
        },
        537851: function(e, t, n) {
            "use strict";

            function r(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        458109: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("986745");

            function a(e, t) {
                e.prototype = Object.create(t.prototype), e.prototype.constructor = e, (0, r.default)(e, t)
            }
        },
        986745: function(e, t, n) {
            "use strict";

            function r(e, t) {
                return (r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            })
        },
        507445: function(e, t, n) {
            "use strict";
            var r, a;

            function i(e) {
                return {
                    captchaService: e.captcha_service,
                    sitekey: e.captcha_sitekey,
                    options: {
                        rqdata: e.captcha_rqdata,
                        rqtoken: e.captcha_rqtoken
                    }
                }
            }
            n.r(t), n.d(t, {
                CaptchaError: function() {
                    return r
                },
                extractCaptchaPropsFromResponseBody: function() {
                    return i
                }
            }), (a = r || (r = {})).CANCEL = "cancel", a.ERROR = "error", a.EXPIRED = "expired"
        },
        158945: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var r = n("773670"),
                a = n("599110"),
                i = n("507445"),
                s = n("49111");

            function o(e) {
                let t = r.useRef(!0);
                return r.useEffect(() => () => {
                    if (t.current) null == e || e(i.CaptchaError.CANCEL)
                }, []), r.useEffect(() => (a.default.track(s.AnalyticEvents.OPEN_MODAL, {
                    type: "Guild Join Captcha"
                }), () => {
                    t.current && a.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
                        type: "Guild Join Captcha"
                    })
                }), [t]), () => {
                    t.current = !1
                }
            }
        },
        899945: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("77078"),
                s = n("421963"),
                o = n("659500"),
                c = n("158945"),
                d = n("49111"),
                p = n("782340"),
                u = n("698184"),
                l = n("954035");
            let h = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

            function f(e) {
                let {
                    onClose: t,
                    onCaptchaVerify: n,
                    onReject: f,
                    transitionState: _,
                    headerText: E,
                    bodyText: v,
                    rqtoken: m,
                    ...y
                } = e, C = (0, c.default)(f);
                return (a.useEffect(() => {
                    o.ComponentDispatch.subscribe(d.ComponentActions.LAYER_POP_ESCAPE_KEY, t)
                }, [t]), null != _ && h.has(_)) ? (0, r.jsx)(i.ModalRoot, {
                    transitionState: _,
                    "aria-label": "CAPTCHA",
                    className: u.modal,
                    children: (0, r.jsxs)(i.ModalContent, {
                        className: u.container,
                        children: [(0, r.jsx)(i.ModalCloseButton, {
                            className: u.close,
                            onClick: t
                        }), (0, r.jsx)("div", {
                            className: u.content,
                            children: _ !== i.ModalTransitionState.ENTERED ? (0, r.jsx)(i.Spinner, {
                                type: i.Spinner.Type.SPINNING_CIRCLE
                            }) : (0, r.jsxs)(r.Fragment, {
                                children: [(0, r.jsx)("div", {
                                    children: (0, r.jsx)("img", {
                                        src: l,
                                        alt: ""
                                    })
                                }), (0, r.jsx)("div", {
                                    className: u.title,
                                    "aria-hidden": !0,
                                    children: null != E ? E : p.default.Messages.GENERIC_CAPTCHA_HEADER
                                }), (0, r.jsx)("div", {
                                    children: null != v ? v : p.default.Messages.GENERIC_CAPTCHA_DESCRIPTION
                                }), (0, r.jsx)("div", {
                                    className: u.captchaContainer,
                                    children: (0, r.jsx)(s.default, {
                                        onVerify: e => {
                                            C(), n(e, m), t()
                                        },
                                        ...y
                                    })
                                })]
                            })
                        })]
                    })
                }) : null
            }
        },
        155084: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var r = n("990746"),
                a = n("773336"),
                i = n("827032"),
                s = n("49111");
            let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var c = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: r
                        } = e,
                        s = {
                            name: n,
                            tags: (0, i.getGlobalTagsArray)()
                        };
                    null != r && r.forEach(e => {
                        s.tags.push(e)
                    });
                    let c = function() {
                        if ((0, a.isWeb)()) return "web";
                        {
                            let e = (0, a.getPlatformName)();
                            return o.has(e) ? e : null
                        }
                    }();
                    null !== c && s.tags.push("platform:".concat(c)), this._metrics.push(s), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        r.default.post({
                            url: s.Endpoints.METRICS,
                            body: {
                                metrics: e
                            },
                            retries: 1
                        }).catch(t => {
                            this._metrics.length + e.length < 100 && (this._metrics = [...this._metrics, ...e])
                        })
                    }
                    this._metrics = []
                }
                constructor() {
                    this._metrics = [], this._intervalId = setInterval(() => {
                        this._flush()
                    }, 12e4)
                }
            }
        },
        538732: function(e, t, n) {
            "use strict";
            var r, a;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return r
                }
            }), (a = r || (r = {})).APP_CRASHED = "app_crashed", a.SOCKET_CRASHED = "socket_crashed", a.MESSAGE_REQUEST_VIEW = "message_request_view", a.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", a.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", a.FAMILY_CENTER_VIEW = "family_center_view", a.SAFETY_HUB_VIEW = "safety_hub_view", a.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", a.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", a.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", a.AFK_NOT_IDLE = "afk_not_idle", a.CAPTCHA_EVENT = "captcha_event", a.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", a.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", a.OTA_UPDATE_CHECK = "ota_update_check", a.OTA_ASSET_DOWNLOAD = "ota_asset_download"
        },
        421963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var r = n("920040"),
                a = n("773670"),
                i = n("610810"),
                s = n("985704"),
                o = n("462567"),
                c = n("538732"),
                d = n("367502"),
                p = n("155084"),
                u = n("599110"),
                l = n("49111"),
                h = e => {
                    let {
                        captchaService: t = d.CaptchaTypes.RECAPTCHA,
                        sitekey: n,
                        rqdata: h,
                        onRender: f,
                        onVerify: _,
                        onError: E,
                        onOpen: v,
                        onClose: m,
                        onChalExpired: y,
                        ...C
                    } = e, R = a.useRef(null), b = (0, o.v4)(), [A, g] = a.useState(!1), x = a.useCallback(e => {
                        u.default.track(l.AnalyticEvents.CAPTCHA_EVENT, {
                            captcha_event_name: e,
                            captcha_service: t,
                            sitekey: n,
                            captcha_flow_key: b
                        })
                    }, [b, t, n]), T = a.useCallback(e => {
                        p.default.increment({
                            name: c.MetricEvents.CAPTCHA_EVENT,
                            tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
                        })
                    }, [t]), w = a.useCallback(() => {
                        !A && (x("initial-load"), T("initial-load"), g(!0))
                    }, [T, A, x]), S = a.useCallback(() => {
                        if (A && null != h && "" !== h) {
                            var e;
                            null === (e = R.current) || void 0 === e || e.setData({
                                rqdata: h
                            })
                        }
                    }, [A, h, R]);
                    a.useEffect(() => {
                        S()
                    }, [S]), a.useEffect(() => {
                        w()
                    }, [w]);
                    let O = a.useCallback(() => {
                            x("error"), T("error"), S(), null == E || E()
                        }, [x, T, S, E]),
                        I = a.useCallback(e => {
                            x("verify"), T("verify"), _(e)
                        }, [T, _, x]),
                        k = a.useCallback(() => {
                            x("render"), null == f || f()
                        }, [f, x]),
                        N = a.useCallback(() => {
                            x("open"), T("open"), null == v || v()
                        }, [T, v, x]),
                        P = a.useCallback(() => {
                            x("close"), S(), null == m || m()
                        }, [m, x, S]),
                        D = a.useCallback(() => {
                            x("chal-expire"), null == y || y()
                        }, [y, x]);
                    return ((null == n || "" === n) && (n = l.RECAPTCHA_SITE_KEY), t === d.CaptchaTypes.RECAPTCHA) ? (0, r.jsx)(s.default, {
                        ...C,
                        onLoad: w,
                        onRender: k,
                        onVerify: I,
                        onError: O,
                        sitekey: n
                    }) : t === d.CaptchaTypes.HCAPTCHA ? (0, r.jsx)(i.default, {
                        ref: R,
                        ...C,
                        sitekey: n,
                        onLoad: w,
                        onError: O,
                        onVerify: I,
                        onChalExpired: D,
                        onOpen: N,
                        onClose: P
                    }) : (0, r.jsx)(s.default, {
                        ...C,
                        sitekey: n,
                        onLoad: w,
                        onRender: k,
                        onVerify: I,
                        onError: O
                    })
                }
        }
    }
]);