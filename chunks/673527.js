            "use strict";
            n.r(t), n.d(t, {
                DefaultFallback: function() {
                    return f
                },
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("446674"),
                u = n("77078"),
                o = n("410348"),
                d = n("782340"),
                c = n("557840");

            function f(e) {
                let {
                    isLoading: t,
                    noText: n,
                    className: l
                } = e;
                return (0, a.jsx)("div", {
                    className: i(c.emptyPreviewContainer, l),
                    children: t ? (0, a.jsx)(u.Spinner, {}) : (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: c.emptyPreviewImage
                        }), n ? null : (0, a.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: c.emptyPreviewText,
                            children: d.default.Messages.STREAM_NO_PREVIEW
                        })]
                    })
                })
            }

            function h(e) {
                let {
                    stream: t,
                    className: n,
                    noText: s = !1
                } = e, {
                    url: u,
                    isLoading: d
                } = (0, r.useStateFromStoresObject)([o.default], () => ({
                    url: o.default.getPreviewURL(t.guildId, t.channelId, t.ownerId),
                    isLoading: o.default.getIsPreviewLoading(t.guildId, t.channelId, t.ownerId)
                })), h = l.useRef(d ? null : u);
                l.useEffect(() => {
                    !d && (h.current = u)
                }, [u, d]);
                let p = null == u || d ? h.current : u;
                return null == p ? (0, a.jsx)(f, {
                    className: n,
                    isLoading: d,
                    noText: s
                }) : (0, a.jsx)("div", {
                    className: i(n, c.root),
                    children: (0, a.jsx)("img", {
                        src: p,
                        alt: "",
                        className: c.image
                    })
                })
            }