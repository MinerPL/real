(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["75939"], {
        75651: function(e, n, t) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E"
        },
        753235: function(e, n, t) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E"
        },
        882550: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return u
                }
            });
            var l = t("884691"),
                s = t("446674"),
                i = t("851387"),
                a = t("697218");

            function u(e) {
                let n = (0, s.useStateFromStores)([a.default], () => a.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return l.useEffect(() => {
                    null == n && (null == e ? void 0 : e.creator_id) != null && i.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, n]), n
            }
        },
        397680: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return i
                },
                getEventException: function() {
                    return a
                }
            });
            var l = t("446674"),
                s = t("398604");

            function i(e, n) {
                let t = (0, l.useStateFromStoresArray)([s.default], () => {
                    var e, t;
                    return null !== (t = null === (e = s.default.getGuildScheduledEvent(n)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== t ? t : []
                });
                return u(t, e)
            }

            function a(e, n) {
                var t, l;
                let i = null !== (l = null === (t = s.default.getGuildScheduledEvent(n)) || void 0 === t ? void 0 : t.guild_scheduled_event_exceptions) && void 0 !== l ? l : [];
                return u(i, e)
            }

            function u(e, n) {
                let t = null == e ? void 0 : e.find(e => e.event_exception_id === n);
                return t
            }
        },
        466148: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return d
                },
                getEventSchedule: function() {
                    return o
                }
            });
            var l = t("627445"),
                s = t.n(l),
                i = t("446674"),
                a = t("398604"),
                u = t("397680"),
                r = t("822516");

            function d(e, n, t) {
                var l;
                let d = null !== (l = (0, i.useStateFromStores)([a.default], () => a.default.getGuildScheduledEvent(e))) && void 0 !== l ? l : t;
                s(null != d, "Event must be defined"), n = null != n ? n : (0, r.getNextRecurrenceIdInEvent)(d);
                let o = (0, u.default)(n, e);
                return c(d, o, n)
            }

            function o(e, n) {
                let t = (0, u.getEventException)(n, e.id);
                return c(e, t, n)
            }

            function c(e, n, t) {
                if (null == e.recurrence_rule || null == t) return {
                    startTime: new Date(e.scheduled_start_time),
                    endTime: null != e.scheduled_end_time ? new Date(e.scheduled_end_time) : null
                };
                let l = (0, r.getBaseScheduleForRecurrence)(t, e),
                    {
                        startDate: s,
                        endDate: i
                    } = (0, r.getScheduleForRecurrenceWithException)(l, n);
                return {
                    startTime: s.toDate(),
                    endTime: null == i ? void 0 : i.toDate()
                }
            }
        },
        914169: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                createEventLocationClickHandler: function() {
                    return U
                },
                default: function() {
                    return V
                }
            });
            var l = t("37983"),
                s = t("884691"),
                i = t("414456"),
                a = t.n(i),
                u = t("446674"),
                r = t("77078"),
                d = t("970728"),
                o = t("987317"),
                c = t("716214"),
                E = t("813006"),
                v = t("42203"),
                m = t("305961"),
                h = t("580357"),
                N = t("174622"),
                f = t("660279"),
                g = t("36694"),
                C = t("374021"),
                p = t("398604"),
                I = t("1339"),
                x = t("882550"),
                S = t("189443"),
                _ = t("822516"),
                R = t("93550"),
                T = t("255050"),
                L = t("400271"),
                j = t("931874"),
                D = t("936965"),
                B = t("745049"),
                G = t("782340"),
                k = t("336179");
            let y = (e, n) => t => {
                    t.stopPropagation(), o.default.selectVoiceChannel(e.channel_id, !1), null == n || n(t)
                },
                A = (e, n) => t => {
                    let l = v.default.getChannel(e.channel_id);
                    null != l && (t.stopPropagation(), (0, c.connectAndOpen)(l), null == n || n(t))
                },
                U = (e, n) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case B.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return A(e, n);
                        case B.GuildScheduledEventEntityTypes.VOICE:
                            return y(e, n)
                    }
                    return () => {}
                },
                b = (e, n) => n && [B.GuildScheduledEventEntityTypes.STAGE_INSTANCE, B.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                M = s.memo(function(e) {
                    var n;
                    let {
                        guild: t,
                        guildScheduledEvent: i,
                        channel: a,
                        isMember: o
                    } = e, c = (0, u.useStateFromStores)([m.default], () => {
                        var e;
                        return null == t ? null : null !== (e = m.default.getGuild(t.id)) && void 0 !== e ? e : new E.default(t)
                    }, [t]), v = (0, j.getLocationDataForEvent)(i, a), f = s.useCallback(e => {
                        o && null != i && (e.stopPropagation(), (0, d.transitionToGuildFromEventInvite)(i))
                    }, [o, i]), g = s.useCallback(e => {
                        U(i)(e)
                    }, [i]);
                    if (null == c) return null;
                    let C = null == v ? void 0 : v.IconComponent,
                        p = (0, l.jsxs)(l.Fragment, {
                            children: [null != C && (0, l.jsx)(C, {
                                width: 16,
                                height: 16,
                                className: k.channelIcon
                            }), (0, l.jsx)(r.Text, {
                                className: k.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, I.guildEventDetailsParser)(null !== (n = null == v ? void 0 : v.locationName) && void 0 !== n ? n : "", !0)
                            })]
                        });
                    return (0, l.jsxs)("div", {
                        className: k.inviteDetailsContainer,
                        children: [(0, l.jsx)(N.default.Icon, {
                            guild: c,
                            onClick: f
                        }), (0, l.jsxs)("div", {
                            className: k.verticalContainer,
                            children: [(0, l.jsxs)("div", {
                                className: k.guildChannelInfoContainer,
                                children: [(0, l.jsx)(h.default, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: r.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: k.guildBadge
                                }), (0, l.jsx)(r.Clickable, {
                                    className: k.guildNameClickable,
                                    onClick: f,
                                    children: (0, l.jsx)(r.Heading, {
                                        className: o ? k.guildNameLinkable : k.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, l.jsx)("div", {
                                className: k.channelInfoContainer,
                                children: b(i, o) ? (0, l.jsx)(r.Clickable, {
                                    className: k.channelLocationLink,
                                    onClick: g,
                                    children: p
                                }) : p
                            })]
                        })]
                    })
                }),
                P = s.memo(function(e) {
                    let {
                        guildId: n,
                        guildScheduledEventId: t,
                        recurrenceId: s,
                        isActive: i,
                        isEnded: a,
                        isMember: d,
                        isExternal: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = (0, u.useStateFromStores)([p.default], () => p.default.isInterestedInEventRecurrence(t, s), [t, s]), m = e => {
                        e.stopPropagation(), d ? i && E() : c()
                    };
                    return d ? i ? (0, l.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: e => {
                            !o && m(e)
                        },
                        color: o ? r.Button.Colors.TRANSPARENT : r.Button.Colors.GREEN,
                        children: o ? G.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : G.default.Messages.JOIN_GUILD
                    }) : a ? (0, l.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        disabled: !0,
                        color: r.Button.Colors.PRIMARY,
                        look: r.Button.Looks.OUTLINED,
                        children: G.default.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, l.jsxs)(r.Button, {
                        className: k.button,
                        innerClassName: k.innerButton,
                        size: r.Button.Sizes.SMALL,
                        color: r.Button.Colors.PRIMARY,
                        look: v ? r.Button.Looks.OUTLINED : r.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), (0, D.default)(t, s, n)
                        },
                        children: [v ? (0, l.jsx)(g.default, {
                            width: 16,
                            height: 16,
                            className: k.buttonIcon
                        }) : (0, l.jsx)(f.default, {
                            width: 16,
                            height: 16,
                            className: k.buttonIcon
                        }), G.default.Messages.INDICATE_RSVP]
                    }) : (0, l.jsx)(r.Button, {
                        className: k.button,
                        size: r.Button.Sizes.SMALL,
                        onClick: m,
                        color: r.Button.Colors.GREEN,
                        children: G.default.Messages.JOIN_GUILD
                    })
                }),
                w = s.memo(function(e) {
                    var n;
                    let {
                        guildScheduledEvent: t,
                        guild: i,
                        channel: u,
                        isMember: d,
                        recurrenceId: o,
                        onAcceptInstantInvite: c,
                        onTransitionToInviteChannel: E
                    } = e, v = (null == t ? void 0 : t.recurrence_rule) == null || null == o || (0, _.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == t ? void 0 : t.recurrence_rule), o), m = (0, x.default)(t), h = s.useCallback(() => {
                        d && null != t && (0, C.openGuildEventDetails)({
                            eventId: t.id,
                            recurrenceId: o
                        })
                    }, [d, t, o]);
                    if (null == t || !v) return null;
                    let f = (0, p.isGuildScheduledEventActive)(t),
                        g = (0, p.isGuildEventEnded)(t),
                        I = t.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, l.jsx)(N.default, {
                        className: a({
                            [k.clickable]: d
                        }),
                        children: (0, l.jsxs)(r.Clickable, {
                            onClick: h,
                            children: [null != t.image && (0, l.jsx)(T.default, {
                                source: (0, R.default)(t),
                                className: k.banner
                            }), (0, l.jsx)(L.default, {
                                name: t.name,
                                description: null !== (n = t.description) && void 0 !== n ? n : void 0,
                                descriptionClassName: k.eventDescription,
                                guildId: t.guild_id,
                                creator: m,
                                guildEventId: t.id,
                                eventPreview: t,
                                recurrenceId: o
                            }), (0, l.jsxs)("div", {
                                className: k.footerContainer,
                                children: [(0, l.jsx)(M, {
                                    guild: i,
                                    channel: u,
                                    guildScheduledEvent: t,
                                    isMember: d
                                }), (0, l.jsx)(P, {
                                    isActive: f,
                                    isEnded: g,
                                    isMember: d,
                                    guildId: t.guild_id,
                                    guildScheduledEventId: t.id,
                                    recurrenceId: o,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: E,
                                    isExternal: I
                                })]
                            })]
                        })
                    })
                });
            var V = w
        },
        931874: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                getLocationDataForEvent: function() {
                    return a
                }
            });
            var l = t("419830"),
                s = t("718550"),
                i = t("841363");

            function a(e, n) {
                let t, a;
                if (null == e) return null;
                let u = (0, i.getLocationFromEvent)(e);
                if (null != u) t = s.default, a = u;
                else {
                    if (null == n) return null;
                    t = (0, l.getSimpleChannelIconComponent)(n.type), a = n.name
                }
                return {
                    IconComponent: t,
                    locationName: a
                }
            }
        },
        936965: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return g
                }
            }), t("222007");
            var l, s, i = t("37983"),
                a = t("884691"),
                u = t("77078"),
                r = t("271938"),
                d = t("398604"),
                o = t("322224"),
                c = t("822516"),
                E = t("745049"),
                v = t("782340"),
                m = t("616762");

            function h(e, n) {
                let t = r.default.getId();
                return d.default.getRsvp(e, n, t)
            }

            function N(e, n, t, l) {
                let s = h(e, n);
                null != s || l === E.GuildScheduledEventUserResponses.UNINTERESTED && null == n ? o.default.deleteRsvpForGuildEvent(e, n, t) : o.default.createRsvpForGuildEvent(e, n, t, l)
            }(s = l || (l = {}))[s.SERIES = 0] = "SERIES", s[s.RECURRENCE = 1] = "RECURRENCE";

            function f(e) {
                let {
                    event: n,
                    recurrenceId: t,
                    guildId: l,
                    onRsvp: s,
                    ...r
                } = e, [d, o] = a.useState(0), c = h(n.id, null), f = (null == c ? void 0 : c.response) === E.GuildScheduledEventUserResponses.INTERESTED, g = f ? E.GuildScheduledEventUserResponses.UNINTERESTED : E.GuildScheduledEventUserResponses.INTERESTED, C = g === E.GuildScheduledEventUserResponses.INTERESTED ? v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_INTERESTED : v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_HEADER_UNINTERESTED;
                return (0, i.jsx)(u.ConfirmModal, {
                    ...r,
                    header: C,
                    confirmText: v.default.Messages.OK,
                    cancelText: v.default.Messages.CANCEL,
                    onConfirm: () => {
                        0 === d ? N(n.id, null, l, g) : N(n.id, t, l, g), null == s || s(), r.onClose()
                    },
                    confirmButtonColor: u.Button.Colors.BRAND,
                    children: (0, i.jsx)(u.RadioGroup, {
                        className: m.responseOptions,
                        value: d,
                        options: [{
                            name: v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_SERIES,
                            value: 0
                        }, {
                            name: v.default.Messages.GUILD_SCHEDULED_EVENT_RSVP_PICKER_OPTION_RECURRENCE,
                            value: 1
                        }],
                        onChange: e => o(e.value)
                    })
                })
            }

            function g(e, n, t, l) {
                let s = d.default.getGuildScheduledEvent(e);
                if (null == s) return;
                let a = null != n ? n : (0, c.getNextRecurrenceIdInEvent)(s),
                    r = h(s.id, a);
                null == a ? (N(e, null, t, E.GuildScheduledEventUserResponses.INTERESTED), null == l || l()) : null != r ? (N(e, a, t, E.GuildScheduledEventUserResponses.UNINTERESTED), null == l || l()) : (0, u.openModalLazy)(() => Promise.resolve(e => (0, i.jsx)(f, {
                    ...e,
                    event: s,
                    recurrenceId: a,
                    guildId: t,
                    onRsvp: l
                })))
            }
        },
        174622: function(e, n, t) {
            "use strict";
            t.r(n), t.d(n, {
                default: function() {
                    return G
                }
            }), t("424973"), t("222007");
            var l = t("37983"),
                s = t("884691"),
                i = t("414456"),
                a = t.n(i),
                u = t("77078"),
                r = t("843962"),
                d = t("679653"),
                o = t("419830"),
                c = t("407063"),
                E = t("845579"),
                v = t("315102"),
                m = t("474293"),
                h = t("145131"),
                N = t("953109"),
                f = t("476263"),
                g = t("782340"),
                C = t("312679");
            let p = e => {
                    let {
                        text: n,
                        extra: t
                    } = e;
                    return (0, l.jsxs)(u.FormTitle, {
                        className: C.header,
                        children: [n, t]
                    })
                },
                I = e => {
                    let {
                        resolving: n,
                        children: t
                    } = e;
                    return (0, l.jsx)("div", {
                        className: C.content,
                        children: n ? (0, l.jsxs)("div", {
                            className: C.resolvingWrapper,
                            children: [(0, l.jsx)("div", {
                                className: C.resolving,
                                children: (0, l.jsx)("div", {
                                    className: C.resolvingBackground
                                })
                            }), (0, l.jsx)("div", {
                                className: C.resolvingFakeButton,
                                children: (0, l.jsx)("div", {
                                    className: C.resolvingBackground
                                })
                            })]
                        }) : t
                    })
                },
                x = e => {
                    var n;
                    let {
                        application: t,
                        guild: s,
                        channel: i,
                        onClick: o,
                        expired: c = !1,
                        user: v,
                        className: h
                    } = e, g = null !== (n = (0, d.default)(i)) && void 0 !== n ? n : "", p = E.GifAutoPlay.useSetting();
                    if (c) return (0, l.jsx)("div", {
                        className: C.guildIconExpired
                    });
                    let I = null == s || null != s.icon,
                        x = a((0, m.getClass)(C, "guildIcon", I ? "Image" : "", null != o ? "Joined" : ""), h);
                    if (null != t) return (0, l.jsx)(N.default, {
                        game: t,
                        onClick: o,
                        size: C.applicationIcon,
                        className: x
                    });
                    if (null != s) return (0, l.jsx)(f.default, {
                        onClick: o,
                        active: !0,
                        guild: s,
                        className: x,
                        animate: p
                    });
                    if (null != i) return (0, l.jsx)(u.Avatar, {
                        onClick: o,
                        src: (0, r.getChannelIconURL)(i),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": g
                    });
                    else if (null != v) return (0, l.jsx)(u.Avatar, {
                        onClick: o,
                        src: v.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": g
                    });
                    return null
                },
                S = e => {
                    let {
                        title: n,
                        onClick: t,
                        expired: s,
                        children: i
                    } = e, a = (0, l.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, m.getClass)(C, "inviteDestination", s ? "Expired" : null != t ? "Joined" : ""),
                        children: n
                    });
                    return (0, l.jsxs)(h.default, {
                        className: C.guildInfo,
                        direction: h.default.Direction.VERTICAL,
                        justify: h.default.Justify.CENTER,
                        children: [null == t ? a : (0, l.jsx)(u.Clickable, {
                            onClick: t,
                            children: a
                        }), (0, l.jsx)(u.Text, {
                            tag: "strong",
                            className: C.guildDetail,
                            variant: "text-sm/normal",
                            children: i
                        })]
                    })
                },
                _ = e => {
                    let {
                        membersOnline: n,
                        members: t
                    } = e, s = [];
                    return null != n && n > 0 && s.push((0, l.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, l.jsx)("i", {
                            className: C.statusOnline
                        }), (0, l.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: n
                            })
                        })]
                    }, "onlineCount")), null != t && s.push((0, l.jsxs)("div", {
                        className: C.statusWrapper,
                        children: [(0, l.jsx)("i", {
                            className: C.statusOffline
                        }), (0, l.jsx)("span", {
                            className: C.count,
                            children: g.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: t
                            })
                        })]
                    }, "memberCount")), (0, l.jsx)("div", {
                        className: C.statusCounts,
                        children: s
                    })
                },
                R = e => {
                    let {
                        channel: n,
                        guild: t
                    } = e, s = (0, o.getChannelIconComponent)(n, t);
                    return null == n || null == s ? null : (0, l.jsxs)("div", {
                        className: C.channel,
                        children: [(0, l.jsx)(s, {
                            className: C.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, l.jsx)("span", {
                            className: C.channelName,
                            children: n.name
                        })]
                    })
                },
                T = e => {
                    let {
                        children: n,
                        onClick: t,
                        className: s,
                        isDisabled: i,
                        ...r
                    } = e;
                    return (0, l.jsx)(u.Button, {
                        ...r,
                        disabled: i,
                        onClick: t,
                        size: C.buttonSize,
                        className: a(C.button, s),
                        children: n
                    })
                };
            T.Colors = u.Button.Colors, T.Looks = u.Button.Looks, T.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let L = e => {
                    let {
                        children: n,
                        className: t,
                        containerRef: s
                    } = e;
                    return (0, l.jsx)("div", {
                        ref: s,
                        className: a(C.wrapper, t),
                        children: n
                    })
                },
                j = e => {
                    let {
                        guild: n
                    } = e, [t, i] = s.useState(!1), u = v.default.getGuildSplashURL({
                        id: n.id,
                        splash: n.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, l.jsx)("div", {
                        className: C.inviteSplash,
                        children: (0, l.jsx)("img", {
                            src: u,
                            alt: "",
                            className: a(C.inviteSplashImage, {
                                [C.inviteSplashImageLoaded]: t
                            }),
                            onLoad: () => i(!0)
                        })
                    })
                },
                D = e => {
                    let {
                        guild: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, l.jsx)("span", {
                            className: C.guildName,
                            children: n.name
                        })
                    })
                },
                B = e => {
                    let {
                        guildTemplate: n
                    } = e;
                    return (0, l.jsx)("div", {
                        className: C.guildNameWrapper,
                        children: (0, l.jsx)("span", {
                            className: C.guildName,
                            children: n.serializedSourceGuild.name
                        })
                    })
                };
            L.Header = p, L.Body = I, L.Icon = x, L.Info = S, L.Data = _, L.Channel = R, L.Button = T, L.GuildSplash = j, L.GuildName = D, L.GuildTemplateName = B, p.displayName = "InviteButton.Header", I.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", _.displayName = "InviteButton.Data", R.displayName = "InviteButton.Channel", T.displayName = "InviteButton.Button", j.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", B.displayName = "InviteButton.GuildTemplateName";
            var G = L
        }
    }
]);