            "use strict";
            l.r(t), l.d(t, {
                SupportedEmbedIFrame: function() {
                    return r
                },
                default: function() {
                    return h
                }
            });
            var n, r, i = l("37983"),
                s = l("884691"),
                a = l("746379"),
                o = l.n(a),
                d = l("590787");

            function u(e) {
                let {
                    autoMute: t,
                    ...l
                } = e, n = s.useRef(null), r = s.useCallback(e => {
                    if (e.data["x-tiktok-embed"] && "https://www.tiktok.com" === e.origin && "onPlayerReady" === e.data.type) {
                        var l, r, i, s;
                        t && (null === (s = n.current) || void 0 === s || null === (i = s.contentWindow) || void 0 === i || i.postMessage({
                            type: "mute",
                            "x-tiktok-embed": !0
                        }, e.origin)), null === (r = n.current) || void 0 === r || null === (l = r.contentWindow) || void 0 === l || l.postMessage({
                            type: "play",
                            "x-tiktok-embed": !0
                        }, e.origin)
                    }
                }, [t]);
                return s.useEffect(() => (window.addEventListener("message", r), () => window.removeEventListener("message", r)), [r]), (0, i.jsx)(m, {
                    ref: n,
                    ...l
                })
            }

            function c(e) {
                let {
                    src: t,
                    autoMute: l,
                    ...n
                } = e, r = o.parse(null != t ? t : "", !0);
                r.query = {
                    ...r.query,
                    autoplay: "1",
                    auto_play: "1"
                }, l && (r.query.mute = "1"), r.search = null;
                let s = o.format(r);
                return (0, i.jsx)(m, {
                    src: s,
                    ...n
                })
            }
            let m = s.forwardRef(function(e, t) {
                return (0, i.jsx)("iframe", {
                    ref: t,
                    className: d.embedIframe,
                    allow: "autoplay",
                    frameBorder: 0,
                    scrolling: "no",
                    sandbox: "allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts",
                    ...e
                })
            });

            function h(e) {
                switch (e.provider) {
                    case "YouTube":
                        return (0, i.jsx)(c, {
                            ...e
                        });
                    case "TikTok":
                        return (0, i.jsx)(u, {
                            ...e
                        });
                    default:
                        return (0, i.jsx)(m, {
                            ...e
                        })
                }
            }(n = r || (r = {})).YOUTUBE = "YouTube", n.TIKTOK = "TikTok"