(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3045"], {
        111330: function(e, l, t) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 66 38' width='66' height='38'%3E%3Crect x='0' y='0' width='66' height='38' style='fill: rgb(0, 0, 0); stroke: rgb(0, 0, 0);'%3E%3C/rect%3E%3C/svg%3E"
        },
        753235: function(e, l, t) {
            "use strict";
            e.exports = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='6.122 5.864 259 50' width='259' height='50'%3E%3Cpath fill='%23000000' fill-rule='evenodd' d='M 68.122 11.864 L 192.122 11.864 C 193.779 11.864 195.122 13.207 195.122 14.864 L 195.122 28.864 C 195.122 30.521 193.779 31.864 192.122 31.864 L 68.122 31.864 C 66.465 31.864 65.122 30.521 65.122 28.864 L 65.122 14.864 C 65.122 13.207 66.465 11.864 68.122 11.864 Z M 68.122 35.864 L 262.122 35.864 C 263.779 35.864 265.122 37.207 265.122 38.864 L 265.122 48.864 C 265.122 50.521 263.779 51.864 262.122 51.864 L 68.122 51.864 C 66.465 51.864 65.122 50.521 65.122 48.864 L 65.122 38.864 C 65.122 37.207 66.465 35.864 68.122 35.864 Z M 25.352 5.864 L 36.892 5.864 C 43.579 5.864 46.004 6.56 48.448 7.867 C 50.893 9.175 52.811 11.093 54.118 13.537 C 55.428 15.984 56.122 18.407 56.122 25.094 L 56.122 36.634 C 56.122 43.321 55.426 45.746 54.119 48.19 C 52.811 50.635 50.893 52.553 48.449 53.86 C 46.002 55.17 43.579 55.864 36.892 55.864 L 25.352 55.864 C 18.665 55.864 16.24 55.168 13.796 53.861 C 11.351 52.553 9.433 50.635 8.126 48.191 C 6.816 45.744 6.122 43.321 6.122 36.634 L 6.122 25.094 C 6.122 18.407 6.818 15.982 8.125 13.538 C 9.432 11.094 11.352 9.174 13.795 7.868 C 16.242 6.558 18.665 5.864 25.352 5.864 Z'%3E%3C/path%3E%3C/svg%3E"
        },
        882550: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return u
                }
            });
            var n = t("773670"),
                a = t("498225"),
                s = t("851387"),
                i = t("697218");

            function u(e) {
                let l = (0, a.useStateFromStores)([i.default], () => i.default.getUser(null == e ? void 0 : e.creator_id), [e]);
                return n.useEffect(() => {
                    null == l && (null == e ? void 0 : e.creator_id) != null && s.default.requestMembersById(e.guild_id, e.creator_id)
                }, [e, l]), l
            }
        },
        914169: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                createEventLocationClickHandler: function() {
                    return A
                },
                default: function() {
                    return z
                }
            });
            var n = t("920040"),
                a = t("773670"),
                s = t("575482"),
                i = t.n(s),
                u = t("498225"),
                o = t("77078"),
                d = t("970728"),
                r = t("987317"),
                c = t("716214"),
                m = t("813006"),
                v = t("42203"),
                h = t("305961"),
                N = t("580357"),
                p = t("174622"),
                g = t("660279"),
                C = t("36694"),
                f = t("189007"),
                x = t("398604"),
                E = t("322224"),
                I = t("1339"),
                j = t("882550"),
                L = t("93550"),
                S = t("255050"),
                B = t("400271"),
                k = t("931874"),
                T = t("745049"),
                y = t("782340"),
                _ = t("237904");
            let b = (e, l) => t => {
                    t.stopPropagation(), r.default.selectVoiceChannel(e.channel_id, !1), null == l || l(t)
                },
                G = (e, l) => t => {
                    let n = v.default.getChannel(e.channel_id);
                    if (null != n) t.stopPropagation(), (0, c.connectAndOpen)(n), null == l || l(t)
                },
                A = (e, l) => {
                    switch (null == e ? void 0 : e.entity_type) {
                        case T.GuildScheduledEventEntityTypes.STAGE_INSTANCE:
                            return G(e, l);
                        case T.GuildScheduledEventEntityTypes.VOICE:
                            return b(e, l)
                    }
                    return () => {}
                },
                D = (e, l) => l && [T.GuildScheduledEventEntityTypes.STAGE_INSTANCE, T.GuildScheduledEventEntityTypes.VOICE].includes(null == e ? void 0 : e.entity_type),
                M = a.memo(function(e) {
                    var l;
                    let {
                        guild: t,
                        guildScheduledEvent: s,
                        channel: i,
                        isMember: r
                    } = e, c = (0, u.useStateFromStores)([h.default], () => {
                        var e;
                        return null == t ? null : null !== (e = h.default.getGuild(t.id)) && void 0 !== e ? e : new m.default(t)
                    }, [t]), v = (0, k.getLocationDataForEvent)(s, i), g = a.useCallback(e => {
                        r && null != s && (e.stopPropagation(), (0, d.transitionToGuildFromEventInvite)(s))
                    }, [r, s]), C = a.useCallback(e => {
                        A(s)(e)
                    }, [s]);
                    if (null == c) return null;
                    let f = null == v ? void 0 : v.IconComponent,
                        x = (0, n.jsxs)(n.Fragment, {
                            children: [null != f && (0, n.jsx)(f, {
                                width: 16,
                                height: 16,
                                className: _.channelIcon
                            }), (0, n.jsx)(o.Text, {
                                className: _.channelDescription,
                                variant: "text-xs/normal",
                                children: (0, I.guildEventDetailsParser)(null !== (l = null == v ? void 0 : v.locationName) && void 0 !== l ? l : "", !0)
                            })]
                        });
                    return (0, n.jsxs)("div", {
                        className: _.inviteDetailsContainer,
                        children: [(0, n.jsx)(p.default.Icon, {
                            guild: c,
                            onClick: g
                        }), (0, n.jsxs)("div", {
                            className: _.verticalContainer,
                            children: [(0, n.jsxs)("div", {
                                className: _.guildChannelInfoContainer,
                                children: [(0, n.jsx)(N.default, {
                                    guild: c,
                                    tooltipPosition: "top",
                                    tooltipColor: o.Tooltip.Colors.PRIMARY,
                                    size: 16,
                                    className: _.guildBadge
                                }), (0, n.jsx)(o.Clickable, {
                                    className: _.guildNameClickable,
                                    onClick: g,
                                    children: (0, n.jsx)(o.Heading, {
                                        className: r ? _.guildNameLinkable : _.guildName,
                                        variant: "text-sm/medium",
                                        children: c.name
                                    })
                                })]
                            }), (0, n.jsx)("div", {
                                className: _.channelInfoContainer,
                                children: D(s, r) ? (0, n.jsx)(o.Clickable, {
                                    className: _.channelLocationLink,
                                    onClick: C,
                                    children: x
                                }) : x
                            })]
                        })]
                    })
                }),
                w = a.memo(function(e) {
                    let {
                        guildId: l,
                        guildScheduledEventId: t,
                        isActive: a,
                        isEnded: s,
                        isMember: i,
                        isExternal: d,
                        onAcceptInstantInvite: r,
                        onTransitionToInviteChannel: c
                    } = e, m = (0, u.useStateFromStores)([x.default], () => x.default.hasRsvp(t, l), [l, t]), v = e => {
                        e.stopPropagation(), i ? a && c() : r()
                    };
                    return i ? a ? (0, n.jsx)(o.Button, {
                        className: _.button,
                        size: o.Button.Sizes.SMALL,
                        onClick: e => {
                            !d && v(e)
                        },
                        color: d ? o.Button.Colors.TRANSPARENT : o.Button.Colors.GREEN,
                        children: d ? y.default.Messages.GUILD_SCHEDULED_EVENT_VIEW_DETAIL : y.default.Messages.JOIN_GUILD
                    }) : s ? (0, n.jsx)(o.Button, {
                        className: _.button,
                        size: o.Button.Sizes.SMALL,
                        disabled: !0,
                        color: o.Button.Colors.PRIMARY,
                        look: o.Button.Looks.OUTLINED,
                        children: y.default.Messages.GUILD_EVENT_INVITE_COMPLETED
                    }) : (0, n.jsxs)(o.Button, {
                        className: _.button,
                        innerClassName: _.innerButton,
                        size: o.Button.Sizes.SMALL,
                        color: o.Button.Colors.PRIMARY,
                        look: m ? o.Button.Looks.OUTLINED : o.Button.Looks.FILLED,
                        onClick: e => {
                            e.stopPropagation(), m ? E.default.deleteRsvpForGuildEvent(t, l) : E.default.createRsvpForGuildEvent(t, l)
                        },
                        children: [m ? (0, n.jsx)(C.default, {
                            width: 16,
                            height: 16,
                            className: _.buttonIcon
                        }) : (0, n.jsx)(g.default, {
                            width: 16,
                            height: 16,
                            className: _.buttonIcon
                        }), y.default.Messages.INDICATE_RSVP]
                    }) : (0, n.jsx)(o.Button, {
                        className: _.button,
                        size: o.Button.Sizes.SMALL,
                        onClick: v,
                        color: o.Button.Colors.GREEN,
                        children: y.default.Messages.JOIN_GUILD
                    })
                }),
                R = a.memo(function(e) {
                    var l;
                    let {
                        guildScheduledEvent: t,
                        guild: s,
                        channel: u,
                        isMember: d,
                        onAcceptInstantInvite: r,
                        onTransitionToInviteChannel: c
                    } = e, m = (0, j.default)(t), v = a.useCallback(() => {
                        d && null != t && (0, f.openGuildEventDetails)({
                            eventId: t.id
                        })
                    }, [d, t]);
                    if (null == t) return null;
                    let h = (0, x.isGuildScheduledEventActive)(t),
                        N = (0, x.isGuildEventEnded)(t),
                        g = t.entity_type === T.GuildScheduledEventEntityTypes.EXTERNAL;
                    return (0, n.jsx)(p.default, {
                        className: i({
                            [_.clickable]: d
                        }),
                        children: (0, n.jsxs)(o.Clickable, {
                            onClick: v,
                            children: [null != t.image && (0, n.jsx)(S.default, {
                                source: (0, L.default)(t),
                                className: _.banner
                            }), (0, n.jsx)(B.default, {
                                name: t.name,
                                description: null !== (l = t.description) && void 0 !== l ? l : void 0,
                                descriptionClassName: _.eventDescription,
                                guildId: t.guild_id,
                                creator: m,
                                guildEventId: t.id,
                                eventPreview: t
                            }), (0, n.jsxs)("div", {
                                className: _.footerContainer,
                                children: [(0, n.jsx)(M, {
                                    guild: s,
                                    channel: u,
                                    guildScheduledEvent: t,
                                    isMember: d
                                }), (0, n.jsx)(w, {
                                    isActive: h,
                                    isEnded: N,
                                    isMember: d,
                                    guildId: t.guild_id,
                                    guildScheduledEventId: t.id,
                                    onAcceptInstantInvite: r,
                                    onTransitionToInviteChannel: c,
                                    isExternal: g
                                })]
                            })]
                        })
                    })
                });
            var z = R
        },
        931874: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                getLocationDataForEvent: function() {
                    return i
                }
            });
            var n = t("419830"),
                a = t("718550"),
                s = t("841363");

            function i(e, l) {
                let t, i;
                if (null == e) return null;
                let u = (0, s.getLocationFromEvent)(e);
                if (null != u) t = a.default, i = u;
                else {
                    if (null == l) return null;
                    t = (0, n.getSimpleChannelIconComponent)(l.type), i = l.name
                }
                return {
                    IconComponent: t,
                    locationName: i
                }
            }
        },
        174622: function(e, l, t) {
            "use strict";
            t.r(l), t.d(l, {
                default: function() {
                    return b
                }
            });
            var n = t("920040"),
                a = t("773670"),
                s = t("575482"),
                i = t.n(s),
                u = t("77078"),
                o = t("843962"),
                d = t("679653"),
                r = t("419830"),
                c = t("407063"),
                m = t("845579"),
                v = t("315102"),
                h = t("474293"),
                N = t("145131"),
                p = t("953109"),
                g = t("109024"),
                C = t("782340"),
                f = t("822727");
            let x = e => {
                    let {
                        text: l,
                        extra: t
                    } = e;
                    return (0, n.jsxs)(u.FormTitle, {
                        className: f.header,
                        children: [l, t]
                    })
                },
                E = e => {
                    let {
                        resolving: l,
                        children: t
                    } = e;
                    return (0, n.jsx)("div", {
                        className: f.content,
                        children: l ? (0, n.jsxs)("div", {
                            className: f.resolvingWrapper,
                            children: [(0, n.jsx)("div", {
                                className: f.resolving,
                                children: (0, n.jsx)("div", {
                                    className: f.resolvingBackground
                                })
                            }), (0, n.jsx)("div", {
                                className: f.resolvingFakeButton,
                                children: (0, n.jsx)("div", {
                                    className: f.resolvingBackground
                                })
                            })]
                        }) : t
                    })
                },
                I = e => {
                    var l;
                    let {
                        application: t,
                        guild: a,
                        channel: s,
                        onClick: r,
                        expired: c = !1,
                        user: v,
                        className: N
                    } = e, C = null !== (l = (0, d.default)(s)) && void 0 !== l ? l : "", x = m.GifAutoPlay.useSetting();
                    if (c) return (0, n.jsx)("div", {
                        className: f.guildIconExpired
                    });
                    let E = null == a || null != a.icon,
                        I = i((0, h.getClass)(f, "guildIcon", E ? "Image" : "", null != r ? "Joined" : ""), N);
                    if (null != t) return (0, n.jsx)(p.default, {
                        game: t,
                        onClick: r,
                        size: f.applicationIcon,
                        className: I
                    });
                    if (null != a) return (0, n.jsx)(g.default, {
                        onClick: r,
                        active: !0,
                        guild: a,
                        className: I,
                        animate: x
                    });
                    if (null != s) return (0, n.jsx)(u.Avatar, {
                        onClick: r,
                        src: (0, o.getChannelIconURL)(s),
                        size: u.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": C
                    });
                    else if (null != v) return (0, n.jsx)(u.Avatar, {
                        onClick: r,
                        src: v.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: I,
                        "aria-label": C
                    });
                    return null
                },
                j = e => {
                    let {
                        title: l,
                        onClick: t,
                        expired: a,
                        children: s
                    } = e, i = (0, n.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, h.getClass)(f, "inviteDestination", a ? "Expired" : null != t ? "Joined" : ""),
                        children: l
                    });
                    return (0, n.jsxs)(N.default, {
                        className: f.guildInfo,
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.CENTER,
                        children: [null == t ? i : (0, n.jsx)(u.Clickable, {
                            onClick: t,
                            children: i
                        }), (0, n.jsx)(u.Text, {
                            tag: "strong",
                            className: f.guildDetail,
                            variant: "text-sm/normal",
                            children: s
                        })]
                    })
                },
                L = e => {
                    let {
                        membersOnline: l,
                        members: t
                    } = e, a = [];
                    return null != l && l > 0 && a.push((0, n.jsxs)("div", {
                        className: f.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: f.statusOnline
                        }), (0, n.jsx)("span", {
                            className: f.count,
                            children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: l
                            })
                        })]
                    }, "onlineCount")), null != t && a.push((0, n.jsxs)("div", {
                        className: f.statusWrapper,
                        children: [(0, n.jsx)("i", {
                            className: f.statusOffline
                        }), (0, n.jsx)("span", {
                            className: f.count,
                            children: C.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: t
                            })
                        })]
                    }, "memberCount")), (0, n.jsx)("div", {
                        className: f.statusCounts,
                        children: a
                    })
                },
                S = e => {
                    let {
                        channel: l,
                        guild: t
                    } = e, a = (0, r.getChannelIconComponent)(l, t);
                    return null == l || null == a ? null : (0, n.jsxs)("div", {
                        className: f.channel,
                        children: [(0, n.jsx)(a, {
                            className: f.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, n.jsx)("span", {
                            className: f.channelName,
                            children: l.name
                        })]
                    })
                },
                B = e => {
                    let {
                        children: l,
                        onClick: t,
                        className: a,
                        isDisabled: s,
                        ...o
                    } = e;
                    return (0, n.jsx)(u.Button, {
                        ...o,
                        disabled: s,
                        onClick: t,
                        size: f.buttonSize,
                        className: i(f.button, a),
                        children: l
                    })
                };
            B.Colors = u.Button.Colors, B.Looks = u.Button.Looks, B.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let k = e => {
                    let {
                        children: l,
                        className: t,
                        containerRef: a
                    } = e;
                    return (0, n.jsx)("div", {
                        ref: a,
                        className: i(f.wrapper, t),
                        children: l
                    })
                },
                T = e => {
                    let {
                        guild: l
                    } = e, [t, s] = a.useState(!1), u = v.default.getGuildSplashURL({
                        id: l.id,
                        splash: l.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, n.jsx)("div", {
                        className: f.inviteSplash,
                        children: (0, n.jsx)("img", {
                            src: u,
                            alt: "",
                            className: i(f.inviteSplashImage, {
                                [f.inviteSplashImageLoaded]: t
                            }),
                            onLoad: () => s(!0)
                        })
                    })
                },
                y = e => {
                    let {
                        guild: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: f.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: f.guildName,
                            children: l.name
                        })
                    })
                },
                _ = e => {
                    let {
                        guildTemplate: l
                    } = e;
                    return (0, n.jsx)("div", {
                        className: f.guildNameWrapper,
                        children: (0, n.jsx)("span", {
                            className: f.guildName,
                            children: l.serializedSourceGuild.name
                        })
                    })
                };
            k.Header = x, k.Body = E, k.Icon = I, k.Info = j, k.Data = L, k.Channel = S, k.Button = B, k.GuildSplash = T, k.GuildName = y, k.GuildTemplateName = _, x.displayName = "InviteButton.Header", E.displayName = "InviteButton.Body", I.displayName = "InviteButton.Icon", j.displayName = "InviteButton.Info", L.displayName = "InviteButton.Data", S.displayName = "InviteButton.Channel", B.displayName = "InviteButton.Button", T.displayName = "InviteButton.GuildSplash", y.displayName = "InviteButton.GuildName", _.displayName = "InviteButton.GuildTemplateName";
            var b = k
        }
    }
]);