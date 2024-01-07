            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var r = n("884691"),
                i = n("79112"),
                l = n("685665"),
                u = n("929423");
            n("424562");
            var o = n("49111"),
                a = n("397336");

            function s(e) {
                let {
                    guild: t,
                    scrollPosition: n,
                    analyticsLocation: s,
                    analyticsLocations: c,
                    openWithoutBackstack: d = !1
                } = e, {
                    analyticsLocations: f
                } = (0, l.default)(), E = (0, r.useCallback)(() => {
                    null != t && (0, u.initGuildIdentitySettings)(t, null != c ? c : f), i.default.open(o.UserSettingsSections.PROFILE_CUSTOMIZATION, null != t ? a.ProfileCustomizationSubsection.GUILD : a.ProfileCustomizationSubsection.USER_PROFILE, {
                        scrollPosition: n,
                        analyticsLocation: s,
                        analyticsLocations: c,
                        openWithoutBackstack: d
                    })
                }, [t, n, s, c, d, f]);
                return E
            }