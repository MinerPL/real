            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            }), n("222007"), n("808653");
            var a = n("917351"),
                l = n.n(a),
                s = n("446674"),
                i = n("913144"),
                r = n("990766"),
                o = n("374014"),
                u = n("706530");
            let d = {},
                c = {},
                f = new Set;

            function h() {
                d = {}, c = {}
            }
            class p extends s.default.Store {
                getPreviewURL(e, t, n) {
                    let a = (0, o.encodeStreamKey)({
                            streamType: null != e ? u.StreamTypes.GUILD : u.StreamTypes.CALL,
                            guildId: e,
                            channelId: t,
                            ownerId: n
                        }),
                        l = d[a];
                    return null == l || Date.now() > l.expires ? (!f.has(a) && (f.add(a), Promise.resolve().then(() => {
                        (0, r.fetchStreamPreview)(e, t, n)
                    })), null) : l.url
                }
                getPreviewURLForStreamKey(e) {
                    let {
                        guildId: t,
                        channelId: n,
                        ownerId: a
                    } = (0, o.decodeStreamKey)(e);
                    return this.getPreviewURL(t, n, a)
                }
                getIsPreviewLoading(e, t, n) {
                    let a = (0, o.encodeStreamKey)({
                        streamType: null != e ? u.StreamTypes.GUILD : u.StreamTypes.CALL,
                        guildId: e,
                        channelId: t,
                        ownerId: n
                    });
                    return f.has(a)
                }
            }
            p.displayName = "ApplicationStreamPreviewStore";
            var m = new p(i.default, {
                CONNECTION_OPEN: h,
                LOGOUT: h,
                STREAM_PREVIEW_FETCH_START: function(e) {
                    var t;
                    let {
                        streamKey: n
                    } = e;
                    c[n] = (null !== (t = c[n]) && void 0 !== t ? t : 0) + 1, f.add(n)
                },
                STREAM_PREVIEW_FETCH_SUCCESS: function(e) {
                    let {
                        streamKey: t,
                        previewURL: n
                    } = e;
                    d[t] = {
                        url: n,
                        expires: Date.now() + 12e4
                    }, c[t] = 0, f.delete(t)
                },
                STREAM_PREVIEW_FETCH_FAIL: function(e) {
                    let {
                        streamKey: t,
                        retryAfter: n
                    } = e;
                    d[t] = {
                        url: null,
                        expires: Date.now() + (null != n ? n : 1e4 * c[t])
                    }, f.delete(t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return !(l.isEmpty(d) && l.isEmpty(c)) && t.reduce((e, t) => {
                        let {
                            userId: n,
                            guildId: a,
                            channelId: l,
                            selfStream: s
                        } = t;
                        if (s) return e;
                        let i = (0, o.encodeStreamKey)({
                            streamType: null != a ? u.StreamTypes.GUILD : u.StreamTypes.CALL,
                            guildId: a,
                            channelId: l,
                            ownerId: n
                        });
                        return delete d[i], delete c[i], !0
                    }, !1)
                }
            })