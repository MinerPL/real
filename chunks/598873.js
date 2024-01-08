            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureHeader: function() {
                    return S
                },
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                i = n.n(l),
                o = n("446674"),
                r = n("669491"),
                s = n("266491"),
                d = n("77078"),
                u = n("945956"),
                c = n("145131"),
                p = n("276999"),
                f = n("531470"),
                m = n("713573"),
                h = n("301178"),
                v = n("600123"),
                I = n("782340"),
                P = n("374142");

            function S(e) {
                let {
                    title: t,
                    onJumpToChannel: n,
                    idle: l,
                    preventIdleComponent: i
                } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.getChannelId()), c = null != s ? (0, a.jsx)(h.default, {
                    voiceChannelId: s,
                    idle: l
                }) : null;
                return (0, a.jsxs)(i, {
                    className: P.headerIdleContainer,
                    children: [(0, a.jsxs)(d.Clickable, {
                        className: P.headerTitle,
                        onClick: n,
                        children: [(0, a.jsx)(f.default, {
                            "aria-label": I.default.Messages.OPEN_IN_THEATER,
                            className: P.backButton,
                            width: 20,
                            height: 20
                        }), (0, a.jsx)(m.default, {
                            className: P.headerText,
                            size: m.default.Sizes.SIZE_16,
                            color: r.default.unsafe_rawColors.WHITE_500.css,
                            children: t
                        })]
                    }), c]
                })
            }

            function C(e) {
                let {
                    children: t,
                    idle: n,
                    onJumpToChannel: l,
                    backgroundKey: o,
                    onActive: r,
                    onForceIdle: d,
                    renderBottomLeftControls: u,
                    renderBottomRightControls: f,
                    screenMessage: m,
                    hideControls: h = !1,
                    className: I,
                    innerClassName: C,
                    ...g
                } = e;
                return (0, a.jsxs)("div", {
                    onMouseMove: r,
                    onMouseDown: r,
                    onMouseLeave: d,
                    className: i(P.pictureInPictureVideo, {
                        [P.idle]: n
                    }, I),
                    onDoubleClick: l,
                    children: [(0, a.jsx)(s.default, {
                        children: (0, a.jsx)(p.BackgroundTransition, {
                            className: C,
                            children: t
                        }, o)
                    }), null != m ? (0, a.jsx)(v.default, {
                        size: "small",
                        ...m
                    }) : null, !h && (0, a.jsxs)("div", {
                        className: P.videoControls,
                        children: [(0, a.jsx)("div", {
                            className: P.topControls,
                            children: (0, a.jsx)(S, {
                                idle: n,
                                onJumpToChannel: l,
                                ...g
                            })
                        }), (0, a.jsxs)("div", {
                            className: P.bottomControls,
                            children: [(0, a.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                className: P.bottomLeftControls,
                                children: null == u ? void 0 : u()
                            }), (0, a.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                justify: c.default.Justify.END,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                children: null == f ? void 0 : f()
                            })]
                        })]
                    })]
                })
            }