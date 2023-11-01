(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["33891"], {
        1339: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                guildEventDetailsParser: function() {
                    return r
                }
            });
            var s = n("367376"),
                l = n("180161"),
                a = n("47677");
            let u = {
                    ...s.default.guildEventRules.link,
                    react: (0, a.default)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                },
                i = {
                    ...s.default.guildEventRules.channelMention,
                    react: (0, l.default)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                },
                r = s.default.reactParserFor({
                    ...s.default.guildEventRules,
                    link: u,
                    channelMention: i
                })
        },
        613767: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isChannelPublic: function() {
                    return o
                },
                useIsChannelPublic: function() {
                    return d
                }
            });
            var s = n("446674"),
                l = n("42203"),
                a = n("991170"),
                u = n("398604"),
                i = n("745049"),
                r = n("49111");

            function o(e, t) {
                return a.default.canEveryoneRole(r.Permissions.VIEW_CHANNEL, e) || t === i.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function d(e, t) {
                return (0, s.useStateFromStores)([l.default, u.default], () => {
                    let n = l.default.getChannel(e),
                        s = u.default.getGuildScheduledEvent(t);
                    return o(n, null == s ? void 0 : s.entity_type)
                }, [e, t])
            }
        },
        93550: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var s = n("407063"),
                l = n("49111");

            function a(e, t) {
                let n;
                if (null == e.image) return null;
                null == t && (t = window.screen.width * (0, s.getDevicePixelRatio)()), t = (0, s.getBestMediaProxySize)(t);
                let a = window.GLOBAL_ENV.CDN_HOST;
                if (null != a) {
                    var u;
                    n = "".concat((u = "https:", "https:"), "//").concat(a, "/guild-events/").concat(e.id, "/").concat(e.image)
                } else n = location.protocol + window.GLOBAL_ENV.API_ENDPOINT + l.Endpoints.GUILD_EVENT_IMAGE(e.id, e.image, "png");
                return n += "?size=".concat(t)
            }
        },
        909151: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("414456"),
                u = n.n(a),
                i = n("1339"),
                r = n("139225"),
                o = n("632215");

            function d(e) {
                let {
                    description: t,
                    className: n,
                    guildId: a,
                    truncate: d = !0
                } = e, c = l.useMemo(() => (0, i.guildEventDetailsParser)(t, !0, {
                    guildId: a
                }), [t, a]);
                return (0, s.jsx)("div", {
                    className: u(r.descriptionText, n, o.markup, {
                        [r.truncate]: d
                    }),
                    children: c
                })
            }
        },
        707916: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventShareButton: function() {
                    return h
                },
                GuildEventInterestedButton: function() {
                    return S
                },
                GuildEventLurkerInterestedButton: function() {
                    return _
                },
                default: function() {
                    return C
                }
            });
            var s = n("37983"),
                l = n("884691"),
                a = n("862337"),
                u = n("77078"),
                i = n("660279"),
                r = n("36694"),
                o = n("83900"),
                d = n("433487"),
                c = n("491920"),
                E = n("745049"),
                N = n("782340"),
                f = n("550034");

            function T(e) {
                let {
                    text: t,
                    disabled: n,
                    onJoinClick: l
                } = e;
                return (0, s.jsx)(u.Button, {
                    className: f.button,
                    size: u.Button.Sizes.SMALL,
                    onClick: l,
                    color: u.Button.Colors.GREEN,
                    disabled: n,
                    children: t
                })
            }

            function h(e) {
                let {
                    onInviteClick: t,
                    canInvite: n,
                    isChannelPublic: i
                } = e, d = new a.Timeout, [E, T] = l.useState(!1);
                l.useEffect(() => () => {
                    d.stop()
                }, []);
                let h = e => {
                    null != t && t(e), T(!0), d.start(1e3, () => T(!1))
                };
                return null == t ? null : (0, s.jsx)(u.Tooltip, {
                    text: v(n, i),
                    position: "top",
                    tooltipClassName: f.tooltips,
                    "aria-label": N.default.Messages.SHARE_LINK,
                    children: e => n && i ? (0, s.jsxs)(u.Button, {
                        ...e,
                        className: f.button,
                        innerClassName: f.innerButton,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, s.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), N.default.Messages.SHARE]
                    }) : (0, s.jsxs)(u.Button, {
                        ...e,
                        className: f.button,
                        innerClassName: f.innerButton,
                        color: u.Button.Colors.PRIMARY,
                        size: u.Button.Sizes.SMALL,
                        disabled: E,
                        look: E ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
                        onClick: h,
                        children: [E ? (0, s.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }) : (0, s.jsx)(o.default, {
                            width: 16,
                            height: 16
                        }), E ? N.default.Messages.COPIED : N.default.Messages.SHARE]
                    })
                })
            }

            function S(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: n,
                    onRsvpClick: l,
                    ...a
                } = e, o = t && !n;
                return (0, s.jsxs)(u.Button, {
                    ...a,
                    className: f.button,
                    innerClassName: f.innerButton,
                    size: u.Button.Sizes.SMALL,
                    onClick: l,
                    color: u.Button.Colors.PRIMARY,
                    look: o ? u.Button.Looks.OUTLINED : u.Button.Looks.FILLED,
                    disabled: n,
                    children: [o ? (0, s.jsx)(r.default, {
                        width: 16,
                        height: 16
                    }) : (0, s.jsx)(i.default, {
                        width: 16,
                        height: 16
                    }), N.default.Messages.INDICATE_RSVP]
                })
            }

            function _(e) {
                return (0, s.jsx)(u.Tooltip, {
                    text: N.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: f.tooltips,
                    "aria-label": N.default.Messages.SHARE_LINK,
                    children: t => (0, s.jsx)(S, {
                        ...t,
                        ...e
                    })
                })
            }
            let m = e => null == e || e,
                v = (e, t) => m(e) ? N.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : m(t) ? N.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : N.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function C(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: l,
                    canInvite: a,
                    isChannelPublic: i = !0,
                    entityType: r,
                    onContextMenu: o,
                    onJoinClick: c,
                    onRsvpClick: m,
                    onStartClick: v,
                    onInviteClick: C,
                    onEndClick: x,
                    isJoined: L = !1
                } = e, g = void 0 !== c;
                return (0, s.jsxs)("div", {
                    className: f.container,
                    children: [null != o ? (0, s.jsx)(u.Tooltip, {
                        text: N.default.Messages.MORE,
                        position: "top",
                        "aria-label": N.default.Messages.EDIT,
                        children: e => (0, s.jsx)(u.Clickable, {
                            ...e,
                            onClick: o,
                            className: f.iconButton,
                            children: (0, s.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: f.icon
                            })
                        })
                    }) : null, (0, s.jsx)(h, {
                        onInviteClick: C,
                        canInvite: a,
                        isChannelPublic: i
                    }), t && r !== E.GuildScheduledEventEntityTypes.EXTERNAL ? (0, s.jsx)(T, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: n,
                                isVoiceChannel: s
                            } = e;
                            return n ? t ? N.default.Messages.GO_TO_CHANNEL : s ? N.default.Messages.GUILD_EVENT_JOIN : N.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : N.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: L,
                            canJoin: g,
                            isVoiceChannel: r === E.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !g,
                        onJoinClick: c
                    }) : null, n && !t && (0, s.jsx)(_, {
                        isUserRsvped: l,
                        isUserLurking: n
                    }), !n && !t && null != m && (0, s.jsx)(S, {
                        isUserRsvped: l,
                        isUserLurking: n,
                        onRsvpClick: m
                    }), t || null == v ? null : (0, s.jsx)(u.Button, {
                        className: f.button,
                        innerClassName: f.innerButton,
                        size: u.Button.Sizes.SMALL,
                        onClick: v,
                        color: u.Button.Colors.GREEN,
                        children: N.default.Messages.START
                    }), t && null != x ? (0, s.jsx)(u.Button, {
                        className: f.button,
                        innerClassName: f.innerButton,
                        size: u.Button.Sizes.SMALL,
                        onClick: x,
                        color: u.Button.Colors.PRIMARY,
                        children: N.default.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        255050: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                u = n("900702");

            function i(e) {
                let {
                    source: t,
                    className: n
                } = e;
                return null == t ? null : (0, s.jsx)("div", {
                    className: a(u.container, n),
                    style: {
                        backgroundImage: "url(".concat(t, ")")
                    }
                })
            }
        },
        400271: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventStatus: function() {
                    return C
                },
                GuildEventDetails: function() {
                    return x
                },
                default: function() {
                    return L
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("414456"),
                a = n.n(l),
                u = n("446674"),
                i = n("77078"),
                r = n("26989"),
                o = n("155207"),
                d = n("158998"),
                c = n("398604"),
                E = n("397680"),
                N = n("466148"),
                f = n("189443"),
                T = n("909151"),
                h = n("255050"),
                S = n("393745"),
                _ = n("745049"),
                m = n("782340"),
                v = n("629400");

            function C(e) {
                let {
                    className: t,
                    creator: n,
                    guildId: l,
                    isNew: T,
                    isHub: h = !1,
                    guildEventId: C,
                    eventPreview: x,
                    recurrenceId: L
                } = e, g = (0, u.useStateFromStores)([c.default], () => c.default.getGuildScheduledEvent(C)), D = null != g ? g : x, I = (0, u.useStateFromStores)([r.default], () => r.default.getNick(l, null == n ? void 0 : n.id), [l, n]), {
                    startTime: R
                } = (0, N.default)(C, L), A = (0, E.default)(L, C), p = null != L && null != R, j = null != A ? A.is_canceled ? _.GuildScheduledEventStatus.CANCELED : _.GuildScheduledEventStatus.SCHEDULED : null;
                if (null == D) return null;
                let {
                    entity_type: O,
                    status: M,
                    scheduled_start_time: B,
                    user_count: G = 1,
                    recurrence_rule: k
                } = D;
                return (0, s.jsxs)("div", {
                    className: a(v.statusContainer, t),
                    children: [(0, s.jsx)(S.GuildEventTimeStatus, {
                        startTime: p ? R.toISOString() : B,
                        status: null != j ? j : M,
                        eventType: O,
                        isNew: T,
                        recurrenceRule: (0, f.recurrenceRuleFromServer)(k)
                    }), (0, s.jsx)("div", {
                        className: v.spacer
                    }), !h && null != n && (0, s.jsx)(i.Tooltip, {
                        text: m.default.Messages.GUILD_EVENT_CREATED_BY.format({
                            username: null != I ? I : d.default.getName(n)
                        }),
                        children: e => (0, s.jsx)(i.Avatar, {
                            ...e,
                            src: n.getAvatarURL(l, 20),
                            size: i.AvatarSizes.SIZE_20,
                            "aria-label": null != I ? I : n.username,
                            className: v.creator
                        })
                    }), null != G && (0, s.jsx)(i.Tooltip, {
                        text: m.default.Messages.GUILD_EVENT_INTERESTED_COUNT.format({
                            count: G
                        }),
                        children: e => (0, s.jsxs)("div", {
                            className: v.rsvpCount,
                            ...e,
                            children: [(0, s.jsx)(o.default, {
                                width: 12,
                                height: 12,
                                className: v.rsvpIcon
                            }), (0, s.jsx)(i.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                children: G
                            })]
                        })
                    })]
                })
            }

            function x(e) {
                let {
                    headerVariant: t = "heading-lg/medium",
                    descriptionClassName: n,
                    name: l,
                    description: u,
                    truncate: r,
                    guildId: o,
                    imageSource: d
                } = e;
                return (0, s.jsxs)("div", {
                    className: a({
                        [v.withThumbnail]: null != d
                    }),
                    children: [(0, s.jsxs)("div", {
                        className: a({
                            [v.descriptionWithThumbnail]: null != d
                        }),
                        children: [(0, s.jsx)(i.Heading, {
                            variant: t,
                            selectable: !0,
                            className: v.eventName,
                            children: l
                        }), null != u && (0, s.jsx)(T.default, {
                            description: u,
                            className: a(n, v.description),
                            truncate: r,
                            guildId: o
                        })]
                    }), null != d && (0, s.jsx)("div", {
                        className: v.thumbnailContainer,
                        children: (0, s.jsx)(h.default, {
                            source: d,
                            className: v.thumbnail
                        })
                    })]
                })
            }

            function L(e) {
                let {
                    headerVariant: t,
                    descriptionClassName: n,
                    creator: l,
                    name: a,
                    description: u,
                    imageSource: i,
                    isHub: r = !1,
                    truncate: o,
                    guildId: d,
                    isNew: c,
                    guildEventId: E,
                    eventPreview: N,
                    recurrenceId: f
                } = e;
                return (0, s.jsxs)("div", {
                    className: v.container,
                    children: [(0, s.jsx)(C, {
                        className: v.eventInfoStatusContainer,
                        creator: l,
                        guildId: d,
                        isHub: r,
                        isNew: c,
                        guildEventId: E,
                        eventPreview: N,
                        recurrenceId: f
                    }), (0, s.jsx)(x, {
                        name: a,
                        description: u,
                        headerVariant: t,
                        descriptionClassName: n,
                        truncate: o,
                        guildId: d,
                        imageSource: i
                    })]
                })
            }
        },
        393745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GuildEventTimeStatus: function() {
                    return D
                }
            });
            var s, l, a = n("37983"),
                u = n("884691"),
                i = n("414456"),
                r = n.n(i),
                o = n("866227"),
                d = n.n(o),
                c = n("669491"),
                E = n("77078"),
                N = n("449918"),
                f = n("943232"),
                T = n("93393"),
                h = n("956089"),
                S = n("822516"),
                _ = n("757767"),
                m = n("745049"),
                v = n("843455"),
                C = n("782340"),
                x = n("675644");
            (s = l || (l = {}))[s.SCHEDULED = 0] = "SCHEDULED", s[s.STARTING_SOON = 1] = "STARTING_SOON", s[s.READY = 2] = "READY", s[s.STARTED = 3] = "STARTED", s[s.ENDED = 4] = "ENDED", s[s.CANCELED = 5] = "CANCELED";

            function L() {
                return (0, a.jsx)(h.TextBadge, {
                    className: x.newBadge,
                    color: c.default.unsafe_rawColors.BRAND_260.css,
                    text: (0, a.jsx)(E.Text, {
                        className: x.newBadgeText,
                        variant: "text-xs/bold",
                        children: C.default.Messages.NEW
                    })
                })
            }

            function g(e) {
                let {
                    children: t,
                    className: n,
                    tooltipText: s
                } = e;
                return (0, a.jsx)("div", {
                    className: r(x.eventStatusContainer, n),
                    children: (0, a.jsx)(E.Tooltip, {
                        position: "right",
                        text: s,
                        shouldShow: null != s,
                        children: e => (0, a.jsx)("div", {
                            ...e,
                            className: r(x.eventStatusContainer, n),
                            children: t
                        })
                    })
                })
            }

            function D(e) {
                let {
                    startTime: t,
                    status: n,
                    eventType: s,
                    className: i,
                    endTime: o,
                    liveText: c,
                    textVariant: h = "text-sm/semibold",
                    isNew: D,
                    recurrenceRule: I
                } = e, R = (0, N.useThemedColorValue)(v.ThemeColor.TEXT_BRAND), A = (0, N.useThemedColorValue)(v.ThemeColor.TEXT_POSITIVE), p = (0, N.useThemedColorValue)(v.ThemeColor.TEXT_DANGER);
                null == c && (c = s === m.GuildScheduledEventEntityTypes.EXTERNAL ? C.default.Messages.STAGE_CHANNEL_HAPPENING_NOW : C.default.Messages.STAGE_CHANNEL_LIVE_NOW);
                let [{
                    startDateTimeString: j,
                    endDateTimeString: O,
                    currentOrPastEvent: M,
                    upcomingEvent: B,
                    diffMinutes: G
                }, k] = u.useState((0, S.getEventTimeData)(t, o));
                u.useEffect(() => {
                    k((0, S.getEventTimeData)(t, o));
                    let e = setInterval(() => k((0, S.getEventTimeData)(t, o)), 1e3);
                    return () => {
                        clearInterval(e)
                    }
                }, [t, o]);
                let b = j;
                null != O && "" !== O && (b = C.default.Messages.START_DATE_TO_END_DATE.format({
                    start: j,
                    end: O
                }));
                let U = u.useMemo(() => n === m.GuildScheduledEventStatus.CANCELED ? l.CANCELED : n === m.GuildScheduledEventStatus.ACTIVE ? l.STARTED : m.GuildScheduledEventStatusDone.has(n) ? l.ENDED : M ? l.READY : B ? l.STARTING_SOON : l.SCHEDULED, [n, M, B]),
                    P = function(e, t, n, s, u) {
                        switch (e) {
                            case l.STARTING_SOON:
                                return u > 0 ? C.default.Messages.STARTING_IN_MINUTES.format({
                                    minutes: u
                                }) : C.default.Messages.STARTING_SOON;
                            case l.READY:
                                return C.default.Messages.STARTING_SOON;
                            case l.STARTED:
                                return null != s && "" !== s ? C.default.Messages.START_DATE_TO_END_DATE_WITH_COLOR.format({
                                    start: n,
                                    startHook: e => (0, a.jsx)(E.Text, {
                                        color: "text-positive",
                                        variant: "text-sm/semibold",
                                        className: x.liveEventEndTime,
                                        children: e
                                    }),
                                    end: s
                                }) : null != n ? n : "";
                            default:
                                return t
                        }
                    }(U, b, c, O, G),
                    {
                        Icon: V,
                        iconColor: w,
                        textColor: H,
                        tooltipText: Y
                    } = u.useMemo(() => (function(e) {
                        let t, {
                                timeStatus: n,
                                textBrand: s,
                                textPositive: a,
                                textDanger: u,
                                endDateTimeString: i,
                                startDateTimeString: r
                            } = e,
                            o = f.default,
                            d = s,
                            c = "header-secondary";
                        switch (n) {
                            case l.STARTED:
                                d = a, c = null != i ? void 0 : "text-positive";
                                break;
                            case l.ENDED:
                                o = T.default;
                                break;
                            case l.READY:
                            case l.STARTING_SOON:
                                c = "text-brand", t = r;
                                break;
                            case l.CANCELED:
                                d = u
                        }
                        return {
                            Icon: o,
                            iconColor: d.hex,
                            textColor: c,
                            tooltipText: t
                        }
                    })({
                        timeStatus: U,
                        textBrand: R,
                        textPositive: A,
                        textDanger: p,
                        endDateTimeString: O,
                        startDateTimeString: j
                    }), [U, R, A, p, O, j]),
                    y = null;
                if (null != I) {
                    let e = (0, S.getRRule)(I);
                    y = C.default.Messages.GUILD_SCHEDULED_EVENT_RECURRENCE_RULE.format({
                        recurrenceRule: e.toText()
                    });
                    let n = d(t),
                        s = (0, S.recurrenceRuleToOption)(n, I);
                    y = function(e, t) {
                        let n = t.toDate(),
                            s = n.toLocaleString(C.default.getLocale(), {
                                weekday: "long"
                            });
                        switch (e) {
                            case _.RecurrenceOptions.WEEKLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKLY.format({
                                    weekday: s
                                });
                            case _.RecurrenceOptions.YEARLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_YEARLY.format({
                                    date: n.toLocaleString(C.default.getLocale(), {
                                        month: "short",
                                        day: "2-digit"
                                    })
                                });
                            case _.RecurrenceOptions.WEEKDAY_ONLY:
                                return C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS_WEEKDAYS;
                            default:
                                return null
                        }
                    }(s, n)
                }
                return (0, a.jsxs)(g, {
                    className: r(i, {
                        [x.isRecurring]: null != y
                    }),
                    tooltipText: Y,
                    children: [D ? (0, a.jsx)(L, {}) : (0, a.jsx)(V, {
                        color: w,
                        width: 20,
                        height: 20
                    }), (0, a.jsxs)("div", {
                        className: x.eventStatusLabel,
                        children: [(0, a.jsx)(E.Text, {
                            color: H,
                            variant: h,
                            children: P
                        }), null != y && (0, a.jsx)(E.Text, {
                            color: "header-secondary",
                            variant: "text-xs/normal",
                            children: y
                        })]
                    })]
                })
            }
        },
        644189: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var s = n("37983");
            n("884691");
            var l = n("77078"),
                a = n("433487"),
                u = n("707916"),
                i = n("782340"),
                r = n("905491");

            function o(e) {
                let {
                    isActive: t,
                    isUserLurking: n,
                    rsvped: o,
                    onContextMenu: d,
                    onRsvpClick: c,
                    onGoToGuildClick: E,
                    isDetailsView: N = !1,
                    isMember: f,
                    onJoinGuildClick: T,
                    guildName: h,
                    onInviteClick: S,
                    canInvite: _,
                    isChannelPublic: m
                } = e;
                return (0, s.jsxs)("div", {
                    className: r.container,
                    children: [null != d ? (0, s.jsx)(l.Tooltip, {
                        text: i.default.Messages.MORE,
                        position: "top",
                        "aria-label": i.default.Messages.EDIT,
                        children: e => (0, s.jsx)(l.Clickable, {
                            ...e,
                            onClick: d,
                            className: r.iconButton,
                            children: (0, s.jsx)(a.default, {
                                width: 20,
                                height: 20,
                                className: r.icon
                            })
                        })
                    }) : null, f && (0, s.jsx)(u.GuildEventShareButton, {
                        onInviteClick: S,
                        canInvite: _,
                        isChannelPublic: m
                    }), n && !t && (0, s.jsx)(u.GuildEventLurkerInterestedButton, {
                        isUserRsvped: o,
                        isUserLurking: n
                    }), f && !n && !t && null != c && (0, s.jsx)(u.GuildEventInterestedButton, {
                        isUserRsvped: o,
                        isUserLurking: n,
                        onRsvpClick: c
                    }), f && !n && (!N || t) ? (0, s.jsx)(l.Button, {
                        className: r.button,
                        innerClassName: r.innerButton,
                        size: l.Button.Sizes.SMALL,
                        onClick: E,
                        color: l.Button.Colors.GREEN,
                        children: i.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, f ? null : (0, s.jsx)(l.Button, {
                        className: r.button,
                        innerClassName: r.innerButton,
                        size: l.Button.Sizes.SMALL,
                        onClick: T,
                        color: l.Button.Colors.GREEN,
                        children: i.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: h
                        })
                    })]
                })
            }
        }
    }
]);