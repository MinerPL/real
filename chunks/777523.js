            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            }), n("222007"), n("781738");
            var i = n("730290"),
                a = n("49111");
            let l = /-/g;

            function s(e) {
                let [, , t, n] = e.split("/"), s = null == t ? void 0 : t.toUpperCase().replace(l, "_"), r = null == n ? void 0 : n.toUpperCase().replace(l, "_");
                if (a.UserSettingsSections.hasOwnProperty(s) && (null == r || "" === r || a.UserSettingsSections.hasOwnProperty(r))) {
                    let {
                        source: e
                    } = (0, i.parse)(location.search);
                    return {
                        source: e,
                        section: a.UserSettingsSections[s],
                        subsection: r
                    }
                }
                return null
            }