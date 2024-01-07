            "use strict";
            n.r(t), n.d(t, {
                setPageTitleNotificationCount: function() {
                    return d
                },
                flashPageTitle: function() {
                    return c
                },
                usePageTitle: function() {
                    return E
                },
                AppPageTitle: function() {
                    return f
                },
                usePageTitleManager: function() {
                    return h
                }
            }), n("222007");
            var i = n("884691"),
                a = n("308503"),
                l = n("773336");
            let s = {
                    base: l.isPlatformEmbedded ? void 0 : "Discord"
                },
                r = 0,
                u = {
                    count: 3,
                    onlyWhenBlurred: !1,
                    interval: 1e3
                },
                o = (0, a.default)(() => ({
                    titles: [s],
                    notificationCount: void 0,
                    flashQueue: []
                }));

            function d(e) {
                o.setState({
                    notificationCount: e
                })
            }

            function c(e) {
                let t = {
                    ...u,
                    ...e,
                    id: r++
                };
                return t.count = Math.max(t.count, t.messages.length), o.setState(e => ({
                    flashQueue: [...e.flashQueue, t]
                })), () => _(t.id)
            }

            function _(e) {
                o.setState(t => ({
                    flashQueue: t.flashQueue.filter(t => t.id !== e)
                }))
            }

            function E(e) {
                i.useEffect(() => {
                    var t;
                    return t = e, o.setState(e => ({
                        titles: [t, ...e.titles]
                    })), () => {
                        o.setState(e => ({
                            titles: e.titles.filter(e => e !== t)
                        }))
                    }
                }, [...Object.values(e)])
            }

            function f(e) {
                return E(e), null
            }

            function h() {
                let {
                    skipsSettingDefaultPageTitle: e
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                i.useEffect(() => {
                    function e() {
                        o.setState({
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
                    let [e, t] = o(e => {
                        let {
                            flashQueue: t
                        } = e, n = (function(e) {
                            let t, n, i;
                            for (let a of e.titles) {
                                if (null != t && null != n) break;
                                t = null != t ? t : a.base, n = null != n ? n : a.location, i = null != i ? i : a.subsection
                            }
                            return [t, i, n]
                        })(e).filter(e => null != e).join(" | "), i = function(e) {
                            let {
                                notificationCount: t
                            } = e;
                            return null == t || 0 === t ? "" : t < 0 ? "• " : "(".concat(t, ") ")
                        }(e);
                        return ["".concat(i).concat(n), t[0]]
                    }), [n, a] = i.useState(!1), l = i.useRef(0), s = null == t ? void 0 : t.messages[l.current % t.messages.length];
                    return i.useEffect(() => {
                        if (null == t) {
                            l.current = 0, a(!1);
                            return
                        }
                        if (document.hasFocus() && t.onlyWhenBlurred) {
                            _(t.id), a(!1);
                            return
                        }
                        let e = setInterval(() => {
                            if (l.current >= t.count) {
                                _(t.id), a(!1);
                                return
                            }
                            a(e => !e || (l.current += 1, !1))
                        }, t.interval);
                        return () => clearInterval(e)
                    }, [t]), n ? s : e
                }();
                i.useEffect(() => {
                    let n = t === s.base;
                    (!e || !n) && (document.title = t)
                }, [e, t])
            }