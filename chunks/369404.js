            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var i = n("37983");
            n("884691");
            var r = n("446674"),
                u = n("77078"),
                l = n("272030"),
                o = n("851387"),
                a = n("233322"),
                s = n("157186"),
                d = n("817963"),
                c = n("393414"),
                E = n("716214"),
                f = n("923959"),
                I = n("305961"),
                _ = n("957255"),
                T = n("599110"),
                S = n("306160"),
                N = n("322224"),
                v = n("152475"),
                C = n("397680"),
                G = n("613767"),
                L = n("822516"),
                h = n("669195"),
                D = n("936965"),
                g = n("745049"),
                p = n("49111"),
                M = n("782340");

            function R(e) {
                let {
                    guild: t,
                    channel: R,
                    guildScheduledEvent: P,
                    isActive: A,
                    recurrenceId: m,
                    onActionTaken: U
                } = e, {
                    scheduled_start_time: y,
                    id: O,
                    entity_type: V,
                    guild_id: x
                } = P, {
                    canManageGuildEvent: w
                } = (0, d.useManageResourcePermissions)(null != R ? R : t), H = w(P), b = (0, v.default)(P), B = (0, G.useIsChannelPublic)(null == R ? void 0 : R.id, P.id), {
                    withinStartWindow: Y
                } = (0, L.getEventTimeData)(y), F = (0, r.useStateFromStores)([_.default], () => (null == R ? !void 0 : !R.isGuildVocal()) || _.default.can(p.Permissions.CONNECT, R), [R]), j = (0, s.useShowMemberVerificationGate)(x), k = (0, C.default)(m, O);

                function Z(e) {
                    e.stopPropagation(), (0, D.default)(O, m, x)
                }
                async function z(e) {
                    e.stopPropagation(), await o.default.joinGuild(x), I.default.addConditionalChangeListener(() => {
                        let t = I.default.getGuild(x);
                        return null == t || (!A && Z(e), X(e), !1)
                    })
                }

                function X(e) {
                    e.stopPropagation();
                    let t = f.default.getDefaultChannel(x);
                    (0, u.closeAllModals)(), (0, c.transitionToGuild)(x, null == t ? void 0 : t.id)
                }
                return {
                    onDeleteClick: H ? function(e) {
                        e.stopPropagation(), H && !A && (0, u.openModal)(e => (0, i.jsx)(u.ConfirmModal, {
                            ...e,
                            header: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_HEADER,
                            confirmText: M.default.Messages.DELETE,
                            cancelText: M.default.Messages.CANCEL,
                            onConfirm: () => N.default.deleteGuildEvent(O, x),
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: M.default.Messages.GUILD_EVENT_DELETE_CONFIRM_BODY
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
                                recurrenceId: m,
                                channel: R,
                                guild: t,
                                ...n
                            })
                        })
                    },
                    onJoinClick: F || j ? function(e) {
                        if (e.stopPropagation(), j) {
                            null == U || U(), (0, a.openMemberVerificationModal)(x);
                            return
                        }(null == R ? void 0 : R.isGuildStageVoice()) ? ((0, E.connectAndOpen)(R), null == U || U()) : (null == R ? void 0 : R.isGuildVoice()) && (N.default.joinVoiceEvent(R.guild_id, R.id), null == U || U())
                    } : void 0,
                    onRsvpClick: Z,
                    onStartClick: H && Y && !(null == k ? void 0 : k.is_canceled) ? function(e) {
                        e.stopPropagation(), (0, u.openModalLazy)(async () => {
                            let {
                                default: e
                            } = await n.el("298843").then(n.bind(n, "298843"));
                            return t => (0, i.jsx)(e, {
                                ...t,
                                event: P,
                                onSuccess: U
                            })
                        })
                    } : void 0,
                    onInviteClick: function(e) {
                        if (e.stopPropagation(), null != t) {
                            if (!b || !B) {
                                let e = (0, h.SHARE_EVENT_DETAILS_LINK)({
                                    guildId: x,
                                    guildEventId: O
                                });
                                (0, S.copy)(e), T.default.track(p.AnalyticEvents.GUILD_SCHEDULED_EVENT_LINK_COPIED, {
                                    guild_id: x,
                                    guild_scheduled_event_id: O
                                });
                                return
                            }(0, u.openModalLazy)(async () => {
                                let {
                                    default: e
                                } = await n.el("310688").then(n.bind(n, "310688"));
                                return n => (0, i.jsx)(e, {
                                    ...n,
                                    guild: t,
                                    channel: R,
                                    guildScheduledEvent: P,
                                    source: p.InstantInviteSources.GUILD_EVENTS
                                })
                            })
                        }
                    },
                    onEndClick: H && V === g.GuildScheduledEventEntityTypes.EXTERNAL && A ? function(e) {
                        if (e.stopPropagation(), !H) return;
                        let t = () => {
                            N.default.endEvent(O, x), (0, u.closeAllModals)()
                        };
                        (0, u.openModal)(e => (0, i.jsx)(u.ConfirmModal, {
                            ...e,
                            header: M.default.Messages.END_EVENT,
                            confirmText: M.default.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                            cancelText: M.default.Messages.CANCEL,
                            onConfirm: t,
                            children: (0, i.jsx)(u.Text, {
                                variant: "text-md/normal",
                                children: M.default.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE
                            })
                        }))
                    } : void 0,
                    onJoinGuildClick: z,
                    onGoToGuildClick: X
                }
            }