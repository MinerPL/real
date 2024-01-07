            "use strict";
            l.r(t), l.d(t, {
                guildEventDetailsParser: function() {
                    return i
                }
            });
            var n = l("367376"),
                a = l("180161"),
                s = l("47677");
            let r = {
                    ...n.default.guildEventRules.link,
                    react: (0, s.default)({
                        enableBuildOverrides: !1,
                        mustConfirmExternalLink: !0
                    }).react
                },
                u = {
                    ...n.default.guildEventRules.channelMention,
                    react: (0, a.default)({
                        enableBuildOverrides: !1,
                        shouldCloseDefaultModals: !0,
                        shouldStopPropagation: !0
                    }).react
                },
                i = n.default.reactParserFor({
                    ...n.default.guildEventRules,
                    link: r,
                    channelMention: u
                })