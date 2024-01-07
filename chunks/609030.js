            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return r
                }
            });
            var n = l("376556"),
                a = l("575365"),
                s = l("49111"),
                i = l("782340");

            function r(e) {
                var t;
                let l = null !== (t = (0, a.default)(e)) && void 0 !== t ? t : "";
                switch (l) {
                    case s.ActivityGamePlatforms.PS4:
                    case s.ActivityGamePlatforms.PS5:
                        return i.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                            platform: l.toUpperCase()
                        });
                    case s.ActivityGamePlatforms.XBOX:
                    case s.ActivityGamePlatforms.SAMSUNG:
                        return i.default.Messages.USER_ACTIVITY_HEADER_PLAYING_ON_PLATFORM.format({
                            platform: n.default.get(l).name
                        });
                    default:
                        return i.default.Messages.USER_ACTIVITY_HEADER_PLAYING
                }
            }