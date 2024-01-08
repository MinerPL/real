            "use strict";
            n.r(t), n.d(t, {
                ErrorBoundary: function() {
                    return l
                }
            }), n("70102"), n("222007");
            var a = n("884691");
            let i = (0, a.createContext)(null),
                r = {
                    didCatch: !1,
                    error: null
                };
            class l extends a.Component {
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, n, a = arguments.length, i = Array(a), l = 0; l < a; l++) i[l] = arguments[l];
                        null === (t = (n = this.props).onReset) || void 0 === t || t.call(n, {
                            args: i,
                            reason: "imperative-api"
                        }), this.setState(r)
                    }
                }
                componentDidCatch(e, t) {
                    var n, a;
                    null === (n = (a = this.props).onError) || void 0 === n || n.call(a, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: n
                    } = this.state, {
                        resetKeys: a
                    } = this.props;
                    if (n && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, n) => !Object.is(e, t[n]))
                        }(e.resetKeys, a)) {
                        var i, l;
                        null === (i = (l = this.props).onReset) || void 0 === i || i.call(l, {
                            next: a,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(r)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: n,
                        fallback: r
                    } = this.props, {
                        didCatch: l,
                        error: u
                    } = this.state, o = e;
                    if (l) {
                        let e = {
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, a.isValidElement)(r)) o = r;
                        else if ("function" == typeof t) o = t(e);
                        else if (n) o = (0, a.createElement)(n, e);
                        else throw u
                    }
                    return (0, a.createElement)(i.Provider, {
                        value: {
                            didCatch: l,
                            error: u,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, o)
                }
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = r
                }
            }