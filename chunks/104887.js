            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("65597"),
                s = n("599110"),
                i = n("544556"),
                l = n("822825"),
                r = n("922832"),
                o = n("49111"),
                u = () => {
                    let e = (0, a.default)([l.default], () => l.default.getSelectedTab());
                    return {
                        selectedTab: e,
                        handleTabChange: e => {
                            i.default.selectTab(e), s.default.track(o.AnalyticEvents.FAMILY_CENTER_ACTION, {
                                action: r.FamilyCenterAction.TabChange,
                                tab: e
                            })
                        }
                    }
                }