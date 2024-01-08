            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return r
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("644583"),
                l = s("398410"),
                i = s("571067");

            function r(e) {
                let {
                    guildId: t,
                    selectedChannelIds: s,
                    selectedRoleIds: r,
                    onChange: o,
                    placeholder: d,
                    disableEveryoneRole: u,
                    includeRoleRestrictedPrivateChannels: c = !1,
                    includeStageVoiceChannels: E = !1,
                    helperText: _,
                    className: T
                } = e, I = (0, l.useChannelRows)(t, s, c, E), S = (0, i.useRoleRows)(t, r, u);
                return (0, a.jsx)(n.default, {
                    channelRows: I,
                    roleRows: S,
                    guildId: t,
                    selectedChannelIds: s,
                    selectedRoleIds: r,
                    onChange: o,
                    placeholder: d,
                    helperText: _,
                    className: T
                })
            }