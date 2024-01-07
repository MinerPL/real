            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("77078"),
                r = n("62843"),
                o = n("648739"),
                u = n("132755"),
                d = n("782340"),
                c = n("335171"),
                m = e => {
                    let {
                        onPlay: t,
                        externalURL: n,
                        className: a,
                        renderLinkComponent: m,
                        inactive: f,
                        messageId: h,
                        channelId: p
                    } = e;
                    return (0, l.jsx)(r.MessagesInteractionContext.Consumer, {
                        children: e => (0, l.jsxs)("div", {
                            className: s(a, c.wrapper, {
                                [c.disableInteractions]: e.disableInteractions
                            }),
                            children: [f && null == t ? (0, l.jsx)("div", {
                                className: c.iconWrapper,
                                children: (0, l.jsx)(u.default, {
                                    className: c.iconPlay
                                })
                            }) : null, null != t ? (0, l.jsx)(i.Clickable, {
                                onClick: t,
                                className: s(c.iconWrapperActive),
                                tabIndex: f ? -1 : 0,
                                "aria-label": d.default.Messages.PLAY,
                                children: (0, l.jsx)(u.default, {
                                    className: c.iconPlay
                                })
                            }) : null, null != n ? m({
                                href: n,
                                target: "_blank",
                                rel: "noreferrer noopener",
                                className: c.iconWrapperActive,
                                children: (0, l.jsx)(o.default, {
                                    "aria-label": d.default.Messages.OPEN_LINK,
                                    className: null != t ? c.iconExternalMargins : c.iconExternal
                                }),
                                messageId: h,
                                channelId: p
                            }) : null]
                        })
                    })
                }