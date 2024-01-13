            "use strict";
            n.r(t), n.d(t, {
                getRandomDateShortcut: function() {
                    return b
                },
                ComponentTypes: function() {
                    return l
                },
                refreshSearchTokens: function() {
                    return Y
                },
                getFilterAutocompletions: function() {
                    return z
                },
                default: function() {
                    return q
                }
            }), n("222007"), n("843762");
            var l, r, a = n("448105"),
                s = n.n(a),
                u = n("917351"),
                o = n.n(u),
                i = n("866227"),
                c = n.n(i),
                d = n("923959"),
                E = n("27618"),
                f = n("744983"),
                _ = n("18494"),
                T = n("162771"),
                h = n("102985"),
                S = n("697218"),
                p = n("25292"),
                R = n("655518"),
                g = n("158998"),
                A = n("49111"),
                I = n("782340");

            function N() {
                return new Set(c.months().map(e => e.toLowerCase()))
            }

            function m() {
                return new Set(c.weekdays().map(e => e.toLowerCase()))
            }

            function C() {
                let e = new Date().getFullYear();
                return new Set(o.range(2015, e + 1).map(e => e.toString()))
            }

            function y(e, t) {
                return [e, e.clone().add(1, t)]
            }

            function M(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = c().startOf(e).add(t, e);
                return y(n, e)
            }

            function v(e, t, n) {
                let l = c(e, t).local();
                return y(l, n)
            }

            function L() {
                return {
                    [I.default.Messages.SEARCH_SHORTCUT_TODAY]: () => M("day"),
                    [I.default.Messages.SEARCH_SHORTCUT_YESTERDAY]: () => M("day", -1),
                    [I.default.Messages.SEARCH_SHORTCUT_WEEK]: () => M("week"),
                    [I.default.Messages.SEARCH_SHORTCUT_MONTH]: () => M("month"),
                    [I.default.Messages.SEARCH_SHORTCUT_YEAR]: () => M("year")
                }
            }
            let F = RegExp("(?:\\s*(".concat("([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})", "|").concat("([0-9]{4})-([0-9]{1,2})", "|").concat("\\d{4}", "|").concat("([^\\d\\s]+)", "))"), "i"),
                H = RegExp("\\s*(true|false)", "i");

            function O(e) {
                return "".concat(e, ":")
            }

            function k(e) {
                return RegExp(O(e), "i")
            }

            function w(e) {
                let t;
                let n = e.getMatch(1),
                    l = e => null != e ? null == e ? void 0 : e.id : null;
                return null != (t = A.ID_REGEX.test(n) ? n : n === A.ME ? l(S.default.getCurrentUser()) : null != e.getMatch(4) ? l(S.default.findByTag(e.getMatch(4))) : l(S.default.findByTag(e.getMatch(2), e.getMatch(3)))) && (e.setData("userId", t), !0)
            }

            function D(e, t) {
                let n, l;
                let r = e.getFullMatch().trim().toLowerCase(),
                    a = L()[r];
                null != a ? [n, l] = a() : N().has(r) ? [n, l] = v(r, "MMMM", "month") : m().has(r) ? [n, l] = v(r, "dddd", "day") : C().has(r) ? [n, l] = v(r, "YYYY", "year") : [n, l] = v(r, A.SEARCH_DATE_FORMAT, "day");
                let s = n.isValid() && l.isValid();
                return !!s && ("before" === t ? (l = n, n = null) : "after" === t && (n = l, l = null), e.setData("start", n), e.setData("end", l), !0)
            }

            function x(e) {
                let t = e.getMatch(1),
                    n = T.default.getGuildId(),
                    l = d.default.getChannels(n)[d.GUILD_SELECTABLE_CHANNELS_KEY].concat(d.default.getChannels(n)[d.GUILD_VOCAL_CHANNELS_KEY]),
                    r = d.default.getTextChannelNameDisambiguations(n),
                    a = o.chain(l).map(e => {
                        let {
                            channel: t
                        } = e;
                        return t
                    }).find(e => {
                        var n, l;
                        return t === (null !== (l = null === (n = r[e.id]) || void 0 === n ? void 0 : n.name) && void 0 !== l ? l : e.name)
                    }).value();
                return null != a && (e.setData("channel", a), !0)
            }

            function U(e) {
                let t = {
                    [I.default.Messages.SEARCH_ANSWER_HAS_LINK]: "link",
                    [I.default.Messages.SEARCH_ANSWER_HAS_EMBED]: "embed",
                    [I.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT]: "file",
                    [I.default.Messages.SEARCH_ANSWER_HAS_VIDEO]: "video",
                    [I.default.Messages.SEARCH_ANSWER_HAS_IMAGE]: "image",
                    [I.default.Messages.SEARCH_ANSWER_HAS_SOUND]: "sound",
                    [I.default.Messages.SEARCH_ANSWER_HAS_STICKER]: "sticker"
                } [e.getMatch(1)];
                return null != t && "" !== t && (e.setData("has", t), !0)
            }

            function W() {
                return [...Array.from(N()), ...Array.from(m()), ...Array.from(C()), ...Object.keys(L())]
            }

            function b() {
                return o.sample(W())
            }

            function j(e, t, n) {
                return P(e, t, W()).map(e => ({
                    ...e,
                    group: n,
                    key: "".concat(n, "-").concat(e.text)
                }))
            }

            function P(e, t, n) {
                let l = e.toLocaleLowerCase();
                return o(n).filter(e => s(l, e.toLocaleLowerCase())).take(t).map(e => ({
                    text: e
                })).value()
            }

            function G(e, t) {
                let n, l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10,
                    r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    a = f.default.getSearchType(t);
                e = e.split("#")[0];
                let s = {
                    query: e,
                    limit: l,
                    request: r
                };
                switch (a) {
                    case A.SearchTypes.GUILD:
                        n = p.default.queryGuildUsers({
                            ...s,
                            guildId: t
                        });
                        break;
                    case A.SearchTypes.CHANNEL:
                        n = p.default.queryChannelUsers({
                            ...s,
                            channelId: t
                        });
                        break;
                    case A.SearchTypes.DMS:
                        n = p.default.queryUsers(e, l, !0, r, () => !0);
                        break;
                    default:
                        return []
                }
                return n.filter(e => {
                    let {
                        record: t
                    } = e;
                    return !E.default.isBlocked(t.id)
                }).map(e => {
                    let {
                        record: t
                    } = e;
                    return {
                        text: g.default.getUserTag(t),
                        user: t
                    }
                })
            }

            function B() {
                return f.default.getSearchType() === A.SearchTypes.GUILD
            }

            function Z() {
                return !h.default.hidePersonalInformation
            }
            let V = /^(?:\s*(\d{17,20}|@me|([^@#:]+)#([0-9]{4})|([a-z0-9_.]{2,32})))/i;
            (r = l || (l = {})).FILTER = "FILTER", r.ANSWER = "ANSWER";
            let K = {};

            function Y() {
                Object.assign(K, function() {
                    let e = [I.default.Messages.SEARCH_ANSWER_HAS_LINK, I.default.Messages.SEARCH_ANSWER_HAS_EMBED, I.default.Messages.SEARCH_ANSWER_HAS_ATTACHMENT, I.default.Messages.SEARCH_ANSWER_HAS_VIDEO, I.default.Messages.SEARCH_ANSWER_HAS_IMAGE, I.default.Messages.SEARCH_ANSWER_HAS_SOUND, I.default.Messages.SEARCH_ANSWER_HAS_STICKER];
                    return {
                        [A.SearchTokenTypes.FILTER_FROM]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_FROM),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_FROM),
                            plainText: I.default.Messages.SEARCH_FILTER_FROM,
                            validator: Z,
                            getAutocompletions: G
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_FROM]: {
                            follows: [A.SearchTokenTypes.FILTER_FROM],
                            regex: V,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "author_id"
                        },
                        [A.SearchTokenTypes.FILTER_MENTIONS]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_MENTIONS),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_MENTIONS),
                            plainText: I.default.Messages.SEARCH_FILTER_MENTIONS,
                            validator: Z,
                            getAutocompletions: G
                        },
                        [A.SearchTokenTypes.ANSWER_USERNAME_MENTIONS]: {
                            follows: [A.SearchTokenTypes.FILTER_MENTIONS],
                            regex: V,
                            validator: w,
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "mentions"
                        },
                        [A.SearchTokenTypes.FILTER_HAS]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_HAS),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_HAS),
                            plainText: I.default.Messages.SEARCH_FILTER_HAS,
                            getAutocompletions: (t, n, l) => P(t, l, e)
                        },
                        [A.SearchTokenTypes.ANSWER_HAS]: {
                            regex: RegExp("(?:\\s*-?(".concat(e.map(e => R.default.escape(e)).join("|"), "))"), "i"),
                            follows: [A.SearchTokenTypes.FILTER_HAS],
                            validator: U,
                            componentType: "ANSWER",
                            queryKey: "has"
                        },
                        [A.SearchTokenTypes.FILTER_FILE_TYPE]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            key: O(I.default.Messages.SEARCH_FILTER_FILE_TYPE),
                            plainText: I.default.Messages.SEARCH_FILTER_FILE_TYPE,
                            componentType: "FILTER"
                        },
                        [A.SearchTokenTypes.ANSWER_FILE_TYPE]: {
                            regex: /(?:\s*([^\s]+))/,
                            follows: [A.SearchTokenTypes.FILTER_FILE_TYPE],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_extensions"
                        },
                        [A.SearchTokenTypes.FILTER_FILE_NAME]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_FILE_NAME),
                            key: O(I.default.Messages.SEARCH_FILTER_FILE_NAME),
                            plainText: I.default.Messages.SEARCH_FILTER_FILE_NAME,
                            componentType: "FILTER"
                        },
                        [A.SearchTokenTypes.ANSWER_FILE_NAME]: {
                            regex: /(?:\s*([^\s]+)(?=\s))/,
                            follows: [A.SearchTokenTypes.FILTER_FILE_NAME],
                            mutable: !0,
                            componentType: "ANSWER",
                            queryKey: "attachment_filename"
                        },
                        [A.SearchTokenTypes.FILTER_BEFORE]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_BEFORE),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_BEFORE),
                            plainText: I.default.Messages.SEARCH_FILTER_BEFORE,
                            getAutocompletions: (e, t, n) => j(e, n, A.SearchTokenTypes.FILTER_BEFORE)
                        },
                        [A.SearchTokenTypes.FILTER_ON]: {
                            regex: k("(".concat(I.default.Messages.SEARCH_FILTER_ON, "|").concat(I.default.Messages.SEARCH_FILTER_DURING, ")")),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_DURING),
                            plainText: I.default.Messages.SEARCH_FILTER_DURING,
                            getAutocompletions: (e, t, n) => j(e, n, A.SearchTokenTypes.FILTER_ON)
                        },
                        [A.SearchTokenTypes.FILTER_AFTER]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_AFTER),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_AFTER),
                            plainText: I.default.Messages.SEARCH_FILTER_AFTER,
                            getAutocompletions: (e, t, n) => j(e, n, A.SearchTokenTypes.FILTER_AFTER)
                        },
                        [A.SearchTokenTypes.ANSWER_BEFORE]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_BEFORE],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "before")
                        },
                        [A.SearchTokenTypes.ANSWER_ON]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_ON],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "on")
                        },
                        [A.SearchTokenTypes.ANSWER_AFTER]: {
                            regex: F,
                            follows: [A.SearchTokenTypes.FILTER_AFTER],
                            componentType: "ANSWER",
                            mutable: !0,
                            validator: e => D(e, "after")
                        },
                        [A.SearchTokenTypes.FILTER_IN]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_IN),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_IN),
                            plainText: I.default.Messages.SEARCH_FILTER_IN,
                            validator: B,
                            getAutocompletions(e, t, n) {
                                "#" === e[0] && (e = e.substring(1));
                                let l = p.default.queryChannels({
                                    query: e,
                                    type: d.GUILD_SELECTABLE_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                }).concat(p.default.queryChannels({
                                    query: e,
                                    type: d.GUILD_VOCAL_CHANNELS_KEY,
                                    guildId: t,
                                    limit: 1 / 0
                                })).map(e => {
                                    let {
                                        record: t
                                    } = e;
                                    return t
                                }).filter(e => !e.isThread());
                                if ("" === e.trim()) {
                                    let e = _.default.getChannelId(t),
                                        n = l.find(t => t.id === e);
                                    null != n && (l.splice(l.indexOf(n), 1), l.unshift(n))
                                }
                                let r = d.default.getTextChannelNameDisambiguations(t);
                                return o(l).take(n).map(e => {
                                    var t, n;
                                    return {
                                        text: "".concat(null !== (n = null === (t = r[e.id]) || void 0 === t ? void 0 : t.name) && void 0 !== n ? n : e.name),
                                        channel: e
                                    }
                                }).value()
                            }
                        },
                        [A.SearchTokenTypes.ANSWER_IN]: {
                            regex: /(?:\s*#?([^ ]+))/i,
                            mutable: !0,
                            follows: [A.SearchTokenTypes.FILTER_IN],
                            componentType: "ANSWER",
                            validator: x,
                            queryKey: "channel_id"
                        },
                        [A.SearchTokenTypes.FILTER_PINNED]: {
                            regex: k(I.default.Messages.SEARCH_FILTER_PINNED),
                            componentType: "FILTER",
                            key: O(I.default.Messages.SEARCH_FILTER_PINNED),
                            plainText: I.default.Messages.SEARCH_FILTER_PINNED,
                            getAutocompletions: () => [{
                                text: "true"
                            }, {
                                text: "false"
                            }]
                        },
                        [A.SearchTokenTypes.ANSWER_PINNED]: {
                            regex: H,
                            componentType: "ANSWER",
                            follows: [A.SearchTokenTypes.FILTER_PINNED],
                            queryKey: "pinned",
                            validator: e => {
                                let t = e.getMatch(1);
                                return "true" === t ? (e.setData("pinned", !0), !0) : "false" === t && (e.setData("pinned", !1), !0)
                            }
                        }
                    }
                }())
            }

            function z(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Object.keys(K).length,
                    n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return o(K).keys().filter(e => A.IS_SEARCH_FILTER_TOKEN.test(e)).filter(e => null != K[e].key).map(e => ({
                    token: e,
                    text: K[e].key
                })).filter(t => {
                    let {
                        token: l,
                        text: r
                    } = t;
                    return n ? s(e.toLowerCase(), r) : K[l].plainText === e.toLowerCase()
                }).take(t).value()
            }
            var q = K