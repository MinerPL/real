            "use strict";
            n.r(t), n.d(t, {
                getToken: function() {
                    return r
                },
                isAuthenticated: function() {
                    return s
                },
                getArtForPath: function() {
                    return a
                }
            });
            var i = n("171718");

            function r() {
                return i.default.getToken()
            }

            function s() {
                return null != r()
            }
            let a = e => null != e && /^\/developers/.test(e) ? n("501617") : null