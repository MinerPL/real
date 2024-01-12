            "use strict";
            n.r(t), n.d(t, {
                setPageTitleNotificationCount: function() {
                    return l
                },
                flashPageTitle: function() {
                    return f
                },
                usePageTitle: function() {
                    return c
                },
                AppPageTitle: function() {
                    return g
                },
                usePageTitleManager: function() {
                    return m
                }
            }), n("222007");
            var s = n("884691"),
                i = n("308503"),
                r = n("773336");
            let a = {
                    base: r.isPlatformEmbedded ? void 0 : "Discord"
                },
                o = 0,
                d = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                u = (0, i.default)(() => ({
                    titles: [a],
                    notificationCount: void 0,
                    flashQueue: []
                }));

            function l(e) {
                u.setState({
                    notificationCount: e
                })
            }

            function f(e) {
                let t = {
                    ...d,
                    ...e,
                    id: o++
                };
                return t.count = Math.max(t.count, t.messages.length), u.setState(e => ({
                    flashQueue: [...e.flashQueue, t]
                })), () => _(t.id)
            }

            function _(e) {
                u.setState(t => ({
                    flashQueue: t.flashQueue.filter(t => t.id !== e)
                }))
            }

            function c(e) {
                s.useEffect(() => {
                    var t;
                    return t = e, u.setState(e => ({
                        titles: [t, ...e.titles]
                    })), () => {
                        u.setState(e => ({
                            titles: e.titles.filter(e => e !== t)
                        }))
                    }
                }, [...Object.values(e)])
            }

            function g(e) {
                return c(e), null
            }

            function m() {
                let {
                    skipsSettingDefaultPageTitle: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                s.useEffect(() => {
                    function e() {
                        u.setState({
                            flashQueue: []
                        })
                    }
                    return document.addEventListener("focusin", e, {
                        capture: !0
                    }), () => document.removeEventListener("focusin", e, {
                        capture: !0
                    })
                }, []);
                let t = function() {
                    let [e, t] = u(e => {
                        let {
                            flashQueue: t
                        } = e, n = (function(e) {
                            let t, n, s;
                            for (let i of e.titles) {
                                if (null != t && null != n) break;
                                t = null != t ? t : i.base, n = null != n ? n : i.location, s = null != s ? s : i.subsection
                            }
                            return [t, s, n]
                        })(e).filter(e => null != e).join(" | "), s = function(e) {
                            let {
                                notificationCount: t
                            } = e;
                            return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                        }(e);
                        return ["".concat(s).concat(n), t[0]]
                    }), [n, i] = s.useState(!1), r = s.useRef(0), a = null == t ? void 0 : t.messages[r.current % t.messages.length];
                    return s.useEffect(() => {
                        if (null == t) {
                            r.current = 0, i(!1);
                            return
                        }
                        if (document.hasFocus() && t.onlyWhenBlurred) {
                            _(t.id), i(!1);
                            return
                        }
                        let e = setInterval(() => {
                            if (r.current >= t.count) {
                                _(t.id), i(!1);
                                return
                            }
                            i(e => !e || (r.current += 1, !1))
                        }, t.interval);
                        return () => clearInterval(e)
                    }, [t]), n ? a : e
                }();
                s.useEffect(() => {
                    let n = t === a.base;
                    (!e || !n) && (document.title = t)
                }, [e, t])
            }