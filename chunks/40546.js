            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var a = n("37983");
            n("884691");
            var s = n("446674"),
                i = n("77078"),
                l = n("139321"),
                r = n("269596"),
                o = n("745633"),
                u = n("11056"),
                d = n("447621"),
                c = n("782340"),
                E = n("763065"),
                f = e => {
                    let {
                        handleCategorySelect: t,
                        shouldDisplaySelectedCategory: n,
                        currentCategoryId: f
                    } = e, _ = (0, s.useStateFromStores)([r.default], () => r.default.hasHotspot(l.HotspotLocations.HUB_NEW));
                    return (0, a.jsx)(u.default, {
                        avatar: (0, a.jsx)(o.default, {}),
                        name: c.default.Messages.HUB_SCHOOL_HUBS,
                        focusProps: {
                            offset: {
                                right: 4,
                                top: 1,
                                bottom: 1
                            }
                        },
                        onClick: () => {
                            t(d.DISCORD_HUB_ID), (0, l.hideHotspot)(l.HotspotLocations.HUB_NEW)
                        },
                        wrapContent: !0,
                        selected: n && d.DISCORD_HUB_ID === f,
                        className: E.categoryItem,
                        selectedClassName: E.selectedCategoryItem,
                        innerClassName: E.itemInner,
                        children: _ && (0, a.jsx)("div", {
                            className: E.new,
                            children: (0, a.jsx)(i.Text, {
                                color: "none",
                                variant: "text-xs/semibold",
                                className: E.newText,
                                children: c.default.Messages.NEW
                            })
                        })
                    }, d.DISCORD_HUB_ID)
                }