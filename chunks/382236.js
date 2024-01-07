            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return L
                }
            }), n("222007"), n("511434"), n("313619"), n("654714"), n("287168"), n("956660"), n("506083");
            var s, a, l = n("37983"),
                r = n("884691"),
                i = n("730290"),
                o = n("391679"),
                u = n("446674"),
                d = n("872717"),
                c = n("95410"),
                f = n("77078"),
                E = n("913144"),
                h = n("437822"),
                _ = n("229353"),
                m = n("271938"),
                g = n("599110"),
                p = n("672630"),
                A = n("49111"),
                T = n("332204");
            let R = "mweb_handoff_nonce",
                I = "mweb_handoff_nonce_expiration";
            (a = s || (s = {})).NONCE_MISSING = "nonce_missing", a.NONCE_EXPIRED = "nonce_expired", a.NULL_HANDOFF_TOKEN = "deep_link_failed", a.HANDOFF_EXCHANGE = "handoff_exchange";
            let N = new Set(["nonce_missing", "nonce_expired", "handoff_exchange"]),
                S = new Set(["deep_link_failed"]),
                C = () => {
                    c.default.remove(R), c.default.remove(I)
                };
            var L = () => {
                let e = (0, u.useStateFromStores)([m.default], () => m.default.getFingerprint()),
                    {
                        fingerprint: t,
                        handoff_token: n
                    } = (0, i.parse)(window.location.search),
                    s = Array.isArray(t) ? t.length > 1 ? t[0] : null : t,
                    a = null != s ? s : null !== e ? e : void 0;
                r.useEffect(() => {
                    null !== s && e !== s && E.default.dispatch({
                        type: "FINGERPRINT",
                        fingerprint: s
                    })
                }, [s, e]);
                let [L, M] = r.useState(null), O = r.useCallback(e => {
                    M(e), g.default.track(A.AnalyticEvents.MOBILE_WEB_HANDOFF_FAILURE, {
                        reason: e,
                        fingerprint: (0, o.maybeExtractId)(a)
                    }, {
                        fingerprint: a
                    })
                }, [M, a]), x = c.default.get(R);
                if ("null" === n && null === L && O("deep_link_failed"), null != n && "null" !== n && null == x && null === L && O("nonce_missing"), r.useEffect(() => {
                        if (null != x) {
                            let e = c.default.get(I);
                            (null == e || Date.now() >= e) && (O("nonce_expired"), C())
                        }
                    }, [x, O]), r.useEffect(() => {
                        null != n && "null" !== n && null != x && null == L && d.default.post({
                            url: A.Endpoints.HANDOFF_EXCHANGE,
                            body: {
                                key: x,
                                handoff_token: n
                            }
                        }).then(e => h.default.loginToken(e.body.token, !1)).then(() => {
                            g.default.track(A.AnalyticEvents.LOGIN_SUCCESSFUL, {
                                source: A.LoginSuccessfulSources.MOBILE_WEB_HANDOFF,
                                is_new_user: !1,
                                fingerprint: (0, o.maybeExtractId)(a)
                            });
                            let e = new URL(window.location.href),
                                t = new URLSearchParams(e.search);
                            t.delete("handoff_token"), t.delete("fingerprint"), e.search = t.toString(), window.history.pushState(null, "", e)
                        }).catch(() => {
                            O("handoff_exchange")
                        }).finally(() => {
                            C()
                        })
                    }, [n, x, L, a, O]), null == a) return null;
                let v = (() => {
                        if (null == L) return (0, l.jsxs)(l.Fragment, {
                            children: [_.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_1, (0, l.jsx)("br", {}), _.MOBILE_WEB_HANDOFF_EXPLANATION_TEXT_LINE_2]
                        });
                        if (S.has(L)) return _.MOBILE_WEB_HANDOFF_ERROR_NO_TRY_AGAIN;
                        if (N.has(L)) return _.MOBILE_WEB_HANDOFF_ERROR_TRY_AGAIN
                    })(),
                    D = null != L && S.has(L);
                return D ? (0, l.jsx)("div", {
                    className: T.errorContainer,
                    children: (0, l.jsx)(f.Text, {
                        color: "interactive-normal",
                        variant: "text-sm/semibold",
                        children: v
                    })
                }) : (0, l.jsxs)("div", {
                    className: T.container,
                    children: [(0, l.jsx)(f.Text, {
                        variant: "text-sm/semibold",
                        children: v
                    }), (0, l.jsx)(f.Button, {
                        look: f.Button.Looks.INVERTED,
                        color: f.Button.Colors.BRAND_NEW,
                        onClick: () => {
                            let e = p.default.generateNonce();
                            c.default.set(R, e), c.default.set(I, Date.now() + 6e4);
                            let t = new URL(A.MOBILE_WEB_HANDOFF_DEEP_LINK),
                                n = new URLSearchParams(window.location.search);
                            n.delete("fingerprint"), n.delete("handoff_token");
                            let s = new URLSearchParams;
                            s.set("redirect", encodeURIComponent(window.location.pathname + n.toString())), s.set("key", e), s.set("fingerprint", a), t.search = s.toString(), g.default.track(A.AnalyticEvents.DEEP_LINK_CLICKED, {
                                fingerprint: (0, o.maybeExtractId)(a),
                                source: "mobile_web_handoff",
                                destination: A.MOBILE_WEB_HANDOFF_DEEP_LINK
                            }, {
                                fingerprint: a,
                                flush: !0
                            }), window.location.href = t.toString()
                        },
                        children: (0, l.jsx)(f.Text, {
                            className: T.buttonText,
                            variant: "text-sm/semibold",
                            children: _.MOBILE_WEB_HANDOFF_BUTTON_TEXT
                        })
                    })]
                })
            }