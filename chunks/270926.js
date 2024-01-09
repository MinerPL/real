            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var i = n("132710"),
                a = n.n(i);
            let l = /\n$/,
                s = {
                    ...a.defaultRules.heading,
                    requiredFirstCharacters: [" ", "#"],
                    match: (e, t, n) => t.allowHeading ? null == n || "" === n || null != n.match(l) ? (0, i.anyScopeRegex)(/^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/)(e, t, n) : null : null
                };
            var r = s