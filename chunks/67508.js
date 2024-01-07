            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return l
                }
            });
            var a = s("468200"),
                n = s("782340");

            function l(e) {
                switch (e) {
                    case a.SettingsOverrideReasonKeys.REDUCED_MOTION:
                        return n.default.Messages.ACCESSIBILITY_REDUCED_MOTION_SETTINGS_OVERRIDE.format();
                    case a.SettingsOverrideReasonKeys.REDUCED_MOTION_STICKERS:
                        return n.default.Messages.STICKERS_AUTO_PLAY_HELP_DISABLED;
                    default:
                        return
                }
            }