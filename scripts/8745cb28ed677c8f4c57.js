(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["42569"], {
        917798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MobilePhoneControllerIcon: function() {
                    return s
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("669491"),
                u = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...d
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(d),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M6 1a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3h2.95c.384 0 .633-.424.516-.792a3.983 3.983 0 0 1-.154-1.704l.5-4A4 4 0 0 1 13.782 13H16.5a.5.5 0 0 0 .5-.5V4a3 3 0 0 0-3-3H6Zm2 2a1 1 0 0 0 0 2h4a1 1 0 1 0 0-2H8Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, l.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M14.018 15a2.287 2.287 0 0 0-2.268 2.003l-.462 3.694a2.049 2.049 0 0 0 4.041.656l.171-.853h3l.17.853a2.049 2.049 0 0 0 4.042-.656l-.462-3.694A2.287 2.287 0 0 0 19.982 15h-5.963Z",
                        className: r
                    })]
                })
            }
        },
        458574: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("281071"),
                u = n("65597"),
                s = n("77078"),
                r = n("867965"),
                d = n("42203"),
                o = n("404008"),
                i = n("49111"),
                f = n("782340");

            function c(e, t, n) {
                let c = (0, u.default)([d.default], () => d.default.getChannel(e.parent_id));
                return (0, l.jsx)(s.MenuItem, {
                    id: "channel-copy-link",
                    label: f.default.Messages.COPY_LINK,
                    action: () => {
                        e.isForumPost() && (0, r.trackForumPostLinkCopied)({
                            postId: e.id,
                            location: {
                                section: i.AnalyticsSections.CONTEXT_MENU
                            }
                        }), (0, a.copy)((0, o.getChannelLinkToCopy)(e, c, t, n))
                    }
                })
            }
        },
        308798: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("446674"),
                u = n("77078"),
                s = n("18054"),
                r = n("819689"),
                d = n("430475"),
                o = n("610730"),
                i = n("271938"),
                f = n("957255"),
                c = n("49111"),
                C = n("782340");

            function h(e) {
                var t;
                let h = e.isForumPost(),
                    T = (0, a.useStateFromStores)([i.default], () => e.isOwner(i.default.getId()), [e]),
                    {
                        canManageChannel: S,
                        canAccessChannel: p
                    } = (0, a.useStateFromStoresObject)([f.default], () => ({
                        canAccessChannel: f.default.can(e.accessPermissions, e),
                        canManageChannel: f.default.can(e.isThread() ? c.Permissions.MANAGE_THREADS : c.Permissions.MANAGE_CHANNELS, e)
                    }), [e]),
                    m = (0, a.useStateFromStores)([o.default], () => null !== (t = o.default.getCount(e.id)) && void 0 !== t ? t : 0, [e.id]),
                    {
                        firstMessage: L
                    } = (0, a.useStateFromStores)([d.default], () => d.default.getMessage(e.id), [e.id]),
                    g = h && (S || T && m < 1),
                    A = h && T && !S && m > 0 && null != L;
                return p && (S || g || A) ? (0, l.jsx)(u.MenuItem, {
                    id: "delete-channel",
                    label: (() => {
                        if (e.type === c.ChannelTypes.GUILD_CATEGORY) return C.default.Messages.DELETE_CATEGORY;
                        if (e.isForumPost()) return g ? C.default.Messages.DELETE_FORUM_POST : C.default.Messages.DELETE_MESSAGE;
                        if (e.isThread()) return C.default.Messages.DELETE_THREAD;
                        return C.default.Messages.DELETE_CHANNEL
                    })(),
                    color: "danger",
                    action: () => (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("575351").then(n.bind(n, "575351"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            onConfirm: () => {
                                n.onClose(), A ? r.default.deleteMessage(e.id, e.id) : s.default.deleteChannel(e.id)
                            },
                            channel: e
                        })
                    })
                }) : null
            }
        },
        889486: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                handoffRemote: function() {
                    return i
                }
            });
            var l = n("627445"),
                a = n.n(l),
                u = n("629109"),
                s = n("987317"),
                r = n("42887"),
                d = n("700507"),
                o = n("780338");

            function i(e, t) {
                var n;
                let l = null !== (n = e.sessionId) && void 0 !== n ? n : "";
                (0, d.remoteDisconnect)(l), (0, d.disconnectRemote)();
                let i = null != t ? t : e.channelId;
                a(null != i, "attempted to transfer to unknown channel"), e.selfMute !== r.default.isSelfMute() && u.default.toggleSelfMute(), e.selfDeaf !== r.default.isSelfDeaf() && u.default.toggleSelfDeaf(), (0, o.default)(i, "discord_client", l), s.default.selectVoiceChannel(i, !1)
            }
        },
        261552: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("271938"),
                u = n("800762"),
                s = n("76393");

            function r() {
                let e = (0, l.useStateFromStores)([a.default], () => a.default.getId()),
                    t = (0, l.useStateFromStores)([s.default], () => s.default.getRemoteSessionId());
                return (0, l.useStateFromStores)([u.default], () => {
                    var n;
                    return null !== (n = u.default.getVoiceStateForSession(e, t)) && void 0 !== n ? n : void 0
                })
            }
        },
        742898: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("446674"),
                a = n("47319"),
                u = n("449008"),
                s = n("49111");

            function r() {
                return (0, l.useStateFromStoresArray)([a.default], () => [a.default.getAccount(null, s.PlatformTypes.XBOX), a.default.getAccount(null, s.PlatformTypes.PLAYSTATION), a.default.getAccount(null, s.PlatformTypes.PLAYSTATION_STAGING)].filter(u.isNotNullish))
            }
        },
        424024: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("303800"),
                a = n("998564"),
                u = n("420145"),
                s = n("171644");

            function r(e) {
                return null != e ? e === s.GameConsoleTypes.XBOX ? u.default : a.default : l.default
            }
        },
        379304: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("65597"),
                u = n("77078"),
                s = n("926994"),
                r = n("495194"),
                d = n("945956"),
                o = n("800762"),
                i = n("889486"),
                f = n("261552"),
                c = n("742898"),
                C = n("424024"),
                h = n("49111"),
                T = n("782340");

            function S(e) {
                let t = (0, a.default)([d.default], () => d.default.getChannelId() === e.id),
                    S = (0, f.default)(),
                    p = (null == S ? void 0 : S.channelId) === e.id,
                    m = (0, r.useIsVoiceChannelLocked)(e) && !e.isPrivate(),
                    L = (0, r.default)(e),
                    g = (0, a.default)([o.default], () => o.default.isInChannel(e.id)),
                    A = !g && L || m,
                    I = (0, c.default)();
                if (!p && 0 === I.length) return null;
                let N = t => {
                    if (!t.twoWayLink || t.revoked) {
                        (0, s.default)(t.type, "Console Transfer Item");
                        return
                    }
                    t.type === h.PlatformTypes.XBOX ? (0, u.openModalLazy)(async () => {
                        let {
                            default: t
                        } = await n.el("613895").then(n.bind(n, "613895"));
                        return n => (0, l.jsx)(t, {
                            ...n,
                            channel: e
                        })
                    }) : (t.type === h.PlatformTypes.PLAYSTATION || t.type === h.PlatformTypes.PLAYSTATION_STAGING) && (0, u.openModalLazy)(async () => {
                        let {
                            default: a
                        } = await n.el("962512").then(n.bind(n, "962512"));
                        return n => (0, l.jsx)(a, {
                            ...n,
                            platform: t.type,
                            channel: e
                        })
                    })
                };
                return (0, l.jsx)(l.Fragment, {
                    children: p ? (0, l.jsx)(u.MenuItem, {
                        label: T.default.Messages.TRANSFER_VOICE_TO_DEVICE,
                        id: "handoff",
                        action: () => {
                            (0, i.handoffRemote)(S)
                        },
                        icon: (0, C.default)(void 0),
                        disabled: A
                    }) : I.map(e => (0, l.jsx)(u.MenuItem, {
                        id: "transfer-".concat(e.type, "-").concat(e.id),
                        label: function(e, t) {
                            if (e === h.PlatformTypes.XBOX) return t ? T.default.Messages.TRANSFER_VOICE_TO_XBOX : T.default.Messages.JOIN_ON_XBOX;
                            if (e === h.PlatformTypes.PLAYSTATION) return t ? T.default.Messages.CONSOLE_PLAYSTATION_TRANSFER_VOICE : T.default.Messages.CONSOLE_PLAYSTATION_JOIN_VOICE;
                            if (e === h.PlatformTypes.PLAYSTATION_STAGING) return t ? T.default.Messages.CONSOLE_PLAYSTATION_STAGING_TRANSFER_VOICE : T.default.Messages.CONSOLE_PLAYSTATION_STAGING_JOIN_VOICE
                        }(e.type, t),
                        action: () => N(e),
                        icon: (0, C.default)(e.type),
                        disabled: A
                    }, e.id))
                })
            }
        },
        495194: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useIsVoiceChannelLocked: function() {
                    return o
                },
                default: function() {
                    return i
                }
            });
            var l = n("446674"),
                a = n("305961"),
                u = n("957255"),
                s = n("800762"),
                r = n("404008"),
                d = n("843455");

            function o(e) {
                return (0, l.useStateFromStores)([u.default], () => null == e || !u.default.can(d.Permissions.CONNECT, e), [e])
            }

            function i(e) {
                return (0, l.useStateFromStores)([s.default, a.default], () => (0, r.isChannelFull)(e, s.default, a.default))
            }
        },
        303800: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983"),
                a = n("884691"),
                u = n("748820"),
                s = n("469563"),
                r = n("917798"),
                d = n("75196"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: n = 16,
                        color: s = "currentColor",
                        foreground: r,
                        ...o
                    } = e, [i] = a.useState(() => (0, u.v4)());
                    return (0, l.jsxs)("svg", {
                        ...(0, d.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("g", {
                            clipPath: "url(".concat(i, ")"),
                            children: (0, l.jsx)("path", {
                                className: r,
                                fillRule: "evenodd",
                                clipRule: "evenodd",
                                d: "M4.83075 2H13.2444C14.817 2 16.0751 3.13475 15.9965 4.55319V11H14.5025V4.69504H3.57264V18.8085H6V22H4.83075C3.25811 22 2 20.8652 2 19.4468V4.55319C2 3.13475 3.25811 2 4.83075 2Z",
                                fill: s
                            })
                        }), (0, l.jsx)("path", {
                            d: "M10.5646 13H19.4354C20.5365 13 21.4507 13.7808 21.5303 14.7893L21.9965 20.6997C22.0492 21.3677 21.5021 21.9485 20.7746 21.9968C20.7429 21.9989 20.7111 22 20.6792 22C19.8442 22 19.1157 21.4795 18.9105 20.7363L18.5495 19.4286H11.4504L11.0894 20.7363C10.8842 21.4795 10.1557 22 9.3207 22C8.5913 22 8 21.4571 8 20.7873C8 20.7581 8.00115 20.7289 8.00345 20.6997L8.46966 14.7893C8.5492 13.7808 9.46342 13 10.5646 13Z",
                            className: r,
                            fill: s
                        }), (0, l.jsx)("defs", {
                            children: (0, l.jsx)("clipPath", {
                                id: i,
                                children: (0, l.jsx)("rect", {
                                    width: "14",
                                    height: "21",
                                    fill: s,
                                    transform: "translate(2 2)"
                                })
                            })
                        })]
                    })
                }, r.MobilePhoneControllerIcon)
        },
        998564: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function u(e) {
                let {
                    width: t = 18,
                    height: n = 18,
                    color: u = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 18 18",
                    children: (0, l.jsx)("path", {
                        className: s,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M17.7516 12.8667C17.4035 13.3058 16.5507 13.6191 16.5507 13.6191L10.2065 15.8979V14.2173L14.8754 12.5538C15.4052 12.364 15.4866 12.0956 15.0559 11.9547C14.6261 11.8135 13.8477 11.854 13.3175 12.0446L10.2065 13.1403V11.3962L10.3858 11.3355C10.3858 11.3355 11.2848 11.0173 12.5488 10.8773C13.8129 10.738 15.3607 10.8963 16.5758 11.3569C17.9451 11.7896 18.0993 12.4275 17.7516 12.8667ZM10.8104 10.005V5.70728C10.8104 5.20255 10.7173 4.73788 10.2437 4.60633C9.88107 4.49017 9.65602 4.82693 9.65602 5.33126V16.0938L6.75349 15.1726V2.34009C7.9876 2.56918 9.78554 3.11075 10.7521 3.43658C13.2102 4.2805 14.0436 5.33085 14.0436 7.69748C14.0436 10.0042 12.6197 10.8785 10.8104 10.005ZM1.42767 14.0417C0.0219393 13.6458 -0.212012 12.8209 0.428722 12.3457C1.02089 11.907 2.02793 11.5767 2.02793 11.5767L6.18966 10.0969V11.7839L3.19485 12.8557C2.66583 13.0456 2.58447 13.3143 3.01432 13.4552C3.44458 13.596 4.22334 13.556 4.75317 13.3657L6.18966 12.8444V14.3537C6.09859 14.3699 5.997 14.3861 5.90309 14.4019C4.4662 14.6367 2.9358 14.5387 1.42767 14.0417Z",
                        fill: u
                    })
                })
            }
        },
        420145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("37983");
            n("884691");
            var a = n("75196");

            function u(e) {
                let {
                    width: t = 16,
                    height: n = 16,
                    color: u = "currentColor",
                    foreground: s,
                    ...r
                } = e;
                return (0, l.jsx)("svg", {
                    ...(0, a.default)(r),
                    width: t,
                    height: n,
                    viewBox: "0 0 60 60",
                    children: (0, l.jsx)("g", {
                        fill: "none",
                        fillRule: "evenodd",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: u,
                            d: "M8.95185131,8.62650012 L8.92775494,8.65059649 C3.20486729,14.2891468 -0.0119979765,21.9758886 5.02080018e-05,29.9999795 C-0.0119979765,36.56624 2.14462705,42.9517778 6.13257613,48.1686417 C6.16872068,48.2168345 6.24100979,48.252979 6.28920253,48.2168345 C6.33739527,48.1806899 6.34944345,48.120449 6.32534708,48.0602081 C4.03619202,40.9879237 15.722931,23.8433572 21.7711196,16.6626392 C21.795216,16.6385428 21.8193124,16.6144465 21.8193124,16.5783019 C21.8193124,16.5421573 21.795216,16.5060128 21.7590715,16.4819164 C11.6024519,6.37348961 8.8795622,8.68674104 8.92775494,8.65059649 M51.048208,8.62650012 L51.0723044,8.65059649 C56.795192,14.2770987 60.0000091,21.9758886 59.9879609,29.9999795 C60.0000091,36.56624 57.8433841,42.9517778 53.855435,48.1686417 C53.8192905,48.2168345 53.7470014,48.252979 53.6988086,48.2168345 C53.6506159,48.1806899 53.6506159,48.120449 53.6626641,48.0602081 C55.9518191,40.9879237 44.2650801,23.831309 38.2289397,16.650591 C38.2048433,16.6264946 38.180747,16.6023983 38.180747,16.5662537 C38.180747,16.518061 38.2048433,16.4939646 38.2409879,16.4698682 C48.4096556,6.36144143 51.0964008,8.68674104 51.0602562,8.65059649 M30.0000297,0 C36.0482183,0 41.0361667,1.66264946 45.626525,4.38553917 C45.6867659,4.40963554 45.6988141,4.48192464 45.6747177,4.53011738 C45.6506214,4.57831012 45.5903804,4.5903583 45.5301395,4.57831012 C39.7229146,3.32529893 30.8915953,8.33734369 30.0602706,8.84336744 C30.0361742,8.85541562 30.024126,8.86746381 30.0000297,8.86746381 C29.9759333,8.86746381 29.9518369,8.85541562 29.9397887,8.84336744 C27.7229228,7.56625988 19.5663019,3.28915437 14.4217271,4.61445467 C14.3614862,4.62650286 14.3012452,4.61445467 14.2771489,4.56626193 C14.2530525,4.50602101 14.2771489,4.44578009 14.3253416,4.42168372 C18.9156999,1.66264946 23.9638892,0 30.0000297,0 M30.0000297,24.0602245 C30.0361742,24.0602245 30.0723188,24.0843209 30.0964151,24.1084172 C39.0723126,30.9397379 54.4337479,47.8071962 49.7470041,52.5782773 L49.7590523,52.5662291 L49.7590523,52.5782773 L49.7470041,52.5782773 C44.2771283,57.3734547 37.2650849,60.0120071 30.0000297,59.9999589 C22.7349744,60.0120071 15.7108828,57.3734547 10.2530552,52.5782773 L10.2410071,52.5662291 L10.2530552,52.5782773 C5.56631146,47.8071962 20.9277467,30.9276897 29.9036442,24.1084172 C29.9156924,24.0843209 29.9638851,24.0602245 30.0000297,24.0602245"
                        })
                    })
                })
            }
        }
    }
]);