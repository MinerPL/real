"use strict";
n.r(t), n.d(t, {
  SortOrder: function() {
    return l
  },
  LoadState: function() {
    return a
  },
  MAX_SHOWN_MESSAGES: function() {
    return w
  },
  default: function() {
    return K
  }
}), n("424973"), n("222007");
var l, a, s, i, r = n("884691"),
  o = n("44170"),
  u = n("627445"),
  d = n.n(u),
  c = n("917351"),
  f = n.n(c),
  E = n("913144"),
  h = n("819689"),
  _ = n("267363"),
  S = n("206230"),
  T = n("379881"),
  p = n("542827"),
  N = n("615387"),
  I = n("401690"),
  m = n("689275"),
  A = n("755624"),
  g = n("414833"),
  C = n("872173"),
  R = n("374363"),
  M = n("233069"),
  O = n("42203"),
  L = n("923959"),
  v = n("247013"),
  D = n("305961"),
  y = n("377253"),
  x = n("957255"),
  P = n("660478"),
  U = n("677099"),
  b = n("282109"),
  F = n("449008"),
  j = n("299039"),
  G = n("49111"),
  k = n("648564");
(s = l || (l = {}))[s.Favorite = 0] = "Favorite", s[s.PrivateChannel = 1] = "PrivateChannel", s[s.Mentioned = 2] = "Mentioned", s[s.AllMessagesNotifications = 3] = "AllMessagesNotifications", s[s.GuildChannel = 4] = "GuildChannel", s[s.OldChannel = 5] = "OldChannel", s[s.NoNotifications = 6] = "NoNotifications", s[s.ReallyOldChannel = 7] = "ReallyOldChannel", (i = a || (a = {})).Loading = "loading", i.Loaded = "loaded", i.Done = "done";
let w = 25;
class B extends o.EventEmitter {
  loadMore() {
    let {
      loadState: e,
      channels: t
    } = this.state;
    if ("loaded" !== e) return;
    let n = !1,
      l = t.map(e => {
        if (e.isFullyLoaded || e.deleted || n) return e;
        if (e.collapsed) return e.hasLoadedAnything ? e : {
          ...e,
          hasLoadedAnything: !0
        };
        return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (d("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0), e)
      });
    (!n || l.some((e, n) => e !== t[n])) && this.setState({
      channels: l,
      loadState: n ? this.state.loadState : "done"
    })
  }
  populateInitialStateFromStore(e) {
    if ("messages" === e.type) return H(e, !1);
    if ("nsfw" === e.type) return {
      ...e,
      isFullyLoaded: !0,
      hasLoadedAnything: !0
    };
    if ("forum" === e.type) {
      let t = m.default.hasLoaded(e.guildId);
      return {
        ...e,
        isFullyLoaded: t,
        hasLoadedAnything: t
      }
    } else(0, F.assertNever)(e)
  }
  clearScrollToChannelIndex() {
    this.setState({
      scrollToChannelIndex: null
    })
  }
  loadChannelMessages(e) {
    h.default.clearChannel(e.channelId);
    let t = h.default.fetchMessages({
      channelId: e.channelId,
      limit: G.MAX_MESSAGES_PER_CHANNEL,
      jump: {
        messageId: e.oldestReadMessageId,
        flash: !0
      }
    });
    return null != t && !1 !== t && (this.setState({
      loadState: "loading"
    }), t.then(t => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          d("messages" === e.type, "channel cannot change type");
          let n = H(e, !0);
          return (0 === n.messages.length || n.messages.length === e.messages.length) && (n = {
            ...n,
            hasLoadedAnything: !0,
            isFullyLoaded: !0,
            hasError: !t
          }), n
        })
      })
    }, () => {
      this.setState({
        loadState: "loaded",
        channels: this.updateChannel(e.channelId, e => {
          var t;
          d("messages" === e.type, "channel cannot change type");
          let n = H(e, !0);
          return {
            ...n,
            isFullyLoaded: !0,
            hasError: !0,
            hasLoadedAnything: !0,
            newestUnreadMessageId: null === (t = e.messages[e.messages.length - 1]) || void 0 === t ? void 0 : t.id
          }
        })
      })
    }), !0)
  }
  updateChannel(e, t) {
    return this.state.channels.map(n => n.channelId === e ? t(n) : n)
  }
  setState(e) {
    for (let t in e)
      if (e[t] !== this.state[t]) {
        this.state = {
          ...this.state,
          ...e
        }, this.emit("change", this.state);
        return
      }
  }
  constructor(e, t) {
    super(), this.state = e, this.scrollerRef = t, this.maybeLoadMore = () => {
      var e;
      let t = null === (e = this.scrollerRef.current) || void 0 === e ? void 0 : e.getScrollerState();
      if (null == t) return;
      let n = t.scrollHeight - t.scrollTop - t.offsetHeight;
      n < 2e3 && this.loadMore()
    }, this.reloadMessages = () => {
      this.setState({
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? H(e, !1, !0) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      if (E.default.wait(() => _.ack(t, !0, void 0, n, {
          section: G.AnalyticsSections.INBOX
        })), 1 === this.state.channels.length) {
        this.deleteChannel(t);
        return
      }
      this.setState({
        channels: this.updateChannel(t, e => ({
          ...e,
          deleted: !0
        }))
      }), S.default.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.markGuildRead = e => {
      E.default.wait(() => (0, p.default)([e], G.AnalyticsSections.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: f.findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      _.bulkAck(this.state.channels.map(e => ({
        channelId: e.channelId,
        messageId: e.newestUnreadMessageId
      }))), this.setState({
        channels: []
      })
    }, this.toggle = e => {
      let {
        channelId: t,
        guildId: n
      } = e, {
        channels: l,
        collapsedChannels: a,
        loadState: s
      } = this.state, i = f.findIndex(l, e => e.channelId === t), r = l[i], o = !r.collapsed;
      a[t] = o, (0, C.updateUserChannelSettings)(n, t, e => {
        e.collapsedInInbox = o
      }, C.UserSettingsDelay.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: i,
        collapsedChannels: a,
        loadState: "done" !== s || o || r.isFullyLoaded ? s : "loaded",
        channels: this.updateChannel(t, e => ({
          ...e,
          collapsed: o
        }))
      }), r.collapsed ? !r.isFullyLoaded && this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !b.default.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleJoinedThreadsStoreChange = () => {
      let e = this.state.channels.filter(e => !A.default.isMuted(e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleActiveThreadsStoreChange = () => {
      let e = this.state.channels.map(e => {
        if ("forum" !== e.type) return e;
        {
          let t = m.default.hasLoaded(e.guildId);
          return {
            ...e,
            isFullyLoaded: t,
            hasLoadedAnything: t
          }
        }
      });
      this.setState({
        channels: e
      })
    }
  }
}

function H(e, t) {
  var n;
  let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    a = y.default.getMessages(e.channelId),
    s = a.toArray().filter(t => j.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= j.default.compare(t.id, e.newestUnreadMessageId)),
    i = s.length === e.messages.length && s.every((t, n) => e.messages[n] === t);
  if (i && l) return e;
  let r = null != a.getAfter(e.oldestReadMessageId) || (null === (n = s[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
    o = s[s.length - 1],
    u = j.default.compare(null == o ? void 0 : o.id, e.newestUnreadMessageId) >= 0 || s.length >= w;
  return {
    ...e,
    messages: s,
    hasLoadedAnything: e.hasLoadedAnything || r || t,
    hasLoadedFirst: e.hasLoadedFirst || r || t,
    isFullyLoaded: e.isFullyLoaded || r && u || t && !a.hasMoreAfter
  }
}

function V() {
  let e = function() {
      var e, t;
      let n = {},
        l = null !== (t = null === (e = R.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
      for (let e in l)
        for (let t in l[e].channels) {
          let a = O.default.getChannel(t);
          (!(t in n) || (null == a ? void 0 : a.guild_id) === e) && (n[t] = l[e].channels[t].collapsedInInbox)
        }
      return n
    }(),
    t = function(e) {
      let t = [];
      O.default.getSortedPrivateChannels().forEach(n => Y(e, t, null, n.id));
      let n = U.default.getFlattenedGuildIds();
      return n.forEach(n => {
        if (null == n) return;
        let l = L.default.getSelectableChannelIds(n),
          a = I.default.getActiveJoinedUnreadThreadsForGuild(n);
        l.forEach(l => {
          var s;
          Y(e, t, n, l);
          let i = null !== (s = a[l]) && void 0 !== s ? s : {};
          for (let l in i) Y(e, t, n, l)
        })
      }), f.sortBy(t, e => e.sortOrder)
    }(e);
  return {
    collapsedChannels: e,
    loadState: "loaded",
    channels: t,
    scrollToChannelIndex: null
  }
}

function Y(e, t, n, l) {
  if (null == l) return;
  let a = O.default.getChannel(l);
  if (null == a) return;
  let s = M.THREAD_CHANNEL_TYPES.has(a.type);
  if (!s && b.default.isGuildOrCategoryOrChannelMuted(n, a.id)) return;
  if (a.isPrivate()) {
    if (0 === P.default.getMentionCount(l)) return
  } else if (!(0, N.getHasImportantUnread)(a) && 0 === P.default.getMentionCount(l)) return;
  if (!a.isPrivate() && !x.default.can(G.Permissions.READ_MESSAGE_HISTORY, a)) return;
  let i = P.default.ackMessageId(l);
  if (null == i) {
    let e = D.default.getGuild(a.guild_id);
    if (null == e || null == e.joinedAt) return;
    i = j.default.fromTimestamp(e.joinedAt.getTime())
  }
  let r = P.default.getOldestUnreadMessageId(l),
    o = P.default.lastMessageId(l),
    u = P.default.getMentionCount(l),
    d = u > 0 || a.isPrivate();
  if (null == o || j.default.compare(i, o) >= 0) return;
  let c = {
    guildId: n,
    channelId: l,
    oldestReadMessageId: i,
    oldestUnreadMessageId: r,
    newestUnreadMessageId: o,
    collapsed: !0 === e[l],
    hasLoadedAnything: !1,
    hasLoadedFirst: !1,
    isFullyLoaded: !1,
    hasError: !1,
    hasMentionsOrUnreads: d,
    mentionCount: u,
    sortOrder: function(e, t, n) {
      let l = O.default.getChannel(t);
      if (T.default.isFavorite(t)) return 0;
      if (l.isPrivate()) return 1;
      if (P.default.getMentionCount(t) > 0) return 2;
      if (null != n) {
        let e = j.default.extractTimestamp(n);
        if (Date.now() - e > 864e6) return 7;
        if (Date.now() - e > 1728e5) return 5
      }
      if (l.isThread()) {
        let e = (0, g.computeThreadNotificationSetting)(l);
        return e === k.ThreadMemberFlags.ALL_MESSAGES ? 3 : e === k.ThreadMemberFlags.NO_MESSAGES ? 6 : 4
      } {
        let n = b.default.getChannelMessageNotifications(e, t),
          l = n === G.UserNotificationSettings.NULL ? b.default.getMessageNotifications(e) : n;
        return l === G.UserNotificationSettings.ALL_MESSAGES ? 3 : l === G.UserNotificationSettings.NO_MESSAGES ? 6 : 4
      }
    }(n, l, o)
  };
  a.isNSFW() && !v.default.didAgree(a.guild_id) ? t.push({
    ...c,
    type: "nsfw"
  }) : a.isForumLikeChannel() ? t.push({
    ...c,
    type: "forum"
  }) : t.push({
    ...c,
    type: "messages",
    messages: []
  })
}

function K(e) {
  let [t, n] = r.useState(() => new B(V(), e)), [l, a] = r.useState(!1), s = r.useRef(Date.now()), [i, o] = r.useState(() => V());
  return r.useEffect(() => {
    let e = e => o(e);
    return t.on("change", e), o(t.state), () => {
      t.off("change", e)
    }
  }, [t]), r.useEffect(() => {
    if (null == i || i.channels.length > 0 || l) return;
    let t = Date.now(),
      r = V();
    0 === r.channels.length || t - s.current < 1e4 ? a(!0) : (s.current = Date.now(), n(new B(r, e)))
  }, [i, l, e]), r.useLayoutEffect(t.maybeLoadMore, [null == i ? void 0 : i.channels, null == i ? void 0 : i.loadState]), r.useEffect(() => (y.default.addChangeListener(t.reloadMessages), () => y.default.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), r.useEffect(() => (b.default.addChangeListener(t.handleUserGuildSettingsStoreChange), () => b.default.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), r.useEffect(() => (A.default.addChangeListener(t.handleJoinedThreadsStoreChange), () => A.default.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), r.useEffect(() => (m.default.addChangeListener(t.handleActiveThreadsStoreChange), () => m.default.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [i, t]
}