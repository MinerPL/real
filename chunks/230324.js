            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return E
                },
                getStageChannelMetadata: function() {
                    return f
                }
            }), n("808653"), n("222007"), n("917351");
            var l = n("945956"),
                u = n("387111"),
                a = n("991170"),
                d = n("834052"),
                i = n("837979"),
                s = n("49111"),
                r = n("606762"),
                o = n("782340");

            function c(e, t, n, l) {
                let a = t[0],
                    d = u.default.getName(e, n, a),
                    i = null != l ? l : t.length;
                return 1 === i && null != a ? d : null == a ? o.default.Messages.SPEAKING_COUNT.format({
                    count: i
                }) : o.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: d,
                    count: i - 1
                })
            }

            function E(e, t) {
                switch (e) {
                    case r.RowType.OWNER:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case r.RowType.ADMINISTRATOR:
                        return o.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case r.RowType.MEMBER:
                    case r.RowType.ROLE:
                        return t ? o.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : o.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case r.RowType.EMPTY_STATE:
                }
                return null
            }

            function f(e) {
                let t = d.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: l.default.getMediaSessionId(),
                    request_to_speak_state: a.default.canEveryoneRole(s.Permissions.REQUEST_TO_SPEAK, e) ? i.RequestToSpeakPermissionStates.EVERYONE : i.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }