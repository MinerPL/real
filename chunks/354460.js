            "use strict";
            n.r(t), n.d(t, {
                getGuildFeatureFromUploadType: function() {
                    return l
                },
                shouldShowPremiumIconForGIFPickerOption: function() {
                    return a
                }
            });
            var i = n("49111"),
                r = n("75015");

            function l(e, t) {
                let {
                    isGIF: n
                } = t;
                if (e === r.UploadTypes.GUILD_BANNER) return n ? i.GuildFeatures.ANIMATED_BANNER : i.GuildFeatures.BANNER
            }

            function a(e) {
                return e === r.UploadTypes.AVATAR || e === r.UploadTypes.BANNER
            }