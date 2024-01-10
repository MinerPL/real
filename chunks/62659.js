            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return ei
                }
            }), n("222007");
            var a, s, i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("446674"),
                d = n("669491"),
                c = n("77078"),
                E = n("832627"),
                f = n("997289"),
                _ = n("376556"),
                h = n("706508"),
                C = n("287585"),
                T = n("309570"),
                I = n("985677"),
                S = n("429928"),
                N = n("502651"),
                A = n("29088"),
                p = n("698372"),
                m = n("141962"),
                g = n("685665"),
                R = n("299285"),
                O = n("679653"),
                L = n("223913"),
                v = n("673527"),
                M = n("395763"),
                P = n("271938"),
                D = n("42203"),
                y = n("697218"),
                x = n("944832"),
                b = n("953109"),
                U = n("280174"),
                G = n("163466"),
                j = n("316887"),
                k = n("936629"),
                w = n("420145"),
                F = n("368121"),
                B = n("980423"),
                H = n("550368"),
                V = n("449008"),
                Y = n("158998"),
                W = n("356070"),
                K = n("49111"),
                z = n("782340"),
                q = n("732827");
            let Q = {
                    SMALL: 64,
                    LARGE: 160
                },
                Z = [14, 14, 12, 12, 10, 8, 6],
                X = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return (0, i.jsx)(c.Text, {
                        className: o(q.textContent, t),
                        variant: "text-sm/semibold",
                        children: e
                    })
                },
                J = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    return (0, i.jsx)(c.Text, {
                        className: o(q.textContent, t),
                        variant: "text-xs/normal",
                        children: e
                    })
                },
                $ = (0, E.default)(e => {
                    let {
                        message: t
                    } = e;
                    return (0, i.jsx)("div", {
                        className: q.timestamp,
                        children: t
                    })
                }),
                ee = e => {
                    let {
                        children: t
                    } = e;
                    return (0, i.jsx)("section", {
                        className: q.section,
                        children: t
                    })
                };
            class et extends l.Component {
                renderTimePlayed() {
                    let e;
                    let {
                        activity: t
                    } = this.props, {
                        timestamps: n
                    } = t;
                    return null == n || !(0, I.default)(t) || (0, S.default)(t) ? null : J(e = (0, T.default)(t) ? (0, i.jsx)($, {
                        timestamps: n
                    }) : (0, i.jsx)(U.default, {
                        start: n.start,
                        end: n.end,
                        location: U.default.Locations.USER_ACTIVITY,
                        className: q.playTime
                    }))
                }
                render() {
                    var e, t;
                    let {
                        activity: {
                            assets: a,
                            details: s,
                            state: l,
                            application_id: r
                        },
                        getAssetImage: u
                    } = this.props;
                    return (0, i.jsx)(ee, {
                        children: (0, i.jsxs)("div", {
                            className: q.activitySection,
                            children: [null != a && 0 !== Object.keys(a).length ? (0, i.jsxs)("div", {
                                className: q.activitySectionAssets,
                                children: [(0, i.jsx)("img", {
                                    alt: null !== (e = a.large_text) && void 0 !== e ? e : "",
                                    src: u(r, a.large_image, [Q.LARGE, Q.LARGE]),
                                    className: o(q.largeImage, {
                                        [q.largeImageMask]: null != a.small_image
                                    })
                                }), null != a.small_image ? (0, i.jsx)("img", {
                                    alt: null !== (t = a.small_text) && void 0 !== t ? t : "",
                                    src: u(r, a.small_image, [Q.SMALL, Q.SMALL]),
                                    className: q.smallImage
                                }) : null]
                            }) : (0, i.jsx)("div", {
                                className: q.activitySectionAssets,
                                children: (0, i.jsx)("img", {
                                    alt: "",
                                    src: n("992739"),
                                    className: q.largeImage
                                })
                            }), (0, i.jsxs)("div", {
                                children: [X(null != s && "" !== s ? s : z.default.Messages.USER_ACTIVITY_HEADER_PLAYING), null != l ? J(l) : null, this.renderTimePlayed()]
                            })]
                        })
                    })
                }
            }(s = a || (a = {})).XBOX = "XBOX", s.SPOTIFY = "SPOTIFY", s.MULTIPLE = "MULTIPLE";
            let en = e => {
                let t, {
                    src: n,
                    onClick: a,
                    onContextMenu: s
                } = e;
                switch (n) {
                    case "XBOX":
                        t = (0, i.jsx)(w.default, {
                            className: q.headerIcon,
                            color: d.default.unsafe_rawColors.PRIMARY_300.css
                        });
                        break;
                    case "SPOTIFY":
                        t = (0, i.jsx)(k.default, {
                            className: q.headerIcon,
                            color: d.default.unsafe_rawColors.SPOTIFY.css
                        });
                        break;
                    case "MULTIPLE":
                        t = (0, i.jsx)("div", {
                            className: q.multipleIconWrapper,
                            children: (0, i.jsx)(j.default, {
                                className: o(q.headerIcon, q.multipleIcon),
                                color: d.default.unsafe_rawColors.PRIMARY_300.css
                            })
                        });
                        break;
                    default:
                        t = (0, i.jsx)("img", {
                            src: null != n ? n : void 0,
                            alt: "",
                            className: q.headerIcon
                        })
                }
                return null != a || null != s ? (0, i.jsx)(c.Clickable, {
                    onClick: a,
                    className: o(null != a ? q.clickableIcon : ""),
                    onContextMenu: s,
                    children: t
                }) : t
            };
            en.Src = a;
            let ea = e => {
                let {
                    priorityUser: t,
                    title: n,
                    subtitle: a,
                    icon: s,
                    onContextMenu: l,
                    guildId: r
                } = e;
                return (0, i.jsxs)("header", {
                    className: null != s ? q.headerFull : q.headerSimple,
                    children: [(0, i.jsx)(c.Avatar, {
                        src: t.user.getAvatarURL(r, 32),
                        "aria-label": t.user.username,
                        size: c.AvatarSizes.SIZE_32,
                        className: q.headerAvatar,
                        status: t.status,
                        onContextMenu: l
                    }), (0, i.jsxs)("div", {
                        className: q.headerDetails,
                        children: [(0, i.jsx)(c.Text, {
                            className: o(q.textContent),
                            variant: "text-md/semibold",
                            children: n
                        }), (0, i.jsx)(c.Text, {
                            color: "header-secondary",
                            className: q.textContent,
                            variant: "text-sm/normal",
                            children: a
                        })]
                    }), null != s ? s : null]
                })
            };
            ea.Icon = en;
            let es = e => {
                let {
                    children: t,
                    className: n,
                    ...a
                } = e;
                return (0, i.jsx)(c.FocusRing, {
                    children: (0, i.jsx)(G.default, {
                        className: o(n, q.wrapper),
                        padded: !0,
                        ...a,
                        children: t
                    })
                })
            };
            es.Header = ea, es.Body = e => {
                let {
                    children: t
                } = e;
                return (0, i.jsx)(G.default, {
                    inset: !0,
                    padded: !1,
                    className: q.body,
                    children: t
                })
            }, es.Separator = e => {
                let {
                    inset: t,
                    className: n
                } = e;
                return (0, i.jsx)("div", {
                    className: o(q.separator, {
                        [q.inset]: t
                    }, n)
                })
            }, es.VoiceSection = e => {
                var t, n;
                let {
                    guild: a,
                    channel: s,
                    onGuildClick: r,
                    partySize: u,
                    members: d,
                    onChannelContextMenu: E
                } = e, f = l.useRef(null), _ = (0, O.default)(s, !0);
                return (0, i.jsx)(ee, {
                    children: (0, i.jsxs)("div", {
                        className: q.voiceSection,
                        ref: f,
                        onContextMenu: e => E(e, s),
                        children: [(0, i.jsx)(c.Clickable, {
                            onClick: r,
                            "aria-hidden": !0,
                            tabIndex: -1,
                            children: (0, i.jsxs)("div", {
                                className: q.voiceSectionAssets,
                                children: [null != a.getIconURL(32) ? (0, i.jsx)("img", {
                                    alt: "",
                                    src: null !== (t = a.getIconURL(32)) && void 0 !== t ? t : void 0,
                                    className: o(q.voiceSectionGuildImage, q.largeImageMask)
                                }) : (0, i.jsx)("div", {
                                    className: q.voiceSectionNoGuildImageWrapper,
                                    children: (0, i.jsx)("div", {
                                        className: q.voiceSectionNoGuildImage,
                                        style: {
                                            fontSize: null !== (n = Z[a.acronym.length]) && void 0 !== n ? n : Z[Z.length - 1]
                                        },
                                        children: a.acronym
                                    })
                                }), (0, i.jsx)("div", {
                                    className: q.voiceSectionIconWrapper,
                                    children: (0, i.jsx)(F.default, {
                                        className: q.voiceSectionIcon
                                    })
                                })]
                            })
                        }), (0, i.jsx)(c.Clickable, {
                            onClick: r,
                            focusProps: {
                                ringTarget: f
                            },
                            children: (0, i.jsxs)("div", {
                                className: q.voiceSectionDetails,
                                children: [X(a.toString(), q.voiceSectionText), J(_, q.voiceSectionText)]
                            })
                        }), (0, i.jsx)(W.default, {
                            partySize: u,
                            members: d,
                            guildId: a.id
                        })]
                    })
                })
            }, es.GameSection = e => {
                let {
                    icon: t,
                    name: n,
                    partySize: a,
                    members: s
                } = e;
                return (0, i.jsx)(ee, {
                    children: (0, i.jsxs)("div", {
                        className: q.gameSection,
                        children: [null != t ? (0, i.jsx)("img", {
                            alt: "",
                            src: t,
                            className: q.gameSectionIcon
                        }) : null, (0, i.jsxs)("div", {
                            children: [X(n), J(z.default.Messages.ACTIVITY_FEED_SINGLE_MEMBER_LIST_HEADER.format({
                                memberCount: a.totalSize
                            }))]
                        }), (0, i.jsx)(W.default, {
                            partySize: a,
                            members: s
                        })]
                    })
                })
            }, es.RichPresenceSection = et, es.XboxSection = e => {
                let {
                    title: t
                } = e;
                return (0, i.jsx)(ee, {
                    children: (0, i.jsxs)("div", {
                        className: q.xboxSection,
                        children: [(0, i.jsx)(w.default, {
                            className: q.xboxSectionIcon
                        }), (0, i.jsxs)("div", {
                            className: q.xboxSectionDetails,
                            children: [X(t), J(z.default.Messages.GAME_FEED_ACTIVITY_PLAYING_XBOX)]
                        })]
                    })
                })
            }, es.SpotifySection = e => {
                var t;
                let {
                    activity: {
                        assets: n,
                        details: a,
                        state: s,
                        application_id: l
                    },
                    partySize: r,
                    members: u,
                    isSolo: c,
                    getAssetImage: E
                } = e;
                return (0, i.jsx)(ee, {
                    children: (0, i.jsxs)("div", {
                        className: q.spotifySection,
                        children: [null != n ? (0, i.jsxs)("div", {
                            className: q.activitySectionAssets,
                            children: [(0, i.jsx)("img", {
                                alt: null !== (t = n.large_text) && void 0 !== t ? t : "",
                                src: E(l, n.large_image, [Q.LARGE, Q.LARGE]),
                                className: o(q.largeImage, q.borderRadius0, {
                                    [q.largeImageMask]: null != n.small_image
                                })
                            }), c ? null : (0, i.jsx)(k.default, {
                                className: q.smallImage,
                                color: d.default.unsafe_rawColors.SPOTIFY.css
                            })]
                        }) : (0, i.jsx)("div", {}), (0, i.jsxs)("div", {
                            children: [null != a ? X(a) : null, null != s ? J(s) : null]
                        }), (0, i.jsx)(W.default, {
                            minAvatarsShown: c ? 2 : 1,
                            partySize: r,
                            members: u
                        })]
                    })
                })
            }, es.TwitchSection = e => {
                let t, {
                        activity: a,
                        user: s,
                        getAssetImage: l,
                        guildId: r
                    } = e,
                    {
                        name: u,
                        details: d,
                        assets: E,
                        application_id: f
                    } = a;
                if (null != E && (0, N.default)(a)) {
                    var h;
                    t = (0, i.jsx)(x.default, {
                        className: q.twitchSectionPreviewWrapper,
                        aspectRatio: 16 / 9,
                        children: (0, i.jsxs)(c.Clickable, {
                            href: (0, C.default)(a),
                            tag: "a",
                            target: "_blank",
                            children: [(0, i.jsx)("img", {
                                alt: null !== (h = E.large_text) && void 0 !== h ? h : "",
                                src: l(f, E.large_image, [900, 500]),
                                className: q.twitchSectionPreview
                            }), (0, i.jsx)("img", {
                                src: n("306910"),
                                className: q.twitchSectionPlayButton,
                                alt: ""
                            })]
                        })
                    })
                }
                return (0, i.jsxs)(ee, {
                    children: [(0, i.jsxs)("div", {
                        className: o({
                            [q.twitchSectionSimple]: null == s,
                            [q.twitchSectionFull]: null != s
                        }),
                        children: [(0, i.jsx)("img", {
                            alt: "",
                            src: _.default.get(K.PlatformTypes.TWITCH).icon.lightSVG,
                            className: q.twitchSectionIcon
                        }), (0, i.jsxs)("div", {
                            children: [X(u), null != d ? J(d) : null]
                        }), null != s ? (0, i.jsx)(c.Avatar, {
                            src: s.getAvatarURL(r, 24),
                            "aria-label": s.username,
                            className: q.twitchSectionAvatar,
                            size: c.AvatarSizes.SIZE_24
                        }) : null]
                    }), t]
                })
            }, es.ApplicationStreamingSection = e => {
                var t;
                let {
                    activity: n,
                    user: a,
                    applicationStream: s,
                    onPreviewClick: l,
                    guildId: r
                } = e, o = (0, u.useStateFromStores)([D.default], () => D.default.getChannel(s.channelId)), [d, E] = (0, L.useCanWatchStream)(o), f = (0, i.jsx)(x.default, {
                    className: q.applicationStreamingPreviewWrapper,
                    aspectRatio: 16 / 9,
                    children: (0, i.jsxs)(c.Clickable, {
                        onClick: d ? l : void 0,
                        className: q.applicationStreamingPreviewSize,
                        children: [(0, i.jsx)(v.default, {
                            stream: s,
                            className: q.applicationStreamingPreviewSize
                        }), (0, i.jsx)("div", {
                            className: q.applicationStreamingHoverWrapper,
                            children: (0, i.jsx)("div", {
                                className: q.applicationStreamingHoverText,
                                children: (0, L.getStreamCTAString)(E)
                            })
                        })]
                    })
                }), _ = null !== (t = (0, A.default)(n, s)) && void 0 !== t ? t : z.default.Messages.SHARING_SCREEN;
                return (0, i.jsxs)(ee, {
                    children: [(0, i.jsxs)("div", {
                        className: q.applicationStreamingSection,
                        children: [(0, i.jsx)(c.Avatar, {
                            size: c.AvatarSizes.SIZE_32,
                            src: a.getAvatarURL(r, 32),
                            "aria-label": a.username,
                            className: q.applicationStreamingAvatar
                        }), (0, i.jsxs)("div", {
                            children: [X(Y.default.getName(a)), J(_)]
                        }), (0, i.jsx)(B.default, {
                            size: B.default.Sizes.SMALL
                        })]
                    }), f]
                })
            }, es.EmbeddedActivitySection = e => {
                let {
                    activity: t,
                    channel: n,
                    guildId: a,
                    participants: s
                } = e, r = (0, p.default)(), [o, d] = l.useState(null), E = t.application_id;
                l.useEffect(() => {
                    null != E && (0, H.fetchAssetIds)(E, ["embedded_background"]).then(e => {
                        let [t] = e;
                        return d(t)
                    })
                }, [E]);
                let _ = (0, u.useStateFromStoresArray)([y.default, P.default], () => Array.from(s).map(e => P.default.getId() === e ? null : y.default.getUser(e)).filter(V.isNotNullish)),
                    C = (0, f.useAnalyticsContext)(),
                    {
                        analyticsLocations: T
                    } = (0, g.default)();
                if (null == E) return null;
                let I = R.default.getApplication(E);
                if (null == I) return null;
                let S = null != t.created_at && t.created_at > 0 ? {
                        start: t.created_at
                    } : void 0,
                    N = (0, H.getAssetImage)(I.id, o, 300);
                return (0, i.jsxs)(ee, {
                    children: [(0, i.jsxs)("div", {
                        className: q.embeddedActivityTopRow,
                        children: [(0, i.jsx)(b.default, {
                            game: I,
                            size: b.default.Sizes.XSMALL,
                            className: q.embeddedActivityIcon
                        }), (0, i.jsx)("div", {
                            className: q.embeddedActivityName,
                            children: (0, i.jsx)(c.Text, {
                                variant: "text-sm/semibold",
                                children: I.name
                            })
                        }), null != S ? (0, i.jsx)("div", {
                            className: q.embeddedActivityTimeElapsed,
                            children: (0, i.jsx)(c.Text, {
                                color: "text-muted",
                                variant: "text-sm/normal",
                                children: (0, i.jsx)($, {
                                    timestamps: S
                                })
                            })
                        }) : null]
                    }), (0, i.jsx)(x.default, {
                        aspectRatio: 16 / 9,
                        children: (0, i.jsxs)("div", {
                            className: q.embeddedActivityPlayerContainer,
                            children: [null != N ? (0, i.jsx)("img", {
                                src: N,
                                alt: I.name,
                                className: q.embeddedActivityImage
                            }) : null, (0, i.jsxs)("div", {
                                className: q.embeddedActivityImageOverlay,
                                children: [(0, i.jsx)(M.Avatars, {
                                    users: _,
                                    guildId: a,
                                    channelId: n.id
                                }), (0, i.jsx)("div", {
                                    className: q.embeddedActivityJoinWrapper,
                                    children: (0, i.jsx)(c.Button, {
                                        size: c.Button.Sizes.SMALL,
                                        onClick: e => {
                                            e.stopPropagation(), (0, h.default)({
                                                applicationId: E,
                                                currentEmbeddedApplication: r,
                                                activityChannelId: n.id,
                                                locationObject: C.location,
                                                embeddedActivitiesManager: m.default,
                                                analyticsLocations: T
                                            })
                                        },
                                        children: z.default.Messages.JOIN
                                    })
                                })]
                            })]
                        })
                    })]
                })
            };
            var ei = es