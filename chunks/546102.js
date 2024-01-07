            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("446674"),
                l = n("77078"),
                r = n("393414"),
                o = n("305961"),
                u = n("554054"),
                d = n("831588"),
                c = n("315102"),
                E = n("549103"),
                f = n("50926"),
                _ = n("526253"),
                h = n("567054"),
                C = n("982527"),
                T = n("444752"),
                I = n("437942"),
                S = n("267235"),
                N = n("49111"),
                A = n("289382"),
                m = n("782340"),
                p = n("936791"),
                g = e => {
                    var t;
                    let {
                        guildId: n,
                        inviteCode: g
                    } = e, [R, O] = s.useState(A.WaveStates.INITIAL), L = (0, i.useStateFromStores)([_.default], () => _.default.get(n)), v = (0, i.useStateFromStores)([C.default], () => C.default.getRequest(n)), M = (0, i.useStateFromStores)([o.default], () => o.default.getGuild(n)), {
                        hasFetchedRequestToJoinGuilds: P,
                        guildPreviewDisabled: D
                    } = (0, i.useStateFromStoresObject)([C.default], () => ({
                        hasFetchedRequestToJoinGuilds: C.default.hasFetchedRequestToJoinGuilds,
                        guildPreviewDisabled: C.default.getJoinRequestGuild(n)
                    }));
                    s.useEffect(() => {
                        null != M && (0, r.transitionTo)(N.Routes.CHANNEL(n))
                    }, [M, n]), s.useEffect(() => {
                        !P && E.default.fetchRequestToJoinGuilds()
                    }, [P]);
                    let y = s.useCallback(e => {
                            O(t => Math.max(t, e))
                        }, []),
                        x = (e, t) => () => {
                            (0, l.openModal)(n => (0, a.jsx)(l.ConfirmModal, {
                                header: m.default.Messages.MEMBER_VERIFICATION_CONFIRM_LEAVE_TITLE,
                                cancelText: m.default.Messages.NEVERMIND,
                                onConfirm: t,
                                confirmText: m.default.Messages.YES_TEXT,
                                confirmButtonColor: l.Button.Colors.RED,
                                ...n,
                                children: (0, a.jsx)(l.Text, {
                                    variant: "text-sm/normal",
                                    color: "header-secondary",
                                    children: e
                                })
                            }))
                        },
                        b = async e => {
                            await f.default.submitVerificationForm(n, e)
                        }, U = () => {
                            E.default.resetGuildJoinRequest(n)
                        }, G = x(m.default.Messages.LEAVE_SERVER_BODY.format({
                            name: null == M ? void 0 : M.toString()
                        }), () => {
                            O(Math.max(R, A.WaveStates.FILLING)), E.default.removeGuildJoinRequest(n), (0, r.transitionTo)(N.Routes.ME)
                        }), j = (null == L ? void 0 : null === (t = L.guild) || void 0 === t ? void 0 : t.splash) != null ? c.default.getGuildSplashURL({
                            id: L.guild.id,
                            splash: L.guild.splash
                        }) : (0, d.getArtForPath)();
                    return (0, a.jsx)("div", {
                        className: p.page,
                        children: (0, a.jsxs)(u.default, {
                            embedded: !0,
                            splash: j,
                            waveState: R,
                            showLogo: !1,
                            updateWaveState: y,
                            children: [(0, a.jsx)("div", {
                                className: p.dragRegion
                            }), (0, a.jsx)("div", {
                                className: p.contentWrapper,
                                children: (() => {
                                    switch (null == v ? void 0 : v.applicationStatus) {
                                        case h.GuildJoinRequestApplicationStatuses.SUBMITTED:
                                            return (0, a.jsx)(I.default, {
                                                onCancel: x(m.default.Messages.MEMBER_VERIFICATION_CANCEL_PENDING_APPLICATION_MODAL_TITLE, U),
                                                onLeave: G,
                                                guild: D
                                            });
                                        case h.GuildJoinRequestApplicationStatuses.REJECTED:
                                            return (0, a.jsx)(T.default, {
                                                reapplyText: m.default.Messages.MEMBER_VERIFICATION_APPLICATION_REAPPLY,
                                                onReapply: U,
                                                confirmText: m.default.Messages.LEAVE_SERVER,
                                                onConfirm: G,
                                                rejectionReason: null == v ? void 0 : v.rejectionReason,
                                                guild: D
                                            });
                                        default:
                                            return (0, a.jsx)(S.default, {
                                                guildId: n,
                                                inviteCode: g,
                                                onComplete: b
                                            })
                                    }
                                })()
                            })]
                        })
                    })
                }