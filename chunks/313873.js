            "use strict";
            l.r(t), l.d(t, {
                Types: function() {
                    return n
                },
                default: function() {
                    return z
                }
            }), l("702976"), l("222007");
            var n, a, s = l("37983"),
                i = l("884691"),
                r = l("414456"),
                o = l.n(r),
                u = l("627445"),
                d = l.n(u),
                c = l("819855"),
                f = l("77078"),
                m = l("832627"),
                p = l("841098"),
                E = l("376556"),
                T = l("609030"),
                _ = l("309570"),
                S = l("985677"),
                h = l("429928"),
                I = l("36539"),
                A = l("502651"),
                g = l("419830"),
                v = l("925749"),
                C = l("342845"),
                N = l("239380"),
                y = l("118033"),
                O = l("315102"),
                M = l("568734"),
                x = l("474293"),
                R = l("339521"),
                L = l("145131"),
                P = l("953109"),
                b = l("98292"),
                D = l("280174"),
                j = l("963422"),
                U = l("587974"),
                F = l("49111"),
                w = l("954016"),
                G = l("782340"),
                k = l("843616");
            (a = n || (n = {})).USER_POPOUT = "UserPopout", a.USER_POPOUT_V2 = "UserPopoutV2", a.ACTIVITY_FEED = "ActivityFeed", a.PROFILE = "Profile", a.PROFILE_V2 = "ProfileV2", a.STREAM_PREVIEW = "StreamPreview", a.VOICE_CHANNEL = "VoiceChannel";
            let B = {
                    StreamPreview: [108, 60],
                    UserPopout: [108, 60],
                    UserPopoutV2: [108, 60],
                    VoiceChannel: [108, 60],
                    Profile: [162, 90],
                    ProfileV2: [162, 90],
                    ActivityFeed: [900, 500]
                },
                {
                    getAssetImage: Y
                } = l("550368"),
                V = (0, m.default)(class extends i.PureComponent {
                    render() {
                        return (0, s.jsx)("div", {
                            className: k.timestamp,
                            children: this.props.message
                        })
                    }
                });

            function H(e) {
                let t, {
                        activity: l
                    } = e,
                    n = (0, p.default)();
                if ((0, h.default)(l) && (t = F.PlatformTypes.SPOTIFY), null != l.platform && [F.ActivityGamePlatforms.PS4, F.ActivityGamePlatforms.PS5].includes(l.platform) && (t = F.PlatformTypes.PLAYSTATION), null == t) return null;
                let a = E.default.get(t);
                return (0, s.jsx)("img", {
                    alt: "",
                    src: (0, c.isThemeLight)(n) ? a.icon.lightSVG : a.icon.darkSVG,
                    className: k.platformIcon
                })
            }
            class W extends i.PureComponent {
                get activity() {
                    let {
                        activity: e,
                        activityGuild: t
                    } = this.props;
                    return null != t && (null == e ? void 0 : e.type) !== F.ActivityTypes.PLAYING && (null == e ? void 0 : e.type) !== F.ActivityTypes.WATCHING && (null == e ? void 0 : e.type) !== F.ActivityTypes.HANG_STATUS ? {
                        type: F.ActivityTypes.PLAYING,
                        name: G.default.Messages.SHARING_SCREEN
                    } : e
                }
                getTypeClass(e, t) {
                    return (0, x.getClass)(k, e, this.props.type, t)
                }
                isStreamerOnTypeProfile() {
                    return (0, A.default)(this.activity) && ("Profile" === this.props.type || "ProfileV2" === this.props.type)
                }
                isStreamerOnTypeActivityFeed() {
                    return (0, A.default)(this.activity) && "ActivityFeed" === this.props.type
                }
                renderHeader(e) {
                    let t;
                    let {
                        hideHeader: l,
                        activityGuild: n,
                        channel: a,
                        renderHeaderAccessory: i,
                        type: r
                    } = this.props, u = this.activity;
                    if (l || null == u) return null;
                    let {
                        name: d
                    } = u;
                    switch (u.type) {
                        case F.ActivityTypes.STREAMING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_LIVE_ON_PLATFORM.format({
                                platform: [F.PlatformTypes.TWITCH, F.PlatformTypes.YOUTUBE].includes(d.toLowerCase()) ? d : E.default.get(F.PlatformTypes.TWITCH).name
                            });
                            break;
                        case F.ActivityTypes.LISTENING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_LISTENING.format({
                                name: d
                            });
                            break;
                        case F.ActivityTypes.WATCHING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_WATCHING.format({
                                name: d
                            });
                            break;
                        case F.ActivityTypes.PLAYING:
                            t = (0, T.default)(u);
                            break;
                        case F.ActivityTypes.COMPETING:
                            t = G.default.Messages.USER_ACTIVITY_HEADER_COMPETING.format({
                                name: d
                            })
                    }
                    if (null != n) {
                        var c;
                        t = (0, M.hasFlag)(null !== (c = null == u ? void 0 : u.flags) && void 0 !== c ? c : 0, F.ActivityFlags.EMBEDDED) ? u.type === F.ActivityTypes.WATCHING ? G.default.Messages.EMBEDDED_ACTIVITIES_WATCHING_IN_GUILD.format({
                            guildName: n.name
                        }) : G.default.Messages.EMBEDDED_ACTIVITIES_PLAYING_IN_GUILD.format({
                            guildName: n.name
                        }) : G.default.Messages.USER_ACTIVITY_HEADER_STREAMING_TO_GUILD.format({
                            server: n.name
                        })
                    }(null == u ? void 0 : u.type) === F.ActivityTypes.HANG_STATUS && (t = G.default.Messages.STATUS_LEAD_IN_JUST);
                    let m = (0, g.getChannelIconComponent)(a, n);
                    return null != a && (t = a.name), (0, s.jsxs)("div", {
                        className: k.headerContainer,
                        children: [null != a && null !== m ? (0, s.jsx)(m, {
                            className: o(k.icon)
                        }) : null, (0, s.jsx)(f.Heading, {
                            className: (0, x.getClass)(k, "headerText", e ? "EmptyBody" : "Normal"),
                            variant: "heading-deprecated-12/semibold",
                            color: "ProfileV2" === r ? "header-primary" : void 0,
                            children: (0, s.jsx)(b.default, {
                                children: t
                            })
                        }), null == i ? void 0 : i()]
                    })
                }
                renderXboxImage() {
                    return (0, s.jsx)("div", {
                        className: k.assets,
                        children: (0, s.jsx)("img", {
                            alt: "",
                            src: E.default.get(F.PlatformTypes.XBOX).icon.customPNG,
                            className: o(this.getTypeClass("assetsLargeImage", "Xbox"))
                        })
                    })
                }
                renderImage(e) {
                    var t, l, n;
                    let a, r;
                    if (e.type === F.ActivityTypes.HANG_STATUS) return (0, s.jsx)("div", {
                        className: k.assets,
                        children: (0, s.jsx)(C.default, {
                            hangStatusActivity: e,
                            className: o(k.assetsHangStatus, this.getTypeClass("assetsSmallImage", "WithoutLargeImage"))
                        })
                    });
                    let {
                        type: u
                    } = this.props, {
                        assets: d,
                        application_id: c
                    } = e;
                    if (null == d || null == d.large_image && null == d.small_image) return null;
                    (0, A.default)(e) && (a = B[u]);
                    let m = (0, h.default)(e),
                        p = null != d.large_image ? (0, s.jsx)("img", {
                            alt: null !== (t = d.large_text) && void 0 !== t ? t : "",
                            src: Y(c, d.large_image, null != a ? a : [w.ImageSizes.LARGE, w.ImageSizes.LARGE]),
                            className: o(this.getTypeClass("assetsLargeImage", this.isStreamerOnTypeProfile() || this.isStreamerOnTypeActivityFeed() ? F.PlatformTypes.TWITCH : ""), {
                                [null !== (l = this.getTypeClass("assetsLargeMask")) && void 0 !== l ? l : ""]: null != d.small_image
                            }, {
                                [k.assetsLargeImageSpotify]: m
                            })
                        }) : null;
                    if (m) p = (0, s.jsx)(f.Anchor, {
                        onClick: this.handleOpenSpotifyAlbum,
                        children: p
                    });
                    else if ((0, y.isStageActivity)(e)) {
                        let t = (0, y.unpackStageChannelParty)(e);
                        if (null == t) return null;
                        p = (0, s.jsx)(U.default, {
                            mask: U.default.Masks.SQUIRCLE,
                            width: w.ImageSizes.SMALL,
                            height: w.ImageSizes.SMALL,
                            children: (0, s.jsx)("img", {
                                src: null !== (n = O.default.getGuildIconURL({
                                    id: t.guildId,
                                    icon: d.small_image,
                                    size: w.ImageSizes.SMALL
                                })) && void 0 !== n ? n : void 0,
                                className: k.assetsLargeImageVoiceChannel,
                                alt: ""
                            })
                        })
                    }
                    return (this.isStreamerOnTypeActivityFeed() && null != e.url && "" !== e.url && (p = (0, s.jsxs)("div", {
                        className: k.twitchImageContainer,
                        children: [(0, s.jsxs)("div", {
                            className: k.twitchImageOverlay,
                            children: [(0, s.jsx)(f.H, {
                                className: k.streamName,
                                children: e.name
                            }), (0, s.jsx)("div", {
                                className: k.streamGame,
                                children: G.default.Messages.STREAMER_PLAYING.format({
                                    game: e.details
                                })
                            })]
                        }), (0, s.jsx)(f.Anchor, {
                            className: k.twitchBackgroundImage,
                            href: e.url,
                            children: p
                        })]
                    })), !(0, y.isStageActivity)(e) && null != d.small_image && (r = (0, s.jsx)(f.Tooltip, {
                        text: "" !== d.small_text ? d.small_text : null,
                        position: "top",
                        children: e => {
                            var t;
                            return (0, s.jsx)("img", {
                                alt: null !== (t = d.small_text) && void 0 !== t ? t : "",
                                src: Y(c, d.small_image, [w.ImageSizes.SMALL, w.ImageSizes.SMALL]),
                                className: this.getTypeClass("assetsSmallImage", null == p ? "WithoutLargeImage" : void 0),
                                ...e
                            })
                        }
                    })), null == p) ? (0, s.jsx)("div", {
                        className: k.assets,
                        children: r
                    }) : (0, s.jsxs)("div", {
                        className: k.assets,
                        children: [(0, s.jsx)(f.Tooltip, {
                            text: null != d.large_text ? d.large_text : null,
                            position: "top",
                            children: e => {
                                let {
                                    onMouseEnter: t,
                                    onMouseLeave: l
                                } = e;
                                return null != p ? i.cloneElement(p, {
                                    onMouseEnter: t,
                                    onMouseLeave: l
                                }) : null
                            }
                        }), r]
                    })
                }
                renderGameImage(e) {
                    let {
                        user: t,
                        type: l,
                        application: n,
                        activityGuild: a
                    } = this.props;
                    return null != e.assets || (0, _.default)(e) || e.type !== F.ActivityTypes.PLAYING || "ActivityFeed" === l || t.bot ? null : null == n && null != a ? (0, s.jsx)("div", {
                        className: o(k.gameIcon, k.screenshareIcon)
                    }) : (0, s.jsx)(P.default, {
                        className: k.gameIcon,
                        game: n
                    })
                }
                renderName(e) {
                    let {
                        user: t,
                        application: l,
                        hideName: n
                    } = this.props;
                    if (n) return null;
                    let {
                        details: a,
                        type: i
                    } = e;
                    if (i === F.ActivityTypes.CUSTOM_STATUS) return null;
                    let r = (0, S.default)(e),
                        o = e.name,
                        u = o;
                    return (i === F.ActivityTypes.HANG_STATUS ? u = (0, v.getHangStatusText)(e) : r && null != l ? u = (0, s.jsx)("span", {
                        className: k.activityName,
                        children: u
                    }) : !r && (o = a, u = a, (0, h.default)(e) && null != e.sync_id && null != a ? u = (0, s.jsx)(f.Anchor, {
                        className: k.bodyLink,
                        onClick: this.handleOpenSpotifyTrack,
                        children: a
                    }) : (0, y.isStageActivity)(e) && (u = e.name)), null == u) ? null : (0, s.jsx)(f.Text, {
                        title: o,
                        variant: "text-sm/semibold",
                        className: (0, x.getClass)(k, "name", t.bot || this.isStreamerOnTypeProfile() ? "wrap" : "normal"),
                        children: u
                    })
                }
                renderDetails(e) {
                    let t;
                    let {
                        details: l,
                        state: n
                    } = e, {
                        activityGuild: a
                    } = this.props, i = l, r = l;
                    if (e.type === F.ActivityTypes.CUSTOM_STATUS) i = n;
                    else if (e.type === F.ActivityTypes.HANG_STATUS) i = null != a ? G.default.Messages.HANG_STATUS_LOCATION.format({
                        guildName: a.name
                    }) : null, t = null != a ? () => {
                        (0, N.transitionToGuild)(a.id)
                    } : void 0;
                    else if (!(0, S.default)(e)) {
                        if (r = i = n, (0, h.default)(e) && null != n) i = G.default.Messages.USER_ACTIVITY_LISTENING_ARTISTS.format({
                            artists: r,
                            artistsHook: (t, l) => (0, s.jsx)(j.default, {
                                artists: n,
                                linkClassName: k.bodyLink,
                                canOpen: null != e.sync_id,
                                onOpenSpotifyArtist: this.handleOpenSpotifyArtist
                            }, l)
                        });
                        else if ((0, y.isStageActivity)(e)) {
                            var o;
                            i = null === (o = e.assets) || void 0 === o ? void 0 : o.small_text
                        }
                    }
                    return null == i || 0 === i.length ? null : ((0, A.default)(e) && (i = G.default.Messages.STREAMER_PLAYING.format({
                        game: i
                    })), null != t) ? (0, s.jsx)(f.Clickable, {
                        onClick: t,
                        title: null != r ? r : void 0,
                        className: k.clickableDetails,
                        children: i
                    }) : (0, s.jsx)("div", {
                        title: null != r ? r : void 0,
                        className: (0, A.default)(e) || (0, h.default)(e) ? k.detailsWrap : k.details,
                        children: i
                    })
                }
                renderTimePlayed(e) {
                    let {
                        activityGuild: t
                    } = this.props;
                    if (!(0, S.default)(e) || (0, h.default)(e)) return null;
                    let {
                        timestamps: l
                    } = e;
                    return null == l ? null : (0, _.default)(e) ? (0, s.jsx)(V, {
                        timestamps: l
                    }) : (0, s.jsx)(D.default, {
                        start: l.start,
                        location: D.default.Locations.USER_ACTIVITY,
                        className: k.playTime,
                        isApplicationStreaming: null != t
                    })
                }
                renderTimeBar(e) {
                    if (!(0, h.default)(e)) return null;
                    let {
                        timestamps: t
                    } = e;
                    if (null == t) return null;
                    let {
                        start: l,
                        end: n
                    } = t;
                    return null == l || null == n ? null : (0, s.jsx)(R.default, {
                        start: l,
                        end: n,
                        className: this.getTypeClass("timeBar"),
                        themed: "VoiceChannel" === this.props.type || "UserPopout" === this.props.type || "UserPopoutV2" === this.props.type || "ProfileV2" === this.props.type
                    })
                }
                renderState(e, t) {
                    var l, n;
                    let a;
                    let {
                        state: i,
                        party: r,
                        assets: o
                    } = e, u = i, d = u;
                    return (!(0, S.default)(e) && (d = u = null == o ? void 0 : o.large_text, (0, h.default)(e) && null != u && (u = G.default.Messages.USER_ACTIVITY_LISTENING_ALBUM.format({
                        album: d,
                        albumHook: (t, l) => null != e.sync_id && null != d ? (0, s.jsx)(f.Anchor, {
                            className: k.bodyLink,
                            onClick: this.handleOpenSpotifyAlbum,
                            children: d
                        }, l) : d
                    }))), null != u && 0 !== u.length && e.type !== F.ActivityTypes.CUSTOM_STATUS || (0, y.isStageActivity)(e)) ? ((null == r ? void 0 : r.size) == null && [(0, w.POKER_NIGHT_APPLICATION_ID)].includes(null !== (l = e.application_id) && void 0 !== l ? l : "") ? a = G.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                        count: "0",
                        max: null !== (n = null == t ? void 0 : t.getMaxParticipants()) && void 0 !== n ? n : 0
                    }) : (0, y.isStageActivity)(e) && (null == r ? void 0 : r.size) != null ? a = G.default.Messages.USER_ACTIVITY_STAGE_STATE_SIZE.format({
                        numSpeakers: r.size[0],
                        numListeners: r.size[1] - r.size[0]
                    }) : (null == r ? void 0 : r.size) != null && r.size.length >= 2 && (a = G.default.Messages.USER_ACTIVITY_STATE_SIZE.format({
                        count: r.size[0],
                        max: r.size[1]
                    })), (0, s.jsxs)("div", {
                        className: k.state,
                        children: [(0, s.jsx)("span", {
                            title: d,
                            children: u
                        }), null != a ? (0, s.jsxs)("span", {
                            children: [" ", a]
                        }) : null]
                    })) : null
                }
                render() {
                    let e;
                    let {
                        type: t,
                        renderActions: l,
                        className: n,
                        application: a
                    } = this.props, i = this.activity;
                    if (null == i || i.type === F.ActivityTypes.CUSTOM_STATUS) return null;
                    let r = "UserPopout" === t || "UserPopoutV2" === t,
                        u = "Profile" === t || "ProfileV2" === t,
                        d = "ActivityFeed" === t,
                        c = "StreamPreview" === t,
                        f = !1;
                    (0, I.default)(i) ? (e = this.renderXboxImage(), f = !0) : null == (e = this.renderImage(i)) && (f = null != (e = this.renderGameImage(i)));
                    let m = this.renderName(i),
                        p = this.renderDetails(i),
                        E = this.renderState(i, a),
                        T = this.renderTimePlayed(i),
                        _ = null != l ? l() : null,
                        S = this.renderTimeBar(i),
                        h = ![e, m, p, E, T, S, _].some(e => null != e);
                    return (0, s.jsxs)("div", {
                        className: o(this.getTypeClass("activity"), n),
                        children: [this.renderHeader(h), (0, s.jsxs)("div", {
                            className: f ? k.bodyAlignCenter : k.bodyNormal,
                            children: [e, this.isStreamerOnTypeActivityFeed() ? null : (0, s.jsxs)(L.default.Child, {
                                className: o((0, x.getClass)(k, "content", f ? "GameImage" : null != e ? "Images" : "NoImages", t)),
                                children: [m, p, E, T, r || c ? null : S, d ? _ : null]
                            }), u ? _ : null]
                        }), r ? S : null, r || c ? _ : null, (0, s.jsx)(H, {
                            activity: i
                        })]
                    })
                }
                constructor(...e) {
                    super(...e), this.handleOpenSpotifyTrack = () => {
                        let {
                            activity: e,
                            onOpenSpotifyTrack: t
                        } = this.props;
                        d(null != e, "Spotify activity was null"), null == t || t(e)
                    }, this.handleOpenSpotifyArtist = e => {
                        let {
                            activity: t,
                            onOpenSpotifyArtist: l,
                            user: n
                        } = this.props;
                        d(null != t, "Spotify activity was null"), null == l || l(t, n.id, e)
                    }, this.handleOpenSpotifyAlbum = () => {
                        let {
                            activity: e,
                            onOpenSpotifyAlbum: t,
                            user: l
                        } = this.props;
                        d(null != e, "Spotify activity was null"), null == t || t(e, l.id)
                    }
                }
            }
            W.Types = n;
            var z = W