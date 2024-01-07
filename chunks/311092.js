            "use strict";
            n.r(t), n.d(t, {
                DiscoveryTagStyle: function() {
                    return C
                },
                DiscoveryTags: function() {
                    return T
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("77078"),
                o = n("731898"),
                u = n("599110"),
                d = n("49111"),
                c = n("259160");
            let E = ["egirl", "egirls", "waifu", "dating", "nsfw", "sex", "playboy", "stupid", "harem", "playgirl", "shitcoin", "shitpost", "porno", "nudes", "sexy", "horny", "fart", "tits", "balls", "cum"],
                f = e => {
                    let {
                        text: t,
                        onClick: n,
                        className: s,
                        hide: i
                    } = e;
                    return (0, a.jsx)("li", {
                        className: l(c.tag, s, {
                            [c.hide]: i
                        }),
                        children: (0, a.jsx)(r.Clickable, {
                            className: c.tagText,
                            onClick: e => {
                                e.stopPropagation(), e.preventDefault(), n(e)
                            },
                            children: t
                        })
                    })
                },
                _ = e => {
                    let {
                        tags: t,
                        onTagClick: n,
                        guildId: i,
                        section: l
                    } = e;
                    return s.useEffect(() => {
                        u.default.track(d.AnalyticEvents.OPEN_POPOUT, {
                            type: "Discovery Tags Overflow",
                            guild_id: i,
                            location: {
                                page: d.AnalyticsPages.GUILD_DISCOVERY,
                                section: l
                            }
                        })
                    }, [i, l]), (0, a.jsx)(r.Dialog, {
                        className: c.overflowTagsPopout,
                        children: (0, a.jsx)("ul", {
                            children: t.map(e => (0, a.jsx)(f, {
                                onClick: () => n(e),
                                className: c.tagAlt,
                                text: e
                            }, e))
                        })
                    })
                },
                h = e => {
                    let {
                        className: t,
                        count: n
                    } = e;
                    return (0, a.jsx)(r.Popout, {
                        renderPopout: () => (0, a.jsx)(_, {
                            ...e
                        }),
                        position: "right",
                        align: "top",
                        closeOnScroll: !0,
                        children: e => (0, a.jsx)(f, {
                            className: t,
                            ...e,
                            text: "+".concat(n)
                        })
                    })
                },
                C = {
                    DEFAULT: c.tagDefault,
                    LIGHT: c.tagLight,
                    ALT: c.tagAlt
                },
                T = e => {
                    let {
                        tags: t,
                        onTagClick: n,
                        className: i,
                        discoveryTagStyle: r = C.DEFAULT,
                        hideOverflow: u = !1,
                        guildId: d,
                        section: _
                    } = e, {
                        ref: T,
                        width: I
                    } = (0, o.default)(), [S, N] = s.useState(null), A = t.filter(e => !E.includes(e.toLowerCase()));
                    return s.useLayoutEffect(() => {
                        if (null == T.current || null == I || 0 === I) return;
                        let e = 0,
                            t = 0,
                            n = I - 40 - 4;
                        for (let a = 0; a < A.length; a++) {
                            let s = T.current.children[a],
                                i = s.clientWidth;
                            if (t += i + 4, a === A.length - 1 ? t > n + 40 : t > n) break;
                            e++
                        }
                        N(t => e <= A.length ? e : t)
                    }, [I, T, A]), (0, a.jsxs)("ul", {
                        ref: T,
                        className: l(c.tagContainer, i, {
                            [c.invisible]: null == S
                        }),
                        children: [A.map((e, t) => (0, a.jsx)(f, {
                            className: r,
                            onClick: () => n(e),
                            hide: null != S && t >= S,
                            text: e
                        }, e)), !u && null != S && S < A.length && (0, a.jsx)(h, {
                            className: r,
                            onTagClick: n,
                            tags: A.slice(S),
                            count: A.length - S,
                            guildId: d,
                            section: _
                        })]
                    })
                }