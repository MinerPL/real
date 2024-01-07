            "use strict";
            n.r(t), n.d(t, {
                DisableGradient: function() {
                    return l
                },
                default: function() {
                    return f
                }
            });
            var a, l, s = n("37983");
            n("884691");
            var i = n("414456"),
                r = n.n(i),
                o = n("145131"),
                u = n("600123"),
                d = n("434018");

            function c(e) {
                let {
                    disableGradients: t = !1,
                    renderHeader: n,
                    renderBottomLeft: a,
                    renderBottomCenter: l,
                    renderBottomRight: i,
                    renderCenter: r
                } = e;
                return (0, s.jsxs)("div", {
                    className: d.videoControls,
                    children: [!(0 === t || !0 === t) && (0, s.jsx)("div", {
                        className: d.gradientTop
                    }), !(1 === t || !0 === t) && (0, s.jsx)("div", {
                        className: d.gradientBottom
                    }), (0, s.jsx)("div", {
                        className: d.topControls,
                        children: null == n ? void 0 : n()
                    }), null == r ? void 0 : r(), (0, s.jsxs)("div", {
                        className: d.bottomControls,
                        children: [(0, s.jsx)(o.default, {
                            grow: 0,
                            shrink: 1,
                            basis: "50%",
                            align: o.default.Align.CENTER,
                            children: null == a ? void 0 : a()
                        }), (0, s.jsx)(o.default, {
                            grow: 1,
                            justify: o.default.Justify.CENTER,
                            align: o.default.Align.CENTER,
                            children: null == l ? void 0 : l()
                        }), (0, s.jsx)(o.default, {
                            grow: 0,
                            shrink: 1,
                            justify: o.default.Justify.END,
                            basis: "50%",
                            align: o.default.Align.CENTER,
                            children: null == i ? void 0 : i()
                        })]
                    })]
                })
            }

            function f(e) {
                let {
                    screenMessage: t,
                    onDoubleClick: n,
                    onActive: a,
                    onForceIdle: l,
                    idle: i,
                    children: o,
                    renderChatButton: f,
                    renderChatToasts: h,
                    renderVoiceChannelEffects: p,
                    style: m,
                    ...E
                } = e;
                return (0, s.jsxs)("div", {
                    className: r(d.root, {
                        [d.idle]: i
                    }),
                    style: m,
                    onMouseMove: a,
                    onMouseDown: a,
                    onMouseLeave: l,
                    onDoubleClick: n,
                    children: [o, null != t ? (0, s.jsx)(u.default, {
                        size: "large",
                        ...t
                    }) : null, (0, s.jsx)(c, {
                        ...E
                    }), null == f ? void 0 : f({
                        className: d.chatButton,
                        showingClassName: d.chatButtonShowing
                    }), null == h ? void 0 : h(), null == p ? void 0 : p()]
                })
            }(a = l || (l = {}))[a.TOP = 0] = "TOP", a[a.BOTTOM = 1] = "BOTTOM"