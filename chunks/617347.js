            "use strict";
            n.r(t), n.d(t, {
                GuildEventBodyImageLocation: function() {
                    return a
                },
                default: function() {
                    return P
                }
            });
            var l, a, s = n("37983"),
                i = n("884691"),
                r = n("414456"),
                u = n.n(r),
                o = n("446674"),
                d = n("77078"),
                c = n("812204"),
                E = n("685665"),
                f = n("656038"),
                _ = n("419830"),
                I = n("817963"),
                h = n("957255"),
                T = n("476263"),
                N = n("718550"),
                v = n("398604"),
                m = n("651072"),
                S = n("1339"),
                g = n("613767"),
                C = n("822516"),
                p = n("707916"),
                x = n("255050"),
                R = n("400271"),
                A = n("427554"),
                O = n("644189"),
                L = n("29913"),
                M = n("745049"),
                D = n("49111"),
                y = n("782340"),
                U = n("955614");

            function V(e) {
                let {
                    channel: t,
                    onClick: n
                } = e, {
                    canManageAllEvents: l
                } = (0, I.useManageResourcePermissions)(t), a = (0, o.useStateFromStores)([h.default], () => !t.isGuildVocal() || h.default.can(D.Permissions.CONNECT, t), [t]), r = i.useMemo(() => (0, f.default)(t), [t]), c = (0, _.getChannelIconComponent)(t);
                return (0, s.jsx)(d.Tooltip, {
                    text: y.default.Messages.GUILD_EVENT_CANNOT_CONNECT,
                    shouldShow: !a && null != n,
                    children: e => (0, s.jsxs)(d.Clickable, {
                        ...e,
                        className: u(U.inline, U.channelContainer, {
                            [U.channelContainerEnabled]: a && null != n,
                            [U.channelContainerDisabled]: !a && null != n
                        }),
                        onClick: n,
                        children: [(0, s.jsx)(d.Tooltip, {
                            text: y.default.Messages.GUILD_EVENT_PRIVATE_CHANNEL_TOOLTIP,
                            shouldShow: l && r && a && null != n,
                            children: e => null != c ? (0, s.jsx)(c, {
                                ...e,
                                width: 20,
                                height: 20,
                                className: U.icon
                            }) : null
                        }), (0, s.jsx)(d.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            className: U.channelLocation,
                            children: t.name
                        })]
                    })
                })
            }

            function j(e) {
                let {
                    guild: t,
                    channel: n,
                    onJoinClick: l,
                    handleLocationClick: a,
                    location: i,
                    isExternal: r,
                    isHub: o
                } = e;
                if (o) return null == t ? (0, s.jsx)("div", {}) : (0, s.jsxs)("div", {
                    className: U.inline,
                    children: [(0, s.jsx)(T.default, {
                        className: U.guildIcon,
                        size: T.default.Sizes.MINI,
                        active: !0,
                        guild: t
                    }), (0, s.jsx)(d.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        children: null == t ? void 0 : t.name
                    })]
                });
                return null != n ? (0, s.jsx)(V, {
                    channel: n,
                    onClick: l
                }) : (0, s.jsxs)(d.Clickable, {
                    className: U.inline,
                    onClick: a,
                    children: [(0, s.jsx)(N.default, {
                        height: 20,
                        width: 20,
                        className: u(U.channelContainer, U.icon)
                    }), (0, s.jsx)(d.Text, {
                        className: r ? U.externalLocation : U.channelLocation,
                        variant: "text-sm/normal",
                        children: (0, S.guildEventDetailsParser)(i, !0)
                    })]
                })
            }

            function P(e) {
                var t;
                let {
                    className: n,
                    guild: l,
                    channel: a,
                    creator: i,
                    name: r,
                    entityType: f,
                    description: _,
                    imageLocation: I = 0,
                    imageSource: h,
                    isActive: T,
                    isUserLurking: N,
                    isJoined: S = !1,
                    isMember: D = !1,
                    isHub: y = !1,
                    speakers: V,
                    speakerCount: P,
                    rsvped: G,
                    canInvite: H,
                    location: b,
                    truncate: B,
                    onContextMenu: F,
                    onJoinClick: w,
                    onJoinGuildClick: k,
                    onGoToGuildClick: Y,
                    onRsvpClick: z,
                    onStartClick: Z,
                    onInviteClick: K,
                    onEndClick: X,
                    onClick: W,
                    isNew: q,
                    guildEventId: J,
                    eventPreview: Q,
                    recurrenceRule: $,
                    recurrenceId: ee
                } = e, et = (0, g.isChannelPublic)(a, f), en = f === M.GuildScheduledEventEntityTypes.EXTERNAL, {
                    analyticsLocations: el
                } = (0, E.default)(c.default.GUILD_EVENT_CARD), {
                    enabled: ea
                } = m.default.useExperiment({
                    guildId: null !== (t = null == l ? void 0 : l.id) && void 0 !== t ? t : "",
                    location: el[0]
                }, {
                    autoTrackExposure: !1
                }), es = (0, o.useStateFromStores)([v.default], () => v.default.getGuildScheduledEvent(J)), ei = [];
                if (null != $ && null != es) {
                    let e = (0, C.getRRule)($);
                    ei = (0, C.generateNextRecurrences)(4, e, new Date(es.scheduled_start_time))
                }
                let er = ea && ei.length > 0;
                return (0, s.jsxs)(d.ClickableContainer, {
                    "aria-label": r,
                    onClick: () => null == W ? void 0 : W(ee),
                    onContextMenu: F,
                    className: u(U.card, {
                        [U.joined]: S,
                        [U.lurking]: N
                    }, n),
                    children: [(0, s.jsxs)("div", {
                        className: u(U.padding, {
                            [U.isRecurring]: er
                        }),
                        children: [0 === I && (0, s.jsx)(x.default, {
                            source: h
                        }), (0, s.jsx)(R.default, {
                            creator: i,
                            name: r,
                            description: _,
                            imageSource: 1 === I ? h : null,
                            truncate: B,
                            guildId: null == l ? void 0 : l.id,
                            isHub: y,
                            isNew: q,
                            guildEventId: J,
                            eventPreview: Q,
                            recurrenceId: ee
                        }), T && null != l && null != V && P > 0 && (0, s.jsx)(L.default, {
                            guild: l,
                            speakers: V,
                            speakerCount: P,
                            className: U.spacing
                        }), (0, s.jsx)("hr", {
                            className: U.divider
                        }), (0, s.jsxs)("div", {
                            className: u(U.inline, U.footer),
                            children: [(0, s.jsx)(j, {
                                guild: l,
                                channel: a,
                                onJoinClick: w,
                                handleLocationClick: en ? e => e.stopPropagation() : void 0,
                                location: b,
                                isExternal: en,
                                isHub: y
                            }), y ? (0, s.jsx)(O.default, {
                                isActive: T,
                                isUserLurking: N,
                                isMember: D,
                                rsvped: G,
                                onRsvpClick: z,
                                onJoinGuildClick: k,
                                onGoToGuildClick: Y,
                                guildName: null == l ? void 0 : l.name,
                                canInvite: H,
                                isChannelPublic: et,
                                onInviteClick: K
                            }) : (0, s.jsx)(p.default, {
                                entityType: f,
                                isJoined: S,
                                isActive: T,
                                isUserLurking: N,
                                rsvped: G,
                                canInvite: H,
                                isChannelPublic: et,
                                onContextMenu: F,
                                onJoinClick: w,
                                onRsvpClick: z,
                                onStartClick: Z,
                                onInviteClick: K,
                                onEndClick: X
                            })]
                        }), er && (0, s.jsx)("hr", {
                            className: U.divider
                        })]
                    }), er && (0, s.jsx)(A.default, {
                        guildId: null == l ? void 0 : l.id,
                        recurrenceRule: $,
                        guildEventId: J,
                        onRecurrenceClick: W
                    })]
                })
            }(l = a || (a = {}))[l.BANNER = 0] = "BANNER", l[l.THUMBNAIL = 1] = "THUMBNAIL"