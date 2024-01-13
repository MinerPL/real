            "use strict";
            t.r(n), t.d(n, {
                getLocationDataForEvent: function() {
                    return a
                }
            });
            var l = t("419830"),
                s = t("718550"),
                i = t("841363");

            function a(e, n) {
                let t, a;
                if (null == e) return null;
                let u = (0, i.getLocationFromEvent)(e);
                if (null != u) t = s.default, a = u;
                else {
                    if (null == n) return null;
                    t = (0, l.getSimpleChannelIconComponent)(n.type), a = n.name
                }
                return {
                    IconComponent: t,
                    locationName: a
                }
            }