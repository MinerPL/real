            "use strict";
            s("781738"), t.exports = function(t) {
                return encodeURIComponent(t).replace(/[!'()*]/g, function(t) {
                    return "%" + t.charCodeAt(0).toString(16).toUpperCase()
                })
            }