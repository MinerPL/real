            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return M
                }
            }), n("222007"), n("424973");
            var a = n("884691"),
                s = n("917351"),
                l = n.n(s),
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

            function A(e) {
                var t, n;
                if (null == e.jumpTargetId || !e.ready) return null;
                let {
                    jumpTargetId: a,
                    jumpTargetOffset: s
                } = e;
                if (e.has(a) || !e.hasMoreBefore && a === e.channelId) {
                    if (0 === s) return a;
                    let n = e.getByIndex(e.indexOf(a) + s);
                    return null !== (t = null == n ? void 0 : n.id) && void 0 !== t ? t : a
                }
                let l = [a, ...e.map(e => {
                        let {
                            id: t
                        } = e;
                        return t
                    })].sort(p.default.compare),
                    i = l.indexOf(a),
                    r = null !== (n = l[i + (Math.abs(s) > 0 ? s : 1)]) && void 0 !== n ? n : l[i - 1];
                return null != r ? r : null
            }
            let _ = {
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
                        offsetHeight: a,
                        scrollHeight: s
                    } = this.getScrollerState(), l = this.isHeightChange(a, s);
                    if (this.offsetHeightCache = a, this.scrollHeightCache = s, this.loading = e.messages.loadingMore, this.isInitialized() || this.isReady()) {
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
                        let n = A(e.messages);
                        if (null == n || this.isJumping() || e.messages.jumpSequenceId === t.jumpSequenceId) {
                            if (this.isJumping()) {
                                null != n ? this.scrollToMessage(n, !0) : this.jumping = !1;
                                return
                            }
                        } else {
                            let a;
                            let s = t.first();
                            null != s && e.messages.last() !== t.last() && e.messages.first() !== t.first() && (a = p.default.extractTimestamp(s.id)), this.scrollToMessage(n, !0, a);
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
                    l && this.fixScrollPosition(a, s)
                }
                getAnchorData(e, t, n) {
                    var a;
                    let s = this.getElementFromMessageId(e),
                        l = null === (a = this.ref.current) || void 0 === a ? void 0 : a.getScrollerNode();
                    if (!(0, i.isElement)(s) || null == l) return null;
                    let {
                        offsetHeight: r
                    } = s, o = (0, E.default)(s, l), u = o - t;
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
                    } = this.props, a = this.getScrollerState(), {
                        scrollTop: s
                    } = a, l = t && s >= this.newMessageBarBuffer() ? this.newMessageBarBuffer() : 0, i = null, r = t => {
                        var a;
                        return -1 === t ? n.id : null === (a = e._array[t]) || void 0 === a ? void 0 : a.id
                    }, o = -1, u = !1;
                    for (;;) {
                        let t = r(o);
                        if (null == t) break;
                        let n = this.getAnchorData(t, s);
                        if (this._bottomAnchor = n, u && null != n && n.offsetTop > s + l + a.offsetHeight) break;
                        if (u) {
                            o++;
                            continue
                        }
                        null != n && (n.offsetTop >= s + l || o === e.length - 1) && (i = n, u = !0), o++
                    }
                    return i
                }
                findFetchAnchor(e) {
                    let {
                        messages: t
                    } = this.props, {
                        scrollTop: n
                    } = this.getScrollerState(), a = e ? -1 : 1, s = null, l = t._array.length - 1;
                    for (let i = e ? l : 0; null != t._array[i]; i += a) {
                        let e = t._array[i],
                            a = this.getAnchorData(e.id, n);
                        if (null != a) {
                            s = a;
                            break
                        }
                    }
                    return s
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
                        var a;
                        this.isPinned() ? this.scrollTo(Number.MAX_SAFE_INTEGER, !1, this.handleScroll) : this.mergeTo(n, this.handleScroll), null === (a = this.ref.current) || void 0 === a || a.scrollIntoViewNode({
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
                    let a = this.focusAnchor = null != e ? this.getAnchorData(e, t) : null;
                    null != a && (a.offsetFromTop >= n || t > a.offsetTop + a.offsetHeight) && (this.focusAnchor = null)
                }
                handleFocusAnchorScroll(e, t) {
                    var n;
                    this.updateFocusAnchor(null === (n = this.focusAnchor) || void 0 === n ? void 0 : n.id, e, t)
                }
                updateFetchAnchor(e, t, n) {
                    var a;
                    let s = null === (a = this.ref.current) || void 0 === a ? void 0 : a.getScrollerNode();
                    null != this.messageFetchAnchor && null != s && (this.messageFetchAnchor = this.getAnchorData(this.messageFetchAnchor.id, e, this.isInPlaceholderRegion({
                        scrollTop: e,
                        offsetHeight: t,
                        scrollHeight: n
                    }) > 0 ? t : void 0))
                }
                updateAutomaticAnchor(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode();
                    if (null == this.automaticAnchor || null == a) return;
                    let s = this.getAnchorData(this.automaticAnchor.id, e);
                    n && null != s && null != this.automaticAnchor && (s.offsetFromTop = this.automaticAnchor.offsetFromTop), this.setAutomaticAnchor(s)
                }
                setAutomaticAnchor(e) {
                    var t, n;
                    this.automaticAnchor = e, null === (t = this._automaticAnchorCallbacks) || void 0 === t || t.forEach(e => e(this.automaticAnchor, this._bottomAnchor)), this.updateVisibleMessagesDebounced(null == e ? void 0 : e.id, null === (n = this._bottomAnchor) || void 0 === n ? void 0 : n.id)
                }
                getScrollerState() {
                    var e, t;
                    return null !== (t = null === (e = this.ref.current) || void 0 === e ? void 0 : e.getScrollerState()) && void 0 !== t ? t : _
                }
                isHeightChange(e, t) {
                    return e !== this.offsetHeightCache || t !== this.scrollHeightCache
                }
                isInPlaceholderRegion(e) {
                    let {
                        scrollTop: t,
                        offsetHeight: n,
                        scrollHeight: a
                    } = e, {
                        messages: s,
                        placeholderHeight: l
                    } = this.props;
                    return s.hasMoreBefore && t < l && a > n ? 1 : s.hasMoreAfter && t >= a - n - l ? 2 : 0
                }
                isInScrollTriggerLoadingRegion(e) {
                    let {
                        scrollTop: t,
                        offsetHeight: n,
                        scrollHeight: a
                    } = e, {
                        messages: s
                    } = this.props;
                    return s.hasMoreBefore && t <= this.getOffsetToTriggerLoading("top", e) && a > n ? 1 : s.hasMoreAfter && t >= this.getOffsetToTriggerLoading("bottom", e) ? 2 : 0
                }
                handleScrollSpeed(e) {
                    if (this.isJumping() || this.isDragging() || !this.props.canLoadMore) return;
                    let {
                        scrollTop: t,
                        offsetHeight: n,
                        scrollHeight: a
                    } = e, {
                        prevScrollTop: s,
                        props: {
                            placeholderHeight: l
                        }
                    } = this;
                    if (this.prevScrollTop = t, null == s) return;
                    let i = this.isInPlaceholderRegion(e),
                        r = t - s;
                    0 !== i && (1 === i && t + r <= 0 ? (this.mergeTo(l - n), this.prevScrollTop = l - n) : 2 === i && t + r >= a - n && (this.mergeTo(a - l), this.prevScrollTop = a - l))
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
                        let n = A(e);
                        if (null == n) return;
                        let a = this.getElementFromMessageId(n);
                        (0, i.isElement)(a) ? this.scrollTo(this.getOffsetOrientationFromNode(a, "middle", t ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), !0): this.scrollToNewMessages(!0, "middle")
                    } else this.scrollTo(Number.MAX_SAFE_INTEGER, !0)
                }
                scrollToNewMessages() {
                    var e;
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top",
                        a = arguments.length > 2 ? arguments[2] : void 0,
                        s = null === (e = this.getDocument()) || void 0 === e ? void 0 : e.getElementById(g.NEW_MESSAGE_BAR_ID),
                        l = () => {
                            this.jumping = !1, this.setAutomaticAnchor(this.findAnchor()), null != a && a(), this.handleScroll()
                        };
                    this.pinned = !1, this.jumping = t, null != s ? this.scrollTo(this.getOffsetOrientationFromNode(s, n, this.newMessageBarBuffer()), t, l) : this.scrollTo(this.getOffsetToPreventLoading("top"), t, l)
                }
                getOffsetOrientationFromNode(e, t) {
                    var n;
                    let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        s = null === (n = this.ref.current) || void 0 === n ? void 0 : n.getScrollerNode();
                    if (null == s) return 0;
                    let l = this.getScrollerState(),
                        i = (0, E.default)(e, s);
                    return "middle" === t ? Math.min(i - .5 * l.offsetHeight + .5 * e.offsetHeight + -8, i - a) : i - a
                }
                restoreScroll() {
                    if (this.isInitialized()) return;
                    let {
                        initialScrollTop: e
                    } = this;
                    this.initialScrollTop = void 0;
                    let t = A(this.props.messages);
                    null != t ? this.scrollToMessage(t, !1) : this.props.hasUnreads && this.props.channel.type !== S.ChannelTypes.GUILD_VOICE && this.props.channel.type !== S.ChannelTypes.GUILD_STAGE_VOICE ? this.scrollToNewMessages() : null != e ? this.scrollTo(e + this.props.placeholderHeight, !1, this.handleScroll) : this.setScrollToBottom()
                }
                scrollTo(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    null === (t = this.ref.current) || void 0 === t || t.scrollTo({
                        to: e,
                        animate: !c.default.useReducedMotion && n,
                        callback: a
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
                        var a, s;
                        a = n, o.default.jumpToPresent(a.id, S.MAX_MESSAGES_PER_CHANNEL), (0, f.transitionToGuild)(null !== (s = a.getGuildId()) && void 0 !== s ? s : S.ME, a.id)
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
                            scrollTop: a,
                            scrollHeight: s,
                            offsetHeight: l
                        } = this.getScrollerState();
                        r.default.updateChannelDimensions(t.id, a - n, s - n, l, e)
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
                    let a = this.getElementFromMessageId(e);
                    if (!this.isJumping() && t && null != n && !c.default.useReducedMotion) {
                        let t = p.default.extractTimestamp(e);
                        t > n ? this.scrollTo(0) : this.scrollTo(Number.MAX_SAFE_INTEGER)
                    }
                    this.pinned = !1, this.jumping = !0;
                    let s = () => {
                        this.jumping = !1, (0, i.isElement)(a) && c.default.keyboardModeEnabled && a.focus({
                            preventScroll: !0
                        }), this.scrollCounter = 0, this.handleScroll(), this._scrollCompleteCallbacks.forEach(e => e())
                    };
                    (0, i.isElement)(a) ? this.scrollTo(this.getOffsetOrientationFromNode(a, "middle", this.props.hasUnreads ? this.newMessageBarBuffer() : g.MESSAGE_PADDING), t, s): this.scrollToNewMessages(t, "middle", s)
                }
                getOffsetToTriggerLoading(e, t) {
                    let {
                        scrollHeight: n,
                        offsetHeight: a
                    } = t, {
                        messages: s,
                        hasUnreads: l,
                        placeholderHeight: i
                    } = this.props;
                    if ("top" === e) return s.hasMoreBefore ? l ? i - g.PLACEHOLDER_BUFFER - 2 : i + 500 : 0;
                    return s.hasMoreAfter ? n - a - i - 500 : n - a
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
                            scrollHeight: a
                        } = this.getScrollerState();
                        this.updateFocusAnchor(e, t, n), this.updateFetchAnchor(t, n, a), this.updateAutomaticAnchor(t)
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
                    this.ref = a.createRef(), this.automaticAnchor = null, this.messageFetchAnchor = null, this.focusAnchor = null, this.jumping = !1, this.dragging = !1, this.isAtBottom = !1, this.prevScrollTop = null, this.anchorTimeout = null, this.initialScrollTop = null, this.acking = !1, this.scrollCounter = 0, this.offsetHeightCache = 0, this.scrollHeightCache = 0, this.scrollTopCache = -1, this._bottomAnchor = null, this._automaticAnchorCallbacks = [], this._scrollCompleteCallbacks = [], this.updateVisibleMessagesDebounced = l.debounce(h.updateVisibleMessages, 300), this.handleScroll = e => {
                        var t;
                        if (!this.isInitialized()) return;
                        let n = this.getScrollerState(),
                            a = this.isScrolledToBottom(n);
                        if (a !== this.isAtBottom && (a ? (this.isAtBottom = !0, this.props.handleScrollToBottom()) : (this.isAtBottom = !1, this.props.handleScrollFromBottom())), n.offsetHeight !== this.offsetHeightCache || n.scrollHeight !== this.scrollHeightCache) this.scrollCounter = 0, clearTimeout(this.anchorTimeout), !this.isPinned() && (null == this.automaticAnchor ? this.setAutomaticAnchor(this.findAnchor()) : this.updateAutomaticAnchor(n.scrollTop, !0)), clearTimeout(this.anchorTimeout), this.fixScrollPosition(n.offsetHeight, n.scrollHeight), this.scrollTopCache = n.scrollTop;
                        else {
                            if (null != e && e.target !== (null === (t = this.ref.current) || void 0 === t ? void 0 : t.getScrollerNode())) return;
                            this.scrollTopCache !== n.scrollTop && (this.pinned = a, this.scrollCounter = Math.min(this.scrollCounter + 1, 5), this.pinned ? this.cleanAutomaticAnchor() : null != this.automaticAnchor ? this.updateAutomaticAnchor(n.scrollTop, !0) : this.setAutomaticAnchor(this.findAnchor()), this.scrollTopCache = n.scrollTop, clearTimeout(this.anchorTimeout), this.anchorTimeout = setTimeout(() => {
                                this.scrollCounter = 0, this.anchorTimeout = null, this.prevScrollTop = null;
                                let {
                                    scrollHeight: e,
                                    offsetHeight: t
                                } = this.getScrollerState();
                                this.isHeightChange(t, e) ? this.handleScroll() : (this.cleanAutomaticAnchor(), !this.isPinned() && this.setAutomaticAnchor(this.findAnchor()))
                            }, 35))
                        }
                        if (this.handleFocusAnchorScroll(n.scrollTop, n.offsetHeight), this.updateStoreDimensionsDebounced(), this.isScrollLoadingDisabled()) return !this.props.canLoadMore && this.enableAutomaticAck(), this.handleScrollSpeed(n);
                        let s = this.isInScrollTriggerLoadingRegion(n);
                        1 === s ? this.loadMore() : 2 === s ? this.loadMore(!0) : this.enableAutomaticAck(), this.handleScrollSpeed(n)
                    }, this.handleResize = (e, t) => {
                        let {
                            offsetHeightCache: n,
                            scrollHeightCache: a
                        } = this;
                        "container" === t ? n = e.contentRect.height : "content" === t && (a = e.contentRect.height), this.isHeightChange(n, a) && this.fixScrollPosition(n, a)
                    }, this.handleMouseDown = e => {
                        e.target === e.currentTarget && (this.dragging = !0)
                    }, this.handleMouseUp = () => {
                        this.dragging = !1, this.handleScroll()
                    }, this.loadMore = function() {
                        let e, t, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            {
                                messages: s
                            } = n.props;
                        if (a) {
                            let e = s.last();
                            null != e && (t = e.id)
                        } else {
                            let t = s.first();
                            null != t && (e = t.id)
                        }
                        n.messageFetchAnchor = n.findFetchAnchor(a), n.loading = !0, o.default.fetchMessages({
                            channelId: n.props.channel.id,
                            before: e,
                            after: t,
                            limit: S.MAX_MESSAGES_PER_CHANNEL,
                            truncate: !0
                        })
                    }, this.updateStoreDimensionsDebounced = l.debounce(this.updateStoreDimensions, 200), this.props = e, this.loading = e.messages.loadingMore;
                    let s = C.default.getChannelDimensions(e.channel.id);
                    null != e.messages.jumpTargetId ? this.pinned = !1 : (this.initialScrollTop = null !== (t = null == s ? void 0 : s.scrollTop) && void 0 !== t ? t : null, this.pinned = null == s)
                }
            }

            function M(e) {
                let {
                    messages: t,
                    channel: n,
                    compact: s,
                    hasUnreads: l,
                    focusId: i,
                    placeholderHeight: r,
                    canLoadMore: o = !0,
                    handleScrollToBottom: u,
                    handleScrollFromBottom: c
                } = e, {
                    windowId: f
                } = a.useContext(d.default), [h] = a.useState(() => new T({
                    messages: t,
                    channel: n,
                    compact: s,
                    hasUnreads: l,
                    focusId: i,
                    placeholderHeight: r,
                    canLoadMore: o,
                    windowId: f,
                    handleScrollToBottom: u,
                    handleScrollFromBottom: c
                }));
                return h.getSnapshotBeforeUpdate(i), a.useLayoutEffect(() => h.mergePropsAndUpdate({
                    messages: t,
                    channel: n,
                    compact: s,
                    hasUnreads: l,
                    focusId: i,
                    placeholderHeight: r,
                    canLoadMore: o,
                    windowId: f,
                    handleScrollToBottom: u,
                    handleScrollFromBottom: c
                })), a.useLayoutEffect(() => () => h.cleanup(), [h]), h
            }