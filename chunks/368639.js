            "use strict";
            n.r(t), n.d(t, {
                parseBioReact: function() {
                    return d
                },
                parseBioReactWithoutScrolling: function() {
                    return c
                }
            });
            var l = n("917351"),
                a = n.n(l),
                s = n("933805"),
                i = n("52140"),
                r = n("888198"),
                o = n("788554");
            let u = (0, o.default)([r.default.PROFILE_BIO_RULES, (0, i.default)({
                    enableBuildOverrides: !1
                })]),
                d = s.reactParserFor(u),
                c = s.reactParserFor((0, o.default)([a.omit(u, ["link", "url", "autolink", "customEmoji", "emoji", "commandMention"]), {
                    emoji: {
                        react: () => null
                    }
                }]))