            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return O
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("974667"),
                o = n("446674"),
                u = n("77078"),
                d = n("450911"),
                c = n("272030"),
                f = n("755624"),
                h = n("967241"),
                C = n("42203"),
                p = n("660478"),
                m = n("800762"),
                E = n("316133"),
                g = n("98292"),
                I = n("973539"),
                S = n("137376"),
                _ = n("522052"),
                N = n("884155"),
                T = n("49111"),
                A = n("648564"),
                L = n("782340"),
                v = n("708995"),
                x = n("404135"),
                R = n("15304");

            function M(e) {
                let {
                    style: t,
                    withGuildIcon: n
                } = e;
                return (0, l.jsx)("svg", {
                    className: i(R.spine, {
                        [R.spineWithGuildIcon]: n
                    }),
                    width: "12",
                    height: "11",
                    viewBox: "0 0 12 11",
                    fill: "none",
                    "aria-hidden": !0,
                    style: t,
                    children: (0, l.jsx)("path", {
                        d: "M11 9H4C2.89543 9 2 8.10457 2 7V1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1V7C0 9.20914 1.79086 11 4 11H11C11.5523 11 12 10.5523 12 10C12 9.44771 11.5523 9 11 9Z",
                        fill: "currentColor"
                    })
                })
            }
            var O = a.memo(function(e) {
                let {
                    thread: t,
                    isSelectedChannel: s,
                    isSelectedVoice: R,
                    isLast: O,
                    withGuildIcon: y
                } = e, D = (0, o.useStateFromStores)([E.default], () => E.default.getVoiceStatesForChannel(t), [t]), b = (0, o.useStateFromStores)([m.default], () => m.default.hasVideo(t.id)), {
                    unread: j,
                    mentionCount: G
                } = (0, o.useStateFromStoresObject)([p.default], () => ({
                    unread: p.default.hasUnread(t.id),
                    mentionCount: p.default.getMentionCount(t.id)
                })), U = (0, o.useStateFromStores)([f.default], () => f.default.isMuted(t.id)), P = a.useCallback(e => {
                    (0, h.openThreadSidebarForViewing)(t, !e.shiftKey, A.OpenThreadAnalyticsLocations.CHANNEL_LIST)
                }, [t]), w = a.useCallback(() => {
                    d.default.preload(t.guild_id, t.id)
                }, [t.guild_id, t.id]), F = a.useCallback(e => {
                    let a = C.default.getChannel(t.id);
                    null != a && (0, c.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await n.el("994827").then(n.bind(n, "994827"));
                        return t => (0, l.jsx)(e, {
                            ...t,
                            channel: a
                        })
                    })
                }, [t.id]), B = null == D ? 0 : D.length, {
                    role: V,
                    ...H
                } = (0, r.useListItem)(t.id), k = a.useRef(null), Y = G > 0 ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_MENTIONS.format({
                    channelName: t.name,
                    mentionCount: G
                }) : j ? L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL_WITH_UNREADS.format({
                    channelName: t.name
                }) : L.default.Messages.GUILD_SIDEBAR_THREAD_A11Y_LABEL.format({
                    channelName: t.name
                });
                return (0, l.jsxs)("li", {
                    role: V,
                    className: i(v.containerDefault, {
                        [v.selected]: s
                    }),
                    children: [(0, l.jsx)(M, {
                        withGuildIcon: y
                    }), O ? null : (0, l.jsx)(M, {
                        withGuildIcon: y,
                        style: {
                            transform: "rotateX(180deg) translateY(-9px)"
                        }
                    }), (0, l.jsx)(u.FocusRing, {
                        focusTarget: k,
                        ringTarget: k,
                        offset: {
                            top: 2,
                            bottom: 2,
                            right: 4
                        },
                        children: (0, l.jsxs)("div", {
                            className: i(v.iconVisibility, x.wrapper, x.typeThread, {
                                [x.modeSelected]: s,
                                [x.modeMuted]: !s && U,
                                [x.modeUnreadImportant]: !U && !s && j,
                                [x.withGuildIcon]: y
                            }),
                            onMouseDown: w,
                            onContextMenu: F,
                            children: [!j || U || s ? null : (0, l.jsx)("div", {
                                className: i(x.unread, x.unreadImportant)
                            }), (0, l.jsx)(u.Clickable, {
                                ...H,
                                innerRef: k,
                                className: x.link,
                                onClick: P,
                                "aria-label": Y,
                                focusProps: {
                                    enabled: !1
                                },
                                children: (0, l.jsxs)("div", {
                                    className: i(x.linkTop, x.threadMainContent),
                                    children: [(0, l.jsx)(g.default, {
                                        className: x.name,
                                        "aria-hidden": !0,
                                        children: t.name
                                    }), (0, l.jsxs)("div", {
                                        className: x.children,
                                        children: [B > 0 && t.userLimit > 0 ? (0, l.jsx)(S.default, {
                                            userCount: B,
                                            video: b,
                                            channel: t
                                        }) : null, (0, I.default)(G) ? (0, l.jsx)(_.default, {
                                            mentionsCount: G
                                        }) : null]
                                    })]
                                })
                            })]
                        })
                    }), (0, l.jsx)(N.default, {
                        channel: t,
                        collapsed: !R,
                        collapsedMax: 6,
                        voiceStates: D,
                        location: T.AnalyticsLocations.GUILD_CHANNEL_LIST
                    })]
                })
            })