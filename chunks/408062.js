            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007"), n("808653"), n("700225"), n("424973"), n("843762"), n("781738");
            var i = n("917351"),
                a = n.n(i),
                l = n("389806"),
                s = n("115718"),
                r = n("280468"),
                u = n("692038"),
                o = n("299039"),
                d = n("35013"),
                c = n("49111");

            function _(e, t) {
                let n = e.get(t.id);
                return null == n || function(e, t) {
                    var n, i;
                    let a = null != e.editedTimestamp ? +e.editedTimestamp.toDate() : 0,
                        l = null != t.edited_timestamp ? +new Date(t.edited_timestamp) : 0;
                    return !!(l > a) || !!(e.embeds.length < (null !== (i = null === (n = t.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== i ? i : 0)) || e.content !== t.content
                }(n, t) || e.cached ? (0, u.createMessageRecord)(t) : n
            }
            class E {
                clone() {
                    let e = new E(this._isCacheBefore);
                    return e._map = {
                        ...this._map
                    }, e._messages = [...this._messages], e._wasAtEdge = this._wasAtEdge, e
                }
                get wasAtEdge() {
                    return this._wasAtEdge
                }
                set wasAtEdge(e) {
                    this._wasAtEdge = e
                }
                get length() {
                    return this._messages.length
                }
                clear() {
                    this._map = {}, this._messages = [], this._wasAtEdge = !1
                }
                remove(e) {
                    this._messages = a.filter(this._messages, t => {
                        let {
                            id: n
                        } = t;
                        return n !== e
                    }), delete this._map[e]
                }
                removeMany(e) {
                    a.each(e, e => {
                        delete this._map[e]
                    }), this._messages = this._messages.filter(t => -1 === e.indexOf(t.id))
                }
                replace(e, t) {
                    let n = this._map[e];
                    null != n && (delete this._map[e], this._map[t.id] = t, this._messages[this._messages.indexOf(n)] = t)
                }
                update(e, t) {
                    let n = this._map[e];
                    if (null == n) return;
                    let i = t(n);
                    this._map[n.id] = i, this._messages[this._messages.indexOf(n)] = i
                }
                has(e) {
                    return null != this._map[e]
                }
                get(e) {
                    return this._map[e]
                }
                forEach(e, t) {
                    this._messages.forEach(e, t)
                }
                cache(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    0 === this.length && (this._wasAtEdge = t);
                    let n = this._messages.length + e.length;
                    if (n > c.MAX_MESSAGE_CACHE_SIZE) {
                        if (this._wasAtEdge = !1, e.length > c.MAX_MESSAGE_CACHE_SIZE) {
                            this._isCacheBefore ? this._messages = e.slice(e.length - c.MAX_MESSAGE_CACHE_SIZE) : this._messages = e.slice(0, c.MAX_MESSAGE_CACHE_SIZE), this._map = {}, this._messages.forEach(e => this._map[e.id] = e);
                            return
                        }
                        let t = c.MAX_MESSAGE_CACHE_SIZE - e.length;
                        this._isCacheBefore ? this._messages = this._messages.slice(Math.max(this._messages.length - t, 0)) : this._messages = this._messages.slice(0, t)
                    }
                    this._messages = this._isCacheBefore ? [...this._messages, ...e] : [...e, ...this._messages], this._map = {}, this._messages.forEach(e => this._map[e.id] = e)
                }
                extractAll() {
                    let e = this._messages;
                    return this._messages = [], this._map = {}, e
                }
                extract(e) {
                    let t;
                    if (this._isCacheBefore) {
                        let n = Math.max(this.length - e, 0),
                            i = this.length;
                        t = this._messages.slice(n, i), this._messages.splice(n)
                    } else {
                        let n = Math.min(e, this.length);
                        t = this._messages.slice(0, n), this._messages.splice(0, e)
                    }
                    return t.forEach(e => delete this._map[e.id]), t
                }
                constructor(e) {
                    this._messages = [], this._map = {}, this._wasAtEdge = !1, this._isCacheBefore = e
                }
            }
            class f {
                static forEach(e) {
                    a.forEach(f._channelMessages, e)
                }
                static get(e) {
                    return f._channelMessages[e]
                }
                static hasPresent(e) {
                    let t = f.get(e);
                    return null != t && t.hasPresent()
                }
                static getOrCreate(e) {
                    let t = f._channelMessages[e];
                    return null == t && (t = new f(e), f._channelMessages[e] = t), t
                }
                static clear(e) {
                    delete f._channelMessages[e]
                }
                static clearCache(e) {
                    let t = f._channelMessages[e];
                    null != t && (t._before.clear(), t._after.clear(), this.commit(t))
                }
                static commit(e) {
                    f._channelMessages[e.channelId] = e
                }
                mutate(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = new f(this.channelId);
                    return n._array = t ? [...this._array] : this._array, n._map = t ? {
                        ...this._map
                    } : this._map, n._after = t ? this._after.clone() : this._after, n._before = t ? this._before.clone() : this._before, e instanceof Function ? (n.ready = this.ready, n.jumpType = this.jumpType, n.jumpTargetId = this.jumpTargetId, n.jumpTargetOffset = this.jumpTargetOffset, n.jumpSequenceId = this.jumpSequenceId, n.jumped = this.jumped, n.jumpedToPresent = this.jumpedToPresent, n.jumpFlash = this.jumpFlash, n.jumpReturnTargetId = this.jumpReturnTargetId, n.focusTargetId = this.focusTargetId, n.hasMoreBefore = this.hasMoreBefore, n.hasMoreAfter = this.hasMoreAfter, n.loadingMore = this.loadingMore, n.revealedMessageId = this.revealedMessageId, n.cached = this.cached, n.hasFetched = this.hasFetched, n.error = this.error, e(n)) : "object" == typeof e && (n.ready = void 0 !== e.ready ? !0 === e.ready : this.ready, n.jumpType = void 0 !== e.jumpType ? e.jumpType : this.jumpType, n.jumpTargetId = void 0 !== e.jumpTargetId ? e.jumpTargetId : this.jumpTargetId, n.jumpTargetOffset = void 0 !== e.jumpTargetOffset ? e.jumpTargetOffset : this.jumpTargetOffset, n.jumpSequenceId = void 0 !== e.jumpSequenceId ? e.jumpSequenceId : this.jumpSequenceId, n.jumped = void 0 !== e.jumped ? !0 === e.jumped : this.jumped, n.jumpedToPresent = void 0 !== e.jumpedToPresent ? !0 === e.jumpedToPresent : this.jumpedToPresent, n.jumpFlash = void 0 !== e.jumpFlash ? !0 === e.jumpFlash : this.jumpFlash, n.jumpReturnTargetId = void 0 !== e.jumpReturnTargetId ? e.jumpReturnTargetId : this.jumpReturnTargetId, n.focusTargetId = void 0 !== e.focusTargetId ? e.focusTargetId : this.focusTargetId, n.hasMoreBefore = void 0 !== e.hasMoreBefore ? !0 === e.hasMoreBefore : this.hasMoreBefore, n.hasMoreAfter = void 0 !== e.hasMoreAfter ? !0 === e.hasMoreAfter : this.hasMoreAfter, n.loadingMore = void 0 !== e.loadingMore ? e.loadingMore : this.loadingMore, n.revealedMessageId = void 0 !== e.revealedMessageId ? e.revealedMessageId : this.revealedMessageId, n.cached = void 0 !== e.cached ? e.cached : this.cached, n.hasFetched = void 0 !== e.hasFetched ? e.hasFetched : this.hasFetched, n.error = void 0 !== e.error ? e.error : this.error), n
                }
                get length() {
                    return this._array.length
                }
                toArray() {
                    return [...this._array]
                }
                forEach(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (n) {
                        let n = this._array;
                        for (let i = n.length - 1; i >= 0 && !1 !== e.call(t, n[i], i); i--);
                    } else this._array.forEach(e, t)
                }
                reduce(e, t) {
                    return this._array.reduce(e, t)
                }
                some(e, t) {
                    return this._array.some(e, t)
                }
                filter(e, t) {
                    return this._array.filter(e, t)
                }
                forAll(e, t) {
                    this._before.forEach(e, t), this._array.forEach(e, t), this._after.forEach(e, t)
                }
                findOldest(e) {
                    var t, n;
                    return null !== (n = null !== (t = a.find(this._before._messages, e)) && void 0 !== t ? t : a.find(this._array, e)) && void 0 !== n ? n : a.find(this._after._messages, e)
                }
                findNewest(e) {
                    var t, n;
                    return null !== (n = null !== (t = a.findLast(this._after._messages, e)) && void 0 !== t ? t : a.findLast(this._array, e)) && void 0 !== n ? n : a.findLast(this._before._messages, e)
                }
                map(e, t) {
                    return this._array.map(e, t)
                }
                first() {
                    return this._array[0]
                }
                last() {
                    return this._array[this._array.length - 1]
                }
                get(e) {
                    var t;
                    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = this._map[e];
                    return null == i && n ? null !== (t = this._before.get(e)) && void 0 !== t ? t : this._after.get(e) : i
                }
                getByIndex(e) {
                    return this._array[e]
                }
                getAfter(e) {
                    let t = this.get(e);
                    if (null == t) return null;
                    let n = this._array.indexOf(t);
                    return -1 === n || n === this.length - 1 ? null : this._array[n + 1]
                }
                getManyAfter(e, t, n) {
                    let i = this.get(e);
                    if (null == i) return null;
                    let a = this._array.indexOf(i);
                    if (-1 === a) return null;
                    let l = [];
                    for (let e = a + 1; e < this.length && (-1 === t || l.length < t); e++)(null == n || n(this._array[e])) && l.push(this._array[e]);
                    return l
                }
                getManyBefore(e, t, n) {
                    let i = this.get(e);
                    if (null == i) return null;
                    let a = this._array.indexOf(i);
                    if (-1 === a) return null;
                    let l = [];
                    for (let e = a - 1; e >= 0 && (-1 === t || l.length < t); e--)(null == n || n(this._array[e])) && l.unshift(this._array[e]);
                    return l
                }
                has(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null != this._map[e] || t && (this._before.has(e) || this._after.has(e))
                }
                indexOf(e) {
                    let t = -1;
                    return this._array.find((n, i) => n.id === e && (t = i, !0)), t
                }
                hasPresent() {
                    return this._after.length > 0 && this._after.wasAtEdge || !this.hasMoreAfter
                }
                hasBeforeCached(e) {
                    if (this.length > 0 && this._before.length > 0) {
                        let t = this.first();
                        return null != t && t.id === e
                    }
                    return !1
                }
                hasAfterCached(e) {
                    if (this.length > 0 && this._after.length > 0) {
                        let t = this.last();
                        return null != t && t.id === e
                    }
                    return !1
                }
                update(e, t) {
                    let n = this._map[e];
                    if (null == n) return this._before.has(e) ? this.mutate(n => n._before.update(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.update(e, t), !0) : this;
                    let i = t(n);
                    return this.mutate(e => {
                        e._map[n.id] = i, e._array[e._array.indexOf(n)] = i
                    }, !0)
                }
                replace(e, t) {
                    let n = this._map[e];
                    if (null == n) return this._before.has(e) ? this.mutate(n => n._before.replace(e, t), !0) : this._after.has(e) ? this.mutate(n => n._after.replace(e, t), !0) : this;
                    return this.mutate(i => {
                        delete i._map[e], i._map[t.id] = t, i._array[i._array.indexOf(n)] = t
                    }, !0)
                }
                remove(e) {
                    return this.mutate(t => {
                        delete t._map[e], t._array = t._array.filter(t => t.id !== e), t._before.remove(e), t._after.remove(e)
                    }, !0)
                }
                removeMany(e) {
                    return e.some(e => this.has(e)) ? this.mutate(t => {
                        a.each(e, e => {
                            delete t._map[e]
                        }), t._array = t._array.filter(t => -1 === e.indexOf(t.id)), t._before.removeMany(e), t._after.removeMany(e)
                    }, !0) : this
                }
                merge(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    return this.mutate(i => {
                        i._merge(e, t, n)
                    }, !0)
                }
                _merge(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (e = e.filter(e => {
                            let t = this._map[e.id];
                            return this._map[e.id] = e, null == t || (this._array[this._array.indexOf(t)] = e, !1)
                        }), n) {
                        let e = t ? this._before : this._after;
                        e.clear()
                    }
                    this._array = t ? [...e, ...this._array] : [...this._array, ...e]
                }
                mergeDelta() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    return this.mutate(i => {
                        i._before.clear(), i._after.clear();
                        let a = new Set(n);
                        e.forEach(e => a.add(e.id)), t.forEach(e => a.add(e.id)), i._array = i._array.filter(e => !a.has(e.id)).concat(e.map(e => (0, u.createMessageRecord)(e)), t.map(e => (0, u.createMessageRecord)(e))).sort((e, t) => o.default.compare(e.id, t.id))
                    })
                }
                _clearMessages() {
                    this._array = [], this._map = {}
                }
                reset(e) {
                    return this.mutate(t => {
                        t._array = e, t._map = {}, e.forEach(e => t._map[e.id] = e), t._before.clear(), t._after.clear()
                    })
                }
                truncateTop(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = this._array.length - e;
                    return n <= 0 ? this : this.mutate(e => {
                        for (let t = 0; t < n; t++) delete e._map[e._array[t].id];
                        e._before.cache(e._array.slice(0, n), !e.hasMoreBefore), e._array = e._array.slice(n), e.hasMoreBefore = !0
                    }, t)
                }
                truncateBottom(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return this._array.length <= e ? this : this.mutate(t => {
                        for (let n = e; n < this._array.length; n++) delete t._map[t._array[n].id];
                        t._after.cache(t._array.slice(e, this._array.length), !t.hasMoreAfter), t._array = t._array.slice(0, e), t.hasMoreAfter = !0
                    }, t)
                }
                jumpToPresent(e) {
                    return this.mutate(t => {
                        let n = t._after.extractAll();
                        t.hasMoreAfter = !1;
                        let i = Math.max(n.length - e, 0),
                            a = n.slice(i);
                        n.splice(i), t._before.cache(t._array), t._before.cache(n), t._clearMessages(), t._merge(a), t.hasMoreBefore = t._before.length > 0, t.jumped = !0, t.jumpTargetId = null, t.jumpTargetOffset = 0, t.jumpedToPresent = !0, t.jumpFlash = !1, t.jumpReturnTargetId = null, t.jumpSequenceId = t.jumpSequenceId + 1, t.ready = !0, t.loadingMore = !1
                    }, !0)
                }
                jumpToMessage(e) {
                    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        n = arguments.length > 2 ? arguments[2] : void 0,
                        i = arguments.length > 3 ? arguments[3] : void 0,
                        a = arguments.length > 4 ? arguments[4] : void 0;
                    return this.mutate(l => {
                        l.jumped = !0, l.jumpedToPresent = !1, l.jumpType = null != a ? a : s.JumpTypes.ANIMATED, l.jumpTargetId = e, l.jumpTargetOffset = null != e && null != n ? n : 0, l.jumpSequenceId = l.jumpSequenceId + 1, l.jumpFlash = t, l.jumpReturnTargetId = i, l.ready = !0, l.loadingMore = !1
                    }, !1)
                }
                focusOnMessage(e) {
                    return this.mutate(t => {
                        t.focusTargetId = e, t.ready = !0, t.loadingMore = !1
                    }, !1)
                }
                loadFromCache(e, t) {
                    return this.mutate(n => {
                        let i = e ? n._before : n._after;
                        n._merge(i.extract(t), e);
                        let a = i.length > 0 || !i.wasAtEdge;
                        e ? n.hasMoreBefore = a : n.hasMoreAfter = a, n.ready = !0, n.loadingMore = !1
                    }, !0)
                }
                truncate(e, t) {
                    return this.length <= c.MAX_LOADED_MESSAGES ? this : e ? this.truncateBottom(c.TRUNCATED_MESSAGE_VIEW_SIZE) : t ? this.truncateTop(c.TRUNCATED_MESSAGE_VIEW_SIZE) : this
                }
                receiveMessage(e) {
                    var t, n;
                    let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                        a = null == e.nonce ? null : this.get(e.nonce, !0);
                    if (null != a && ((null === (t = e.author) || void 0 === t ? void 0 : t.id) === (null === (n = a.author) || void 0 === n ? void 0 : n.id) || null != e.interaction && e.interaction.user.id === a.author.id) && null != e.nonce && a.id === e.nonce) {
                        let t = (0, u.createMessageRecord)(e);
                        return null != a.interactionData && (t.interactionData = a.interactionData), this.replace(e.nonce, t)
                    }
                    if (this.hasMoreAfter) this._after.wasAtEdge && (this._after.wasAtEdge = !1);
                    else {
                        let t = l.default.getCurrentConfig({
                                location: "2ecb25_1"
                            }, {
                                autoTrackExposure: !1
                            }).enabled ? (0, u.createMessageRecord)(e) : _(this, e),
                            n = this.merge([t]);
                        return i ? n.truncateTop(c.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : this.length > c.MAX_LOADED_MESSAGES ? n.truncateBottom(c.TRUNCATED_MESSAGE_VIEW_SIZE, !1) : n
                    }
                    return this
                }
                receivePushNotification(e) {
                    let t = null == e.nonce ? null : this.get(e.nonce, !0);
                    return null != t ? this : this.mutate({
                        ready: !0,
                        cached: !0
                    }).merge([_(this, e)])
                }
                loadStart(e) {
                    var t, n, i, a;
                    return this.mutate({
                        loadingMore: !0,
                        jumped: null != e,
                        jumpedToPresent: null !== (t = null == e ? void 0 : e.present) && void 0 !== t && t,
                        jumpTargetId: null !== (n = null == e ? void 0 : e.messageId) && void 0 !== n ? n : null,
                        jumpTargetOffset: null !== (i = null == e ? void 0 : e.offset) && void 0 !== i ? i : 0,
                        jumpReturnTargetId: null !== (a = null == e ? void 0 : e.returnMessageId) && void 0 !== a ? a : null,
                        ready: null == e && this.ready
                    })
                }
                loadComplete(e) {
                    var t, n, i, r, o, d, c, E, f, h, p;
                    let T = [...e.newMessages],
                        C = null !== (t = e.isBefore) && void 0 !== t && t,
                        m = null !== (n = e.isAfter) && void 0 !== n && n,
                        S = null !== (i = e.jump) && void 0 !== i ? i : null,
                        I = null !== (r = e.hasMoreBefore) && void 0 !== r && r,
                        g = null !== (o = e.hasMoreAfter) && void 0 !== o && o,
                        A = null !== (d = e.cached) && void 0 !== d && d,
                        N = a(T).reverse().map(l.default.getCurrentConfig({
                            location: "2ecb25_2"
                        }, {
                            autoTrackExposure: !1
                        }).enabled ? e => (0, u.createMessageRecord)(e) : e => _(this, e)).value(),
                        O = null;
                    return O = (O = (C || m) && null == S && this.ready ? this.merge(N, C, !0) : this.reset(N)).mutate({
                        ready: !0,
                        loadingMore: !1,
                        jumpType: null !== (c = null == S ? void 0 : S.jumpType) && void 0 !== c ? c : s.JumpTypes.ANIMATED,
                        jumpFlash: null !== (E = null == S ? void 0 : S.flash) && void 0 !== E && E,
                        jumped: null != S,
                        jumpedToPresent: null !== (f = null == S ? void 0 : S.present) && void 0 !== f && f,
                        jumpTargetId: null !== (h = null == S ? void 0 : S.messageId) && void 0 !== h ? h : null,
                        jumpTargetOffset: null != S && null != S.messageId && null != S.offset ? S.offset : 0,
                        jumpSequenceId: null != S ? O.jumpSequenceId + 1 : O.jumpSequenceId,
                        jumpReturnTargetId: null !== (p = null == S ? void 0 : S.returnMessageId) && void 0 !== p ? p : null,
                        hasMoreBefore: null == S && m ? O.hasMoreBefore : I,
                        hasMoreAfter: null == S && C ? O.hasMoreAfter : g,
                        cached: A,
                        hasFetched: e.hasFetched,
                        error: !1
                    })
                }
                addCachedMessages(e, t) {
                    (0, r.requireSortedDescending)(e);
                    let n = e.map(e => _(this, e)).reverse();
                    return this._array.filter(e => !n.some(t => t.id === e.id)).forEach(e => d.insert(n, e, (e, t) => o.default.compare(e.id, t.id))), this.reset(n).mutate({
                        ready: !0,
                        cached: t,
                        error: !1
                    })
                }
                constructor(e) {
                    this._array = [], this._map = {}, this.channelId = e, this.ready = !1, this.jumpTargetId = null, this.jumpTargetOffset = 0, this.jumpSequenceId = 1, this.jumped = !1, this.jumpedToPresent = !1, this.jumpType = s.JumpTypes.ANIMATED, this.jumpFlash = !0, this.jumpReturnTargetId = null, this.hasMoreBefore = !0, this.hasMoreAfter = !1, this.loadingMore = !1, this.revealedMessageId = null, this._clearMessages(), this._before = new E(!0), this._after = new E(!1), this.cached = !1, this.hasFetched = !1, this.error = !1
                }
            }
            f._channelMessages = {};
            var h = f