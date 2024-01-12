            "use strict";
            n.r(t), n.d(t, {
                getSearchOptionAnswer: function() {
                    return E
                },
                setIncludeNSFW: function() {
                    return _
                },
                getSearchQueryFromTokens: function() {
                    return h
                },
                getSelectionScope: function() {
                    return T
                },
                getAutocompleteMode: function() {
                    return S
                },
                getFlattenedStringArray: function() {
                    return p
                },
                getTotalResults: function() {
                    return R
                },
                getQueryFromTokens: function() {
                    return g
                },
                tokenizeQuery: function() {
                    return I
                },
                clearTokenCache: function() {
                    return m
                },
                showDatePicker: function() {
                    return N
                },
                filterHasAnswer: function() {
                    return C
                },
                refreshSearchTokens: function() {
                    return y
                }
            }), n("222007"), n("808653");
            var r = n("917351"),
                l = n.n(r),
                a = n("76385"),
                s = n("955513"),
                u = n("247013"),
                o = n("697218"),
                i = n("299039"),
                c = n("49111"),
                d = n("782340");

            function E(e) {
                switch (e) {
                    case c.SearchTokenTypes.FILTER_FROM:
                        return d.default.Messages.SEARCH_ANSWER_FROM;
                    case c.SearchTokenTypes.FILTER_MENTIONS:
                        return d.default.Messages.SEARCH_ANSWER_MENTIONS;
                    case c.SearchTokenTypes.FILTER_HAS:
                        return d.default.Messages.SEARCH_ANSWER_HAS;
                    case c.SearchTokenTypes.FILTER_BEFORE:
                    case c.SearchTokenTypes.FILTER_ON:
                    case c.SearchTokenTypes.FILTER_AFTER:
                        return d.default.Messages.SEARCH_ANSWER_DATE;
                    case c.SearchTokenTypes.FILTER_IN:
                        return d.default.Messages.SEARCH_ANSWER_IN;
                    case c.SearchTokenTypes.FILTER_FILE_TYPE:
                        return d.default.Messages.SEARCH_ANSWER_FILE_TYPE;
                    case c.SearchTokenTypes.FILTER_FILE_NAME:
                        return d.default.Messages.SEARCH_ANSWER_FILE_NAME;
                    case c.SearchTokenTypes.FILTER_PINNED:
                        return d.default.Messages.SEARCH_ANSWER_BOOLEAN
                }
            }
            let f = {
                [c.SearchTokenTypes.FILTER_BEFORE]: !0,
                [c.SearchTokenTypes.FILTER_AFTER]: !0,
                [c.SearchTokenTypes.FILTER_ON]: !0
            };

            function _(e, t) {
                if (u.default.didAgree(t)) {
                    let t = o.default.getCurrentUser();
                    null != t && (e.include_nsfw = null == t.nsfwAllowed || t.nsfwAllowed)
                }
            }

            function h(e) {
                let t = {};
                for (let [n, r] of(e.forEach(e => {
                        let {
                            type: n
                        } = e;
                        if (c.IS_SEARCH_FILTER_TOKEN.test(n)) return;
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_BEFORE:
                            case c.SearchTokenTypes.ANSWER_ON:
                            case c.SearchTokenTypes.ANSWER_AFTER:
                                let r = e.getData("start"),
                                    l = e.getData("end");
                                r && (t.min_id = i.default.fromTimestamp(r)), l && (t.max_id = i.default.fromTimestamp(l));
                                return
                        }
                        let a = function(e) {
                            let t = s.default[e],
                                n = null != t ? t.queryKey : null;
                            return null == n && (n = "content"), n
                        }(n);
                        null == t[a] && (t[a] = new Set);
                        let u = t[a];
                        switch (n) {
                            case c.SearchTokenTypes.ANSWER_USERNAME_FROM:
                            case c.SearchTokenTypes.ANSWER_USERNAME_MENTIONS:
                                u.add(e.getData("userId"));
                                break;
                            case c.SearchTokenTypes.ANSWER_FILE_TYPE:
                            case c.SearchTokenTypes.ANSWER_FILE_NAME:
                                u.add(e.getMatch(1));
                                break;
                            case c.SearchTokenTypes.ANSWER_IN:
                                u.add(e.getData("channel").id);
                                break;
                            case c.SearchTokenTypes.ANSWER_HAS:
                                u.add(e.getData("has"));
                                break;
                            case c.SearchTokenTypes.ANSWER_PINNED:
                                u.add(e.getData("pinned"));
                                break;
                            default:
                                u.add(e.getFullMatch().trim())
                        }
                    }), Object.entries(t))) r instanceof Set && (t[n] = Array.from(r));
                return t.content && (t.content = t.content.join(" ").trim(), !t.content && delete t.content), t
            }

            function T(e, t, n) {
                let r, l;
                let a = e.find((a, s) => t >= a.start && t <= a.end && n >= a.start && n <= a.end ? (null != e[s + 1] && (l = e[s + 1]), !0) : (r = a, !1));
                return null == a ? null : {
                    previousToken: r,
                    currentToken: a,
                    nextToken: l,
                    focusOffset: t,
                    anchorOffset: n
                }
            }

            function S(e, t) {
                let n;
                e = null != e ? e : {};
                let {
                    currentToken: r,
                    nextToken: l,
                    previousToken: s
                } = e;
                if (0 === t.length) return {
                    type: c.SearchPopoutModes.EMPTY,
                    filter: null,
                    token: null
                };
                if (null == r) return {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: null
                };
                if (c.IS_SEARCH_FILTER_TOKEN.test(r.type)) {
                    if (null == l || l.type === a.default.NON_TOKEN_TYPE) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: r.type,
                        token: l
                    };
                    if (null != l && !c.IS_SEARCH_ANSWER_TOKEN.test(l.type)) return {
                        type: c.SearchPopoutModes.FILTER,
                        filter: r.type,
                        token: null
                    }
                }
                return r.type === a.default.NON_TOKEN_TYPE && null != s && c.IS_SEARCH_FILTER_TOKEN.test(s.type) ? {
                    type: c.SearchPopoutModes.FILTER,
                    filter: s.type,
                    token: r
                } : (r.type === a.default.NON_TOKEN_TYPE && (n = r), {
                    type: c.SearchPopoutModes.FILTER_ALL,
                    filter: null,
                    token: n
                })
            }

            function p(e, t) {
                let n = [];
                return l(e).forEach(e => {
                    if (null == e || 0 === e.results.length) return;
                    let r = e.group;
                    n = n.concat(e.results.map(e => {
                        let n = e.text;
                        if (t === c.SearchPopoutModes.FILTER_ALL) {
                            var l;
                            r = null !== (l = e.group) && void 0 !== l ? l : r;
                            let t = s.default[r];
                            (null == t ? void 0 : t.key) != null && (null == t ? void 0 : t.key) !== "" && (n = "".concat(t.key, " ").concat(n))
                        }
                        return n
                    }))
                }), n.filter(e => e)
            }

            function R(e) {
                return e.reduce((e, t) => null == t ? e : t.results.length + e, 0)
            }

            function g(e) {
                return null == e ? "" : e.map(e => e.getFullMatch()).join("")
            }
            let A = new a.default;

            function I(e) {
                return A.tokenize(e)
            }

            function m() {
                return A.clearCache()
            }

            function N(e) {
                return null != e ? f[e] : null
            }

            function C(e, t) {
                let n = c.IS_SEARCH_FILTER_TOKEN.test(e.type);
                return (null != t || !n) && (null == t || !n || !!c.IS_SEARCH_ANSWER_TOKEN.test(t.type)) && !0
            }

            function y() {
                (0, s.refreshSearchTokens)(), A.reset(), l(s.default).forOwn((e, t) => A.addRule({
                    type: t,
                    ...e
                }))
            }