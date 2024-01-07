            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var i = n("798609");

            function a(e) {
                switch (e) {
                    case "android":
                        return i.EmbeddedActivitySupportedPlatforms.ANDROID;
                    case "ios":
                        return i.EmbeddedActivitySupportedPlatforms.IOS;
                    default:
                        return i.EmbeddedActivitySupportedPlatforms.WEB
                }
            }