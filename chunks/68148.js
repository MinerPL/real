            "use strict";
            n.r(t), n.d(t, {
                VoiceUserList: function() {
                    return O
                },
                default: function() {
                    return P
                }
            }), n("424973"), n("222007");
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("966900"),
                o = n("838048"),
                u = n("359902"),
                d = n("780624"),
                c = n("120606"),
                f = n("77078"),
                h = n("204947"),
                p = n("925749"),
                m = n("342845"),
                E = n("437825"),
                C = n("142303"),
                g = n("462579"),
                S = n("200639"),
                _ = n("97347"),
                I = n("998564"),
                T = n("420145"),
                v = n("82636"),
                x = n("980423"),
                N = n("158998"),
                A = n("49111"),
                M = n("99795"),
                R = n("171644"),
                j = n("782340"),
                L = n("593596");
            let O = e => {
                    let {
                        children: t,
                        collapsed: n = !1,
                        className: l
                    } = e;
                    return (0, a.jsx)("div", {
                        className: i(l, L.list, n ? L.listCollapse : L.listDefault),
                        role: "group",
                        children: t
                    })
                },
                y = e => {
                    let {
                        hangStatusActivity: t,
                        iconClassName: n,
                        isSelf: l
                    } = e;
                    return null == t ? (0, a.jsx)(f.TooltipContainer, {
                        className: L.iconSpacing,
                        text: j.default.Messages.HANG_STATUS_VC_ROW_ADD,
                        children: (0, a.jsx)(c.PlusLargeIcon, {
                            className: i(L.icon, n)
                        })
                    }, "add-status") : (0, a.jsx)(f.TooltipContainer, {
                        className: L.iconSpacing,
                        text: (0, p.getHangStatusText)(t),
                        children: (0, a.jsx)(m.default, {
                            hangStatusActivity: t,
                            className: i(L.hangStatusIcon, n, {
                                [L.selfHangStatus]: l
                            })
                        })
                    }, "hang-status")
                };
            class b extends l.Component {
                renderPrioritySpeaker() {
                    let {
                        speaking: e,
                        priority: t,
                        collapsed: n,
                        mute: l,
                        serverMute: s
                    } = this.props;
                    return t && !n ? (0, a.jsx)(f.Tooltip, {
                        text: j.default.Messages.PRIORITY_SPEAKER,
                        children: t => (0, a.jsx)("div", {
                            className: i(L.iconPriortySpeaker, {
                                [L.iconPriortySpeakerSpeaking]: !l && !s && e
                            }),
                            ...t
                        })
                    }) : null
                }
                renderAvatar() {
                    let {
                        speaking: e,
                        user: t,
                        size: n,
                        avatarContainerClass: l,
                        guildId: s
                    } = this.props;
                    return (0, a.jsx)("div", {
                        className: i(l, L.avatar, {
                            [L.avatarLarge]: n === A.OverlayAvatarSizes.LARGE,
                            [L.avatarSmall]: n === A.OverlayAvatarSizes.SMALL,
                            [L.avatarSpeaking]: e
                        }),
                        style: {
                            backgroundImage: "url(".concat(t.getAvatarURL(s, n === A.OverlayAvatarSizes.LARGE ? 38 : 24), ")")
                        }
                    })
                }
                renderName() {
                    let {
                        nick: e,
                        user: t,
                        collapsed: n,
                        speaking: l,
                        userNameClassName: s,
                        mute: r,
                        serverMute: o,
                        isGuest: u
                    } = this.props;
                    return n ? null : (0, a.jsxs)("div", {
                        className: i(s, {
                            [L.username]: !0,
                            [L.usernameSpeaking]: !r && !o && l
                        }),
                        children: [null != e ? e : N.default.getName(t), u ? (0, a.jsxs)("span", {
                            className: L.guestSuffix,
                            children: ["\xa0", j.default.Messages.GUEST_NAME_SUFFIX]
                        }) : ""]
                    })
                }
                renderIcons() {
                    let {
                        mute: e,
                        localMute: t,
                        localVideoDisabled: n,
                        serverMute: l,
                        deaf: s,
                        serverDeaf: r,
                        collapsed: o,
                        video: u,
                        isStreaming: d,
                        disabled: c,
                        isWatching: p,
                        iconClassName: m,
                        embeddedApplication: S,
                        otherClientSessionType: _,
                        voicePlatform: N,
                        hangStatusActivity: A,
                        showHangStatus: O,
                        isSelf: b
                    } = this.props;
                    if (o || c) return null;
                    let P = [],
                        U = (0, a.jsx)(D, {
                            iconClassName: m,
                            mute: e,
                            localMute: t,
                            serverMute: l,
                            deaf: s,
                            serverDeaf: r
                        });
                    return (u && (n ? P.push((0, a.jsx)(f.TooltipContainer, {
                        className: L.iconSpacing,
                        text: j.default.Messages.LOCAL_VIDEO_DISABLED,
                        children: (0, a.jsx)(C.default, {
                            className: i(L.icon, m),
                            foreground: L.strikethrough
                        })
                    }, "video")) : P.push((0, a.jsx)(f.TooltipContainer, {
                        className: L.iconSpacing,
                        text: j.default.Messages.VIDEO,
                        children: (0, a.jsx)(E.default, {
                            className: i(L.icon, m)
                        })
                    }, "video"))), null != S && P.push((0, a.jsx)(f.TooltipContainer, {
                        text: (0, h.default)(S.name),
                        className: L.iconSpacing,
                        children: (0, a.jsx)(v.default, {
                            className: i(L.icon, m)
                        })
                    }, "activity")), _ === R.GameConsoleTypes.XBOX || N === M.VoicePlatforms.XBOX ? P.push((0, a.jsx)("div", {
                        className: i(L.iconSpacing),
                        children: (0, a.jsx)(T.default, {
                            className: i(L.icon, m)
                        })
                    }, "xbox")) : (_ === R.GameConsoleTypes.PLAYSTATION || N === M.VoicePlatforms.PLAYSTATION) && P.push((0, a.jsx)("div", {
                        className: i(L.iconSpacing),
                        children: (0, a.jsx)(I.default, {
                            className: i(L.icon, m)
                        })
                    }, "playstation")), d ? P.push((0, a.jsx)("div", {
                        className: i(L.iconSpacing, L.liveIconSpacing),
                        children: (0, a.jsx)(x.default, {
                            size: x.default.Sizes.SMALL
                        })
                    }, "stream")) : p && P.push((0, a.jsx)(f.TooltipContainer, {
                        className: L.iconSpacing,
                        text: j.default.Messages.WATCH_STREAM_WATCHING,
                        children: (0, a.jsx)(g.default, {
                            className: i(L.icon, m)
                        })
                    }, "watch")), 0 !== P.length || null != U || O) ? (0, a.jsxs)("div", {
                        className: L.icons,
                        children: [U, P, O && (0, a.jsx)(y, {
                            hangStatusActivity: A,
                            iconClassName: m,
                            isSelf: b
                        })]
                    }) : null
                }
                render() {
                    let {
                        onClick: e,
                        onKeyDown: t,
                        flipped: n,
                        size: l,
                        className: s,
                        selected: r,
                        disabled: o,
                        overlap: u,
                        "aria-label": d,
                        tabIndex: c
                    } = this.props;
                    return (0, a.jsx)(f.Clickable, {
                        className: i(s, {
                            [L.voiceUser]: !0,
                            [L.overlap]: u,
                            [L.selected]: r,
                            [L.clickable]: null != e,
                            [L.userSmall]: l === A.OverlayAvatarSizes.SMALL,
                            [L.userLarge]: l === A.OverlayAvatarSizes.LARGE,
                            [L.disabled]: !r && o
                        }),
                        onClick: this.handleClick,
                        onDoubleClick: this.handleDoubleClick,
                        onContextMenu: this.handleContextMenu,
                        onMouseEnter: this.handleMouseEnter,
                        onMouseLeave: this.handleMouseLeave,
                        onMouseDown: this.handleMouseDown,
                        onKeyDown: t,
                        "aria-label": d,
                        tabIndex: c,
                        children: (0, a.jsxs)("div", {
                            className: i(L.content, {
                                [L.flipped]: n
                            }),
                            children: [this.renderPrioritySpeaker(), this.renderAvatar(), this.renderName(), this.renderIcons()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.handleClick = e => {
                        let {
                            onClick: t,
                            user: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.handleDoubleClick = e => {
                        let {
                            onDoubleClick: t,
                            user: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.handleContextMenu = e => {
                        let {
                            onContextMenu: t,
                            user: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.handleMouseLeave = e => {
                        let {
                            onMouseLeave: t,
                            user: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.handleMouseEnter = e => {
                        let {
                            onMouseEnter: t,
                            user: n
                        } = this.props;
                        null == t || t(e, n)
                    }, this.handleMouseDown = e => {
                        let {
                            onMouseDown: t,
                            user: n
                        } = this.props;
                        null == t || t(e, n)
                    }
                }
            }
            b.defaultProps = {
                avatarContainerClass: L.avatarContainer,
                userNameClassName: L.usernameFont,
                size: A.OverlayAvatarSizes.SMALL,
                selected: !1,
                disabled: !1
            };
            var P = b;

            function D(e) {
                let {
                    iconClassName: t,
                    mute: n,
                    localMute: l,
                    serverMute: s,
                    deaf: c,
                    serverDeaf: h
                } = e, p = (0, f.useRedesignIconContext)().enabled, m = [];
                if (n) {
                    let e;
                    if (p) {
                        let n;
                        n = s ? u.MicrophoneDenyIcon : l ? u.MicrophoneDenyIcon : d.MicrophoneSlashIcon, e = (0, a.jsx)(n, {
                            className: i(L.icon, t, {
                                [L.iconServer]: s
                            }),
                            color: "currentColor"
                        })
                    } else e = (0, a.jsx)(_.default, {
                        className: i(L.icon, t, {
                            [L.iconServer]: s
                        }),
                        foreground: l ? L.strikethrough : void 0
                    });
                    m.push((0, a.jsx)(f.TooltipContainer, {
                        text: l ? j.default.Messages.LOCAL_MUTED : s ? j.default.Messages.SERVER_MUTED : j.default.Messages.VOICE_CHANNEL_MUTED,
                        className: L.iconSpacing,
                        children: e
                    }, "mute"))
                }
                if (h || c) {
                    let e;
                    if (p) {
                        let n = h ? r.HeadphonesDenyIcon : o.HeadphonesSlashIcon;
                        e = (0, a.jsx)(n, {
                            className: i(L.icon, t, {
                                [L.iconServer]: h
                            }),
                            color: "currentColor"
                        })
                    } else e = (0, a.jsx)(S.default, {
                        className: i(L.icon, t, {
                            [L.iconServer]: h
                        })
                    });
                    m.push((0, a.jsx)(f.TooltipContainer, {
                        className: L.iconSpacing,
                        text: h ? j.default.Messages.SERVER_DEAFENED : j.default.Messages.VOICE_CHANNEL_DEAFENED,
                        children: e
                    }, "deaf"))
                }
                return 0 === m.length ? null : (0, a.jsx)(a.Fragment, {
                    children: m
                })
            }