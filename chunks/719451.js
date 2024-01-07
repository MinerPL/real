            "use strict";
            n.r(t), n.d(t, {
                InviteResolvingHeader: function() {
                    return O
                },
                default: function() {
                    return A
                }
            }), n("70102");
            var l = n("37983"),
                a = n("884691"),
                r = n("446674"),
                u = n("77078"),
                i = n("770032"),
                s = n("653047"),
                o = n("233069"),
                d = n("813006"),
                _ = n("766274"),
                E = n("697218"),
                c = n("953109"),
                I = n("580357"),
                f = n("124969"),
                N = n("587974"),
                T = n("158998"),
                p = n("49111"),
                m = n("238055"),
                g = n("91366"),
                h = n("782340"),
                S = n("310042");
            let O = () => (0, l.jsxs)(a.Fragment, {
                    children: [(0, l.jsx)(f.Avatar, {
                        src: null,
                        size: u.AvatarSizes.DEPRECATED_SIZE_100,
                        className: S.avatar
                    }), (0, l.jsx)(f.SubTitle, {
                        children: h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN
                    }), (0, l.jsx)(f.Title, {
                        className: S.inviteResolvingGuildName,
                        children: h.default.Messages.LOADING
                    })]
                }),
                v = e => {
                    let {
                        guild: t,
                        user: n,
                        application: a,
                        compact: r
                    } = e;
                    if (null != a) return (0, l.jsx)(c.default, {
                        className: S.appIcon,
                        game: a,
                        size: S.appIconSize
                    });
                    if (null != n) return (0, l.jsx)(f.Avatar, {
                        src: null != n ? n.getAvatarURL(void 0, 80) : null,
                        size: u.AvatarSizes.SIZE_80,
                        className: r ? S.compactAvatar : S.avatar
                    });
                    if (null != t) return (0, l.jsx)(N.default, {
                        mask: N.default.Masks.SQUIRCLE,
                        width: 64,
                        height: 64,
                        className: S.guildIcon,
                        children: (0, l.jsx)(f.GuildIcon, {
                            guild: t,
                            size: f.GuildIcon.Sizes.LARGER,
                            animate: !0
                        })
                    });
                    else return null
                };
            var A = e => {
                var t;
                let n, a, c, {
                        invite: N,
                        disableUser: O = !1,
                        error: A,
                        flatActivityCount: C = !1,
                        isRegister: R = !1
                    } = e,
                    {
                        currentUser: M,
                        multiAccounts: x
                    } = (0, r.useStateFromStoresObject)([i.default, E.default], () => ({
                        currentUser: E.default.getCurrentUser(),
                        multiAccounts: i.default.getUsers()
                    }));
                if (null == N) return null;
                let D = null != N.guild ? new d.default(N.guild) : null,
                    L = null != N.channel ? (0, o.createChannelRecordFromInvite)(N.channel) : null,
                    P = null != N.target_application ? new s.default(N.target_application) : null,
                    V = O || null == N.inviter ? null : new _.default(N.inviter),
                    H = null != N.approximate_member_count && N.approximate_member_count > 100 || null != D && D.hasFeature(p.GuildFeatures.COMMUNITY),
                    F = !H && null != V,
                    U = null,
                    j = !1;
                if (null != D) U = null == V ? h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN : h.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                    username: T.default.getFormattedName(V)
                }), N.target_type === g.InviteTargetTypes.STREAM && null != N.target_user && (U = h.default.Messages.AUTH_MESSAGE_INVITED_TO_STREAM.format({
                    username: T.default.getFormattedName(N.target_user)
                })), N.target_type === g.InviteTargetTypes.EMBEDDED_APPLICATION && null != N.target_application && (U = null != V ? h.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY_USERNAME.format({
                    username: T.default.getFormattedName(V)
                }) : h.default.Messages.AUTH_MESSAGE_INVITED_TO_PLAY), F && null == P && (n = (0, l.jsx)(f.GuildIcon, {
                    className: S.icon,
                    guild: D,
                    size: f.GuildIcon.Sizes.SMALL
                })), a = D.name, null != P && (a = P.name, c = (0, l.jsxs)("div", {
                    children: [(0, l.jsx)(f.SubTitle, {
                        className: S.appIn,
                        children: h.default.Messages.EMBEDDED_ACTIVITIES_INVITE_IN
                    }), (0, l.jsxs)("div", {
                        className: S.guildContainer,
                        children: [(0, l.jsx)(f.GuildIcon, {
                            guild: D,
                            size: f.GuildIcon.Sizes.SMALL
                        }), (0, l.jsx)(u.Text, {
                            tag: "span",
                            variant: "text-lg/normal",
                            color: "header-primary",
                            className: S.appGuildName,
                            children: D.name
                        })]
                    })]
                }));
                else if (null != L) {
                    if (null == V) throw Error("no inviter in group DM invite");
                    let e = T.default.getFormattedName(V);
                    null != L.name && "" !== L.name ? (U = h.default.Messages.AUTH_MESSAGE_INVITED_BY.format({
                        username: e
                    }), a = L.name, null != L.icon && (n = (0, l.jsx)(f.ChannelIcon, {
                        channel: L,
                        size: u.AvatarSizes.SIZE_32
                    }))) : (U = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_JOIN_GROUP_DM, a = e)
                } else if (null != V) {
                    let e = T.default.getFormattedName(V, !0);
                    a = h.default.Messages.INSTANT_INVITE_YOU_HAVE_BEEN_INVITED_TO_CHAT.format({
                        username: e
                    }), j = !0, c = null != A ? null : (0, l.jsx)(f.SubTitle, {
                        className: S.directInviteSubTitle,
                        children: R ? h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION_REGISTER.format({
                            username: e
                        }) : h.default.Messages.INSTANT_INVITE_DIRECT_FRIEND_DESCRIPTION.format({
                            username: e
                        })
                    })
                }
                return (0, l.jsxs)("div", {
                    className: S.container,
                    children: [(0, l.jsx)(v, {
                        application: P,
                        guild: D,
                        user: F ? V : null,
                        compact: j
                    }), null != A ? (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(f.SubTitle, {
                            children: h.default.Messages.INVITE_MODAL_ERROR_TITLE
                        }), (0, l.jsx)(f.Title, {
                            children: A
                        })]
                    }) : (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(f.SubTitle, {
                            children: U
                        }), (0, l.jsxs)(f.Title, {
                            className: S.title,
                            children: [null != D ? (0, l.jsx)(I.default, {
                                guild: D,
                                className: S.guildBadge,
                                tooltipPosition: "left"
                            }) : null, n, a]
                        })]
                    }), c, null != P || j || (null == N ? void 0 : null === (t = N.guild) || void 0 === t ? void 0 : t.id) === m.INVITE_ROUTING_HUB_GUILD_ID ? null : (0, l.jsx)(f.ActivityCount, {
                        className: S.activityCount,
                        online: N.approximate_presence_count,
                        total: N.approximate_member_count,
                        flat: C
                    }), x.length > 1 ? (0, l.jsx)(f.JoiningAs, {
                        user: M
                    }) : null]
                })
            }