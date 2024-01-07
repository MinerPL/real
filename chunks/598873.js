            "use strict";
            n.r(t), n.d(t, {
                PictureInPictureHeader: function() {
                    return S
                },
                default: function() {
                    return C
                }
            });
            var i = n("37983");
            n("884691");
            var a = n("414456"),
                l = n.n(a),
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
                P = n("782340"),
                I = n("374142");

            function S(e) {
                let {
                    title: t,
                    onJumpToChannel: n,
                    idle: a,
                    preventIdleComponent: l
                } = e, s = (0, o.useStateFromStores)([u.default], () => u.default.getChannelId()), c = null != s ? (0, i.jsx)(h.default, {
                    voiceChannelId: s,
                    idle: a
                }) : null;
                return (0, i.jsxs)(l, {
                    className: I.headerIdleContainer,
                    children: [(0, i.jsxs)(d.Clickable, {
                        className: I.headerTitle,
                        onClick: n,
                        children: [(0, i.jsx)(f.default, {
                            "aria-label": P.default.Messages.OPEN_IN_THEATER,
                            className: I.backButton,
                            width: 20,
                            height: 20
                        }), (0, i.jsx)(m.default, {
                            className: I.headerText,
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
                    onJumpToChannel: a,
                    backgroundKey: o,
                    onActive: r,
                    onForceIdle: d,
                    renderBottomLeftControls: u,
                    renderBottomRightControls: f,
                    screenMessage: m,
                    hideControls: h = !1,
                    className: P,
                    innerClassName: C,
                    ...g
                } = e;
                return (0, i.jsxs)("div", {
                    onMouseMove: r,
                    onMouseDown: r,
                    onMouseLeave: d,
                    className: l(I.pictureInPictureVideo, {
                        [I.idle]: n
                    }, P),
                    onDoubleClick: a,
                    children: [(0, i.jsx)(s.default, {
                        children: (0, i.jsx)(p.BackgroundTransition, {
                            className: C,
                            children: t
                        }, o)
                    }), null != m ? (0, i.jsx)(v.default, {
                        size: "small",
                        ...m
                    }) : null, !h && (0, i.jsxs)("div", {
                        className: I.videoControls,
                        children: [(0, i.jsx)("div", {
                            className: I.topControls,
                            children: (0, i.jsx)(S, {
                                idle: n,
                                onJumpToChannel: a,
                                ...g
                            })
                        }), (0, i.jsxs)("div", {
                            className: I.bottomControls,
                            children: [(0, i.jsx)(c.default, {
                                grow: 0,
                                shrink: 1,
                                basis: "50%",
                                align: c.default.Align.CENTER,
                                className: I.bottomLeftControls,
                                children: null == u ? void 0 : u()
                            }), (0, i.jsx)(c.default, {
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