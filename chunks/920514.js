            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return E
                }
            });
            var n = i("37983");
            i("884691");
            var l = i("414456"),
                s = i.n(l),
                a = i("45682"),
                r = i("788506"),
                o = i("695106"),
                u = i("974634"),
                c = i("115279"),
                d = i("958706"),
                f = i("431364"),
                E = e => {
                    let {
                        accessory: t,
                        pickerIntention: i,
                        headerClassName: l,
                        emojiListRef: E,
                        onKeyDown: m,
                        onFocus: I,
                        autoFocus: p,
                        searchBarRef: g,
                        hasTabWrapper: _,
                        diversitySurrogate: S,
                        isBurstReaction: h,
                        onBurstReactionToggle: C,
                        renderHeader: T
                    } = e, N = (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(u.default, {
                            emojiListRef: E,
                            gridNavigatorId: c.GRID_NAVIGATOR_ID,
                            onKeyDown: m,
                            className: f.searchBar,
                            ref: g,
                            isFullRow: i === d.EmojiIntention.COMMUNITY_CONTENT_ONLY,
                            onFocus: I,
                            autoFocus: p,
                            defaultSearchPlaceholder: (0, r.getSearchPlaceholder)(i, h)
                        }), i === d.EmojiIntention.REACTION ? (0, n.jsx)("div", {
                            className: f.burstToggle,
                            children: (0, n.jsx)(a.default, {
                                checked: h,
                                onClick: C
                            })
                        }) : null, i === d.EmojiIntention.COMMUNITY_CONTENT_ONLY ? null : null != t ? t : (0, n.jsx)(o.default, {
                            searchBarRef: g,
                            className: f.diversitySelector,
                            hasTabWrapper: _,
                            selectedSurrogate: S
                        })]
                    });
                    return (0, n.jsx)("div", {
                        className: s(f.header, l),
                        children: null != T ? T(N) : N
                    })
                }