(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66308"], {
        743087: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                ShareIcon: function() {
                    return i
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("669491"),
                u = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: a = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, u.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M13 16V5.414l3.293 3.293a1 1 0 1 0 1.414-1.414l-5-5-.007-.007a.997.997 0 0 0-1.4 0l-.008.008-5 4.999a1 1 0 0 0 1.415 1.414L11 5.414V16a1 1 0 1 0 2 0Z",
                        className: a
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M4 15a1 1 0 0 1 1-1h2a1 1 0 1 0 0-2H5a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4a3 3 0 0 0-3-3h-2a1 1 0 1 0 0 2h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z",
                        className: a
                    })]
                })
            }
        },
        933326: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            }), l("222007");
            var n = l("689988"),
                s = l("21121"),
                u = l("162771"),
                i = l("398604"),
                a = l("322224");
            let o = {},
                r = new Set,
                d = async e => {
                    let t = i.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!r.has(e)) try {
                            await a.default.getGuildEventsForCurrentUser(e), r.add(e)
                        } catch (e) {}
                    }
                };
            class c extends n.default {
                async getGuildEventUserCounts(e, t, l) {
                    let n = l.filter(l => null == o["".concat(e, "-").concat(t, "-").concat(l)] || Date.now() - o["".concat(e, "-").concat(t, "-").concat(l)] > 18e5);
                    if (!(Date.now() - o["".concat(e, "-").concat(t)] < 18e5) || 0 !== n.length) {
                        o["".concat(e, "-").concat(t)] = Date.now(), n.forEach(l => o["".concat(e, "-").concat(t, "-").concat(l)] = Date.now());
                        try {
                            await a.default.fetchGuildEventUserCounts(e, t, n)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, l) {
                    return a.default.fetchUsersForGuildEvent(e, t, l)
                }
                getGuildEventsForCurrentUser(e) {
                    return d(e)
                }
                handleConnectionOpen() {
                    r.clear(), o = {};
                    let e = (0, s.isInMainTabsExperiment)(),
                        t = u.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = i.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    r.delete(t), delete o[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, l = t.id;
                    r.delete(l), delete o[l]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: l
                    } = e, n = l.guild_scheduled_event, s = null === (t = l.guild) || void 0 === t ? void 0 : t.id;
                    null != n && null != s && d(s)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let l = i.default.getGuildScheduledEventsForGuild(t);
                    l.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var f = new c
        },
        613767: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                isChannelPublic: function() {
                    return r
                },
                useIsChannelPublic: function() {
                    return d
                }
            });
            var n = l("446674"),
                s = l("42203"),
                u = l("991170"),
                i = l("398604"),
                a = l("745049"),
                o = l("49111");

            function r(e, t) {
                return u.default.canEveryoneRole(o.Permissions.VIEW_CHANNEL, e) || t === a.GuildScheduledEventEntityTypes.EXTERNAL
            }

            function d(e, t) {
                return (0, n.useStateFromStores)([s.default, i.default], () => {
                    let l = s.default.getChannel(e),
                        n = i.default.getGuildScheduledEvent(t);
                    return r(l, null == n ? void 0 : n.entity_type)
                }, [e, t])
            }
        },
        707916: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                GuildEventShareButton: function() {
                    return N
                },
                GuildEventInterestedButton: function() {
                    return v
                },
                GuildEventLurkerInterestedButton: function() {
                    return g
                },
                default: function() {
                    return _
                }
            }), l("222007");
            var n = l("37983"),
                s = l("884691"),
                u = l("862337"),
                i = l("77078"),
                a = l("660279"),
                o = l("36694"),
                r = l("83900"),
                d = l("433487"),
                c = l("491920"),
                f = l("745049"),
                E = l("782340"),
                h = l("550034");

            function C(e) {
                let {
                    text: t,
                    disabled: l,
                    onJoinClick: s
                } = e;
                return (0, n.jsx)(i.Button, {
                    className: h.button,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.GREEN,
                    disabled: l,
                    children: t
                })
            }

            function N(e) {
                let {
                    onInviteClick: t,
                    canInvite: l,
                    isChannelPublic: a
                } = e, d = new u.Timeout, [f, C] = s.useState(!1);
                s.useEffect(() => () => {
                    d.stop()
                }, []);
                let N = e => {
                    null != t && t(e), C(!0), d.start(1e3, () => C(!1))
                };
                return null == t ? null : (0, n.jsx)(i.Tooltip, {
                    text: L(l, a),
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: e => l && a ? (0, n.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        onClick: t,
                        children: [(0, n.jsx)(c.default, {
                            width: 16,
                            height: 16
                        }), E.default.Messages.SHARE]
                    }) : (0, n.jsxs)(i.Button, {
                        ...e,
                        className: h.button,
                        innerClassName: h.innerButton,
                        color: i.Button.Colors.PRIMARY,
                        size: i.Button.Sizes.SMALL,
                        disabled: f,
                        look: f ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                        onClick: N,
                        children: [f ? (0, n.jsx)(o.default, {
                            width: 16,
                            height: 16
                        }) : (0, n.jsx)(r.default, {
                            width: 16,
                            height: 16
                        }), f ? E.default.Messages.COPIED : E.default.Messages.SHARE]
                    })
                })
            }

            function v(e) {
                let {
                    isUserRsvped: t,
                    isUserLurking: l,
                    onRsvpClick: s,
                    ...u
                } = e, r = t && !l;
                return (0, n.jsxs)(i.Button, {
                    ...u,
                    className: h.button,
                    innerClassName: h.innerButton,
                    size: i.Button.Sizes.SMALL,
                    onClick: s,
                    color: i.Button.Colors.PRIMARY,
                    look: r ? i.Button.Looks.OUTLINED : i.Button.Looks.FILLED,
                    disabled: l,
                    children: [r ? (0, n.jsx)(o.default, {
                        width: 16,
                        height: 16
                    }) : (0, n.jsx)(a.default, {
                        width: 16,
                        height: 16
                    }), E.default.Messages.INDICATE_RSVP]
                })
            }

            function g(e) {
                return (0, n.jsx)(i.Tooltip, {
                    text: E.default.Messages.GUILD_MEMBER_REQUIRED_FOR_EVENT,
                    position: "top",
                    tooltipClassName: h.tooltips,
                    "aria-label": E.default.Messages.SHARE_LINK,
                    children: t => (0, n.jsx)(v, {
                        ...t,
                        ...e
                    })
                })
            }
            let S = e => null == e || e,
                L = (e, t) => S(e) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE : S(t) ? E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_WITHOUT_PERMISSION : E.default.Messages.GUILD_EVENT_TOOLTIP_COPY_INVITE_PRIVATE_CHANNEL;

            function _(e) {
                let {
                    isActive: t,
                    isUserLurking: l,
                    rsvped: s,
                    canInvite: u,
                    isChannelPublic: a = !0,
                    entityType: o,
                    onContextMenu: r,
                    onJoinClick: c,
                    onRsvpClick: S,
                    onStartClick: L,
                    onInviteClick: _,
                    onEndClick: I,
                    isJoined: m = !1
                } = e, x = void 0 !== c;
                return (0, n.jsxs)("div", {
                    className: h.container,
                    children: [null != r ? (0, n.jsx)(i.Tooltip, {
                        text: E.default.Messages.MORE,
                        position: "top",
                        "aria-label": E.default.Messages.EDIT,
                        children: e => (0, n.jsx)(i.Clickable, {
                            ...e,
                            onClick: r,
                            className: h.iconButton,
                            children: (0, n.jsx)(d.default, {
                                width: 20,
                                height: 20,
                                className: h.icon
                            })
                        })
                    }) : null, (0, n.jsx)(N, {
                        onInviteClick: _,
                        canInvite: u,
                        isChannelPublic: a
                    }), t && o !== f.GuildScheduledEventEntityTypes.EXTERNAL ? (0, n.jsx)(C, {
                        text: function(e) {
                            let {
                                isJoined: t,
                                canJoin: l,
                                isVoiceChannel: n
                            } = e;
                            return l ? t ? E.default.Messages.GO_TO_CHANNEL : n ? E.default.Messages.GUILD_EVENT_JOIN : E.default.Messages.STAGE_CHANNEL_JOIN_BUTTON : E.default.Messages.CHANNEL_LOCKED_SHORT
                        }({
                            isJoined: m,
                            canJoin: x,
                            isVoiceChannel: o === f.GuildScheduledEventEntityTypes.VOICE
                        }),
                        disabled: !x,
                        onJoinClick: c
                    }) : null, l && !t && (0, n.jsx)(g, {
                        isUserRsvped: s,
                        isUserLurking: l
                    }), !l && !t && null != S && (0, n.jsx)(v, {
                        isUserRsvped: s,
                        isUserLurking: l,
                        onRsvpClick: S
                    }), t || null == L ? null : (0, n.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: L,
                        color: i.Button.Colors.GREEN,
                        children: E.default.Messages.START
                    }), t && null != I ? (0, n.jsx)(i.Button, {
                        className: h.button,
                        innerClassName: h.innerButton,
                        size: i.Button.Sizes.SMALL,
                        onClick: I,
                        color: i.Button.Colors.PRIMARY,
                        children: E.default.Messages.END_EVENT
                    }) : null]
                })
            }
        },
        123030: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("414456"),
                u = l.n(s),
                i = l("249654"),
                a = l("446674"),
                o = l("77078"),
                r = l("272030"),
                d = l("42203"),
                c = l("305961"),
                f = l("433487"),
                E = l("718517"),
                h = l("398604"),
                C = l("397680"),
                N = l("393745"),
                v = l("745049"),
                g = l("782340"),
                S = l("157624");

            function L(e) {
                let {
                    originalScheduledStartTime: t,
                    guildEventId: s,
                    onClick: L
                } = e, _ = i.default.fromTimestamp(Math.floor(t.getTime() / E.default.Millis.SECOND) * E.default.Millis.SECOND), I = (0, a.useStateFromStores)([h.default], () => h.default.getGuildScheduledEvent(s)), m = (0, C.default)(_, null == I ? void 0 : I.id), x = (0, a.useStateFromStores)([c.default], () => c.default.getGuild(null == I ? void 0 : I.guild_id)), T = (0, a.useStateFromStores)([d.default], () => d.default.getChannel(null == I ? void 0 : I.channel_id));
                if (null == I) return null;
                let {
                    is_canceled: M = !1
                } = null != m ? m : {}, p = (null == m ? void 0 : m.scheduled_start_time) != null ? new Date(null == m ? void 0 : m.scheduled_start_time) : t, R = e => {
                    e.stopPropagation(), null != x && (0, r.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("110374").then(l.bind(l, "110374"));
                        return t => (0, n.jsx)(e, {
                            guildEventId: I.id,
                            recurrenceId: _,
                            channel: T,
                            guild: x,
                            isRecurrenceItem: !0,
                            ...t
                        })
                    })
                };
                return (0, n.jsxs)(o.ClickableContainer, {
                    className: u(S.container, {
                        [S.canceled]: M,
                        [S.clickable]: null != L
                    }),
                    onClick: e => {
                        e.stopPropagation(), !M && (null == L || L(_))
                    },
                    onContextMenu: R,
                    "aria-label": "",
                    children: [(0, n.jsx)(N.GuildEventTimeStatus, {
                        startTime: p.toISOString(),
                        status: M ? v.GuildScheduledEventStatus.CANCELED : v.GuildScheduledEventStatus.SCHEDULED,
                        eventType: I.entity_type,
                        className: S.timeStatus
                    }), M && (0, n.jsx)(o.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: S.canceledStatus,
                        children: g.default.Messages.EVENT_CANCELED
                    }), (0, n.jsx)(o.Tooltip, {
                        text: g.default.Messages.MORE,
                        position: "top",
                        "aria-label": g.default.Messages.EDIT,
                        children: e => (0, n.jsx)(o.Clickable, {
                            ...e,
                            onClick: R,
                            className: S.iconButton,
                            children: (0, n.jsx)(f.default, {
                                width: 20,
                                height: 20,
                                className: S.icon
                            })
                        })
                    })]
                })
            }
        },
        427554: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return v
                }
            }), l("222007");
            var n = l("37983"),
                s = l("884691"),
                u = l("414456"),
                i = l.n(u),
                a = l("249654"),
                o = l("446674"),
                r = l("77078"),
                d = l("718517"),
                c = l("933326"),
                f = l("398604"),
                E = l("822516"),
                h = l("123030"),
                C = l("782340"),
                N = l("849882");

            function v(e) {
                let {
                    guildId: t,
                    recurrenceRule: l,
                    guildEventId: u,
                    onRecurrenceClick: v,
                    hideScroller: g = !1,
                    initialStartDate: S
                } = e, [L, _] = s.useState([]), I = (0, o.useStateFromStores)([f.default], () => f.default.getGuildScheduledEvent(u));
                s.useEffect(() => {
                    if (null != l && (null == I ? void 0 : I.scheduled_start_time) != null) {
                        let e = (0, E.getRRule)(l);
                        _((0, E.generateNextRecurrences)(4, e, null != S ? S : new Date(I.scheduled_start_time)))
                    }
                }, [l, S, null == I ? void 0 : I.scheduled_start_time]), s.useEffect(() => {
                    if (null == t) return;
                    let e = L.map(e => a.default.fromTimestamp(Math.floor(e.getTime() / d.default.Millis.SECOND) * d.default.Millis.SECOND));
                    c.default.getGuildEventUserCounts(t, u, e)
                }, [u, t, L]);
                let m = s.useMemo(() => {
                    if (null == l || 0 === L.length || (null == I ? void 0 : I.scheduled_start_time) == null) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + E.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let t = L[L.length - 1],
                        n = (0, E.getRRule)(l),
                        s = n.after(t);
                    return null != s && !(s > e) && !0
                }, [l, L, null == I ? void 0 : I.scheduled_start_time]);
                return (0, n.jsxs)("div", {
                    className: N.recurrences,
                    children: [(0, n.jsx)(r.Heading, {
                        variant: "heading-sm/medium",
                        className: N.heading,
                        children: C.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, n.jsxs)(r.Scroller, {
                        className: i(N.scroller, {
                            [N.showScroller]: !g
                        }),
                        children: [L.map(e => (0, n.jsx)(h.default, {
                            originalScheduledStartTime: e,
                            guildEventId: u,
                            onClick: v
                        }, e.toString())), m && (0, n.jsx)(r.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == l || null == I) return;
                                let t = (0, E.getRRule)(l),
                                    n = L[L.length - 1];
                                _([...L, ...(0, E.generateNextRecurrences)(4, t, n)])
                            },
                            look: r.Button.Looks.LINK,
                            size: r.Button.Sizes.MIN,
                            color: r.Button.Colors.LINK,
                            className: N.button,
                            children: C.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
                        })]
                    })]
                })
            }
        },
        644189: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("77078"),
                u = l("433487"),
                i = l("707916"),
                a = l("782340"),
                o = l("905491");

            function r(e) {
                let {
                    isActive: t,
                    isUserLurking: l,
                    rsvped: r,
                    onContextMenu: d,
                    onRsvpClick: c,
                    onGoToGuildClick: f,
                    isDetailsView: E = !1,
                    isMember: h,
                    onJoinGuildClick: C,
                    guildName: N,
                    onInviteClick: v,
                    canInvite: g,
                    isChannelPublic: S
                } = e;
                return (0, n.jsxs)("div", {
                    className: o.container,
                    children: [null != d ? (0, n.jsx)(s.Tooltip, {
                        text: a.default.Messages.MORE,
                        position: "top",
                        "aria-label": a.default.Messages.EDIT,
                        children: e => (0, n.jsx)(s.Clickable, {
                            ...e,
                            onClick: d,
                            className: o.iconButton,
                            children: (0, n.jsx)(u.default, {
                                width: 20,
                                height: 20,
                                className: o.icon
                            })
                        })
                    }) : null, h && (0, n.jsx)(i.GuildEventShareButton, {
                        onInviteClick: v,
                        canInvite: g,
                        isChannelPublic: S
                    }), l && !t && (0, n.jsx)(i.GuildEventLurkerInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: l
                    }), h && !l && !t && null != c && (0, n.jsx)(i.GuildEventInterestedButton, {
                        isUserRsvped: r,
                        isUserLurking: l,
                        onRsvpClick: c
                    }), h && !l && (!E || t) ? (0, n.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: f,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_GO_TO_GUILD
                    }) : null, h ? null : (0, n.jsx)(s.Button, {
                        className: o.button,
                        innerClassName: o.innerButton,
                        size: s.Button.Sizes.SMALL,
                        onClick: C,
                        color: s.Button.Colors.GREEN,
                        children: a.default.Messages.HUB_EVENTS_JOIN_GUILD.format({
                            guildName: N
                        })
                    })]
                })
            }
        },
        93393: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                u = l("503420"),
                i = l("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 20,
                        height: l = 20,
                        color: s = "currentColor",
                        foreground: u,
                        ...a
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(a),
                        width: t,
                        height: l,
                        viewBox: "0 0 20 20",
                        children: (0, n.jsx)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: (0, n.jsx)("path", {
                                className: u,
                                fill: s,
                                d: "M9.99999 1.66675C5.39699 1.66675 1.66666 5.39708 1.66666 10.0001C1.66666 14.6031 5.39699 18.3334 9.99999 18.3334C14.603 18.3334 18.3333 14.6031 18.3333 10.0001C18.3333 5.39708 14.603 1.66675 9.99999 1.66675ZM9.99999 4.66675C10.3685 4.66675 10.6667 4.96493 10.6667 5.33342V9.61475L13.8021 11.4272C14.1211 11.6108 14.2252 12.0145 14.0416 12.3335C13.8581 12.6525 13.4544 12.7567 13.1354 12.5731L9.73937 10.6148C9.71333 10.6043 9.68989 10.5874 9.66646 10.5731C9.46724 10.4572 9.33312 10.2463 9.33312 10.0002V5.3335C9.33312 4.965 9.6315 4.66675 9.99999 4.66675Z"
                            })
                        })
                    })
                }, u.ClockIcon, void 0, {
                    size: 20
                })
        },
        491920: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return a
                }
            });
            var n = l("37983");
            l("884691");
            var s = l("469563"),
                u = l("743087"),
                i = l("75196"),
                a = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 32,
                        height: l = 32,
                        color: s = "currentColor",
                        ...u
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, i.default)(u),
                        width: t,
                        height: l,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        children: (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M8.4866 7.91647L7 6.54308L12 2L17 6.54308L15.5134 7.91647L13.0513 5.71805L13.0513 16H10.9487V5.71805L8.4866 7.91647ZM16.9997 9H19C20.1044 9 20.9997 9.89532 20.9997 10.9997V19C20.9997 20.1044 20.1043 20.9997 19 20.9997H4.99998C3.8956 20.9997 3.00031 20.1044 3.00031 19V10.9997C3.00031 9.8953 3.89562 9 4.99998 9H7.00031C7.00031 9 6.99969 9.44813 6.99969 10.0003C6.99969 10.5525 7.00031 10.9997 7.00031 10.9997H4.99998V19H19V10.9997H16.9997L17.0003 10.0003L16.9997 9Z",
                            fill: s
                        })
                    })
                }, u.ShareIcon, void 0, {
                    size: 32
                })
        }
    }
]);