            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return f
                }
            });
            var a = s("37983");
            s("884691");
            var n = s("77078"),
                l = s("901582"),
                i = s("619935"),
                r = s("245187"),
                o = s("374023"),
                d = s("566126"),
                u = s("832837"),
                c = s("526995"),
                S = s("49111"),
                E = s("188338");

            function f() {
                let {
                    enabled: e
                } = o.default.useExperiment({
                    location: "UserSettingsInventory"
                }), t = (0, i.useBlockedPaymentsConfig)();
                return t ? (0, a.jsx)(r.BlockedPaymentsContentSettings, {}) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.default, {
                        section: S.AnalyticsSections.LIBRARY_INVENTORY_CODE_REDEMPTION,
                        children: (0, a.jsx)(d.default, {})
                    }), e && (0, a.jsx)(l.default, {
                        section: S.AnalyticsSections.QUESTS,
                        children: (0, a.jsx)(c.default, {})
                    }), (0, a.jsx)(n.FormDivider, {
                        className: E.divider
                    }), (0, a.jsx)(l.default, {
                        section: S.AnalyticsSections.LIBRARY_INVENTORY_GIFTS_LIST,
                        children: (0, a.jsx)(u.default, {})
                    })]
                })
            }