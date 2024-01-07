            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("424973"), n("222007");
            var a = n("37983");
            n("884691");
            var s = n("987317"),
                i = n("990766"),
                l = n("309570"),
                r = n("152311"),
                o = n("429928"),
                u = n("36539"),
                d = n("502651"),
                c = n("239380"),
                E = n("550368"),
                f = n("67139"),
                _ = n("62659"),
                h = n("636174"),
                C = n("49111");

            function T(e) {
                let {
                    party: t,
                    onChannelContextMenu: n
                } = e, {
                    voiceChannels: T,
                    currentActivities: I,
                    partiedMembers: S,
                    applicationStreams: N,
                    guildContext: A
                } = t, m = [], p = e => {
                    var t, n;
                    let {
                        length: s
                    } = m;
                    if (0 === s) {
                        m.push(e);
                        return
                    }
                    let i = m[s - 1],
                        l = "".concat(null !== (t = null == e ? void 0 : e.key) && void 0 !== t ? t : ""),
                        r = "".concat(null !== (n = null == i ? void 0 : i.key) && void 0 !== n ? n : ""),
                        o = r.startsWith("game") && l.startsWith("rich-presence");
                    m.push((0, a.jsx)(_.default.Separator, {
                        inset: o
                    }, "sep-".concat(l))), m.push(e)
                };
                for (let {
                        activity: e
                    }
                    of(T.length > 0 && T.forEach(e => {
                        let {
                            members: t,
                            channel: s,
                            guild: i
                        } = e;
                        p((0, a.jsx)(_.default.VoiceSection, {
                            guild: i,
                            channel: s,
                            members: t,
                            partySize: function(e, t) {
                                let n;
                                let a = e.length,
                                    s = 0;
                                if (null != t && null != t.party && null != t.party.size && t.party.size.length >= 2) {
                                    let a = t.party.size;
                                    s = Math.max(a[0] - e.length, 0), n = a[1]
                                } else n = a + s;
                                return {
                                    knownSize: a,
                                    unknownSize: s,
                                    totalSize: n
                                }
                            }(t),
                            onChannelContextMenu: n,
                            onGuildClick: () => {
                                (0, c.transitionToGuild)(i.id)
                            }
                        }, "voice-".concat(s.id)))
                    }), t.currentActivities))
                    if (null != e) {
                        let t = f.createBody(e);
                        if (null != t) {
                            p(t);
                            break
                        }
                    } return N.length > 0 && N.forEach(e => {
                    let {
                        stream: t,
                        streamUser: n,
                        activity: l
                    } = e;
                    p((0, a.jsx)(_.default.ApplicationStreamingSection, {
                        guildId: null == A ? void 0 : A.id,
                        user: n,
                        activity: l,
                        applicationStream: t,
                        onPreviewClick: () => {
                            s.default.selectVoiceChannel(t.channelId), (0, i.watchStreamAndTransitionToStream)(t)
                        }
                    }, "application-stream-".concat(t.ownerId)))
                }), I.forEach((e, t) => {
                    var n, s, i, c, f, N, m, g;
                    let {
                        activity: R,
                        game: O,
                        playingMembers: L,
                        activityUser: v
                    } = e;
                    if (null == R || null == R.type) return null;
                    if (I.length > 1 && R.type === C.ActivityTypes.PLAYING && !(0, l.default)(R) && null != O) p((0, a.jsx)(_.default.GameSection, {
                        icon: O.getIconURL(h.ICON_SIZE),
                        name: O.name,
                        partySize: {
                            knownSize: L.length,
                            unknownSize: 0,
                            totalSize: L.length
                        },
                        members: L
                    }, "game-".concat(null !== (n = R.session_id) && void 0 !== n ? n : t, "-").concat(null !== (s = R.application_id) && void 0 !== s ? s : t)));
                    else if ((0, r.default)(R)) {
                        let e = new Set(L.map(e => e.id)),
                            t = null === (i = T.find(e => null != e)) || void 0 === i ? void 0 : i.channel;
                        null != t && p((0, a.jsx)(_.default.EmbeddedActivitySection, {
                            activity: R,
                            participants: e,
                            channel: t,
                            guildId: t.guild_id
                        }, "embedded-activity-".concat(R.application_id)))
                    } else if ((null != R.assets || (0, l.default)(R)) && R.type === C.ActivityTypes.PLAYING) p((0, a.jsx)(_.default.RichPresenceSection, {
                        activity: R,
                        getAssetImage: E.getAssetImage
                    }, "rich-presence-".concat(null !== (c = R.session_id) && void 0 !== c ? c : t, "-").concat(v.id)));
                    else if ((0, d.default)(R)) {
                        let e = T.length > 0 && T[0].members.length > 1,
                            n = L.length > 1;
                        p((0, a.jsx)(_.default.TwitchSection, {
                            guildId: null == A ? void 0 : A.id,
                            activity: R,
                            user: e || n ? v : null,
                            getAssetImage: E.getAssetImage
                        }, "streaming-".concat(null !== (f = R.session_id) && void 0 !== f ? f : t)))
                    } else(0, o.default)(R) ? p((0, a.jsx)(_.default.SpotifySection, {
                        activity: R,
                        isSolo: 1 === S.length,
                        partySize: {
                            knownSize: L.length,
                            unknownSize: 0,
                            totalSize: L.length
                        },
                        getAssetImage: E.getAssetImage,
                        members: L
                    }, "spotify-".concat(null !== (N = R.session_id) && void 0 !== N ? N : t, "-").concat(v.id))) : (null != R.assets || (0, l.default)(R)) && R.type === C.ActivityTypes.LISTENING ? p((0, a.jsx)(_.default.RichPresenceSection, {
                        activity: R,
                        getAssetImage: E.getAssetImage
                    }, "rich-presence-".concat(null !== (m = R.session_id) && void 0 !== m ? m : t, "-").concat(v.id))) : (0, u.default)(R) && p((0, a.jsx)(_.default.XboxSection, {
                        title: O.name
                    }, "xbox-".concat(null !== (g = R.session_id) && void 0 !== g ? g : t)))
                }), m.length > 0 ? (0, a.jsx)(_.default.Body, {
                    children: m
                }) : null
            }