            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("222007");
            var a = s("37983");
            s("884691");
            var n = s("446674"),
                l = s("77078"),
                i = s("139321"),
                r = s("36694"),
                o = s("945330"),
                d = s("810822");

            function u(e) {
                let {
                    hotspotLocation: t
                } = e, [s, u] = (0, n.useStateFromStoresArray)([i.HotspotStore], () => [i.HotspotStore.hasHotspot(t, !0), i.HotspotStore.getHotspotOverride(t)]);
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(l.FormItem, {
                        title: t,
                        className: d.hotspotSwitch,
                        children: [s ? (0, a.jsx)(l.TooltipContainer, {
                            className: d.iconContainer,
                            element: "span",
                            text: "Active",
                            children: (0, a.jsx)(r.default, {
                                className: d.checkmark
                            })
                        }) : (0, a.jsx)(l.TooltipContainer, {
                            className: d.iconContainer,
                            element: "span",
                            text: "Inactive",
                            children: (0, a.jsx)(o.default, {
                                className: d.xmark
                            })
                        }), (0, a.jsx)(l.SingleSelect, {
                            className: d.overrideSelect,
                            value: u,
                            options: [{
                                value: void 0,
                                label: "No Override"
                            }, {
                                value: !0,
                                label: "Force Active"
                            }, {
                                value: !1,
                                label: "Force Inactive"
                            }],
                            onChange: e => null != e ? (0, i.setHotspotOverride)(t, e) : (0, i.clearHotspotOverride)(t)
                        })]
                    }), (0, a.jsx)(l.FormDivider, {})]
                })
            }

            function c(e) {
                let {
                    className: t
                } = e;
                return (0, a.jsxs)(l.FormSection, {
                    title: "Hotspots",
                    tag: l.FormTitleTags.H1,
                    className: t,
                    children: [(0, a.jsx)(l.Text, {
                        className: d.helpText,
                        tag: "p",
                        variant: "text-sm/normal",
                        children: 'All the "hotspots" in app, and their current status. Use the select menu to override them on or off.'
                    }), Object.keys(i.HotspotLocations).sort((e, t) => e.localeCompare(t)).map(e => (0, a.jsx)(u, {
                        hotspotLocation: e
                    }, e))]
                })
            }