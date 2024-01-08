            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            }), n("222007");
            var a, l = n("37983"),
                s = n("884691"),
                i = n("811022"),
                r = n("517001"),
                u = n("697218");
            let o = new i.default("ErrorBoundary"),
                d = {
                    error: null,
                    componentStack: null
                };
            a = class extends s.Component {
                static getDerivedStateFromError(e) {
                    return {
                        error: e,
                        hasError: !0
                    }
                }
                componentDidCatch(e, t) {
                    let {
                        componentStack: n
                    } = t;
                    o.error("JANK ErrorBoundary", {
                        error: e,
                        componentStack: n
                    });
                    let {
                        onError: a
                    } = this.props;
                    null == a || a(e, n), this.setState({
                        error: e,
                        componentStack: n
                    })
                }
                render() {
                    let {
                        fallback: e,
                        children: t
                    } = this.props, {
                        error: n,
                        componentStack: a
                    } = this.state;
                    if (!(0, r.isStaffEnv)(u.default.getCurrentUser())) return t;
                    if (null != n) {
                        if ("function" == typeof e) {
                            let t = {
                                error: n,
                                componentStack: a,
                                onResetError: this.onResetError
                            };
                            return (0, l.jsx)(e, {
                                ...t
                            })
                        }
                        return (0, l.jsx)("h1", {
                            children: n.message
                        })
                    }
                    return t
                }
                constructor(...e) {
                    super(...e), this.state = {
                        ...d
                    }, this.onResetError = () => {
                        this.setState({
                            ...d
                        })
                    }
                }
            }