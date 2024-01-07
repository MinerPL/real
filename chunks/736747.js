            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("77078"),
                s = n("79112"),
                i = n("474571"),
                r = n("49111"),
                o = n("782340");

            function u() {
                return (0, a.jsx)(l.MenuItem, {
                    id: "voice-settings",
                    label: o.default.Messages.VOICE_SETTINGS,
                    action: () => s.default.open(r.UserSettingsSections.VOICE),
                    icon: i.default
                })
            }