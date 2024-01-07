            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            }), n("222007");
            var a = n("37983"),
                s = n("884691"),
                i = n("414456"),
                l = n.n(i),
                r = n("446674"),
                o = n("77078"),
                u = n("630086"),
                d = n("736964"),
                c = n("901582"),
                E = n("206230"),
                f = n("347272"),
                _ = n("27618"),
                h = n("545429"),
                C = n("471671"),
                T = n("810567"),
                I = n("791878"),
                S = n("637824"),
                N = n("146378"),
                A = n("709410"),
                m = n("411676"),
                p = n("86959"),
                g = n("748753"),
                R = n("144521"),
                O = n("59678"),
                L = n("49111"),
                v = n("782340"),
                M = n("112082"),
                P = function(e) {
                    let {
                        sectionFilter: t,
                        titleId: n
                    } = e, {
                        rows: i,
                        section: P
                    } = (0, r.useStateFromStoresObject)([h.default], () => h.default.getState()), D = (0, r.useStateFromStores)([C.default], () => C.default.isFocused()), y = (0, r.useStateFromStores)([_.default], () => _.default.getRelationshipCount()), x = (0, I.useIsClearIncomingFriendRequestsEnabled)(), [b, U] = s.useState(() => {
                        let e = {};
                        for (let t of Object.values(L.FriendsSections)) e[t] = "";
                        return e
                    }), G = s.useCallback(e => {
                        U({
                            ...b,
                            [t]: e
                        })
                    }, [b, t]), j = s.useCallback(() => {
                        U({
                            ...b,
                            [t]: ""
                        })
                    }, [b, t]), k = i.filter(t, b[t]);
                    if (0 === k.length && "" === b[t]) return (0, a.jsxs)("div", {
                        className: M.emptyStateContainer,
                        children: [t === L.FriendsSections.ONLINE && (0, a.jsx)(f.default, {}), (0, a.jsx)(A.default, {
                            type: t,
                            onClick: () => {
                                u.default.setSection(L.FriendsSections.ADD_FRIEND)
                            }
                        }, P)]
                    });
                    let w = 0 === k.length && "" !== b[t],
                        F = k.filter(e => e.type === L.RelationshipTypes.PENDING_INCOMING).length,
                        B = t === L.FriendsSections.PENDING && F > 0,
                        H = B && x && F >= O.MINIMUM_PENDING_INCOMING_COUNT_FOR_CLEAR_ALL;
                    return (0, a.jsxs)(c.default, {
                        section: L.AnalyticsSections.FRIENDS_LIST,
                        children: [(0, a.jsx)(T.default, {
                            className: l(M.searchBar, w ? M.searchEmptyState : null),
                            query: b[t],
                            onChange: G,
                            onClear: j,
                            size: T.default.Sizes.MEDIUM
                        }), t === L.FriendsSections.ONLINE && "" === b[t] && (0, a.jsx)(f.default, {}), (0, a.jsxs)("div", {
                            className: M.sectionTitle,
                            children: [(0, a.jsx)(g.default, {
                                id: n,
                                title: function(e, t) {
                                    switch (e) {
                                        case L.FriendsSections.ONLINE:
                                            return v.default.Messages.FRIENDS_ONLINE_HEADER.format({
                                                online: t.toString()
                                            });
                                        case L.FriendsSections.PENDING:
                                            return v.default.Messages.FRIENDS_PENDING_HEADER.format({
                                                count: t.toString()
                                            });
                                        case L.FriendsSections.SUGGESTIONS:
                                            return v.default.Messages.FRIENDS_FRIEND_SUGGESTIONS_HEADER.format({
                                                count: t.toString()
                                            });
                                        case L.FriendsSections.BLOCKED:
                                            return v.default.Messages.FRIENDS_BLOCKED_HEADER.format({
                                                count: t.toString()
                                            });
                                        default:
                                            return v.default.Messages.FRIENDS_ALL_HEADER.format({
                                                count: t.toString()
                                            })
                                    }
                                }(t, k.length)
                            }), H && (0, a.jsx)(o.Button, {
                                look: o.ButtonLooks.LINK,
                                color: o.ButtonColors.LINK,
                                className: M.clearButton,
                                size: o.Button.Sizes.TINY,
                                onClick: e => {
                                    e.stopPropagation(), d.default.confirmClearPendingRelationships(F)
                                },
                                "aria-label": v.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON,
                                children: v.default.Messages.CLEAR_INCOMING_REQUESTS_BUTTON
                            })]
                        }), w ? (0, a.jsx)("div", {
                            className: M.emptyStateContainer,
                            children: (0, a.jsx)(A.default, {
                                type: A.FriendsSearchStatus.SECTION_NO_RESULTS
                            }, P)
                        }) : (0, a.jsx)(p.default, {
                            relationshipCount: y,
                            statusSections: [k],
                            renderRow: function(e) {
                                switch (t) {
                                    case L.FriendsSections.BLOCKED:
                                        return (0, a.jsx)(S.default, {
                                            ...e,
                                            isFocused: D
                                        });
                                    case L.FriendsSections.PENDING:
                                        return (0, a.jsx)(m.default, {
                                            ...e,
                                            isFocused: D
                                        });
                                    case L.FriendsSections.SUGGESTIONS:
                                        return (0, a.jsx)(R.default, {
                                            ...e,
                                            isFocused: D
                                        });
                                    case L.FriendsSections.ONLINE:
                                    case L.FriendsSections.ALL:
                                    default:
                                        return (0, a.jsx)(N.default, {
                                            ...e,
                                            isFocused: D
                                        })
                                }
                            },
                            sectionFilter: t,
                            searchQuery: b[t],
                            useReducedMotion: E.default.useReducedMotion
                        })]
                    })
                }