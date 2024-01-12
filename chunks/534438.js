            "use strict";
            l.r(t), l.d(t, {
                StageInviteFooter: function() {
                    return I
                },
                default: function() {
                    return g
                }
            });
            var i = l("37983"),
                s = l("884691"),
                n = l("414456"),
                a = l.n(n),
                r = l("77078"),
                u = l("813006"),
                d = l("766274"),
                o = l("476263"),
                c = l("272339"),
                E = l("849467"),
                _ = l("228427"),
                f = l("713573"),
                S = l("258078"),
                C = l("587974"),
                h = l("782340"),
                p = l("482133");
            let m = e => {
                    var t;
                    let {
                        speaker: l,
                        guildId: s,
                        isEmbed: n
                    } = e, a = new d.default(l.user);
                    return (0, i.jsxs)("div", {
                        className: p.speaker,
                        children: [(0, i.jsx)(r.Avatar, {
                            src: a.getAvatarURL(s, n ? 16 : 24),
                            size: n ? r.AvatarSizes.SIZE_16 : r.AvatarSizes.SIZE_24,
                            "aria-label": "".concat(l.nick, "-avatar"),
                            className: n ? null : p.avatar
                        }), (0, i.jsx)(S.default, {
                            size: n ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
                            color: S.default.Colors.HEADER_SECONDARY,
                            className: p.username,
                            children: null !== (t = l.nick) && void 0 !== t ? t : a.username
                        })]
                    })
                },
                I = e => {
                    let {
                        guild: t,
                        onlineCount: l
                    } = e;
                    if (null == t) return null;
                    let s = new u.default(t),
                        {
                            name: n,
                            description: a
                        } = s;
                    return (0, i.jsxs)("div", {
                        children: [(0, i.jsx)(f.default, {
                            muted: !0,
                            uppercase: !0,
                            className: p.alignStart,
                            children: h.default.Messages.STAGE_INVITE_GUILD_HEADER
                        }), (0, i.jsxs)("div", {
                            className: p.guild,
                            children: [(0, i.jsx)(C.default, {
                                mask: C.default.Masks.SQUIRCLE,
                                width: 40,
                                height: 40,
                                children: (0, i.jsx)(o.default, {
                                    guild: s,
                                    size: o.default.Sizes.MEDIUM,
                                    active: !0
                                })
                            }), (0, i.jsxs)("div", {
                                className: p.guildInfo,
                                children: [(0, i.jsx)(r.Heading, {
                                    variant: "heading-sm/semibold",
                                    children: n
                                }), (0, i.jsxs)("div", {
                                    className: p.speaker,
                                    children: [(0, i.jsx)("div", {
                                        className: p.dot
                                    }), null != l && l > 0 ? (0, i.jsx)(r.Text, {
                                        variant: "text-sm/normal",
                                        children: h.default.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({
                                            membersOnline: l
                                        })
                                    }) : null]
                                })]
                            })]
                        }), null != a && "" !== a && (0, i.jsx)(r.Text, {
                            color: "header-secondary",
                            className: p.alignStart,
                            variant: "text-sm/normal",
                            children: a
                        })]
                    })
                };
            var g = e => {
                var t;
                let {
                    stageInstance: l,
                    guild: n,
                    isCard: d = !1,
                    isEmbed: I = !1,
                    onClick: g
                } = e, T = s.useMemo(() => null == n ? null : n instanceof u.default ? n : new u.default(n), [n]);
                if (null == l || null == T) return null;
                let {
                    topic: v,
                    speaker_count: O,
                    participant_count: A
                } = l, D = null !== (t = l.members) && void 0 !== t ? t : [], x = I ? D.slice(0, 3) : D, N = O - x.length;
                return I && (N += D.length - x.length), (0, i.jsxs)("div", {
                    children: [(0, i.jsxs)("div", {
                        className: p.flex,
                        children: [(0, i.jsxs)("div", {
                            className: p.flex,
                            children: [(0, i.jsx)(_.default, {
                                height: 24,
                                width: 24,
                                className: p.live
                            }), (0, i.jsx)(r.Heading, {
                                variant: "eyebrow",
                                className: a(p.label, p.live),
                                children: h.default.Messages.STAGE_CHANNEL_LIVE_NOW
                            })]
                        }), (0, i.jsxs)("div", {
                            className: p.background,
                            children: [(0, i.jsx)(c.default, {
                                height: 16,
                                width: 16,
                                className: p.listeners
                            }), (0, i.jsx)(r.Heading, {
                                className: a(p.label, p.listeners),
                                variant: "heading-sm/semibold",
                                children: A
                            })]
                        })]
                    }), I && (0, i.jsxs)("div", {
                        className: a(p.guild, {
                            [p.embed]: I
                        }),
                        children: [(0, i.jsx)(C.default, {
                            mask: C.default.Masks.SQUIRCLE,
                            width: 20,
                            height: 20,
                            children: (0, i.jsx)(o.default, {
                                guild: T,
                                size: o.default.Sizes.MINI,
                                active: !0
                            })
                        }), (0, i.jsx)(r.Text, {
                            color: "header-secondary",
                            className: p.label,
                            variant: "text-sm/normal",
                            children: T.name
                        })]
                    }), (0, i.jsx)(f.default, {
                        size: d || I ? f.default.Sizes.SIZE_16 : f.default.Sizes.SIZE_20,
                        className: a(p.header, {
                            [p.embed]: I
                        }),
                        children: v
                    }), (0, i.jsxs)("div", {
                        className: a(p.members, {
                            [p.embed]: I
                        }),
                        children: [x.length > 0 && (0, i.jsxs)("div", {
                            className: p.speakers,
                            children: [x.map(e => (0, i.jsx)(m, {
                                speaker: e,
                                guildId: T.id,
                                isEmbed: I
                            }, e.user.id)), N > 0 ? (0, i.jsxs)("div", {
                                className: p.speaker,
                                children: [(0, i.jsx)("div", {
                                    className: a(p.icon, {
                                        [p.embed]: I
                                    }),
                                    children: (0, i.jsx)(E.default, {
                                        height: I ? 12 : 14,
                                        className: p.listeners
                                    })
                                }), (0, i.jsxs)(S.default, {
                                    size: I ? S.default.Sizes.SIZE_12 : S.default.Sizes.SIZE_14,
                                    color: S.default.Colors.HEADER_SECONDARY,
                                    children: ["+", h.default.Messages.STAGE_INVITE_SPEAKER_COUNT.format({
                                        count: N
                                    })]
                                })]
                            }) : null]
                        }), I && (0, i.jsx)(r.Button, {
                            color: r.Button.Colors.GREEN,
                            onClick: g,
                            className: p.joinButton,
                            children: h.default.Messages.STAGE_CHANNEL_JOIN_BUTTON
                        })]
                    })]
                })
            }