            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return N
                }
            });
            var a = n("37983"),
                s = n("884691"),
                l = n("414456"),
                i = n.n(l),
                r = n("627445"),
                o = n.n(r),
                u = n("866227"),
                d = n.n(u),
                c = n("77078"),
                f = n("574073"),
                m = n("38600"),
                E = n("981601"),
                _ = n("315102"),
                h = n("888400"),
                p = n("927632"),
                I = n("195483"),
                T = n("49111"),
                g = n("406291"),
                C = n("782340"),
                S = n("741566");

            function A(e) {
                let {
                    width: t = 6,
                    height: n = 10,
                    color: s = "currentColor",
                    className: l,
                    foreground: i
                } = e;
                return (0, a.jsx)("svg", {
                    className: l,
                    width: t,
                    height: n,
                    viewBox: "0 0 6 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: (0, a.jsx)("path", {
                        d: "M4.61241 0L6 0.845294L1.38759 10L0 9.15471L4.61241 0Z",
                        className: i,
                        fill: s
                    })
                })
            }

            function N(e) {
                var t;
                let n;
                let {
                    message: l,
                    channel: r
                } = e, u = s.useMemo(() => (e, t) => (o(null != r && null != t, "ExecuteCommand: user and channel cannot be undefined"), (0, a.jsx)(E.default, {
                    ...e,
                    channelId: r.id,
                    guildId: r.guild_id,
                    userId: t.id
                })), [r]), N = s.useMemo(() => e => (o(null != r, "ExecutedCommand: channel cannot be null"), (0, a.jsx)(p.default, {
                    ...e,
                    channel: r,
                    messageId: l.id,
                    interactionData: l.interactionData
                })), [r, l.id, l.interactionData]), M = (0, f.useNullableUserAuthor)(null === (t = l.interaction) || void 0 === t ? void 0 : t.user, r), v = s.useMemo(() => e.compact ? (0, m.default)((0, h.dateFormat)(d(), "LT")) : null, [e.compact]), x = l.interaction;
                if (null == x || null == M) return null;
                let O = () => {
                    let t = function(e, t) {
                            let n, {
                                message: s,
                                compact: l,
                                channel: r,
                                isInteractionUserBlocked: o,
                                showAvatarPopout: u,
                                onClickAvatar: d,
                                onUserContextMenu: m,
                                onPopoutRequestClose: E
                            } = e;
                            if (l || o) return (0, a.jsx)("div", {
                                className: S.replyBadge,
                                children: (0, a.jsx)(A, {
                                    className: S.commandIcon
                                })
                            });
                            if (null != s.interaction) {
                                var h, p, I;
                                let e = (0, f.getUserAuthor)(s.interaction.user, r);
                                n = null !== (I = _.default.getGuildMemberAvatarURL({
                                    avatar: null !== (h = e.guildMemberAvatar) && void 0 !== h ? h : void 0,
                                    userId: s.interaction.user.id,
                                    guildId: null !== (p = null == r ? void 0 : r.guild_id) && void 0 !== p ? p : ""
                                })) && void 0 !== I ? I : void 0
                            }
                            let T = () => null != s.interaction && function(e) {
                                let {
                                    user: t,
                                    guildId: n,
                                    guildAvatar: s,
                                    onClick: l,
                                    onContextMenu: r,
                                    onMouseDown: o
                                } = e;
                                return (0, a.jsx)("img", {
                                    alt: "",
                                    src: null != s ? s : t.getAvatarURL(n, 16),
                                    onClick: l,
                                    onContextMenu: r,
                                    onMouseDown: o,
                                    className: i({
                                        [S.executedCommandAvatar]: !0,
                                        [S.clickable]: null != l
                                    })
                                })
                            }({
                                user: s.interaction.user,
                                guildId: r.guild_id,
                                guildAvatar: n,
                                onClick: d,
                                onContextMenu: m
                            });
                            return null != t && null != u ? (0, a.jsx)(c.Popout, {
                                renderPopout: t,
                                shouldShow: u,
                                position: "right",
                                onRequestClose: E,
                                children: T
                            }) : T()
                        }(e, e => u(e, x.user)),
                        n = function(e, t, n) {
                            var s;
                            let {
                                message: l,
                                channel: i,
                                showUsernamePopout: r,
                                onClickUsername: o,
                                onUserContextMenu: u,
                                onPopoutRequestClose: d
                            } = e;
                            return (0, a.jsx)(I.default, {
                                compact: !0,
                                author: t,
                                message: l,
                                channel: i,
                                userOverride: null === (s = l.interaction) || void 0 === s ? void 0 : s.user,
                                showPopout: r,
                                renderPopout: n,
                                onClick: o,
                                onContextMenu: u,
                                onPopoutRequestClose: d
                            })
                        }(e, M, e => u(e, x.user));
                    return (0, a.jsxs)(s.Fragment, {
                        children: [t, n]
                    }, "user")
                };
                return n = (null == l ? void 0 : l.activityInstance) !== null ? C.default.Messages.APPLICATION_COMMAND_PRIMARY_ENTRY_POINT_USED.format({
                    userHook: O
                }) : C.default.Messages.APPLICATION_COMMAND_USED_SHORT.format({
                    userHook: O,
                    commandHook: () => {
                        let t = function(e, t) {
                            let {
                                showDataPopout: n,
                                message: s,
                                onClickCommand: l,
                                onPopoutRequestClose: r
                            } = e, o = s.interaction.displayName;
                            return (0, a.jsx)(c.Popout, {
                                renderPopout: t,
                                shouldShow: n,
                                position: "top",
                                align: "center",
                                onRequestClose: r,
                                animation: c.Popout.Animation.FADE,
                                positionKey: null != s.interactionData ? "ready" : "loading",
                                children: e => {
                                    let {
                                        onClick: t,
                                        ...n
                                    } = e;
                                    return s.type === T.MessageTypes.CHAT_INPUT_COMMAND || s.type === T.MessageTypes.INTERACTION_PREMIUM_UPSELL ? (0, a.jsx)(c.Clickable, {
                                        ...n,
                                        tag: "span",
                                        onClick: l,
                                        children: (0, a.jsx)("div", {
                                            className: i(S.commandName, S.clickable),
                                            children: g.COMMAND_SENTINEL + o
                                        })
                                    }) : (0, a.jsx)("div", {
                                        className: S.commandName,
                                        children: o
                                    })
                                }
                            })
                        }(e, N);
                        return (0, a.jsx)(s.Fragment, {
                            children: t
                        }, "command")
                    }
                }), (0, a.jsx)("div", {
                    className: i(S.repliedMessage, S.executedCommand, v),
                    "aria-hidden": !e.compact,
                    children: n
                })
            }