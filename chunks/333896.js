            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return W
                }
            }), n("222007"), n("70102");
            var l = n("37983");
            n("884691");
            var a = n("414456"),
                s = n.n(a),
                i = n("446674"),
                r = n("77078"),
                o = n("255397"),
                u = n("272030"),
                d = n("667771"),
                c = n("650912"),
                f = n("139375"),
                h = n("233322"),
                C = n("157186"),
                p = n("848848"),
                m = n("106346"),
                E = n("144491"),
                g = n("716214"),
                I = n("567469"),
                S = n("998716"),
                _ = n("834052"),
                N = n("819450"),
                T = n("886776"),
                A = n("870691"),
                L = n("42203"),
                v = n("305961"),
                x = n("88093"),
                R = n("957255"),
                M = n("660478"),
                O = n("282109"),
                y = n("800762"),
                D = n("98292"),
                b = n("109264"),
                j = n("404008"),
                G = n("783735"),
                U = n("39347"),
                P = n("41594"),
                w = n("884155"),
                F = n("49111"),
                B = n("695838"),
                V = n("782340"),
                H = n("708995"),
                k = n("68800");
            class Y extends G.default {
                getVoiceStatesCount() {
                    var e;
                    let {
                        voiceStates: t
                    } = this.props;
                    return null !== (e = null == t ? void 0 : t.length) && void 0 !== e ? e : 0
                }
                isFull() {
                    let {
                        channel: e
                    } = this.props;
                    return (0, j.isChannelFull)(e, y.default, v.default)
                }
                getModeClass() {
                    let {
                        position: e,
                        sortingPosition: t,
                        isUserOver: n
                    } = this.props;
                    if (n) return H.containerUserOver;
                    if (null != t) return e > t ? H.containerDragAfter : H.containerDragBefore;
                    return H.containerDefault
                }
                renderVoiceUsers() {
                    let {
                        channel: e,
                        collapsed: t,
                        tabIndex: n,
                        speakerVoiceStates: a,
                        numAudience: s
                    } = this.props;
                    return (0, l.jsx)(w.default, {
                        channel: e,
                        voiceStates: a,
                        collapsed: t,
                        tabIndex: n,
                        location: F.AnalyticsLocations.GUILD_CHANNEL_LIST,
                        numAudience: s
                    })
                }
                renderChannelInfo() {
                    return this.props.channelInfo
                }
                render() {
                    let {
                        channel: e,
                        selected: t,
                        connected: n,
                        locked: a,
                        connectChannelDropTarget: i,
                        connectChannelDragSource: o,
                        connectUserDropTarget: u,
                        connectDragPreview: d,
                        canReorderChannel: c,
                        canMoveMembers: h,
                        stageInstance: C,
                        isSubscriptionGated: p,
                        needSubscriptionToAccess: m,
                        unread: E,
                        unreadMode: g,
                        mentionCount: I,
                        isFavoriteSuggestion: S
                    } = this.props, {
                        shouldShowGuildVerificationPopout: _
                    } = this.state, N = this.getVoiceStatesCount(), T = (0, l.jsxs)("li", {
                        className: s(this.getModeClass(), {
                            [H.disabled]: this.isDisabled()
                        }),
                        "data-dnd-name": e.name,
                        children: [(0, l.jsx)(r.Popout, {
                            position: "right",
                            renderPopout: this.renderPopout,
                            spacing: 0,
                            onRequestClose: this.closeGuildVerificationPopout,
                            shouldShow: _,
                            children: () => (0, l.jsx)(r.Tooltip, {
                                text: this.getTooltipText(),
                                children: i => {
                                    let {
                                        onClick: r,
                                        onContextMenu: o,
                                        ...u
                                    } = i;
                                    return (0, l.jsxs)(P.default, {
                                        className: H.iconVisibility,
                                        iconClassName: s({
                                            [k.iconLive]: null != C
                                        }),
                                        channel: e,
                                        selected: !S && t,
                                        connected: n,
                                        unread: n ? E : void 0,
                                        unreadMode: g,
                                        mentionCount: I,
                                        locked: a,
                                        onClick: () => {
                                            this.handleClick(), null == r || r()
                                        },
                                        onContextMenu: e => {
                                            this.handleContextMenu(e), null == o || o()
                                        },
                                        connectDragPreview: d,
                                        subtitle: this.renderSubtitle(),
                                        isFavoriteSuggestion: S,
                                        "aria-label": (0, f.default)({
                                            channel: e,
                                            unread: E,
                                            mentionCount: I,
                                            userCount: N,
                                            isSubscriptionGated: p,
                                            needSubscriptionToAccess: m
                                        }),
                                        ...u,
                                        children: [S && this.renderAcceptSuggestionButton(), S && this.renderRemoveSuggestionButton(), !S && this.renderOpenChatButton(), !S && this.renderInviteButton(), !S && this.renderEditButton(), !S && this.renderChannelInfo()]
                                    })
                                }
                            })
                        }), this.renderVoiceUsers()]
                    });
                    return h && (T = u(T)), c && (T = i(o(T))), T
                }
                constructor(...e) {
                    super(...e), this.state = {
                        shouldShowGuildVerificationPopout: !1
                    }, this.closeGuildVerificationPopout = () => {
                        this.setState({
                            shouldShowGuildVerificationPopout: !1
                        })
                    }, this.handleClick = () => {
                        let {
                            channel: e,
                            locked: t,
                            connected: n,
                            unverifiedAccount: l
                        } = this.props, a = e.getGuildId();
                        null != a && (0, C.shouldShowMembershipVerificationGate)(a) && (0, h.openMemberVerificationModal)(a), l && this.setState({
                            shouldShowGuildVerificationPopout: !0
                        }), !t && !n && !e.isRoleSubscriptionTemplatePreviewChannel() && (0, g.connectAndOpen)(e), !__OVERLAY__ && (0, E.transitionToChannel)(e.id)
                    }, this.handleClickChat = () => {
                        let {
                            channel: e,
                            locked: t
                        } = this.props;
                        !__OVERLAY__ && !t && (0, E.transitionToChannel)(e.id)
                    }, this.handleContextMenu = e => {
                        let {
                            channel: t
                        } = this.props, a = v.default.getGuild(t.getGuildId());
                        null != a && (0, u.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("168003").then(n.bind(n, "168003"));
                            return n => (0, l.jsx)(e, {
                                ...n,
                                channel: t,
                                guild: a
                            })
                        })
                    }, this.renderPopout = () => {
                        let {
                            channel: e
                        } = this.props, {
                            shouldShowGuildVerificationPopout: t
                        } = this.state;
                        if (t) return (0, l.jsx)(m.default, {
                            type: m.GuildVerificationPopoutTypes.VOICE,
                            guildId: e.guild_id,
                            closePopout: this.closeGuildVerificationPopout
                        });
                        throw Error("VoiceChannel.renderPopout: There must always be something to render")
                    }, this.renderOpenChatButton = () => {
                        let {
                            channel: e,
                            locked: t,
                            forceShowButtons: n
                        } = this.props;
                        if (!t) return (0, l.jsx)(r.Tooltip, {
                            text: V.default.Messages.OPEN_CHAT,
                            children: t => {
                                let {
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                    onFocus: u,
                                    onBlur: d
                                } = t;
                                return (0, l.jsx)(r.Clickable, {
                                    className: s(H.iconItem, n ? H.alwaysShown : null),
                                    onClick: () => {
                                        o.default.updateChatOpen(e.id, !0), this.handleClickChat()
                                    },
                                    "aria-label": V.default.Messages.OPEN_CHAT,
                                    onMouseEnter: a,
                                    onMouseLeave: i,
                                    onFocus: u,
                                    onBlur: d,
                                    children: (0, l.jsx)(b.default, {
                                        width: 16,
                                        height: 16,
                                        className: H.actionIcon
                                    })
                                })
                            }
                        })
                    }, this.getTooltipText = () => {
                        let {
                            connected: e
                        } = this.props;
                        return this.isFull() && !e ? V.default.Messages.UNABLE_TO_JOIN_CHANNEL_FULL : null
                    }, this.renderSubtitle = () => {
                        var e;
                        let t = null === (e = this.props.stageInstance) || void 0 === e ? void 0 : e.topic;
                        return null == t ? null : (0, l.jsx)(D.default, {
                            children: t
                        })
                    }
                }
            }
            let K = (0, d.makeChannelSortable)((0, c.makeVoiceUserDroppable)(Y));

            function W(e) {
                let {
                    guild: t,
                    channel: n,
                    disableSorting: a,
                    isFavoriteCategory: s,
                    collapsed: r,
                    voiceStates: o
                } = e, u = (0, i.useStateFromStoresObject)([M.default], () => ({
                    unread: M.default.hasUnread(n.id),
                    mentionCount: M.default.getMentionCount(n.id)
                })), d = (0, i.useStateFromStores)([O.default], () => O.default.getChannelUnreadMode(n)), c = (0, i.useStateFromStoresObject)([L.default, x.default, R.default], () => {
                    let e = L.default.getChannel(n.parent_id),
                        l = x.default.getCheck(n.guild_id);
                    return {
                        canManageChannel: null != t && R.default.can(F.Permissions.MANAGE_CHANNELS, n),
                        canReorderChannel: !0 !== a && (t.id === B.FAVORITES_RAW_GUILD_ID || (null != e ? R.default.can(F.Permissions.MANAGE_CHANNELS, e) : R.default.can(F.Permissions.MANAGE_CHANNELS, t))),
                        canMoveMembers: R.default.can(F.Permissions.MOVE_MEMBERS, n),
                        locked: !R.default.can(F.Permissions.CONNECT, n),
                        bypassLimit: R.default.can(F.Permissions.MOVE_MEMBERS, n),
                        unverifiedAccount: !l.canChat
                    }
                }), f = (0, i.useStateFromStores)([A.default], () => A.default.isCollapsed(n.parent_id)), h = (0, T.default)(n.id), C = (0, i.useStateFromStores)([_.default], () => _.default.getStageInstanceByChannel(n.id), [n.id]), m = (0, I.useStageParticipantsCount)(n.id, S.StageChannelParticipantNamedIndex.AUDIENCE), {
                    isSubscriptionGated: E,
                    needSubscriptionToAccess: g
                } = (0, p.default)(n.id), v = (0, i.useStateFromStores)([O.default], () => O.default.isFavorite(t.id, n.id)), y = (0, N.getStageHasMedia)(n.id), D = (0, U.default)({
                    channel: n,
                    isChannelSelected: !1,
                    isChannelCollapsed: r,
                    voiceStates: o,
                    isSubscriptionGated: E,
                    needSubscriptionToAccess: g,
                    enableConnectedUserLimit: y || n.userLimit > 0 && n.userLimit < F.MAX_STAGE_VOICE_USER_LIMIT
                }), b = e.connected && null == D;
                return (0, l.jsx)(K, {
                    categoryCollapsed: f,
                    connectAction: h,
                    numAudience: m,
                    stageInstance: C,
                    isSubscriptionGated: E,
                    needSubscriptionToAccess: g,
                    ...u,
                    ...c,
                    ...e,
                    isFavoriteSuggestion: s && !v,
                    forceShowButtons: b,
                    channelInfo: D,
                    unreadMode: d
                })
            }