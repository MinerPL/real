"use strict";
n.r(t), n.d(t, {
  FavoritesChannelList: function() {
    return ed
  },
  GuildChannelList: function() {
    return ec
  }
}), n("222007"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("917351"),
  i = n.n(s),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("406189"),
  c = n("715315"),
  f = n("901582"),
  h = n("206230"),
  C = n("812204"),
  p = n("685665"),
  m = n("498139"),
  E = n("880730"),
  g = n("802479"),
  I = n("972027"),
  S = n("334683"),
  _ = n("534222"),
  N = n("240239"),
  T = n("676143"),
  A = n("512395"),
  L = n("615387"),
  v = n("721264"),
  x = n("612246"),
  R = n("233069"),
  M = n("42203"),
  O = n("162805"),
  y = n("923959"),
  D = n("162771"),
  b = n("476765"),
  j = n("319839"),
  G = n("123561"),
  U = n("829072"),
  P = n("60937"),
  w = n("708186"),
  F = n("258285"),
  B = n("710707"),
  V = n("127193"),
  H = n("508176"),
  k = n("522342"),
  Y = n("738552"),
  K = n("630062"),
  W = n("873774"),
  Z = n("677777"),
  z = n("579095"),
  X = n("333896"),
  Q = n("446380"),
  q = n("919429"),
  J = n("944843"),
  $ = n("283848"),
  ee = n("388930"),
  et = n("37416"),
  en = n("796618"),
  el = n("249181"),
  ea = n("49111"),
  es = n("724210"),
  ei = n("782340"),
  er = n("272125");
class eo extends a.PureComponent {
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
    } = O.default.getGuildDimensions(l);
    null != n ? (this.scrollToChannel(n), d.default.clearChannelListScrollTo(l)) : l !== e.guildId ? null != i && this.scrollTo(i) : a !== e.selectedChannelId ? this.scrollToChannel(a) : !t.initialized && s && (null == i && null != a ? this.scrollToChannel(a, !1, el.SCROLL_TO_SPACER, this.handleListScroll) : this.scrollTo(null != i ? i : 0, this.handleListScroll)), this.testShouldSkipTutorial()
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
      n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : el.SCROLL_TO_SPACER,
      l = arguments.length > 3 ? arguments[3] : void 0,
      a = this._list,
      s = this.getSectionRowsFromChannel(e)[0];
    if (null != s && null != a) {
      if (null != s.threadOffset) {
        let [e] = a.getScrollPosition(s.section, s.row), i = s.threadOffset * el.HEIGHT_CHANNEL;
        a.scrollIntoViewRect({
          start: e + i,
          end: e + i + el.HEIGHT_CHANNEL,
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
      if (l < j.SECTION_INDEX_UNCATEGORIZED_CHANNELS || e.isPlaceholderRow(l, a)) return !1;
      let s = e.getChannelFromSectionRow(l, a);
      if (null == s) return !1;
      let {
        channel: i,
        category: r
      } = s;
      return !!(0, R.isGuildReadableType)(i.record.type) && (!r.isCollapsed || !r.isMuted) && !i.isMuted && !!t.isItemVisible(l, a, !0) && (0, L.getHasImportantUnread)(i.record)
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
      className: er.positionedContainer,
      children: (0, l.jsx)($.default, {
        ref: this.unreadTopRef,
        textUnread: ei.default.Messages.NEW_UNREADS,
        textMention: ei.default.Messages.NEW_MENTIONS,
        hide: null == e && (a || null != t || null != n),
        className: er.unreadTop,
        barClassName: er.unreadBar,
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
    return (0, l.jsx)($.default, {
      reverse: !0,
      ref: this.unreadBottomRef,
      textUnread: ei.default.Messages.NEW_UNREADS,
      textMention: ei.default.Messages.NEW_MENTIONS,
      hide: null == a && s,
      className: er.unreadBottom,
      barClassName: er.unreadBar,
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
    return null != n ? r = el.SERVER_BANNER_PADDING : t.hasCommunityInfoSubheader() && !a && (r = el.SERVER_COMMUNITY_INFO_PADDING), (0, l.jsx)(u.FocusJumpSection, {
      children: t => (0, l.jsx)(u.List, {
        ref: this.setListRef,
        className: er.scroller,
        fade: !0,
        customTheme: !0,
        sectionHeight: this.getSectionHeight,
        footerHeight: this.getSectionFooterHeight,
        rowHeight: this.getRowHeight,
        paddingTop: r,
        paddingBottom: el.HEIGHT_BUFFER,
        renderSection: this.renderSection,
        renderFooter: this.renderSectionFooter,
        renderRow: this.renderRow,
        onScroll: this.handleListScroll,
        onResize: this.handleResize,
        onContentResize: this.handleResize,
        sections: e.getSections(),
        innerAriaLabel: ei.default.Messages.CHANNELS,
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
      children: (0, l.jsx)(b.UID, {
        children: s => (0, l.jsx)(u.HeadingLevel, {
          component: (0, l.jsx)(u.HiddenVisually, {
            children: (0, l.jsx)(u.H, {
              id: s,
              children: ei.default.Messages.CHANNELS
            })
          }),
          children: n ? (0, l.jsxs)(a.Fragment, {
            children: [(0, l.jsx)("div", {
              className: er.positionedContainer,
              children: (0, l.jsx)(J.default, {
                position: "top",
                guildChannels: e,
                guildChannelsVersion: t,
                jumpToVoiceChannels: this.jumpToVoiceChannels,
                jumpToChannel: this.jumpToChannel
              })
            }), this.renderList(), (0, l.jsx)(J.default, {
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
        padding: el.SCROLL_TO_SPACER
      })
    }, this.jumpToChannel = e => this.scrollToChannel(e, !0, el.SCROLL_TO_UNREAD_BUFFER), this.jumpToChannelWithMentionsAndUnreads = (e, t) => {
      let [n, l] = t;
      return this.scrollToChannel(e, !0, null != n && null != l ? el.SCROLL_TO_UNREAD_BUFFER : el.SCROLL_TO_SPACER)
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
        if ((0, u.isListItemRow)(s) && s.section >= this.props.guildChannels.favoritesSectionNumber) {
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
    }, this.updateChannelListScroll = i.throttle(e => {
      d.default.updateChannelListScroll(this.props.guildId, e, this.getVisibleChannels())
    }, 100), this.getSectionHeight = e => {
      let {
        guild: t,
        guildChannels: n
      } = this.props;
      return (0, F.getChannelListSectionHeight)(e, t, n)
    }, this.getSectionFooterHeight = e => {
      let {
        guildChannels: t,
        voiceStates: n,
        selectedVoiceChannelId: l,
        selectedChannelId: a,
        optInEnabled: s,
        guildChannelsVersion: i
      } = this.props;
      return (0, B.getChannelListSectionFooterHeight)({
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
      } = this.props, r = el.HEIGHT_CHANNEL;
      if (e === j.SECTION_INDEX_COMMUNITY) {
        let e = n.getCommunitySection();
        if (e.isEmpty()) return 0;
        if (e.getRow(t) === en.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR) {
          let t = e.getRows();
          return t.length > 1 ? E.PROGRESS_BAR_CONTAINER_HEIGHT_WITH_MARGIN : E.PROGRESS_BAR_CONTAINER_HEIGHT
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
      if (u.record.type === ea.ChannelTypes.GUILD_CATEGORY) return 40;
      for (let e of u.threadIds) {
        r += el.HEIGHT_CHANNEL;
        let t = l[u.id];
        null != t && t.length > 0 && (r += (s === e ? t.length * el.HEIGHT_USER : el.HEIGHT_USER) + el.HEIGHT_USER_PADDING)
      }
      if (u.record.isGuildVoice()) {
        let e = l[u.id];
        if (null != e && e.length > 0) {
          let t = e.length * el.HEIGHT_USER;
          (u.isCollapsed || d.isCollapsed) && (t = el.HEIGHT_USER), r += t + el.HEIGHT_USER_PADDING
        }
      }
      if (null != u.subtitle) {
        let e = s === u.id && i ? 0 : el.HEIGHT_CHANNEL_SUBTITLE;
        r += e
      }
      if (u.record.isGuildStageVoice()) {
        var c, f;
        let e = null !== (c = l[u.id]) && void 0 !== c ? c : [],
          t = null !== (f = a[u.id]) && void 0 !== f ? f : [];
        if (null != e && e.length > 0) {
          let e = t.length * el.HEIGHT_USER;
          u.isCollapsed || d.isCollapsed ? e = Math.ceil(e / el.COLLAPSED_USERS_PER_ROW) : e += el.HEIGHT_USER, r += e + el.HEIGHT_USER_PADDING
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
      null != n && s.includes(n) && (a = (0, T.getFirstRouteFor)(t)), (0, T.clearRecentChannels)(e.id, s, a)
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
      return (0, l.jsx)(F.default, {
        sectionIndex: t,
        guild: s,
        guildChannels: n,
        guildChannelsVersion: a,
        selectedChannelId: i,
        disableManageChannels: r
      }, (0, F.getKeyForSection)(t, n))
    }, this.renderRow = e => {
      let {
        section: t,
        row: n
      } = e, {
        guild: s,
        selectedChannel: i,
        selectedChannelId: r,
        selectedVoiceChannel: o,
        selectedVoiceChannelId: u,
        guildChannels: d,
        voiceStates: c,
        disableManageChannels: f,
        stageChannelSpeakerVoiceStates: h,
        optInEnabled: C,
        withGuildIcon: p
      } = this.props;
      if (t === j.SECTION_INDEX_COMMUNITY) {
        let e = d.getCommunitySection(),
          t = e.getRow(n);
        if (null == t) return null;
        switch (t) {
          case en.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS:
            return (0, l.jsx)(N.default, {
              guild: s,
              channel: y.default.getDefaultChannel(s.id)
            }, en.ChannelListCommunityRow.GUILD_HUB_HEADER_OPTIONS);
          case en.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR:
            let a = e.getRows();
            return (0, l.jsx)(E.default, {
              guild: s,
              withMargin: a.length > 1
            }, en.ChannelListCommunityRow.GUILD_PREMIUM_PROGRESS_BAR);
          case en.ChannelListCommunityRow.GUILD_HOME:
            return (0, l.jsx)(k.default, {
              guild: s,
              selected: r === es.StaticChannelRoute.GUILD_HOME
            }, en.ChannelListCommunityRow.GUILD_HOME);
          case en.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS:
            return (0, l.jsx)(ee.default, {
              guild: s,
              selected: r === en.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS
            }, en.ChannelListCommunityRow.GUILD_SCHEDULED_EVENTS);
          case en.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS:
            return (0, l.jsx)(W.default, {
              guild: s,
              selected: r === es.StaticChannelRoute.ROLE_SUBSCRIPTIONS
            }, en.ChannelListCommunityRow.GUILD_ROLE_SUBSCRIPTIONS);
          case en.ChannelListCommunityRow.GUILD_SHOP:
            return (0, l.jsx)(Z.default, {
              guild: s,
              selected: r === es.StaticChannelRoute.GUILD_SHOP
            }, en.ChannelListCommunityRow.GUILD_SHOP);
          case en.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS:
            return (0, l.jsx)(Y.default, {
              guild: s,
              selected: r === es.StaticChannelRoute.MEMBER_APPLICATIONS
            }, en.ChannelListCommunityRow.GUILD_MEMBER_APPLICATIONS);
          case en.ChannelListCommunityRow.GUILD_NEW_MEMBER_ACTIONS_PROGRESS_BAR:
            return (0, l.jsx)(K.GuildNewMemberActionsProgressBar, {
              guild: s
            });
          case en.ChannelListCommunityRow.CHANNELS_AND_ROLES:
            return (0, l.jsx)(H.GuildBrowseChannelsRow, {
              guild: s,
              selected: r === es.StaticChannelRoute.CHANNEL_BROWSER || r === es.StaticChannelRoute.CUSTOMIZE_COMMUNITY
            }, en.ChannelListCommunityRow.CHANNELS_AND_ROLES);
          case en.ChannelListCommunityRow.GUILD_DIRECTORY:
            return (0, l.jsx)(V.default, {
              guild: s,
              selectedChannelId: r,
              disableManageChannels: f
            }, en.ChannelListCommunityRow.GUILD_DIRECTORY);
          case en.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY:
            return (0, l.jsx)(g.default, {
              guild: s,
              selected: r === es.StaticChannelRoute.MEMBER_SAFETY
            }, en.ChannelListCommunityRow.GUILD_MOD_DASH_MEMBER_SAFETY);
          default:
            return null
        }
      }
      if (d.isPlaceholderRow(t, n)) return null;
      let m = d.getChannelFromSectionRow(t, n);
      if (null == m) return null;
      let {
        category: I,
        channel: S
      } = m, _ = I instanceof j.ChannelListFavoritesCategory, T = S.record, A = "".concat(t).concat(S.id);
      switch (T.type) {
        case ea.ChannelTypes.GUILD_ANNOUNCEMENT:
        case ea.ChannelTypes.GUILD_TEXT:
        case ea.ChannelTypes.GUILD_FORUM:
        case ea.ChannelTypes.GUILD_MEDIA:
        case ea.ChannelTypes.DM:
        case ea.ChannelTypes.GROUP_DM:
          return (0, l.jsxs)(a.Fragment, {
            children: [(0, l.jsx)(q.default, {
              channel: T,
              guild: s,
              position: S.position,
              selected: r === S.id,
              muted: S.isMuted,
              subtitle: S.subtitle,
              disableManageChannels: f,
              canBeNewChannel: C && t === d.recentsSectionNumber,
              isFavoriteCategory: _,
              withGuildIcon: p
            }), S.threadCount > 0 ? (0, l.jsx)(z.default, {
              withGuildIcon: p,
              channel: T,
              sortedThreadIds: S.threadIds,
              selectedChannel: null != i && (i.id === S.id || i.parent_id === T.id) ? i : null,
              selectedVoiceChannelId: (null == o ? void 0 : o.parent_id) === T.id ? u : null
            }) : null]
          }, A);
        case ea.ChannelTypes.GUILD_STAGE_VOICE:
          var L, v;
          return (0, l.jsx)(X.default, {
            channel: T,
            guild: s,
            position: S.position,
            selected: r === S.id,
            connected: u === S.id,
            collapsed: S.isCollapsed || I.isCollapsed,
            voiceStates: null !== (L = c[S.id]) && void 0 !== L ? L : [],
            speakerVoiceStates: null !== (v = h[S.id]) && void 0 !== v ? v : [],
            disableManageChannels: f,
            isFavoriteCategory: _
          }, A);
        case ea.ChannelTypes.GUILD_VOICE:
          return (0, l.jsx)(et.default, {
            channel: T,
            guild: s,
            position: S.position,
            selected: r === S.id,
            connected: u === S.id,
            collapsed: S.isCollapsed || I.isCollapsed,
            voiceStates: c[S.id],
            subtitle: S.subtitle,
            disableManageChannels: f,
            showTutorial: S.isFirstVoiceChannel,
            isFavoriteCategory: _,
            withGuildIcon: p
          }, A);
        case ea.ChannelTypes.GUILD_STORE:
          return (0, l.jsx)(Q.default, {
            channel: T,
            guild: s,
            position: S.position,
            selected: r === S.id
          }, A);
        case ea.ChannelTypes.GUILD_CATEGORY:
          if (t !== d.voiceChannelsSectionNumber) return null;
          return (0, l.jsx)(w.ReadonlyCategoryChannel, {
            channel: T
          }, "readonly-".concat(T.id));
        case ea.ChannelTypes.PUBLIC_THREAD:
        case ea.ChannelTypes.PRIVATE_THREAD:
          return (0, l.jsx)(q.default, {
            channel: T,
            guild: s,
            position: S.position,
            selected: r === S.id,
            muted: S.isMuted,
            subtitle: S.subtitle,
            disableManageChannels: f,
            canBeNewChannel: !1,
            isFavoriteCategory: !1,
            forceTopLevelThread: !0
          }, A);
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
      return (0, l.jsx)(B.default, {
        guildId: u,
        guildChannels: n,
        guildChannelsVersion: a,
        sectionIndex: t,
        voiceStates: s,
        selectedChannelId: i,
        selectedVoiceChannelId: r,
        optInEnabled: o
      }, (0, B.getKeyForSectionFooter)(t, n, o))
    }, this.getAnchorId = (e, t) => {
      var n, l, a;
      let {
        guildChannels: s
      } = this.props;
      if (e !== j.SECTION_INDEX_COMMUNITY) {
        if (null == t) return e === j.SECTION_INDEX_FAVORITES ? "favorites-header" : e === s.recentsSectionNumber ? "recents-header" : e === s.voiceChannelsSectionNumber ? "voice-channels" : e === j.SECTION_INDEX_UNCATEGORIZED_CHANNELS ? "uncategorized-header" : null === (a = s.getNamedCategoryFromSection(e)) || void 0 === a ? void 0 : a.id;
        if (!s.isPlaceholderRow(e, t)) return null === (l = s.getChannelFromSectionRow(e, t)) || void 0 === l ? void 0 : null === (n = l.channel) || void 0 === n ? void 0 : n.id
      }
    }, this.testShouldSkipTutorial = () => {
      if (!x.default.shouldShow("voice-conversations")) return;
      let {
        guildChannels: e
      } = this.props, t = e.getFirstVoiceChannel();
      if (null == t) {
        c.default.dismiss("voice-conversations");
        return
      }
      let n = this._list;
      if (null == n) return;
      let l = this.getSectionRowsFromChannel(t.id);
      for (let {
          section: e,
          row: t
        }
        of l) !n.isItemVisible(e, t) && c.default.dismiss("voice-conversations")
    }
  }
}
eo.contextType = r.ListContainerContext;
let eu = e => {
  let {
    guildId: t,
    selectedChannelId: n,
    selectedVoiceChannelId: s
  } = e, i = (0, o.useStateFromStores)([h.default], () => h.default.keyboardModeEnabled), {
    AnalyticsLocationProvider: u
  } = (0, p.default)(C.default.GUILD_CHANNEL_LIST), d = (0, o.useStateFromStores)([M.default], () => M.default.getChannel(n)), c = (0, o.useStateFromStores)([M.default], () => M.default.getChannel(s)), m = (0, o.useStateFromStores)([D.default], () => D.default.getGuildId()), E = (0, A.useOptInEnabledForGuild)(t), g = a.useRef(null), I = a.useCallback((e, t) => {
    let n = g.current;
    if (null != n) {
      if (ea.ID_REGEX.test(t) || (0, es.isStaticChannelRoute)(t)) n.scrollToChannel(t, !1, 2 * el.SCROLL_TO_SPACER, () => {
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
  }), []), N = (0, r.default)({
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
  let L = (0, v.default)(t);
  return (0, l.jsx)(u, {
    children: (0, l.jsx)(f.default, {
      section: ea.AnalyticsSections.GUILD_CHANNEL_LIST,
      children: (0, l.jsx)(r.ListNavigatorProvider, {
        navigator: N,
        children: (0, l.jsx)(eo, {
          ...e,
          listNavigator: N,
          ref: g,
          selectedChannel: d,
          selectedVoiceChannel: c,
          stageChannelSpeakerVoiceStates: L,
          selectedGuildId: m,
          optInEnabled: E
        })
      })
    })
  })
};

function ed(e) {
  let t = (0, U.useFavoritesServerChannelList)(),
    {
      isFavoritesPerk: n
    } = (0, m.useFavoritesServerExperiment)("favorites-channel-list");
  return (0, l.jsx)(eu, {
    ...e,
    guildChannels: t,
    guildChannelsVersion: 0,
    withGuildIcon: n
  })
}

function ec(e) {
  let t = (0, P.default)(e.guild),
    n = (0, S.default)(e.guild.id),
    a = (0, _.default)(e.guild.id),
    s = (0, o.useStateFromStoresObject)([G.default], () => G.default.getGuild(e.guildId, t));
  return !e.guild.hasFeature(ea.GuildFeatures.COMMUNITY) && !e.guild.hasFeature(ea.GuildFeatures.HUB) && n && 0 === a.length && I.default.trackExposure({
    guildId: e.guildId,
    location: "Channel List"
  }), (0, l.jsx)(eu, {
    ...e,
    ...s
  })
}