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
                N = t("580357"),
                h = t("174622"),
                f = t("660279"),
                g = t("36694"),
                p = t("374021"),
                C = t("398604"),
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
                    let p = null == v ? void 0 : v.IconComponent,
                        C = (0, l.jsxs)(l.Fragment, {
                            children: [null != p && (0, l.jsx)(p, {
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
                        children: [(0, l.jsx)(h.default.Icon, {
                            guild: c,
                            onClick: f
                        }), (0, l.jsxs)("div", {
                            className: k.verticalContainer,
                            children: [(0, l.jsxs)("div", {
                                className: k.guildChannelInfoContainer,
                                children: [(0, l.jsx)(N.default, {
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
                                    children: C
                                }) : C
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
                    } = e, v = (0, u.useStateFromStores)([C.default], () => C.default.isInterestedInEventRecurrence(t, s), [t, s]), m = e => {
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
                    } = e, v = null != o ? o : null != t ? (0, _.getNextRecurrenceIdInEvent)(t) : null, m = (null == t ? void 0 : t.recurrence_rule) == null || null == v || (0, _.isValidRecurrence)((0, S.recurrenceRuleFromServer)(null == t ? void 0 : t.recurrence_rule), v), N = (0, x.default)(t), f = s.useCallback(() => {
                        d && null != t && (0, p.openGuildEventDetails)({
                            eventId: t.id,
                            recurrenceId: v
                        })
                    }, [d, t, v]);
                    if (null == t || !m) return null;
                    let g = (0, C.isGuildScheduledEventActive)(t),
                        I = (0, C.isGuildEventEnded)(t),
                        j = t.entity_type === B.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, l.jsx)(h.default, {
                        className: a({
                            [k.clickable]: d
                        }),
                        children: (0, l.jsxs)(r.Clickable, {
                            onClick: f,
                            children: [null != t.image && (0, l.jsx)(T.default, {
                                source: (0, R.default)(t),
                                className: k.banner
                            }), (0, l.jsx)(L.default, {
                                name: t.name,
                                description: null !== (n = t.description) && void 0 !== n ? n : void 0,
                                descriptionClassName: k.eventDescription,
                                guildId: t.guild_id,
                                creator: N,
                                guildEventId: t.id,
                                eventPreview: t,
                                recurrenceId: v
                            }), (0, l.jsxs)("div", {
                                className: k.footerContainer,
                                children: [(0, l.jsx)(M, {
                                    guild: i,
                                    channel: u,
                                    guildScheduledEvent: t,
                                    isMember: d
                                }), (0, l.jsx)(P, {
                                    isActive: g,
                                    isEnded: I,
                                    isMember: d,
                                    guildId: t.guild_id,
                                    guildScheduledEventId: t.id,
                                    recurrenceId: v,
                                    onAcceptInstantInvite: c,
                                    onTransitionToInviteChannel: E,
                                    isExternal: j
                                })]
                            })]
                        })
                    })
                });
            var V = w