            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return j
                }
            }), n("222007");
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("450911"),
                u = n("272030"),
                d = n("667771"),
                c = n("427953"),
                f = n("575136"),
                h = n("139375"),
                C = n("557661"),
                p = n("848848"),
                m = n("15684"),
                E = n("300322"),
                g = n("42203"),
                I = n("305961"),
                S = n("957255"),
                _ = n("660478"),
                N = n("282109"),
                T = n("697218"),
                A = n("79234"),
                L = n("783735"),
                v = n("39347"),
                x = n("41594"),
                R = n("262141"),
                M = n("49111"),
                O = n("695838"),
                y = n("708995");
            class D extends L.default {
                componentWillUnmount() {
                    this.resetTextChannelPopoutTimers()
                }
                resetTextChannelPopoutTimers() {
                    clearTimeout(this.enterTimer), clearTimeout(this.exitTimer)
                }
                renderChannelInfo() {
                    let {
                        channelInfo: e
                    } = this.props;
                    return null == e ? null : (0, l.jsx)("div", {
                        className: y.channelInfo,
                        children: e
                    })
                }
                render() {
                    let {
                        channel: e,
                        guild: t,
                        selected: n,
                        muted: a,
                        unread: i,
                        hasActiveThreads: o,
                        hasMoreActiveThreads: u,
                        mentionCount: d,
                        connectChannelDropTarget: c,
                        connectChannelDragSource: f,
                        connectDragPreview: p,
                        canReorderChannel: m,
                        isSubscriptionGated: E,
                        isFavoriteSuggestion: g,
                        subtitle: I,
                        forceTopLevelThread: S,
                        embeddedApps: _,
                        unreadMode: N,
                        withGuildIcon: T,
                        enableActivities: A
                    } = this.props, L = A && null != _ && _.length > 0, v = (0, C.getChannelSubtitle)(I), R = (0, l.jsx)("li", {
                        className: s(this.getClassName(), {
                            [y.disabled]: this.isDisabled(),
                            [y.selected]: n
                        }),
                        "data-dnd-name": e.name,
                        onMouseEnter: u || L ? this.handleMouseEnter : void 0,
                        onMouseLeave: u || L ? this.handleMouseLeave : void 0,
                        children: (0, l.jsx)(r.Popout, {
                            position: "right",
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.handleClosePopout,
                            shouldShow: u && this.state.shouldShowThreadsPopout || L && this.state.shouldShowActivities,
                            children: () => (0, l.jsxs)(x.default, {
                                className: y.iconVisibility,
                                channel: e,
                                guild: t,
                                selected: !g && n,
                                muted: a,
                                unread: i,
                                mentionCount: d,
                                hasActiveThreads: o,
                                subtitle: null == v ? void 0 : v.subtitle,
                                subtitleColor: null == v ? void 0 : v.color,
                                onMouseDown: this.handleMouseDown,
                                onContextMenu: this.handleContextMenu,
                                connectDragPreview: m ? p : null,
                                isFavoriteSuggestion: g,
                                channelTypeOverride: S ? M.ChannelTypes.GUILD_TEXT : void 0,
                                unreadMode: N,
                                withGuildIcon: T,
                                "aria-label": (0, h.default)({
                                    channel: e,
                                    unread: i,
                                    mentionCount: d,
                                    isSubscriptionGated: E
                                }),
                                children: [g && this.renderAcceptSuggestionButton(), g && this.renderRemoveSuggestionButton(), !g && this.renderInviteButton(), !g && this.renderEditButton(), !g && this.renderChannelInfo()]
                            })
                        })
                    });
                    return m ? c(f(R)) : R
                }
                constructor(...e) {
                    super(...e), this.state = {
                        shouldShowThreadsPopout: !1,
                        shouldShowActivities: !1
                    }, this.enterTimer = 0, this.exitTimer = 0, this.handleMouseEnter = () => {
                        (this.props.canShowThreadPreviewForUser || null != this.props.embeddedApps) && (this.resetTextChannelPopoutTimers(), this.enterTimer = setTimeout(() => {
                            null != this.props.embeddedApps && this.props.embeddedApps.length > 0 ? this.setState({
                                shouldShowActivities: !0
                            }) : this.props.canShowThreadPreviewForUser && this.setState({
                                shouldShowThreadsPopout: !0
                            })
                        }, 200))
                    }, this.handleMouseLeave = () => {
                        this.resetTextChannelPopoutTimers(), this.exitTimer = setTimeout(() => {
                            this.state.shouldShowActivities && this.setState({
                                shouldShowActivities: !1
                            }), this.state.shouldShowThreadsPopout && this.setState({
                                shouldShowThreadsPopout: !1
                            })
                        }, 250)
                    }, this.handleThreadsPopoutClose = () => {
                        this.resetTextChannelPopoutTimers(), this.setState({
                            shouldShowThreadsPopout: !1
                        })
                    }, this.handleActivitiesPopoutClose = () => {
                        this.resetTextChannelPopoutTimers(), this.setState({
                            shouldShowActivities: !1
                        })
                    }, this.handleClosePopout = () => {
                        this.state.shouldShowActivities && this.handleActivitiesPopoutClose(), this.state.shouldShowThreadsPopout && this.handleThreadsPopoutClose()
                    }, this.handleMouseDown = () => {
                        this.handleActivitiesPopoutClose(), this.handleThreadsPopoutClose();
                        let {
                            channel: e
                        } = this.props, t = e.getGuildId();
                        o.default.preload(null != t ? t : M.ME, e.id)
                    }, this.renderPopout = e => {
                        let {
                            channel: t,
                            sorting: n,
                            embeddedApps: a
                        } = this.props, {
                            shouldShowActivities: s
                        } = this.state;
                        return null != a && a.length > 0 && s && !n ? (0, l.jsx)(R.default, {
                            onAction: this.handleActivitiesPopoutClose,
                            channel: t
                        }) : (0, l.jsx)(A.default, {
                            ...e,
                            channel: this.props.channel
                        })
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t
                        } = this.props;
                        if (t.type === M.ChannelTypes.GROUP_DM) {
                            (0, u.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("493015").then(n.bind(n, "493015"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    channel: t,
                                    selected: !0
                                })
                            });
                            return
                        }
                        if (t.type === M.ChannelTypes.DM) {
                            let a = T.default.getUser(t.getRecipientId());
                            null != a && (0, u.openContextMenuLazy)(e, async () => {
                                let {
                                    default: e
                                } = await n.el("130074").then(n.bind(n, "130074"));
                                return n => (0, l.jsx)(e, {
                                    ...n,
                                    user: a,
                                    channel: t,
                                    showModalItems: !1
                                })
                            });
                            return
                        }
                        let a = I.default.getGuild(t.getGuildId());
                        null != a && (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("327241").then(n.bind(n, "327241"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: a
                            })
                        })
                    }
                }
            }
            let b = (0, d.makeChannelSortable)(D);

            function j(e) {
                let {
                    channel: t,
                    guild: n,
                    disableSorting: a,
                    isFavoriteCategory: s,
                    muted: r,
                    selected: o
                } = e, {
                    hasActiveThreads: u,
                    hasMoreActiveThreads: d
                } = (0, E.useHasActiveThreads)(t), h = (0, i.useStateFromStoresObject)([_.default], () => ({
                    unread: _.default.hasUnread(t.id),
                    ackMessageId: _.default.ackMessageId(t.id),
                    mentionCount: _.default.getMentionCount(t.id)
                })), C = (0, i.useStateFromStores)([N.default], () => N.default.getChannelUnreadMode(t)), I = (0, i.useStateFromStoresObject)([g.default, S.default], () => {
                    let e = g.default.getChannel(t.parent_id);
                    return {
                        canManageChannel: S.default.can(M.Permissions.MANAGE_CHANNELS, t),
                        canReorderChannel: !0 !== a && (n.id === O.FAVORITES_RAW_GUILD_ID || (null != e ? S.default.can(M.Permissions.MANAGE_CHANNELS, e) : S.default.can(M.Permissions.MANAGE_CHANNELS, n)))
                    }
                }), A = (0, i.useStateFromStores)([m.default], () => m.default.shouldIndicateNewChannel(n.id, t.id)), {
                    needSubscriptionToAccess: L,
                    isSubscriptionGated: x
                } = (0, p.default)(t.id), R = (0, i.useStateFromStores)([N.default], () => N.default.isFavorite(n.id, t.id)), y = (0, i.useStateFromStores)([T.default], () => {
                    let e = T.default.getCurrentUser();
                    return null != e && (!t.isNSFW() || e.nsfwAllowed)
                }, [t]), D = (0, c.useIsActivitiesInTextEnabled)(t.id, "webGuildTextChannel"), j = (0, v.default)({
                    channel: t,
                    isChannelCollapsed: !1,
                    isChannelSelected: o,
                    isSubscriptionGated: x,
                    needSubscriptionToAccess: L,
                    isNewChannel: A,
                    muted: r,
                    enableActivities: D,
                    unreadMode: C
                }), G = (0, f.default)(t);
                return (0, l.jsx)(b, {
                    ...h,
                    ...I,
                    ...e,
                    hasActiveThreads: u,
                    hasMoreActiveThreads: d,
                    isSubscriptionGated: x,
                    needSubscriptionToAccess: L,
                    isNewChannel: A && e.canBeNewChannel,
                    isFavoriteSuggestion: s && !R,
                    canShowThreadPreviewForUser: y,
                    channelInfo: j,
                    embeddedApps: G,
                    unreadMode: C,
                    hasChannelInfo: null != j,
                    enableActivities: D
                })
            }