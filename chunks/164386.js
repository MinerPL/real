            "use strict";
            n.r(t), n.d(t, {
                convertOAuth2Authorization: function() {
                    return i
                }
            });
            var s = n("316693");

            function i(e) {
                if (null == e.guilds) return e;
                return {
                    ...e,
                    guilds: e.guilds.map(e => ({
                        ...e,
                        permissions: s.default.deserialize(e.permissions)
                    }))
                }
            }