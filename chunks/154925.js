            "use strict";
            a.r(t), a.d(t, {
                DISPLAYED_PARTICIPANT_AVATARS: function() {
                    return g
                },
                ACTIVE_NOW_ICON_SIZE: function() {
                    return I
                },
                ActiveNowBase: function() {
                    return _
                },
                ActiveChannelBase: function() {
                    return x
                },
                ActiveNowFiller: function() {
                    return v
                }
            });
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("974667"),
                r = a("77078"),
                u = a("834897"),
                o = a("419830"),
                c = a("811305"),
                f = a("515631"),
                m = a("782340"),
                h = a("62082"),
                E = a("470932");
            let g = 3,
                I = 16,
                _ = n.forwardRef(function(e, t) {
                    let {
                        shouldUseCollapsedLayout: a = !0,
                        listItemId: n,
                        onClick: s,
                        icon: o,
                        iconTooltipText: c,
                        textNode: m,
                        header: E,
                        accessoryNode: g,
                        children: I
                    } = e, _ = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY), x = (0, d.useListItem)(null != n ? n : "");
                    return (0, l.jsxs)("div", {
                        ref: t,
                        className: i(h.container, {
                            [h.containerCard]: _,
                            [h.collapsedLayout]: _ && a
                        }),
                        children: [(0, l.jsxs)(r.Clickable, {
                            className: h.body,
                            onClick: s,
                            ...null != n ? x : void 0,
                            children: [(0, l.jsxs)("div", {
                                className: h.details,
                                children: [null != o ? (0, l.jsx)(r.Tooltip, {
                                    text: c,
                                    delay: 500,
                                    children: e => (0, l.jsx)("div", {
                                        ...e,
                                        className: h.iconContainer,
                                        children: o
                                    })
                                }) : null, (0, l.jsx)(r.Heading, {
                                    className: h.title,
                                    variant: "heading-sm/semibold",
                                    lineClamp: 1,
                                    children: E
                                }), (0, l.jsx)("div", {
                                    className: h.subtitle,
                                    children: m
                                })]
                            }), null != g && (0, l.jsx)("div", {
                                className: h.accessoryContainer,
                                children: g
                            })]
                        }), I]
                    })
                }),
                x = n.forwardRef(function(e, t) {
                    let {
                        children: a,
                        guildId: n,
                        channel: s,
                        text: i,
                        activityIndicator: d,
                        usersInSummary: m,
                        onChannelClick: E,
                        channelIconOptions: x
                    } = e, v = (0, u.default)(f.COLLAPSED_SIZE_MEDIA_QUERY), S = (0, o.getChannelIconComponent)(s, null, x);
                    return (0, l.jsx)(_, {
                        ref: t,
                        textNode: null != i ? (0, l.jsx)(r.Text, {
                            className: h.channelSubtitle,
                            variant: "text-xs/normal",
                            children: i
                        }) : null,
                        listItemId: s.id,
                        accessoryNode: (0, l.jsx)(c.default, {
                            guildId: n,
                            users: m,
                            size: v ? c.Sizes.SIZE_24 : c.Sizes.SIZE_16,
                            max: v ? 5 : g,
                            extraDetail: d
                        }),
                        onClick: E,
                        icon: null != S && (0, l.jsx)(S, {
                            width: I,
                            height: I
                        }),
                        iconTooltipText: (0, o.getChannelIconTooltipText)(s),
                        header: s.name,
                        children: a
                    })
                });

            function v() {
                return (0, l.jsxs)("div", {
                    className: i(h.container, h.containerCard, h.fillerCard),
                    children: [(0, l.jsx)("img", {
                        src: E,
                        className: h.spacerChannelImg,
                        alt: "",
                        "aria-hidden": !0
                    }), (0, l.jsxs)("div", {
                        className: h.fillerText,
                        children: [(0, l.jsx)(r.Heading, {
                            className: h.title,
                            variant: "heading-sm/semibold",
                            children: m.default.Messages.ACTIVE_CHANNELS_COLLAPSED_SPACER_TITLE
                        }), (0, l.jsx)(r.Text, {
                            variant: "text-xs/normal",
                            children: m.default.Messages.ACTIVE_CHANNELS_COLLAPSED_SPACER_SUBTITLE
                        })]
                    })]
                })
            }