            "use strict";
            n.r(t), n.d(t, {
                summarizeUsernamesParticipating: function() {
                    return c
                },
                getRemoveModeratorTooltipHint: function() {
                    return f
                },
                getStageChannelMetadata: function() {
                    return E
                }
            }), n("808653"), n("222007"), n("917351");
            var i = n("945956"),
                l = n("387111"),
                u = n("991170"),
                o = n("834052"),
                a = n("837979"),
                r = n("49111"),
                d = n("606762"),
                s = n("782340");

            function c(e, t, n, i) {
                let u = t[0],
                    o = l.default.getName(e, n, u),
                    a = null != i ? i : t.length;
                return 1 === a && null != u ? o : null == u ? s.default.Messages.SPEAKING_COUNT.format({
                    count: a
                }) : s.default.Messages.USER_SUMMARY_WITH_OTHERS.format({
                    name: o,
                    count: a - 1
                })
            }

            function f(e, t) {
                switch (e) {
                    case d.RowType.OWNER:
                        return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_OWNER;
                    case d.RowType.ADMINISTRATOR:
                        return s.default.Messages.CHANNEL_PERMISSIONS_ADD_MEMBERS_TOOLTIP_ADMINISTRATOR;
                    case d.RowType.MEMBER:
                    case d.RowType.ROLE:
                        return t ? s.default.Messages.CHANNEL_PERMISSIONS_CANNOT_REMOVE_PERMISSIONS : s.default.Messages.CHANNEL_PERMISSIONS_REMOVE_MODERATOR_TOOLTIP;
                    case d.RowType.EMPTY_STATE:
                }
                return null
            }

            function E(e) {
                let t = o.default.getStageInstanceByChannel(e.id);
                return {
                    channel_id: e.id,
                    guild_id: e.guild_id,
                    topic: null == t ? void 0 : t.topic,
                    media_session_id: i.default.getMediaSessionId(),
                    request_to_speak_state: u.default.canEveryoneRole(r.Permissions.REQUEST_TO_SPEAK, e) ? a.RequestToSpeakPermissionStates.EVERYONE : a.RequestToSpeakPermissionStates.NO_ONE,
                    stage_instance_id: null == t ? void 0 : t.id
                }
            }