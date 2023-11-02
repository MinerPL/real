(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77118"], {
        284434: function(e, t, n) {
            "use strict";
            e.exports = n.p + "51063f34b3960c1d5da8.svg"
        },
        315956: function(e, t, n) {
            "use strict";
            e.exports = n.p + "f92a8b5812e2da52a179.svg"
        },
        244480: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return p
                },
                inviteUserToStage: function() {
                    return g
                },
                audienceAckRequestToSpeak: function() {
                    return N
                },
                moveSelfToAudience: function() {
                    return h
                },
                setUserSuppress: function() {
                    return A
                },
                moveUserToAudience: function() {
                    return O
                },
                setEveryoneRolePermissionAllowed: function() {
                    return R
                },
                startStage: function() {
                    return m
                },
                editStage: function() {
                    return M
                },
                endStage: function() {
                    return C
                }
            });
            var a = n("627445"),
                s = n.n(a),
                i = n("316693"),
                l = n("872717"),
                u = n("450911");
            n("851387");
            var r = n("798609"),
                d = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                _ = n("716214"),
                f = n("230324"),
                T = n("738983"),
                S = n("808422"),
                I = n("49111");

            function p(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), t && (0, d.trackWithMetadata)(I.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), l.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), l.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null == e ? void 0 : e.getGuildId();
                s(null != a, "This channel cannot be guildless.");
                let i = c.default.getVoiceStateForChannel(e.id),
                    u = (0, S.getAudienceRequestToSpeakState)(i);
                return u === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(I.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), l.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(a),
                    body: {
                        suppress: t,
                        request_to_speak_timestamp: null,
                        channel_id: e.id,
                        ...n ? {
                            silent: n
                        } : {}
                    }
                })
            }

            function h(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return s(null != t, "This channel cannot be guildless."), l.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function A(e, t, n) {
                let a = e.getGuildId();
                return s(null != a, "This channel cannot be guildless."), l.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(a, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function O(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return s(null != n, "This channel cannot be guildless."), A(t, e.id, !0), l.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function R(e, t, n) {
                let a = e.getGuildId();
                s(null != a, "Channel cannot be guildless");
                let l = e.permissionOverwrites[a],
                    d = {
                        id: a,
                        type: r.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...l
                    };
                n ? (d.allow = i.default.add(d.allow, t), d.deny = i.default.remove(d.deny, t)) : (d.allow = i.default.remove(d.allow, t), d.deny = i.default.add(d.deny, t)), u.default.updatePermissionOverwrite(e.id, d)
            }
            async function m(e, t, n, a) {
                if ("" === t) return;
                let s = o.default.getVoiceChannelId() === e.id;
                !s && (0, _.connectToStage)(e);
                let i = await (0, T.startStageInstance)(e.id, t, n, a);
                return N(e, !1, !0), i
            }
            async function M(e, t, n) {
                if ("" === t) return;
                let a = await (0, T.updateStageInstance)(e.id, t, n);
                return a
            }
            async function C(e) {
                await (0, T.endStageInstance)(e.id)
            }
        },
        230324: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return _
                }
            }), n("917351");
            var a = n("945956"),
                s = n("387111"),
                i = n("991170"),
                l = n("834052"),
                u = n("837979"),
                r = n("49111"),
                d = n("606762"),
                o = n("782340");

            function c(e, t, n, a) {
                let i = t[0],
                    l = s.default.getName(e, n, i),
                    u = null != a ? a : t.length;
                return 1 === u && null != i ? l : null == i ? o.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: l,
                    count: u - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case d.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case d.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case d.RowType.MEMBER:
                    case d.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case d.RowType.EMPTY_STATE:
                }
                return null
            }

            function _(e) {
                let t = l.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: a.default.getMediaSessionId(),
                    request_to_speak_state: i.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return i
                },
                updateStageInstance: function() {
                    return l
                },
                endStageInstance: function() {
                    return u
                }
            });
            var a = n("872717"),
                s = n("49111");
            async function i(e, t, n, i, l) {
                let u = await a.default.post({
                    url: s.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: l,
                        send_start_notification: i
                    }
                });
                return u.body
            }
            async function l(e, t, n) {
                let i = await a.default.patch({
                    url: s.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return i.body
            }

            function u(e) {
                return a.default.delete(s.Endpoints.STAGE_INSTANCE(e))
            }
        },
        312953: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                i = n("987317"),
                l = n("476765"),
                u = n("674083"),
                r = n("244480"),
                d = n("119184"),
                o = n("782340"),
                c = n("421086"),
                E = e => {
                    let {
                        channel: t,
                        ...n
                    } = e, E = (0, l.useUID)();
                    return (0, a.jsxs)(s.ConfirmModal, {
                        confirmText: o.default.Messages.END_STAGE,
                        cancelText: o.default.Messages.CANCEL,
                        onConfirm: () => {
                            (0, r.endStage)(t), i.default.disconnect()
                        },
                        confirmButtonColor: s.Button.Colors.RED,
                        bodyClassName: c.body,
                        ...n,
                        children: [(0, a.jsx)(d.default, {
                            className: c.headerIconContainer,
                            children: (0, a.jsx)("div", {
                                className: c.iconBackground,
                                children: (0, a.jsx)(u.default, {
                                    width: 40,
                                    height: 40,
                                    className: c.headerIcon
                                })
                            })
                        }), (0, a.jsx)(s.Heading, {
                            id: E,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: c.title,
                            children: o.default.Messages.END_EVENT_STAGE_CONFIRMATION_TITLE
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: c.subtitle,
                            children: o.default.Messages.END_EVENT_STAGE_CONFIRMATION_SUBTITLE
                        })]
                    })
                }
        },
        119184: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("414456"),
                i = n.n(s),
                l = n("782340"),
                u = n("53061"),
                r = n("284434"),
                d = n("315956");

            function o(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: i(u.container, t),
                    children: [(0, a.jsx)("img", {
                        alt: l.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d,
                        className: i(u.sparkleIcon, u.sparkleBottom)
                    }), n, (0, a.jsx)("img", {
                        alt: l.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: r,
                        className: i(u.sparkleIcon, u.sparkleTop)
                    })]
                })
            }
        }
    }
]);