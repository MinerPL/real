            "use strict";
            n.r(t), n.d(t, {
                MESSAGE_SCAN_TIMEOUT: function() {
                    return A
                },
                MAX_TIMEOUT_FOR_JITTER: function() {
                    return N
                },
                default: function() {
                    return Q
                }
            }), n("222007"), n("808653");
            var i = n("345570"),
                a = n.n(i),
                l = n("452016"),
                s = n.n(l),
                r = n("913144"),
                u = n("689988"),
                o = n("692038"),
                d = n("256572"),
                c = n("271938"),
                _ = n("982108"),
                E = n("42203"),
                f = n("377253"),
                h = n("18494"),
                p = n("162771"),
                T = n("695681"),
                C = n("457971"),
                m = n("447435"),
                S = n("574933"),
                I = n("49111"),
                g = n("397336");
            let A = 3e3,
                N = 800,
                O = {};

            function R(e) {
                return "".concat(e.channel_id, ":").concat(e.id)
            }

            function y() {
                Object.values(O).forEach(e => {
                    let {
                        timeout: t
                    } = e;
                    clearTimeout(t)
                }), O = {}
            }

            function v(e, t) {
                if (null == e.id || null == e.channel_id) return;
                let n = R(e);
                if (null != O[n]) {
                    let {
                        timeout: i
                    } = O[n];
                    return function(e, t) {
                        let n = R(e),
                            {
                                setAt: i
                            } = O[n];
                        if (t === m.TimeoutCancelSource.UPDATE) {
                            var a, l;
                            let t = null !== (a = e.attachments) && void 0 !== a ? a : [],
                                n = null !== (l = e.embeds) && void 0 !== l ? l : [],
                                i = t.filter(e => (0, m.isMediaObscured)({
                                    type: m.ObscuredMediaTypes.Attachment,
                                    media: e
                                }, !0)),
                                s = n.filter(e => (0, m.isMediaObscured)({
                                    type: m.ObscuredMediaTypes.Embed,
                                    media: e
                                }, !0));
                            (0, m.trackExplicitMediaScanComplete)({
                                messageId: e.id,
                                channelId: e.channel_id,
                                numOfAttachments: t.length,
                                numOfEmbeds: n.length,
                                numOfExplicitAttachments: i.length,
                                numOfExplicitEmbeds: s.length
                            })
                        }(0, m.trackScanTiming)(i, t)
                    }(e, t), clearTimeout(i), delete O[n], !0
                }
                return !1
            }
            let M = (e, t) => {
                if (0 !== e.length) {
                    if (t) {
                        (0, T.sendMultiChannelMessagesForScanning)(e);
                        return
                    }(0, T.sendMessagesForScanning)(e[0].channel_id, e.map(e => e.id))
                }
            };

            function D(e, t) {
                let {
                    forceBatchScan: n = !1,
                    jitter: i = !1
                } = null != t ? t : {};
                e.forEach(e => {
                    let t = R(e);
                    null == O[t] && (O[t] = {
                        setAt: Date.now(),
                        timeout: setTimeout(() => {
                            ! function(e) {
                                if (v(e, m.TimeoutCancelSource.TIMEOUT)) {
                                    let t = f.default.getMessage(e.channel_id, e.id),
                                        {
                                            attachmentIds: n,
                                            embedIds: i
                                        } = k(t);
                                    (0, m.trackScanningTimedOut)({
                                        channelId: e.channel_id,
                                        messageId: e.id,
                                        attachmentIds: n,
                                        embedIds: i
                                    }), r.default.dispatch({
                                        type: "MESSAGE_EXPLICIT_CONTENT_SCAN_TIMEOUT",
                                        messageId: e.id,
                                        channelId: e.channel_id
                                    })
                                }
                            }(e)
                        }, A)
                    })
                });
                let a = n || new Set(e.map(e => e.channel_id)).size > 1;
                i ? setTimeout(() => {
                    let t = e.filter(e => null != O[R(e)]);
                    M(t, a)
                }, Math.random() * N) : M(e, a)
            }
            let L = e => null == e.content_scan_version || e.content_scan_version < 1,
                U = e => {
                    var t, n, i, a, l, s, r, u;
                    let o = null != (u = e).content_scan_version ? u.content_scan_version : null != u.contentScanVersion ? u.contentScanVersion : null;
                    return !((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0 || (null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (a = e.thumbnail) || void 0 === a ? void 0 : a.height) === 0 || (null === (l = e.image) || void 0 === l ? void 0 : l.width) === 0 && (null === (s = e.image) || void 0 === s ? void 0 : s.height) === 0 || "images" in e && (null === (r = e.images) || void 0 === r ? void 0 : r.some(e => 0 === e.width && 0 === e.height))) && (null == o || o < 1)
                };

            function P(e) {
                let {
                    attachmentIds: t,
                    embedIds: n
                } = k(e);
                return t.length > 0 || n.length > 0
            }

            function b(e) {
                let t = e.reduce((e, t) => {
                    var n, i, a, l, s, r, u, o;
                    null == e[t.channel_id] && (e[t.channel_id] = {
                        numOfAttachments: 0,
                        numOfAttachmentsPendingScan: 0,
                        numOfEmbeds: 0,
                        numOfEmbedsPendingScan: 0
                    });
                    let d = e[t.channel_id];
                    return d.numOfAttachments += null !== (s = null === (n = t.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0, d.numOfEmbeds += null !== (r = null === (i = t.embeds) || void 0 === i ? void 0 : i.length) && void 0 !== r ? r : 0, d.numOfAttachmentsPendingScan += null !== (u = null === (a = t.attachments) || void 0 === a ? void 0 : a.filter(L).length) && void 0 !== u ? u : 0, d.numOfEmbedsPendingScan += null !== (o = null == t ? void 0 : null === (l = t.embeds) || void 0 === l ? void 0 : l.filter(U).length) && void 0 !== o ? o : 0, {
                        ...e,
                        [t.channel_id]: d
                    }
                }, {});
                return t
            }

            function G(e) {
                return null != e && (null != e.attachments && e.attachments.length > 0 || null != e.embeds && e.embeds.length > 0)
            }

            function k(e) {
                var t, n, i, a, l, s, r, u;
                let o = null !== (l = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== l ? l : 0,
                    d = null !== (s = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0;
                if (0 === o && 0 === d) return {
                    attachmentIds: [],
                    embedIds: []
                };
                let c = null !== (r = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(L)) && void 0 !== r ? r : [],
                    _ = null !== (u = null == e ? void 0 : null === (a = e.embeds) || void 0 === a ? void 0 : a.filter(U)) && void 0 !== u ? u : [];
                return {
                    attachmentIds: c.map(e => e.id).filter(Boolean),
                    embedIds: _.map((e, t) => "embed_".concat(t)).filter(Boolean)
                }
            }

            function F(e, t) {
                let {
                    messagesPendingScan: n,
                    attributesByChannelId: i
                } = function(e) {
                    let t = e.filter(e => G(e) && (0, m.shouldRedactExplicitContent)(e)),
                        n = e.map(e => {
                            if (null != e && "referenced_message" in e && null != e.referenced_message && G(e.referenced_message)) return e.referenced_message
                        }).filter(function(e) {
                            return null != e
                        });
                    n.length > 0 && (t = [...t, ...n]);
                    let i = s(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                        a = i.filter(e => P(e));
                    return {
                        messagesPendingScan: a,
                        attributesByChannelId: b(i)
                    }
                }(e);
                return Object.entries(i).forEach(e => {
                    let [t, n] = e;
                    (0, m.trackExplicitMediaRedactableMessagedLoaded)({
                        channelId: t,
                        numOfAttachments: n.numOfAttachments,
                        numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                        numOfEmbeds: n.numOfEmbeds,
                        numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                    })
                }), !!(n.length > 0) && (D(n, t), !0)
            }

            function w(e) {
                var t, n, i, a;
                let {
                    message: l
                } = e;
                if (!(0, C.isEligibleForExplicitMediaRedaction)() || null == l.channel_id || null == l.id || (null === (t = l.author) || void 0 === t ? void 0 : t.id) === c.default.getId() || null == l.embeds && null == l.attachments) return !1;
                if (!P(l)) {
                    let e = null !== (a = null !== (i = f.default.getMessage(l.channel_id, l.id)) && void 0 !== i ? i : S.default.getMessage(l.id, l.channel_id)) && void 0 !== a ? a : null === (n = d.default.getMessage(l.channel_id, l.id)) || void 0 === n ? void 0 : n.message;
                    null != e && !P((0, o.updateMessageRecord)(e, l)) && v(e, m.TimeoutCancelSource.UPDATE)
                }
                let s = h.default.getChannelId(),
                    r = _.default.getCurrentSidebarChannelId(s),
                    u = l.channel_id === s || l.channel_id === r;
                if (!u) return !1;
                let E = f.default.getMessage(l.channel_id, l.id);
                return null != E && F([E])
            }

            function V(e) {
                var t, n;
                let {
                    channelId: i,
                    message: a,
                    optimistic: l,
                    isPushNotification: s
                } = e;
                if (!(0, C.isEligibleForExplicitMediaRedaction)() || l || s || null == i || (null === (t = a.author) || void 0 === t ? void 0 : t.id) === c.default.getId()) return !1;
                let r = h.default.getChannelId(),
                    u = _.default.getCurrentSidebarChannelId(r),
                    o = i === r || i === u,
                    d = E.default.getChannel(i);
                if (!o) return !1;
                let f = null === (n = null == d ? void 0 : d.isPrivate()) || void 0 === n || n,
                    p = (null == d ? void 0 : d.memberCount) == null || (null == d ? void 0 : d.memberCount) > 100;
                return F([a], {
                    jitter: f && p
                })
            }

            function H(e) {
                let {
                    channelId: t,
                    messages: n
                } = e;
                if (!(0, C.isEligibleForExplicitMediaRedaction)() || null == t || null == n) return !1;
                let i = h.default.getChannelId(),
                    a = _.default.getCurrentSidebarChannelId(i),
                    l = t === i || t === a;
                return !!l && F(n)
            }

            function x(e) {
                let {
                    messages: t
                } = e;
                if (!(0, C.isEligibleForExplicitMediaRedaction)() || null == t) return !1;
                let n = a(t),
                    i = s(n, (e, t) => e.id === t.id && e.channel_id === t.channel_id);
                return F(i)
            }

            function B(e) {
                let {
                    guildId: t,
                    threads: n
                } = e;
                if (null == n || !(0, C.isEligibleForExplicitMediaRedaction)()) return !1;
                let i = p.default.getGuildId() === t;
                if (!i) return !1;
                let a = Object.keys(n).map(e => n[e].first_message);
                return F(a)
            }

            function Y(e) {
                let {
                    guildId: t,
                    firstMessages: n
                } = e;
                if (null == n || !(0, C.isEligibleForExplicitMediaRedaction)()) return !1;
                let i = p.default.getGuildId() === t;
                return !!i && F(n, {
                    forceBatchScan: !0
                })
            }

            function K(e) {
                let {
                    channelId: t
                } = e;
                if (null == t || !(0, C.isEligibleForExplicitMediaRedaction)()) return !1;
                let n = t === h.default.getChannelId();
                return !!n && z(t)
            }

            function j(e) {
                let {
                    settings: t,
                    local: n
                } = e;
                if (!(0, C.isEligibleForExplicitMediaRedaction)() || !n || t.type !== g.UserSettingsTypes.PRELOADED_USER_SETTINGS) return !1;
                let i = h.default.getChannelId();
                return null != i && z(i)
            }

            function W(e) {
                let {
                    channelId: t,
                    chatOpen: n
                } = e;
                return !!(0, C.isEligibleForExplicitMediaRedaction)() && !!n && z(t)
            }

            function z(e) {
                let t = f.default.getMessages(e);
                return 0 !== t.length && function(e) {
                    let {
                        messagesPendingScan: t,
                        attributesByChannelId: n
                    } = function(e) {
                        let t = e.filter(e => G(e) && (0, m.shouldRedactExplicitContent)(e)),
                            n = e.map(e => {
                                if (I.MessageTypesWithLazyLoadedReferences.has(e.type) && null != e.messageReference) {
                                    let t = d.default.getMessageByReference(e.messageReference);
                                    if (t.state === d.ReferencedMessageState.LOADED && null != t.message && G(t.message)) return t.message
                                }
                            }).filter(function(e) {
                                return null != e
                            });
                        n.length > 0 && (t = [...t, ...n]);
                        let i = s(t, (e, t) => e.id === t.id && e.channel_id === t.channel_id),
                            a = i.filter(e => P(e));
                        return {
                            messagesPendingScan: a,
                            attributesByChannelId: b(i)
                        }
                    }(e);
                    return Object.entries(n).forEach(e => {
                        let [t, n] = e;
                        (0, m.trackExplicitMediaRedactableMessagedLoaded)({
                            channelId: t,
                            numOfAttachments: n.numOfAttachments,
                            numOfAttachmentsPendingScan: n.numOfAttachmentsPendingScan,
                            numOfEmbeds: n.numOfEmbeds,
                            numOfEmbedsPendingScan: n.numOfEmbedsPendingScan
                        })
                    }), !!(t.length > 0) && (D(t), !0)
                }(t)
            }
            class q extends u.default {
                constructor(...e) {
                    super(...e), this.actions = {
                        LOAD_MESSAGES_SUCCESS: H,
                        LOAD_FORUM_POSTS: B,
                        LOAD_THREADS_SUCCESS: Y,
                        LOAD_ARCHIVED_THREADS_SUCCESS: Y,
                        MESSAGE_CREATE: V,
                        MESSAGE_UPDATE: w,
                        LOGOUT: y,
                        SEARCH_FINISH: x,
                        CHANNEL_SELECT: K,
                        LOAD_PINNED_MESSAGES_SUCCESS: x,
                        USER_SETTINGS_PROTO_UPDATE: j,
                        CHANNEL_RTC_UPDATE_CHAT_OPEN: W
                    }
                }
            }
            var Q = new q