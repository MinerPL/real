            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("915639"),
                s = n("49111"),
                i = {
                    [s.RPCCommands.USER_SETTINGS_GET_LOCALE]: {
                        scope: s.OAuth2Scopes.IDENTIFY,
                        handler: () => ({
                            locale: a.default.locale
                        })
                    }
                }