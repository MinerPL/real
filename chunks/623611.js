            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return y
                }
            }), l("222007");
            var i = l("37983"),
                a = l("884691"),
                n = l("65597"),
                s = l("77078"),
                r = l("812204"),
                c = l("685665"),
                d = l("42203"),
                o = l("665382"),
                u = l("155207"),
                f = l("516358"),
                v = l("507692"),
                h = l("58608"),
                m = l("550766"),
                I = l("986214"),
                E = l("161918"),
                x = l("744203"),
                p = l("248210"),
                C = l("525167"),
                T = l("698372"),
                S = l("969380"),
                g = l("817039"),
                A = l("141962"),
                _ = l("231457"),
                N = l("707181"),
                j = l("905647"),
                D = l("782340"),
                M = l("185767");

            function y(e) {
                var t;
                let {
                    applicationId: l,
                    guildId: n,
                    channelId: d,
                    onActivityLaunch: f
                } = e, {
                    AnalyticsLocationProvider: I
                } = (0, c.default)(r.default.ACTIVITY_SHELF_ACTIVITY_DETAILS);
                a.useEffect(() => {
                    (0, m.fetchShelf)({
                        guildId: n
                    })
                }, [n]);
                let x = (0, S.default)({
                        applicationId: null != l ? l : "",
                        size: 2048
                    }),
                    p = (0, E.useActivityShelfItemData)(null != n ? n : null, l);
                if (null == p) return null;
                let T = null != p.activity.activity_preview_video_asset_id ? (0, C.default)(l, p.activity.activity_preview_video_asset_id) : null,
                    g = j.ACTIVITIES_EXTRA_DETAILS[l],
                    A = (null == g ? void 0 : g.playersSuggestionMin) != null && (null == g ? void 0 : g.playersSuggestionMax) != null ? "".concat(g.playersSuggestionMin, " - ").concat(g.playersSuggestionMax) : void 0;
                return (0, i.jsx)(I, {
                    children: (0, i.jsx)("div", {
                        className: M.scrollContainer,
                        children: (0, i.jsxs)(s.Scroller, {
                            className: M.scroller,
                            children: [(0, i.jsx)("div", {
                                className: M.launcherOuterContainer,
                                children: (0, i.jsx)(L, {
                                    activityItem: p,
                                    onLaunch: f,
                                    channelId: d
                                })
                            }), (0, i.jsxs)("div", {
                                className: M.activityDetailsContainer,
                                children: [(0, i.jsxs)("div", {
                                    children: [null != T ? (0, i.jsx)("div", {
                                        className: M.heroVideoContainer,
                                        children: (0, i.jsx)(h.default, {
                                            loop: !0,
                                            autoPlay: !0,
                                            muted: !0,
                                            className: M.heroVideo,
                                            src: T,
                                            poster: x.url
                                        })
                                    }) : null, (0, i.jsx)("div", {
                                        className: M.detailsTitle,
                                        children: (0, i.jsx)(s.Heading, {
                                            variant: "heading-xxl/bold",
                                            children: p.application.name
                                        })
                                    }), (0, i.jsxs)("div", {
                                        className: M.detailsDetails,
                                        children: [null != A ? (0, i.jsxs)("div", {
                                            className: M.detailItem,
                                            children: [(0, i.jsx)(u.default, {
                                                width: 16,
                                                height: 16
                                            }), (0, i.jsx)(s.Text, {
                                                variant: "text-xs/semibold",
                                                className: M.detailItemText,
                                                children: D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_PLAYERS.format({
                                                    nPlayers: A
                                                })
                                            })]
                                        }) : null, (null == g ? void 0 : g.timeSuggestionMinutes) != null ? (0, i.jsxs)("div", {
                                            className: M.detailItem,
                                            children: [(0, i.jsx)(o.default, {
                                                width: 16,
                                                height: 16
                                            }), (0, i.jsx)(s.Text, {
                                                variant: "text-xs/semibold",
                                                className: M.detailItemText,
                                                children: D.default.Messages.EMBEDDED_ACTIVITIES_NUMBER_OF_MINUTES.format({
                                                    nMinutes: g.timeSuggestionMinutes
                                                })
                                            })]
                                        }) : null, (0, i.jsxs)("div", {
                                            className: M.detailItem,
                                            children: [(0, i.jsx)(v.default, {
                                                width: 16,
                                                height: 16
                                            }), (0, i.jsx)(s.Text, {
                                                variant: "text-xs/semibold",
                                                className: M.detailItemText,
                                                children: p.application.tags.slice(0, 3).join(", ")
                                            })]
                                        })]
                                    })]
                                }), (0, i.jsx)(s.Heading, {
                                    variant: "heading-lg/medium",
                                    className: M.detailsDescription,
                                    children: p.application.description
                                }), (0, i.jsx)("div", {
                                    className: M.divider
                                }), (0, i.jsx)("div", {
                                    className: M.imagesContainer,
                                    children: (null !== (t = null == g ? void 0 : g.gameplayImageUrls) && void 0 !== t ? t : []).map(e => (0, i.jsx)("img", {
                                        src: e,
                                        alt: D.default.Messages.EMBEDDED_ACTIVITIES_GAMEPLAY_ALT.format({
                                            activityName: p.application.name
                                        }),
                                        className: M.activityImage
                                    }, e))
                                })]
                            })]
                        })
                    })
                })
            }

            function L(e) {
                var t, r;
                let {
                    activityItem: o,
                    onLaunch: u,
                    channelId: v
                } = e, h = (0, S.default)({
                    applicationId: o.application.id,
                    size: 2048
                }), {
                    analyticsLocations: m
                } = (0, c.default)(), E = (0, T.default)(), [C, j] = a.useState(null !== (t = (0, x.getActivityGuildSuggestion)({
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== t ? t : void 0), [y, L] = a.useState(null !== (r = (0, p.getActivityVoiceChannelSuggestion)({
                    guildId: C,
                    allowGdmActivityChannelSuggestion: !0
                })) && void 0 !== r ? r : void 0), V = (0, n.default)([d.default], () => d.default.getChannel(y), [y]), R = (0, x.useSelectGuildOptions)(), b = (0, p.useSelectVoiceChannelOptions)(C), O = a.useCallback(() => {
                    null != y && (0, I.default)({
                        activityItem: o,
                        currentActivity: E,
                        channelId: y,
                        guildId: C,
                        embeddedActivitiesManager: A.default,
                        analyticsLocations: m
                    }).then(u)
                }, [o, m, E, u, y, C]), H = a.useCallback(() => {
                    (0, s.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await l.el("159747").then(l.bind(l, "159747"));
                        return t => (0, i.jsx)(e, {
                            activityItem: o,
                            ...t,
                            analyticsLocations: m
                        })
                    })
                }, [o, m]), B = null == V || null != V.guild_id && !(null != C && null != y && R.some(e => e.value === C) && b.some(e => e.value.channel.id === y)) && !0;
                return (0, i.jsxs)("div", {
                    className: M.launcherInnerContainer,
                    children: [(0, i.jsx)(g.default, {
                        applicationName: o.application.name,
                        imageBackground: h,
                        imageClassName: M.launchImage,
                        imageNotFoundClassName: M.brokenLaunchImage
                    }), (0, i.jsx)(s.Text, {
                        variant: "text-md/medium",
                        children: D.default.Messages.EMBEDDED_ACTIVITIES_START_OR_SHARE
                    }), null == v ? (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(s.Select, {
                            placeholder: D.default.Messages.GUILD_SELECT,
                            optionClassName: M.option,
                            options: R,
                            renderOptionValue: e => {
                                let t = e.find(e => e.value === C);
                                return null == t ? null : (0, i.jsx)(N.SelectGuildOption, {
                                    guildId: t.value
                                })
                            },
                            renderOptionLabel: e => {
                                let {
                                    value: t
                                } = e;
                                return (0, i.jsx)(N.SelectGuildOption, {
                                    guildId: t
                                })
                            },
                            isSelected: e => e === C,
                            select: e => {
                                var t;
                                j(e), L(null !== (t = (0, p.getActivityVoiceChannelSuggestion)({
                                    guildId: e
                                })) && void 0 !== t ? t : void 0)
                            },
                            serialize: e => e
                        }), (0, i.jsx)(s.Select, {
                            placeholder: D.default.Messages.EMBEDDED_ACTIVITIES_SELECT_VOICE_CHANNEL,
                            optionClassName: M.option,
                            options: b,
                            isSelected: e => {
                                let {
                                    channel: t
                                } = e;
                                return t.id === y
                            },
                            select: e => {
                                let {
                                    channel: t
                                } = e;
                                return L(t.id)
                            },
                            serialize: e => {
                                let {
                                    channel: t
                                } = e;
                                return t.id
                            },
                            renderOptionValue: () => {
                                let e = b.find(e => e.value.channel.id === y);
                                return null == e ? null : (0, i.jsx)(_.SelectChannelOption, {
                                    channel: e.value.channel,
                                    users: e.value.users
                                })
                            },
                            renderOptionLabel: e => {
                                let {
                                    value: {
                                        channel: t,
                                        users: l
                                    }
                                } = e;
                                return (0, i.jsx)(_.SelectChannelOption, {
                                    channel: t,
                                    users: l
                                })
                            }
                        }), (0, i.jsx)(s.Button, {
                            fullWidth: !0,
                            disabled: B,
                            onClick: O,
                            children: D.default.Messages.START
                        }), (0, i.jsx)("div", {
                            className: M.divider
                        }), (0, i.jsx)(s.Button, {
                            fullWidth: !0,
                            color: s.Button.Colors.PRIMARY,
                            onClick: H,
                            children: D.default.Messages.SHARE
                        })]
                    }) : (0, i.jsxs)("div", {
                        className: M.singleRowShareContainer,
                        children: [(0, i.jsx)(s.Button, {
                            fullWidth: !0,
                            disabled: B,
                            onClick: O,
                            children: D.default.Messages.START
                        }), (0, i.jsx)(s.Button, {
                            className: M.shareIconButton,
                            color: s.Button.Colors.PRIMARY,
                            onClick: H,
                            children: (0, i.jsx)(f.default, {})
                        })]
                    })]
                })
            }