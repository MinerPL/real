(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3982"], {
        651072: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return i
                }
            });
            var t = l("862205");
            let a = (0, t.createExperiment)({
                kind: "guild",
                id: "2023-09_recurring_events",
                label: "Allows guild to create recurring events",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Recurring Events are enabled",
                    config: {
                        enabled: !0
                    }
                }]
            });
            var i = a
        },
        617347: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                GuildEventBodyImageLocation: function() {
                    return a
                },
                default: function() {
                    return U
                }
            });
            var t, a, i = l("37983"),
                s = l("884691"),
                r = l("414456"),
                u = l.n(r),
                d = l("446674"),
                o = l("77078"),
                c = l("812204"),
                h = l("685665"),
                v = l("656038"),
                m = l("419830"),
                x = l("817963"),
                E = l("957255"),
                g = l("109024"),
                N = l("718550"),
                f = l("651072"),
                C = l("1339"),
                j = l("613767"),
                p = l("822516"),
                S = l("707916"),
                k = l("255050"),
                _ = l("400271"),
                I = l("427554"),
                T = l("644189"),
                R = l("29913"),
                L = l("745049"),
                A = l("49111"),
                b = l("782340"),
                M = l("955614");

            function D(e) {
                let {
                    channel: n,
                    onClick: l
                } = e, {
                    canManageAllEvents: t
                } = (0, x.useManageResourcePermissions)(n), a = (0, d.useStateFromStores)([E.default], () => !n.isGuildVocal() || E.default.can(A.Permissions.CONNECT, n), [n]), r = s.useMemo(() => (0, v.default)(n), [n]), c = (0, m.getChannelIconComponent)(n);
                return (0, i.jsx)(o.Tooltip, {
                    text: b.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != l,
                    children: e => (0, i.jsxs)(o.Clickable, {
                        ...e,
                        className: u(M.inline, M.channelContainer, {
                            [M.channelContainerEnabled]: a && null != l,
                            [M.channelContainerDisabled]: !a && null != l
                        }),
                        onClick: l,
                        children: [(0, i.jsx)(o.Tooltip, {
                            text: b.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: t && r && a && null != l,
                            children: e => null != c ? (0, i.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: M.icon
                            }) : null
                        }), (0, i.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: M.channelLocation,
                            children: n.name
                        })]
                    })
                })
            }

            function G(e) {
                let {
                    guild: n,
                    channel: l,
                    onJoinClick: t,
                    handleLocationClick: a,
                    location: s,
                    isExternal: r,
                    isHub: d
                } = e;
                if (d) return null == n ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                    className: M.inline,
                    children: [(0, i.jsx)(g.default, {
                        className: M.guildIcon,
                        size: g.default.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, i.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                });
                return null != l ? (0, i.jsx)(D, {
                    channel: l,
                    onClick: t
                }) : (0, i.jsxs)(o.Clickable, {
                    className: M.inline,
                    onClick: a,
                    children: [(0, i.jsx)(N.default, {
                        height: 20,
                        width: 20,
                        className: u(M.channelContainer, M.icon)
                    }), (0, i.jsx)(o.Text, {
                        className: r ? M.externalLocation : M.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, C.guildEventDetailsParser)(s, !0)
                    })]
                })
            }

            function U(e) {
                var n;
                let {
                    className: l,
                    guild: t,
                    channel: s,
                    creator: r,
                    name: d,
                    entityType: v,
                    description: m,
                    imageLocation: x = a.BANNER,
                    imageSource: E,
                    isActive: g,
                    isUserLurking: N,
                    isJoined: C = !1,
                    isMember: A = !1,
                    isHub: b = !1,
                    speakers: D,
                    speakerCount: U,
                    rsvped: P,
                    canInvite: w,
                    location: y,
                    truncate: B,
                    onContextMenu: V,
                    onJoinClick: O,
                    onJoinGuildClick: H,
                    onGoToGuildClick: z,
                    onRsvpClick: F,
                    onStartClick: Y,
                    onInviteClick: J,
                    onEndClick: K,
                    onClick: W,
                    isNew: X,
                    guildEventId: Z,
                    eventPreview: q,
                    recurrenceRule: Q,
                    recurrenceId: $
                } = e, ee = (0, j.isChannelPublic)(s, v), en = v === L.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: el
                } = (0, h.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: et
                } = f.default.useExperiment({
                    guildId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : "",
                    location: el[0]
                }, {
                    autoTrackExposure: !1
                }), ea = [];
                if (null != Q) {
                    let e = (0, p.getRRule)(Q);
                    ea = (0, p.generateNextRecurrences)(4, e)
                }
                let ei = et && ea.length > 0;
                return (0, i.jsxs)(o.ClickableContainer, {
                    "aria-label": d,
                    onClick: () => null == W ? void 0 : W(),
                    onContextMenu: V,
                    className: u(M.card, {
                        [M.joined]: C,
                        [M.lurking]: N
                    }, l),
                    children: [(0, i.jsxs)("div", {
                        className: u(M.padding, {
                            [M.isRecurring]: ei
                        }),
                        children: [x === a.BANNER && (0, i.jsx)(k.default, {
                            source: E
                        }), (0, i.jsx)(_.default, {
                            creator: r,
                            name: d,
                            description: m,
                            imageSource: x === a.THUMBNAIL ? E : null,
                            truncate: B,
                            guildId: null == t ? void 0 : t.id,
                            isHub: b,
                            isNew: X,
                            guildEventId: Z,
                            eventPreview: q,
                            recurrenceId: $
                        }), g && null != t && null != D && U > 0 && (0, i.jsx)(R.default, {
                            guild: t,
                            speakers: D,
                            speakerCount: U,
                            className: M.spacing
                        }), (0, i.jsx)("hr", {
                            className: M.divider
                        }), (0, i.jsxs)("div", {
                            className: u(M.inline, M.footer),
                            children: [(0, i.jsx)(G, {
                                guild: t,
                                channel: s,
                                onJoinClick: O,
                                handleLocationClick: en ? e => e.stopPropagation() : void 0,
                                location: y,
                                isExternal: en,
                                isHub: b
                            }), b ? (0, i.jsx)(T.default, {
                                isActive: g,
                                isUserLurking: N,
                                isMember: A,
                                rsvped: P,
                                onRsvpClick: F,
                                onJoinGuildClick: H,
                                onGoToGuildClick: z,
                                guildName: null == t ? void 0 : t.name,
                                canInvite: w,
                                isChannelPublic: ee,
                                onInviteClick: J
                            }) : (0, i.jsx)(S.default, {
                                entityType: v,
                                isJoined: C,
                                isActive: g,
                                isUserLurking: N,
                                rsvped: P,
                                canInvite: w,
                                isChannelPublic: ee,
                                onContextMenu: V,
                                onJoinClick: O,
                                onRsvpClick: F,
                                onStartClick: Y,
                                onInviteClick: J,
                                onEndClick: K
                            })]
                        }), ei && (0, i.jsx)("hr", {
                            className: M.divider
                        })]
                    }), ei && (0, i.jsx)(I.default, {
                        recurrenceRule: Q,
                        guildEventId: Z,
                        onClick: W
                    })]
                })
            }(t = a || (a = {}))[t.BANNER = 0] = "BANNER", t[t.THUMBNAIL = 1] = "THUMBNAIL"
        },
        123030: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return C
                }
            });
            var t = l("37983");
            l("884691");
            var a = l("414456"),
                i = l.n(a),
                s = l("249654"),
                r = l("446674"),
                u = l("77078"),
                d = l("272030"),
                o = l("42203"),
                c = l("305961"),
                h = l("433487"),
                v = l("398604"),
                m = l("397680"),
                x = l("393745"),
                E = l("745049"),
                g = l("49111"),
                N = l("782340"),
                f = l("157624");

            function C(e) {
                let {
                    originalScheduledStartTime: n,
                    guildEventId: a,
                    onClick: C
                } = e, j = s.default.fromTimestamp(Math.floor(n.getTime() / g.Durations.SECOND)), p = (0, r.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(a)), S = (0, m.default)(j, null == p ? void 0 : p.id), k = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(null == p ? void 0 : p.guild_id)), _ = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(null == p ? void 0 : p.channel_id));
                if (null == p) return null;
                let {
                    is_canceled: I = !1
                } = null != S ? S : {}, T = (null == S ? void 0 : S.scheduled_start_time) != null ? new Date(null == S ? void 0 : S.scheduled_start_time) : n, R = e => {
                    e.stopPropagation(), null != k && (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("110374").then(l.bind(l, "110374"));
                        return n => (0, t.jsx)(e, {
                            guildEventId: p.id,
                            recurrenceId: j,
                            channel: _,
                            guild: k,
                            ...n
                        })
                    })
                };
                return (0, t.jsxs)(u.ClickableContainer, {
                    className: i(f.container, {
                        [f.canceled]: I
                    }),
                    onClick: e => {
                        e.stopPropagation(), !I && (null == C || C(j))
                    },
                    onContextMenu: R,
                    "aria-label": "",
                    children: [(0, t.jsx)(x.GuildEventTimeStatus, {
                        startTime: T.toISOString(),
                        status: I ? E.GuildScheduledEventStatus.CANCELED : E.GuildScheduledEventStatus.SCHEDULED,
                        eventType: p.entity_type,
                        className: f.timeStatus
                    }), I && (0, t.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: f.canceledStatus,
                        children: N.default.Messages.EVENT_CANCELED
                    }), (0, t.jsx)(u.Tooltip, {
                        text: N.default.Messages.MORE,
                        position: "top",
                        "aria-label": N.default.Messages.EDIT,
                        children: e => (0, t.jsx)(u.Clickable, {
                            ...e,
                            onClick: R,
                            className: f.iconButton,
                            children: (0, t.jsx)(h.default, {
                                width: 20,
                                height: 20,
                                className: f.icon
                            })
                        })
                    })]
                })
            }
        },
        427554: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return o
                }
            });
            var t = l("37983"),
                a = l("884691"),
                i = l("77078"),
                s = l("822516"),
                r = l("123030"),
                u = l("782340"),
                d = l("849882");

            function o(e) {
                let {
                    recurrenceRule: n,
                    guildEventId: l,
                    onClick: o
                } = e, [c, h] = a.useState([]);
                a.useEffect(() => {
                    if (null != n) {
                        let e = (0, s.getRRule)(n);
                        h((0, s.generateNextRecurrences)(4, e))
                    }
                }, [n]);
                let v = a.useMemo(() => {
                    if (null == n || 0 === c.length) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + s.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let l = c[c.length - 1],
                        t = (0, s.getRRule)(n),
                        a = t.after(l);
                    return null != a && !(a > e) && !0
                }, [n, c]);
                return (0, t.jsxs)("div", {
                    className: d.recurrences,
                    children: [(0, t.jsx)(i.Heading, {
                        variant: "heading-sm/medium",
                        className: d.heading,
                        children: u.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, t.jsxs)(i.Scroller, {
                        className: d.scroller,
                        children: [c.map(e => (0, t.jsx)(r.default, {
                            originalScheduledStartTime: e,
                            guildEventId: l,
                            onClick: o
                        }, e.toString())), v && (0, t.jsx)(i.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == n) return;
                                let l = (0, s.getRRule)(n),
                                    t = c[c.length - 1];
                                h([...c, ...(0, s.generateNextRecurrences)(4, l, t)])
                            },
                            look: i.Button.Looks.LINK,
                            size: i.Button.Sizes.MIN,
                            color: i.Button.Colors.LINK,
                            className: d.button,
                            children: u.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_MORE_RECURRENCES
                        })]
                    })]
                })
            }
        },
        29913: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return o
                }
            });
            var t = l("37983");
            l("884691");
            var a = l("414456"),
                i = l.n(a),
                s = l("77078"),
                r = l("849467"),
                u = l("782340"),
                d = l("130221");

            function o(e) {
                let {
                    guild: n,
                    speakers: l,
                    speakerCount: a,
                    className: o
                } = e, c = l.slice(0, 5), h = c.map(e => {
                    var l, a;
                    return (0, t.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, t.jsx)(s.Avatar, {
                            src: null == e ? void 0 : null === (l = e.user) || void 0 === l ? void 0 : l.getAvatarURL(n.id, 20),
                            size: s.AvatarSizes.SIZE_20,
                            className: d.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, t.jsx)("div", {
                            className: d.textInGridContainer,
                            children: (0, t.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: d.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), v = a - c.length;
                return (0, t.jsxs)("div", {
                    className: i(d.grid, o),
                    children: [h, v > 0 && (0, t.jsxs)("div", {
                        className: d.speakerContainer,
                        children: [(0, t.jsx)("div", {
                            className: d.iconMicrophone,
                            children: (0, t.jsx)(r.default, {
                                height: 12
                            })
                        }), (0, t.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: d.textInGrid,
                            children: u.default.Messages.STAGE_DISCOVERY_LIVE_STAGE_TILE_SPEAKER_SUMMARY_OVERFLOW.format({
                                count: v
                            })
                        })]
                    })]
                })
            }
        }
    }
]);