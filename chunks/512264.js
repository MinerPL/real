            "use strict";
            n.r(t), n.d(t, {
                VideoStreamFit: function() {
                    return a
                },
                default: function() {
                    return m
                }
            }), n("222007");
            var a, l, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("77078"),
                d = n("103723"),
                c = n("474293"),
                f = n("944832"),
                h = n("391763");
            (l = a || (a = {})).CONTAIN = "contain", l.COVER = "cover";
            let p = i.memo(function(e) {
                let {
                    streamId: t,
                    onResize: n,
                    wrapperClassName: a,
                    videoComponent: l,
                    className: r,
                    fit: p = "contain",
                    mirror: m = !1,
                    paused: E = !1,
                    streamPreviewURL: C,
                    videoSpinnerContext: S,
                    userId: g
                } = e, [_, I] = i.useState(!0), [T] = i.useState(() => new d.VideoSpinnerTimer("VideoStream"));
                i.useEffect(() => {
                    !E && (_ ? T.onSpinnerStarted() : null != t && T.trackSpinnerDuration(S, g, t))
                }, [_, E, t, T, S, g]);
                let v = i.useCallback(() => {
                    I(!1)
                }, []);
                return (0, s.jsxs)("div", {
                    className: u(h.wrapper, a),
                    children: [null != t && (0, s.jsx)(l, {
                        className: u(h.video, (0, c.getClass)(h, "video", p), {
                            [h.mirror]: m
                        }, r),
                        streamId: t,
                        onResize: n,
                        onReady: v,
                        paused: E
                    }), E ? null : (0, s.jsx)("div", {
                        className: u(h.previewWrapper, {
                            [h.loading]: _
                        }),
                        children: _ && (0, s.jsxs)(i.Fragment, {
                            children: [null != C ? (0, s.jsx)("img", {
                                src: C,
                                alt: "",
                                className: h.previewImage
                            }) : (0, s.jsx)(f.default, {
                                aspectRatio: 16 / 9,
                                className: h.emptyPreviewWrapper,
                                children: (0, s.jsx)("div", {
                                    className: h.emptyPreview
                                })
                            }), (0, s.jsx)(o.Spinner, {
                                className: h.spinner
                            })]
                        })
                    })]
                })
            });
            var m = p