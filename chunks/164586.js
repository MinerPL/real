            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                u = n("77078"),
                o = n("716241"),
                d = n("945330"),
                c = n("599110"),
                f = n("49111"),
                h = n("782340"),
                p = n("832025");
            let m = (0, r.debounce)(o.default.trackWithMetadata, 500);
            var E = function(e) {
                let {
                    guild: t,
                    title: n,
                    message: s,
                    image: r,
                    type: E,
                    imageStyles: C,
                    imageMarginX: S,
                    imageMarginTop: g,
                    trackingSource: _,
                    undismissable: I,
                    onDismissed: T,
                    onClick: v,
                    cta: x,
                    ctaColor: N,
                    centerText: A
                } = e;
                l.useEffect(() => {
                    m(f.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
                        notice_type: E,
                        guild_id: t.id
                    })
                }, [t.id, E]);
                let M = null;
                "function" == typeof x ? M = x() : null != x && (M = (0, a.jsx)(u.Button, {
                    className: p.button,
                    size: u.Button.Sizes.SMALL,
                    onClick: () => {
                        null != E && c.default.track(f.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
                            source: _,
                            guild_id: t.id,
                            notice_type: E
                        }), null == v || v()
                    },
                    fullWidth: !0,
                    color: N,
                    children: x
                }));
                let R = null;
                "function" == typeof n ? R = n() : null != n && (R = (0, a.jsx)(u.Text, {
                    variant: "text-md/medium",
                    color: "header-primary",
                    className: i(p.title, {
                        [p.noImageTitle]: null == r
                    }, {
                        [p.center]: A
                    }),
                    children: n
                }));
                let j = null != S ? "".concat(S, "px") : "16px";
                return (0, a.jsxs)("div", {
                    className: p.container,
                    children: [!0 === I ? null : (0, a.jsx)(u.Clickable, {
                        onClick: () => {
                            o.default.trackWithMetadata(f.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
                                notice_type: E
                            }), null == T || T()
                        },
                        className: p.close,
                        "aria-label": h.default.Messages.DISMISS,
                        children: (0, a.jsx)(d.default, {
                            className: p.closeIcon
                        })
                    }), null != r && (0, a.jsx)("div", {
                        className: p.imageContainer,
                        style: {
                            marginTop: "".concat(g, "px"),
                            marginLeft: j,
                            marginRight: j
                        },
                        children: (0, a.jsx)("img", {
                            className: p.image,
                            style: C,
                            src: r,
                            alt: ""
                        })
                    }), (0, a.jsxs)("div", {
                        className: p.message,
                        children: [R, (0, a.jsx)(u.Text, {
                            className: i({
                                [p.center]: A
                            }),
                            variant: "text-sm/normal",
                            color: "text-muted",
                            children: s
                        }), M]
                    })]
                })
            }