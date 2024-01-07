            "use strict";
            var n, a, r, i, u, o;
            l.r(t), l.d(t, {
                HeaderRecord: function() {
                    return s
                },
                FindResultDirections: function() {
                    return n
                },
                AutocompleterResultTypes: function() {
                    return a
                },
                AutocompleterQuerySymbols: function() {
                    return r
                }
            });
            class s {
                constructor(e) {
                    this.id = e, this.text = e
                }
            }(i = n || (n = {})).UP = "UP", i.DOWN = "DOWN", (u = a || (a = {})).GUILD = "GUILD", u.TEXT_CHANNEL = "TEXT_CHANNEL", u.GROUP_DM = "GROUP_DM", u.VOICE_CHANNEL = "VOICE_CHANNEL", u.USER = "USER", u.HEADER = "HEADER", u.APPLICATION = "APPLICATION", u.SKU = "SKU", u.LINK = "LINK", (o = r || (r = {})).USER = "@", o.TEXT_CHANNEL = "#", o.VOICE_CHANNEL = "!", o.GUILD = "*", o.APPLICATION = "$"