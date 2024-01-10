            "use strict";
            n.r(t), n.d(t, {
                GuildNoticeBody: function() {
                    return q
                },
                VoiceChannelType: function() {
                    return a
                },
                LiveVoiceOrStageChannelNotice: function() {
                    return en
                },
                default: function() {
                    return ea
                }
            }), n("222007");
            var a, s, i = n("37983"),
                l = n("884691"),
                r = n("446674"),
                o = n("77078"),
                u = n("419830"),
                d = n("478761"),
                c = n("810467"),
                E = n("393414"),
                f = n("716214"),
                _ = n("488464"),
                h = n("998716"),
                C = n("230324"),
                T = n("834052"),
                I = n("160870"),
                S = n("957255"),
                N = n("316133"),
                A = n("660279"),
                p = n("943232"),
                m = n("36694"),
                g = n("945330"),
                R = n("272339"),
                O = n("718550"),
                L = n("228427"),
                v = n("811305"),
                M = n("599110"),
                P = n("449008"),
                D = n("374021"),
                y = n("398604"),
                x = n("395869"),
                b = n("824650"),
                U = n("431934"),
                G = n("73675"),
                j = n("1339"),
                k = n("593897"),
                w = n("466148"),
                F = n("534222"),
                B = n("841363"),
                H = n("822516"),
                V = n("936965"),
                Y = n("745049"),
                W = n("49111"),
                K = n("782340"),
                z = n("640701");
            let q = l.memo(function(e) {
                let {
                    heading: t,
                    location: n,
                    locationIcon: a,
                    details: s,
                    detailsIcon: l,
                    topic: r,
                    onClickCloseIcon: u,
                    onClickTopicText: d,
                    children: c
                } = e, E = (0, i.jsx)(o.Text, {
                    color: "header-primary",
                    variant: "text-md/semibold",
                    className: z.eventName,
                    children: r
                });
                return (0, i.jsxs)("div", {
                    className: z.channelNotice,
                    children: [(0, i.jsxs)("div", {
                        className: z.textBlock,
                        children: [(0, i.jsx)("div", {
                            className: z.liveIndicator
                        }), (0, i.jsx)(o.Text, {
                            color: "text-positive",
                            variant: "text-xs/bold",
                            className: z.liveNowText,
                            children: t
                        }), null != u && (0, i.jsx)(o.Clickable, {
                            onClick: u,
                            className: z.closeIcon,
                            "aria-label": K.default.Messages.CLOSE,
                            children: (0, i.jsx)(g.default, {
                                height: 16,
                                width: 16
                            })
                        })]
                    }), null == d ? E : (0, i.jsx)(o.Button, {
                        size: o.Button.Sizes.MIN,
                        look: o.Button.Looks.LINK,
                        color: o.Button.Colors.PRIMARY,
                        onClick: d,
                        children: E
                    }), (0, i.jsxs)("div", {
                        className: z.textBlock,
                        children: [a, (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            className: z.channelName,
                            children: n
                        }), null != s && null != l && (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(o.Text, {
                                className: z.dotDivider,
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: "•"
                            }), l, (0, i.jsx)(o.Text, {
                                color: "header-secondary",
                                variant: "text-xs/normal",
                                children: s
                            })]
                        })]
                    }), c]
                })
            });

            function Q(e) {
                let {
                    guildEvent: t,
                    channel: n
                } = e, a = (0, r.useStateFromStoresArray)([N.default], () => N.default.getVoiceStatesForChannel(n).map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                }), [n]), s = (0, u.getChannelIconComponent)(n);
                return (0, i.jsx)(q, {
                    onClickCloseIcon: () => (0, x.hideLiveChannelNotice)({
                        eventId: null == t ? void 0 : t.id
                    }),
                    heading: K.default.Messages.STAGE_CHANNEL_LIVE_NOW,
                    topic: t.name,
                    location: n.name,
                    locationIcon: null != s ? (0, i.jsx)(s, {
                        width: 16,
                        height: 16,
                        className: z.stageIcon
                    }) : null,
                    children: (0, i.jsx)(en, {
                        channel: n,
                        speakers: a,
                        voiceType: 1
                    })
                })
            }

            function Z(e) {
                let {
                    guildEvent: t,
                    noticeType: n
                } = e, a = (0, H.getNextRecurrenceIdInEvent)(t), s = (0, r.useStateFromStores)([y.default], () => y.default.isInterestedInEventRecurrence(t.id, a), [t.id, a]), l = (0, r.useStateFromStores)([U.default], () => U.default.getUpcomingNoticeSeenTime(t.id), [t.id]);
                return !s && null == l && (0, x.markUpcomingEventNoticeAsSeen)(t.id), (0, i.jsxs)(o.Button, {
                    fullWidth: !0,
                    className: z.joinButton,
                    innerClassName: z.rsvpButton,
                    onClick: function() {
                        (0, V.default)(t.id, null, t.guild_id, () => setTimeout(() => (0, x.hideUpcomingEventNotice)(t.id), 1e3)), M.default.track(W.AnalyticEvents.CHANNEL_NOTICE_CTA_CLICKED, {
                            guild_id: t.guild_id,
                            notice_type: n
                        })
                    },
                    look: s ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                    color: s ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
                    size: o.Button.Sizes.SMALL,
                    children: [s ? (0, i.jsx)(m.default, {
                        width: 16,
                        height: 16,
                        className: z.buttonIcon
                    }) : (0, i.jsx)(A.default, {
                        width: 16,
                        height: 16,
                        className: z.buttonIcon
                    }), K.default.Messages.INDICATE_RSVP]
                })
            }

            function X(e) {
                var t;
                let {
                    guildEvent: n,
                    noticeType: a
                } = e, s = (0, B.getLocationFromEvent)(n), r = null != s ? (0, j.guildEventDetailsParser)(s, !0) : null, d = (0, B.getChannelFromEvent)(n), c = (0, u.getChannelIconComponent)(d), {
                    startTime: E,
                    endTime: f
                } = (0, w.default)(n.id), {
                    startDateTimeString: _,
                    upcomingEvent: h,
                    diffMinutes: C
                } = (0, H.getEventTimeData)(E.toISOString(), null == f ? void 0 : f.toISOString()), T = h ? C > 0 ? K.default.Messages.STARTING_IN_MINUTES.format({
                    minutes: C
                }) : K.default.Messages.STARTING_SOON : K.default.Messages.STARTING_ON_DATE.format({
                    date: _
                });
                return l.useEffect(() => {
                    M.default.track(W.AnalyticEvents.CHANNEL_NOTICE_VIEWED, {
                        notice_type: a,
                        guild_id: n.guild_id
                    })
                }, [n, a]), (0, i.jsxs)("div", {
                    className: z.channelNotice,
                    children: [(0, i.jsxs)("div", {
                        className: z.textBlock,
                        children: [(0, i.jsx)(o.Clickable, {
                            onClick: () => (0, D.openGuildEventDetails)({
                                eventId: n.id
                            }),
                            className: z.eventNameClickable,
                            children: (0, i.jsx)(o.Text, {
                                color: "header-primary",
                                variant: "text-md/semibold",
                                className: z.eventName,
                                children: n.name
                            })
                        }), (0, i.jsx)(o.Clickable, {
                            onClick: () => {
                                M.default.track(W.AnalyticEvents.CHANNEL_NOTICE_CLOSED, {
                                    notice_type: a,
                                    guild_id: n.guild_id
                                }), (0, x.hideUpcomingEventNotice)(n.id)
                            },
                            className: z.closeIcon,
                            "aria-label": K.default.Messages.CLOSE,
                            children: (0, i.jsx)(g.default, {
                                height: 16,
                                width: 16
                            })
                        })]
                    }), (0, i.jsxs)("div", {
                        className: z.textBlock,
                        children: [(0, i.jsx)(p.default, {
                            className: z.stageIcon,
                            width: 16,
                            height: 16
                        }), (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            className: z.startTime,
                            children: T
                        })]
                    }), (0, i.jsxs)("div", {
                        className: z.textBlock,
                        children: [null != c ? (0, i.jsx)(c, {
                            width: 16,
                            height: 16,
                            className: z.stageIcon
                        }) : (0, i.jsx)(O.default, {
                            width: 16,
                            height: 16,
                            className: z.stageIcon
                        }), (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            className: z.channelName,
                            children: null !== (t = null == d ? void 0 : d.name) && void 0 !== t ? t : r
                        })]
                    }), (0, i.jsx)(Z, {
                        guildEvent: n,
                        noticeType: a
                    })]
                })
            }

            function J(e) {
                let {
                    guildEvent: t
                } = e, n = (0, B.getLocationFromEvent)(t);
                return null == n ? null : (0, i.jsx)(q, {
                    onClickCloseIcon: () => (0, x.hideLiveChannelNotice)({
                        eventId: null == t ? void 0 : t.id
                    }),
                    heading: K.default.Messages.HAPPENING_NOW,
                    topic: t.name,
                    location: (0, j.guildEventDetailsParser)(n, !0),
                    locationIcon: (0, i.jsx)(O.default, {
                        width: 16,
                        height: 16,
                        className: z.stageIcon
                    }),
                    children: (0, i.jsx)($, {
                        guildEvent: t
                    })
                })
            }

            function $(e) {
                let {
                    guildEvent: t
                } = e, n = l.useCallback(() => {
                    (0, D.openGuildEventDetails)({
                        eventId: t.id
                    })
                }, [t]);
                return (0, i.jsx)(o.Button, {
                    fullWidth: !0,
                    className: z.joinButton,
                    onClick: n,
                    color: o.Button.Colors.GREEN,
                    size: o.Button.Sizes.SMALL,
                    children: K.default.Messages.SEE_DETAIL
                })
            }

            function ee(e) {
                let {
                    channel: t,
                    label: n
                } = e;
                return (0, i.jsx)(o.Button, {
                    fullWidth: !0,
                    className: z.joinButton,
                    onClick: () => {
                        null != t && null != t.getGuildId() && ((0, f.connectAndOpen)(t), (0, E.transitionToGuild)(t.getGuildId(), t.id))
                    },
                    color: o.Button.Colors.GREEN,
                    size: o.Button.Sizes.SMALL,
                    children: n
                })
            }

            function et(e) {
                let {
                    stageInstance: t,
                    channel: n
                } = e, {
                    speakers: a,
                    listenerCount: s
                } = (0, r.useStateFromStoresObject)([_.default], () => {
                    let e = _.default.getMutableParticipants(n.id, h.StageChannelParticipantNamedIndex.SPEAKER),
                        t = _.default.getParticipantCount(n.id, h.StageChannelParticipantNamedIndex.AUDIENCE);
                    return {
                        speakers: [...new Set(e.map(e => e.user))],
                        listenerCount: t
                    }
                }, [n.id]), l = K.default.Messages.LISTENING_COUNT.format({
                    count: "".concat(s)
                });
                return (0, i.jsx)(q, {
                    onClickCloseIcon: () => (0, x.hideLiveChannelNotice)({
                        stageId: null == t ? void 0 : t.id
                    }),
                    heading: K.default.Messages.STAGE_CHANNEL_LIVE_NOW,
                    location: n.name,
                    details: l,
                    detailsIcon: (0, i.jsx)(R.default, {
                        width: 14,
                        height: 14,
                        className: z.stageIcon
                    }),
                    locationIcon: (0, i.jsx)(L.default, {
                        width: 16,
                        height: 16,
                        className: z.stageIcon
                    }),
                    topic: t.topic,
                    children: (0, i.jsx)(en, {
                        channel: n,
                        speakers: a,
                        voiceType: 2
                    })
                })
            }

            function en(e) {
                let {
                    channel: t,
                    speakers: n,
                    voiceType: a
                } = e, s = t.getGuildId(), u = l.useMemo(() => n.slice(0, 3), [n]), d = (0, r.useStateFromStores)([S.default], () => S.default.can(W.Permissions.CONNECT, t)), c = (0, I.default)(t.id), E = K.default.Messages.JOIN;
                switch (a) {
                    case 1:
                        E = K.default.Messages.JOIN;
                        break;
                    case 2:
                        E = K.default.Messages.STAGE_CHANNEL_JOIN_BUTTON, (null == c ? void 0 : c.speaker) ? E = K.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != c && (E = K.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON);
                        break;
                    case 3:
                        E = K.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA;
                        break;
                    default:
                        (0, P.assertNever)(a)
                }
                return null == s ? null : (0, i.jsxs)(i.Fragment, {
                    children: [u.length > 0 ? (0, i.jsxs)("div", {
                        className: z.textBlock,
                        children: [(0, i.jsx)(v.default, {
                            guildId: s,
                            users: u,
                            showUserPopout: !0,
                            size: v.Sizes.SIZE_16
                        }), (0, i.jsx)(o.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            className: z.userNames,
                            children: (0, C.summarizeUsernamesParticipating)(s, u, null == t ? void 0 : t.id, n.length)
                        })]
                    }) : null, d && null == c && (0, i.jsx)(ee, {
                        channel: t,
                        label: E
                    })]
                })
            }(s = a || (a = {}))[s.VOICE = 1] = "VOICE", s[s.STAGE = 2] = "STAGE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM";
            var ea = l.memo(function(e) {
                let {
                    guild: t
                } = e, {
                    showRedesignedLiveChannelNotice: n
                } = (0, d.useChannelNoticeRedesignExperiment)(!0), a = (0, k.useActiveEventOrStageInstanceChannel)(t.id), s = (0, F.useGuildActiveEvent)(t.id), l = (0, F.useGuildUpcomingEventsNotice)(t.id), {
                    canSeeUpcomingEventsNotices: o
                } = G.default.useExperiment({
                    guildId: t.id,
                    location: "Guild Channel Notice"
                }, {
                    autoTrackExposure: !1
                }), u = (0, r.useStateFromStores)([T.default], () => T.default.getStageInstanceByChannel(null == a ? void 0 : a.id), [a]), {
                    isStageNoticeHidden: E,
                    isEventNoticeHidden: f
                } = (0, r.useStateFromStoresObject)([b.default], () => ({
                    isStageNoticeHidden: b.default.isLiveChannelNoticeHidden({
                        stageId: null == u ? void 0 : u.id
                    }),
                    isEventNoticeHidden: b.default.isLiveChannelNoticeHidden({
                        eventId: null == s ? void 0 : s.id
                    })
                }), [u, s]), _ = null, h = null != u && null != a && !E;
                if (n) return (0, i.jsx)(c.default, {
                    guild: t
                });
                null == s || f ? h && (_ = (0, i.jsx)(et, {
                    stageInstance: u,
                    channel: a
                })) : s.entity_type === Y.GuildScheduledEventEntityTypes.STAGE_INSTANCE && h ? _ = (0, i.jsx)(et, {
                    stageInstance: u,
                    channel: a
                }) : s.entity_type === Y.GuildScheduledEventEntityTypes.EXTERNAL ? _ = (0, i.jsx)(J, {
                    guildEvent: s
                }) : s.entity_type === Y.GuildScheduledEventEntityTypes.VOICE && null != a && (_ = (0, i.jsx)(Q, {
                    guildEvent: s,
                    channel: a
                }));
                let C = t.hasFeature(W.GuildFeatures.COMMUNITY) || t.hasFeature(W.GuildFeatures.HUB);
                if (null == _ && null != l && !C) {
                    let {
                        upcomingEvent: e,
                        noticeType: n
                    } = l;
                    G.default.trackExposure({
                        guildId: t.id,
                        location: "Guild Live Channel Notice"
                    }), _ = o ? (0, i.jsx)(X, {
                        guildEvent: e,
                        noticeType: n
                    }) : null
                }
                return _
            })