            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("414456"),
                s = n.n(l),
                i = n("627445"),
                r = n.n(i),
                u = n("446674"),
                o = n("77078"),
                d = n("398604"),
                c = n("331759"),
                f = n("305961"),
                h = n("957255"),
                p = n("49111"),
                m = n("782340"),
                E = n("134152");

            function C(e) {
                var t, l;
                let {
                    stream: i,
                    applicationId: C,
                    channel: g,
                    exitFullScreen: S,
                    appContext: _,
                    analyticsLocation: I,
                    className: T,
                    ...v
                } = e, x = null == g ? void 0 : g.getGuildId(), N = null == g ? void 0 : g.id, A = (0, u.useStateFromStores)([f.default], () => null != x ? f.default.getGuild(x) : null, [x]), M = (0, u.useStateFromStores)([d.default], () => d.default.getActiveEventByChannel(N), [N]);
                if (t = A, l = g, !(null != t && null != l && h.default.can(p.Permissions.CREATE_INSTANT_INVITE, l))) return null;
                let R = m.default.Messages.INSTANT_INVITE;
                return null != i ? R = m.default.Messages.INVITE_STREAM_HEADER : null != C && (R = m.default.Messages.EMBEDDED_ACTIVITIES_INVITE_TO_ACTIVITY), (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        color: E.buttonColor,
                        onClick: () => {
                            r(null != A, "guild cannot be null"), r(null != g, "channel cannot be null"), ! function(e) {
                                let {
                                    guild: t,
                                    channel: l,
                                    streamUserId: s,
                                    applicationId: i,
                                    appContext: r,
                                    exitFullScreen: u,
                                    analyticsLocation: d,
                                    guildScheduledEvent: c
                                } = e;
                                null == u || u(), (0, o.openModalLazy)(async () => {
                                    let {
                                        default: e
                                    } = await n.el("310688").then(n.bind(n, "310688"));
                                    return n => (0, a.jsx)(e, {
                                        ...n,
                                        guild: t,
                                        channel: l,
                                        streamUserId: s,
                                        applicationId: i,
                                        analyticsLocation: d,
                                        source: l.isGuildStageVoice() ? p.InstantInviteSources.STAGE_CHANNEL : p.InstantInviteSources.STREAM_INVITE,
                                        guildScheduledEvent: c
                                    })
                                }, {
                                    modalKey: "stream-invite-modal",
                                    contextKey: r === p.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
                                })
                            }({
                                guild: A,
                                channel: g,
                                streamUserId: null == i ? void 0 : i.ownerId,
                                applicationId: C,
                                appContext: _,
                                exitFullScreen: S,
                                analyticsLocation: I,
                                guildScheduledEvent: M
                            })
                        },
                        className: s(T, E.textButton),
                        ...v,
                        children: R
                    }), (0, a.jsx)(c.default, {
                        channel: g,
                        stream: i,
                        appContext: _,
                        className: s(T, E.iconButton),
                        exitFullScreen: S,
                        analyticsLocation: I,
                        guildScheduledEvent: M
                    })]
                })
            }