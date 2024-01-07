            "use strict";
            s.r(t), s.d(t, {
                default: function() {
                    return c
                }
            }), s("222007");
            var a = s("884691"),
                n = s("65597"),
                l = s("79112"),
                i = s("26092"),
                r = s("49111"),
                o = s("397336");
            let d = new Set(Object.values(o.ProfileCustomizationSubsection)),
                u = e => null != e && d.has(e);
            var c = () => {
                let e = (0, n.default)([i.default], () => {
                        let e = i.default.getSubsection();
                        return u(e) ? e : o.ProfileCustomizationSubsection.USER_PROFILE
                    }),
                    t = a.useCallback(t => {
                        e !== t && l.default.setSection(r.UserSettingsSections.PROFILE_CUSTOMIZATION, t)
                    }, [e]);
                return {
                    subsection: e,
                    setSubsection: t
                }
            }