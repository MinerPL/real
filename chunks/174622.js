            "use strict";
            n.r(l), n.d(l, {
                default: function() {
                    return G
                }
            }), n("424973"), n("222007");
            var t = n("37983"),
                s = n("884691"),
                a = n("414456"),
                i = n.n(a),
                u = n("77078"),
                r = n("843962"),
                d = n("679653"),
                o = n("419830"),
                c = n("407063"),
                E = n("845579"),
                m = n("315102"),
                v = n("474293"),
                N = n("145131"),
                h = n("953109"),
                C = n("476263"),
                p = n("782340"),
                I = n("312679");
            let f = e => {
                    let {
                        text: l,
                        extra: n
                    } = e;
                    return (0, t.jsxs)(u.FormTitle, {
                        className: I.header,
                        children: [l, n]
                    })
                },
                g = e => {
                    let {
                        resolving: l,
                        children: n
                    } = e;
                    return (0, t.jsx)("div", {
                        className: I.content,
                        children: l ? (0, t.jsxs)("div", {
                            className: I.resolvingWrapper,
                            children: [(0, t.jsx)("div", {
                                className: I.resolving,
                                children: (0, t.jsx)("div", {
                                    className: I.resolvingBackground
                                })
                            }), (0, t.jsx)("div", {
                                className: I.resolvingFakeButton,
                                children: (0, t.jsx)("div", {
                                    className: I.resolvingBackground
                                })
                            })]
                        }) : n
                    })
                },
                x = e => {
                    var l;
                    let {
                        application: n,
                        guild: s,
                        channel: a,
                        onClick: o,
                        expired: c = !1,
                        user: m,
                        className: N
                    } = e, p = null !== (l = (0, d.default)(a)) && void 0 !== l ? l : "", f = E.GifAutoPlay.useSetting();
                    if (c) return (0, t.jsx)("div", {
                        className: I.guildIconExpired
                    });
                    let g = null == s || null != s.icon,
                        x = i((0, v.getClass)(I, "guildIcon", g ? "Image" : "", null != o ? "Joined" : ""), N);
                    if (null != n) return (0, t.jsx)(h.default, {
                        game: n,
                        onClick: o,
                        size: I.applicationIcon,
                        className: x
                    });
                    if (null != s) return (0, t.jsx)(C.default, {
                        onClick: o,
                        active: !0,
                        guild: s,
                        className: x,
                        animate: f
                    });
                    if (null != a) return (0, t.jsx)(u.Avatar, {
                        onClick: o,
                        src: (0, r.getChannelIconURL)(a),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": p
                    });
                    else if (null != m) return (0, t.jsx)(u.Avatar, {
                        onClick: o,
                        src: m.getAvatarURL(null, 56),
                        size: u.AvatarSizes.SIZE_56,
                        className: x,
                        "aria-label": p
                    });
                    return null
                },
                S = e => {
                    let {
                        title: l,
                        onClick: n,
                        expired: s,
                        children: a
                    } = e, i = (0, t.jsx)(u.Heading, {
                        variant: "heading-md/semibold",
                        className: (0, v.getClass)(I, "inviteDestination", s ? "Expired" : null != n ? "Joined" : ""),
                        children: l
                    });
                    return (0, t.jsxs)(N.default, {
                        className: I.guildInfo,
                        direction: N.default.Direction.VERTICAL,
                        justify: N.default.Justify.CENTER,
                        children: [null == n ? i : (0, t.jsx)(u.Clickable, {
                            onClick: n,
                            children: i
                        }), (0, t.jsx)(u.Text, {
                            tag: "strong",
                            className: I.guildDetail,
                            variant: "text-sm/normal",
                            children: a
                        })]
                    })
                },
                R = e => {
                    let {
                        membersOnline: l,
                        members: n
                    } = e, s = [];
                    return null != l && l > 0 && s.push((0, t.jsxs)("div", {
                        className: I.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: I.statusOnline
                        }), (0, t.jsx)("span", {
                            className: I.count,
                            children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                membersOnline: l
                            })
                        })]
                    }, "onlineCount")), null != n && s.push((0, t.jsxs)("div", {
                        className: I.statusWrapper,
                        children: [(0, t.jsx)("i", {
                            className: I.statusOffline
                        }), (0, t.jsx)("span", {
                            className: I.count,
                            children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({
                                count: n
                            })
                        })]
                    }, "memberCount")), (0, t.jsx)("div", {
                        className: I.statusCounts,
                        children: s
                    })
                },
                T = e => {
                    let {
                        channel: l,
                        guild: n
                    } = e, s = (0, o.getChannelIconComponent)(l, n);
                    return null == l || null == s ? null : (0, t.jsxs)("div", {
                        className: I.channel,
                        children: [(0, t.jsx)(s, {
                            className: I.channelIcon,
                            width: 20,
                            height: 20
                        }), (0, t.jsx)("span", {
                            className: I.channelName,
                            children: l.name
                        })]
                    })
                },
                L = e => {
                    let {
                        children: l,
                        onClick: n,
                        className: s,
                        isDisabled: a,
                        ...r
                    } = e;
                    return (0, t.jsx)(u.Button, {
                        ...r,
                        disabled: a,
                        onClick: n,
                        size: I.buttonSize,
                        className: i(I.button, s),
                        children: l
                    })
                };
            L.Colors = u.Button.Colors, L.Looks = u.Button.Looks, L.defaultProps = {
                className: null,
                isDisabled: !1
            };
            let j = e => {
                    let {
                        children: l,
                        className: n,
                        containerRef: s
                    } = e;
                    return (0, t.jsx)("div", {
                        ref: s,
                        className: i(I.wrapper, n),
                        children: l
                    })
                },
                _ = e => {
                    let {
                        guild: l
                    } = e, [n, a] = s.useState(!1), u = m.default.getGuildSplashURL({
                        id: l.id,
                        splash: l.splash,
                        size: 400 * (0, c.getDevicePixelRatio)()
                    });
                    return null == u ? null : (0, t.jsx)("div", {
                        className: I.inviteSplash,
                        children: (0, t.jsx)("img", {
                            src: u,
                            alt: "",
                            className: i(I.inviteSplashImage, {
                                [I.inviteSplashImageLoaded]: n
                            }),
                            onLoad: () => a(!0)
                        })
                    })
                },
                D = e => {
                    let {
                        guild: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: I.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: I.guildName,
                            children: l.name
                        })
                    })
                },
                B = e => {
                    let {
                        guildTemplate: l
                    } = e;
                    return (0, t.jsx)("div", {
                        className: I.guildNameWrapper,
                        children: (0, t.jsx)("span", {
                            className: I.guildName,
                            children: l.serializedSourceGuild.name
                        })
                    })
                };
            j.Header = f, j.Body = g, j.Icon = x, j.Info = S, j.Data = R, j.Channel = T, j.Button = L, j.GuildSplash = _, j.GuildName = D, j.GuildTemplateName = B, f.displayName = "InviteButton.Header", g.displayName = "InviteButton.Body", x.displayName = "InviteButton.Icon", S.displayName = "InviteButton.Info", R.displayName = "InviteButton.Data", T.displayName = "InviteButton.Channel", L.displayName = "InviteButton.Button", _.displayName = "InviteButton.GuildSplash", D.displayName = "InviteButton.GuildName", B.displayName = "InviteButton.GuildTemplateName";
            var G = j