(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["44105"], {
        509007: function(e, t, r) {
            e.exports = function(e, t, r, n) {
                var u = -1,
                    a = null == e ? 0 : e.length;
                for (n && a && (r = e[++u]); ++u < a;) r = t(r, e[u], u, e);
                return r
            }
        },
        270281: function(e, t, r) {
            e.exports = function(e) {
                return e.split("")
            }
        },
        698555: function(e, t, r) {
            var n = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
            e.exports = function(e) {
                return e.match(n) || []
            }
        },
        300437: function(e, t, r) {
            e.exports = function(e) {
                return function(t) {
                    return null == e ? void 0 : e[t]
                }
            }
        },
        389832: function(e, t, r) {
            var n = r("890022");
            e.exports = function(e, t, r) {
                var u = e.length;
                return r = void 0 === r ? u : r, !t && r >= u ? e : n(e, t, r)
            }
        },
        568410: function(e, t, r) {
            var n = r("389832"),
                u = r("488605"),
                a = r("907193"),
                o = r("890305");
            e.exports = function(e) {
                return function(t) {
                    var r = u(t = o(t)) ? a(t) : void 0,
                        i = r ? r[0] : t.charAt(0),
                        l = r ? n(r, 1).join("") : t.slice(1);
                    return i[e]() + l
                }
            }
        },
        864979: function(e, t, r) {
            var n = r("509007"),
                u = r("109129"),
                a = r("787191"),
                o = RegExp("['’]", "g");
            e.exports = function(e) {
                return function(t) {
                    return n(a(u(t).replace(o, "")), e, "")
                }
            }
        },
        954328: function(e, t, r) {
            var n = r("300437"),
                u = n({
                    À: "A",
                    Á: "A",
                    Â: "A",
                    Ã: "A",
                    Ä: "A",
                    Å: "A",
                    à: "a",
                    á: "a",
                    â: "a",
                    ã: "a",
                    ä: "a",
                    å: "a",
                    Ç: "C",
                    ç: "c",
                    Ð: "D",
                    ð: "d",
                    È: "E",
                    É: "E",
                    Ê: "E",
                    Ë: "E",
                    è: "e",
                    é: "e",
                    ê: "e",
                    ë: "e",
                    Ì: "I",
                    Í: "I",
                    Î: "I",
                    Ï: "I",
                    ì: "i",
                    í: "i",
                    î: "i",
                    ï: "i",
                    Ñ: "N",
                    ñ: "n",
                    Ò: "O",
                    Ó: "O",
                    Ô: "O",
                    Õ: "O",
                    Ö: "O",
                    Ø: "O",
                    ò: "o",
                    ó: "o",
                    ô: "o",
                    õ: "o",
                    ö: "o",
                    ø: "o",
                    Ù: "U",
                    Ú: "U",
                    Û: "U",
                    Ü: "U",
                    ù: "u",
                    ú: "u",
                    û: "u",
                    ü: "u",
                    Ý: "Y",
                    ý: "y",
                    ÿ: "y",
                    Æ: "Ae",
                    æ: "ae",
                    Þ: "Th",
                    þ: "th",
                    ß: "ss",
                    Ā: "A",
                    Ă: "A",
                    Ą: "A",
                    ā: "a",
                    ă: "a",
                    ą: "a",
                    Ć: "C",
                    Ĉ: "C",
                    Ċ: "C",
                    Č: "C",
                    ć: "c",
                    ĉ: "c",
                    ċ: "c",
                    č: "c",
                    Ď: "D",
                    Đ: "D",
                    ď: "d",
                    đ: "d",
                    Ē: "E",
                    Ĕ: "E",
                    Ė: "E",
                    Ę: "E",
                    Ě: "E",
                    ē: "e",
                    ĕ: "e",
                    ė: "e",
                    ę: "e",
                    ě: "e",
                    Ĝ: "G",
                    Ğ: "G",
                    Ġ: "G",
                    Ģ: "G",
                    ĝ: "g",
                    ğ: "g",
                    ġ: "g",
                    ģ: "g",
                    Ĥ: "H",
                    Ħ: "H",
                    ĥ: "h",
                    ħ: "h",
                    Ĩ: "I",
                    Ī: "I",
                    Ĭ: "I",
                    Į: "I",
                    İ: "I",
                    ĩ: "i",
                    ī: "i",
                    ĭ: "i",
                    į: "i",
                    ı: "i",
                    Ĵ: "J",
                    ĵ: "j",
                    Ķ: "K",
                    ķ: "k",
                    ĸ: "k",
                    Ĺ: "L",
                    Ļ: "L",
                    Ľ: "L",
                    Ŀ: "L",
                    Ł: "L",
                    ĺ: "l",
                    ļ: "l",
                    ľ: "l",
                    ŀ: "l",
                    ł: "l",
                    Ń: "N",
                    Ņ: "N",
                    Ň: "N",
                    Ŋ: "N",
                    ń: "n",
                    ņ: "n",
                    ň: "n",
                    ŋ: "n",
                    Ō: "O",
                    Ŏ: "O",
                    Ő: "O",
                    ō: "o",
                    ŏ: "o",
                    ő: "o",
                    Ŕ: "R",
                    Ŗ: "R",
                    Ř: "R",
                    ŕ: "r",
                    ŗ: "r",
                    ř: "r",
                    Ś: "S",
                    Ŝ: "S",
                    Ş: "S",
                    Š: "S",
                    ś: "s",
                    ŝ: "s",
                    ş: "s",
                    š: "s",
                    Ţ: "T",
                    Ť: "T",
                    Ŧ: "T",
                    ţ: "t",
                    ť: "t",
                    ŧ: "t",
                    Ũ: "U",
                    Ū: "U",
                    Ŭ: "U",
                    Ů: "U",
                    Ű: "U",
                    Ų: "U",
                    ũ: "u",
                    ū: "u",
                    ŭ: "u",
                    ů: "u",
                    ű: "u",
                    ų: "u",
                    Ŵ: "W",
                    ŵ: "w",
                    Ŷ: "Y",
                    ŷ: "y",
                    Ÿ: "Y",
                    Ź: "Z",
                    Ż: "Z",
                    Ž: "Z",
                    ź: "z",
                    ż: "z",
                    ž: "z",
                    Ĳ: "IJ",
                    ĳ: "ij",
                    Œ: "Oe",
                    œ: "oe",
                    ŉ: "'n",
                    ſ: "s"
                });
            e.exports = u
        },
        488605: function(e, t, r) {
            var n = RegExp("[\\u200d\ud800-\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");
            e.exports = function(e) {
                return n.test(e)
            }
        },
        899368: function(e, t, r) {
            var n = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
            e.exports = function(e) {
                return n.test(e)
            }
        },
        907193: function(e, t, r) {
            var n = r("270281"),
                u = r("488605"),
                a = r("152828");
            e.exports = function(e) {
                return u(e) ? a(e) : n(e)
            }
        },
        152828: function(e, t, r) {
            var n = "\ud800-\udfff",
                u = "[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",
                a = "\ud83c[\udffb-\udfff]",
                o = "[^" + n + "]",
                i = "(?:\ud83c[\udde6-\uddff]){2}",
                l = "[\ud800-\udbff][\udc00-\udfff]",
                f = "(?:" + u + "|" + a + ")?",
                d = "[\\ufe0e\\ufe0f]?",
                c = "(?:\\u200d(?:" + [o, i, l].join("|") + ")" + d + f + ")*",
                s = RegExp(a + "(?=" + a + ")|" + ("(?:" + [o + u + "?", u, i, l, "[" + n + "]"].join("|") + ")") + (d + f + c), "g");
            e.exports = function(e) {
                return e.match(s) || []
            }
        },
        711615: function(e, t, r) {
            var n = "\ud800-\udfff",
                u = "\\u2700-\\u27bf",
                a = "a-z\\xdf-\\xf6\\xf8-\\xff",
                o = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                i = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                l = "['’]",
                f = "[" + i + "]",
                d = "[" + a + "]",
                c = "[^" + n + i + "\\d+" + u + a + o + "]",
                s = "(?:\ud83c[\udde6-\uddff]){2}",
                E = "[\ud800-\udbff][\udc00-\udfff]",
                _ = "[" + o + "]",
                S = "(?:" + d + "|" + c + ")",
                C = "(?:" + l + "(?:d|ll|m|re|s|t|ve))?",
                p = "(?:" + l + "(?:D|LL|M|RE|S|T|VE))?",
                U = "(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\ud83c[\udffb-\udfff])?",
                R = "[\\ufe0e\\ufe0f]?",
                g = "(?:\\u200d(?:" + ["[^" + n + "]", s, E].join("|") + ")" + R + U + ")*",
                I = "(?:" + ["[" + u + "]", s, E].join("|") + ")" + (R + U + g),
                N = RegExp([_ + "?" + d + "+" + C + "(?=" + [f, _, "$"].join("|") + ")", "(?:" + _ + "|" + c + ")+" + p + "(?=" + [f, _ + S, "$"].join("|") + ")", _ + "?" + S + "+" + C, _ + "+" + p, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", I].join("|"), "g");
            e.exports = function(e) {
                return e.match(N) || []
            }
        },
        208302: function(e, t, r) {
            var n = r("863398"),
                u = r("864979")(function(e, t, r) {
                    return t = t.toLowerCase(), e + (r ? n(t) : t)
                });
            e.exports = u
        },
        863398: function(e, t, r) {
            var n = r("890305"),
                u = r("191986");
            e.exports = function(e) {
                return u(n(e).toLowerCase())
            }
        },
        109129: function(e, t, r) {
            var n = r("954328"),
                u = r("890305"),
                a = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                o = RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]", "g");
            e.exports = function(e) {
                return (e = u(e)) && e.replace(a, n).replace(o, "")
            }
        },
        191986: function(e, t, r) {
            var n = r("568410")("toUpperCase");
            e.exports = n
        },
        787191: function(e, t, r) {
            var n = r("698555"),
                u = r("899368"),
                a = r("890305"),
                o = r("711615");
            e.exports = function(e, t, r) {
                return (e = a(e), void 0 === (t = r ? void 0 : t)) ? u(e) ? o(e) : n(e) : e.match(t) || []
            }
        },
        578899: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                SimpleDeadchatPromptExperiment: function() {
                    return u
                }
            });
            var n = r("862205");
            let u = (0, n.createExperiment)({
                kind: "guild",
                id: "2023-08_deadchat_simple_prompt_guild",
                label: "Simple deadchat prompt",
                defaultConfig: {
                    triggerDeadchat: !1,
                    enableDeadchat: !1
                },
                treatments: [{
                    id: 0,
                    label: "Control",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !1
                    }
                }, {
                    id: 1,
                    label: "trigger deadchat upon connection open",
                    config: {
                        triggerDeadchat: !0,
                        enableDeadchat: !0
                    }
                }]
            })
        },
        127421: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchAllGuildMembers: function() {
                    return d
                }
            });
            var n = r("811022"),
                u = r("872717"),
                a = r("913144"),
                o = r("448993"),
                i = r("828434"),
                l = r("49111");
            let f = new n.default("MemberSafetyElasticSearch");
            async function d(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
                if (n > 3) throw Error("Unable to search guild members after max retries");
                let {
                    autoRetry: c = !0,
                    signal: s
                } = r;
                try {
                    var E;
                    let o = await u.default.post({
                        url: l.Endpoints.GUILD_MEMBER_SEARCH(e),
                        body: t,
                        signal: s
                    });
                    if (f.info("JANK searchAllGuildMembers", {
                            response: o
                        }), o.status === i.INDEXING_RESPONSE_CODE) {
                        if (null == o.body.retry_after) throw Error("Indexing response did not include retry_after");
                        if (!c) throw Error("Indexing response received but autoRetry is disabled");
                        return await a.default.dispatch({
                            type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_STILL_INDEXING",
                            guildId: e
                        }), await new Promise(e => setTimeout(e, 1e3 * o.body.retry_after)), d(e, t, r, n + 1)
                    }
                    return {
                        type: i.GuildMemberSearchResponseType.SUCCESSFUL_QUERY,
                        body: {
                            guild_id: (E = o.body).guild_id,
                            members: E.members,
                            page_result_count: E.page_result_count,
                            total_result_count: E.total_result_count
                        }
                    }
                } catch (t) {
                    let e = new o.APIError(t);
                    return f.info("JANK searchAllGuildMembers error", {
                        error: e
                    }), {
                        type: i.GuildMemberSearchResponseType.ERROR,
                        body: e
                    }
                }
            }
        },
        828434: function(e, t, r) {
            "use strict";
            var n, u;
            r.r(t), r.d(t, {
                INDEXING_RESPONSE_CODE: function() {
                    return a
                },
                GuildMemberSearchResponseType: function() {
                    return n
                }
            });
            let a = 202;
            (u = n || (n = {}))[u.SUCCESSFUL_QUERY = 1] = "SUCCESSFUL_QUERY", u[u.ERROR = 2] = "ERROR"
        },
        225982: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                searchGuildMembers: function() {
                    return l
                }
            });
            var n = r("811022"),
                u = r("913144"),
                a = r("127421"),
                o = r("828434");
            let i = new n.default("MemberSafetyGuildMemberSearchActionCreators");
            async function l(e, t, r) {
                let n = await (0, a.searchAllGuildMembers)(e, t, r);
                if (n.type === o.GuildMemberSearchResponseType.ERROR) throw n.body;
                let {
                    body: l
                } = n;
                i.info("JANK searchGuildMembers success", {
                    body: l
                }), u.default.dispatch({
                    type: "MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS",
                    guildId: e,
                    members: l.members,
                    page_result_count: l.page_result_count,
                    total_result_count: l.total_result_count
                })
            }
        },
        219115: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useIsMakingRequestV2: function() {
                    return D
                },
                useIsStillIndexingV2: function() {
                    return y
                },
                handleInitializeV2: function() {
                    return H
                },
                handleGuildDeleteV2: function() {
                    return T
                },
                handleSearchStateUpdateV2: function() {
                    return L
                },
                handlePaginationUpdateV2: function() {
                    return G
                },
                handleGuildMemberSearchSuccessV2: function() {
                    return M
                },
                handleGuildMemberSearchStillIndexingV2: function() {
                    return P
                }
            });
            var n, u, a, o, i = r("714617"),
                l = r.n(i),
                f = r("917351"),
                d = r("308503"),
                c = r("811022"),
                s = r("249654"),
                E = r("449008"),
                _ = r("691386"),
                S = r("770115"),
                C = r("490931"),
                p = r("225982"),
                U = r("178406");
            let R = new c.default("MemberSafetySearchManagerV2");

            function g(e) {
                return "guild_".concat(e)
            }

            function I(e) {
                return {
                    requestState: e,
                    abortController: null,
                    lastUpdated: Date.now(),
                    query: null,
                    cursor: null,
                    previousPagination: null
                }
            }(n = a || (a = {}))[n.FAILED = 0] = "FAILED", n[n.UNFETCHED = 1] = "UNFETCHED", n[n.PENDING = 2] = "PENDING", n[n.SUCCEEDED = 3] = "SUCCEEDED", n[n.STILL_INDEXING = 4] = "STILL_INDEXING";
            let N = (0, d.default)(e => ({}));

            function h(e, t) {
                let r = N.getState()[e];
                return null == r && (r = I(a.UNFETCHED)), r = {
                    ...r,
                    ...t
                }, N.setState(t => ({
                    ...t,
                    [e]: r
                })), r
            }

            function A(e) {
                return N.getState()[e]
            }

            function v(e) {
                let t = A(e);
                return null == t && h(e, t = I(a.UNFETCHED)), t
            }

            function b(e) {
                let t = A(e);
                null != t && h(e, {
                    requestState: a.SUCCEEDED,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }

            function x(e) {
                var t;
                let r = g(e);
                t = r, N.setState(e => {
                    let r = {
                        ...e
                    };
                    return delete r[t], r
                })
            }(u = o || (o = {}))[u.FIRST_PAGE_CHUNK = 0] = "FIRST_PAGE_CHUNK", u[u.CURRENT_SEARCH_CHUNK = 1] = "CURRENT_SEARCH_CHUNK", u[u.NEXT_SEARCH_CHUNK = 2] = "NEXT_SEARCH_CHUNK", u[u.PREVIOUS_SEARCH_CHUNK = 3] = "PREVIOUS_SEARCH_CHUNK";
            async function m(e) {
                var t, r, n, u;
                let i = U.default.getSearchStateByGuildId(e),
                    d = U.default.getPaginationStateByGuildId(e),
                    c = g(e),
                    I = v(c),
                    [N, x] = function(e, t, r) {
                        var n, u, a, i, l, f;
                        let d = function(e, t) {
                                var r;
                                let {
                                    currentPageChunkNumber: n,
                                    previousPageChunkNumber: u,
                                    nextPageChunkNumber: a
                                } = function(e) {
                                    let t = e.pageSize * e.currentPage,
                                        r = Math.floor(t / _.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        n = Math.floor(e.pageSize * (e.currentPage - 1) / _.DEFAULT_SEARCH_CHUNK_LIMIT),
                                        u = Math.floor(e.pageSize * (e.currentPage + 1) / _.DEFAULT_SEARCH_CHUNK_LIMIT);
                                    return {
                                        currentPageChunkNumber: r,
                                        previousPageChunkNumber: n,
                                        nextPageChunkNumber: u
                                    }
                                }(t), {
                                    previousPagination: i
                                } = v(g(e)), l = t.currentPage, f = null !== (r = null == i ? void 0 : i.currentPage) && void 0 !== r ? r : 0, d = U.default.getElasticSearchPaginationByGuildId(e);
                                switch (!0) {
                                    case null == d:
                                    case n === a && 0 === n:
                                        return o.FIRST_PAGE_CHUNK;
                                    case n === a && n === u:
                                        return o.CURRENT_SEARCH_CHUNK;
                                    case f < l && n < a:
                                        return o.NEXT_SEARCH_CHUNK;
                                    case f > l && n >= u:
                                        if (0 < n) return o.PREVIOUS_SEARCH_CHUNK;
                                        return o.FIRST_PAGE_CHUNK;
                                    default:
                                        return o.CURRENT_SEARCH_CHUNK
                                }
                            }(e, r),
                            c = U.default.getElasticSearchPaginationByGuildId(e);
                        switch (d) {
                            case o.FIRST_PAGE_CHUNK: {
                                let t = U.default.getLastCursorTimestamp(e);
                                return [null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: {
                                        guild_joined_at: t,
                                        user_id: s.default.fromTimestamp(t)
                                    }
                                }]
                            }
                            case o.CURRENT_SEARCH_CHUNK:
                                return [null !== (n = t.cursor) && void 0 !== n ? n : null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (u = t.cursor) && void 0 !== u ? u : void 0
                                }];
                            case o.NEXT_SEARCH_CHUNK:
                                return [null !== (a = null == c ? void 0 : c.after) && void 0 !== a ? a : null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    after: null !== (i = null == c ? void 0 : c.after) && void 0 !== i ? i : void 0
                                }];
                            case o.PREVIOUS_SEARCH_CHUNK:
                                return [null !== (l = null == c ? void 0 : c.before) && void 0 !== l ? l : null, {
                                    limit: _.DEFAULT_SEARCH_CHUNK_LIMIT,
                                    before: null !== (f = null == c ? void 0 : c.before) && void 0 !== f ? f : void 0
                                }];
                            default:
                                (0, E.assertNever)(d)
                        }
                    }(e, I, d);
                let m = (t = function(e) {
                    var t;
                    let r = {
                            or_query: {},
                            and_query: {}
                        },
                        {
                            query: n
                        } = e;
                    if (null != (t = n) && t.length > 1) {
                        let [e, t] = (0, S.splitQuery)(n);
                        e.length > 0 && (r.and_query.usernames = {
                            or_query: e
                        }), t.length > 0 && (r.and_query.user_id = {
                            or_query: t
                        })
                    }
                    let {
                        requireUnusualDmActivity: u,
                        requireCommunicationDisabled: a
                    } = e, o = {};
                    u && (o.unusual_dm_activity_until = {
                        range: {
                            gte: Date.now() - C.UNUSUAL_DM_COMPARISON_DELTA
                        }
                    }), a && (o.communication_disabled_until = {
                        range: {
                            gte: Date.now()
                        }
                    }), Object.keys(o).length > 0 && (r.or_query.safety_signals = o);
                    let {
                        selectedRoleIds: i
                    } = e;
                    return i.size > 0 && (r.and_query.role_ids = {
                        and_query: Array.from(i)
                    }), r
                }(i), null == (r = x) ? t : {
                    ...t,
                    ...r
                });
                if (function(e, t) {
                        let r = v(e);
                        return l(r.query, t)
                    }(c, m) && (0, f.isEqual)(N, I.cursor)) return;
                let D = function(e, t, r, n) {
                    var u;
                    let o = A(e);
                    return (null == o ? void 0 : o.requestState) === a.PENDING && (null === (u = o.abortController) || void 0 === u || u.abort()), h(e, {
                        requestState: a.PENDING,
                        abortController: new AbortController,
                        lastUpdated: Date.now(),
                        query: t,
                        cursor: r,
                        previousPagination: n
                    })
                }(c, m, N, d);
                try {
                    ;
                    if (R.info("Making member search request", {
                            query: D.query,
                            guildId: e
                        }), null == D.query) throw Error("Query is null");
                    await (0, p.searchGuildMembers)(e, D.query, {
                        signal: null !== (u = null === (n = D.abortController) || void 0 === n ? void 0 : n.signal) && void 0 !== u ? u : void 0
                    })
                } catch (e) {
                    if (-1 === e.code) return;
                    ! function(e) {
                        let t = A(e);
                        null != t && h(e, {
                            requestState: a.FAILED,
                            abortController: null,
                            lastUpdated: Date.now()
                        })
                    }(c);
                    return
                }
                b(c)
            }

            function D(e) {
                return N(t => {
                    var r;
                    let n = g(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === a.PENDING
                })
            }

            function y(e) {
                return N(t => {
                    var r;
                    let n = g(e);
                    return (null === (r = t[n]) || void 0 === r ? void 0 : r.requestState) === a.STILL_INDEXING
                })
            }

            function H(e) {
                let {
                    guildId: t
                } = e;
                x(t), m(t)
            }

            function T(e) {
                let {
                    guild: t
                } = e;
                x(t.id)
            }

            function L(e) {
                let {
                    guildId: t
                } = e;
                m(t)
            }

            function G(e) {
                let {
                    guildId: t
                } = e;
                m(t)
            }

            function M(e) {
                let {
                    guildId: t
                } = e, r = g(t);
                b(r)
            }

            function P(e) {
                let {
                    guildId: t
                } = e, r = g(t);
                h(r, {
                    requestState: a.STILL_INDEXING,
                    abortController: null,
                    lastUpdated: Date.now()
                })
            }
        }
    }
]);