            "use strict";
            n.r(t), n.d(t, {
                useStickerSuggestionResults: function() {
                    return S
                },
                useTextChangeHandler: function() {
                    return g
                }
            }), n("222007"), n("424973");
            var l = n("884691"),
                i = n("483366"),
                r = n.n(i),
                o = n("446674"),
                s = n("866353"),
                a = n("467094"),
                u = n("256860"),
                d = n("364685"),
                c = n("697218"),
                f = n("25292"),
                p = n("117362"),
                m = n("171209"),
                h = n("721423");
            let E = (0, p.promiseThrottle)(a.fetchStickerPacks, h.REQUEST_THROTTLE_DURATION_MS),
                S = (e, t, n) => {
                    let i = (0, u.useHasSendableSticker)(n),
                        r = (0, o.useStateFromStores)([c.default], () => c.default.getCurrentUser()),
                        a = l.useMemo(() => {
                            let l = (0, m.getQueriesFromUserInput)(e);
                            if (t || null == e || "" === e || l.length > h.MAX_NUM_USER_INPUT_WORDS || !i) return [];
                            let o = [],
                                a = [],
                                u = (0, m.removePunctuation)(e),
                                d = u === l[0] ? l : [u, ...l],
                                c = f.default.queryStickers(d, !1);
                            c.forEach(e => {
                                let {
                                    sticker: t
                                } = e, l = (0, s.getStickerSendability)(t, r, n), i = {
                                    sticker: t,
                                    sendability: l
                                };
                                l === s.StickerSendability.SENDABLE ? o.push(i) : l === s.StickerSendability.SENDABLE_WITH_PREMIUM && a.push(i)
                            });
                            let p = [];
                            return o.length > 0 && (p = o.slice(0, h.MAX_NUM_SUGGESTED_STICKERS), 0 !== a.length && (p.length === h.MAX_NUM_SUGGESTED_STICKERS && p.pop(), p.push(a[0]))), p
                        }, [e, n, i, t, r]);
                    return a
                },
                g = e => {
                    let {
                        setTextInputValue: t,
                        setHasDismissed: n,
                        setHasSelection: i,
                        setFocusedSuggestionType: o,
                        delayBeforeSuggestions: s
                    } = e, a = l.useRef(null), u = l.useRef(!1), c = l.useRef(!1), f = l.useMemo(() => r(t, null != s ? s : h.DELAY_BEFORE_SUGGESTIONS_MS), [t, s]), p = async e => {
                        var l;
                        if (null == e || "" === e) f.cancel(), null == t || t(""), null == n || n(!1), null == i || i(!1), null == o || o(null), a.current = null, u.current = !1;
                        else if (!u.current && e.trim() !== (null === (l = a.current) || void 0 === l ? void 0 : l.trim())) {
                            if (a.current = e, (0, m.getQueriesFromUserInput)(e).length > h.MAX_NUM_USER_INPUT_WORDS) {
                                u.current = !0, f.cancel(), t("");
                                return
                            }
                            if (!0 === c.current) return;
                            !d.default.hasLoadedStickerPacks && (c.current = !0, await E(), c.current = !1), f(a.current)
                        }
                    };
                    return {
                        handleTextChange: p,
                        debouncedSetTextInputValue: f
                    }
                }