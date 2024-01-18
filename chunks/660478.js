"use strict";
let s;
n.r(t), n.d(t, {
  shouldBadgeMessage: function() {
    return eS
  },
  default: function() {
    return eQ
  }
}), n("222007"), n("70102"), n("424973"), n("702976");
var i, r, a = n("627445"),
  o = n.n(a),
  d = n("866227"),
  u = n.n(d),
  l = n("446674"),
  f = n("872717"),
  _ = n("862337"),
  c = n("627929"),
  g = n("913144"),
  m = n("191225"),
  h = n("191145"),
  v = n("203288"),
  E = n("605250"),
  p = n("398604"),
  y = n("21121"),
  C = n("288518"),
  T = n("415435"),
  S = n("486503"),
  I = n("406297"),
  A = n("136511"),
  D = n("342176"),
  N = n("512395"),
  O = n("614305"),
  b = n("689275"),
  P = n("755624"),
  k = n("526311"),
  R = n("374363"),
  V = n("233069"),
  M = n("845078"),
  w = n("718517"),
  L = n("568734"),
  U = n("449008"),
  G = n("35468"),
  F = n("299039"),
  x = n("271938"),
  B = n("982108"),
  H = n("42203"),
  Y = n("162805"),
  j = n("760190"),
  K = n("341542"),
  W = n("305961"),
  z = n("603699"),
  q = n("377253"),
  X = n("957255"),
  Q = n("27618"),
  Z = n("18494"),
  J = n("282109"),
  $ = n("697218"),
  ee = n("471671"),
  et = n("49111"),
  en = n("272505"),
  es = n("724210"),
  ei = n("745049"),
  er = n("133335");
let ea = new E.default("ReadStateStore");
__OVERLAY__ && (s = n("901165").default);
let eo = et.BasicPermissions.VIEW_CHANNEL | et.BasicPermissions.READ_MESSAGE_HISTORY,
  ed = null,
  eu = null,
  el = null,
  ef = !1,
  e_ = [],
  ec = !1,
  eg = null,
  em = {},
  eh = 30 * w.default.Millis.DAY;

function ev() {
  return F.default.fromTimestamp(Date.now() - eh)
}
let eE = 0,
  ep = 0,
  ey = null;

function eC() {
  eE = Date.now() - 7 * w.default.Millis.DAY, ep = Date.now() - 3 * w.default.Millis.DAY, clearTimeout(ey), ey = setTimeout(() => {
    g.default.dispatch({
      type: "DECAY_READ_STATES"
    })
  }, 1 * w.default.Millis.HOUR)
}

function eT(e) {
  if (null == e) return 0;
  let t = Date.parse(e);
  return isNaN(t) ? 0 : t
}

function eS(e, t) {
  let n = H.default.getChannel(e.channel_id);
  return !(null == n || Q.default.isBlocked(e.author.id)) && (!!((0, I.default)({
    message: e,
    userId: t.id,
    suppressEveryone: J.default.isSuppressEveryoneEnabled(n.guild_id),
    suppressRoles: J.default.isSuppressRolesEnabled(n.guild_id)
  }) || eI(n)) || !1)
}

function eI(e) {
  return null != e && e.isPrivate() && !J.default.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id)
}
async function eA(e) {
  if (0 === e_.length) {
    ec = !1, null == e || e();
    return
  }
  ec = !0;
  let t = e_.splice(0, 100);
  await eD(() => f.default.post({
    url: et.Endpoints.BULK_ACK,
    body: {
      read_states: t
    },
    oldFormErrors: !0
  })), await (0, _.timeoutPromise)(1e3), eA(e)
}
async function eD(e) {
  let t = x.default.getId();
  for (let n = 0; n < 3; n++) try {
    return await e()
  } catch (e) {
    if (ea.error("", e), n + 1 < 3 && (await (0, _.timeoutPromise)((n + 1) * 2e3), await G.default.awaitOnline(), t !== x.default.getId())) return Promise.reject(Error("User changed."))
  }
}

function eN(e) {
  if (e.type !== er.ReadStateTypes.CHANNEL) return !1;
  let t = H.default.getChannel(e.channelId),
    n = null != t && t.isForumPost();
  if (null != m.default.getConnectedActivityChannelId() && m.default.getActivityPanelMode() === en.ActivityPanelModes.PANEL && m.default.getFocusedLayout() === en.FocusedActivityLayouts.NO_CHAT || z.default.isIdle() || !e.canTrackUnreads()) return !1;
  if ((null == t ? void 0 : t.isForumLikeChannel()) !== !0) {
    let t = em[e.channelId],
      n = null != t && ee.default.isFocused(t),
      i = null != s && s.isInstanceFocused() && s.isPinned(et.OverlayWidgets.TEXT);
    if (!n && !i) return !1
  }
  if (n && !e._persisted) return !0;
  let i = e.hasUnreadOrMentions();
  if (!i || (null == t ? void 0 : t.isForumLikeChannel()) === !0) return !1;
  let r = n && !e._isJoinedThread;
  if (!r && !Y.default.isAtBottom(e.channelId)) return !1;
  let a = h.default.getLayout(e.channelId),
    o = h.default.getChatOpen(e.channelId);
  if (!o && (a === et.ChannelLayouts.NO_CHAT || a === et.ChannelLayouts.FULL_SCREEN) || null == em[e.channelId]) return !1;
  let d = q.default.getMessages(e.channelId);
  return !(null == d || !d.ready || d.loadingMore || (0, O.default)() && !o) && !0
}(r = i || (i = {}))[r.IS_GUILD_CHANNEL = 1] = "IS_GUILD_CHANNEL", r[r.IS_THREAD = 2] = "IS_THREAD";
class eO {
  static forEach(e) {
    for (let n of Object.keys(eO._readStates)) {
      var t;
      let s = null !== (t = eO._readStates[parseInt(n)]) && void 0 !== t ? t : {};
      for (let t of Object.keys(s))
        if (!1 === e(s[t])) break
    }
  }
  static get(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL,
      s = null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == s && (s = new eO(e, n), null == eO._readStates[n] && (eO._readStates[n] = {}), eO._readStates[n][e] = s), s
  }
  static getGuildSentinels(e) {
    return null == this._guildReadStateSentinels[e] && (this._guildReadStateSentinels[e] = {
      unreadsSentinel: 0
    }), this._guildReadStateSentinels[e]
  }
  static resetGuildSentinels() {
    this._guildReadStateSentinels = {}
  }
  static getIfExists(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e]
  }
  static getMentionChannelIds() {
    let e = [];
    for (let t of eO._mentionChannels) {
      let n = eO.getIfExists(t);
      null != n && n.canHaveMentions() ? e.push(t) : eO._mentionChannels.delete(t)
    }
    return e
  }
  static getValue(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL,
      s = arguments.length > 2 ? arguments[2] : void 0,
      i = arguments.length > 3 ? arguments[3] : void 0,
      r = null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e];
    return null == r ? i : s(r)
  }
  static clear(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return (null === (t = eO._readStates[n]) || void 0 === t ? void 0 : t[e]) != null && (delete eO._readStates[n][e], eO._mentionChannels.delete(e), !0)
  }
  static clearAll() {
    eO._readStates = {}, eO._mentionChannels.clear()
  }
  serialize(e) {
    let {
      channelId: t,
      type: n,
      _guildId: s,
      _isThread: i,
      _isActiveThread: r,
      _isJoinedThread: a,
      _persisted: o,
      loadedMessages: d,
      _lastMessageId: u,
      _lastMessageTimestamp: l,
      _ackMessageId: f,
      _ackMessageTimestamp: _,
      ackPinTimestamp: c,
      isManualAck: g,
      lastPinTimestamp: m,
      _oldestUnreadMessageId: h,
      oldestUnreadMessageIdStale: v,
      estimated: E,
      _mentionCount: p,
      flags: y,
      lastViewed: C
    } = this;
    if (e) return {
      channelId: t,
      type: n,
      _guildId: s,
      _isThread: i,
      _isActiveThread: r,
      _isJoinedThread: a,
      _persisted: o,
      loadedMessages: d,
      _lastMessageId: u,
      _lastMessageTimestamp: l,
      _ackMessageId: f,
      _ackMessageTimestamp: _,
      ackPinTimestamp: c,
      isManualAck: g,
      lastPinTimestamp: m,
      _oldestUnreadMessageId: h,
      oldestUnreadMessageIdStale: v,
      estimated: E,
      _mentionCount: p,
      flags: y,
      lastViewed: C
    };
    let T = {
      channelId: t,
      type: n,
      _guildId: s,
      _persisted: o,
      _lastMessageId: u,
      _lastMessageTimestamp: l,
      _ackMessageId: f,
      _ackMessageTimestamp: _,
      ackPinTimestamp: c,
      lastPinTimestamp: m,
      _mentionCount: p,
      flags: y
    };
    return null != C && C > 0 && (T.lastViewed = C), i && (T._isThread = i, T._isActiveThread = r, T._isJoinedThread = a), T
  }
  deserializeForOverlay(e) {
    let {
      channelId: t,
      type: n,
      _guildId: s,
      _isThread: i,
      _isActiveJoinedThread: r,
      _isActiveThread: a,
      _isJoinedThread: o,
      _persisted: d,
      loadedMessages: u,
      _lastMessageId: l,
      _lastMessageTimestamp: f,
      _ackMessageId: _,
      _ackMessageTimestamp: c,
      ackPinTimestamp: g,
      isManualAck: m,
      lastPinTimestamp: h,
      _oldestUnreadMessageId: v,
      oldestUnreadMessageIdStale: E,
      estimated: p,
      _unreadCount: y,
      _mentionCount: C,
      flags: T,
      lastViewed: S
    } = e;
    this.channelId = t, this.type = null != n ? n : er.ReadStateTypes.CHANNEL, this._guildId = s, this._isThread = null != i && i, null != r ? (this._isActiveThread = r, this._isJoinedThread = r) : (this._isActiveThread = null != a && a, this._isJoinedThread = null != o && o), this._persisted = !1 !== d, this.loadedMessages = null != u && u, this._lastMessageId = l, this._lastMessageTimestamp = f, this._ackMessageId = _, this._ackMessageTimestamp = c, this.ackPinTimestamp = g, this.isManualAck = null != m && m, this.lastPinTimestamp = h, this._oldestUnreadMessageId = v, this.oldestUnreadMessageIdStale = null != E && E, this.estimated = null != p && p, this._unreadCount = null != y ? y : 0, this._mentionCount = C, this.flags = T, this.lastViewed = S, eO._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eO._mentionChannels.add(this.channelId)
  }
  incrementGuildUnreadsSentinel() {
    null != this._guildId && eO.getGuildSentinels(this._guildId).unreadsSentinel++
  }
  get oldestUnreadMessageId() {
    return this._oldestUnreadMessageId
  }
  set oldestUnreadMessageId(e) {
    this._oldestUnreadMessageId = e, this.oldestUnreadMessageIdStale = !1
  }
  get lastMessageId() {
    return this._lastMessageId
  }
  set lastMessageId(e) {
    this._lastMessageId = e, this._lastMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
  }
  get lastMessageTimestamp() {
    return this._lastMessageTimestamp
  }
  get ackMessageId() {
    return this._ackMessageId
  }
  set ackMessageId(e) {
    this._ackMessageId = e, this._ackMessageTimestamp = null != e ? F.default.extractTimestamp(e) : 0
  }
  get unreadCount() {
    var e;
    return null !== (e = this._unreadCount) && void 0 !== e ? e : 0
  }
  set unreadCount(e) {
    (void 0 === this._unreadCount || 0 === this._unreadCount || 0 === e) && this.incrementGuildUnreadsSentinel(), this._unreadCount = e
  }
  get mentionCount() {
    return this._mentionCount
  }
  set mentionCount(e) {
    (0 === this._mentionCount || 0 === e) && this._mentionCount !== e && this.incrementGuildUnreadsSentinel(), this._mentionCount = e, eO._mentionChannels.delete(this.channelId), this._mentionCount > 0 && this.canHaveMentions() && eO._mentionChannels.add(this.channelId)
  }
  guessAckMessageId() {
    let e = q.default.getMessages(this.channelId);
    if (null != this.ackMessageId || !this.isPrivate() || e.hasMoreAfter) return this.ackMessageId;
    if (!this.hasMentions()) return this.lastMessageId;
    let t = null,
      n = this.mentionCount,
      s = $.default.getCurrentUser();
    return e.forEach(e => {
      if (n > 0 && e.author.id !== (null == s ? void 0 : s.id)) --n;
      else if (0 === n) return t = e.id, !1
    }, this, !0), t
  }
  get guildId() {
    if (null != this._guildId) return this._guildId;
    let e = H.default.getChannel(this.channelId);
    return this._guildId = null != e ? e.getGuildId() : null
  }
  isPrivate() {
    if (this.type !== er.ReadStateTypes.CHANNEL) return !1;
    let e = H.default.getChannel(this.channelId);
    return null != e && e.isPrivate()
  }
  rebuildChannelState(e) {
    var t, n;
    let s = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      i = arguments.length > 2 ? arguments[2] : void 0;
    if (this.ackMessageId = null !== (t = null != e ? e : this._ackMessageId) && void 0 !== t ? t : this.guessAckMessageId(), this.isManualAck = null != e, this.oldestUnreadMessageId = null, this.estimated = !1, this.unreadCount = 0, s && (this.mentionCount = 0), this.hasUnread()) {
      let e = $.default.getCurrentUser(),
        t = this.getAckTimestamp(),
        i = !1,
        r = !1,
        a = null,
        o = q.default.getMessages(this.channelId);
      o.forAll(n => {
        if (i) {
          var o;
          this.oldestUnreadMessageId = null !== (o = this._oldestUnreadMessageId) && void 0 !== o ? o : n.id
        } else i = n.id === this._ackMessageId;
        F.default.extractTimestamp(n.id) > t ? (this.unreadCount++, s && eS(n, e) && this.mentionCount++, a = null != a ? a : n.id) : r = !0
      }), this.estimated = !o.hasPresent() || !(i || r) && o.length === this.unreadCount, this.oldestUnreadMessageId = null !== (n = this._oldestUnreadMessageId) && void 0 !== n ? n : a
    }
    null != i && (this.mentionCount = i)
  }
  handleGuildEventRemoval(e, t) {
    var n;
    if (F.default.compare(this.ackMessageId, t) >= 0) return;
    let s = p.default.getGuildScheduledEventsForGuild(e),
      i = this.getAckTimestamp();
    if (isNaN(i)) return;
    let r = null !== (n = this._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(i),
      a = null,
      o = 0;
    s.forEach(e => {
      (0, p.isEventUpcoming)(e) && (F.default.compare(e.id, a) > 0 && (a = e.id), F.default.compare(e.id, r) > 0 && o++)
    }), this.lastMessageId = a, this.mentionCount = o
  }
  canTrackUnreads() {
    if (this.type !== er.ReadStateTypes.CHANNEL) return !0;
    if (this._isThread && !this._isActiveThread || this._isResourceChannel) return !1;
    let e = H.default.getBasicChannel(this.channelId);
    return null != e && ("basicPermissions" in e ? M.default.has(e.basicPermissions, et.BasicPermissions.VIEW_CHANNEL) : !v.default.isChannelGated(this.guildId, this.channelId) || X.default.can(et.Permissions.VIEW_CHANNEL, e))
  }
  canBeUnread() {
    return !(this._isThread && !this._isJoinedThread || (0, T.isMessageRequestOrSpamRequest)(this.channelId, [C.default, S.default]) || !this._isThread && (0, N.isOptInEnabledForGuild)(this._guildId) && (this._lastMessageTimestamp < eE || !J.default.isChannelOrParentOptedIn(this._guildId, this.channelId) && !this.hasRecentlyVisitedAndRead() && !this.hasMentions())) && this.canTrackUnreads()
  }
  canHaveMentions() {
    return !(0 === this.mentionCount || this._isThread && !this._isJoinedThread || (0, T.isMessageRequestOrSpamRequest)(this.channelId, [C.default, S.default]) || (0, N.isOptInEnabledForGuild)(this._guildId) && this._lastMessageTimestamp < eE) && this.canTrackUnreads()
  }
  getGuildChannelUnreadState(e, t, n, s, i) {
    if (t && (this._lastMessageTimestamp < eE || !J.default.isChannelRecordOrParentOptedIn(e) && !this.hasRecentlyVisitedAndRead() && this.mentionCount <= 0)) return {
      mentionCount: 0,
      unread: !1
    };
    if ("basicPermissions" in e) {
      if (!M.default.has(e.basicPermissions, et.BasicPermissions.VIEW_CHANNEL)) return {
        mentionCount: 0,
        unread: !1
      }
    } else if (v.default.isChannelGated(this.guildId, this.channelId) && !X.default.can(et.Permissions.VIEW_CHANNEL, e)) return {
      mentionCount: 0,
      unread: !1
    };
    return s || i ? {
      mentionCount: this.mentionCount,
      unread: !1
    } : {
      mentionCount: this.mentionCount,
      unread: this.getAckTimestamp() < this._lastMessageTimestamp
    }
  }
  hasUnread() {
    return this.getAckTimestamp() < this._lastMessageTimestamp
  }
  hasRecentlyVisitedAndRead() {
    return this._lastMessageTimestamp > 0 && null != this._ackMessageId && this.getAckTimestamp() > ep && R.default.getGuildRecentsDismissedAt(this._guildId) < this.getAckTimestamp()
  }
  isForumPostUnread() {
    return !!this._isActiveThread && this.hasUnread()
  }
  hasMentions() {
    return this.getMentionCount() > 0
  }
  getMentionCount() {
    return this.mentionCount
  }
  hasUnreadOrMentions() {
    return this.hasMentions() || this.hasUnread()
  }
  ackPins() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
    if (this.type !== er.ReadStateTypes.CHANNEL || !this.canTrackUnreads()) return !1;
    if (null == e) {
      if (this.lastPinTimestamp === this.ackPinTimestamp) return !1;
      this._persisted = !0, eD(() => f.default.post({
        url: et.Endpoints.PINS_ACK(this.channelId),
        oldFormErrors: !0
      }))
    }
    let t = eT(e);
    return this.ackPinTimestamp = 0 !== t ? t : this.lastPinTimestamp, !0
  }
  ack(e) {
    let {
      messageId: t,
      local: n = !1,
      immediate: s = !1,
      force: i = !1,
      isExplicitUserAction: r = !1,
      location: a = {
        section: et.AnalyticsSections.CHANNEL
      },
      trackAnalytics: o = !0
    } = e;
    if (!this._shouldAck(i, n, r) || !i && !this.canTrackUnreads()) return !1;
    let d = this.hasMentions();
    return this.estimated = !1, this.snapshot = this.takeSnapshot(), this.unreadCount = 0, this.mentionCount = 0, (null != t || null != (t = this.lastMessageId)) && (this.ackMessageId = t, this.isManualAck = !1, this._persisted = !0, ef && (this.ackedWhileCached = !0), function(e) {
      if (null == e) return;
      let t = eO.get(e);
      if (t.type !== er.ReadStateTypes.CHANNEL) return;
      let n = H.default.getChannel(t.channelId);
      if (null == n || !n.isForumPost() || null == n.parent_id) return;
      let s = n.parent_id,
        i = eO.get(s);
      b.default.hasLoaded(n.guild_id) && Object.keys(b.default.getThreadsForParent(n.guild_id, s)).every(e => eX.hasOpenedThread(e) || 0 > F.default.compare(e, i.ackMessageId)) && i.ack({})
    }(this.channelId), n ? this.oldestUnreadMessageId = null : (null == this.outgoingAck && (this.outgoingAckTimer = setTimeout(() => {
      this.type === er.ReadStateTypes.CHANNEL ? this._ack(a, o) : this._nonChannelAck(), this.outgoingAck = null, this.outgoingAckTimer = null
    }, d || s ? 0 : 3e3)), this.outgoingAck = t), !0)
  }
  takeSnapshot() {
    let {
      default: e
    } = n("952451"), t = this.guildId;
    return {
      unread: this.hasUnread(),
      mentionCount: this.mentionCount,
      guildUnread: null == t ? null : e.hasUnread(t),
      guildMentionCount: null == t ? null : e.getMentionCount(t),
      takenAt: Date.now()
    }
  }
  clearOutgoingAck() {
    this.outgoingAck = null, null != this.outgoingAckTimer && (clearTimeout(this.outgoingAckTimer), this.outgoingAckTimer = null)
  }
  _shouldAck(e, t, n) {
    var s;
    return !!e || !!n || !!t || !!(!this.isManualAck && (this.type !== er.ReadStateTypes.CHANNEL || this.loadedMessages || (null === (s = H.default.getChannel(this.channelId)) || void 0 === s ? void 0 : s.isForumLikeChannel()))) || !1
  }
  _ack(e, t) {
    let {
      outgoingAck: s
    } = this;
    if (null == s) return;
    let i = x.default.getId(),
      r = el;
    this._persisted = !0;
    let a = this.recalculateFlags(),
      o = a === this.flags ? void 0 : a;
    eD(() => f.default.post({
      url: et.Endpoints.MESSAGE_ACK(this.channelId, s),
      body: {
        token: el,
        last_viewed: this.lastViewed,
        flags: o
      },
      oldFormErrors: !0
    })).then(e => {
      null != e && (el === r && i === x.default.getId() && (el = e.body.token), g.default.dispatch({
        type: "MESSAGE_ACKED"
      }), t && n.el("199808").then(n.bind(n, "199808")).then(e => {
        let {
          default: t
        } = e;
        t(this.channelId)
      }))
    })
  }
  recalculateFlags() {
    if (this.type !== er.ReadStateTypes.CHANNEL) return;
    let e = H.default.getChannel(this.channelId);
    if (null != e) return e.isThread() ? 2 : null != e.guild_id ? 1 : 0
  }
  _nonChannelAck() {
    let e;
    let {
      outgoingAck: t,
      channelId: n,
      type: s
    } = this;
    if (null != t) {
      switch (s) {
        case er.ReadStateTypes.GUILD_HOME:
        case er.ReadStateTypes.GUILD_EVENT:
        case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          e = et.Endpoints.GUILD_FEATURE_ACK(n, t, s);
          break;
        case er.ReadStateTypes.NOTIFICATION_CENTER:
          e = et.Endpoints.USER_NON_CHANNEL_ACK(t, s);
          break;
        default:
          return
      }
      this._persisted = !0, eD(() => f.default.post({
        url: e,
        body: {},
        oldFormErrors: !0
      }))
    }
  }
  delete() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
      n = H.default.getBasicChannel(this.channelId);
    ea.log("Deleting ReadState", this.channelId, this.type, {
      remote: t,
      persisted: this._persisted,
      channelMissing: null == n,
      isOld: eM(this, ev()),
      validType: null != n && V.ALL_CHANNEL_TYPES.has(n.type),
      readableType: null != n && (0, V.isReadableType)(n.type),
      oldThreadCutoff: ev(),
      mentionCount: this.mentionCount,
      channelId: this.channelId,
      ackMessageId: this._ackMessageId,
      lastMessageId: this._lastMessageId
    }), t && this._persisted && f.default.delete({
      url: et.Endpoints.CHANNEL_ACK(this.channelId),
      body: {
        version: 2,
        read_state_type: this.type
      },
      oldFormErrors: !0
    }), null === (e = eO._readStates[this.type]) || void 0 === e || delete e[this.channelId], eO._mentionChannels.delete(this.channelId)
  }
  shouldDeleteReadState(e) {
    if (0 !== K.default.totalUnavailableGuilds) return !1;
    if (null != this.type && this.type !== er.ReadStateTypes.CHANNEL) return ! function(e) {
      switch (e.type) {
        case er.ReadStateTypes.GUILD_HOME:
        case er.ReadStateTypes.GUILD_EVENT:
        case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          return null != W.default.getGuild(e.channelId);
        case er.ReadStateTypes.NOTIFICATION_CENTER:
          var t;
          return (null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id) === e.channelId;
        default:
          return !0
      }
    }(this);
    let t = H.default.getBasicChannel(this.channelId);
    if (null == t) return !!eM(this, e) || !1;
    return !!V.ALL_CHANNEL_TYPES.has(t.type) && (!(0, V.isReadableType)(t.type) || !(0, V.isPrivate)(t.type) && (!!(V.THREAD_CHANNEL_TYPES.has(t.type) && function(e, t, n) {
      let s = e.guildId,
        i = null != s && b.default.isActive(s, t.parent_id, e.channelId);
      return !i && eM(e, n)
    }(this, t, e)) || !!(this.mentionCount > 0) && !X.default.canBasicChannel(eo, t) || !1))
  }
  getAckTimestamp() {
    let e, t;
    if (0 !== this._ackMessageTimestamp) return this._ackMessageTimestamp;
    if (this._isThread) return this._ackMessageTimestamp = eR(this.guildId, this.channelId), this._ackMessageId = F.default.fromTimestamp(this._ackMessageTimestamp), this._ackMessageTimestamp;
    if (this.type === er.ReadStateTypes.GUILD_EVENT || this.type === er.ReadStateTypes.GUILD_ONBOARDING_QUESTION) e = W.default.getGuild(this.channelId);
    else if ((0, es.isStaticChannelRoute)(this.channelId)) e = W.default.getGuild(this.guildId);
    else {
      let t = H.default.getChannel(this.channelId);
      if (null != t) {
        let n = t.getGuildId();
        e = W.default.getGuild(n)
      }
    }
    return t = null != e ? eV(e) : F.default.extractTimestamp(this.channelId), this._ackMessageTimestamp = t, t
  }
  get oldestUnreadTimestamp() {
    return null != this.oldestUnreadMessageId ? F.default.extractTimestamp(this.oldestUnreadMessageId) : 0
  }
  syncThreadSettings() {
    this._isThread = !0;
    let e = H.default.getChannel(this.channelId);
    if (null == e) return ea.warn("syncThreadSettings called with channel not in memory ".concat(this.channelId)), !1;
    let t = this.guildId,
      n = null != t && b.default.isActive(t, e.parent_id, this.channelId),
      s = P.default.hasJoined(this.channelId);
    return (this._isActiveThread !== n || this._isJoinedThread !== s) && (this._isActiveThread = n, this._isJoinedThread = s, !0)
  }
  recordLastViewedTime() {
    let e = Math.ceil((Date.now() - F.DISCORD_EPOCH) / w.default.Millis.DAY);
    e !== this.lastViewed && (this.lastViewed = e, this.canTrackUnreads() && !this.hasUnread() && this.ack({
      force: !0,
      trackAnalytics: !1
    }))
  }
  constructor(e, t = er.ReadStateTypes.CHANNEL) {
    this.type = er.ReadStateTypes.CHANNEL, this.outgoingAckTimer = null, this.ackMessageIdAtChannelSelect = null, this.ackedWhileCached = void 0, this.channelId = e, this.type = t, this._guildId = null, this._isThread = !1, this._isActiveThread = !1, this._isJoinedThread = !1, this._isResourceChannel = !1, this._persisted = !1, this.loadedMessages = !1, this._lastMessageId = null, this._lastMessageTimestamp = 0, this._ackMessageId = null, this._ackMessageTimestamp = 0, this.isManualAck = !1, this.ackPinTimestamp = 0, this.lastPinTimestamp = 0, this._oldestUnreadMessageId = null, this.oldestUnreadMessageIdStale = !1, this.estimated = !1, this._unreadCount = 0, this._mentionCount = 0, this.outgoingAck = null
  }
}

function eb(e) {
  e.forEach(e => {
    if ((0, V.isReadableType)(e.type)) {
      let t = eO.get(e.id);
      t._guildId = e.guild_id, t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eT(e.lastPinTimestamp), t._isResourceChannel = e.hasFlag(es.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), V.THREAD_CHANNEL_TYPES.has(e.type) && t.syncThreadSettings()
    }
  })
}

function eP(e) {
  e.forEach(e => {
    if ((0, V.isReadableType)(e.type)) {
      var t;
      let n = eO.get(e.id);
      n.lastMessageId = e.last_message_id, n.lastPinTimestamp = eT(e.last_pin_timestamp), n._isResourceChannel = (0, L.hasFlag)(null !== (t = e.flags) && void 0 !== t ? t : 0, es.ChannelFlags.IS_GUILD_RESOURCE_CHANNEL), V.THREAD_CHANNEL_TYPES.has(e.type) && n.syncThreadSettings()
    }
  })
}

function ek(e) {
  (function(e) {
    var t;
    null === (t = e.threads) || void 0 === t || t.forEach(t => {
      if (!V.ALL_CHANNEL_TYPES.has(t.type)) return;
      let n = eO.get(t.id);
      n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eT(t.lastPinTimestamp), n._isThread = !0, n._isActiveThread = !0, n._isJoinedThread = null != t.member, null == n.ackMessageId && (n.ackMessageId = F.default.fromTimestamp(eR(e.id, t.id))), null == n.ackPinTimestamp && (n.ackPinTimestamp = eR(e.id, t.id))
    })
  })(e),
  function(e) {
    var t, n;
    if ((null === (t = e.guild_scheduled_events) || void 0 === t ? void 0 : t.length) === 0 && null == eO.getIfExists(e.id, er.ReadStateTypes.GUILD_EVENT)) return;
    let s = eO.get(e.id, er.ReadStateTypes.GUILD_EVENT);
    s._guildId = e.id;
    let i = 0,
      r = null,
      a = null !== (n = s._ackMessageId) && void 0 !== n ? n : F.default.fromTimestamp(s.getAckTimestamp());
    e.guild_scheduled_events.forEach(e => {
      F.default.compare(e.id, r) > 0 && (r = e.id), F.default.compare(e.id, a) > 0 && i++
    }), s.lastMessageId = r, s.mentionCount = i
  }(e),
  function(e) {
    let t = eO.get(e.id, er.ReadStateTypes.GUILD_HOME);
    t.lastMessageId = F.default.fromTimestamp(u(Date.now()).subtract(24, "h").valueOf())
  }(e),
  function(e) {
    let t = e.properties.latest_onboarding_question_id;
    if (null == t) return;
    let n = eO.get(e.id, er.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    n._guildId = e.id, n.lastMessageId = t
  }(e)
}
eO._guildReadStateSentinels = {}, eO._readStates = {}, eO._mentionChannels = new Set;

function eR(e, t) {
  var n, s, i;
  let r = H.default.getChannel(t),
    a = W.default.getGuild(null != e ? e : null == r ? void 0 : r.guild_id),
    o = (null == r ? void 0 : r.isForumPost()) ? 0 : eV(a),
    d = (null !== (i = null === (n = P.default.joinTimestamp(t)) || void 0 === n ? void 0 : n.getTime()) && void 0 !== i ? i : 0) - 5e3,
    u = null == r ? void 0 : null === (s = r.threadMetadata) || void 0 === s ? void 0 : s.archiveTimestamp,
    l = null != u ? new Date(u).getTime() - 1 : 0,
    f = Math.max(d, l);
  return f <= 0 && (f = F.default.extractTimestamp(t) - 1), isNaN(o) ? f : Math.max(o, f)
}

function eV(e) {
  if (null != e && null != e.joinedAt) {
    if (e.joinedAt instanceof Date) return e.joinedAt.getTime();
    if ("string" == typeof e.joinedAt) return new Date(e.joinedAt).getTime();
    else if ("number" == typeof e.joinedAt && !isNaN(e.joinedAt)) return e.joinedAt
  }
  return Date.now()
}

function eM(e, t) {
  return !!(e.mentionCount > 0) || !(F.default.compare(e.channelId, t) > 0 || null != e._ackMessageId && F.default.compare(e._ackMessageId, t) > 0 || null != e._lastMessageId && F.default.compare(e._lastMessageId, t) > 0) && !0
}

function ew(e) {
  if (null != e) {
    let t = eO.get(e);
    if (eN(t)) return t.ack({})
  }
  return !1
}

function eL() {
  null != eg && clearTimeout(eg)
}

function eU(e) {
  if (null != e.channelUpdates) {
    var t;
    eb(null === (t = e.channelUpdates) || void 0 === t ? void 0 : t.writes)
  }
  if (null != e.channelTimestampUpdates)
    for (let t of e.channelTimestampUpdates) {
      let e = eO.get(t.id);
      null != t.last_message_id && (e.lastMessageId = t.last_message_id), null != t.last_pin_timestamp && (e.lastPinTimestamp = eT(t.last_pin_timestamp))
    }
}

function eG(e) {
  let {
    channelId: t
  } = e, n = eO.get(t);
  n.rebuildChannelState()
}

function eF(e) {
  let {
    threads: t
  } = e;
  eP(t)
}

function ex(e) {
  let t = $.default.getCurrentUser();
  return null != e.creator_id && null != t && e.creator_id === t.id
}

function eB(e) {
  let {
    channel: t
  } = e;
  return eO.clear(t.id)
}

function eH() {
  let e = B.default.getCurrentSidebarChannelId(ed),
    t = !1;
  return eu !== e ? (t = ej(eu), eu = e) : t = ew(e) || t, t
}

function eY(e) {
  if (null == e) return;
  let t = eO.get(e);
  t.isManualAck = !1
}

function ej(e) {
  if (null == e) return !1;
  let t = eO.get(e);
  return !t.hasUnread() && (t.oldestUnreadMessageId = null, !0)
}

function eK(e) {
  let {
    channelId: t,
    messageId: n,
    manual: s,
    newMentionCount: i
  } = e, r = eO.get(t);
  return s ? (r.rebuildChannelState(n, !0, i), !0) : n !== r._ackMessageId && r.ack({
    messageId: n,
    local: !0
  })
}

function eW(e) {
  let {
    id: t,
    ackType: n,
    ackedId: s,
    local: i
  } = e;
  return ez(t, n, s, i)
}

function ez(e, t, n, s) {
  var i;
  let r = eO.get(e, t);
  return n !== r.ackMessageId && r.lastMessageId !== r.ackMessageId && (null != r.lastMessageId || 0 !== r.mentionCount) && (n = null !== (i = null != n ? n : r.lastMessageId) && void 0 !== i ? i : F.default.fromTimestamp(r.getAckTimestamp()), r.ack({
    messageId: n,
    local: null == s || s
  }))
}
class eq extends l.default.Store {
  initialize() {
    this.waitFor(Y.default, $.default, W.default, K.default, H.default, Z.default, q.default, X.default, h.default, b.default, P.default, B.default, p.default, j.default, v.default, J.default, ee.default, A.default, C.default, R.default, S.default), this.syncWith([B.default], eH)
  }
  getReadStatesByChannel() {
    var e;
    return null !== (e = eO._readStates[er.ReadStateTypes.CHANNEL]) && void 0 !== e ? e : {}
  }
  getForDebugging(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getIfExists(e, t)
  }
  getNotifCenterReadState(e) {
    return eO._readStates[er.ReadStateTypes.NOTIFICATION_CENTER][e]
  }
  hasUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canBeUnread() && e.hasUnread(), !1)
  }
  hasTrackedUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canTrackUnreads() && e.hasUnread(), !1)
  }
  isForumPostUnread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.isForumPostUnread(), !1)
  }
  getUnreadCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canBeUnread() ? e.unreadCount : 0, 0)
  }
  getMentionCount(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canHaveMentions() ? e.getMentionCount() : 0, 0)
  }
  getGuildChannelUnreadState(e, t, n, s, i) {
    return eO.getValue(e.id, er.ReadStateTypes.CHANNEL, r => r.getGuildChannelUnreadState(e, t, n, s, i), {
      mentionCount: 0,
      unread: !1
    })
  }
  hasRecentlyVisitedAndRead(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.hasRecentlyVisitedAndRead(), !1)
  }
  ackMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canBeUnread() ? e.ackMessageId : null, null)
  }
  getTrackedAckMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canTrackUnreads() ? e._ackMessageId : null, null)
  }
  lastMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.lastMessageId, null)
  }
  lastMessageTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.lastMessageTimestamp, 0)
  }
  lastPinTimestamp(e) {
    return eO.getValue(e, er.ReadStateTypes.CHANNEL, e => e.lastPinTimestamp, null)
  }
  getOldestUnreadMessageId(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadMessageId : null, null)
  }
  getOldestUnreadTimestamp(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.canTrackUnreads() ? e.oldestUnreadTimestamp : 0, 0)
  }
  isEstimated(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e.estimated, !1)
  }
  hasOpenedThread(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : er.ReadStateTypes.CHANNEL;
    return eO.getValue(e, t, e => e._persisted, !1)
  }
  hasUnreadPins(e) {
    return eO.getValue(e, er.ReadStateTypes.CHANNEL, e => e.canBeUnread() && e.lastPinTimestamp > e.ackPinTimestamp, !1)
  }
  isNewForumThread(e, t, n) {
    let s = eO.get(t),
      i = eO.get(e);
    if (!0 === i._persisted || null == s.ackMessageIdAtChannelSelect || 0 >= F.default.compare(e, s.ackMessageIdAtChannelSelect)) return !1;
    let r = eV(n),
      a = F.default.extractTimestamp(e);
    return a > r
  }
  getAllReadStates(e) {
    let t = [];
    return eO.forEach(n => {
      switch (n.type) {
        case er.ReadStateTypes.GUILD_HOME:
        case er.ReadStateTypes.GUILD_EVENT:
        case er.ReadStateTypes.GUILD_ONBOARDING_QUESTION:
          let s = W.default.getGuild(n.channelId);
          null != s && t.push(n.serialize(e));
          break;
        case er.ReadStateTypes.NOTIFICATION_CENTER:
          var i;
          let r = null === (i = $.default.getCurrentUser()) || void 0 === i ? void 0 : i.id;
          r === n.channelId && t.push(n.serialize(e));
          break;
        default:
          t.push(n.serialize(e))
      }
    }), t
  }
  getGuildUnreadsSentinel(e) {
    return eO.getGuildSentinels(e).unreadsSentinel
  }
  getMentionChannelIds() {
    return eO.getMentionChannelIds()
  }
  getSnapshot(e, t) {
    let n = eO.get(e);
    return null == n.snapshot || Date.now() - n.snapshot.takenAt > t ? n.takeSnapshot() : n.snapshot
  }
}
eq.displayName = "ReadStateStore";
let eX = new eq(g.default, {
  CONNECTION_OPEN: function(e) {
    var t, n;
    let {
      guilds: s,
      relationships: i,
      initialPrivateChannels: r,
      readState: a
    } = e;
    eC(), el = null, !ef && !a.partial && eO.clearAll(), ef = !1, a.entries.forEach(e => {
      var t, n, s;
      let i = null !== (t = e.read_state_type) && void 0 !== t ? t : er.ReadStateTypes.CHANNEL;
      if (i !== er.ReadStateTypes.CHANNEL) {
        ;
        e = {
          id: (s = e).id,
          read_state_type: s.read_state_type,
          mention_count: s.badge_count,
          last_message_id: s.last_acked_id
        }
      }
      let r = eO.get(e.id, i);
      r._persisted = !0, r._mentionCount = null !== (n = e.mention_count) && void 0 !== n ? n : 0, r.flags = e.flags, r.lastViewed = e.last_viewed;
      let a = H.default.getBasicChannel(e.id);
      null != a && (0, V.isThread)(a.type) && (null == e.last_message_id || 0 === e.last_message_id) ? r.ackMessageId = F.default.fromTimestamp(eR(a.guild_id, a.id)) : r.ackedWhileCached ? -1 === F.default.compare(r.ackMessageId, e.last_message_id) && (r.ackMessageId = e.last_message_id) : r.ackMessageId = e.last_message_id, r.ackedWhileCached = void 0, r.ackPinTimestamp = eT(e.last_pin_timestamp), eO._mentionChannels.delete(r.channelId), r._mentionCount > 0 && r.canHaveMentions() && eO._mentionChannels.add(r.channelId)
    }), eO.resetGuildSentinels();
    let o = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null != o) {
      let e = eO.get(o, er.ReadStateTypes.NOTIFICATION_CENTER);
      e.lastMessageId = F.default.fromTimestamp(Date.now())
    }
    for (let e of (function(e) {
        let t = $.default.getCurrentUser();
        if (!(0, D.inNotificationCenterEnabled)() || null == t) return 0;
        let n = eO.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER);
        e.forEach(e => {
          if (null == e.since || e.type !== et.RelationshipTypes.PENDING_INCOMING) return;
          let t = new Date(e.since).getTime(),
            s = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
          s < t && (n.mentionCount++, n.lastMessageId = F.default.fromTimestamp(t))
        })
      }(i), eb(r), s)) eb(null !== (n = e.channels) && void 0 !== n ? n : []), eU(e), ek(e);
    eL(), eg = setTimeout(() => (function(e) {
      let t = ev();
      for (let s of e) {
        var n;
        let e = null !== (n = s.read_state_type) && void 0 !== n ? n : er.ReadStateTypes.CHANNEL,
          i = eO.get(s.id, e);
        i.shouldDeleteReadState(t) && i.delete()
      }
    })(a.entries), 10 * w.default.Millis.SECOND)
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function(e) {
    let {
      lazyPrivateChannels: t
    } = e;
    eb(t)
  },
  LOGOUT: eL,
  OVERLAY_INITIALIZE: function(e) {
    let {
      readStates: t,
      selectedChannelId: n
    } = e;
    eC(), el = null, ed = n, eu = B.default.getCurrentSidebarChannelId(ed), eO.clearAll(), t.forEach(e => {
      let t = eO.get(e.channelId);
      t.deserializeForOverlay(e), t.type === er.ReadStateTypes.CHANNEL && t.rebuildChannelState()
    })
  },
  CACHE_LOADED: function(e) {
    let {
      readStates: t
    } = e;
    ef = !0, eC(), t.forEach(e => {
      var t;
      let n = null !== (t = e.type) && void 0 !== t ? t : er.ReadStateTypes.CHANNEL;
      e.type = n, null == eO._readStates[n] && (eO._readStates[n] = {}), eO._readStates[n][e.channelId] = (0, c.dangerouslyCast)(e, eO)
    })
  },
  GUILD_CREATE: function(e) {
    var t;
    let {
      guild: n
    } = e, s = ev();
    eO.forEach(e => {
      e.guildId === n.id && e.shouldDeleteReadState(s) && e.delete(!1)
    }), eb(null !== (t = n.channels) && void 0 !== t ? t : []), eU(n), ek(n)
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      channelId: t,
      isAfter: n,
      messages: s
    } = e, i = eO.get(t);
    i.loadedMessages = !0;
    let r = q.default.getMessages(t);
    null != r && (s.length > 0 && 1 === F.default.compare(s[0].id, i.ackMessageId) && 0 === i.unreadCount ? i.rebuildChannelState() : r.hasPresent() || r.jumpTargetId === i.ackMessageId ? i.rebuildChannelState() : n && null != i.ackMessageId && r.has(i.ackMessageId, !0) && (i.unreadCount += s.length, null == i.oldestUnreadMessageId && i.rebuildChannelState())), eP(s.map(e => e.thread).filter(U.isNotNullish))
  },
  MESSAGE_CREATE: function(e) {
    let t, n, {
        channelId: i,
        message: r,
        isPushNotification: a
      } = e,
      o = eO.get(i);
    o.lastMessageId = r.id;
    let d = $.default.getCurrentUser(),
      u = H.default.getBasicChannel(i);
    if (null != r.author && null != d && r.author.id === d.id) return null != o.outgoingAck && o.clearOutgoingAck(), eK({
      channelId: i,
      messageId: r.id,
      manual: !1
    });
    let l = (0, y.getRootNavigationRefIfInExperiment)();
    if ((null == l ? void 0 : l.isReady()) === !0) {
      let e = l.getCurrentRoute(),
        n = h.default.getChatOpen(o.channelId);
      if (n) t = o.channelId;
      else if ((null == e ? void 0 : e.name) === "channel") t = e.params.channelId;
      else if ((null == e ? void 0 : e.name) === "guilds") {
        var f;
        t = null === (f = e.params) || void 0 === f ? void 0 : f.channelId
      }
    } else null == l && (t = Z.default.getChannelId(), n = B.default.getCurrentSidebarChannelId(t));
    let _ = t === i || n === i;
    if (_ && eN(o) && !a || null != s && s.isInstanceFocused() && _ && s.isInstanceUILocked() && s.isPinned(et.OverlayWidgets.TEXT)) return o.ack({
      messageId: r.id
    });
    (null == o.oldestUnreadMessageId || o.oldestUnreadMessageIdStale) && (o.oldestUnreadMessageId = r.id), o.unreadCount++;
    let c = null != r.author && Q.default.isBlocked(r.author.id) || r.type === et.MessageTypes.RECIPIENT_REMOVE && (null == u ? void 0 : u.type) === et.ChannelTypes.GROUP_DM;
    !c && (null != d && (0, I.isRawMessageMentioned)({
      rawMessage: r,
      userId: d.id,
      suppressEveryone: J.default.isSuppressEveryoneEnabled(o.guildId),
      suppressRoles: J.default.isSuppressRolesEnabled(o.guildId)
    }) || eI(H.default.getChannel(i))) && o.mentionCount++
  },
  MESSAGE_DELETE: eG,
  MESSAGE_DELETE_BULK: eG,
  MESSAGE_ACK: eK,
  CHANNEL_ACK: function(e) {
    let {
      channelId: t,
      messageId: n,
      immediate: s = !1,
      force: i = !1,
      context: r,
      location: a
    } = e, o = eO.get(t), d = o.ack({
      messageId: n,
      local: r !== et.CURRENT_APP_CONTEXT,
      immediate: s,
      force: i,
      isExplicitUserAction: !0,
      location: a
    });
    return null != n ? (o.rebuildChannelState(), !0) : d
  },
  CHANNEL_LOCAL_ACK: function(e) {
    let {
      channelId: t
    } = e, n = eO.get(t);
    return n.ack({
      messageId: void 0,
      local: !0,
      immediate: void 0,
      force: void 0,
      isExplicitUserAction: !0
    })
  },
  CHANNEL_PINS_ACK: function(e) {
    let {
      channelId: t,
      timestamp: n
    } = e, s = eO.get(t);
    return s.ackPins(n)
  },
  CHANNEL_PINS_UPDATE: function(e) {
    let {
      channelId: t,
      lastPinTimestamp: n
    } = e, s = eO.get(t), i = eT(n);
    return s.lastPinTimestamp !== i && (s.lastPinTimestamp = i, !0)
  },
  CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e, n = B.default.getCurrentSidebarChannelId(t), s = H.default.getChannel(t);
    if (null != s) {
      var i;
      let e = eO.get(s.id);
      e.ackMessageIdAtChannelSelect = null !== (i = e.ackMessageId) && void 0 !== i ? i : F.default.fromTimestamp(e.getAckTimestamp()), e.recordLastViewedTime()
    }
    eY(ed), eY(eu);
    let r = !1;
    return ed !== t && (r = ej(ed) || r, r = ej(eu) || r), (ed === t || (null == s ? void 0 : s.type) != null && et.ChannelTypesSets.GUILD_THREADS_ONLY.has(s.type)) && (r = ew(t) || r), ed === t && (r = ew(n) || r), ed = t, eu = n, r
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) return;
    let n = eO.get(t);
    if (!n.hasMentions()) return n.oldestUnreadMessageId = null, n.ack({
      isExplicitUserAction: !0
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, V.isReadableType)(t.type)) return !1;
    let n = eO.get(t.id);
    n.lastMessageId = t.lastMessageId, n.lastPinTimestamp = eT(t.lastPinTimestamp)
  },
  THREAD_CREATE: function(e) {
    let {
      channel: t
    } = e;
    (function(e) {
      if (!V.ALL_CHANNEL_TYPES.has(e.type)) return 0;
      let t = eO.get(e.id);
      t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eT(e.lastPinTimestamp), t.syncThreadSettings(), e.ownerId === x.default.getId() && (t.loadedMessages = !0)
    })(t),
    function(e) {
      let t = e.parent_id,
        n = eO.get(t);
      n.lastMessageId = e.id;
      let s = $.default.getCurrentUser();
      if (e.ownerId === (null == s ? void 0 : s.id)) {
        let n = eO.get(e.id);
        n._persisted = !0, eK({
          channelId: t,
          messageId: e.id,
          manual: !1
        })
      }
    }(t)
  },
  THREAD_UPDATE: function(e) {
    let {
      channel: t
    } = e;
    return !!V.ALL_CHANNEL_TYPES.has(t.type) && eO.get(t.id).syncThreadSettings()
  },
  THREAD_LIST_SYNC: function(e) {
    let {
      threads: t
    } = e;
    t.forEach(e => {
      if (!V.ALL_CHANNEL_TYPES.has(e.type)) return;
      let t = eO.get(e.id);
      if (t.lastMessageId = e.lastMessageId, t.lastPinTimestamp = eT(e.lastPinTimestamp), t._isThread = !0, t._isActiveThread = !0, t._isJoinedThread = P.default.hasJoined(e.id), e.isForumPost()) {
        let t = eO.get(e.parent_id);
        0 > F.default.compare(t.lastMessageId, e.id) && (t.lastMessageId = e.id)
      }
    })
  },
  LOAD_THREADS_SUCCESS: eF,
  LOAD_ARCHIVED_THREADS_SUCCESS: eF,
  SEARCH_FINISH: function(e) {
    let {
      messages: t,
      threads: n
    } = e;
    for (let e of t) eP(e.map(e => {
      let {
        thread: t
      } = e;
      return t
    }).filter(U.isNotNullish));
    eP(n)
  },
  THREAD_MEMBER_UPDATE: function(e) {
    let {
      id: t
    } = e;
    return eO.get(t).syncThreadSettings()
  },
  THREAD_MEMBERS_UPDATE: function(e) {
    return (0, k.doesThreadMembersActionAffectMe)(e) && eO.get(e.id).syncThreadSettings()
  },
  CHANNEL_DELETE: eB,
  THREAD_DELETE: eB,
  WINDOW_FOCUS: function(e) {
    let t = !1;
    for (let [n, s] of Object.entries(em)) s === e.windowId && (t = function(e, t) {
      if (null == e) return !1;
      let n = eO.get(e);
      return !t && !n.hasUnread() && (n.oldestUnreadMessageIdStale = !0), ew(e)
    }(n, e.focused) || t);
    return t
  },
  UPDATE_CHANNEL_DIMENSIONS: function(e) {
    let {
      channelId: t
    } = e;
    return ew(t)
  },
  CURRENT_USER_UPDATE: function() {
    el = null
  },
  DRAWER_OPEN: function() {
    if (null != ed) {
      let e = eO.get(ed);
      !e.hasUnread() && (e.oldestUnreadMessageIdStale = !0)
    }
    return !1
  },
  DRAWER_CLOSE: function() {
    return ew(ed)
  },
  BULK_ACK: function(e) {
    var t, n, s;
    let {
      channels: i,
      context: r,
      onFinished: a
    } = e, o = i.filter(e => null != e.messageId && eX.hasUnread(e.channelId, e.readStateType));
    t = o, n = r, s = a, t.forEach(e => {
      let {
        channelId: t,
        messageId: n,
        readStateType: s
      } = e, i = eO.get(t, s);
      i.ack({
        messageId: n,
        local: !0,
        immediate: void 0,
        force: void 0,
        isExplicitUserAction: !0
      })
    }), n !== et.CURRENT_APP_CONTEXT || (e_.push(...t.map(e => ({
      channel_id: e.channelId,
      message_id: e.messageId,
      read_state_type: e.readStateType
    }))), ec || eA(s))
  },
  ENABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t,
      windowId: n
    } = e;
    return em[t] !== n && (o(void 0 === em[t], "handleEnableAutomaticAck: channel already visible in another window"), em[t] = n, ew(t))
  },
  DISABLE_AUTOMATIC_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return em[t] = void 0, !1
  },
  GUILD_FEATURE_ACK: eW,
  GUILD_SCHEDULED_EVENT_CREATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id, s = eO.get(t.guild_id, er.ReadStateTypes.GUILD_EVENT);
    if (s.lastMessageId = t.id, ex(t)) {
      eW({
        type: "GUILD_FEATURE_ACK",
        id: n,
        ackType: er.ReadStateTypes.GUILD_EVENT,
        ackedId: t.id,
        local: !1
      });
      return
    }!J.default.isMuteScheduledEventsEnabled(n) && s.mentionCount++
  },
  GUILD_SCHEDULED_EVENT_UPDATE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (ex(t) || ![ei.GuildScheduledEventStatus.CANCELED, ei.GuildScheduledEventStatus.COMPLETED].includes(t.status)) return !1;
    let s = eO.get(n, er.ReadStateTypes.GUILD_EVENT);
    s.handleGuildEventRemoval(n, t.id)
  },
  GUILD_SCHEDULED_EVENT_DELETE: function(e) {
    let {
      guildScheduledEvent: t
    } = e, n = t.guild_id;
    if (ex(t)) return !1;
    let s = eO.get(t.guild_id, er.ReadStateTypes.GUILD_EVENT);
    s.handleGuildEventRemoval(n, t.id)
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    return eO.clear(t.id, er.ReadStateTypes.GUILD_EVENT)
  },
  GUILD_UPDATE: function(e) {
    let {
      guild: t
    } = e, n = t.latest_onboarding_question_id;
    if (null == n) return;
    let s = eO.get(t.id, er.ReadStateTypes.GUILD_ONBOARDING_QUESTION);
    s._guildId = t.id, s.lastMessageId = n
  },
  RESORT_THREADS: function(e) {
    let {
      channelId: t
    } = e;
    return ew(t)
  },
  CHANNEL_RTC_UPDATE_CHAT_OPEN: function(e) {
    let {
      channelId: t,
      chatOpen: n
    } = e
  },
  DECAY_READ_STATES: eC,
  NOTIFICATION_CENTER_ITEM_CREATE: function(e) {
    var t;
    let {
      item: n
    } = e;
    if (!(0, D.inNotificationCenterEnabled)()) return !1;
    let s = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == s) return !1;
    let i = eO.get(s, er.ReadStateTypes.NOTIFICATION_CENTER);
    i.lastMessageId = n.id;
    if (0, A.default.active) {
      ez(s, er.ReadStateTypes.NOTIFICATION_CENTER, n.id, !1);
      return
    }
    i.mentionCount++
  },
  RELATIONSHIP_ADD: function(e) {
    let t = $.default.getCurrentUser();
    if (!(0, D.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING && e.relationship.type !== et.RelationshipTypes.FRIEND) return !1;
    let n = eO.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER),
      s = e.relationship.type === et.RelationshipTypes.FRIEND,
      i = s ? new Date(Date.now()).getTime() : new Date(e.relationship.since).getTime(),
      r = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
    r < i && (n.lastMessageId = F.default.fromTimestamp(i), (0, A.default.active) ? ez(t.id, er.ReadStateTypes.NOTIFICATION_CENTER, void 0, !1) : s ? n.mentionCount-- : n.mentionCount++)
  },
  RELATIONSHIP_REMOVE: function(e) {
    let t = $.default.getCurrentUser();
    if (!(0, D.inNotificationCenterEnabled)() || null == t || null == e.relationship.since || e.relationship.type !== et.RelationshipTypes.PENDING_INCOMING) return !1;
    let n = eO.get(t.id, er.ReadStateTypes.NOTIFICATION_CENTER),
      s = new Date(e.relationship.since).getTime(),
      i = null != n.ackMessageId ? F.default.extractTimestamp(n.ackMessageId) : 0;
    i <= s && (n.mentionCount = Math.max(0, n.mentionCount - 1))
  },
  NOTIFICATION_CENTER_ITEMS_ACK: function(e) {
    var t;
    let {
      ids: n,
      optimistic: s
    } = e;
    if (s || !(0, D.inNotificationCenterEnabled)() || A.default.active) return !1;
    let i = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    if (null == i) return !1;
    let r = eO.get(i, er.ReadStateTypes.NOTIFICATION_CENTER);
    n.forEach(e => {
      0 > F.default.compare(r.ackMessageId, e) && (r.mentionCount = Math.max(r.mentionCount - 1, 0))
    })
  },
  USER_NON_CHANNEL_ACK: function(e) {
    var t;
    let {
      ackType: n,
      ackedId: s,
      local: i
    } = e, r = null === (t = $.default.getCurrentUser()) || void 0 === t ? void 0 : t.id;
    return null != r && ez(r, n, s, i)
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t;
    let n = !1;
    for (let s of null !== (t = e.channels) && void 0 !== t ? t : []) {
      let e = eO.get(s.id),
        t = eT(s.lastPinTimestamp);
      (e.lastMessageId !== s.lastMessageId || e.lastPinTimestamp !== t) && (n = !0, e.lastMessageId = s.lastMessageId, e.lastPinTimestamp = t)
    }
    return n
  },
  CLEAR_OLDEST_UNREAD_MESSAGE: function(e) {
    let {
      channelId: t
    } = e;
    return ej(t)
  },
  TRY_ACK: function(e) {
    let {
      channelId: t
    } = e;
    return ew(t)
  }
});
var eQ = eX