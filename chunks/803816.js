            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                l = n("446674"),
                i = n("77078"),
                r = n("260365"),
                o = n("823411"),
                u = n("968194"),
                d = n("658457"),
                c = n("286509"),
                f = n("676223"),
                m = n("407908"),
                E = n("649486"),
                _ = n("860285"),
                h = n("769791"),
                p = n("662285"),
                I = n("866253"),
                T = n("981601"),
                g = n("671071"),
                C = n("766274"),
                S = n("86878"),
                A = n("925758"),
                N = n("26989"),
                M = n("686470"),
                v = n("52028"),
                x = n("697218"),
                O = n("953998"),
                L = n("535974"),
                R = n("763237"),
                y = n("315102"),
                P = n("773336"),
                D = n("602043"),
                j = n("901582"),
                U = n("49111"),
                b = n("954016");
            let G = {
                spotify: "Spotify"
            };
            class B extends s.PureComponent {
                getCoverImage() {
                    let {
                        activity: e,
                        connectedApplication: t,
                        application: n,
                        isPreview: a,
                        message: s
                    } = this.props;
                    if (null != n && (a || null != s && (0, f.default)(e, s, n.id))) {
                        let t = (0, c.default)(e, n.id);
                        if (null != t) return t
                    }
                    return null == n || n instanceof g.default ? null : y.default.getApplicationIconURL({
                        id: n.id,
                        icon: null != t ? t.coverImage : n.coverImage,
                        size: b.ACTIVITY_INVITE_COVER_IMAGE_SIZE
                    })
                }
                handleOpenSpotifyTrack(e) {
                    (0, h.openTrack)(e)
                }
                handleOpenSpotifyArtist(e, t, n) {
                    (0, h.openArtist)(e, t, n)
                }
                handleOpenSpotifyAlbum(e, t) {
                    (0, h.openAlbum)(e, t)
                }
                shouldRenderCustomButton() {
                    let {
                        isLaunchable: e,
                        application: t
                    } = this.props;
                    return null != t && null != t.primarySkuId && !e && P.isPlatformEmbedded
                }
                render() {
                    return (0, a.jsx)(j.default, {
                        section: j.default.Sections.APPLICATION_EMBED,
                        children: this.renderEmbed()
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        sending: !1
                    }, this.handleJoin = () => {
                        let {
                            activity: e,
                            analyticsLocations: t,
                            userId: n,
                            message: a,
                            channelId: s
                        } = this.props;
                        if (null != e && null != n && null != a && null != e.session_id && null != e.application_id) {
                            var l;
                            o.default.join({
                                userId: n,
                                sessionId: e.session_id,
                                applicationId: e.application_id,
                                channelId: s,
                                messageId: a.id
                            }), (0, m.default)({
                                type: U.AnalyticsGameOpenTypes.JOIN,
                                source: U.AnalyticsLocations.MESSAGE_EMBED,
                                userId: n,
                                applicationId: e.application_id,
                                partyId: null === (l = e.party) || void 0 === l ? void 0 : l.id,
                                messageId: a.id,
                                analyticsLocations: t
                            })
                        }
                    }, this.handleInvite = async () => {
                        let {
                            activity: e,
                            channelId: t
                        } = this.props;
                        if (null != e && null != t) try {
                            this.setState({
                                sending: !0
                            }), await r.default.sendActivityInvite({
                                type: U.ActivityActionTypes.JOIN,
                                channelId: t,
                                activity: e,
                                location: U.AnalyticsLocations.MESSAGE_EMBED
                            })
                        } finally {
                            this.setState({
                                sending: !1
                            })
                        }
                    }, this.handleSync = () => {
                        let {
                            activity: e,
                            userId: t
                        } = this.props;
                        null != e && null != t && u.sync(e, t)
                    }, this.handleDownloadApp = () => {
                        (0, i.openModal)(e => (0, a.jsx)(E.default, {
                            source: "Game Invite",
                            ...e
                        }))
                    }, this.renderUserPopout = (e, t) => {
                        let {
                            channelId: n,
                            guildId: s
                        } = this.props;
                        return null == n ? null : (0, a.jsx)(T.default, {
                            ...t,
                            userId: e.id,
                            guildId: null != s ? s : void 0,
                            channelId: n
                        })
                    }, this.renderSpotifyJoinButton = e => {
                        let {
                            channelId: t,
                            guildId: n
                        } = this.props;
                        return (0, a.jsx)(I.default, {
                            guildId: null != n ? n : void 0,
                            channelId: t,
                            source: "Invite Embed",
                            ...e
                        })
                    }, this.renderCustomButton = e => {
                        let {
                            application: t
                        } = this.props;
                        return (0, a.jsx)(d.default, {
                            ...e,
                            source: U.AnalyticsLocations.MESSAGE_EMBED,
                            application: t
                        })
                    }, this.renderEmbed = () => {
                        let e;
                        let {
                            activity: t,
                            partyId: n,
                            myPartyId: s,
                            application: l,
                            partyMembers: i,
                            isPreview: r,
                            isLaunching: o,
                            isSender: u,
                            activityActionType: d,
                            className: c,
                            channelId: f,
                            message: m,
                            hideParty: E,
                            isSyncable: _,
                            isLaunchable: h,
                            guildId: p
                        } = this.props;
                        if (null != l) e = l.name;
                        else if (null != n) {
                            let [t] = n.split(":");
                            e = G[t]
                        }
                        return (0, a.jsx)(R.default, {
                            activity: t,
                            partyId: n,
                            myPartyId: s,
                            applicationId: null != l ? l.id : null,
                            name: e,
                            partyMembers: i,
                            className: c,
                            coverImage: this.getCoverImage(),
                            isPreview: r,
                            isGameLaunchable: h,
                            isLoading: o || this.state.sending,
                            activityActionType: d,
                            isInBrowser: !P.isPlatformEmbedded,
                            isSyncable: _,
                            isSender: u,
                            channelId: f,
                            guildId: null != p ? p : void 0,
                            message: m,
                            hideParty: E,
                            onJoin: this.handleJoin,
                            onInvite: this.handleInvite,
                            onSync: this.handleSync,
                            onDownloadApp: this.handleDownloadApp,
                            onOpenSpotifyTrack: this.handleOpenSpotifyTrack,
                            onOpenSpotifyArtist: this.handleOpenSpotifyArtist,
                            onOpenSpotifyAlbum: this.handleOpenSpotifyAlbum,
                            renderUserPopout: this.renderUserPopout,
                            renderSpotifyJoinButton: this.renderSpotifyJoinButton,
                            renderCustomButton: this.shouldRenderCustomButton() ? this.renderCustomButton : null
                        })
                    }
                }
            }
            B.defaultProps = {
                isPreview: !1
            };
            var k = l.default.connectStores([p.default, A.default, v.default, M.default, _.default, L.default, S.default, O.default, x.default, N.default], e => {
                let {
                    activity: t,
                    analyticsLocations: n,
                    application: a,
                    partyId: s,
                    userId: l,
                    guildId: i
                } = e, {
                    id: r
                } = null != a ? a : {}, o = null != t && null != t.party && t.party.id === s ? A.default.getParty(t.party.id) : null, u = null != r ? v.default.getApplicationActivity(r) : v.default.findActivity(e => e.type === U.ActivityTypes.LISTENING), d = !1;
                null != r && (d = O.default.getState(r, U.ActivityActionTypes.JOIN) === U.ActivityActionStates.LOADING);
                let c = Array.from(null != o ? o : []).map(e => {
                        let t = null != i ? N.default.getMember(i, e) : null,
                            n = null != t ? t.nick : null,
                            a = x.default.getUser(e),
                            s = null == a;
                        return null == a && (a = new C.default({
                            discriminator: "0005"
                        })), {
                            user: a,
                            unknownUser: s,
                            nick: n
                        }
                    }),
                    f = null != t && p.default.canPlay(t),
                    m = p.default.getSyncingWith(),
                    E = null != m && null != l && m.userId === l;
                return {
                    analyticsLocations: n,
                    partyMembers: c,
                    connectedApplication: null != r ? S.default.getApplication(r) : null,
                    myPartyId: null != u && null != u.party ? u.party.id : null,
                    isLaunching: d,
                    isSyncable: f && !E,
                    isLaunchable: null != r && (0, D.isLaunchable)({
                        LibraryApplicationStore: M.default,
                        LaunchableGameStore: _.default,
                        DispatchApplicationStore: L.default,
                        ConnectedAppsStore: S.default,
                        applicationId: r
                    })
                }
            })(B)