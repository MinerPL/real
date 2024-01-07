            "use strict";
            var n = {
                isImage: function(t) {
                    return "image" === i(t)[0]
                },
                isJpeg: function(t) {
                    var e = i(t);
                    return n.isImage(t) && ("jpeg" === e[1] || "pjpeg" === e[1])
                }
            };

            function i(t) {
                return t.split("/")
            }
            t.exports = n