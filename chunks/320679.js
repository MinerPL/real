            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            });
            var a = n("37983"),
                s = n("884691"),
                r = n("118810"),
                i = n("446674"),
                l = n("77078"),
                u = n("599110"),
                o = n("791776"),
                d = n("206230"),
                c = n("862013"),
                f = n("49111");

            function E(e) {
                var t;
                let n = e.ctrlKey || e.altKey || e.metaKey;
                if (n || e.keyCode !== f.KeyboardKeys.TAB || null == e.target) return;
                let {
                    target: a
                } = e, s = null === (t = (0, o.eventOwnerDocument)(e)) || void 0 === t ? void 0 : t.activeElement;
                (0, r.isElement)(a) && u.default.track(f.AnalyticEvents.KEYBOARD_SHORTCUT_USED, {
                    shortcut_name: "tab_navigation",
                    source_class_list: null != s ? Array.from(s.classList) : [],
                    location_object: a.tagName
                })
            }

            function h(e) {
                let {
                    children: t
                } = e, n = (0, i.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useReducedMotion,
                    rawValue: d.default.rawPrefersReducedMotion
                })), r = (0, i.useStateFromStoresObject)([d.default], () => ({
                    enabled: d.default.useForcedColors,
                    rawValue: d.default.systemForcedColors
                })), u = (0, i.useStateFromStores)([d.default], () => d.default.alwaysShowLinkDecorations), o = s.useMemo(() => ({
                    reducedMotion: n,
                    prefersCrossfades: !1,
                    forcedColors: r,
                    alwaysShowLinkDecorations: u
                }), [n, r, u]);
                return s.useEffect(() => ((0, c.insertAccessibilityLabelElements)(), window.addEventListener("keydown", E), () => window.removeEventListener("keydown", E)), []), (0, a.jsx)(l.AccessibilityPreferencesContext.Provider, {
                    value: o,
                    children: t
                })
            }