            "use strict";
            l.r(t), l.d(t, {
                StageInviteFooter: function() {
                    return I
                },
                default: function() {
                    return g
                }
            });
            var n = l("37983"),
                i = l("884691"),
                s = l("414456"),
                r = l.n(s),
                a = l("77078"),
                u = l("813006"),
                d = l("766274"),
                o = l("476263"),
                c = l("272339"),
                E = l("849467"),
                f = l("228427"),
                _ = l("713573"),
                S = l("258078"),
                h = l("587974"),
                p = l("782340"),
                C = l("482133");
            let m = e => {
                    var t;
                    let {
                        speaker: l,
                        guildId: i,
                        isEmbed: s
                    } = e, r = new d.default(l.user);
                    return (0, n.jsxs)("div", {
                        className: C.speaker,
                        children: [(0, n.jsx)(a.Avatar, {
                            src: r.getAvatarURL(i, s ? 16 : 24),
                            size: s ? a.AvatarSizes.SIZE_16 : a.AvatarSizes.SIZE_24,
                            "aria-label": "".concat(l.nick, "-avatar"),
                            className: s ? null : C.avatar
                        }), (0, n.jsx)(S.default, {
                            size: s ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
                            color: S.default.Colors.HEADER_SECONDARY,
                            className: C.username,
                            children: null !== (t = l.nick) && void 0 !== t ? t : r.username
                        })]
                    })
                },
                I = e => {
                    let {
                        guild: t,
                        onlineCount: l
                    } = e;
                    if (null == t) return null;
                    let i = new u.default(t),
                        {
                            name: s,
                            description: r
                        } = i;
                    return (0, n.jsxs)("div", {
                        children: [(0, n.jsx)(_.default, {
                            muted: !0,
                            uppercase: !0,
                            className: C.alignStart,
                            children: p.default.Messages.STAGE_INVITE_GUILD_HEADER
                        }), (0, n.jsxs)("div", {
                            className: C.guild,
                            children: [(0, n.jsx)(h.default, {
                                mask: h.default.Masks.SQUIRCLE,
                                width: 40,
                                height: 40,
                                children: (0, n.jsx)(o.default, {
                                    guild: i,
                                    size: o.default.Sizes.MEDIUM,
                                    active: !0
                                })
                            }), (0, n.jsxs)("div", {
                                className: C.guildInfo,
                                children: [(0, n.jsx)(a.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: s
                                }), (0, n.jsxs)("div", {
                                    className: C.speaker,
                                    children: [(0, n.jsx)("div", {
                                        className: C.dot
                                    }), null != l && l > 0 ? (0, n.jsx)(a.Text, {
                                        variant: "text-sm/normal",
                                        children: p.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                            membersOnline: l
                                        })
                                    }) : null]
                                })]
                            })]
                        }), null != r && "" !== r && (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            className: C.alignStart,
                            variant: "text-sm/normal",
                            children: r
                        })]
                    })
                };
            var g = e => {
                var t;
                let {
                    stageInstance: l,
                    guild: s,
                    isCard: d = !1,
                    isEmbed: I = !1,
                    onClick: g
                } = e, v = i.useMemo(() => null == s ? null : s instanceof u.default ? s : new u.default(s), [s]);
                if (null == l || null == v) return null;
                let {
                    topic: T,
                    speaker_count: O,
                    participant_count: A
                } = l, D = null !== (t = l.members) && void 0 !== t ? t : [], x = I ? D.slice(0, 3) : D, R = O - x.length;
                return I && (R += D.length - x.length), (0, n.jsxs)("div", {
                    children: [(0, n.jsxs)("div", {
                        className: C.flex,
                        children: [(0, n.jsxs)("div", {
                            className: C.flex,
                            children: [(0, n.jsx)(f.default, {
                                height: 24,
                                width: 24,
                                className: C.live
                            }), (0, n.jsx)(a.Heading, {
                                variant: "eyebrow",
                                className: r(C.label, C.live),
                                children: p.default.Messages.STAGE_CHANNEL_LIVE_NOW
                            })]
                        }), (0, n.jsxs)("div", {
                            className: C.background,
                            children: [(0, n.jsx)(c.default, {
                                height: 16,
                                width: 16,
                                className: C.listeners
                            }), (0, n.jsx)(a.Heading, {
                                className: r(C.label, C.listeners),
                                variant: "heading-sm/semibold",
                                children: A
                            })]
                        })]
                    }), I && (0, n.jsxs)("div", {
                        className: r(C.guild, {
                            [C.embed]: I
                        }),
                        children: [(0, n.jsx)(h.default, {
                            mask: h.default.Masks.SQUIRCLE,
                            width: 20,
                            height: 20,
                            children: (0, n.jsx)(o.default, {
                                guild: v,
                                size: o.default.Sizes.MINI,
                                active: !0
                            })
                        }), (0, n.jsx)(a.Text, {
                            color: "header-secondary",
                            className: C.label,
                            variant: "text-sm/normal",
                            children: v.name
                        })]
                    }), (0, n.jsx)(_.default, {
                        size: d || I ? _.default.Sizes.SIZE_16 : _.default.Sizes.SIZE_20,
                        className: r(C.header, {
                            [C.embed]: I
                        }),
                        children: T
                    }), (0, n.jsxs)("div", {
                        className: r(C.members, {
                            [C.embed]: I
                        }),
                        children: [x.length > 0 && (0, n.jsxs)("div", {
                            className: C.speakers,
                            children: [x.map(e => (0, n.jsx)(m, {
                                speaker: e,
                                guildId: v.id,
                                isEmbed: I
                            }, e.user.id)), R > 0 ? (0, n.jsxs)("div", {
                                className: C.speaker,
                                children: [(0, n.jsx)("div", {
                                    className: r(C.icon, {
                                        [C.embed]: I
                                    }),
                                    children: (0, n.jsx)(E.default, {
                                        height: I ? 12 : 14,
                                        className: C.listeners
                                    })
                                }), (0, n.jsxs)(S.default, {
                                    size: I ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
                                    color: S.default.Colors.HEADER_SECONDARY,
                                    children: ["+", p.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                        count: R
                                    })]
                                })]
                            }) : null]
                        }), I && (0, n.jsx)(a.Button, {
                            color: a.Button.Colors.GREEN,
                            onClick: g,
                            className: C.joinButton,
                            children: p.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                        })]
                    })]
                })
            }