            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return x
                }
            });
            var a = n("37983"),
                l = n("884691"),
                s = n("414456"),
                i = n.n(s),
                r = n("65597"),
                u = n("77078"),
                o = n("987317"),
                d = n("271938"),
                c = n("957255"),
                f = n("945956"),
                h = n("697218"),
                p = n("599110"),
                m = n("315102"),
                E = n("233965"),
                C = n("699209"),
                S = n("925749"),
                g = n("342845"),
                _ = n("661743"),
                I = n("49111"),
                T = n("782340"),
                v = n("730039"),
                x = e => {
                    let {
                        hangStatusActivity: t,
                        userId: s,
                        channel: x,
                        previewIsOpen: N
                    } = e, {
                        enableHangStatus: A
                    } = C.HangStatusExperiment.useExperiment({
                        guildId: x.guild_id,
                        location: "HangStatusPopout"
                    }), M = (0, r.default)([d.default], () => d.default.getId()), R = (0, r.default)([h.default], () => h.default.getUser(s)), j = (0, r.default)([f.default], () => f.default.getChannelId() === x.id), L = (0, r.default)([c.default], () => c.default.can(I.Permissions.CONNECT, x));
                    return (l.useEffect(() => {
                        A && null != t && N && null != R && M !== s && p.default.track(I.AnalyticEvents.VIEW_HANG_STATUS, {
                            source: "HangStatusPopout",
                            guild_id: x.guild_id,
                            channel_id: x.id
                        })
                    }, [A, t, N, R, M, s, x]), A && null != R) ? M === s ? (0, a.jsx)("div", {
                        className: i(v.popoutWrapper, {
                            [v.mounted]: N
                        }),
                        children: (0, a.jsx)(_.HangStatusPopout, {
                            currentStatus: t
                        })
                    }) : null == t ? null : (0, a.jsx)("div", {
                        className: i(v.popoutWrapper, {
                            [v.mounted]: N
                        }),
                        children: (0, a.jsxs)("div", {
                            className: v.popout,
                            children: [(0, a.jsxs)("div", {
                                className: v.contentContainer,
                                children: [(0, a.jsxs)("div", {
                                    className: v.statusGroup,
                                    children: [(0, a.jsx)(u.Text, {
                                        variant: "text-xs/medium",
                                        color: "text-muted",
                                        children: T.default.Messages.STATUS_LEAD_IN_JUST
                                    }), (0, a.jsx)(u.Text, {
                                        variant: "text-sm/semibold",
                                        color: "text-normal",
                                        children: (0, S.getHangStatusText)(t)
                                    })]
                                }), (0, a.jsxs)("div", {
                                    className: v.iconGroup,
                                    children: [(0, a.jsx)(g.default, {
                                        className: v.statusIcon,
                                        hangStatusActivity: t
                                    }), (0, a.jsxs)("div", {
                                        className: v.avatarWrapper,
                                        children: [(0, a.jsx)(u.Avatar, {
                                            className: v.avatar,
                                            size: u.AvatarSizes.SIZE_40,
                                            src: (0, m.getUserAvatarURL)(R),
                                            "aria-hidden": !0
                                        }), (0, a.jsx)("div", {
                                            className: v.outline
                                        })]
                                    })]
                                })]
                            }), !j && L ? (0, a.jsx)(u.Button, {
                                className: v.cta,
                                size: u.Button.Sizes.SMALL,
                                onClick: () => {
                                    !j && L && (o.default.selectVoiceChannel(x.id), p.default.track(I.AnalyticEvents.HANG_STATUS_CTA_CLICKED, {
                                        source: "HangStatusPopout",
                                        guild_id: x.guild_id,
                                        channel_id: x.id
                                    }))
                                },
                                children: T.default.Messages.CUSTOM_HANG_STATUS_CTA
                            }) : null, j ? (0, a.jsx)(u.Button, {
                                className: v.cta,
                                size: u.Button.Sizes.SMALL,
                                onClick: () => {
                                    let e = t.state;
                                    e === I.HangStatusTypes.CUSTOM ? (0, u.openModalLazy)(async () => {
                                        let {
                                            default: e
                                        } = await n.el("579371").then(n.bind(n, "579371"));
                                        return n => (0, a.jsx)(e, {
                                            ...n,
                                            startingText: t.details,
                                            startingEmoji: t.emoji
                                        })
                                    }) : (0, E.updateHangStatus)(e, !0), p.default.track(I.AnalyticEvents.SWIPE_HANG_STATUS, {
                                        guild_id: x.guild_id,
                                        channel_id: x.id,
                                        media_session_id: f.default.getMediaSessionId()
                                    })
                                },
                                children: T.default.Messages.CUSTOM_HANGS_STATUS_COPY_CTA
                            }) : null]
                        })
                    }) : null
                }