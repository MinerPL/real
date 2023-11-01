(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["56495"], {
        475896: function(e, t, i) {
            "use strict";
            e.exports = i.p + "db61786f810a1fcf361d.jpg"
        },
        610688: function(e, t, i) {
            "use strict";
            e.exports = i.p + "1c4db349e48b726c3936.jpg"
        },
        488838: function(e, t, i) {
            "use strict";
            e.exports = i.p + "35bc9adce60ea6ad64f8.jpg"
        },
        987713: function(e, t, i) {
            "use strict";
            e.exports = i.p + "5a2b576fb0dad6c6f697.jpg"
        },
        522396: function(e, t, i) {
            "use strict";
            e.exports = i.p + "7ef6479b21a070deeea4.jpg"
        },
        585890: function(e, t, i) {
            "use strict";
            e.exports = i.p + "cb327b61c6d78dd359de.jpg"
        },
        688072: function(e, t, i) {
            "use strict";
            e.exports = i.p + "350c22d9218aa19da699.jpg"
        },
        659864: function(e, t, i) {
            "use strict";
            e.exports = i.p + "c256c9f9b854932a3ccd.jpg"
        },
        245195: function(e, t, i) {
            "use strict";
            e.exports = i.p + "881bc56245866f2a901b.jpg"
        },
        237069: function(e, t, i) {
            "use strict";
            e.exports = i.p + "966c5a1ca2a424ed3e69.jpg"
        },
        768178: function(e, t, i) {
            "use strict";
            e.exports = i.p + "d4c4ee431828dbbc3d91.jpg"
        },
        492279: function(e, t, i) {
            "use strict";
            e.exports = i.p + "af42571a8453b9044aae.jpg"
        },
        67189: function(e, t, i) {
            "use strict";
            e.exports = i.p + "679e2e3abe712fec2732.jpg"
        },
        112553: function(e, t, i) {
            "use strict";
            e.exports = i.p + "2e2fc1b6db4460a1f9c5.jpg"
        },
        428221: function(e, t, i) {
            "use strict";
            e.exports = i.p + "ceb7b802658ebf0780d0.png"
        },
        804246: function(e, t, i) {
            "use strict";
            e.exports = i.p + "e7aed34a08cdf5b6af24.png"
        },
        729727: function(e, t, i) {
            "use strict";
            e.exports = i.p + "999bba1aa8b2a73cc267.png"
        },
        283958: function(e, t, i) {
            "use strict";
            e.exports = i.p + "8387acdf35bbef8c823f.jpg"
        },
        55926: function(e, t, i) {
            "use strict";
            e.exports = i.p + "305bef44a56d86f81c8c.jpg"
        },
        349683: function(e, t, i) {
            "use strict";
            e.exports = i.p + "a802092e4c2b239237ba.jpg"
        },
        870968: function(e, t, i) {
            "use strict";
            e.exports = i.p + "609cf233fa34371d453f.jpg"
        },
        705996: function(e, t, i) {
            "use strict";
            e.exports = i.p + "79f993383f5d66c89427.jpg"
        },
        850436: function(e, t, i) {
            "use strict";
            e.exports = i.p + "eeadd473339782578130.jpg"
        },
        135814: function(e, t, i) {
            "use strict";
            e.exports = i.p + "deee435b2602ef14296a.jpg"
        },
        548768: function(e, t, i) {
            "use strict";
            e.exports = i.p + "3691928af577e8f6eb03.jpg"
        },
        13906: function(e, t, i) {
            "use strict";
            e.exports = i.p + "de7628b7185f1b5f5abc.jpg"
        },
        839358: function(e, t, i) {
            "use strict";
            e.exports = i.p + "7dd03a624d9ea6c0b25a.jpg"
        },
        847790: function(e, t, i) {
            "use strict";
            e.exports = i.p + "8769a4a0b7783d6dd697.jpg"
        },
        146588: function(e, t, i) {
            "use strict";
            e.exports = i.p + "a3861001e61874a4c82e.jpg"
        },
        708917: function(e, t, i) {
            "use strict";
            e.exports = i.p + "cd160af6896b92de11f6.jpg"
        },
        466719: function(e, t, i) {
            "use strict";
            e.exports = i.p + "3331a1d6df7173a0b069.jpg"
        },
        991943: function(e, t, i) {
            "use strict";
            e.exports = i.p + "0ae50693e2dfbd2118f2.jpg"
        },
        428323: function(e, t, i) {
            "use strict";
            e.exports = i.p + "8f7c1d74fbc99d7e325d.jpg"
        },
        161918: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useActivityShelfItemData: function() {
                    return a
                }
            });
            var s = i("884691"),
                n = i("865821");

            function a(e, t) {
                var i;
                let a = (0, n.default)({
                    guildId: e,
                    disableFilter: !0
                });
                return s.useMemo(() => null !== (i = a.find(e => e.application.id === t)) && void 0 !== i ? i : null, [a, t])
            }
        },
        607384: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useFetchDeveloperActivityShelfItems: function() {
                    return r
                }
            });
            var s = i("884691"),
                n = i("446674"),
                a = i("84460"),
                l = i("550766"),
                u = i("126939");

            function r() {
                let e = (0, u.useIsActivitiesEnabledForCurrentPlatform)(),
                    [t, i] = (0, n.useStateFromStoresArray)([a.default], () => [a.default.getIsEnabled(), a.default.getFetchState()], []);
                return s.useEffect(() => {
                    e && t && null == i && (0, l.fetchDeveloperApplications)()
                }, [e, t, i]), null
            }
        },
        744203: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getActivityGuildSuggestion: function() {
                    return c
                },
                useSelectGuildOptions: function() {
                    return d
                }
            });
            var s = i("884691"),
                n = i("446674"),
                a = i("42203"),
                l = i("18494"),
                u = i("162771"),
                r = i("677099");

            function c() {
                var e;
                let {
                    allowGdmActivityChannelSuggestion: t
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    allowGdmActivityChannelSuggestion: !1
                }, i = l.default.getVoiceChannelId(), s = a.default.getChannel(i);
                if (null != s && null != s.guild_id) return s.guild_id;
                if (null == s || !t) return null !== (e = u.default.getLastSelectedGuildId()) && void 0 !== e ? e : r.default.getFlattenedGuildIds()[0]
            }

            function d() {
                let e = (0, n.useStateFromStores)([r.default], () => r.default.getFlattenedGuildIds()),
                    t = s.useMemo(() => e.map(e => ({
                        label: e,
                        value: e
                    })), [e]);
                return t
            }
        },
        248210: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                getActivityVoiceChannelSuggestion: function() {
                    return f
                },
                useSelectVoiceChannelOptions: function() {
                    return I
                }
            });
            var s = i("446674"),
                n = i("42203"),
                a = i("245997"),
                l = i("305961"),
                u = i("957255"),
                r = i("18494"),
                c = i("316133"),
                d = i("449008"),
                o = i("943349"),
                g = i("49111");

            function p(e, t, i, s) {
                let n = (0, o.getEmbeddedActivityLaunchability)({
                    channelId: e.id,
                    ChannelStore: t,
                    GuildStore: i,
                    PermissionStore: s
                });
                return e.type === g.ChannelTypes.GUILD_VOICE && n === o.EmbeddedActivityLaunchability.CAN_LAUNCH || !1
            }

            function f(e) {
                var t, i, s;
                let {
                    guildId: o,
                    allowGdmActivityChannelSuggestion: g = !1
                } = e;
                if (null == o && !g) return null;
                let f = r.default.getVoiceChannelId(),
                    m = n.default.getChannel(f);
                if (null != m && (null != m.guild_id || g)) return m.id;
                let I = [];
                for (let e of Object.values(a.default.getCategories(o)))
                    for (let t of e) p(t.channel, n.default, l.default, u.default) && I.push({
                        channel: t.channel,
                        users: c.default.getVoiceStatesForChannel(t.channel).filter(d.isNotNullish)
                    });
                return null !== (s = null === (i = I.sort((e, t) => e.users.length > t.users.length ? -1 : 1)[0]) || void 0 === i ? void 0 : null === (t = i.channel) || void 0 === t ? void 0 : t.id) && void 0 !== s ? s : null
            }

            function m(e, t) {
                if (e.length !== t.length) return !1;
                for (let i = 0; i < e.length; i++)
                    if (e[i].value.channel.id !== t[i].value.channel.id) return !1;
                return !0
            }

            function I(e) {
                return (0, s.useStateFromStores)([a.default, c.default, n.default, l.default, u.default], () => {
                    if (null == e) return [];
                    let t = [];
                    return Object.values(a.default.getCategories(e)).forEach(e => {
                        e.forEach(e => {
                            let {
                                channel: i
                            } = e;
                            p(i, n.default, l.default, u.default) && t.push(i)
                        })
                    }), t.map(e => {
                        let t = c.default.getVoiceStatesForChannel(e).filter(d.isNotNullish);
                        return {
                            value: {
                                channel: e,
                                users: t
                            },
                            label: e.name
                        }
                    }).sort((e, t) => e.value.users.length > t.value.users.length ? -1 : 1)
                }, [e], m)
            }
        },
        577766: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return U
                }
            });
            var s = i("37983"),
                n = i("884691"),
                a = i("90915"),
                l = i("854588"),
                u = i("77078"),
                r = i("812204"),
                c = i("685665"),
                d = i("393414"),
                o = i("980428"),
                g = i("665382"),
                p = i("155207"),
                f = i("82636"),
                m = i("507692"),
                I = i("664336"),
                x = i("58608"),
                h = i("568734"),
                v = i("550766"),
                S = i("986214"),
                j = i("161918"),
                _ = i("607384"),
                A = i("744203"),
                y = i("248210"),
                C = i("525167"),
                M = i("698372"),
                N = i("969380"),
                E = i("141962"),
                b = i("231457"),
                T = i("707181"),
                D = i("905647"),
                P = i("49111"),
                O = i("782340"),
                L = i("77951");

            function U(e) {
                var t, i;
                let {
                    match: S
                } = e, A = null !== (t = (0, d.getLastRouteChangeSourceLocationStack)()) && void 0 !== t ? t : [], {
                    AnalyticsLocationProvider: y
                } = (0, c.default)([...A, r.default.ACTIVITY_DETAIL_PAGE]), {
                    applicationId: M
                } = S.params;
                (0, _.useFetchDeveloperActivityShelfItems)(), n.useEffect(() => {
                    (0, v.fetchShelf)({
                        guildId: null
                    })
                }, []);
                let E = (0, N.default)({
                        applicationId: null != M ? M : "",
                        size: 2048
                    }),
                    b = (0, j.useActivityShelfItemData)(null, null != M && "" !== M ? M : null);
                if (null == M || null == b) return null;
                if (!(0, h.hasFlag)(b.application.flags, P.ApplicationFlags.EMBEDDED)) return (0, s.jsx)(a.Redirect, {
                    to: P.Routes.ACTIVITIES
                });
                let T = null != b.activity.activity_preview_video_asset_id ? (0, C.default)(M, b.activity.activity_preview_video_asset_id) : null,
                    U = D.ACTIVITIES_EXTRA_DETAILS[M],
                    B = (null == U ? void 0 : U.playersSuggestionMin) != null && (null == U ? void 0 : U.playersSuggestionMax) != null ? "".concat(U.playersSuggestionMin, " - ").concat(U.playersSuggestionMax) : void 0;
                return (0, s.jsx)(y, {
                    children: (0, s.jsxs)("div", {
                        className: L.outerContainer,
                        children: [(0, s.jsxs)(I.default, {
                            children: [(0, s.jsxs)("div", {
                                className: L.titleContainer,
                                children: [(0, s.jsx)(f.default, {
                                    className: L.rocketIcon
                                }), (0, s.jsx)(u.Heading, {
                                    variant: "heading-md/semibold",
                                    children: b.application.name
                                })]
                            }), (0, s.jsx)("div", {
                                className: L.headerBarRightSideFiller
                            })]
                        }), (0, s.jsx)(u.Scroller, {
                            className: L.scroller,
                            children: (0, s.jsxs)("div", {
                                className: L.innerContainer,
                                children: [(0, s.jsxs)("div", {
                                    className: L.header,
                                    children: [(0, s.jsx)("img", {
                                        src: E.url,
                                        className: L.headerImage,
                                        alt: b.application.name
                                    }), (0, s.jsx)("div", {
                                        className: L.headerImageOverlay
                                    }), (0, s.jsxs)(u.Clickable, {
                                        onClick: () => {
                                            (0, d.back)()
                                        },
                                        className: L.backButtonContainer,
                                        children: [(0, s.jsx)(o.default, {
                                            color: l.default.unsafe_rawColors.WHITE_100,
                                            className: L.backButtonIcon
                                        }), (0, s.jsx)(u.Heading, {
                                            color: "always-white",
                                            variant: "heading-lg/semibold",
                                            children: O.default.Messages.BACK
                                        })]
                                    })]
                                }), (0, s.jsx)("div", {
                                    className: L.detailsOuterContainer,
                                    children: (0, s.jsx)("div", {
                                        className: L.detailsInnerContainer,
                                        children: (0, s.jsxs)("div", {
                                            className: L.detailsInnerInnerContainer,
                                            children: [(0, s.jsxs)("div", {
                                                className: L.activityDetailsContainer,
                                                children: [(0, s.jsxs)("div", {
                                                    children: [(0, s.jsx)("div", {
                                                        className: L.detailsTitle,
                                                        children: (0, s.jsx)(u.Heading, {
                                                            variant: "heading-xxl/bold",
                                                            children: b.application.name
                                                        })
                                                    }), (0, s.jsxs)("div", {
                                                        className: L.detailsDetails,
                                                        children: [null != B ? (0, s.jsxs)("div", {
                                                            className: L.detailItem,
                                                            children: [(0, s.jsx)(p.default, {
                                                                width: 16,
                                                                height: 16
                                                            }), (0, s.jsx)(u.Text, {
                                                                variant: "text-xs/semibold",
                                                                className: L.detailItemText,
                                                                children: O.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                                                                    nPlayers: B
                                                                })
                                                            })]
                                                        }) : null, (null == U ? void 0 : U.timeSuggestionMinutes) != null ? (0, s.jsxs)("div", {
                                                            className: L.detailItem,
                                                            children: [(0, s.jsx)(g.default, {
                                                                width: 16,
                                                                height: 16
                                                            }), (0, s.jsx)(u.Text, {
                                                                variant: "text-xs/semibold",
                                                                className: L.detailItemText,
                                                                children: O.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                                                                    nMinutes: U.timeSuggestionMinutes
                                                                })
                                                            })]
                                                        }) : null, (0, s.jsxs)("div", {
                                                            className: L.detailItem,
                                                            children: [(0, s.jsx)(m.default, {
                                                                width: 16,
                                                                height: 16
                                                            }), (0, s.jsx)(u.Text, {
                                                                variant: "text-xs/semibold",
                                                                className: L.detailItemText,
                                                                children: b.application.tags.slice(0, 3).join(", ")
                                                            })]
                                                        })]
                                                    })]
                                                }), (0, s.jsx)(u.Heading, {
                                                    variant: "heading-lg/medium",
                                                    className: L.detailsDescription,
                                                    children: b.application.description
                                                }), (0, s.jsx)("div", {
                                                    className: L.divider
                                                }), (0, s.jsxs)("div", {
                                                    className: L.imagesContainer,
                                                    children: [(null !== (i = null == U ? void 0 : U.gameplayImageUrls) && void 0 !== i ? i : []).map(e => (0, s.jsx)("img", {
                                                        src: e,
                                                        alt: O.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                                                            activityName: b.application.name
                                                        }),
                                                        className: L.activityImage
                                                    }, e)), (0, s.jsx)(x.default, {
                                                        loop: !0,
                                                        autoPlay: !0,
                                                        muted: !0,
                                                        className: L.activityImage,
                                                        src: T,
                                                        poster: E.url
                                                    })]
                                                })]
                                            }), (0, s.jsx)("div", {
                                                className: L.launcherOuterContainer,
                                                children: (0, s.jsx)(R, {
                                                    activityItem: b
                                                })
                                            })]
                                        })
                                    })
                                })]
                            })
                        })]
                    })
                })
            }

            function R(e) {
                var t, a;
                let {
                    activityItem: l
                } = e, {
                    analyticsLocations: r
                } = (0, c.default)(), d = (0, M.default)(), [o, g] = n.useState(null !== (t = (0, A.getActivityGuildSuggestion)()) && void 0 !== t ? t : void 0), [p, f] = n.useState(null !== (a = (0, y.getActivityVoiceChannelSuggestion)({
                    guildId: o
                })) && void 0 !== a ? a : void 0), m = (0, A.useSelectGuildOptions)(), I = (0, y.useSelectVoiceChannelOptions)(o), x = n.useCallback(() => {
                    null != p && null != o && (0, S.default)({
                        activityItem: l,
                        currentActivity: d,
                        channelId: p,
                        guildId: o,
                        embeddedActivitiesManager: E.default,
                        analyticsLocations: r
                    })
                }, [l, r, d, p, o]), h = n.useCallback(() => {
                    (0, u.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await i.el("159747").then(i.bind(i, "159747"));
                        return t => (0, s.jsx)(e, {
                            activityItem: l,
                            ...t,
                            analyticsLocations: r
                        })
                    })
                }, [l, r]);
                return (0, s.jsxs)("div", {
                    className: L.launcherInnerContainer,
                    children: [(0, s.jsx)(u.Text, {
                        variant: "text-md/medium",
                        children: O.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
                    }), (0, s.jsx)(u.Select, {
                        placeholder: O.default.Messages.GUILD_SELECT,
                        optionClassName: L.option,
                        options: m,
                        renderOptionValue: e => {
                            let t = e.find(e => e.value === o);
                            return null == t ? null : (0, s.jsx)(T.SelectGuildOption, {
                                guildId: t.value
                            })
                        },
                        renderOptionLabel: e => {
                            let {
                                value: t
                            } = e;
                            return (0, s.jsx)(T.SelectGuildOption, {
                                guildId: t
                            })
                        },
                        isSelected: e => e === o,
                        select: e => {
                            var t;
                            g(e), f(null !== (t = (0, y.getActivityVoiceChannelSuggestion)({
                                guildId: e
                            })) && void 0 !== t ? t : void 0)
                        },
                        serialize: e => e
                    }), (0, s.jsx)(u.Select, {
                        placeholder: O.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                        optionClassName: L.option,
                        options: I,
                        isSelected: e => {
                            let {
                                channel: t
                            } = e;
                            return t.id === p
                        },
                        select: e => {
                            let {
                                channel: t
                            } = e;
                            return f(t.id)
                        },
                        serialize: e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        },
                        renderOptionValue: () => {
                            let e = I.find(e => e.value.channel.id === p);
                            return null == e ? null : (0, s.jsx)(b.SelectChannelOption, {
                                channel: e.value.channel,
                                users: e.value.users
                            })
                        },
                        renderOptionLabel: e => {
                            let {
                                value: {
                                    channel: t,
                                    users: i
                                }
                            } = e;
                            return (0, s.jsx)(b.SelectChannelOption, {
                                channel: t,
                                users: i
                            })
                        }
                    }), (0, s.jsx)(u.Button, {
                        fullWidth: !0,
                        disabled: null == o || null == p || !m.some(e => e.value === o) || !I.some(e => e.value.channel.id === p),
                        onClick: x,
                        children: O.default.Messages.START
                    }), (0, s.jsx)("div", {
                        className: L.divider
                    }), (0, s.jsx)(u.Button, {
                        fullWidth: !0,
                        color: u.Button.Colors.PRIMARY,
                        onClick: h,
                        children: O.default.Messages.SHARE
                    })]
                })
            }
        },
        905647: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                ACTIVITIES_EXTRA_DETAILS: function() {
                    return B
                }
            });
            var s = i("954016"),
                n = i("475896"),
                a = i("610688"),
                l = i("488838"),
                u = i("987713"),
                r = i("522396"),
                c = i("585890"),
                d = i("688072"),
                o = i("659864"),
                g = i("245195"),
                p = i("237069"),
                f = i("768178"),
                m = i("492279"),
                I = i("67189"),
                x = i("112553"),
                h = i("428221"),
                v = i("804246"),
                S = i("729727"),
                j = i("283958"),
                _ = i("55926"),
                A = i("349683"),
                y = i("870968"),
                C = i("705996"),
                M = i("850436"),
                N = i("135814"),
                E = i("548768"),
                b = i("13906"),
                T = i("839358"),
                D = i("847790"),
                P = i("146588"),
                O = i("708917"),
                L = i("466719"),
                U = i("991943"),
                R = i("428323");
            let B = {
                [s.JAM_SPACE_APPLICATION_ID]: {
                    playersSuggestionMin: 1,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 1,
                    gameplayImageUrls: [I, x]
                },
                [s.GARTIC_PHONE_APPLICATION_ID]: {
                    playersSuggestionMin: 4,
                    playersSuggestionMax: 12,
                    timeSuggestionMinutes: 10,
                    gameplayImageUrls: [f, m]
                },
                [s.COLOR_TOGETHER_APPLICATION_ID]: {
                    playersSuggestionMin: 1,
                    playersSuggestionMax: 16,
                    timeSuggestionMinutes: 5,
                    gameplayImageUrls: []
                },
                [s.SPELL_CAST_APPLICATION_ID]: {
                    playersSuggestionMin: 1,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 10,
                    gameplayImageUrls: [O, L]
                },
                [s.LAND_IO_APPLICATION_ID]: {
                    playersSuggestionMin: 1,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 5,
                    gameplayImageUrls: [A, y]
                },
                [s.WATCH_YOUTUBE_PROD_APP_ID]: {
                    playersSuggestionMin: 1,
                    playersSuggestionMax: 16,
                    timeSuggestionMinutes: 2,
                    gameplayImageUrls: [U, R]
                },
                [s.KWIM_APPLICATION_ID]: {
                    playersSuggestionMin: 3,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 10,
                    gameplayImageUrls: [j, _]
                },
                [s.BOBBLE_LEAGUE_APPLICATION_ID]: {
                    playersSuggestionMin: 2,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 15,
                    gameplayImageUrls: [l, u]
                },
                [s.CHECKERS_IN_THE_PARK_APP_ID]: {
                    playersSuggestionMin: 2,
                    playersSuggestionMax: 16,
                    timeSuggestionMinutes: 10,
                    gameplayImageUrls: [r, c]
                },
                [s.CHESS_IN_THE_PARK_APP_ID]: {
                    playersSuggestionMin: 2,
                    playersSuggestionMax: 16,
                    timeSuggestionMinutes: 15,
                    gameplayImageUrls: [g, p]
                },
                [s.BLAZIN_8S_APPLICATION_ID]: {
                    playersSuggestionMin: 2,
                    playersSuggestionMax: 5,
                    timeSuggestionMinutes: 5,
                    gameplayImageUrls: [n, a]
                },
                [s.POKER_NIGHT_APPLICATION_ID]: {
                    playersSuggestionMin: 1,
                    playersSuggestionMax: 7,
                    timeSuggestionMinutes: 15,
                    gameplayImageUrls: [N, E]
                },
                [s.BYS_LETTER_APP_ID]: {
                    playersSuggestionMin: 2,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 15,
                    gameplayImageUrls: [C, M]
                },
                [s.BYS_TWOODLE_APP_ID]: {
                    playersSuggestionMin: 2,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 15,
                    gameplayImageUrls: [D, P]
                },
                [s.CHEF_SHOWDOWN_APPLICATION_ID]: {
                    playersSuggestionMin: 2,
                    playersSuggestionMax: 4,
                    timeSuggestionMinutes: 5,
                    gameplayImageUrls: [d, o]
                },
                [s.PUTT_PARTY_APPLICATION_ID]: {
                    playersSuggestionMin: 1,
                    playersSuggestionMax: 8,
                    timeSuggestionMinutes: 10,
                    gameplayImageUrls: [b, T]
                },
                [s.KRUNKER_STRIKE_APPLICATION_ID]: {
                    gameplayImageUrls: [h, v, S]
                }
            }
        },
        231457: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SelectChannelOption: function() {
                    return g
                }
            });
            var s = i("37983");
            i("884691");
            var n = i("656038"),
                a = i("360723"),
                l = i("533403"),
                u = i("368121"),
                r = i("944633"),
                c = i("449008"),
                d = i("575136"),
                o = i("473134");

            function g(e) {
                let {
                    channel: t,
                    users: i
                } = e, g = (0, d.default)(t);
                return (0, s.jsxs)("div", {
                    className: o.channelInfo,
                    children: [(0, n.default)(t) ? (0, s.jsx)(r.default, {
                        className: o.speakerIcon
                    }) : (0, s.jsx)(u.default, {
                        className: o.speakerIcon
                    }), (0, s.jsx)("div", {
                        className: o.channelName,
                        children: t.name
                    }), g.length > 0 ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            className: o.divider
                        }), (0, s.jsx)(a.default, {
                            embeddedApps: g,
                            className: o.channelItemActivities
                        }), (0, s.jsx)("div", {
                            className: o.channelActivitiesText,
                            children: g.map(e => {
                                var t;
                                return null === (t = e.application) || void 0 === t ? void 0 : t.name
                            }).filter(c.isNotNullish).join(", ")
                        })]
                    }) : null, (0, s.jsx)("div", {
                        className: o.voiceUserContainer,
                        children: (0, s.jsx)(l.default, {
                            users: i,
                            max: 4
                        })
                    })]
                })
            }
        },
        707181: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                SelectGuildOption: function() {
                    return d
                }
            });
            var s = i("37983");
            i("884691");
            var n = i("617258"),
                a = i("65597"),
                l = i("77078"),
                u = i("305961"),
                r = i("315102"),
                c = i("450682");

            function d(e) {
                let {
                    guildId: t
                } = e, i = (0, a.default)([u.default], () => u.default.getGuild(t));
                if (null == i) return null;
                let d = null;
                if (null != i.icon) {
                    let e = r.default.getGuildIconURL({
                        id: i.id,
                        icon: i.icon,
                        size: 40
                    });
                    d = (0, s.jsx)(l.Avatar, {
                        src: e,
                        "aria-label": i.name,
                        size: l.AvatarSizes.SIZE_24
                    })
                } else {
                    let e = (0, n.getAcronym)(i.name).slice(0, 2);
                    d = (0, s.jsx)(l.Text, {
                        variant: "text-xs/semibold",
                        className: c.acronym,
                        "aria-hidden": !0,
                        children: e
                    })
                }
                return (0, s.jsxs)("div", {
                    className: c.container,
                    children: [d, (0, s.jsx)(l.Text, {
                        variant: "text-md/semibold",
                        className: c.text,
                        children: i.name
                    })]
                })
            }
        }
    }
]);