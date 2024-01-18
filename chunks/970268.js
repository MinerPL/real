"use strict";
n.r(t), n.d(t, {
  SortOrder: function() {
    return a
  },
  LoadState: function() {
    return l
  },
  MAX_SHOWN_MESSAGES: function() {
    return B
  },
  default: function() {
    return Q
  }
}), n("424973"), n("222007");
var a, l, s, i, r = n("884691"),
  o = n("44170"),
  u = n("627445"),
  d = n.n(u),
  c = n("917351"),
  f = n.n(c),
  h = n("913144"),
  E = n("819689"),
  m = n("267363"),
  p = n("206230"),
  S = n("379881"),
  g = n("542827"),
  N = n("615387"),
  _ = n("401690"),
  T = n("689275"),
  I = n("755624"),
  C = n("414833"),
  A = n("872173"),
  M = n("374363"),
  v = n("233069"),
  x = n("42203"),
  R = n("923959"),
  L = n("247013"),
  O = n("305961"),
  b = n("377253"),
  y = n("957255"),
  j = n("660478"),
  D = n("677099"),
  F = n("282109"),
  U = n("718517"),
  k = n("449008"),
  P = n("299039"),
  w = n("49111"),
  G = n("648564");
(s = a || (a = {}))[s.Favorite = 0] = "Favorite", s[s.PrivateChannel = 1] = "PrivateChannel", s[s.Mentioned = 2] = "Mentioned", s[s.AllMessagesNotifications = 3] = "AllMessagesNotifications", s[s.GuildChannel = 4] = "GuildChannel", s[s.OldChannel = 5] = "OldChannel", s[s.NoNotifications = 6] = "NoNotifications", s[s.ReallyOldChannel = 7] = "ReallyOldChannel", (i = l || (l = {})).Loading = "loading", i.Loaded = "loaded", i.Done = "done";
let B = 25;
class H extends o.EventEmitter {
  loadMore() {
    let {
      loadState: e,
      channels: t
    } = this.state;
    if ("loaded" !== e) return;
    let n = !1,
      a = t.map(e => {
        if (e.isFullyLoaded || e.deleted || n) return e;
        if (e.collapsed) return e.hasLoadedAnything ? e : {
          ...e,
          hasLoadedAnything: !0
        };
        return (e = this.populateInitialStateFromStore(e)).isFullyLoaded ? e : (d("nsfw" !== e.type, "this channel should already be loaded"), "messages" === e.type && this.loadChannelMessages(e) && (n = !0), e)
      });
    (!n || a.some((e, n) => e !== t[n])) && this.setState({
      channels: a,
      loadState: n ? this.state.loadState : "done"
    })
  }
  populateInitialStateFromStore(e) {
    if ("messages" === e.type) return V(e, !1);
    if ("nsfw" === e.type) return {
      ...e,
      isFullyLoaded: !0,
      hasLoadedAnything: !0
    };
    if ("forum" === e.type) {
      let t = T.default.hasLoaded(e.guildId);
      return {
        ...e,
        isFullyLoaded: t,
        hasLoadedAnything: t
      }
    } else(0, k.assertNever)(e)
  }
  clearScrollToChannelIndex() {
    this.setState({
      scrollToChannelIndex: null
    })
  }
  loadChannelMessages(e) {
    E.default.clearChannel(e.channelId);
    let t = E.default.fetchMessages({
      channelId: e.channelId,
      limit: w.MAX_MESSAGES_PER_CHANNEL,
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
          let n = V(e, !0);
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
          let n = V(e, !0);
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
        channels: this.state.channels.map(e => "messages" === e.type && e.hasLoadedAnything ? V(e, !1, !0) : e)
      })
    }, this.getNumUnreadChannels = () => this.state.channels.length, this.markChannelRead = e => {
      let {
        channelId: t,
        newestUnreadMessageId: n
      } = e;
      if (h.default.wait(() => m.ack(t, !0, void 0, n, {
          section: w.AnalyticsSections.INBOX
        })), 1 === this.state.channels.length) {
        this.deleteChannel(t);
        return
      }
      this.setState({
        channels: this.updateChannel(t, e => ({
          ...e,
          deleted: !0
        }))
      }), p.default.useReducedMotion && this.deleteChannel(t), this.maybeLoadMore()
    }, this.markGuildRead = e => {
      h.default.wait(() => (0, g.default)([e], w.AnalyticsSections.INBOX)), this.setState({
        channels: this.state.channels.filter(t => t.guildId !== e)
      }), this.maybeLoadMore()
    }, this.deleteChannel = e => {
      this.setState({
        scrollToChannelIndex: f.findIndex(this.state.channels, t => t.channelId === e),
        channels: this.state.channels.filter(t => t.channelId !== e)
      }), this.maybeLoadMore()
    }, this.markAllRead = () => {
      m.bulkAck(this.state.channels.map(e => ({
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
        channels: a,
        collapsedChannels: l,
        loadState: s
      } = this.state, i = f.findIndex(a, e => e.channelId === t), r = a[i], o = !r.collapsed;
      l[t] = o, (0, A.updateUserChannelSettings)(n, t, e => {
        e.collapsedInInbox = o
      }, A.UserSettingsDelay.FREQUENT_USER_ACTION), this.setState({
        scrollToChannelIndex: i,
        collapsedChannels: l,
        loadState: "done" !== s || o || r.isFullyLoaded ? s : "loaded",
        channels: this.updateChannel(t, e => ({
          ...e,
          collapsed: o
        }))
      }), r.collapsed ? !r.isFullyLoaded && this.loadMore() : this.maybeLoadMore()
    }, this.handleUserGuildSettingsStoreChange = () => {
      let e = this.state.channels.filter(e => !F.default.isGuildOrCategoryOrChannelMuted(e.guildId, e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleJoinedThreadsStoreChange = () => {
      let e = this.state.channels.filter(e => !I.default.isMuted(e.channelId));
      e.length !== this.state.channels.length && this.setState({
        channels: e
      })
    }, this.handleActiveThreadsStoreChange = () => {
      let e = this.state.channels.map(e => {
        if ("forum" !== e.type) return e;
        {
          let t = T.default.hasLoaded(e.guildId);
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

function V(e, t) {
  var n;
  let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
    l = b.default.getMessages(e.channelId),
    s = l.toArray().filter(t => P.default.compare(t.id, e.oldestReadMessageId) > 0 && 0 >= P.default.compare(t.id, e.newestUnreadMessageId)),
    i = s.length === e.messages.length && s.every((t, n) => e.messages[n] === t);
  if (i && a) return e;
  let r = null != l.getAfter(e.oldestReadMessageId) || (null === (n = s[0]) || void 0 === n ? void 0 : n.id) === e.oldestUnreadMessageId,
    o = s[s.length - 1],
    u = P.default.compare(null == o ? void 0 : o.id, e.newestUnreadMessageId) >= 0 || s.length >= B;
  return {
    ...e,
    messages: s,
    hasLoadedAnything: e.hasLoadedAnything || r || t,
    hasLoadedFirst: e.hasLoadedFirst || r || t,
    isFullyLoaded: e.isFullyLoaded || r && u || t && !l.hasMoreAfter
  }
}

function Y() {
  let e = function() {
      var e, t;
      let n = {},
        a = null !== (t = null === (e = M.default.settings.guilds) || void 0 === e ? void 0 : e.guilds) && void 0 !== t ? t : {};
      for (let e in a)
        for (let t in a[e].channels) {
          let l = x.default.getChannel(t);
          (!(t in n) || (null == l ? void 0 : l.guild_id) === e) && (n[t] = a[e].channels[t].collapsedInInbox)
        }
      return n
    }(),
    t = function(e) {
      let t = [];
      x.default.getSortedPrivateChannels().forEach(n => z(e, t, null, n.id));
      let n = D.default.getFlattenedGuildIds();
      return n.forEach(n => {
        if (null == n) return;
        let a = R.default.getSelectableChannelIds(n),
          l = _.default.getActiveJoinedUnreadThreadsForGuild(n);
        a.forEach(a => {
          var s;
          z(e, t, n, a);
          let i = null !== (s = l[a]) && void 0 !== s ? s : {};
          for (let a in i) z(e, t, n, a)
        })
      }), f.sortBy(t, e => e.sortOrder)
    }(e),
    n = f.uniq(t.map(e => e.guildId)).filter(k.isNotNullish);
  return h.default.dispatch({
    type: "INBOX_OPEN",
    guildIds: n
  }), {
    collapsedChannels: e,
    loadState: "loaded",
    channels: t,
    scrollToChannelIndex: null
  }
}

function z(e, t, n, a) {
  if (null == a) return;
  let l = x.default.getChannel(a);
  if (null == l) return;
  let s = v.THREAD_CHANNEL_TYPES.has(l.type);
  if (!s && F.default.isGuildOrCategoryOrChannelMuted(n, l.id)) return;
  if (l.isPrivate()) {
    if (0 === j.default.getMentionCount(a)) return
  } else if (!(0, N.getHasImportantUnread)(l) && 0 === j.default.getMentionCount(a)) return;
  if (!l.isPrivate() && !y.default.can(w.Permissions.READ_MESSAGE_HISTORY, l)) return;
  let i = j.default.ackMessageId(a);
  if (null == i) {
    let e = O.default.getGuild(l.guild_id);
    if (null == e || null == e.joinedAt) return;
    i = P.default.fromTimestamp(e.joinedAt.getTime())
  }
  let r = j.default.getOldestUnreadMessageId(a),
    o = j.default.lastMessageId(a),
    u = j.default.getMentionCount(a),
    d = u > 0 || l.isPrivate();
  if (null == o || P.default.compare(i, o) >= 0) return;
  let c = {
    guildId: n,
    channelId: a,
    oldestReadMessageId: i,
    oldestUnreadMessageId: r,
    newestUnreadMessageId: o,
    collapsed: !0 === e[a],
    hasLoadedAnything: !1,
    hasLoadedFirst: !1,
    isFullyLoaded: !1,
    hasError: !1,
    hasMentionsOrUnreads: d,
    mentionCount: u,
    sortOrder: function(e, t, n) {
      let a = x.default.getChannel(t);
      if (S.default.isFavorite(t)) return 0;
      if (a.isPrivate()) return 1;
      if (j.default.getMentionCount(t) > 0) return 2;
      if (null != n) {
        let e = P.default.extractTimestamp(n);
        if (Date.now() - e > W) return 7;
        if (Date.now() - e > K) return 5
      }
      if (a.isThread()) {
        let e = (0, C.computeThreadNotificationSetting)(a);
        return e === G.ThreadMemberFlags.ALL_MESSAGES ? 3 : e === G.ThreadMemberFlags.NO_MESSAGES ? 6 : 4
      } {
        let n = F.default.getChannelMessageNotifications(e, t),
          a = n === w.UserNotificationSettings.NULL ? F.default.getMessageNotifications(e) : n;
        return a === w.UserNotificationSettings.ALL_MESSAGES ? 3 : a === w.UserNotificationSettings.NO_MESSAGES ? 6 : 4
      }
    }(n, a, o)
  };
  l.isNSFW() && !L.default.didAgree(l.guild_id) ? t.push({
    ...c,
    type: "nsfw"
  }) : l.isForumLikeChannel() ? t.push({
    ...c,
    type: "forum"
  }) : t.push({
    ...c,
    type: "messages",
    messages: []
  })
}
let K = 2 * U.default.Millis.DAY,
  W = 10 * U.default.Millis.DAY;

function Q(e) {
  let [t, n] = r.useState(() => new H(Y(), e)), [a, l] = r.useState(!1), s = r.useRef(Date.now()), [i, o] = r.useState(() => Y());
  return r.useEffect(() => {
    let e = e => o(e);
    return t.on("change", e), o(t.state), () => {
      t.off("change", e)
    }
  }, [t]), r.useEffect(() => {
    if (null == i || i.channels.length > 0 || a) return;
    let t = Date.now(),
      r = Y();
    0 === r.channels.length || t - s.current < 10 * U.default.Millis.SECOND ? l(!0) : (s.current = Date.now(), n(new H(r, e)))
  }, [i, a, e]), r.useLayoutEffect(t.maybeLoadMore, [null == i ? void 0 : i.channels, null == i ? void 0 : i.loadState]), r.useEffect(() => (b.default.addChangeListener(t.reloadMessages), () => b.default.removeChangeListener(t.reloadMessages)), [t.reloadMessages]), r.useEffect(() => (F.default.addChangeListener(t.handleUserGuildSettingsStoreChange), () => F.default.removeChangeListener(t.handleUserGuildSettingsStoreChange)), [t]), r.useEffect(() => (I.default.addChangeListener(t.handleJoinedThreadsStoreChange), () => I.default.removeChangeListener(t.handleJoinedThreadsStoreChange)), [t]), r.useEffect(() => (T.default.addChangeListener(t.handleActiveThreadsStoreChange), () => T.default.removeChangeListener(t.handleActiveThreadsStoreChange)), [t]), [i, t]
}