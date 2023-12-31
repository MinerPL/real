            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("65597"),
                r = n("77078"),
                u = n("917397"),
                o = n("305961"),
                d = n("124969"),
                c = n("36694"),
                f = n("984678"),
                h = n("153769"),
                p = n("83900"),
                m = n("556081"),
                E = n("216947"),
                C = n("136281"),
                S = n("782340"),
                g = n("63893");

            function _(e) {
                let {
                    member: t
                } = e, n = (0, i.default)([o.default], () => o.default.getGuild(t.guildId), [t.guildId]), l = (0, u.useUserEmailVerification)(t.userId), _ = (0, u.useUserPhoneVerification)(t.userId), I = (0, u.useUserRulesAgreementLevel)(t.userId, t.guildId), T = (0, u.useUserAccountAgeDate)(t.userId), v = (0, u.useGuildMemberJoinedAtDate)(t.userId, t.guildId), x = (0, u.useGuildMemberInviteLinkCode)(t.userId, t.guildId);
                return null == n ? null : (0, a.jsx)("div", {
                    className: s(g.safetySignalsMainContainer),
                    children: (0, a.jsx)(r.FormItem, {
                        title: S.default.Messages.ACCOUNT,
                        titleClassName: g.infoTitle,
                        children: (0, a.jsxs)(C.UserModInfoItemContainer, {
                            children: [(0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(m.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX,
                                    className: g.unusualDMLabelIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED
                                }),
                                description: l ? (0, a.jsx)(c.default, {
                                    className: s(g.verifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }) : (0, a.jsx)(f.default, {
                                    className: s(g.unverifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                })
                            }), (0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(E.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX,
                                    className: g.unusualDMLabelIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_PHONE_VERIFIED
                                }),
                                description: _ ? (0, a.jsx)(c.default, {
                                    className: s(g.verifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }) : (0, a.jsx)(f.default, {
                                    className: s(g.unverifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                })
                            }), I !== u.UserRulesAgreementLevel.NO_GATE && (0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(E.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX,
                                    className: g.unusualDMLabelIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
                                }),
                                description: I === u.UserRulesAgreementLevel.AGREED ? (0, a.jsx)(c.default, {
                                    className: s(g.verifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }) : (0, a.jsx)(f.default, {
                                    className: s(g.unverifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                })
                            }), (0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(h.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
                                }),
                                description: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: T
                                })
                            }), (0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(d.GuildIcon, {
                                    guild: n,
                                    size: d.GuildIcon.Sizes.SMOL,
                                    animate: !1,
                                    className: g.guildIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
                                }),
                                description: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: v
                                })
                            }), (0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(p.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: S.default.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
                                }),
                                description: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: null != x ? x : "-"
                                })
                            })]
                        })
                    })
                })
            }