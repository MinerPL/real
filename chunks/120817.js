            "use strict";
            n.r(t), n.d(t, {
                FavoritesChannelList: function() {
                    return ef
                },
                GuildChannelList: function() {
                    return eh
                }
            }), n("222007"), n("424973");
            var l = n("37983"),
                a = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("917351"),
                o = n.n(r),
                u = n("974667"),
                d = n("446674"),
                c = n("77078"),
                f = n("406189"),
                h = n("715315"),
                C = n("901582"),
                p = n("206230"),
                m = n("812204"),
                E = n("685665"),
                g = n("498139"),
                I = n("880730"),
                S = n("802479"),
                _ = n("972027"),
                N = n("334683"),
                T = n("534222"),
                A = n("240239"),
                L = n("676143"),
                v = n("512395"),
                x = n("615387"),
                R = n("721264"),
                M = n("612246"),
                O = n("233069"),
                y = n("42203"),
                D = n("162805"),
                b = n("923959"),
                j = n("162771"),
                G = n("476765"),
                U = n("319839"),
                P = n("123561"),
                w = n("829072"),
                F = n("60937"),
                B = n("708186"),
                V = n("258285"),
                H = n("710707"),
                k = n("127193"),
                Y = n("508176"),
                K = n("522342"),
                W = n("738552"),
                Z = n("630062"),
                z = n("873774"),
                Q = n("677777"),
                X = n("579095"),
                q = n("333896"),
                J = n("446380"),
                $ = n("919429"),
                ee = n("944843"),
                et = n("283848"),
                en = n("388930"),
                el = n("37416"),
                ea = n("796618"),
                es = n("249181"),
                ei = n("49111"),
                er = n("724210"),
                eo = n("782340"),
                eu = n("272125");
            class ed extends a.PureComponent {
                componentDidMount() {
                    this.setState({
                        initialized: !0
                    })
                }
                componentWillUnmount() {
                    this.updateChannelListScroll.cancel()
                }
                componentDidUpdate(e, t) {
                    let {
                        scrollToChannel: n,
                        guildId: l,
                        selectedChannelId: a
                    } = this.props, {
                        initialized: s
                    } = this.state, {
                        scrollTop: i
                    } = D.default.getGuildDimensions(l);
                    null != n ? (this.scrollToChannel(n), f.default.clearChannelListScrollTo(l)) : l !== e.guildId ? null != i && this.scrollTo(i) : a !== e.selectedChannelId ? this.scrollToChannel(a) : !t.initialized && s && (null == i && null != a ? this.scrollToChannel(a, !1, es.SCROLL_TO_SPACER, this.handleListScroll) : this.scrollTo(null != i ? i : 0, this.handleListScroll)), this.testShouldSkipTutorial()
                }
                getSectionRowsFromChannel(e) {
                    return this.props.guildChannels.getSectionRowsFromChannel(e)
                }
                scrollTo(e, t) {
                    var n;
                    null === (n = this._list) || void 0 === n || n.scrollTo({
                        to: e,
                        animate: !1,
                        callback: t
                    })
                }
                scrollToChannel(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : es.SCROLL_TO_SPACER,
                        l = arguments.length > 3 ? arguments[3] : void 0,
                        a = this._list,
                        s = this.getSectionRowsFromChannel(e)[0];
                    if (null != s && null != a) {
                        if (null != s.threadOffset) {
                            let [e] = a.getScrollPosition(s.section, s.row), i = s.threadOffset * es.HEIGHT_CHANNEL;
                            a.scrollIntoViewRect({
                                start: e + i,
                                end: e + i + es.HEIGHT_CHANNEL,
                                padding: n,
                                animate: t,
                                callback: l
                            })
                        } else a.scrollToIndex({
                            section: s.section,
                            row: s.row,
                            animate: t,
                            padding: n,
                            callback: l
                        })
                    }
                }
                isUnreadVisible() {
                    let {
                        guildChannels: e
                    } = this.props, t = this._list;
                    if (null == t) return !1;
                    let n = t.getItems();
                    return n.some(n => {
                        if ("row" !== n.type) return !1;
                        let {
                            section: l,
                            row: a
                        } = n;
                        if (l < U.SECTION_INDEX_UNCATEGORIZED_CHANNELS || e.isPlaceholderRow(l, a)) return !1;
                        let s = e.getChannelFromSectionRow(l, a);
                        if (null == s) return !1;
                        let {
                            channel: i,
                            category: r
                        } = s;
                        return !!(0, O.isGuildReadableType)(i.record.type) && (!r.isCollapsed || !r.isMuted) && !i.isMuted && !!t.isItemVisible(l, a, !0) && (0, x.getHasImportantUnread)(i.record)
                    })
                }
                renderTopUnread() {
                    let {
                        topMention: e,
                        bottomUnread: t,
                        bottomMention: n,
                        isUnreadVisible: a
                    } = this.state, {
                        guildId: s,
                        guildChannels: i,
                        guildChannelsVersion: r
                    } = this.props;
                    return (0, l.jsx)("div", {
                        className: eu.positionedContainer,
                        children: (0, l.jsx)(et.default, {
                            ref: this.unreadTopRef,
                            textUnread: eo.default.Messages.NEW_UNREADS,
                            textMention: eo.default.Messages.NEW_MENTIONS,
                            hide: null == e && (a || null != t || null != n),
                            className: eu.unreadTop,
                            barClassName: eu.unreadBar,
                            guildId: s,
                            guildChannels: i,
                            guildChannelsVersion: r,
                            isVisible: this.isChannelVisible,
                            onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                            onCalculate: this.handleUnreadCalculate
                        })
                    })
                }
                renderBottomUnread() {
                    let {
                        guildId: e,
                        guildChannels: t,
                        guildChannelsVersion: n
                    } = this.props, {
                        bottomMention: a,
                        isUnreadVisible: s
                    } = this.state;
                    return (0, l.jsx)(et.default, {
                        reverse: !0,
                        ref: this.unreadBottomRef,
                        textUnread: eo.default.Messages.NEW_UNREADS,
                        textMention: eo.default.Messages.NEW_MENTIONS,
                        hide: null == a && s,
                        className: eu.unreadBottom,
                        barClassName: eu.unreadBar,
                        guildId: e,
                        guildChannels: t,
                        guildChannelsVersion: n,
                        isVisible: this.isChannelVisible,
                        onJumpTo: this.jumpToChannelWithMentionsAndUnreads,
                        onCalculate: this.handleUnreadCalculate
                    })
                }
                renderList() {
                    let {
                        guildChannels: e,
                        guild: t,
                        guildBanner: n,
                        hasGuildSubheader: a
                    } = this.props, {
                        ref: s,
                        ...i
                    } = this.context, r = 0;
                    return null != n ? r = es.SERVER_BANNER_PADDING : t.hasCommunityInfoSubheader() && !a && (r = es.SERVER_COMMUNITY_INFO_PADDING), (0, l.jsx)(c.FocusJumpSection, {
                        children: t => (0, l.jsx)(c.List, {
                            ref: this.setListRef,
                            className: eu.scroller,
                            fade: !0,
                            customTheme: !0,
                            sectionHeight: this.getSectionHeight,
                            footerHeight: this.getSectionFooterHeight,
                            rowHeight: this.getRowHeight,
                            paddingTop: r,
                            paddingBottom: es.HEIGHT_BUFFER,
                            renderSection: this.renderSection,
                            renderFooter: this.renderSectionFooter,
                            renderRow: this.renderRow,
                            onScroll: this.handleListScroll,
                            onResize: this.handleResize,
                            onContentResize: this.handleResize,
                            sections: e.getSections(),
                            innerAriaLabel: eo.default.Messages.CHANNELS,
                            innerTag: "ul",
                            getAnchorId: this.getAnchorId,
                            ...i,
                            ...t
                        }, "guild-channels")
                    })
                }
                render() {
                    let {
                        guildChannels: e,
                        guildChannelsVersion: t,
                        showNewUnreadsBar: n
                    } = this.props;
                    return (0, l.jsx)(a.Fragment, {
                        children: (0, l.jsx)(G.UID, {
                            children: s => (0, l.jsx)(c.HeadingLevel, {
                                component: (0, l.jsx)(c.HiddenVisually, {
                                    children: (0, l.jsx)(c.H, {
                                        id: s,
                                        children: eo.default.Messages.CHANNELS
                                    })
                                }),
                                children: n ? (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: eu.positionedContainer,
                                        children: (0, l.jsx)(ee.default, {
                                            position: "top",
                                            guildChannels: e,
                                            guildChannelsVersion: t,
                                            jumpToVoiceChannels: this.jumpToVoiceChannels,
                                            jumpToChannel: this.jumpToChannel
                                        })
                                    }), this.renderList(), (0, l.jsx)(ee.default, {
                                        position: "bottom",
                                        guildChannels: e,
                                        guildChannelsVersion: t,
                                        jumpToVoiceChannels: this.jumpToVoiceChannels,
                                        jumpToChannel: this.jumpToChannel
                                    })]
                                }) : (0, l.jsxs)(a.Fragment, {
                                    children: [this.renderTopUnread(), this.renderList(), this.renderBottomUnread()]
                                })
                            })
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._list = null, this.unreadTopRef = a.createRef(), this.unreadBottomRef = a.createRef(), this.state = {
                        initialized: !1,
                        isUnreadVisible: !0,
                        topUnread: null,
                        topMention: null,
                        bottomUnread: null,
                        bottomMention: null
                    }, this.setListRef = e => {
                        var t;
                        let {
                            ref: n
                        } = this.context;
                        n.current = null !== (t = null == e ? void 0 : e.getScrollerNode()) && void 0 !== t ? t : null, this._list = e
                    }, this.jumpToVoiceChannels = () => {
                        var e, t, n, l;
                        let {
                            guildChannels: a,
                            voiceStates: s
                        } = this.props, i = 0, r = null !== (n = null === (e = a.getCategoryFromSection(a.voiceChannelsSectionNumber)) || void 0 === e ? void 0 : e.getShownChannelIds()) && void 0 !== n ? n : [];
                        for (let e = 0; e < r.length - 1; e++) {
                            let t = null !== (l = s[r[e]]) && void 0 !== l ? l : [];
                            if (t.length > 0) {
                                i = e + 1;
                                break
                            }
                        }
                        null === (t = this._list) || void 0 === t || t.scrollToIndex({
                            section: a.voiceChannelsSectionNumber,
                            row: i,
                            animate: !0,
                            padding: es.SCROLL_TO_SPACER
                        })
                    }, this.jumpToChannel = e => this.scrollToChannel(e, !0, es.SCROLL_TO_UNREAD_BUFFER), this.jumpToChannelWithMentionsAndUnreads = (e, t) => {
                        let [n, l] = t;
                        return this.scrollToChannel(e, !0, null != n && null != l ? es.SCROLL_TO_UNREAD_BUFFER : es.SCROLL_TO_SPACER)
                    }, this.isChannelVisible = (e, t) => {
                        let n = this.getSectionRowsFromChannel(e),
                            l = this._list;
                        if (null == l) return !1;
                        for (let {
                                row: e,
                                section: a
                            }
                            of n) {
                            let [n, s] = l.getScrollPosition(a, e), i = l.getScrollerState();
                            if (t && n + s < i.scrollTop + i.offsetHeight) return !0;
                            if (!t && n > i.scrollTop) return !0
                        }
                        return !1
                    }, this.getVisibleChannels = () => {
                        let e = this._list;
                        if (null == e) return [];
                        let t = e.getItems(),
                            n = e.getScrollerState(),
                            l = [];
                        for (var a = 0; a < t.length; a++) {
                            let s = t[a];
                            if ((0, c.isListItemRow)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
                                let t = this.props.guildChannels.getChannelFromSectionRow(s.section, s.row),
                                    [a, i] = e.getScrollPosition(s.section, s.row);
                                null != t && a + i < n.scrollTop + n.offsetHeight && a > n.scrollTop && l.push(t.channel.id)
                            }
                        }
                        return l
                    }, this.handleResize = () => {
                        var e, t;
                        let {
                            showNewUnreadsBar: n
                        } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                        if (this.setState({
                                isUnreadVisible: this.isUnreadVisible()
                            }), n && null != l) {
                            let {
                                scrollTop: e
                            } = l;
                            this.updateChannelListScroll(e)
                        }
                    }, this.handleListScroll = () => {
                        var e, t;
                        let {
                            onScroll: n
                        } = this.props, l = null !== (t = null === (e = this._list) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : null;
                        if (null != l) {
                            let {
                                scrollTop: e
                            } = l;
                            null != n && n(l), this.updateChannelListScroll(e)
                        }
                        null != this.unreadTopRef.current && this.unreadTopRef.current.calculateState(), null != this.unreadBottomRef.current && this.unreadBottomRef.current.calculateState()
                    }, this.handleUnreadCalculate = (e, t, n) => {
                        let l = this.isUnreadVisible();
                        n ? this.setState({
                            isUnreadVisible: l,
                            bottomUnread: t,
                            bottomMention: e
                        }) : this.setState({
                            isUnreadVisible: l,
                            topUnread: t,
                            topMention: e
                        })
                    }, this.updateChannelListScroll = o.throttle(e => {
                        f.default.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
                    }, 100), this.getSectionHeight = e => {
                        let {
                            guild: t,
                            guildChannels: n
                        } = this.props;
                        return (0, V.getChannelListSectionHeight)(e, t, n)
                    }, this.getSectionFooterHeight = e => {
                        let {
                            guildChannels: t,
                            voiceStates: n,
                            selectedVoiceChannelId: l,
                            selectedChannelId: a,
                            optInEnabled: s,
                            guildChannelsVersion: i
                        } = this.props;
                        return (0, H.getChannelListSectionFooterHeight)({
                            sectionIndex: e,
                            guildChannels: t,
                            guildChannelsVersion: i,
                            voiceStates: n,
                            selectedChannelId: a,
                            selectedVoiceChannelId: l,
                            optInEnabled: s
                        })
                    }, this.getRowHeight = (e, t) => {
                        let {
                            guildChannels: n,
                            voiceStates: l,
                            stageChannelSpeakerVoiceStates: a,
                            selectedVoiceChannelId: s,
                            enableHangStatus: i
                        } = this.props, r = es.HEIGHT_CHANNEL;
                        if (e === U.SECTION_INDEX_COMMUNITY) {
                            let e = n.getCommunitySection();
                            if (e.isEmpty()) return 0;
                            if (e.getRow(t) === ea.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR) {
                                let t = e.getRows();
                                return t.length > 1 ? I.PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN : I.PROGRESS_BAR_CONTAINER_HEIGHT
                            }
                            return r
                        }
                        if (n.isPlaceholderRow(e, t)) return 0;
                        let o = n.getChannelFromSectionRow(e, t);
                        if (null == o) return 0;
                        let {
                            channel: u,
                            category: d
                        } = o;
                        if (u.record.type === ei.ChannelTypes.GUILD_CATEGORY) return 40;
                        for (let e of u.threadIds) {
                            r += es.HEIGHT_CHANNEL;
                            let t = l[u.id];
                            null != t && t.length > 0 && (r += (s === e ? t.length * es.HEIGHT_USER : es.HEIGHT_USER) + es.HEIGHT_USER_PADDING)
                        }
                        if (u.record.isGuildVoice()) {
                            let e = l[u.id];
                            if (null != e && e.length > 0) {
                                let t = e.length * es.HEIGHT_USER;
                                (u.isCollapsed || d.isCollapsed) && (t = es.HEIGHT_USER), r += t + es.HEIGHT_USER_PADDING
                            }
                        }
                        if (null != u.subtitle) {
                            let e = s === u.id && i ? 0 : es.HEIGHT_CHANNEL_SUBTITLE;
                            r += e
                        }
                        if (u.record.isGuildStageVoice()) {
                            var c, f;
                            let e = null !== (c = l[u.id]) && void 0 !== c ? c : [],
                                t = null !== (f = a[u.id]) && void 0 !== f ? f : [];
                            if (null != e && e.length > 0) {
                                let e = t.length * es.HEIGHT_USER;
                                u.isCollapsed || d.isCollapsed ? e = Math.ceil(e / es.COLLAPSED_USERS_PER_ROW) : e += es.HEIGHT_USER, r += e + es.HEIGHT_USER_PADDING
                            }
                        }
                        return r
                    }, this.dismissRecents = () => {
                        let {
                            guild: e,
                            guildChannels: t,
                            selectedChannelId: n
                        } = this.props, l = t.getCategoryFromSection(t.recentsSectionNumber);
                        if (null == l) return;
                        let a = null,
                            s = l.getShownChannelAndThreadIds();
                        null != n && s.includes(n) && (a = (0, L.getFirstRouteFor)(t)), (0, L.clearRecentChannels)(e.id, s, a)
                    }, this.renderSection = e => {
                        let {
                            section: t
                        } = e, {
                            guildChannels: n,
                            guildChannelsVersion: a,
                            guild: s,
                            selectedChannelId: i,
                            disableManageChannels: r
                        } = this.props;
                        return (0, l.jsx)(V.default, {
                            sectionIndex: t,
                            guild: s,
                            guildChannels: n,
                            guildChannelsVersion: a,
                            selectedChannelId: i,
                            disableManageChannels: r
                        }, (0, V.getKeyForSection)(t, n))
                    }, this.renderRow = e => {
                        let {
                            section: t,
                            row: n
                        } = e, {
                            guild: s,
                            selectedChannel: r,
                            selectedChannelId: o,
                            selectedVoiceChannel: u,
                            selectedVoiceChannelId: d,
                            guildChannels: c,
                            voiceStates: f,
                            disableManageChannels: h,
                            stageChannelSpeakerVoiceStates: C,
                            optInEnabled: p,
                            withGuildIcon: m
                        } = this.props;
                        if (t === U.SECTION_INDEX_COMMUNITY) {
                            let e = c.getCommunitySection(),
                                t = e.getRow(n);
                            if (null == t) return null;
                            switch (t) {
                                case ea.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS:
                                    return (0, l.jsx)(A.default, {
                                        guild: s,
                                        channel: b.default.getDefaultChannel(s.id)
                                    }, ea.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS);
                                case ea.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR:
                                    let a = e.getRows();
                                    return (0, l.jsx)(I.default, {
                                        guild: s,
                                        withMargin: a.length > 1
                                    }, ea.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR);
                                case ea.ChannelListCommunityRow.GUILD_HOME:
                                    return (0, l.jsx)(K.default, {
                                        guild: s,
                                        selected: o === er.StaticChannelRoute.GUILD_HOME
                                    }, ea.ChannelListCommunityRow.GUILD_HOME);
                                case ea.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS:
                                    return (0, l.jsx)(en.default, {
                                        guild: s,
                                        selected: o === ea.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS
                                    }, ea.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS);
                                case ea.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
                                    return (0, l.jsx)(z.default, {
                                        guild: s,
                                        selected: o === er.StaticChannelRoute.ROLE_SUBSCRIPTIONS
                                    }, ea.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS);
                                case ea.ChannelListCommunityRow.GUILD_SHOP:
                                    return (0, l.jsx)(Q.default, {
                                        guild: s,
                                        selected: o === er.StaticChannelRoute.GUILD_SHOP
                                    }, ea.ChannelListCommunityRow.GUILD_SHOP);
                                case ea.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
                                    return (0, l.jsx)(W.default, {
                                        guild: s,
                                        selected: o === er.StaticChannelRoute.MEMBER_APPLICATIONS
                                    }, ea.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS);
                                case ea.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
                                    return (0, l.jsx)(Z.GuildNewMemberActionsProgressBar, {
                                        guild: s
                                    });
                                case ea.ChannelListCommunityRow.CHANNELS_AND_ROLES:
                                    return (0, l.jsx)(Y.GuildBrowseChannelsRow, {
                                        guild: s,
                                        selected: o === er.StaticChannelRoute.CHANNEL_BROWSER || o === er.StaticChannelRoute.CUSTOMIZE_COMMUNITY
                                    }, ea.ChannelListCommunityRow.CHANNELS_AND_ROLES);
                                case ea.ChannelListCommunityRow.GUILD_DIRECTORY:
                                    return (0, l.jsx)(k.default, {
                                        guild: s,
                                        selectedChannelId: o,
                                        disableManageChannels: h
                                    }, ea.ChannelListCommunityRow.GUILD_DIRECTORY);
                                case ea.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY:
                                    return (0, l.jsx)(S.default, {
                                        guild: s,
                                        selected: o === er.StaticChannelRoute.MEMBER_SAFETY
                                    }, ea.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY);
                                default:
                                    return null
                            }
                        }
                        if (c.isPlaceholderRow(t, n)) return null;
                        let E = c.getChannelFromSectionRow(t, n);
                        if (null == E) return null;
                        let {
                            category: g,
                            channel: _
                        } = E, N = g instanceof U.ChannelListFavoritesCategory, T = _.record, L = "".concat(t).concat(_.id);
                        switch (T.type) {
                            case ei.ChannelTypes.GUILD_ANNOUNCEMENT:
                            case ei.ChannelTypes.GUILD_TEXT:
                            case ei.ChannelTypes.GUILD_FORUM:
                            case ei.ChannelTypes.GUILD_MEDIA:
                            case ei.ChannelTypes.DM:
                            case ei.ChannelTypes.GROUP_DM:
                                return (0, l.jsxs)(a.Fragment, {
                                    children: [(0, l.jsx)($.default, {
                                        channel: T,
                                        guild: s,
                                        position: _.position,
                                        selected: o === _.id,
                                        muted: _.isMuted,
                                        subtitle: _.subtitle,
                                        disableManageChannels: h,
                                        canBeNewChannel: p && t === c.recentsSectionNumber,
                                        isFavoriteCategory: N,
                                        withGuildIcon: m
                                    }), _.threadCount > 0 ? (0, l.jsx)(X.default, {
                                        className: i({
                                            [eu.threadListWithGuildIcon]: m
                                        }),
                                        channel: T,
                                        sortedThreadIds: _.threadIds,
                                        selectedChannel: null != r && (r.id === _.id || r.parent_id === T.id) ? r : null,
                                        selectedVoiceChannelId: (null == u ? void 0 : u.parent_id) === T.id ? d : null
                                    }) : null]
                                }, L);
                            case ei.ChannelTypes.GUILD_STAGE_VOICE:
                                var v, x;
                                return (0, l.jsx)(q.default, {
                                    channel: T,
                                    guild: s,
                                    position: _.position,
                                    selected: o === _.id,
                                    connected: d === _.id,
                                    collapsed: _.isCollapsed || g.isCollapsed,
                                    voiceStates: null !== (v = f[_.id]) && void 0 !== v ? v : [],
                                    speakerVoiceStates: null !== (x = C[_.id]) && void 0 !== x ? x : [],
                                    disableManageChannels: h,
                                    isFavoriteCategory: N
                                }, L);
                            case ei.ChannelTypes.GUILD_VOICE:
                                return (0, l.jsx)(el.default, {
                                    channel: T,
                                    guild: s,
                                    position: _.position,
                                    selected: o === _.id,
                                    connected: d === _.id,
                                    collapsed: _.isCollapsed || g.isCollapsed,
                                    voiceStates: f[_.id],
                                    subtitle: _.subtitle,
                                    disableManageChannels: h,
                                    showTutorial: _.isFirstVoiceChannel,
                                    isFavoriteCategory: N,
                                    withGuildIcon: m
                                }, L);
                            case ei.ChannelTypes.GUILD_STORE:
                                return (0, l.jsx)(J.default, {
                                    channel: T,
                                    guild: s,
                                    position: _.position,
                                    selected: o === _.id
                                }, L);
                            case ei.ChannelTypes.GUILD_CATEGORY:
                                if (t !== c.voiceChannelsSectionNumber) return null;
                                return (0, l.jsx)(B.ReadonlyCategoryChannel, {
                                    channel: T
                                }, "readonly-".concat(T.id));
                            case ei.ChannelTypes.PUBLIC_THREAD:
                            case ei.ChannelTypes.PRIVATE_THREAD:
                                return (0, l.jsx)($.default, {
                                    channel: T,
                                    guild: s,
                                    position: _.position,
                                    selected: o === _.id,
                                    muted: _.isMuted,
                                    subtitle: _.subtitle,
                                    disableManageChannels: h,
                                    canBeNewChannel: !1,
                                    isFavoriteCategory: !1,
                                    forceTopLevelThread: !0
                                }, L);
                            default:
                                return null
                        }
                    }, this.renderSectionFooter = e => {
                        let {
                            section: t
                        } = e, {
                            guildChannels: n,
                            guildChannelsVersion: a,
                            voiceStates: s,
                            selectedChannelId: i,
                            selectedVoiceChannelId: r,
                            optInEnabled: o,
                            guildId: u
                        } = this.props;
                        return (0, l.jsx)(H.default, {
                            guildId: u,
                            guildChannels: n,
                            guildChannelsVersion: a,
                            sectionIndex: t,
                            voiceStates: s,
                            selectedChannelId: i,
                            selectedVoiceChannelId: r,
                            optInEnabled: o
                        }, (0, H.getKeyForSectionFooter)(t, n, o))
                    }, this.getAnchorId = (e, t) => {
                        var n, l, a;
                        let {
                            guildChannels: s
                        } = this.props;
                        if (e !== U.SECTION_INDEX_COMMUNITY) {
                            if (null == t) return e === U.SECTION_INDEX_FAVORITES ? "favorites-header" : e === s.recentsSectionNumber ? "recents-header" : e === s.voiceChannelsSectionNumber ? "voice-channels" : e === U.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? "uncategorized-header" : null === (a = s.getNamedCategoryFromSection(e)) || void 0 === a ? void 0 : a.id;
                            if (!s.isPlaceholderRow(e, t)) return null === (l = s.getChannelFromSectionRow(e, t)) || void 0 === l ? void 0 : null === (n = l.channel) || void 0 === n ? void 0 : n.id
                        }
                    }, this.testShouldSkipTutorial = () => {
                        if (!M.default.shouldShow("voice-conversations")) return;
                        let {
                            guildChannels: e
                        } = this.props, t = e.getFirstVoiceChannel();
                        if (null == t) {
                            h.default.dismiss("voice-conversations");
                            return
                        }
                        let n = this._list;
                        if (null == n) return;
                        let l = this.getSectionRowsFromChannel(t.id);
                        for (let {
                                section: e,
                                row: t
                            }
                            of l) !n.isItemVisible(e, t) && h.default.dismiss("voice-conversations")
                    }
                }
            }
            ed.contextType = u.ListContainerContext;
            let ec = e => {
                let {
                    guildId: t,
                    selectedChannelId: n,
                    selectedVoiceChannelId: s
                } = e, i = (0, d.useStateFromStores)([p.default], () => p.default.keyboardModeEnabled), {
                    AnalyticsLocationProvider: r
                } = (0, E.default)(m.default.GUILD_CHANNEL_LIST), o = (0, d.useStateFromStores)([y.default], () => y.default.getChannel(n)), c = (0, d.useStateFromStores)([y.default], () => y.default.getChannel(s)), f = (0, d.useStateFromStores)([j.default], () => j.default.getGuildId()), h = (0, v.useOptInEnabledForGuild)(t), g = a.useRef(null), I = a.useCallback((e, t) => {
                    let n = g.current;
                    if (null != n) {
                        if (ei.ID_REGEX.test(t) || (0, er.isStaticChannelRoute)(t)) n.scrollToChannel(t, !1, 2 * es.SCROLL_TO_SPACER, () => {
                            requestAnimationFrame(() => {
                                var t;
                                return null === (t = document.querySelector(e)) || void 0 === t ? void 0 : t.focus()
                            })
                        });
                        else {
                            var l;
                            null === (l = document.querySelector(e)) || void 0 === l || l.focus()
                        }
                    }
                }, []), S = a.useCallback(() => new Promise(e => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(0, () => requestAnimationFrame(() => e()))
                }), []), _ = a.useCallback(() => new Promise(e => {
                    let t = g.current;
                    if (null == t) return e();
                    t.scrollTo(Number.MAX_SAFE_INTEGER, () => requestAnimationFrame(() => e()))
                }), []), N = (0, u.default)({
                    id: "channels",
                    defaultFocused: null != n ? n : void 0,
                    isEnabled: i,
                    setFocus: I,
                    scrollToStart: S,
                    scrollToEnd: _
                }), T = N.setFocus;
                a.useEffect(() => {
                    null != n && T(n)
                }, [n, T]);
                let A = (0, R.default)(t);
                return (0, l.jsx)(r, {
                    children: (0, l.jsx)(C.default, {
                        section: ei.AnalyticsSections.GUILD_CHANNEL_LIST,
                        children: (0, l.jsx)(u.ListNavigatorProvider, {
                            navigator: N,
                            children: (0, l.jsx)(ed, {
                                ...e,
                                listNavigator: N,
                                ref: g,
                                selectedChannel: o,
                                selectedVoiceChannel: c,
                                stageChannelSpeakerVoiceStates: A,
                                selectedGuildId: f,
                                optInEnabled: h
                            })
                        })
                    })
                })
            };

            function ef(e) {
                let t = (0, w.useFavoritesServerChannelList)(),
                    {
                        isFavoritesPerk: n
                    } = (0, g.useFavoritesServerExperiment)("favorites-channel-list");
                return (0, l.jsx)(ec, {
                    ...e,
                    guildChannels: t,
                    guildChannelsVersion: 0,
                    withGuildIcon: n
                })
            }

            function eh(e) {
                let t = (0, F.default)(e.guild),
                    n = (0, N.default)(e.guild.id),
                    a = (0, T.default)(e.guild.id),
                    s = (0, d.useStateFromStoresObject)([P.default], () => P.default.getGuild(e.guildId, t));
                return !e.guild.hasFeature(ei.GuildFeatures.COMMUNITY) && !e.guild.hasFeature(ei.GuildFeatures.HUB) && n && 0 === a.length && _.default.trackExposure({
                    guildId: e.guildId,
                    location: "Channel List"
                }), (0, l.jsx)(ec, {
                    ...e,
                    ...s
                })
            }