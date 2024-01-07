            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return H
                }
            }), l("222007"), l("424973"), l("834022");
            var n = l("37983"),
                a = l("884691"),
                s = l("414456"),
                i = l.n(s),
                d = l("446674"),
                r = l("151426"),
                o = l("669491"),
                u = l("77078"),
                c = l("272030"),
                h = l("10641"),
                f = l("848848"),
                m = l("915675"),
                C = l("41594"),
                N = l("367376"),
                x = l("15684"),
                g = l("393414"),
                p = l("208021"),
                S = l("716214"),
                E = l("401690"),
                I = l("98292"),
                _ = l("956089"),
                T = l("676143"),
                v = l("61845"),
                A = l("341258"),
                O = l("9108"),
                R = l("49111"),
                j = l("724210"),
                b = l("782340"),
                L = l("360330");
            let M = new Set([R.ChannelTypes.GUILD_FORUM, R.ChannelTypes.GUILD_MEDIA]),
                D = new Set([R.ChannelTypes.GUILD_VOICE, R.ChannelTypes.GUILD_STAGE_VOICE]);

            function y(e) {
                let {
                    guild: t,
                    channel: a,
                    onCategoryClick: s
                } = e, d = (0, A.useIsChecked)(t.id, a.id, a.id), r = (0, A.useIsDisabled)(t.id, a.id, a.id);
                return (0, n.jsxs)("div", {
                    className: i(L.categoryRow, {
                        [L.uncategorized]: "null" === a.id
                    }),
                    onContextMenu: e => {
                        (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await l.el("142047").then(l.bind(l, "142047"));
                            return l => (0, n.jsx)(e, {
                                ...l,
                                channel: a,
                                guild: t
                            })
                        })
                    },
                    children: [(0, n.jsx)(u.Text, {
                        className: L.categoryText,
                        color: "text-muted",
                        variant: "text-xs/semibold",
                        lineClamp: 1,
                        children: a.name
                    }), "null" !== a.id && !r && (0, n.jsxs)(u.Clickable, {
                        className: L.selectAll,
                        onClick: () => {
                            !r && s(t.id, a.id, a.id)
                        },
                        children: [(0, n.jsx)(u.Checkbox, {
                            className: L.selectAllCheckbox,
                            size: 14,
                            shape: u.Checkbox.Shapes.SMALL_BOX,
                            value: d,
                            type: u.Checkbox.Types.INVERTED,
                            displayOnly: !0
                        }), (0, n.jsx)(u.Text, {
                            color: "text-muted",
                            variant: "text-xs/medium",
                            children: b.default.Messages.CHANNEL_BROWSER_SELECT_ALL
                        })]
                    })]
                })
            }
            let B = a.memo(function() {
                    return (0, n.jsx)("div", {
                        className: L.separator
                    })
                }),
                w = a.memo(function(e) {
                    let {
                        index: t
                    } = e;
                    return (0, n.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        className: L.subtitleSeparator,
                        children: "\xb7"
                    }, "separator-".concat(t))
                }),
                F = a.memo(function(e) {
                    let {
                        channel: t,
                        category: a,
                        guild: s,
                        isFirstChannel: r,
                        isLastChannel: h,
                        onChannelClick: v,
                        tooltipDirection: O = "right"
                    } = e, {
                        isSubscriptionGated: y
                    } = (0, f.default)(t.id), F = (0, A.useIsChecked)(s.id, t.id, a.id), H = (0, A.useIsDisabled)(s.id, t.id, a.id), U = (0, A.useDisabledTooltip)(s.id, a.id), k = (0, d.useStateFromStores)([E.default], () => E.default.getActiveThreadCount(s.id, t.id)), P = (0, d.useStateFromStores)([x.default], () => x.default.shouldIndicateNewChannel(s.id, t.id)), G = e => {
                        if (!H) return e.stopPropagation(), v(s.id, t.id, a.id), !0
                    }, W = e => {
                        t.isGuildVocal() ? (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await l.el("168003").then(l.bind(l, "168003"));
                            return l => (0, n.jsx)(e, {
                                ...l,
                                channel: t,
                                guild: s
                            })
                        }) : (0, c.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await l.el("327241").then(l.bind(l, "327241"));
                            return l => (0, n.jsx)(e, {
                                ...l,
                                channel: t,
                                guild: s
                            })
                        })
                    }, z = function(e, t) {
                        let l = [];
                        return R.ChannelTypesSets.GUILD_THREADS_ONLY.has(e.type) && t >= 1 && l.push((0, n.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            className: L.channelSubtitle,
                            children: b.default.Messages.ACTIVE_FORUM_POST_COUNT.format({
                                count: t
                            })
                        }, "thread-count")), !D.has(e.type) && l.push((0, n.jsx)(u.Text, {
                            variant: "text-xs/normal",
                            className: L.channelSubtitle,
                            children: (0, T.getActiveAgoTimestamp)(e.id)
                        }, "active")), null != e.topic && e.topic.length > 0 && l.push((0, n.jsx)(I.default, {
                            children: (0, n.jsx)(u.Text, {
                                className: L.topic,
                                variant: "text-xs/normal",
                                children: N.default.parseTopic(e.topic, !0, {
                                    channelId: e.id
                                })
                            })
                        }, "topic")), [l.map((e, t) => [e, (0, n.jsx)(w, {
                            index: t
                        }, "subtitle-separator-".concat(t))])].flat(2).slice(0, -1)
                    }(t, k), Y = e => (e.stopPropagation(), M.has(t.type) || e.shiftKey) ? ((0, g.transitionToGuild)(s.id, t.id), !0) : t.isGuildStageVoice() || t.isGuildVoice() ? ((0, S.connectAndOpen)(t), !0) : (p.default.openChannelAsSidebar({
                        guildId: t.guild_id,
                        channelId: t.id,
                        baseChannelId: j.StaticChannelRoute.CHANNEL_BROWSER
                    }), !0), V = b.default.Messages.CHANNEL_BROWSER_VIEW;
                    t.isGuildStageVoice() || t.isGuildVoice() ? V = b.default.Messages.JOIN : t.isForumLikeChannel() && (V = b.default.Messages.OPEN);
                    let Z = H ? "text-muted" : "text-normal",
                        X = (0, u.useToken)(H ? o.default.colors.TEXT_MUTED : o.default.colors.TEXT_NORMAL).hex();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.Tooltip, {
                            text: U,
                            delay: 500,
                            position: O,
                            children: e => (0, n.jsxs)(u.Clickable, {
                                className: i(L.channelRow, {
                                    [L.firstChannel]: r,
                                    [L.lastChannel]: h,
                                    [L.disabled]: H
                                }),
                                ...e,
                                onClick: G,
                                onContextMenu: W,
                                children: [(0, n.jsxs)("div", {
                                    className: L.channelInfo,
                                    children: [(0, n.jsxs)("div", {
                                        className: L.channelName,
                                        children: [(0, n.jsx)(C.ChannelItemIcon, {
                                            channel: t,
                                            guild: s
                                        }), (0, n.jsx)(I.default, {
                                            className: L.name,
                                            children: (0, n.jsx)(u.Text, {
                                                className: L.channelText,
                                                variant: "text-md/medium",
                                                lineClamp: 1,
                                                color: Z,
                                                children: t.name
                                            })
                                        }), y ? (0, n.jsx)(m.default, {
                                            color: X,
                                            className: L.premiumIcon
                                        }) : null, P ? (0, n.jsx)(_.TextBadge, {
                                            text: b.default.Messages.NEW,
                                            color: o.default.unsafe_rawColors.BRAND_260.css,
                                            className: L.titleBadge
                                        }) : null]
                                    }), (0, n.jsx)("div", {
                                        className: L.channelSubtitles,
                                        children: z
                                    })]
                                }), (0, n.jsxs)("div", {
                                    className: L.channelActions,
                                    children: [(0, n.jsx)(u.Button, {
                                        look: u.ButtonLooks.OUTLINED,
                                        color: u.ButtonColors.PRIMARY,
                                        size: u.ButtonSizes.SMALL,
                                        className: L.viewChannelButton,
                                        onClick: Y,
                                        children: V
                                    }), (0, n.jsx)(u.Checkbox, {
                                        "aria-checked": F,
                                        value: F,
                                        type: u.Checkbox.Types.INVERTED,
                                        disabled: H,
                                        innerClassName: L.checkboxInner,
                                        displayOnly: !0
                                    })]
                                })]
                            })
                        }), !h && (0, n.jsx)(B, {})]
                    })
                });

            function H(e) {
                let {
                    categories: t,
                    guild: l,
                    className: s,
                    innerClassName: d,
                    hasSidebar: o
                } = e, {
                    onChannelClick: c
                } = (0, v.default)(l.id), f = (0, h.useIsDismissibleContentDismissed)(r.DismissibleContent.CHANNEL_BROWSER_NUX), m = f ? 0 : -1, C = a.useCallback(e => {
                    let {
                        section: a
                    } = e;
                    if (0 === a && -1 === m) return null;
                    let s = t._categories[a + m];
                    return (0, n.jsx)(y, {
                        channel: s.channel,
                        guild: l,
                        onCategoryClick: c
                    }, s.channel.id)
                }, [t, l, m, c]), N = a.useCallback(e => {
                    let {
                        section: a,
                        row: s
                    } = e;
                    if (0 === a && -1 === m) return (0, n.jsx)(O.default, {
                        guild: l
                    });
                    let i = t._categories[a + m],
                        d = t[i.channel.id][s];
                    return null == d ? null : (0, n.jsx)(F, {
                        category: i.channel,
                        channel: d.channel,
                        guild: l,
                        isFirstChannel: 0 === s,
                        isLastChannel: t[i.channel.id].length - 1 === s,
                        tooltipDirection: o ? "right" : "top",
                        onChannelClick: c
                    }, d.channel.id)
                }, [t, l, m, o, c]), x = (0, O.useNuxCardHeight)(l.id), g = (0, T.useChannelBrowserSections)(l.id, t, 64, x);
                return (0, n.jsx)(u.ListAuto, {
                    className: s,
                    innerClassName: i(d, L.scrollerInner),
                    sectionHeight: 48,
                    rowHeight: e => g[e].rowHeight,
                    renderSection: C,
                    renderRow: N,
                    sections: g.map(e => e.rowCount)
                }, "channel-browser-list")
            }