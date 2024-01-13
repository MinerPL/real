            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return G
                }
            }), l("222007");
            var i = l("917351"),
                s = l.n(i),
                n = l("866227"),
                a = l.n(n),
                r = l("446674"),
                u = l("862337"),
                d = l("913144"),
                o = l("569272"),
                c = l("560208"),
                E = l("671484"),
                _ = l("659632"),
                f = l("49111");
            let S = {},
                C = {},
                h = [],
                p = [],
                m = [],
                I = new Set,
                g = {},
                T = {},
                v = new Set;

            function O(e) {
                let t = E.default.createFromServer(e),
                    l = t.code;
                if (null != C[l]) C[l] = C[l].merge(t);
                else if (C[l] = t, null != t.expiresAt) {
                    let e = new u.Timeout;
                    S[l] = e,
                        function e(t) {
                            let l = C[t];
                            if (null == l || null == l.expiresAt) return;
                            let i = l.expiresAt.valueOf() - a().valueOf();
                            if (i <= 0) delete C[t], delete S[t], F.emitChange();
                            else {
                                let l = S[t];
                                if (null == l) return;
                                l.start(Math.min(2147483647, i), () => e(t))
                            }
                        }(l)
                }
            }

            function A(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (t && !v.has(e.channel_id)) return !1;
                let l = (0, _.isGiftCodeEmbed)(e) ? (0, _.findGiftCodes)((null == e ? void 0 : e.embeds) != null ? null == e ? void 0 : e.embeds[0].url : void 0) : (0, _.findGiftCodes)(e.content);
                return 0 !== l.length && (l.forEach(e => {
                    !h.includes(e) && !m.includes(e) && (D({
                        code: e
                    }), d.default.wait(() => o.default.resolveGiftCode(e, !1, !0).catch(f.NOOP_NULL)))
                }), !1)
            }

            function D(e) {
                let {
                    code: t
                } = e;
                !h.includes(t) && (h = [...h, t])
            }

            function x(e) {
                let {
                    message: t
                } = e;
                return A(t, !0)
            }

            function N(e) {
                let {
                    channelId: t,
                    messages: l
                } = e;
                v.add(t), l.forEach(e => A(e, !0))
            }

            function R(e) {
                let {
                    firstMessages: t
                } = e;
                if (null == t) return !1;
                null == t || t.forEach(e => A(e))
            }
            class b extends r.default.Store {
                get(e) {
                    let t = C[e];
                    return null == t || t.isExpired() ? null : t
                }
                getError(e) {
                    return null != e ? T[e] : null
                }
                getForGifterSKUAndPlan(e, t, l) {
                    return s.values(C).filter(i => i.userId === e && i.skuId === t && (null == l || i.subscriptionPlanId === l) && !i.isExpired())
                }
                getIsResolving(e) {
                    return h.includes(e)
                }
                getIsResolved(e) {
                    return m.includes(e)
                }
                getIsAccepting(e) {
                    return p.includes(e)
                }
                getUserGiftCodesFetchingForSKUAndPlan(e, t) {
                    return I.has((0, _.makeComboId)(e, t))
                }
                getUserGiftCodesLoadedAtForSKUAndPlan(e, t) {
                    return g[(0, _.makeComboId)(e, t)]
                }
                getResolvingCodes() {
                    return h
                }
                getResolvedCodes() {
                    return m
                }
                getAcceptingCodes() {
                    return p
                }
            }
            b.displayName = "GiftCodeStore";
            let F = new b(d.default, {
                CONNECTION_OPEN: function() {
                    return v.clear(), !1
                },
                CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null != t && v.add(t), !1
                },
                GIFT_CODE_RESOLVE: D,
                GIFT_CODE_RESOLVE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    return h = h.filter(e => e !== t.code), !m.includes(t.code) && (m = [...m, t.code]), O(t)
                },
                GIFT_CODE_RESOLVE_FAILURE: function(e) {
                    let {
                        code: t
                    } = e;
                    h = h.filter(e => e !== t), !m.includes(t) && (m = [...m, t])
                },
                GIFT_CODE_REDEEM: function(e) {
                    let {
                        code: t
                    } = e;
                    !p.includes(t) && (p = [...p, t])
                },
                GIFT_CODE_REDEEM_SUCCESS: function(e) {
                    let {
                        code: t
                    } = e;
                    p = p.filter(e => e !== t);
                    let l = C[t];
                    null != l && (C[t] = l.merge({
                        redeemed: !0,
                        uses: l.uses + 1
                    }))
                },
                GIFT_CODE_REDEEM_FAILURE: function(e) {
                    let {
                        code: t,
                        error: l
                    } = e;
                    p = p.filter(e => e !== t);
                    let i = C[t];
                    if (T[t] = l, null != i) switch (l.code) {
                        case f.AbortCodes.UNKNOWN_GIFT_CODE:
                            C[t] = i.set("revoked", !0);
                            break;
                        case f.AbortCodes.INVALID_GIFT_REDEMPTION_EXHAUSTED:
                            C[t] = i.set("uses", i.maxUses)
                    }
                },
                GIFT_CODE_REVOKE_SUCCESS: function(e) {
                    let {
                        code: t
                    } = e;
                    delete C[t];
                    let l = S[t];
                    null != l && (l.stop(), delete S[t]), !m.includes(t) && (m = [...m, t])
                },
                GIFT_CODE_CREATE_SUCCESS: function(e) {
                    let {
                        giftCode: t
                    } = e;
                    O(t)
                },
                GIFT_CODES_FETCH: function(e) {
                    let {
                        skuId: t,
                        subscriptionPlanId: l
                    } = e;
                    I.add((0, _.makeComboId)(t, l))
                },
                GIFT_CODES_FETCH_SUCCESS: function(e) {
                    let {
                        giftCodes: t,
                        skuId: l,
                        subscriptionPlanId: i
                    } = e;
                    t.forEach(O);
                    let s = (0, _.makeComboId)(l, i);
                    g[s] = Date.now(), I.delete(s)
                },
                GIFT_CODES_FETCH_FAILURE: function(e) {
                    let {
                        skuId: t,
                        subscriptionPlanId: l
                    } = e;
                    I.delete((0, _.makeComboId)(t, l))
                },
                MESSAGE_CREATE: x,
                MESSAGE_UPDATE: x,
                LOCAL_MESSAGES_LOADED: N,
                LOAD_MESSAGES_SUCCESS: N,
                LOAD_MESSAGES_AROUND_SUCCESS: N,
                LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => A(e))
                },
                LOAD_PINNED_MESSAGES_SUCCESS: function(e) {
                    let {
                        messages: t
                    } = e;
                    t.forEach(e => A(e))
                },
                SEARCH_FINISH: function(e) {
                    e.messages.forEach(e => {
                        e.forEach(e => A(e))
                    })
                },
                GIFT_CODE_UPDATE: function(e) {
                    let {
                        uses: t,
                        code: l
                    } = e, i = C[l];
                    null != i && (C[l] = i.set("uses", Math.max(i.uses, t)))
                },
                GUILD_FEED_FETCH_SUCCESS: function(e) {
                    let {
                        data: t
                    } = e;
                    (0, c.getMessagesFromGuildFeedFetch)(t).forEach(e => A(e))
                },
                LOAD_THREADS_SUCCESS: R,
                LOAD_ARCHIVED_THREADS_SUCCESS: R,
                LOAD_FORUM_POSTS: function(e) {
                    let {
                        threads: t
                    } = e;
                    Object.values(t).map(e => {
                        let {
                            first_message: t
                        } = e;
                        return null != t && A(t)
                    })
                }
            });
            var G = F