            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return D
                }
            });
            var i = n("37983");
            n("884691");
            var u = n("446674"),
                r = n("77078"),
                l = n("272030"),
                o = n("851387"),
                a = n("233322"),
                s = n("157186"),
                c = n("817963"),
                d = n("393414"),
                E = n("716214"),
                f = n("923959"),
                I = n("305961"),
                _ = n("957255"),
                S = n("599110"),
                T = n("306160"),
                N = n("322224"),
                v = n("152475"),
                C = n("397680"),
                h = n("613767"),
                p = n("822516"),
                L = n("669195"),
                g = n("936965"),
                G = n("745049"),
                m = n("49111"),
                R = n("782340");

            function D(e) {
                let {
                    guild: t,
                    channel: D,
                    guildScheduledEvent: M,
                    isActive: P,
                    recurrenceId: U,
                    onActionTaken: A
                } = e, {
                    scheduled_start_time: y,
                    id: O,
                    entity_type: x,
                    guild_id: b
                } = M, {
                    canManageGuildEvent: V
                } = (0, c.useManageResourcePermissions)(null != D ? D : t), F = V(M), H = (0, v.default)(M), w = (0, h.useIsChannelPublic)(null == D ? void 0 : D.id, M.id), {
                    withinStartWindow: B
                } = (0, p.getEventTimeData)(y), k = (0, u.useStateFromStores)([_.default], () => (null == D ? !void 0 : !D.isGuildVocal()) || _.default.can(m.Permissions.CONNECT, D), [D]), j = (0, s.useShowMemberVerificationGate)(b), Y = (0, C.default)(U, O);

                function K(e) {
                    e.stopPropagation(), (0, g.default)(O, U, b)
                }
                async function Z(e) {
                    e.stopPropagation(), await o.default.joinGuild(b), I.default.addConditionalChangeListener(() => {
                        let t = I.default.getGuild(b);
                        return null == t || (!P && K(e), z(e), !1)
                    })
                }

                function z(e) {
                    e.stopPropagation();
                    let t = f.default.getDefaultChannel(b);
                    (0, r.closeAllModals)(), (0, d.transitionToGuild)(b, null == t ? void 0 : t.id)
                }
                return {
                    onDeleteClick: F ? function(e) {
                        e.stopPropagation(), F && !P && (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
                            ...e,
                            header: R.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: R.default.Messages.DELETE,
                            cancelText: R.default.Messages.CANCEL,
                            onConfirm: () => N.default.deleteGuildEvent(O, b),
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: R.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
                            })
                        }))
                    } : void 0,
                    onContextMenu: function(e) {
                        e.stopPropagation(), null != t && (0, l.openContextMenuLazy)(e, async () => {
                            let {
                                default: e
                            } = await n.el("110374").then(n.bind(n, "110374"));
                            return n => (0, i.jsx)(e, {
                                guildEventId: O,
                                recurrenceId: U,
                                channel: D,
                                guild: t,
                                ...n
                            })
                        })
                    },
                    onJoinClick: k || j ? function(e) {
                        if (e.stopPropagation(), j) {
                            null == A || A(), (0, a.openMemberVerificationModal)(b);
                            return
                        }(null == D ? void 0 : D.isGuildStageVoice()) ? ((0, E.connectAndOpen)(D), null == A || A()) : (null == D ? void 0 : D.isGuildVoice()) && (N.default.joinVoiceEvent(D.guild_id, D.id), null == A || A())
                    } : void 0,
                    onRsvpClick: K,
                    onStartClick: F && B && !(null == Y ? void 0 : Y.is_canceled) ? function(e) {
                        e.stopPropagation(), (0, r.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                event: M,
                                onSuccess: A
                            })
                        })
                    } : void 0,
                    onInviteClick: function(e) {
                        if (e.stopPropagation(), null != t) {
                            if (!H || !w) {
                                let e = (0, L.SHARE_EVENT_DETAILS_LINK)({
                                    guildId: b,
                                    guildEventId: O
                                });
                                (0, T.copy)(e), S.default.track(m.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: b,
                                    guild_scheduled_event_id: O
                                });
                                return
                            }(0, r.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t,
                                    channel: D,
                                    guildScheduledEvent: M,
                                    source: m.InstantInviteSources.GUILD_EVENTS
                                })
                            })
                        }
                    },
                    onEndClick: F && x === G.GuildScheduledEventEntityTypes.EXTERNAL && P ? function(e) {
                        if (e.stopPropagation(), !F) return;
                        let t = () => {
                            N.default.endEvent(O, b), (0, r.closeAllModals)()
                        };
                        (0, r.openModal)(e => (0, i.jsx)(r.ConfirmModal, {
                            ...e,
                            header: R.default.Messages.END_EVENT,
                            confirmText: R.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: R.default.Messages.CANCEL,
                            onConfirm: t,
                            children: (0, i.jsx)(r.Text, {
                                variant: "text-md/normal",
                                children: R.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    } : void 0,
                    onJoinGuildClick: Z,
                    onGoToGuildClick: z
                }
            }