            "use strict";
            l.r(t), l.d(t, {
                useBotDataAccess: function() {
                    return a
                }
            }), l("702976");
            var i = l("182333");

            function a(e) {
                let {
                    flags: t
                } = e, l = (0, i.usePrivilegedApplicationIntents)(t), a = null != l && ((null == l ? void 0 : l.messageContent) || (null == l ? void 0 : l.messageContentLimited)), n = null != l && ((null == l ? void 0 : l.guildPresences) || (null == l ? void 0 : l.guildPresencesLimited)), s = null != l && ((null == l ? void 0 : l.guildMembers) || (null == l ? void 0 : l.guildMembersLimited));
                return {
                    hasMessageContent: a,
                    hasGuildPresences: n,
                    hasGuildMembers: s,
                    hasIntents: a || n || s
                }
            }