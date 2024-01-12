            "use strict";
            n.r(t), n.d(t, {
                startStream: function() {
                    return N
                },
                setStreamPaused: function() {
                    return O
                },
                watchStream: function() {
                    return P
                },
                toggleSelfStreamHidden: function() {
                    return V
                },
                watchStreamAndTransitionToStream: function() {
                    return R
                },
                stopStream: function() {
                    return k
                },
                closeStream: function() {
                    return M
                },
                fetchStreamPreview: function() {
                    return w
                },
                notifyStreamStart: function() {
                    return L
                },
                updateStreamSettings: function() {
                    return U
                },
                changeStreamRegion: function() {
                    return G
                },
                stopOwnStream: function() {
                    return F
                },
                createBroadcastChannelOrStartStream: function() {
                    return x
                },
                joinPrivateChannelAndWatchStream: function() {
                    return B
                }
            });
            var s = n("627445"),
                i = n.n(s),
                r = n("759843"),
                a = n("872717"),
                o = n("913144"),
                d = n("76393"),
                u = n("374014"),
                l = n("709463"),
                f = n("870346"),
                _ = n("373469"),
                c = n("271938"),
                g = n("42203"),
                m = n("305961"),
                h = n("18494"),
                v = n("800762"),
                E = n("404008"),
                p = n("12307"),
                y = n("840707"),
                T = n("561288"),
                C = n("450911"),
                S = n("255397"),
                I = n("987317"),
                A = n("49111"),
                D = n("706530");

            function N(e, t, n) {
                o.default.dispatch({
                    type: "STREAM_START",
                    streamType: null != e ? D.StreamTypes.GUILD : D.StreamTypes.CALL,
                    guildId: e,
                    channelId: t,
                    appContext: __OVERLAY__ ? A.AppContext.OVERLAY : A.AppContext.APP,
                    ...n
                })
            }

            function O(e, t) {
                let n = (0, u.encodeStreamKey)(e);
                o.default.dispatch({
                    type: "STREAM_SET_PAUSED",
                    streamKey: n,
                    paused: t
                })
            }

            function b(e, t) {
                let n = g.default.getChannel(t);
                i(null != n, "Cannot join a null voice channel");
                let s = v.default.isInChannel(t);
                return !s && (0, E.isChannelFull)(n, v.default, m.default)
            }

            function P(e, t) {
                let n = null != d.default.getRemoteSessionId();
                if (n) return;
                let {
                    guildId: s,
                    channelId: i
                } = e;
                if (null != s && b(s, i)) return;
                let r = (0, u.encodeStreamKey)(e),
                    a = (null == t ? void 0 : t.forceMultiple) || _.default.getAllActiveStreamsForChannel(i).filter(e => {
                        let {
                            ownerId: t
                        } = e;
                        return t !== c.default.getId()
                    }).length >= 2;
                o.default.dispatch({
                    type: "STREAM_WATCH",
                    streamKey: r,
                    allowMultiple: a
                }), !a && (null == t || !t.noFocus) && S.default.selectParticipant(e.channelId, r)
            }

            function V(e, t) {
                o.default.dispatch({
                    type: "STREAM_UPDATE_SELF_HIDDEN",
                    channelId: e,
                    selfStreamHidden: t
                })
            }

            function R(e, t) {
                let {
                    guildId: n,
                    channelId: s
                } = e;
                if (null != n && b(n, s)) return;
                P(e, t);
                let i = f.default.getWindowOpen(A.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    r = h.default.getVoiceChannelId();
                (!i || r !== s) && (0, l.default)(e)
            }

            function k(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                M(e, t), o.default.dispatch({
                    type: "STREAM_STOP",
                    streamKey: e,
                    appContext: __OVERLAY__ ? A.AppContext.OVERLAY : A.AppContext.APP
                })
            }

            function M(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                o.default.dispatch({
                    type: "STREAM_CLOSE",
                    streamKey: e,
                    canShowFeedback: t
                })
            }
            async function w(e, t, n) {
                let s = (0, u.encodeStreamKey)({
                    streamType: null != e ? D.StreamTypes.GUILD : D.StreamTypes.CALL,
                    guildId: e,
                    channelId: t,
                    ownerId: n
                });
                o.default.dispatch({
                    type: "STREAM_PREVIEW_FETCH_START",
                    streamKey: s
                });
                try {
                    let e = await a.default.get({
                        url: A.Endpoints.STREAM_PREVIEW(s),
                        query: {
                            version: Date.now()
                        },
                        oldFormErrors: !0
                    });
                    o.default.dispatch({
                        type: "STREAM_PREVIEW_FETCH_SUCCESS",
                        streamKey: s,
                        previewURL: e.body.url
                    })
                } catch (t) {
                    let e;
                    429 === t.status && (e = 1e3 * t.body.retry_after), o.default.dispatch({
                        type: "STREAM_PREVIEW_FETCH_FAIL",
                        streamKey: s,
                        retryAfter: e
                    })
                }
            }
            async function L(e) {
                try {
                    await y.default.post({
                        url: A.Endpoints.STREAM_NOTIFY(e),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: r.NetworkActionNames.STREAM_NOTIFY
                        }
                    })
                } catch (e) {}
            }

            function U(e) {
                (0, p.trackStreamSettingsUpdate)(e.preset, e.resolution, e.frameRate), o.default.dispatch({
                    type: "STREAM_UPDATE_SETTINGS",
                    ...e
                })
            }

            function G(e, t) {
                a.default.patch({
                    url: A.Endpoints.STREAM(e),
                    body: {
                        region: t
                    },
                    oldFormErrors: !0
                })
            }

            function F() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = _.default.getCurrentUserActiveStream();
                null != t && k((0, u.encodeStreamKey)(t), e)
            }

            function x(e) {
                let {
                    channelId: t,
                    pid: n,
                    sourceId: s,
                    sourceName: i
                } = e;
                (null != n || null != s || null != i) && (o.default.dispatch({
                    type: "START_BROADCAST_STREAM",
                    options: {
                        pid: n,
                        sourceId: s,
                        sourceName: i
                    }
                }), null == t ? C.default.createBroadcastPrivateChannel() : N(null, t, {
                    pid: n,
                    sourceId: s,
                    sourceName: i
                }))
            }

            function B(e, t) {
                let n = c.default.getId(),
                    s = (0, u.decodeStreamKey)(t),
                    i = h.default.getVoiceChannelId();
                null != i && i !== e && I.default.disconnect(), C.default.addRecipient(e, n, void 0, () => {
                    T.default.call(e, !1, !1, null, () => {
                        R(s)
                    })
                })
            }