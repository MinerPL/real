            var n = {
                "./spritesheet-emoji-32.png": "61469",
                "./spritesheet-emoji-40.png": "642437",
                "./spritesheet-emoji-48.png": "958327"
            };

            function l(e) {
                return i(s(e))
            }

            function s(e) {
                if (!i.o(n, e)) {
                    var t = Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }
                return n[e]
            }
            l.id = '"996542"', l.keys = function() {
                return Object.keys(n)
            }, l.resolve = s, e.exports = l