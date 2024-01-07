            "use strict";
            n("781738");
            var r = String.prototype.replace,
                o = /%20/g,
                a = {
                    RFC1738: "RFC1738",
                    RFC3986: "RFC3986"
                };
            e.exports = {
                default: a.RFC3986,
                formatters: {
                    RFC1738: function(e) {
                        return r.call(e, o, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: a.RFC1738,
                RFC3986: a.RFC3986
            }