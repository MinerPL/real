            "use strict";
            n.r(t), n.d(t, {
                ContentBlob: function() {
                    return f
                },
                HEIGHT_COZY_MESSAGE_START: function() {
                    return C
                },
                HEIGHT_COZY_MESSAGE: function() {
                    return p
                },
                HEIGHT_COMPACT_MESSAGE_START: function() {
                    return m
                },
                HEIGHT_COMPACT_MESSAGE: function() {
                    return E
                },
                HEIGHT_ATTACHMEMT_PADDING: function() {
                    return g
                },
                default: function() {
                    return S
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                l = n.n(s),
                i = n("917351"),
                r = n.n(i),
                o = n("77078"),
                u = n("82182");

            function d(e) {
                return "".concat(e / 16, "rem")
            }

            function c() {
                return (0, a.jsx)("div", {
                    className: u.avatar,
                    style: {
                        opacity: .08
                    }
                })
            }

            function f(e) {
                let {
                    width: t,
                    opacity: n,
                    className: s
                } = e;
                return (0, a.jsx)("div", {
                    className: l(s, {
                        [u.blob]: !0
                    }),
                    style: {
                        width: d(t),
                        opacity: null != n ? n : r.random(.02, .08)
                    }
                })
            }

            function h(e) {
                let t, {
                        groupStart: n = !1,
                        compact: s = !1,
                        attachmentSpecs: i,
                        usernameWidth: d,
                        usernameOpacity: h,
                        className: C,
                        style: p
                    } = e,
                    m = s ? 50 : r.random(40, 50);
                return !s && n ? t = (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(c, {}), (0, a.jsx)(o.H, {
                        className: u.header,
                        children: (0, a.jsx)(f, {
                            width: d,
                            opacity: h,
                            className: u.username
                        })
                    })]
                }) : s && (t = (0, a.jsxs)(a.Fragment, {
                    children: [s && (0, a.jsx)(f, {
                        width: m,
                        className: l({
                            [u.compactTimestamp]: !0,
                            [u.hidden]: !n
                        })
                    }), (0, a.jsx)(o.H, {
                        className: u.header,
                        children: (0, a.jsx)(f, {
                            width: d,
                            opacity: h
                        })
                    })]
                })), (0, a.jsxs)("div", {
                    "aria-hidden": !0,
                    className: l(C, {
                        [u.wrapper]: !0,
                        [u.compact]: s,
                        [u.cozy]: !s
                    }),
                    style: p,
                    children: [(0, a.jsxs)("div", {
                        className: u.contents,
                        children: [t, (0, a.jsx)("div", {
                            className: u.content,
                            children: Array(r.random(3, 8)).fill(null).map(() => r.random(30, 80)).map((e, t) => (0, a.jsx)(f, {
                                width: e,
                                opacity: .06
                            }, t))
                        })]
                    }), null != i && (0, a.jsx)("div", {
                        className: u.attachmentContainer,
                        children: (0, a.jsx)("div", {
                            className: u.attachment,
                            style: {
                                opacity: .03,
                                ...i
                            }
                        })
                    })]
                })
            }
            let C = 44,
                p = 22,
                m = 26,
                E = 26,
                g = 6;

            function S(e) {
                let {
                    messages: t,
                    groupSpacing: n = 0,
                    compact: s = !1,
                    attachmentSpecs: l,
                    className: i
                } = e, o = null != l ? l.last ? t - 1 : r.random(0, t - 1) : -1, u = r.random(80, 120), c = r.random(.1, .2);
                return (0, a.jsx)(a.Fragment, {
                    children: Array(t).fill(null).map((e, t) => (0, a.jsx)(h, {
                        compact: s,
                        className: i,
                        usernameWidth: u,
                        usernameOpacity: c,
                        groupStart: 0 === t,
                        attachmentSpecs: t === o ? l : void 0,
                        style: 0 === t ? {
                            marginTop: d(n)
                        } : void 0
                    }, t))
                })
            }