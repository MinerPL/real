            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("37983"),
                s = n("884691"),
                i = n("917351"),
                l = n.n(i),
                r = n("77078"),
                o = n("716241"),
                u = n("945330"),
                d = n("599110"),
                c = n("478761"),
                E = n("164586"),
                f = n("49111"),
                _ = n("782340"),
                h = n("866241");
            let C = l.debounce(o.default.trackWithMetadata, 500),
                I = e => {
                    let {
                        guild: t,
                        title: n,
                        message: i,
                        image: l,
                        type: c,
                        imageMarginX: E,
                        imageMarginTop: I,
                        trackingSource: T,
                        undismissable: S,
                        onDismissed: N,
                        onClick: A,
                        cta: m,
                        ctaColor: p
                    } = e;
                    s.useEffect(() => {
                        C(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
                            notice_type: c,
                            guild_id: t.id
                        })
                    }, [t.id, c]);
                    let g = null;
                    "function" == typeof m ? g = m() : null != m && (g = (0, a.jsx)(r.Button, {
                        className: h.btn,
                        size: r.Button.Sizes.SMALL,
                        onClick: () => {
                            null != c && d.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
                                source: T,
                                guild_id: t.id,
                                notice_type: c
                            }), null == A || A()
                        },
                        fullWidth: !0,
                        color: p,
                        children: m
                    }));
                    let R = null != E ? "".concat(E, "px") : "16px";
                    return (0, a.jsxs)("div", {
                        className: h.channelNotice,
                        children: [!0 === S ? null : (0, a.jsx)(r.Clickable, {
                            onClick: () => {
                                o.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: c
                                }), null == N || N()
                            },
                            className: h.close,
                            "aria-label": _.default.Messages.DISMISS,
                            children: (0, a.jsx)(u.default, {
                                className: h.closeIcon
                            })
                        }), (0, a.jsx)("div", {
                            className: h.imageContainer,
                            style: {
                                marginTop: "".concat(I, "px"),
                                marginLeft: R,
                                marginRight: R
                            },
                            children: (0, a.jsx)("img", {
                                className: h.image,
                                src: l,
                                alt: ""
                            })
                        }), (0, a.jsxs)("div", {
                            className: h.message,
                            children: [null != n ? (0, a.jsx)(r.Heading, {
                                variant: "heading-md/semibold",
                                className: h.title,
                                children: n
                            }) : null, (0, a.jsx)(r.Text, {
                                variant: "text-sm/normal",
                                children: i
                            }), g]
                        })]
                    })
                };
            var T = function(e) {
                let {
                    showRedesignedChannelNotice: t
                } = (0, c.useChannelNoticeRedesignExperiment)(!0);
                return t ? (0, a.jsx)(E.default, {
                    ...e
                }) : (0, a.jsx)(I, {
                    ...e
                })
            }