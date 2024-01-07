            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var n = l("37983"),
                r = l("884691"),
                i = l("328620"),
                s = l("58608"),
                a = l("49111"),
                o = l("782340");

            function d(e) {
                let {
                    poster: t,
                    src: l,
                    width: i,
                    height: o,
                    naturalWidth: d,
                    naturalHeight: u,
                    play: c = !0,
                    className: m,
                    alt: h,
                    responsive: p
                } = e, g = r.useRef(null);
                return (r.useEffect(() => {
                    let {
                        current: e
                    } = g;
                    null != e && (c ? e.play() : e.pause())
                }, [c]), d <= a.MAX_VIDEO_WIDTH && u <= a.MAX_VIDEO_HEIGHT || d <= a.MAX_VIDEO_HEIGHT && u <= a.MAX_VIDEO_WIDTH) ? (0, n.jsx)(s.default, {
                    ref: g,
                    className: m,
                    poster: t,
                    src: l,
                    width: i,
                    height: o,
                    responsive: p,
                    muted: !0,
                    loop: !0,
                    autoPlay: c,
                    preload: "none",
                    "aria-label": h
                }) : (0, n.jsx)("img", {
                    alt: "",
                    src: t,
                    width: i,
                    height: o
                })
            }

            function u(e) {
                let {
                    src: t,
                    poster: l,
                    naturalWidth: r,
                    naturalHeight: s,
                    responsive: a,
                    autoPlay: u,
                    className: c,
                    playable: m = !0,
                    renderImageComponent: h,
                    alt: p = o.default.Messages.GIF,
                    ...g
                } = e;
                return (0, n.jsx)(i.GIFAccessoryContext.Consumer, {
                    children: e => h({
                        ...g,
                        alt: p,
                        src: l,
                        containerClassName: c,
                        autoPlay: u,
                        animated: m,
                        responsive: a,
                        renderAccessory: e,
                        tabIndex: m ? 0 : -1,
                        children(e) {
                            let {
                                src: l,
                                size: i,
                                animating: o,
                                alt: u
                            } = e;
                            return (0, n.jsx)(d, {
                                alt: u,
                                className: c,
                                poster: l,
                                src: t,
                                width: i.width,
                                height: i.height,
                                naturalWidth: r,
                                naturalHeight: s,
                                responsive: a,
                                play: m && o
                            })
                        }
                    })
                })
            }