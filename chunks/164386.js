            "use strict";
            n.r(t), n.d(t, {
                convertOAuth2Authorization: function() {
                    return a
                }
            });
            var i = n("316693");

            function a(e) {
                if (null == e.guilds) return e;
                return {
                    ...e,
                    guilds: e.guilds.map(e => ({
                        ...e,
                        permissions: i.default.deserialize(e.permissions)
                    }))
                }
            }