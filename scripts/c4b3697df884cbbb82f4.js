(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["37897"], {
        912215: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("424973");
            var a = n("446873"),
                r = n("728983"),
                i = n("884691"),
                s = n("634849"),
                c = "hcaptcha-api-script-id",
                o = "hcaptchaOnLoad",
                d = [],
                p = function(e) {
                    void 0 === e && (e = {});
                    var t = (0, s.getMountElement)(e.scriptLocation);
                    delete e.scriptLocation;
                    var n = (0, s.getFrame)(t),
                        a = d.find(function(e) {
                            return e.scope === n.window
                        });
                    if (n.document.getElementById(c) && a) return a.promise;
                    var r = new Promise(function(a, r) {
                        n.window[o] = a;
                        var i = e.apihost || "https://js.hcaptcha.com";
                        delete e.apihost;
                        var d = n.document.createElement("script");
                        d.id = c, d.src = i + "/1/api.js?render=explicit&onload=" + o, d.async = void 0 === e.loadAsync || e.loadAsync, delete e.loadAsync, d.onerror = function(e) {
                            return r("script-error")
                        };
                        var p = (0, s.generateQuery)(e);
                        d.src += "" !== p ? "&" + p : "", t.appendChild(d)
                    });
                    return d.push({
                        promise: r,
                        scope: n.window
                    }), r
                },
                l = function(e) {
                    function t(t) {
                        var n;
                        return (n = e.call(this, t) || this)._hcaptcha = void 0, n.renderCaptcha = n.renderCaptcha.bind((0, a.default)(n)), n.resetCaptcha = n.resetCaptcha.bind((0, a.default)(n)), n.removeCaptcha = n.removeCaptcha.bind((0, a.default)(n)), n.isReady = n.isReady.bind((0, a.default)(n)), n.loadCaptcha = n.loadCaptcha.bind((0, a.default)(n)), n.handleOnLoad = n.handleOnLoad.bind((0, a.default)(n)), n.handleSubmit = n.handleSubmit.bind((0, a.default)(n)), n.handleExpire = n.handleExpire.bind((0, a.default)(n)), n.handleError = n.handleError.bind((0, a.default)(n)), n.handleOpen = n.handleOpen.bind((0, a.default)(n)), n.handleClose = n.handleClose.bind((0, a.default)(n)), n.handleChallengeExpired = n.handleChallengeExpired.bind((0, a.default)(n)), n.ref = i.createRef(), n.apiScriptRequested = !1, n.state = {
                            isApiReady: !1,
                            isRemoved: !1,
                            elementId: t.id,
                            captchaId: ""
                        }, n
                    }(0, r.default)(t, e);
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
                                a = e.endpoint,
                                r = e.host,
                                i = e.imghost,
                                s = e.languageOverride,
                                c = e.reCaptchaCompat,
                                o = e.reportapi,
                                d = e.sentry,
                                l = e.custom,
                                u = e.loadAsync,
                                h = e.scriptLocation;
                            p({
                                apihost: t,
                                assethost: n,
                                endpoint: a,
                                hl: s,
                                host: r,
                                imghost: i,
                                recaptchacompat: !1 === c ? "off" : null,
                                reportapi: o,
                                sentry: d,
                                custom: l,
                                loadAsync: u,
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
                            a = n.isRemoved,
                            r = n.captchaId,
                            i = this._hcaptcha;
                        if (void 0 !== i && !a) {
                            var s = i.getResponse(r),
                                c = i.getRespKey(r);
                            t && t(s, c)
                        }
                    }, n.handleExpire = function() {
                        var e = this.props.onExpire,
                            t = this.state.captchaId,
                            n = this._hcaptcha;
                        this.isReady() && (n.reset(t), e && e())
                    }, n.handleError = function(e) {
                        var t = this.props.onError,
                            n = this.state.captchaId,
                            a = this._hcaptcha;
                        this.isReady() && a.reset(n), t && t(e)
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
        634849: function(e, t, n) {
            "use strict";

            function a(e) {
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

            function r(e) {
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
                    return a
                },
                getFrame: function() {
                    return r
                },
                getMountElement: function() {
                    return i
                }
            })
        },
        67164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("808653"), n("70102");
            var a = n("884691"),
                r = n.n(a);

            function i(e, t) {
                return (i = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }
            var s = function(e) {
                    var t = document.createElement("script");
                    t.async = !0, t.defer = !0, t.src = e, document.head && document.head.appendChild(t)
                },
                c = /(http|https):\/\/(www)?.+\/recaptcha/,
                o = ["sitekey", "theme", "size", "badge", "tabindex", "hl", "isolated"],
                d = function(e) {
                    function t() {
                        for (var t, n = arguments.length, a = Array(n), i = 0; i < n; i++) a[i] = arguments[i];
                        return (t = e.call.apply(e, [this].concat(a)) || this).container = void 0, t.timer = void 0, t.state = {
                            instanceKey: Date.now(),
                            ready: !1,
                            rendered: !1,
                            invisible: "invisible" === t.props.size
                        }, t._isAvailable = function() {
                            var e;
                            return !!(null == (e = window.grecaptcha) ? void 0 : e.ready)
                        }, t._inject = function() {
                            var e;
                            t.props.inject && (e = c, !Array.from(document.scripts).reduce(function(t, n) {
                                return t || e.test(n.src)
                            }, !1)) && s("https://recaptcha.net/recaptcha/api.js?render=explicit" + (t.props.hl ? "&hl=" + t.props.hl : ""))
                        }, t._prepare = function() {
                            var e = t.props,
                                n = e.explicit,
                                a = e.onLoad;
                            window.grecaptcha.ready(function() {
                                t.setState({
                                    ready: !0
                                }, function() {
                                    n || t.renderExplicitly(), a && a()
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
                                var a = t._renderRecaptcha(t.container, {
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
                                    instanceId: a,
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
                            var e = r.createElement("div", {
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
                        o.reduce(function(n, a) {
                            return t.props[a] !== e[a] ? [].concat(n, [a]) : n
                        }, []).length > 0 && this.setState({
                            instanceKey: Date.now(),
                            rendered: !1
                        }, function() {
                            t.props.explicit || t.renderExplicitly()
                        })
                    }, t
                }(a.Component);
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
        446873: function(e, t, n) {
            "use strict";

            function a(e) {
                if (void 0 === e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("854508"), n("70102")
        },
        507445: function(e, t, n) {
            "use strict";
            var a, r;

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
                    return a
                },
                extractCaptchaPropsFromResponseBody: function() {
                    return i
                }
            }), (r = a || (a = {})).CANCEL = "cancel", r.ERROR = "error", r.EXPIRED = "expired"
        },
        158945: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("884691"),
                r = n("599110"),
                i = n("507445"),
                s = n("49111");

            function c(e) {
                let t = a.useRef(!0);
                return a.useEffect(() => () => {
                    t.current && (null == e || e(i.CaptchaError.CANCEL))
                }, []), a.useEffect(() => (r.default.track(s.AnalyticEvents.OPEN_MODAL, {
                    type: "Guild Join Captcha"
                }), () => {
                    t.current && r.default.track(s.AnalyticEvents.MODAL_DISMISSED, {
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
            }), n("222007");
            var a = n("37983"),
                r = n("884691"),
                i = n("77078"),
                s = n("421963"),
                c = n("659500"),
                o = n("158945"),
                d = n("49111"),
                p = n("782340"),
                l = n("352630"),
                u = n("954035");
            let h = new Set([i.ModalTransitionState.ENTERING, i.ModalTransitionState.ENTERED]);

            function f(e) {
                let {
                    onClose: t,
                    onCaptchaVerify: n,
                    onReject: f,
                    transitionState: _,
                    headerText: E,
                    bodyText: m,
                    rqtoken: v,
                    ...C
                } = e, y = (0, o.default)(f);
                return (r.useEffect(() => {
                    c.ComponentDispatch.subscribe(d.ComponentActions.LAYER_POP_ESCAPE_KEY, t)
                }, [t]), null != _ && h.has(_)) ? (0, a.jsx)(i.ModalRoot, {
                    transitionState: _,
                    "aria-label": "CAPTCHA",
                    className: l.modal,
                    children: (0, a.jsxs)(i.ModalContent, {
                        className: l.container,
                        children: [(0, a.jsx)(i.ModalCloseButton, {
                            className: l.close,
                            onClick: t
                        }), (0, a.jsx)("div", {
                            className: l.content,
                            children: _ !== i.ModalTransitionState.ENTERED ? (0, a.jsx)(i.Spinner, {
                                type: i.Spinner.Type.SPINNING_CIRCLE
                            }) : (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    children: (0, a.jsx)("img", {
                                        src: u,
                                        alt: ""
                                    })
                                }), (0, a.jsx)("div", {
                                    className: l.title,
                                    "aria-hidden": !0,
                                    children: null != E ? E : p.default.Messages.GENERIC_CAPTCHA_HEADER
                                }), (0, a.jsx)("div", {
                                    children: null != m ? m : p.default.Messages.GENERIC_CAPTCHA_DESCRIPTION
                                }), (0, a.jsx)("div", {
                                    className: l.captchaContainer,
                                    children: (0, a.jsx)(s.default, {
                                        onVerify: e => {
                                            y(), n(e, v), t()
                                        },
                                        ...C
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
                    return d
                }
            }), n("222007"), n("424973");
            var a = n("615361"),
                r = n("872717"),
                i = n("773336"),
                s = n("827032"),
                c = n("49111");
            let o = new Set(["darwin", "linux", "win32", "ios", "android"]);
            var d = new class e {
                increment(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        {
                            name: n,
                            tags: r
                        } = e,
                        c = {
                            name: n,
                            tags: (0, s.getGlobalTagsArray)()
                        };
                    null != r && r.forEach(e => {
                        c.tags.push(e)
                    });
                    let d = function() {
                        if ((0, i.isWeb)()) return "web";
                        {
                            let e = (0, i.getPlatformName)();
                            return o.has(e) ? e : null
                        }
                    }();
                    null != d && c.tags.push("platform:".concat(d));
                    let p = function() {
                        let e = "{{cf_shim}}RELEASE_CHANNEL{{/cf_shim}}";
                        return a.ReleaseChannelsSets.ALL.has(e) ? e : null
                    }();
                    null != p && c.tags.push("release_channel:".concat(p)), this._metrics.push(c), (t || this._metrics.length >= 100) && this._flush()
                }
                _flush() {
                    if (this._metrics.length > 0) {
                        let e = [...this._metrics];
                        r.default.post({
                            url: c.Endpoints.METRICS,
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
        421963: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var a = n("37983"),
                r = n("884691"),
                i = n("912215"),
                s = n("67164"),
                c = n("748820"),
                o = n("432710"),
                d = n("486196"),
                p = n("155084"),
                l = n("599110"),
                u = n("49111"),
                h = e => {
                    let {
                        captchaService: t = d.CaptchaTypes.RECAPTCHA,
                        sitekey: n,
                        rqdata: h,
                        onRender: f,
                        onVerify: _,
                        onError: E,
                        onOpen: m,
                        onClose: v,
                        onChalExpired: C,
                        ...y
                    } = e, R = r.useRef(null), A = (0, c.v4)(), [b, g] = r.useState(!1), T = r.useCallback(e => {
                        l.default.track(u.AnalyticEvents.CAPTCHA_EVENT, {
                            captcha_event_name: e,
                            captcha_service: t,
                            sitekey: n,
                            captcha_flow_key: A
                        })
                    }, [A, t, n]), x = r.useCallback(e => {
                        p.default.increment({
                            name: o.MetricEvents.CAPTCHA_EVENT,
                            tags: ["event_name:".concat(e), "captcha_service:".concat(t)]
                        })
                    }, [t]), S = r.useCallback(() => {
                        !b && (T("initial-load"), x("initial-load"), g(!0))
                    }, [x, b, T]), w = r.useCallback(() => {
                        if (b && null != h && "" !== h) {
                            var e;
                            null === (e = R.current) || void 0 === e || e.setData({
                                rqdata: h
                            })
                        }
                    }, [b, h, R]);
                    r.useEffect(() => {
                        w()
                    }, [w]), r.useEffect(() => {
                        S()
                    }, [S]);
                    let I = r.useCallback(() => {
                            T("error"), x("error"), w(), null == E || E()
                        }, [T, x, w, E]),
                        O = r.useCallback(e => {
                            T("verify"), x("verify"), _(e)
                        }, [x, _, T]),
                        N = r.useCallback(() => {
                            T("render"), null == f || f()
                        }, [f, T]),
                        k = r.useCallback(() => {
                            T("open"), x("open"), null == m || m()
                        }, [x, m, T]),
                        L = r.useCallback(() => {
                            T("close"), w(), null == v || v()
                        }, [v, T, w]),
                        D = r.useCallback(() => {
                            T("chal-expire"), null == C || C()
                        }, [C, T]);
                    return ((null == n || "" === n) && (n = u.RECAPTCHA_SITE_KEY), t === d.CaptchaTypes.RECAPTCHA) ? (0, a.jsx)(s.default, {
                        ...y,
                        onLoad: S,
                        onRender: N,
                        onVerify: O,
                        onError: I,
                        sitekey: n
                    }) : t === d.CaptchaTypes.HCAPTCHA ? (0, a.jsx)(i.default, {
                        ref: R,
                        ...y,
                        sitekey: n,
                        onLoad: S,
                        onError: I,
                        onVerify: O,
                        onChalExpired: D,
                        onOpen: k,
                        onClose: L
                    }) : (0, a.jsx)(s.default, {
                        ...y,
                        sitekey: n,
                        onLoad: S,
                        onRender: N,
                        onVerify: O,
                        onError: I
                    })
                }
        },
        432710: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                MetricEvents: function() {
                    return a
                }
            }), n("222007"), (r = a || (a = {})).APP_CRASHED = "app_crashed", r.SOCKET_CRASHED = "socket_crashed", r.MESSAGE_REQUEST_VIEW = "message_request_view", r.SPAM_MESSAGE_REQUEST_VIEW = "spam_message_request_view", r.SPAM_MESSAGE_REQUEST_ERROR_VIEW = "spam_message_request_error_view", r.FAMILY_CENTER_VIEW = "family_center_view", r.SAFETY_HUB_VIEW = "safety_hub_view", r.MESSAGE_REQUEST_COUNT_DRIFT = "message_request_count_drift", r.FORUM_CHANNEL_GRID_AUTO_ENABLED = "forum_channel_grid_auto_enabled", r.REMIX_FONT_LOADING_ERROR = "remix_font_loading_error", r.AFK_NOT_IDLE = "afk_not_idle", r.CAPTCHA_EVENT = "captcha_event", r.SAFETY_WARNING_VIEW = "safety_warning_view", r.SAFETY_WARNING_MODAL_VIEW = "safety_warning_modal_view", r.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = "explicit_media_scan_client_timed_out", r.OTA_CHECK_ATTEMPT = "OtaCheckAttempt", r.OTA_ASSET_DOWNLOAD_ATTEMPT = "OtaAssetDownloadAttempt", r.OTA_UPDATE_CHECK = "ota_update_check", r.OTA_ASSET_DOWNLOAD = "ota_asset_download"
        },
        615361: function(e, t, n) {
            "use strict";
            var a, r;
            n.r(t), n.d(t, {
                ReleaseChannelsSets: function() {
                    return i
                }
            }), n("222007"), (r = a || (a = {})).STABLE = "stable", r.BETA = "beta", r.ALPHA = "alpha", r.PTB = "ptb", r.CANARY = "canary", r.STAGING = "staging", r.DEVELOPMENT = "development";
            let i = {
                ALL: new Set(["alpha", "beta", "canary", "development", "ptb", "stable", "staging"])
            }
        }
    }
]);