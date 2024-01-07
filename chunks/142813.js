            "use strict";
            n.r(t), n.d(t, {
                searchQueryContainsBannedWord: function() {
                    return s
                }
            }), n("813006");
            var a = n("843455");
            let s = function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                return e.split(" ").some(e => a.DiscoveryBannedSearchWords.includes(e.toLowerCase()))
            }