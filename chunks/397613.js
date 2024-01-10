            "use strict";
            r.r(e), r.d(e, {
                ErrorBoundary: function() {
                    return s
                }
            }), r("70102"), r("222007");
            var n = r("884691");
            let i = (0, n.createContext)(null),
                a = {
                    didCatch: !1,
                    error: null
                };
            class s extends n.Component {
                static getDerivedStateFromError(t) {
                    return {
                        didCatch: !0,
                        error: t
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: t
                    } = this.state;
                    if (null !== t) {
                        for (var e, r, n = arguments.length, i = Array(n), s = 0; s < n; s++) i[s] = arguments[s];
                        null === (e = (r = this.props).onReset) || void 0 === e || e.call(r, {
                            args: i,
                            reason: "imperative-api"
                        }), this.setState(a)
                    }
                }
                componentDidCatch(t, e) {
                    var r, n;
                    null === (r = (n = this.props).onError) || void 0 === r || r.call(n, t, e)
                }
                componentDidUpdate(t, e) {
                    let {
                        didCatch: r
                    } = this.state, {
                        resetKeys: n
                    } = this.props;
                    if (r && null !== e.error && function() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return t.length !== e.length || t.some((t, r) => !Object.is(t, e[r]))
                        }(t.resetKeys, n)) {
                        var i, s;
                        null === (i = (s = this.props).onReset) || void 0 === i || i.call(s, {
                            next: n,
                            prev: t.resetKeys,
                            reason: "keys"
                        }), this.setState(a)
                    }
                }
                render() {
                    let {
                        children: t,
                        fallbackRender: e,
                        FallbackComponent: r,
                        fallback: a
                    } = this.props, {
                        didCatch: s,
                        error: o
                    } = this.state, u = t;
                    if (s) {
                        let t = {
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, n.isValidElement)(a)) u = a;
                        else if ("function" == typeof e) u = e(t);
                        else if (r) u = (0, n.createElement)(r, t);
                        else throw o
                    }
                    return (0, n.createElement)(i.Provider, {
                        value: {
                            didCatch: s,
                            error: o,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, u)
                }
                constructor(t) {
                    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = a
                }
            }