            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return k
                }
            }), n("424973"), n("222007"), n("881410");
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                u = n("446674"),
                d = n("769846"),
                c = n("77078"),
                f = n("970728"),
                m = n("191225"),
                E = n("969380"),
                _ = n("817039"),
                h = n("812204"),
                p = n("685665"),
                I = n("442939"),
                T = n("419830"),
                g = n("813006"),
                C = n("42203"),
                S = n("305961"),
                A = n("957255"),
                N = n("697218"),
                M = n("174622"),
                v = n("98292"),
                x = n("811305"),
                O = n("159885"),
                L = n("793079"),
                R = n("49111"),
                y = n("91366"),
                P = n("782340"),
                D = n("420515");
            let j = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_LARGE),
                U = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_IMAGE_WIDTH_SMALL),
                b = (0, O.cssValueToNumber)(d.default.EMBEDDED_APPLICATION_INVITE_CONTENT_WIDTH);

            function G(e) {
                let {
                    members: t,
                    membersOnline: n,
                    isLarge: s,
                    isStacked: l
                } = e, r = [];
                return null != n && n > 0 && r.push((0, a.jsxs)("div", {
                    className: D.statusWrapper,
                    children: [(0, a.jsx)("i", {
                        className: D.statusOnline
                    }), (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: D.count,
                        children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                            membersOnline: n
                        })
                    })]
                }, "onlineCount")), null != t && r.push((0, a.jsxs)("div", {
                    className: D.statusWrapper,
                    children: [(0, a.jsx)("i", {
                        className: D.statusOffline
                    }), (0, a.jsx)(c.Text, {
                        variant: "text-xs/normal",
                        className: D.count,
                        children: P.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                            count: t
                        })
                    })]
                }, "memberCount")), (0, a.jsx)("div", {
                    className: i(D.statusCounts, {
                        [D.large]: s,
                        [D.stacked]: l
                    }),
                    children: r
                })
            }

            function B(e) {
                let {
                    channel: t,
                    guild: n,
                    isStacked: s,
                    hasEnded: l
                } = e;
                if (null != t && null != n) {
                    let e = (0, T.getChannelIconComponent)(t, n);
                    return (0, a.jsxs)("div", {
                        className: i(D.channel, {
                            [D.stacked]: s,
                            [D.ended]: l
                        }),
                        children: [null != e ? (0, a.jsx)(e, {
                            className: D.channelIcon,
                            width: 16,
                            height: 16
                        }) : null, (0, a.jsx)(v.default, {
                            children: (0, a.jsx)(c.Text, {
                                variant: "text-xs/normal",
                                children: P.default.Messages.EMBEDDED_ACTIVITIES_INVITE_CHANNEL_IN_SERVER.format({
                                    channelName: t.name,
                                    serverName: n.name
                                })
                            })
                        })]
                    })
                }
                return null != n ? (0, a.jsx)("div", {
                    className: i(D.channel, {
                        [D.stacked]: s,
                        [D.ended]: l
                    }),
                    children: (0, a.jsx)(v.default, {
                        children: (0, a.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            children: P.default.Messages.INVITE_BUTTON_STREAMING_SUBTEXT.format({
                                guildName: n.name
                            })
                        })
                    })
                }) : null
            }

            function k(e) {
                var t, n;
                let l, r, {
                        invite: d,
                        getAcceptInviteContext: T
                    } = e,
                    {
                        approximate_member_count: v,
                        approximate_presence_count: O,
                        target_type: k,
                        target_application: w
                    } = d;
                o(k === y.InviteTargetTypes.EMBEDDED_APPLICATION && null != w, "invalid application invite");
                let H = s.useRef(null),
                    [F, V] = s.useState(!1),
                    [Y, W] = s.useState(!1);
                s.useEffect(() => {
                    let e = new ResizeObserver(() => (function() {
                            var e;
                            let t = null === (e = H.current) || void 0 === e ? void 0 : e.offsetWidth;
                            null != t && (V(t < b + U), W(t <= 2 * j))
                        })()),
                        t = H.current;
                    return null != t && e.observe(t), () => {
                        e.disconnect()
                    }
                }, [H, V, W]);
                let K = (0, u.useStateFromStores)([S.default], () => null != d.guild ? S.default.getGuild(d.guild.id) : null, [d]),
                    z = (0, I.default)([w.id])[0],
                    J = (0, u.useStateFromStores)([m.default], () => {
                        var e;
                        return (null == d ? void 0 : d.channel) != null && (null === (e = m.default.getSelfEmbeddedActivityForChannel(d.channel.id)) || void 0 === e ? void 0 : e.applicationId) === w.id
                    }),
                    Z = (0, u.useStateFromStores)([m.default], () => {
                        var e;
                        let t = (null === (e = d.channel) || void 0 === e ? void 0 : e.id) != null ? m.default.getEmbeddedActivitiesForChannel(d.channel.id) : [];
                        return t.some(e => {
                            let {
                                applicationId: t
                            } = e;
                            return w.id === t
                        })
                    }),
                    X = C.default.getChannel(null === (t = d.channel) || void 0 === t ? void 0 : t.id),
                    q = (0, u.useStateFromStores)([A.default], () => null != X && A.default.can(R.Permissions.USE_EMBEDDED_ACTIVITIES, X), [X]),
                    {
                        analyticsLocations: Q
                    } = (0, p.default)(h.default.INVITE_EMBED),
                    $ = (0, E.default)({
                        applicationId: w.id,
                        size: j
                    }),
                    ee = (0, u.useStateFromStoresArray)([m.default], () => null != X ? m.default.getEmbeddedActivitiesForChannel(X.id).filter(e => e.applicationId === w.id).flatMap(e => Array.from(e.userIds)) : [], [X, w.id]),
                    et = (0, u.useStateFromStoresArray)([N.default], () => ee.map(e => N.default.getUser(e)), [ee]),
                    en = d.state === R.InviteStates.ACCEPTING,
                    ea = null != K;
                if (null == K) {
                    if (null == d.guild) return (0, a.jsx)(L.default, {});
                    K = new g.default(d.guild)
                }
                let es = ea && !q || ea && J,
                    el = () => {
                        f.default.acceptInviteAndTransitionToInviteChannel({
                            inviteKey: d.code,
                            context: T("Invite Button Embed"),
                            analyticsLocations: Q
                        })
                    };
                return (ea && J && (l = P.default.Messages.EMBEDDED_ACTIVITIES_ALREADY_IN_ACTIVITY), !q && (l = P.default.Messages.EMBEDDED_ACTIVITIES_INVALID_PERMISSIONS), r = J ? P.default.Messages.INVITE_EMBED_JOINED : Z || !ea ? P.default.Messages.JOIN : P.default.Messages.START, null == d.code || "" === d.code) ? null : (0, a.jsxs)("div", {
                    className: D.container,
                    ref: H,
                    children: [(0, a.jsx)("div", {
                        className: i(D.imgContainer, {
                            [D.large]: F,
                            [D.stacked]: Y
                        }),
                        children: (0, a.jsx)(_.default, {
                            imageBackground: $,
                            applicationName: null !== (n = null == z ? void 0 : z.name) && void 0 !== n ? n : "",
                            imageClassName: i(D.img, {
                                [D.large]: F,
                                [D.stacked]: Y
                            }),
                            imageNotFoundClassName: i(D.brokenImg, {
                                [D.large]: F,
                                [D.stacked]: Y
                            })
                        })
                    }), (0, a.jsxs)(M.default, {
                        className: i(D.content, {
                            [D.large]: F,
                            [D.stacked]: Y
                        }),
                        children: [(0, a.jsxs)("div", {
                            className: D.info,
                            children: [(0, a.jsx)(c.FormTitle, {
                                children: ea ? P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_TITLE_INVITED_TO_JOIN : P.default.Messages.INVITE_BUTTON_TITLE_INVITED
                            }), (0, a.jsx)(c.Heading, {
                                className: D.heading,
                                variant: "heading-xl/semibold",
                                children: null == z ? void 0 : z.name
                            }), (0, a.jsx)(B, {
                                channel: X,
                                guild: K,
                                isStacked: Y,
                                hasEnded: !Z
                            })]
                        }), (0, a.jsxs)("div", {
                            className: i(D.currentState, {
                                [D.large]: F,
                                [D.split]: !Z && Y
                            }),
                            children: [!Z && ea ? (0, a.jsxs)("div", {
                                className: i(D.endedNote, {
                                    [D.large]: F
                                }),
                                children: [(0, a.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    children: P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_ENDED
                                }), (0, a.jsx)(c.Text, {
                                    variant: "text-xs/medium",
                                    children: P.default.Messages.EMBEDDED_ACTIVITIES_EMBED_START
                                })]
                            }) : null, ea ? null : (0, a.jsx)(G, {
                                members: v,
                                membersOnline: O,
                                isLarge: F,
                                isStacked: Y
                            }), (0, a.jsxs)("div", {
                                className: D.cta,
                                children: [null != K && Z ? (0, a.jsx)("div", {
                                    className: D.avatars,
                                    children: (0, a.jsx)(x.default, {
                                        guildId: K.id,
                                        users: et,
                                        max: 4
                                    })
                                }) : null, (0, a.jsx)(c.Tooltip, {
                                    text: l,
                                    children: e => {
                                        let {
                                            onClick: t,
                                            ...n
                                        } = e;
                                        return (0, a.jsx)(c.Button, {
                                            className: D.actionButton,
                                            onClick: () => {
                                                el(), null == t || t()
                                            },
                                            wrapperClassName: D.tooltipButtonWrapper,
                                            ...n,
                                            submitting: en,
                                            disabled: es,
                                            color: c.ButtonColors.GREEN,
                                            children: r
                                        })
                                    }
                                })]
                            })]
                        })]
                    })]
                })
            }