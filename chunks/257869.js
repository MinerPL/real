            "use strict";
            n.r(t), n.d(t, {
                useGroupListingsFetchContext: function() {
                    return d
                },
                GroupListingsFetchContextProvider: function() {
                    return c
                }
            }), n("70102");
            var r = n("37983"),
                i = n("884691"),
                u = n("65597"),
                l = n("619443"),
                o = n("371358"),
                s = n("648825");
            let a = i.createContext(void 0);

            function d(e) {
                let t = i.useContext(a);
                if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
                let {
                    listingsLoaded: n,
                    fetchGroupListingsForGuild: r
                } = t;
                return r(), n
            }

            function c(e) {
                let {
                    guildId: t,
                    children: n,
                    refetchOnMount: d,
                    includeSoftDeleted: c,
                    countryCode: f,
                    dontFetchWhileTrue: h
                } = e, _ = (0, u.default)([l.default], () => l.default.isConnected()), C = (0, u.default)([s.default], () => null != t ? s.default.getSubscriptionGroupListingsForGuildFetchState(t) : s.FetchState.FETCHED), p = i.useRef(d), g = i.useCallback(() => {
                    if (null == t || !_ || !0 === h) return;
                    let e = s.default.getSubscriptionGroupListingsForGuildFetchState(t);
                    (p.current || e === s.FetchState.NOT_FETCHED) && (p.current = !1, o.fetchAllSubscriptionListingsDataForGuild(t, {
                        includeSoftDeleted: c,
                        countryCode: f
                    }))
                }, [_, t, c, f, h]), E = i.useMemo(() => C === s.FetchState.FETCHED && !0 !== p.current, [C, p]);
                return (0, r.jsx)(a.Provider, {
                    value: {
                        listingsLoaded: E,
                        fetchGroupListingsForGuild: g
                    },
                    children: n
                })
            }