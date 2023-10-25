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
            var a = l("912557"),
                i = l("75196");
            let s = e => {
                let {
                    width: n = 24,
                    height: l = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, t.jsx)("svg", {
                    ...(0, i.default)(u),
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
                    return G
                }
            });
            var t, a, i = l("920040"),
                s = l("773670"),
                r = l("575482"),
                u = l.n(r),
                o = l("498225"),
                d = l("77078"),
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
                k = l("644189"),
                _ = l("29913"),
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
                } = (0, C.useManageResourcePermissions)(n), a = (0, o.useStateFromStores)([x.default], () => !n.isGuildVocal() || x.default.can(L.Permissions.CONNECT, n), [n]), r = s.useMemo(() => (0, v.default)(n), [n]), c = (0, f.getChannelIconComponent)(n);
                return (0, i.jsx)(d.Tooltip, {
                    text: A.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != l,
                    children: e => (0, i.jsxs)(d.Clickable, {
                        ...e,
                        className: u(b.inline, b.channelContainer, {
                            [b.channelContainerEnabled]: a && null != l,
                            [b.channelContainerDisabled]: !a && null != l
                        }),
                        onClick: l,
                        children: [(0, i.jsx)(d.Tooltip, {
                            text: A.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: t && r && a && null != l,
                            children: e => null != c ? (0, i.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: b.icon
                            }) : null
                        }), (0, i.jsx)(d.Text, {
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
                    handleLocationClick: a,
                    location: s,
                    isExternal: r,
                    isHub: o
                } = e;
                if (o) return null == n ? (0, i.jsx)("div", {}) : (0, i.jsxs)("div", {
                    className: b.inline,
                    children: [(0, i.jsx)(m.default, {
                        className: b.guildIcon,
                        size: m.default.Sizes.MINI,
                        active: !0,
                        guild: n
                    }), (0, i.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == n ? void 0 : n.name
                    })]
                });
                return null != l ? (0, i.jsx)(V, {
                    channel: l,
                    onClick: t
                }) : (0, i.jsxs)(d.Clickable, {
                    className: b.inline,
                    onClick: a,
                    children: [(0, i.jsx)(g.default, {
                        height: 20,
                        width: 20,
                        className: u(b.channelContainer, b.icon)
                    }), (0, i.jsx)(d.Text, {
                        className: r ? b.externalLocation : b.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, E.guildEventDetailsParser)(s, !0)
                    })]
                })
            }

            function G(e) {
                var n;
                let {
                    className: l,
                    guild: t,
                    channel: s,
                    creator: r,
                    name: o,
                    entityType: v,
                    description: f,
                    imageLocation: C = a.BANNER,
                    imageSource: x,
                    isActive: m,
                    isUserLurking: g,
                    isJoined: E = !1,
                    isMember: L = !1,
                    isHub: A = !1,
                    speakers: V,
                    speakerCount: G,
                    rsvped: w,
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
                    recurrenceRule: Q
                } = e, $ = (0, p.isChannelPublic)(s, v), ee = v === M.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: en
                } = (0, h.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: el
                } = N.default.useExperiment({
                    guildId: null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : "",
                    location: en[0]
                }, {
                    autoTrackExposure: !1
                }), et = [];
                if (null != Q) {
                    let e = (0, j.getRRule)(Q);
                    et = (0, j.generateNextRecurrences)(4, e)
                }
                let ea = el && et.length > 0;
                return (0, i.jsxs)(d.ClickableContainer, {
                    "aria-label": o,
                    onClick: () => null == K ? void 0 : K(),
                    onContextMenu: P,
                    className: u(b.card, {
                        [b.joined]: E,
                        [b.lurking]: g
                    }, l),
                    children: [(0, i.jsxs)("div", {
                        className: u(b.padding, {
                            [b.isRecurring]: ea
                        }),
                        children: [C === a.BANNER && (0, i.jsx)(I.default, {
                            source: x
                        }), (0, i.jsx)(S.default, {
                            creator: r,
                            name: o,
                            description: f,
                            imageSource: C === a.THUMBNAIL ? x : null,
                            truncate: B,
                            guildId: null == t ? void 0 : t.id,
                            isHub: A,
                            isNew: W,
                            guildEventId: X,
                            eventPreview: q
                        }), m && null != t && null != V && G > 0 && (0, i.jsx)(_.default, {
                            guild: t,
                            speakers: V,
                            speakerCount: G,
                            className: b.spacing
                        }), (0, i.jsx)("hr", {
                            className: b.divider
                        }), (0, i.jsxs)("div", {
                            className: u(b.inline, b.footer),
                            children: [(0, i.jsx)(D, {
                                guild: t,
                                channel: s,
                                onJoinClick: y,
                                handleLocationClick: ee ? e => e.stopPropagation() : void 0,
                                location: U,
                                isExternal: ee,
                                isHub: A
                            }), A ? (0, i.jsx)(k.default, {
                                isActive: m,
                                isUserLurking: g,
                                isMember: L,
                                rsvped: w,
                                onRsvpClick: z,
                                onJoinGuildClick: O,
                                onGoToGuildClick: Z,
                                guildName: null == t ? void 0 : t.name,
                                canInvite: H,
                                isChannelPublic: $,
                                onInviteClick: Y
                            }) : (0, i.jsx)(R.default, {
                                entityType: v,
                                isJoined: E,
                                isActive: m,
                                isUserLurking: g,
                                rsvped: w,
                                canInvite: H,
                                isChannelPublic: $,
                                onContextMenu: P,
                                onJoinClick: y,
                                onRsvpClick: z,
                                onStartClick: F,
                                onInviteClick: Y,
                                onEndClick: J
                            })]
                        }), ea && (0, i.jsx)("hr", {
                            className: b.divider
                        })]
                    }), ea && (0, i.jsx)(T.default, {
                        recurrenceRule: Q,
                        guildEventId: X,
                        onClick: K
                    })]
                })
            }(t = a || (a = {}))[t.BANNER = 0] = "BANNER", t[t.THUMBNAIL = 1] = "THUMBNAIL"
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
            var a = l("575482"),
                i = l.n(a),
                s = l("500947"),
                r = l("498225"),
                u = l("77078"),
                o = l("272030"),
                d = l("42203"),
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
                    guildEventId: a,
                    onClick: E
                } = e, p = s.default.fromTimestamp(Math.floor(n.getTime() / m.Durations.SECOND)), j = (0, r.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(a)), R = (0, f.default)(p, null == j ? void 0 : j.id), I = (0, r.useStateFromStores)([c.default], () => c.default.getGuild(null == j ? void 0 : j.guild_id)), S = (0, r.useStateFromStores)([d.default], () => d.default.getChannel(null == j ? void 0 : j.channel_id));
                if (null == j) return null;
                let {
                    is_canceled: T = !1
                } = null != R ? R : {}, k = e => {
                    e.stopPropagation(), null != I && (0, o.openContextMenuLazy)(e, async () => {
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
                    className: i(N.container, {
                        [N.canceled]: T
                    }),
                    onClick: e => {
                        e.stopPropagation(), !T && (null == E || E(p))
                    },
                    onContextMenu: k,
                    "aria-label": "",
                    children: [(0, t.jsx)(C.GuildEventTimeStatus, {
                        startTime: n.toISOString(),
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
                    return d
                }
            });
            var t = l("920040"),
                a = l("773670"),
                i = l("77078"),
                s = l("822516"),
                r = l("123030"),
                u = l("782340"),
                o = l("922014");

            function d(e) {
                let {
                    recurrenceRule: n,
                    guildEventId: l,
                    onClick: d
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
                    className: o.recurrences,
                    children: [(0, t.jsx)(i.Heading, {
                        variant: "heading-sm/medium",
                        className: o.heading,
                        children: u.default.Messages.GUILD_SCHEDULED_EVENT_REPEATS
                    }), (0, t.jsxs)(i.Scroller, {
                        className: o.scroller,
                        children: [c.map(e => (0, t.jsx)(r.default, {
                            originalScheduledStartTime: e,
                            guildEventId: l,
                            onClick: d
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
                            className: o.button,
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
                    return d
                }
            });
            var t = l("920040");
            l("773670");
            var a = l("575482"),
                i = l.n(a),
                s = l("77078"),
                r = l("849467"),
                u = l("782340"),
                o = l("490410");

            function d(e) {
                let {
                    guild: n,
                    speakers: l,
                    speakerCount: a,
                    className: d
                } = e, c = l.slice(0, 5), h = c.map(e => {
                    var l, a;
                    return (0, t.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, t.jsx)(s.Avatar, {
                            src: null == e ? void 0 : null === (l = e.user) || void 0 === l ? void 0 : l.getAvatarURL(n.id, 20),
                            size: s.AvatarSizes.SIZE_20,
                            className: o.avatar,
                            "aria-label": "".concat(null == e ? void 0 : e.userNick, "-avatar")
                        }), (0, t.jsx)("div", {
                            className: o.textInGridContainer,
                            children: (0, t.jsx)(s.Text, {
                                color: "header-secondary",
                                variant: "text-sm/normal",
                                className: o.textInGrid,
                                children: null == e ? void 0 : e.userNick
                            })
                        })]
                    }, null == e ? void 0 : null === (a = e.user) || void 0 === a ? void 0 : a.id)
                }), v = a - c.length;
                return (0, t.jsxs)("div", {
                    className: i(o.grid, d),
                    children: [h, v > 0 && (0, t.jsxs)("div", {
                        className: o.speakerContainer,
                        children: [(0, t.jsx)("div", {
                            className: o.iconMicrophone,
                            children: (0, t.jsx)(r.default, {
                                height: 12
                            })
                        }), (0, t.jsx)(s.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            className: o.textInGrid,
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
            var a = l("469563"),
                i = l("696675"),
                s = l("75196"),
                r = (0, a.replaceIcon)(function(e) {
                    let {
                        width: n = 24,
                        height: l = 24,
                        color: a = "currentColor",
                        foreground: i,
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
                            className: i,
                            fill: a
                        }), (0, t.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14.99 11C14.99 12.66 13.66 14 12 14C10.34 14 9 12.66 9 11V5C9 3.34 10.34 2 12 2C13.66 2 15 3.34 15 5L14.99 11ZM12 16.1C14.76 16.1 17.3 14 17.3 11H19C19 14.42 16.28 17.24 13 17.72V22H11V17.72C7.72 17.23 5 14.41 5 11H6.7C6.7 14 9.24 16.1 12 16.1Z",
                            className: i,
                            fill: a
                        })]
                    })
                }, i.MicrophoneIcon)
        }
    }
]);