            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("37983");
            n("884691");
            var r = n("414456"),
                s = n.n(r),
                i = n("446674"),
                l = n("77078"),
                u = n("990766"),
                o = n("373469"),
                d = n("271938"),
                c = n("30672"),
                f = n("100844"),
                E = n("607391"),
                h = n("782340"),
                p = n("996810");
            let S = n("588281");

            function _(e) {
                let {
                    participant: t,
                    width: n,
                    noArt: r = !1,
                    selected: _ = !1
                } = e, C = n < 195, m = (0, i.useStateFromStores)([o.default, d.default], () => o.default.getAllActiveStreams().some(e => {
                    let {
                        ownerId: t
                    } = e;
                    return t !== d.default.getId()
                }));
                return (0, a.jsx)("div", {
                    className: s(p.content, p.streamHidden, {
                        [p.small]: C
                    }),
                    children: (0, a.jsx)(E.default, {
                        className: p.streamHiddenEmptyState,
                        artURL: S,
                        noArt: r,
                        selected: _,
                        size: (0, E.getSizeForWidth)(n),
                        header: C ? null : h.default.Messages.STREAM_HIDDEN,
                        description: _ ? null : (0, a.jsxs)("div", {
                            className: s(p.streamHiddenCTA, {
                                [p.largePaddingTop]: !C
                            }),
                            children: [(0, a.jsx)(f.CallTileCTA, {
                                isSmall: C,
                                children: (0, a.jsx)(l.Text, {
                                    variant: C ? "text-sm/semibold" : "text-md/semibold",
                                    color: "none",
                                    children: n < 175 ? h.default.Messages.WATCH : h.default.Messages.WATCH_STREAM
                                })
                            }), m ? (0, a.jsx)(f.CallTileCTA, {
                                className: p.addCTA,
                                tooltip: h.default.Messages.STREAM_WATCH_MULTIPLE_TOOLTIP,
                                onClick: e => {
                                    e.stopPropagation(), (0, u.watchStream)(t.stream, {
                                        forceMultiple: !0
                                    })
                                },
                                isSmall: C,
                                children: (0, a.jsx)(c.default, {
                                    className: p.addStreamIcon
                                })
                            }) : null]
                        })
                    })
                })
            }