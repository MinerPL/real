            "use strict";
            n.r(t), n.d(t, {
                toggleRequestToSpeak: function() {
                    return I
                },
                inviteUserToStage: function() {
                    return N
                },
                audienceAckRequestToSpeak: function() {
                    return g
                },
                moveSelfToAudience: function() {
                    return m
                },
                setUserSuppress: function() {
                    return h
                },
                moveUserToAudience: function() {
                    return R
                },
                setEveryoneRolePermissionAllowed: function() {
                    return p
                },
                startStage: function() {
                    return M
                },
                editStage: function() {
                    return C
                },
                endStage: function() {
                    return D
                }
            });
            var l = n("627445"),
                u = n.n(l),
                a = n("316693"),
                d = n("872717"),
                i = n("450911");
            n("851387");
            var s = n("798609"),
                r = n("716241"),
                o = n("18494"),
                c = n("800762"),
                E = n("991170"),
                f = n("716214"),
                _ = n("230324"),
                S = n("738983"),
                T = n("808422"),
                v = n("49111");

            function I(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), t && (0, r.trackWithMetadata)(v.AnalyticEvents.REQUEST_TO_SPEAK_INITIATED, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(n),
                    body: {
                        request_to_speak_timestamp: t ? new Date().toISOString() : null,
                        channel_id: e.id
                    }
                })
            }

            function N(e, t) {
                let n = e.getGuildId();
                return u(null != n, "This channel cannot be guildless."), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(n, t),
                    body: {
                        suppress: !1,
                        request_to_speak_timestamp: new Date().toISOString(),
                        channel_id: e.id
                    }
                })
            }

            function g(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = null == e ? void 0 : e.getGuildId();
                u(null != l, "This channel cannot be guildless.");
                let a = c.default.getVoiceStateForChannel(e.id),
                    i = (0, T.getAudienceRequestToSpeakState)(a);
                return i === T.RequestToSpeakStates.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK && !t && (0, r.trackWithMetadata)(v.AnalyticEvents.PROMOTED_TO_SPEAKER, {
                    ...(0, _.getStageChannelMetadata)(e)
                }), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(l),
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

            function m(e) {
                let t = null == e ? void 0 : e.getGuildId();
                return u(null != t, "This channel cannot be guildless."), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(t),
                    body: {
                        suppress: !0,
                        channel_id: e.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function h(e, t, n) {
                let l = e.getGuildId();
                return u(null != l, "This channel cannot be guildless."), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(l, t),
                    body: {
                        suppress: n,
                        channel_id: e.id
                    }
                })
            }

            function R(e, t) {
                if (null == t || null == e) return;
                let n = t.getGuildId();
                return u(null != n, "This channel cannot be guildless."), h(t, e.id, !0), d.default.patch({
                    url: v.Endpoints.UPDATE_VOICE_STATE(n, e.id),
                    body: {
                        suppress: !0,
                        channel_id: t.id,
                        self_video: !1,
                        self_stream: !1
                    }
                })
            }

            function p(e, t, n) {
                let l = e.getGuildId();
                u(null != l, "Channel cannot be guildless");
                let d = e.permissionOverwrites[l],
                    r = {
                        id: l,
                        type: s.PermissionOverwriteType.ROLE,
                        allow: E.default.NONE,
                        deny: E.default.NONE,
                        ...d
                    };
                n ? (r.allow = a.default.add(r.allow, t), r.deny = a.default.remove(r.deny, t)) : (r.allow = a.default.remove(r.allow, t), r.deny = a.default.add(r.deny, t)), i.default.updatePermissionOverwrite(e.id, r)
            }
            async function M(e, t, n, l) {
                if ("" === t) return;
                let u = o.default.getVoiceChannelId() === e.id;
                !u && (0, f.connectToStage)(e);
                let a = await (0, S.startStageInstance)(e.id, t, n, l);
                return g(e, !1, !0), a
            }
            async function C(e, t, n) {
                if ("" === t) return;
                let l = await (0, S.updateStageInstance)(e.id, t, n);
                return l
            }
            async function D(e) {
                await (0, S.endStageInstance)(e.id)
            }