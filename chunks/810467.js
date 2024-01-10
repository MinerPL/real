            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return V
                }
            }), n("222007");
            var a, s, i = n("37983"),
                l = n("884691"),
                r = n("414456"),
                o = n.n(r),
                u = n("446674"),
                d = n("669491"),
                c = n("77078"),
                E = n("327037"),
                f = n("419830"),
                _ = n("374021"),
                h = n("398604"),
                C = n("395869"),
                T = n("824650"),
                I = n("1339"),
                S = n("593897"),
                N = n("534222"),
                A = n("841363"),
                p = n("822516"),
                m = n("393414"),
                g = n("716214"),
                R = n("488464"),
                O = n("998716"),
                L = n("834052"),
                v = n("160870"),
                M = n("506885"),
                P = n("981601"),
                D = n("957255"),
                y = n("697218"),
                x = n("945330"),
                b = n("272339"),
                U = n("89684"),
                G = n("718550"),
                j = n("228427"),
                k = n("290581"),
                w = n("49111"),
                F = n("745049"),
                B = n("782340"),
                H = n("832025");
            (s = a || (a = {}))[s.STAGE = 0] = "STAGE", s[s.EVENT_EXTERNAL = 1] = "EVENT_EXTERNAL", s[s.EVENT_VOICE = 2] = "EVENT_VOICE", s[s.STUDY_ROOM = 3] = "STUDY_ROOM";

            function V(e) {
                let {
                    guild: t,
                    isStudyRoomNotice: n = !1
                } = e, a = (0, S.useActiveEventOrStageInstanceChannel)(t.id), s = (0, N.useGuildActiveEvent)(t.id), r = (0, u.useStateFromStores)([L.default], () => L.default.getStageInstanceByChannel(null == a ? void 0 : a.id), [a]), {
                    isStageNoticeHidden: V,
                    isEventNoticeHidden: Y
                } = (0, u.useStateFromStoresObject)([T.default], () => ({
                    isStageNoticeHidden: T.default.isLiveChannelNoticeHidden({
                        stageId: null == r ? void 0 : r.id
                    }),
                    isEventNoticeHidden: T.default.isLiveChannelNoticeHidden({
                        eventId: null == s ? void 0 : s.id
                    })
                }), [r, s]), W = null == a ? void 0 : a.id, {
                    speakers: K,
                    listenerCount: z
                } = (0, u.useStateFromStoresObject)([R.default], () => {
                    let e = R.default.getMutableParticipants(W, O.StageChannelParticipantNamedIndex.SPEAKER),
                        t = null != W ? R.default.getParticipantCount(W, O.StageChannelParticipantNamedIndex.AUDIENCE) : 0;
                    return {
                        speakers: [...new Set(e.map(e => e.user))],
                        listenerCount: t
                    }
                }, [W]), q = (0, u.useStateFromStores)([D.default], () => D.default.can(w.Permissions.CONNECT, a)), Q = (0, v.default)(null == a ? void 0 : a.id), Z = null == s ? void 0 : s.creator_id, X = (0, u.useStateFromStores)([y.default], () => y.default.getUser(Z), [Z]);
                l.useEffect(() => {
                    null != Z && (0, E.getUser)(Z)
                }, [Z]);
                let {
                    noticeType: J,
                    title: $,
                    location: ee,
                    locationIcon: et,
                    canListenIn: en,
                    buttonText: ea,
                    users: es,
                    overflowUsers: ei,
                    onClose: el
                } = l.useMemo(() => (function(e) {
                    let {
                        guildEvent: t,
                        stageInstance: n,
                        activeChannel: a,
                        canConnect: s,
                        myRole: l,
                        eventCreator: r,
                        speakers: o,
                        listenerCount: u,
                        isEventNoticeHidden: d,
                        isStageNoticeHidden: E,
                        isStudyRoomNotice: _
                    } = e, T = null != n && null != a && !E, S = null != t ? (0, p.getNextRecurrenceIdInEvent)(t) : null;
                    if (_ && null != a) {
                        let e = (0, f.getChannelIconComponent)(a);
                        return {
                            noticeType: 3,
                            title: "\uD83D\uDCDA☕ ".concat(a.name),
                            location: B.default.Messages.HUB_STUDY_ROOM_VOICE_CHANNEL_TOOLTIP,
                            locationIcon: null != e ? (0, i.jsx)(e, {
                                width: 16,
                                height: 16,
                                className: H.locationIcon
                            }) : null,
                            canListenIn: s,
                            buttonText: B.default.Messages.HUB_STUDY_ROOM_NOTICE_VOICE_CTA,
                            users: [],
                            overflowUsers: null
                        }
                    }
                    if (null == t || d) {
                        if (T) {
                            let e = B.default.Messages.STAGE_CHANNEL_JOIN_BUTTON;
                            return (null == l ? void 0 : l.speaker) ? e = B.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != l && (e = B.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
                                noticeType: 0,
                                title: n.topic,
                                location: a.name,
                                locationIcon: (0, i.jsx)(j.default, {
                                    width: 16,
                                    height: 16,
                                    className: H.locationIcon
                                }),
                                canListenIn: s,
                                buttonText: e,
                                onClose: () => (0, C.hideLiveChannelNotice)({
                                    stageId: null == n ? void 0 : n.id
                                }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers: u < 1 ? null : (0, i.jsxs)("div", {
                                    className: H.pill,
                                    children: [(0, i.jsx)(b.default, {
                                        width: 12,
                                        height: 12,
                                        className: H.pillIcon
                                    }), (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-secondary",
                                        className: H.pillLabel,
                                        children: u
                                    })]
                                })
                            }
                        }
                    } else {
                        if (t.entity_type === F.GuildScheduledEventEntityTypes.STAGE_INSTANCE && T) {
                            let e = B.default.Messages.STAGE_CHANNEL_JOIN_BUTTON;
                            return (null == l ? void 0 : l.speaker) ? e = B.default.Messages.STAGE_CHANNEL_JOINED_SPEAKER_BUTTON : null != l && (e = B.default.Messages.STAGE_CHANNEL_JOINED_AUDIENCE_BUTTON), {
                                noticeType: 0,
                                title: n.topic,
                                location: a.name,
                                locationIcon: (0, i.jsx)(j.default, {
                                    width: 16,
                                    height: 16,
                                    className: H.locationIcon
                                }),
                                canListenIn: s,
                                buttonText: e,
                                onClose: () => (0, C.hideLiveChannelNotice)({
                                    stageId: null == n ? void 0 : n.id
                                }),
                                users: o.length > 5 ? o.slice(0, 5) : o,
                                overflowUsers: u < 1 ? null : (0, i.jsxs)("div", {
                                    className: H.pill,
                                    children: [(0, i.jsx)(b.default, {
                                        width: 12,
                                        height: 12,
                                        className: H.pillIcon
                                    }), (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-secondary",
                                        className: H.pillLabel,
                                        children: u
                                    })]
                                })
                            }
                        }
                        if (t.entity_type === F.GuildScheduledEventEntityTypes.EXTERNAL) {
                            let e = (0, A.getLocationFromEvent)(t);
                            if (null == e) return {
                                noticeType: null
                            };
                            let n = h.default.getUserCount(t.id, S);
                            return {
                                noticeType: 1,
                                title: t.name,
                                location: (0, I.guildEventDetailsParser)(e, !0),
                                locationIcon: (0, i.jsx)(G.default, {
                                    width: 16,
                                    height: 16,
                                    className: H.locationIcon
                                }),
                                canListenIn: !1,
                                buttonText: B.default.Messages.GUILD_EVENT_DETAILS_INFO_TAB_TITLE,
                                onClose: () => (0, C.hideLiveChannelNotice)({
                                    eventId: null == t ? void 0 : t.id
                                }),
                                users: null == r ? [] : [r],
                                overflowUsers: n < 1 ? null : (0, i.jsxs)("div", {
                                    className: H.pill,
                                    children: [(0, i.jsx)(k.default, {
                                        width: 12,
                                        height: 12,
                                        className: H.pillIcon
                                    }), (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-secondary",
                                        className: H.pillLabel,
                                        children: n
                                    })]
                                })
                            }
                        } else if (t.entity_type === F.GuildScheduledEventEntityTypes.VOICE && null != a) {
                            let e = (0, f.getChannelIconComponent)(a),
                                n = h.default.getUserCount(t.id, S);
                            return {
                                noticeType: 2,
                                title: t.name,
                                location: a.name,
                                locationIcon: null != e ? (0, i.jsx)(e, {
                                    width: 16,
                                    height: 16,
                                    className: H.locationIcon
                                }) : null,
                                canListenIn: s,
                                buttonText: B.default.Messages.GUILD_EVENT_JOIN,
                                onClose: () => (0, C.hideLiveChannelNotice)({
                                    eventId: null == t ? void 0 : t.id
                                }),
                                users: null == r ? [] : [r],
                                overflowUsers: n < 1 ? null : (0, i.jsxs)("div", {
                                    className: H.pill,
                                    children: [(0, i.jsx)(k.default, {
                                        width: 12,
                                        height: 12,
                                        className: H.pillIcon
                                    }), (0, i.jsx)(c.Text, {
                                        variant: "text-xs/medium",
                                        color: "header-secondary",
                                        className: H.pillLabel,
                                        children: n
                                    })]
                                })
                            }
                        }
                    }
                    return {
                        noticeType: null
                    }
                })({
                    guildEvent: s,
                    stageInstance: r,
                    activeChannel: a,
                    canConnect: q,
                    myRole: Q,
                    eventCreator: X,
                    speakers: K,
                    listenerCount: z,
                    isEventNoticeHidden: Y,
                    isStageNoticeHidden: V,
                    isStudyRoomNotice: n
                }), [s, r, a, q, Q, X, K, z, Y, V, n]);
                return null == J ? null : (0, i.jsxs)("div", {
                    className: H.container,
                    children: [null != el ? (0, i.jsx)(c.Clickable, {
                        onClick: el,
                        className: H.close,
                        "aria-label": B.default.Messages.DISMISS,
                        children: (0, i.jsx)(x.default, {
                            className: H.closeIcon
                        })
                    }) : null, (0, i.jsxs)("div", {
                        className: H.header,
                        children: [(0, i.jsx)(U.default, {
                            color: d.default.unsafe_rawColors.GREEN_230.css,
                            width: 16,
                            height: 16
                        }), (0, i.jsx)(c.Text, {
                            variant: "text-xs/semibold",
                            color: "text-positive",
                            children: B.default.Messages.LIVE
                        })]
                    }), (es.length > 0 || null != ei) && (0, i.jsxs)("div", {
                        className: H.participants,
                        children: [es.map(e => (0, i.jsx)(c.Popout, {
                            preload: () => (0, M.default)(e.id, e.getAvatarURL(t.id, 80), {
                                guildId: t.id
                            }),
                            renderPopout: t => (0, i.jsx)(P.default, {
                                ...t,
                                userId: e.id
                            }),
                            position: "right",
                            children: n => (0, i.jsx)(c.Avatar, {
                                ...n,
                                src: e.getAvatarURL(t.id, 24),
                                "aria-label": e.username,
                                size: c.AvatarSizes.SIZE_24,
                                className: H.avatar
                            })
                        }, e.id)), ei]
                    }), (0, i.jsx)(c.Text, {
                        variant: "text-md/medium",
                        color: "header-primary",
                        className: o(H.title, H.live),
                        children: $
                    }), (0, i.jsxs)("div", {
                        className: H.locationContainer,
                        children: [et, (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            className: H.location,
                            children: ee
                        })]
                    }), en || 1 === J ? (0, i.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        color: c.Button.Colors.GREEN,
                        onClick: () => {
                            if (en) null != a && null != a.getGuildId() && ((0, g.connectAndOpen)(a), (0, m.transitionToGuild)(a.getGuildId(), a.id));
                            else {
                                if (null == s) return;
                                (0, _.openGuildEventDetails)({
                                    eventId: s.id
                                })
                            }
                        },
                        className: H.button,
                        fullWidth: !0,
                        children: ea
                    }) : null]
                })
            }