            "use strict";
            n.r(t), n.d(t, {
                textMarkupPatternWithExclusions: function() {
                    return l
                },
                default: function() {
                    return r
                }
            });
            var i = n("463928"),
                a = n.n(i);
            let l = e => new RegExp("^[\\s\\S]+?(?=".concat(e, "|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)")),
                s = {
                    ...a.defaultRules.text,
                    match: (0, i.anyScopeRegex)(/^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/)
                };
            var r = s