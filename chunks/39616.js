            "use strict";
            n.r(s), n.d(s, {
                default: function() {
                    return o
                }
            });
            var i = n("484026");
            let r = new i.default(function(e) {
                {
                    let s = n("952110").emojiTermsImporter[e];
                    return void 0 !== s ? s().then(e => e.default) : Promise.resolve({})
                }
            });
            var o = {
                setEmojiLocale: function(e) {
                    r.setParams(e)
                },
                getTermsForEmoji: function(e) {
                    let s = r.get();
                    return void 0 !== s ? s[e] : []
                }
            }