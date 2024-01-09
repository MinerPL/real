            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("917351"),
                s = n.n(a),
                l = n("270926"),
                i = n("888198"),
                r = n("367376");
            let o = s.omit(i.default.RULES, ["codeBlock", "heading"]),
                u = {
                    ...l.default,
                    parse: function(e, t, n) {
                        var a;
                        let s = l.default.parse(e, t, n),
                            i = null !== (a = n.initialHeaderLevel) && void 0 !== a ? a : 3,
                            r = Math.min(6, i + s.level);
                        return {
                            ...s,
                            level: r
                        }
                    }
                },
                d = r.default.combineAndInjectMentionRule(o, [r.default.createReactRules(r.default.defaultReactRuleOptions), {
                    header: u
                }]),
                c = r.default.reactParserFor(d);
            var f = c