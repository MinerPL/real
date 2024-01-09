            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("65597"),
                r = n("77078"),
                u = n("450911"),
                o = n("509"),
                d = n("278483"),
                c = n("700179"),
                f = n("130037"),
                h = n("271938"),
                p = n("26989"),
                m = n("305961"),
                E = n("957255"),
                C = n("824563"),
                g = n("101125"),
                S = n("697218"),
                _ = n("530346"),
                I = n("109264"),
                T = n("491401"),
                v = n("945330"),
                x = n("662255"),
                N = n("152224"),
                A = n("306160"),
                M = n("387111"),
                R = n("158998"),
                j = n("49111"),
                L = n("782340"),
                O = n("298028");

            function y(e) {
                let {
                    user: t,
                    guildId: n,
                    onClose: l
                } = e, s = t.id, u = (0, i.default)([g.default, C.default, h.default], () => s === h.default.getId() ? g.default.getStatus() : C.default.getStatus(s, n), [s, n]);
                return (0, a.jsxs)("div", {
                    className: O.topRow,
                    children: [(0, a.jsxs)("div", {
                        className: O.memberNameContainer,
                        children: [(0, a.jsx)("div", {
                            className: O.memberAvatar,
                            children: (0, a.jsx)(r.Avatar, {
                                src: t.getAvatarURL(n, 48),
                                "aria-label": t.username,
                                size: r.AvatarSizes.SIZE_48,
                                status: u
                            })
                        }), (0, a.jsx)("div", {
                            className: O.memberName,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-lg/medium",
                                children: (0, a.jsx)(r.NameWithRole, {
                                    name: M.default.getName(n, null, t),
                                    color: r.tokens.colors.HEADER_PRIMARY.css
                                })
                            })
                        }), (0, a.jsx)("div", {
                            className: O.memberGlobalName,
                            children: (0, a.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-normal",
                                children: R.default.getUserTag(t)
                            })
                        })]
                    }), (0, a.jsx)("div", {
                        className: O.close,
                        children: (0, a.jsx)(r.Text, {
                            variant: "text-md/medium",
                            color: "text-normal",
                            children: (0, a.jsx)(r.Clickable, {
                                className: O.closeAction,
                                onClick: l,
                                children: (0, a.jsx)(v.default, {})
                            })
                        })
                    })]
                })
            }

            function b(e) {
                let {
                    tag: t = "div",
                    disabled: n,
                    children: l,
                    onClick: i,
                    ...u
                } = e;
                return (0, a.jsx)(r.Clickable, {
                    ...u,
                    tag: t,
                    className: s(O.bottomRowAction, {
                        [O.bottomRowActionDisabled]: n
                    }),
                    onClick: n ? void 0 : i,
                    children: l
                })
            }

            function P(e) {
                let {
                    user: t,
                    member: l,
                    guildId: s,
                    location: h
                } = e, p = (0, i.default)([m.default], () => m.default.getGuild(s)), {
                    canKickUser: C,
                    canBanUser: g,
                    canModerateMembers: v
                } = (0, i.useStateFromStoresObject)([E.default, S.default, m.default], () => ({
                    canKickUser: null != p && E.default.canManageUser(j.Permissions.KICK_MEMBERS, t, p),
                    canBanUser: null != p && E.default.canManageUser(j.Permissions.BAN_MEMBERS, t, p),
                    canModerateMembers: null != p && (0, c.canToggleCommunicationDisableOnUser)(p.id, t.id, [S.default, m.default, E.default])
                }), [t, p]), M = (0, o.isMemberCommunicationDisabled)(l), R = null != h ? [h] : [], y = (0, f.useTrackModerationAction)(s, {
                    targetUserId: t.id,
                    location: h
                });
                return (0, a.jsxs)("div", {
                    className: O.bottomRow,
                    children: [(0, a.jsxs)(b, {
                        "aria-label": L.default.Messages.SEND_DM,
                        onClick: () => {
                            u.default.openPrivateChannel(t.id)
                        },
                        children: [(0, a.jsx)(I.default, {
                            width: 22,
                            height: 22
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: L.default.Messages.SEND_DM
                        })]
                    }), (0, a.jsxs)(b, {
                        disabled: !C,
                        "aria-label": L.default.Messages.KICK,
                        onClick: () => {
                            (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("125104").then(n.bind(n, "125104"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    location: h,
                                    guildId: s,
                                    user: t
                                })
                            })
                        },
                        children: [(0, a.jsx)(N.default, {
                            width: 22,
                            height: 22,
                            color: r.tokens.colors.TEXT_NORMAL.css
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: L.default.Messages.KICK
                        })]
                    }), (0, a.jsxs)(b, {
                        disabled: !g,
                        "aria-label": L.default.Messages.BAN,
                        onClick: () => {
                            (0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("743506").then(n.bind(n, "743506"));
                                return n => (0, a.jsx)(e, {
                                    ...n,
                                    location: h,
                                    guildId: s,
                                    user: t
                                })
                            })
                        },
                        children: [(0, a.jsx)(_.default, {
                            width: 22,
                            height: 22,
                            color: r.tokens.colors.TEXT_NORMAL.css
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: L.default.Messages.BAN
                        })]
                    }), (0, a.jsxs)(b, {
                        disabled: !v,
                        "aria-label": L.default.Messages.TIMEOUT_USER,
                        onClick: () => {
                            M ? (0, d.openEnableCommunication)(l.guildId, l.userId, R) : (0, d.openDisableCommunication)(l.guildId, l.userId, R)
                        },
                        children: [(0, a.jsx)(T.default, {
                            width: 22,
                            height: 22,
                            color: r.tokens.colors.TEXT_NORMAL.css
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: M ? L.default.Messages.REMOVE_TIME_OUT : L.default.Messages.TIMEOUT_USER
                        })]
                    }), (0, a.jsxs)(b, {
                        "aria-label": L.default.Messages.COPY_ID,
                        onClick: () => {
                            y(f.ModerationActionType.COPY_ID), (0, A.copy)(t.id)
                        },
                        disabled: !A.SUPPORTS_COPY,
                        children: [(0, a.jsx)(x.default, {
                            width: 22,
                            height: 22,
                            color: r.tokens.colors.TEXT_NORMAL.css
                        }), (0, a.jsx)(r.Text, {
                            variant: "text-sm/normal",
                            color: "none",
                            children: L.default.Messages.COPY_ID
                        })]
                    })]
                })
            }

            function D(e) {
                let {
                    userId: t,
                    guildId: n,
                    onClose: l
                } = e, s = (0, i.default)([S.default], () => S.default.getUser(t), [t]), r = (0, i.default)([p.default], () => p.default.getMember(n, t), [n, t]);
                return null == s || null == r ? null : (0, a.jsxs)("div", {
                    className: O.container,
                    children: [(0, a.jsx)(y, {
                        user: s,
                        guildId: n,
                        onClose: l
                    }), (0, a.jsx)(P, {
                        user: s,
                        member: r,
                        guildId: n,
                        location: location
                    })]
                })
            }