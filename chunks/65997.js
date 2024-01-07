            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var l = n("37983");
            n("884691");
            var u = n("77078"),
                s = n("685665"),
                a = n("845579"),
                i = n("599110"),
                o = n("49111"),
                c = n("782340");

            function d() {
                let e = a.ExpressionSuggestionsEnabled.useSetting(),
                    {
                        analyticsLocations: t
                    } = (0, s.default)();
                return (0, l.jsx)(u.MenuCheckboxItem, {
                    id: "sticker-suggestions",
                    label: c.default.Messages.SUGGEST_STICKERS,
                    checked: e,
                    action: () => {
                        i.default.track(o.AnalyticEvents.STICKER_SUGGESTIONS_ENABLED_TOGGLED, {
                            enabled: !e,
                            location: {
                                object: o.AnalyticsObjects.CONTEXT_MENU
                            },
                            location_stack: t
                        }), a.ExpressionSuggestionsEnabled.updateSetting(!e)
                    }
                })
            }