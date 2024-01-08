            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("79112"),
                i = n("474571"),
                r = n("49111"),
                u = n("782340");

            function o() {
                return (0, a.jsx)(l.MenuItem, {
                    id: "voice-settings",
                    label: u.default.Messages.VOICE_SETTINGS,
                    action: () => s.default.open(r.UserSettingsSections.VOICE),
                    icon: i.default
                })
            }