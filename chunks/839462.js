            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            }), n("222007");
            var i = n("463928"),
                a = n.n(i),
                l = n("385976"),
                s = n("867805"),
                r = n("402671"),
                u = n("290689");
            let o = {
                s: {
                    requiredFirstCharacters: ["~"],
                    match: a.inlineRegex(/^~~([\s\S]+?)~~(?!_)/)
                },
                highlight: {
                    order: u.default.order,
                    match: () => null
                },
                emoji: {
                    order: u.default.order,
                    requiredFirstCharacters: [":"],
                    match(e) {
                        let t = s.default.EMOJI_NAME_AND_DIVERSITY_RE.exec(e);
                        return null != t && "" !== s.default.convertNameToSurrogate(t[1]) ? t : null
                    },
                    parse(e) {
                        let [t, n] = e, i = s.default.convertNameToSurrogate(n);
                        return null == i || "" === i ? {
                            type: "text",
                            content: t
                        } : {
                            name: ":".concat(n, ":"),
                            surrogate: i,
                            src: r.default.getURL(i)
                        }
                    }
                },
                customEmoji: {
                    order: a.defaultRules.codeBlock.order,
                    requiredFirstCharacters: ["<"],
                    match: e => /^<(a)?:(\w+):(\d+)>/.exec(e),
                    parse(e, t, n) {
                        let [i, a, s, r] = e, {
                            guildId: u
                        } = n, o = l.default.getDisambiguatedEmojiContext(u).getById(r), d = null == o || o.require_colons;
                        return null != o && (s = o.name), {
                            emojiId: r,
                            name: d ? ":".concat(s, ":") : s,
                            animated: "a" === a
                        }
                    }
                },
                text: {
                    parse(e) {
                        let t = s.default.findInlineEmojisFromSurrogates(e[0]),
                            n = 0;
                        return t.map(e => {
                            if ("text" === e.type) {
                                let t = {
                                    index: n,
                                    0: e.text
                                };
                                return n += e.text.length, {
                                    type: "text",
                                    content: e.text,
                                    originalMatch: t
                                }
                            } {
                                let t = {
                                    index: n,
                                    0: e.surrogate
                                };
                                return n += e.surrogate.length, {
                                    type: "emoji",
                                    name: e.emojiName,
                                    surrogate: e.surrogate,
                                    src: r.default.getURL(e.surrogate),
                                    originalMatch: t
                                }
                            }
                        })
                    }
                },
                looseEm: {
                    ...a.defaultRules.em,
                    match: a.inlineRegex(RegExp("^\\*(?=\\S)((?:\\*\\*|\\\\[\\s\\S]|\\s+(?:\\\\[\\s\\S]|[^\\s\\*\\\\]|\\*\\*)|[^\\s\\*\\\\])+?) {1,2}\\*(?!\\*)")),
                    parse: (e, t, n) => ({
                        type: "em",
                        content: t(e[1], n),
                        originalMatch: e
                    })
                }
            };
            var d = o