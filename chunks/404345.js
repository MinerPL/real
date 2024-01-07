            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var l = n("37983"),
                i = n("884691"),
                r = n("685665"),
                o = n("563911"),
                s = n("587974"),
                a = n("599110"),
                u = n("49111"),
                d = n("646718"),
                c = n("782340"),
                f = n("104234"),
                p = e => {
                    let {
                        emojis: t
                    } = e, {
                        analyticsLocations: n
                    } = (0, r.default)();
                    i.useEffect(() => {
                        a.default.track(u.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
                            type: d.PremiumUpsellTypes.EMOJI_AUTOCOMPLETE_INLINE,
                            location_stack: n
                        })
                    }, [n]);
                    let p = (0, l.jsx)("div", {
                        className: f.emojis,
                        children: t.slice(0, 3).map((e, t) => {
                            if ("" === e.url) return null;
                            let n = (0, l.jsx)("div", {
                                className: f.emojiBackground,
                                children: (0, l.jsx)("img", {
                                    alt: e.name,
                                    className: f.emoji,
                                    src: e.url
                                })
                            }, e.id);
                            return 2 === t ? n : (0, l.jsx)(s.default, {
                                className: f.emojiMask,
                                mask: s.default.Masks.AUTOCOMPLETE_EMOJI_UPSELL_EMOJI,
                                children: n
                            }, e.id)
                        })
                    });
                    return (0, l.jsxs)(o.AutocompleteRowContent, {
                        className: f.upsell,
                        children: [(0, l.jsx)(o.AutocompleteRowContentPrimary, {
                            children: (0, l.jsx)(o.AutocompleteRowHeading, {
                                children: c.default.Messages.AUTOCOMPLETE_EMOJI_UPSELL.format({
                                    count: t.length
                                })
                            })
                        }), (0, l.jsx)(o.AutocompleteRowContentSecondary, {
                            children: p
                        })]
                    })
                }