            "use strict";
            n.r(t), n.d(t, {
                textMarkupPatternWithExclusions: function() {
                    return r
                },
                default: function() {
                    return o
                }
            });
            var s = n("132710"),
                i = n.n(s);
            let r = e => new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)")),
                a = {
                    ...i.defaultRules.text,
                    match: (0, s.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
                };
            var o = a