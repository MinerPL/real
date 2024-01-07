            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return i
                }
            });
            var l = s("37983");
            s("884691");
            var n = s("775560"),
                a = s("866380"),
                o = s("348224"),
                u = s("782340");
            let r = [o.GuildHomeRemoveChannelReasons.OTHER];

            function i(e) {
                let {
                    transitionState: t,
                    onClose: s,
                    channelId: i,
                    onSubmit: d
                } = e, c = (0, n.useLazyValue)(o.getGuildHomeRemoveChannelReasons);
                return (0, l.jsx)(a.default, {
                    header: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_TITLE,
                    body: u.default.Messages.GUILD_HOME_CHANNEL_REMOVE_FEEDBACK_SUBTITLE,
                    problems: c,
                    feedbackProblems: r,
                    onSubmit: function(e) {
                        let {
                            problem: t,
                            feedback: s
                        } = e, l = null == t;
                        !l && ((0, o.trackGuildHomeRemoveChannelFeedback)(i, t, s, l), d())
                    },
                    onClose: s,
                    transitionState: t,
                    otherKey: o.GuildHomeRemoveChannelReasons.OTHER,
                    canDismissForever: !1,
                    showHelpdeskLink: !1
                })
            }