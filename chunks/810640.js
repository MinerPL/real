            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("77078"),
                r = n("673527"),
                u = n("821391"),
                o = n("782340"),
                d = n("146789");

            function c(e) {
                let {
                    stream: t,
                    isSmall: n,
                    selected: l,
                    isSelfStream: c
                } = e;
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(r.default, {
                        className: s(d.absoluteFill, d.streamPreviewOpacity),
                        stream: t,
                        noText: !0
                    }), !l && (0, a.jsxs)("div", {
                        className: s(d.content, d.streamUnavailable, {
                            [d.small]: n
                        }),
                        children: [(0, a.jsx)(i.Text, {
                            className: d.streamUnavailableText,
                            color: "always-white",
                            variant: n ? "text-sm/semibold" : "text-md/semibold",
                            children: c ? o.default.Messages.CONSOLE_STREAMING : o.default.Messages.CONSOLE_STREAM_UNAVAILABLE
                        }), (0, a.jsx)(i.TooltipContainer, {
                            text: c ? o.default.Messages.CONSOLE_STREAMING_TOOLTIP : o.default.Messages.CONSOLE_STREAM_UNAVAILABLE_TOOLTIP,
                            className: d.darkCircle,
                            children: (0, a.jsx)("div", {
                                children: (0, a.jsx)(u.default, {
                                    className: d.stopStreamIcon,
                                    foreground: d.stopStreamForeground
                                })
                            })
                        })]
                    })]
                })
            }