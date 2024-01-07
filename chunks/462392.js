            "use strict";
            n.r(t), n.d(t, {
                getActionInfo: function() {
                    return p
                }
            });
            var r = n("679653"),
                o = n("42203"),
                i = n("27618"),
                u = n("697218"),
                a = n("593195"),
                l = n("635731"),
                d = n("491401"),
                s = n("381546"),
                T = n("143460"),
                E = n("903639"),
                A = n("782340");
            let _ = e => {
                    if (e === T.AutomodActionType.QUARANTINE_USER) return !1;
                    return !0
                },
                c = e => {
                    switch (e) {
                        case T.AutomodActionType.BLOCK_MESSAGE:
                        case T.AutomodActionType.FLAG_TO_CHANNEL:
                        case T.AutomodActionType.USER_COMMUNICATION_DISABLED:
                        case T.AutomodActionType.QUARANTINE_USER:
                            return !0;
                        default:
                            return !1
                    }
                },
                f = e => {
                    switch (e) {
                        case T.AutomodActionType.BLOCK_MESSAGE:
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_NAME;
                        case T.AutomodActionType.FLAG_TO_CHANNEL:
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_NAME;
                        case T.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER;
                        case T.AutomodActionType.QUARANTINE_USER:
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER
                    }
                },
                I = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : T.AutomodTriggerType.KEYWORD;
                    switch (e) {
                        case T.AutomodActionType.BLOCK_MESSAGE:
                            switch (t) {
                                case T.AutomodTriggerType.MENTION_SPAM:
                                    return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_MENTION_SPAM;
                                case T.AutomodTriggerType.ML_SPAM:
                                    return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION_ML_SPAM;
                                default:
                                    return A.default.Messages.GUILD_AUTOMOD_ACTIONS_BLOCK_MESSAGE_DESCRIPTION
                            }
                        case T.AutomodActionType.FLAG_TO_CHANNEL:
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DESCRIPTION;
                        case T.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_DISABLE_GUILD_COMMUNICATION_FOR_USER_DESCRIPTION;
                        case T.AutomodActionType.QUARANTINE_USER:
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_QUARANTINE_USER_DESCRIPTION
                    }
                },
                g = (e, t) => {
                    var n, a, l;
                    switch (e) {
                        case T.AutomodActionType.QUARANTINE_USER:
                        case T.AutomodActionType.BLOCK_MESSAGE:
                            return null;
                        case T.AutomodActionType.FLAG_TO_CHANNEL: {
                            let e = null == t ? void 0 : null === (n = t.metadata) || void 0 === n ? void 0 : n.channelId;
                            if (null == e) return null;
                            let a = o.default.getChannel(e);
                            if (null == a) return null;
                            let l = (0, r.computeChannelName)(a, u.default, i.default);
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_FLAG_TO_CHANNEL_DISPLAY_HELPER.format({
                                channelName: l
                            })
                        }
                        case T.AutomodActionType.USER_COMMUNICATION_DISABLED: {
                            let e = null !== (l = null == t ? void 0 : null === (a = t.metadata) || void 0 === a ? void 0 : a.durationSeconds) && void 0 !== l ? l : 0,
                                n = (0, E.getFriendlyDurationString)(e);
                            if (null == n) return null;
                            return A.default.Messages.GUILD_AUTOMOD_ACTIONS_USER_DISABLE_COMMUNICATION_DISPLAY_HELPER.format({
                                duration: n
                            })
                        }
                    }
                },
                S = e => {
                    switch (e) {
                        case T.AutomodActionType.BLOCK_MESSAGE:
                            return s.default;
                        case T.AutomodActionType.FLAG_TO_CHANNEL:
                            return a.default;
                        case T.AutomodActionType.USER_COMMUNICATION_DISABLED:
                            return d.default;
                        case T.AutomodActionType.QUARANTINE_USER:
                            return l.default
                    }
                };

            function p(e, t, n) {
                var r, o, i, u;
                return c(e) ? {
                    headerText: null !== (r = f(e)) && void 0 !== r ? r : "",
                    descriptionText: null !== (o = I(e, n)) && void 0 !== o ? o : "",
                    helperText: null !== (i = g(e, t)) && void 0 !== i ? i : null,
                    icon: null !== (u = S(e)) && void 0 !== u ? u : s.default,
                    isEditable: _(e)
                } : null
            }