(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3982"], {
        696675: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                MicrophoneIcon: function() {
                    return s
                }
            });
            var t = l("920040");
            l("773670");
            var i = l("912557"),
                a = l("75196");
            let s = e => {
                let {
                    width: n = 24,
                    height: l = 24,
                    color: s = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, t.jsx)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: n,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, t.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M12 2a4 4 0 0 0-4 4v4a4 4 0 0 0 8 0V6a4 4 0 0 0-4-4Zm-6 8a1 1 0 0 0-2 0 8.001 8.001 0 0 0 7 7.938V20H9a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2h-2v-2.062A8.001 8.001 0 0 0 20 10a1 1 0 1 0-2 0 6 6 0 0 1-12 0Z",
                        clipRule: "evenodd",
                        className: r
                    })
                })
            }
        },
        651072: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return a
                }
            });
            var t = l("862205");
            let i = (0, t.createExperiment)({
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
            var a = i
        },
        617347: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                GuildEventBodyImageLocation: function() {
                    return i
                },
                default: function() {
                    return w
                }
            });
            var t, i, a = l("920040"),
                s = l("773670"),
                r = l("575482"),
                u = l.n(r),
                d = l("498225"),
                o = l("77078"),
                c = l("812204"),
                h = l("685665"),
                v = l("656038"),
                f = l("419830"),
                C = l("817963"),
                x = l("957255"),
                m = l("109024"),
                g = l("718550"),
                N = l("651072"),
                E = l("1339"),
                p = l("613767"),
                j = l("822516"),
                R = l("707916"),
                I = l("255050"),
                S = l("400271"),
                T = l("427554"),
                _ = l("644189"),
                k = l("29913"),
                M = l("745049"),
                L = l("49111"),
                A = l("782340"),
                b = l("441501");

            function V(e) {
                let {
                    channel: n,
                    onClick: l
                } = e, {
                    canManageAllEvents: t
                } = (0, C.useManageResourcePermissions)(n), i = (0, d.useStateFromStores)([x.default], () => !n.isGuildVocal() || x.default.can(L.Permissions.CONNECT, n), [n]), r = s.useMemo(() => (0, v.default)(n), [n]), c = (0, f.getChannelIconComponent)(n);
                return (0, a.jsx)(o.Tooltip, {
                    text: A.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !i && null != l,
                    children: e => (0, a.jsxs)(o.Clickable, {
                        ...e,
                        className: u(b.inline, b.channelContainer, {
                            [b.channelContainerEnabled]: i && null != l,
                            [b.channelContainerDisabled]: !i && null != l
                        }),
                        onClick: l,
                        children: [(0, a.jsx)(o.Tooltip, {
                            text: A.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: t && r && i && null != l,
                            children: e => null != c ? (0, a.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: b.icon
                            }) : null
                        }), (0, a.jsx)(o.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: b.channelLocation,
                            children: n.name
                        })]
                    })
                })
            }

            function D(e) {
                let {
                    guild: n,
                    channel: l,
                    onJoinClick: t,
                    handleLocationClick: i,
                    location: s,
                    isExternal: r,
                    isHub: d
                } = e;
                if (d) return null == n ? (0, a.jsx)("div", {}) : (0, a.jsxs)("div", {
                    className: b.inline,
                    children: [(0, a.jsx)(m.default, {
                        className: b.guildIcon,
                        size: m.default.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                });
                return null != l ? (0, a.jsx)(V, {
                    channel: l,
                    onClick: t
                }) : (0, a.jsxs)(o.Clickable, {
                    className: b.inline,
                    onClick: i,
                    children: [(0, a.jsx)(g.default, {
                        height: 20,
                        width: 20,
                        className: u(b.channelContainer, b.icon)
                    }), (0, a.jsx)(o.Text, {
                        className: r ? b.externalLocation : b.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, E.guildEventDetailsParser)(s, !0)
                    })]
                })
            }

            function w(e) {
                var n;
                let {
                    className: l,
                    guild: t,
                    channel: s,
                    creator: r,
                    name: d,
                    entityType: v,
                    description: f,
                    imageLocation: C = i.BANNER,
                    imageSource: x,
                    isActive: m,
                    isUserLurking: g,
                    isJoined: E = !1,
                    isMember: L = !1,
                    isHub: A = !1,
                    speakers: V,
                    speakerCount: w,
                    rsvped: G,
                    canInvite: H,
                    location: U,
                    truncate: B,
                    onContextMenu: P,
                    onJoinClick: y,
                    onJoinGuildClick: O,
                    onGoToGuildClick: Z,
                    onRsvpClick: z,
                    onStartClick: F,
                    onInviteClick: Y,
                    onEndClick: J,
                    onClick: K,
                    isNew: W,
                    guildEventId: X,
                    eventPreview: q,
                    recurrenceRule: Q,
                    recurrenceId: $
                } = e, ee = (0, p.isChannelPublic)(s, v), en = v === M.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: el
                } = (0, h.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: et
                } = N.default.useExperiment({
                    guildId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : "",
                    location: el[0]
                }, {
                    autoTrackExposure: !1
                }), ei = [];
                if (null != Q) {
                    let e = (0, j.getRRule)(Q);
                    ei = (0, j.generateNextRecurrences)(4, e)
                }
                let ea = et && ei.length > 0;
                return (0, a.jsxs)(o.ClickableContainer, {
                    "aria-label": d,
                    onClick: () => null == K ? void 0 : K(),
                    onContextMenu: P,
                    className: u(b.card, {
                        [b.joined]: E,
                        [b.lurking]: g
                    }, l),
                    children: [(0, a.jsxs)("div", {
                        className: u(b.padding, {
                            [b.isRecurring]: ea
                        }),
                        children: [C === i.BANNER && (0, a.jsx)(I.default, {
                            source: x
                        }), (0, a.jsx)(S.default, {
                            creator: r,
                            name: d,
                            description: f,
                            imageSource: C === i.THUMBNAIL ? x : null,
                            truncate: B,
                            guildId: null == t ? void 0 : t.id,
                            isHub: A,
                            isNew: W,
                            guildEventId: X,
                            eventPreview: q,
                            recurrenceId: $
                        }), m && null != t && null != V && w > 0 && (0, a.jsx)(k.default, {
                            guild: t,
                            speakers: V,
                            speakerCount: w,
                            className: b.spacing
                        }), (0, a.jsx)("hr", {
                            className: b.divider
                        }), (0, a.jsxs)("div", {
                            className: u(b.inline, b.footer),
                            children: [(0, a.jsx)(D, {
                                guild: t,
                                channel: s,
                                onJoinClick: y,
                                handleLocationClick: en ? e => e.stopPropagation() : void 0,
                                location: U,
                                isExternal: en,
                                isHub: A
                            }), A ? (0, a.jsx)(_.default, {
                                isActive: m,
                                isUserLurking: g,
                                isMember: L,
                                rsvped: G,
                                onRsvpClick: z,
                                onJoinGuildClick: O,
                                onGoToGuildClick: Z,
                                guildName: null == t ? void 0 : t.name,
                                canInvite: H,
                                isChannelPublic: ee,
                                onInviteClick: Y
                            }) : (0, a.jsx)(R.default, {
                                entityType: v,
                                isJoined: E,
                                isActive: m,
                                isUserLurking: g,
                                rsvped: G,
                                canInvite: H,
                                isChannelPublic: ee,
                                onContextMenu: P,
                                onJoinClick: y,
                                onRsvpClick: z,
                                onStartClick: F,
                                onInviteClick: Y,
                                onEndClick: J
                            })]
                        }), ea && (0, a.jsx)("hr", {
                            className: b.divider
                        })]
                    }), ea && (0, a.jsx)(T.default, {
                        recurrenceRule: Q,
                        guildEventId: X,
                        onClick: K
                    })]
                })
            }(t = i || (i = {}))[t.BANNER = 0] = "BANNER", t[t.THUMBNAIL = 1] = "THUMBNAIL"
        },
        123030: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return E
                }
            });
            var t = l("920040");
            l("773670");
            var i = l("575482"),
                a = l.n(i),
                s = l("500947"),
                r = l("498225"),
                u = l("77078"),
                d = l("272030"),
                o = l("42203"),
                c = l("305961"),
                h = l("433487"),
                v = l("398604"),
                f = l("397680"),
                C = l("393745"),
                x = l("745049"),
                m = l("49111"),
                g = l("782340"),
                N = l("682003");

            function E(e) {
                let {
                    originalScheduledStartTime: n,
                    guildEventId: i,
                    onClick: E
                } = e, p = s.default.fromTimestamp(Math.floor(n.getTime() / m.Durations.SECOND)), j = (0, r.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(i)), R = (0, f.default)(p, null == j ? void 0 : j.id), I = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(null == j ? void 0 : j.guild_id)), S = (0, r.useStateFromStores)([o.default], () => o.default.getChannel(null == j ? void 0 : j.channel_id));
                if (null == j) return null;
                let {
                    is_canceled: T = !1
                } = null != R ? R : {}, _ = (null == R ? void 0 : R.scheduled_start_time) != null ? new Date(null == R ? void 0 : R.scheduled_start_time) : n, k = e => {
                    e.stopPropagation(), null != I && (0, d.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await l.el("110374").then(l.bind(l, "110374"));
                        return n => (0, t.jsx)(e, {
                            guildEventId: j.id,
                            recurrenceId: p,
                            channel: S,
                            guild: I,
                            ...n
                        })
                    })
                };
                return (0, t.jsxs)(u.ClickableContainer, {
                    className: a(N.container, {
                        [N.canceled]: T
                    }),
                    onClick: e => {
                        e.stopPropagation(), !T && (null == E || E(p))
                    },
                    onContextMenu: k,
                    "aria-label": "",
                    children: [(0, t.jsx)(C.GuildEventTimeStatus, {
                        startTime: _.toISOString(),
                        status: T ? x.GuildScheduledEventStatus.CANCELED : x.GuildScheduledEventStatus.SCHEDULED,
                        eventType: j.entity_type,
                        className: N.timeStatus
                    }), T && (0, t.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "text-danger",
                        className: N.canceledStatus,
                        children: g.default.Messages.EVENT_CANCELED
                    }), (0, t.jsx)(u.Tooltip, {
                        text: g.default.Messages.MORE,
                        position: "top",
                        "aria-label": g.default.Messages.EDIT,
                        children: e => (0, t.jsx)(u.Clickable, {
                            ...e,
                            onClick: k,
                            className: N.iconButton,
                            children: (0, t.jsx)(h.default, {
                                width: 20,
                                height: 20,
                                className: N.icon
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
            var t = l("920040"),
                i = l("773670"),
                a = l("77078"),
                s = l("822516"),
                r = l("123030"),
                u = l("782340"),
                d = l("922014");

            function o(e) {
                let {
                    recurrenceRule: n,
                    guildEventId: l,
                    onClick: o
                } = e, [c, h] = i.useState([]);
                i.useEffect(() => {
                    if (null != n) {
                        let e = (0, s.getRRule)(n);
                        h((0, s.generateNextRecurrences)(4, e))
                    }
                }, [n]);
                let v = i.useMemo(() => {
                    if (null == n || 0 === c.length) return !1;
                    let e = new Date;
                    e.setFullYear(e.getFullYear() + s.MAX_YEARS_AHEAD_RECURRING_EVENT);
                    let l = c[c.length - 1],
                        t = (0, s.getRRule)(n),
                        i = t.after(l);
                    return null != i && !(i > e) && !0
                }, [n, c]);
                return (0, t.jsxs)("div", {
                    className: d.recurrences,
                    children: [(0, t.jsx)(a.Heading, {
                        variant: "heading-sm/medium",
                        className: d.heading,
                        children: u.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, t.jsxs)(a.Scroller, {
                        className: d.scroller,
                        children: [c.map(e => (0, t.jsx)(r.default, {
                            originalScheduledStartTime: e,
                            guildEventId: l,
                            onClick: o
                        }, e.toString())), v && (0, t.jsx)(a.Button, {
                            grow: !1,
                            onClick: e => {
                                if (e.stopPropagation(), null == n) return;
                                let l = (0, s.getRRule)(n),
                                    t = c[c.length - 1];
                                h([...c, ...(0, s.generateNextRecurrences)(4, l, t)])
                            },
                            look: a.Button.Looks.LINK,
                            size: a.Button.Sizes.MIN,
                            color: a.Button.Colors.LINK,
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
            var t = l("920040");
            l("773670");
            var i = l("575482"),
                a = l.n(i),
                s = l("77078"),
                r = l("849467"),
                u = l("782340"),
                d = l("490410");

            function o(e) {
                let {
                    guild: n,
                    speakers: l,
                    speakerCount: i,
                    className: o
                } = e, c = l.slice(0, 5), h = c.map(e => {
                    var l, i;
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
                    }, null == e ? void 0 : null === (i = e.user) || void 0 === i ? void 0 : i.id)
                }), v = i - c.length;
                return (0, t.jsxs)("div", {
                    className: a(d.grid, o),
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
        },
        849467: function(e, n, l) {
            "use strict";
            l.r(n), l.d(n, {
                default: function() {
                    return r
                }
            });
            var t = l("920040");
            l("773670");
            var i = l("469563"),
                a = l("696675"),
                s = l("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: l = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, t.jsxs)("svg", {
                        ...(0, s.default)(r),
                        width: n,
                        height: l,
                        viewBox: "0 0 24 24",
                        children: [(0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V21H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1ZM12 4C11.2 4 11 4.66667 11 5V11C11 11.3333 11.2 12 12 12C12.8 12 13 11.3333 13 11V5C13 4.66667 12.8 4 12 4Z",
                            className: a,
                            fill: i
                        }), (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: a,
                            fill: i
                        })]
                    })
                }, a.MicrophoneIcon)
        }
    }
]);