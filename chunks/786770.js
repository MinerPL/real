            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return X
                }
            }), n("222007"), n("424973");
            var i, a, l, s, o = n("627445"),
                r = n.n(o),
                d = n("748820"),
                u = n("446674"),
                c = n("913144"),
                f = n("539405"),
                h = n("415635"),
                p = n("387129"),
                g = n("981253"),
                m = n("931237"),
                E = n("37359"),
                S = n("364864"),
                v = n("523505"),
                y = n("47271"),
                C = n("386045"),
                N = n("969416"),
                O = n("827922"),
                T = n("271938"),
                I = n("42203"),
                _ = n("385649"),
                A = n("824563"),
                x = n("18494"),
                R = n("101125"),
                M = n("102985"),
                L = n("697218"),
                D = n("189857"),
                j = n("901165"),
                w = n("189771"),
                k = n("686069"),
                b = n("703370"),
                P = n("49111"),
                V = n("6791"),
                U = n("782340");
            (l = i || (i = {}))[l.GENERIC = 0] = "GENERIC", l[l.TEXT = 1] = "TEXT", l[l.INCOMING_CALL = 2] = "INCOMING_CALL", (s = a || (a = {}))[s.NORMAL = 0] = "NORMAL", s[s.HIGH = 1] = "HIGH", s[s.URGENT = 2] = "URGENT";
            let B = Object.freeze({
                    priority: 0,
                    duration: 5e3,
                    expirationExternallyManaged: !1,
                    type: 0
                }),
                F = [],
                H = (e, t, n) => {
                    let i = t ? P.OverlayNotificationStatus.TIMED_OUT : P.OverlayNotificationStatus.DISMISSED;
                    return setTimeout(() => f.default.updateNotificationStatus(e, i), null != n ? n : 5e3)
                };

            function G(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : P.OverlayNotificationStatus.DISMISSED;
                if (null == e) return !1;
                let n = F.findIndex(t => t.id === e);
                if (-1 === n) return !1;
                let i = F[n];
                clearTimeout(i.timerId), F = [...F], t === P.OverlayNotificationStatus.DISMISSED ? F.splice(n, 1) : F[n] = {
                    ...i,
                    status: t
                }
            }

            function W(e) {
                let t = F.length;
                return (F = F.filter(t => 1 !== t.type || t.channelId !== e || !1)).length !== t
            }

            function Y(e) {
                let t = F.find(t => 2 === t.type && t.channelId === e);
                return null != t ? t.id : null
            }

            function z(e, t) {
                let n = {
                    ...B,
                    ...t
                };
                if (2 !== n.priority && !j.default.isInstanceFocused()) return null;
                let i = (0, d.v4)(),
                    a = {
                        id: i,
                        status: P.OverlayNotificationStatus.ACTIVE,
                        timerId: H(i, n.expirationExternallyManaged, n.duration),
                        props: e,
                        ...n
                    };
                F = [...F];
                let l = F.findIndex(e => e.priority <= n.priority);
                if (-1 === l ? F.push(a) : F.splice(l, 0, a), F.length > 10) {
                    let e = F.pop();
                    clearTimeout(e.timerId)
                }
                return i
            }

            function K(e) {
                let {
                    channelId: t,
                    ringing: n
                } = e, i = Y(t), a = n.includes(T.default.getId());
                if (!a) return G(i);
                if (null != i) return !1;
                let l = I.default.getChannel(t);
                if (null == l || !l.isPrivate() || R.default.getStatus() === P.StatusTypes.DND) return !1;
                let s = F.find(e => 1 === e.type && e.channelId === t && e.messageType === P.MessageTypes.CALL);
                null != s && G(s.id), z((0, m.default)(l), {
                    priority: 1,
                    expirationExternallyManaged: !0,
                    type: 2,
                    channelId: l.id
                })
            }
            class Z extends u.default.Store {
                initialize() {
                    this.waitFor(I.default, L.default)
                }
                getNotifications() {
                    return F
                }
            }
            Z.displayName = "OverlayNotificationsStore";
            var X = new Z(c.default, __OVERLAY__ ? {
                OVERLAY_UPDATE_NOTIFICATION_STATUS: function(e) {
                    let {
                        notificationId: t,
                        status: n
                    } = e;
                    G(t, n)
                },
                OVERLAY_MOUNTED: function(e) {
                    let {
                        nudge: t
                    } = e, n = function(e) {
                        switch (e.type) {
                            case V.OverlayNudgeTypes.BROADCAST:
                                return (0, y.default)(e);
                            case V.OverlayNudgeTypes.GO_LIVE_VOICE:
                            case V.OverlayNudgeTypes.GO_LIVE_NON_VOICE:
                                return (0, g.default)(e);
                            case V.OverlayNudgeTypes.KEYBIND_INDICATORS:
                                return (0, O.default)(e);
                            case V.OverlayNudgeTypes.NEWS:
                            default:
                                return (0, v.default)(e)
                        }
                    }(t);
                    null != n && z(n, {
                        priority: 2,
                        duration: 8e3
                    })
                },
                OVERLAY_SET_INPUT_LOCKED: function(e) {
                    let {
                        locked: t
                    } = e;
                    if (t) return !1;
                    F = F.map(e => e.status === P.OverlayNotificationStatus.ACTIVE ? (clearTimeout(e.timerId), {
                        ...e,
                        timerId: H(e.id, e.expirationExternallyManaged)
                    }) : e)
                },
                MESSAGE_CREATE: function(e) {
                    var t, n, i;
                    let {
                        channelId: a,
                        message: l
                    } = e, s = I.default.getChannel(a), o = L.default.getUser(null === (t = l.author) || void 0 === t ? void 0 : t.id);
                    if (null == s || null == o) return !1;
                    if ((null === (n = l.activity) || void 0 === n ? void 0 : n.type) === P.ActivityActionTypes.JOIN || (null === (i = l.activity) || void 0 === i ? void 0 : i.type) === P.ActivityActionTypes.JOIN_REQUEST) {
                        if (!(0, w.shouldNotify)(l, a, !0, !0)) return !1;
                        let e = function(e, t, n) {
                            let i, a;
                            if (r(null != t.activity, "received null message activity"), n.id === T.default.getId()) return !1;
                            let l = b.default.getGame();
                            if (null == l) return !1;
                            switch (t.activity.type) {
                                case P.ActivityActionTypes.JOIN:
                                    if (null == (i = A.default.getApplicationActivity(n.id, l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                                    a = (0, h.default)(e, t, n, l, i);
                                    break;
                                case P.ActivityActionTypes.JOIN_REQUEST:
                                    if (null == (i = R.default.getApplicationActivity(l.id)) || null == i.party || i.party.id !== t.activity.party_id) return !1;
                                    a = (0, E.default)(e, n, l, i)
                            }
                            if (null == a) return !1;
                            let s = z(a, {
                                priority: 2,
                                expirationExternallyManaged: !0,
                                channelId: e.id
                            });
                            return null != s && H(s, !1, 3e4), !0
                        }(s, l, o);
                        if (!1 !== e) return e
                    }
                    if ((!j.default.isInstanceUILocked() || j.default.isPinned(P.OverlayWidgets.TEXT)) && a === x.default.getChannelId() || j.default.getTextChatNotificationMode() === P.OverlayNotificationTextChatTypes.DISABLED || M.default.disableNotifications || !(0, w.shouldNotify)(l, a)) return !1;
                    let d = !_.default.isSoundDisabled(D.MESSAGE_SOUND);
                    z((0, S.default)(s, l, o, d), {
                        type: 1,
                        channelId: s.id,
                        messageType: l.type
                    })
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && W(t)
                },
                MESSAGE_ACK: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return W(t)
                },
                CALL_CREATE: K,
                CALL_UPDATE: K,
                CALL_DELETE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    G(Y(t))
                },
                ACTIVITY_USER_ACTION: function(e) {
                    let t, {
                            actionType: n,
                            user: i,
                            applicationId: a
                        } = e,
                        l = b.default.getGame();
                    if (null == l || l.id !== a) return !1;
                    if (n === P.ActivityActionTypes.JOIN) t = (0, p.default)(i, l);
                    if (null == t) return !1;
                    z(t, {
                        priority: 2,
                        type: 0
                    })
                },
                CLIPS_SAVE_CLIP_START: function() {
                    z((0, N.createClipsNotification)(U.default.Messages.CLIPS_SAVE_START_NOTIFICATION_TITLE))
                },
                CLIPS_SAVE_CLIP: function() {
                    z((0, N.createClipsNotification)(U.default.Messages.CLIPS_NOTIFICATION_TITLE.format({
                        duration: (0, k.getSecondsSliderLabel)(C.default.getSettings().clipsLength / 1e3, !0)
                    })))
                },
                CLIPS_SAVE_CLIP_ERROR: function() {
                    z((0, N.createClipsNotification)(U.default.Messages.CLIPS_SAVE_ERROR_NOTIFICATION_TITLE))
                },
                STREAM_START: function(e) {
                    let t = (0, N.createClipsReminderNotification)();
                    null != t && z(t)
                }
            } : {})