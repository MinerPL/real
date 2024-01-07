            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("769846"),
                o = n("77078"),
                i = n("817477"),
                s = n("944654"),
                r = n("944832"),
                d = n("79798"),
                c = n("945330"),
                f = n("159885"),
                E = n("732523"),
                p = n("988268"),
                m = n("782340"),
                T = n("442605");
            let _ = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MIN_WIDTH),
                S = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MAX_WIDTH),
                C = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_MARGIN),
                N = (0, f.cssValueToNumber)(u.default.INTERACTION_IFRAME_MODAL_MODAL_HEADER_HEIGHT);

            function I(e) {
                var t;
                let {
                    title: n,
                    onClose: u
                } = e, {
                    applicationIconURL: f,
                    applicationName: I,
                    queryParams: v,
                    iframeUrl: O
                } = (0, E.useIframeModalState)(e), {
                    width: L,
                    height: A
                } = (0, s.useScreenDimensions)(), h = a.useMemo(() => {
                    let e = Math.min((A - N - 2 * C) * 16 / 9, S);
                    return Math.max(_, Math.min(L - 2 * C, e))
                }, [L, A]);
                return (0, l.jsx)(o.ModalRoot, {
                    ...e,
                    size: o.ModalSize.DYNAMIC,
                    className: T.root,
                    children: (0, l.jsxs)("div", {
                        style: {
                            width: h
                        },
                        children: [(0, l.jsxs)(o.ModalHeader, {
                            separator: !1,
                            className: T.modalHeader,
                            children: [(0, l.jsx)(o.Avatar, {
                                src: f,
                                size: o.AvatarSizes.SIZE_32,
                                "aria-label": I,
                                className: T.applicationIcon
                            }), (0, l.jsxs)("div", {
                                className: T.flexRow,
                                children: [(0, l.jsxs)("div", {
                                    children: [(0, l.jsx)(o.Heading, {
                                        variant: "heading-sm/bold",
                                        children: I
                                    }), (0, l.jsx)(o.Text, {
                                        variant: "text-xs/medium",
                                        color: "interactive-normal",
                                        children: n
                                    })]
                                }), (0, l.jsx)(d.default, {
                                    type: p.BotTagTypes.BOT,
                                    className: T.botTag,
                                    verified: null === (t = e.application.bot) || void 0 === t ? void 0 : t.verified
                                })]
                            }), (0, l.jsx)(o.Button, {
                                onClick: u,
                                innerClassName: T.closeButton,
                                className: T.closeButtonContainer,
                                look: o.Button.Looks.BLANK,
                                size: o.Button.Sizes.NONE,
                                "aria-label": m.default.Messages.DISMISS,
                                children: (0, l.jsx)(c.default, {
                                    className: T.closeIcon
                                })
                            })]
                        }), (0, l.jsx)(r.default, {
                            aspectRatio: 16 / 9,
                            children: (0, l.jsx)(i.EmbedIFrameWithLoadingBackground, {
                                url: O,
                                shouldRefocus: !0,
                                className: T.iframe,
                                queryParams: v
                            })
                        })]
                    })
                })
            }