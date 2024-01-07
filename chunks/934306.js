            "use strict";
            let i;
            n.r(t), n.d(t, {
                isOnNewPanels: function() {
                    return I
                },
                useOnNewPanels: function() {
                    return C
                },
                isSplitMessagesTab: function() {
                    return v
                },
                isSplitMessagesTabAndOnMessagesTab: function() {
                    return A
                },
                shouldHandleNewPanelsRoute: function() {
                    return R
                }
            });
            var r = n("95410"),
                s = n("650033"),
                a = n("362391"),
                o = n("760190"),
                l = n("21121"),
                u = n("699145"),
                c = n("98443"),
                d = n("680992"),
                f = n("264325"),
                E = n("18108"),
                h = n("491246"),
                p = n("49111");
            let _ = {
                    autoTrackExposure: !1
                },
                S = {
                    location: "isSplitMessagesTab"
                },
                m = {
                    location: "isOnNewPanels"
                },
                T = {
                    location: "useOnNewPanels"
                };

            function g(e) {
                (0, E.updateIsInNewPanels)(e), i !== e && (r.default.set("isOnNewPanels", e), i = e)
            }

            function I() {
                return (0, l.isInMainTabsExperiment)() ? s.default.get("new_panels") ? (g(!0), !0) : o.default.hasLoadedExperiments || void 0 === i ? u.MainTabsV2OnePercentExperimentExistingUsers.getCurrentConfig(m, _).showPanels || u.MainTabsV2OnePercentExperimentNewUsers.getCurrentConfig(m, _).showPanels || (0, c.getNavPeekExperimentConfig)(m, _).showNewPanels || (0, d.getNavNotifTabExperiment)(m, _).showNewPanels || (0, f.isTabsUIEnabledManually)() ? (g(!0), !0) : (g(!1), !1) : i : (g(!1), !1)
            }

            function C() {
                let e = (0, l.useInMainTabsExperiment)(),
                    t = (0, a.default)("new_panels"),
                    n = (0, c.useNavPeekExperiment)(T, _).showNewPanels,
                    i = (0, d.getNavNotifTabExperiment)(T, _).showNewPanels,
                    r = u.MainTabsV2OnePercentExperimentExistingUsers.useExperiment(T, _).showPanels,
                    s = u.MainTabsV2OnePercentExperimentNewUsers.useExperiment(T, _).showPanels,
                    o = (0, f.useIsTabsUIEnabledManually)();
                return e && (t || n || i || r || s || o)
            }

            function v() {
                if (!(0, l.isInMainTabsExperiment)()) return !1;
                let {
                    showNewPanels: e
                } = (0, c.getNavPeekExperimentConfig)(S, _), {
                    showNewPanels: t
                } = (0, d.getNavNotifTabExperiment)(S, _);
                return !!(e || t || !I() || s.default.get("panels_split_messages_tab") || u.MainTabsV2OnePercentExperimentExistingUsers.getCurrentConfig(S, _).showPanels || u.MainTabsV2OnePercentExperimentNewUsers.getCurrentConfig(S, _).showPanels || (0, f.isTabsUIEnabledManually)()) || !1
            }

            function A() {
                if (!v()) return !1;
                let e = (0, h.default)();
                return (null == e ? void 0 : e.name) === "messages"
            }

            function R(e) {
                return !!I() && (!v() || null != e && e !== p.ME)
            }