            "use strict";
            n.r(t), n.d(t, {
                CommandClickable: function() {
                    return M
                },
                default: function() {
                    return T
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("77078"),
                r = n("507217"),
                o = n("240249"),
                u = n("524768"),
                d = n("300322"),
                c = n("845579"),
                m = n("42203"),
                f = n("474643"),
                h = n("957255"),
                p = n("18494"),
                g = n("666897"),
                E = n("659500"),
                v = n("49111"),
                C = n("317041"),
                I = n("406291"),
                x = n("782340"),
                _ = n("781606");

            function S(e, t, n, a) {
                if (null == e) return;
                let s = () => {
                    let l = m.default.getChannel(e);
                    if (null == l) return;
                    let {
                        command: s,
                        application: i
                    } = o.getCachedCommand(l, n);
                    if (null != s && s.name === t) {
                        var d, c;
                        E.ComponentDispatch.dispatch(v.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        });
                        let t = null != i ? {
                            type: u.ApplicationCommandSectionType.APPLICATION,
                            id: i.id,
                            icon: null !== (c = null == i ? void 0 : null === (d = i.bot) || void 0 === d ? void 0 : d.username) && void 0 !== c ? c : i.icon,
                            name: i.name,
                            application: i
                        } : null;
                        r.setActiveCommand({
                            channelId: e,
                            command: null,
                            section: null
                        }), r.setActiveCommand({
                            channelId: e,
                            command: s,
                            section: t,
                            location: a
                        })
                    }
                };
                "" !== f.default.getDraft(e, f.DraftType.ChannelMessage) ? (0, i.openModal)(t => (0, l.jsx)(i.ConfirmModal, {
                    header: x.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_HEADER,
                    confirmText: x.default.Messages.CLEAR,
                    cancelText: x.default.Messages.CANCEL,
                    onConfirm: () => s(),
                    confirmButtonColor: i.Button.Colors.BRAND,
                    onCloseCallback: () => {
                        E.ComponentDispatch.dispatch(v.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                            channelId: e
                        })
                    },
                    ...t,
                    children: (0, l.jsx)(i.Text, {
                        variant: "text-md/normal",
                        children: x.default.Messages.APPLICATION_COMMAND_MENTION_CONFIRM_BODY
                    })
                })) : s()
            }

            function N(e) {
                var t;
                let {
                    node: n,
                    output: r,
                    state: f
                } = e, E = (0, s.useStateFromStores)([m.default, p.default], () => {
                    var e;
                    return m.default.getChannel(null !== (e = n.channelId) && void 0 !== e ? e : p.default.getChannelId())
                }, [n.channelId]), {
                    hasSendMessagePerm: x,
                    hasUseAppCommandsPerm: _
                } = (0, s.useStateFromStoresObject)([h.default], () => {
                    let e = h.default.can(v.Permissions.SEND_MESSAGES, E),
                        t = h.default.can(v.Permissions.USE_APPLICATION_COMMANDS, E);
                    return {
                        hasSendMessagePerm: e,
                        hasUseAppCommandsPerm: t
                    }
                }), {
                    command: N
                } = o.useCommand(E, null !== (t = n.commandKey) && void 0 !== t ? t : ""), M = c.UseLegacyChatInput.useSetting(), T = a.useMemo(() => {
                    if (null == N || null == E || N.name !== n.commandName || M) return !1;
                    let e = E.isPrivate(),
                        t = (0, d.computeIsReadOnlyThread)(E);
                    if (t || !e && !x) return !1;
                    let l = (null == N ? void 0 : N.applicationId) === C.BuiltInSectionId.BUILT_IN;
                    return !!e || !!l || !!_ || !1
                }, [E, N, x, _, n.commandName, M]), A = a.useCallback(e => {
                    null == e || e.stopPropagation(), null != E && null != n.commandName && null != n.commandKey && S(E.id, n.commandName, n.commandKey, u.ApplicationCommandTriggerLocations.MENTION)
                }, [E, n.commandKey, n.commandName]);
                return T ? (0, l.jsx)(i.Tooltip, {
                    text: n.output,
                    position: "top",
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: a
                        } = e;
                        return (0, l.jsxs)(g.default, {
                            role: "link",
                            onClick: A,
                            onMouseEnter: t,
                            onMouseLeave: a,
                            children: [I.COMMAND_SENTINEL, r(n.content, f)]
                        }, f.key)
                    }
                }, f.key) : (0, l.jsxs)("span", {
                    children: [I.COMMAND_SENTINEL, r(n.content, f)]
                })
            }

            function M(e) {
                let {
                    commandId: t,
                    commandName: n,
                    commandDescription: a,
                    onClick: r
                } = e, o = (0, s.useStateFromStores)([p.default], () => p.default.getChannelId()), d = e => {
                    null == e || e.stopPropagation(), S(o, n, t, u.ApplicationCommandTriggerLocations.POPULAR_COMMANDS), null == r || r(t)
                };
                return (0, l.jsx)(i.Tooltip, {
                    text: a,
                    position: "top",
                    tooltipContentClassName: _.tooltip,
                    children: e => {
                        let {
                            onMouseEnter: t,
                            onMouseLeave: a
                        } = e;
                        return (0, l.jsxs)(i.Button, {
                            color: i.ButtonColors.PRIMARY,
                            size: i.ButtonSizes.ICON,
                            onClick: d,
                            onMouseEnter: t,
                            onMouseLeave: a,
                            children: ["/", n]
                        })
                    }
                })
            }

            function T(e) {
                return {
                    react: (e, t, n) => (0, l.jsx)(N, {
                        node: e,
                        output: t,
                        state: n
                    })
                }
            }