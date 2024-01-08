            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("446674"),
                r = n("77078"),
                s = n("574073"),
                i = n("39331"),
                d = n("42203"),
                u = n("780571"),
                o = n("497880"),
                c = n("93332"),
                m = n("93427"),
                f = n("719347"),
                _ = n("782340"),
                h = n("929710"),
                E = e => {
                    let {
                        message: t
                    } = e, n = (0, s.default)(t), E = (0, l.useStateFromStores)([d.default], () => d.default.getChannel(t.channel_id)), {
                        content: v
                    } = (0, i.default)(t, {
                        hideSimpleEmbedContent: !1
                    });
                    return null == E ? null : (0, a.jsxs)("div", {
                        className: h.container,
                        children: [(0, a.jsx)(r.Heading, {
                            className: h.header,
                            variant: "heading-sm/semibold",
                            children: _.default.Messages.MOBILE_REPORTS_MESSAGE_PREVIEW_TITLE
                        }), (0, a.jsx)(r.Scroller, {
                            className: h.messagePreviewContainer,
                            children: (0, a.jsx)(u.default, {
                                childrenMessageContent: (() => {
                                    let e = null == v || "" === v || Array.isArray(v) && 0 === v.length;
                                    if (e) {
                                        let {
                                            icon: e
                                        } = (0, m.renderSingleLineMessage)(t, v, !1, "", {
                                            iconClass: h.attachmentIcon,
                                            iconSize: f.SINGLE_LINE_MESSAGE_DEFAULT_ICON_SIZE
                                        });
                                        return e
                                    }
                                    return (0, a.jsx)(o.default, {
                                        message: t,
                                        content: v
                                    })
                                })(),
                                childrenHeader: (0, a.jsx)(c.default, {
                                    message: t,
                                    channel: E,
                                    author: n,
                                    guildId: E.guild_id
                                }),
                                disableInteraction: !0
                            })
                        })]
                    })
                }