            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return y
                }
            });
            var l = n("37983"),
                a = n("884691"),
                s = n("446674"),
                i = n("151426"),
                r = n("789207"),
                o = n("590514"),
                u = n("84339"),
                d = n("519841"),
                c = n("787336"),
                f = n("699473"),
                E = n("845579"),
                h = n("42203"),
                _ = n("247013"),
                S = n("18494"),
                T = n("211248"),
                p = n("116320"),
                N = n("945330"),
                I = n("138217"),
                m = n("530686"),
                A = n("998530"),
                g = n("814744"),
                C = n("805614"),
                R = n("64318"),
                M = n("49111"),
                O = n("782340"),
                L = n("228146");
            let v = {
                offset: {
                    left: 4,
                    right: -12
                }
            };

            function D(e, t, n) {
                let l = t ? I.default.guildFilter : null,
                    a = t ? I.default.roleFilter : null,
                    s = t ? I.default.everyoneFilter : null,
                    i = null;
                null != e && null != l && (i = l === M.RecentMentionsFilters.ALL_SERVERS ? null : e.getGuildId()), r.default.fetchRecentMentions(n, M.MAX_MENTIONS_PER_FETCH, i, a, s)
            }

            function y(e) {
                let {
                    setTab: t,
                    onJump: n,
                    badgeState: f,
                    closePopout: E
                } = e, _ = (0, s.useStateFromStores)([h.default, S.default], () => h.default.getChannel(S.default.getChannelId())), {
                    messages: T,
                    hasMore: p,
                    loading: N,
                    guildFilter: m,
                    roleFilter: g,
                    everyoneFilter: C
                } = (0, s.useStateFromStoresObject)([I.default], () => ({
                    messages: I.default.getMentions(),
                    hasMore: I.default.hasMore,
                    loading: I.default.loading,
                    guildFilter: I.default.guildFilter,
                    roleFilter: I.default.roleFilter,
                    everyoneFilter: I.default.everyoneFilter
                })), v = (0, u.default)(m), y = (0, u.default)(g), x = (0, u.default)(C);
                a.useEffect(() => {
                    if (!I.default.hasLoadedEver) {
                        D(_, !0);
                        return
                    }(null != v && m !== v || null != y && g !== y || null != x && C !== x) && D(_, !0)
                }, [v, m, y, g, x, C, _, !0]);
                a.useEffect(() => {
                    d.AttachmentLinkRefreshExperiment.getCurrentConfig({
                        location: "mentions"
                    }).enabled && (null == T ? void 0 : T.some(c.messageHasExpiredAttachmentUrl)) && (r.default.clearMentions(), D(_, !0))
                }, []), a.useEffect(() => () => {
                    r.default.truncateMentions(M.MAX_MENTIONS_PER_FETCH)
                }, []);
                let U = a.useCallback(() => (0, l.jsx)(R.default, {
                    tab: i.InboxTab.MENTIONS,
                    setTab: t,
                    badgeState: f,
                    closePopout: E,
                    children: (0, l.jsx)(A.default, {})
                }), [!0, t, f, E]);
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsx)(o.default, {
                        className: L.recentMentionsPopout,
                        scrollerClassName: L.scroller,
                        onFetch: () => null,
                        onJump: n,
                        onCloseMessage: function(e) {
                            r.default.deleteRecentMention(e.id)
                        },
                        channel: _,
                        messages: T,
                        loading: N,
                        hasMore: p,
                        analyticsName: "Recent Mentions",
                        loadMore: function() {
                            let e = null != T && T.length > 0 ? T[T.length - 1].id : null;
                            D(_, !0, e)
                        },
                        canCloseAllMessages: !0,
                        renderHeader: U,
                        renderEmptyState: b,
                        renderMessage: P,
                        "aria-label": O.default.Messages.RECENT_MENTIONS,
                        listName: "recents"
                    })
                })
            }

            function x(e, t) {
                return [(0, l.jsx)(U, {
                    message: e,
                    gotoMessage: t
                }, e.id)]
            }

            function P(e, t) {
                return [(0, l.jsx)(U, {
                    message: e,
                    gotoMessage: t,
                    dismissible: !0
                }, e.id)]
            }

            function U(e) {
                let {
                    message: t,
                    gotoMessage: n,
                    dismissible: a
                } = e;
                if (null == t) return null;
                let s = h.default.getChannel(t.channel_id);
                if (null == s) return null;
                let i = _.default.didAgree(s.getGuildId()),
                    o = !!s.isNSFW() && !i;
                return (0, l.jsxs)("div", {
                    className: L.container,
                    children: [(0, l.jsx)(g.default, {
                        channel: s,
                        gotoChannel: n,
                        children: null != a ? (0, l.jsx)(T.default, {
                            className: L.closeButton,
                            tooltip: O.default.Messages.CLOSE,
                            color: T.CircleIconButtonColors.TERTIARY,
                            icon: (0, l.jsx)(N.default, {
                                width: 16,
                                height: 16
                            }),
                            onClick: () => r.default.deleteRecentMention(t.id)
                        }) : null
                    }), (0, l.jsxs)("div", {
                        className: L.messageContainer,
                        children: [(0, l.jsx)(m.default, {
                            className: L.jumpButton,
                            onJump: n
                        }), (0, l.jsx)(f.default, {
                            message: t,
                            channel: s,
                            className: L.message,
                            hideAccessories: o,
                            compact: E.MessageDisplayCompact.getSetting(),
                            animateAvatar: !1,
                            focusProps: v,
                            trackAnnouncementViews: !0
                        }, t.id)]
                    })]
                })
            }

            function b(e) {
                return (0, l.jsx)(C.default, {
                    Icon: p.default,
                    header: O.default.Messages.RECENT_MENTIONS_EMPTY_STATE_HEADER,
                    tip: O.default.Messages.RECENT_MENTIONS_EMPTY_STATE_TIP
                })
            }