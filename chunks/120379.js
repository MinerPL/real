"use strict";
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var s = n("884691"),
  a = n("917351"),
  l = n.n(a),
  i = n("118810"),
  r = n("406189"),
  o = n("819689"),
  u = n("267363"),
  d = n("244201"),
  c = n("206230"),
  f = n("393414"),
  h = n("793237"),
  C = n("162805"),
  p = n("299039"),
  m = n("556118"),
  E = n("777484"),
  g = n("894488"),
  S = n("49111");

function _(e) {
  var t, n;
  if (null == e.jumpTargetId || !e.ready) return null;
  let {
    jumpTargetId: s,
    jumpTargetOffset: a
  } = e;
  if (e.has(s) || !e.hasMoreBefore && s === e.channelId) {
    if (0 === a) return s;
    let n = e.getByIndex(e.indexOf(s) + a);
    return null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : s
  }
  let l = [s, ...e.map(e => {
      let {
        id: t
      } = e;
      return t
    })].sort(p.default.compare),
    i = l.indexOf(s),
    r = null !== (n = l[i + (Math.abs(a) > 0 ? a : 1)]) && void 0 !== n ? n : l[i - 1];
  return null != r ? r : null
}
let A = {
  scrollTop: 0,
  scrollHeight: 0,
  offsetHeight: 0
};
class T {
  isReady() {
    return this.props.messages.ready
  }
  isLoading() {
    return this.loading || this.props.messages.loadingMore
  }
  isPinned() {
    return this.pinned
  }
  isJumping() {
    return this.jumping
  }
  isDragging() {
    return this.dragging
  }
  isInitialized() {
    return void 0 === this.initialScrollTop
  }
  isScrollLoadingDisabled() {
    return this.isLoading() || !this.isInitialized() || this.isJumping() || this.isDragging() || !this.props.canLoadMore
  }
  isActivelyScrolling() {
    return this.scrollCounter >= 5
  }
  getDocument() {
    var e, t;
    return null === (t = this.ref.current) || void 0 === t ? void 0 : null === (e = t.getScrollerNode()) || void 0 === e ? void 0 : e.ownerDocument
  }
  getElementFromMessageId(e) {
    let t = this.getDocument(),
      {
        channel: {
          id: n
        }
      } = this.props;
    return null == t ? null : (0, m.getElementFromMessage)(t, n, e)
  }
  isScrolledToBottom() {
    let {
      scrollTop: e,
      scrollHeight: t,
      offsetHeight: n
    } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.getScrollerState();
    return e >= t - n - g.MESSAGE_PADDING && !this.props.messages.hasMoreAfter
  }
  mergePropsAndUpdate(e) {
    this.mergePropsAndUpdate_(e), this.props.messages.ready && this.enableAutomaticAck()
  }
  mergePropsAndUpdate_(e) {
    let t = this.props.messages,
      n = this.props.focusId;
    this.props = {
      ...e
    };
    let {
      offsetHeight: s,
      scrollHeight: a
    } = this.getScrollerState(), l = this.isHeightChange(s, a);
    if (this.offsetHeightCache = s, this.scrollHeightCache = a, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
      if (!this.isInitialized()) {
        this.restoreScroll();
        return
      }
    } else {
      null == e.messages.jumpTargetId && this.scrollTo(Number.MAX_SAFE_INTEGER);
      return
    }
    if (null != e.messages.jumpTargetId) {
      if (this.isLoading()) return;
      let n = _(e.messages);
      if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
        if (this.isJumping()) {
          null != n ? this.scrollToMessage(n, !0) : this.jumping = !1;
          return
        }
      } else {
        let s;
        let a = t.first();
        null != a && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (s = p.default.extractTimestamp(a.id)), this.scrollToMessage(n, !0, s);
        return
      }
    }
    if (e.messages.jumpedToPresent && t.jumpSequenceId !== e.messages.jumpSequenceId) {
      this.jumping = !0, this.scrollTo(0), this.setScrollToBottom(!0);
      return
    }
    let i = e.messages.last(),
      r = t.last();
    if (null != i && i.state === S.MessageStates.SENDING && (null == r ? void 0 : r.id) !== i.id) {
      this.setScrollToBottom();
      return
    }
    let {
      focusId: o
    } = this.props;
    if (null != o && n !== o) {
      let e = this.getElementFromMessageId(o);
      if (null != e) {
        var u;
        null === (u = this.ref.current) || void 0 === u || u.scrollIntoViewNode({
          node: e,
          padding: g.MESSAGE_PADDING,
          callback: this.handleScroll
        });
        return
      }
    }
    l && this.fixScrollPosition(s, a)
  }
  getAnchorData(e, t, n) {
    var s;
    let a = this.getElementFromMessageId(e),
      l = null === (s = this.ref.current) || void 0 === s ? void 0 : s.getScrollerNode();
    if (!(0, i.isElement)(a) || null == l) return null;
    let {
      offsetHeight: r
    } = a, o = (0, E.default)(a, l), u = o - t;
    return null != n && (u = Math.max(-r, Math.min(n, u))), {
      id: e,
      offsetFromTop: u,
      offsetTop: o,
      offsetHeight: r,
      clamped: null != u
    }
  }
  cleanAutomaticAnchor() {
    this.setAutomaticAnchor(null)
  }
  newMessageBarBuffer() {
    return this.props.channel.isForumPost() ? g.NEW_MESSAGE_BAR_BUFFER_LARGE : g.NEW_MESSAGE_BAR_BUFFER
  }
  findAnchor() {
    let {
      messages: e,
      hasUnreads: t,
      channel: n
    } = this.props, s = this.getScrollerState(), {
      scrollTop: a
    } = s, l = t && a >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, i = null, r = t => {
      var s;
      return -1 === t ? n.id : null === (s = e._array[t]) || void 0 === s ? void 0 : s.id
    }, o = -1, u = !1;
    for (;;) {
      let t = r(o);
      if (null == t) break;
      let n = this.getAnchorData(t, a);
      if (this._bottomAnchor = n, u && null != n && n.offsetTop > a + l + s.offsetHeight) break;
      if (u) {
        o++;
        continue
      }
      null != n && (n.offsetTop >= a + l || o === e.length - 1) && (i = n, u = !0), o++
    }
    return i
  }
  findFetchAnchor(e) {
    let {
      messages: t
    } = this.props, {
      scrollTop: n
    } = this.getScrollerState(), s = e ? -1 : 1, a = null, l = t._array.length - 1;
    for (let i = e ? l : 0; null != t._array[i]; i += s) {
      let e = t._array[i],
        s = this.getAnchorData(e.id, n);
      if (null != s) {
        a = s;
        break
      }
    }
    return a
  }
  getAnchorFixData() {
    let e = [this.focusAnchor, this.isLoading() ? null : this.messageFetchAnchor, this.automaticAnchor];
    for (let t of e) {
      if (null == t) continue;
      let e = this.getElementFromMessageId(t.id);
      if (!(0, i.isElement)(e)) continue;
      let n = t === this.messageFetchAnchor ? t.offsetHeight - e.offsetHeight : 0;
      return {
        node: e,
        fixedScrollTop: e.offsetTop - (t.offsetFromTop + n)
      }
    }
    return null
  }
  fixAnchorScrollPosition() {
    let e = this.getAnchorFixData();
    if (null == e) {
      this.handleScroll();
      return
    }
    let {
      node: t,
      fixedScrollTop: n
    } = e;
    if (null != this.focusAnchor) {
      var s;
      this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll), null === (s = this.ref.current) || void 0 === s || s.scrollIntoViewNode({
        node: t,
        padding: g.MESSAGE_PADDING,
        callback: this.handleScroll
      })
    } else this.mergeTo(n, this.handleScroll);
    this.isActivelyScrolling() ? this.setAutomaticAnchor(null) : this.setAutomaticAnchor(this.findAnchor()), !this.isLoading() && (this.messageFetchAnchor = null)
  }
  hasAnchor() {
    return null != this.focusAnchor || null != this.messageFetchAnchor || null != this.automaticAnchor
  }
  updateFocusAnchor(e, t, n) {
    let s = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
    null != s && (s.offsetFromTop >= n || t > s.offsetTop + s.offsetHeight) && (this.focusAnchor = null)
  }
  handleFocusAnchorScroll(e, t) {
    var n;
    this.updateFocusAnchor(null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id, e, t)
  }
  updateFetchAnchor(e, t, n) {
    var s;
    let a = null === (s = this.ref.current) || void 0 === s ? void 0 : s.getScrollerNode();
    null != this.messageFetchAnchor && null != a && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
      scrollTop: e,
      offsetHeight: t,
      scrollHeight: n
    }) > 0 ? t : void 0))
  }
  updateAutomaticAnchor(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      s = null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode();
    if (null == this.automaticAnchor || null == s) return;
    let a = this.getAnchorData(this.automaticAnchor.id, e);
    n && null != a && null != this.automaticAnchor && (a.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(a)
  }
  setAutomaticAnchor(e) {
    var t, n;
    this.automaticAnchor = e, null === (t = this._automaticAnchorCallbacks) || void 0 === t || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id)
  }
  getScrollerState() {
    var e, t;
    return null !== (t = null === (e = this.ref.current) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : A
  }
  isHeightChange(e, t) {
    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
  }
  isInPlaceholderRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: s
    } = e, {
      messages: a,
      placeholderHeight: l
    } = this.props;
    return a.hasMoreBefore && t < l && s > n ? 1 : a.hasMoreAfter && t >= s - n - l ? 2 : 0
  }
  isInScrollTriggerLoadingRegion(e) {
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: s
    } = e, {
      messages: a
    } = this.props;
    return a.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && s > n ? 1 : a.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
  }
  handleScrollSpeed(e) {
    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
    let {
      scrollTop: t,
      offsetHeight: n,
      scrollHeight: s
    } = e, {
      prevScrollTop: a,
      props: {
        placeholderHeight: l
      }
    } = this;
    if (this.prevScrollTop = t, null == a) return;
    let i = this.isInPlaceholderRegion(e),
      r = t - a;
    0 !== i && (1 === i && t + r <= 0 ? (this.mergeTo(l - n), this.prevScrollTop = l - n) : 2 === i && t + r >= s - n && (this.mergeTo(s - l), this.prevScrollTop = s - l))
  }
  enableAutomaticAck() {
    this.isInitialized() && !this.acking && (this.acking = !0, this.updateStoreDimensions(() => {
      (0, u.enableAutomaticAck)(this.props.channel.id, this.props.windowId)
    }))
  }
  fixScrollPosition(e, t) {
    this.offsetHeightCache = e, this.scrollHeightCache = t, this.fixJumpTarget(), this.isPinned() && null == this.messageFetchAnchor && null == this.focusAnchor ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.fixAnchorScrollPosition()
  }
  fixJumpTarget() {
    if (!this.isJumping()) return;
    let {
      messages: e,
      hasUnreads: t
    } = this.props;
    if (null != e.jumpTargetId) {
      let n = _(e);
      if (null == n) return;
      let s = this.getElementFromMessageId(n);
      (0, i.isElement)(s) ? this.scrollTo(this.getOffsetOrientationFromNode(s, "middle", t ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), !0): this.scrollToNewMessages(!0, "middle")
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0)
  }
  scrollToNewMessages() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
      s = arguments.length > 2 ? arguments[2] : void 0,
      a = null === (e = this.getDocument()) || void 0 === e ? void 0 : e.getElementById(g.NEW_MESSAGE_BAR_ID),
      l = () => {
        this.jumping = !1, this.setAutomaticAnchor(this.findAnchor()), null != s && s(), this.handleScroll()
      };
    this.pinned = !1, this.jumping = t, null != a ? this.scrollTo(this.getOffsetOrientationFromNode(a, n, this.newMessageBarBuffer()), t, l) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, l)
  }
  getOffsetOrientationFromNode(e, t) {
    var n;
    let s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
      a = null === (n = this.ref.current) || void 0 === n ? void 0 : n.getScrollerNode();
    if (null == a) return 0;
    let l = this.getScrollerState(),
      i = (0, E.default)(e, a);
    return "middle" === t ? Math.min(i - .5 * l.offsetHeight + .5 * e.offsetHeight + -8, i - s) : i - s
  }
  restoreScroll() {
    if (this.isInitialized()) return;
    let {
      initialScrollTop: e
    } = this;
    this.initialScrollTop = void 0;
    let t = _(this.props.messages);
    null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== S.ChannelTypes.GUILD_VOICE && this.props.channel.type !== S.ChannelTypes.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom()
  }
  scrollTo(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      s = arguments.length > 2 ? arguments[2] : void 0;
    null === (t = this.ref.current) || void 0 === t || t.scrollTo({
      to: e,
      animate: !c.default.useReducedMotion && n,
      callback: s
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  mergeTo(e, t) {
    var n;
    null === (n = this.ref.current) || void 0 === n || n.mergeTo({
      to: e,
      callback: t
    }), this.isPinned() ? this.updateStoreDimensions() : this.updateStoreDimensionsDebounced()
  }
  setScrollToBottom() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
      {
        messages: t,
        channel: n
      } = this.props;
    if (t.hasMoreAfter) {
      var s, a;
      s = n, o.default.jumpToPresent(s.id, S.MAX_MESSAGES_PER_CHANNEL), (0, f.transitionToGuild)(null !== (a = s.getGuildId()) && void 0 !== a ? a : S.ME, s.id)
    } else this.scrollTo(Number.MAX_SAFE_INTEGER, e, () => {
      this.jumping = !1, this.handleScroll()
    })
  }
  updateStoreDimensions(e) {
    if (this.isJumping() || !this.isInitialized()) return;
    let {
      channel: t
    } = this.props;
    if (this.isPinned()) r.default.clearChannelDimensions(t.id, e);
    else {
      let {
        placeholderHeight: n
      } = this.props, {
        scrollTop: s,
        scrollHeight: a,
        offsetHeight: l
      } = this.getScrollerState();
      r.default.updateChannelDimensions(t.id, s - n, a - n, l, e)
    }
  }
  scrollIntoViewRect() {}
  scrollPageUp() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null === (e = this.ref.current) || void 0 === e || e.scrollPageUp({
      animate: t
    })
  }
  scrollPageDown() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    null === (e = this.ref.current) || void 0 === e || e.scrollPageDown({
      animate: t
    })
  }
  scrollToMessage(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = arguments.length > 2 ? arguments[2] : void 0;
    if (null == this.ref.current) return;
    if (e === this.props.channel.id) {
      this.scrollTo(0);
      return
    }
    let s = this.getElementFromMessageId(e);
    if (!this.isJumping() && t && null != n && !c.default.useReducedMotion) {
      let t = p.default.extractTimestamp(e);
      t > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)
    }
    this.pinned = !1, this.jumping = !0;
    let a = () => {
      this.jumping = !1, (0, i.isElement)(s) && c.default.keyboardModeEnabled && s.focus({
        preventScroll: !0
      }), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
    };
    (0, i.isElement)(s) ? this.scrollTo(this.getOffsetOrientationFromNode(s, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), t, a): this.scrollToNewMessages(t, "middle", a)
  }
  getOffsetToTriggerLoading(e, t) {
    let {
      scrollHeight: n,
      offsetHeight: s
    } = t, {
      messages: a,
      hasUnreads: l,
      placeholderHeight: i
    } = this.props;
    if ("top" === e) return a.hasMoreBefore ? l ? i - g.PLACEHOLDER_BUFFER - 2 : i + 500 : 0;
    return a.hasMoreAfter ? n - s - i - 500 : n - s
  }
  getOffsetToPreventLoading(e) {
    let {
      messages: t
    } = this.props, n = 0;
    return "top" === e && t.hasMoreBefore ? n = 2 : "bottom" === e && t.hasMoreAfter && (n = -2), this.getOffsetToTriggerLoading(e, this.getScrollerState()) + n
  }
  getSnapshotBeforeUpdate(e) {
    if (this.hasAnchor() || null != e) {
      let {
        scrollTop: t,
        offsetHeight: n,
        scrollHeight: s
      } = this.getScrollerState();
      this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, s), this.updateAutomaticAnchor(t)
    }
  }
  addAutomaticAnchorCallback(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    this._automaticAnchorCallbacks.push(e), this._automaticAnchorCallbacks = l.uniq(this._automaticAnchorCallbacks), !0 === t && this.setAutomaticAnchor(this.findAnchor())
  }
  removeAutomaticAnchorCallback(e) {
    this._automaticAnchorCallbacks = l.without(this._automaticAnchorCallbacks, e)
  }
  addScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks.push(e), this._scrollCompleteCallbacks = l.uniq(this._scrollCompleteCallbacks)
  }
  removeScrollCompleteCallback(e) {
    this._scrollCompleteCallbacks = l.without(this._scrollCompleteCallbacks, e)
  }
  cleanup() {
    this.acking = !1, this.updateStoreDimensionsDebounced.cancel(), this._automaticAnchorCallbacks.forEach(e => this.removeAutomaticAnchorCallback(e)), (0, u.disableAutomaticAck)(this.props.channel.id, this.props.windowId)
  }
  constructor(e) {
    var t, n = this;
    this.ref = s.createRef(), this.automaticAnchor = null, this.messageFetchAnchor = null, this.focusAnchor = null, this.jumping = !1, this.dragging = !1, this.isAtBottom = !1, this.prevScrollTop = null, this.anchorTimeout = null, this.initialScrollTop = null, this.acking = !1, this.scrollCounter = 0, this.offsetHeightCache = 0, this.scrollHeightCache = 0, this.scrollTopCache = -1, this._bottomAnchor = null, this._automaticAnchorCallbacks = [], this._scrollCompleteCallbacks = [], this.updateVisibleMessagesDebounced = l.debounce(h.updateVisibleMessages, 300), this.handleScroll = e => {
      var t;
      if (!this.isInitialized()) return;
      let n = this.getScrollerState(),
        s = this.isScrolledToBottom(n);
      if (s !== this.isAtBottom && (s ? (this.isAtBottom = !0, this.props.handleScrollToBottom()) : (this.isAtBottom = !1, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), !this.isPinned() && (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
      else {
        if (null != e && e.target !== (null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode())) return;
        this.scrollTopCache !== n.scrollTop && (this.pinned = s, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
          this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
          let {
            scrollHeight: e,
            offsetHeight: t
          } = this.getScrollerState();
          this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), !this.isPinned() && this.setAutomaticAnchor(this.findAnchor()))
        }, 35))
      }
      if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return !this.props.canLoadMore && this.enableAutomaticAck(), this.handleScrollSpeed(n);
      let a = this.isInScrollTriggerLoadingRegion(n);
      1 === a ? this.loadMore() : 2 === a ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
    }, this.handleResize = (e, t) => {
      let {
        offsetHeightCache: n,
        scrollHeightCache: s
      } = this;
      "container" === t ? n = e.contentRect.height : "content" === t && (s = e.contentRect.height), this.isHeightChange(n, s) && this.fixScrollPosition(n, s)
    }, this.handleMouseDown = e => {
      e.target === e.currentTarget && (this.dragging = !0)
    }, this.handleMouseUp = () => {
      this.dragging = !1, this.handleScroll()
    }, this.loadMore = function() {
      let e, t, s = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
        {
          messages: a
        } = n.props;
      if (s) {
        let e = a.last();
        null != e && (t = e.id)
      } else {
        let t = a.first();
        null != t && (e = t.id)
      }
      n.messageFetchAnchor = n.findFetchAnchor(s), n.loading = !0, o.default.fetchMessages({
        channelId: n.props.channel.id,
        before: e,
        after: t,
        limit: S.MAX_MESSAGES_PER_CHANNEL,
        truncate: !0
      })
    }, this.updateStoreDimensionsDebounced = l.debounce(this.updateStoreDimensions, 200), this.props = e, this.loading = e.messages.loadingMore;
    let a = C.default.getChannelDimensions(e.channel.id);
    null != e.messages.jumpTargetId ? this.pinned = !1 : (this.initialScrollTop = null !== (t = null == a ? void 0 : a.scrollTop) && void 0 !== t ? t : null, this.pinned = null == a)
  }
}

function M(e) {
  let {
    messages: t,
    channel: n,
    compact: a,
    hasUnreads: l,
    focusId: i,
    placeholderHeight: r,
    canLoadMore: o = !0,
    handleScrollToBottom: u,
    handleScrollFromBottom: c
  } = e, {
    windowId: f
  } = s.useContext(d.default), [h] = s.useState(() => new T({
    messages: t,
    channel: n,
    compact: a,
    hasUnreads: l,
    focusId: i,
    placeholderHeight: r,
    canLoadMore: o,
    windowId: f,
    handleScrollToBottom: u,
    handleScrollFromBottom: c
  }));
  return h.getSnapshotBeforeUpdate(i), s.useLayoutEffect(() => h.mergePropsAndUpdate({
    messages: t,
    channel: n,
    compact: a,
    hasUnreads: l,
    focusId: i,
    placeholderHeight: r,
    canLoadMore: o,
    windowId: f,
    handleScrollToBottom: u,
    handleScrollFromBottom: c
  })), s.useLayoutEffect(() => () => h.cleanup(), [h]), h
}