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
                o = n("917397"),
                u = n("305961"),
                d = n("124969"),
                c = n("36694"),
                f = n("984678"),
                h = n("153769"),
                p = n("83900"),
                m = n("556081"),
                E = n("216947"),
                C = n("136281"),
                g = n("782340"),
                S = n("63893");

            function _(e) {
                let {
                    member: t
                } = e, n = (0, i.default)([u.default], () => u.default.getGuild(t.guildId), [t.guildId]), l = (0, o.useUserEmailVerification)(t.userId), _ = (0, o.useUserPhoneVerification)(t.userId), I = (0, o.useUserRulesAgreementLevel)(t.userId, t.guildId), T = (0, o.useUserAccountAgeDate)(t.userId), v = (0, o.useGuildMemberJoinedAtDate)(t.userId, t.guildId), x = (0, o.useGuildMemberInviteLinkCode)(t.userId, t.guildId);
                return null == n ? null : (0, a.jsx)("div", {
                    className: s(S.safetySignalsMainContainer),
                    children: (0, a.jsx)(r.FormItem, {
                        title: g.default.Messages.ACCOUNT,
                        titleClassName: S.infoTitle,
                        children: (0, a.jsxs)(C.UserModInfoItemContainer, {
                            children: [(0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(m.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX,
                                    className: S.unusualDMLabelIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: g.default.Messages.MEMBER_VERIFICATION_EMAIL_VERIFIED
                                }),
                                description: l ? (0, a.jsx)(c.default, {
                                    className: s(S.verifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }) : (0, a.jsx)(f.default, {
                                    className: s(S.unverifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                })
                            }), (0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(E.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX,
                                    className: S.unusualDMLabelIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: g.default.Messages.GUILD_MEMBER_MOD_VIEW_PHONE_VERIFIED
                                }),
                                description: _ ? (0, a.jsx)(c.default, {
                                    className: s(S.verifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }) : (0, a.jsx)(f.default, {
                                    className: s(S.unverifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                })
                            }), I !== o.UserRulesAgreementLevel.NO_GATE && (0, a.jsx)(C.UserModInfoItem, {
                                icon: (0, a.jsx)(E.default, {
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX,
                                    className: S.unusualDMLabelIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: g.default.Messages.GUILD_MEMBER_MOD_VIEW_AGREE_TO_RULES
                                }),
                                description: I === o.UserRulesAgreementLevel.AGREED ? (0, a.jsx)(c.default, {
                                    className: s(S.verifiedIcon),
                                    width: C.USER_MOD_ICON_SIZE_PX,
                                    height: C.USER_MOD_ICON_SIZE_PX
                                }) : (0, a.jsx)(f.default, {
                                    className: s(S.unverifiedIcon),
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
                                    children: g.default.Messages.GUILD_MEMBER_MOD_VIEW_DISCORD_JOIN_DATE
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
                                    className: S.guildIcon
                                }),
                                name: (0, a.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    color: "text-normal",
                                    children: g.default.Messages.GUILD_MEMBER_MOD_VIEW_GUILD_JOIN_DATE
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
                                    children: g.default.Messages.GUILD_MEMBER_MOD_VIEW_INVITE_LINK_LABEL
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