            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return I
                }
            });
            var a = s("37983"),
                n = s("884691"),
                l = s("169456"),
                i = s("185709"),
                r = s("432107"),
                o = s("301341"),
                d = s("260928"),
                u = s("67310"),
                c = s("296416"),
                E = s("143460"),
                _ = s("782340"),
                T = s("452938");

            function I(e) {
                var t, s, I, S, N, g;
                let {
                    rule: f,
                    onChangeRule: A
                } = e, L = n.useCallback(e => {
                    A({
                        ...f,
                        triggerMetadata: {
                            ...f.triggerMetadata,
                            keywordFilter: e
                        }
                    })
                }, [A, f]), m = n.useCallback(e => {
                    A({
                        ...f,
                        triggerMetadata: {
                            ...f.triggerMetadata,
                            allowList: e
                        }
                    })
                }, [A, f]);
                return (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsxs)("div", {
                        className: T.cardContentsContainer,
                        children: [(0, a.jsxs)(u.default, {
                            step: 1,
                            header: _.default.Messages.GUILD_AUTOMOD_KEYWORD_FILTER_TRIGGER_HEADER,
                            children: [(0, a.jsx)(o.default, {
                                onChangeText: L,
                                maxWordCount: E.MAX_KEYWORDS_PER_KEYWORD_FILTER,
                                initialValue: null === (t = f.triggerMetadata) || void 0 === t ? void 0 : t.keywordFilter
                            }), (0, a.jsx)(r.default, {
                                rule: f,
                                onChangeRule: A,
                                collapsed: (null == f ? void 0 : null === (s = f.triggerMetadata) || void 0 === s ? void 0 : s.regexPatterns) == null || (null == f ? void 0 : null === (I = f.triggerMetadata) || void 0 === I ? void 0 : I.regexPatterns.length) === 0
                            }), (0, a.jsx)(l.default, {
                                onChange: m,
                                initialValue: null === (S = f.triggerMetadata) || void 0 === S ? void 0 : S.allowList,
                                maxWordCount: E.MAX_KEYWORDS_PER_ALLOWLIST_KEYWORD_FILTER_RULE,
                                collapsed: (null === (N = f.triggerMetadata) || void 0 === N ? void 0 : N.allowList) == null || (null === (g = f.triggerMetadata) || void 0 === g ? void 0 : g.allowList.length) === 0
                            })]
                        }), (0, a.jsx)(c.default, {
                            type: c.default.Type.ARROW_DOWN
                        }), (0, a.jsx)(u.default, {
                            step: 2,
                            header: _.default.Messages.GUILD_AUTOMOD_ACTIONS_HEADER,
                            children: (0, a.jsx)(i.default, {
                                rule: f,
                                onChangeRule: A
                            })
                        }), (0, a.jsx)(c.default, {
                            type: c.default.Type.CROSS
                        }), (0, a.jsx)(u.default, {
                            step: 3,
                            header: _.default.Messages.GUILD_AUTOMOD_EXEMPTION_HEADER,
                            children: (0, a.jsx)(d.default, {
                                rule: f,
                                onChangeRule: A
                            })
                        })]
                    })
                })
            }