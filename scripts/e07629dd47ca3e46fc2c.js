(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60291"], {
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
                    return h
                },
                moveSelfToAudience: function() {
                    return A
                },
                setUserSuppress: function() {
                    return N
                },
                moveUserToAudience: function() {
                    return R
                },
                setEveryoneRolePermissionAllowed: function() {
                    return O
                },
                startStage: function() {
                    return M
                },
                editStage: function() {
                    return m
                },
                endStage: function() {
                    return C
                }
            });
            var a = n("627445"),
                s = n.n(a),
                l = n("316693"),
                i = n("872717"),
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
                }), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = e.getGuildId();
                return s(null != n, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function h(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    a = null == e ? void 0 : e.getGuildId();
                s(null != a, "This channel cannot be guildless.");
                let l = c.default.getVoiceStateForChannel(e.id),
                    u = (0, S.getAudienceRequestToSpeakState)(l);
                return u === S.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, d.trackWithMetadata)(I.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, f.getStageChannelMetadata)(e)
                }), i.default.patch({
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

            function A(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return s(null != t, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function N(e, t, n) {
                let a = e.getGuildId();
                return s(null != a, "This channel cannot be guildless."), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(a, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function R(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return s(null != n, "This channel cannot be guildless."), N(t, e.id, !0), i.default.patch({
                    url: I.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function O(e, t, n) {
                let a = e.getGuildId();
                s(null != a, "Channel cannot be guildless");
                let i = e.permissionOverwrites[a],
                    d = {
                        id: a,
                        type: r.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...i
                    };
                n ? (d.allow = l.default.add(d.allow, t), d.deny = l.default.remove(d.deny, t)) : (d.allow = l.default.remove(d.allow, t), d.deny = l.default.add(d.deny, t)), u.default.updatePermissionOverwrite(e.id, d)
            }
            async function M(e, t, n, a) {
                if ("" === t) return;
                let s = o.default.getVoiceChannelId() === e.id;
                !s && (0, _.connectToStage)(e);
                let l = await (0, T.startStageInstance)(e.id, t, n, a);
                return h(e, !1, !0), l
            }
            async function m(e, t, n) {
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
                l = n("991170"),
                i = n("834052"),
                u = n("837979"),
                r = n("49111"),
                d = n("606762"),
                o = n("782340");

            function c(e, t, n, a) {
                let l = t[0],
                    i = s.default.getName(e, n, l),
                    u = null != a ? a : t.length;
                return 1 === u && null != l ? i : null == l ? o.default.Messages.SPEAKING_COUNT.format({
                    count: u
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: i,
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
                let t = i.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: a.default.getMediaSessionId(),
                    request_to_speak_state: l.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? u.RequestToSpeakPermissionStates.EVERYONE : u.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }
        },
        738983: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStageInstance: function() {
                    return l
                },
                updateStageInstance: function() {
                    return i
                },
                endStageInstance: function() {
                    return u
                }
            });
            var a = n("872717"),
                s = n("49111");
            async function l(e, t, n, l, i) {
                let u = await a.default.post({
                    url: s.Endpoints.STAGE_INSTANCES,
                    body: {
                        channel_id: e,
                        topic: t,
                        privacy_level: n,
                        guild_scheduled_event_id: i,
                        send_start_notification: l
                    }
                });
                return u.body
            }
            async function i(e, t, n) {
                let l = await a.default.patch({
                    url: s.Endpoints.STAGE_INSTANCE(e),
                    body: {
                        topic: t,
                        privacy_level: n
                    }
                });
                return l.body
            }

            function u(e) {
                return a.default.delete(s.Endpoints.STAGE_INSTANCE(e))
            }
        },
        281645: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("77078"),
                l = n("987317"),
                i = n("476765"),
                u = n("674083"),
                r = n("244480"),
                d = n("119184"),
                o = n("782340"),
                c = n("225946");

            function E(e) {
                let {
                    channel: t,
                    transitionState: n,
                    onClose: E
                } = e, _ = (0, i.useUID)();

                function f() {
                    l.default.disconnect(), E()
                }
                return (0, a.jsxs)(s.ModalRoot, {
                    transitionState: n,
                    "aria-labelledby": _,
                    children: [(0, a.jsxs)(s.ModalContent, {
                        className: c.content,
                        children: [(0, a.jsx)(d.default, {
                            children: (0, a.jsx)("div", {
                                className: c.iconBackground,
                                children: (0, a.jsx)(u.default, {
                                    width: 40,
                                    height: 40,
                                    className: c.headerIcon
                                })
                            })
                        }), (0, a.jsx)(s.Heading, {
                            id: _,
                            variant: "heading-xl/semibold",
                            color: "header-primary",
                            className: c.title,
                            children: o.default.Messages.EXPLICIT_END_STAGE_TITLE
                        }), (0, a.jsx)(s.Text, {
                            variant: "text-md/normal",
                            color: "header-secondary",
                            className: c.subtitle,
                            children: o.default.Messages.EXPLICIT_END_STAGE_SUBTITLE
                        })]
                    }), (0, a.jsxs)(s.ModalFooter, {
                        children: [(0, a.jsx)(s.Button, {
                            color: s.Button.Colors.RED,
                            onClick: function() {
                                (0, r.endStage)(t), f()
                            },
                            children: o.default.Messages.EXPLICIT_END_STAGE_CONFIRM
                        }), (0, a.jsx)(s.Button, {
                            color: s.Button.Colors.PRIMARY,
                            className: c.cancelButton,
                            onClick: f,
                            children: o.default.Messages.EXPLICIT_END_STAGE_CANCEL
                        })]
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
                l = n.n(s),
                i = n("782340"),
                u = n("53061"),
                r = n("284434"),
                d = n("315956");

            function o(e) {
                let {
                    className: t,
                    children: n
                } = e;
                return (0, a.jsxs)("div", {
                    className: l(u.container, t),
                    children: [(0, a.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: d,
                        className: l(u.sparkleIcon, u.sparkleBottom)
                    }), n, (0, a.jsx)("img", {
                        alt: i.default.Messages.MEMBER_VERIFICATION_VERIFICATION_ICON,
                        src: r,
                        className: l(u.sparkleIcon, u.sparkleTop)
                    })]
                })
            }
        }
    }
]);