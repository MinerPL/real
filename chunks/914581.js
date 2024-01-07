            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return u
                }
            });
            var a = s("446674"),
                n = s("913144");
            let l = null,
                i = 0,
                r = null,
                o = null;
            class d extends a.default.Store {
                showNotice() {
                    return l !== r
                }
                get vanityURLCode() {
                    return l
                }
                get originalVanityURLCode() {
                    return r
                }
                get vanityURLUses() {
                    return i
                }
                hasError() {
                    return null != o
                }
                get errorDetails() {
                    return o
                }
            }
            d.displayName = "GuildSettingsVanityURLStore";
            var u = new d(n.default, {
                GUILD_SETTINGS_SET_VANITY_URL: function(e) {
                    var t, s;
                    r = l = null !== (t = e.code) && void 0 !== t ? t : "", i = e.uses, o = null !== (s = e.error) && void 0 !== s ? s : null
                },
                GUILD_SETTINGS_VANITY_URL_CLOSE: function() {
                    r = l = null, i = 0, o = null
                },
                GUILD_SETTINGS_VANITY_URL_RESET: function() {
                    l = r, i = 0
                },
                GUILD_SETTINGS_VANITY_URL_SET: function(e) {
                    l = e.code, i = 0
                },
                GUILD_SETTINGS_VANITY_URL_ERROR: function(e) {
                    o = e.error
                }
            })