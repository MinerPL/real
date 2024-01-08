            "use strict";
            n.r(t), n.d(t, {
                startStream: function() {
                    return y
                },
                setStreamPaused: function() {
                    return v
                },
                watchStream: function() {
                    return D
                },
                toggleSelfStreamHidden: function() {
                    return L
                },
                watchStreamAndTransitionToStream: function() {
                    return U
                },
                stopStream: function() {
                    return P
                },
                closeStream: function() {
                    return b
                },
                fetchStreamPreview: function() {
                    return G
                },
                notifyStreamStart: function() {
                    return k
                },
                updateStreamSettings: function() {
                    return F
                },
                changeStreamRegion: function() {
                    return w
                },
                stopOwnStream: function() {
                    return V
                },
                createBroadcastChannelOrStartStream: function() {
                    return H
                },
                joinPrivateChannelAndWatchStream: function() {
                    return x
                }
            });
            var i = n("627445"),
                a = n.n(i),
                l = n("759843"),
                s = n("872717"),
                r = n("913144"),
                u = n("76393"),
                o = n("374014"),
                d = n("709463"),
                c = n("870346"),
                _ = n("373469"),
                E = n("271938"),
                f = n("42203"),
                h = n("305961"),
                p = n("18494"),
                T = n("800762"),
                C = n("404008"),
                m = n("12307"),
                S = n("840707"),
                I = n("561288"),
                g = n("450911"),
                A = n("255397"),
                N = n("987317"),
                O = n("49111"),
                R = n("706530");

            function y(e, t, n) {
                r.default.dispatch({
                    type: "STREAM_START",
                    streamType: null != e ? R.StreamTypes.GUILD : R.StreamTypes.CALL,
                    guildId: e,
                    channelId: t,
                    appContext: __OVERLAY__ ? O.AppContext.OVERLAY : O.AppContext.APP,
                    ...n
                })
            }

            function v(e, t) {
                let n = (0, o.encodeStreamKey)(e);
                r.default.dispatch({
                    type: "STREAM_SET_PAUSED",
                    streamKey: n,
                    paused: t
                })
            }

            function M(e, t) {
                let n = f.default.getChannel(t);
                a(null != n, "Cannot join a null voice channel");
                let i = T.default.isInChannel(t);
                return !i && (0, C.isChannelFull)(n, T.default, h.default)
            }

            function D(e, t) {
                let n = null != u.default.getRemoteSessionId();
                if (n) return;
                let {
                    guildId: i,
                    channelId: a
                } = e;
                if (null != i && M(i, a)) return;
                let l = (0, o.encodeStreamKey)(e),
                    s = (null == t ? void 0 : t.forceMultiple) || _.default.getAllActiveStreamsForChannel(a).filter(e => {
                        let {
                            ownerId: t
                        } = e;
                        return t !== E.default.getId()
                    }).length >= 2;
                r.default.dispatch({
                    type: "STREAM_WATCH",
                    streamKey: l,
                    allowMultiple: s
                }), !s && (null == t || !t.noFocus) && A.default.selectParticipant(e.channelId, l)
            }

            function L(e, t) {
                r.default.dispatch({
                    type: "STREAM_UPDATE_SELF_HIDDEN",
                    channelId: e,
                    selfStreamHidden: t
                })
            }

            function U(e, t) {
                let {
                    guildId: n,
                    channelId: i
                } = e;
                if (null != n && M(n, i)) return;
                D(e, t);
                let a = c.default.getWindowOpen(O.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    l = p.default.getVoiceChannelId();
                (!a || l !== i) && (0, d.default)(e)
            }

            function P(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                b(e, t), r.default.dispatch({
                    type: "STREAM_STOP",
                    streamKey: e,
                    appContext: __OVERLAY__ ? O.AppContext.OVERLAY : O.AppContext.APP
                })
            }

            function b(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                r.default.dispatch({
                    type: "STREAM_CLOSE",
                    streamKey: e,
                    canShowFeedback: t
                })
            }
            async function G(e, t, n) {
                let i = (0, o.encodeStreamKey)({
                    streamType: null != e ? R.StreamTypes.GUILD : R.StreamTypes.CALL,
                    guildId: e,
                    channelId: t,
                    ownerId: n
                });
                r.default.dispatch({
                    type: "STREAM_PREVIEW_FETCH_START",
                    streamKey: i
                });
                try {
                    let e = await s.default.get({
                        url: O.Endpoints.STREAM_PREVIEW(i),
                        query: {
                            version: Date.now()
                        },
                        oldFormErrors: !0
                    });
                    r.default.dispatch({
                        type: "STREAM_PREVIEW_FETCH_SUCCESS",
                        streamKey: i,
                        previewURL: e.body.url
                    })
                } catch (t) {
                    let e;
                    429 === t.status && (e = 1e3 * t.body.retry_after), r.default.dispatch({
                        type: "STREAM_PREVIEW_FETCH_FAIL",
                        streamKey: i,
                        retryAfter: e
                    })
                }
            }
            async function k(e) {
                try {
                    await S.default.post({
                        url: O.Endpoints.STREAM_NOTIFY(e),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: l.NetworkActionNames.STREAM_NOTIFY
                        }
                    })
                } catch (e) {}
            }

            function F(e) {
                (0, m.trackStreamSettingsUpdate)(e.preset, e.resolution, e.frameRate), r.default.dispatch({
                    type: "STREAM_UPDATE_SETTINGS",
                    ...e
                })
            }

            function w(e, t) {
                s.default.patch({
                    url: O.Endpoints.STREAM(e),
                    body: {
                        region: t
                    },
                    oldFormErrors: !0
                })
            }

            function V() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = _.default.getCurrentUserActiveStream();
                null != t && P((0, o.encodeStreamKey)(t), e)
            }

            function H(e) {
                let {
                    channelId: t,
                    pid: n,
                    sourceId: i,
                    sourceName: a
                } = e;
                (null != n || null != i || null != a) && (r.default.dispatch({
                    type: "START_BROADCAST_STREAM",
                    options: {
                        pid: n,
                        sourceId: i,
                        sourceName: a
                    }
                }), null == t ? g.default.createBroadcastPrivateChannel() : y(null, t, {
                    pid: n,
                    sourceId: i,
                    sourceName: a
                }))
            }

            function x(e, t) {
                let n = E.default.getId(),
                    i = (0, o.decodeStreamKey)(t),
                    a = p.default.getVoiceChannelId();
                null != a && a !== e && N.default.disconnect(), g.default.addRecipient(e, n, void 0, () => {
                    I.default.call(e, !1, !1, null, () => {
                        U(i)
                    })
                })
            }