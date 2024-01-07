            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return B
                }
            }), a("222007");
            var l = a("37983"),
                n = a("884691"),
                s = a("414456"),
                i = a.n(s),
                d = a("298386"),
                r = a("446674"),
                u = a("77078"),
                o = a("834897"),
                c = a("419830"),
                f = a("374021"),
                m = a("398604"),
                h = a("628059"),
                E = a("841363"),
                g = a("822516"),
                I = a("93550"),
                _ = a("267567"),
                x = a("393414"),
                v = a("716214"),
                S = a("488464"),
                C = a("998716"),
                N = a("42203"),
                p = a("957255"),
                T = a("316133"),
                A = a("943232"),
                j = a("93393"),
                M = a("718550"),
                D = a("811305"),
                F = a("599110"),
                L = a("887446"),
                R = a("154925"),
                b = a("49111"),
                G = a("515631"),
                y = a("745049"),
                O = a("782340"),
                H = a("53176");

            function k(e) {
                let {
                    event: t
                } = e, {
                    scheduled_start_time: a,
                    scheduled_end_time: s
                } = t, d = (0, m.isGuildScheduledEventActive)(t), [{
                    startDateTimeString: r,
                    endDateTimeString: o,
                    currentOrPastEvent: c,
                    upcomingEvent: f,
                    diffMinutes: h
                }, E] = n.useState((0, g.getEventTimeData)(a, s));
                n.useEffect(() => {
                    let e = setInterval(() => E((0, g.getEventTimeData)(a, s)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, []);
                let I = r,
                    _ = "header-secondary";
                return d ? (I = O.default.Messages.STAGE_CHANNEL_LIVE_NOW, _ = "text-positive") : c ? (I = O.default.Messages.STARTING_SOON, _ = "text-brand") : f ? (I = h > 0 ? O.default.Messages.STARTING_IN_MINUTES.format({
                    minutes: h
                }) : O.default.Messages.STARTING_SOON, _ = "text-brand") : null != o && "" !== o && (I = O.default.Messages.START_DATE_TO_END_DATE.format({
                    start: r,
                    end: o
                })), (0, l.jsxs)("div", {
                    className: i(H.eventTime, {
                        [H.isActive]: d,
                        [H.isBrand]: c || f
                    }),
                    children: [(0, l.jsx)(j.default, {
                        width: 12,
                        height: 12
                    }), (0, l.jsxs)(u.Text, {
                        color: _,
                        variant: "text-xs/normal",
                        className: H.eventTimeLabel,
                        children: [I, (0, l.jsx)("span", {
                            className: H.separator,
                            children: "•"
                        })]
                    })]
                })
            }

            function U(e) {
                let {
                    event: t,
                    channel: a,
                    isCollapsedSize: s,
                    onEventClick: i
                } = e, d = (0, r.useStateFromStores)([p.default], () => p.default.can(b.Permissions.CONNECT, a)), o = n.useCallback(() => {
                    null != a && null != a.getGuildId() && d && ((0, v.connectAndOpen)(a), (0, x.transitionToGuild)(a.getGuildId(), a.id))
                }, [a, d]), c = (0, I.default)(t), f = t.entity_type === y.GuildScheduledEventEntityTypes.STAGE_INSTANCE ? O.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : O.default.Messages.JOIN;
                if (null == t.image || s) return null != a && d ? (0, l.jsx)("div", {
                    className: H.eventJoinContainer,
                    children: (0, l.jsx)(u.Button, {
                        className: H.joinButton,
                        onClick: o,
                        fullWidth: !0,
                        color: u.Button.Colors.GREEN,
                        children: f
                    })
                }) : null;
                return null != a && d ? (0, l.jsxs)(u.Clickable, {
                    onClick: o,
                    className: H.eventJoinContainer,
                    children: [(0, l.jsx)("div", {
                        className: H.eventImg,
                        style: {
                            backgroundImage: "url(".concat(c, ")")
                        }
                    }), (0, l.jsx)("div", {
                        className: H.eventImgHover,
                        children: (0, l.jsx)(u.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: H.eventImgJoinButton,
                            children: f
                        })
                    })]
                }) : (0, l.jsx)(u.Clickable, {
                    onClick: i,
                    className: H.eventJoinContainer,
                    children: (0, l.jsx)("div", {
                        className: H.eventImg,
                        style: {
                            backgroundImage: "url(".concat(c, ")")
                        }
                    })
                })
            }

            function w(e) {
                var t;
                let {
                    event: a,
                    channel: n,
                    isActive: s,
                    isCollapsedSize: d
                } = e, r = (0, c.getChannelIconComponent)(n);
                return (0, l.jsxs)("div", {
                    className: H.eventInfo,
                    children: [(!s || d) && (0, l.jsx)(k, {
                        event: a
                    }), (0, l.jsx)("div", {
                        className: H.location,
                        children: null != n && null != r ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(r, {
                                width: 12,
                                height: 12,
                                className: H.icon
                            }), (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: H.locationLabel,
                                children: n.name
                            })]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(M.default, {
                                height: 12,
                                width: 12,
                                className: i(H.channelContainer, H.icon)
                            }), (0, l.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                className: H.locationLabel,
                                children: (0, h.guildEventDetailsParser)(null !== (t = (0, E.getLocationFromEvent)(a)) && void 0 !== t ? t : void 0, !0)
                            })]
                        })
                    })]
                })
            }

            function B(e) {
                let {
                    event: t,
                    isInList: a
                } = e, {
                    guild_id: s
                } = t, i = (0, o.default)(G.COLLAPSED_SIZE_MEDIA_QUERY), u = (0, m.isGuildScheduledEventActive)(t), c = (0, r.useStateFromStores)([N.default], () => N.default.getChannel(t.channel_id)), h = (0, r.useStateFromStores)([_.default], () => _.default.isLurking(s), [s]), E = n.useCallback(() => {
                    F.default.track(b.AnalyticEvents.HOME_EVENT_CLICKED, {
                        guild_id: s,
                        home_session_id: L.default.getHomeSessionId(s),
                        guild_scheduled_event_id: t.id,
                        is_active: u
                    }), (0, f.openGuildEventDetails)({
                        eventId: t.id,
                        parentGuildId: s
                    })
                }, [t, s, u]), g = (0, r.useStateFromStoresArray)([T.default], () => null == c ? [] : T.default.getVoiceStatesForChannel(c).map(e => {
                    let {
                        user: t
                    } = e;
                    return t
                }), [c]), I = (0, r.useStateFromStores)([S.default], () => {
                    if (null != c && c.type === d.ChannelTypes.GUILD_STAGE_VOICE) return S.default.getParticipantCount(null == c ? void 0 : c.id, C.StageChannelParticipantNamedIndex.AUDIENCE)
                }, [c]);
                return (0, l.jsx)(R.ActiveNowBase, {
                    listItemId: a ? t.id : void 0,
                    shouldUseCollapsedLayout: !1,
                    onClick: h ? void 0 : E,
                    icon: u ? (0, l.jsx)("div", {
                        className: H.liveNowIcon
                    }) : (0, l.jsx)(A.default, {
                        width: R.ACTIVE_NOW_ICON_SIZE,
                        height: R.ACTIVE_NOW_ICON_SIZE
                    }),
                    iconTooltipText: O.default.Messages.GUILD_HOME_EVENTS_TOOLTIP_TEXT,
                    header: t.name,
                    textNode: (0, l.jsx)(w, {
                        event: t,
                        channel: c,
                        isActive: u,
                        isCollapsedSize: i
                    }),
                    accessoryNode: u ? (0, l.jsx)(D.default, {
                        guildId: s,
                        users: g,
                        count: I,
                        size: D.Sizes.SIZE_16,
                        max: R.DISPLAYED_PARTICIPANT_AVATARS
                    }) : null,
                    children: u && (0, l.jsx)(U, {
                        event: t,
                        channel: c,
                        isCollapsedSize: i,
                        onEventClick: E
                    })
                })
            }